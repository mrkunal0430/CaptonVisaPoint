import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiArrowRight,
  FiGlobe,
  FiClock,
  FiDollarSign,
  FiFileText,
  FiUsers,
  FiAward,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import LeadForm from "../components/LeadForm";

const PRVisa = () => {
  const [selectedCountry, setSelectedCountry] = useState("canada");

  const countries = {
    canada: {
      name: "Canada",
      flag: "🇨🇦",
      programs: [
        "Express Entry",
        "Provincial Nominee Program (PNP)",
        "Quebec Skilled Worker",
        "Atlantic Immigration Program",
        "Rural and Northern Immigration Pilot",
      ],
      benefits: [
        "Live, work, and study anywhere in Canada",
        "Access to world-class healthcare",
        "Children get free quality education",
        "Pathway to Canadian citizenship",
        "Bring family members with you",
        "Social security benefits",
      ],
      requirements: [
        "Age: 18-45 years (optimal)",
        "Education: Bachelor's degree or higher",
        "Work Experience: Minimum 1 year skilled work",
        "Language: IELTS 6+ bands or CELPIP",
        "Funds: CAD $13,000+ for single applicant",
      ],
      processingTime: "6-12 months",
      investment: "No investment required",
      successRate: "95%",
      minPoints: "67/100 (Express Entry: 450+)",
    },
    australia: {
      name: "Australia",
      flag: "🇦🇺",
      programs: [
        "Skilled Independent Visa (Subclass 189)",
        "Skilled Nominated Visa (Subclass 190)",
        "Skilled Work Regional Visa (Subclass 491)",
        "Business Innovation and Investment",
      ],
      benefits: [
        "High quality of life and living standards",
        "World-class healthcare system (Medicare)",
        "Excellent education system",
        "Path to Australian citizenship",
        "Beautiful climate and lifestyle",
        "Strong economy with high wages",
      ],
      requirements: [
        "Age: Under 45 years",
        "Occupation in SOL (Skilled Occupation List)",
        "Skills assessment from relevant authority",
        "Language: IELTS 6+ bands or PTE",
        "Points: Minimum 65 points",
      ],
      processingTime: "8-15 months",
      investment: "No investment required",
      successRate: "92%",
      minPoints: "65/100",
    },
    germany: {
      name: "Germany",
      flag: "🇩🇪",
      programs: [
        "EU Blue Card",
        "Skilled Immigration Act",
        "Job Seeker Visa to PR pathway",
        "Self-Employment Visa",
      ],
      benefits: [
        "Live and work in Germany & EU",
        "Excellent social security benefits",
        "Free education for children",
        "Strong economy with high salaries",
        "Central location in Europe",
        "Quality healthcare system",
      ],
      requirements: [
        "University degree recognized in Germany",
        "Job offer with minimum €58,400 salary (€45,552 for shortage occupations)",
        "German language B1 level (preferred)",
        "Valid health insurance",
        "Clean criminal record",
      ],
      processingTime: "1-3 months",
      investment: "No investment required",
      successRate: "90%",
      minPoints: "No points system",
    },
  };

  const country = countries[selectedCountry];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue to-blue-700 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Permanent Residency (PR) Visa
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Start your journey to permanent residency in Canada, Australia, Germany,
              and more. Expert guidance for Express Entry, PNP, and skilled migration
              programs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-brand-blue rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg flex items-center gap-2 group"
              >
                Get Free Assessment{" "}
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#calculator"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                Calculate Points
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Country Tabs */}
      <section className="py-12 bg-white border-b border-slate-100 sticky top-[72px] z-40">
        <div className="container mx-auto px-6">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {Object.entries(countries).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setSelectedCountry(key)}
                className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
                  selectedCountry === key
                    ? "bg-brand-blue text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <span className="mr-2">{data.flag}</span>
                {data.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Country Details */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Quick Stats */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <FiClock className="text-brand-blue text-2xl" />
                <h3 className="font-bold text-slate-800">Processing Time</h3>
              </div>
              <p className="text-2xl font-bold text-brand-blue">
                {country.processingTime}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <FiDollarSign className="text-green-600 text-2xl" />
                <h3 className="font-bold text-slate-800">Investment</h3>
              </div>
              <p className="text-2xl font-bold text-green-600">{country.investment}</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <FiAward className="text-purple-600 text-2xl" />
                <h3 className="font-bold text-slate-800">Success Rate</h3>
              </div>
              <p className="text-2xl font-bold text-purple-600">
                {country.successRate}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* PR Programs */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-brand-dark mb-6">
                PR Programs Available
              </h2>
              <ul className="space-y-4">
                {country.programs.map((program, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FiCheckCircle className="text-green-600 mt-1 shrink-0" />
                    <span className="text-slate-700">{program}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm border border-blue-100">
              <h2 className="text-2xl font-bold text-brand-dark mb-6">
                Benefits of {country.name} PR
              </h2>
              <ul className="space-y-4">
                {country.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FiCheckCircle className="text-brand-blue mt-1 shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-brand-dark mb-6">
                Eligibility Requirements
              </h2>
              <ul className="space-y-4">
                {country.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-blue text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-slate-700">{req}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-slate-600 bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                <strong>Minimum Points:</strong> {country.minPoints}
              </p>
            </div>

            {/* Documents Required */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-brand-dark mb-6">
                Documents Required
              </h2>
              <ul className="space-y-4">
                {[
                  "Valid passport",
                  "Educational certificates & transcripts",
                  "Language test results (IELTS/PTE)",
                  "Work experience letters",
                  "Police clearance certificate",
                  "Medical examination reports",
                  "Proof of funds",
                  "Reference letters",
                ].map((doc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FiFileText className="text-slate-400 mt-1 shrink-0" />
                    <span className="text-slate-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">
            PR Application Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Free Consultation & Assessment",
                  desc: "Our experts evaluate your profile and suggest the best PR pathway",
                  time: "1 day",
                },
                {
                  step: "2",
                  title: "Document Preparation",
                  desc: "Gather all required documents with our comprehensive checklist",
                  time: "2-4 weeks",
                },
                {
                  step: "3",
                  title: "Language & Skills Testing",
                  desc: "Complete IELTS/PTE and skills assessment if required",
                  time: "1-2 months",
                },
                {
                  step: "4",
                  title: "Submit Application",
                  desc: "File complete application with immigration authorities",
                  time: "1 week",
                },
                {
                  step: "5",
                  title: "Medical & Background Checks",
                  desc: "Complete health examination and police clearance",
                  time: "1 month",
                },
                {
                  step: "6",
                  title: "Receive PR Approval",
                  desc: "Get your PR visa and plan your move",
                  time: country.processingTime,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start bg-slate-50 p-6 rounded-2xl hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl font-bold shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-brand-dark mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 mb-2">{item.desc}</p>
                    <p className="text-sm text-brand-blue font-semibold">
                      ⏱️ {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="bg-brand-blue rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Apply for PR?
                </h2>
                <p className="text-blue-100 text-lg mb-8">
                  Get your free eligibility assessment and personalized PR roadmap from
                  our certified immigration consultants.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <FiCheckCircle /> Free profile evaluation
                  </li>
                  <li className="flex items-center gap-3">
                    <FiCheckCircle /> Expert guidance on best PR pathway
                  </li>
                  <li className="flex items-center gap-3">
                    <FiCheckCircle /> Document preparation support
                  </li>
                </ul>
              </div>
              <LeadForm
                title="Get Free PR Assessment"
                subtitle="Expert counsellor will contact you in 24 hours"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PRVisa;
