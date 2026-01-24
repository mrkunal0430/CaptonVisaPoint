import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiSend,
  FiUser,
  FiPhone,
  FiMail,
  FiMapPin,
  FiCheck,
  FiX,
} from "react-icons/fi";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const LeadForm = ({
  title = "Get Your Free Consultation",
  subtitle = "Expert guidance is just a click away",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await axios.post(`${API_URL}/leads`, formData);

      if (response.data.success) {
        setStatus({
          type: "success",
          message: "Thank you! We will contact you shortly.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        // Reset form fields
        e.target.reset();
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

  return (
    <div className="bg-white p-5 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-blue-50/50 rounded-bl-full -z-0" />

      <div className="relative z-10">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
          {title}
        </h3>
        <p className="text-slate-500 mb-4 sm:mb-6 text-xs sm:text-sm">
          {subtitle}
        </p>

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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative group">
            <FiUser className="absolute top-3.5 left-3 text-slate-400 group-focus-within:text-brand-blue transition-colors" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-brand-blue transition-all"
              onChange={handleChange}
            />
          </div>

          <div className="relative group">
            <FiPhone className="absolute top-3.5 left-3 text-slate-400 group-focus-within:text-brand-blue transition-colors" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-brand-blue transition-all"
              onChange={handleChange}
            />
          </div>

          <div className="relative group">
            <FiMail className="absolute top-3.5 left-3 text-slate-400 group-focus-within:text-brand-blue transition-colors" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-brand-blue transition-all"
              onChange={handleChange}
            />
          </div>

          <div className="relative group">
            <FiMapPin className="absolute top-3.5 left-3 text-slate-400 group-focus-within:text-brand-blue transition-colors" />
            <select
              name="service"
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-brand-blue transition-all text-slate-600 appearance-none cursor-pointer"
              onChange={handleChange}
              value={formData.service}
              required
            >
              <option value="" disabled>
                Select Service Interest
              </option>
              <option value="MBBS Abroad">MBBS Abroad</option>
              <option value="Study Abroad">Study Abroad (General)</option>
              <option value="Ausbildung">Ausbildung (Germany)</option>
              <option value="Language Coaching">
                Language Coaching (IELTS/German)
              </option>
              <option value="Visa Service">Visa Services</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Your Message / Specific Country Requirement"
            rows="3"
            value={formData.message}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-brand-blue transition-all text-sm"
            onChange={handleChange}
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3.5 bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Get Free Counselling <FiSend />
              </>
            )}
          </motion.button>
        </form>

        <p className="text-xs text-center text-slate-400 mt-4">
          Your data is secure. We don't spam.
        </p>
      </div>
    </div>
  );
};

export default LeadForm;
