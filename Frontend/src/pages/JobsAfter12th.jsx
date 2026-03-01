import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiGlobe,
  FiFileText,
  FiUsers,
  FiStar,
  FiChevronDown,
} from "react-icons/fi";
import SEO from "../components/SEO";
import JobsAfter12thForm from "../components/forms/JobsAfter12thForm";

const jobCategories = [
  {
    icon: "🏨",
    title: "Hospitality & Hotels",
    country: "UAE, Saudi Arabia, Qatar",
    salary: "₹25,000 – ₹60,000/month",
    roles: [
      "Front Desk Associate",
      "Housekeeping Staff",
      "F&B Service Crew",
      "Kitchen Helper / Steward",
      "Bellboy / Concierge",
    ],
    eligibility: "10th/12th pass, Basic English",
    demand: "Very High",
  },
  {
    icon: "🛒",
    title: "Retail & Sales",
    country: "UAE, Kuwait, Oman",
    salary: "₹20,000 – ₹50,000/month",
    roles: [
      "Sales Associate",
      "Cashier",
      "Store Helper",
      "Visual Merchandiser",
      "Inventory Clerk",
    ],
    eligibility: "12th pass, Good communication",
    demand: "High",
  },
  {
    icon: "📦",
    title: "Warehouse & Logistics",
    country: "UAE, Saudi Arabia, Europe",
    salary: "₹25,000 – ₹55,000/month",
    roles: [
      "Warehouse Helper",
      "Packing & Sorting Staff",
      "Forklift Operator",
      "Delivery Coordinator",
      "Inventory Manager",
    ],
    eligibility: "10th/12th pass, Physical fitness",
    demand: "High",
  },
  {
    icon: "🚗",
    title: "Driver & Delivery",
    country: "UAE, Saudi Arabia, Qatar",
    salary: "₹30,000 – ₹70,000/month",
    roles: [
      "Light Vehicle Driver",
      "Heavy Vehicle Driver",
      "Delivery Executive",
      "Personal/Family Driver",
      "Bus Driver",
    ],
    eligibility: "Valid driving license, 12th pass",
    demand: "Very High",
  },
  {
    icon: "🔧",
    title: "Construction & Labour",
    country: "UAE, Saudi Arabia, Qatar, Oman",
    salary: "₹20,000 – ₹50,000/month",
    roles: [
      "Mason / Helper",
      "Painter",
      "Plumber",
      "Electrician Helper",
      "Steel Fixer",
    ],
    eligibility: "10th pass, Trade experience preferred",
    demand: "Very High",
  },
  {
    icon: "🍳",
    title: "Catering & Food",
    country: "UAE, Kuwait, Bahrain",
    salary: "₹22,000 – ₹55,000/month",
    roles: [
      "Commis Chef",
      "Tandoor / Indian Cook",
      "Bakery Helper",
      "Cafeteria Staff",
      "Fast Food Crew",
    ],
    eligibility: "10th/12th pass, Cooking skills preferred",
    demand: "High",
  },
];

const faqs = [
  {
    q: "Can I get a job abroad after 12th without a degree?",
    a: "Yes! Many Gulf countries actively hire candidates with 10th/12th qualifications for hospitality, retail, warehouse, driving, and construction roles. No degree is required.",
  },
  {
    q: "What is the average salary for 12th pass candidates abroad?",
    a: "Hospitality (₹25K–₹60K/mo), Driving (₹30K–₹70K/mo), Retail (₹20K–₹50K/mo), Warehouse (₹25K–₹55K/mo). Most jobs also include accommodation, food, and transport.",
  },
  {
    q: "Is IELTS required?",
    a: "For Gulf country jobs, IELTS is NOT required. Basic English communication is sufficient.",
  },
  {
    q: "What documents do I need?",
    a: "Valid passport (6+ months validity), educational certificates, passport-size photos, medical fitness certificate, police clearance, and skill certificates if applicable.",
  },
  {
    q: "How long does the process take?",
    a: "Gulf country jobs: 30–45 days. European jobs: 60–90 days. Timeline depends on country and visa processing.",
  },
  {
    q: "Are the jobs safe and legitimate?",
    a: "We work exclusively with verified employers. All jobs come with employment contracts, visa sponsorship, and labor law protections.",
  },
];

