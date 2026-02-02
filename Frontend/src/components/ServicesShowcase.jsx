import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiBook, FiMonitor, FiGlobe } from "react-icons/fi";

const ServicesShowcase = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Services
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive solutions for your international education and career
            dreams
          </p>
        </motion.div>

        {/* MBBS Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left - Image/Title */}
              <div className="lg:col-span-1 bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">MBBS</h3>
                <p className="text-blue-100 text-sm">Medical Education</p>
                <img
                  src="/Home_Hero/1.webp"
                  alt="MBBS"
                  className="mt-4 rounded-lg w-full h-32 object-cover opacity-80"
                />
              </div>

              {/* Right - Options */}
              <div className="lg:col-span-4 p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* MBBS India */}
                  <div className="bg-slate-50 rounded-xl p-5 hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-slate-800 text-lg">
                        MBBS INDIA
                      </h4>
                      <Link
                        to="/mbbs/india"
                        className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium hover:bg-blue-200 transition-colors"
                      >
                        Full Info
                      </Link>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Link
                        to="/mbbs/india"
                        className="px-3 py-2 bg-white rounded-lg text-sm text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
                      >
                        NEET Counselling 2026
                      </Link>
                      <Link
                        to="/mbbs/india"
                        className="px-3 py-2 bg-white rounded-lg text-sm text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
                      >
                        NRI MBBS Seats
                      </Link>
                    </div>
                  </div>

                  {/* MBBS Abroad */}
                  <div className="bg-slate-50 rounded-xl p-5 hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-slate-800 text-lg">
                        MBBS ABROAD
                      </h4>
                      <Link
                        to="/mbbs/abroad"
                        className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full font-medium hover:bg-green-200 transition-colors"
                      >
                        Explore
                      </Link>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Russia", "Georgia", "Uzbekistan", "Kazakhstan"].map(
                        (country) => (
                          <Link
                            key={country}
                            to={`/mbbs/${country.toLowerCase()}`}
                            className="px-3 py-2 bg-white rounded-lg text-sm text-slate-700 border border-slate-200 hover:border-green-300 hover:bg-green-50 transition-all"
                          >
                            {country}
                          </Link>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Low Budget High ROI Countries */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left - Title */}
              <div className="lg:col-span-1 bg-gradient-to-br from-green-600 to-green-700 p-6 text-white flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-2">Low Budget</h3>
                <p className="text-green-100 text-sm">High ROI Countries</p>
                <div className="mt-4 text-4xl">💰</div>
              </div>

              {/* Right - Countries */}
              <div className="lg:col-span-4 p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { name: "Cyprus", flag: "🇨🇾" },
                    { name: "Malta", flag: "🇲🇹" },
                    { name: "Poland", flag: "🇵🇱" },
                    { name: "Mauritius", flag: "🇲🇺" },
                    { name: "Singapore", flag: "🇸🇬" },
                    { name: "Hungary", flag: "🇭🇺" },
                  ].map((country) => (
                    <Link
                      key={country.name}
                      to={`/study-abroad/${country.name.toLowerCase()}`}
                      className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-green-300 hover:bg-green-50 transition-all group"
                    >
                      <span className="text-2xl">{country.flag}</span>
                      <span className="font-medium text-slate-700 group-hover:text-green-600">
                        {country.name}
                      </span>
                      <FiArrowRight className="ml-auto opacity-0 group-hover:opacity-100 text-green-500 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Healthcare Jobs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left - Title */}
              <div className="lg:col-span-1 bg-gradient-to-br from-red-500 to-red-600 p-6 text-white flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-2">Healthcare</h3>
                <p className="text-red-100 text-sm">Jobs Abroad</p>
                <div className="mt-4 text-4xl">🏥</div>
              </div>

              {/* Right - Options */}
              <div className="lg:col-span-4 p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* UAE */}
                  <Link
                    to="/healthcare/uae"
                    className="bg-slate-50 rounded-xl p-5 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">🇦🇪</span>
                      <h4 className="font-bold text-slate-800 text-lg">
                        UAE Healthcare
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Nursing",
                        "Doctors",
                        "Allied Health",
                        "Lab Technicians",
                      ].map((job) => (
                        <span
                          key={job}
                          className="px-2 py-1 bg-white rounded text-xs text-slate-600 border border-slate-200"
                        >
                          {job}
                        </span>
                      ))}
                    </div>
                  </Link>

                  {/* Germany */}
                  <Link
                    to="/healthcare/germany"
                    className="bg-slate-50 rounded-xl p-5 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">🇩🇪</span>
                      <h4 className="font-bold text-slate-800 text-lg">
                        Germany Healthcare
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Nursing",
                        "Elderly Care",
                        "Physiotherapy",
                        "Others",
                      ].map((job) => (
                        <span
                          key={job}
                          className="px-2 py-1 bg-white rounded text-xs text-slate-600 border border-slate-200"
                        >
                          {job}
                        </span>
                      ))}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Germany Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left - Title */}
              <div className="lg:col-span-1 bg-gradient-to-br from-yellow-500 to-amber-500 p-6 text-white flex flex-col justify-center">
                <div className="text-4xl mb-2">🇩🇪</div>
                <h3 className="text-xl font-bold mb-1">Germany</h3>
                <p className="text-yellow-100 text-sm">Study & Work</p>
              </div>

              {/* Right - Options */}
              <div className="lg:col-span-4 p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    {
                      name: "Free Bachelors & Masters",
                      link: "/study-abroad/germany",
                      icon: "🎓",
                    },
                    { name: "Ausbildung", link: "/ausbildung", icon: "🔧" },
                    {
                      name: "Opportunity Card Visa",
                      link: "/study-abroad/germany",
                      icon: "💳",
                    },
                    {
                      name: "Nursing Jobs",
                      link: "/healthcare/germany",
                      icon: "👩‍⚕️",
                    },
                    {
                      name: "Other Jobs",
                      link: "/healthcare/germany",
                      icon: "💼",
                    },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      to={item.link}
                      className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-yellow-300 hover:bg-yellow-50 transition-all group"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-medium text-slate-700 text-sm group-hover:text-amber-600">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Two Column: Ausbildung + German Language */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Ausbildung */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden h-full">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Ausbildung</h3>
                <p className="text-purple-100 text-sm">
                  Vocational Training in Germany
                </p>
              </div>
              <div className="p-6">
                <img
                  src="/Home_Hero/2.webp"
                  alt="Ausbildung"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                    Eligibility
                  </span>
                  <span className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                    Selection Process
                  </span>
                </div>
                <Link
                  to="/ausbildung"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors"
                >
                  Free Consultation <FiArrowRight />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* German Language School */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden h-full">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">German Language</h3>
                <p className="text-orange-100 text-sm">School & Coaching</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <Link
                    to="/coaching"
                    className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-300 hover:bg-orange-50 transition-all group"
                  >
                    <FiBook className="text-2xl text-orange-500" />
                    <span className="font-medium text-slate-700 group-hover:text-orange-600">
                      Offline
                    </span>
                  </Link>
                  <Link
                    to="/coaching"
                    className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-300 hover:bg-orange-50 transition-all group"
                  >
                    <FiMonitor className="text-2xl text-orange-500" />
                    <span className="font-medium text-slate-700 group-hover:text-orange-600">
                      Online
                    </span>
                  </Link>
                </div>
                <Link
                  to="/coaching"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-colors"
                >
                  Book Free Demo <FiArrowRight />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
