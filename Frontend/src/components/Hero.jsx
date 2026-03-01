import React, { useState, memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiSend,
  FiHelpCircle,
  FiPhoneCall,
} from "react-icons/fi";
import InquiryPopup from "./forms/InquiryPopup";

const services = [
  {
    name: "MBBS",
    icon: "🩺",
    image: "/Home_Hero/1.webp",
    stats: { highlight: "WHO Approved", benefit: "Low Tuition Fees" },
    link: "/mbbs",
  },
  {
    name: "Study Work Settle",
    subtitle: "in Germany",
    icon: "🌍",
    image: "/Home_Hero/2.webp",
    stats: { highlight: "PR Pathway", benefit: "Work Permit" },
    link: "/study-abroad/germany",
  },
  {
    name: "Ausbildung",
    icon: "🎓",
    image: "/Home_Hero/3.webp",
    stats: { highlight: "Earn & Learn", benefit: "German Training" },
    link: "/ausbildung",
  },
  {
    name: "Low Budget",
    subtitle: "Study Abroad",
    icon: "💰",
    image: "/Home_Hero/4.webp",
    stats: { highlight: "Affordable", benefit: "Scholarship Support" },
    link: "/study-abroad",
  },
  {
    name: "Learn German",
    subtitle: "Language",
    icon: "📚",
    image: "/Home_Hero/5.webp",
    stats: { highlight: "A1 to C1", benefit: "Expert Trainers" },
    link: "/coaching",
  },
  {
    name: "Healthcare Jobs",
    icon: "🏥",
    image: "/Home_Hero/6.webp",
    stats: { highlight: "UAE | Germany", benefit: "Direct Placement" },
    link: "/healthcare",
  },
];

const ServiceCard = memo(({ service }) => (
  <Link to={service.link} className="block flex-shrink-0">
    <div className="relative group cursor-pointer">
      <div
        className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-white/20 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/15 group-hover:border-blue-300/40
        h-[190px] w-[148px]
        min-[400px]:h-52 min-[400px]:w-[160px]
        sm:h-48 sm:w-40
        md:h-56 md:w-48
        lg:h-64 lg:w-52"
      >
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* Default state */}
        <div className="absolute bottom-0 left-0 w-full p-2 sm:p-4 text-center transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4">
          <span className="text-lg sm:text-2xl md:text-3xl block mb-1 sm:mb-1.5 drop-shadow-lg">
            {service.icon}
          </span>
          <span className="text-white text-[10px] sm:text-xs md:text-sm font-bold tracking-wide drop-shadow-md block leading-tight">
            {service.name}
            {service.subtitle && (
              <span className="block text-[8px] sm:text-[10px] md:text-xs font-medium opacity-90">
                {service.subtitle}
              </span>
            )}
          </span>
        </div>

        {/* Hover state */}
        <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
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
            <div className="flex items-center justify-center gap-1 text-[10px] text-white/70 pt-1">
              <span>Explore</span>
              <FiArrowRight
                size={10}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: "inset 0 0 20px rgba(255,255,255,0.1)" }}
        />
      </div>
    </div>
  </Link>
));

