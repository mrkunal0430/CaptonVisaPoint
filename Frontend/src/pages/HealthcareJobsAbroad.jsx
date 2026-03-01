import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiStar,
  FiChevronDown,
  FiHeart,
  FiDollarSign,
  FiHome,
  FiShield,
  FiUsers,
  FiBook,
  FiGlobe,
  FiClock,
  FiFileText,
} from "react-icons/fi";
import SEO from "../components/SEO";
import HealthcareJobsForm from "../components/forms/HealthcareJobsForm";

/* ───── UAE HEALTHCARE DATA ───── */
const uaeData = {
  name: "UAE",
  jobs: [
    {
      title: "Nursing Jobs",
      positions: [
        "Staff Nurse",
        "ICU Nurse",
        "OR Nurse",
        "Pediatric Nurse",
        "Emergency Nurse",
        "Oncology Nurse",
      ],
      salary: "AED 6,000–15,000/mo",
      demand: "Very High",
    },
    {
      title: "Doctor Positions",
      positions: [
        "General Practitioner",
        "Specialist Doctors",
        "Consultant",
        "Resident Doctor",
        "Medical Officer",
      ],
      salary: "AED 20,000–80,000/mo",
      demand: "High",
    },
    {
      title: "Allied Health",
      positions: [
        "Lab Technician",
        "Radiographer",
        "Physiotherapist",
        "Pharmacist",
        "Dietitian",
        "Respiratory Therapist",
      ],
      salary: "AED 8,000–20,000/mo",
      demand: "High",
    },
    {
      title: "Support Staff",
      positions: [
        "Medical Assistant",
        "Healthcare Administrator",
        "Patient Care Coordinator",
        "Medical Coder",
      ],
      salary: "AED 4,000–10,000/mo",
      demand: "Moderate",
    },
  ],
  benefits: [
    {
      icon: FiDollarSign,
      title: "Tax-Free Salary",
      desc: "100% of your salary is yours – no income tax in UAE",
    },
    {
      icon: FiHome,
      title: "Free Accommodation",
      desc: "Most employers provide free housing or housing allowance",
    },
    {
      icon: FiShield,
      title: "Health Insurance",
      desc: "Comprehensive medical coverage for you and family",
    },
    {
      icon: FiUsers,
      title: "Family Visa",
      desc: "Sponsor your spouse and children under your visa",
    },
    {
      icon: FiStar,
      title: "Annual Bonus",
      desc: "Performance bonuses and annual air tickets home",
    },
    {
      icon: FiClock,
      title: "Paid Leave",
      desc: "30 days annual leave + public holidays",
    },
  ],
  cities: [
    "Dubai",
    "Abu Dhabi",
    "Sharjah",
    "Ajman",
    "Ras Al Khaimah",
    "Fujairah",
  ],
  requirements: [
    "Valid nursing/medical degree from recognized institution",
    "Minimum 2 years of clinical experience",
    "Dataflow verification of credentials",
    "DHA/DOH/MOH licensing exam clearance",
    "Good communication skills in English",
    "Valid passport with 6+ months validity",
  ],
  license: "DHA / HAAD / MOH",
};

