import { useState } from "react";
import axios from "axios";
import { FiRefreshCw, FiCheck, FiAlertCircle, FiClock, FiMinus } from "react-icons/fi";

const API_URL = import.meta.env.VITE_API_URL;

/**
 * Shows whether a lead reached TeleCRM, with a retry button on failures.
 * `endpoint` is the router base for this lead type, e.g. "leads",
 * "eligibility" or "service-leads".
 */
const TelecrmStatusCell = ({ lead, token, endpoint, onSynced }) => {
  const [status, setStatus] = useState(lead.telecrmStatus || "pending");
  const [error, setError] = useState(lead.telecrmError || "");
  const [retrying, setRetrying] = useState(false);

  const handleRetry = async () => {
    setRetrying(true);
    try {
      const res = await axios.post(
        `${API_URL}/${endpoint}/${lead._id}/telecrm-retry`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setStatus(res.data.telecrmStatus);
      setError(res.data.error || "");
      if (res.data.success && onSynced) onSynced();
    } catch (err) {
      setStatus("failed");
      setError(err.response?.data?.message || "Retry failed");
    } finally {
      setRetrying(false);
    }
  };

  const styles = {
    synced: { cls: "bg-green-50 text-green-700 border-green-200", Icon: FiCheck, label: "Synced" },
    failed: { cls: "bg-red-50 text-red-700 border-red-200", Icon: FiAlertCircle, label: "Failed" },
    pending: { cls: "bg-amber-50 text-amber-700 border-amber-200", Icon: FiClock, label: "Pending" },
    skipped: { cls: "bg-slate-50 text-slate-500 border-slate-200", Icon: FiMinus, label: "Off" },
  };
  const { cls, Icon, label } = styles[status] || styles.pending;

  const tooltip =
    status === "failed"
      ? `TeleCRM sync failed: ${error || "unknown error"}`
      : status === "skipped"
        ? "TeleCRM is not configured on the server"
        : status === "synced"
          ? `Synced to TeleCRM${lead.telecrmSyncedAt ? ` on ${new Date(lead.telecrmSyncedAt).toLocaleString("en-IN")}` : ""}`
          : "Waiting to sync to TeleCRM";

  return (
    <div className="flex items-center gap-1.5">
      <span
        title={tooltip}
        className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border whitespace-nowrap ${cls}`}
      >
        <Icon size={12} />
        {label}
      </span>

      {(status === "failed" || status === "pending") && (
        <button
          onClick={handleRetry}
          disabled={retrying}
          title="Retry TeleCRM sync"
          className="p-1.5 text-slate-400 hover:text-brand-blue hover:bg-blue-50 rounded-lg transition-colors disabled:opacity-50"
        >
          <FiRefreshCw size={14} className={retrying ? "animate-spin" : ""} />
        </button>
      )}
    </div>
  );
};

export default TelecrmStatusCell;
