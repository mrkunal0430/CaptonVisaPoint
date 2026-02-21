import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiDollarSign,
  FiAward,
  FiBook,
  FiMapPin,
  FiFileText,
  FiAlertCircle,
  FiTrendingUp,
  FiUsers,
  FiCalendar,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";
import SEO from "../components/SEO";
import { MbbsIndiaForm } from "../components/forms";

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

  const gradientColors = [
    "from-blue-600 to-indigo-700",
    "from-orange-500 to-orange-700",
    "from-teal-500 to-emerald-700",
    "from-purple-600 to-indigo-800",
    "from-amber-500 to-amber-700",
  ];

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
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-opacity" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-opacity" />

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 pt-4 px-4 no-scrollbar scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {universities.map((uni, idx) => {
          const bannerColors = gradientColors[idx % gradientColors.length];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex-shrink-0"
            >
              <div className="block w-64 sm:w-72 group/card relative">
                <div className="relative p-0 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] group-hover/card:shadow-[0_20px_40px_-12px_rgba(59,130,246,0.15)] group-hover/card:border-blue-100 group-hover/card:-translate-y-2 transition-all duration-500 overflow-hidden">
                  {/* Visual Banner */}
                  <div
                    className={`h-24 bg-gradient-to-br ${bannerColors} relative`}
                  >
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <div className="px-2 py-0.5 rounded-lg bg-white/90 backdrop-blur-sm text-[10px] font-bold text-slate-800">
                        {uni.ranking}
                      </div>
                      <div
                        className={`px-2 py-0.5 rounded-lg bg-white/90 backdrop-blur-sm text-[10px] font-bold ${uni.type === "Government" ? "text-blue-600" : "text-amber-600"}`}
                      >
                        {uni.type}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0 relative">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-blue-600 text-xl mx-auto -mt-7 mb-4 border border-slate-50 group-hover/card:scale-110 transition-transform duration-500">
                      <FiAward />
                    </div>

                    <h4 className="font-bold text-slate-900 text-sm leading-tight mb-2 group-hover/card:text-blue-600 transition-colors text-center line-clamp-2 min-h-[2.5rem]">
                      {uni.name}
                    </h4>

                    <div className="flex items-center justify-center gap-2 text-slate-500 text-[10px] mb-4">
                      <FiMapPin className="text-[10px] text-blue-500" />
                      <span>{uni.location}</span>
                    </div>

                    <div className="pt-4 border-t border-slate-50">
                      <button className="w-full py-2.5 rounded-xl bg-slate-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-all duration-300">
                        Enquire Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

const MbbsIndia = () => {
  const location = useLocation();

  // Handle hash-based navigation for smooth scrolling
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Wait for the page to render, then scroll
        setTimeout(() => {
          const yOffset = -80; // Offset for fixed navbar
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const stats = [
    { number: "1,28,875", label: "Total MBBS Seats", color: "text-blue-600" },
    { number: "65,193", label: "Govt/Semi-Govt", color: "text-blue-700" },
    { number: "63,682", label: "Private/Deemed", color: "text-blue-700" },
  ];

  const eligibility = [
    {
      category: "Open Category",
      marks: "Minimum 50% in PCB",
      icon: <FiUsers className="text-blue-500" />,
    },
    {
      category: "Reserved Category (SC/ST/OBC)",
      marks: "Minimum 40% in PCB",
      icon: <FiUsers className="text-blue-600" />,
    },
    {
      category: "PwD (General)",
      marks: "Minimum 45% in PCB",
      icon: <FiUsers className="text-blue-600" />,
    },
  ];

  const neetCutoff = [
    { category: "General", percentile: "50th", score: "720-701" },
    { category: "EWS", percentile: "40th", score: "700-681" },
    { category: "OBC", percentile: "40th", score: "700-681" },
    { category: "SC", percentile: "40th", score: "700-681" },
    { category: "ST", percentile: "40th", score: "700-681" },
    { category: "PwD (General)", percentile: "45th", score: "710-691" },
  ];

  const topColleges = [
    {
      name: "All India Institute of Medical Sciences (AIIMS)",
      location: "New Delhi",
      type: "Government",
      ranking: "#1 in India",
    },
    {
      name: "Christian Medical College (CMC)",
      location: "Vellore",
      type: "Private",
      ranking: "#2 in India",
    },
    {
      name: "JIPMER",
      location: "Puducherry",
      type: "Government",
      ranking: "Top 5",
    },
    {
      name: "Maulana Azad Medical College",
      location: "Delhi",
      type: "Government",
      ranking: "Top 10",
    },
    {
      name: "Grant Medical College",
      location: "Mumbai",
      type: "Government",
      ranking: "Top 10",
    },
    {
      name: "Kasturba Medical College",
      location: "Manipal",
      type: "Private",
      ranking: "Top 15",
    },
  ];

  const stateWiseSeats = [
    {
      state: "Uttar Pradesh",
      govt: "5,925",
      private: "7,500",
      total: "13,425",
    },
    { state: "Karnataka", govt: "4,249", private: "9,695", total: "13,944" },
    { state: "Tamil Nadu", govt: "5,250", private: "7,800", total: "13,050" },
    { state: "Maharashtra", govt: "6,075", private: "6,749", total: "12,824" },
    { state: "Telangana", govt: "4,390", private: "5,150", total: "9,540" },
    { state: "Gujarat", govt: "4,325", private: "3,200", total: "7,525" },
    { state: "Rajasthan", govt: "4,630", private: "2,700", total: "7,330" },
    {
      state: "Andhra Pradesh",
      govt: "3,415",
      private: "3,800",
      total: "7,215",
    },
    { state: "West Bengal", govt: "4,129", private: "2,250", total: "6,379" },
    {
      state: "Madhya Pradesh",
      govt: "3,025",
      private: "2,700",
      total: "5,725",
    },
    { state: "Kerala", govt: "1,855", private: "3,549", total: "5,404" },
    { state: "Bihar", govt: "1,645", private: "1,900", total: "3,545" },
    { state: "Odisha", govt: "1,925", private: "1,100", total: "3,025" },
    { state: "Haryana", govt: "1,060", private: "1,650", total: "2,710" },
    { state: "Chhattisgarh", govt: "1,555", private: "900", total: "2,455" },
    { state: "Assam", govt: "1,975", private: "—", total: "1,975" },
    { state: "Punjab", govt: "999", private: "900", total: "1,899" },
    { state: "Puducherry", govt: "423", private: "1,450", total: "1,873" },
    { state: "Jammu & Kashmir", govt: "1,525", private: "200", total: "1,725" },
    { state: "Uttarakhand", govt: "750", private: "700", total: "1,450" },
    { state: "Delhi", govt: "1,296", private: "100", total: "1,396" },
    { state: "Jharkhand", govt: "855", private: "400", total: "1,255" },
    { state: "Himachal Pradesh", govt: "820", private: "150", total: "970" },
    { state: "Manipur", govt: "375", private: "150", total: "525" },
    { state: "Tripura", govt: "150", private: "250", total: "400" },
    { state: "Meghalaya", govt: "100", private: "100", total: "200" },
    { state: "Goa", govt: "156", private: "—", total: "156" },
    { state: "Sikkim", govt: "—", private: "34", total: "34" },
    { state: "Andaman & Nicobar", govt: "13", private: "—", total: "13" },
    { state: "Mizoram", govt: "10", private: "—", total: "10" },
  ];

  const documents = [
    "NEET Admit Card & Score Card",
    "10th & 12th Certificates and Marksheets",
    "Category Certificate (if applicable)",
    "Domicile Certificate",
    "Aadhar Card / Identity Proof",
    "Passport Size Photographs",
    "Income Certificate (for EWS category)",
    "Transfer/Migration Certificate",
  ];

  const admissionProcess = [
    {
      step: "1",
      title: "NEET Registration",
      desc: "Register for NEET exam through NTA portal",
    },
    {
      step: "2",
      title: "NEET Exam",
      desc: "Appear for NEET exam and qualify with minimum cutoff",
    },
    {
      step: "3",
      title: "Counselling Registration",
      desc: "Register for All India Quota (AIQ) and State Quota counselling",
    },
    {
      step: "4",
      title: "Choice Filling",
      desc: "Fill preferences for colleges and courses",
    },
    {
      step: "5",
      title: "Seat Allocation",
      desc: "Seats allocated based on merit and preferences",
    },
    {
      step: "6",
      title: "Document Verification",
      desc: "Submit original documents for verification",
    },
    {
      step: "7",
      title: "Admission",
      desc: "Pay fees and complete admission formalities",
    },
  ];

  const challenges = [
    "High competition with 18 lakh+ NEET aspirants",
    "Limited government college seats",
    "High fees in private medical colleges",
    "Reservation policies reduce open category seats",
  ];

  const perks = [
    "Study in home country with family support",
    "No language barrier or cultural adjustment",
    "Lower overall cost in government colleges",
    "Better opportunities for PG and practice in India",
    "Stipend during internship year",
  ];

  return (
    <div>
      <SEO
        title="MBBS in India"
        description="Get expert guidance for MBBS admissions in India 2026-2027 — government vs private colleges, NEET eligibility & cutoff, top medical colleges, state-wise seat availability, management quota, and NRI quota. Capton Visa Point helps families make the right choice with ethical, budget-clear advice."
        keywords="MBBS in India, MBBS course in India, MBBS degree in India, MBBS education in India, study MBBS in India, MBBS admission, MBBS admission process, MBBS admission 2026, MBBS admission 2027, top MBBS colleges in India, best MBBS colleges in India, government MBBS colleges in India, private MBBS colleges in India, top government medical colleges, best private medical colleges, MBBS colleges with low fees, affordable MBBS colleges in India, AIIMS MBBS colleges, state quota MBBS colleges, low fees MBBS colleges, cheapest MBBS colleges in India, MBBS colleges under 10 lakhs, MBBS colleges under 15 lakhs, MBBS colleges under 20 lakhs, MBBS fees structure, MBBS tuition fees in India, MBBS admission in India, MBBS admission without donation, MBBS admission through NEET, NEET MBBS admission, MBBS counseling India, all India MBBS counseling, state MBBS counseling, MBBS seat allotment, NEET exam, NEET UG exam, NEET preparation, NEET exam syllabus, NEET cutoff for MBBS, NEET score for MBBS, NEET qualifying marks, NEET cutoff for government MBBS, NEET cutoff for private MBBS, private MBBS admission, management quota MBBS seats, MBBS without donation India, direct MBBS admission, NRI quota MBBS admission, MBBS in Punjab, MBBS in Haryana, MBBS in Karnataka, MBBS in Maharashtra, MBBS in Tamil Nadu, MBBS in Rajasthan, MBBS in Uttar Pradesh, MBBS in Delhi, MBBS in Gujarat, MBBS in Madhya Pradesh, MBBS in West Bengal, MBBS in Bihar, MBBS in Kerala, MBBS in Andhra Pradesh, MBBS in Telangana, MBBS colleges in Delhi, MBBS colleges in Mumbai, MBBS colleges in Bangalore, MBBS colleges in Chennai, MBBS colleges in Hyderabad, MBBS colleges in Pune, MBBS colleges in Jaipur, MBBS colleges in Lucknow, MBBS admission consultants, MBBS admission guidance, MBBS consultants in Delhi, MBBS consultants in Punjab, MBBS consultants in Haryana, MBBS consultants in Rajasthan, MBBS consultants near me"
      />
      {/* Hero Banner with Indian Theme */}
      <section className="relative min-h-screen pt-24 pb-12 flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 sm:w-32 h-20 sm:h-32 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-24 sm:w-40 h-24 sm:h-40 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 sm:w-24 h-16 sm:h-24 bg-blue-600 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 border border-orange-200">
                <span className="text-xl sm:text-2xl">🇮🇳</span>
                <span>Medical Education in India</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-700">
                  MBBS Admission
                </span>
                <br />
                <span className="text-slate-900">in India</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                NEET Based • 1,28,875 Seats • Government & Private Colleges
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-lg border-2 border-orange-100 hover:border-orange-300 transition-all"
                  >
                    <div
                      className={`text-lg sm:text-2xl md:text-3xl font-bold mb-1 ${stat.color}`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-600 leading-tight">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="#eligibility"
                  className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 sm:px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  Check Eligibility
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <a
                  href="#colleges"
                  className="bg-white text-orange-600 px-4 sm:px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold border-2 border-orange-600 hover:bg-orange-50 transition-all text-center text-sm sm:text-base"
                >
                  View Colleges
                </a>
              </div>
            </motion.div>

            {/* Right Side - Indian Monuments Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10">
                <img
                  src="/mbbs-india-banner.png"
                  alt="MBBS in India - Indian Monuments"
                  className="w-full h-auto drop-shadow-2xl max-w-md mx-auto"
                />
              </div>

              {/* Floating decorative elements */}
              <div className="absolute top-10 -right-10 w-20 h-20 bg-orange-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <div className="absolute bottom-10 -left-10 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-2xl animate-pulse delay-1000"></div>
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-auto"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border border-blue-100">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 text-center sm:text-left">
                MBBS in India 2025-26 Overview
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md">
                  <FiBook className="text-3xl sm:text-4xl text-blue-600 mb-2 sm:mb-3" />
                  <h3 className="font-bold text-slate-900 mb-1 sm:mb-2 text-sm sm:text-base">
                    Total Seats
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    1,28,875+ MBBS seats across India
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md">
                  <FiAward className="text-3xl sm:text-4xl text-blue-700 mb-2 sm:mb-3" />
                  <h3 className="font-bold text-slate-900 mb-1 sm:mb-2 text-sm sm:text-base">
                    NMC Recognized
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    All colleges approved by NMC
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md">
                  <FiCalendar className="text-3xl sm:text-4xl text-blue-700 mb-2 sm:mb-3" />
                  <h3 className="font-bold text-slate-900 mb-1 sm:mb-2 text-sm sm:text-base">
                    Duration
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    5.5 years (including internship)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indian Theme Decorative Strip */}
      <section className="py-4 sm:py-6 lg:py-8 bg-gradient-to-r from-orange-500 via-white to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="flex justify-around items-center h-full">
            <div className="text-4xl sm:text-6xl lg:text-8xl">🕉️</div>
            <div className="text-4xl sm:text-6xl lg:text-8xl hidden sm:block">
              🪷
            </div>
            <div className="text-4xl sm:text-6xl lg:text-8xl">🏛️</div>
            <div className="text-4xl sm:text-6xl lg:text-8xl hidden sm:block">
              📿
            </div>
            <div className="text-4xl sm:text-6xl lg:text-8xl">🕌</div>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <p className="text-base sm:text-xl lg:text-2xl font-bold text-slate-800 flex items-center justify-center gap-2 sm:gap-3">
            <span className="text-orange-600">●</span>
            <span>Empowering Future Doctors of India</span>
            <span className="text-blue-700">●</span>
          </p>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section id="eligibility" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              Eligibility Criteria
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-xl mx-auto">
              Check if you meet the requirements for MBBS admission in India
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {eligibility.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-md"
                >
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1 sm:mb-2 text-sm sm:text-base">
                    {item.category}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    {item.marks}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-slate-200">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <FiCheckCircle className="text-blue-600 text-xl sm:text-2xl" />
                Additional Requirements
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700 text-sm sm:text-base">
                    Completed 17 years as of December 31st
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700 text-sm sm:text-base">
                    Passed 12th with PCB and English
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700 text-sm sm:text-base">
                    NEET qualification is mandatory
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700 text-sm sm:text-base">
                    Must be Indian citizen/NRI/OCI
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NEET 2025 Cutoff */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              NEET 2025 Cutoff
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600">
              Qualifying cutoff percentile and scores by category
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl sm:rounded-2xl border border-slate-200 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[400px]">
                <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <tr>
                    <th className="px-3 sm:px-4 sm:px-6 py-3 sm:py-4 text-left font-bold text-xs sm:text-sm lg:text-base">
                      Category
                    </th>
                    <th className="px-3 sm:px-4 sm:px-6 py-3 sm:py-4 text-left font-bold text-xs sm:text-sm lg:text-base">
                      Percentile
                    </th>
                    <th className="px-3 sm:px-4 sm:px-6 py-3 sm:py-4 text-left font-bold text-xs sm:text-sm lg:text-base">
                      Score Range
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {neetCutoff.map((item, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-slate-100 ${idx % 2 === 0 ? "bg-slate-50" : "bg-white"} hover:bg-blue-50 transition-colors`}
                    >
                      <td className="px-3 sm:px-4 sm:px-6 py-3 sm:py-4 font-semibold text-slate-900 text-xs sm:text-sm lg:text-base">
                        {item.category}
                      </td>
                      <td className="px-3 sm:px-4 sm:px-6 py-3 sm:py-4 text-slate-700 text-xs sm:text-sm lg:text-base">
                        {item.percentile}
                      </td>
                      <td className="px-3 sm:px-4 sm:px-6 py-3 sm:py-4 text-blue-600 font-bold text-xs sm:text-sm lg:text-base">
                        {item.score}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Government vs Private Colleges */}
      <section
        id="govt-private"
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              Government vs Private Colleges
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600">
              Compare fees, competition, and facilities
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Government Colleges */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border-2 border-blue-200 shadow-xl">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FiAward className="text-xl sm:text-2xl text-blue-700" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">
                  Government Colleges
                </h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <FiCheckCircle className="text-blue-600 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm sm:text-base">
                      Low Fees
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">
                      ₹10,000 - 1 Lakh per year
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <FiCheckCircle className="text-blue-600 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm sm:text-base">
                      Highly Competitive
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">
                      High NEET cutoff required
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <FiCheckCircle className="text-blue-600 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm sm:text-base">
                      Better Infrastructure
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">
                      World-class facilities and faculty
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <FiCheckCircle className="text-blue-600 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm sm:text-base">
                      65,193 Seats Available
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Govt & Semi-Govt institutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Private Colleges */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border-2 border-blue-200 shadow-xl">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FiBook className="text-xl sm:text-2xl text-blue-700" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">
                  Private Colleges
                </h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <FiCheckCircle className="text-blue-600 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm sm:text-base">
                      Higher Fees
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">
                      ₹10 - 25 Lakhs per year
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <FiCheckCircle className="text-blue-600 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm sm:text-base">
                      Relatively Easier
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Lower NEET cutoff compared to govt
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <FiCheckCircle className="text-blue-600 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm sm:text-base">
                      Management Quota
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Additional seats available
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <FiCheckCircle className="text-blue-600 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm sm:text-base">
                      63,682 Seats Available
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Private & Deemed universities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Excellence Banner */}
      <section className="py-10 sm:py-12 lg:py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-8 text-white text-3xl sm:text-4xl lg:text-6xl p-4 sm:p-8">
            <div>🩺</div>
            <div>⚕️</div>
            <div>🏥</div>
            <div className="hidden sm:block">💉</div>
            <div className="hidden sm:block">🔬</div>
            <div className="hidden sm:block">🧬</div>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center text-white">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                600+
              </div>
              <div className="text-blue-100 text-xs sm:text-sm lg:text-base">
                Medical Colleges
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                5.5 Years
              </div>
              <div className="text-blue-100 text-xs sm:text-sm lg:text-base">
                Course Duration
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                NMC
              </div>
              <div className="text-blue-100 text-xs sm:text-sm lg:text-base">
                Approved
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                100%
              </div>
              <div className="text-blue-100 text-xs sm:text-sm lg:text-base">
                Practical Training
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Medical Colleges */}
      <section id="colleges" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              Top Medical Colleges in India
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600">
              Premier institutions for MBBS education
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <UniversityMinimalSlider universities={topColleges} />
          </div>
        </div>
      </section>

      {/* State-wise Seats */}
      <section id="state-seats" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              State-Wise MBBS Seats
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600">
              Top states with maximum medical seats
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-xl sm:rounded-2xl border border-slate-200 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[450px]">
                <thead className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                  <tr>
                    <th className="px-3 sm:px-4 sm:px-6 py-3 sm:py-4 text-left font-bold text-xs sm:text-sm lg:text-base">
                      State
                    </th>
                    <th className="px-3 sm:px-4 sm:px-6 py-3 sm:py-4 text-left font-bold text-xs sm:text-sm lg:text-base">
                      Govt
                    </th>
                    <th className="px-3 sm:px-4 sm:px-6 py-3 sm:py-4 text-left font-bold text-xs sm:text-sm lg:text-base">
                      Private
                    </th>
                    <th className="px-3 sm:px-4 sm:px-6 py-3 sm:py-4 text-left font-bold text-xs sm:text-sm lg:text-base">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {stateWiseSeats.map((item, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-slate-100 ${idx % 2 === 0 ? "bg-slate-50" : "bg-white"} hover:bg-orange-50 transition-colors`}
                    >
                      <td className="px-3 sm:px-4 sm:px-6 py-3 sm:py-4 font-semibold text-slate-900 text-xs sm:text-sm lg:text-base">
                        {item.state}
                      </td>
                      <td className="px-3 sm:px-4 sm:px-6 py-3 sm:py-4 text-blue-700 font-semibold text-xs sm:text-sm lg:text-base">
                        {item.govt}
                      </td>
                      <td className="px-3 sm:px-4 sm:px-6 py-3 sm:py-4 text-blue-700 font-semibold text-xs sm:text-sm lg:text-base">
                        {item.private}
                      </td>
                      <td className="px-3 sm:px-4 sm:px-6 py-3 sm:py-4 text-blue-600 font-bold text-xs sm:text-sm lg:text-base">
                        {item.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 justify-center">
              <FiFileText className="text-blue-600 text-xl sm:text-2xl lg:text-3xl" />
              Documents Required
            </h2>
            <p className="text-center text-sm sm:text-base lg:text-lg text-slate-600 mb-8 sm:mb-12">
              Keep these documents ready for counselling and admission
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {documents.map((doc, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-slate-50 rounded-lg sm:rounded-xl border border-slate-200 hover:border-blue-300 transition-colors"
                >
                  <FiCheckCircle className="text-blue-600 text-lg sm:text-xl flex-shrink-0" />
                  <span className="text-slate-700 font-medium text-xs sm:text-sm lg:text-base">
                    {doc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              Admission Process
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600">
              7-step process for MBBS admission in India
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {admissionProcess.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-md relative ml-2 mt-2"
              >
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-9 h-9 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-base sm:text-xl shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2 mt-3 sm:mt-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Perks */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              Challenges & Perks
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600">
              What to expect when pursuing MBBS in India
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Challenges */}
            <div className="bg-red-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border-2 border-red-200">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <FiAlertCircle className="text-2xl sm:text-3xl lg:text-4xl text-red-600" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">
                  Challenges
                </h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700 text-sm sm:text-base">
                      {challenge}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Perks */}
            <div className="bg-blue-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border-2 border-blue-200">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <FiTrendingUp className="text-2xl sm:text-3xl lg:text-4xl text-blue-700" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">
                  Perks
                </h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {perks.map((perk, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    <FiCheckCircle className="text-blue-600 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
                    <span className="text-slate-700 text-sm sm:text-base">
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NRI MBBS Admission Section */}
      <section
        id="nri-quota"
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden"
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-bold mb-4 sm:mb-6 shadow-lg"
            >
              <span className="text-xl sm:text-2xl">🌟</span>
              <span>NRI Quota MBBS Admission</span>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              MBBS Admission for NRI Students
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto">
              Special quota for Non-Resident Indians, OCI & PIO card holders
              seeking medical education in India
            </p>
          </div>

          {/* What is NRI Quota */}
          <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-orange-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-orange-200 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-2xl sm:text-3xl shadow-lg">
                  🎓
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
                  What is NRI Quota MBBS?
                </h3>
              </div>
              <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                NRI or Non-Resident Indian quota is a{" "}
                <span className="font-bold text-orange-600">
                  special reservation system
                </span>{" "}
                in Indian medical education. Aspirants who hold NRI, OCI
                (Overseas Citizen of India), and PIO (Person of Indian Origin)
                status may get admission in medical colleges under the NRI
                allocation of seats. This provides an excellent opportunity for
                Indian students settled abroad to pursue MBBS in India.
              </p>
            </motion.div>
          </div>

          {/* Who Qualifies */}
          <div className="max-w-6xl mx-auto mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6 sm:mb-8 text-center">
              Who Comes Under NRI Quota?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  icon: "🌍",
                  title: "Indian Origin Abroad",
                  desc: "Aspirants of Indian origin settled abroad",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: "👨‍👩‍👧‍👦",
                  title: "Children of NRIs",
                  desc: "Children of Indian citizens living abroad for business or employment",
                  color: "from-blue-600 to-blue-700",
                },
                {
                  icon: "🏛️",
                  title: "Government Employees",
                  desc: "Children of state/central govt employees on deputation abroad",
                  color: "from-blue-600 to-blue-700",
                },
                {
                  icon: "🛂",
                  title: "NRI/OCI/PIO Status",
                  desc: "Living outside India for 5+ years or holding OCI/PIO card",
                  color: "from-orange-500 to-orange-600",
                },
                {
                  icon: "🎂",
                  title: "Born Abroad",
                  desc: "Candidates born abroad but parents are Indian",
                  color: "from-pink-500 to-pink-600",
                },
                {
                  icon: "📚",
                  title: "Foreign Education",
                  desc: "Completed 10th and 12th from the residing country",
                  color: "from-blue-600 to-blue-700",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all"
                >
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-2xl sm:text-3xl mb-4 shadow-md`}
                  >
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* NRI Eligibility for NEET */}
          <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-blue-200 shadow-xl">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <FiCheckCircle className="text-2xl sm:text-3xl text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
                  NRI Eligibility Criteria for NEET
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-xl p-5 border border-blue-100">
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-base sm:text-lg">
                      <FiCalendar className="text-blue-600" />
                      Age Requirement
                    </h4>
                    <p className="text-slate-700 text-sm sm:text-base">
                      Must be at least{" "}
                      <span className="font-bold text-blue-600">
                        17 years old
                      </span>{" "}
                      as on 31st December of admission year
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-xl p-5 border border-blue-100">
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-base sm:text-lg">
                      <FiBook className="text-blue-700" />
                      Educational Qualification
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-slate-700 text-sm sm:text-base">
                        <FiCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                        <span>Passed 10th & 12th from residing country</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-700 text-sm sm:text-base">
                        <FiCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                        <span>
                          Minimum{" "}
                          <span className="font-bold text-blue-700">
                            60% marks
                          </span>{" "}
                          in PCB
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-xl p-5 border border-blue-100">
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-base sm:text-lg">
                      <FiFileText className="text-blue-700" />
                      Other Requirements
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-slate-700 text-sm sm:text-base">
                        <FiCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                        <span>Valid passport mandatory</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-700 text-sm sm:text-base">
                        <FiCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                        <span>Bonafide NRI candidates only</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-700 text-sm sm:text-base">
                        <FiCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                        <span>Real blood relation for sponsorship</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-5 border border-orange-100">
                    <div className="flex items-center gap-2 mb-2">
                      <FiAward className="text-orange-600 text-xl" />
                      <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                        NEET Qualification
                      </h4>
                    </div>
                    <p className="text-slate-700 text-sm sm:text-base">
                      Must qualify NEET-UG examination with valid score
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NRI Admission Process */}
          <div className="max-w-6xl mx-auto mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6 sm:mb-8 text-center">
              NRI MBBS Admission Process 2025-26
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
              {[
                {
                  step: "1",
                  title: "Register & Qualify NEET",
                  desc: "Register for NEET-UG and qualify with valid score",
                  icon: "📝",
                  color: "from-red-500 to-pink-500",
                },
                {
                  step: "2",
                  title: "Research Colleges",
                  desc: "Shortlist top colleges offering NRI quota seats",
                  icon: "🔍",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  step: "3",
                  title: "Prepare Documents",
                  desc: "Gather all required documents and certificates",
                  icon: "📄",
                  color: "from-blue-600 to-blue-600",
                },
                {
                  step: "4",
                  title: "NEET Counselling",
                  desc: "Participate in centralized counselling process",
                  icon: "💼",
                  color: "from-blue-600 to-blue-600",
                },
                {
                  step: "5",
                  title: "Seat Allotment",
                  desc: "Check allotment and confirm your seat",
                  icon: "✅",
                  color: "from-orange-500 to-amber-500",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border-2 border-slate-200 shadow-lg hover:shadow-2xl transition-all relative"
                >
                  <div
                    className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                  >
                    {item.step}
                  </div>
                  <div className="text-4xl mb-4 mt-4">{item.icon}</div>
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-white">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                  <FiFileText className="text-2xl sm:text-3xl text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  Required Documents for NRI Admission
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {[
                  "Valid Passport",
                  "Passport Size Photographs",
                  "Stamp Size Photographs",
                  "Joint Declaration by Parents",
                  "NOC from Ambassador/Authority",
                  "NOC from Ministry of External Affairs",
                  "Student's Visa",
                  "10th Mark Sheet",
                  "12th Mark Sheet",
                  "Passing Certificates",
                  "Health Certificate",
                  "Migration Certificate",
                ].map((doc, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20 hover:bg-white/20 transition-all"
                  >
                    <FiCheckCircle className="text-orange-400 text-lg sm:text-xl flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium">
                      {doc}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits of NRI Quota */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-700 to-blue-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-white">
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4 shadow-lg">
                  <FiTrendingUp className="text-3xl sm:text-4xl" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
                  Benefits of NRI Quota MBBS
                </h3>
                <p className="text-blue-100 text-sm sm:text-base">
                  Why choose NRI quota for medical education in India
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    icon: "🎯",
                    title: "Reserved Seats",
                    desc: "Dedicated quota ensures better chances of admission",
                  },
                  {
                    icon: "🏆",
                    title: "Quality Education",
                    desc: "Study at India's premier medical institutions",
                  },
                  {
                    icon: "💰",
                    title: "Cost-Effective",
                    desc: "More affordable than medical education abroad",
                  },
                  {
                    icon: "🌏",
                    title: "Cultural Connect",
                    desc: "Stay connected to Indian roots and culture",
                  },
                  {
                    icon: "👨‍⚕️",
                    title: "Global Recognition",
                    desc: "NMC approved degrees recognized worldwide",
                  },
                  {
                    icon: "🔄",
                    title: "Easy Transition",
                    desc: "Smooth process for students from abroad",
                  },
                ].map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all"
                  >
                    <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg sm:text-xl mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-blue-100 text-sm sm:text-base">
                        {benefit.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact-form"
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Need Help with MBBS Admission?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-orange-100 mb-6 sm:mb-8 leading-relaxed">
                Our expert counselors will guide you through NEET preparation,
                college selection, and the entire admission process.
              </p>
              <div className="space-y-3 sm:space-y-4 inline-block lg:block">
                <div className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                  <FiCheckCircle className="text-lg sm:text-xl lg:text-2xl flex-shrink-0" />
                  <span className="text-sm sm:text-base lg:text-lg">
                    NEET counselling support
                  </span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                  <FiCheckCircle className="text-lg sm:text-xl lg:text-2xl flex-shrink-0" />
                  <span className="text-sm sm:text-base lg:text-lg">
                    Government & private college guidance
                  </span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                  <FiCheckCircle className="text-lg sm:text-xl lg:text-2xl flex-shrink-0" />
                  <span className="text-sm sm:text-base lg:text-lg">
                    100% admission assistance
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full max-w-md mx-auto lg:max-w-none">
              <MbbsIndiaForm
                title="Get Expert Consultation"
                subtitle="We'll help you secure your MBBS seat"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MbbsIndia;
