import { useState, useEffect, forwardRef } from "react";
import { motion } from "framer-motion";
import {
  FiUser, FiSend, FiCheck, FiX, FiBriefcase, FiGlobe, FiStar,
} from "react-icons/fi";
import axios from "axios";
import { getTrackingData, trackFormSubmission } from "../../utils/tracking";

const API_URL = import.meta.env.VITE_API_URL;

const inputClass =
  "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-slate-700";
const labelClass = "block text-sm font-medium text-slate-700 mb-1.5";

const countries = ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain", "Europe", "Other"];

const JobsAfter12thForm = forwardRef(function JobsAfter12thForm(_, ref) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [trackingData, setTrackingData] = useState({});

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    whatsapp: "",
    qualification: "",
    jobField: "",
    drivingLicense: "",
    countryPreferenceWork: [],
    passportAvailable: "",
    age: "",
    planToGo: "",
  });

  useEffect(() => {
    setTrackingData(getTrackingData());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryToggle = (country) => {
    setFormData((prev) => {
      const current = prev.countryPreferenceWork;
      return {
        ...prev,
        countryPreferenceWork: current.includes(country)
          ? current.filter((c) => c !== country)
          : [...current, country],
      };
    });
  };

  const validateStep1 = () => formData.fullName && formData.email && formData.phone;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });
    try {
      const payload = { ...formData, ...trackingData };
      const res = await axios.post(`${API_URL}/service-leads/jobs-after-12th`, payload);
      if (res.data.success) {
        setStatus({ type: "success", message: res.data.message });
        trackFormSubmission("JOBS_AFTER_12TH", payload);
        setFormData({
          fullName: "", email: "", phone: "", city: "", whatsapp: "",
          qualification: "", jobField: "", drivingLicense: "",
          countryPreferenceWork: [], passportAvailable: "", age: "", planToGo: "",
        });
        setStep(1);
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: error.response?.data?.message || "Failed to submit. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <FiStar size={12} /> Apply Now
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-3">
            Apply for Jobs Abroad After 12th
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Share your details and our placement consultant will guide you to your best job match within 24 hours.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8">
            {/* Progress */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {["Basic Details", "Your Profile", "Preferences"].map((label, i) => {
                const s = i + 1;
                return (
                  <div key={s} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${step >= s ? "bg-blue-700 text-white" : "bg-slate-100 text-slate-400"}`}>
                        {step > s ? <FiCheck size={16} /> : s}
                      </div>
                      <span className={`text-[10px] mt-1 font-medium hidden sm:block ${step >= s ? "text-blue-700" : "text-slate-400"}`}>{label}</span>
                    </div>
                    {s < 3 && <div className={`w-10 h-1 mx-1 rounded mb-4 ${step > s ? "bg-blue-700" : "bg-slate-200"}`} />}
                  </div>
                );
              })}
            </div>

            {/* Status */}
            {status.message && (
              <div className={`mb-5 p-4 rounded-xl flex items-start gap-3 ${status.type === "success" ? "bg-blue-50 text-blue-800 border border-blue-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
                {status.type === "success" ? <FiCheck className="mt-0.5 shrink-0" /> : <FiX className="mt-0.5 shrink-0" />}
                <span className="text-sm">{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Step 1: Basic Details */}
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                  <div className="flex items-center gap-2 text-blue-700 font-semibold mb-4">
                    <FiUser size={16} /><span>Basic Details</span>
                  </div>
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className={inputClass} placeholder="Enter your full name" required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="your@email.com" required />
                    </div>
                    <div>
                      <label className={labelClass}>Phone *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="10-digit mobile" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>City</label>
                      <input type="text" name="city" value={formData.city} onChange={handleChange} className={inputClass} placeholder="Your city" />
                    </div>
                    <div>
                      <label className={labelClass}>WhatsApp Number</label>
                      <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className={inputClass} placeholder="Same as phone?" />
                    </div>
                  </div>
                  <button type="button" onClick={() => validateStep1() && setStep(2)} disabled={!validateStep1()}
                    className="w-full py-3.5 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    Next: Your Profile →
                  </button>
                </motion.div>
              )}

              {/* Step 2: Profile */}
              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                  <div className="flex items-center gap-2 text-blue-700 font-semibold mb-4">
                    <FiBriefcase size={16} /><span>Your Profile</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Highest Qualification</label>
                      <select name="qualification" value={formData.qualification} onChange={handleChange} className={inputClass}>
                        <option value="">Select</option>
                        <option value="10th Pass">10th Pass</option>
                        <option value="12th Pass">12th Pass</option>
                        <option value="ITI">ITI</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Preferred Job Category</label>
                      <select name="jobField" value={formData.jobField} onChange={handleChange} className={inputClass}>
                        <option value="">Select</option>
                        <option value="Hospitality">Hospitality & Hotels</option>
                        <option value="Retail & Sales">Retail & Sales</option>
                        <option value="Warehouse & Logistics">Warehouse & Logistics</option>
                        <option value="Driver & Delivery">Driver & Delivery</option>
                        <option value="Construction">Construction & Labour</option>
                        <option value="Catering">Catering & Food</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Driving License?</label>
                      <select name="drivingLicense" value={formData.drivingLicense} onChange={handleChange} className={inputClass}>
                        <option value="">Select</option>
                        <option value="Yes">Yes – I have a license</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Age Group</label>
                      <select name="age" value={formData.age} onChange={handleChange} className={inputClass}>
                        <option value="">Select</option>
                        <option value="18-25">18 – 25 years</option>
                        <option value="25-35">25 – 35 years</option>
                        <option value="35+">35+ years</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button type="button" onClick={() => setStep(1)} className="flex-1 py-3.5 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-colors">← Back</button>
                    <button type="button" onClick={() => setStep(3)} className="flex-1 py-3.5 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-800 transition-colors">Next: Preferences →</button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Preferences */}
              {step === 3 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                  <div className="flex items-center gap-2 text-blue-700 font-semibold mb-4">
                    <FiGlobe size={16} /><span>Job Preferences</span>
                  </div>
                  <div>
                    <label className={labelClass}>Preferred Countries (select all that apply)</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                      {countries.map((c) => (
                        <button key={c} type="button" onClick={() => handleCountryToggle(c)}
                          className={`py-2.5 px-3 rounded-xl border-2 text-xs font-semibold transition-all ${formData.countryPreferenceWork.includes(c) ? "border-blue-600 bg-blue-50 text-blue-800" : "border-slate-200 hover:border-slate-300 text-slate-600"}`}>
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Passport Available?</label>
                      <select name="passportAvailable" value={formData.passportAvailable} onChange={handleChange} className={inputClass}>
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No (we'll guide you)</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>When do you plan to go?</label>
                      <select name="planToGo" value={formData.planToGo} onChange={handleChange} className={inputClass}>
                        <option value="">Select</option>
                        <option value="ASAP">As soon as possible</option>
                        <option value="Within 3 months">Within 3 months</option>
                        <option value="Within 6 months">Within 6 months</option>
                        <option value="This year">This year</option>
                        <option value="Exploring">Just exploring</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button type="button" onClick={() => setStep(2)} className="flex-1 py-3.5 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-colors">← Back</button>
                    <button type="submit" disabled={loading}
                      className="flex-1 py-3.5 bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-70 flex items-center justify-center gap-2">
                      {loading ? (
                        <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Submitting...</>
                      ) : (
                        <>Submit Application <FiSend size={16} /></>
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-center text-slate-400">Your data is secure. We don't spam.</p>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

export default JobsAfter12thForm;
