import React, { useState, memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiGlobe,
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiSend,
  FiHelpCircle,
} from "react-icons/fi";
import InquiryPopup from "./forms/InquiryPopup";

// Services Data with local images
const services = [
  {
    name: "MBBS",
    icon: "🩺",
    image: "/Home_Hero/1.webp",
    stats: { highlight: "WHO Approved", benefit: "Low Tuition Fees" },
    link: "/mbbs",
    color: "from-blue-800 to-blue-900",
  },
  {
    name: "Study Work Settle",
    subtitle: "in Germany",
    icon: "🇩🇪",
    image: "/Home_Hero/2.webp",
    stats: { highlight: "PR Pathway", benefit: "Work Permit" },
    link: "/study-abroad/germany",
    color: "from-blue-800 to-blue-900",
  },
  {
    name: "Ausbildung",
    icon: "🎓",
    image: "/Home_Hero/3.webp",
    stats: { highlight: "Earn & Learn", benefit: "German Training" },
    link: "/ausbildung",
    color: "from-blue-800 to-blue-900",
  },
  {
    name: "Low Budget",
    subtitle: "Study Abroad",
    icon: "💰",
    image: "/Home_Hero/4.webp",
    stats: { highlight: "Affordable", benefit: "Scholarship Support" },
    link: "/study-abroad",
    color: "from-blue-800 to-blue-900",
  },
  {
    name: "Learn German",
    subtitle: "Language",
    icon: "📚",
    image: "/Home_Hero/5.webp",
    stats: { highlight: "A1 to C1", benefit: "Expert Trainers" },
    link: "/coaching",
    color: "from-blue-800 to-blue-900",
  },
  {
    name: "Healthcare Jobs",
    icon: "🏥",
    image: "/Home_Hero/6.webp",
    stats: { highlight: "UAE | Germany", benefit: "Direct Placement" },
    link: "/healthcare",
    color: "from-blue-800 to-blue-900",
  },
];

