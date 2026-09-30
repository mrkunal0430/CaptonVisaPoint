import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight, FiCheck, FiMail, FiMapPin } from "react-icons/fi";
import SEO from "../components/SEO";
import InquiryForm from "../components/forms/InquiryForm";
import { services, values, partnerBenefits, partnerTypes } from "../data/aboutData";
import { photoCredits } from "../data/countryExplorerData";

/* ── page content ── */

const stats = [
  { number: "10,000+", label: "Students guided" },
  { number: "25+", label: "Countries covered" },
  { number: "500+", label: "University partners" },
  { number: "15+", label: "Years in practice" },
];

const journey = [
  { title: "Profile counselling", text: "We look at marks, budget, goals and eligibility before suggesting a single country." },
  { title: "Honest shortlisting", text: "A short list of universities or programmes that fit you, with real costs and timelines." },
  { title: "Applications & admission", text: "SOPs, documents and applications handled by one team, tracked until the offer letter." },
  { title: "Language & test prep", text: "In-house IELTS, PTE and German (A1–C1) training so you are ready before you fly." },
  { title: "Visa filing", text: "Financial documents, APS, interviews and filing done by our dedicated visa desk." },
  { title: "Departure & arrival", text: "Pre-departure orientation and support after you land, until you are settled in." },
];

const destinations = [
  { code: "de", country: "Germany", city: "Berlin" },
  { code: "gb", country: "United Kingdom", city: "London" },
  { code: "ca", country: "Canada", city: "Ottawa" },
  { code: "au", country: "Australia", city: "Canberra" },
  { code: "us", country: "United States", city: "Washington DC" },
  { code: "ru", country: "Russia", city: "Moscow" },
  { code: "nz", country: "New Zealand", city: "Wellington" },
  { code: "it", country: "Italy", city: "Rome" },
  { code: "pl", country: "Poland", city: "Warsaw" },
  { code: "sg", country: "Singapore", city: "Singapore" },
];

const mbbsCountries = ["Russia", "Georgia", "Uzbekistan", "Kazakhstan", "and 8 more"];

const reasons = [
  "In-house German (A1–C1) and IELTS coaching — nothing is outsourced",
  "APS certification guidance for Germany-bound students",
  "NMC-approved university network for MBBS admissions",
  "A dedicated visa filing team with a strong approval record",
  "Pre-departure orientation and post-arrival support",
  "A written fee structure with no hidden charges",
  "Counselling built around your budget and eligibility",
  "Direct employer connections for healthcare roles in UAE and Germany",
];

/* ── pieces ── */

const Wrap = ({ className = "", children }) => (
  <div className={`max-w-[1180px] mx-auto px-4 sm:px-6 ${className}`}>{children}</div>
);

const Kicker = ({ children, dark = false }) => (
  <p
    className={`flex items-center gap-3 text-sm font-semibold mb-4 ${
      dark ? "text-amber-400" : "text-amber-600"
    }`}
  >
    <span className="w-8 h-[2px] rounded-full bg-current" />
    {children}
  </p>
);

const Heading = ({ children, dark = false, className = "" }) => (
  <h2
    className={`font-display font-medium text-[clamp(30px,4.2vw,50px)] leading-[1.08] tracking-[-0.02em] ${
      dark ? "text-white" : "text-slate-900"
    } ${className}`}
  >
    {children}
  </h2>
);

/* The one signature element: a visa-style stamp that lands on the hero photo. */
const Stamp = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
    <defs>
      <path id="stamp-ring" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
    </defs>
    <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="3" />
    <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="100" cy="100" r="52" fill="none" stroke="currentColor" strokeWidth="1.2" />
    <text
      fill="currentColor"
      style={{ font: "600 15.5px Inter, sans-serif", letterSpacing: "0.22em" }}
    >
      <textPath href="#stamp-ring" startOffset="0">
        CAPTON VISA POINT ✦ TRUSTED ADVICE ✦
      </textPath>
    </text>
    <text
      x="100"
      y="96"
      textAnchor="middle"
      fill="currentColor"
      style={{ font: "500 13px Inter, sans-serif", letterSpacing: "0.18em" }}
    >
      SINCE
    </text>
    <text
      x="100"
      y="124"
      textAnchor="middle"
      fill="currentColor"
      style={{ font: "600 32px Fraunces, Georgia, serif" }}
    >
      2009
    </text>
  </svg>
);

