import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";

// MBBS destination data with country maps and visa types
const mbbsCountries = [
  {
    id: "russia",
    country: "Russia",
    gradient: "from-red-500 via-rose-600 to-red-800",
    mapSvg: (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <path
          d="M95,15 L90,12 L80,10 L70,8 L60,10 L50,8 L40,12 L30,10 L20,15 L15,20 L10,30 L12,40 L15,45 L25,50 L35,48 L45,52 L55,50 L65,55 L75,52 L85,48 L92,42 L95,35 L93,25 Z"
          fill="currentColor"
        />
      </svg>
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
    gradient: "from-orange-500 via-amber-500 to-yellow-600",
    mapSvg: (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <path
          d="M20,25 L30,20 L45,18 L60,20 L75,22 L85,28 L88,35 L82,42 L70,45 L55,43 L40,45 L25,42 L15,35 L18,28 Z"
          fill="currentColor"
        />
      </svg>
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
    country: "Uzbekistan",
    gradient: "from-blue-500 via-cyan-500 to-teal-600",
    mapSvg: (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <path
          d="M15,20 L25,15 L40,18 L55,15 L70,20 L80,25 L85,35 L80,45 L65,50 L50,48 L35,50 L20,45 L12,35 L15,25 Z"
          fill="currentColor"
        />
      </svg>
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
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    mapSvg: (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <path
          d="M10,22 L25,15 L45,12 L65,15 L85,18 L95,28 L92,40 L80,48 L60,52 L40,50 L20,48 L8,38 L10,28 Z"
          fill="currentColor"
        />
      </svg>
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
    gradient: "from-pink-500 via-rose-500 to-red-600",
    mapSvg: (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <path
          d="M20,20 L35,15 L55,18 L75,20 L85,28 L82,40 L68,48 L48,50 L30,46 L18,38 L15,28 Z"
          fill="currentColor"
        />
      </svg>
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
    gradient: "from-purple-500 via-violet-500 to-indigo-600",
    mapSvg: (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <path
          d="M25,18 L42,12 L62,15 L78,22 L82,35 L75,48 L55,52 L35,48 L20,40 L18,28 Z"
          fill="currentColor"
        />
      </svg>
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
const FlipCard = ({ data, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
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
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${data.gradient} overflow-hidden shadow-xl cursor-pointer`}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* Country Map - Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-25">
            <div className="w-[85%] h-[85%] text-white">{data.mapSvg}</div>
          </div>

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Decorative circles */}
          <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/10" />
          <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-full bg-white/10" />

          {/* Country Name */}
          <div className="absolute top-5 left-5 z-10">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-lg">
              {data.country}
            </h3>
            <div className="h-1 w-10 bg-white/70 mt-2 rounded-full" />
          </div>

          {/* Bottom text hint */}
          <div className="absolute bottom-4 left-5 right-5 z-10">
            <p className="text-white/80 text-xs sm:text-sm font-medium">
              {isMobile
                ? "Tap to view visa types →"
                : "Hover to view visa types →"}
            </p>
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
};

const PopularVisaCards = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

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
              <h2 className="text-4xl xl:text-5xl font-black text-gray-900 mb-4 leading-tight">
                Popular MBBS
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                  Destinations
                </span>
              </h2>
              <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6" />
              <p className="text-lg text-gray-600 leading-relaxed">
                Expert guidance for your medical education journey abroad with
                FMGE support.
              </p>
            </div>

            {/* CTA Button */}
            <Link
              to="/mbbs/abroad"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
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
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
              Popular MBBS{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Destinations
              </span>
            </h2>
            <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4" />
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View All MBBS Countries <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
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
