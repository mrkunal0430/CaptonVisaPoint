import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiCheck,
  FiBookOpen,
  FiDollarSign,
  FiClock,
  FiFileText,
  FiAward,
  FiStar,
  FiMapPin,
  FiArrowRight,
  FiGlobe,
  FiUsers,
  FiChevronDown,
} from "react-icons/fi";
import InquiryForm from "../components/forms/InquiryForm";
import SEO from "../components/SEO";

import { countryData, defaultCountryData } from "../data/mbbsData";


// Infinite Marquee Slider Component
const InfiniteMarqueeSlider = ({ items, renderCard, speed = 35 }) => {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(320);

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) setCardWidth(280);
      else if (window.innerWidth < 1024) setCardWidth(300);
      else setCardWidth(320);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // We need at least enough items to fill the screen + extra for seamless loop
  const repeatedItems = [...items, ...items, ...items, ...items];
  const gap = 20;
  const singleSetWidth = items.length * (cardWidth + gap);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient fades on edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, white, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, white, transparent)" }}
      />

      <div
        ref={trackRef}
        className="flex py-6"
        style={{
          gap: `${gap}px`,
          animation: `marquee-scroll ${speed}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
          width: `${repeatedItems.length * (cardWidth + gap)}px`,
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {repeatedItems.map((item, idx) => (
          <div
            key={`${item.slug || item.id}-${idx}`}
            style={{ minWidth: cardWidth, maxWidth: cardWidth }}
            className="flex-shrink-0"
          >
            {renderCard(item, idx)}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${singleSetWidth}px); }
        }
      `}</style>
    </div>
  );
};

