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
  FiMapPin,
  FiClock,
} from "react-icons/fi";
import InquiryForm from "../components/forms/InquiryForm";

const jobCategories = [
  {
    title: "Nursing Jobs",
    positions: [
      "Staff Nurse",
      "ICU Nurse",
      "OR Nurse",
      "Pediatric Nurse",
      "Emergency Nurse",
      "Oncology Nurse",
    ],
    salary: "AED 6,000 - 15,000/month",
    demand: "Very High",
  },
  {
    title: "Doctor Positions",
    positions: [
      "General Practitioner",
      "Specialist Doctors",
      "Consultant",
      "Resident Doctor",
      "Medical Officer",
    ],
    salary: "AED 20,000 - 80,000/month",
    demand: "High",
  },
  {
    title: "Allied Health",
    positions: [
      "Lab Technician",
      "Radiographer",
      "Physiotherapist",
      "Pharmacist",
      "Dietitian",
      "Respiratory Therapist",
    ],
    salary: "AED 8,000 - 20,000/month",
    demand: "High",
  },
  {
    title: "Support Staff",
    positions: [
      "Medical Assistant",
      "Healthcare Administrator",
      "Patient Care Coordinator",
      "Medical Coder",
    ],
    salary: "AED 4,000 - 10,000/month",
    demand: "Moderate",
  },
];

const benefits = [
  {
    icon: FiDollarSign,
    title: "Tax-Free Salary",
    desc: "100% of your salary is yours - no income tax in UAE",
  },
  {
    icon: FiHome,
    title: "Free Accommodation",
    desc: "Most employers provide free housing or housing allowance",
  },
  {
    icon: FiShield,
    title: "Health Insurance",
    desc: "Comprehensive medical coverage for you and family",
  },
  {
    icon: FiUsers,
    title: "Family Visa",
    desc: "Sponsor your spouse and children under your visa",
  },
  {
    icon: FiStar,
    title: "Annual Bonus",
    desc: "Performance bonuses and annual air tickets home",
  },
  {
    icon: FiClock,
    title: "Paid Leave",
    desc: "30 days annual leave + public holidays",
  },
];

const cities = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Ras Al Khaimah",
  "Fujairah",
];

const requirements = [
  "Valid nursing/medical degree from recognized institution",
  "Minimum 2 years of clinical experience",
  "Dataflow verification of credentials",
  "DHA/DOH/MOH licensing exam clearance",
  "Good communication skills in English",
  "Valid passport with 6+ months validity",
];

const UAEHealthcare = () => {
  return (
    <div className="bg-white">
      <SEO
        title="Healthcare Jobs in UAE"
        description="Work as a healthcare professional in UAE — nursing jobs, doctor positions, and allied health roles with attractive salaries, tax-free income, and visa sponsorship. Apply through Capton Visa Point."
        keywords="healthcare jobs UAE, nursing jobs Dubai, doctor jobs UAE, medical jobs UAE, healthcare recruitment UAE, work in UAE"
      />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Home_Hero/3.webp"
            alt="UAE Healthcare"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-20 relative z-10">
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
              <span className="text-5xl">🇦🇪</span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-bold">
                UAE Healthcare Jobs
              </h1>
            </div>
            <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mb-8">
              Join the world-class healthcare sector in UAE. Tax-free salaries,
              modern facilities, and excellent career growth opportunities await
              you.
            </p>
            <div className="flex flex-wrap gap-3">
              {cities.map((city) => (
                <span
                  key={city}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20"
                >
                  <FiMapPin className="inline mr-1" /> {city}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Benefits of Working in UAE Healthcare
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
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
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
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Available Healthcare Positions
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We recruit for all major healthcare roles across UAE's top
              hospitals and clinics
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
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-slate-800">
                    {category.title}
                  </h3>
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

      {/* Requirements Section */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
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
                To work as a healthcare professional in UAE, you need to meet
                the following criteria:
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
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-6">
                Licensing Process
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Dataflow Verification",
                    desc: "Submit documents for primary source verification",
                  },
                  {
                    step: "2",
                    title: "Licensing Exam",
                    desc: "Clear DHA/DOH/MOH exam based on emirate",
                  },
                  {
                    step: "3",
                    title: "License Issuance",
                    desc: "Receive your healthcare professional license",
                  },
                  {
                    step: "4",
                    title: "Visa Processing",
                    desc: "Employer processes your work visa",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Employers */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Top Healthcare Employers in UAE
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Cleveland Clinic Abu Dhabi",
              "NMC Healthcare",
              "Mediclinic",
              "Aster DM Healthcare",
              "Al Futtaim Health",
              "Emirates Healthcare",
              "Dubai Health Authority",
              "SEHA",
              "Prime Healthcare",
              "Thumbay Group",
              "VPS Healthcare",
              "American Hospital Dubai",
            ].map((employer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="bg-slate-50 p-4 rounded-xl text-center hover:bg-blue-50 transition-colors"
              >
                <p className="text-sm font-medium text-slate-700">{employer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 sm:py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Your UAE Healthcare Journey Today
              </h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Register with us and get connected to top UAE hospitals. Our
                team will guide you through the entire process from document
                verification to visa stamping.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { number: "500+", label: "Nurses Placed" },
                  { number: "50+", label: "Partner Hospitals" },
                  { number: "12", label: "Years Experience" },
                  { number: "98%", label: "Success Rate" },
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
                title="Apply for UAE Healthcare Jobs"
                subtitle="Complete this form and we'll match you with suitable positions"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Country Link */}
      <section className="py-12 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-slate-600 mb-4">
            Also explore healthcare opportunities in
          </p>
          <Link
            to="/healthcare/germany"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 bg-slate-800 text-white rounded-full font-bold hover:bg-slate-900 transition-all"
          >
            🇩🇪 Germany Healthcare Jobs <FiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UAEHealthcare;
