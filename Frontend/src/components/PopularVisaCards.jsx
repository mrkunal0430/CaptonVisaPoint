import React, { useState, memo, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";

// MBBS destination data with country maps and visa types
const mbbsCountries = [
  {
    id: "russia",
    country: "Russia",
    gradient: "from-blue-500 via-blue-600 to-blue-700",
    mapSvg: (
      <img
        src="/Home_Map/Russia.webp"
        alt="Russia map"
        loading="lazy"
        className="w-full h-full object-cover"
      />
    ),
    visaTypes: [
      "PR Visa",
      "Work Visa",
      "Student Visa",
      "FMGE Support",
      "Express Entry",
      "Business Visa",
    ],
  },
  {
    id: "georgia",
    country: "Georgia",
    gradient: "from-blue-500 via-blue-600 to-blue-700",
    mapSvg: (
      <img
        src="/Home_Map/Georgia.webp"
        alt="Georgia map"
        loading="lazy"
        className="w-full h-full object-cover"
      />
    ),
    visaTypes: [
      "PR Visa",
      "Work Visa",
      "Student Visa",
      "Blue Card",
      "Freelancer Visa",
      "Visit Visa",
    ],
  },
  {
    id: "uzbekistan",
    country: "Uzbekisthan",
    gradient: "from-blue-500 via-blue-600 to-blue-700",
    mapSvg: (
      <img
        src="/Home_Map/Uzbekisthan.webp"
        alt="Uzbekistan map"
        loading="lazy"
        className="w-full h-full object-cover"
      />
    ),
    visaTypes: [
      "PR Visa",
      "Work Visa",
      "Student Visa",
      "Investor Visa",
      "Business Visa",
      "Visit Visa",
    ],
  },
  {
    id: "kazakhstan",
    country: "Kazakhstan",
    gradient: "from-blue-500 via-blue-600 to-blue-700",
    mapSvg: (
      <img
        src="/Home_Map/Kazakhstan.webp"
        alt="Kazakhstan map"
        loading="lazy"
        className="w-full h-full object-cover"
      />
    ),
    visaTypes: [
      "PR Visa",
      "Work Visa",
      "Student Visa",
      "Investor Visa",
      "Business Visa",
      "Visit Visa",
    ],
  },
  {
    id: "kyrgyzstan",
    country: "Kyrgyzstan",
    gradient: "from-blue-500 via-blue-600 to-blue-700",
    mapSvg: (
      <img
        src="/Home_Map/Kyrgystan.webp"
        alt="Kyrgyzstan map"
        loading="lazy"
        className="w-full h-full object-cover"
      />
    ),
    visaTypes: [
      "PR Visa",
      "Work Visa",
      "Student Visa",
      "Investor Visa",
      "Business Visa",
      "Visit Visa",
    ],
  },
  {
    id: "tajikistan",
    country: "Tajikistan",
    gradient: "from-blue-500 via-blue-600 to-blue-700",
    mapSvg: (
      <img
        src="/Home_Map/Tajikistan.webp"
        alt="Tajikistan map"
        loading="lazy"
        className="w-full h-full object-cover"
      />
    ),
    visaTypes: [
      "PR Visa",
      "Work Visa",
      "Student Visa",
      "Investor Visa",
      "Business Visa",
      "Visit Visa",
    ],
  },
];

// Flip Card Component with 4:3 aspect ratio
const FlipCard = memo(({ data, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleInteraction = () => {
    if (isMobile) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="aspect-[4/3] perspective-1000"
      onMouseEnter={() => !isMobile && setIsFlipped(true)}
      onMouseLeave={() => !isMobile && setIsFlipped(false)}
      onClick={handleInteraction}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT SIDE */}
        <div
          className="absolute inset-0 rounded-2xl bg-white overflow-hidden shadow-xl cursor-pointer border border-slate-200"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* Country Map - Background (Full display, no overlay) */}
          <div className="absolute inset-0">
            <div className="w-full h-full">{data.mapSvg}</div>
          </div>

          {/* Top accent bar */}
          <div
            className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${data.gradient}`}
          />

          {/* Country Name with background for readability */}
          <div className="absolute top-4 right-4 z-10">
            <h3 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
              {data.country}
            </h3>
          </div>

          {/* Bottom text hint with background */}
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <div className="bg-black backdrop-blur-sm px-3 py-2 rounded-lg">
              <p className="text-white text-xs sm:text-sm font-medium">
                {isMobile
                  ? "Tap to view visa types →"
                  : "Hover to view visa types →"}
              </p>
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${data.gradient} overflow-hidden shadow-xl p-5 cursor-pointer`}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 h-full flex flex-col">
            {/* Header */}
            <div className="mb-3">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {data.country}
              </h3>
              <div className="h-0.5 w-12 bg-white/70 rounded-full" />
            </div>

            {/* Visa Types List */}
            <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
              {data.visaTypes.map((visa, idx) => (
                <div key={idx} className="flex items-center gap-2 group">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                    <FiCheckCircle className="text-white w-2.5 h-2.5" />
                  </div>
                  <span className="text-white font-medium text-xs sm:text-sm">
                    {visa}
                  </span>
                </div>
              ))}
            </div>

            {/* Explore Link */}
            <Link
              to={`/mbbs/${data.id}`}
              className="mt-3 flex items-center gap-1 text-white/90 hover:text-white text-xs sm:text-sm font-semibold"
              onClick={(e) => e.stopPropagation()}
            >
              Explore MBBS <FiArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

const PopularVisaCards = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-bg-soft to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-blue-soft/60 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-blue-soft/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Desktop: Split Screen Layout (1:3 ratio) */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 items-start">
          {/* LEFT PORTION (1/4) - Title & Description - Sticky */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-24 space-y-6"
          >
            <div>
              <h2 className="text-4xl xl:text-5xl font-black text-brand-dark mb-4 leading-tight">
                Popular MBBS
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-blue-light">
                  Destinations
                </span>
              </h2>
              <div className="h-1.5 w-16 bg-brand-blue rounded-full mb-6" />
              <p className="text-lg text-gray-600 leading-relaxed">
                Expert guidance for your medical education journey abroad with
                FMGE support.
              </p>
            </div>

            {/* CTA Button */}
            <Link
              to="/mbbs/abroad"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-white font-bold rounded-full hover:bg-brand-blue-dark hover:shadow-lg hover:shadow-brand-blue/25 hover:scale-105 transition-all duration-300 text-sm"
            >
              View All Countries <FiArrowRight />
            </Link>
          </motion.div>

          {/* RIGHT PORTION (3/4) - Cards Grid */}
          <div className="lg:col-span-3 grid grid-cols-2 xl:grid-cols-3 gap-5">
            {mbbsCountries.map((data, index) => (
              <FlipCard key={data.id} data={data} index={index} />
            ))}
          </div>
        </div>

        {/* Mobile & Tablet: Stacked Layout */}
        <div className="lg:hidden space-y-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-brand-dark mb-3">
              Popular MBBS{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-blue-light">
                Destinations
              </span>
            </h2>
            <div className="h-1.5 w-16 bg-brand-blue rounded-full mx-auto mb-4" />
            <p className="text-base text-gray-600 max-w-lg mx-auto">
              Expert guidance for your medical education journey abroad
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {mbbsCountries.map((data, index) => (
              <FlipCard key={data.id} data={data} index={index} />
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/mbbs/abroad"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white font-bold rounded-full hover:bg-brand-blue-dark hover:shadow-lg hover:shadow-brand-blue/25 hover:scale-105 transition-all duration-300"
            >
              View All MBBS Countries <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </section>
  );
};

export default PopularVisaCards;
