import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiGlobe, FiBriefcase, FiAward, FiArrowRight } from "react-icons/fi";
import LeadForm from "../components/LeadForm";

const destinations = [
  { name: "United Kingdom", flag: "🇬🇧", desc: "1 Year Masters & PSW" },
  { name: "USA", flag: "🇺🇸", desc: "Top Ranked Universities" },
  { name: "Canada", flag: "🇨🇦", desc: "Easy PR Pathway" },
  { name: "Australia", flag: "🇦🇺", desc: "High Quality of Life" },
  { name: "Germany", flag: "🇩🇪", desc: "Free Education" },
  { name: "New Zealand", flag: "🇳🇿", desc: "Safe Environment" },
  { name: "Ireland", flag: "🇮🇪", desc: "Tech Hub of Europe" },
  { name: "France", flag: "🇫🇷", desc: "Cultural Experience" },
];

const StudyAbroad = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Study Abroad
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Unlock global career opportunities with a world-class education. We
            help you choose the right university and secure scholarships.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Explore the World
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              Studying abroad is not just about a degree; it's about a global
              perspective. Whether you aim for the Ivy Leagues in the USA, the
              historic universities of the UK, or the tuition-free education in
              Germany, we simplify the process for you.
            </p>
            <div className="grid gap-6">
              {[
                {
                  title: "Career Growth",
                  desc: "Access global job markets and higher starting salaries.",
                  icon: <FiBriefcase />,
                },
                {
                  title: "Personal Development",
                  desc: "Develop independence and cross-cultural communication skills.",
                  icon: <FiGlobe />,
                },
                {
                  title: "Quality Education",
                  desc: "Learn from the best minds in world-class facilities.",
                  icon: <FiAward />,
                },
              ].map((item, id) => (
                <div
                  key={id}
                  className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-brand-blue text-xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-2 bg-gradient-to-br from-blue-100 to-slate-100 rounded-[2rem]">
            <div className="bg-white rounded-[1.8rem] p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Popular Destinations
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {destinations.map((dest, i) => (
                  <Link
                    to={`/study-abroad/${dest.name.toLowerCase()}`}
                    key={i}
                    className="flex flex-col items-center p-4 rounded-xl border border-slate-100 hover:border-brand-blue hover:bg-blue-50 transition-all text-center group cursor-pointer"
                  >
                    <span className="text-3xl mb-2 grayscale group-hover:grayscale-0 transition-all">
                      {dest.flag}
                    </span>
                    <span className="font-semibold text-slate-700 text-sm">
                      {dest.name}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-8 text-center pt-8 border-t border-slate-100">
                <p className="text-sm text-slate-500 mb-4">
                  Don't see your country?
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-3 transition-all"
                >
                  Talk to an Expert <FiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-brand-blue p-8 md:p-12 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">
                Get a Free Profile Evaluation
              </h2>
              <p className="opacity-90 mb-8">
                Find out your chances of admission and scholarship. Our experts
                will review your academic profile.
              </p>
              <div className="flex gap-4 text-sm opacity-75">
                <span>✓ Profile Analysis</span>
                <span>✓ University Shortlisting</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <LeadForm title="Check Eligibility" subtitle="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyAbroad;
