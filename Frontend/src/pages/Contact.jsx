import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiMessageCircle,
  FiArrowRight,
  FiCheckCircle,
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiYoutube,
  FiNavigation,
} from "react-icons/fi";
import InquiryForm from "../components/forms/InquiryForm";
import SEO from "../components/SEO";

const quickActions = [
  {
    Icon: FiPhone,
    label: "Call Us",
    value: "+91 99147 73125",
    sub: "Mon–Sat, 9am – 7pm IST",
    href: "tel:+919914773125",
    accent: "from-blue-600 to-blue-800",
  },
  {
    Icon: FiMessageCircle,
    label: "WhatsApp",
    value: "Chat Instantly",
    sub: "Fastest response time",
    href: "https://wa.me/919914773125",
    accent: "from-emerald-500 to-emerald-700",
  },
  {
    Icon: FiMail,
    label: "Email Us",
    value: "info@captonvisapoint.com",
    sub: "Replies within 24 hours",
    href: "mailto:info@captonvisapoint.com",
    accent: "from-amber-500 to-amber-600",
  },
];

// figures kept in step with the About page's stats bar
const heroStats = [
  { value: "10,000+", label: "Students guided" },
  { value: "25+", label: "Countries covered" },
  { value: "500+", label: "University partners" },
  { value: "15+", label: "Years of experience" },
];

const offices = [
  {
    country: "India — Head Office",
    flag: "🇮🇳",
    address: "B-15, Ram Dutt Enclave, Uttam Nagar, New Delhi - 110059",
    phone: "+91 99147 73125",
    tel: "+919914773125",
  },
  {
    country: "Canada — Branch Office",
    flag: "🇨🇦",
    address: "Calgary, Alberta, Canada",
    phone: "+1 (825) 883-6784",
    tel: "+18258836784",
  },
];

const assurances = [
  "100% free first counselling session",
  "Honest advice — no false promises",
  "Guidance backed by 15+ years of experience",
  "Support until you land and settle abroad",
];

const socials = [
  {
    Icon: FiInstagram,
    href: "https://www.instagram.com/captonvisapoint?igsh=MXUyeW11eWRzZDVpdg==",
    label: "Instagram",
    hover: "hover:bg-pink-600",
  },
  { Icon: FiFacebook, href: "#", label: "Facebook", hover: "hover:bg-blue-700" },
  { Icon: FiLinkedin, href: "#", label: "LinkedIn", hover: "hover:bg-blue-800" },
  { Icon: FiYoutube, href: "#", label: "YouTube", hover: "hover:bg-red-600" },
];

const faqs = [
  {
    q: "Is the first consultation really free?",
    a: "Yes. Your first counselling session is completely free with no obligation — we assess your profile and lay out your realistic options.",
  },
  {
    q: "How soon will someone contact me?",
    a: "Our counsellors typically respond within a few working hours, and always within 24 hours of your enquiry.",
  },
  {
    q: "Can I visit your office directly?",
    a: "Absolutely. Walk in Monday to Saturday, 9am – 7pm IST at our New Delhi head office, or book a slot in advance to skip the wait.",
  },
  {
    q: "Do you help students outside Delhi?",
    a: "Yes — we counsel students from across India and abroad over phone, WhatsApp and video calls.",
  },
];

