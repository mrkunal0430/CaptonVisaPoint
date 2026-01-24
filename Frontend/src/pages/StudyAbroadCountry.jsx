import React from "react";
import { useParams } from "react-router-dom";
import {
  FiBriefcase,
  FiDollarSign,
  FiBook,
  FiCheckCircle,
} from "react-icons/fi";
import LeadForm from "../components/LeadForm";

const StudyAbroadCountry = () => {
  const { country } = useParams();
  const countryName = country
    ? country.charAt(0).toUpperCase() + country.slice(1)
    : "UK";

  return (
    <div>
      {/* Hero/Banner */}
      <div className="bg-slate-900 h-[40vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue/20" />
        <h1 className="relative z-10 text-white text-5xl font-bold">
          Study in {countryName}
        </h1>
      </div>

      <div className="container mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Education System
            </h2>
            <p className="text-slate-600 leading-relaxed indent-8">
              The education system in {countryName} is world-renowned for its
              quality and practical approach. Universities offer a wide range of
              courses from Bachelors to Masters and PhDs. The curriculum is
              designed to make students industry-ready with internships and
              research opportunities.
            </p>
          </section>

          <section className="grid sm:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <FiDollarSign className="text-2xl text-green-600 mb-2" />
              <h3 className="font-bold text-slate-800 mb-2">Cost of Study</h3>
              <p className="text-sm text-slate-600">
                Approx. $10,000 - $30,000 per year depending on the university
                and course.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <FiBriefcase className="text-2xl text-blue-600 mb-2" />
              <h3 className="font-bold text-slate-800 mb-2">Post-Study Work</h3>
              <p className="text-sm text-slate-600">
                Eligible for 2-3 years of Post Study Work (PSW) visa after
                graduation.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
              <FiBook className="text-2xl text-purple-600 mb-2" />
              <h3 className="font-bold text-slate-800 mb-2">Intakes</h3>
              <p className="text-sm text-slate-600">
                Major intakes: September & January. Some offer May/April
                intakes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Visa Process
            </h2>
            <div className="space-y-4">
              {[
                "Offer Letter from University",
                "Tuition Fee Payment",
                "Proof of Funds",
                "Medical Examination",
                "Visa Interview (if applicable)",
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100"
                >
                  <span className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-slate-700 font-medium">{step}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <LeadForm title={`Apply to ${countryName}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadCountry;