/* ───── GERMANY HEALTHCARE DATA ───── */
const germanyData = {
  name: "Germany",
  jobs: [
    {
      title: "Nursing (Krankenpfleger/in)",
      positions: [
        "Registered Nurse",
        "ICU Nurse",
        "Geriatric Nurse",
        "Pediatric Nurse",
        "Surgical Nurse",
      ],
      salary: "€2,500–4,500/mo",
      demand: "Very High",
      highlight: "Most in-demand profession with fast-track visa",
    },
    {
      title: "Elderly Care (Altenpflege)",
      positions: [
        "Care Assistant",
        "Senior Caregiver",
        "Home Care Provider",
        "Nursing Home Staff",
      ],
      salary: "€2,200–3,500/mo",
      demand: "Very High",
      highlight: "Growing demand due to aging population",
    },
    {
      title: "Medical Professionals",
      positions: [
        "General Physician",
        "Specialist Doctors",
        "Dentists",
        "Pharmacists",
      ],
      salary: "€4,500–10,000/mo",
      demand: "High",
      highlight: "Recognition of degrees required",
    },
    {
      title: "Allied Healthcare",
      positions: [
        "Physiotherapist",
        "Lab Technician",
        "Radiology Technician",
        "Medical Assistant",
      ],
      salary: "€2,800–4,000/mo",
      demand: "Moderate",
      highlight: "Vocational recognition needed",
    },
  ],
  benefits: [
    {
      icon: FiDollarSign,
      title: "High Salary",
      desc: "Earn €2,500–4,500/month with regular increments",
    },
    {
      icon: FiHome,
      title: "PR Pathway",
      desc: "Permanent residency after 2–4 years of work",
    },
    {
      icon: FiShield,
      title: "Social Security",
      desc: "Comprehensive pension, health & unemployment insurance",
    },
    {
      icon: FiUsers,
      title: "Family Reunion",
      desc: "Bring spouse and children after establishing",
    },
    {
      icon: FiBook,
      title: "Free Education",
      desc: "Free university education for your children",
    },
    {
      icon: FiGlobe,
      title: "EU Freedom",
      desc: "Travel freely across 27 EU countries",
    },
  ],
  requirements: [
    "Nursing/Healthcare degree from recognized institution",
    "Minimum B1 German language proficiency (B2 preferred)",
    "Valid professional registration in home country",
    "Minimum 1-2 years of relevant experience",
    "Deficiency course completion (if required)",
    "Clean medical and police clearance",
  ],
  process: [
    {
      step: "1",
      title: "German Language",
      desc: "Learn German to B1/B2 level",
      duration: "4-8 months",
    },
    {
      step: "2",
      title: "Document Preparation",
      desc: "Gather and legalize all documents",
      duration: "1-2 months",
    },
    {
      step: "3",
      title: "Recognition Application",
      desc: "Apply for credential recognition (Anerkennung)",
      duration: "3-4 months",
    },
    {
      step: "4",
      title: "Job Search",
      desc: "Get job offer from German employer",
      duration: "1-2 months",
    },
    {
      step: "5",
      title: "Visa Application",
      desc: "Apply for work visa at German embassy",
      duration: "2-3 months",
    },
    {
      step: "6",
      title: "Arrival & Adaptation",
      desc: "Start work with adaptation period",
      duration: "6-12 months",
    },
  ],
  license: "Approbation + B2 German",
};

/* ───── GENERAL HEALTHCARE CATEGORIES ───── */
const generalCategories = [
  {
    icon: "👩‍⚕️",
    title: "Nursing – General",
    countries: "UAE, Saudi, Germany, UK",
    salary: "₹1.5 – ₹5 Lakh/month",
    roles: [
      "Staff Nurse (BSc/GNM)",
      "ICU / CCU Nurse",
      "OT Nurse",
      "Emergency Room Nurse",
      "Pediatric Nurse",
    ],
    eligibility: "BSc Nursing / GNM, Valid license",
    requirements: [
      "Prometric/DHA/MOH (Gulf)",
      "IELTS/OET (UK)",
      "Min 1-2 yrs experience",
    ],
    demand: "Very High",
  },
  {
    icon: "👴",
    title: "Elderly Care / Geriatric",
    countries: "Germany, UK, Canada, Australia",
    salary: "₹1.2 – ₹4 Lakh/month",
    roles: [
      "Elderly Care Nurse",
      "Home Care Assistant",
      "Geriatric Care Nurse",
      "Dementia Care Specialist",
      "Palliative Care Nurse",
    ],
    eligibility: "GNM/BSc Nursing, B1 German (Germany)",
    requirements: [
      "German B1-B2 (Germany)",
      "Care Certificate (UK)",
      "Compassionate personality",
    ],
    demand: "Very High",
  },
  {
    icon: "🩺",
    title: "Doctors & Specialists",
    countries: "UAE, UK, Germany, USA",
    salary: "₹3 – ₹15 Lakh/month",
    roles: [
      "General Practitioner",
      "Cardiologist",
      "Orthopedic Surgeon",
      "Dentist",
      "Radiologist",
    ],
    eligibility: "MBBS + MD/MS, Country licensing",
    requirements: [
      "PLAB (UK), USMLE (USA)",
      "Approbation (Germany)",
      "DHA/HAAD (UAE)",
    ],
    demand: "High",
  },
  {
    icon: "🔬",
    title: "Allied Health",
    countries: "UAE, Saudi, Qatar, UK",
    salary: "₹80,000 – ₹3 Lakh/month",
    roles: [
      "Medical Lab Technician",
      "Radiography Technician",
      "Physiotherapist",
      "Pharmacist",
      "Optometrist",
    ],
    eligibility: "Relevant degree + experience",
    requirements: ["Professional license", "DHA/MOH exam (Gulf)", "IELTS (UK)"],
    demand: "High",
  },
  {
    icon: "🏥",
    title: "Hospital Support Staff",
    countries: "UAE, Saudi, Kuwait",
    salary: "₹30,000 – ₹80,000/month",
    roles: [
      "Medical Receptionist",
      "Patient Care Assistant",
      "Hospital Administrator",
      "Medical Coder",
      "Surgical Technologist",
    ],
    eligibility: "12th pass / Diploma, Basic English",
    requirements: [
      "Relevant certification",
      "Computer skills",
      "Good communication",
    ],
    demand: "Medium-High",
  },
];