const Contact = () => {
  return (
    <div className="bg-white">
      <SEO
        title="Contact Us"
        description="Contact Capton Visa Point for free counselling on MBBS abroad, MBBS in India, study abroad, Ausbildung, and immigration. Book a free consultation — MBBS admission help, NEET counseling, visa guidance, and career planning."
        keywords="contact Capton Visa Point, free consultation, study abroad counselling, immigration consultants, MBBS admission help, MBBS admission enquiry, MBBS admission helpline, MBBS guidance center, MBBS abroad counseling experts, MBBS abroad admission India helpline, MBBS consultants near me, best medical education consultants, MBBS career guidance, medical admission experts, apply MBBS online, MBBS admission enquiry India"
      />

      {/* ================= HERO ================= */}
      <section
        className="relative flex items-center text-white overflow-hidden"
        style={{
          background:
            "linear-gradient(150deg,#16295A 0%,#0F2148 45%,#0A1628 100%)",
        }}
      >
        {/* dot grid — the same motif the Study Abroad hero uses */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* soft glow orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/[0.12] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/[0.16] rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        </div>

        {/* thin amber rule along the bottom edge */}
        <div className="absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-r from-amber-500 via-amber-400/40 to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2.5 px-4 py-2 bg-amber-500/[0.15] rounded-full text-xs sm:text-sm font-semibold mb-5 sm:mb-6 border border-amber-400/30 text-amber-300">
                <i className="w-[7px] h-[7px] rounded-full bg-amber-400 animate-pulse not-italic" />
                We reply within 24 hours
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight tracking-[-0.02em]">
                Let&apos;s Plan Your{" "}
                <span className="text-amber-400">Global Future</span>
              </h1>
              <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-xl">
                One honest conversation can change your entire career path. Talk
                to a counsellor who tells you the truth — not just what you want
                to hear.
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-7 sm:mt-9">
                <a
                  href="tel:+919914773125"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-blue-950 rounded-xl font-semibold shadow-lg shadow-amber-500/25 transition-colors"
                >
                  <FiPhone /> Call Now
                </a>
                <a
                  href="https://wa.me/919914773125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/25 text-white rounded-xl font-semibold transition-colors"
                >
                  <FiMessageCircle /> WhatsApp Us
                </a>
              </div>
            </motion.div>

            {/* at-a-glance panel — carries the visual weight the photo used to */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="hidden lg:block"
            >
              <div className="rounded-3xl border border-white/[0.12] bg-white/[0.05] p-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-300 mb-5">
                  At a glance
                </p>
                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                  {heroStats.map((s) => (
                    <div key={s.label}>
                      <p className="text-2xl font-bold text-amber-400 leading-none">
                        {s.value}
                      </p>
                      <p className="text-[13px] text-blue-200 mt-1.5 leading-snug">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-2.5 text-sm text-blue-100">
                  <FiClock className="text-amber-400 shrink-0" />
                  Mon – Sat, 9am – 7pm IST
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= QUICK ACTION CARDS ================= */}
      <section className="relative z-20 mt-10 sm:mt-14 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {quickActions.map(({ Icon, label, value, sub, href, accent }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-white rounded-2xl p-5 sm:p-6 shadow-xl shadow-slate-900/5 border border-slate-100 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accent} text-white flex items-center justify-center text-xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <Icon />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  {label}
                </p>
                <p className="font-bold text-slate-900 break-words group-hover:text-blue-700 transition-colors">
                  {value}
                </p>
                <p className="text-sm text-slate-500 mt-1">{sub}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FORM + INFO ================= */}
      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_1.05fr] gap-8 lg:gap-14 items-start">
            {/* LEFT — Navy info panel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-blue-950 rounded-3xl p-6 sm:p-9 text-white overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-56 h-56 bg-blue-500/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-amber-400/25">
                  Get In Touch
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 leading-snug">
                  Visit Us, Call Us,
                  <br />
                  <span className="text-amber-400">Or Just Say Hello</span>
                </h2>
                <p className="text-blue-200 text-sm sm:text-base leading-relaxed mb-8">
                  Our counsellors are available six days a week to answer every
                  question about admissions, fees, visas and life abroad.
                </p>

                {/* Offices */}
                <div className="space-y-4">
                  {offices.map((o) => (
                    <div
                      key={o.country}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/10 hover:border-amber-400/30 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl leading-none shrink-0">
                          {o.flag}
                        </span>
                        <div className="min-w-0">
                          <h3 className="font-semibold text-white text-sm sm:text-base">
                            {o.country}
                          </h3>
                          <p className="text-blue-200 text-sm mt-1 leading-relaxed">
                            {o.address}
                          </p>
                          <a
                            href={`tel:${o.tel}`}
                            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium mt-2 transition-colors"
                          >
                            <FiPhone className="text-xs" /> {o.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Email + hours */}
                <div className="grid sm:grid-cols-2 gap-3 mt-4">
                  <a
                    href="mailto:info@captonvisapoint.com"
                    className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-amber-400/30 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <FiMail />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-blue-300 font-semibold uppercase tracking-wide">
                        Email
                      </p>
                      <p className="text-sm text-white break-all group-hover:text-amber-300 transition-colors">
                        info@captonvisapoint.com
                      </p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0">
                      <FiClock />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-blue-300 font-semibold uppercase tracking-wide">
                        Office Hours
                      </p>
                      <p className="text-sm text-white">Mon – Sat, 9am – 7pm</p>
                    </div>
                  </div>
                </div>


                {/* Assurances */}
                <div className="mt-8 pt-7 border-t border-white/10">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-4">
                    What You Get
                  </p>
                  <ul className="space-y-2.5">
                    {assurances.map((a) => (
                      <li key={a} className="flex items-start gap-2.5">
                        <FiCheckCircle className="text-amber-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-blue-100">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Socials */}
                <div className="mt-8 pt-7 border-t border-white/10">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-4">
                    Follow Our Journey
                  </p>
                  <div className="flex gap-3">
                    {socials.map(({ Icon, href, label, hover }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className={`w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white ${hover} hover:border-transparent hover:scale-110 transition-all`}
                      >
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-24"
            >
              <InquiryForm
                title="Send us a Message"
                subtitle="Fill the form below and a counsellor will get back to you shortly"
                formLabel="Contact Page"
              />

              <div className="mt-5 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500 text-center">
                <FiCheckCircle className="text-emerald-500 shrink-0" />
                Trusted by 10,000+ students across 25+ countries
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-slate-50 to-blue-50/60 border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-8 sm:mb-12"
          >
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Find Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Drop By Our{" "}
              <span className="text-blue-700">New Delhi Office</span>
            </h2>
            <p className="text-slate-600">
              Walk in for a free face-to-face counselling session — no
              appointment required.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-white bg-white"
          >
            <div className="h-60 sm:h-80 lg:h-[26rem]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.41697869707!2d77.04799969929806!3d28.619143260748913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05848d401105%3A0x800ea34b008c1c8d!2sCAPTON%20VISA%20POINT!5e0!3m2!1sen!2sin!4v1771365478964!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Capton Visa Point Location"
              ></iframe>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:p-6 bg-white border-t border-slate-100">
              <div className="flex items-start gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <FiMapPin />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-slate-900">
                    Capton Visa Point — Head Office
                  </p>
                  <p className="text-sm text-slate-600">
                    B-15, Ram Dutt Enclave, Uttam Nagar, New Delhi - 110059
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=CAPTON+VISA+POINT+Uttam+Nagar+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-800 hover:bg-blue-900 text-white rounded-xl font-semibold text-sm shrink-0 transition-colors"
              >
                <FiNavigation /> Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-8 sm:mb-12"
          >
            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Before You Reach Out
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
              Quick <span className="text-blue-700">Answers</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {faqs.map((f, i) => (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-slate-50 hover:bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-semibold text-slate-900 mb-2 flex items-start gap-2">
                  <span className="text-amber-500 shrink-0">Q.</span>
                  {f.q}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed pl-6">
                  {f.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA STRIP ================= */}
      <section className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                Still Unsure Where To Begin?
              </h2>
              <p className="text-blue-200">
                Check your eligibility in 2 minutes — completely free.
              </p>
            </div>
            <Link
              to="/eligibility-check"
              className="inline-flex items-center gap-2 px-7 py-4 bg-amber-500 hover:bg-amber-600 text-blue-950 rounded-xl font-bold shadow-lg shadow-amber-500/25 transition-colors shrink-0"
            >
              Check Eligibility <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
