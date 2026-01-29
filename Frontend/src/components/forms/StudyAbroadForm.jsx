import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiUser,
  FiSend,
  FiCheck,
  FiX,
  FiBook,
  FiGlobe,
  FiAward,
} from "react-icons/fi";
import axios from "axios";
import { getTrackingData, trackFormSubmission } from "../../utils/tracking";

const API_URL = import.meta.env.VITE_API_URL;

const StudyAbroadForm = ({
  title = "Get Free Profile Evaluation",
  subtitle = "Find your perfect university match",
  onSuccess,
}) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [trackingData, setTrackingData] = useState({});

  const [formData, setFormData] = useState({
    // Basic Details
    fullName: "",
    email: "",
    phone: "",
    city: "",
    whatsapp: "",
    // Education
    highestQualification: "",
    courseType: "",
    currentPercentage: "",
    // Language Proficiency
    languageTest: "",
    languageScore: "",
    // Preferences
    countryPreferenceStudy: [],
    budgetStudyAbroad: "",
  });

  useEffect(() => {
    setTrackingData(getTrackingData());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (country) => {
    setFormData((prev) => {
      const current = prev.countryPreferenceStudy;
      if (current.includes(country)) {
        return {
          ...prev,
          countryPreferenceStudy: current.filter((c) => c !== country),
        };
      }
      return {
        ...prev,
        countryPreferenceStudy: [...current, country],
      };
    });
  };

  const validateStep = (stepNum) => {
    if (stepNum === 1) {
      return formData.fullName && formData.email && formData.phone;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const payload = {
        ...formData,
        ...trackingData,
      };

      const response = await axios.post(
        `${API_URL}/service-leads/study-abroad`,
        payload
      );

      if (response.data.success) {
        setStatus({
          type: "success",
          message: "Thank you! Our counselor will contact you within 24 hours.",
        });

        trackFormSubmission("STUDY_ABROAD", payload);

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          city: "",
          whatsapp: "",
          highestQualification: "",
          courseType: "",
          currentPercentage: "",
          languageTest: "",
          languageScore: "",
          countryPreferenceStudy: [],
          budgetStudyAbroad: "",
        });
        setStep(1);

        if (onSuccess) onSuccess(response.data);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "Failed to submit. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-slate-700";
  const labelClass = "block text-sm font-medium text-slate-700 mb-1.5";

  const countries = [
    { name: "UK", flag: "🇬🇧" },
    { name: "USA", flag: "🇺🇸" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "Europe", flag: "🇪🇺" },
    { name: "Other", flag: "🌍" },
  ];

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-100">
      <div className="text-center mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{title}</h3>
        <p className="text-slate-500 text-sm mt-1">{subtitle}</p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-2 mb-6">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                step >= s
                  ? "bg-purple-600 text-white"
                  : "bg-slate-100 text-slate-400"
              }`}
            >
              {s}
            </div>
            {s < 3 && (
              <div
                className={`w-8 h-1 mx-1 rounded ${
                  step > s ? "bg-purple-600" : "bg-slate-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Status Message */}
      {status.message && (
        <div
          className={`mb-4 p-3 rounded-lg flex items-center gap-2 ${
            status.type === "success"
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {status.type === "success" ? <FiCheck /> : <FiX />}
          <span className="text-sm">{status.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Step 1: Basic Details */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 text-purple-600 font-semibold mb-4">
              <FiUser />
              <span>Basic Details</span>
            </div>

            <div>
              <label className={labelClass}>Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={inputClass}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="10-digit mobile"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your city"
                />
              </div>
              <div>
                <label className={labelClass}>WhatsApp Number</label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Same as phone?"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => validateStep(1) && setStep(2)}
              disabled={!validateStep(1)}
              className="w-full py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next: Education Details
            </button>
          </motion.div>
        )}

        {/* Step 2: Education & Language */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 text-purple-600 font-semibold mb-4">
              <FiBook />
              <span>Education & Language</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Highest Qualification</label>
                <select
                  name="highestQualification"
                  value={formData.highestQualification}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select</option>
                  <option value="10th">10th Standard</option>
                  <option value="12th">12th Standard</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Graduate">Graduate (Bachelor's)</option>
                  <option value="Post Graduate">Post Graduate (Master's)</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Course Type Interested</label>
                <select
                  name="courseType"
                  value={formData.courseType}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select</option>
                  <option value="Bachelors">Bachelor's Degree</option>
                  <option value="Masters">Master's Degree</option>
                  <option value="Diploma">Diploma/Certificate</option>
                  <option value="PhD">PhD/Doctorate</option>
                </select>
              </div>
            </div>

            <div>
              <label className={labelClass}>Current Percentage / CGPA</label>
              <input
                type="text"
                name="currentPercentage"
                value={formData.currentPercentage}
                onChange={handleChange}
                className={inputClass}
                placeholder="e.g., 75% or 7.5 CGPA"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Language Test</label>
                <select
                  name="languageTest"
                  value={formData.languageTest}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select</option>
                  <option value="IELTS">IELTS</option>
                  <option value="TOEFL">TOEFL</option>
                  <option value="PTE">PTE</option>
                  <option value="Duolingo">Duolingo</option>
                  <option value="Not taken">Not Taken Yet</option>
                </select>
              </div>
              {formData.languageTest && formData.languageTest !== "Not taken" && (
                <div>
                  <label className={labelClass}>Test Score</label>
                  <input
                    type="text"
                    name="languageScore"
                    value={formData.languageScore}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Your score"
                  />
                </div>
              )}
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-colors"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="flex-1 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors"
              >
                Next: Preferences
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Country & Budget Preference */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 text-purple-600 font-semibold mb-4">
              <FiGlobe />
              <span>Country & Budget Preference</span>
            </div>

            <div>
              <label className={labelClass}>
                Preferred Countries (Select multiple)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                {countries.map((country) => (
                  <button
                    key={country.name}
                    type="button"
                    onClick={() => handleCountryChange(country.name)}
                    className={`p-3 rounded-xl border-2 text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                      formData.countryPreferenceStudy.includes(country.name)
                        ? "border-purple-500 bg-purple-50 text-purple-700"
                        : "border-slate-200 hover:border-slate-300 text-slate-600"
                    }`}
                  >
                    <span>{country.flag}</span>
                    <span className="text-xs">{country.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className={labelClass}>Budget (Total for Course)</label>
              <select
                name="budgetStudyAbroad"
                value={formData.budgetStudyAbroad}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select Budget Range</option>
                <option value="Below 10L">Below 10 Lakhs</option>
                <option value="10-20L">10 - 20 Lakhs</option>
                <option value="20-30L">20 - 30 Lakhs</option>
                <option value="30L+">30 Lakhs+</option>
              </select>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="flex-1 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Get Free Evaluation <FiSend />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </form>

      <p className="text-xs text-center text-slate-400 mt-4">
        Your data is secure. We don't spam.
      </p>
    </div>
  );
};

export default StudyAbroadForm;
