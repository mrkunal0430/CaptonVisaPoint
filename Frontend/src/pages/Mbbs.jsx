import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiGlobe,
  FiCheckCircle,
  FiTrendingUp,
  FiAward,
  FiUsers,
  FiBook,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";
import InquiryForm from "../components/forms/InquiryForm";
import SEO from "../components/SEO";

const Mbbs = () => {
  const stats = [
    { icon: <FiGlobe />, number: "70+", label: "Partner Universities" },
    { icon: <FiUsers />, number: "4000+", label: "Students Placed" },
    { icon: <FiMapPin />, number: "10+", label: "Countries" },
    { icon: <FiAward />, number: "98%", label: "Success Rate" },
  ];

  const whyMbbs = [
    {
      icon: <FiCheckCircle className="text-3xl text-blue-500" />,
      title: "Globally Recognized",
      description:
        "MBBS degrees recognized by WHO, NMC, and other international medical bodies",
    },
    {
      icon: <FiTrendingUp className="text-3xl text-blue-600" />,
      title: "Excellent Career Prospects",
      description:
        " High demand for qualified doctors worldwide with lucrative career opportunities",
    },
    {
      icon: <FiBook className="text-3xl text-blue-600" />,
      title: "Quality Education",
      description:
        "World-class medical education with modern infrastructure and experienced faculty",
    },
    {
      icon: <FiAward className="text-3xl text-orange-500" />,
      title: "Affordable Options",
      description:
        "Multiple affordable options available both in India and abroad",
    },
  ];

  const faqs = [
    {
      question: "What is the duration of MBBS?",
      answer:
        "MBBS is typically a 5.5 to 6-year program including internship, depending on the country and university.",
    },
    {
      question: "Is NEET mandatory for MBBS abroad?",
      answer:
        "Yes, NEET qualification is mandatory for Indian students pursuing MBBS abroad to practice in India after completing the degree.",
    },
    {
      question: "Can I practice in India after MBBS abroad?",
      answer:
        "Yes, after clearing the FMGE/NEXT exam conducted by NMC, you can practice in India.",
    },
    {
      question: "What is the average cost of MBBS?",
      answer:
        "Costs vary widely - Government colleges in India: ₹10K-1L/year, Private: ₹10-25L/year, Abroad: $3000-8000/year",
    },
  ];

  return (
    <div>
      <SEO
        title="MBBS Abroad & India"
        description="Study MBBS abroad or in India with Capton Visa Point. WHO-approved universities, low tuition fees, 98% success rate. Complete MBBS admission guidance for 2026-2027 — NEET counseling, university shortlisting, documentation, and visa filing for Russia, Georgia, Uzbekistan, Kazakhstan, Germany, Italy, and top Indian medical colleges."
        keywords="MBBS in India, MBBS course in India, MBBS degree in India, study MBBS in India, MBBS medical course, MBBS abroad, study MBBS abroad, MBBS abroad admission, MBBS abroad consultants, cheapest MBBS abroad, low cost MBBS abroad, MBBS abroad eligibility, MBBS abroad fees, MBBS abroad universities, MBBS admission, MBBS admission process, MBBS admission 2026, MBBS admission 2027, top MBBS colleges in India, best MBBS colleges in India, government MBBS colleges in India, private MBBS colleges in India, MBBS consultants in India, best MBBS consultants, medical admission consultants, NEET exam, NEET UG exam, NEET cutoff for MBBS, NEET counseling process, NEET qualifying marks, WHO approved medical universities, NMC approved medical colleges, career after MBBS, PG after MBBS, MD after MBBS, MS after MBBS, scope of MBBS in India, scope of MBBS abroad, FMGE exam after MBBS abroad, NEXT exam for MBBS students, best country for MBBS for Indian students, MBBS abroad vs India, MBBS admission help India, medical education consultants India, MBBS career guidance, study medicine abroad for Indians"
      />
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-slate-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-blue-100 border border-blue-200 px-4 sm:px-6 py-2 rounded-full text-sm font-bold text-blue-700 mb-6 uppercase tracking-wider">
              🩺 Medical Education
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-slate-800">
              Study MBBS
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                Your Medical Career Starts Here
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Choose from top NMC-approved medical universities in India and
              abroad. Affordable fees, quality education, and global
              recognition.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
                >
                  <div className="text-3xl mb-2 text-blue-500">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold mb-1 text-slate-800">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-blue-300 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Two-Column Navigation Cards */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Choose Your Path
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Select the option that best suits your career goals and
              aspirations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* MBBS Abroad Card */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 hover:border-blue-300 transition-all"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                  <FiGlobe className="text-4xl" />
                </div>
                <h3 className="text-3xl font-bold mb-2">MBBS Abroad</h3>
                <p className="text-blue-100">
                  Study in globally recognized universities
                </p>
              </div>

              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800">
                        Affordable Tuition Fees
                      </p>
                      <p className="text-sm text-slate-600">
                        $3,000 - $8,000 per year
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800">
                        NMC Approved Universities
                      </p>
                      <p className="text-sm text-slate-600">
                        FMGE/NEXT eligible
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800">
                        No Donation Required
                      </p>
                      <p className="text-sm text-slate-600">
                        Low NEET cutoff: 130 marks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800">
                        English Medium
                      </p>
                      <p className="text-sm text-slate-600">
                        No language barrier
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/mbbs/abroad"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors group-hover:shadow-lg"
                >
                  Explore MBBS Abroad <FiArrowRight />
                </Link>
              </div>
            </motion.div>

            {/* MBBS India Card */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 hover:border-orange-300 transition-all"
            >
              <div className="bg-gradient-to-br from-orange-600 to-red-600 p-8 text-white">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                  <FiMapPin className="text-4xl" />
                </div>
                <h3 className="text-3xl font-bold mb-2">MBBS India</h3>
                <p className="text-orange-100">
                  Study in premier Indian medical colleges
                </p>
              </div>

              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800">
                        117,825 MBBS Seats
                      </p>
                      <p className="text-sm text-slate-600">
                        Govt: 59,860 | Private: 57,965
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800">
                        NEET 2025 Based
                      </p>
                      <p className="text-sm text-slate-600">
                        Transparent merit-based admission
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800">
                        Government Colleges
                      </p>
                      <p className="text-sm text-slate-600">
                        Fees: ₹10,000 - 1 Lakh/year
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800">
                        Study in Home Country
                      </p>
                      <p className="text-sm text-slate-600">
                        No cultural adjustment needed
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/mbbs/india"
                  className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 hover:bg-orange-700 transition-colors group-hover:shadow-lg"
                >
                  Explore MBBS India <FiArrowRight />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose MBBS */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Why Choose MBBS?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Build a rewarding career in medicine with global opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyMbbs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600">
                Get answers to common questions about MBBS
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-white rounded-xl border border-slate-200 overflow-hidden"
                >
                  <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-lg text-slate-900 hover:bg-slate-50 transition-colors">
                    {faq.question}
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="px-4 sm:px-6 pb-6 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-800">
                  Ready to Start Your MBBS Journey?
                </h2>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Get expert guidance on admission, documentation, and
                  university selection. Our counselors are here to help you
                  every step of the way.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="bg-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 hover:shadow-xl transition-all inline-flex items-center gap-2"
                  >
                    Book Free Consultation <FiArrowRight />
                  </Link>
                  <a
                    href="https://wa.me/919876543210"
                    className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <InquiryForm
                  title="Get Free Counselling"
                  subtitle="Fill the form and our expert will call you back"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mbbs;
