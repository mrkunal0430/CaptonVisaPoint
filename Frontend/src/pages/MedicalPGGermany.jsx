import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCheckCircle,
  FiAward,
  FiGlobe,
  FiDollarSign,
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
  FiClock,
  FiBriefcase,
  FiCheck,
  FiHeart,
  FiActivity,
} from "react-icons/fi";
import SEO from "../components/SEO";
import { MedicalPGForm } from "../components/forms";

const HERO_PAYSLIP_LINES = [
  { label: "Base salary (Grundgehalt)", value: "€4,850" },
  { label: "On-call & night duty", value: "€650" },
  { label: "Tax & social contributions", value: "− €2,090", negative: true },
];

const MedicalPGGermany = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeFspPart, setActiveFspPart] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const PATHWAY_STEPS = [
    {
      step: "01",
      badge: "In India",
      title: "German Language Training (A1 → B2)",
      desc: "Learn German up to B2 level in India through dedicated medical batches. Build conversational fluency, hospital vocabulary, and grammar precision.",
    },
    {
      step: "02",
      badge: "India / Germany",
      title: "Degree Recognition (Anerkennung)",
      desc: "Submission of MBBS transcripts, internship logbook, and syllabus to the respective State Medical Council (Landesprüfungsamt) for equivalence assessment (Defizitbescheid).",
    },
    {
      step: "03",
      badge: "In Germany",
      title: "C1 Medical German & FSP Exam",
      desc: "Specialized clinical language preparation in Germany followed by the Fachsprachprüfung (FSP) — assessing doctor-patient communication, medical reporting (Arztbrief), and peer discussion.",
    },
    {
      step: "04",
      badge: "Temporary License",
      title: "Berufserlaubnis & Salaried Employment",
      desc: "Obtain your 2-year temporary license. Start working as an Assistenzarzt in a German clinic or hospital with €4,800–€5,500/month salary and an EU Blue Card.",
    },
    {
      step: "05",
      badge: "Permanent License",
      title: "Kenntnisprüfung (KP) & Approbation",
      desc: "Clear the oral-practical clinical knowledge examination (Kenntnisprüfung) before a 3-member medical board to receive permanent German Medical Licensing (Approbation).",
    },
    {
      step: "06",
      badge: "Specialization",
      title: "Facharztweiterbildung (Specialist)",
      desc: "Complete 5 to 6 years of structured clinical residency in your chosen specialty and graduate as an internationally recognized medical specialist (Facharzt).",
    },
  ];

  const FSP_PARTS = [
    {
      part: "Part 1 (20 Mins)",
      title: "Doctor–Patient Consultation (Anamnese)",
      desc: "Take detailed medical history from an actor patient. Build rapport, ask about onset, duration, medications, allergies, family history, and communicate empathetically in lay German.",
    },
    {
      part: "Part 2 (20 Mins)",
      title: "Medical Documentation (Arztbrief)",
      desc: "Draft a formal clinical report based on the consultation. Formulate suspected diagnosis, differential diagnoses, investigation recommendations, and emergency treatment plans using medical terminology.",
    },
    {
      part: "Part 3 (20 Mins)",
      title: "Doctor–Doctor Communication (Arzt-Arzt Gespräch)",
      desc: "Present the patient case professionally to senior medical examiners. Discuss pathological mechanisms, rationalize investigation findings, and respond to diagnostic scrutiny.",
    },
  ];

  const GERMAN_LEVEL_DURATIONS = [
    { level: "A1 (Beginner)", captonTime: "8 Weeks", inGermanyTime: "8 Weeks", goetheTime: "12 Weeks" },
    { level: "A2 (Elementary)", captonTime: "8 Weeks", inGermanyTime: "8 Weeks", goetheTime: "12 Weeks" },
    { level: "B1 (Intermediate)", captonTime: "12 Weeks", inGermanyTime: "8 Weeks", goetheTime: "12 Weeks" },
    { level: "B2.1 & B2.2 (Upper Intermediate)", captonTime: "16 Weeks", inGermanyTime: "8 Weeks", goetheTime: "24 Weeks" },
    { level: "C1.1 & C1.2 (Medical German - FSP)", captonTime: "16 Weeks", inGermanyTime: "8 Weeks", goetheTime: "24 Weeks" },
  ];

  const HOSPITAL_TYPES = [
    {
      name: "Public Hospitals (Öffentliche Krankenhäuser)",
      managedBy: "Owned and operated by municipalities, cities, or federal states (Länder).",
      features: "Large university clinics, extensive clinical exposure, cutting-edge medical research, state-funded residency infrastructure.",
    },
    {
      name: "Charitable Hospitals (Freigemeinnützige Krankenhäuser)",
      managedBy: "Operated by non-profit entities or religious organizations (e.g., German Red Cross, Caritas, Diakonie).",
      features: "High patient trust, values-driven patient care, strong surgical and internal medicine residency tracks.",
    },
    {
      name: "Private Hospitals (Privatkrankenhäuser)",
      managedBy: "Commercial hospital groups (Helios, Asklepios, Sana Kliniken, Rhön-Klinikum).",
      features: "State-of-the-art diagnostic equipment, modern facilities, competitive bonus structures, fast placement.",
    },
  ];

  const CAREER_AFTER_APPROBATION = [
    { title: "Hospitals & Clinics", desc: "Work as an Assistenzarzt, Oberarzt (Senior Physician), or Chefarzt (Department Head) in leading tertiary centers." },
    { title: "Private Medical Practice", desc: "Establish your own independent clinic (Praxis) or partner with medical group practices across Germany." },
    { title: "Cutting-Edge Medical Research", desc: "Join prestigious Max Planck, Fraunhofer, or university institutes contributing to breakthrough clinical trials." },
    { title: "University Faculty & Teaching", desc: "Mentor medical undergraduates and train upcoming residents in teaching hospitals." },
    { title: "Pharmaceutical Industry", desc: "Lead pharmacovigilance, medical affairs, and clinical research in global multinational pharma companies." },
    { title: "Public Health & Health Insurance", desc: "Advise government healthcare directorates or work in medical evaluation panels for health insurers." },
  ];

  const SPECIALTIES = [
    { name: "Internal Medicine & Subspecialties", duration: "60 Months (5 Years)", sub: "Cardiology, Gastroenterology, Nephrology, Oncology, Pulmonology" },
    { name: "General Surgery & Orthopedics", duration: "72 Months (6 Years)", sub: "Visceral Surgery, Trauma & Orthopedics, Vascular, Plastic Surgery" },
    { name: "Pediatrics & Neonatology", duration: "60 Months (5 Years)", sub: "Pediatric Intensive Care, Neuropediatrics, Pediatric Cardiology" },
    { name: "Radiology & Nuclear Medicine", duration: "60 Months (5 Years)", sub: "Diagnostic Radiology, Interventional Radiology, Neuroradiology" },
    { name: "Anesthesiology & Intensive Care", duration: "60 Months (5 Years)", sub: "Emergency Medicine, Pain Therapy, Critical Care" },
    { name: "Obstetrics & Gynecology", duration: "60 Months (5 Years)", sub: "Reproductive Endocrinology, Gynecologic Oncology, Perinatal Medicine" },
    { name: "Neurology & Psychiatry", duration: "60 Months (5 Years)", sub: "Clinical Neurophysiology, Stroke Care, Child & Adolescent Psychiatry" },
    { name: "Urology & Ophthalmology", duration: "60 Months (5 Years)", sub: "Urological Oncology, Retina Surgery, Pediatric Ophthalmology" },
  ];

  const FAQS = [
    {
      q: "Is an Indian MBBS degree recognized in Germany?",
      a: "Yes! A non-EU medical qualification, including an Indian MBBS, is evaluated through a formal equivalence process called Anerkennung. The State Medical Licensing Authority (Landesprüfungsamt) checks your university curriculum. You will take the Fachsprachprüfung (FSP - medical language test) and Kenntnisprüfung (KP - clinical knowledge test) to be awarded your full, permanent medical license (Approbation).",
    },
    {
      q: "Why is there no competitive entrance exam like NEET PG in Germany?",
      a: "In Germany, medical residency (Facharztweiterbildung) is legally structured as clinical employment rather than a university course. Instead of competitive MCQs like NEET PG or USMLE, Germany conducts qualifying clinical assessments (FSP and KP). Once you clear these qualifying benchmarks and obtain your medical license, you are entitled to secure a residency position in your chosen discipline.",
    },
    {
      q: "How much salary do Indian doctors earn during Medical PG in Germany?",
      a: "Resident doctors (Assistenzärzte) in Germany are paid monthly salaries regulated under official collective agreements (TV-Ärzte). Beginner doctors earn approximately €4,800 to €5,500 per month (~₹4.3 to ₹5 Lakhs/month), with annual seniority increments and extra pay for night and weekend duties.",
    },
    {
      q: "What is the difference between Berufserlaubnis and Approbation?",
      a: "Berufserlaubnis is a temporary 2-year medical license issued after passing the Fachsprachprüfung (FSP), allowing you to practice and earn a full salary under supervision. Approbation is the permanent, unrestricted German medical license awarded after passing the Kenntnisprüfung (KP) or Gleichwertigkeit assessment, granting lifetime practice rights throughout Germany.",
    },
    {
      q: "How soon can I get German Permanent Residency (PR)?",
      a: "Because resident doctors earn above the official statutory threshold for shortage occupations, they receive an EU Blue Card. Under German immigration law, EU Blue Card holders can obtain Permanent Residency (Niederlassungserlaubnis) in just 21 months with B1 German certification.",
    },
    {
      q: "What happens if a candidate fails the Kenntnisprüfung (KP)?",
      a: "The Kenntnisprüfung can be repeated up to two times (three attempts in total). Between attempts, a temporary license (Berufserlaubnis) can often be extended for up to 1 year so you can continue working and gaining clinical experience in German hospitals while preparing for re-examination.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="Medical PG in Germany after MBBS for Indian Students | CaptonVisaPoint"
        description="Pursue Medical PG in Germany after MBBS with CaptonVisaPoint. Work-Learn-Earn pathway, €4,800–€5,500/month salary, zero tuition, Approbation licensing, and PR in 21 months."
        keywords="Medical PG in Germany, PG in Germany after MBBS, Medical Residency in Germany, Approbation Germany, FSP Exam, Kenntnisprüfung, Assistenzarzt Germany, Facharztweiterbildung, CaptonVisaPoint"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a1628] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#081221] via-[#0d1e35] to-[#0f2a3d]" />
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -top-32 -left-24 w-[34rem] h-[34rem] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-20 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

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
                  <rect width="24" height="5.34" fill="#000000" />
                  <rect y="5.34" width="24" height="5.33" fill="#DD0000" />
                  <rect y="10.67" width="24" height="5.33" fill="#FFCE00" />
                </svg>
                <span className="text-[11px] sm:text-xs font-semibold text-teal-300 tracking-wide">
                  Facharzt Residency for Indian MBBS Doctors
                </span>
              </div>

              <h1 className="text-[2.1rem] leading-[1.12] sm:text-5xl sm:leading-[1.08] lg:text-[3.5rem] lg:leading-[1.05] font-extrabold tracking-[-0.02em] text-white mb-6">
                In Germany, your postgraduate training{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">pays you a salary.</span>
                  <span className="absolute -left-1 -right-1 -bottom-[0.02em] h-[0.22em] bg-gradient-to-r from-teal-400/50 via-teal-400/35 to-sky-400/15 -skew-x-6 rounded-sm" />
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-[38rem] mb-8">
                No entrance exam, no rank cutoff, no tuition. You qualify in medical German,
                clear the Approbation, and join a teaching hospital as a salaried
                Assistenzarzt — choosing your own specialty from day one.
              </p>

              <div className="flex flex-wrap items-end gap-x-8 gap-y-6 mb-8">
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                    €5,500<span className="text-teal-400 text-2xl sm:text-3xl font-bold">/mo</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-1.5">
                    Starting resident salary, before overtime
                  </div>
                </div>
                <div className="h-12 w-px bg-white/10 hidden xl:block" />
                <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm">
                  <div>
                    <div className="font-bold text-slate-100">€0</div>
                    <div className="text-xs text-slate-400 mt-0.5">Tuition, all 5 years</div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-100">21 months</div>
                    <div className="text-xs text-slate-400 mt-0.5">To PR on Blue Card</div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-100">65,000+</div>
                    <div className="text-xs text-slate-400 mt-0.5">Foreign doctors already there</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3.5">
                <a
                  href="#inquiry"
                  className="group px-7 py-4 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold rounded-xl shadow-lg shadow-teal-400/25 transition-colors flex items-center justify-center gap-2.5"
                >
                  Book a free consultation
                  <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#pathway"
                  className="px-7 py-4 bg-white/[0.06] hover:bg-white/[0.12] text-white font-semibold rounded-xl border border-white/15 backdrop-blur-sm transition-colors flex items-center justify-center gap-2"
                >
                  See the 5-step pathway
                </a>
              </div>
            </div>

            {/* Right: Assistenzarzt payslip */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-tr from-teal-500/15 via-transparent to-blue-500/15 rounded-[2rem] blur-xl" />

                <div className="relative rounded-3xl bg-slate-900/70 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
                  <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10 bg-white/[0.03]">
                    <div>
                      <div className="text-xs font-semibold text-slate-200">
                        Gehaltsabrechnung
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">
                        Assistenzarzt • Year 1
                      </div>
                    </div>
                    <span className="text-[10px] font-medium text-slate-400 px-2 py-1 rounded-md bg-white/[0.06] border border-white/10">
                      TV-Ärzte
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 space-y-4">
                    {HERO_PAYSLIP_LINES.map((line) => (
                      <div
                        key={line.label}
                        className="flex items-baseline justify-between gap-3"
                      >
                        <span className="text-[13px] text-slate-400">{line.label}</span>
                        <span
                          className={`text-[13px] font-semibold tabular-nums ${
                            line.negative ? "text-slate-500" : "text-slate-100"
                          }`}
                        >
                          {line.value}
                        </span>
                      </div>
                    ))}

                    <div className="pt-4 border-t border-white/10 flex items-baseline justify-between gap-3">
                      <span className="text-sm font-semibold text-slate-200">
                        Net in hand
                      </span>
                      <span className="text-2xl font-black text-teal-300 tabular-nums">
                        €3,410
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl bg-teal-500/[0.08] border border-teal-400/15">
                      <FiTrendingUp className="shrink-0 text-teal-300" />
                      <span className="text-[11px] text-slate-300 leading-relaxed">
                        Rises to <strong className="text-white">€7,800/month</strong> gross
                        by year 5 of Facharzt training
                      </span>
                    </div>
                  </div>

                  <Link
                    to="/medical-pg/india"
                    className="flex items-center justify-between gap-3 px-5 sm:px-6 py-4 border-t border-white/10 bg-white/[0.03] hover:bg-white/[0.07] transition-colors group"
                  >
                    <span className="text-xs text-slate-300">
                      Still weighing NEET PG?{" "}
                      <span className="text-white font-semibold">
                        Compare the India pathway
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

      {/* Why Medical PG in Germany is Such a Unique System */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-xs font-black tracking-widest text-blue-700 uppercase bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
              The German Paradigm
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Why Medical PG in Germany is Such a Unique System
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
              When you decide to become a specialist in Germany as a medic from India, you eliminate the hurdles
              faced by doctors in India. Pursuing PG in Germany after MBBS offers:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:shadow-xl hover:border-blue-300 transition-all">
              <div className="text-3xl mb-3">🚫</div>
              <h4 className="font-bold text-slate-900 text-lg mb-2">No Competitive MCQ Exams</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Qualifying medical German and practical clinical exams instead of high-stakes, cutoff-driven MCQ ranking tests.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:shadow-xl hover:border-blue-300 transition-all">
              <div className="text-3xl mb-3">🩺</div>
              <h4 className="font-bold text-slate-900 text-lg mb-2">Choice of Specialization</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Apply directly to the specialty of your choice—Radio-Diagnosis, Internal Medicine, Surgery, or Pediatrics—without rank restrictions.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:shadow-xl hover:border-blue-300 transition-all">
              <div className="text-3xl mb-3">📈</div>
              <h4 className="font-bold text-slate-900 text-lg mb-2">Super-Specialization Pathway</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Direct integrated residency training (Facharztweiterbildung) lasting 5–6 years, leading to direct fellowship and super-specialist status.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:shadow-xl hover:border-blue-300 transition-all">
              <div className="text-3xl mb-3">💶</div>
              <h4 className="font-bold text-slate-900 text-lg mb-2">Settlement with Handsome Pay</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Earn €4,800 to €5,500/month as an employed doctor on day one. Specialist qualification is an organic outcome of your employment.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-black">WORK – LEARN – EARN MODEL</h4>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
                The uniqueness of the system allows you to work in a clinic or hospital as a fully paid doctor while pursuing your medical PG in Germany.
              </p>
            </div>
            <a
              href="#inquiry"
              className="px-6 py-3 bg-teal-400 hover:bg-teal-500 text-slate-950 font-extrabold rounded-xl transition-all text-sm shrink-0 shadow-lg"
            >
              Book Free Counselling →
            </a>
          </div>
        </div>
      </section>

      {/* NEET PG Reality Check vs Germany Opportunity */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-black tracking-widest text-rose-600 uppercase bg-rose-50 px-3.5 py-1 rounded-full border border-rose-200">
                The Indian Bottleneck
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
                Is NEET PG / NEXT a Realistic Approach to Reaching Your Goals?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Every year, young doctors in India dedicate years of hard work for a postgraduate medical seat:
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-3xl font-black text-rose-600">2,42,000</div>
                  <div className="text-xs font-bold text-slate-700 mt-1">Doctors Appear Annually</div>
                  <p className="text-[11px] text-slate-500 mt-1">Only ~1.28 Lakh qualify standard cutoffs</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-3xl font-black text-amber-600">27,000</div>
                  <div className="text-xs font-bold text-slate-700 mt-1">Govt MD/MS Seats</div>
                  <p className="text-[11px] text-slate-500 mt-1">1 out of 10 doctors secures a government seat</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-3xl font-black text-emerald-600">Top 2%</div>
                  <div className="text-xs font-bold text-slate-700 mt-1">Choice of Specialization</div>
                  <p className="text-[11px] text-slate-500 mt-1">98% compromise on their dream branch</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                In Germany, by contrast, an ageing demographic and retirement wave have created a severe physician shortage.
                Over <strong>65,000 foreign physicians</strong> are currently practicing in Germany, representing nearly 15% of all doctors in the country.
                Germany's healthcare system welcomes qualified international medical graduates into structured, salaried specialist training.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Degree Recognition & Licensing Pathway */}
      <section id="pathway" className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black tracking-widest text-teal-700 uppercase bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200">
              Official Licensing Steps
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Is Your Indian Medical Degree Valid in Germany?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              An Indian MBBS is recognized through equivalence evaluation (Anerkennung).
              Here is the proven, step-by-step roadmap from India to full German Approbation:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {PATHWAY_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 relative flex flex-col hover:border-blue-300 hover:shadow-xl transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-blue-600 font-mono">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                    {step.badge}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Fachsprachprüfung (FSP) In-Depth Breakdown */}
          <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-16">
            <div className="relative z-10">
              <span className="text-xs font-black tracking-widest text-teal-400 uppercase bg-white/10 px-3.5 py-1 rounded-full">
                Medical Language Examination
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 mb-2">
                Structure of the Fachsprachprüfung (FSP)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                The FSP tests whether a doctor can safely and effectively communicate in a clinical setting.
                It does not test medical theoretical knowledge—only professional medical German proficiency:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {FSP_PARTS.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-400/50 transition-colors"
                  >
                    <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-1">
                      {p.part}
                    </div>
                    <div className="text-sm font-bold text-white mb-2">{p.title}</div>
                    <div className="text-xs text-slate-300 leading-relaxed">{p.desc}</div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs sm:text-sm">
                💡 <strong>Success Rate Insight:</strong> Doctors who undertake structured medical German training have a pass rate exceeding 90% in their FSP attempt.
              </div>
            </div>
          </div>

          {/* Kenntnisprüfung (KP) Clinical Examination Details */}
          <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
            <span className="text-xs font-black tracking-widest text-purple-700 uppercase bg-purple-50 px-3.5 py-1 rounded-full border border-purple-200">
              Permanent Licensing Test
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-2">
              What is Kenntnisprüfung (KP) & How is it Conducted?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              The KP is an oral-practical examination that verifies your medical knowledge and practical diagnostic competence.
              It typically takes place at an accredited university teaching hospital before three examiners covering Internal Medicine, Surgery, and Clinical Pharmacology/Emergency Medicine.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  What to Bring to the Practical Exam:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">✓ White doctor's coat (Kittel)</li>
                  <li className="flex items-center gap-2">✓ Stethoscope & examination penlight</li>
                  <li className="flex items-center gap-2">✓ Neurological reflex hammer</li>
                  <li className="flex items-center gap-2">✓ Valid passport / German residence permit</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Clinical Case Reasoning Sequence:
                </div>
                <div className="text-xs text-slate-700 font-mono space-y-1 bg-slate-50 p-2.5 rounded-lg">
                  <div>1. Anamnese (History)</div>
                  <div>2. Untersuchung (Examination)</div>
                  <div>3. Differentialdiagnosen (Differentials)</div>
                  <div>4. Diagnostik (Diagnostics & Labs)</div>
                  <div>5. Therapie & Epicrisis (Management)</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm">
              ⚠️ <strong>Re-take Policy:</strong> The Kenntnisprüfung can only be repeated twice. Between examination dates, your temporary license (Berufserlaubnis) can be extended so you continue clinical work without loss of income.
            </div>
          </div>
        </div>
      </section>

      {/* Language Durations Table */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-black tracking-widest text-blue-700 uppercase bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
                Language Timetable
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
                German Language Learning Duration for Doctors
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Realistic timelines required to achieve clinical medical German proficiency:
              </p>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
              <div className="grid grid-cols-4 bg-slate-900 text-white font-bold text-[9px] sm:text-sm p-2 sm:p-5 gap-1 sm:gap-3">
                <div>Language Level</div>
                <div className="text-center text-teal-400">Capton Intensive</div>
                <div className="text-center text-sky-400">In Germany</div>
                <div className="text-center text-slate-400">Standard Goethe</div>
              </div>

              <div className="divide-y divide-slate-100 text-[9px] sm:text-sm">
                {GERMAN_LEVEL_DURATIONS.map((row, idx) => (
                  <div
                    key={idx}
                    className={`grid grid-cols-4 p-2 sm:p-5 items-center gap-1 sm:gap-3 ${
                      idx % 2 === 1 ? "bg-slate-50/50" : ""
                    }`}
                  >
                    <div className="font-bold text-slate-900">{row.level}</div>
                    <div className="text-center font-semibold text-teal-700 bg-teal-50 py-1 px-1 sm:py-1.5 sm:px-2 rounded-md sm:rounded-lg break-words">
                      {row.captonTime}
                    </div>
                    <div className="text-center text-slate-600">{row.inGermanyTime}</div>
                    <div className="text-center text-slate-500">{row.goetheTime}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Types in Germany */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black tracking-widest text-emerald-700 uppercase bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
              Healthcare Landscape
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Types of Hospitals in Germany
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Germany hosts over 1,900 hospitals across three distinct ownership categories, offering broad residency placement options:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {HOSPITAL_TYPES.map((hosp, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col"
              >
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-black mb-4">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-slate-900 text-lg mb-2">{hosp.name}</h4>
                <p className="text-xs font-semibold text-emerald-800 bg-emerald-100/60 p-2 rounded-xl mb-3">
                  {hosp.managedBy}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-auto">
                  {hosp.features}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What a Doctor Can Do After Approbation */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black tracking-widest text-blue-700 uppercase bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
              Career Horizons
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              What Can You Do After Approbation in Germany?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Receiving your full German medical license unlocks unrestricted professional practice across the European Union:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {CAREER_AFTER_APPROBATION.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all"
              >
                <h4 className="font-bold text-slate-900 text-base sm:text-lg mb-2 flex items-center gap-2">
                  <FiCheckCircle className="text-teal-600 shrink-0" />
                  <span>{item.title}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Training Durations */}
      <section id="specialties" className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black tracking-widest text-indigo-700 uppercase bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-200">
              Bundesärztekammer Norms
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Medical Specialist Training Duration in Germany
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Minimum training duration in months prescribed by the German Medical Association:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SPECIALTIES.map((spec, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:shadow-lg hover:border-indigo-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-2.5 py-1 rounded-full text-[11px] font-bold bg-indigo-100 text-indigo-800 mb-3">
                    {spec.duration}
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">
                    {spec.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Subspecialties: {spec.sub}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200 text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                  <FiCheckCircle /> Fully Salaried from Day 1
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Form Section */}
      <section id="inquiry" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-blue-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <MedicalPGForm
              defaultMode="germany"
              title="Apply for Medical PG in Germany Roadmap"
              subtitle="Schedule an assessment with our German medical education directors. Receive personalized eligibility verification, language timetable, and licensing costs."
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
                Medical PG in Germany FAQs
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
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white py-8 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-extrabold text-lg sm:text-xl">
              Ready to Start Your Medical Career in Germany?
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
              Connect directly with CaptonVisaPoint's medical placement desk today.
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
              href="https://wa.me/919914773125?text=Hello%20CaptonVisaPoint%2C%20I%20am%20interested%20in%20Medical%20PG%20in%20Germany%20after%20MBBS."
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

export default MedicalPGGermany;
