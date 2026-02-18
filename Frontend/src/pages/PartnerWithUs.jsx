import React from "react";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiGlobe,
  FiTrendingUp,
  FiAward,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import SEO from "../components/SEO";
import InquiryForm from "../components/forms/InquiryForm";

const benefits = [
  {
    icon: FiGlobe,
    title: "Global Network",
    description:
      "Access to our extensive network of universities, colleges, and educational institutions across 25+ countries.",
  },
  {
    icon: FiTrendingUp,
    title: "Growing Opportunities",
    description:
      "Be part of India's fastest-growing education consultancy with increasing student volumes year over year.",
  },
  {
    icon: FiUsers,
    title: "Dedicated Support",
    description:
      "Get dedicated partner support, training materials, and marketing resources to help you succeed.",
  },
  {
    icon: FiAward,
    title: "Attractive Commissions",
    description:
      "Competitive commission structure with timely payouts and performance-based incentives.",
  },
];

const partnerTypes = [
  {
    title: "Educational Institutions",
    points: [
      "Universities & Colleges abroad",
      "Medical Universities (MBBS)",
      "Vocational Training Centers",
      "Language Schools",
    ],
  },
  {
    title: "Business Partners",
    points: [
      "Sub-agents & Franchisees",
      "Education Counselors",
      "Career Guidance Centers",
      "Coaching Institutes",
    ],
  },
  {
    title: "Corporate Partners",
    points: [
      "Banks & Financial Institutions",
      "Travel & Forex Companies",
      "Insurance Providers",
      "Accommodation Partners",
    ],
  },
];

const PartnerWithUs = () => {
  return (
    <div className="bg-white">
      <SEO
        title="Partner With Us"
        description="Partner with Capton Visa Point — join our network of MBBS admission consultants, education institutions, and recruiters. Collaborate on MBBS abroad, study abroad, Ausbildung, and healthcare recruitment programs."
        keywords="partner with Capton Visa Point, education partnership, recruitment partnership, consultant partnership, study abroad partners, MBBS admission partner, medical admission partner, MBBS seat booking consultants, MBBS admission assistance India, overseas medical education India, MBBS abroad admission India consultants, international MBBS admission India, MBBS admission consultancy India"
      />
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[50vh] flex items-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/Home_Hero/2.webp"
            alt="Partner with us"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              Join Our Partner Network
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Partner With Us
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              Join India's leading education and immigration consultancy.
              Together, we can help more students achieve their dreams of
              studying abroad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Partner With Capton Visa Point?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We offer unparalleled support and opportunities for growth in the
              education consultancy industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Who Can Partner With Us?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We welcome partnerships from various sectors of the education
              ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-6 pb-4 border-b border-slate-100">
                  {type.title}
                </h3>
                <ul className="space-y-3">
                  {type.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-slate-600"
                    >
                      <FiCheckCircle className="text-blue-600 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10,000+", label: "Students Placed" },
              { number: "25+", label: "Countries" },
              { number: "500+", label: "University Partners" },
              { number: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Ready to Grow Together?
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Fill out the form and our partnership team will get in touch
                with you within 24-48 hours to discuss collaboration
                opportunities.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Customized partnership models",
                  "Training and onboarding support",
                  "Marketing collaterals & branding",
                  "Real-time application tracking",
                  "Regular webinars and updates",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <FiCheckCircle className="text-blue-700 text-sm" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-slate-800 mb-2">
                  Have Questions?
                </h4>
                <p className="text-slate-600 text-sm mb-3">
                  Reach out directly to our partnership team
                </p>
                <a
                  href="mailto:partners@captonvisapoint.com"
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
                >
                  partners@captonvisapoint.com <FiArrowRight />
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <InquiryForm
                title="Become a Partner"
                subtitle="Fill out the form below and we'll connect with you shortly"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerWithUs;
