import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import {
  FiArrowRight,
  FiCheckCircle,
  FiDollarSign,
  FiHome,
  FiHeart,
  FiShield,
  FiStar,
  FiUsers,
  FiBook,
  FiGlobe,
} from "react-icons/fi";
import InquiryForm from "../components/forms/InquiryForm";

const jobCategories = [
  {
    title: "Nursing in Germany",
    subtitle: "Krankenpfleger/in",
    positions: [
      "Registered Nurse",
      "ICU Nurse",
      "Geriatric Nurse",
      "Pediatric Nurse",
      "Surgical Nurse",
    ],
    salary: "€2,500 - €4,500/month",
    demand: "Very High",
    highlight: "Most in-demand profession with fast-track visa",
  },
  {
    title: "Elderly Care (Altenpflege)",
    subtitle: "Altenpfleger/in",
    positions: [
      "Care Assistant",
      "Senior Caregiver",
      "Home Care Provider",
      "Nursing Home Staff",
    ],
    salary: "€2,200 - €3,500/month",
    demand: "Very High",
    highlight: "Growing demand due to aging population",
  },
  {
    title: "Medical Professionals",
    subtitle: "Ärzte & Fachkräfte",
    positions: [
      "General Physician",
      "Specialist Doctors",
      "Dentists",
      "Pharmacists",
    ],
    salary: "€4,500 - €10,000/month",
    demand: "High",
    highlight: "Recognition of degrees required",
  },
  {
    title: "Allied Healthcare",
    subtitle: "Gesundheitsfachberufe",
    positions: [
      "Physiotherapist",
      "Lab Technician",
      "Radiology Technician",
      "Medical Assistant",
    ],
    salary: "€2,800 - €4,000/month",
    demand: "Moderate",
    highlight: "Vocational recognition needed",
  },
];

const benefits = [
  {
    icon: FiDollarSign,
    title: "High Salary",
    desc: "Earn €2,500-4,500/month with regular increments",
  },
  {
    icon: FiHome,
    title: "PR Pathway",
    desc: "Permanent residency after 2-4 years of work",
  },
  {
    icon: FiShield,
    title: "Social Security",
    desc: "Comprehensive pension, health & unemployment insurance",
  },
  {
    icon: FiUsers,
    title: "Family Reunion",
    desc: "Bring spouse and children after establishing",
  },
  {
    icon: FiBook,
    title: "Free Education",
    desc: "Free university education for your children",
  },
  {
    icon: FiGlobe,
    title: "EU Freedom",
    desc: "Travel freely across 27 EU countries",
  },
];

const requirements = [
  "Nursing/Healthcare degree from recognized institution",
  "Minimum B1 German language proficiency (B2 preferred)",
  "Valid professional registration in home country",
  "Minimum 1-2 years of relevant experience",
  "Deficiency course completion (if required)",
  "Clean medical and police clearance",
];

const process = [
  {
    step: "1",
    title: "German Language",
    desc: "Learn German to B1/B2 level (4-8 months)",
    duration: "4-8 months",
  },
  {
    step: "2",
    title: "Document Preparation",
    desc: "Gather and legalize all documents",
    duration: "1-2 months",
  },
  {
    step: "3",
    title: "Recognition Application",
    desc: "Apply for credential recognition (Anerkennung)",
    duration: "3-4 months",
  },
  {
    step: "4",
    title: "Job Search",
    desc: "Get job offer from German employer",
    duration: "1-2 months",
  },
  {
    step: "5",
    title: "Visa Application",
    desc: "Apply for work visa at German embassy",
    duration: "2-3 months",
  },
  {
    step: "6",
    title: "Arrival & Adaptation",
    desc: "Start work with adaptation period",
    duration: "6-12 months",
  },
];

