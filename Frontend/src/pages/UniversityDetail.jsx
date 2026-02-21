import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiMapPin,
  FiCalendar,
  FiCheckCircle,
  FiBookOpen,
  FiAward,
  FiStar,
  FiGlobe,
  FiUsers,
  FiArrowRight,
} from "react-icons/fi";
import SEO from "../components/SEO";
import { StudyAbroadForm } from "../components/forms";
import {
  getCountryById,
  getUniversityById,
  preferredCountries,
} from "../data/studyAbroadData";

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
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-opacity" />
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

const UniversityDetail = () => {
  const { country, university } = useParams();
  const countryData = getCountryById(country);
  const universityData = getUniversityById(country, university);
  const isPreferred = preferredCountries.some((c) => c.id === country);

  if (!countryData || !universityData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            University Not Found
          </h1>
          <p className="text-slate-600 mb-8">
            The university you're looking for doesn't exist.
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

  return (
    <div className="bg-white">
      <SEO
        title={universityData?.name || "University Details"}
        description={`Explore ${universityData?.name || "this university"} — courses, fees, eligibility, campus life, and admission process. Apply with expert guidance from Capton Visa Point.`}
        keywords={`${universityData?.name || "university"}, study abroad university, admission, courses, fees`}
      />
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={universityData.image}
            alt={universityData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/70 text-sm mb-4 flex-wrap">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <Link to="/study-abroad" className="hover:text-white">
                Study Abroad
              </Link>
              <span>/</span>
              <Link
                to={`/study-abroad/${country}`}
                className="hover:text-white"
              >
                {countryData.name}
              </Link>
              <span>/</span>
              <span className="text-white">{universityData.name}</span>
            </div>

            {isPreferred && (
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-sm font-bold mb-4">
                <FiStar className="text-yellow-200" /> Recommended University
              </span>
            )}

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              {universityData.name}
            </h1>
            <p className="text-xl text-blue-100/90 flex items-center gap-2">
              <FiMapPin /> {universityData.location}, {countryData.name}{" "}
              {countryData.flag}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section
        className={`py-4 ${isPreferred ? "bg-gradient-to-r from-amber-500 to-orange-500" : "bg-blue-600"}`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-white">
            <div className="flex items-center gap-2">
              <FiCalendar />
              <span className="text-sm">
                Intakes: <strong>{universityData.intakes.join(", ")}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FiBookOpen />
              <span className="text-sm">
                <strong>{universityData.courses.length}+</strong> Programs
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FiGlobe />
              <span className="text-sm">
                Language: <strong>{countryData.language}</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About University */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  About the University
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {universityData.name} is one of the top institutions in{" "}
                  {countryData.name}, offering world-class education and
                  excellent career opportunities for international students.
                  Located in {universityData.location}, it provides a vibrant
                  academic environment with state-of-the-art facilities and
                  diverse cultural experiences.
                </p>

                {/* Highlights */}
                <div className="grid sm:grid-cols-3 gap-4">
                  {universityData.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className={`p-4 rounded-xl text-center ${
                        isPreferred
                          ? "bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200"
                          : "bg-gradient-to-br from-blue-50 to-blue-50 border border-blue-100"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3 ${
                          isPreferred ? "bg-amber-500" : "bg-blue-600"
                        } text-white`}
                      >
                        <FiAward className="text-xl" />
                      </div>
                      <span className="font-bold text-slate-900">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Courses Offered */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <FiBookOpen className="text-blue-600" /> Courses Offered
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {universityData.courses.map((course, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-300 hover:shadow-md transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                        <FiBookOpen className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{course}</h4>
                        <p className="text-xs text-slate-500">
                          Bachelor's & Master's Available
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Key Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <FiStar className="text-amber-500" /> Key Highlights
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "World-class faculty and research facilities",
                    "Strong industry connections and internships",
                    "Multicultural student community",
                    "Modern campus with excellent amenities",
                    "Career services and placement support",
                    "Student accommodation available",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 border border-blue-100"
                    >
                      <FiCheckCircle className="text-blue-700 text-xl shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Eligibility */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-pink-50 border border-blue-100"
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <FiUsers className="text-blue-700" /> Eligibility &
                  Requirements
                </h2>
                <p className="text-lg text-slate-700 mb-6">
                  {universityData.eligibility}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Academic transcripts",
                    "English proficiency (IELTS/TOEFL)",
                    "Statement of Purpose",
                    "Letters of Recommendation",
                    "Valid Passport",
                    "Application Form",
                  ].map((doc, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-slate-600"
                    >
                      <FiCheckCircle className="text-blue-600" /> {doc}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Intakes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <FiCalendar className="text-blue-600" /> Available Intakes
                </h2>
                <div className="flex flex-wrap gap-4">
                  {universityData.intakes.map((intake, i) => (
                    <div
                      key={i}
                      className={`px-4 sm:px-6 py-4 rounded-xl font-bold text-lg ${
                        isPreferred
                          ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white"
                          : "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
                      }`}
                    >
                      {intake}
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 mt-4 text-sm">
                  * We recommend applying 6-8 months before the intake date
                </p>
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
                    title={`Apply to ${universityData.name.split(" ").slice(0, 3).join(" ")}`}
                    subtitle="Get expert guidance for admission"
                  />
                </div>

                {/* Quick Contact */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-900 text-white text-center">
                  <h4 className="text-lg font-bold mb-2">
                    Need Help Deciding?
                  </h4>
                  <p className="text-blue-200 text-sm mb-4">
                    Our counselors can help you make the right choice
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-50 transition-colors"
                  >
                    Talk to Expert <FiArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Universities */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <FiAward className="text-blue-600" /> Explore More Universities
            </h2>
            <Link
              to={`/study-abroad/${country}`}
              className="text-blue-600 font-bold text-sm hover:underline"
            >
              View All {countryData.name} Universities
            </Link>
          </div>

          <UniversityMinimalSlider
            universities={countryData.universities.filter(
              (u) => u.id !== university,
            )}
            countryId={country}
          />
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              to={`/study-abroad/${country}`}
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
            >
              <FiArrowLeft /> Back to {countryData.name}
            </Link>
            <Link
              to="/study-abroad"
              className="inline-flex items-center gap-2 text-slate-600 font-medium hover:text-blue-600 transition-colors"
            >
              Explore All Countries <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UniversityDetail;
