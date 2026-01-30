import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiMapPin,
  FiBookOpen,
  FiCalendar,
  FiGlobe,
  FiCheckCircle,
  FiArrowLeft,
  FiStar,
  FiFileText,
  FiHome,
  FiDollarSign,
  FiClock,
} from "react-icons/fi";
import { StudyAbroadForm } from "../components/forms";
import { getCountryById, preferredCountries } from "../data/studyAbroadData";

const StudyAbroadCountry = () => {
  const { country } = useParams();
  const countryData = getCountryById(country);
  const isPreferred = preferredCountries.some((c) => c.id === country);

  if (!countryData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Country Not Found
          </h1>
          <p className="text-slate-600 mb-8">
            The country you're looking for doesn't exist.
          </p>
          <Link
            to="/study-abroad"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-bold"
          >
            <FiArrowLeft /> Back to Study Abroad
          </Link>
        </div>
      </div>
    );
  }

  const quickFacts = [
    { icon: <FiGlobe />, label: "Language", value: countryData.language },
    {
      icon: <FiCalendar />,
      label: "Intakes",
      value: countryData.intakes.join(", "),
    },
    {
      icon: <FiBookOpen />,
      label: "Universities",
      value: `${countryData.universities.length}+`,
    },
  ];

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

  const getFlagUrl = (size = 48) => {
    const code = flagCodes[country] || "un";
    return `https://flagcdn.com/w${size}/${code}.png`;
  };

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={countryData.bannerImage}
            alt={countryData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/70 text-sm mb-6">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <Link to="/study-abroad" className="hover:text-white">
                Study Abroad
              </Link>
              <span>/</span>
              <span className="text-white">{countryData.name}</span>
            </div>

            {isPreferred && (
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-sm font-bold mb-4">
                <FiStar className="text-yellow-200" /> Premier Destination
              </span>
            )}

            <div className="flex items-center gap-5 mb-4">
              <img
                src={getFlagUrl(64)}
                srcSet={`${getFlagUrl(128)} 2x`}
                alt={`${countryData.name} flag`}
                className="w-16 h-12 object-cover rounded-lg shadow-lg border-2 border-white/30"
              />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Study in {countryData.name}
              </h1>
            </div>

            <p className="text-xl text-blue-100/90 mb-8 max-w-2xl">
              {countryData.tagline}
            </p>

            <div className="flex flex-wrap gap-3">
              {countryData.highlights.map((h, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-sm font-medium"
                >
                  <FiCheckCircle className="text-green-400" /> {h}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Facts Bar */}
      <section className="bg-slate-900 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {quickFacts.map((fact, i) => (
              <div key={i} className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  {fact.icon}
                </div>
                <div>
                  <div className="text-xs text-blue-300 uppercase tracking-wider">
                    {fact.label}
                  </div>
                  <div className="font-bold">{fact.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* About Country */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Why Study in {countryData.name}?
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {countryData.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {countryData.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
                    >
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <FiCheckCircle className="text-green-600" />
                      </div>
                      <span className="font-medium text-slate-800">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Universities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-slate-900">
                    Top Universities in {countryData.name}
                  </h2>
                  <span className="text-sm text-slate-500">
                    {countryData.universities.length} Universities
                  </span>
                </div>

                <div className="grid gap-6">
                  {countryData.universities.map((uni, i) => (
                    <motion.div
                      key={uni.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        to={`/study-abroad/${country}/${uni.id}`}
                        className={`group block rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:shadow-xl ${
                          isPreferred
                            ? "border-amber-200 hover:border-amber-400 bg-gradient-to-r from-amber-50/50 to-white"
                            : "border-slate-200 hover:border-blue-300 bg-white"
                        }`}
                      >
                        <div className="flex flex-col md:flex-row">
                          {/* Image */}
                          <div className="md:w-64 h-48 md:h-auto shrink-0 relative overflow-hidden">
                            <img
                              src={uni.image}
                              alt={uni.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {isPreferred && (
                              <div className="absolute top-3 left-3">
                                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold">
                                  <FiStar className="text-yellow-200" />{" "}
                                  Recommended
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Content */}
                          <div className="flex-1 p-6">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                                  {uni.name}
                                </h3>
                                <p className="text-slate-500 flex items-center gap-1 text-sm">
                                  <FiMapPin /> {uni.location}
                                </p>
                              </div>
                              <FiArrowRight className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                            </div>

                            {/* Highlights */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {uni.highlights.map((h, idx) => (
                                <span
                                  key={idx}
                                  className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                                    isPreferred
                                      ? "bg-amber-100 text-amber-700"
                                      : "bg-blue-50 text-blue-700"
                                  }`}
                                >
                                  {h}
                                </span>
                              ))}
                            </div>

                            {/* Courses Preview */}
                            <div className="mb-4">
                              <span className="text-xs text-slate-500 uppercase font-semibold">
                                Popular Courses:
                              </span>
                              <p className="text-slate-700 text-sm mt-1">
                                {uni.courses.slice(0, 4).join(" • ")}
                                {uni.courses.length > 4 && " • ..."}
                              </p>
                            </div>

                            {/* Quick Info */}
                            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100 text-sm">
                              <span className="flex items-center gap-1 text-slate-600">
                                <FiCalendar className="text-blue-500" /> Intake:{" "}
                                {uni.intakes.join(", ")}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Admission Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8"
              >
                <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-2xl mb-6">
                    <FiFileText />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Documents Required
                  </h3>
                  <ul className="space-y-3 text-slate-600">
                    {[
                      "Academic Transcripts",
                      "English Proficiency Test",
                      "Statement of Purpose",
                      "Passport Copy",
                      "Recommendation Letters",
                      "CV/Resume",
                    ].map((doc, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <FiCheckCircle className="text-green-500 shrink-0" />{" "}
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                  <div className="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center text-white text-2xl mb-6">
                    <FiClock />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Application Timeline
                  </h3>
                  <ul className="space-y-3 text-slate-600">
                    {[
                      "Start 8-12 months before intake",
                      "Shortlist universities (2-3 weeks)",
                      "Prepare documents (3-4 weeks)",
                      "Submit applications (2-4 weeks)",
                      "Wait for admission (4-8 weeks)",
                      "Visa processing (4-8 weeks)",
                    ].map((step, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-purple-200 text-purple-700 text-xs font-bold flex items-center justify-center shrink-0">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Lead Form */}
                <div
                  className={`rounded-2xl overflow-hidden shadow-xl ${isPreferred ? "ring-2 ring-amber-400" : ""}`}
                >
                  <StudyAbroadForm
                    title={`Apply to ${countryData.name}`}
                    subtitle="Get free admission guidance"
                  />
                </div>

                {/* Why Choose Us */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-900 text-white">
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <FiStar className="text-amber-400" /> Why Choose Us?
                  </h4>
                  <ul className="space-y-3 text-blue-100 text-sm">
                    {[
                      "Expert country-specific counselors",
                      "End-to-end application support",
                      "Visa guidance with high success rate",
                      "Pre-departure & post-arrival support",
                      "Scholarship assistance",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <FiCheckCircle className="text-green-400 shrink-0" />{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Contact */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                  <p className="text-slate-600 mb-4">
                    Need immediate assistance?
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors"
                  >
                    Talk to Expert <FiArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Study Abroad */}
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <Link
            to="/study-abroad"
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
          >
            <FiArrowLeft /> Explore Other Countries
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StudyAbroadCountry;
