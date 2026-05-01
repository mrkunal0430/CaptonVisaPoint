import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiMapPin,
  FiBookOpen,
  FiCalendar,
  FiGlobe,
  FiCheckCircle,
  FiArrowLeft,
  FiStar,
  FiFileText,
  FiHome,
  FiDollarSign,
  FiClock,
} from "react-icons/fi";
import SEO from "../components/SEO";
import { StudyAbroadForm } from "../components/forms";
import {
  getCountryById,
  preferredCountries,
  getAllCountries,
} from "../data/studyAbroadData";

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

  const repeatedItems = [...items, ...items, ...items, ...items];
  const gap = 20;
  const singleSetWidth = items.length * (cardWidth + gap);

  return (
    <div className="relative w-full overflow-hidden">
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
          animation: `study-marquee-scroll ${speed}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
          width: `${repeatedItems.length * (cardWidth + gap)}px`,
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {repeatedItems.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            style={{ minWidth: cardWidth, maxWidth: cardWidth }}
            className="flex-shrink-0"
          >
            {renderCard(item, idx)}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes study-marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${singleSetWidth}px); }
        }
      `}</style>
    </div>
  );
};

// University Minimal Slider — Sleek, modern horizontal slider
const UniversityMinimalSlider = ({ universities, countryId }) => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeftArrow(scrollLeft > 20);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative group/slider">
      {/* Navigation Arrows */}
      <button
        onClick={() => scroll("left")}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 ${
          showLeftArrow
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } hidden md:flex`}
      >
        <FiArrowLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 ${
          showRightArrow
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } hidden md:flex`}
      >
        <FiArrowRight />
      </button>

      {/* Gradient Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-opacity" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-opacity" />

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 pt-4 px-4 no-scrollbar scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {universities.map((uni, idx) => (
          <motion.div
            key={uni.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex-shrink-0"
          >
            <Link
              to={`/study-abroad/${countryId}/${uni.id}`}
              className="block w-64 sm:w-72 group/card relative"
            >
              <div className="relative p-5 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] group-hover/card:shadow-[0_20px_40px_-12px_rgba(59,130,246,0.15)] group-hover/card:border-blue-100 group-hover/card:-translate-y-2 transition-all duration-500 overflow-hidden">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-8 -mt-8 group-hover/card:bg-blue-600 transition-colors duration-500 opacity-20 group-hover/card:opacity-10" />

                <div className="relative z-10">
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 shadow-sm">
                    <img
                      src={uni.image}
                      alt={uni.name}
                      className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60" />
                  </div>

                  <h4 className="font-bold text-slate-900 text-sm leading-tight mb-2 group-hover/card:text-blue-600 transition-colors line-clamp-2 min-h-[2.5rem]">
                    {uni.name}
                  </h4>

                  <div className="flex items-center gap-2 text-slate-500 text-[10px] mb-4">
                    <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center">
                      <FiMapPin className="text-[10px]" />
                    </div>
                    <span>{uni.location}</span>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                      Explore University{" "}
                      <FiArrowRight className="text-[10px]" />
                    </span>
                    <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center group-hover/card:bg-blue-600 group-hover/card:text-white group-hover/card:border-blue-600 transition-all duration-300">
                      <FiArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

const StudyAbroadCountry = () => {
  const { country } = useParams();
  const countryData = getCountryById(country);
  const isPreferred = preferredCountries.some((c) => c.id === country);

  // Get other countries for "Explore Other Countries" section
  const otherStudyCountries = getAllCountries()
    .filter((c) => c.id !== country)
    .map((c) => ({
      ...c,
      isPreferred: preferredCountries.some((p) => p.id === c.id),
    }));

  if (!countryData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Country Not Found
          </h1>
          <p className="text-slate-600 mb-8">
            The country you're looking for doesn't exist.
          </p>
          <Link
            to="/study-abroad"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 text-white rounded-full font-bold"
          >
            <FiArrowLeft /> Back to Study Abroad
          </Link>
        </div>
      </div>
    );
  }

  const quickFacts = [
    { icon: <FiGlobe />, label: "Language", value: countryData.language },
    {
      icon: <FiCalendar />,
      label: "Intakes",
      value: countryData.intakes.join(", "),
    },
    {
      icon: <FiBookOpen />,
      label: "Universities",
      value: `${countryData.universities.length}+`,
    },
  ];

  // Flag code mapping for real flag images
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

  const getFlagUrl = (size = 48) => {
    const code = flagCodes[country] || "un";
    return `https://flagcdn.com/w${size}/${code}.png`;
  };

  return (
    <div className="bg-white">
      <SEO
        title={countryData.seoTitle || `Study in ${countryData?.name || "Abroad"} | Capton Visa Point`}
        description={countryData.seoDescription || `Study in ${countryData?.name || "abroad"} with Capton Visa Point. Expert guidance on top universities, courses, fees, scholarships, visa process, accommodation, and career opportunities. Complete admission support for Indian students.`}
        keywords={countryData.seoKeywords || `study in ${countryData?.name || "abroad"}, universities ${countryData?.name || ""}, study abroad ${countryData?.name || ""}, education consultants, ${countryData?.name || ""} admission, ${countryData?.name || ""} student visa, ${countryData?.name || ""} scholarships, study abroad for Indian students, overseas education, top universities abroad, study abroad 2026, study abroad 2027`}
      />
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={countryData.bannerImage}
            alt={countryData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {isPreferred && (
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-sm font-bold mb-4">
                <FiStar className="text-yellow-200" /> Premier Destination
              </span>
            )}

            <div className="flex items-center gap-5 mb-4">
              <img
                src={getFlagUrl(64)}
                srcSet={`${getFlagUrl(128)} 2x`}
                alt={`${countryData.name} flag`}
                className="w-16 h-12 object-cover rounded-lg shadow-lg border-2 border-white/30"
              />
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white">
                Study in {countryData.name}
              </h1>
            </div>

            <p className="text-xl text-blue-100/90 mb-8 max-w-2xl">
              {countryData.tagline}
            </p>

            <div className="flex flex-wrap gap-3">
              {countryData.highlights.map((h, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-sm font-medium"
                >
                  <FiCheckCircle className="text-blue-400" /> {h}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Facts Bar */}
      <section className="bg-slate-900 py-6">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {quickFacts.map((fact, i) => (
              <div key={i} className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  {fact.icon}
                </div>
                <div>
                  <div className="text-xs text-blue-300 uppercase tracking-wider">
                    {fact.label}
                  </div>
                  <div className="font-bold">{fact.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* About Country */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Why Study in {countryData.name}?
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {countryData.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {countryData.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <FiCheckCircle className="text-blue-700" />
                      </div>
                      <span className="font-medium text-slate-800">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Universities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <FiBookOpen className="text-blue-600" /> Top Universities in{" "}
                  {countryData.name}
                </h2>

                <UniversityMinimalSlider
                  universities={countryData.universities}
                  countryId={country}
                />
              </motion.div>

              {/* Admission Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8"
              >
                <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-50 border border-blue-100">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-2xl mb-6">
                    <FiFileText />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Documents Required
                  </h3>
                  <ul className="space-y-3 text-slate-600">
                    {[
                      "Academic Transcripts",
                      "English Proficiency Test",
                      "Statement of Purpose",
                      "Passport Copy",
                      "Recommendation Letters",
                      "CV/Resume",
                    ].map((doc, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <FiCheckCircle className="text-blue-600 shrink-0" />{" "}
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-pink-50 border border-blue-100">
                  <div className="w-14 h-14 rounded-2xl bg-blue-700 flex items-center justify-center text-white text-2xl mb-6">
                    <FiClock />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Application Timeline
                  </h3>
                  <ul className="space-y-3 text-slate-600">
                    {[
                      "Start 8-12 months before intake",
                      "Shortlist universities (2-3 weeks)",
                      "Prepare documents (3-4 weeks)",
                      "Submit applications (2-4 weeks)",
                      "Wait for admission (4-8 weeks)",
                      "Visa processing (4-8 weeks)",
                    ].map((step, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-200 text-blue-800 text-xs font-bold flex items-center justify-center shrink-0">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Lead Form */}
                <div
                  className={`rounded-2xl overflow-hidden shadow-xl ${isPreferred ? "ring-2 ring-amber-400" : ""}`}
                >
                  <StudyAbroadForm
                    title={`Apply to ${countryData.name}`}
                    subtitle="Get free admission guidance"
                  />
                </div>

                {/* Why Choose Us */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-900 text-white">
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <FiStar className="text-amber-400" /> Why Choose Us?
                  </h4>
                  <ul className="space-y-3 text-blue-100 text-sm">
                    {[
                      "Expert country-specific counselors",
                      "End-to-end application support",
                      "Visa guidance with high success rate",
                      "Pre-departure & post-arrival support",
                      "Scholarship assistance",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <FiCheckCircle className="text-blue-400 shrink-0" />{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Contact */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                  <p className="text-slate-600 mb-4">
                    Need immediate assistance?
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors"
                  >
                    Talk to Expert <FiArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Explore Other Countries - Infinite Marquee Slider */}
      {otherStudyCountries.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
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
                Discover study abroad opportunities in other top destinations
              </p>
            </motion.div>
          </div>

          <InfiniteMarqueeSlider
            items={otherStudyCountries}
            speed={otherStudyCountries.length * 4}
            renderCard={(c) => (
              <Link
                to={`/study-abroad/${c.id}`}
                className={`group block rounded-2xl overflow-hidden bg-white border shadow-lg hover:shadow-2xl transition-all duration-500 h-full ${
                  c.isPreferred
                    ? "border-amber-200 hover:border-amber-400"
                    : "border-slate-200 hover:border-blue-400"
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Country Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={c.bannerImage}
                    alt={`Study in ${c.name}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  {/* Shimmer overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    style={{
                      animation: "study-shimmer 2s ease-in-out infinite",
                    }}
                  />
                  {c.isPreferred && (
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] font-bold">
                      <FiStar className="text-yellow-200" /> Premier
                    </span>
                  )}
                  <div className="absolute bottom-3 left-4">
                    <img
                      src={`https://flagcdn.com/w40/${
                        {
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
                        }[c.id] || "un"
                      }.png`}
                      alt={`${c.name} flag`}
                      className="w-8 h-6 object-cover rounded shadow border border-white/30 inline-block mr-2 align-middle"
                    />
                    <span className="text-white font-bold text-lg drop-shadow-lg align-middle group-hover:translate-x-1 transition-transform duration-300 inline-block">
                      {c.name}
                    </span>
                  </div>
                </div>

                {/* Country Info */}
                <div className="p-4">
                  <p className="text-xs text-slate-500 mb-3 line-clamp-2 leading-relaxed">
                    {c.tagline}
                  </p>
                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <FiGlobe className="text-blue-500 flex-shrink-0" />
                      <span>{c.language}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <FiCalendar className="text-blue-500 flex-shrink-0" />
                      <span>Intakes: {c.intakes.join(", ")}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <FiBookOpen className="text-blue-500 flex-shrink-0" />
                      <span>{c.universities.length} Universities</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {c.highlights.slice(0, 2).map((h, i) => (
                      <span
                        key={i}
                        className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                          c.isPreferred
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-blue-50 text-blue-700 border border-blue-200"
                        }`}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-end">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-500 group-hover:text-blue-700 transition-colors">
                      Explore{" "}
                      <FiArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </Link>
            )}
          />

          {/* Back to Study Abroad */}
          <div className="text-center mt-8">
            <Link
              to="/study-abroad"
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
            >
              <FiArrowLeft /> Back to All Study Abroad Programs
            </Link>
          </div>

          <style>{`
            @keyframes study-shimmer {
              0%, 100% { transform: translateX(-100%); }
              50% { transform: translateX(100%); }
            }
          `}</style>
        </section>
      )}
    </div>
  );
};

export default StudyAbroadCountry;
