import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useLocation } from "react-router-dom";
import {
  FiX,
  FiUser,
  FiMail,
  FiMapPin,
  FiCheck,
  FiArrowRight,
  FiShield,
  FiAlertCircle,
} from "react-icons/fi";
import { getTrackingData, trackFormSubmission } from "../../utils/tracking";

const API_URL = import.meta.env.VITE_API_URL;

const SHOW_DELAY_MS = 4000;
const DISMISS_KEY = "cvp_welcome_popup_dismissed"; // sessionStorage: closed this visit
const SUBMIT_KEY = "cvp_welcome_popup_submitted"; // localStorage: timestamp of enquiry
const SUBMIT_COOLDOWN_MS = 30 * 24 * 60 * 60 * 1000;
// Pages that already are a form — don't interrupt them
const EXCLUDED_PATHS = ["/contact", "/eligibility-check"];

// "service" must match the Lead model enum; anything else is noted in the message
const INTERESTS = [
  { label: "MBBS Abroad", service: "MBBS Abroad" },
  { label: "MBBS India", service: "General Inquiry" },
  { label: "PG after MBBS", service: "General Inquiry" },
  { label: "Study Abroad", service: "Study Abroad" },
  { label: "Ausbildung (Germany)", service: "Ausbildung" },
  { label: "Jobs Abroad", service: "General Inquiry" },
  { label: "IELTS / German Coaching", service: "Language Coaching" },
  { label: "Visa Services", service: "Visa Service" },
];

const TRUST_STATS = [
  ["4000+", "Students placed"],
  ["70+", "Partner universities"],
  ["98%", "Visa success"],
];

const safeGet = (store, key) => {
  try {
    return window[store].getItem(key);
  } catch {
    return null;
  }
};
const safeSet = (store, key, value) => {
  try {
    window[store].setItem(key, value);
  } catch {
    /* storage unavailable — popup simply may reappear */
  }
};

const shouldShow = () => {
  if (safeGet("sessionStorage", DISMISS_KEY)) return false;
  const submittedAt = Number(safeGet("localStorage", SUBMIT_KEY));
  return !(submittedAt && Date.now() - submittedAt < SUBMIT_COOLDOWN_MS);
};

const emptyForm = { name: "", phone: "", email: "", city: "", interest: "" };

const WelcomeEnquiryPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const firstFieldRef = useRef(null);
  const { pathname } = useLocation();
  const excluded = EXCLUDED_PATHS.includes(pathname);

  // Open once per visit, after a short delay
  useEffect(() => {
    if (excluded || !shouldShow()) return;
    const timer = setTimeout(() => setIsOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, [excluded]);

  // Lock scroll, close on Escape, focus first field
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    const focusTimer = setTimeout(() => firstFieldRef.current?.focus(), 350);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      clearTimeout(focusTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const close = () => {
    safeSet("sessionStorage", DISMISS_KEY, "1");
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({
      ...f,
      [name]: name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);
    try {
      const interest = INTERESTS.find((i) => i.label === form.interest);
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: `+91${form.phone}`,
        city: form.city.trim(),
        service: interest?.service || "General Inquiry",
        message: `[Welcome Popup]${form.interest ? `\nInterested in: ${form.interest}` : ""}`,
        ...(getTrackingData ? getTrackingData() : {}),
      };

      const res = await axios.post(`${API_URL}/leads`, payload);
      if (res.data.success) {
        trackFormSubmission?.(payload.service, payload);
        safeSet("localStorage", SUBMIT_KEY, String(Date.now()));
        setSubmitted(true);
        setForm(emptyForm);
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Something went wrong. Please try again or call us.",
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full h-12 pl-11 pr-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition";
  const iconClass =
    "absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6 bg-slate-950/60 backdrop-blur-sm overflow-y-auto overscroll-contain"
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="welcome-popup-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: "spring", damping: 26, stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[880px] my-auto bg-white rounded-2xl shadow-2xl shadow-slate-950/30 overflow-hidden grid md:grid-cols-[5fr_6fr]"
          >
            {/* Close */}
            <button
              type="button"
              onClick={close}
              aria-label="Close enquiry form"
              className="absolute top-3 right-3 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 md:bg-white/90 text-slate-500 hover:text-slate-900 hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors"
            >
              <FiX size={20} />
            </button>

            {/* ===== Left: brand panel (desktop) ===== */}
            <div className="relative hidden md:flex flex-col justify-between bg-blue-900 text-white p-9 overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
                  backgroundSize: "22px 22px",
                }}
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-blue-600/40 blur-3xl"
              />
              <span
                aria-hidden="true"
                className="absolute left-0 top-9 w-1.5 h-16 bg-amber-500"
              />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <img
                    src="/logo.png"
                    alt=""
                    className="w-11 h-11 object-contain bg-white rounded-full p-0.5"
                  />
                  <div className="leading-none">
                    <p className="font-extrabold tracking-tight text-lg">
                      CAPTON<span className="text-amber-400">VISAPOINT</span>
                    </p>
                    <p className="text-[9px] tracking-[0.18em] uppercase text-blue-200 mt-1">
                      College Seats to Global Career Success
                    </p>
                  </div>
                </div>

                <h2 className="mt-10 text-[1.75rem] leading-[1.15] font-extrabold tracking-tight">
                  Your global future starts with{" "}
                  <span className="text-amber-400">one conversation.</span>
                </h2>
                <ul className="mt-6 space-y-3 text-sm text-blue-100">
                  {[
                    "Free 1-on-1 counselling with an expert",
                    "Honest eligibility & budget assessment",
                    "Admission to visa — end-to-end support",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
                        <FiCheck size={12} strokeWidth={3} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-10 pt-6 border-t border-white/15 grid grid-cols-3 gap-3">
                {TRUST_STATS.map(([value, label]) => (
                  <div key={label}>
                    <p className="text-xl font-extrabold text-white">{value}</p>
                    <p className="text-[11px] text-blue-200 leading-tight mt-0.5">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== Right: form / success ===== */}
            <div className="p-6 pt-7 sm:p-9">
              {submitted ? (
                <div className="h-full min-h-[380px] flex flex-col items-center justify-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 14 }}
                    className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center"
                  >
                    <FiCheck size={32} strokeWidth={3} />
                  </motion.div>
                  <h2
                    id="welcome-popup-title"
                    className="mt-5 text-2xl font-extrabold text-slate-900"
                  >
                    Thank you!
                  </h2>
                  <p className="mt-2 text-slate-600 max-w-xs">
                    Your enquiry is in. A counsellor will call you within 24
                    hours.
                  </p>
                  <button
                    type="button"
                    onClick={close}
                    className="mt-7 h-11 px-7 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-semibold transition-colors"
                  >
                    Continue browsing
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber-600">
                    Free Counselling
                  </p>
                  <h2
                    id="welcome-popup-title"
                    className="mt-1.5 pr-10 text-2xl sm:text-[1.65rem] font-extrabold text-slate-900 leading-tight tracking-tight"
                  >
                    Book your free consultation
                  </h2>
                  <p className="mt-1.5 text-sm text-slate-500">
                    Share a few details — our expert will call you back.
                  </p>

                  {error && (
                    <div
                      role="alert"
                      className="mt-4 flex items-start gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700"
                    >
                      <FiAlertCircle className="mt-0.5 shrink-0" />
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                    <div className="relative">
                      <FiUser className={iconClass} />
                      <input
                        ref={firstFieldRef}
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Full name"
                        aria-label="Full name"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>

                    <div className="flex h-12 bg-slate-50 border border-slate-200 rounded-xl focus-within:bg-white focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-600/10 transition overflow-hidden">
                      <span className="flex items-center px-4 text-sm font-semibold text-slate-600 border-r border-slate-200 bg-slate-100/70">
                        +91
                      </span>
                      <input
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        required
                        autoComplete="tel-national"
                        placeholder="Mobile number"
                        aria-label="Mobile number"
                        value={form.phone}
                        onChange={handleChange}
                        className="flex-1 min-w-0 px-4 bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                      />
                    </div>

                    <div className="relative">
                      <FiMail className={iconClass} />
                      <input
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="Email address"
                        aria-label="Email address"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="relative">
                        <FiMapPin className={iconClass} />
                        <input
                          name="city"
                          type="text"
                          required
                          autoComplete="address-level2"
                          placeholder="City"
                          aria-label="City"
                          value={form.city}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                      <div className="relative">
                        <select
                          name="interest"
                          required
                          aria-label="Interested in"
                          value={form.interest}
                          onChange={handleChange}
                          className={`${inputClass} pl-4 pr-10 appearance-none cursor-pointer ${
                            form.interest ? "" : "text-slate-400"
                          }`}
                        >
                          <option value="" disabled>
                            Interested in
                          </option>
                          {INTERESTS.map((i) => (
                            <option
                              key={i.label}
                              value={i.label}
                              className="text-slate-800"
                            >
                              {i.label}
                            </option>
                          ))}
                        </select>
                        <svg
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="group w-full h-12 mt-1 flex items-center justify-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-bold shadow-lg shadow-amber-500/25 disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-500/30 transition-colors"
                    >
                      {loading ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting…
                        </>
                      ) : (
                        <>
                          Get Free Consultation
                          <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>

                  <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-400">
                    <FiShield className="shrink-0" />
                    Your details are safe with us. No spam, ever.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeEnquiryPopup;
