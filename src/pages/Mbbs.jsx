import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import LeadForm from "../components/LeadForm";

const countries = [
  { name: "Russia", flag: "🇷🇺", fee: "Low Cost", duration: "6 Years" },
  {
    name: "Uzbekistan",
    flag: "🇺🇿",
    fee: "Very Affordable",
    duration: "5+1 Years",
  },
  { name: "Kazakhstan", flag: "🇰🇿", fee: "Affordable", duration: "5 Years" },
  { name: "Georgia", flag: "🇬🇪", fee: "Moderate", duration: "6 Years" },
  { name: "Philippines", flag: "🇵🇭", fee: "Affordable", duration: "5.5 Years" },
  { name: "Egypt", flag: "🇪🇬", fee: "Moderate", duration: "5 Years" },
  { name: "Kyrgyzstan", flag: "🇰🇬", fee: "Low Cost", duration: "5+1 Years" },
  { name: "Bangladesh", flag: "🇧🇩", fee: "Moderate", duration: "5+1 Years" },
];

const Mbbs = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            MBBS Abroad
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Study Medicine in Top Government Universities at Affordable Cost.
            Recognized by NMC, WHO, and FAMER.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-yellow-400 text-slate-900 font-bold rounded-full hover:bg-yellow-300 transition-colors">
              Get Free Counselling
            </button>
            <button className="px-8 py-3 bg-white/10 backdrop-blur border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-colors">
              Check Eligibility
            </button>
          </div>
        </div>
      </section>

      {/* Intro & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Study MBBS Abroad?
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              With limited government seats in India and high fees in private
              colleges, studying MBBS abroad has become the preferred choice for
              thousands of Indian students. Countries like Russia, Uzbekistan,
              and Kazakhstan offer high-quality education, English medium
              curriculum, and globally recognized degrees at a fraction of the
              cost.
            </p>
            <ul className="space-y-4">
              {[
                "No Capitation Fee or Donation",
                "Low Cost of Living & Tuition Fees",
                "English Medium of Instruction",
                "World Class Infrastructure & Hospitals",
                "Valid for NEXT / FMGE Exam in India",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <FiCheckCircle className="text-green-500 shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-orange-50 border border-orange-100 rounded-xl">
              <h4 className="font-bold text-orange-800 mb-2">
                NEET Qualification Mandatory
              </h4>
              <p className="text-orange-700 text-sm">
                As per NMC guidelines, you must qualify NEET (UG) to be eligible
                to practice in India after completing your MBBS abroad.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                alt="Medical Students"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs">
              <p className="font-bold text-lg text-slate-800 mb-2">
                Need Help with NEET Counselling?
              </p>
              <button className="text-brand-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Contact Us <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Country Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Top Countries for MBBS
            </h2>
            <p className="text-slate-500">
              Choose from the best destinations preferred by Indian students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country, idx) => (
              <Link
                to={`/mbbs/${country.name.toLowerCase()}`}
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all border border-slate-100"
              >
                <div className="h-32 bg-blue-50 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                  {country.flag}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {country.name}
                  </h3>
                  <div className="space-y-2 text-sm text-slate-500">
                    <div className="flex justify-between">
                      <span>Tuition Fee:</span>
                      <span className="font-medium text-green-600">
                        {country.fee}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-medium text-slate-700">
                        {country.duration}
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-brand-blue font-semibold">
                    View Universities <FiArrowRight />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl"></div>
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-4">Get Expert Guidance</h2>
                <p className="text-blue-200 mb-8">
                  Not sure which country is best for you? Fill out the form and
                  let our experts guide you to your dream medical university.
                </p>
                <div className="flex items-center gap-4 text-sm font-medium">
                  <div className="px-4 py-2 bg-white/10 rounded-full border border-white/20">
                    Shortlist Universities
                  </div>
                  <div className="px-4 py-2 bg-white/10 rounded-full border border-white/20">
                    Check Eligibility
                  </div>
                </div>
              </div>
              <div>
                <LeadForm
                  title="Enquire Now"
                  subtitle="Get a call back within 24 hours"
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
