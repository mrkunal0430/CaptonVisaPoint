import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiClock,
  FiDollarSign,
  FiBookOpen,
  FiMapPin,
  FiSend,
  FiGlobe,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const countries = [
  {
    name: "Canada",
    flag: "🇨🇦",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Popular Choice",
    badgeColor: "bg-red-500",
    stats: {
      processing: "8-12 weeks",
      cost: "Moderate",
      ielts: "Required",
    },
    features: [
      { icon: FiBookOpen, text: "Top Research Universities" },
      { icon: FiBriefcase, text: "3-Year Post-Grad Work Permit" },
      { icon: FiCheckCircle, text: "Easy PR Pathways (Express Entry)" },
    ],
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "High Wages",
    badgeColor: "bg-blue-500",
    stats: {
      processing: "4-6 weeks",
      cost: "Moderate-High",
      ielts: "Required",
    },
    features: [
      { icon: FiBookOpen, text: "Group of 8 Universities" },
      { icon: FiBriefcase, text: "4-6 Years Post-Study Work" },
      { icon: FiCheckCircle, text: "Regional Migration Options" },
    ],
  },
  {
    name: "UK",
    flag: "🇬🇧",
    image:
      "https://images.unsplash.com/photo-1529655683826-ece48428bc5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Fast Visa",
    badgeColor: "bg-indigo-600",
    stats: {
      processing: "3-4 weeks",
      cost: "High",
      ielts: "Waiver Possible",
    },
    features: [
      { icon: FiBookOpen, text: "Short 1-Year Masters" },
      { icon: FiBriefcase, text: "2-Year Graduate Route Visa" },
      { icon: FiCheckCircle, text: "No GRE/GMAT Required" },
    ],
  },
  {
    name: "USA",
    flag: "🇺🇸",
    image:
      "https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Top Ranked",
    badgeColor: "bg-purple-600",
    stats: {
      processing: "2-3 months",
      cost: "High",
      ielts: "Required",
    },
    features: [
      { icon: FiBookOpen, text: "Ivy League Education" },
      { icon: FiBriefcase, text: "OPT up to 3 Years (STEM)" },
      { icon: FiCheckCircle, text: "Global Career Exposure" },
    ],
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    image:
      "https://images.unsplash.com/photo-1560969184-10fe8719e654?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Low Cost",
    badgeColor: "bg-yellow-600",
    stats: {
      processing: "6-10 weeks",
      cost: "Very Low",
      ielts: "Not Mandatory",
    },
    features: [
      { icon: FiBookOpen, text: "Tuition-Free Public Univs" },
      { icon: FiBriefcase, text: "18-Month Job Search Visa" },
      { icon: FiCheckCircle, text: "Blue Card for Professionals" },
    ],
  },
];

const Card = ({ country, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleInteraction = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative h-[320px] sm:h-[400px] md:h-[450px] w-full perspective-1000 group cursor-pointer mx-auto max-w-[180px] sm:max-w-sm md:max-w-none"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={handleInteraction}
    >
      <motion.div
        className="relative w-full h-full duration-700 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front Face */}
        <div className="absolute inset-0 backface-hidden rounded-[2rem] overflow-hidden shadow-xl border border-white/20">
          <img
            src={country.image}
            alt={country.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-transparent to-transparent opacity-90" />

          {/* Badge */}
          <div
            className={`absolute top-4 right-4 ${country.badgeColor} text-white text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1.5 rounded-full shadow-lg backdrop-blur-md bg-opacity-90 tracking-wide uppercase`}
          >
            {country.badge}
          </div>

          <div className="absolute bottom-8 left-6 text-white z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-2 tracking-tighter drop-shadow-md">
              {country.name}
            </h3>
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-blue-200">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Study • Work • PR
            </div>
            {/* Mobile Tap Hint */}
            <div className="md:hidden mt-2 flex items-center gap-1 text-[10px] text-white/60">
              <div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center">
                👆
              </div>
              Tap to details
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 backface-hidden rounded-[2rem] overflow-hidden shadow-2xl bg-white border border-slate-100 flex flex-col justify-between rotate-y-180 relative"
          style={{ transform: "rotateY(180deg)" }}
        >
          {/* Map Pattern Background */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #000 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <FiGlobe size={120} />
          </div>

          {/* Header */}
          <div className="p-6 pb-2 relative z-10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                {country.name}{" "}
                <span className="text-2xl shadow-sm rounded-full">
                  {country.flag}
                </span>
              </h3>
              <div className="p-2 bg-slate-50 rounded-full text-slate-400">
                <FiMapPin size={18} />
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {country.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 group/item">
                  <div className="mt-1 min-w-[32px] h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors duration-300">
                    <feature.icon size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700 leading-tight">
                      {feature.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="p-6 pt-0 relative z-10 bg-gradient-to-t from-white via-white to-transparent">
            {/* Info Chips */}
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="px-3 py-1.5 bg-orange-50 text-orange-600 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-orange-100">
                <FiClock size={12} /> {country.stats.processing}
              </div>
              <div className="px-3 py-1.5 bg-green-50 text-green-600 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-green-100">
                <FiDollarSign size={12} /> {country.stats.cost}
              </div>
            </div>

            {/* CTA */}
            <Link
              to={`/study-abroad`}
              className="w-full py-4 bg-gradient-to-r from-brand-dark to-brand-blue text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-900/10 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group/btn"
            >
              Explore Opportunities
              <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Light Beam Effect on Hover (Desktop) */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />
    </motion.div>
  );
};

const CountryCards = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-slate-50">
      {/* Dynamic Background */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Airplane Animation */}
      <motion.div
        animate={{ x: ["-10vw", "110vw"], y: [20, -40] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-0 pointer-events-none z-0"
      >
        <img
          src="/Aeroplane.png"
          alt="Aeroplane"
          className="w-20 h-20 object-contain"
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-blue font-semibold tracking-wider text-xs sm:text-sm uppercase">
            Global Destinations
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-brand-dark mt-2 mb-4">
            Where Do You Want To Go?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            Discover opportunities in top study destinations. We guide you
            through universities, visas, and PR pathways.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {countries.map((country, index) => (
            <Card key={index} country={country} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryCards;
