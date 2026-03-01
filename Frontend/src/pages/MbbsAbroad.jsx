import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FiDollarSign,
  FiGlobe,
  FiCheckCircle,
  FiBook,
  FiArrowRight,
  FiFileText,
  FiArrowLeft,
  FiStar,
  FiMapPin,
  FiAward,
  FiUsers,
} from "react-icons/fi";
import SEO from "../components/SEO";
import { MbbsAbroadForm } from "../components/forms";
import EligibilityQuiz from "../components/EligibilityQuiz";
import {
  countries,
  topUniversities,
  benefits,
  eligibility,
  documents,
  services,
  processSteps,
} from "../data/mbbsAbroadData";
import { useRef, useState, useEffect } from "react";

// University Minimal Slider — Sleek, modern horizontal slider
const UniversityMinimalSlider = ({ universities }) => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeftArrow(scrollLeft > 20);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative group/slider">
      {/* Navigation Arrows */}
      <button
        onClick={() => scroll("left")}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 ${
          showLeftArrow
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } hidden md:flex`}
      >
        <FiArrowLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 ${
          showRightArrow
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } hidden md:flex`}
      >
        <FiArrowRight />
      </button>

      {/* Gradient Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-opacity" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-opacity" />

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 pt-4 px-4 no-scrollbar scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {universities.map((uni, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex-shrink-0"
          >
            <div className="block w-64 sm:w-72 group/card relative">
              <div className="relative p-5 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] group-hover/card:shadow-[0_20px_40px_-12px_rgba(59,130,246,0.15)] group-hover/card:border-blue-100 group-hover/card:-translate-y-2 transition-all duration-500 overflow-hidden">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-8 -mt-8 group-hover/card:bg-blue-600 transition-colors duration-500 opacity-20 group-hover/card:opacity-10" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider">
                      {uni.ranking}
                    </div>
                    <FiStar className="text-amber-400 text-sm" />
                  </div>

                  <h4 className="font-bold text-slate-900 text-sm leading-tight mb-2 group-hover/card:text-blue-600 transition-colors line-clamp-2 min-h-[2.5rem]">
                    {uni.name}
                  </h4>

                  <div className="flex items-center gap-2 text-slate-500 text-[10px] mb-4">
                    <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center">
                      <FiMapPin className="text-[10px]" />
                    </div>
                    <span>{uni.location}</span>
                  </div>

                  <div className="flex items-end justify-between pt-3 border-t border-slate-50">
                    <div>
                      <p className="text-[8px] uppercase text-slate-400 font-bold tracking-wider mb-0.5">
                        Tuition Fees
                      </p>
                      <p className="text-lg font-black text-slate-900 group-hover/card:text-blue-600 transition-colors">
                        {uni.fees}
                        <span className="text-[10px] font-medium text-slate-400 ml-1">
                          /yr
                        </span>
                      </p>
                    </div>
                    <Link
                      to="/contact"
                      className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center group-hover/card:bg-blue-600 group-hover/card:text-white group-hover/card:border-blue-600 transition-all duration-300"
                    >
                      <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

const MbbsAbroad = () => {
  return (
    <div>
      <SEO
        title="MBBS Abroad"
        description="Study MBBS abroad at affordable, WHO & NMC approved universities. Capton Visa Point offers complete MBBS abroad admission guidance for 2026-2027 in Russia, Georgia, Uzbekistan, Kazakhstan, Italy, Nepal, Bangladesh, Kyrgyzstan, Germany, and more. Low tuition fees, direct placement, and visa support for Indian students."
        keywords="MBBS abroad, study MBBS abroad, MBBS abroad admission, MBBS abroad consultants, cheapest MBBS abroad, MBBS without NEET abroad, low cost MBBS abroad, MBBS abroad eligibility, MBBS abroad fees, MBBS abroad universities, MBBS in Russia, study MBBS in Russia, MBBS in Russia fees, MBBS in Russia for Indian students, Russia MBBS admission, top medical universities in Russia, MBBS in Italy, study MBBS in Italy, MBBS in Italy fees, MBBS in Italy for Indian students, English medium MBBS in Italy, MBBS in Kazakhstan, study MBBS in Kazakhstan, MBBS in Kazakhstan fees, low cost MBBS in Kazakhstan, MBBS in Bangladesh, study MBBS in Bangladesh, MBBS in Bangladesh fees, MBBS in Nepal, study MBBS in Nepal, MBBS in Nepal fees, MBBS in Georgia, MBBS in Uzbekistan, MBBS in Kyrgyzstan, MBBS in Armenia, MBBS in Egypt, MBBS in Poland, MBBS in Germany, MBBS in Philippines, MBBS in China, MBBS in Ukraine, MBBS in Romania, cheapest MBBS country for Indians, lowest fees MBBS abroad, MBBS abroad under 25 lakhs, MBBS abroad under 30 lakhs, MBBS abroad under 35 lakhs, affordable MBBS abroad universities, MBBS abroad cost comparison, best country for MBBS for Indian students, WHO approved medical universities, NMC approved medical colleges, MBBS abroad valid in India, FMGE exam after MBBS abroad, NEXT exam for MBBS students, MBBS abroad recognition in India, medical council approved colleges, MBBS abroad visa process, student visa for MBBS, MBBS abroad consultants India, MBBS abroad admission India, international MBBS admission, foreign medical universities, MBBS abroad without donation, MBBS abroad January intake, MBBS abroad September intake, best MBBS destination 2026, best MBBS destination 2027, MBBS abroad safe universities, MBBS abroad Indian students support, MBBS abroad clinical exposure, MBBS abroad hospital training"
      />
      {/* Premium Hero Section - Split Layout */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] bg-gradient-to-br from-slate-50 via-blue-50/50 to-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient orbs */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-100/20 to-transparent rounded-full" />

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2UyZThmMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 h-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[85vh] lg:min-h-[90vh] py-16 lg:py-0">
            {/* LEFT - Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              {/* Badge */}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-semibold mb-6"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                2025 Admissions Open
              </motion.span>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
                Study{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-700">
                  MBBS Abroad
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
                Get transparent counselling for MBBS admissions in Europe &
                Asia. 100% accurate information about eligibility, fees,
                university selection, and visa support.
              </p>

              {/* Key Points */}
              <div className="space-y-4 mb-10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
                    <FiAward className="text-white text-lg" />
                  </div>
                  <span className="text-slate-700 font-medium">
                    WHO & NMC recognized universities
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-600/25">
                    <FiCheckCircle className="text-white text-lg" />
                  </div>
                  <span className="text-slate-700 font-medium">
                    Degree 100% valid in India
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-600/25">
                    <FiUsers className="text-white text-lg" />
                  </div>
                  <span className="text-slate-700 font-medium">
                    End-to-end admission support
                  </span>
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300"
                  >
                    Free Counselling <FiArrowRight />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <a
                    href="#countries"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-blue-300 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
                  >
                    View Countries
                  </a>
                </motion.div>
              </div>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-slate-200"
              >
                <div>
                  <div className="text-3xl font-black text-slate-900">70+</div>
                  <div className="text-sm text-slate-500">Universities</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900">
                    2000+
                  </div>
                  <div className="text-sm text-slate-500">Students Placed</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900">98%</div>
                  <div className="text-sm text-slate-500">Success Rate</div>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT - Doctor Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
            >
              {/* Decorative background for image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100 rounded-full opacity-50" />
              </div>

              {/* Floating cards around image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-10 left-0 sm:left-4 lg:left-0 z-20 bg-white rounded-2xl shadow-xl p-4 border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <FiCheckCircle className="text-blue-700" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      NMC Approved
                    </div>
                    <div className="text-xs text-slate-500">
                      All Universities
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute bottom-20 right-0 sm:right-4 lg:right-10 z-20 bg-white rounded-2xl shadow-xl p-4 border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <FiGlobe className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      6 Countries
                    </div>
                    <div className="text-xs text-slate-500">
                      Partner Network
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Doctor Image */}
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=800&fit=crop&crop=top"
                  alt="Medical Professional"
                  className="w-[280px] sm:w-[350px] lg:w-[420px] h-auto object-cover rounded-3xl shadow-2xl"
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eligibility Quiz Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <EligibilityQuiz />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why MBBS Abroad - Benefits */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Why Study MBBS Abroad?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover the advantages of pursuing your medical degree
              internationally
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all"
              >
                <div className="mb-4">
                  <benefit.icon className={benefit.iconClass} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Countries */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Top Countries for MBBS
            </h2>
            <p className="text-lg text-slate-600">
              Choose from our carefully selected partner countries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {countries.map((country, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className={`bg-white rounded-2xl p-6 border-2 ${country.hasPartners ? "border-amber-200 hover:border-amber-400" : "border-slate-200 hover:border-blue-300"} hover:shadow-xl transition-all group relative overflow-hidden`}
              >
                {/* Partner Badge */}
                {country.hasPartners && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl flex items-center gap-1">
                      ⭐ {country.partnerCount} Direct Partner
                      {country.partnerCount > 1 ? "s" : ""}
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-4 mb-4 mt-2">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {country.name}
                  </h3>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-slate-600">
                    <FiDollarSign className="text-blue-600" />
                    <span className="text-sm font-semibold">
                      {country.avgFees}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <FiBook className="text-blue-500" />
                    <span className="text-sm">
                      {country.universities} Universities
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <FiCheckCircle className="text-blue-600" />
                    <span className="text-sm">{country.benefit}</span>
                  </div>
                </div>
                <Link
                  to={country.path}
                  className={`w-full ${country.hasPartners ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600" : "bg-blue-600 hover:bg-blue-700"} text-white py-3 rounded-lg font-semibold text-center flex items-center justify-center gap-2 transition-colors group-hover:shadow-lg`}
                >
                  Explore {country.name} <FiArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Top Medical Universities
            </h2>
            <p className="text-lg text-slate-600">
              Study at world-class NMC approved universities
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <UniversityMinimalSlider universities={topUniversities} />
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Eligibility */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <FiCheckCircle className="text-blue-600" />
                Eligibility Criteria
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-slate-200">
                <ul className="space-y-4">
                  {eligibility.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Documents Required */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <FiFileText className="text-blue-700" />
                Documents Required
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-slate-200">
                <ul className="space-y-4">
                  {documents.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FiCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 leading-relaxed">
                        {doc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Complete end-to-end support for your MBBS abroad journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="text-3xl text-blue-600 mb-4">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process Timeline */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-blue-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Admission Process
            </h2>
            <p className="text-lg text-slate-600">
              Simple 6-step process to start your MBBS abroad
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 -translate-x-1/2"></div>

              {processSteps.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative flex items-center gap-8 mb-12 ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                  >
                    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-lg">
                    {item.step}
                  </div>

                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA with Form */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-800">
                Start Your MBBS Abroad Journey Today
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Get expert guidance from our team of experienced counselors.
                We've helped 2000+ students achieve their dream of becoming
                doctors.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-2xl text-blue-500" />
                  <span className="text-lg text-slate-700">
                    Free counseling session
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-2xl text-blue-500" />
                  <span className="text-lg text-slate-700">
                    Complete documentation support
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-2xl text-blue-500" />
                  <span className="text-lg text-slate-700">
                    FMGE coaching included
                  </span>
                </div>
              </div>
            </div>

            <MbbsAbroadForm
              title="Get Free Consultation"
              subtitle="Our expert will call you back within 24 hours"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MbbsAbroad;