const GermanyHealthcare = () => {
  return (
    <div className="bg-white">
      <SEO
        title="Healthcare Jobs in Germany"
        description="Build your healthcare career in Germany — nursing and medical professional opportunities with excellent salaries, work-life balance, and permanent residency pathway. Apply through Capton Visa Point."
        keywords="healthcare jobs Germany, nursing jobs Germany, doctor jobs Germany, medical jobs Germany, healthcare recruitment Germany, work in Germany"
      />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Home_Hero/4.webp"
            alt="Germany Healthcare"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Link
              to="/healthcare"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 text-sm"
            >
              ← Back to Healthcare Jobs
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">🇩🇪</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Germany Healthcare Jobs
              </h1>
            </div>
            <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mb-8">
              Build a rewarding healthcare career in Germany. Excellent
              salaries, social security benefits, and a clear pathway to
              permanent residency.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full text-sm border border-blue-400/30 text-blue-300">
                <FiCheckCircle className="inline mr-1" /> PR Pathway Available
              </span>
              <span className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-sm border border-blue-400/30 text-blue-300">
                <FiHeart className="inline mr-1" /> High Nursing Demand
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Why Choose Germany for Healthcare?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-blue-700 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <benefit.icon size={24} />
                </div>
                <h3 className="font-bold text-sm mb-1">{benefit.title}</h3>
                <p className="text-xs text-slate-400">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Healthcare Job Categories
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Germany offers excellent opportunities across all healthcare
              sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {jobCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">
                      {category.title}
                    </h3>
                    <p className="text-sm text-slate-500 italic">
                      {category.subtitle}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      category.demand === "Very High"
                        ? "bg-blue-100 text-blue-800"
                        : category.demand === "High"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {category.demand} Demand
                  </span>
                </div>

                <div className="bg-blue-50 px-3 py-2 rounded-lg text-sm text-blue-800 mb-4">
                  💡 {category.highlight}
                </div>

                <div className="mb-4">
                  <span className="text-sm text-slate-500">Salary Range:</span>
                  <p className="text-lg font-bold text-blue-700">
                    {category.salary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.positions.map((position, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm"
                    >
                      {position}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* German Language Importance */}
      <section className="py-16 bg-yellow-50 border-y border-yellow-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl mb-4">🇩🇪</div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              German Language is Essential
            </h2>
            <p className="text-slate-600 mb-6">
              To work in healthcare in Germany, you need at least B1 level
              German (B2 preferred). We provide comprehensive German language
              training through our coaching programs.
            </p>
            <Link
              to="/coaching"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-slate-900 rounded-full font-bold hover:bg-yellow-400 transition-all"
            >
              Explore German Courses <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Your Journey to Germany
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Complete process from start to working in Germany takes 12-18
              months
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">{item.title}</h3>
                    <span className="text-xs text-blue-700 font-medium">
                      {item.duration}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Eligibility Requirements
              </h2>
              <p className="text-slate-600 mb-8">
                To work as a healthcare professional in Germany, you need:
              </p>
              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <FiCheckCircle className="text-blue-700 text-sm" />
                    </div>
                    <span className="text-slate-700">{req}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 text-white p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-6">
                Recognition Process (Anerkennung)
              </h3>
              <p className="text-slate-300 mb-6 text-sm">
                Your nursing/medical qualification must be recognized in
                Germany. This involves document verification and possibly a
                deficiency course or exam.
              </p>
              <div className="space-y-4">
                {[
                  "Submit translated documents to authorities",
                  "Receive equivalency assessment",
                  "Complete adaptation course if required",
                  "Pass knowledge/practical exam",
                  "Receive full recognition certificate",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FiCheckCircle className="text-blue-400" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Your Germany Healthcare Journey
              </h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Register with us for complete support - from German language
                training to job placement. We guide you through every step of
                the process.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { number: "200+", label: "Nurses in Germany" },
                  { number: "15+", label: "Partner Hospitals" },
                  { number: "95%", label: "Visa Success" },
                  { number: "B2", label: "Language Training" },
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold">{stat.number}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <InquiryForm
                title="Apply for Germany Healthcare"
                subtitle="Complete this form to start your German healthcare journey"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Country Link */}
      <section className="py-12 bg-slate-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-600 mb-4">
            Also explore healthcare opportunities in
          </p>
          <Link
            to="/healthcare/uae"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-full font-bold hover:bg-slate-900 transition-all"
          >
            🇦🇪 UAE Healthcare Jobs <FiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GermanyHealthcare;
