import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiStar,
  FiChevronDown,
  FiCpu,
} from "react-icons/fi";
import SEO from "../components/SEO";
import TechnicalJobsForm from "../components/forms/TechnicalJobsForm";

const jobCategories = [
  {
    icon: "💻",
    title: "IT & Software",
    countries: "Germany, USA, Canada, UK, UAE",
    salary: "₹2 – ₹12 Lakh/month",
    roles: [
      "Software Developer / Engineer",
      "Full-Stack Developer",
      "Data Analyst / Scientist",
      "Cloud / DevOps Engineer",
      "Cybersecurity Analyst",
    ],
    eligibility: "B.Tech/BCA/MCA in CS/IT",
    requirements: [
      "Relevant programming skills",
      "1-5 years experience",
      "English proficiency",
    ],
    demand: "Very High",
  },
  {
    icon: "⚙️",
    title: "Mechanical & Manufacturing",
    countries: "Germany, UAE, Saudi Arabia, Canada",
    salary: "₹80,000 – ₹4 Lakh/month",
    roles: [
      "Mechanical Engineer",
      "CNC Operator / Programmer",
      "Production Engineer",
      "Quality Inspector",
      "CAD/CAM Designer",
    ],
    eligibility: "B.Tech/Diploma in Mechanical",
    requirements: [
      "Technical certifications",
      "Hands-on experience",
      "AutoCAD/SolidWorks",
    ],
    demand: "High",
  },
  {
    icon: "⚡",
    title: "Electrical & Electronics",
    countries: "Germany, UAE, Saudi Arabia, Qatar",
    salary: "₹70,000 – ₹3.5 Lakh/month",
    roles: [
      "Electrical Engineer",
      "Electronics Technician",
      "PLC Programmer",
      "Instrumentation Engineer",
      "Solar Energy Technician",
    ],
    eligibility: "B.Tech/Diploma in EE/ECE",
    requirements: [
      "IEC/IEEE certifications",
      "Field experience",
      "Safety training",
    ],
    demand: "High",
  },
  {
    icon: "🏗️",
    title: "Civil & Construction",
    countries: "UAE, Saudi Arabia, Qatar, Canada",
    salary: "₹60,000 – ₹3 Lakh/month",
    roles: [
      "Civil Engineer",
      "Site Supervisor",
      "Structural Engineer",
      "Quantity Surveyor",
      "HSE Safety Officer",
    ],
    eligibility: "B.Tech/Diploma in Civil",
    requirements: [
      "NEBOSH/IOSH (for HSE)",
      "Construction experience",
      "AutoCAD / Revit",
    ],
    demand: "Very High",
  },
  {
    icon: "🚗",
    title: "Automotive & Welding",
    countries: "Germany, UAE, Saudi Arabia, Canada",
    salary: "₹50,000 – ₹2.5 Lakh/month",
    roles: [
      "Automotive Technician",
      "Welder (TIG/MIG/ARC)",
      "Fabricator",
      "Auto Electrician",
      "EV Technician",
    ],
    eligibility: "ITI/Diploma + Trade certification",
    requirements: [
      "International welding certs",
      "Trade experience",
      "Valid trade test",
    ],
    demand: "High",
  },
  {
    icon: "🛢️",
    title: "Oil & Gas / Energy",
    countries: "UAE, Saudi Arabia, Qatar, Oman",
    salary: "₹1 – ₹5 Lakh/month",
    roles: [
      "Process Engineer",
      "Pipeline Engineer",
      "Rig Operator",
      "HSE Officer",
      "Drilling Engineer",
    ],
    eligibility: "B.Tech/Diploma in relevant field",
    requirements: [
      "NEBOSH IGC / IOSH",
      "BOSIET / HUET (offshore)",
      "3-5 years experience",
    ],
    demand: "Medium-High",
  },
];

const skillsInDemand = [
  { skill: "Python / JavaScript", demand: 95 },
  { skill: "AWS / Azure Cloud", demand: 90 },
  { skill: "AI / Machine Learning", demand: 88 },
  { skill: "TIG/MIG Welding", demand: 85 },
  { skill: "AutoCAD / SolidWorks", demand: 80 },
  { skill: "PLC / SCADA", demand: 75 },
  { skill: "SAP / ERP Systems", demand: 72 },
  { skill: "NEBOSH / HSE", demand: 70 },
];

