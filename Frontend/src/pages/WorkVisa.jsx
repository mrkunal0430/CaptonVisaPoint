import React from "react";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiArrowRight,
  FiBriefcase,
  FiClock,
  FiDollarSign,
  FiGlobe,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import LeadForm from "../components/LeadForm";

const WorkVisa = () => {
  const countries = [
    {
      name: "Canada",
      flag: "🇨🇦",
      visaTypes: ["Temporary Foreign Worker Program", "International Mobility Program", "LMIA Work Permit"],
      duration: "1-3 years (renewable)",
      processingTime: "2-6 months",
      avgSalary: "CAD $50,000 - $90,000/year",
      inDemandJobs: ["Software Developer", "Nurses", "Engineers", "Accountants", "Skilled Trades"],
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      visaTypes: ["TSS Visa (482)", "Employer Nomination (186)", "Skilled Regional (491)"],
      duration: "2-4 years",
      processingTime: "3-8 months",
      avgSalary: "AUD $60,000 - $120,000/year",
      inDemandJobs: ["IT Professionals", "Healthcare Workers", "Construction", "Teaching", "Engineering"],
    },
    {
      name: "Germany",
      flag: "🇩🇪",
      visaTypes: ["EU Blue Card", "Job Seeker Visa", "Skilled Worker Visa"],
      duration: "1-4 years",
      processingTime: "1-3 months",
      avgSalary: "€45,000 - €75,000/year",
      inDemandJobs: ["IT Specialists", "Engineers", "Healthcare", "STEM Researchers", "Skilled Technicians"],
    },
    {
      name: "UK",
      flag: "🇬🇧",
      visaTypes: ["Skilled Worker Visa", "Global Talent Visa", "Health and Care Worker"],
      duration: "Up to 5 years",
      processingTime: "3-8 weeks",
      avgSalary: "£30,000 - £60,000/year",
      inDemandJobs: ["IT Professionals", "Nurses", "Teachers", "Engineers", "Finance"],
    },
    {
      name: "UAE",
      flag: "🇦🇪",
      visaTypes: ["Employment Visa", "Golden Visa (10 years)", "Freelancer Visa"],
      duration: "2-10 years",
      processingTime: "1-2 weeks",
      avgSalary: "AED 120,000 - 300,000/year",
      inDemandJobs: ["IT & Tech", "Finance", "Engineering", "Healthcare", "Hospitality"],
    },
    {
      name: "USA",
      flag: "🇺🇸",
      visaTypes: ["H1B Visa", "L1 Visa", "O1 Visa"],
      duration: "3-6 years",
      processingTime: "3-12 months",
      avgSalary: "$60,000 - $150,000/year",
      inDemandJobs: ["Software Engineers", "Data Scientists", "Healthcare", "Finance", "Management"],
    },
  ];

  const benefits = [
    "Work legally in your dream country",
    "Gain international work experience",
    "Higher earning potential",
    "Pathway to permanent residency",
    "Bring your family (dependent visa)",
    "Access to social benefits",
    "Career growth opportunities",
    "Cultural exposure & networking",
  ];

  const eligibility = [
    "Valid job offer from employer",
    "Relevant qualifications & experience",
    "Language proficiency (IELTS/PTE)",
    "Clean criminal record",
    "Good health (medical exam)",
    "Sufficient funds for initial settlement",
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Work Visa & Employment Services
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl">
              Secure your work visa and build your career in USA, Canada, Australia, UK,
              Germany, UAE, and more. Expert job search and visa assistance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all shadow-lg flex items-center gap-2 group"
              >
                Get Free Consultation{" "}
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#countries"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                Explore Countries
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">
            Why Choose a Work Visa?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors"
              >
                <FiCheckCircle className="text-green-600 mt-1 shrink-0" />
                <span className="text-slate-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section id="countries" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">
            Work Visa by Country
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="bg-gradient-to-r from-brand-blue to-blue-600 p-6 text-white">
                  <div className="text-5xl mb-3">{country.flag}</div>
                  <h3 className="text-2xl font-bold">{country.name}</h3>
                </div>

                <div className="p-6 space-y-6">
                  {/* Visa Types */}
                  <div>
                    <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <FiBriefcase className="text-brand-blue" />
                      Visa Types
                    </h4>
                    <ul className="space-y-2">
                      {country.visaTypes.map((visa, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                          <span className="text-brand-blue mt-1">•</span>
                          {visa}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-3 rounded-xl">
                      <div className="flex items-center gap-2 text-slate-600 text-xs mb-1">
                        <FiClock size={14} />
                        Processing
                      </div>
                      <p className="font-bold text-brand-dark text-sm">
                        {country.processingTime}
                      </p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl">
                      <div className="flex items-center gap-2 text-slate-600 text-xs mb-1">
                        <FiDollarSign size={14} />
                        Avg Salary
                      </div>
                      <p className="font-bold text-green-600 text-sm">
                        {country.avgSalary}
                      </p>
                    </div>
                  </div>

                  {/* In-Demand Jobs */}
                  <div>
                    <h4 className="font-bold text-slate-800 mb-3 text-sm">
                      In-Demand Jobs 🔥
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {country.inDemandJobs.map((job, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-50 text-brand-blue text-xs font-medium rounded-full"
                        >
                          {job}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="block w-full text-center py-3 bg-brand-blue text-white rounded-xl font-semibold hover:bg-blue-700 transition-all"
                  >
                    Apply Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">
            General Eligibility Criteria
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {eligibility.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100"
              >
                <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {index + 1}
                </div>
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">
            Our Work Visa Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Job Search Assistance",
                desc: "Access to exclusive job portals and employer connections in your target country",
                icon: "🔍",
              },
              {
                title: "Resume & LinkedIn Optimization",
                desc: "Professional CV writing and LinkedIn profile enhancement for global standards",
                icon: "📝",
              },
              {
                title: "Interview Preparation",
                desc: "Mock interviews and coaching to help you crack international job interviews",
                icon: "🎯",
              },
              {
                title: "Visa Documentation",
                desc: "Complete assistance with work visa application and documentation",
                icon: "📄",
              },
              {
                title: "Employer Sponsorship",
                desc: "Connect with employers willing to sponsor work visas in various countries",
                icon: "🤝",
              },
              {
                title: "Post-Landing Support",
                desc: "Airport pickup, accommodation, and settlement assistance",
                icon: "✈️",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Start Your Global Career Today
                </h2>
                <p className="text-purple-100 text-lg mb-8">
                  Get expert guidance on work visa applications, job search, and complete
                  relocation support.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <FiCheckCircle /> Free career counselling
                  </li>
                  <li className="flex items-center gap-3">
                    <FiCheckCircle /> Job search assistance
                  </li>
                  <li className="flex items-center gap-3">
                    <FiCheckCircle /> Visa application support
                  </li>
                </ul>
              </div>
              <LeadForm
                title="Book Free Work Visa Consultation"
                subtitle="Our experts will contact you within 24 hours"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkVisa;
