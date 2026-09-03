import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiUser,
  FiPhone,
  FiMail,
  FiMapPin,
  FiAward,
  FiGlobe,
  FiSend,
  FiCheck,
  FiAlertCircle,
  FiFileText,
  FiClock,
} from "react-icons/fi";
import axios from "axios";
import { getTrackingData, trackFormSubmission } from "../../utils/tracking";

const API_URL = import.meta.env.VITE_API_URL;

const SPECIALIZATIONS = [
  "General Medicine",
  "Radio-Diagnosis",
  "Dermatology & Venereology",
  "Pediatrics",
  "General Surgery",
  "Orthopedics",
  "Obstetrics & Gynecology",
  "Anesthesiology",
  "Ophthalmology",
  "Psychiatry",
  "Pathology",
  "Emergency Medicine",
  "Other Specialization",
];

// Intakes are derived from the current date so the options never go stale.
// After September the current year's intake has effectively closed, so we roll
// the window forward to start at next year.
const getIntakeYears = () => {
  const now = new Date();
  const startYear =
    now.getMonth() >= 8 ? now.getFullYear() + 1 : now.getFullYear();
  return [startYear, startYear + 1];
};

const MedicalPGForm = ({
  defaultMode = "germany", // 'india' or 'germany'
  title,
  subtitle,
  showModeSwitcher = false,
}) => {
  const [mode, setMode] = useState(defaultMode);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const [intakeYear, nextIntakeYear] = getIntakeYears();
  const defaultTargetYear = `${intakeYear} - ${nextIntakeYear}`;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    mbbsStatus: "Completed MBBS",
    neetPgScore: "",
    neetRank: "",
    counsellingPreference: "All India Quota (AIQ)",
    germanLevel: "Beginner / No Knowledge",
    targetYear: defaultTargetYear,
    specialization: "General Medicine",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const tracking = getTrackingData ? getTrackingData() : {};
      
      const structuredMessage = mode === "india"
        ? `[NEET PG INDIA COUNSELLING INQUIRY]
MBBS Status: ${formData.mbbsStatus}
NEET PG Score: ${formData.neetPgScore || "Not specified"} | Rank: ${formData.neetRank || "N/A"}
Preferred Quota: ${formData.counsellingPreference}
Target Specialty: ${formData.specialization}
Additional Notes: ${formData.message || "None"}`
        : `[MEDICAL PG GERMANY INQUIRY]
MBBS Status: ${formData.mbbsStatus}
Current German Level: ${formData.germanLevel}
Target Year: ${formData.targetYear}
Target Specialty: ${formData.specialization}
Additional Notes: ${formData.message || "None"}`;

      const payload = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        country: mode === "germany" ? "Germany" : "India",
        // PG-after-MBBS is a study pathway; bucket it so admin can filter it out
        // of the generic inquiry pile.
        service: mode === "germany" ? "Study Abroad" : "MBBS Abroad",
        education: `MBBS - ${mode === "india" ? "PG India (NEET PG)" : "PG Germany"}`,
        message: structuredMessage,
        ...tracking,
      };

      const response = await axios.post(`${API_URL}/leads`, payload);

      if (response.data.success || response.status === 201) {
        setStatus({
          type: "success",
          message:
            mode === "india"
              ? "Thank you! Our NEET PG Counselling Specialist will contact you within 24 hours."
              : "Thank you! Our Germany Medical PG Director will contact you for a personalized roadmap.",
        });

        if (trackFormSubmission) {
          trackFormSubmission(
            mode === "india" ? "MEDICAL_PG_INDIA" : "MEDICAL_PG_GERMANY",
            payload
          );
        }

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          city: "",
          mbbsStatus: "Completed MBBS",
          neetPgScore: "",
          neetRank: "",
          counsellingPreference: "All India Quota (AIQ)",
          germanLevel: "Beginner / No Knowledge",
          targetYear: defaultTargetYear,
          specialization: "General Medicine",
          message: "",
        });
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "Failed to submit inquiry. Please call us directly at +91 99147 73125.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
      {/* Decorative gradient accents */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Mode Switcher Buttons */}
      {showModeSwitcher && (
        <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-8 border border-slate-200">
          <button
            type="button"
            onClick={() => setMode("india")}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
              mode === "india"
                ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/25"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <span>🇮🇳</span> PG in India (NEET PG)
          </button>
          <button
            type="button"
            onClick={() => setMode("germany")}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
              mode === "germany"
                ? "bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-md shadow-blue-700/25"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <span>🇩🇪</span> Medical PG in Germany
          </button>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-8">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2 bg-blue-50 text-blue-700 border border-blue-100">
          {mode === "india"
            ? `NEET PG ${intakeYear}–${String(nextIntakeYear).slice(-2)} Guidance`
            : "Facharzt Residency Pathway"}
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {title ||
            (mode === "india"
              ? "Book NEET PG Counselling Session"
              : "Check Medical PG Germany Eligibility")}
        </h3>
        <p className="text-sm text-slate-500 mt-2 max-w-lg mx-auto">
          {subtitle ||
            (mode === "india"
              ? "Get personalized choice filling, cut-off predictions, and seat allocation strategy."
              : "Get complete licensing roadmap (Approbation, FSP, KP) & paid residency guidance.")}
        </p>
      </div>

      {/* Status Alert */}
      {status.message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-xl mb-6 flex items-start gap-3 text-sm ${
            status.type === "success"
              ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
              : "bg-rose-50 text-rose-800 border border-rose-200"
          }`}
        >
          {status.type === "success" ? (
            <FiCheck className="text-lg shrink-0 mt-0.5 text-emerald-600" />
          ) : (
            <FiAlertCircle className="text-lg shrink-0 mt-0.5 text-rose-600" />
          )}
          <div>
            <div className="font-bold">
              {status.type === "success" ? "Inquiry Received!" : "Error"}
            </div>
            <div>{status.message}</div>
          </div>
        </motion.div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Row 1: Full Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Dr. Rajesh Kumar"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Phone / WhatsApp <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <FiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Email & City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="doctor@example.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Current City & State <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <FiMapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                placeholder="e.g. Delhi, Mumbai, Hyderabad"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Row 3: Current MBBS Status */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              MBBS Status
            </label>
            <div className="relative">
              <FiAward className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <select
                name="mbbsStatus"
                value={formData.mbbsStatus}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
              >
                <option value="Completed MBBS & Internship">Completed MBBS & Internship</option>
                <option value="Currently in Internship">Currently in Internship</option>
                <option value="Final Year MBBS Student">Final Year MBBS Student</option>
                <option value="Foreign Medical Graduate (FMG)">Foreign Medical Graduate (FMG)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Desired Specialization
            </label>
            <div className="relative">
              <FiFileText className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
              >
                {SPECIALIZATIONS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Conditional Fields: India vs Germany */}
        {mode === "india" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-orange-50/60 rounded-2xl border border-orange-100">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                NEET PG Score / Expected Score
              </label>
              <input
                type="text"
                name="neetPgScore"
                value={formData.neetPgScore}
                onChange={handleChange}
                placeholder="e.g. 485 / 800 or 52 percentile"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none bg-white transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Counselling Category
              </label>
              <select
                name="counsellingPreference"
                value={formData.counsellingPreference}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none bg-white transition-all"
              >
                <option value="All India Quota (AIQ)">All India Quota (AIQ 50%)</option>
                <option value="State Quota (50%)">State Quota (50%)</option>
                <option value="Deemed / Private University">Deemed / Private University</option>
                <option value="Management / NRI Quota">Management / NRI Quota</option>
                <option value="DNB / CPS Counselling">DNB / CPS Counselling</option>
              </select>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-blue-50/60 rounded-2xl border border-blue-100">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                German Language Level
              </label>
              <div className="relative">
                <FiGlobe className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <select
                  name="germanLevel"
                  value={formData.germanLevel}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none bg-white transition-all"
                >
                  <option value="Beginner / No Knowledge">Beginner / No Knowledge</option>
                  <option value="A1 Level Completed">A1 Level Completed</option>
                  <option value="A2 Level Completed">A2 Level Completed</option>
                  <option value="B1 Level Completed">B1 Level Completed</option>
                  <option value="B2 Level Completed">B2 Level Completed</option>
                  <option value="C1 / Medical German">C1 / Medical German</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Target Timeline
              </label>
              <div className="relative">
                <FiClock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <select
                  name="targetYear"
                  value={formData.targetYear}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none bg-white transition-all"
                >
                  <option value="Immediate (Next 3-6 Months)">Immediate (Next 3-6 Months)</option>
                  <option value={`${intakeYear} Intake`}>{intakeYear} Intake</option>
                  <option value={`${nextIntakeYear} Intake`}>{nextIntakeYear} Intake</option>
                  <option value="Planning Ahead (Post-Internship)">Planning Ahead (Post-Internship)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Message / Query */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Any Specific Questions or Notes?
          </label>
          <textarea
            name="message"
            rows="2"
            value={formData.message}
            onChange={handleChange}
            placeholder={
              mode === "india"
                ? "e.g., Looking for MD Radio in private college under budget..."
                : "e.g., Want to know visa requirements and Approbation timeline..."
            }
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 rounded-xl text-white font-bold text-base shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 ${
            mode === "india"
              ? "bg-gradient-to-r from-orange-500 to-amber-600 shadow-orange-500/25"
              : "bg-gradient-to-r from-blue-700 to-indigo-800 shadow-blue-700/25"
          } ${loading ? "opacity-75 cursor-not-allowed" : ""}`}
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <span>{mode === "india" ? "Get NEET PG Counselling Plan" : "Get Germany Medical PG Roadmap"}</span>
              <FiSend className="text-lg" />
            </>
          )}
        </button>

        <p className="text-[11px] text-center text-slate-400">
          🔒 100% Confidential. Verified doctors & medical education advisors only. No spam.
        </p>
      </form>
    </div>
  );
};

export default MedicalPGForm;