const ServiceCard = memo(({ service, index }) => {
  return (
    <Link to={service.link}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative group cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.4,
          }}
          whileHover={{ scale: 1.05, zIndex: 10 }}
        >
          {/* Main Card */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl h-36 w-28 min-[400px]:h-40 min-[400px]:w-32 sm:h-48 sm:w-40 md:h-52 md:w-44 lg:h-56 lg:w-44 border border-white/20 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-white/10 group-hover:border-white/40">
            {/* Image - Clean without color overlay */}
            <img
              src={service.image}
              alt={service.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Subtle dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Default Content - Icon & Name */}
            <div className="absolute bottom-0 left-0 w-full p-3 text-center transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4">
              <span className="text-2xl sm:text-3xl block mb-1 drop-shadow-lg">
                {service.icon}
              </span>
              <span className="text-white text-xs sm:text-sm font-bold tracking-wide drop-shadow-md block leading-tight">
                {service.name}
                {service.subtitle && (
                  <span className="block text-[10px] sm:text-xs font-medium opacity-90">
                    {service.subtitle}
                  </span>
                )}
              </span>
            </div>

            {/* Hover Content - Slides up from bottom */}
            <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              {/* Glass panel background */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

              {/* Content */}
              <div className="relative z-10 text-center space-y-2">
                <span className="text-2xl sm:text-3xl block drop-shadow-lg">
                  {service.icon}
                </span>
                <span className="text-white text-xs sm:text-sm font-bold tracking-wide block leading-tight">
                  {service.name}
                  {service.subtitle && (
                    <span className="block text-[10px] sm:text-xs font-medium opacity-90">
                      {service.subtitle}
                    </span>
                  )}
                </span>

                {/* Stats - Only visible on hover */}
                <div className="pt-2 border-t border-white/20 space-y-1">
                  <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-xs text-blue-200 font-medium">
                    <FiAward className="text-amber-400" size={12} />
                    <span>{service.stats.highlight}</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-xs text-amber-200 font-medium">
                    <FiCheckCircle className="text-amber-400" size={12} />
                    <span>{service.stats.benefit}</span>
                  </div>
                </div>

                {/* Explore text */}
                <div className="flex items-center justify-center gap-1 text-[10px] text-white/70 pt-1">
                  <span>Explore</span>
                  <FiArrowRight
                    size={10}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </div>
              </div>
            </div>

            {/* Glowing border effect on hover */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ boxShadow: "inset 0 0 20px rgba(255,255,255,0.1)" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
});

const Hero = () => {
  const [showInquiry, setShowInquiry] = useState(false);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50 to-slate-50 overflow-hidden">
      {/* 1. Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/50 to-slate-50 opacity-90" />

        {/* Animated Orbs - Soft blue tones */}
        <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-blue-200/30 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] animate-pulse" />
        <div className="absolute bottom-[0%] right-[-5%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] bg-blue-100/40 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px] animate-pulse delay-1000" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* 2. Left Content Section */}
          <div className="flex-1 text-center lg:text-left space-y-5 sm:space-y-6 max-w-xl lg:max-w-md xl:max-w-lg">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 pb-1 rounded-full bg-blue-100 border border-blue-200"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-blue-700 text-[10px] sm:text-xs font-bold tracking-wider uppercase">
                No.1 Study Abroad Consultant
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 leading-[1.1] tracking-tight"
            >
              College Seats to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900">
                Global Career Success
              </span>{" "}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xs sm:text-sm md:text-base text-black font-medium leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              Study abroad, work overseas, and build your dream future with
              expert guidance. We turn your global aspirations into reality.
            </motion.p>

            {/* 4-Button CTA Layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 min-[350px]:grid-cols-2 gap-2 sm:gap-3 w-full max-w-sm lg:max-w-md"
            >
              <Link to="/study-abroad" className="group">
                <button className="w-full py-2.5 sm:py-3 px-3 sm:px-4 bg-blue-700 rounded-lg hover:bg-blue-800 text-white font-semibold text-xs sm:text-sm transition-all flex flex-col items-center justify-center gap-1 h-full shadow-md hover:shadow-lg">
                  <FiBookOpen className="text-lg sm:text-xl" />
                  Study
                </button>
              </Link>

              <Link to="/pr-visa" className="group">
                <button className="w-full py-2.5 sm:py-3 px-3 sm:px-4 bg-blue-100 border border-blue-200 rounded-lg hover:bg-blue-700 hover:text-white hover:border-blue-700 text-blue-800 font-semibold text-xs sm:text-sm transition-all flex flex-col items-center justify-center gap-1 h-full">
                  <FiGlobe className="text-lg sm:text-xl" />
                  PR Visa
                </button>
              </Link>

              <Link to="/work-visa" className="group">
                <button className="w-full py-2.5 sm:py-3 px-3 sm:px-4 bg-blue-100 border border-blue-200 rounded-lg hover:bg-blue-700 hover:text-white hover:border-blue-700 text-blue-800 font-semibold text-xs sm:text-sm transition-all flex flex-col items-center justify-center gap-1 h-full">
                  <FiBriefcase className="text-lg sm:text-xl" />
                  Work
                </button>
              </Link>

              <Link to="/eligibility-check" className="group">
                <button className="w-full py-2.5 sm:py-3 px-3 sm:px-4 bg-amber-500 rounded-lg hover:bg-amber-600 text-white font-semibold text-xs sm:text-sm transition-all flex flex-col items-center justify-center gap-1 h-full shadow-md hover:shadow-lg">
                  <FiSend className="text-lg sm:text-xl" />
                  Free Check
                </button>
              </Link>
            </motion.div>
          </div>

          {/* 3. Right Interactive Section - Service Cards Visual */}
          <div className="flex-[1.2] w-full lg:h-[600px] relative flex md:items-center justify-center lg:justify-end">
            {/* Cards Grid - Masonry Layout */}
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-[12px] sm:gap-[16px] md:gap-[20px]">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className={`${idx % 2 !== 0 ? "mt-6 md:mt-10" : ""}`}
                >
                  <ServiceCard service={service} index={idx} />
                </div>
              ))}
            </div>

            {/* Floating CTA Element */}
            <motion.div
              animate={{ x: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[41%] -left-[5%] lg:-left-[10%] z-20 hidden sm:block"
            >
              <button
                onClick={() => setShowInquiry(true)}
                className="bg-blue-700 p-3 sm:p-4 rounded-2xl border border-blue-600 shadow-xl shadow-blue-700/20 flex items-center gap-3 hover:scale-105 hover:bg-blue-800 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white/30 transition-colors">
                  <FiHelpCircle size={22} />
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm text-blue-100 font-medium">
                    Don't know what to do?
                  </p>
                  <p className="text-white font-bold text-sm sm:text-base">
                    Get Free Counselling
                  </p>
                </div>
                <FiArrowRight className="text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </button>
            </motion.div>

            {/* Mobile Floating CTA */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              onClick={() => setShowInquiry(true)}
              className="sm:hidden fixed bottom-6 right-6 z-50 bg-blue-700 p-4 rounded-full shadow-xl shadow-blue-700/30 flex items-center justify-center text-white hover:scale-110 hover:bg-blue-800 transition-all"
            >
              <FiHelpCircle size={24} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Inquiry Popup */}
      <InquiryPopup
        isOpen={showInquiry}
        onClose={() => setShowInquiry(false)}
      />
    </section>
  );
};

export default Hero;
