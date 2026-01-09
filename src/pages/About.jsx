import React from "react";
import { motion } from "framer-motion";
import { FiTarget, FiAward, FiUsers } from "react-icons/fi";

const About = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-blue-50 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            About <span className="text-brand-blue">Capton Visa Point</span>
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We are a team of dedicated professionals committed to making your
            study and immigration dreams a reality with transparency, integrity,
            and expertise.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: FiTarget,
                title: "Our Mission",
                text: "To provide honest, accurate, and efficient immigration services to help individuals achieve their global aspirations.",
              },
              {
                icon: FiAward,
                title: "Our Vision",
                text: "To be the most trusted and preferred global immigration consultancy, recognized for excellence and success.",
              },
              {
                icon: FiUsers,
                title: "Our Values",
                text: "Integrity, Transparency, Customer-Centricity, and Excellence in every application we process.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 text-brand-blue rounded-xl flex items-center justify-center text-2xl mb-6">
                  <item.icon />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Choose Capton Visa Point?
            </h2>
            <ul className="space-y-4">
              {[
                "Certified & Experienced Consultants",
                "99% Success Rate in Student Visas",
                "Transparent Process - No Hidden Costs",
                "Personalized Guidance for Every Client",
                "Post-Landing Support Services",
              ].map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="h-[400px] bg-slate-200 rounded-3xl overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80"
              alt="Team meeting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
