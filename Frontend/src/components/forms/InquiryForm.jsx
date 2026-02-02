import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiSend,
  FiUser,
  FiPhone,
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiCheck,
  FiX,
} from "react-icons/fi";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const InquiryForm = ({
  title = "Get Your Free Consultation",
  subtitle = "Expert guidance is just a click away",
  variant = "default", // "default" | "compact" | "popup"
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
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
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          message: "",
        });
        if (onSuccess) {
          onSuccess();
        }
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

  const inputBaseClass =
    "w-full pl-10 pr-4 py-3 bg-bg-soft border border-border-light rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all text-text-secondary";

  const isCompact = variant === "compact" || variant === "popup";

  return (
    <div
      className={`bg-white rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden ${
        isCompact ? "p-4 sm:p-6" : "p-5 sm:p-8"
      }`}
    >
      <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-brand-blue-soft/50 rounded-bl-full -z-0" />

      <div className="relative z-10">
        <h3
          className={`font-bold text-slate-900 mb-2 ${
            isCompact ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-slate-500 mb-4 ${
            isCompact ? "text-xs sm:text-sm mb-3" : "sm:mb-6 text-xs sm:text-sm"
          }`}
        >
          {subtitle}
        </p>

        {status.message && (
          <div
            className={`mb-4 p-3 rounded-lg flex items-center gap-2 ${
              status.type === "success"
                ? "bg-success-soft text-success border border-success/20"
                : "bg-red-50 text-red-600 border border-red-200"
            }`}
          >
            {status.type === "success" ? <FiCheck /> : <FiX />}
            <span className="text-sm">{status.message}</span>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className={isCompact ? "space-y-3" : "space-y-4"}
        >
          <div className="relative group">
            <FiUser className="absolute top-3.5 left-3 text-slate-400 group-focus-within:text-brand-blue transition-colors" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              className={inputBaseClass}
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
              className={inputBaseClass}
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
              className={inputBaseClass}
              onChange={handleChange}
            />
          </div>

          <div className="relative group">
            <FiMapPin className="absolute top-3.5 left-3 text-slate-400 group-focus-within:text-brand-blue transition-colors" />
            <input
              type="text"
              name="city"
              placeholder="City"
              required
              value={formData.city}
              className={inputBaseClass}
              onChange={handleChange}
            />
          </div>

          <div className="relative group">
            <FiMessageSquare className="absolute top-3.5 left-3 text-slate-400 group-focus-within:text-brand-blue transition-colors" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={isCompact ? "2" : "3"}
              value={formData.message}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-brand-blue transition-all text-sm text-slate-700 resize-none"
              onChange={handleChange}
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3.5 bg-brand-blue hover:bg-brand-blue-dark text-white rounded-xl font-semibold shadow-lg shadow-brand-blue/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
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
                Submit Inquiry <FiSend />
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

export default InquiryForm;
