import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCheck,
  FiChevronRight,
  FiUser,
  FiPhone,
  FiMail,
  FiSend,
  FiX,
  FiRefreshCw,
} from "react-icons/fi";
import { FaGraduationCap, FaStethoscope } from "react-icons/fa";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

// Quiz questions with scoring
const questions = [
  {
    id: 1,
    question: "What was your Class 12 PCB percentage?",
    options: [
      { label: "85% & above", value: "85% & above", score: 2.5 },
      { label: "75% – 84%", value: "75% – 84%", score: 2.0 },
      { label: "60% – 74%", value: "60% – 74%", score: 1.0 },
      { label: "Below 60%", value: "Below 60%", score: 0.5 },
    ],
  },
  {
    id: 2,
    question: "What is your NEET status?",
    options: [
      { label: "NEET qualified with good score", value: "NEET qualified with good score", score: 2.5 },
      { label: "NEET qualified (average / borderline)", value: "NEET qualified (average / borderline)", score: 2.0 },
      { label: "Appeared but not qualified", value: "Appeared but not qualified", score: 1.0 },
      { label: "Not appeared yet", value: "Not appeared yet", score: 0.5 },
    ],
  },
  {
    id: 3,
    question: "What is your annual budget for MBBS Abroad? (Tuition + Living)",
    options: [
      { label: "₹6 Lakhs & above per year", value: "₹6 Lakhs & above per year", score: 2.5 },
      { label: "₹5 – 6 Lakhs per year", value: "₹5 – 6 Lakhs per year", score: 2.0 },
      { label: "₹4 – 5 Lakhs per year", value: "₹4 – 5 Lakhs per year", score: 1.0 },
      { label: "Below ₹4 Lakhs per year", value: "Below ₹4 Lakhs per year", score: 0.5 },
    ],
  },
  {
    id: 4,
    question: "How ready are you to study & live abroad for 5–6 years?",
    options: [
      { label: "Fully ready with family & financial support", value: "Fully ready with family & financial support", score: 2.5 },
      { label: "Ready but need guidance", value: "Ready but need guidance", score: 2.0 },
      { label: "Interested but unsure", value: "Interested but unsure", score: 1.0 },
      { label: "Not comfortable yet", value: "Not comfortable yet", score: 0.5 },
    ],
  },
];

// Get eligibility category based on score
const getEligibilityCategory = (score) => {
  if (score >= 8) return "Highly Eligible";
  if (score >= 6) return "Eligible with Guidance";
  if (score >= 4) return "Borderline";
  return "Not Eligible Yet";
};

// Get eligibility message based on category
const getEligibilityMessage = (category) => {
  switch (category) {
    case "Highly Eligible":
      return "Excellent! You have a strong profile for MBBS abroad. Top universities in Russia, Kazakhstan, and Philippines await you!";
    case "Eligible with Guidance":
      return "Great potential! With proper guidance, you can secure admission in reputed medical universities abroad.";
    case "Borderline":
      return "You may need to strengthen your profile. Our experts can help identify the best options for you.";
    case "Not Eligible Yet":
      return "Don't worry! Our counsellors can guide you on improving your eligibility and exploring alternative pathways.";
    default:
      return "";
  }
};