const Hero = () => {
  const [showInquiry, setShowInquiry] = useState(false);

  // Double the services for seamless infinite scroll
  const marqueeServices = [...services, ...services, ...services];

  return (
    <section className="relative sm:min-h-screen flex flex-col justify-center bg-gradient-to-br from-white via-blue-50 to-slate-50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50/50 to-slate-100 opacity-90" />
        <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-blue-200/30 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] animate-pulse" />
        <div className="absolute bottom-[0%] right-[-5%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] bg-blue-100/40 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px] animate-pulse delay-1000" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-indigo-100/20 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* ===== ROW 1: Hero Text ===== */}
      <div className="relative z-10 pt-5 pb-3">
        <div className="container mx-auto sm:px-6 lg:px-8 text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl min-[400px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold text-slate-800 leading-[1.1] tracking-tight max-w-4xl mx-auto"
          >
            College Seats to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800">
              Global Career Success
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-3 sm:mt-5 text-xs min-[400px]:text-sm sm:text-base md:text-lg lg:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto px-2 sm:px-0"
          >
            Study abroad, work overseas, and build your dream future with expert
            guidance. We turn your global aspirations into reality.
          </motion.p>
        </div>
      </div>

      {/* ===== ROW 2: Moving Cards (Infinite Marquee) ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="relative z-10 px-2 sm:px-6 md:px-10 py-3 sm:py-6"
      >
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 lg:w-32 bg-gradient-to-r from-blue-100 via-blue-100/80 to-transparent z-20 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 lg:w-32 bg-gradient-to-l from-slate-100 via-slate-100/80 to-transparent z-20 pointer-events-none" />

        <div className="overflow-hidden">
          <div className="hero-marquee-track flex gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {marqueeServices.map((service, idx) => (
              <ServiceCard key={idx} service={service} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* ===== ROW 3: Four CTA Buttons ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 pt-4 sm:pt-8 pb-6 sm:pb-14 lg:pb-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap lg:flex-nowrap items-stretch justify-center gap-2.5 min-[400px]:gap-3 sm:gap-4 max-w-[280px] min-[400px]:max-w-sm sm:max-w-3xl lg:max-w-5xl mx-auto">
            {/* 1: Free Eligibility Check */}
            <Link to="/eligibility-check" className="block">
              <button className="group relative w-full h-full sm:w-auto px-3 min-[400px]:px-5 sm:px-6 py-2.5 min-[400px]:py-3 sm:py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg sm:rounded-xl hover:from-amber-600 hover:to-amber-700 text-white font-semibold text-[11px] min-[400px]:text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5 whitespace-nowrap">
                <FiSend className="text-sm sm:text-base shrink-0" />
                Free Eligibility Check
              </button>
            </Link>

            {/* 2: Call Us — triggers phone dialer */}
            <a href="tel:+919914773125" className="block">
              <button className="group relative w-full h-full sm:w-auto px-3 min-[400px]:px-5 sm:px-6 py-2.5 min-[400px]:py-3 sm:py-3.5 bg-blue-700 rounded-lg sm:rounded-xl hover:bg-blue-800 text-white font-semibold text-[11px] min-[400px]:text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg shadow-blue-700/20 hover:shadow-xl hover:shadow-blue-700/30 hover:-translate-y-0.5 whitespace-nowrap">
                <FiPhoneCall className="text-sm sm:text-base shrink-0" />
                Don't Know? Call Us
              </button>
            </a>

            {/* 3: Apply Now — opens inquiry popup */}
            <button
              onClick={() => setShowInquiry(true)}
              className="group relative w-full h-full sm:w-auto px-3 min-[400px]:px-5 sm:px-6 py-2.5 min-[400px]:py-3 sm:py-3.5 bg-white border border-blue-200 rounded-lg sm:rounded-xl hover:bg-blue-700 hover:text-white hover:border-blue-700 text-blue-800 font-semibold text-[11px] min-[400px]:text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 sm:gap-2 shadow-sm hover:shadow-lg hover:shadow-blue-700/20 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <FiArrowRight className="text-sm sm:text-base shrink-0" />
              Apply Now
            </button>

            {/* 4: Jobs After 12th — navigates to page */}
            <Link to="/jobs-abroad/after-12th" className="block">
              <button className="group relative w-full h-full sm:w-auto px-3 min-[400px]:px-5 sm:px-6 py-2.5 min-[400px]:py-3 sm:py-3.5 bg-white border border-blue-200 rounded-lg sm:rounded-xl hover:bg-blue-700 hover:text-white hover:border-blue-700 text-blue-800 font-semibold text-[11px] min-[400px]:text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 sm:gap-2 shadow-sm hover:shadow-lg hover:shadow-blue-700/20 hover:-translate-y-0.5 whitespace-nowrap">
                <FiBriefcase className="text-sm sm:text-base shrink-0" />
                Jobs After 12th
              </button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Mobile floating CTA */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        onClick={() => setShowInquiry(true)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-blue-700 p-4 rounded-full shadow-xl shadow-blue-700/30 flex items-center justify-center text-white hover:scale-110 hover:bg-blue-800 transition-all"
      >
        <FiHelpCircle size={24} />
      </motion.button>

      <InquiryPopup
        isOpen={showInquiry}
        onClose={() => setShowInquiry(false)}
      />
    </section>
  );
};

export default Hero;