const About = () => {
  const reduce = useReducedMotion();
  const rise = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <div className="bg-white text-slate-800">
      <SEO
        title="About Us — Capton Visa Point"
        description="Learn about Capton Visa Point — India's trusted education and immigration consultancy helping students achieve global careers through MBBS abroad, study abroad, Ausbildung, and healthcare recruitment with ethical, transparent guidance."
        keywords="about Capton Visa Point, education consultancy India, MBBS abroad consultancy, study abroad India, Ausbildung consultancy, overseas education guidance, trusted visa consultancy, student abroad advisor India"
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-blue-950 text-white">
        <div
          className="absolute -top-40 -right-32 w-[640px] h-[640px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,.16), transparent 62%)" }}
        />
        <div
          className="absolute -bottom-56 -left-40 w-[560px] h-[560px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,.18), transparent 64%)" }}
        />

        <Wrap className="relative pt-14 sm:pt-20 lg:pt-24 pb-10 sm:pb-14">
          <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-12 lg:gap-16 items-center">
            <div>
              <motion.div {...rise(0)}>
                <Kicker dark>About Capton Visa Point</Kicker>
              </motion.div>
              <motion.h1
                {...rise(0.08)}
                className="font-display font-normal text-[clamp(38px,6vw,72px)] leading-[1.02] tracking-[-0.025em] mb-6"
              >
                Honest advice for the biggest decision your family will make.
              </motion.h1>
              <motion.p
                {...rise(0.16)}
                className="text-[17px] sm:text-lg leading-[1.7] text-blue-100/80 max-w-[54ch] mb-9"
              >
                For over fifteen years we have helped Indian students move from
                a college seat to a career abroad — MBBS, study abroad,
                Ausbildung and healthcare jobs — by telling families the full
                picture before they spend a rupee.
              </motion.p>
              <motion.div {...rise(0.24)} className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 hover:bg-amber-400 text-blue-950 font-semibold px-7 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                >
                  Book a free counselling session
                  <FiArrowRight />
                </Link>
                <Link
                  to="/eligibility-check"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 hover:border-white/60 hover:bg-white/5 text-white font-semibold px-7 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Check your eligibility
                </Link>
              </motion.div>
            </div>

            {/* Photo + stamp */}
            <motion.div {...rise(0.12)} className="relative max-w-md w-full mx-auto lg:mx-0 lg:justify-self-end">
              <div className="relative rounded-[28px] overflow-hidden ring-1 ring-white/15 shadow-[0_40px_90px_rgba(2,6,23,.55)]">
                <img
                  src="/Home_Hero/2.webp"
                  alt="Students preparing for their education abroad with Capton Visa Point"
                  className="w-full h-72 sm:h-96 lg:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/10 to-transparent" />
                <div className="absolute left-5 right-5 bottom-5 flex items-center gap-3">
                  <img
                    src="/RichaMam.jpeg"
                    alt="Richa Pal, Founder and Director"
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-400"
                  />
                  <div>
                    <p className="font-semibold leading-tight">Richa Pal</p>
                    <p className="text-sm text-blue-100/80">Founder & Director</p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={reduce ? false : { opacity: 0, scale: 1.6, rotate: -30 }}
                animate={{ opacity: 1, scale: 1, rotate: -12 }}
                transition={{ delay: 0.75, duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute -top-8 -left-6 sm:-top-10 sm:-left-12 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-blue-950/70 backdrop-blur-sm"
              >
                <Stamp className="w-full h-full text-amber-400" />
              </motion.div>
            </motion.div>
          </div>

          {/* Stats ledger */}
          <motion.dl
            {...rise(0.32)}
            className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 border-t border-white/15"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col-reverse justify-end pt-6 pb-2 sm:pt-8 ${i % 2 === 1 ? "pl-5 sm:pl-8 border-l border-white/15" : ""} ${
                  i > 0 ? "lg:pl-8 lg:border-l lg:border-white/15" : ""
                } ${i >= 2 ? "mt-4 lg:mt-0" : ""}`}
              >
                <dt className="text-sm text-blue-100/70">{s.label}</dt>
                <dd className="font-display text-[clamp(34px,4.4vw,52px)] leading-none text-white mt-2">
                  {s.number}
                </dd>
              </div>
            ))}
          </motion.dl>
        </Wrap>
      </section>

      {/* ── Our story ── */}
      <section className="py-20 sm:py-28">
        <Wrap className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <Kicker>Our story</Kicker>
            <Heading>We started because families were getting the wrong advice.</Heading>
          </div>

          <div className="lg:col-span-7 space-y-6 text-[17px] leading-[1.8] text-slate-600 max-w-[62ch]">
            <p className="text-xl sm:text-[22px] leading-[1.6] text-slate-800">
              Capton Visa Point was founded on a single belief: every student
              deserves guidance they can trust. We had watched families make
              expensive, irreversible choices based on sales pitches, and we
              set out to do it differently.
            </p>
            <p>
              Over fifteen years we have grown from a small counselling desk
              into a multi-service education consultancy placing students in
              universities across 25+ countries. Our core has not changed —
              student success comes before sales targets.
            </p>
            <p>
              Today our counsellors, language trainers, visa specialists and
              documentation experts work as one team, so every family gets the
              complete, honest picture: from the first shortlist to the first
              week abroad.
            </p>

            <blockquote className="my-10 border-l-[3px] border-amber-500 pl-6 sm:pl-8">
              <p className="font-display italic text-[clamp(22px,2.6vw,30px)] leading-[1.35] text-blue-900">
                If a course isn't right for your child, we will say so — even
                when it means you don't sign with us.
              </p>
              <footer className="mt-4 text-sm text-slate-500 not-italic">
                The first rule every Capton counsellor learns
              </footer>
            </blockquote>

            <p className="flex items-start gap-3 text-base text-slate-600">
              <FiMapPin className="text-amber-600 shrink-0 mt-1.5" />
              Headquartered in India, serving students across the country with
              a network that reaches 25+ countries.
            </p>
          </div>
        </Wrap>
      </section>

      {/* ── Mission & vision ── */}
      <section className="bg-slate-50 border-y border-slate-200/70">
        <Wrap className="grid md:grid-cols-2">
          <div className="py-14 sm:py-20 md:pr-12 lg:pr-16">
            <p className="text-sm font-semibold text-blue-700 mb-5">Our mission</p>
            <p className="font-display text-[clamp(22px,2.4vw,29px)] leading-[1.4] text-slate-900">
              To give ethical, student-first guidance that lets every family
              decide with complete transparency — protecting both the
              student's future and the family's investment.
            </p>
          </div>
          <div className="py-14 sm:py-20 md:pl-12 lg:pl-16 border-t md:border-t-0 md:border-l border-slate-200">
            <p className="text-sm font-semibold text-blue-700 mb-5">Our vision</p>
            <p className="font-display text-[clamp(22px,2.4vw,29px)] leading-[1.4] text-slate-900">
              To be South Asia's most trusted name in overseas education and
              career placement — where every family feels heard, respected
              and guided toward its best possible future.
            </p>
          </div>
        </Wrap>
      </section>

      {/* ── What we do ── */}
      <section className="py-20 sm:py-28">
        <Wrap>
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-16 mb-12 sm:mb-16">
            <div className="lg:col-span-6">
              <Kicker>What we do</Kicker>
              <Heading>Six specialist teams, one point of contact.</Heading>
            </div>
            <p className="lg:col-span-6 lg:self-end text-[17px] leading-[1.75] text-slate-600 max-w-[52ch]">
              From an MBBS seat to a nursing job in Germany, each service is run
              by people who do only that — and your counsellor coordinates all
              of them for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 md:gap-x-12 lg:gap-x-16 border-t border-slate-200">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.to}
                className="group flex gap-5 py-7 sm:py-8 border-b border-slate-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 rounded-sm"
              >
                <span className="w-12 h-12 shrink-0 rounded-2xl bg-blue-900 text-amber-400 flex items-center justify-center transition-colors group-hover:bg-amber-500 group-hover:text-blue-950">
                  <s.icon size={21} />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="flex items-center justify-between gap-4">
                    <span className="font-display text-[23px] leading-tight text-slate-900 group-hover:text-blue-800 transition-colors">
                      {s.title}
                    </span>
                    <FiArrowUpRight className="shrink-0 text-xl text-slate-400 transition-all group-hover:text-amber-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                  <span className="block mt-2 text-[15.5px] leading-[1.7] text-slate-600">
                    {s.description}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Wrap>
      </section>

      {/* ── How we work (a real sequence, so it's numbered) ── */}
      <section className="pb-20 sm:pb-28">
        <Wrap>
          <div className="rounded-[32px] bg-blue-50/70 border border-blue-100 px-5 py-12 sm:px-10 sm:py-16 lg:px-14">
            <Kicker>How we work</Kicker>
            <Heading className="max-w-[20ch] mb-12 sm:mb-14">
              One path, from first call to first week abroad.
            </Heading>

            <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 lg:gap-y-14">
              {journey.map((step, i) => (
                <li key={step.title} className="relative pl-16">
                  <span className="absolute left-0 top-0 w-11 h-11 rounded-full bg-white border border-blue-200 text-blue-900 font-display text-lg flex items-center justify-center">
                    {i + 1}
                  </span>
                  <h3 className="font-semibold text-lg text-slate-900 mb-1.5 pt-2">{step.title}</h3>
                  <p className="text-[15.5px] leading-[1.7] text-slate-600">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </Wrap>
      </section>

      {/* ── Values ── */}
      <section className="relative overflow-hidden bg-blue-950 text-white py-20 sm:py-28">
        <div
          className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(59,130,246,.16), transparent 65%)" }}
        />
        <Wrap className="relative">
          <div className="max-w-2xl mb-14 sm:mb-16">
            <Kicker dark>What we stand for</Kicker>
            <Heading dark>Four promises we make to every family.</Heading>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`lg:px-8 ${i === 0 ? "lg:pl-0" : "lg:border-l lg:border-white/12"}`}
              >
                <v.icon className="text-amber-400 text-2xl mb-6" />
                <h3 className="font-display text-2xl mb-3">{v.title}</h3>
                <p className="text-[15.5px] leading-[1.75] text-blue-100/75">{v.description}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* ── Destinations ── */}
      <section className="py-20 sm:py-28">
        <Wrap>
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-16 mb-10 sm:mb-14">
            <div className="lg:col-span-6">
              <Kicker>Where our students go</Kicker>
              <Heading>25+ countries, one team that knows each of them.</Heading>
            </div>
            <div className="lg:col-span-6 lg:self-end">
              <p className="text-[17px] leading-[1.75] text-slate-600 mb-4 max-w-[52ch]">
                Admissions and placements across Europe, North America,
                Oceania, Asia and the Gulf. For MBBS, our NMC-approved
                network covers:
              </p>
              <ul className="flex flex-wrap gap-2">
                {mbbsCountries.map((c) => (
                  <li
                    key={c}
                    className="px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-sm font-medium text-amber-800"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="flex lg:grid lg:grid-cols-5 gap-3 sm:gap-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 pb-2 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {destinations.map((d) => (
              <li
                key={d.code}
                className="relative shrink-0 w-[62%] sm:w-[38%] lg:w-auto snap-start rounded-2xl overflow-hidden bg-slate-200 group"
              >
                <img
                  src={`/capitals/${d.code}.webp`}
                  alt={`${d.city}, ${d.country}`}
                  loading="lazy"
                  className="w-full h-64 sm:h-72 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-950/10 to-transparent" />
                <div className="absolute left-4 right-4 bottom-4 text-white">
                  <p className="font-display text-xl leading-tight">{d.country}</p>
                  <p className="text-sm text-white/70">{d.city}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[11px] leading-relaxed text-slate-400 max-w-4xl">{photoCredits}</p>
        </Wrap>
      </section>

      {/* ── Why families choose us ── */}
      <section className="pb-20 sm:pb-28">
        <Wrap className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <Kicker>Why families choose us</Kicker>
            <Heading className="mb-10">Everything handled in-house, and written down.</Heading>
            <ul className="grid sm:grid-cols-2 gap-x-8 border-t border-slate-200">
              {reasons.map((r) => (
                <li key={r} className="flex gap-3 py-4 border-b border-slate-200 text-[15.5px] leading-[1.6] text-slate-700">
                  <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                    <FiCheck size={12} strokeWidth={3} />
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-5 relative rounded-[28px] bg-blue-900 text-white p-8 sm:p-10 overflow-hidden lg:mt-16">
            <Stamp className="absolute -right-10 -bottom-10 w-48 h-48 text-white/[0.06]" />
            <p className="text-sm font-semibold text-amber-400 mb-5">Our commitment</p>
            <p className="font-display text-[clamp(22px,2.4vw,28px)] leading-[1.4] mb-8">
              We are not a visa filing counter. We are your family's long-term
              education partner — from the first counselling session to the
              first salary abroad.
            </p>
            <Link
              to="/contact"
              className="relative inline-flex items-center gap-2 rounded-full bg-white text-blue-950 hover:bg-amber-400 font-semibold px-6 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              Talk to a counsellor
              <FiArrowRight />
            </Link>
          </aside>
        </Wrap>
      </section>

      {/* ── Partner with us ── */}
      <section id="partner" className="bg-slate-50 border-t border-slate-200/70 py-20 sm:py-28">
        <Wrap>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <Kicker>For institutions and agents</Kicker>
              <Heading className="mb-5">Partner with Capton Visa Point.</Heading>
              <p className="text-[17px] leading-[1.75] text-slate-600 mb-10 max-w-[52ch]">
                Universities, counsellors and service providers work with us to
                reach serious, well-prepared students across India. Our
                partnership team replies within 24–48 hours.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7 mb-10">
                {partnerBenefits.map((b) => (
                  <div key={b.title}>
                    <b.icon className="text-blue-700 text-xl mb-3" />
                    <h3 className="font-semibold text-slate-900 mb-1">{b.title}</h3>
                    <p className="text-sm leading-[1.65] text-slate-600">{b.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-3 gap-6 py-8 border-y border-slate-200 mb-8">
                {partnerTypes.map((t) => (
                  <div key={t.title}>
                    <h4 className="font-display text-lg text-slate-900 mb-3">{t.title}</h4>
                    <ul className="space-y-1.5">
                      {t.points.map((p) => (
                        <li key={p} className="text-sm text-slate-600 leading-snug">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <a
                href="mailto:partners@captonvisapoint.com"
                className="inline-flex items-center gap-2.5 text-blue-800 font-semibold hover:text-amber-600 transition-colors break-all"
              >
                <FiMail className="shrink-0" />
                partners@captonvisapoint.com
              </a>
            </div>

            <div className="lg:col-span-6 lg:sticky lg:top-28">
              <InquiryForm
                title="Become a Partner"
                subtitle="Tell us about your organisation and we'll get in touch"
                formLabel="About Page — Partner Inquiry"
              />
            </div>
          </div>
        </Wrap>
      </section>
    </div>
  );
};

export default About;
