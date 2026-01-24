import React, { useState } from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceInterest: "Study Visa",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      // Assuming backend is running on localhost:5000
      // In production, configure proxy or full URL
      const res = await axios.post(`${API_URL}/leads`, formData);
      if (res.status === 201 || res.status === 200) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceInterest: "Study Visa",
          message: "",
        });
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div>
      <div className="bg-blue-900 py-20 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="opacity-90">We are here to help you.</p>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Get in Touch
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center text-xl shrink-0">
                  <FiMapPin />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Head Office</h3>
                  <p className="text-slate-600">
                    123 Immigration Hub, Business Park, New Delhi, India
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center text-xl shrink-0">
                  <FiPhone />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Phone</h3>
                  <p className="text-slate-600">+91 98765 43210</p>
                  <p className="text-slate-600">+91 12345 67890</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center text-xl shrink-0">
                  <FiMail />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <p className="text-slate-600">info@captonvisapoint.com</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 h-64 bg-slate-200 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.11235398766!2d77.209021!3d28.613939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1625642456456!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
                    placeholder="+91 99999 99999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Interested In
                </label>
                <select
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
                >
                  <option>Study Visa</option>
                  <option>Work Visa</option>
                  <option>Tourist / Visit Visa</option>
                  <option>Permanent Residency (PR)</option>
                  <option>IELTS / PTE Coaching</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-brand-blue text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Submit Inquiry"}
              </button>

              {status === "success" && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg text-sm text-center">
                  Thank you! Your message has been sent successfully. We will
                  contact you soon.
                </div>
              )}
              {status === "error" && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm text-center">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
