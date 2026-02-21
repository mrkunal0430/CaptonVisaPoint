import React, { useState, useEffect } from "react";
import {
  FiBook,
  FiAward,
  FiTarget,
  FiUsers,
  FiCheckCircle,
  FiStar,
  FiTrendingUp,
  FiCalendar,
  FiGlobe,
  FiArrowRight,
  FiMessageSquare,
} from "react-icons/fi";
import SEO from "../components/SEO";
import InquiryForm from "../components/forms/InquiryForm";
import {
  courses,
  learningModes,
  whyChooseUs,
  successStories,
} from "../data/coachingData";

const Coaching = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [stats, setStats] = useState({
    students: 0,
    successRate: 0,
    avgScore: 0,
    trainers: 0,
  });

  // Animated counter effect
  useEffect(() => {
    const targets = {
      students: 50000,
      successRate: 98,
      avgScore: 8.5,
      trainers: 150,
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        students: Math.floor(targets.students * progress),
        successRate: Math.floor(targets.successRate * progress),
        avgScore: (targets.avgScore * progress).toFixed(1),
        trainers: Math.floor(targets.trainers * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setStats(targets);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const filteredCourses =
    activeCategory === "all"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white">
      <SEO
        title="German Language & IELTS Coaching"
        description="Learn German (A1–C1) and prepare for IELTS with expert trainers at Capton Visa Point. In-house language coaching for MBBS students, Ausbildung aspirants, and study abroad candidates. Personalized training, mock tests, and study materials."
        keywords="German language course, IELTS coaching, learn German A1 C1, German language training India, IELTS preparation, language coaching, NEET preparation, MBBS entrance exam, FMGE coaching after MBBS abroad, NEXT exam coaching, IELTS PTE coaching, medical entrance exams India, German language for MBBS, German language for Ausbildung, English medium MBBS abroad, MBBS medium of instruction"
      />
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden">
        {/* Background dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-16 right-12 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-12 left-8 w-56 h-56 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* ── Left: Text Content ── */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/30 px-4 py-1.5 rounded-full mb-5">
                <FiAward className="text-amber-400" size={14} />
                <span className="text-amber-300 text-xs font-bold uppercase tracking-wide">
                  Trusted Language &amp; Test Prep Institute
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-5">
                Language &amp; Test
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
                  Coaching That Works
                </span>
              </h1>

              <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
                Expert-led coaching for{" "}
                <strong className="text-white">German (A1–C1)</strong>,{" "}
                <strong className="text-white">IELTS</strong>, PTE, TOEFL, GRE
                &amp; GMAT. Small batches, certified trainers, and guaranteed
                score improvement.
              </p>

              {/* Course chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  { label: "🗣️ German A1–C1", highlight: true },
                  { label: "🎓 IELTS", highlight: true },
                  { label: "📝 PTE Academic" },
                  { label: "🌐 TOEFL iBT" },
                  { label: "🎯 GRE" },
                  { label: "💼 GMAT" },
                  { label: "🇫🇷 French" },
                ].map((chip) => (
                  <span
                    key={chip.label}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                      chip.highlight
                        ? "bg-amber-500/20 text-amber-300 border-amber-400/40"
                        : "bg-white/10 text-blue-200 border-white/15"
                    }`}
                  >
                    {chip.label}
                  </span>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 mb-10">
                <button
                  onClick={() =>
                    document
                      .getElementById("courses")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-amber-500 hover:bg-amber-600 text-blue-900 font-bold px-7 py-3.5 rounded-xl transition-all hover:shadow-xl hover:shadow-amber-500/30 flex items-center gap-2"
                >
                  Explore Courses <FiArrowRight />
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("trial-class")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold px-7 py-3.5 rounded-xl border border-white/20 transition-all flex items-center gap-2"
                >
                  Book Free Demo Class
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Goethe Certified",
                  "IELTS Official Material",
                  "Max 15 Per Batch",
                  "Online & Offline",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="flex items-center gap-1.5 bg-white/10 text-blue-100 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10"
                  >
                    <FiCheckCircle className="text-amber-400" size={11} />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Right: Stats + Highlights ── */}
            <div className="flex flex-col gap-4">
              {/* Stats 2×2 grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  {
                    icon: <FiUsers className="text-2xl" />,
                    number: `${stats.students.toLocaleString()}+`,
                    label: "Students Trained",
                    accent: "text-amber-400",
                  },
                  {
                    icon: <FiTrendingUp className="text-2xl" />,
                    number: `${stats.successRate}%`,
                    label: "Success Rate",
                    accent: "text-blue-300",
                  },
                  {
                    icon: <FiStar className="text-2xl" />,
                    number: `${stats.avgScore}+`,
                    label: "Avg IELTS Band",
                    accent: "text-amber-400",
                  },
                  {
                    icon: <FiAward className="text-2xl" />,
                    number: `${stats.trainers}+`,
                    label: "Expert Trainers",
                    accent: "text-blue-300",
                  },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-5 text-center hover:bg-white/15 transition-all"
                  >
                    <div className={`${stat.accent} mb-2 flex justify-center`}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white mb-0.5">
                      {stat.number}
                    </div>
                    <div className="text-blue-200 text-xs sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Featured courses highlight */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6">
                <p className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
                  Our Top Programmes
                </p>
                <div className="space-y-2.5">
                  {[
                    {
                      icon: "🗣️",
                      name: "German Language",
                      detail: "A1 → C1 · Goethe Exam Prep",
                      badge: "Most Popular",
                    },
                    {
                      icon: "🎓",
                      name: "IELTS Coaching",
                      detail: "7.5+ Band · 8–12 Weeks",
                      badge: "High Demand",
                    },
                    {
                      icon: "📝",
                      name: "PTE Academic",
                      detail: "79+ Score · AI Mock Tests",
                      badge: null,
                    },
                    {
                      icon: "🎯",
                      name: "GRE / GMAT",
                      detail: "320+ · 700+ · Expert Faculty",
                      badge: null,
                    },
                  ].map((prog) => (
                    <div
                      key={prog.name}
                      className="flex items-center gap-3 bg-white/8 hover:bg-white/15 border border-white/10 rounded-xl px-3 py-2.5 transition-all cursor-default"
                    >
                      <span className="text-xl shrink-0">{prog.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-semibold text-sm leading-tight">
                          {prog.name}
                        </p>
                        <p className="text-blue-300 text-[11px]">
                          {prog.detail}
                        </p>
                      </div>
                      {prog.badge && (
                        <span className="shrink-0 text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded-full">
                          {prog.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick contact */}
              <div className="bg-amber-500/15 border border-amber-400/25 rounded-2xl p-4 flex items-center gap-4">
                <div className="w-11 h-11 bg-amber-500 rounded-xl flex items-center justify-center shrink-0">
                  <FiCalendar className="text-blue-900 text-lg" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-amber-300 text-xs font-semibold">
                    Next Batch Starting Soon
                  </p>
                  <p className="text-white font-bold text-sm">
                    German A1 · IELTS Morning Batch
                  </p>
                </div>
                <button
                  onClick={() =>
                    document
                      .getElementById("trial-class")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="shrink-0 bg-amber-500 hover:bg-amber-600 text-blue-900 font-bold text-xs px-4 py-2 rounded-lg transition-colors"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories Navigation */}
      <section
        id="courses"
        className="sticky top-20 z-30 bg-white shadow-md border-b border-slate-200"
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { id: "all", label: "All Courses", icon: <FiBook /> },
              { id: "english", label: "English Tests", icon: <FiGlobe /> },
              {
                id: "competitive",
                label: "Competitive Exams",
                icon: <FiTarget />,
              },
              {
                id: "language",
                label: "Foreign Languages",
                icon: <FiMessageSquare />,
              },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full font-bold transition-all ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-blue-700 to-blue-700 text-white shadow-lg scale-105"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-slate-100 hover:scale-105"
              >
                {/* Card Header with Gradient */}
                <div
                  className={`bg-gradient-to-r ${course.gradient} p-8 text-white relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 text-9xl opacity-10">
                    {course.icon}
                  </div>
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">{course.icon}</div>
                    <h3 className="text-2xl font-extrabold mb-2">
                      {course.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <FiStar className="fill-yellow-300 text-yellow-300" />
                        <span className="font-bold">{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiUsers />
                        <span>{course.students}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-50 rounded-xl p-4">
                      <div className="text-sm text-slate-500 mb-1">
                        Duration
                      </div>
                      <div className="font-bold text-slate-800">
                        {course.duration}
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <div className="text-sm text-slate-500 mb-1">
                        Target Score
                      </div>
                      <div className="font-bold text-slate-800">
                        {course.targetScore}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-3xl font-extrabold text-blue-700">
                        {course.price}
                      </div>
                      <div className="text-sm text-slate-500">
                        One-time payment
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedCourse(course)}
                    className={`w-full bg-gradient-to-r ${course.gradient} text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Modes */}
      <section className="py-16 bg-gradient-to-br from-slate-100 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
              Multiple Ways to Learn
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Choose the learning mode that fits your schedule and preferences
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {learningModes.map((mode, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
              >
                <div
                  className={`bg-gradient-to-r ${mode.gradient} w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-all`}
                >
                  <mode.icon className="text-4xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {mode.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {mode.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
              Why Choose Capton Visa Point?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We don't just teach, we transform students into confident
              test-takers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 group hover:border-blue-600"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-all">
                    <item.icon size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-blue-700 mb-1">
                      {item.stat}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-slate-800">
              Success Stories
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Real students, real results, real success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="text-6xl mb-4 text-center">{story.image}</div>
                <h4 className="text-xl font-bold text-center mb-2 text-slate-800">
                  {story.name}
                </h4>
                <div className="text-center mb-4">
                  <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm mb-2">
                    {story.score}
                  </div>
                  <div className="text-slate-500 text-sm">
                    {story.course} • {story.country}
                  </div>
                </div>
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(story.rating)].map((_, i) => (
                    <FiStar key={i} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm text-center italic leading-relaxed">
                  "{story.testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trial Class CTA */}
      <section
        id="trial-class"
        className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-white"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-blue-500 p-12 text-white flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                    Book Your Free Demo Class Today!
                  </h3>
                  <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                    Experience our teaching methodology firsthand. No cost, no
                    obligation.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "45-minute live session",
                      "Free study material",
                      "Expert trainer interaction",
                      "Personalized feedback",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <FiCheckCircle className="text-blue-300 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 bg-slate-50">
                  <InquiryForm
                    title="Register for Free Demo"
                    subtitle="Fill in your details and we'll contact you within 24 hours"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full my-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className={`bg-gradient-to-r ${selectedCourse.gradient} p-8 text-white relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 text-9xl opacity-10">
                {selectedCourse.icon}
              </div>
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
                    {selectedCourse.name}
                  </h2>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <FiStar className="fill-yellow-300 text-yellow-300" />
                      <span className="font-bold">{selectedCourse.rating}</span>
                    </div>
                    <span>•</span>
                    <span>{selectedCourse.students} students</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="text-white hover:bg-white/20 p-2 rounded-full transition-all"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                  <FiClock className="text-3xl text-blue-600 mx-auto mb-2" />
                  <div className="text-sm text-slate-600 mb-1">Duration</div>
                  <div className="font-bold text-slate-900">
                    {selectedCourse.duration}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                  <FiTarget className="text-3xl text-blue-700 mx-auto mb-2" />
                  <div className="text-sm text-slate-600 mb-1">
                    Target Score
                  </div>
                  <div className="font-bold text-slate-900">
                    {selectedCourse.targetScore}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                  <div className="text-3xl text-blue-700 mx-auto mb-2">₹</div>
                  <div className="text-sm text-slate-600 mb-1">Course Fee</div>
                  <div className="font-bold text-slate-900">
                    {selectedCourse.price}
                  </div>
                </div>
              </div>

              {/* Modules */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Course Modules
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedCourse.modules.map((module, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 bg-slate-50 rounded-xl p-4"
                    >
                      <div className="text-2xl text-blue-700">
                        <module.icon size={22} />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-slate-900">
                          {module.name}
                        </div>
                        <div className="text-sm text-slate-600">
                          {module.duration}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  What You'll Get
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedCourse.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-blue-50 rounded-lg p-3"
                    >
                      <FiCheckCircle className="text-blue-700 flex-shrink-0 mt-1" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Batch Schedule */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Batch Schedule
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedCourse.batchSchedule.map((batch, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 bg-blue-50 rounded-xl p-4 border border-blue-100"
                    >
                      <FiCalendar className="text-2xl text-blue-700" />
                      <div>
                        <div className="font-bold text-slate-900">
                          {batch.time}
                        </div>
                        <div className="text-sm text-slate-600">
                          {batch.type}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setSelectedCourse(null);
                    document
                      .getElementById("trial-class")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`flex-1 bg-gradient-to-r ${selectedCourse.gradient} text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105`}
                >
                  Enroll Now
                </button>
                <button
                  onClick={() => {
                    setSelectedCourse(null);
                    document
                      .getElementById("trial-class")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex-1 bg-slate-100 text-slate-900 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all"
                >
                  Book Free Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Coaching;
