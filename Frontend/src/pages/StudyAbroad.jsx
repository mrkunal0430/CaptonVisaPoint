import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { StudyAbroadForm } from "../components/forms";
import { preferredCountries, otherCountries } from "../data/studyAbroadData";
import SEO from "../components/SEO";

const flagCodes = {
  germany: "de",
  cyprus: "cy",
  france: "fr",
  uae: "ae",
  mauritius: "mu",
  singapore: "sg",
  uk: "gb",
  usa: "us",
  canada: "ca",
  australia: "au",
  "new-zealand": "nz",
  denmark: "dk",
  finland: "fi",
};

const getFlagUrl = (countryId) =>
  `https://flagcdn.com/${flagCodes[countryId] || "un"}.svg`;

/* ── small shared pieces, mirrored from the reference design ── */

const Eyebrow = ({ children, dark = false, pulse = false }) => (
  <span
    className={`inline-flex items-center gap-2.5 text-[12px] font-bold tracking-[0.1em] uppercase px-[15px] py-[7px] rounded-full mb-5 border ${
      dark
        ? "text-amber-400 bg-amber-500/[0.13] border-amber-400/30"
        : "text-amber-600 bg-amber-50 border-amber-500/[0.28]"
    }`}
  >
    {pulse && (
      <i className="w-[7px] h-[7px] rounded-full bg-current animate-[cvpPulse_2.4s_ease-in-out_infinite]" />
    )}
    {children}
  </span>
);

const SectionHead = ({ eyebrow, dark, pulse, title, lede }) => (
  <div className="text-center">
    {eyebrow && (
      <Eyebrow dark={dark} pulse={pulse}>
        {eyebrow}
      </Eyebrow>
    )}
    <h2
      className={`text-[clamp(28px,4.1vw,46px)] font-extrabold leading-[1.1] tracking-[-0.033em] mb-[15px] ${
        dark ? "text-white" : "text-slate-900"
      }`}
    >
      {title}
    </h2>
    {lede && (
      <p
        className={`text-[clamp(16px,1.6vw,18.5px)] leading-[1.62] max-w-[64ch] mx-auto mb-11 ${
          dark ? "text-white/70" : "text-slate-600"
        }`}
      >
        {lede}
      </p>
    )}
  </div>
);

