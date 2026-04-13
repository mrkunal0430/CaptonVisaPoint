import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function MbbsConsultantDelhi() {
  const faqData = [
    {
      q: "Delhi me best MBBS consultant kaise choose karein?",
      a: "Aapko aise consultant ko choose karna chahiye jo transparent guidance de, official process samjhaye, country options compare kare, fee breakdown clear bataye aur counselling ke baad admission support bhi de.",
    },
    {
      q: "Kya Capton Visa Point MBBS abroad me help karta hai?",
      a: "Haan, Capton Visa Point MBBS abroad admission, country selection, university shortlisting, documentation, application guidance aur visa support me help karta hai.",
    },
    {
      q: "Kaun kaun se countries MBBS abroad ke liye popular hain?",
      a: "Russia, Kazakhstan, Georgia, Uzbekistan, Kyrgyzstan aur Tajikistan Indian students ke liye kaafi popular options hain.",
    },
    {
      q: "Kya MBBS consultant in Delhi se admission chances improve hote hain?",
      a: "Sahi consultant process ko easy, structured aur error-free banata hai. Isse application mistakes kam hoti hain aur better decision lene me help milti hai.",
    },
    {
      q: "Kya counselling ke baad bhi support milta hai?",
      a: "Haan, achha consultant pre-admission se lekar document support, visa guidance aur post-admission support tak madad karta hai.",
    },
  ];

  const reasons = [
    "Personalised MBBS counselling for India & abroad",
    "Country-wise guidance with budget planning",
    "Transparent admission process explanation",
    "Documentation and application support",
    "Visa and travel assistance guidance",
    "Student-focused support from enquiry to admission",
  ];

  const countries = [
    { name: "Russia", path: "/mbbs/russia" },
    { name: "Kazakhstan", path: "/mbbs/kazakhstan" },
    { name: "Georgia", path: "/mbbs/georgia" },
    { name: "Uzbekistan", path: "/mbbs/uzbekistan" },
    { name: "Kyrgyzstan", path: "/mbbs/kyrgyzstan" },
    { name: "Tajikistan", path: "/mbbs/tajikistan" },
  ];

  const topIndiaColleges = [
    "AIIMS Delhi",
    "MAMC Delhi",
    "KGMU Lucknow",
    "JIPMER Puducherry",
    "BJ Medical Ahmedabad",
    "SMS Jaipur",
  ];

  const neetPoints = [
    "NEET is required for MBBS admission in India",
    "Applicable for government and most private medical colleges",
    "Transparent counselling and admission guidance",
    "Support for country and college level decision making",
  ];

  return (
    <>
      <SEO
        title="Best MBBS Consultant in Delhi | MBBS Abroad Admission Guidance | Capton Visa Point"
        description="Looking for the best MBBS consultant in Delhi? Capton Visa Point helps students with MBBS admission guidance for India and abroad, country selection, documentation, counselling and visa support."
        keywords="mbbs consultant in delhi, best mbbs consultant in delhi, mbbs abroad consultant delhi, mbbs admission consultant delhi, study mbbs abroad delhi"
        canonical="https://www.captonvisapoint.com/mbbs-consultant-in-delhi"
      />

      <main className="bg-white text-slate-800">
        {/* TOP BANNER */}
        <section className="relative overflow-hidden border-b bg-gradient-to-r from-slate-950 via-blue-950 to-orange-950">
          <div className="absolute inset-0 opacity-20">
            <img
              src="/images/mbbs-india-banner.jpg"
              alt="MBBS admission in India banner"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/80 to-orange-900/70" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* LEFT */}
              <div>
                <p className="inline-flex items-center rounded-full border border-blue-300/20 bg-white/10 text-blue-100 text-xs md:text-sm font-semibold px-4 py-2 mb-5 backdrop-blur-sm">
                  MBBS Admission in India
                </p>

                <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
                  Top Medical Colleges in India
                  <span className="block text-orange-300 mt-2">
                    NEET Required
                  </span>
                </h2>

                <p className="mt-5 text-base md:text-lg leading-8 text-slate-200">
                  Get admission guidance for India’s top government and private
                  medical colleges with expert support from Capton Visa Point.
                </p>

                <ul className="mt-6 space-y-3">
                  {neetPoints.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-slate-100"
                    >
                      <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-orange-400 shrink-0" />
                      <span className="text-sm md:text-base leading-7">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 transition shadow-lg"
                  >
                    Talk to Counsellor
                  </Link>

                  <Link
                    to="/eligibility-check"
                    className="inline-flex items-center justify-center rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 transition shadow-lg"
                  >
                    Free Eligibility Check
                  </Link>
                </div>
              </div>

              {/* RIGHT */}
              <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md p-5 md:p-6 shadow-2xl">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Featured India MBBS Highlights
                </h3>

                <div className="mt-5 grid sm:grid-cols-2 gap-4">
                  {topIndiaColleges.map((college, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-white"
                    >
                      <p className="text-base font-bold">{college}</p>
                      <p className="text-xs text-slate-200 mt-1">
                        Top MBBS college guidance
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-white/10 border border-white/10 px-4 py-4">
                  <p className="text-sm font-semibold text-orange-200 uppercase tracking-wide">
                    Important
                  </p>
                  <p className="mt-2 text-sm md:text-base text-slate-100 leading-7">
                    NEET exam qualification is generally required for MBBS
                    admission in India. Students should verify latest official
                    counselling and eligibility rules before applying.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HERO */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 mb-5">
                  Delhi MBBS Guidance
                </p>

                <h1 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900">
                  Best MBBS Consultant in Delhi for India & Abroad
                </h1>

                <p className="mt-5 text-base md:text-lg leading-8 text-slate-600">
                  Capton Visa Point helps students who are searching for a
                  trusted <strong>MBBS consultant in Delhi</strong>. From MBBS
                  in India to MBBS abroad counselling, we guide students with
                  country selection, admission planning, documentation support
                  and step-by-step process clarity.
                </p>

                <div className="mt-7 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 transition"
                  >
                    Talk to Counsellor
                  </Link>

                  <Link
                    to="/eligibility-check"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold px-6 py-3 transition"
                  >
                    Free Eligibility Check
                  </Link>
                </div>

                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="rounded-2xl border bg-white p-4 shadow-sm">
                    <p className="text-2xl font-bold text-blue-600">India</p>
                    <p className="text-sm text-slate-500 mt-1">
                      MBBS admission guidance
                    </p>
                  </div>

                  <div className="rounded-2xl border bg-white p-4 shadow-sm">
                    <p className="text-2xl font-bold text-orange-500">Abroad</p>
                    <p className="text-sm text-slate-500 mt-1">
                      Country selection support
                    </p>
                  </div>

                  <div className="rounded-2xl border bg-white p-4 shadow-sm">
                    <p className="text-2xl font-bold text-emerald-600">Delhi</p>
                    <p className="text-sm text-slate-500 mt-1">
                      Student-focused counselling
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border shadow-lg rounded-3xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-slate-900">
                  Why students choose Capton Visa Point
                </h2>
                <p className="text-slate-600 mt-3 leading-7">
                  If you are searching for the{" "}
                  <strong>best MBBS consultant in Delhi</strong>, you need
                  proper guidance, honest counselling and clear planning. We
                  focus on helping students understand the right path instead of
                  confusing them with random promises.
                </p>

                <ul className="mt-6 space-y-3">
                  {reasons.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3"
                    >
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600 shrink-0"></span>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
                Why a good MBBS consultant in Delhi matters
              </h2>
              <p className="mt-5 text-slate-600 leading-8 text-base md:text-lg">
                Many students and parents feel confused between MBBS in India,
                MBBS abroad, budget options, country quality, university
                selection, documents, counselling and admission timelines. That
                is why a reliable{" "}
                <strong>MBBS admission consultant in Delhi</strong> can make
                the process much simpler.
              </p>
              <p className="mt-4 text-slate-600 leading-8 text-base md:text-lg">
                At Capton Visa Point, we help students compare options
                carefully, understand fee structures, shortlist suitable
                countries and move ahead with better clarity. Our aim is to
                provide structured help to students searching for a dependable{" "}
                <strong>MBBS abroad consultant in Delhi</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-14 md:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
                MBBS admission process we help you understand
              </h2>
              <p className="mt-4 text-slate-600 leading-8">
                A trusted MBBS consultant in Delhi should explain every step
                clearly.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Profile Review",
                  desc: "Academic profile, goals, budget and preferred study path samjha jata hai.",
                },
                {
                  title: "Country Shortlisting",
                  desc: "Student ke budget, preference aur career goals ke according options compare kiye jate hain.",
                },
                {
                  title: "Documentation Guidance",
                  desc: "Application documents, eligibility details aur required paperwork clear kiya jata hai.",
                },
                {
                  title: "Admission Planning",
                  desc: "Admission steps, next actions, timelines aur further support explain kiya jata hai.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border shadow-sm p-6"
                >
                  <div className="h-11 w-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                    {idx + 1}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-7">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDIA & ABROAD LINKS */}
        <section className="py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="rounded-3xl border bg-white p-8 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  MBBS in India guidance
                </h2>
                <p className="mt-4 text-slate-600 leading-8">
                  Students who want to explore MBBS in India can review seat
                  availability, admission structure and related information on
                  the India page.
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
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  MBBS abroad counselling
                </h2>
                <p className="mt-4 text-slate-600 leading-8">
                  Students looking for an MBBS abroad consultant in Delhi can
                  compare multiple countries, fee ranges and options from one
                  place.
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
          </div>
        </section>

        {/* COUNTRY LINKS */}
        <section className="py-14 md:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
                Popular MBBS abroad countries
              </h2>
              <p className="mt-4 text-slate-600 leading-8">
                Students searching for the best MBBS consultant in Delhi usually
                compare these countries first.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {countries.map((country) => (
                <Link
                  key={country.name}
                  to={country.path}
                  className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-2xl font-bold text-slate-900">
                    {country.name}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-7">
                    Explore admission guidance, basic country details and
                    MBBS-related options for {country.name}.
                  </p>
                  <span className="inline-block mt-5 text-blue-600 font-semibold">
                    Explore {country.name} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CONTENT BLOCK */}
        <section className="py-14 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose max-w-none prose-slate">
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
                Best MBBS consultant in Delhi for students who need clarity
              </h2>

              <p className="mt-5 text-slate-600 leading-8 text-base md:text-lg">
                The search for the{" "}
                <strong>best MBBS consultant in Delhi</strong> often starts
                when students are unsure whether to choose India or abroad. Some
                students want affordable options, some want global exposure, and
                some want straightforward guidance without confusion.
              </p>

              <p className="mt-4 text-slate-600 leading-8 text-base md:text-lg">
                A consultant should not just give a list of countries. They
                should explain the process, help compare options and guide
                students according to budget, eligibility and long-term goals.
                This is where Capton Visa Point works to support students
                looking for an experienced{" "}
                <strong>MBBS consultant in Delhi</strong>.
              </p>

              <p className="mt-4 text-slate-600 leading-8 text-base md:text-lg">
                If you are searching for an{" "}
                <strong>MBBS abroad consultant in Delhi</strong>, you should
                understand which countries fit your academic profile, what the
                likely fee ranges are, and how documentation and counselling
                work in real terms. Clear guidance saves time and reduces
                mistakes.
              </p>

              <p className="mt-4 text-slate-600 leading-8 text-base md:text-lg">
                Students can also use this page as a starting point and then
                visit detailed pages like{" "}
                <Link
                  to="/mbbs/india"
                  className="text-blue-600 font-semibold"
                >
                  MBBS in India
                </Link>{" "}
                and{" "}
                <Link
                  to="/mbbs/abroad"
                  className="text-blue-600 font-semibold"
                >
                  MBBS Abroad
                </Link>{" "}
                to understand the broader options.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 md:py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-slate-600 leading-8">
                Common questions students ask when searching for an MBBS
                consultant in Delhi.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {faqData.map((item, index) => (
                <details
                  key={index}
                  className="group rounded-2xl border bg-white p-5 shadow-sm"
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                    <span className="text-lg font-semibold text-slate-900">
                      {item.q}
                    </span>
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

        {/* CTA */}
        <section className="py-14 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold">
                    Need guidance from an MBBS consultant in Delhi?
                  </h2>
                  <p className="mt-4 text-blue-50 leading-8">
                    Talk to Capton Visa Point for MBBS in India and MBBS abroad
                    guidance, country comparison and next-step counselling
                    support.
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
                    to="/blog"
                    className="inline-flex items-center justify-center rounded-xl border border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 transition"
                  >
                    Read Blog
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