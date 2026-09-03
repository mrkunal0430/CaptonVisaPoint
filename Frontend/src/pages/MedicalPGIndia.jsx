import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCheckCircle,
  FiAward,
  FiBook,
  FiMapPin,
  FiFileText,
  FiAlertCircle,
  FiTrendingUp,
  FiUsers,
  FiCalendar,
  FiArrowRight,
  FiChevronDown,
  FiPhoneCall,
  FiShield,
  FiCheck,
  FiCompass,
  FiTarget,
  FiDollarSign,
} from "react-icons/fi";
import SEO from "../components/SEO";
import { MedicalPGForm } from "../components/forms";

const HERO_SEAT_MATCHES = [
  {
    branch: "MD Anesthesiology",
    quota: "Government • All India Quota",
    chance: "Safe",
    tone: "bg-emerald-500/15 text-emerald-300",
  },
  {
    branch: "MS Ophthalmology",
    quota: "Government • State Quota",
    chance: "Likely",
    tone: "bg-amber-500/15 text-amber-300",
  },
  {
    branch: "MD Radio-Diagnosis",
    quota: "Deemed University",
    chance: "Reach",
    tone: "bg-sky-500/15 text-sky-300",
  },
];

const MedicalPGIndia = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTab, setActiveTab] = useState("aiq");

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const COUNSELLING_STEPS = [
    {
      step: "01",
      title: "Online Registration",
      desc: "Register on the official MCC portal (mcc.nic.in) or state counselling websites with your NEET PG roll number, application credentials, and pay the requisite counselling fee & security deposit.",
    },
    {
      step: "02",
      title: "Choice Filling & Locking",
      desc: "Select preferred courses (MD/MS/DNB) and institutions in order of priority. Locking within the stipulated deadline is mandatory for seat consideration in the allotment algorithm.",
    },
    {
      step: "03",
      title: "Seat Allotment Results",
      desc: "Centralized computerized seat allotment across Round 1, Round 2, Round 3 (Mop-Up), and Stray Vacancy rounds based on merit rank, category reservations, and choice priority.",
    },
    {
      step: "04",
      title: "Document Verification",
      desc: "Verification of original credentials, NMC/State medical registration, internship certificate, and caste/quota proofs at designated reporting centers or allotted colleges.",
    },
    {
      step: "05",
      title: "College Reporting & Admission",
      desc: "Physical reporting at the allotted medical college, medical fitness check, payment of admission tuition fees, and joining residency duties as a Junior Resident (JR).",
    },
  ];

  const COUNSELLING_TYPES = {
    aiq: {
      title: "All India Quota (AIQ 50%)",
      authority: "Medical Counselling Committee (MCC / DGHS)",
      coverage: "50% seats in all Government Medical Colleges across India. Open to all qualified candidates nationwide irrespective of home state domicile.",
      eligibility: "All qualified NEET PG candidates clearing the national cutoff percentile.",
      highlights: [
        "Pure merit-based pan-India seat allocation without state barriers",
        "Covers premier institutions like MMC Chennai, SMS Jaipur, KGMU Lucknow, BMC Bangalore",
        "Central reservation rules (SC 15%, ST 7.5%, OBC-NCL 27%, EWS 10%, PwD 5%)",
        "Free exit allowed in Round 1 without security deposit forfeiture",
      ],
    },
    state: {
      title: "State Quota Counselling (50%)",
      authority: "Respective State DME / Health Directorates",
      coverage: "50% seats in state government colleges + 100% state quota seats in state private and minority medical institutions.",
      eligibility: "Candidates with state domicile, or those who completed their MBBS from colleges situated within that specific state.",
      highlights: [
        "State-specific reservation policies, institutional preference, and service bonds apply",
        "Incentive marks (up to 30%) awarded to in-service doctors serving in remote/rural areas",
        "Access to prominent state medical colleges and municipal hospitals",
        "Different states conduct independent counselling rounds with customized registration timelines",
      ],
    },
    deemed: {
      title: "Deemed & Central Universities",
      authority: "MCC / DGHS Centralized Portal",
      coverage: "100% PG seats in Deemed Universities (KMC Manipal, DY Patil, Bharati Vidyapeeth, SRM, Amrita, etc.) and Central Institutes (BHU, AMU, DU quota).",
      eligibility: "Open to all NEET PG qualified candidates across India with no state domicile restrictions.",
      highlights: [
        "High availability of clinical specialties (Radio-Diagnosis, General Medicine, Dermatology)",
        "Advanced tertiary care infrastructure with high patient diversity",
        "Annual tuition fees range from ₹18 Lakhs to ₹35+ Lakhs depending on branch and college",
        "Mandatory security deposit of ₹2,00,000 for participating in Deemed rounds",
      ],
    },
    nri: {
      title: "Management & NRI Quota",
      authority: "MCC (for Deemed) & State Authorities (for Private)",
      coverage: "15% NRI quota seats and institutional management quota seats across accredited private medical colleges.",
      eligibility: "NRI, OCI, PIO, or sponsored candidates supported by direct blood relatives residing abroad, along with NEET PG eligibility.",
      highlights: [
        "Strategic avenue for doctors with moderate NEET ranks seeking top clinical disciplines",
        "Strict verification of embassy certificates, sponsorship letters, and relationship proofs",
        "Direct allotment through transparent centralized counselling without offline intermediaries",
        "Transparent fee packages published upfront on official counselling portals",
      ],
    },
  };

  const SPECIALTIES = [
    { name: "MD Radio-Diagnosis", type: "Clinical", demand: "Top Rank Branch", cutOff: "Rank 1 – 3,500 (AIQ Govt)" },
    { name: "MD General Medicine", type: "Clinical", demand: "High Demand", cutOff: "Rank 1 – 4,500 (AIQ Govt)" },
    { name: "MD Dermatology (DVL)", type: "Clinical", demand: "Top Rank Branch", cutOff: "Rank 1 – 3,800 (AIQ Govt)" },
    { name: "MD Pediatrics", type: "Clinical", demand: "High Priority", cutOff: "Rank 2,000 – 7,500 (AIQ Govt)" },
    { name: "MS Obstetrics & Gynaecology", type: "Surgical", demand: "High Demand", cutOff: "Rank 3,000 – 9,000 (AIQ Govt)" },
    { name: "MS Orthopaedics", type: "Surgical", demand: "High Priority", cutOff: "Rank 3,500 – 9,500 (AIQ Govt)" },
    { name: "MS General Surgery", type: "Surgical", demand: "Core Surgical", cutOff: "Rank 4,000 – 11,500 (AIQ Govt)" },
    { name: "MS Ophthalmology", type: "Surgical", demand: "Surgical / Clinic", cutOff: "Rank 6,000 – 14,000 (AIQ Govt)" },
    { name: "MD Psychiatry", type: "Clinical", demand: "Emerging Field", cutOff: "Rank 7,000 – 16,000 (AIQ Govt)" },
    { name: "MD Anesthesiology", type: "Clinical", demand: "Critical Care", cutOff: "Rank 9,000 – 19,000 (AIQ Govt)" },
    { name: "MD Pathology", type: "Para-Clinical", demand: "Diagnostic", cutOff: "Rank 15,000 – 28,000 (AIQ Govt)" },
    { name: "DNB Emergency Medicine", type: "Clinical", demand: "High Growth", cutOff: "Rank 8,000 – 18,000 (DNB)" },
  ];

  const WORK_PROCESS = [
    {
      title: "Dedicated Admission Assistance",
      desc: "Our senior counselling advisors handhold you through every stage, decoding seat matrix trends and simplifying complex admission rules.",
    },
    {
      title: "Rank-Based College Mapping",
      desc: "We analyze 5-year closing cutoffs across government, private, and deemed medical colleges to build an optimal, risk-free choice filling list.",
    },
    {
      title: "Low Budget MD-MS Guidance",
      desc: "Helping students and parents identify affordable private and trust medical colleges across states matching their financial budget.",
    },
    {
      title: "Management & NRI Quota Support",
      desc: "Complete documentation scrutiny, sponsorship verification, and transparent allotment assistance under institutional and NRI quotas.",
    },
  ];

  const DOCUMENTS_REQUIRED = [
    "NEET PG Admit Card & Score Card / Rank Letter",
    "MBBS Degree Certificate or Provisional Passing Certificate",
    "Compulsory Rotatory Residential Internship (CRRI) Completion Certificate",
    "Permanent or Provisional Medical Registration Certificate (NMC / State Medical Council)",
    "Class 10th Marks Card / Birth Certificate for Date of Birth verification",
    "Class 12th Marks Sheet and Certificate",
    "MBBS 1st, 2nd, and 3rd Professional Marksheets",
    "Valid Photo ID Proof (Aadhaar Card, Passport, Voter ID, Driving License)",
    "Category Certificate (SC / ST / OBC-NCL / EWS / PwD) in Central Format",
    "State Domicile / Residence Certificate (for State Quota candidates)",
    "NRI Sponsorship Undertaking, Passport & Embassy Certificate (for NRI quota)",
    "Service Bond / NOC from employer (for in-service medical officers)",
  ];

  const FAQS = [
    {
      q: "What is NEET PG Counselling and who conducts it?",
      a: "NEET PG Counselling is the centralized process through which qualified candidates are allotted MD, MS, DNB, and Diploma seats across medical colleges in India. The Medical Counselling Committee (MCC) of the Directorate General of Health Services (DGHS) conducts 50% All India Quota, Deemed, Central Universities, and AFMS counselling. Respective State Counselling Authorities conduct the 50% State Quota counselling.",
    },
    {
      q: "What is the qualifying cutoff percentile for NEET PG?",
      a: "The standard qualifying cutoff percentile set by the National Board of Examinations (NBE) is 50th percentile for General/EWS, 40th percentile for SC/ST/OBC, and 45th percentile for General-PwD. However, the Ministry of Health often reduces cutoffs in later rounds if clinical seats remain vacant.",
    },
    {
      q: "What is the difference between AIQ (50%) and State Quota (50%)?",
      a: "All government medical colleges contribute 50% of their postgraduate seats to the All India Quota (AIQ), which is open to all Indian doctors irrespective of their state of MBBS or residence. The remaining 50% seats in government colleges, plus seats in private medical colleges, are allocated by state authorities based on state domicile, state MBBS completion, and local reservation rules.",
    },
    {
      q: "Can I participate in both MCC (AIQ) and State Quota counselling together?",
      a: "Yes, you can register and participate in both AIQ and State counselling simultaneously. However, under Supreme Court guidelines, once you join an allotted seat in Round 2 of either AIQ or State quota, you are not permitted to vacate that seat or participate in subsequent mop-up rounds to prevent seat blocking.",
    },
    {
      q: "What if my NEET PG rank is not high enough for a government seat?",
      a: "Doctors with moderate ranks have several strong avenues: (1) DNB courses in leading tertiary care hospitals, (2) Low-budget private medical colleges in states with open domicile, (3) Management/NRI quota seats, or (4) Exploring Medical PG in Germany — a 100% tuition-free pathway with €4,800–€5,500/month salary and no entrance exam pressure.",
    },
    {
      q: "How does CaptonVisaPoint help doctors in NEET PG admission?",
      a: "We provide comprehensive 1-on-1 mentorship: personalized choice-filling algorithms based on past closing cutoffs, bond conditions analysis, private college fee negotiation guidance, NRI sponsorship documentation, and round-by-round strategy.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="NEET PG Counselling | Process, Dates & Seat Allotment — CaptonVisaPoint"
        description="Get complete details on NEET PG counselling, including schedule, eligibility, documents required, seat allotment process, and admission guidance."
        keywords="NEET PG Counselling, NEET PG Seat Allotment, Medical PG Counselling India, MD MS Admission, DNB Counselling, MCC NEET PG, CaptonVisaPoint"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a1628] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2036] to-[#132a4a]" />
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -top-32 -right-24 w-[34rem] h-[34rem] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-20 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 pb-14 lg:pt-14 lg:pb-16">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left: message */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-sm mb-7">
                <svg
                  viewBox="0 0 24 16"
                  aria-hidden="true"
                  className="w-6 h-4 rounded-[3px] ring-1 ring-white/20 shrink-0"
                >
                  <rect width="24" height="5.34" fill="#FF9933" />
                  <rect y="5.34" width="24" height="5.33" fill="#ffffff" />
                  <rect y="10.67" width="24" height="5.33" fill="#138808" />
                  <circle cx="12" cy="8" r="1.9" fill="none" stroke="#000080" strokeWidth="0.5" />
                </svg>
                <span className="text-[11px] sm:text-xs font-semibold text-orange-300 tracking-wide">
                  MCC &amp; State Counselling — Live Guidance
                </span>
              </div>

              <h1 className="text-[2.1rem] leading-[1.12] sm:text-5xl sm:leading-[1.08] lg:text-[3.5rem] lg:leading-[1.05] font-extrabold tracking-[-0.02em] text-white mb-6">
                Your NEET PG rank is only half the story. Choice filling{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">writes the rest.</span>
                  <span className="absolute -left-1 -right-1 -bottom-[0.02em] h-[0.22em] bg-gradient-to-r from-orange-500/55 via-orange-500/40 to-amber-400/15 -skew-x-6 rounded-sm" />
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-[38rem] mb-8">
                Schedules, eligibility, documents and round-by-round seat allotment for
                MD, MS and DNB — decoded by counsellors who have mapped five years of
                closing cutoffs across AIQ, State, Deemed and NRI quotas.
              </p>

              <div className="flex flex-wrap items-end gap-x-8 gap-y-6 mb-8">
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                    45,000<span className="text-orange-400">+</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-1.5">
                    MD / MS / DNB seats in the matrix
                  </div>
                </div>
                <div className="h-12 w-px bg-white/10 hidden xl:block" />
                <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm">
                  <div>
                    <div className="font-bold text-slate-100">50 / 50</div>
                    <div className="text-xs text-slate-400 mt-0.5">AIQ &amp; State split</div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-100">4 rounds</div>
                    <div className="text-xs text-slate-400 mt-0.5">Through stray vacancy</div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-100">1-on-1</div>
                    <div className="text-xs text-slate-400 mt-0.5">Senior advisor</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3.5">
                <a
                  href="#inquiry"
                  className="group px-7 py-4 bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-orange-500/25 transition-colors flex items-center justify-center gap-2.5"
                >
                  Book a free counselling session
                  <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#counselling"
                  className="px-7 py-4 bg-white/[0.06] hover:bg-white/[0.12] text-white font-semibold rounded-xl border border-white/15 backdrop-blur-sm transition-colors flex items-center justify-center gap-2"
                >
                  See the counselling flow
                </a>
              </div>
            </div>

            {/* Right: seat allotment panel */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-tr from-orange-500/15 via-transparent to-blue-500/15 rounded-[2rem] blur-xl" />

                <div className="relative rounded-3xl bg-slate-900/70 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
                  <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10 bg-white/[0.03]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-semibold text-slate-200">
                        Seat allotment tracker
                      </span>
                    </div>
                    <span className="text-[10px] font-medium text-slate-500">mcc.nic.in</span>
                  </div>

                  <div className="p-5 sm:p-6 space-y-5">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <div className="text-[11px] text-slate-400">All India Rank</div>
                        <div className="text-2xl font-black text-white mt-0.5">8,240</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[11px] text-slate-400">Percentile</div>
                        <div className="text-2xl font-black text-orange-400 mt-0.5">87.6</div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2.5">
                        <span>Counselling rounds</span>
                        <span className="text-slate-300 font-medium">Round 2 open</span>
                      </div>
                      <div className="flex gap-1.5">
                        <div className="h-1.5 flex-1 rounded-full bg-emerald-400" />
                        <div className="h-1.5 flex-1 rounded-full bg-orange-400" />
                        <div className="h-1.5 flex-1 rounded-full bg-white/10" />
                        <div className="h-1.5 flex-1 rounded-full bg-white/10" />
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-500 mt-2">
                        <span>R1</span>
                        <span>R2</span>
                        <span>Mop-up</span>
                        <span>Stray</span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-1">
                      <div className="text-[11px] text-slate-400 mb-1">
                        Branches matching this rank
                      </div>
                      {HERO_SEAT_MATCHES.map((r) => (
                        <div
                          key={r.branch}
                          className="flex items-center justify-between gap-3 px-3.5 py-3 rounded-xl bg-white/[0.04] border border-white/[0.07]"
                        >
                          <div className="min-w-0">
                            <div className="text-[13px] font-semibold text-slate-100 truncate">
                              {r.branch}
                            </div>
                            <div className="text-[10px] text-slate-500 mt-0.5">{r.quota}</div>
                          </div>
                          <span
                            className={`shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-full ${r.tone}`}
                          >
                            {r.chance}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/medical-pg/germany"
                    className="flex items-center justify-between gap-3 px-5 sm:px-6 py-4 border-t border-white/10 bg-white/[0.03] hover:bg-white/[0.07] transition-colors group"
                  >
                    <span className="text-xs text-slate-300">
                      Rank not landing a seat?{" "}
                      <span className="text-white font-semibold">
                        Germany pays residents €5,500/mo
                      </span>
                    </span>
                    <FiArrowRight className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pathway Switch Banner */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-950 py-3.5 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-medium">
            <span className="text-amber-300 font-bold">💡 Struggling with NEET Cutoff Stress?</span>
            <span className="text-slate-200">Pursue zero-tuition, €4,800–€5,500/month salaried Medical PG in Germany without NEET rank pressure!</span>
            <Link
              to="/medical-pg/germany"
              className="underline font-bold text-white hover:text-amber-300 transition-colors ml-1"
            >
              View Germany Pathway →
            </Link>
          </div>
        </div>
      </section>

      {/* Overview & What is NEET PG Counselling */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm">
              <span className="text-xs font-black tracking-widest text-orange-600 uppercase bg-orange-100/70 px-3.5 py-1 rounded-full">
                Admission Framework
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 mb-4">
                What is NEET PG Counselling?
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                NEET PG Counselling is the official process through which eligible candidates are allotted
                seats in various postgraduate medical courses (MD, MS, DNB, Diploma) offered by government
                and private medical institutions across India.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                The centralized counselling is conducted by the <strong>Medical Counselling Committee (MCC)</strong> of the
                <strong>Directorate General of Health Services (DGHS)</strong> on behalf of the <strong>Ministry of Health and Family Welfare (MoHFW)</strong> for
                50% All India Quota and 100% Deemed/Central seats. The remaining 50% State Quota seats and private college seats are counselled by the respective State Health Authorities.
              </p>
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-xs sm:text-sm text-blue-900 font-medium flex items-center gap-3">
                <FiCompass className="text-blue-600 text-xl shrink-0" />
                <span>
                  Candidates who have qualified in the NEET PG entrance exam must register on the official portals, complete choice filling, and participate in computerized allotment rounds.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counselling Process Steps */}
      <section id="counselling" className="py-16 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black tracking-widest text-orange-600 uppercase bg-orange-50 px-3.5 py-1 rounded-full border border-orange-200">
              Step-by-Step Pathway
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              NEET PG Counselling & Admission Flow
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              The MCC centralized counselling and state counselling procedures follow a rigorous
              chronological sequence. Understanding the rules prevents seat forfeiture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {COUNSELLING_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 relative flex flex-col hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/5 transition-all group"
              >
                <div className="text-3xl font-black text-orange-500/30 group-hover:text-orange-500 transition-colors mb-3">
                  {step.step}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotas & Counselling Types (Tabbed) */}
      <section id="seats" className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black tracking-widest text-blue-700 uppercase bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
              Seat Quotas Explained
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Understanding NEET PG Counselling Quotas
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Every qualified doctor in India falls under multiple quota avenues. Leveraging the
              right quota maximizes your chances of landing a clinical seat within your budget.
            </p>
          </div>

          {/* Tabs header */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-3xl mx-auto">
            {Object.keys(COUNSELLING_TYPES).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeTab === key
                    ? "bg-blue-700 text-white shadow-lg shadow-blue-700/25 scale-105"
                    : "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200"
                }`}
              >
                {COUNSELLING_TYPES[key].title}
              </button>
            ))}
          </div>

          {/* Active Tab Card */}
          <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl shadow-xl border border-slate-200/80 p-6 sm:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {COUNSELLING_TYPES[activeTab].title}
                </h3>
                <div className="text-xs font-bold text-blue-600 mt-1 flex items-center gap-1.5">
                  <FiCompass /> Conducting Authority: {COUNSELLING_TYPES[activeTab].authority}
                </div>
              </div>
              <span className="self-start md:self-auto px-4 py-1.5 rounded-full bg-orange-50 text-orange-700 border border-orange-200 text-xs font-bold">
                100% Merit Seat Allocation
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Coverage & Scope
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {COUNSELLING_TYPES[activeTab].coverage}
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Candidate Eligibility
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {COUNSELLING_TYPES[activeTab].eligibility}
                </p>
              </div>
            </div>

            <div>
              <div className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <FiCheckCircle className="text-emerald-600" /> Key Insights & Strategic Rules:
              </div>
              <ul className="space-y-2.5">
                {COUNSELLING_TYPES[activeTab].highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How CaptonVisaPoint Works / Services */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black tracking-widest text-emerald-700 uppercase bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
              Our Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              How We Work with You
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              We eliminate guesswork from NEET PG seat allotment with data-driven analytics and personal counselling support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {WORK_PROCESS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col"
              >
                <div className="w-10 h-10 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center font-black mb-4">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Grid */}
      <section id="specializations" className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black tracking-widest text-blue-700 uppercase bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
              Top Specializations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Top NEET PG Courses & Branches
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Explore MD, MS, and DNB branch choices with average AIQ closing cutoffs for general category.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SPECIALTIES.map((spec, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-lg hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100/70 text-blue-800">
                      {spec.type}
                    </span>
                    <span className="text-[10px] font-bold text-orange-600">
                      {spec.demand}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">
                    {spec.name}
                  </h4>
                  <p className="text-xs text-slate-500 mb-2">
                    Expected AIQ: {spec.cutOff}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-blue-700">
                  <span>Choice Filling Priority</span>
                  <FiArrowRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required Checklist */}
      <section id="dates" className="py-16 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-black tracking-widest text-purple-700 uppercase bg-purple-50 px-3.5 py-1 rounded-full border border-purple-200">
                Documentation Checklist
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
                Mandatory Documents for NEET PG Counselling
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Keep both original certificates and 4 sets of attested photocopies ready before Round 1 reporting.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DOCUMENTS_REQUIRED.map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors"
                  >
                    <FiCheckCircle className="text-emerald-600 text-lg shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {doc}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
                <FiAlertCircle className="text-amber-600 text-lg shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold">Pro-Tip for Candidates:</strong> Ensure your internship
                  completion date satisfies the official MCC cutoff deadline. If you are an FMG (Foreign Medical Graduate),
                  your screening pass certificate and permanent registration certificate are mandatory.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: India NEET PG vs Germany Medical PG */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black tracking-widest text-orange-600 uppercase bg-orange-50 px-3.5 py-1 rounded-full border border-orange-200">
              Evaluate All Options
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Compare: PG in India vs Medical PG in Germany
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Explore why thousands of young doctors are considering Germany as their primary or backup postgraduate pathway.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-slate-200 shadow-xl bg-white">
            <div className="grid grid-cols-3 bg-slate-900 text-white font-bold text-xs sm:text-sm p-4 sm:p-5">
              <div>Parameter</div>
              <div className="text-orange-400 text-center">PG in India (NEET PG)</div>
              <div className="text-blue-400 text-center">Medical PG in Germany</div>
            </div>

            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              <div className="grid grid-cols-3 p-4 sm:p-5 items-center">
                <div className="font-bold text-slate-800">Entrance Examination</div>
                <div className="text-center text-slate-600">Heavy competitive MCQ exam (2.4L+ doctors)</div>
                <div className="text-center font-semibold text-emerald-700 bg-emerald-50/70 p-2 rounded-xl">
                  No competitive MCQ entrance test
                </div>
              </div>

              <div className="grid grid-cols-3 p-4 sm:p-5 items-center bg-slate-50/50">
                <div className="font-bold text-slate-800">Tuition Fees</div>
                <div className="text-center text-slate-600">₹0 (Govt) to ₹60L–₹1.5Cr (Private/Deemed)</div>
                <div className="text-center font-semibold text-emerald-700 bg-emerald-50/70 p-2 rounded-xl">
                  €0 Zero Tuition (Salaried clinical employment)
                </div>
              </div>

              <div className="grid grid-cols-3 p-4 sm:p-5 items-center">
                <div className="font-bold text-slate-800">Monthly Compensation</div>
                <div className="text-center text-slate-600">₹40,000 – ₹90,000 / month (varies by state)</div>
                <div className="text-center font-semibold text-blue-700 bg-blue-50/70 p-2 rounded-xl">
                  €4,800 – €5,500 (~₹4.3L – ₹5L / month)
                </div>
              </div>

              <div className="grid grid-cols-3 p-4 sm:p-5 items-center bg-slate-50/50">
                <div className="font-bold text-slate-800">Specialty Selection</div>
                <div className="text-center text-slate-600">Strictly cutoff-dependent (top 2% pick desired branch)</div>
                <div className="text-center font-semibold text-emerald-700 bg-emerald-50/70 p-2 rounded-xl">
                  Direct choice of desired specialization
                </div>
              </div>

              <div className="grid grid-cols-3 p-4 sm:p-5 items-center">
                <div className="font-bold text-slate-800">Permanent Settlement</div>
                <div className="text-center text-slate-600">Home country practice</div>
                <div className="text-center font-semibold text-blue-700 bg-blue-50/70 p-2 rounded-xl">
                  EU Blue Card & PR in 21 Months
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Form Section */}
      <section id="inquiry" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-blue-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <MedicalPGForm
              defaultMode="india"
              title="Book a Free NEET PG Counselling Session"
              subtitle="Connect with our medical counselling panel to analyze your NEET score, explore state closing cutoffs, and lock the best clinical seat."
            />
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-black tracking-widest text-slate-500 uppercase bg-slate-100 px-3.5 py-1 rounded-full">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
                NEET PG Counselling FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-slate-50/50 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <FiChevronDown
                      className={`text-slate-400 shrink-0 text-xl transition-transform duration-300 ${
                        activeFaq === index ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Sticky CTA */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-950 text-white py-8 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-extrabold text-lg sm:text-xl">
              Confused between AIQ, State Counselling, or Germany?
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
              Speak directly with CaptonVisaPoint's medical admission desk today.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:+919914773125"
              className="px-6 py-3 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all flex items-center gap-2 text-sm shadow-md"
            >
              <FiPhoneCall /> +91 99147 73125
            </a>
            <a
              href="https://wa.me/919914773125?text=Hello%20CaptonVisaPoint%2C%20I%20need%20guidance%20for%20NEET%20PG%20Counselling."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all text-sm shadow-md flex items-center gap-2"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalPGIndia;
