import React from "react";
import { motion } from "framer-motion";
import {
  FiShield,
  FiAward,
  FiThumbsUp,
  FiUserCheck,
  FiGlobe,
  FiCheckCircle,
} from "react-icons/fi";

const TrustBadges = () => {
  const certifications = [
    {
      icon: FiShield,
      title: "ICCRC Certified",
      description: "Immigration Consultants of Canada Regulatory Council",
    },
    {
      icon: FiAward,
      title: "ISO Certified",
      description: "ISO 9001:2015 Quality Management Certification",
    },
    {
      icon: FiUserCheck,
      title: "AIRC Member",
      description: "Association of Immigration & Recruitment Consultants",
    },
    {
      icon: FiGlobe,
      title: "ICEF Certified",
      description: "International Consultants for Education & Fairs",
    },
  ];

  const partners = [
    "University of Toronto",
    "RWTH Aachen University",
    "Moscow State University",
    "Tashkent Medical Academy",
    "IELTS Official Partner",
    "Goethe-Institut",
  ];

  const achievements = [
    { number: "15+", label: "Years Excellence", icon: FiAward },
    { number: "10,000+", label: "Success Stories", icon: FiThumbsUp },
    { number: "98%", label: "Visa Success", icon: FiCheckCircle },
    { number: "25+", label: "Countries", icon: FiGlobe },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6">
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-blue font-semibold tracking-wider text-sm uppercase">
            Trusted & Certified
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
            Our Credentials & Certifications
          </h2>
          <div className="h-1.5 w-20 bg-brand-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl border-2 border-slate-100 hover:border-brand-blue hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-blue transition-colors">
                <cert.icon className="text-2xl text-brand-blue group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">{cert.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* University Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-brand-dark text-center mb-8">
            Official Partners & Tie-ups
          </h3>
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-center p-4 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors group"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <p className="text-xs font-medium text-slate-700 leading-tight">
                      {partner}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">
            Direct partnerships with 200+ universities and institutions worldwide
          </p>
        </motion.div>

        {/* Achievements Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-brand-blue to-blue-700 rounded-3xl p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Why Students Choose Capton Visa Point
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="text-3xl text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-blue-100 font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-600"
        >
          <div className="flex items-center gap-2">
            <FiShield className="text-green-600" />
            <span>100% Secure Process</span>
          </div>
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-green-600" />
            <span>No Hidden Charges</span>
          </div>
          <div className="flex items-center gap-2">
            <FiThumbsUp className="text-green-600" />
            <span>Transparent Guidance</span>
          </div>
          <div className="flex items-center gap-2">
            <FiUserCheck className="text-green-600" />
            <span>Expert Counsellors</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;