const faqs = [
  {
    q: "What qualifications do I need for healthcare jobs abroad?",
    a: "Nurses need BSc Nursing or GNM + country-specific licensing (DHA for UAE, NMC for UK, Approbation for Germany). Doctors need MBBS + specialty + local licensing exams (PLAB for UK, USMLE for USA). Allied health professionals need relevant degrees and professional licenses.",
  },
  {
    q: "What is the salary range for Indian nurses abroad?",
    a: "UAE: ₹1.5-3 Lakh/mo · Saudi Arabia: ₹1.2-2.5 Lakh/mo · Germany: €2,500-3,500/mo · UK: £25,000-35,000/year. Most also provide accommodation, transport, and medical insurance.",
  },
  {
    q: "Do I need IELTS/OET?",
    a: "Gulf countries: Generally NOT mandatory. UK: IELTS 7.0 or OET B required. Germany: German B1-B2 required. Australia/Canada: IELTS 7.0 typically required.",
  },
  {
    q: "How to get DHA/MOH/HAAD license for UAE?",
    a: "1) Apply on the authority's website. 2) Submit educational documents for verification. 3) Pass the Prometric exam (MCQ-based). 4) Receive your license. We provide complete coaching and application support.",
  },
  {
    q: "Can I take my family?",
    a: "Yes! UAE/Saudi: sponsor spouse and children once you meet salary threshold. Germany: family reunion visa after securing employment. We guide you through the family visa process.",
  },
  {
    q: "How long does recruitment take?",
    a: "Gulf countries: 60-90 days including licensing. Germany: 4-8 months (includes language). UK: 3-6 months (includes NMC registration).",
  },
];

