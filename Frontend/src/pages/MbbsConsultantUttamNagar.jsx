import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function MbbsConsultantUttamNagar() {
  const faqData = [
    {
      q: "Uttam Nagar me MBBS consultant choose karte waqt kya dekhen?",
      a: "Transparent counselling, India aur abroad dono options ki clarity, country comparison, documentation guidance aur realistic admission support dekhna chahiye.",
    },
    {
      q: "Kya Capton Visa Point Uttam Nagar ke students ke liye suitable hai?",
      a: "Haan, Capton Visa Point Uttam Nagar aur nearby West Delhi students ke liye MBBS in India aur MBBS abroad guidance provide karta hai.",
    },
    {
      q: "Uttam Nagar se MBBS abroad ke liye kaun se countries common hain?",
      a: "Russia, Kazakhstan, Georgia, Uzbekistan, Kyrgyzstan aur Tajikistan common MBBS abroad options hain.",
    },
    {
      q: "Kya Uttam Nagar se Delhi NCR counselling support mil sakta hai?",
      a: "Haan, Uttam Nagar ke students ko Delhi NCR level counselling, admission planning aur next-step support mil sakta hai.",
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
        title="MBBS Consultant in Uttam Nagar | MBBS Abroad Consultant Uttam Nagar | Capton Visa Point"
        description="Looking for an MBBS consultant in Uttam Nagar? Capton Visa Point helps students with MBBS in India and MBBS abroad guidance, counselling, country selection and documentation support."
        keywords="mbbs consultant in uttam nagar, mbbs abroad consultant uttam nagar, mbbs admission consultant uttam nagar, best mbbs consultant in uttam nagar, uttam nagar mbbs guidance"
        canonical="https://www.captonvisapoint.com/mbbs-consultant-in-uttam-nagar"
      />

      <main className="bg-white text-slate-800">
        {/* BIG HERO BANNER */}
        <section className="relative overflow-hidden bg-slate-900">
          <img
            src="/Home_Hero/location-3.jpeg"
            alt="MBBS consultant in Uttam Nagar banner"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full bg-white/10 text-blue-100 px-4 py-2 text-sm font-semibold border border-white/15">
                Uttam Nagar MBBS Guidance
              </p>
              <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight text-white">
                MBBS Consultant in Uttam Nagar
              </h1>
              <p className="mt-6 text-base md:text-lg leading-8 text-slate-200">
                Capton Visa Point is a trusted <strong>MBBS consultant in Uttam Nagar</strong>
                for students searching for MBBS in India and MBBS abroad guidance.
                We support students from Uttam Nagar, Dwarka Mor, Nawada, Janakpuri
                and nearby West Delhi areas with admission planning, country selection
                and counselling support.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 transition"
                >
                  Talk to Counsellor
                </Link>
                <Link
                  to="/eligibility-check"
                  className="rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-6 py-3 transition"
                >
                  Free Eligibility Check
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  "Uttam Nagar",
                  "West Delhi",
                  "MBBS India",
                  "MBBS Abroad",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm px-4 py-4 text-white font-semibold text-center"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-14 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
              Why students search for an MBBS consultant in Uttam Nagar
            </h2>
            <p className="mt-5 text-slate-600 leading-8 text-base md:text-lg">
              Many students in Uttam Nagar want simple and honest guidance for
              MBBS in India and MBBS abroad. A good <strong>MBBS consultant in Uttam Nagar</strong>
              should explain options clearly, compare countries, help with documents
              and make the process easier.
            </p>
            <p className="mt-4 text-slate-600 leading-8 text-base md:text-lg">
              Capton Visa Point supports students looking for a reliable
              <strong> MBBS abroad consultant in Uttam Nagar</strong> by helping them
              understand fee ranges, countries, admission steps and planning.
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-14 md:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 text-center">
              How we help Uttam Nagar students
            </h2>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Profile Check",
                  desc: "Academic profile aur student goals ko samjha jata hai.",
                },
                {
                  title: "Country Comparison",
                  desc: "Affordable aur suitable MBBS abroad options compare kiye jate hain.",
                },
                {
                  title: "Documentation Help",
                  desc: "Required documents aur application steps explain kiye jate hain.",
                },
                {
                  title: "Admission Planning",
                  desc: "Next steps aur counselling support structured way me diya jata hai.",
                },
              ].map((item, idx) => (
                <div key={idx} className="rounded-2xl bg-white border shadow-sm p-6">
                  <div className="h-11 w-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                    {idx + 1}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-slate-600 leading-7">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LINKS */}
        <section className="py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
            <div className="rounded-3xl border bg-white p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">MBBS in India</h2>
              <p className="mt-4 text-slate-600 leading-8">
                MBBS in India seat structure, admission flow aur related details samajhne ke liye India page dekhen.
              </p>
              <div className="mt-6">
                <Link
                  to="/mbbs/india"
                  className="inline-flex items-center rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 transition"
                >
                  Explore MBBS in India
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">MBBS Abroad</h2>
              <p className="mt-4 text-slate-600 leading-8">
                Students looking for MBBS abroad consultant in Uttam Nagar can compare multiple country options here.
              </p>
              <div className="mt-6">
                <Link
                  to="/mbbs/abroad"
                  className="inline-flex items-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 transition"
                >
                  Explore MBBS Abroad
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* COUNTRIES */}
        <section className="py-14 md:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
              Popular countries for Uttam Nagar students
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {countries.map((country) => (
                <Link
                  key={country.name}
                  to={country.path}
                  className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-2xl font-bold text-slate-900">{country.name}</h3>
                  <p className="mt-3 text-slate-600 leading-7">
                    Explore MBBS admission guidance and options for {country.name}.
                  </p>
                  <span className="inline-block mt-5 text-blue-600 font-semibold">
                    Explore {country.name} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="py-14 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold">
                    Need MBBS guidance in Uttam Nagar?
                  </h2>
                  <p className="mt-4 text-blue-50 leading-8">
                    Talk to Capton Visa Point for MBBS in India and MBBS abroad support.
                  </p>
                </div>
                <div className="flex flex-wrap lg:justify-end gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-semibold px-6 py-3 transition"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/mbbs-consultant-in-delhi"
                    className="inline-flex items-center justify-center rounded-xl border border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 transition"
                  >
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