const StudyAbroad = () => {
  const benefits = [
    {
      icon: "🎯",
      title: "Profile-based guidance",
      desc: "Recommendations begin with your individual profile, not with whichever country is easiest to sell this season.",
    },
    {
      icon: "🌍",
      title: "Multi-country options",
      desc: "Explore multiple destinations instead of being limited to one country by a single partnership.",
    },
    {
      icon: "💰",
      title: "Budget-conscious planning",
      desc: "Explore options according to your financial situation, including low and zero-tuition public universities.",
    },
    {
      icon: "🎓",
      title: "Course & university guidance",
      desc: "Find programmes aligned with your academic background and the career direction you actually want.",
    },
    {
      icon: "🛂",
      title: "Visa guidance",
      desc: "Understand the relevant visa requirements, documentation and application process for each pathway you consider.",
    },
    {
      icon: "🚀",
      title: "Career-focused planning",
      desc: "Weigh your long-term career goals while evaluating destinations, not only the next twelve months.",
    },
  ];

  const faqs = [
    {
      q: "How do I choose the right country for studying abroad?",
      a: "Consider factors like course availability, language, cost of living, post-study work opportunities, and cultural fit. Our counsellors help you make informed decisions based on your profile — not on which country is trending.",
    },
    {
      q: "What are the general eligibility requirements?",
      a: "Requirements vary by country and university. Generally, you need academic transcripts, English proficiency tests (IELTS/TOEFL), a passport, and specific course prerequisites.",
    },
    {
      q: "How long does the application process take?",
      a: "Typically 3–6 months from application to visa. We recommend starting at least 8–12 months before your intended intake.",
    },
    {
      q: "Can I work while studying abroad?",
      a: "Most countries allow international students to work part-time (15–20 hours/week) during studies. Post-study work permits are also available in many countries.",
    },
    {
      q: "Can you help me if my budget is limited?",
      a: "Yes. Low and zero-tuition public universities in Europe, and budget destinations with strong returns, are a core part of what we shortlist against your actual numbers.",
    },
    {
      q: "What support do you provide?",
      a: "End-to-end support: university selection, application assistance, visa guidance, pre-departure preparation, and post-arrival support.",
    },
  ];

  const journey = [
    "Your education",
    "Your budget",
    "Your career goal",
    "Your interests",
    "Your eligibility",
    "Your best-fit options",
  ];

  const stats = [
    {
      value: "15K+",
      label: "Students counselled",
      sub: "Profiles assessed since we opened our doors",
      bar: "bg-blue-700",
    },
    {
      value: "200+",
      label: "Partner institutions",
      sub: "Universities and colleges we can apply to directly",
      bar: "bg-amber-500",
    },
    {
      value: "98%",
      label: "Visa success rate",
      sub: "Through every visa rule change in between",
      bar: "bg-blue-600",
    },
    {
      value: "13+",
      label: "Destinations on our desk",
      sub: "Not one country sold to everyone who walks in",
      bar: "bg-[#0A1628]",
    },
  ];

  const trustFacts = [
    {
      h: "One counsellor, start to finish",
      p: "The person who reads your marksheets is the person who files your visa. No handovers to a junior desk.",
    },
    {
      h: "Costs in writing, upfront",
      p: "Service fees, university charges and third-party costs are itemised before you pay anything.",
    },
    {
      h: "Documents handled in-house",
      p: "SOP, LORs, financial papers and application forms are prepared with you, not outsourced.",
    },
    {
      h: "We answer after you land",
      p: "Accommodation, bank account, registration — the questions that come up in week one.",
    },
  ];

  return (
    <div className="bg-white text-slate-900">
      <SEO
        title="Study Abroad"
        description="Study abroad with Capton Visa Point — explore top destinations like Germany, UK, USA, Canada, Australia, France, UAE, Cyprus, and more. Complete guidance from university shortlisting, documentation, APS, visa filing, to pre-departure support. Affordable study abroad options with scholarship support."
        keywords="study abroad, study in Germany, study in UK, study in USA, study in Canada, study in Australia, study in France, study in UAE, overseas education consultants, study abroad consultants, B.Tech in Germany, study work settle in Germany, low budget study abroad, affordable study abroad, study abroad scholarships, study abroad visa process, university shortlisting, APS documentation, study abroad admission, overseas education, international education, foreign university admission, study abroad for Indian students, best country to study abroad, study abroad 2026, study abroad 2027"
      />

      {/* local keyframes used by this page only */}
      <style>{`
        @keyframes cvpPulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.7)}}
        @keyframes cvpWave{0%,100%{transform:skewY(0deg) scaleY(1)}35%{transform:skewY(-2.6deg) scaleY(.97)}70%{transform:skewY(2deg) scaleY(1.02)}}
        .cvp-dots{background-image:radial-gradient(rgba(255,255,255,.15) 1px,transparent 1px);background-size:28px 28px}
        .cvp-dots-lg{background-image:radial-gradient(rgba(255,255,255,.13) 1px,transparent 1px);background-size:30px 30px}
      `}</style>

      {/* ══════════ HERO ══════════ */}
      <div
        id="assessment"
        className="relative overflow-hidden text-white py-10 lg:py-[68px] lg:pb-[88px]"
        style={{
          background:
            "linear-gradient(160deg,#172554 0%,#0F172A 55%,#020617 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-50 cvp-dots"
          style={{
            WebkitMaskImage:
              "radial-gradient(120% 85% at 50% 15%,#000 25%,transparent 76%)",
            maskImage:
              "radial-gradient(120% 85% at 50% 15%,#000 25%,transparent 76%)",
          }}
        />
        <div
          className="absolute -top-[180px] -right-[140px] w-[620px] h-[620px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle,rgba(245,158,11,.20),transparent 62%)",
          }}
        />

        <div className="relative z-10 max-w-[1180px] mx-auto px-[22px]">
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1.04fr_.96fr] lg:gap-[54px] lg:items-start">
            {/* headline block */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1"
            >
              <Eyebrow dark pulse>
                Profile-Based Global Education Guidance
              </Eyebrow>
              <h1 className="text-[clamp(33px,5.3vw,62px)] font-extrabold leading-[1.03] tracking-[-0.04em] mb-5">
                <span className="block text-white/45 font-bold line-through decoration-[0.055em] decoration-amber-400/75">
                  Stop searching for the best country.
                </span>
                <span className="block mt-[0.16em] text-white">
                  Start finding the best country for{" "}
                  <span className="bg-gradient-to-br from-amber-400 to-amber-500 bg-clip-text text-transparent">
                    YOU
                  </span>
                  .
                </span>
              </h1>
              <p className="font-serif italic text-[clamp(18px,2.1vw,24px)] leading-[1.45] text-white/[0.88] mb-[18px] max-w-[30ch]">
                Not the best country. The best-fit country for you.
              </p>
              <p className="text-[16.5px] leading-[1.62] text-white/70 max-w-[52ch] mb-0">
                Capton Visa Point helps you explore countries and pathways based
                on your education, budget, career goals, interests, intake and
                individual eligibility — because the best country for someone
                else may not be the best country for you.
              </p>
            </motion.div>

            {/* FORM — untouched component, dropped into the reference card shell */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              id="consultation-form"
              className="order-2 lg:row-span-2"
            >
              <div className="bg-white text-slate-900 rounded-3xl shadow-[0_28px_70px_rgba(10,22,40,.22)] overflow-hidden p-5 sm:p-6">
                <StudyAbroadForm
                  title="Find Your Best-Fit Country"
                  subtitle="Answer a few questions. Get guidance based on YOUR profile."
                />
              </div>
            </motion.div>

            {/* CTA + assurances */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-3"
            >
              <span className="inline-flex items-center gap-3 mb-[22px] font-extrabold text-[clamp(18px,2.3vw,25px)] tracking-[-0.025em] text-amber-400 before:content-[''] before:w-8 before:h-[2px] before:bg-amber-500 before:rounded-sm">
                Free Eligibility Assessment
              </span>
              <div className="flex flex-wrap gap-[13px] mb-[30px]">
                <a
                  href="#consultation-form"
                  className="inline-flex items-center justify-center gap-2 font-bold text-[17px] tracking-[-0.01em] px-8 py-[18px] rounded-xl bg-gradient-to-br from-amber-500 to-amber-400 text-[#0A1628] shadow-[0_8px_22px_rgba(245,158,11,.30)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(245,158,11,.40)] transition-all"
                >
                  Find My Best-Fit Country — Free
                </a>
                <a
                  href="#destinations"
                  className="inline-flex items-center justify-center gap-2 font-bold text-[17px] tracking-[-0.01em] px-8 py-[18px] rounded-xl bg-white/[0.06] text-white border-[1.5px] border-white/[0.14] hover:bg-white/[0.13] hover:border-white/[0.36] transition-all"
                >
                  Explore Destinations
                </a>
              </div>
              <div className="flex flex-wrap gap-x-[26px] gap-y-[11px] border-t border-white/[0.14] pt-5">
                {[
                  "Profile assessed before any country is suggested",
                  "Study, work and immigration pathways",
                  "No charge for the assessment",
                ].map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-2.5 text-sm text-white/[0.72] font-medium"
                  >
                    <i className="w-[19px] h-[19px] shrink-0 rounded-full bg-amber-500/[0.18] border border-amber-400/[0.45] text-amber-400 grid place-items-center text-[10px] font-extrabold not-italic">
                      ✓
                    </i>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════ DIFFERENTIATOR ══════════ */}
      <section id="difference" className="py-14 sm:py-[84px]">
        <div className="max-w-[1180px] mx-auto px-[22px]">
          <SectionHead
            eyebrow="Our Approach"
            pulse
            title="Why you shouldn't choose a country based on someone else's profile"
            lede="Your friend's visa, your cousin's university and a trending reel are not an assessment of your eligibility. We don't sell countries. We understand profiles."
          />

          <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-[1fr_66px_1fr] lg:gap-0 items-center mt-2">
            <div className="rounded-3xl px-7 py-[30px] bg-slate-50 border border-slate-200">
              <h3 className="text-[12.5px] font-extrabold tracking-[0.11em] uppercase mb-[7px] text-slate-400">
                Generic consultancy
              </h3>
              <p className="text-[21px] font-extrabold tracking-[-0.03em] leading-[1.25] mb-5 text-slate-800">
                Country-first. Same answer for everyone.
              </p>
              <ul className="grid gap-[11px] list-none p-0 m-0">
                {[
                  "“This country is popular.”",
                  "“Everyone is going there.”",
                  "“This university is trending.”",
                  "“Your friend got a visa there.”",
                  "“This is the best country.”",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex gap-3 items-start text-[15.5px] leading-[1.5] text-slate-500"
                  >
                    <i className="shrink-0 w-[22px] h-[22px] rounded-full grid place-items-center text-[11px] font-extrabold mt-0.5 bg-slate-200 text-slate-500 not-italic">
                      ✕
                    </i>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid place-items-center">
              <div className="w-[50px] h-[50px] rounded-full bg-white border border-slate-200 shadow-[0_1px_3px_rgba(10,22,40,.06)] grid place-items-center font-extrabold text-[12.5px] text-slate-500">
                VS
              </div>
            </div>

            <div
              className="rounded-3xl px-7 py-[30px] text-white border border-blue-700 shadow-[0_12px_32px_rgba(10,22,40,.10)]"
              style={{
                background: "linear-gradient(160deg,#1E3A8A,#1E40AF)",
              }}
            >
              <h3 className="text-[12.5px] font-extrabold tracking-[0.11em] uppercase mb-[7px] text-amber-400">
                Capton Visa Point
              </h3>
              <p className="text-[21px] font-extrabold tracking-[-0.03em] leading-[1.25] mb-5">
                Profile-first. Your answer, built from your facts.
              </p>
              <ul className="grid gap-[11px] list-none p-0 m-0">
                {[
                  "Your academic profile",
                  "Your budget",
                  "Your career goal",
                  "Your course",
                  "Your interests",
                  "Your preferred intake",
                  "Your eligibility",
                  "Your long-term plans",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex gap-3 items-start text-[15.5px] leading-[1.5]"
                  >
                    <i className="shrink-0 w-[22px] h-[22px] rounded-full grid place-items-center text-[11px] font-extrabold mt-0.5 bg-amber-400 text-[#0A1628] not-italic">
                      ✓
                    </i>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-[42px] text-center text-[clamp(17px,2.5vw,28px)] font-extrabold tracking-[-0.032em] flex flex-wrap justify-center items-center gap-x-4 gap-y-2.5 text-slate-900">
            <b>Your Profile</b>
            <i className="not-italic text-amber-500">→</i>
            <b>Your Options</b>
            <i className="not-italic text-amber-500">→</i>
            <b className="text-blue-700">Your Best-Fit Country</b>
          </p>
        </div>
      </section>

      {/* ══════════ COUNTRY EXPLORER ══════════ */}
      <section id="destinations" className="py-14 sm:py-[84px] bg-slate-50">
        <div className="max-w-[1180px] mx-auto px-[22px]">
          <SectionHead
            eyebrow="Country Explorer"
            title="Pick a country. Or let us pick for you."
            lede="Open any card to see universities, intakes and requirements. Still undecided? Skip the whole thing — that is what the form is for."
          />

          {/* premier destinations */}
          <div className="mb-[52px]">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-[52px] h-[52px] rounded-[14px] shrink-0 grid place-items-center text-2xl bg-blue-50 border border-blue-100">
                🌎
              </div>
              <div>
                <h3 className="text-[21px] font-extrabold tracking-[-0.03em] mb-[3px] leading-tight">
                  High-demand global destinations
                </h3>
                <p className="m-0 text-[14.5px] text-slate-500 leading-[1.45]">
                  The names everyone knows — deepest course choice, longest work
                  rights, biggest budget
                </p>
              </div>
            </div>
            <div className="h-[3px] rounded-[3px] mb-5 bg-gradient-to-r from-blue-700 to-blue-100" />

            <div className="grid grid-cols-[repeat(auto-fill,minmax(238px,1fr))] gap-[18px] mb-[26px]">
              {preferredCountries.map((country, i) => (
                <motion.div
                  key={country.id}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.45 }}
                  className={i % 2 === 1 ? "lg:mt-[22px]" : ""}
                >
                  <Link
                    to={`/study-abroad/${country.id}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[18px] border-[1.5px] border-slate-200 bg-white pb-[17px] transition-all duration-300 hover:-translate-y-[7px] hover:border-blue-600 hover:shadow-[0_12px_32px_rgba(10,22,40,.10)]"
                  >
                    <span className="relative block h-[132px] shrink-0 overflow-hidden bg-[linear-gradient(168deg,#16295A_0%,#0F1F42_55%,#0A1628_100%)]">
                      <img
                        src={country.bannerImage}
                        alt={country.name}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.07]"
                      />
                      <span
                        className="absolute inset-0 z-[1] pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(180deg,rgba(10,22,40,.20) 0%,rgba(10,22,40,0) 34%,rgba(10,22,40,.50) 74%,rgba(10,22,40,.90) 100%)",
                        }}
                      />
                      <img
                        src={getFlagUrl(country.id)}
                        alt=""
                        className="absolute top-3 right-[13px] z-[3] w-[50px] h-[34px] object-cover animate-[cvpWave_5.5s_ease-in-out_infinite] origin-left"
                        style={{
                          filter:
                            "drop-shadow(0 0 1.5px rgba(255,255,255,.85)) drop-shadow(0 3px 7px rgba(0,0,0,.55))",
                          animationDelay: `${-1.8 * (i % 3)}s`,
                        }}
                      />
                      <span className="absolute top-3 left-[13px] z-[4] rounded-full bg-white/[0.93] px-[11px] py-[5px] text-[11px] font-extrabold tracking-[0.04em] text-blue-800 shadow-[0_1px_3px_rgba(10,22,40,.06)] transition-colors group-hover:bg-amber-500 group-hover:text-[#0A1628]">
                        PREMIER
                      </span>
                      <span className="absolute bottom-2.5 left-[15px] z-[3] text-[10.5px] font-extrabold uppercase tracking-[0.15em] text-amber-400 [text-shadow:0_1px_5px_rgba(0,0,0,.65)]">
                        {country.universities.length} universities
                      </span>
                    </span>

                    <span className="block flex-1 px-4 pt-[15px]">
                      <span className="block text-[16.5px] font-extrabold tracking-[-0.032em] leading-tight text-[#0A1628]">
                        {country.name}
                      </span>
                      <span className="mt-[5px] block text-[13.5px] font-medium leading-[1.48] text-slate-600">
                        {country.tagline}
                      </span>
                      <span className="mt-3 flex flex-wrap gap-1.5">
                        {country.highlights.slice(0, 2).map((h) => (
                          <span
                            key={h}
                            className="rounded-full border border-amber-100 bg-amber-50 px-2.5 py-1 text-[11.5px] font-semibold text-amber-700"
                          >
                            {h}
                          </span>
                        ))}
                      </span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <a
              href="#consultation-form"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-[26px] py-[15px] text-[15.5px] font-bold tracking-[-0.01em] text-white shadow-[0_8px_22px_rgba(29,78,216,.24)] transition-all hover:-translate-y-0.5 hover:bg-blue-800"
            >
              See if I qualify for these
            </a>
          </div>

          {/* other destinations */}
          <div className="mb-[52px]">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-[52px] h-[52px] rounded-[14px] shrink-0 grid place-items-center text-2xl bg-amber-50 border border-amber-500/30">
                🎓
              </div>
              <div>
                <h3 className="text-[21px] font-extrabold tracking-[-0.03em] mb-[3px] leading-tight">
                  More destinations worth comparing
                </h3>
                <p className="m-0 text-[14.5px] text-slate-500 leading-[1.45]">
                  Lower total outlay, faster admission decisions, recognised
                  qualifications
                </p>
              </div>
            </div>
            <div className="h-[3px] rounded-[3px] mb-5 bg-gradient-to-r from-amber-500 to-amber-50" />

            <div className="grid grid-cols-[repeat(auto-fill,minmax(238px,1fr))] gap-[18px] mb-[26px]">
              {otherCountries.map((country, i) => (
                <motion.div
                  key={country.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                >
                  <Link
                    to={`/study-abroad/${country.id}`}
                    className="group flex h-full flex-col rounded-[18px] border-[1.5px] border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-[7px] hover:border-blue-600 hover:shadow-[0_12px_32px_rgba(10,22,40,.10)]"
                  >
                    <div className="mb-3.5 flex items-center gap-3.5">
                      <img
                        src={getFlagUrl(country.id)}
                        alt=""
                        className="h-7 w-10 rounded border border-slate-200 object-cover shadow-sm"
                      />
                      <div>
                        <span className="block text-[16.5px] font-extrabold tracking-[-0.032em] leading-tight text-[#0A1628] transition-colors group-hover:text-blue-700">
                          {country.name}
                        </span>
                        <span className="block text-[12.5px] text-slate-500">
                          {country.tagline}
                        </span>
                      </div>
                    </div>
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {country.highlights.slice(0, 2).map((h) => (
                        <span
                          key={h}
                          className="rounded-full bg-slate-100 px-2.5 py-1 text-[11.5px] font-medium text-slate-600"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3.5">
                      <span className="text-[12.5px] text-slate-500">
                        {country.universities.length} Universities
                      </span>
                      <span className="text-[13px] font-bold text-amber-600 transition-all group-hover:translate-x-1">
                        Explore →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <a
              href="#consultation-form"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-[26px] py-[15px] text-[15.5px] font-bold tracking-[-0.01em] text-white shadow-[0_8px_22px_rgba(29,78,216,.24)] transition-all hover:-translate-y-0.5 hover:bg-blue-800"
            >
              Match a country to my budget
            </a>
          </div>

          <p className="mt-6 rounded-r-lg border-l-[3px] border-amber-500 bg-amber-50 px-[18px] py-3.5 text-[13.5px] leading-[1.6] text-slate-600">
            Course availability, tuition, living costs, entry requirements, visa
            rules and career outcomes differ by country, university, programme
            and individual profile, and they change between intakes. Nothing
            here is an offer of admission or an indication of a visa outcome.
          </p>
        </div>
      </section>

      {/* ══════════ NOT SURE ══════════ */}
      <section
        className="relative overflow-hidden py-14 sm:py-[84px] text-white"
        style={{ background: "linear-gradient(160deg,#1E3A8A,#172554)" }}
      >
        <div className="absolute inset-0 opacity-45 cvp-dots-lg" />
        <div className="relative z-10 max-w-[1180px] mx-auto px-[22px] text-center">
          <Eyebrow dark pulse>
            For everyone still deciding
          </Eyebrow>
          <h2 className="text-[clamp(28px,4.1vw,46px)] font-extrabold leading-[1.1] tracking-[-0.033em] mb-[15px]">
            Don't know which country is right for you?
          </h2>
          <p className="font-serif italic text-[clamp(26px,4.4vw,48px)] leading-[1.18] text-amber-400 mb-4">
            That's exactly why we're here.
          </p>
          <p className="text-[clamp(16px,1.6vw,18.5px)] leading-[1.62] text-white/[0.72] max-w-[64ch] mx-auto">
            You don't need to start with a country. Start with your profile.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 my-[42px] mb-[38px]">
            {journey.map((label, i) => (
              <div
                key={label}
                className="px-3 py-5 text-center border-b border-white/[0.14] lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <div
                  className={`mx-auto mb-2.5 grid h-[30px] w-[30px] place-items-center rounded-full text-xs font-extrabold ${
                    i === journey.length - 1
                      ? "bg-amber-400 border border-amber-400 text-[#0A1628]"
                      : "bg-white/[0.08] border border-white/[0.14] text-white/[0.78]"
                  }`}
                >
                  {i === journey.length - 1 ? "★" : i + 1}
                </div>
                <p
                  className={`m-0 text-[13.5px] font-bold leading-[1.35] ${
                    i === journey.length - 1 ? "text-amber-400" : ""
                  }`}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#consultation-form"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-amber-500 to-amber-400 px-8 py-[18px] text-[17px] font-bold tracking-[-0.01em] text-[#0A1628] shadow-[0_8px_22px_rgba(245,158,11,.30)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(245,158,11,.40)]"
          >
            Start My Free Assessment
          </a>
        </div>
      </section>

      {/* ══════════ WHY CAPTON ══════════ */}
      <section id="why" className="py-14 sm:py-[84px]">
        <div className="max-w-[1180px] mx-auto px-[22px]">
          <SectionHead
            eyebrow="Why Capton Visa Point"
            title="Guidance that starts with you, not with a brochure"
            lede="Everything below begins from the same place — the details you give us about yourself."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-[18px] border border-slate-200 bg-white px-6 py-[26px] shadow-[0_1px_3px_rgba(10,22,40,.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(10,22,40,.10)]"
              >
                <div className="mb-[15px] grid h-[46px] w-[46px] place-items-center rounded-xl border border-blue-100 bg-blue-50 text-[22px]">
                  {b.icon}
                </div>
                <h3 className="mb-2 text-[17.5px] font-extrabold tracking-[-0.025em]">
                  {b.title}
                </h3>
                <p className="m-0 text-[15px] leading-[1.6] text-slate-600">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TRUST / BY THE NUMBERS ══════════ */}
      <section className="py-14 sm:py-[84px] bg-slate-50">
        <div className="max-w-[1180px] mx-auto px-[22px]">
          <SectionHead
            eyebrow="By The Numbers"
            title="The figures we're happy to publish"
            lede="A consultancy that will not publish its own numbers is asking you to trust a stranger with a decade of your life."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="relative overflow-hidden rounded-[18px] border border-slate-200 bg-white py-[26px] pl-[26px] pr-[22px] shadow-[0_1px_3px_rgba(10,22,40,.06)]"
              >
                <span
                  className={`absolute left-0 top-0 bottom-0 w-1 ${s.bar}`}
                />
                <b className="block text-[clamp(30px,4vw,44px)] font-extrabold leading-none tracking-[-0.045em] text-[#0A1628]">
                  {s.value}
                </b>
                <span className="mt-[9px] block text-[14.5px] font-bold tracking-[-0.015em] text-slate-800">
                  {s.label}
                </span>
                <span className="mt-1 block text-[13px] font-medium leading-[1.45] text-slate-500">
                  {s.sub}
                </span>
              </div>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-[26px]">
            {trustFacts.map((t) => (
              <div
                key={t.h}
                className="rounded-xl border border-blue-100 bg-blue-50 p-5"
              >
                <h4 className="mb-1.5 text-[15.5px] font-extrabold tracking-[-0.02em] text-[#0A1628]">
                  {t.h}
                </h4>
                <p className="m-0 text-sm leading-[1.55] text-slate-600">
                  {t.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section id="faq" className="py-14 sm:py-[84px]">
        <div className="max-w-[1180px] mx-auto px-[22px]">
          <SectionHead
            eyebrow="Questions"
            title="Before you fill the form"
            lede="If yours isn't here, ask it on the call. There is no obligation attached to the answer."
          />
          <div className="mx-auto max-w-[880px]">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                className="group mb-2.5 overflow-hidden rounded-xl border border-slate-200 bg-white open:border-blue-600 open:shadow-[0_1px_3px_rgba(10,22,40,.06)]"
              >
                <summary className="relative cursor-pointer list-none py-[18px] pl-5 pr-[52px] text-[16.5px] font-bold tracking-[-0.018em] marker:content-none [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="absolute right-[19px] top-1/2 -translate-y-1/2 text-[23px] font-normal leading-none text-amber-500">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">–</span>
                  </span>
                </summary>
                <div className="max-w-[74ch] px-5 pb-[19px] text-[15.5px] leading-[1.68] text-slate-600">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FINAL ══════════ */}
      <section
        className="relative overflow-hidden py-14 sm:py-[84px] text-center text-white"
        style={{ background: "linear-gradient(160deg,#172554,#020617)" }}
      >
        <div
          className="absolute -top-[160px] left-1/2 -translate-x-1/2 w-[760px] h-[520px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle,rgba(245,158,11,.18),transparent 62%)",
          }}
        />
        <div className="relative z-10 max-w-[1180px] mx-auto px-[22px]">
          <h2 className="text-[clamp(29px,4.8vw,54px)] font-extrabold leading-[1.06] tracking-[-0.04em]">
            Not the best country.
            <br />
            <span className="text-amber-400">
              The best-fit country for you.
            </span>
          </h2>
          <p className="mx-auto mb-8 mt-5 max-w-[36ch] font-serif italic text-[clamp(17px,2.2vw,23px)] text-white/[0.78]">
            Your education. Your budget. Your career. Your goals. Your journey.
          </p>
          <div className="flex flex-wrap justify-center gap-[13px]">
            <a
              href="#consultation-form"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-amber-500 to-amber-400 px-8 py-[18px] text-[17px] font-bold tracking-[-0.01em] text-[#0A1628] shadow-[0_8px_22px_rgba(245,158,11,.30)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(245,158,11,.40)]"
            >
              Get My Free Eligibility Assessment
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-[1.5px] border-white/[0.14] bg-white/[0.06] px-8 py-[18px] text-[17px] font-bold tracking-[-0.01em] text-white transition-all hover:border-white/[0.36] hover:bg-white/[0.13]"
            >
              Talk To A Counsellor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyAbroad;
