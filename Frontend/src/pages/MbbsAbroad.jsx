import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiDollarSign,
  FiGlobe,
  FiCheckCircle,
  FiAward,
  FiBook,
  FiArrowRight,
  FiMapPin,
  FiClock,
  FiFileText,
  FiUsers,
} from "react-icons/fi";
import SEO from "../components/SEO";
import { MbbsAbroadForm } from "../components/forms";
import EligibilityQuiz from "../components/EligibilityQuiz";

const MbbsAbroad = () => {
  const countries = [
    {
      name: "Russia",
      flag: "🇷🇺",
      avgFees: "$3,500 - $6,000/year",
      universities: "30+",
      benefit: "WHO & NMC Approved",
      path: "/mbbs/russia",
      hasPartners: true,
      partnerCount: 6,
    },
    {
      name: "Georgia",
      flag: "🇬🇪",
      avgFees: "$4,000 - $7,000/year",
      universities: "20+",
      benefit: "European Education",
      path: "/mbbs/georgia",
      hasPartners: true,
      partnerCount: 6,
    },
    {
      name: "Uzbekistan",
      flag: "🇺🇿",
      avgFees: "$2,500 - $4,000/year",
      universities: "15+",
      benefit: "Most Affordable",
      path: "/mbbs/uzbekistan",
      hasPartners: true,
      partnerCount: 8,
    },
    {
      name: "Kazakhstan",
      flag: "🇰🇿",
      avgFees: "$3,500 - $5,000/year",
      universities: "12+",
      benefit: "Quality Infrastructure",
      path: "/mbbs/kazakhstan",
      hasPartners: true,
      partnerCount: 2,
    },
    {
      name: "Kyrgyzstan",
      flag: "🇰🇬",
      avgFees: "$3,000 - $4,500/year",
      universities: "10+",
      benefit: "English Medium",
      path: "/mbbs/kyrgyzstan",
      hasPartners: true,
      partnerCount: 7,
    },
    {
      name: "Tajikistan",
      flag: "🇹🇯",
      avgFees: "$2,500 - $3,500/year",
      universities: "5+",
      benefit: "Economical Option",
      path: "/mbbs/tajikistan",
      hasPartners: true,
      partnerCount: 1,
    },
  ];

  const topUniversities = [
    {
      name: "Crimea Federal University",
      location: "Simferopol, Russia",
      fees: "$3,500/year",
      ranking: "WHO Listed",
    },
    {
      name: "Tbilisi State Medical University",
      location: "Tbilisi, Georgia",
      fees: "$6,000/year",
      ranking: "NMC Approved",
    },
    {
      name: "Tashkent Medical Academy",
      location: "Tashkent, Uzbekistan",
      fees: "$3,200/year",
      ranking: "FAIMER Listed",
    },
    {
      name: "Al-Farabi Kazakh National University",
      location: "Almaty, Kazakhstan",
      fees: "$4,000/year",
      ranking: "Top 500 Global",
    },
  ];

  const benefits = [
    {
      icon: <FiDollarSign className="text-4xl text-green-500" />,
      title: "Affordable Fees",
      description:
        "Government-funded universities with low tuition fees. No donation or capitation fees required. Total cost much lower than private Indian colleges.",
    },
    {
      icon: <FiAward className="text-4xl text-blue-500" />,
      title: "Globally-Recognized Degrees",
      description:
        "Degrees recognized by WHO, NMC, UNESCO, FAIMER. Eligible to appear for FMGE/NEXT, USMLE, PLAB exams. Practice anywhere in the world.",
    },
    {
      icon: <FiBook className="text-4xl text-purple-500" />,
      title: "No IELTS/TOEFL Needed",
      description:
        "Complete MBBS program taught in English. No language proficiency tests required. Qualified international faculty with modern teaching methods.",
    },
    {
      icon: <FiCheckCircle className="text-4xl text-orange-500" />,
      title: "Low NEET Cutoff",
      description:
        "Just 130 marks for General category, 108 for SC/ST/OBC. Much lower than requirements for Indian colleges. Better chances of admission.",
    },
  ];

  const eligibility = [
    "NEET qualification mandatory for Indian students",
    "Minimum 50% in Physics, Chemistry, Biology (PCB) for General",
    "Minimum 40% in PCB for SC/ST/OBC candidates",
    "Completed 17 years of age as of December 31st of admission year",
    "Valid passport required",
  ];

  const documents = [
    "10th & 12th Marksheets and Certificates",
    "NEET Score Card & Admit Card",
    "Valid Passport (minimum 18 months validity)",
    "Passport size photographs (white background)",
    "HIV Test Report (negative)",
    "Birth Certificate",
    "Medical Fitness Certificate",
    "Migration Certificate (if applicable)",
  ];

  const services = [
    {
      icon: <FiUsers />,
      title: "Counselling",
      desc: "Expert guidance from medical professionals with MBBS abroad experience",
    },
    {
      icon: <FiFileText />,
      title: "Admission",
      desc: "Complete documentation and seat confirmation in top universities",
    },
    {
      icon: <FiCheckCircle />,
      title: "Documentation",
      desc: "Verification and apostille services for all documents",
    },
    {
      icon: <FiGlobe />,
      title: "Travel Arrangement",
      desc: "Air ticketing, visa, forex, airport pickup - all arranged",
    },
    {
      icon: <FiMapPin />,
      title: "Accommodation",
      desc: "Comfortable hostel accommodation with 24x7 assistance",
    },
    {
      icon: <FiBook />,
      title: "FMGE Coaching",
      desc: "Comprehensive coaching to clear FMGE/NEXT exam for India practice",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Counselling",
      desc: "Choose the right university based on budget and preferences",
    },
    {
      step: "2",
      title: "Documentation",
      desc: "Prepare and verify all required documents",
    },
    {
      step: "3",
      title: "Admission",
      desc: "Apply and receive admission confirmation letter",
    },
    {
      step: "4",
      title: "Visa Processing",
      desc: "Student visa application and approval",
    },
    {
      step: "5",
      title: "Travel",
      desc: "Flight booking, forex, and airport pickup arrangement",
    },
    {
      step: "6",
      title: "Enrollment",
      desc: "University enrollment and accommodation setup",
    },
  ];

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
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl" />
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
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
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/25">
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
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/25">
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
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300"
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
                <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-blue-100 via-purple-50 to-indigo-100 rounded-full opacity-50" />
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
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <FiCheckCircle className="text-green-600" />
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
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-6">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
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
                <div className="mb-4">{benefit.icon}</div>
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
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
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
                  <div className="text-5xl">{country.flag}</div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {country.name}
                  </h3>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-slate-600">
                    <FiDollarSign className="text-green-500" />
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
                    <FiCheckCircle className="text-purple-500" />
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Top Medical Universities
            </h2>
            <p className="text-lg text-slate-600">
              Study at world-class NMC approved universities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {topUniversities.map((uni, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {uni.name}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-600 text-sm mb-2">
                      <FiMapPin className="text-blue-500" />
                      {uni.location}
                    </div>
                    <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {uni.ranking}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-500 uppercase">
                      Tuition
                    </div>
                    <div className="text-xl font-bold text-blue-600">
                      {uni.fees}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
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
                <FiFileText className="text-purple-600" />
                Documents Required
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-slate-200">
                <ul className="space-y-4">
                  {documents.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
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
                  {service.icon}
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
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
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
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
                  <span className="text-lg text-slate-700">Free counseling session</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-2xl text-blue-500" />
                  <span className="text-lg text-slate-700">
                    Complete documentation support
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-2xl text-blue-500" />
                  <span className="text-lg text-slate-700">FMGE coaching included</span>
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
