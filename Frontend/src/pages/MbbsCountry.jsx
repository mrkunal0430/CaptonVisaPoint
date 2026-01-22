import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiCheck,
  FiBookOpen,
  FiDollarSign,
  FiClock,
  FiFileText,
} from "react-icons/fi";
import LeadForm from "../components/LeadForm";

const MbbsCountry = () => {
  const { country } = useParams();
  const countryName = country
    ? country.charAt(0).toUpperCase() + country.slice(1)
    : "Russia";

  // Mock Data - In a real app, fetch this based on 'country'
  const universities = [
    {
      name: `First Moscow State Medical University`,
      location: "Moscow",
      fees: "$6,000 / year",
    },
    {
      name: `Kazan Federal University`,
      location: "Kazan",
      fees: "$5,500 / year",
    },
    {
      name: `Bashkir State Medical University`,
      location: "Ufa",
      fees: "$4,000 / year",
    },
    {
      name: `Crimea Federal University`,
      location: "Simferopol",
      fees: "$3,500 / year",
    },
  ];

  return (
    <div className="pt-20">
      {/* Banner */}
      <section className="relative h-[60vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1548685913-fe66164ae1a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
          alt={countryName}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-white/20 backdrop-blur px-4 py-1.5 rounded-full text-sm font-semibold border border-white/30 mb-4 inline-block uppercase tracking-wider">
              MBBS in {countryName}
            </span>
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              Study MBBS in {countryName}
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Top-ranked universities, English medium education, and globally
              recognized degrees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview & Quick Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Why choose {countryName}?
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Studying MBBS in {countryName} is an excellent choice for Indian
                students. {countryName} is known for its high standard of
                medical education, affordable tuition fees, and world-class
                infrastructure. Most medical universities in {countryName} are
                recognized by WHO, FAIMER, and the National Medical Commission
                (NMC) of India.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <FiDollarSign className="text-3xl text-green-500 mb-3" />
                <h3 className="font-bold text-slate-800">Affordable Fees</h3>
                <p className="text-slate-500 text-sm">
                  Low tuition & living costs compared to private colleges in
                  India.
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <FiBookOpen className="text-3xl text-blue-500 mb-3" />
                <h3 className="font-bold text-slate-800">English Medium</h3>
                <p className="text-slate-500 text-sm">
                  Entire course is taught in English for international students.
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <FiCheck className="text-3xl text-purple-500 mb-3" />
                <h3 className="font-bold text-slate-800">NMC Recognized</h3>
                <p className="text-slate-500 text-sm">
                  Graduates are eligible to sit for FMGE/NEXT in India.
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <FiClock className="text-3xl text-orange-500 mb-3" />
                <h3 className="font-bold text-slate-800">Duration</h3>
                <p className="text-slate-500 text-sm">
                  6 Years (including internship) standard duration.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Top Universities
              </h2>
              <div className="space-y-4">
                {universities.map((uni, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-xl border border-slate-200 hover:border-brand-blue hover:shadow-lg transition-all bg-white group"
                  >
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 group-hover:text-brand-blue transition-colors">
                        {uni.name}
                      </h4>
                      <p className="text-slate-500 flex items-center gap-2 text-sm">
                        <span className="inline-block w-2 h-2 bg-slate-300 rounded-full"></span>{" "}
                        {uni.location}
                      </p>
                    </div>
                    <div className="text-right mt-4 sm:mt-0">
                      <p className="text-xs text-slate-400 font-semibold uppercase">
                        Est. Tuition Fee
                      </p>
                      <p className="text-brand-blue font-bold">{uni.fees}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <FiFileText /> Documents Required
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "10th & 12th Marksheets",
                  "NEET Score Card",
                  "Valid Passport",
                  "Passport Size Photos",
                  "HIV Report",
                  "Birth Certificate",
                ].map((doc, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg text-slate-700 text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-brand-blue rounded-full"></div>{" "}
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Form */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <LeadForm
                title={`Apply to ${countryName}`}
                subtitle="Get free admission assessment now"
              />

              <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-brand-blue mb-2">
                  Did you know?
                </h4>
                <p className="text-sm text-slate-600">
                  {countryName} has one of the highest doctor-to-patient ratios
                  in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MbbsCountry;
