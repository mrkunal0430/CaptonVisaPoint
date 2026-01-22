import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";

const EligibilityCalculator = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    education: "",
    targetCountry: "",
    serviceType: "",
  });

  const [showResult, setShowResult] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResult(true);
    // Here you would normally send data to backend
  };

  return (
    <section className="py-24 bg-gradient-to-br from-brand-blue to-blue-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Check Your Eligibility in 60 Seconds
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Free assessment to find the best pathway for your global journey
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {!showResult ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  {/* Age */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Age *
                    </label>
                    <select
                      name="age"
                      required
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Select Age Range</option>
                      <option value="18-22">18-22 years</option>
                      <option value="23-27">23-27 years</option>
                      <option value="28-32">28-32 years</option>
                      <option value="33-37">33-37 years</option>
                      <option value="38+">38+ years</option>
                    </select>
                  </div>

                  {/* Education */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Highest Education *
                    </label>
                    <select
                      name="education"
                      required
                      value={formData.education}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Select Education Level</option>
                      <option value="12th">12th Pass (High School)</option>
                      <option value="bachelors">Bachelor's Degree</option>
                      <option value="masters">Master's Degree</option>
                      <option value="phd">PhD/Doctorate</option>
                      <option value="diploma">Diploma/Certificate</option>
                    </select>
                  </div>

                  {/* Target Country */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Target Country *
                    </label>
                    <select
                      name="targetCountry"
                      required
                      value={formData.targetCountry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Select Country</option>
                      <option value="usa">USA</option>
                      <option value="uk">UK</option>
                      <option value="canada">Canada</option>
                      <option value="australia">Australia</option>
                      <option value="germany">Germany</option>
                      <option value="russia">Russia</option>
                      <option value="uzbekistan">Uzbekistan</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    I'm Interested In *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { value: "mbbs", label: "MBBS Abroad" },
                      { value: "study", label: "Study Abroad" },
                      { value: "ausbildung", label: "Ausbildung" },
                      { value: "work", label: "Work Visa" },
                      { value: "pr", label: "PR/Immigration" },
                      { value: "visit", label: "Visit Visa" },
                      { value: "language", label: "Language Coaching" },
                      { value: "other", label: "Other" },
                    ].map((service) => (
                      <label
                        key={service.value}
                        className={`border-2 rounded-xl p-4 cursor-pointer transition-all text-center ${
                          formData.serviceType === service.value
                            ? "border-brand-blue bg-blue-50 text-brand-blue font-semibold"
                            : "border-slate-200 hover:border-brand-blue/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="serviceType"
                          value={service.value}
                          checked={formData.serviceType === service.value}
                          onChange={handleChange}
                          className="sr-only"
                          required
                        />
                        <span className="text-sm">{service.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-brand-blue text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 group"
                  >
                    Check My Eligibility{" "}
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <p className="text-sm text-slate-500 text-center">
                  Your information is 100% secure and will never be shared
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiCheckCircle className="text-green-600 text-4xl" />
              </div>
              <h3 className="text-3xl font-bold text-brand-dark mb-4">
                Great News, {formData.name.split(" ")[0]}!
              </h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Based on your profile, you appear eligible for{" "}
                <span className="font-bold text-brand-blue">
                  {formData.serviceType.toUpperCase()}
                </span>{" "}
                in{" "}
                <span className="font-bold text-brand-blue">
                  {formData.targetCountry.toUpperCase()}
                </span>
                . Our expert counsellor will contact you within 24 hours to discuss your
                personalized pathway.
              </p>

              <div className="bg-blue-50 rounded-2xl p-6 mb-8">
                <h4 className="font-bold text-brand-dark mb-4">What Happens Next?</h4>
                <div className="space-y-3 text-left max-w-md mx-auto">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-blue text-white flex items-center justify-center text-sm font-bold shrink-0">
                      1
                    </div>
                    <p className="text-slate-700">
                      Expert counsellor reviews your profile
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-blue text-white flex items-center justify-center text-sm font-bold shrink-0">
                      2
                    </div>
                    <p className="text-slate-700">
                      Receive personalized recommendations
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-blue text-white flex items-center justify-center text-sm font-bold shrink-0">
                      3
                    </div>
                    <p className="text-slate-700">Start your application process</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowResult(false)}
                className="text-brand-blue font-semibold hover:underline"
              >
                Check Another Profile
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EligibilityCalculator;
