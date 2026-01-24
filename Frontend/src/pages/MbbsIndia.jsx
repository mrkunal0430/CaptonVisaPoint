import React from "react";
import { Link } from "react-router-dom";
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
} from "react-icons/fi";
import LeadForm from "../components/LeadForm";

const MbbsIndia = () => {
  const stats = [
    { number: "117,825", label: "Total MBBS Seats", color: "text-blue-600" },
    { number: "59,860", label: "Govt/Semi-Govt", color: "text-green-600" },
    { number: "57,965", label: "Private/Deemed", color: "text-purple-600" },
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
      icon: <FiUsers className="text-green-500" />,
    },
    {
      category: "PwD (General)",
      marks: "Minimum 45% in PCB",
      icon: <FiUsers className="text-purple-500" />,
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
    { state: "Uttar Pradesh", govt: "4,640", private: "4,690", total: "9,330" },
    { state: "Karnataka", govt: "3,640", private: "7,140", total: "10,780" },
    { state: "Maharashtra", govt: "4,480", private: "5,520", total: "10,000" },
    { state: "Tamil Nadu", govt: "3,550", private: "3,800", total: "7,350" },
    { state: "Rajasthan", govt: "2,310", private: "2,950", total: "5,260" },
    { state: "Delhi", govt: "1,028", private: "850", total: "1,878" },
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
      {/* Hero Banner with Indian Theme */}
      <section className="relative min-h-[75vh] flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-purple-50 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-500 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-orange-200">
                <span className="text-2xl">🇮🇳</span>
                <span>Medical Education in India</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-purple-600">
                  MBBS Admission
                </span>
                <br />
                <span className="text-slate-900">in India</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
                NEET Based • 117,825 Seats • Government & Private Colleges
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="bg-white rounded-2xl p-4 shadow-lg border-2 border-orange-100 hover:border-orange-300 transition-all"
                  >
                    <div
                      className={`text-2xl md:text-3xl font-bold mb-1 ${stat.color}`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-xs text-slate-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="#eligibility"
                  className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2"
                >
                  Check Eligibility
                  <svg
                    className="w-5 h-5"
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
                  className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold border-2 border-orange-600 hover:bg-orange-50 transition-all"
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
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="/mbbs-india-banner.png"
                  alt="MBBS in India - Indian Monuments"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>

              {/* Floating decorative elements */}
              <div className="absolute top-10 -right-10 w-20 h-20 bg-orange-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <div className="absolute bottom-10 -left-10 w-24 h-24 bg-purple-400 rounded-full opacity-20 blur-2xl animate-pulse delay-1000"></div>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-blue-100">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                MBBS in India 2025-26 Overview
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <FiBook className="text-4xl text-blue-600 mb-3" />
                  <h3 className="font-bold text-slate-900 mb-2">Total Seats</h3>
                  <p className="text-slate-600 text-sm">
                    117,825 MBBS seats across India
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <FiAward className="text-4xl text-green-600 mb-3" />
                  <h3 className="font-bold text-slate-900 mb-2">
                    NMC Recognized
                  </h3>
                  <p className="text-slate-600 text-sm">
                    All colleges approved by NMC
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <FiCalendar className="text-4xl text-purple-600 mb-3" />
                  <h3 className="font-bold text-slate-900 mb-2">Duration</h3>
                  <p className="text-slate-600 text-sm">
                    5.5 years (including internship)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indian Theme Decorative Strip */}
      <section className="py-8 bg-gradient-to-r from-orange-500 via-white to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="flex justify-around items-center h-full">
            <div className="text-8xl">🕉️</div>
            <div className="text-8xl">🪷</div>
            <div className="text-8xl">🏛️</div>
            <div className="text-8xl">📿</div>
            <div className="text-8xl">🕌</div>
          </div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <p className="text-2xl font-bold text-slate-800 flex items-center justify-center gap-3">
            <span className="text-orange-600">●</span>
            <span>Empowering Future Doctors of India</span>
            <span className="text-green-600">●</span>
          </p>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section id="eligibility" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Eligibility Criteria
            </h2>
            <p className="text-lg text-slate-600">
              Check if you meet the requirements for MBBS admission in India
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {eligibility.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    {item.category}
                  </h3>
                  <p className="text-slate-600">{item.marks}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <FiCheckCircle className="text-blue-600" />
                Additional Requirements
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-slate-700">
                    Completed 17 years as of December 31st
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-slate-700">
                    Passed 12th with PCB and English
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-slate-700">
                    NEET qualification is mandatory
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-slate-700">
                    Must be Indian citizen/NRI/OCI
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NEET 2025 Cutoff */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              NEET 2025 Cutoff
            </h2>
            <p className="text-lg text-slate-600">
              Qualifying cutoff percentile and scores by category
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Category</th>
                    <th className="px-6 py-4 text-left font-bold">
                      Percentile
                    </th>
                    <th className="px-6 py-4 text-left font-bold">
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
                      <td className="px-6 py-4 font-semibold text-slate-900">
                        {item.category}
                      </td>
                      <td className="px-6 py-4 text-slate-700">
                        {item.percentile}
                      </td>
                      <td className="px-6 py-4 text-blue-600 font-bold">
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
        className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Government vs Private Colleges
            </h2>
            <p className="text-lg text-slate-600">
              Compare fees, competition, and facilities
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Government Colleges */}
            <div className="bg-white rounded-3xl p-8 border-2 border-green-200 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <FiAward className="text-2xl text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Government Colleges
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Low Fees</p>
                    <p className="text-sm text-slate-600">
                      ₹10,000 - 1 Lakh per year
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">
                      Highly Competitive
                    </p>
                    <p className="text-sm text-slate-600">
                      High NEET cutoff required
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">
                      Better Infrastructure
                    </p>
                    <p className="text-sm text-slate-600">
                      World-class facilities and faculty
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">
                      59,860 Seats Available
                    </p>
                    <p className="text-sm text-slate-600">
                      Govt & Semi-Govt institutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Private Colleges */}
            <div className="bg-white rounded-3xl p-8 border-2 border-purple-200 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <FiBook className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Private Colleges
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Higher Fees</p>
                    <p className="text-sm text-slate-600">
                      ₹10 - 25 Lakhs per year
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">
                      Relatively Easier
                    </p>
                    <p className="text-sm text-slate-600">
                      Lower NEET cutoff compared to govt
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">
                      Management Quota
                    </p>
                    <p className="text-sm text-slate-600">
                      Additional seats available
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">
                      57,965 Seats Available
                    </p>
                    <p className="text-sm text-slate-600">
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
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-6 gap-8 text-white text-6xl p-8">
            <div>🩺</div>
            <div>⚕️</div>
            <div>🏥</div>
            <div>💉</div>
            <div>🔬</div>
            <div>🧬</div>
          </div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">600+</div>
              <div className="text-blue-100">Medical Colleges</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5.5 Years</div>
              <div className="text-blue-100">Course Duration</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">NMC</div>
              <div className="text-blue-100">Approved</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Practical Training</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Medical Colleges */}
      <section id="colleges" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Top Medical Colleges in India
            </h2>
            <p className="text-lg text-slate-600">
              Premier institutions for MBBS education
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {topColleges.map((college, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {college.name}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-600 text-sm mb-2">
                      <FiMapPin className="text-blue-500" />
                      {college.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${college.type === "Government" ? "bg-green-100 text-green-700" : "bg-purple-100 text-purple-700"}`}
                      >
                        {college.type}
                      </span>
                      <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {college.ranking}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* State-wise Seats */}
      <section id="state-seats" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              State-Wise MBBS Seats
            </h2>
            <p className="text-lg text-slate-600">
              Top states with maximum medical seats
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">State</th>
                    <th className="px-6 py-4 text-left font-bold">Govt</th>
                    <th className="px-6 py-4 text-left font-bold">Private</th>
                    <th className="px-6 py-4 text-left font-bold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {stateWiseSeats.map((item, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-slate-100 ${idx % 2 === 0 ? "bg-slate-50" : "bg-white"} hover:bg-orange-50 transition-colors`}
                    >
                      <td className="px-6 py-4 font-semibold text-slate-900">
                        {item.state}
                      </td>
                      <td className="px-6 py-4 text-green-600 font-semibold">
                        {item.govt}
                      </td>
                      <td className="px-6 py-4 text-purple-600 font-semibold">
                        {item.private}
                      </td>
                      <td className="px-6 py-4 text-blue-600 font-bold">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 flex items-center gap-3 justify-center">
              <FiFileText className="text-blue-600" />
              Documents Required
            </h2>
            <p className="text-center text-lg text-slate-600 mb-12">
              Keep these documents ready for counselling and admission
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {documents.map((doc, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors"
                >
                  <FiCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Admission Process
            </h2>
            <p className="text-lg text-slate-600">
              7-step process for MBBS admission in India
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {admissionProcess.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 mt-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Perks */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Challenges & Perks
            </h2>
            <p className="text-lg text-slate-600">
              What to expect when pursuing MBBS in India
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Challenges */}
            <div className="bg-red-50 rounded-3xl p-8 border-2 border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <FiAlertCircle className="text-4xl text-red-600" />
                <h3 className="text-2xl font-bold text-slate-900">
                  Challenges
                </h3>
              </div>
              <ul className="space-y-3">
                {challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Perks */}
            <div className="bg-green-50 rounded-3xl p-8 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <FiTrendingUp className="text-4xl text-green-600" />
                <h3 className="text-2xl font-bold text-slate-900">Perks</h3>
              </div>
              <ul className="space-y-3">
                {perks.map((perk, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Need Help with MBBS Admission?
              </h2>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                Our expert counselors will guide you through NEET preparation,
                college selection, and the entire admission process.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-2xl" />
                  <span className="text-lg">NEET counselling support</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-2xl" />
                  <span className="text-lg">
                    Government & private college guidance
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-2xl" />
                  <span className="text-lg">100% admission assistance</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <LeadForm
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
