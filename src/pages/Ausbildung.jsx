import React from "react";
import { Link } from "react-router-dom";
import {
  FiCheckCircle,
  FiDollarSign,
  FiBriefcase,
  FiAward,
} from "react-icons/fi";
import LeadForm from "../components/LeadForm";

const Ausbildung = () => {
  return (
    <div className="pt-20">
      {/* Hero for Ausbildung */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="text-yellow-400 font-bold tracking-wider uppercase text-sm mb-2 block">
              Germany's Dual Vocational Training
            </span>
            <h1 className="text-5xl font-bold mb-6">Ausbildung in Germany</h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Study + Work + Earn. The perfect pathway to a successful career in
              Germany for free. Earn a monthly stipend while you learn.
            </p>
            <button className="bg-yellow-400 text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-all">
              Start Your Application
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
              alt="Vocational Training"
              className="rounded-2xl shadow-2xl border-4 border-slate-700"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-6 rounded-xl shadow-xl">
              <p className="text-sm font-semibold text-slate-500">
                Monthly Stipend
              </p>
              <p className="text-2xl font-bold text-brand-blue">
                €900 - €1,300
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What is Ausbildung?
            </h2>
            <p className="text-slate-600">
              Ausbildung is a vocational training program in Germany where you
              work as an apprentice in a company and attend a vocational school.
              It is a dual system that combines theory and practice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiDollarSign />,
                title: "Earn Stipend",
                desc: "Get paid monthly between €900 to €1300 depending on the course.",
              },
              {
                icon: <FiBriefcase />,
                title: "Job Guarantee",
                desc: "High chance of getting a permanent job in the same company after completion.",
              },
              {
                icon: <FiAward />,
                title: "No Tuition Fee",
                desc: "The entire program is free of cost. You don't pay any tuition fees.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 text-2xl mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Eligibility & Process
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-lg">12th Pass or Graduate</h4>
                  <p className="text-slate-500">
                    Minimum 50% marks in your 12th grade or graduation.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-lg">
                    German Language B2 Level
                  </h4>
                  <p className="text-slate-500">
                    You must have B2 level proficiency in German. We provide
                    coaching for this.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-lg">Apply & Interview</h4>
                  <p className="text-slate-500">
                    Apply to companies and clear the interview to get the
                    contract.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <LeadForm
              title="Enquire for Ausbildung"
              subtitle="Start your German journey"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ausbildung;
