import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGlobe,
  FiCheckCircle,
  FiAward,
  FiUsers,
  FiMapPin,
  FiArrowRight,
  FiChevronDown,
  FiBell,
  FiPhone,
  FiStar,
} from "react-icons/fi";
import InquiryForm from "../components/forms/InquiryForm";
import SEO from "../components/SEO";
import {
  announcements,
  topCountries,
  processSteps,
  whyUs,
  faqs,
} from "../data/mbbsData";

const Mbbs = () => {
  const [activeAnnouncement, setActiveAnnouncement] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <SEO
        title="MBBS Abroad & India"
        description="Study MBBS abroad or in India with Capton Visa Point. WHO-approved universities, low tuition fees, 98% success rate. Complete MBBS admission guidance for 2026-2027 — NEET counseling, university shortlisting, documentation, and visa filing for Russia, Georgia, Uzbekistan, Kazakhstan, Germany, Italy, and top Indian medical colleges."
        keywords="MBBS in India, MBBS course in India, MBBS degree in India, study MBBS in India, MBBS medical course, MBBS abroad, study MBBS abroad, MBBS abroad admission, MBBS abroad consultants, cheapest MBBS abroad, low cost MBBS abroad, MBBS abroad eligibility, MBBS abroad fees, MBBS abroad universities, MBBS admission, MBBS admission process, MBBS admission 2026, MBBS admission 2027, top MBBS colleges in India, best MBBS colleges in India, government MBBS colleges in India, private MBBS colleges in India, MBBS consultants in India, best MBBS consultants, medical admission consultants, NEET exam, NEET UG exam, NEET cutoff for MBBS, NEET counseling process, NEET qualifying marks, WHO approved medical universities, NMC approved medical colleges, career after MBBS, PG after MBBS, MD after MBBS, MS after MBBS, scope of MBBS in India, scope of MBBS abroad, FMGE exam after MBBS abroad, NEXT exam for MBBS students, best country for MBBS for Indian students, MBBS abroad vs India, MBBS admission help India, medical education consultants India, MBBS career guidance, study medicine abroad for Indians"
      />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
        {/* Glowing orbs */}
        <div className="absolute top-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left: Text Content — 3 cols */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="bg-amber-500 text-blue-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                  Medical Education
                </span>
                <span className="text-amber-400 text-xs font-semibold">
                  Admissions Open 2025–26
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-5">
                Study MBBS
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
                  Abroad or India
                </span>
                <br />
                <span className="text-blue-200 text-2xl sm:text-3xl md:text-4xl">
                  Start Your Medical Journey
                </span>
              </h1>

              <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                Choose from{" "}
                <strong className="text-white">70+ NMC-approved</strong> medical
                universities across 10+ countries. Affordable fees, English
                medium, and expert guidance from application to graduation.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <Link
                  to="/eligibility-check"
                  className="bg-amber-500 hover:bg-amber-600 text-blue-900 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-amber-500/30 flex items-center gap-2"
                >
                  Check Eligibility Free <FiArrowRight />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-white/20 transition-all flex items-center gap-2"
                >
                  Talk to Counsellor <FiPhone />
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "NMC Approved",
                  "WHO Recognized",
                  "No Donation",
                  "FMGE Support",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="flex items-center gap-1.5 bg-white/10 text-blue-100 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10"
                  >
                    <FiCheckCircle className="text-amber-400" size={12} />
                    {badge}
                  </span>
                ))}
              </div>

              {/* Compact Stats Row */}
              <div className="grid grid-cols-4 gap-3">
                {[
                  {
                    number: "70+",
                    label: "Universities",
                    accent: "text-amber-400",
                  },
                  {
                    number: "4000+",
                    label: "Students",
                    accent: "text-blue-300",
                  },
                  {
                    number: "10+",
                    label: "Countries",
                    accent: "text-amber-400",
                  },
                  { number: "98%", label: "Success", accent: "text-blue-300" },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="text-center bg-white/5 border border-white/10 rounded-xl py-3 px-2"
                  >
                    <div
                      className={`text-xl sm:text-2xl font-extrabold ${stat.accent}`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-blue-300 text-[10px] sm:text-xs font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Inquiry Form — 2 cols */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-1">
                <div className="bg-white rounded-[20px] p-5 sm:p-6 shadow-2xl">
                  <InquiryForm
                    title="Get Free Counselling"
                    subtitle="Our expert will call you within 24 hours"
                  />
                  {/* Quick contact below form */}
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center shrink-0">
                        <FiPhone className="text-blue-900 text-sm" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-[10px] font-semibold uppercase">
                          Helpline
                        </p>
                        <a
                          href="tel:+919914773125"
                          className="text-slate-800 font-bold text-sm hover:text-blue-600 transition-colors"
                        >
                          +91 99147 73125
                        </a>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/919914773125"
                      className="shrink-0 bg-green-500 hover:bg-green-600 text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Choose Your Path */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wide">
              Your Options
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Choose Your Path
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Both paths lead to a successful medical career — choose based on
              your budget, NEET score, and preference
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* MBBS Abroad */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all"
            >
              <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 p-6 sm:p-8 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-4">
                    <FiGlobe className="text-white text-3xl" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    MBBS Abroad
                  </h3>
                  <p className="text-blue-200 text-sm">
                    Study in globally recognized universities
                  </p>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    <span className="bg-amber-500 text-blue-900 text-xs font-bold px-3 py-1 rounded-full">
                      From $2,800/yr
                    </span>
                    <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      NEET Cutoff: 130
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="space-y-3.5 mb-7">
                  {[
                    {
                      title: "Affordable Tuition Fees",
                      sub: "$2,800 – $5,000 per year",
                    },
                    {
                      title: "NMC Approved Universities",
                      sub: "FMGE/NEXT eligible programs",
                    },
                    {
                      title: "No Donation Required",
                      sub: "Low NEET cutoff: 130 marks",
                    },
                    {
                      title: "English Medium Programs",
                      sub: "No language barrier",
                    },
                    {
                      title: "10+ Countries Available",
                      sub: "Russia, Georgia, Uzbekistan & more",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <FiCheckCircle className="text-blue-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-500">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/mbbs/abroad"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3.5 rounded-xl font-bold text-center flex items-center justify-center gap-2 transition-all group-hover:shadow-lg"
                >
                  Explore MBBS Abroad <FiArrowRight />
                </Link>
              </div>
            </motion.div>

            {/* MBBS India */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-100 hover:border-amber-200 hover:shadow-2xl transition-all"
            >
              <div className="bg-gradient-to-br from-amber-600 via-amber-500 to-amber-400 p-6 sm:p-8 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-4">
                    <FiMapPin className="text-white text-3xl" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    MBBS India
                  </h3>
                  <p className="text-amber-100 text-sm">
                    Study in premier Indian medical colleges
                  </p>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    <span className="bg-blue-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                      ₹10K–25L/yr
                    </span>
                    <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      1,17,825 Seats
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="space-y-3.5 mb-7">
                  {[
                    {
                      title: "1,17,825 MBBS Seats",
                      sub: "Govt: 59,860 | Private: 57,965",
                    },
                    {
                      title: "NEET 2025 Based",
                      sub: "Transparent merit-based admission",
                    },
                    {
                      title: "Govt Colleges — Lowest Fees",
                      sub: "₹10,000 – 1 Lakh per year",
                    },
                    {
                      title: "Study in Home Country",
                      sub: "No cultural adjustment needed",
                    },
                    {
                      title: "Deemed & Private Options",
                      sub: "AIQ + State counselling rounds",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <FiCheckCircle className="text-amber-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-500">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/mbbs/india"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3.5 rounded-xl font-bold text-center flex items-center justify-center gap-2 transition-all group-hover:shadow-lg"
                >
                  Explore MBBS India <FiArrowRight />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Countries for MBBS Abroad */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wide">
              Top Destinations
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              MBBS Abroad — Top Countries
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              All our partner universities are NMC-approved and FMGE/NEXT
              eligible
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
            {topCountries.map((country, idx) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
              >
                <Link
                  to={country.link}
                  className="group block bg-slate-50 hover:bg-blue-900 border border-slate-200 hover:border-blue-700 rounded-2xl p-4 sm:p-5 text-center transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <h3 className="font-bold text-slate-800 group-hover:text-white text-sm sm:text-base mb-1 transition-colors">
                    {country.name}
                  </h3>
                  <p className="text-blue-600 group-hover:text-amber-400 font-bold text-sm transition-colors">
                    {country.fees}
                  </p>
                  <span className="inline-block mt-2 bg-blue-100 group-hover:bg-white/20 text-blue-700 group-hover:text-blue-200 text-xs px-2 py-0.5 rounded-full transition-colors">
                    {country.rank}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/mbbs/abroad"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:shadow-xl"
            >
              View All Countries & Universities <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wide border border-amber-500/30">
              Step by Step
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              How We Help You Get Admitted
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              From your NEET score to your first day at university — we handle
              everything
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 hover:bg-white/15 transition-all group"
              >
                {/* Step number */}
                <div className="text-5xl font-black text-white/10 absolute top-3 right-4 leading-none">
                  {step.num}
                </div>
                {/* Icon */}
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-blue-900 text-xl mb-4">
                  <step.icon />
                </div>
                <h3 className="text-white font-bold text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  {step.desc}
                </p>

                {/* Connector arrow (hidden on last) */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-amber-500 rounded-full items-center justify-center">
                    <FiArrowRight className="text-blue-900 text-xs" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wide">
              Why Capton
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Why Choose Capton Visa Point?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Trusted by 4000+ students for transparent, expert MBBS admission
              guidance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {whyUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all group flex gap-4 items-start"
              >
                <div
                  className={`${item.bg} text-white w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                >
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonial strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-10 bg-blue-900 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5"
          >
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {["S", "R", "A", "P"].map((l, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-blue-900 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-sm"
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="text-amber-400 fill-amber-400"
                      size={14}
                    />
                  ))}
                </div>
                <p className="text-blue-100 text-sm font-semibold">
                  Rated 4.9/5 by 1000+ students
                </p>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-white font-bold text-lg sm:text-xl mb-1">
                Join 4,000+ Success Stories
              </p>
              <p className="text-blue-300 text-sm">
                From NEET qualification to MBBS graduation
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 bg-amber-500 hover:bg-amber-600 text-blue-900 font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Start Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-12"
            >
              <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wide">
                FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Common Questions
              </h2>
              <p className="text-slate-600">
                Everything you need to know about MBBS admissions
              </p>
            </motion.div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className={`rounded-2xl border overflow-hidden transition-all ${
                    openFaq === idx
                      ? "border-blue-200 shadow-md"
                      : "border-slate-200 hover:border-blue-100"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between gap-3 p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-slate-800 text-sm sm:text-base">
                      {faq.question}
                    </span>
                    <FiChevronDown
                      className={`text-blue-600 shrink-0 transition-transform duration-300 ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 bg-blue-50/50">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute top-10 right-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-wide border border-amber-500/30">
                Start Today
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                Ready to Begin Your
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
                  Medical Career?
                </span>
              </h2>
              <p className="text-blue-200 text-base sm:text-lg mb-8 max-w-xl mx-auto">
                Join 4,000+ students who chose Capton Visa Point for their MBBS
                admission. Free NEET evaluation, university shortlisting, and
                complete visa support.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                <a
                  href="tel:+919914773125"
                  className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-blue-900 font-bold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-amber-500/30"
                >
                  <FiPhone /> Call Now — Free
                </a>
                <a
                  href="https://wa.me/919914773125"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all"
                >
                  WhatsApp Us
                </a>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all"
                >
                  Book Counselling <FiArrowRight />
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                {[
                  "Free NEET Evaluation",
                  "No Hidden Charges",
                  "7 Days Support",
                ].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-1.5 text-blue-200 text-sm"
                  >
                    <FiCheckCircle className="text-amber-400" size={14} />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mbbs;
