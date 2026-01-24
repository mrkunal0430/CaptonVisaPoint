import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const visaData = [
  {
    id: 1,
    country: "CANADA",
    gradient: "from-red-600 via-purple-600 to-blue-900",
    mapSvg: (
      <svg
        viewBox="0 0 200 200"
        className="absolute right-0 top-0 w-full h-full opacity-30"
      >
        <path
          d="M160,40 Q120,20 100,30 Q90,35 85,40 L80,50 Q75,60 70,65 L65,70 Q60,75 55,80 L50,90 Q45,100 40,110 L60,120 Q70,125 80,130 L90,135 Q100,140 110,145 L120,150 Q130,155 140,160 L145,165 Q150,170 155,175 L160,180 Q170,175 175,170 L180,165 Q185,160 190,150 L185,140 Q180,130 175,120 L170,110 Q165,100 160,90 L165,80 Q170,70 175,60 L180,50 Q175,45 170,40 Z"
          fill="white"
        />
      </svg>
    ),
    visaTypes: [
      "PR Visa",
      "Work Visa",
      "Student Visa",
      "Floater Visa",
      "Program",
      "Express Entry Program",
      "PNP",
      "Business Visa",
    ],
  },
  {
    id: 2,
    country: "AUSTRALIA",
    gradient: "from-orange-500 via-yellow-600 to-gray-900",
    mapSvg: (
      <svg
        viewBox="0 0 200 200"
        className="absolute right-0 top-0 w-full h-full opacity-30"
      >
        <path
          d="M140,30 Q160,35 175,50 L180,65 Q185,80 185,95 L180,110 Q175,125 170,135 L160,145 Q150,155 135,160 L120,165 Q105,170 90,165 L75,160 Q60,155 50,145 L40,130 Q35,115 35,100 L40,85 Q45,70 55,60 L70,50 Q85,40 100,35 L115,32 Q125,30 140,30 Z M95,70 Q105,65 115,70 L120,80 Q115,85 110,90 Z M145,95 Q150,105 145,115 L135,120 Q130,115 135,105 Z"
          fill="white"
        />
      </svg>
    ),
    visaTypes: [
      "PR Visa",
      "Work Visa",
      "Student Visa",
      "Blue Card",
      "Freelancer Visa",
      "Blue Card",
      "Freelancer Visa",
      "Visit Visa",
    ],
  },
  {
    id: 4,
    country: "UK",
    gradient: "from-blue-600 via-indigo-700 to-gray-900",
    mapSvg: (
      <svg
        viewBox="0 0 200 200"
        className="absolute right-0 top-0 w-full h-full opacity-30"
      >
        <path
          d="M100,20 Q105,22 110,25 L115,30 Q120,35 122,40 L125,50 Q127,60 125,70 L122,80 Q120,85 118,88 L115,92 Q112,95 108,98 L100,100 Q95,102 90,100 L85,98 Q82,95 80,92 L78,88 Q75,85 74,80 L72,70 Q70,60 72,50 L74,40 Q76,35 80,30 L85,25 Q90,22 95,20 Z M105,110 Q110,112 115,115 L120,120 Q125,125 128,130 L132,140 Q135,150 132,160 L128,170 Q125,175 120,180 L115,185 Q110,188 105,190 L95,188 Q90,186 85,182 L80,175 Q75,168 73,160 L70,150 Q68,140 70,130 L73,120 Q75,115 80,110 L85,107 Q90,105 95,105 Z"
          fill="white"
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
    id: 5,
    country: "UAE",
    gradient: "from-emerald-500 via-teal-600 to-gray-900",
    mapSvg: (
      <svg
        viewBox="0 0 200 200"
        className="absolute right-0 top-0 w-full h-full opacity-30"
      >
        <path
          d="M150,50 Q160,55 165,65 L168,75 Q170,85 168,95 L165,105 Q162,115 155,125 L148,135 Q140,145 130,150 L120,155 Q110,158 100,155 L90,150 Q80,145 72,135 L65,125 Q58,115 55,105 L52,95 Q50,85 52,75 L55,65 Q60,55 70,50 L80,47 Q90,45 100,47 L110,50 Q120,52 130,55 Z"
          fill="white"
        />
      </svg>
    ),
    visaTypes: [
      "PR Visa",
      "Work Visa",
      "Student Visa",
      "Investor Visa",
      "Busines Visa",
      "Visit Visa",
    ],
  },
];

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
      className="h-[280px] perspective-1000"
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
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${data.gradient} overflow-hidden shadow-2xl cursor-pointer`}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* Country Map SVG */}
          {data.mapSvg}

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Country Name */}
          <div className="absolute top-8 left-8 z-10">
            <h3 className="text-4xl font-black text-white tracking-tight drop-shadow-2xl">
              {data.country}
            </h3>
            <div className="h-1 w-12 bg-white/80 mt-2 rounded-full" />
          </div>

          {/* Bottom text hint */}
          <div className="absolute bottom-8 left-8 right-8 z-10">
            <p className="text-white/90 text-sm font-medium">
              {isMobile
                ? "Tap to view visa types →"
                : "Hover to view visa types →"}
            </p>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm" />
          <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full bg-white/5 backdrop-blur-sm" />
        </div>

        {/* BACK SIDE */}
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${data.gradient} overflow-hidden shadow-2xl p-8 cursor-pointer`}
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
            <div className="mb-6">
              <h3 className="text-3xl font-black text-white mb-1">
                {data.country}
              </h3>
              <div className="h-1 w-16 bg-white/80 rounded-full" />
            </div>

            {/* Visa Types List */}
            <div className="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
              {data.visaTypes.map((visa, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <FiCheckCircle className="text-white w-3 h-3" />
                  </div>
                  <span className="text-white font-medium text-sm group-hover:translate-x-1 transition-transform">
                    {visa}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const PopularVisaCards = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Large Screen: Split Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT HALF - Header & Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-24 space-y-8"
          >
            <div>
              <h2 className="text-6xl font-black text-gray-900 mb-6 leading-tight">
                Popular Visa
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                  Destinations
                </span>
              </h2>
              <div className="h-2 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6" />
              <p className="text-xl text-gray-600 leading-relaxed">
                We offer expert guidance and support that increases your chances
                of visa success.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="text-4xl font-black text-blue-600 mb-2">
                  98%
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Success Rate
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="text-4xl font-black text-purple-600 mb-2">
                  50+
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Countries
                </div>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-500 italic"
            >
              "Hover over each card to discover the visa types available for
              your dream destination."
            </motion.p>
          </motion.div>

          {/* RIGHT HALF - Cards in 2 Columns */}
          <div className="grid grid-cols-2 gap-6">
            {visaData.map((data, index) => (
              <div key={data.id} className={index % 2 === 1 ? "mt-12" : ""}>
                <FlipCard data={data} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet: Standard Layout */}
        <div className="lg:hidden space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Popular Visa
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We offer expert guidance and support that increases your chances
              of visa success.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visaData.map((data, index) => (
              <FlipCard key={data.id} data={data} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
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
