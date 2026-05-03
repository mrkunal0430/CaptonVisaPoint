import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCheckCircle,
  FiChevronDown,
  FiPhone,
  FiStar,
  FiArrowRight,
  FiChevronRight,
} from "react-icons/fi";
import SEO from "../components/SEO";
import InquiryForm from "../components/forms/InquiryForm";
import {
  topCountries,
  whyChooseUs,
  costComparison,
  studentLife,
  trustBadges,
  mbbsTestimonials,
  faqs,
} from "../data/mbbsData";

/* ─── Section Header ─── */
const SectionTitle = ({ children, className = "" }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-8 sm:mb-10 ${className}`}
  >
    {children}
  </motion.h2>
);

/* ═══════════════ MAIN PAGE ═══════════════ */
const Mbbs = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [tIdx, setTIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setTIdx((p) => (p + 1) % mbbsTestimonials.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <SEO
        title="MBBS Abroad & India"
        description="Study MBBS abroad or in India with Capton Visa Point. WHO-approved universities, low tuition fees, 98% success rate."
        keywords="MBBS abroad, MBBS India, MBBS admission, NEET counseling"
      />

      {/* ═══ HERO ═══ */}
      {/* --- Mobile/Tablet Hero: Image + Solid Text Block --- */}
      <div className="lg:hidden">
        {/* Banner image — standalone, not a background */}
        <div className="relative w-full aspect-[16/8] sm:aspect-[16/7] overflow-hidden">
          <img
            src="/mbbs-assets/Mbbs_hero_BANNER.webp"
            alt="MBBS Abroad - Medical University Campus"
            className="w-full h-full object-cover object-[65%_center]"
          />
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-900 to-transparent" />
        </div>
        {/* Text content on solid background */}
        <div className="bg-gradient-to-b from-slate-900 via-blue-950 to-blue-900 px-4 sm:px-6 py-8 sm:py-10">
          <div className="max-w-lg mx-auto">
            <span className="inline-block bg-blue-600 text-white text-[10px] sm:text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4">
              2026 MBBS Admissions Open
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-[1.18] mb-3">
              Secure Your MBBS Seat in{" "}
              <span className="text-blue-400">India</span> or{" "}
              <span className="text-blue-400">Abroad</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mb-4">
              Even with Low NEET Score
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-5">
              {["NMC Approved", "No Donation", "Direct Admission"].map((b) => (
                <span
                  key={b}
                  className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white/90"
                >
                  <FiCheckCircle
                    className="text-green-400 shrink-0"
                    size={14}
                  />{" "}
                  {b}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {[
                { v: "5000+", l: "Students Placed" },
                { v: "10+", l: "Countries" },
                { v: "₹15 Lacs", l: "Onwards Fees" },
                { v: "100%", l: "Guidance Support" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white/10 border border-white/15 rounded-xl px-2 py-2.5 text-center"
                >
                  <div className="text-sm sm:text-base font-extrabold text-white">
                    {s.v}
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-slate-300 font-medium leading-tight mt-0.5">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Form below on mobile */}
        <div className="bg-slate-50 px-4 sm:px-6 py-8 sm:py-10">
          <div className="max-w-sm mx-auto">
            <InquiryForm
              title="Get Free Counselling"
              subtitle="Fill the form and our expert will call you back within 24 hours"
              variant="compact"
              showNeetScore={true}
            />
          </div>
        </div>
      </div>

      {/* --- Desktop Hero: Full background overlay layout --- */}
      <section className="relative overflow-hidden hidden lg:block">
        <img
          src="/mbbs-assets/Mbbs_hero_BANNER.webp"
          alt="MBBS Abroad - Medical University Campus"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-row items-center justify-between gap-10 py-8 xl:py-10">
            {/* Left — Text & Stats */}
            <div className="max-w-[55%] xl:max-w-[50%]">
              <span className="inline-block bg-blue-600 text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 shadow-lg shadow-blue-600/30">
                2026 MBBS Admissions Open
              </span>
              <h1 className="text-[2.75rem] xl:text-5xl font-extrabold text-white leading-[1.13] mb-3 drop-shadow-md">
                Secure Your MBBS Seat in{" "}
                <span className="text-blue-400">India</span> or{" "}
                <span className="text-blue-400">Abroad</span>
              </h1>
              <p className="text-slate-300 text-base mb-5">
                Even with Low NEET Score
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6">
                {["NMC Approved", "No Donation", "Direct Admission"].map(
                  (b) => (
                    <span
                      key={b}
                      className="flex items-center gap-1.5 text-sm font-semibold text-white/90"
                    >
                      <FiCheckCircle
                        className="text-green-400 shrink-0"
                        size={15}
                      />{" "}
                      {b}
                    </span>
                  ),
                )}
              </div>
              <div className="grid grid-cols-4 gap-3 max-w-md">
                {[
                  { v: "5000+", l: "Students Placed" },
                  { v: "10+", l: "Countries" },
                  { v: "₹15 Lacs", l: "Onwards Fees" },
                  { v: "100%", l: "Guidance Support" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-2 py-2.5 text-center"
                  >
                    <div className="text-base font-extrabold text-white">
                      {s.v}
                    </div>
                    <div className="text-[10px] text-slate-300 font-medium leading-tight mt-0.5">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="w-full max-w-[360px] shrink-0">
              <InquiryForm
                title="Get Free Counselling"
                subtitle="Fill the form and our expert will call you back within 24 hours"
                variant="compact"
                showNeetScore={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BLUE BANNER ═══ */}
      <section className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 py-3.5 sm:py-4">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-white font-bold text-sm sm:text-base mb-2">
            MBBS in Top Universities at Affordable Fees
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 sm:gap-x-6">
            {[
              "Low Fees Structure",
              "World Class Education",
              "Modern Infrastructure",
              "High FMGE/NEXT Success",
            ].map((f, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 text-blue-100 text-[11px] sm:text-xs font-medium"
              >
                <FiCheckCircle className="text-amber-400 shrink-0" size={13} />{" "}
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EXPLORE MBBS PATHWAYS ═══ */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionTitle>
            Explore MBBS <span className="text-blue-700">Pathways</span>
          </SectionTitle>
          <p className="text-center text-slate-500 text-sm sm:text-base max-w-2xl mx-auto mb-8 -mt-4">
            Whether you want to study in India or abroad, we have the right
            guidance for you. Explore both options and find the best fit for
            your career.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {/* MBBS India Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 via-white to-emerald-50 p-6 sm:p-8 hover:shadow-xl hover:border-green-300 transition-all"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-bl-[60px] opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="relative z-10">
                <span className="text-3xl sm:text-4xl mb-3 block">🇮🇳</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                  MBBS in India
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Study at top Government & Private medical colleges with NEET
                  counseling support.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Govt & Private Colleges",
                    "NEET Counseling Guide",
                    "NRI Quota Seats",
                    "State-wise Seat Matrix",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <FiCheckCircle
                        className="text-green-600 shrink-0"
                        size={14}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/mbbs/india"
                  className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-5 py-2.5 rounded-full text-sm transition-all hover:shadow-lg group-hover:translate-x-1"
                >
                  Explore MBBS India <FiArrowRight size={14} />
                </Link>
              </div>
            </motion.div>

            {/* MBBS Abroad Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative group overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-8 hover:shadow-xl hover:border-blue-300 transition-all"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-[60px] opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="relative z-10">
                <span className="text-3xl sm:text-4xl mb-3 block">🌍</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                  MBBS Abroad
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Affordable MBBS programs in WHO-approved universities across
                  10+ countries.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "10+ Countries Available",
                    "WHO/NMC Approved",
                    "Low Tuition Fees",
                    "No Donation Required",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <FiCheckCircle
                        className="text-blue-600 shrink-0"
                        size={14}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/mbbs/abroad"
                  className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-5 py-2.5 rounded-full text-sm transition-all hover:shadow-lg group-hover:translate-x-1"
                >
                  Explore MBBS Abroad <FiArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionTitle>
            Why Students & Parents{" "}
            <span className="text-blue-700">Choose Us?</span>
          </SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 max-w-4xl mx-auto">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-100 rounded-xl p-4 sm:p-5 text-center hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto bg-blue-50 rounded-xl flex items-center justify-center mb-3">
                  <item.icon className="text-blue-700" size={22} />
                </div>
                <h3 className="font-bold text-slate-800 text-xs sm:text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TOP DESTINATIONS ═══ */}
      <section className="py-10 sm:py-14 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionTitle>
            Top MBBS <span className="text-blue-700">Destinations</span>
          </SectionTitle>
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-5xl mx-auto mb-7">
            {topCountries.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={c.link}
                  className="group block bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-2.5 sm:p-3">
                    <h3 className="font-bold text-slate-800 text-xs sm:text-sm">
                      {c.name}
                    </h3>
                    <p className="text-slate-400 text-[10px] sm:text-[11px] mt-0.5 leading-snug">
                      {c.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/mbbs/abroad"
              className="inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white font-bold px-5 py-2.5 rounded-full text-xs sm:text-sm transition-all hover:shadow-lg"
            >
              View All Countries <FiArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ COST COMPARISON ═══ */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionTitle>
            MBBS <span className="text-blue-700">Cost Comparison</span>
          </SectionTitle>
          <div className="max-w-3xl mx-auto">
            {/* Desktop table */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200 text-left">
                    <th className="py-3 px-4 font-bold text-slate-600 text-xs uppercase tracking-wider">
                      Options
                    </th>
                    <th className="py-3 px-4 font-bold text-slate-600 text-xs uppercase tracking-wider">
                      Total Fees
                    </th>
                    <th className="py-3 px-4 font-bold text-slate-600 text-xs uppercase tracking-wider">
                      Admission Chance
                    </th>
                    <th className="py-3 px-4 font-bold text-slate-600 text-xs uppercase tracking-wider">
                      Highlights
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {costComparison.map((r, i) => (
                    <tr
                      key={i}
                      className={`border-b border-slate-100 ${r.highlighted ? "bg-green-50/60" : ""}`}
                    >
                      <td
                        className={`py-3.5 px-4 font-semibold text-sm ${r.highlighted ? "text-green-700" : "text-slate-700"}`}
                      >
                        {r.option}
                      </td>
                      <td
                        className={`py-3.5 px-4 font-bold text-sm ${r.highlighted ? "text-green-700" : "text-blue-700"}`}
                      >
                        {r.fees}
                      </td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`flex items-center gap-1.5 font-semibold text-sm ${r.chanceColor}`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full ${r.highlighted ? "bg-green-500" : r.chanceColor.includes("red") ? "bg-red-500" : "bg-amber-500"}`}
                          />
                          {r.chance}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-500 text-sm">
                        {r.highlights}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile cards */}
            <div className="sm:hidden space-y-3">
              {costComparison.map((r, i) => (
                <div
                  key={i}
                  className={`rounded-xl border p-4 ${r.highlighted ? "bg-green-50 border-green-200" : "bg-white border-slate-200"}`}
                >
                  <h4
                    className={`font-bold text-sm mb-2 ${r.highlighted ? "text-green-700" : "text-slate-800"}`}
                  >
                    {r.option}
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-slate-400">Fees:</span>{" "}
                      <span
                        className={`font-bold ${r.highlighted ? "text-green-700" : "text-blue-700"}`}
                      >
                        {r.fees}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400">Chance:</span>{" "}
                      <span className={`font-semibold ${r.chanceColor}`}>
                        {r.chance}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-500 text-[11px] mt-1.5">
                    {r.highlights}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STUDENT LIFE ═══ */}
      <section className="py-10 sm:py-14 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionTitle>
            Life of <span className="text-blue-700">MBBS Students Abroad</span>
          </SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {studentLife.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-2.5 text-center">
                  <p className="text-slate-700 font-semibold text-[11px] sm:text-xs leading-tight">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-[80px]" />

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 px-4 relative z-10">
          <span className="inline-block bg-blue-500/10 text-blue-400 text-[10px] sm:text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 border border-blue-500/20">
            Real Stories
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-white leading-tight">
            Voices of{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Success
            </span>
          </h2>
        </div>

        {/* Infinite Marquee */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

          <div
            className="flex gap-4 sm:gap-6 hover:[animation-play-state:paused] group"
            style={{
              animation: "marquee-scroll 25s linear infinite",
              width: "max-content",
            }}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[...mbbsTestimonials, ...mbbsTestimonials].map((t, i) => (
              <div
                key={i}
                className="w-[300px] sm:w-[340px] shrink-0 relative bg-white/[0.06] backdrop-blur-lg rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-blue-500/30 transition-all"
              >
                {/* Quote mark */}
                <div className="absolute top-3 right-4 text-blue-500/10 text-6xl font-serif leading-none select-none">
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <FiStar
                      key={j}
                      className="text-amber-400 fill-amber-400"
                      size={13}
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-white/80 text-sm leading-relaxed mb-5 min-h-[72px] italic">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-blue-500/40 ring-offset-2 ring-offset-slate-900"
                  />
                  <div>
                    <h4 className="font-bold text-white text-sm">{t.name}</h4>
                    <span className="text-blue-400 text-[11px] font-medium">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inline keyframes */}
        <style>{`
          @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* ═══ WHY CAPTON ═══ */}
      <section className="py-10 sm:py-14 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionTitle>
            Why <span className="text-blue-700">Capton Visa Point?</span>
          </SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {trustBadges.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-xl p-3 sm:p-4 text-center border border-slate-100 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-2">
                  <b.icon className="text-blue-700" size={20} />
                </div>
                <div className="font-extrabold text-slate-800 text-sm sm:text-base leading-tight">
                  {b.value}
                </div>
                <p className="text-slate-400 text-[10px] sm:text-[11px] mt-0.5 leading-tight">
                  {b.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionTitle>
            Frequently Asked <span className="text-blue-700">Questions</span>
          </SectionTitle>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-2.5">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-xl border overflow-hidden transition-all ${openFaq === i ? "border-blue-200 shadow" : "border-slate-200"}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-2 p-3.5 text-left bg-white hover:bg-slate-50/80 transition-colors"
                >
                  <span className="font-semibold text-slate-700 text-xs sm:text-sm">
                    {faq.question}
                  </span>
                  <FiChevronRight
                    className={`text-blue-600 shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-90" : ""}`}
                    size={14}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-3.5 pb-3.5 text-slate-500 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3 bg-blue-50/30">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="bg-gradient-to-r from-green-700 via-green-600 to-green-700 py-4 sm:py-5">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold text-base sm:text-lg">
              Don't Delay, Secure Your MBBS Seat Now!
            </h3>
            <p className="text-green-100 text-xs sm:text-sm">
              Limited Seats | 2026 Admissions Open
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <Link
              to="/contact"
              className="bg-white text-green-700 font-bold px-4 py-2 rounded-lg text-xs sm:text-sm hover:bg-green-50 transition-colors whitespace-nowrap"
            >
              Book Free Counseling
            </Link>
            <a
              href="https://wa.me/919914773125"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-800 hover:bg-green-900 text-white font-bold px-4 py-2 rounded-lg text-xs sm:text-sm transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <svg
                viewBox="0 0 448 512"
                fill="currentColor"
                className="w-3.5 h-3.5"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z" />
              </svg>
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mbbs;
