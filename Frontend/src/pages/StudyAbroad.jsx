import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiGlobe,
  FiBriefcase,
  FiAward,
  FiArrowRight,
  FiBookOpen,
  FiUsers,
  FiMapPin,
  FiStar,
  FiCheckCircle,
  FiChevronDown,
} from "react-icons/fi";
import { StudyAbroadForm } from "../components/forms";
import { preferredCountries, otherCountries } from "../data/studyAbroadData";
import SEO from "../components/SEO";

const StudyAbroad = () => {
  const [openFaq, setOpenFaq] = useState(null);

  // Flag code mapping for real flag images
  const flagCodes = {
    germany: "de",
    cyprus: "cy",
    france: "fr",
    uae: "ae",
    mauritius: "mu",
    singapore: "sg",
    uk: "gb",
    usa: "us",
    canada: "ca",
    australia: "au",
    "new-zealand": "nz",
    denmark: "dk",
    finland: "fi",
  };

  const getFlagUrl = (countryId, size = 40) => {
    const code = flagCodes[countryId] || "un";
    return `https://flagcdn.com/w${size}/${code}.png`;
  };

  const stats = [
    { value: "15K+", label: "Students Placed", icon: <FiUsers /> },
    { value: "200+", label: "Partner Universities", icon: <FiBookOpen /> },
    { value: "13+", label: "Countries", icon: <FiGlobe /> },
    { value: "98%", label: "Visa Success", icon: <FiAward /> },
  ];

  const benefits = [
    {
      title: "Global Career Opportunities",
      desc: "Access international job markets with globally recognized qualifications",
      icon: <FiBriefcase />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "World-Class Education",
      desc: "Learn from renowned professors at top-ranked universities worldwide",
      icon: <FiAward />,
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Cultural Immersion",
      desc: "Develop cross-cultural skills and build a global network",
      icon: <FiGlobe />,
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Personal Growth",
      desc: "Gain independence, resilience, and adaptability",
      icon: <FiStar />,
      color: "from-green-500 to-teal-600",
    },
  ];

  const faqs = [
    {
      q: "How do I choose the right country for studying abroad?",
      a: "Consider factors like course availability, language, cost of living, post-study work opportunities, and cultural fit. Our counselors help you make informed decisions based on your profile.",
    },
    {
      q: "What are the general eligibility requirements?",
      a: "Requirements vary by country and university. Generally, you need academic transcripts, English proficiency tests (IELTS/TOEFL), passport, and specific course prerequisites.",
    },
    {
      q: "How long does the application process take?",
      a: "Typically 3-6 months from application to visa. We recommend starting at least 8-12 months before your intended intake.",
    },
    {
      q: "Can I work while studying abroad?",
      a: "Most countries allow international students to work part-time (15-20 hours/week) during studies. Post-study work permits are also available in many countries.",
    },
    {
      q: "What support do you provide?",
      a: "We offer end-to-end support: university selection, application assistance, visa guidance, pre-departure preparation, and post-arrival support.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Free Consultation",
      desc: "Profile evaluation & counseling",
    },
    {
      step: "02",
      title: "University Selection",
      desc: "Shortlist best-fit universities",
    },
    {
      step: "03",
      title: "Application",
      desc: "Document preparation & submission",
    },
    { step: "04", title: "Admission", desc: "Offer letter & acceptance" },
    { step: "05", title: "Visa Processing", desc: "Complete visa guidance" },
    {
      step: "06",
      title: "Pre-Departure",
      desc: "Travel & accommodation support",
    },
  ];

  return (
    <div className="bg-white">
      <SEO
        title="Study Abroad"
        description="Study abroad with Capton Visa Point — explore top destinations like Germany, UK, USA, Canada, Australia, France, UAE, Cyprus, and more. Complete guidance from university shortlisting, documentation, APS, visa filing, to pre-departure support. Affordable study abroad options with scholarship support."
        keywords="study abroad, study in Germany, study in UK, study in USA, study in Canada, study in Australia, study in France, study in UAE, overseas education consultants, study abroad consultants, B.Tech in Germany, study work settle in Germany, low budget study abroad, affordable study abroad, study abroad scholarships, study abroad visa process, university shortlisting, APS documentation, study abroad admission, overseas education, international education, foreign university admission, study abroad for Indian students, best country to study abroad, study abroad 2026, study abroad 2027"
      />
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-slow-reverse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/10 to-transparent rounded-full" />
        </div>

        {/* Floating Country Cards - Clickable */}
        <div className="absolute inset-0 overflow-hidden">
          {preferredCountries.map((country, i) => {
            // Positioning for 6 floating cards - moved more toward center
            const positions = [
              "top-[15%] left-[8%]", // Germany - top left
              "top-[18%] right-[10%]", // Cyprus - top right
              "top-[42%] left-[6%]", // France - middle left
              "top-[45%] right-[8%]", // UAE - middle right
              "bottom-[22%] left-[10%]", // Mauritius - bottom left
              "bottom-[18%] right-[7%]", // Singapore - bottom right
            ];

            return (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{
                  opacity: 0.95,
                  y: [0, -12, 0],
                  scale: 1,
                }}
                transition={{
                  delay: 0.5 + i * 0.15,
                  duration: 0.8,
                  y: {
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className={`absolute hidden lg:block ${positions[i]}`}
              >
                <Link
                  to={`/study-abroad/${country.id}`}
                  className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white shadow-xl hover:bg-white/25 hover:border-white/40 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={getFlagUrl(country.id, 40)}
                    srcSet={`${getFlagUrl(country.id, 80)} 2x`}
                    alt={country.name}
                    className="w-8 h-6 object-cover rounded shadow-sm"
                  />
                  <span className="font-semibold text-sm">{country.name}</span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white/90 text-sm font-medium mb-8">
                <FiGlobe className="text-blue-400" />
                Your Gateway to Global Education
              </span>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Study Abroad with{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                  Confidence
                </span>
              </h1>

              <p className="text-xl text-blue-100/80 max-w-2xl mx-auto mb-10">
                Transform your future with world-class education. We guide you
                to the best universities across 13+ countries.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-bold text-lg shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:scale-105 transition-all"
                >
                  Start Your Journey <FiArrowRight />
                </Link>
                <a
                  href="#countries"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all"
                >
                  Explore Destinations
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full">
            <path
              d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white relative -mt-1">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-100"
              >
                <div className="text-3xl text-blue-600 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premier Destinations - Highlighted */}
      <section
        id="countries"
        className="py-24 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-sm font-bold mb-4 border border-amber-200">
              <FiStar className="text-amber-500" /> Premier Study Destinations
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Top Recommended Countries
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our top destinations where we provide exceptional guidance and
              support for your education journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {preferredCountries.map((country, i) => (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/study-abroad/${country.id}`}
                  className="group block relative overflow-hidden rounded-3xl bg-white border-2 border-amber-200 shadow-lg hover:shadow-2xl hover:border-amber-400 transition-all duration-300"
                >
                  {/* Premium Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold shadow-lg">
                      <FiStar className="text-yellow-200" /> PREMIER
                    </span>
                  </div>

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={country.bannerImage}
                      alt={country.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <img
                        src={getFlagUrl(country.id, 48)}
                        srcSet={`${getFlagUrl(country.id, 96)} 2x`}
                        alt={`${country.name} flag`}
                        className="w-10 h-7 object-cover rounded shadow-md border border-white/30"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {country.name}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {country.tagline}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {country.highlights.slice(0, 3).map((h, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-medium border border-amber-100"
                        >
                          <FiCheckCircle className="text-amber-500 text-xs" />{" "}
                          {h}
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {country.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <span className="text-sm text-slate-500">
                        <FiBookOpen className="inline mr-1" />{" "}
                        {country.universities.length} Universities
                      </span>
                      <span className="inline-flex items-center gap-1 text-amber-600 font-bold text-sm group-hover:gap-2 transition-all">
                        Explore <FiArrowRight />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Countries */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Explore More Destinations
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover opportunities in these popular study destinations
              worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherCountries.map((country, i) => (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/study-abroad/${country.id}`}
                  className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={getFlagUrl(country.id, 48)}
                      srcSet={`${getFlagUrl(country.id, 96)} 2x`}
                      alt={`${country.name} flag`}
                      className="w-10 h-7 object-cover rounded shadow-sm border border-slate-200"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {country.name}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {country.tagline}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {country.highlights.slice(0, 2).map((h, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <span className="text-xs text-slate-500">
                      {country.universities.length} Universities
                    </span>
                    <FiArrowRight className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study Abroad */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Study Abroad?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Unlock endless possibilities with an international education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl border border-slate-100 transition-all group"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your Journey to Abroad
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              A simple 6-step process to make your dream a reality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 rounded-2xl bg-white/10 backdrop-blur border border-white/20 hover:bg-white/15 transition-all group"
              >
                <div className="absolute -top-3 -left-3 w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">
                  {step.step}
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-blue-200">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600">
                Get answers to common questions about studying abroad
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="border border-slate-200 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    <span className="font-bold text-slate-900 pr-4">
                      {faq.q}
                    </span>
                    <FiChevronDown
                      className={`text-slate-500 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 py-5 bg-white border-t border-slate-100">
                      <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA with Existing Form */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-12 bg-gradient-to-br from-slate-900 to-blue-900 text-white flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Get a free profile evaluation and personalized university
                recommendations from our expert counselors.
              </p>
              <ul className="space-y-3">
                {[
                  "Free Profile Assessment",
                  "University Shortlisting",
                  "Scholarship Guidance",
                  "Visa Support",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-blue-100">
                    <FiCheckCircle className="text-green-400" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 p-6 lg:p-8">
              <StudyAbroadForm
                title="Get Free Consultation"
                subtitle="Fill in your details to get started"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyAbroad;