// Get color scheme based on category
const getCategoryColor = (category) => {
  switch (category) {
    case "Highly Eligible":
      return { bg: "bg-green-50", text: "text-green-600", border: "border-green-200", ring: "ring-green-500" };
    case "Eligible with Guidance":
      return { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", ring: "ring-blue-500" };
    case "Borderline":
      return { bg: "bg-yellow-50", text: "text-yellow-600", border: "border-yellow-200", ring: "ring-yellow-500" };
    case "Not Eligible Yet":
      return { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", ring: "ring-orange-500" };
    default:
      return { bg: "bg-slate-50", text: "text-slate-600", border: "border-slate-200", ring: "ring-slate-500" };
  }
};

const EligibilityQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0); // 0-3 for questions, 4 for result, 5 for form
  const [answers, setAnswers] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
  });
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const progress = ((currentStep + 1) / 4) * 100;

  const handleOptionSelect = (questionId, option) => {
    const newAnswers = { ...answers, [questionId]: option };
    setAnswers(newAnswers);

    // Calculate new total score
    const newScore = Object.values(newAnswers).reduce((sum, ans) => sum + ans.score, 0);
    setTotalScore(newScore);

    // Auto advance after a short delay
    setTimeout(() => {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      } else {
        setCurrentStep(4); // Go to result screen
      }
    }, 300);
  };

  const eligibilityCategory = getEligibilityCategory(totalScore);
  const eligibilityMessage = getEligibilityMessage(eligibilityCategory);
  const categoryColors = getCategoryColor(eligibilityCategory);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!consent) {
      setStatus({ type: "error", message: "Please provide consent to continue." });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const payload = {
        name: formData.name,
        whatsapp: formData.whatsapp,
        email: formData.email,
        pcbScore: answers[1]?.value,
        neetStatus: answers[2]?.value,
        annualBudget: answers[3]?.value,
        readiness: answers[4]?.value,
        totalScore,
        eligibilityCategory,
        consentGiven: consent,
      };

      const response = await axios.post(`${API_URL}/eligibility`, payload);

      if (response.data.success) {
        setSubmitted(true);
        setStatus({
          type: "success",
          message: "Your details have been submitted. Our MBBS expert will contact you soon!",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({
        type: "error",
        message: error.response?.data?.message || "Failed to submit. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setTotalScore(0);
    setShowForm(false);
    setFormData({ name: "", whatsapp: "", email: "" });
    setConsent(false);
    setSubmitted(false);
    setStatus({ type: "", message: "" });
  };

  // Animation variants
  const slideVariants = {
    enter: { x: 50, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <FaStethoscope className="text-2xl" />
          <h2 className="text-xl sm:text-2xl font-bold">MBBS Abroad Eligibility Check</h2>
        </div>
        <p className="text-green-100 text-sm sm:text-base">
          Answer 4 quick questions to check your eligibility score
        </p>
      </div>

      {/* Progress Bar */}
      {currentStep < 4 && (
        <div className="px-6 pt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-500">Question {currentStep + 1} of 4</span>
            <span className="text-sm font-semibold text-green-600">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      )}

      {/* Content Area */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          {/* Questions */}
          {currentStep < 4 && (
            <motion.div
              key={`question-${currentStep}`}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-6">
                {questions[currentStep].question}
              </h3>

              <div className="space-y-3">
                {questions[currentStep].options.map((option, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => handleOptionSelect(questions[currentStep].id, option)}
                    className={`w-full p-4 text-left rounded-xl border-2 transition-all flex items-center justify-between group ${
                      answers[questions[currentStep].id]?.value === option.value
                        ? "border-green-500 bg-green-50"
                        : "border-slate-200 hover:border-green-300 hover:bg-green-50/50"
                    }`}
                  >
                    <span className="text-slate-700 font-medium">{option.label}</span>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        answers[questions[currentStep].id]?.value === option.value
                          ? "border-green-500 bg-green-500"
                          : "border-slate-300 group-hover:border-green-400"
                      }`}
                    >
                      {answers[questions[currentStep].id]?.value === option.value && (
                        <FiCheck className="text-white text-sm" />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Result Screen */}
          {currentStep === 4 && !showForm && (
            <motion.div
              key="result"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              {/* Score Display */}
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full ${categoryColors.bg} ${categoryColors.border} border-4`}>
                  <div className="text-center">
                    <span className={`text-4xl font-bold ${categoryColors.text}`}>{totalScore}</span>
                    <span className={`text-lg ${categoryColors.text}`}>/10</span>
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <div className={`inline-block px-6 py-2 rounded-full ${categoryColors.bg} ${categoryColors.border} border mb-4`}>
                <span className={`font-semibold ${categoryColors.text}`}>{eligibilityCategory}</span>
              </div>

              {/* Message */}
              <p className="text-slate-600 mb-8 max-w-md mx-auto">
                {eligibilityMessage}
              </p>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowForm(true)}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg shadow-green-500/30 flex items-center justify-center gap-2 mx-auto"
              >
                <FaGraduationCap className="text-lg" />
                Talk to MBBS Expert
                <FiChevronRight />
              </motion.button>

              <button
                onClick={resetQuiz}
                className="mt-4 text-slate-500 hover:text-slate-700 text-sm flex items-center gap-1 mx-auto"
              >
                <FiRefreshCw className="text-sm" />
                Retake Quiz
              </button>
            </motion.div>
          )}

          {/* Lead Form */}
          {showForm && !submitted && (
            <motion.div
              key="form"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {/* Score Summary */}
              <div className={`flex items-center gap-4 p-4 rounded-xl ${categoryColors.bg} ${categoryColors.border} border mb-6`}>
                <div className={`w-16 h-16 rounded-full bg-white flex items-center justify-center border-2 ${categoryColors.border}`}>
                  <span className={`text-xl font-bold ${categoryColors.text}`}>{totalScore}/10</span>
                </div>
                <div>
                  <span className={`font-semibold ${categoryColors.text}`}>{eligibilityCategory}</span>
                  <p className="text-sm text-slate-600">Complete the form below to connect with our MBBS expert</p>
                </div>
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`mb-4 p-3 rounded-lg flex items-center gap-2 ${
                    status.type === "success"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {status.type === "success" ? <FiCheck /> : <FiX />}
                  <span className="text-sm">{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Sentence-style Form */}
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                  <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                    My name is{" "}
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      placeholder="Your Name"
                      className="inline-block w-40 sm:w-48 px-3 py-1.5 bg-white border-b-2 border-green-400 focus:border-green-600 outline-none text-green-700 font-medium rounded-t-md mx-1"
                    />
                    , my WhatsApp number is{" "}
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleFormChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="inline-block w-40 sm:w-44 px-3 py-1.5 bg-white border-b-2 border-green-400 focus:border-green-600 outline-none text-green-700 font-medium rounded-t-md mx-1"
                    />
                    , and my email id is{" "}
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      placeholder="your@email.com"
                      className="inline-block w-44 sm:w-52 px-3 py-1.5 bg-white border-b-2 border-green-400 focus:border-green-600 outline-none text-green-700 font-medium rounded-t-md mx-1"
                    />
                    .
                  </p>

                  <p className="text-slate-700 leading-relaxed mt-4 text-sm sm:text-base">
                    I scored{" "}
                    <span className="inline-block px-3 py-1.5 bg-white border border-slate-200 rounded-md text-green-700 font-medium mx-1">
                      {answers[1]?.value || "PCB Score"}
                    </span>
                    {" "}in Class 12, my NEET status is{" "}
                    <span className="inline-block px-3 py-1.5 bg-white border border-slate-200 rounded-md text-green-700 font-medium mx-1">
                      {answers[2]?.value || "NEET Status"}
                    </span>
                    , my annual budget for MBBS abroad is{" "}
                    <span className="inline-block px-3 py-1.5 bg-white border border-slate-200 rounded-md text-green-700 font-medium mx-1">
                      {answers[3]?.value || "Budget"}
                    </span>
                    , and I am{" "}
                    <span className="inline-block px-3 py-1.5 bg-white border border-slate-200 rounded-md text-green-700 font-medium mx-1">
                      {answers[4]?.value || "Readiness"}
                    </span>
                    {" "}to study abroad for 5–6 years.
                  </p>
                </div>

                {/* Consent Checkbox */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative mt-0.5">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                        consent
                          ? "bg-green-500 border-green-500"
                          : "border-slate-300 group-hover:border-green-400"
                      }`}
                    >
                      {consent && <FiCheck className="text-white text-sm" />}
                    </div>
                  </div>
                  <span className="text-sm text-slate-600">
                    I agree to be contacted for MBBS abroad counselling.
                  </span>
                </label>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={loading || !consent}
                  className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg shadow-green-500/30 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit & Connect with Expert
                      <FiSend />
                    </>
                  )}
                </motion.button>

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="w-full text-slate-500 hover:text-slate-700 text-sm py-2"
                >
                  Back to Results
                </button>
              </form>
            </motion.div>
          )}

          {/* Success Screen */}
          {submitted && (
            <motion.div
              key="success"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiCheck className="text-4xl text-green-600" />
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-3">
                Thank You, {formData.name}!
              </h3>

              <p className="text-slate-600 mb-6 max-w-md mx-auto">
                Your eligibility check has been submitted successfully. Our MBBS expert will contact you on <strong>{formData.whatsapp}</strong> within 24 hours.
              </p>

              <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl ${categoryColors.bg} ${categoryColors.border} border`}>
                <span className={`text-2xl font-bold ${categoryColors.text}`}>{totalScore}/10</span>
                <span className={`font-medium ${categoryColors.text}`}>{eligibilityCategory}</span>
              </div>

              <button
                onClick={resetQuiz}
                className="mt-8 text-green-600 hover:text-green-700 font-medium flex items-center gap-2 mx-auto"
              >
                <FiRefreshCw />
                Check Another Profile
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EligibilityQuiz;
