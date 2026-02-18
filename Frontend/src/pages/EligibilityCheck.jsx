import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import SEO from "../components/SEO";
import {
  FiCheck,
  FiChevronRight,
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiAward,
  FiGlobe,
  FiBookOpen,
  FiBriefcase,
} from "react-icons/fi";

const API_URL = import.meta.env.VITE_API_URL;

const EligibilityCheck = () => {
  const [step, setStep] = useState(1);
  const [preference, setPreference] = useState("");
  const [formData, setFormData] = useState({
    // Step 2 - Ausbildung
    qualification: "",
    age: "",
    germanLevel: "",
    // Step 2 - MBBS Abroad / India
    neetAppeared: "",
    neetScore: "",
    preferredCountry: "",
    preferredState: "",
    // Step 2 - Study Abroad
    highestQualification: "",
    languageProficiency: "",
    languageTest: "",
    // Step 2 - Jobs
    preferredSector: "",
    // Step 3 - Personal Details
    name: "",
    email: "",
    phone: "",
    city: "",
  });
  const [isChecking, setIsChecking] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const preferences = [
    {
      id: "ausbildung",
      label: "Ausbildung in Germany",
      icon: FiAward,
      color: "blue",
    },
    { id: "mbbs-abroad", label: "MBBS Abroad", icon: FiGlobe, color: "green" },
    {
      id: "mbbs-india",
      label: "MBBS India",
      icon: FiBookOpen,
      color: "purple",
    },
    { id: "study-abroad", label: "Study Abroad", icon: FiGlobe, color: "cyan" },
    { id: "jobs", label: "Jobs / Work", icon: FiBriefcase, color: "orange" },
  ];

  const countries = [
    "Russia",
    "Georgia",
    "Uzbekistan",
    "Kazakhstan",
    "Kyrgyzstan",
    "Tajikistan",
    "Germany",
    "France",
    "UK",
    "USA",
    "Canada",
    "Australia",
    "UAE",
    "Cyprus",
  ];

  const indianStates = [
    "Andhra Pradesh",
    "Karnataka",
    "Kerala",
    "Tamil Nadu",
    "Maharashtra",
    "Delhi",
    "Gujarat",
    "Rajasthan",
    "Uttar Pradesh",
    "West Bengal",
    "Others",
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePreferenceSelect = (id) => {
    setPreference(id);
    setStep(2);
  };

  const handleStep2Complete = () => {
    setStep(3);
  };

  const calculateScore = () => {
    let baseScore = 60;

    if (preference === "ausbildung") {
      if (formData.germanLevel === "B2") baseScore += 25;
      else if (formData.germanLevel === "B1") baseScore += 20;
      else if (formData.germanLevel === "A2") baseScore += 10;
      if (
        formData.qualification === "graduation" ||
        formData.qualification === "diploma"
      )
        baseScore += 10;
    } else if (preference === "mbbs-abroad" || preference === "mbbs-india") {
      if (formData.neetAppeared === "yes" && parseInt(formData.neetScore) > 500)
        baseScore += 25;
      else if (
        formData.neetAppeared === "yes" &&
        parseInt(formData.neetScore) > 400
      )
        baseScore += 15;
      else if (formData.neetAppeared === "yes") baseScore += 10;
    } else if (preference === "study-abroad") {
      if (formData.languageProficiency) baseScore += 15;
      if (formData.highestQualification === "masters") baseScore += 15;
      else if (formData.highestQualification === "bachelors") baseScore += 10;
    } else if (preference === "jobs") {
      if (formData.highestQualification) baseScore += 15;
    }

    return Math.min(baseScore, 95);
  };

  const handleSubmit = async () => {
    setIsChecking(true);

    // Calculate score first
    const targetScore = calculateScore();
    let currentScore = 0;

    // Animate score meter
    const interval = setInterval(() => {
      currentScore += 2;
      setScore(currentScore);

      if (currentScore >= targetScore) {
        clearInterval(interval);
        setScore(targetScore);
      }
    }, 30);

    // Submit to backend
    try {
      await axios.post(`${API_URL}/eligibility`, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        preference,
        qualification: formData.qualification,
        age: formData.age,
        germanLevel: formData.germanLevel,
        neetAppeared: formData.neetAppeared,
        neetScore: formData.neetScore,
        preferredCountry: formData.preferredCountry,
        preferredState: formData.preferredState,
        highestQualification: formData.highestQualification,
        languageTest: formData.languageTest,
        preferredSector: formData.preferredSector,
        score: targetScore,
      });
    } catch (error) {
      console.error("Error submitting eligibility:", error);
    }

    // Wait for animation to complete then show result
    setTimeout(() => {
      clearInterval(interval);
      setScore(targetScore);
      setIsChecking(false);
      setShowResult(true);
    }, 2000);
  };

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          What's Your Goal?
        </h2>
        <p className="text-slate-500">Select your preference to get started</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {preferences.map((pref) => (
          <button
            key={pref.id}
            onClick={() => handlePreferenceSelect(pref.id)}
            className={`group p-6 rounded-2xl border-2 text-left transition-all hover:shadow-lg hover:-translate-y-1 ${
              preference === pref.id
                ? "border-blue-500 bg-blue-50"
                : "border-slate-200 bg-white hover:border-blue-300"
            }`}
          >
            <div
              className={`w-12 h-12 rounded-xl bg-${pref.color}-100 flex items-center justify-center mb-4`}
            >
              <pref.icon className={`text-xl text-${pref.color}-600`} />
            </div>
            <h3 className="font-bold text-slate-800 mb-1">{pref.label}</h3>
            <p className="text-sm text-slate-500">Check your eligibility</p>
          </button>
        ))}
      </div>
    </motion.div>
  );

  const renderStep2Ausbildung = () => (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Qualification
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {["10th", "12th", "Diploma", "Graduation", "Others"].map((qual) => (
            <button
              key={qual}
              onClick={() =>
                handleInputChange("qualification", qual.toLowerCase())
              }
              className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                formData.qualification === qual.toLowerCase()
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-slate-200 hover:border-blue-300"
              }`}
            >
              {qual}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Age
        </label>
        <input
          type="number"
          value={formData.age}
          onChange={(e) => handleInputChange("age", e.target.value)}
          placeholder="Enter your age"
          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          German Language Level
        </label>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
          {["A1", "A2", "B1", "B2", "Not Started"].map((level) => (
            <button
              key={level}
              onClick={() => handleInputChange("germanLevel", level)}
              className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                formData.germanLevel === level
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-slate-200 hover:border-blue-300"
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep2MbbsAbroad = () => (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Have you appeared for NEET?
        </label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { id: "yes", label: "Yes" },
            { id: "no", label: "No" },
            { id: "waiting", label: "Result Waiting" },
          ].map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleInputChange("neetAppeared", opt.id)}
              className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                formData.neetAppeared === opt.id
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-slate-200 hover:border-blue-300"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {formData.neetAppeared === "yes" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
        >
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            NEET Score
          </label>
          <input
            type="number"
            value={formData.neetScore}
            onChange={(e) => handleInputChange("neetScore", e.target.value)}
            placeholder="Enter your NEET score"
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
          />
        </motion.div>
      )}

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Preferred Country
        </label>
        <select
          value={formData.preferredCountry}
          onChange={(e) =>
            handleInputChange("preferredCountry", e.target.value)
          }
          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors bg-white"
        >
          <option value="">Select a country</option>
          {countries.slice(0, 6).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  const renderStep2MbbsIndia = () => (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Have you appeared for NEET?
        </label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { id: "yes", label: "Yes" },
            { id: "no", label: "No" },
            { id: "waiting", label: "Result Waiting" },
          ].map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleInputChange("neetAppeared", opt.id)}
              className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                formData.neetAppeared === opt.id
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-slate-200 hover:border-blue-300"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {formData.neetAppeared === "yes" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
        >
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            NEET Score
          </label>
          <input
            type="number"
            value={formData.neetScore}
            onChange={(e) => handleInputChange("neetScore", e.target.value)}
            placeholder="Enter your NEET score"
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
          />
        </motion.div>
      )}

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Preferred State
        </label>
        <select
          value={formData.preferredState}
          onChange={(e) => handleInputChange("preferredState", e.target.value)}
          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors bg-white"
        >
          <option value="">Select a state</option>
          {indianStates.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  const renderStep2StudyAbroad = () => (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Highest Qualification
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {["10th", "12th", "Diploma", "Bachelors", "Masters"].map((qual) => (
            <button
              key={qual}
              onClick={() =>
                handleInputChange("highestQualification", qual.toLowerCase())
              }
              className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                formData.highestQualification === qual.toLowerCase()
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-slate-200 hover:border-blue-300"
              }`}
            >
              {qual}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Language Proficiency Test
        </label>
        <select
          value={formData.languageTest}
          onChange={(e) => handleInputChange("languageTest", e.target.value)}
          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors bg-white"
        >
          <option value="">Select test</option>
          <optgroup label="English">
            <option value="IELTS">IELTS</option>
            <option value="TOEFL">TOEFL</option>
            <option value="PTE-Academic">PTE Academic</option>
            <option value="PTE-Core">PTE Core</option>
            <option value="CELPIP">CELPIP</option>
            <option value="OET">OET</option>
          </optgroup>
          <optgroup label="German">
            <option value="German-A1">German A1</option>
            <option value="German-A2">German A2</option>
            <option value="German-B1">German B1</option>
            <option value="German-B2">German B2</option>
          </optgroup>
          <optgroup label="French">
            <option value="French-A1">French A1</option>
            <option value="French-B1">French B1</option>
          </optgroup>
          <option value="none">Not yet taken</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Age
        </label>
        <input
          type="number"
          value={formData.age}
          onChange={(e) => handleInputChange("age", e.target.value)}
          placeholder="Enter your age"
          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Preferred Country
        </label>
        <select
          value={formData.preferredCountry}
          onChange={(e) =>
            handleInputChange("preferredCountry", e.target.value)
          }
          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors bg-white"
        >
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  const renderStep2Jobs = () => (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Highest Qualification
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {["10th", "12th", "Diploma", "Bachelors", "Masters"].map((qual) => (
            <button
              key={qual}
              onClick={() =>
                handleInputChange("highestQualification", qual.toLowerCase())
              }
              className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                formData.highestQualification === qual.toLowerCase()
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-slate-200 hover:border-blue-300"
              }`}
            >
              {qual}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Preferred Sector
        </label>
        <div className="grid grid-cols-2 gap-3">
          {["Health Care", "IT", "Hospitality", "Others"].map((sector) => (
            <button
              key={sector}
              onClick={() =>
                handleInputChange("preferredSector", sector.toLowerCase())
              }
              className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                formData.preferredSector === sector.toLowerCase()
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-slate-200 hover:border-blue-300"
              }`}
            >
              {sector}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Preferred Country
        </label>
        <select
          value={formData.preferredCountry}
          onChange={(e) =>
            handleInputChange("preferredCountry", e.target.value)
          }
          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors bg-white"
        >
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Age
        </label>
        <input
          type="number"
          value={formData.age}
          onChange={(e) => handleInputChange("age", e.target.value)}
          placeholder="Enter your age"
          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          {preference === "ausbildung" && "Ausbildung Details"}
          {preference === "mbbs-abroad" && "MBBS Abroad Details"}
          {preference === "mbbs-india" && "MBBS India Details"}
          {preference === "study-abroad" && "Study Abroad Details"}
          {preference === "jobs" && "Job / Work Details"}
        </h2>
        <p className="text-slate-500">
          Fill in your details to check eligibility
        </p>
      </div>

      {preference === "ausbildung" && renderStep2Ausbildung()}
      {preference === "mbbs-abroad" && renderStep2MbbsAbroad()}
      {preference === "mbbs-india" && renderStep2MbbsIndia()}
      {preference === "study-abroad" && renderStep2StudyAbroad()}
      {preference === "jobs" && renderStep2Jobs()}

      <button
        onClick={handleStep2Complete}
        className="w-full mt-8 py-4 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
      >
        Continue <FiChevronRight />
      </button>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FiUser className="text-2xl text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Almost There!
        </h2>
        <p className="text-slate-500">
          Enter your details to see your eligibility score
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Full Name
          </label>
          <div className="relative">
            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Enter your full name"
              className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Email
          </label>
          <div className="relative">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter your email"
              className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Phone Number
          </label>
          <div className="relative">
            <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="Enter your phone number"
              className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            City
          </label>
          <div className="relative">
            <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              placeholder="Enter your city"
              className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!formData.name || !formData.email || !formData.phone}
        className="w-full mt-8 py-4 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        Check My Eligibility <FiCheck />
      </button>
    </motion.div>
  );

  const renderChecking = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-12"
    >
      <div className="relative w-48 h-48 mx-auto mb-8">
        {/* Circular Progress */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="96"
            cy="96"
            r="88"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="12"
          />
          <circle
            cx="96"
            cy="96"
            r="88"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={553}
            strokeDashoffset={553 - (553 * score) / 100}
            className="transition-all duration-100"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-5xl font-bold text-slate-800">{score}%</span>
          <span className="text-sm text-slate-500">Score</span>
        </div>
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">
        Analyzing Your Profile...
      </h3>
      <p className="text-slate-500">
        Please wait while we check your eligibility
      </p>
    </motion.div>
  );

  const renderResult = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-8"
    >
      <div className="relative w-48 h-48 mx-auto mb-8">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="96"
            cy="96"
            r="88"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="12"
          />
          <circle
            cx="96"
            cy="96"
            r="88"
            fill="none"
            stroke={
              score >= 70 ? "#22c55e" : score >= 50 ? "#eab308" : "#ef4444"
            }
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={553}
            strokeDashoffset={553 - (553 * score) / 100}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-5xl font-bold text-slate-800">{score}%</span>
          <span
            className={`text-sm font-semibold ${
              score >= 70
                ? "text-blue-700"
                : score >= 50
                  ? "text-yellow-600"
                  : "text-red-600"
            }`}
          >
            {score >= 70 ? "Excellent" : score >= 50 ? "Good" : "Needs Work"}
          </span>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-800 mb-3">
        {score >= 70
          ? "Great News! You're Highly Eligible! 🎉"
          : score >= 50
            ? "You Have Good Chances!"
            : "Let's Improve Your Profile"}
      </h3>
      <p className="text-slate-500 mb-8 max-w-md mx-auto">
        {score >= 70
          ? "Based on your profile, you have excellent chances. Our experts will contact you with personalized guidance."
          : score >= 50
            ? "Your profile shows promise. Our counselors can help you maximize your chances."
            : "Don't worry! Our team can guide you on improving your eligibility."}
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
        <p className="text-blue-800 font-medium">
          ✓ Our team will contact you within 24 hours at {formData.phone}
        </p>
      </div>

      <button
        onClick={() => {
          setStep(1);
          setPreference("");
          setFormData({
            qualification: "",
            age: "",
            germanLevel: "",
            neetAppeared: "",
            neetScore: "",
            preferredCountry: "",
            preferredState: "",
            highestQualification: "",
            languageProficiency: "",
            languageTest: "",
            preferredSector: "",
            name: "",
            email: "",
            phone: "",
            city: "",
          });
          setShowResult(false);
          setScore(0);
        }}
        className="text-blue-500 font-semibold hover:underline"
      >
        Check Another Profile →
      </button>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <SEO
        title="Free Eligibility Check"
        description="Check your eligibility for MBBS abroad, MBBS in India, Ausbildung in Germany, study abroad programs, and immigration. Free assessment from Capton Visa Point experts — NEET score evaluation, MBBS admission guidance, and personalized counseling for 2026-2027 intake."
        keywords="eligibility check, free assessment, study abroad eligibility, MBBS eligibility, MBBS abroad eligibility, MBBS admission enquiry, MBBS admission help, NEET score for MBBS, NEET qualified MBBS admission, NEET failed MBBS options, low NEET score MBBS options, best MBBS option for low NEET score, MBBS for average NEET marks, MBBS admission consultants, MBBS counseling experts, MBBS career counseling, medical admission guidance, MBBS abroad eligibility criteria, MBBS abroad admission requirements, Ausbildung eligibility, immigration assessment, MBBS admission help India, MBBS admission enquiry India, MBBS admission helpline, apply MBBS online"
      />
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur text-white text-sm font-semibold rounded-full mb-4">
              Free Assessment
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Check Your Eligibility
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Get a personalized eligibility score and expert guidance for your
              international journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="bg-white border-b border-slate-100 sticky top-20 z-30">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    step >= s
                      ? "bg-blue-500 text-white"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {step > s ? <FiCheck /> : s}
                </div>
                <span
                  className={`hidden sm:block text-sm font-medium ${
                    step >= s ? "text-blue-600" : "text-slate-400"
                  }`}
                >
                  {s === 1 && "Preference"}
                  {s === 2 && "Details"}
                  {s === 3 && "Contact"}
                </span>
                {s < 3 && (
                  <div
                    className={`w-12 sm:w-20 h-1 rounded-full ${
                      step > s ? "bg-blue-500" : "bg-slate-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="container mx-auto px-4 sm:px-6 py-10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <AnimatePresence mode="wait">
              {isChecking && renderChecking()}
              {showResult && renderResult()}
              {!isChecking && !showResult && step === 1 && renderStep1()}
              {!isChecking && !showResult && step === 2 && renderStep2()}
              {!isChecking && !showResult && step === 3 && renderStep3()}
            </AnimatePresence>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 text-center">
            <p className="text-slate-400 text-sm mb-4">
              Trusted by 5000+ students
            </p>
            <div className="flex items-center justify-center gap-6 text-slate-400">
              <span className="flex items-center gap-1 text-xs">
                <FiCheck className="text-blue-600" /> 100% Free
              </span>
              <span className="flex items-center gap-1 text-xs">
                <FiCheck className="text-blue-600" /> Instant Results
              </span>
              <span className="flex items-center gap-1 text-xs">
                <FiCheck className="text-blue-600" /> Expert Review
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityCheck;
