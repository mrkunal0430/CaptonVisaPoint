import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiCheck,
  FiBookOpen,
  FiDollarSign,
  FiClock,
  FiFileText,
  FiAward,
  FiStar,
} from "react-icons/fi";
import LeadForm from "../components/LeadForm";

// Country-specific data with partner universities (direct contracts) and other universities
const countryData = {
  russia: {
    name: "Russia",
    bannerImage:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    partnerUniversities: [
      {
        name: "Kazan State Medical University",
        location: "Kazan",
        fees: "$5,500 / year",
      },
      {
        name: "Izhevsk State Medical University",
        location: "Izhevsk",
        fees: "$4,500 / year",
      },
      {
        name: "Crimea Federal University",
        location: "Simferopol",
        fees: "$3,500 / year",
      },
      {
        name: "Omsk State Medical University",
        location: "Omsk",
        fees: "$4,000 / year",
      },
      {
        name: "Novosibirsk State University",
        location: "Novosibirsk",
        fees: "$5,000 / year",
      },
      {
        name: "Voronezh State Medical University",
        location: "Voronezh",
        fees: "$4,200 / year",
      },
    ],
    otherUniversities: [
      {
        name: "First Moscow State Medical University",
        location: "Moscow",
        fees: "$8,000 / year",
      },
      {
        name: "Bashkir State Medical University",
        location: "Ufa",
        fees: "$4,000 / year",
      },
      {
        name: "Orenburg State Medical University",
        location: "Orenburg",
        fees: "$3,800 / year",
      },
      {
        name: "Kursk State Medical University",
        location: "Kursk",
        fees: "$5,200 / year",
      },
    ],
  },
  georgia: {
    name: "Georgia",
    bannerImage:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    partnerUniversities: [
      {
        name: "BAU International University",
        location: "Batumi",
        fees: "$5,500 / year",
      },
      {
        name: "Georgian American University",
        location: "Tbilisi",
        fees: "$5,800 / year",
      },
      {
        name: "East European University",
        location: "Tbilisi",
        fees: "$5,000 / year",
      },
      { name: "Alte University", location: "Tbilisi", fees: "$4,800 / year" },
      { name: "SEU University", location: "Tbilisi", fees: "$5,200 / year" },
      {
        name: "Caucasus University",
        location: "Tbilisi",
        fees: "$5,500 / year",
      },
    ],
    otherUniversities: [
      {
        name: "Tbilisi State Medical University",
        location: "Tbilisi",
        fees: "$6,000 / year",
      },
      {
        name: "David Tvildiani Medical University",
        location: "Tbilisi",
        fees: "$6,500 / year",
      },
      {
        name: "European University",
        location: "Tbilisi",
        fees: "$5,000 / year",
      },
    ],
  },
  uzbekistan: {
    name: "Uzbekistan",
    bannerImage:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    partnerUniversities: [
      {
        name: "Fergana Medical Institute",
        location: "Fergana",
        fees: "$3,200 / year",
      },
      {
        name: "Tashkent Medical Academy (Termez Branch)",
        location: "Termez",
        fees: "$3,000 / year",
      },
      {
        name: "Bukhara State Medical Institute",
        location: "Bukhara",
        fees: "$3,500 / year",
      },
      {
        name: "Samarkand State Medical Academy",
        location: "Samarkand",
        fees: "$3,300 / year",
      },
      {
        name: "Tashkent State Medical Institute",
        location: "Tashkent",
        fees: "$3,800 / year",
      },
      {
        name: "Andijan State Medical Institute",
        location: "Andijan",
        fees: "$3,000 / year",
      },
      {
        name: "Gulistan State University",
        location: "Gulistan",
        fees: "$2,800 / year",
      },
      {
        name: "Bukhara Innovative Medical Institute",
        location: "Bukhara",
        fees: "$3,200 / year",
      },
    ],
    otherUniversities: [
      {
        name: "Tashkent Pediatric Medical Institute",
        location: "Tashkent",
        fees: "$3,500 / year",
      },
      {
        name: "Urgench Branch of TMA",
        location: "Urgench",
        fees: "$2,900 / year",
      },
    ],
  },
  kazakhstan: {
    name: "Kazakhstan",
    bannerImage:
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    partnerUniversities: [
      {
        name: "Kazakh Russian Medical University",
        location: "Almaty",
        fees: "$4,500 / year",
      },
      { name: "Caspian University", location: "Almaty", fees: "$4,200 / year" },
    ],
    otherUniversities: [
      {
        name: "Al-Farabi Kazakh National University",
        location: "Almaty",
        fees: "$5,000 / year",
      },
      {
        name: "Asfendiyarov Kazakh National Medical University",
        location: "Almaty",
        fees: "$4,800 / year",
      },
      {
        name: "Karaganda State Medical University",
        location: "Karaganda",
        fees: "$4,000 / year",
      },
      {
        name: "Semey State Medical University",
        location: "Semey",
        fees: "$3,800 / year",
      },
      {
        name: "West Kazakhstan Marat Ospanov Medical University",
        location: "Aktobe",
        fees: "$3,500 / year",
      },
    ],
  },
  kyrgyzstan: {
    name: "Kyrgyzstan",
    bannerImage:
      "https://images.unsplash.com/photo-1571940747783-5d5db2ac5ce5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    partnerUniversities: [
      {
        name: "Kyrgyz State Medical Academy",
        location: "Bishkek",
        fees: "$4,000 / year",
      },
      {
        name: "International School of Medicine (IESM)",
        location: "Bishkek (Central Campus)",
        fees: "$4,500 / year",
      },
      {
        name: "International School of Medicine (ISM)",
        location: "Issyk-Kul",
        fees: "$4,200 / year",
      },
      {
        name: "International Medical University (IMU)",
        location: "Bishkek",
        fees: "$4,300 / year",
      },
      { name: "Osh State University", location: "Osh", fees: "$3,500 / year" },
      {
        name: "Jalalabad State University",
        location: "Jalalabad",
        fees: "$3,200 / year",
      },
      {
        name: "Asian Medical Institute",
        location: "Kant",
        fees: "$3,800 / year",
      },
    ],
    otherUniversities: [
      {
        name: "Kyrgyz-Russian Slavic University",
        location: "Bishkek",
        fees: "$4,500 / year",
      },
      {
        name: "Avicenna International Medical University",
        location: "Bishkek",
        fees: "$4,000 / year",
      },
    ],
  },
  tajikistan: {
    name: "Tajikistan",
    bannerImage:
      "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    partnerUniversities: [
      {
        name: "Avicenna Tajik State Medical University",
        location: "Dushanbe",
        fees: "$3,500 / year",
      },
    ],
    otherUniversities: [
      {
        name: "Tajik National University",
        location: "Dushanbe",
        fees: "$3,000 / year",
      },
      {
        name: "Khorog State University",
        location: "Khorog",
        fees: "$2,800 / year",
      },
      {
        name: "Bohtar State University",
        location: "Bokhtar",
        fees: "$2,500 / year",
      },
    ],
  },
};

