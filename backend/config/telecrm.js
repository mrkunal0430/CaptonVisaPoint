/**
 * TeleCRM configuration.
 *
 * Reads credentials from the environment. When either value is missing the
 * integration is disabled and lead syncing is skipped silently, so the site
 * keeps working exactly as before without TeleCRM credentials present.
 */
const enterpriseId = (process.env.TELECRM_ENTERPRISE_ID || '').trim();
const token = (process.env.TELECRM_ASYNC_TOKEN || '').trim();

const enabled = Boolean(enterpriseId && token);

module.exports = {
  enabled,
  enterpriseId,
  token,
  url: enabled
    ? `https://next-api.telecrm.in/enterprise/${enterpriseId}/autoupdatelead`
    : '',
};
