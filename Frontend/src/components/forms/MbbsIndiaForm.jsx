import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiUser,
  FiPhone,
  FiMail,
  FiMapPin,
  FiSend,
  FiCheck,
  FiX,
  FiBook,
  FiTarget,
  FiDollarSign,
} from "react-icons/fi";
import axios from "axios";
import { getTrackingData, trackFormSubmission } from "../../utils/tracking";

const API_URL = import.meta.env.VITE_API_URL;

const MbbsIndiaForm = ({
  title = "Get MBBS Admission Guidance",
  subtitle = "Expert counselors will help you secure your seat",
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
    // Academic Details
    twelfthStream: "",
    physicsPercent: "",
    chemistryPercent: "",
    biologyPercent: "",
    overallPCBPercent: "",
    // NEET Details
    neetAppeared: "",
    neetScore: "",
    neetQualified: "",
    // Budget & Preferences
    budgetMbbsIndia: "",
    collegeCategory: "",
    statePreference: "",
  });

  useEffect(() => {
    setTrackingData(getTrackingData());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateStep = (stepNum) => {
    if (stepNum === 1) {
      return formData.fullName && formData.email && formData.phone;
    }
    if (stepNum === 2) {
      return formData.twelfthStream;
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
        `${API_URL}/service-leads/mbbs-india`,
        payload
      );

      if (response.data.success) {
        setStatus({
          type: "success",
          message: "Thank you! Our counselor will contact you within 24 hours.",
        });

        // Track conversion
        trackFormSubmission("MBBS_INDIA", payload);

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          city: "",
          whatsapp: "",
          twelfthStream: "",
          physicsPercent: "",
          chemistryPercent: "",
          biologyPercent: "",
          overallPCBPercent: "",
          neetAppeared: "",
          neetScore: "",
          neetQualified: "",
          budgetMbbsIndia: "",
          collegeCategory: "",
          statePreference: "",
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
    "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-slate-700";
  const labelClass = "block text-sm font-medium text-slate-700 mb-1.5";

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
                  ? "bg-orange-500 text-white"
                  : "bg-slate-100 text-slate-400"
              }`}
            >
              {s}
            </div>
            {s < 3 && (
              <div
                className={`w-8 h-1 mx-1 rounded ${
                  step > s ? "bg-orange-500" : "bg-slate-200"
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
            <div className="flex items-center gap-2 text-orange-600 font-semibold mb-4">
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
              className="w-full py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next: Academic Details
            </button>
          </motion.div>
        )}

        {/* Step 2: Academic & NEET Details */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 text-orange-600 font-semibold mb-4">
              <FiBook />
              <span>Academic & NEET Details</span>
            </div>

            <div>
              <label className={labelClass}>12th Stream *</label>
              <select
                name="twelfthStream"
                value={formData.twelfthStream}
                onChange={handleChange}
                className={inputClass}
                required
              >
                <option value="">Select Stream</option>
                <option value="PCB">PCB (Physics, Chemistry, Biology)</option>
                <option value="PCM">PCM (Physics, Chemistry, Math)</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className={labelClass}>Physics %</label>
                <input
                  type="number"
                  name="physicsPercent"
                  value={formData.physicsPercent}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="%"
                  min="0"
                  max="100"
                />
              </div>
              <div>
                <label className={labelClass}>Chemistry %</label>
                <input
                  type="number"
                  name="chemistryPercent"
                  value={formData.chemistryPercent}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="%"
                  min="0"
                  max="100"
                />
              </div>
              <div>
                <label className={labelClass}>Biology %</label>
                <input
                  type="number"
                  name="biologyPercent"
                  value={formData.biologyPercent}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="%"
                  min="0"
                  max="100"
                />
              </div>
              <div>
                <label className={labelClass}>Overall PCB %</label>
                <input
                  type="number"
                  name="overallPCBPercent"
                  value={formData.overallPCBPercent}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="%"
                  min="0"
                  max="100"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className={labelClass}>NEET Appeared?</label>
                <select
                  name="neetAppeared"
                  value={formData.neetAppeared}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              {formData.neetAppeared === "Yes" && (
                <>
                  <div>
                    <label className={labelClass}>NEET Score</label>
                    <input
                      type="number"
                      name="neetScore"
                      value={formData.neetScore}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Score"
                      min="0"
                      max="720"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>NEET Qualified?</label>
                    <select
                      name="neetQualified"
                      value={formData.neetQualified}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </>
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
                onClick={() => validateStep(2) && setStep(3)}
                disabled={!validateStep(2)}
                className="flex-1 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50"
              >
                Next: Preferences
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Budget & Preferences */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 text-orange-600 font-semibold mb-4">
              <FiTarget />
              <span>Budget & Preferences</span>
            </div>

            <div>
              <label className={labelClass}>Budget Per Year</label>
              <select
                name="budgetMbbsIndia"
                value={formData.budgetMbbsIndia}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select Budget Range</option>
                <option value="Less than 5L">Less than 5 Lakhs</option>
                <option value="5-10L">5 - 10 Lakhs</option>
                <option value="10-15L">10 - 15 Lakhs</option>
                <option value="15L+">15 Lakhs+</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>College Category Preference</label>
              <select
                name="collegeCategory"
                value={formData.collegeCategory}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select Category</option>
                <option value="Government">Government College</option>
                <option value="Private">Private College</option>
                <option value="Deemed">Deemed University</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>State Preference</label>
              <input
                type="text"
                name="statePreference"
                value={formData.statePreference}
                onChange={handleChange}
                className={inputClass}
                placeholder="e.g., Maharashtra, Karnataka, Delhi"
              />
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
                className="flex-1 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Inquiry <FiSend />
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

export default MbbsIndiaForm;
