import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiStar,
  FiGlobe,
  FiTrendingUp,
  FiAward,
  FiMapPin,
  FiBookOpen,
  FiBriefcase,
  FiSend,
} from "react-icons/fi";

// Country Data
const countries = [
  {
    name: "Canada",
    flag: "🇨🇦",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=400&q=80",
    stats: { highlight: "Top PR Choice", visa: "96% Success" },
    color: "from-red-500 to-red-600",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=400&q=80",
    stats: { highlight: "High Wages", visa: "4yr PSW" },
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "UK",
    flag: "🇬🇧",
    image:
      "https://images.unsplash.com/photo-1529655683826-ece48428bc5a?auto=format&fit=crop&w=400&q=80",
    stats: { highlight: "1yr Masters", visa: "Quick Process" },
    color: "from-indigo-500 to-indigo-600",
  },
  {
    name: "USA",
    flag: "🇺🇸",
    image:
      "https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?auto=format&fit=crop&w=400&q=80",
    stats: { highlight: "STEM OPT", visa: "Ivy League" },
    color: "from-blue-600 to-red-600",
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    image:
      "https://images.unsplash.com/photo-1560969184-10fe8719e654?auto=format&fit=crop&w=400&q=80",
    stats: { highlight: "Free Tuition", visa: "Job Seeker" },
    color: "from-yellow-500 to-yellow-600",
  },
  {
    name: "France",
    flag: "🇫🇷",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80",
    stats: { highlight: "Schengen Access", visa: "top Culture" },
    color: "from-blue-400 to-indigo-500",
  },
];

const CountryCard = ({ country, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  // Stagger animation based on index

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.5,
        }}
        whileHover={{ scale: 1.05, zIndex: 10, y: -5 }}
      >
        {/* Main Card */}
        <div
          className={`
                relative overflow-hidden rounded-2xl shadow-xl 
                h-32 w-28 sm:h-40 sm:w-32 lg:h-48 lg:w-36
                border border-white/10 bg-white/5 backdrop-blur-sm
                transition-all duration-300
                ${isHovered ? "shadow-cyan-500/20 border-cyan-400/30" : ""}
            `}
        >
          <img
            src={country.image}
            alt={country.name}
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-3 text-center">
            <span className="text-2xl block mb-1 drop-shadow-md">
              {country.flag}
            </span>
            <span className="text-white text-sm font-bold tracking-wide drop-shadow-md">
              {country.name}
            </span>
          </div>
        </div>

        {/* Hover Floating Details (Desktop) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.9 }}
              className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 bg-white rounded-xl shadow-2xl p-3 z-20 pointer-events-none"
            >
              <div
                className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45`}
              />
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <FiAward className="text-yellow-500" />
                  {country.stats.highlight}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                  <FiCheckCircle className="text-green-500" />
                  {country.stats.visa}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-[#050A18] overflow-hidden pt-20">
      {/* 1. Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#051024] via-[#081838] to-[#020617] opacity-90" />

        {/* Animated Orbs */}
        <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[0%] right-[-5%] w-[35vw] h-[35vw] bg-purple-600/10 rounded-full blur-[100px] animate-pulse delay-1000" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* 2. Left Content Section */}
          <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-500/30 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-blue-300 text-xs font-bold tracking-wider uppercase">
                No.1 Study Abroad Consultant
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
            >
              Your Gateway to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Global Education
              </span>{" "}
              & Careers
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-blue-100/70 font-light leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Study abroad, work overseas, and build your dream future with
              expert guidance. We turn your global aspirations into reality.
            </motion.p>

            {/* New 4-Button CTA Layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 w-full"
            >
              <Link to="/study-abroad" className="group">
                <button className="w-full py-4 px-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl hover:bg-yellow-500 hover:text-slate-900 text-yellow-400 font-bold transition-all flex flex-col items-center justify-center gap-2 h-full backdrop-blur-sm">
                  <FiBookOpen className="text-2xl mb-1" />
                  Study
                </button>
              </Link>

              <Link to="/pr-visa" className="group">
                <button className="w-full py-4 px-6 bg-purple-500/10 border border-purple-500/30 rounded-xl hover:bg-purple-500 hover:text-white text-purple-400 font-bold transition-all flex flex-col items-center justify-center gap-2 h-full backdrop-blur-sm">
                  <FiGlobe className="text-2xl mb-1" />
                  Migrate
                </button>
              </Link>

              <Link to="/work-visa" className="group">
                <button className="w-full py-4 px-6 bg-teal-500/10 border border-teal-500/30 rounded-xl hover:bg-teal-500 hover:text-white text-teal-400 font-bold transition-all flex flex-col items-center justify-center gap-2 h-full backdrop-blur-sm">
                  <FiBriefcase className="text-2xl mb-1" />
                  Work
                </button>
              </Link>

              <Link to="/contact" className="group">
                <button className="w-full py-4 px-6 bg-slate-500/10 border border-slate-500/30 rounded-xl hover:bg-slate-200 hover:text-slate-900 text-slate-300 font-bold transition-all flex flex-col items-center justify-center gap-2 h-full backdrop-blur-sm">
                  <FiSend className="text-2xl mb-1" />
                  Visit
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-8"
            >
              {[
                "Top Universities",
                "Visa Assistance",
                "Job Placement",
                "Scholarships",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm font-medium text-slate-300"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <FiCheckCircle size={12} />
                  </div>
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* 3. Right Interactive Section - Country Cards Visual */}
          <div className="flex-1 w-full lg:h-[600px] relative flex md:items-center justify-center lg:justify-end">
            <h1>jobefuebvu jsdbhvoui </h1>
            {/* Cards Grid - Irregular/Masonry Layout */}
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 transform lg:rotate-[-5deg] lg:-translate-y-8">
              {countries.map((country, idx) => (
                <div
                  key={idx}
                  className={`${idx % 2 !== 0 ? "mt-8 md:mt-12" : ""}`}
                >
                  {" "} 
                  {/* Stagger effect */}
                  <CountryCard country={country} index={idx} />
                </div>
              ))}
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ x: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[41%] -left-[10%] z-20 hidden md:block"
            >
              <div className="bg-white/10 backdrop-blur-xl p-3 rounded-2xl border border-white/20 shadow-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                  <FiCheckCircle size={20} />
                </div>
                <div>
                  <p className="text-xs text-blue-200">Visa Success</p>
                  <p className="text-white font-bold">99.8% Approved</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