const JobsAfter12th = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-gradient-to-b from-white to-slate-50">
      <SEO
        title="Jobs Abroad After 12th | No Degree Required | Capton Visa Point"
        description="Find overseas job opportunities after 12th pass. Hospitality, retail, driving, warehouse jobs in UAE, Saudi Arabia, Qatar & more. No degree required."
        keywords="jobs after 12th abroad, overseas jobs without degree, gulf jobs after 12th, UAE jobs for 12th pass, Saudi Arabia jobs, hotel jobs abroad"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-blue-950 text-white py-20 sm:py-24">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-yellow-400/30">
            <FiStar className="text-yellow-300" />
            <span className="text-sm font-semibold text-yellow-100">
              No Degree Required
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Jobs Abroad{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              After 12th
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
            Earn ₹25,000–₹70,000/month in Gulf countries & Europe. Free
            accommodation, food & transport included.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToForm}
              className="bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-all shadow-2xl hover:scale-105 flex items-center gap-2"
            >
              Apply Now <FiArrowRight />
            </button>
            <a
              href="https://wa.me/919914773125?text=Hi, I'm interested in jobs abroad after 12th"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <FiBriefcase size={12} /> Job Categories
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800">
              Popular Job Roles{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                After 12th
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobCategories.map((cat) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-slate-100 overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-5 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-7xl opacity-10">
                    {cat.icon}
                  </div>
                  <div className="relative z-10">
                    <div className="text-3xl mb-2">{cat.icon}</div>
                    <h3 className="text-xl font-extrabold">{cat.title}</h3>
                    <span className="inline-block mt-2 text-xs bg-yellow-400/20 text-yellow-200 px-2 py-0.5 rounded-full font-semibold">
                      {cat.demand} Demand
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-blue-50 rounded-lg p-2.5">
                      <p className="text-[10px] text-slate-400 uppercase font-bold">
                        Salary
                      </p>
                      <p className="text-blue-900 text-xs font-bold">
                        {cat.salary}
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-2.5">
                      <p className="text-[10px] text-slate-400 uppercase font-bold">
                        Countries
                      </p>
                      <p className="text-blue-900 text-xs font-bold">
                        {cat.country}
                      </p>
                    </div>
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Job Roles
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    {cat.roles.map((r) => (
                      <li
                        key={r}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <FiCheckCircle
                          className="text-blue-600 shrink-0"
                          size={13}
                        />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-xs text-blue-700 bg-blue-50 px-3 py-2 rounded-lg">
                    <FiFileText size={12} className="text-blue-500 shrink-0" />
                    <span>
                      <strong>Eligibility:</strong> {cat.eligibility}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 text-center mb-12">
            How to Apply
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                s: "01",
                t: "Profile Assessment",
                d: "We evaluate your education, skills and preferences.",
                i: <FiUsers />,
              },
              {
                s: "02",
                t: "Document Preparation",
                d: "Passport, certificates, medical fitness — we guide you.",
                i: <FiFileText />,
              },
              {
                s: "03",
                t: "Job Matching & Interview",
                d: "We connect you with verified employers.",
                i: <FiBriefcase />,
              },
              {
                s: "04",
                t: "Visa & Travel",
                d: "Visa processing, tickets, pre-departure briefing.",
                i: <FiGlobe />,
              },
            ].map((step) => (
              <motion.div
                key={step.s}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center"
              >
                <div className="text-5xl font-extrabold text-blue-100 mb-2">
                  {step.s}
                </div>
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 text-2xl mx-auto mb-3">
                  {step.i}
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-2">
                  {step.t}
                </h3>
                <p className="text-slate-500 text-sm">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-blue-950 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10">
            What's Included
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {[
              { icon: "🏠", label: "Free Accommodation" },
              { icon: "🍽️", label: "Food Allowance" },
              { icon: "🚌", label: "Free Transport" },
              { icon: "🏥", label: "Medical Insurance" },
              { icon: "✈️", label: "Annual Air Tickets" },
              { icon: "📅", label: "30 Days Paid Leave" },
              { icon: "💰", label: "Overtime Pay" },
              { icon: "📈", label: "Career Growth" },
            ].map((b) => (
              <div
                key={b.label}
                className="bg-white/10 backdrop-blur rounded-xl p-3 text-center border border-white/10"
              >
                <span className="text-2xl block mb-1">{b.icon}</span>
                <span className="text-xs font-semibold">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 text-center mb-10">
            FAQs
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-bold text-slate-800 text-sm sm:text-base pr-4">
                    {faq.q}
                  </span>
                  <FiChevronDown
                    className={`text-slate-400 shrink-0 transition-transform ${activeFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {activeFaq === i && (
                  <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Start?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Free counselling and placement support. No degree required!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-xl flex items-center gap-2"
            >
              Apply Now <FiArrowRight />
            </button>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <JobsAfter12thForm ref={formRef} />
    </div>
  );
};

export default JobsAfter12th;
