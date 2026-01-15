import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiUser, FiPhone, FiMail, FiMapPin } from "react-icons/fi";

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add logic to submit to backend or email service
    alert("Thank you! We will contact you shortly.");
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -z-0" />

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-500 mb-6 text-sm">{subtitle}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative group">
            <FiUser className="absolute top-3.5 left-3 text-slate-400 group-focus-within:text-brand-blue transition-colors" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
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
              defaultValue=""
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
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-brand-blue transition-all text-sm"
            onChange={handleChange}
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3.5 bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
            type="submit"
          >
            Get Free Counselling <FiSend />
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
