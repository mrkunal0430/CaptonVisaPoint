import React, { useState, useEffect } from "react";
import {
  FiBook,
  FiAward,
  FiTarget,
  FiUsers,
  FiClock,
  FiCheckCircle,
  FiStar,
  FiTrendingUp,
  FiVideo,
  FiHeadphones,
  FiEdit3,
  FiMessageSquare,
  FiCalendar,
  FiGlobe,
} from "react-icons/fi";
import InquiryForm from "../components/InquiryForm";

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

  const courses = [
    {
      id: "ielts",
      name: "IELTS Coaching",
      category: "english",
      icon: "🎓",
      gradient: "from-blue-500 to-cyan-500",
      rating: 4.9,
      students: "25,000+",
      duration: "8-12 Weeks",
      price: "₹15,000",
      targetScore: "7.5+ Band",
      description:
        "Master the world's most popular English proficiency test with our comprehensive IELTS coaching program.",
      modules: [
        { name: "Listening", icon: <FiHeadphones />, duration: "30 hours" },
        { name: "Reading", icon: <FiBook />, duration: "30 hours" },
        { name: "Writing", icon: <FiEdit3 />, duration: "30 hours" },
        { name: "Speaking", icon: <FiMessageSquare />, duration: "20 hours" },
      ],
      features: [
        "Live Interactive Classes",
        "Daily Practice Sessions",
        "20+ Mock Tests",
        "One-on-One Speaking Practice",
        "Band Score Prediction",
        "Study Material by British Council",
        "Doubt Clearing Sessions",
        "Flexible Batch Timings",
      ],
      batchSchedule: [
        { time: "6:00 AM - 7:30 AM", type: "Morning Batch" },
        { time: "10:00 AM - 12:00 PM", type: "Day Batch" },
        { time: "6:00 PM - 8:00 PM", type: "Evening Batch" },
        { time: "8:00 PM - 10:00 PM", type: "Night Batch" },
      ],
    },
    {
      id: "pte",
      name: "PTE Academic",
      category: "english",
      icon: "📝",
      gradient: "from-purple-500 to-pink-500",
      rating: 4.8,
      students: "15,000+",
      duration: "6-10 Weeks",
      price: "₹18,000",
      targetScore: "79+ Score",
      description:
        "Ace the PTE Academic exam with AI-powered practice and expert guidance for maximum scores.",
      modules: [
        {
          name: "Speaking & Writing",
          icon: <FiMessageSquare />,
          duration: "35 hours",
        },
        { name: "Reading", icon: <FiBook />, duration: "25 hours" },
        { name: "Listening", icon: <FiHeadphones />, duration: "25 hours" },
        { name: "AI Mock Tests", icon: <FiTarget />, duration: "15 hours" },
      ],
      features: [
        "AI-Powered Mock Tests",
        "Real-Time Scoring",
        "Computer-Based Practice",
        "Unlimited Practice Sessions",
        "Template Strategies",
        "Pearson Official Material",
        "24/7 Online Portal Access",
        "Score Enhancement Techniques",
      ],
      batchSchedule: [
        { time: "7:00 AM - 9:00 AM", type: "Morning Batch" },
        { time: "2:00 PM - 4:00 PM", type: "Afternoon Batch" },
        { time: "7:00 PM - 9:00 PM", type: "Evening Batch" },
      ],
    },
    {
      id: "toefl",
      name: "TOEFL iBT",
      category: "english",
      icon: "🌐",
      gradient: "from-green-500 to-teal-500",
      rating: 4.7,
      students: "10,000+",
      duration: "8-12 Weeks",
      price: "₹16,000",
      targetScore: "100+ Score",
      description:
        "Prepare for TOEFL iBT with comprehensive training focused on American English and academic contexts.",
      modules: [
        { name: "Reading", icon: <FiBook />, duration: "25 hours" },
        { name: "Listening", icon: <FiHeadphones />, duration: "25 hours" },
        { name: "Speaking", icon: <FiMessageSquare />, duration: "25 hours" },
        { name: "Writing", icon: <FiEdit3 />, duration: "25 hours" },
      ],
      features: [
        "ETS Official Preparation Material",
        "TPO Practice Tests",
        "Note-Taking Strategies",
        "Academic Vocabulary Building",
        "Integrated Task Practice",
        "Independent Task Training",
        "Score Reporting Guidance",
        "University Application Support",
      ],
      batchSchedule: [
        { time: "8:00 AM - 10:00 AM", type: "Morning Batch" },
        { time: "4:00 PM - 6:00 PM", type: "Evening Batch" },
        { time: "8:00 PM - 10:00 PM", type: "Night Batch" },
      ],
    },
    {
      id: "gre",
      name: "GRE Preparation",
      category: "competitive",
      icon: "🎯",
      gradient: "from-orange-500 to-red-500",
      rating: 4.9,
      students: "8,000+",
      duration: "10-14 Weeks",
      price: "₹25,000",
      targetScore: "320+ Score",
      description:
        "Comprehensive GRE preparation for graduate school admissions with focus on Verbal, Quant, and AWA.",
      modules: [
        { name: "Quantitative", icon: <FiTrendingUp />, duration: "40 hours" },
        { name: "Verbal", icon: <FiBook />, duration: "40 hours" },
        { name: "Analytical Writing", icon: <FiEdit3 />, duration: "20 hours" },
        { name: "Mock Tests", icon: <FiTarget />, duration: "20 hours" },
      ],
      features: [
        "Adaptive Test Strategies",
        "Advanced Math Concepts",
        "Vocabulary Enhancement (3000+ words)",
        "Reading Comprehension Techniques",
        "Argument & Issue Essay Training",
        "Official ETS Material",
        "15+ Full-Length Mock Tests",
        "University Shortlisting Assistance",
      ],
      batchSchedule: [
        { time: "6:00 AM - 8:00 AM", type: "Weekday Morning" },
        { time: "10:00 AM - 2:00 PM", type: "Weekend Batch" },
        { time: "6:00 PM - 8:00 PM", type: "Weekday Evening" },
      ],
    },
    {
      id: "gmat",
      name: "GMAT Preparation",
      category: "competitive",
      icon: "💼",
      gradient: "from-indigo-500 to-purple-500",
      rating: 4.8,
      students: "6,000+",
      duration: "10-14 Weeks",
      price: "₹28,000",
      targetScore: "700+ Score",
      description:
        "Excel in GMAT for top MBA programs with intensive training in Quant, Verbal, and Integrated Reasoning.",
      modules: [
        { name: "Quantitative", icon: <FiTrendingUp />, duration: "35 hours" },
        { name: "Verbal", icon: <FiBook />, duration: "35 hours" },
        {
          name: "Integrated Reasoning",
          icon: <FiTarget />,
          duration: "20 hours",
        },
        { name: "AWA", icon: <FiEdit3 />, duration: "10 hours" },
      ],
      features: [
        "Official GMAT Prep Material",
        "Data Sufficiency Mastery",
        "Critical Reasoning Techniques",
        "Sentence Correction Strategies",
        "IR Data Analysis Training",
        "12+ Adaptive Mock Tests",
        "B-School Application Guidance",
        "Interview Preparation",
      ],
      batchSchedule: [
        { time: "7:00 AM - 9:00 AM", type: "Weekday Morning" },
        { time: "9:00 AM - 1:00 PM", type: "Weekend Intensive" },
        { time: "7:00 PM - 9:00 PM", type: "Weekday Evening" },
      ],
    },
    {
      id: "german",
      name: "German Language (A1-C1)",
      category: "language",
      icon: "🇩🇪",
      gradient: "from-yellow-500 to-amber-600",
      rating: 4.9,
      students: "20,000+",
      duration: "Per Level: 8-12 Weeks",
      price: "₹12,000 per level",
      targetScore: "Goethe Certified",
      description:
        "Learn German from native speakers and certified trainers for study, work, or migration to German-speaking countries.",
      modules: [
        { name: "Grammar", icon: <FiBook />, duration: "30 hours" },
        { name: "Vocabulary", icon: <FiEdit3 />, duration: "25 hours" },
        {
          name: "Conversation",
          icon: <FiMessageSquare />,
          duration: "30 hours",
        },
        { name: "Culture", icon: <FiGlobe />, duration: "15 hours" },
      ],
      features: [
        "Native German Trainers",
        "Goethe Exam Preparation",
        "Interactive Conversation Practice",
        "Cultural Immersion Activities",
        "All Levels: A1, A2, B1, B2, C1",
        "Small Batch Size (Max 12)",
        "German Job Market Insights",
        "Study Material Included",
      ],
      batchSchedule: [
        { time: "6:00 AM - 8:00 AM", type: "Morning Batch" },
        { time: "10:00 AM - 12:00 PM", type: "Day Batch" },
        { time: "6:00 PM - 8:00 PM", type: "Evening Batch" },
        { time: "Sat-Sun 10 AM - 2 PM", type: "Weekend Intensive" },
      ],
    },
    {
      id: "french",
      name: "French Language (A1-C1)",
      category: "language",
      icon: "🇫🇷",
      gradient: "from-blue-600 to-indigo-600",
      rating: 4.7,
      students: "12,000+",
      duration: "Per Level: 8-12 Weeks",
      price: "₹11,000 per level",
      targetScore: "DELF/DALF Certified",
      description:
        "Master French language with expert trainers for study in France, Canada, or French-speaking regions.",
      modules: [
        { name: "Grammar", icon: <FiBook />, duration: "30 hours" },
        { name: "Comprehension", icon: <FiHeadphones />, duration: "25 hours" },
        { name: "Speaking", icon: <FiMessageSquare />, duration: "30 hours" },
        { name: "Writing", icon: <FiEdit3 />, duration: "15 hours" },
      ],
      features: [
        "Native French Trainers",
        "DELF/DALF Exam Prep",
        "TEF Canada Training",
        "Interactive Audio-Visual Materials",
        "All Levels: A1, A2, B1, B2, C1",
        "French Culture & Etiquette",
        "Canada Immigration Focus",
        "Certificate of Completion",
      ],
      batchSchedule: [
        { time: "7:00 AM - 9:00 AM", type: "Morning Batch" },
        { time: "2:00 PM - 4:00 PM", type: "Afternoon Batch" },
        { time: "7:00 PM - 9:00 PM", type: "Evening Batch" },
        { time: "Sat-Sun 11 AM - 3 PM", type: "Weekend Batch" },
      ],
    },
    {
      id: "spanish",
      name: "Spanish Language (A1-B2)",
      category: "language",
      icon: "🇪🇸",
      gradient: "from-red-500 to-yellow-500",
      rating: 4.6,
      students: "8,000+",
      duration: "Per Level: 8 Weeks",
      price: "₹10,000 per level",
      targetScore: "DELE Certified",
      description:
        "Learn Spanish for career opportunities in Spain, Latin America, or enhance your global communication skills.",
      modules: [
        { name: "Grammar & Syntax", icon: <FiBook />, duration: "25 hours" },
        { name: "Listening", icon: <FiHeadphones />, duration: "20 hours" },
        {
          name: "Conversation",
          icon: <FiMessageSquare />,
          duration: "30 hours",
        },
        { name: "Writing", icon: <FiEdit3 />, duration: "15 hours" },
      ],
      features: [
        "Certified Spanish Trainers",
        "DELE Exam Preparation",
        "Latin American & European Spanish",
        "Interactive Group Activities",
        "Levels: A1, A2, B1, B2",
        "Cultural Context Learning",
        "Business Spanish Module",
        "Study Abroad Guidance",
      ],
      batchSchedule: [
        { time: "8:00 AM - 10:00 AM", type: "Morning Batch" },
        { time: "4:00 PM - 6:00 PM", type: "Evening Batch" },
        { time: "Sat-Sun 10 AM - 2 PM", type: "Weekend Batch" },
      ],
    },
  ];

  const learningModes = [
    {
      icon: <FiUsers className="text-4xl" />,
      title: "Classroom Training",
      description: "Face-to-face interactive sessions with expert trainers",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FiVideo className="text-4xl" />,
      title: "Live Online Classes",
      description: "Real-time virtual classes from anywhere in the world",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <FiClock className="text-4xl" />,
      title: "Recorded Sessions",
      description: "Learn at your own pace with recorded lectures",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: <FiTarget className="text-4xl" />,
      title: "One-on-One Coaching",
      description: "Personalized attention with private tutoring",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const whyChooseUs = [
    {
      icon: <FiAward />,
      title: "Certified Expert Trainers",
      description:
        "All our trainers are certified professionals with 10+ years of teaching experience and proven track records.",
      stat: "150+ Trainers",
    },
    {
      icon: <FiBook />,
      title: "Premium Study Material",
      description:
        "World-class study resources from British Council, Pearson, ETS, and other globally recognized organizations.",
      stat: "Official Partners",
    },
    {
      icon: <FiTarget />,
      title: "Guaranteed Score Improvement",
      description:
        "Average score improvement of 1.5 bands in IELTS and 15+ points in PTE with our proven methodology.",
      stat: "98% Success",
    },
    {
      icon: <FiUsers />,
      title: "Small Batch Size",
      description:
        "Maximum 15 students per batch ensuring personalized attention and better learning outcomes.",
      stat: "1:15 Ratio",
    },
    {
      icon: <FiCheckCircle />,
      title: "Unlimited Mock Tests",
      description:
        "Access to unlimited practice tests with detailed performance analysis and score predictions.",
      stat: "20+ Tests",
    },
    {
      icon: <FiClock />,
      title: "Flexible Learning",
      description:
        "Multiple batch timings, weekend classes, and online options to fit your schedule perfectly.",
      stat: "24/7 Access",
    },
  ];

  const successStories = [
    {
      name: "Priya Sharma",
      course: "IELTS",
      score: "8.5 Band",
      image: "👩‍🎓",
      country: "Canada PR",
      testimonial:
        "The personalized attention and regular mock tests helped me achieve my target score. Highly recommended!",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      course: "GRE",
      score: "328/340",
      image: "👨‍🎓",
      country: "USA - Stanford",
      testimonial:
        "Excellent coaching! The quant and verbal strategies were game-changers for my preparation.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      course: "German B2",
      score: "Goethe Certified",
      image: "👩‍💼",
      country: "Germany - Job",
      testimonial:
        "Native German trainers made learning so easy. Got my dream job in Munich!",
      rating: 5,
    },
    {
      name: "Amit Patel",
      course: "PTE Academic",
      score: "85/90",
      image: "👨‍💻",
      country: "Australia PR",
      testimonial:
        "AI-powered mock tests and expert feedback helped me score 85 in my first attempt!",
      rating: 5,
    },
  ];

  const filteredCourses =
    activeCategory === "all"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-24">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-cyan-300 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-6 animate-bounce-slow">
              <FiAward className="text-yellow-300" />
              <span className="text-sm font-semibold">
                India's #1 Test Preparation Institute
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Master Your{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Dream Test
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Expert-led coaching for IELTS, PTE, TOEFL, GRE, GMAT, German,
              French & more. Join 50,000+ successful students worldwide.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() =>
                  document
                    .getElementById("courses")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-indigo-700 transition-all shadow-2xl hover:shadow-yellow-300/50 hover:scale-105"
              >
                Explore Courses
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("trial-class")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-indigo-600 transition-all hover:scale-105"
              >
                Book Free Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-4xl font-extrabold text-yellow-300">
                  {stats.students.toLocaleString()}+
                </div>
                <div className="text-blue-100 text-sm mt-2">
                  Students Trained
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-4xl font-extrabold text-green-300">
                  {stats.successRate}%
                </div>
                <div className="text-blue-100 text-sm mt-2">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-4xl font-extrabold text-pink-300">
                  {stats.avgScore}+
                </div>
                <div className="text-blue-100 text-sm mt-2">
                  Avg IELTS Score
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-4xl font-extrabold text-cyan-300">
                  {stats.trainers}+
                </div>
                <div className="text-blue-100 text-sm mt-2">
                  Expert Trainers
                </div>
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
        <div className="container mx-auto px-6 py-4">
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
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105"
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
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <div className="text-3xl font-extrabold text-indigo-600">
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
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Multiple Ways to Learn
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Choose the learning mode that fits your schedule and preferences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningModes.map((mode, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
              >
                <div
                  className={`bg-gradient-to-r ${mode.gradient} w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-all`}
                >
                  {mode.icon}
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
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Why Choose Capton Visa Point?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We don't just teach, we transform students into confident
              test-takers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 group hover:border-indigo-500"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-all">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-indigo-600 mb-1">
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
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Real students, real results, real success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
              >
                <div className="text-6xl mb-4 text-center">{story.image}</div>
                <h4 className="text-xl font-bold text-center mb-2">
                  {story.name}
                </h4>
                <div className="text-center mb-4">
                  <div className="inline-block bg-yellow-300 text-indigo-900 px-4 py-2 rounded-full font-bold text-sm mb-2">
                    {story.score}
                  </div>
                  <div className="text-indigo-100 text-sm">
                    {story.course} • {story.country}
                  </div>
                </div>
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(story.rating)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="fill-yellow-300 text-yellow-300"
                    />
                  ))}
                </div>
                <p className="text-indigo-100 text-sm text-center italic leading-relaxed">
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
        className="py-16 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-12 text-white flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                    Book Your Free Demo Class Today!
                  </h3>
                  <p className="text-lg text-indigo-100 mb-6 leading-relaxed">
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
                        <FiCheckCircle className="text-green-300 flex-shrink-0" />
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
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                  <FiClock className="text-3xl text-blue-600 mx-auto mb-2" />
                  <div className="text-sm text-slate-600 mb-1">Duration</div>
                  <div className="font-bold text-slate-900">
                    {selectedCourse.duration}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                  <FiTarget className="text-3xl text-green-600 mx-auto mb-2" />
                  <div className="text-sm text-slate-600 mb-1">
                    Target Score
                  </div>
                  <div className="font-bold text-slate-900">
                    {selectedCourse.targetScore}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
                  <div className="text-3xl text-purple-600 mx-auto mb-2">₹</div>
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
                      <div className="text-2xl text-indigo-600">
                        {module.icon}
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
                      className="flex items-start gap-3 bg-green-50 rounded-lg p-3"
                    >
                      <FiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
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
                      className="flex items-center gap-4 bg-indigo-50 rounded-xl p-4 border border-indigo-100"
                    >
                      <FiCalendar className="text-2xl text-indigo-600" />
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
