import React, { useState } from "react";
import { FiBook, FiAward, FiTarget, FiMessageCircle } from "react-icons/fi";
import LeadForm from "../components/LeadForm";

const Language = () => {
  const [activeTab, setActiveTab] = useState("german");

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Language & Coaching
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Master the languages that open doors to global opportunities. Expert
            coaching for German and IELTS.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white sticky top-20 z-30 shadow-sm">
        <div className="container mx-auto px-6 flex justify-center gap-4">
          <button
            onClick={() => setActiveTab("german")}
            className={`px-8 py-3 rounded-full font-bold transition-all ${
              activeTab === "german"
                ? "bg-brand-blue text-white shadow-lg"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            German Language
          </button>
          <button
            onClick={() => setActiveTab("ielts")}
            className={`px-8 py-3 rounded-full font-bold transition-all ${
              activeTab === "ielts"
                ? "bg-brand-blue text-white shadow-lg"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            IELTS Coaching
          </button>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        {activeTab === "german" ? (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  German Language (A1 - B2)
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Germany is the land of opportunities, but language is the key.
                  Whether you are applying for a Jobseeker visa, Student visa,
                  or Ausbildung, German proficiency is often mandatory or highly
                  beneficial.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Certified Trainers",
                    "Goethe Exam Prep",
                    "Small Batches",
                    "Flexible Timing",
                  ].map((tag, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-slate-700 font-medium"
                    >
                      <FiCheckCircle className="text-green-500" /> {tag}
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="https://images.unsplash.com/photo-1527866959252-deab85ef7d4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                  alt="German Class"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {[
                { level: "A1", desc: "Beginner", duration: "6 Weeks" },
                { level: "A2", desc: "Elementary", duration: "8 Weeks" },
                { level: "B1", desc: "Intermediate", duration: "10 Weeks" },
                {
                  level: "B2",
                  desc: "Upper Intermediate",
                  duration: "12 Weeks",
                },
              ].map((lvl, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-100 p-6 rounded-xl text-center hover:bg-white hover:shadow-lg transition-all"
                >
                  <div className="text-3xl font-bold text-brand-blue mb-2">
                    {lvl.level}
                  </div>
                  <div className="text-slate-800 font-bold mb-1">
                    {lvl.desc}
                  </div>
                  <div className="text-slate-500 text-sm">{lvl.duration}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  IELTS Coaching
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  The International English Language Testing System (IELTS) is
                  the world's most popular English language proficiency test for
                  higher education and global migration. We target 7.5+ bands.
                </p>
                <ul className="space-y-4">
                  <li className="p-4 bg-orange-50 rounded-lg flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                      L
                    </div>
                    <div>
                      <h4 className="font-bold">Listening</h4>
                      <p className="text-sm text-slate-600">
                        Audio comprehension techniques.
                      </p>
                    </div>
                  </li>
                  <li className="p-4 bg-blue-50 rounded-lg flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                      R
                    </div>
                    <div>
                      <h4 className="font-bold">Reading</h4>
                      <p className="text-sm text-slate-600">
                        Speed reading & skimming strategies.
                      </p>
                    </div>
                  </li>
                  {/* Writing and Speaking similarly */}
                </ul>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                  alt="IELTS"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        )}

        <div className="max-w-2xl mx-auto bg-slate-50 rounded-3xl p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-center mb-6">
            Enroll for a Demo Class
          </h3>
          <LeadForm title="" subtitle="Join our upcoming batch" />
        </div>
      </div>
    </div>
  );
};
import { FiCheckCircle } from "react-icons/fi";

export default Language;