// Default country data for countries not in the list
const defaultCountryData = {
  bannerImage:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  partnerUniversities: [],
  otherUniversities: [
    {
      name: "Government Medical University",
      location: "Capital City",
      fees: "$4,500 / year",
    },
    {
      name: "National Medical Institute",
      location: "Major City",
      fees: "$4,000 / year",
    },
  ],
};

const MbbsCountry = () => {
  const { country } = useParams();
  const countryKey = country?.toLowerCase() || "russia";
  const data = countryData[countryKey] || {
    ...defaultCountryData,
    name: country
      ? country.charAt(0).toUpperCase() + country.slice(1)
      : "Russia",
  };
  const countryName =
    data.name ||
    (country ? country.charAt(0).toUpperCase() + country.slice(1) : "Russia");

  return (
    <div>
      {/* Banner */}
      <section className="relative h-[60vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-purple-900/40 z-10" />
        <img
          src={data.bannerImage}
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
          <div className="md:col-span-2 space-y-10">
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

            {/* Direct Partner Universities Section */}
            {data.partnerUniversities &&
              data.partnerUniversities.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl">
                      <FiAward className="text-2xl text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">
                        Our Direct Partner Universities
                      </h2>
                      <p className="text-sm text-slate-500">
                        Universities with Direct Admission Contract
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-2xl p-6 border border-amber-200 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <FiStar className="text-amber-600" />
                      <p className="text-amber-800 font-medium text-sm">
                        ✨ These universities have direct contracts with Capton
                        Visa Point - enjoy hassle-free admission, priority
                        processing & dedicated support!
                      </p>
                    </div>

                    <div className="grid gap-4">
                      {data.partnerUniversities.map((uni, idx) => (
                        <div
                          key={idx}
                          className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 rounded-xl bg-white border-2 border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all group"
                        >
                          {/* Partner Badge */}
                          <div className="absolute top-0 right-0">
                            <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl flex items-center gap-1">
                              <FiStar className="text-yellow-200 text-xs" />
                              DIRECT PARTNER
                            </div>
                          </div>

                          <div className="mt-4 sm:mt-0">
                            <h4 className="font-bold text-lg text-slate-900 group-hover:text-amber-600 transition-colors">
                              {uni.name}
                            </h4>
                            <p className="text-slate-500 flex items-center gap-2 text-sm">
                              <span className="inline-block w-2 h-2 bg-amber-400 rounded-full"></span>
                              {uni.location}
                            </p>
                          </div>

                          <div className="text-left sm:text-right mt-3 sm:mt-0">
                            <p className="text-xs text-slate-400 font-semibold uppercase">
                              Est. Tuition Fee
                            </p>
                            <p className="text-amber-600 font-bold text-lg">
                              {uni.fees}
                            </p>
                            <span className="inline-block mt-1 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                              ✓ Priority Admission
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            {/* Other Universities Section */}
            {data.otherUniversities && data.otherUniversities.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Other Top Universities in {countryName}
                </h2>
                <div className="space-y-4">
                  {data.otherUniversities.map((uni, idx) => (
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
            )}

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

              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-brand-blue mb-2 flex items-center gap-2">
                  <FiAward className="text-amber-500" /> Why Capton Visa Point?
                </h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <FiCheck className="text-green-500" /> Direct university
                    partnerships
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="text-green-500" /> Hassle-free admission
                    process
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="text-green-500" /> Complete visa
                    assistance
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="text-green-500" /> Pre-departure
                    guidance
                  </li>
                </ul>
              </div>

              {data.partnerUniversities &&
                data.partnerUniversities.length > 0 && (
                  <div className="mt-6 p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
                    <h4 className="font-bold text-amber-700 mb-2 flex items-center gap-2">
                      <FiStar className="text-amber-500" /> Partner Advantage
                    </h4>
                    <p className="text-sm text-slate-600">
                      We have{" "}
                      <span className="font-bold text-amber-600">
                        {data.partnerUniversities.length} direct partner{" "}
                        {data.partnerUniversities.length === 1
                          ? "university"
                          : "universities"}
                      </span>{" "}
                      in {countryName}. Apply through us for priority admission
                      and dedicated support!
                    </p>
                  </div>
                )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MbbsCountry;
