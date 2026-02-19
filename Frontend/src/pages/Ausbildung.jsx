import React, { useState } from "react";
import {
  FiCheckCircle,
  FiDollarSign,
  FiBriefcase,
  FiAward,
  FiBook,
  FiTrendingUp,
  FiGlobe,
  FiUsers,
  FiClock,
  FiMapPin,
  FiStar,
  FiTarget,
  FiFileText,
  FiCalendar,
  FiArrowRight,
  FiHeart,
  FiShield,
  FiHome,
} from "react-icons/fi";
import SEO from "../components/SEO";
import { WorkAbroadForm } from "../components/forms";

const Ausbildung = () => {
  const [selectedSector, setSelectedSector] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const reasons = [
    {
      icon: <FiDollarSign />,
      title: "Earn While You Learn",
      description: "Get monthly stipend €900-€1,300 that increases each year",
      gradient: "from-blue-600 to-blue-600",
    },
    {
      icon: <FiAward />,
      title: "Zero Tuition Fees",
      description:
        "Completely free education - companies pay for your training",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: <FiBriefcase />,
      title: "85% Job Placement",
      description: "Most trainees get hired by their training company",
      gradient: "from-blue-600 to-pink-500",
    },
    {
      icon: <FiGlobe />,
      title: "Work in Top Companies",
      description: "Train at BMW, Bosch, Lufthansa, Siemens & more",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <FiTrendingUp />,
      title: "High Earning Potential",
      description: "Post-completion salary €2,500-€4,000+ per month",
      gradient: "from-blue-600 to-blue-600",
    },
    {
      icon: <FiShield />,
      title: "Permanent Residency Path",
      description: "Direct pathway to PR and German citizenship",
      gradient: "from-yellow-500 to-amber-500",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Work at Real Company",
      description: "3-4 days per week practical training at German companies",
      icon: <FiBriefcase />,
      color: "blue",
    },
    {
      step: "02",
      title: "Attend Vocational School",
      description: "1-2 days per week theoretical education",
      icon: <FiBook />,
      color: "purple",
    },
    {
      step: "03",
      title: "Earn Monthly Stipend",
      description: "Receive salary that increases each training year",
      icon: <FiDollarSign />,
      color: "green",
    },
    {
      step: "04",
      title: "Get Hired Permanently",
      description: "85% trainees offered full-time positions",
      icon: <FiAward />,
      color: "orange",
    },
  ];

  const sectors = [
    {
      id: "healthcare",
      title: "Healthcare & Nursing",
      icon: "🏥",
      description:
        "Train in Germany's most in-demand sector with excellent career prospects and earning potential.",
      demand: "Very High",
      avgSalary: "€3,200-€4,500",
      duration: "3 years",
      germanLevel: "B1-B2",
      gradient: "from-red-500 to-pink-500",
      roles: [
        "Healthcare Nurse (Gesundheits- und Krankenpfleger/in)",
        "Elderly Care Nurse (Altenpfleger/in)",
        "Medical Assistant (Medizinische/r Fachangestellte/r)",
        "Dental Assistant (Zahnmedizinische/r Fachangestellte/r)",
      ],
      benefits: [
        "High job security",
        "Growing demand",
        "Competitive salaries",
        "International opportunities",
      ],
    },
    {
      id: "it",
      title: "IT & Software",
      icon: "💻",
      description:
        "Start your tech career with practical training in programming, systems administration, and digital solutions.",
      demand: "Very High",
      avgSalary: "€3,500-€5,000",
      duration: "3 years",
      germanLevel: "B1",
      gradient: "from-blue-500 to-blue-600",
      roles: [
        "IT Specialist (Fachinformatiker/in)",
        "Software Developer (Anwendungsentwickler/in)",
        "Systems Administrator (Systemintegration)",
        "Data Analyst (IT-Systemkaufmann/-frau)",
      ],
      benefits: [
        "Highest salaries",
        "Remote work options",
        "Innovation environment",
        "Global career opportunities",
      ],
    },
    {
      id: "engineering",
      title: "Engineering & Technical",
      icon: "⚙️",
      description:
        "Build your career in Germany's world-renowned engineering and manufacturing industries.",
      demand: "High",
      avgSalary: "€3,000-€4,200",
      duration: "3.5 years",
      germanLevel: "B1",
      gradient: "from-gray-600 to-gray-800",
      roles: [
        "Mechatronics Engineer (Mechatroniker/in)",
        "Industrial Mechanic (Industriemechaniker/in)",
        "Electronics Technician (Elektroniker/in)",
        "Automotive Mechatronics (Kfz-Mechatroniker/in)",
      ],
      benefits: [
        "Work with top brands",
        "Cutting-edge technology",
        "Strong job market",
        "Export opportunities",
      ],
    },
    {
      id: "hospitality",
      title: "Hospitality & Tourism",
      icon: "🏨",
      description:
        "Launch your career in Germany's vibrant hospitality industry with international experience.",
      demand: "High",
      avgSalary: "€2,500-€3,500",
      duration: "3 years",
      germanLevel: "B1-B2",
      gradient: "from-blue-600 to-pink-500",
      roles: [
        "Hotel Manager (Hotelfachmann/-frau)",
        "Restaurant Specialist (Restaurantfachmann/-frau)",
        "Chef/Cook (Koch/Köchin)",
        "Event Manager (Veranstaltungskaufmann/-frau)",
      ],
      benefits: [
        "International environment",
        "Creative work",
        "Customer interaction",
        "Career progression",
      ],
    },
    {
      id: "logistics",
      title: "Logistics & Transportation",
      icon: "🚚",
      description:
        "Train in Germany's sophisticated logistics sector, managing the flow of goods in Europe's largest economy.",
      demand: "High",
      avgSalary: "€2,800-€3,800",
      duration: "3 years",
      germanLevel: "B1",
      gradient: "from-orange-500 to-red-500",
      roles: [
        "Logistics Specialist (Fachkraft für Lagerlogistik)",
        "Freight Forwarder (Kaufmann/-frau für Spedition)",
        "Supply Chain Manager",
        "Warehouse Manager",
      ],
      benefits: [
        "E-commerce growth",
        "Stable demand",
        "Technology integration",
        "International trade",
      ],
    },
    {
      id: "business",
      title: "Business & Finance",
      icon: "💼",
      description:
        "Develop professional business skills in Germany's robust corporate environment.",
      demand: "Medium-High",
      avgSalary: "€2,800-€4,000",
      duration: "3 years",
      germanLevel: "B2",
      gradient: "from-blue-600 to-blue-600",
      roles: [
        "Office Management (Kaufmann/-frau für Büromanagement)",
        "Banking Professional (Bankkaufmann/-frau)",
        "Tax Consultant (Steuerfachangestellte/r)",
        "Insurance Specialist (Versicherungskaufmann/-frau)",
      ],
      benefits: [
        "Corporate exposure",
        "Professional networks",
        "Career advancement",
        "Diverse industries",
      ],
    },
  ];

  const eligibilitySteps = [
    {
      step: "01",
      title: "Educational Qualification",
      description: "12th pass or graduation with minimum 50% marks",
      icon: <FiBook />,
      details: [
        "12th grade completed (any stream)",
        "OR Bachelor's degree in relevant field",
        "Minimum 50% aggregate marks",
        "Equivalent international qualifications accepted",
      ],
    },
    {
      step: "02",
      title: "German Language Proficiency",
      description: "B1-B2 level German language certification required",
      icon: <FiGlobe />,
      details: [
        "Minimum B1 level (most sectors)",
        "B2 level for business/medical fields",
        "Goethe Institute certification preferred",
        "We provide German language coaching",
      ],
    },
    {
      step: "03",
      title: "Age Requirement",
      description: "Typically 18-35 years old at time of application",
      icon: <FiUsers />,
      details: [
        "Minimum age: 18 years",
        "Maximum age: Usually 35 years",
        "Some sectors have flexibility",
        "No upper limit for exceptional candidates",
      ],
    },
    {
      step: "04",
      title: "Documents & Visa",
      description: "Prepare required documents and apply for visa",
      icon: <FiFileText />,
      details: [
        "Valid passport (6+ months)",
        "Educational certificates (attested)",
        "German language certificate",
        "Employer contract/Letter of offer",
      ],
    },
  ];

  const applicationProcess = [
    {
      phase: "Phase 1",
      title: "Preparation",
      duration: "3-6 months",
      steps: [
        "Learn German language (A1 to B1/B2)",
        "Identify your preferred sector",
        "Prepare CV in German format",
        "Get educational documents translated & attested",
      ],
    },
    {
      phase: "Phase 2",
      title: "Application",
      duration: "1-3 months",
      steps: [
        "Search & apply to Ausbildung positions",
        "Submit applications to 15-30 companies",
        "Write personalized cover letters (Anschreiben)",
        "Follow up with companies",
      ],
    },
    {
      phase: "Phase 3",
      title: "Interview & Offer",
      duration: "1-2 months",
      steps: [
        "Attend company interviews (online/in-person)",
        "Complete aptitude tests if required",
        "Receive training contract (Ausbildungsvertrag)",
        "Sign contract with selected company",
      ],
    },
    {
      phase: "Phase 4",
      title: "Visa & Relocation",
      duration: "2-4 months",
      steps: [
        "Apply for National Visa (D-Visa)",
        "Attend visa interview at German embassy",
        "Arrange accommodation in Germany",
        "Travel to Germany & start Ausbildung",
      ],
    },
  ];

  const salaryProgression = [
    {
      year: "1st Year",
      amount: "€900-€1,100",
      description: "Starting stipend during initial training",
    },
    {
      year: "2nd Year",
      amount: "€1,000-€1,200",
      description: "Increased as you gain experience",
    },
    {
      year: "3rd Year",
      amount: "€1,100-€1,300",
      description: "Final year training salary",
    },
    {
      year: "Post-Completion",
      amount: "€2,500-€4,500",
      description: "Full-time professional salary",
    },
  ];

  const faqs = [
    {
      question: "What is Ausbildung and how is it different from university?",
      answer:
        "Ausbildung is Germany's dual education system combining practical workplace training (3-4 days/week) with theoretical education (1-2 days/week). Unlike university, you earn €900-1,300 monthly while learning, have guaranteed job relevance, and complete training in 2-3.5 years instead of 4+ years. It's a 'learn by doing' approach recognized worldwide.",
    },
    {
      question: "Can international students apply for Ausbildung programs?",
      answer:
        "Absolutely! Germany actively welcomes international students for Ausbildung. You'll need German language proficiency (B1-B2 level), completed secondary education, and a valid passport. We help you through the entire process including language training, application support, and visa guidance.",
    },
    {
      question: "How much can I earn during and after Ausbildung?",
      answer:
        "During training: €900-€1,300 per month (increasing each year). After completion: €2,500-€4,500+ monthly depending on sector. IT and healthcare typically offer higher salaries (€3,500-€5,000). Plus benefits like health insurance, pension, vacation pay, and bonuses.",
    },
    {
      question: "What German language level do I need?",
      answer:
        "Most Ausbildung programs require B1 German level (intermediate). Technical fields may accept A2 initially. Business, medical, and hospitality sectors prefer B2. We offer comprehensive German language coaching from A1 to C1 levels with native trainers and Goethe exam preparation.",
    },
    {
      question: "Which sectors offer the best opportunities?",
      answer:
        "Top sectors: 1) IT & Technology (highest salaries €3,500-€5,000), 2) Healthcare & Nursing (very high demand), 3) Engineering & Manufacturing (strong job security), 4) Hospitality & Tourism (international environment), 5) Logistics (growing e-commerce). IT and healthcare have the best growth prospects.",
    },
    {
      question: "What is the success rate of getting hired after Ausbildung?",
      answer:
        "85% of Ausbildung trainees are offered permanent positions by their training company. Those who explore other opportunities find jobs easily as Ausbildung qualifications are highly respected in Germany. Many graduates also start their own businesses or pursue further education.",
    },
    {
      question: "Can I bring my family to Germany during Ausbildung?",
      answer:
        "Yes, but with conditions. During training, you can bring family if you can prove sufficient income and accommodation. After securing a full-time job post-Ausbildung, family reunion is straightforward. We provide guidance on family visa procedures and requirements.",
    },
    {
      question: "Does Ausbildung lead to permanent residency (PR)?",
      answer:
        "Yes! After completing Ausbildung and working for 2 years (total ~5 years), you're eligible for permanent residency (Niederlassungserlaubnis). After 8 years total residence, you can apply for German citizenship. Ausbildung is one of the most direct pathways to German PR.",
    },
    {
      question: "What is the duration of different Ausbildung programs?",
      answer:
        "Most Ausbildung programs last 2-3.5 years. Healthcare/Nursing: 3 years, IT/Software: 3 years, Engineering: 3-3.5 years, Hospitality: 3 years, Business: 2-3 years. Duration depends on the complexity of the profession and sector requirements.",
    },
    {
      question: "How does Capton Visa Point help with Ausbildung?",
      answer:
        "We provide end-to-end support: 1) German language training (A1-C1), 2) Career counseling & sector selection, 3) CV & cover letter preparation, 4) Company applications (15-30 positions), 5) Interview preparation, 6) Contract negotiation, 7) Visa assistance, 8) Pre-departure orientation. Success-oriented approach with dedicated counselors.",
    },
  ];

  const comparePrograms = [
    {
      feature: "Duration",
      ausbildung: "2-3.5 years",
      university: "3-5 years",
      directJob: "0 years",
    },
    {
      feature: "Cost",
      ausbildung: "Free (earn €900-1,300/month)",
      university: "€0-€20,000/year",
      directJob: "None",
    },
    {
      feature: "Practical Experience",
      ausbildung: "70% hands-on training",
      university: "Minimal (internships only)",
      directJob: "100% work",
    },
    {
      feature: "Job Guarantee",
      ausbildung: "85% placement rate",
      university: "Not guaranteed",
      directJob: "Already employed",
    },
    {
      feature: "Starting Salary",
      ausbildung: "€2,500-€4,500",
      university: "€2,800-€5,000",
      directJob: "€2,000-€3,000",
    },
    {
      feature: "PR Pathway",
      ausbildung: "After 5 years total",
      university: "After 6-8 years",
      directJob: "After 4-6 years",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-slate-50">
      <SEO
        title="Ausbildung in Germany"
        description="Ausbildung (German vocational training) — earn while you learn in Germany. Capton Visa Point provides complete guidance on Ausbildung programs, eligibility, German language training (A1–C1), visa process, and PR pathway. Trusted consultants for Indian students seeking career stability in Germany."
        keywords="Ausbildung Germany, German vocational training, earn and learn Germany, Ausbildung visa, work in Germany, Ausbildung consultants India, Ausbildung eligibility, Ausbildung admission, study work settle in Germany, PR pathway Germany, work permit Germany, German language training, learn German for Ausbildung, Ausbildung for Indian students, vocational training abroad, career in Germany, Germany work visa, Ausbildung 2026, Ausbildung 2027"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-blue-950 text-white py-24">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-md px-4 sm:px-6 py-2 rounded-full mb-6 border border-yellow-400/30">
                <FiStar className="text-yellow-300" />
                <span className="text-sm font-semibold text-yellow-100">
                  Germany's #1 Career Pathway for International Students
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                Ausbildung in{" "}
                <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                  Germany
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Earn €900-€1,300/month while learning. Zero tuition fees. 85%
                job placement. The smartest path to a German career.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={() =>
                    document
                      .getElementById("apply-now")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-2xl hover:shadow-yellow-400/50 hover:scale-105 flex items-center gap-2"
                >
                  Start Your Application <FiArrowRight />
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("sectors")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-all hover:scale-105"
                >
                  Explore Sectors
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-extrabold text-yellow-300">
                    €1,300
                  </div>
                  <div className="text-xs text-blue-100 mt-1">
                    Monthly Stipend
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-extrabold text-blue-300">
                    85%
                  </div>
                  <div className="text-xs text-blue-100 mt-1">
                    Job Placement
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-extrabold text-pink-300">
                    Zero
                  </div>
                  <div className="text-xs text-blue-100 mt-1">Tuition Fees</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                alt="Ausbildung Training"
                className="rounded-2xl shadow-2xl border-4 border-white/20"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-6 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <FiCheckCircle className="text-blue-600 text-2xl" />
                  <span className="font-bold text-lg">2-3.5 Years</span>
                </div>
                <p className="text-sm text-slate-600">Dual Education System</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Ausbildung */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
              What is Ausbildung?
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Ausbildung is Germany's world-renowned{" "}
              <span className="font-bold text-blue-600">
                dual education system
              </span>{" "}
              that combines practical workplace training with theoretical
              education. It's how 60% of Germans start their careers - and now
              it's your opportunity too!
            </p>
          </div>

          {/* How It Works */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-500 group border border-slate-100 hover:-translate-y-2"
              >
                <div className="text-6xl font-extrabold text-slate-200 mb-4">
                  {item.step}
                </div>
                <div
                  className={`w-16 h-16 bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-xl flex items-center justify-center text-white text-3xl mx-auto mb-4 group-hover:scale-110 transition-all`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Ausbildung */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
              Why Choose Ausbildung?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The most practical, affordable, and secure pathway to a successful
              career in Germany
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group border border-slate-100 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${reason.gradient} rounded-xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-all`}
                >
                  {reason.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salary Progression */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              Your Earning Journey
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Watch your income grow from day one through completion and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {salaryProgression.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all text-center"
              >
                <div className="text-blue-200 font-bold mb-2">{item.year}</div>
                <div className="text-4xl font-extrabold text-white mb-3">
                  {item.amount}
                </div>
                <p className="text-blue-100 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-blue-100 max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <FiTrendingUp className="inline-block mr-2 text-yellow-300" />
              After Ausbildung, your career earnings can reach{" "}
              <span className="font-bold text-yellow-300">
                €50,000-€80,000 annually
              </span>{" "}
              within 5-7 years, depending on your sector and performance!
            </p>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section id="sectors" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
              Find Your Perfect Sector
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore high-demand sectors with excellent career prospects and
              competitive salaries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector) => (
              <div
                key={sector.id}
                className="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-slate-100 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedSector(sector)}
              >
                <div
                  className={`bg-gradient-to-r ${sector.gradient} p-8 text-white relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 text-9xl opacity-10">
                    {sector.icon}
                  </div>
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">{sector.icon}</div>
                    <h3 className="text-2xl font-extrabold mb-2">
                      {sector.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                        {sector.demand} Demand
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {sector.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-slate-50 rounded-lg p-3">
                      <div className="text-xs text-slate-500 mb-1">
                        Avg Salary
                      </div>
                      <div className="font-bold text-slate-900">
                        {sector.avgSalary}
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3">
                      <div className="text-xs text-slate-500 mb-1">
                        Duration
                      </div>
                      <div className="font-bold text-slate-900">
                        {sector.duration}
                      </div>
                    </div>
                  </div>

                  <button
                    className={`w-full bg-gradient-to-r ${sector.gradient} text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                  >
                    View Details <FiArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
              Ausbildung vs University vs Direct Job
            </h2>
            <p className="text-xl text-slate-600">
              See why Ausbildung is the smartest choice for international
              students
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    <th className="px-4 sm:px-6 py-4 text-left font-bold">Feature</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-bold">
                      <div className="flex items-center gap-2">
                        <FiAward />
                        Ausbildung
                      </div>
                    </th>
                    <th className="px-4 sm:px-6 py-4 text-left font-bold">
                      University
                    </th>
                    <th className="px-4 sm:px-6 py-4 text-left font-bold">
                      Direct Job
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparePrograms.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b border-slate-100 ${
                        index % 2 === 0 ? "bg-slate-50" : "bg-white"
                      }`}
                    >
                      <td className="px-4 sm:px-6 py-4 font-bold text-slate-900">
                        {item.feature}
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-blue-700 font-semibold">
                        {item.ausbildung}
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-slate-600">
                        {item.university}
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-slate-600">
                        {item.directJob}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
              Eligibility & Requirements
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Check if you meet the requirements to start your Ausbildung
              journey in Germany
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {eligibilitySteps.map((step, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="text-6xl font-extrabold text-blue-100">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white text-2xl mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-slate-700"
                        >
                          <FiCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gradient-to-br from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              Step-by-Step Application Process
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your complete roadmap from preparation to starting your Ausbildung
              in Germany
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 max-w-7xl mx-auto">
            {applicationProcess.map((phase, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg font-bold inline-block mb-4">
                  {phase.phase}
                </div>
                <h3 className="text-2xl font-bold mb-2">{phase.title}</h3>
                <div className="flex items-center gap-2 text-blue-200 text-sm mb-4">
                  <FiClock />
                  {phase.duration}
                </div>
                <ul className="space-y-3">
                  {phase.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <FiCheckCircle className="text-blue-300 mt-1 flex-shrink-0" />
                      <span className="text-blue-100">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-blue-100 max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <FiTarget className="inline-block mr-2 text-yellow-300" />
              Total Timeline:{" "}
              <span className="font-bold text-yellow-300">
                6-12 months
              </span>{" "}
              from starting preparation to beginning your Ausbildung in Germany
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Get answers to common questions about Ausbildung in Germany
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg transition-all"
              >
                <button
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                  className="w-full px-4 sm:px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-white/50 transition-all"
                >
                  <span className="font-bold text-slate-900 flex-1">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 transition-transform ${
                      activeFaq === index ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                {activeFaq === index && (
                  <div className="px-4 sm:px-6 pb-6 text-slate-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="apply-now"
        className="py-16 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-12 text-white flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                    Ready to Start Your Ausbildung Journey?
                  </h3>
                  <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                    Join thousands of successful international students building
                    their careers in Germany through Ausbildung.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Free counseling session",
                      "Sector & company guidance",
                      "German language support",
                      "Application assistance",
                      "Interview preparation",
                      "Visa guidance",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <FiCheckCircle className="text-blue-300 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3 text-yellow-300">
                      <FiStar className="text-2xl" />
                      <div>
                        <div className="font-bold">Success Rate: 85%</div>
                        <div className="text-xs text-blue-100">
                          Our students get hired
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-slate-50">
                  <WorkAbroadForm
                    title="Start Your Ausbildung Application"
                    subtitle="Fill in your details and we'll contact you within 24 hours"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Detail Modal */}
      {selectedSector && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedSector(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full my-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`bg-gradient-to-r ${selectedSector.gradient} p-8 text-white relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 text-9xl opacity-10">
                {selectedSector.icon}
              </div>
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <div className="text-6xl mb-4">{selectedSector.icon}</div>
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
                    {selectedSector.title}
                  </h2>
                  <p className="text-lg opacity-90">
                    {selectedSector.description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedSector(null)}
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

            <div className="p-8 max-h-[70vh] overflow-y-auto">
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                  <FiDollarSign className="text-3xl text-blue-700 mx-auto mb-2" />
                  <div className="text-sm text-slate-600 mb-1">
                    Avg Salary (Post-Ausbildung)
                  </div>
                  <div className="font-bold text-slate-900">
                    {selectedSector.avgSalary}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                  <FiClock className="text-3xl text-blue-600 mx-auto mb-2" />
                  <div className="text-sm text-slate-600 mb-1">Duration</div>
                  <div className="font-bold text-slate-900">
                    {selectedSector.duration}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                  <FiGlobe className="text-3xl text-blue-700 mx-auto mb-2" />
                  <div className="text-sm text-slate-600 mb-1">
                    German Level
                  </div>
                  <div className="font-bold text-slate-900">
                    {selectedSector.germanLevel}
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Popular Roles in this Sector
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedSector.roles.map((role, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-slate-50 rounded-lg p-4"
                    >
                      <FiBriefcase className="text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Key Benefits
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedSector.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-blue-50 rounded-lg p-3"
                    >
                      <FiCheckCircle className="text-blue-700 flex-shrink-0 mt-1" />
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setSelectedSector(null);
                    document
                      .getElementById("apply-now")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`flex-1 bg-gradient-to-r ${selectedSector.gradient} text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105`}
                >
                  Apply for this Sector
                </button>
                <button
                  onClick={() => setSelectedSector(null)}
                  className="flex-1 bg-slate-100 text-slate-900 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ausbildung;