const faqs = [
  {
    q: "What technical qualifications are needed?",
    a: "IT: B.Tech/BCA/MCA with programming skills. Engineering: B.Tech/Diploma with industry experience. Skilled trades (welding, automotive): ITI/Diploma with trade certifications. Most roles need 1-5 years experience.",
  },
  {
    q: "Which country pays the highest?",
    a: "IT: USA (₹5-15L/mo), then Germany, UK, Canada. Engineering: UAE & Saudi offer tax-free salaries (₹1-5L/mo). Skilled Trades: Germany & Canada offer great pay with PR pathways.",
  },
  {
    q: "Do I need language skills?",
    a: "Gulf countries: English sufficient. Germany: B1-B2 German for most technical roles (some IT roles English-only). Canada/Australia: IELTS required for immigration.",
  },
  {
    q: "How can ITI/Diploma holders get jobs abroad?",
    a: "ITI/Diploma holders are in HIGH demand for welding, electrical, plumbing, HVAC, and automotive in Gulf & Germany. Get international trade certifications → clear trade tests → apply through us.",
  },
  {
    q: "What is Germany's Opportunity Card?",
    a: "Points-based visa for skilled workers. Points for: age (<35), qualifications, German A2+, 3+ years experience. Get 1 year to find a job in Germany. Great for IT & engineering professionals.",
  },
  {
    q: "Can I get permanent residency?",
    a: "Yes! Germany: PR after 2-4 years. Canada: Express Entry/PNP. Australia: Skilled worker visa → PR. UAE: Golden Visa for high earners. We guide you through the PR process.",
  },
];

const TechnicalJobsAbroad = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-gradient-to-b from-white to-slate-50">
      <SEO
        title="Technical Jobs Abroad | IT, Engineering & Skilled Trades | Capton Visa Point"
        description="Technical job opportunities abroad — IT, software, mechanical, electrical, civil engineering, welding, automotive in Germany, UAE, Canada & more."
        keywords="technical jobs abroad, IT jobs Germany, engineering jobs UAE, software developer abroad, welding jobs Saudi Arabia, skilled worker visa"
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
            <FiCpu className="text-yellow-300" />
            <span className="text-sm font-semibold text-yellow-100">
              IT · Engineering · Skilled Trades
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Technical Jobs{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Abroad
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
            Software developers, engineers, welders & skilled tradespeople —
            high-paying careers in Germany, UAE, Canada, USA & more with PR
            pathways.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToForm}
              className="bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-all shadow-2xl hover:scale-105 flex items-center gap-2"
            >
              Apply Now <FiArrowRight />
            </button>
            <a
              href="https://wa.me/919914773125?text=Hi, I'm interested in technical jobs abroad"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Skills In Demand */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 text-center mb-12">
            Top Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
              In Demand
            </span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {skillsInDemand.map((s) => (
              <div
                key={s.skill}
                className="bg-white rounded-xl p-4 shadow-sm border border-slate-100"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-slate-700">
                    {s.skill}
                  </span>
                  <span className="text-xs font-bold text-blue-700">
                    {s.demand}%
                  </span>
                </div>
                <div className="w-full bg-blue-100 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-700 to-blue-500 h-2 rounded-full"
                    style={{ width: `${s.demand}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 text-center mb-4">
            Technical Job Categories
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
            Detailed roles, eligibility, salary & requirements for each field
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobCategories.map((cat) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-5 text-white">
                  <div className="text-3xl mb-2">{cat.icon}</div>
                  <h3 className="text-xl font-extrabold">{cat.title}</h3>
                  <p className="text-xs text-blue-200 mt-1">{cat.countries}</p>
                  <span className="inline-block mt-2 text-xs bg-yellow-400/20 text-yellow-200 px-2 py-0.5 rounded-full font-semibold">
                    {cat.demand} Demand
                  </span>
                </div>
                <div className="p-5">
                  <div className="bg-blue-50 rounded-lg p-3 mb-4">
                    <p className="text-[10px] text-slate-400 font-bold uppercase">
                      Salary Range
                    </p>
                    <p className="text-blue-900 font-bold text-sm">
                      {cat.salary}
                    </p>
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Job Roles
                  </p>
                  <ul className="space-y-1 mb-4">
                    {cat.roles.map((r) => (
                      <li
                        key={r}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <FiCheckCircle
                          className="text-blue-600 shrink-0"
                          size={12}
                        />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Requirements
                  </p>
                  <ul className="space-y-1 mb-3">
                    {cat.requirements.map((r) => (
                      <li
                        key={r}
                        className="flex items-center gap-2 text-xs text-slate-500"
                      >
                        <FiStar
                          className="text-yellow-500 shrink-0"
                          size={11}
                        />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs text-blue-700 bg-blue-50 px-3 py-2 rounded-lg font-medium">
                    <strong>Eligibility:</strong> {cat.eligibility}
                  </div>
                </div>
              </motion.div>
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
            Launch Your Technical Career Abroad
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Free profile evaluation, job matching, visa processing & PR pathway
            guidance.
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

      <TechnicalJobsForm ref={formRef} />
    </div>
  );
};

export default TechnicalJobsAbroad;
