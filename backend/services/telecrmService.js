/**
 * TeleCRM async API client.
 *
 * The only place in the codebase that talks to TeleCRM. Every function here is
 * failure-tolerant by design: a TeleCRM outage must never break a visitor's
 * form submission, so nothing throws and nothing blocks the HTTP response.
 *
 * Docs: https://docs.telecrm.in/async-api/overview
 */
const telecrm = require('../config/telecrm');

const REQUEST_TIMEOUT_MS = 10000;
const MAX_ATTEMPTS = 3;
const BACKOFF_MS = [1000, 3000]; // delay before attempt 2 and 3

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Normalise an Indian phone number to the digits-with-country-code format
 * TeleCRM expects, e.g. "+91 98765-43210" -> "919876543210".
 * Numbers that already carry a country code are left alone.
 */
function normalizePhone(phone) {
  if (!phone) return '';

  let digits = String(phone).replace(/\D/g, '');

  // Trunk prefix used when dialling domestically
  if (digits.length === 11 && digits.startsWith('0')) {
    digits = digits.slice(1);
  }

  // Bare 10-digit Indian mobile number
  if (digits.length === 10) {
    digits = `91${digits}`;
  }

  return digits;
}

/**
 * True when a failed attempt is worth retrying. Network errors, rate limiting
 * and server faults are transient; other 4xx responses mean the token or the
 * payload is wrong and retrying would just repeat the same failure.
 */
function isRetryable(status) {
  return status === null || status === 429 || status >= 500;
}

/**
 * POST a lead to TeleCRM with bounded retries.
 * Always resolves - never throws - with { ok, status, error }.
 */
async function pushLead(fields, actions = []) {
  if (!telecrm.enabled) {
    return { ok: false, status: null, error: 'TeleCRM not configured', skipped: true };
  }

  const body = JSON.stringify(actions.length ? { fields, actions } : { fields });
  let last = { ok: false, status: null, error: 'Unknown error' };

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    try {
      const response = await fetch(telecrm.url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${telecrm.token}`,
          'Content-Type': 'application/json',
        },
        body,
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      });

      if (response.ok) {
        // 200 means queued for background processing, not fully processed.
        return { ok: true, status: response.status, error: '' };
      }

      const text = await response.text().catch(() => '');
      last = {
        ok: false,
        status: response.status,
        error: `HTTP ${response.status}${text ? `: ${text.slice(0, 200)}` : ''}`,
      };

      if (!isRetryable(response.status)) return last;
    } catch (err) {
      last = { ok: false, status: null, error: err.message || 'Network error' };
    }

    if (attempt < MAX_ATTEMPTS) await sleep(BACKOFF_MS[attempt - 1]);
  }

  return last;
}

/**
 * Push a saved lead to TeleCRM and record the outcome on the document.
 *
 * Call this AFTER the HTTP response has been sent. The status write uses
 * updateOne so it can never trip model validation on an unrelated field.
 */
async function syncLead(Model, doc, fields) {
  const id = doc && doc._id;
  if (!id) return { ok: false, status: null, error: 'Missing lead id' };

  if (!telecrm.enabled) {
    await Model.updateOne({ _id: id }, { $set: { telecrmStatus: 'skipped' } }).catch(() => {});
    return { ok: false, status: null, error: 'TeleCRM not configured', skipped: true };
  }

  const result = await pushLead(fields);

  const update = result.ok
    ? { telecrmStatus: 'synced', telecrmSyncedAt: new Date(), telecrmError: '' }
    : { telecrmStatus: 'failed', telecrmError: result.error };

  try {
    await Model.updateOne({ _id: id }, { $set: update, $inc: { telecrmAttempts: 1 } });
  } catch (err) {
    console.error('TeleCRM status write failed for lead', String(id), err.message);
  }

  if (!result.ok) {
    console.warn(`TeleCRM sync failed for ${Model.modelName} ${String(id)}: ${result.error}`);
  }

  return result;
}

/**
 * Fire-and-forget wrapper for use in request handlers after res.json().
 * Guarantees no unhandled rejection reaches the process.
 */
function syncLeadInBackground(Model, doc, fields) {
  syncLead(Model, doc, fields).catch((err) => {
    console.error('TeleCRM background sync error:', err.message);
  });
}

module.exports = { normalizePhone, pushLead, syncLead, syncLeadInBackground };
