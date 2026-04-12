import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function MbbsConsultantJaipur() {
  const faqData = [
    {
      q: "Jaipur me MBBS consultant choose karte waqt kya dekhna chahiye?",
      a: "Aapko aise consultant ko choose karna chahiye jo MBBS in India aur MBBS abroad dono options clearly samjhaye, country comparison kare, documentation support de aur admission planning me help kare.",
    },
    {
      q: "Kya Jaipur ke students MBBS abroad ke liye guidance le sakte hain?",
      a: "Haan, Jaipur ke students country selection, counselling support, documentation guidance aur admission planning ke liye proper help le sakte hain.",
    },
    {
      q: "Jaipur students ke liye kaun se MBBS abroad countries common hain?",
      a: "Russia, Kazakhstan, Georgia, Uzbekistan, Kyrgyzstan aur Tajikistan commonly explored options hain.",
    },
    {
      q: "Kya Capton Visa Point Jaipur ke nearby students ko bhi support karta hai?",
      a: "Haan, Jaipur aur nearby Rajasthan regions ke students ke liye MBBS admission guidance available hai.",
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
        title="MBBS Consultant in Jaipur | MBBS Abroad Consultant Jaipur | Capton Visa Point"
        description="Looking for an MBBS consultant in Jaipur? Capton Visa Point helps students with MBBS in India and MBBS abroad guidance, counselling, country selection and admission planning."
        keywords="mbbs consultant in jaipur, mbbs abroad consultant jaipur, best mbbs consultant in jaipur, mbbs admission consultant jaipur"
        canonical="https://www.captonvisapoint.com/mbbs-consultant-in-jaipur"
      />

      <main className="bg-white text-slate-800">
        <section className="relative overflow-hidden bg-slate-900">
          <img
            src="/Home_Hero/location-5.jpeg"
            alt="MBBS consultant in Jaipur banner"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/70 to-orange-900/40" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full bg-white/10 text-blue-100 px-4 py-2 text-sm font-semibold border border-white/15">
                Jaipur MBBS Guidance
              </p>

              <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight text-white">
                MBBS Consultant in Jaipur
              </h1>

              <p className="mt-6 text-base md:text-lg leading-8 text-slate-200">
                Capton Visa Point helps students searching for an{" "}
                <strong>MBBS consultant in Jaipur</strong> with MBBS in India
                and MBBS abroad guidance, counselling support, country comparison
                and admission planning.
              </p>

              <p className="mt-4 text-base md:text-lg leading-8 text-slate-300">
                We support students from Jaipur and nearby Rajasthan regions with
                structured MBBS counselling support.
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
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
              MBBS admission guidance for Jaipur students
            </h2>

            <p className="mt-5 text-slate-600 leading-8 text-base md:text-lg">
              Students searching for a trusted consultant usually want clarity on
              MBBS in India, MBBS abroad, country comparison, fees, documents and
              counselling process.
            </p>

            <p className="mt-4 text-slate-600 leading-8 text-base md:text-lg">
              Capton Visa Point helps students understand the process in a structured
              way and supports better decision-making with clear guidance.
            </p>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 text-center">
              How we help students
            </h2>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Profile Review",
                "Country Comparison",
                "Documentation Guidance",
                "Admission Planning",
              ].map((item, idx) => (
                <div key={idx} className="rounded-2xl bg-white border shadow-sm p-6">
                  <div className="h-11 w-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                    {idx + 1}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{item}</h3>
                  <p className="mt-3 text-slate-600 leading-7">
                    Structured support for students planning MBBS admission.
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
                MBBS in India related seat and admission details yahan se explore karein.
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
                MBBS abroad related country options aur guidance yahan compare karein.
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

        <section className="py-14 md:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
              Popular MBBS abroad countries
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
                    <span className="text-blue-600 font-bold text-xl group-open:rotate-45 transition">
                      +
                    </span>
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
                    Need MBBS guidance in Jaipur?
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