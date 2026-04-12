import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function MbbsConsultantDwarka() {
  const faqData = [
    {
      q: "Dwarka ke students ke liye MBBS consultant kyu useful hai?",
      a: "Dwarka ke students ko MBBS in India aur MBBS abroad ke options compare karne, counselling samajhne aur admission planning ke liye guidance chahiye hoti hai.",
    },
    {
      q: "Kya Dwarka se MBBS abroad ke liye proper support mil sakta hai?",
      a: "Haan, country selection, documentation guidance aur structured counselling support mil sakta hai.",
    },
    {
      q: "Dwarka students ke liye kaun se countries zyada common hain?",
      a: "Russia, Kazakhstan, Georgia, Uzbekistan aur Kyrgyzstan common choices hain.",
    },
    {
      q: "Kya Capton Visa Point Dwarka nearby areas ke students ko guide karta hai?",
      a: "Haan, Dwarka aur nearby Delhi NCR students ke liye MBBS guidance available hai.",
    },
  ];

  const countries = [
    { name: "Russia", path: "/mbbs/russia" },
    { name: "Kazakhstan", path: "/mbbs/kazakhstan" },
    { name: "Georgia", path: "/mbbs/georgia" },
    { name: "Uzbekistan", path: "/mbbs/uzbekistan" },
    { name: "Kyrgyzstan", path: "/mbbs/kyrgyzstan" },
    { name: "Tajikistan", path: "/mbbs/tajikistan" },
  ];

  return (
    <>
      <SEO
        title="MBBS Consultant near Dwarka | MBBS Abroad Consultant Dwarka | Capton Visa Point"
        description="Looking for an MBBS consultant near Dwarka? Capton Visa Point helps students with MBBS in India and MBBS abroad guidance, counselling and country selection."
        keywords="mbbs consultant near dwarka, mbbs consultant in dwarka, mbbs abroad consultant dwarka, best mbbs consultant near dwarka"
        canonical="https://www.captonvisapoint.com/mbbs-consultant-in-dwarka"
      />

      <main className="bg-white text-slate-800">
        <section className="relative overflow-hidden bg-slate-900">
          <img
            src="/Home_Hero/location-1.jpeg"
            alt="MBBS consultant near Dwarka banner"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full bg-white/10 text-blue-100 px-4 py-2 text-sm font-semibold border border-white/15">
                Dwarka MBBS Guidance
              </p>
              <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight text-white">
                MBBS Consultant near Dwarka
              </h1>
              <p className="mt-6 text-base md:text-lg leading-8 text-slate-200">
                Capton Visa Point helps students searching for an
                <strong> MBBS consultant near Dwarka</strong> with MBBS in India,
                MBBS abroad, country comparison, documentation support and admission planning.
                We serve students from Dwarka, Sector areas, Dwarka Mor and nearby Delhi regions.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 transition">
                  Talk to Counsellor
                </Link>
                <Link to="/eligibility-check" className="rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-6 py-3 transition">
                  Free Eligibility Check
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
              Why students look for an MBBS consultant near Dwarka
            </h2>
            <p className="mt-5 text-slate-600 leading-8 text-base md:text-lg">
              Students in Dwarka often search for better clarity regarding MBBS in India,
              MBBS abroad, country suitability, fees, documents and overall counselling process.
            </p>
            <p className="mt-4 text-slate-600 leading-8 text-base md:text-lg">
              A trusted <strong>MBBS consultant in Dwarka</strong> should make the process
              simple, structured and practical. Capton Visa Point helps students compare
              options and move forward with better planning.
            </p>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 text-center">
              Our guidance process for Dwarka students
            </h2>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Student profile review",
                "India vs abroad comparison",
                "Country and budget guidance",
                "Documentation & counselling support",
              ].map((item, idx) => (
                <div key={idx} className="rounded-2xl bg-white border shadow-sm p-6">
                  <div className="h-11 w-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                    {idx + 1}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{item}</h3>
                  <p className="mt-3 text-slate-600 leading-7">
                    Structured support for Dwarka students planning MBBS admission.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
            <div className="rounded-3xl border bg-white p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">MBBS in India</h2>
              <p className="mt-4 text-slate-600 leading-8">
                India admission related structure aur details ke liye MBBS India page dekhen.
              </p>
              <div className="mt-6">
                <Link to="/mbbs/india" className="inline-flex items-center rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 transition">
                  Explore MBBS in India
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">MBBS Abroad</h2>
              <p className="mt-4 text-slate-600 leading-8">
                MBBS abroad consultant near Dwarka search karne wale students yahan multiple countries compare kar sakte hain.
              </p>
              <div className="mt-6">
                <Link to="/mbbs/abroad" className="inline-flex items-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 transition">
                  Explore MBBS Abroad
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
              Popular countries for Dwarka students
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {countries.map((country) => (
                <Link key={country.name} to={country.path} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                  <h3 className="text-2xl font-bold text-slate-900">{country.name}</h3>
                  <p className="mt-3 text-slate-600 leading-7">
                    Explore MBBS guidance and country details for {country.name}.
                  </p>
                  <span className="inline-block mt-5 text-blue-600 font-semibold">
                    Explore {country.name} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
              Frequently asked questions
            </h2>
            <div className="mt-10 space-y-4">
              {faqData.map((item, index) => (
                <details key={index} className="group rounded-2xl border bg-white p-5 shadow-sm">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                    <span className="text-lg font-semibold text-slate-900">{item.q}</span>
                    <span className="text-blue-600 font-bold text-xl group-open:rotate-45 transition">+</span>
                  </summary>
                  <p className="mt-4 text-slate-600 leading-8">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold">
                    Need MBBS guidance near Dwarka?
                  </h2>
                  <p className="mt-4 text-blue-50 leading-8">
                    Talk to Capton Visa Point for MBBS in India and MBBS abroad support.
                  </p>
                </div>
                <div className="flex flex-wrap lg:justify-end gap-4">
                  <Link to="/contact" className="inline-flex items-center justify-center rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-semibold px-6 py-3 transition">
                    Contact Us
                  </Link>
                  <Link to="/mbbs-consultant-in-delhi" className="inline-flex items-center justify-center rounded-xl border border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 transition">
                    Delhi Main Page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}