const MbbsCountry = () => {
  const { country } = useParams();
  const countryKey = country?.toLowerCase() || "russia";
  const data = countryData[countryKey] || {
    ...defaultCountryData,
    name: country
      ? country.charAt(0).toUpperCase() + country.slice(1)
      : "Russia",
  };
  const countryName =
    data.name ||
    (country ? country.charAt(0).toUpperCase() + country.slice(1) : "Russia");

  // Get other countries for "Explore Other Countries" section
  const otherCountries = Object.entries(countryData)
    .filter(([key]) => key !== countryKey)
    .map(([key, cData]) => ({ slug: key, ...cData }));

  // Merge partnerUniversities + otherUniversities into a single list
  const allUniversities = [
    ...(data.partnerUniversities || []),
    ...(data.otherUniversities || []),
  ];

  return (
    <div>
      <SEO
        title={data.seoTitle || `MBBS in ${countryName} | Fees, Universities & Admission 2026-2027`}
        description={data.seoDescription || `Study MBBS in ${countryName} with Capton Visa Point. Complete MBBS admission guidance 2026-2027 — fees structure, eligibility, WHO & NMC approved universities, visa process, hostel facilities, and Indian food availability. Affordable MBBS for Indian students.`}
        keywords={data.seoKeywords || `MBBS in ${countryName}, study MBBS in ${countryName}, MBBS in ${countryName} fees, MBBS in ${countryName} for Indian students, ${countryName} MBBS admission, top medical universities in ${countryName}, low cost MBBS in ${countryName}, MBBS in ${countryName} eligibility, MBBS in ${countryName} consultants, MBBS abroad, WHO approved medical universities, NMC approved medical colleges, FMGE exam after MBBS abroad, NEXT exam for MBBS students`}
      />
      {/* Banner */}
      <section className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] flex items-center justify-center overflow-hidden">
        <img
          src={data.bannerImage}
          alt={countryName}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/50 to-slate-900/30" />
        <div className="relative z-20 text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-1.5 rounded-full text-sm font-semibold text-white mb-4 inline-block uppercase tracking-wider">
              MBBS in {countryName}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              Study MBBS in {countryName}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Top-ranked universities, English medium education, and globally
              recognized degrees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview & Quick Stats */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Why choose {countryName}?
              </h2>
              <div className="text-slate-600 leading-relaxed text-lg space-y-4">
                {(
                  data.whyChoose ||
                  `Studying MBBS in ${countryName} is an excellent choice for Indian students. ${countryName} is known for its high standard of medical education, affordable tuition fees, and world-class infrastructure. Most medical universities in ${countryName} are recognized by WHO, FAIMER, and the National Medical Commission (NMC) of India.`
                )
                  .split("\n\n")
                  .map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <FiDollarSign className="text-3xl text-blue-600 mb-3" />
                <h3 className="font-bold text-slate-800">Affordable Fees</h3>
                <p className="text-slate-500 text-sm">
                  Low tuition & living costs compared to private colleges in
                  India.
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <FiBookOpen className="text-3xl text-blue-500 mb-3" />
                <h3 className="font-bold text-slate-800">
                  {data.medium || "English"} Medium
                </h3>
                <p className="text-slate-500 text-sm">
                  Entire course is taught in {data.medium || "English"} for
                  international students.
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <FiCheck className="text-3xl text-blue-600 mb-3" />
                <h3 className="font-bold text-slate-800">
                  {data.recognition || "NMC"} Recognized
                </h3>
                <p className="text-slate-500 text-sm">
                  Graduates are eligible to sit for FMGE/NEXT in India.
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <FiClock className="text-3xl text-orange-500 mb-3" />
                <h3 className="font-bold text-slate-800">Duration</h3>
                <p className="text-slate-500 text-sm">
                  {data.duration || "6 Years (including internship)"} standard
                  duration.
                </p>
              </div>
              {data.costOfLiving && (
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                  <FiDollarSign className="text-3xl text-blue-600 mb-3" />
                  <h3 className="font-bold text-slate-800">Cost of Living</h3>
                  <p className="text-slate-500 text-sm">
                    Average monthly cost: {data.costOfLiving}
                  </p>
                </div>
              )}
              {data.currency && (
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                  <FiAward className="text-3xl text-blue-600 mb-3" />
                  <h3 className="font-bold text-slate-800">Currency</h3>
                  <p className="text-slate-500 text-sm">{data.currency}</p>
                </div>
              )}
            </div>

            {/* Fee Payment Info */}
            {data.feePayment && (
              <div className="p-5 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <FiDollarSign className="text-blue-500" /> Fee Payment Method
                </h3>
                <p className="text-slate-600 text-sm">{data.feePayment}</p>
              </div>
            )}

            {/* Key Highlights */}
            {data.highlights && data.highlights.length > 0 && (
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <FiStar className="text-amber-500" /> Key Highlights — MBBS in{" "}
                  {countryName}
                </h3>
                <ul className="space-y-3">
                  {data.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FiCheck className="text-blue-600 mt-1 shrink-0" />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Who Should Choose */}
            {data.whoShouldChoose && (
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <FiUsers className="text-amber-600" /> Who Should Choose MBBS
                  in {countryName}?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {data.whoShouldChoose}
                </p>
              </div>
            )}

            {/* FAQs */}
            {data.faqs && data.faqs.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <FiFileText className="text-blue-500" /> Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  {data.faqs.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden"
                    >
                      <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-100 transition-colors">
                        <span className="font-semibold text-slate-800 text-sm pr-4">
                          {faq.question}
                        </span>
                        <FiChevronDown className="text-slate-400 group-open:rotate-180 transition-transform duration-300 shrink-0" />
                      </summary>
                      <div className="px-4 pb-4 text-slate-600 text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* All Universities Table Section (Merged) */}
            {allUniversities.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl">
                    <FiGlobe className="text-2xl text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      Medical Universities in {countryName}
                    </h2>
                    <p className="text-sm text-slate-500">
                      All universities for Indian students – Session 2026-27
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-6 pl-1">
                  Explore the best medical universities in {countryName}{" "}
                  handpicked by our expert counsellors. Universities marked with
                  ⭐ are clickable — click to view detailed info, fees, hostel,
                  and admission process.
                </p>

                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                        <th className="text-left py-4 px-5 font-semibold rounded-tl-2xl">
                          #
                        </th>
                        <th className="text-left py-4 px-5 font-semibold">
                          University Name
                        </th>
                        <th className="text-left py-4 px-5 font-semibold">
                          Location
                        </th>
                        <th className="text-left py-4 px-5 font-semibold">
                          Tuition Fee
                        </th>
                        <th className="text-center py-4 px-5 font-semibold rounded-tr-2xl">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {allUniversities.map((uni, idx) => {
                        const row = (
                          <>
                            <td className="py-4 px-5 font-bold text-blue-600">
                              {String(idx + 1).padStart(2, "0")}
                            </td>
                            <td className="py-4 px-5">
                              <div className="flex items-center gap-2">
                                {uni.slug && (
                                  <span className="text-amber-500">⭐</span>
                                )}
                                <span className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                  {uni.name}
                                </span>
                              </div>
                            </td>
                            <td className="py-4 px-5 text-slate-500">
                              <span className="flex items-center gap-1">
                                <FiMapPin className="text-xs" /> {uni.location}
                              </span>
                            </td>
                            <td className="py-4 px-5 font-bold text-blue-600">
                              {uni.fees}
                            </td>
                            <td className="py-4 px-5 text-center">
                              {uni.slug ? (
                                <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                  View <FiArrowRight className="text-[10px]" />
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 text-xs text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full">
                                  <FiCheck className="text-[10px]" /> Listed
                                </span>
                              )}
                            </td>
                          </>
                        );
                        return uni.slug ? (
                          <Link
                            key={idx}
                            to={`/mbbs/${countryKey}/${uni.slug}`}
                            className="group table-row hover:bg-blue-50/60 transition-colors cursor-pointer border-b border-slate-100 last:border-b-0"
                          >
                            {row}
                          </Link>
                        ) : (
                          <tr
                            key={idx}
                            className="group hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-b-0"
                          >
                            {row}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-3">
                  {allUniversities.map((uni, idx) => {
                    const CardWrapper = uni.slug ? Link : "div";
                    const cardProps = uni.slug
                      ? { to: `/mbbs/${countryKey}/${uni.slug}` }
                      : {};
                    return (
                      <CardWrapper
                        key={idx}
                        {...cardProps}
                        className="group block bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all p-4"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <span className="inline-flex items-center justify-center w-7 h-7 bg-blue-100 text-blue-600 rounded-lg text-xs font-bold">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          {uni.slug && (
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-500 bg-blue-50 px-2 py-1 rounded-full">
                              View <FiArrowRight className="text-[10px]" />
                            </span>
                          )}
                        </div>
                        <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                          {uni.slug && (
                            <span className="text-amber-500 mr-1">⭐</span>
                          )}
                          {uni.name}
                        </h4>
                        <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-2">
                          <FiMapPin className="text-[10px]" /> {uni.location}
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                          <span className="text-blue-600 font-bold text-sm">
                            {uni.fees}
                          </span>
                          {uni.slug ? (
                            <span className="text-[10px] bg-blue-50 text-blue-800 px-2 py-0.5 rounded-full font-medium border border-blue-100">
                              <FiCheck className="inline text-[8px] mr-0.5" />{" "}
                              Recommended
                            </span>
                          ) : (
                            <span className="text-[10px] bg-slate-50 text-slate-500 px-2 py-0.5 rounded-full font-medium border border-slate-200">
                              <FiCheck className="inline text-[8px] mr-0.5" />{" "}
                              Listed
                            </span>
                          )}
                        </div>
                      </CardWrapper>
                    );
                  })}
                </div>
              </div>
            )}

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <FiFileText /> Documents Required
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "10th & 12th Marksheets",
                  "NEET Score Card",
                  "Valid Passport",
                  "Passport Size Photos",
                  "HIV Report",
                  "Birth Certificate",
                ].map((doc, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg text-slate-700 text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-brand-blue rounded-full"></div>{" "}
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Form */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <InquiryForm
                title={`Apply to ${countryName}`}
                subtitle="Get free admission assessment now"
                showNeetScore={true}
              />

              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-blue-50 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-brand-blue mb-2 flex items-center gap-2">
                  <FiAward className="text-amber-500" /> Why Capton Visa Point?
                </h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <FiCheck className="text-blue-600" /> Direct university
                    partnerships
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="text-blue-600" /> Hassle-free admission
                    process
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="text-blue-600" /> Complete visa
                    assistance
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="text-blue-600" /> Pre-departure guidance
                  </li>
                </ul>
              </div>

              {data.partnerUniversities &&
                data.partnerUniversities.length > 0 && (
                  <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-blue-50 rounded-2xl border border-blue-200">
                    <h4 className="font-bold text-blue-700 mb-2 flex items-center gap-2">
                      <FiStar className="text-blue-500" /> Admission Support
                    </h4>
                    <p className="text-sm text-slate-600">
                      We work with{" "}
                      <span className="font-bold text-blue-600">
                        {data.partnerUniversities.length} top{" "}
                        {data.partnerUniversities.length === 1
                          ? "university"
                          : "universities"}
                      </span>{" "}
                      in {countryName}. Apply through us for smooth admission,
                      visa help & complete guidance!
                    </p>
                  </div>
                )}
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Countries - Infinite Marquee Slider */}
      {otherCountries.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 flex items-center justify-center gap-3">
                <FiGlobe className="text-blue-500" /> Explore Other Countries
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Discover MBBS opportunities in other top destinations
              </p>
            </motion.div>
          </div>

          <InfiniteMarqueeSlider
            items={otherCountries}
            speed={otherCountries.length * 5}
            renderCard={(c) => (
              <Link
                to={`/mbbs/${c.slug}`}
                className="group block rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-blue-400 shadow-lg hover:shadow-2xl transition-all duration-500 h-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Country Image with parallax-like overlay */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={c.bannerImage}
                    alt={`MBBS in ${c.name}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  {/* Animated shimmer overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    style={{ animation: "shimmer 2s ease-in-out infinite" }}
                  />
                  <h3 className="absolute bottom-3 left-4 text-white font-bold text-lg drop-shadow-lg group-hover:translate-x-1 transition-transform duration-300">
                    {c.name}
                  </h3>
                  {/* Floating badge */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold">
                      <FiGlobe className="text-[10px]" /> MBBS
                    </span>
                  </div>
                </div>

                {/* Country Info */}
                <div className="p-4">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <FiClock className="text-blue-500 flex-shrink-0" />
                      <span>{c.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <FiBookOpen className="text-blue-500 flex-shrink-0" />
                      <span>{c.medium}</span>
                    </div>
                    {c.costOfLiving && (
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <FiDollarSign className="text-green-500 flex-shrink-0" />
                        <span>Living: {c.costOfLiving}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <span className="text-[10px] font-semibold bg-green-50 text-green-700 px-2 py-0.5 rounded-full border border-green-200">
                      {c.recognition?.split(",")[0]} Recognized
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-500 group-hover:text-blue-700 transition-colors">
                      Explore{" "}
                      <FiArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </Link>
            )}
          />

          <style>{`
            @keyframes shimmer {
              0%, 100% { transform: translateX(-100%); }
              50% { transform: translateX(100%); }
            }
          `}</style>
        </section>
      )}
    </div>
  );
};

export default MbbsCountry;