/* ───── COUNTRY SECTION COMPONENT ───── */
const CountrySection = ({ data }) => (
  <div className="bg-gradient-to-br from-blue-800 to-blue-950 rounded-3xl overflow-hidden shadow-xl">
    <div className="p-6 sm:p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {data.name} Healthcare Jobs
          </h3>
          <p className="text-blue-300 text-sm">License: {data.license}</p>
        </div>
      </div>

      {/* Job Cards */}
      <div className="grid sm:grid-cols-2 gap-3 mb-6">
        {data.jobs.map((j) => (
          <div
            key={j.title}
            className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-white text-sm">{j.title}</h4>
              <span className="text-[10px] bg-yellow-400/20 text-yellow-200 px-2 py-0.5 rounded-full font-semibold">
                {j.demand}
              </span>
            </div>
            <p className="text-yellow-300 font-bold text-xs mb-2">{j.salary}</p>
            {j.highlight && (
              <p className="text-blue-300 text-[11px] italic mb-2">
                {j.highlight}
              </p>
            )}
            <div className="flex flex-wrap gap-1">
              {j.positions.map((p) => (
                <span
                  key={p}
                  className="text-[10px] bg-white/10 text-white/80 px-1.5 py-0.5 rounded"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
        {data.benefits.map((b) => (
          <div
            key={b.title}
            className="bg-white/10 backdrop-blur rounded-xl p-3 border border-white/10"
          >
            <b.icon className="text-yellow-300 mb-1" size={16} />
            <p className="text-white font-bold text-xs">{b.title}</p>
            <p className="text-blue-200 text-[10px]">{b.desc}</p>
          </div>
        ))}
      </div>

      {/* Requirements */}
      <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
        <p className="text-white font-bold text-sm mb-2">Requirements</p>
        <ul className="grid sm:grid-cols-2 gap-1.5">
          {data.requirements.map((r) => (
            <li
              key={r}
              className="flex items-start gap-2 text-white/80 text-xs"
            >
              <FiCheckCircle
                className="text-yellow-300 shrink-0 mt-0.5"
                size={12}
              />
              {r}
            </li>
          ))}
        </ul>
      </div>

      {/* Process (Germany only) */}
      {data.process && (
        <div className="mt-6">
          <p className="text-white font-bold text-sm mb-3">
            Application Process
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {data.process.map((p) => (
              <div
                key={p.step}
                className="bg-white/10 backdrop-blur rounded-xl p-3 border border-white/10 text-center"
              >
                <div className="text-xl font-extrabold text-blue-300/40 mb-1">
                  {p.step}
                </div>
                <p className="text-white font-bold text-xs">{p.title}</p>
                <p className="text-blue-200 text-[10px]">{p.desc}</p>
                <p className="text-yellow-300 text-[10px] font-semibold mt-1">
                  {p.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Cities (UAE only) */}
      {data.cities && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          <span className="text-blue-300 text-xs font-bold mr-1">Cities:</span>
          {data.cities.map((c) => (
            <span
              key={c}
              className="text-[11px] bg-white/15 text-white px-2 py-0.5 rounded-full"
            >
              {c}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

/* ───── MAIN COMPONENT ───── */
const HealthcareJobsAbroad = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-gradient-to-b from-white to-slate-50">
      <SEO
        title="Healthcare Jobs Abroad | Nursing, Doctors, Allied Health | Capton Visa Point"
        description="Healthcare job opportunities in UAE, Germany, UK, Saudi Arabia — nursing, doctor, allied health, elderly care. Complete placement, licensing support & visa processing."
        keywords="healthcare jobs abroad, nursing jobs UAE, nursing jobs Germany, doctor jobs abroad, DHA exam, Prometric, Approbation Germany, elderly care Germany"
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
            <FiHeart className="text-yellow-300" />
            <span className="text-sm font-semibold text-yellow-100">
              Nursing · Doctors · Allied Health · Elderly Care
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Healthcare Jobs{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Abroad
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
            Complete placement in UAE, Germany, UK & Saudi Arabia. We handle
            licensing (DHA, Prometric, Approbation), recruitment & visa.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToForm}
              className="bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-all shadow-2xl hover:scale-105 flex items-center gap-2"
            >
              Apply Now <FiArrowRight />
            </button>
            <a
              href="https://wa.me/919914773125?text=Hi, I'm interested in healthcare jobs abroad"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* UAE Healthcare - Full Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <CountrySection data={uaeData} />
        </div>
      </section>

      {/* Germany Healthcare - Full Section */}
      <section className="py-4 sm:py-6">
        <div className="container mx-auto px-4 sm:px-6">
          <CountrySection data={germanyData} />
        </div>
      </section>

      {/* General Healthcare Categories */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 text-center mb-4">
            All Healthcare Job Categories
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
            Roles, eligibility, salary & requirements for every healthcare field
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalCategories.map((cat) => (
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
            Start Your Healthcare Career Abroad
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Free counselling, licensing support & guaranteed placement
            assistance.
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

      <HealthcareJobsForm ref={formRef} />
    </div>
  );
};

export default HealthcareJobsAbroad;
