import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiUser,
  FiSend,
  FiCheck,
  FiX,
  FiBriefcase,
  FiGlobe,
  FiAward,
} from "react-icons/fi";
import axios from "axios";
import { getTrackingData, trackFormSubmission } from "../../utils/tracking";

const API_URL = import.meta.env.VITE_API_URL;

const WorkAbroadForm = ({
  title = "Start Your Global Career",
  subtitle = "Get expert work visa consultation",
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
    // Profile
    qualification: "",
    yearsOfExperience: "",
    // Language
    englishLevel: "",
    languageCertification: "",
    // Job Preference
    jobField: "",
    countryPreferenceWork: [],
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
      const current = prev.countryPreferenceWork;
      if (current.includes(country)) {
        return {
          ...prev,
          countryPreferenceWork: current.filter((c) => c !== country),
        };
      }
      return {
        ...prev,
        countryPreferenceWork: [...current, country],
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
        `${API_URL}/service-leads/work-abroad`,
        payload
      );

      if (response.data.success) {
        setStatus({
          type: "success",
          message: "Thank you! Our career consultant will contact you within 24 hours.",
        });

        trackFormSubmission("WORK_ABROAD", payload);

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          city: "",
          whatsapp: "",
          qualification: "",
          yearsOfExperience: "",
          englishLevel: "",
          languageCertification: "",
          jobField: "",
          countryPreferenceWork: [],
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
    "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-slate-700";
  const labelClass = "block text-sm font-medium text-slate-700 mb-1.5";

  const countries = [
    { name: "Germany", flag: "🇩🇪" },
    { name: "UK", flag: "🇬🇧" },
    { name: "Gulf", flag: "🇦🇪" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "USA", flag: "🇺🇸" },
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
                  ? "bg-blue-700 text-white"
                  : "bg-slate-100 text-slate-400"
              }`}
            >
              {s}
            </div>
            {s < 3 && (
              <div
                className={`w-8 h-1 mx-1 rounded ${
                  step > s ? "bg-blue-700" : "bg-slate-200"
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
              ? "bg-blue-50 text-blue-800 border border-blue-200"
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
            <div className="flex items-center gap-2 text-blue-700 font-semibold mb-4">
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
              className="w-full py-3 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next: Profile & Language
            </button>
          </motion.div>
        )}

        {/* Step 2: Profile & Language */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 text-blue-700 font-semibold mb-4">
              <FiAward />
              <span>Profile & Language</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Qualification</label>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select</option>
                  <option value="MBBS">MBBS</option>
                  <option value="BSc Nursing">BSc Nursing</option>
                  <option value="GNM">GNM</option>
                  <option value="Hotel Management">Hotel Management</option>
                  <option value="IT/Engineering">IT / Engineering</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Years of Experience</label>
                <select
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select</option>
                  <option value="Fresher">Fresher</option>
                  <option value="0-2 years">0 - 2 Years</option>
                  <option value="2-5 years">2 - 5 Years</option>
                  <option value="5-10 years">5 - 10 Years</option>
                  <option value="10+ years">10+ Years</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>English Level</label>
                <select
                  name="englishLevel"
                  value={formData.englishLevel}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Language Certification</label>
                <select
                  name="languageCertification"
                  value={formData.languageCertification}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select</option>
                  <option value="IELTS">IELTS</option>
                  <option value="OET">OET</option>
                  <option value="German A1">German A1</option>
                  <option value="German A2">German A2</option>
                  <option value="German B1">German B1</option>
                  <option value="German B2">German B2</option>
                  <option value="None">None</option>
                </select>
              </div>
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
                className="flex-1 py-3 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-800 transition-colors"
              >
                Next: Job Preference
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Job Preference */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 text-blue-700 font-semibold mb-4">
              <FiBriefcase />
              <span>Job Preference</span>
            </div>

            <div>
              <label className={labelClass}>Job Field</label>
              <select
                name="jobField"
                value={formData.jobField}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select</option>
                <option value="Healthcare">Healthcare / Nursing</option>
                <option value="Hospitality">Hospitality / Hotel</option>
                <option value="IT">IT / Software</option>
                <option value="Skilled Worker">Skilled Worker / Trades</option>
                <option value="Other">Other</option>
              </select>
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
                      formData.countryPreferenceWork.includes(country.name)
                        ? "border-blue-600 bg-blue-50 text-blue-800"
                        : "border-slate-200 hover:border-slate-300 text-slate-600"
                    }`}
                  >
                    <span>{country.flag}</span>
                    <span className="text-xs">{country.name}</span>
                  </button>
                ))}
              </div>
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
                className="flex-1 py-3 bg-gradient-to-r from-blue-700 to-blue-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Get Consultation <FiSend />
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

export default WorkAbroadForm;
