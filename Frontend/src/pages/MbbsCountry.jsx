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
  FiMapPin,
  FiArrowRight,
  FiGlobe,
} from "react-icons/fi";
import InquiryForm from "../components/forms/InquiryForm";
import SEO from "../components/SEO";

// Country-specific data with partner universities (direct contracts) and other universities
const countryData = {
  russia: {
    name: "Russia",
    bannerImage:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    duration: "6 Years (including 1 year internship)",
    medium: "English",
    recognition: "WHO, NMC (India), FAIMER",
    currency: "Russian Ruble (1 Ruble ≈ 1 INR)",
    costOfLiving: "$100–120 / month",
    feePayment: "Online bank transfer or USD cash payment after arrival",
    partnerUniversities: [
      {
        name: "Kazan State Medical University",
        location: "Kazan",
        fees: "$5,500 / year",
        slug: "kazan-state-medical-university",
      },
      {
        name: "Crimea Federal University",
        location: "Simferopol",
        fees: "$3,500 / year",
        slug: "crimea-federal-university",
      },
      {
        name: "Omsk State Medical University",
        location: "Omsk",
        fees: "$4,000 / year",
        slug: "omsk-state-medical-university",
      },
      {
        name: "Novosibirsk State University",
        location: "Novosibirsk",
        fees: "$5,000 / year",
        slug: "novosibirsk-state-university",
      },
      {
        name: "Izhevsk State Medical University",
        location: "Izhevsk",
        fees: "$4,500 / year",
        slug: "izhevsk-state-medical-university",
      },
      {
        name: "Kazan Federal University",
        location: "Kazan",
        fees: "$5,200 / year",
        slug: "kazan-federal-university",
      },
      {
        name: "Bashkir State Medical University",
        location: "Ufa",
        fees: "$4,000 / year",
        slug: "bashkir-state-medical-university",
      },
      {
        name: "Kemerovo State Medical University",
        location: "Kemerovo",
        fees: "$3,800 / year",
        slug: "kemerovo-state-medical-university",
      },
      {
        name: "Voronezh State Medical University",
        location: "Voronezh",
        fees: "$4,200 / year",
        slug: "voronezh-state-medical-university",
      },
      {
        name: "North Western State Medical University",
        location: "Saint Petersburg",
        fees: "$5,800 / year",
        slug: "north-western-state-medical-university",
      },
      {
        name: "Irkutsk State Medical University",
        location: "Irkutsk",
        fees: "$4,000 / year",
        slug: "irkutsk-state-medical-university",
      },
      {
        name: "Samara State Medical University",
        location: "Samara",
        fees: "$4,500 / year",
        slug: "samara-state-medical-university",
      },
      {
        name: "Sevastopol State University",
        location: "Sevastopol",
        fees: "$3,500 / year",
        slug: "sevastopol-state-university",
      },
      {
        name: "Ulyanovsk State University",
        location: "Ulyanovsk",
        fees: "$3,800 / year",
        slug: "ulyanovsk-state-university",
      },
    ],
    otherUniversities: [
      {
        name: "First Moscow State Medical University",
        location: "Moscow",
        fees: "$8,000 / year",
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
    duration: "6 Years (including 1 year internship)",
    medium: "English",
    recognition: "WHO, NMC (India), FAIMER",
    currency: "Georgian Lari (GEL)",
    costOfLiving: "$150–200 / month",
    feePayment: "Direct bank transfer or USD payment",
    partnerUniversities: [
      {
        name: "SEU University",
        location: "Tbilisi",
        fees: "$5,200 / year",
        slug: "seu-university",
      },
      {
        name: "BAU International University",
        location: "Batumi",
        fees: "$5,500 / year",
        slug: "bau-international-university",
      },
      {
        name: "East European University",
        location: "Tbilisi",
        fees: "$5,000 / year",
        slug: "east-european-university",
      },
      {
        name: "Georgian American University",
        location: "Tbilisi",
        fees: "$5,800 / year",
        slug: "georgian-american-university",
      },
      {
        name: "Alte University",
        location: "Tbilisi",
        fees: "$4,800 / year",
        slug: "alte-university",
      },
      {
        name: "Avicenna Medical University",
        location: "Tbilisi",
        fees: "$5,000 / year",
        slug: "avicenna-medical-university-georgia",
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
        name: "Caucasus University",
        location: "Tbilisi",
        fees: "$5,500 / year",
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
    duration: "5+1 Years (5 years study + 1 year internship)",
    medium: "English",
    recognition: "WHO, NMC (India), FAIMER",
    currency: "Uzbek Som (UZS)",
    costOfLiving: "$80–120 / month",
    feePayment: "USD payment – online transfer or cash",
    partnerUniversities: [
      {
        name: "Tashkent State Medical Institute",
        location: "Tashkent",
        fees: "$3,800 / year",
        slug: "tashkent-state-medical-institute",
      },
      {
        name: "Tashkent Medical Academy (Termez Branch)",
        location: "Termez",
        fees: "$3,000 / year",
        slug: "tashkent-medical-academy-termez",
      },
      {
        name: "Samarkand State Medical University",
        location: "Samarkand",
        fees: "$3,300 / year",
        slug: "samarkand-state-medical-university",
      },
      {
        name: "Bukhara State Medical Institute",
        location: "Bukhara",
        fees: "$3,500 / year",
        slug: "bukhara-state-medical-institute",
      },
      {
        name: "Fergana Medical Institute",
        location: "Fergana",
        fees: "$3,200 / year",
        slug: "fergana-medical-institute",
      },
      {
        name: "Gulistan State University",
        location: "Gulistan",
        fees: "$2,800 / year",
        slug: "gulistan-state-university",
      },
      {
        name: "Bukhara Innovative Medical Institute",
        location: "Bukhara",
        fees: "$3,200 / year",
        slug: "bukhara-innovative-medical-institute",
      },
      {
        name: "Kimyo International University in Tashkent",
        location: "Tashkent",
        fees: "$3,500 / year",
        slug: "kimyo-international-university",
      },
      {
        name: "Andijan State Medical Institute",
        location: "Andijan",
        fees: "$3,000 / year",
        slug: "andijan-state-medical-institute",
      },
      {
        name: "Mamun University",
        location: "Khiva",
        fees: "$3,000 / year",
        slug: "mamun-university",
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
    duration: "5+1 Years (5 years study + 1 year internship)",
    medium: "English / Russian",
    recognition: "WHO, NMC (India), FAIMER",
    currency: "Kazakhstani Tenge (KZT)",
    costOfLiving: "$120–180 / month",
    feePayment: "USD payment – bank transfer or cash",
    partnerUniversities: [
      {
        name: "Caspian International School of Medicine",
        location: "Almaty",
        fees: "$4,200 / year",
        slug: "caspian-international-school-of-medicine",
      },
      {
        name: "Kazakh Russian Medical University",
        location: "Almaty",
        fees: "$4,500 / year",
        slug: "kazakh-russian-medical-university",
      },
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
    duration: "5+1 Years (5 years study + 1 year internship)",
    medium: "English",
    recognition: "WHO, NMC (India), FAIMER",
    currency: "Kyrgyzstani Som (KGS)",
    costOfLiving: "$80–120 / month",
    feePayment: "USD payment – online transfer or cash",
    partnerUniversities: [
      {
        name: "Kyrgyz State Medical Academy",
        location: "Bishkek",
        fees: "$4,000 / year",
        slug: "kyrgyz-state-medical-academy",
      },
      {
        name: "International School of Medicine (ISM) – Central Campus",
        location: "Bishkek",
        fees: "$4,500 / year",
        slug: "international-school-of-medicine-central",
      },
      {
        name: "International School of Medicine (ISM) – Issyk-Kul",
        location: "Issyk-Kul",
        fees: "$4,200 / year",
        slug: "international-school-of-medicine-issyk-kul",
      },
      {
        name: "Kyrgyz-Uzbek International University",
        location: "Osh",
        fees: "$3,500 / year",
        slug: "kyrgyz-uzbek-international-university",
      },
      {
        name: "International Medical University (IMU)",
        location: "Bishkek",
        fees: "$4,300 / year",
        slug: "international-medical-university-imu",
      },
    ],
    otherUniversities: [
      {
        name: "Osh State University",
        location: "Osh",
        fees: "$3,500 / year",
      },
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
    duration: "5+1 Years (5 years study + 1 year internship)",
    medium: "English",
    recognition: "WHO, NMC (India), FAIMER",
    currency: "Tajikistani Somoni (TJS)",
    costOfLiving: "$70–100 / month",
    feePayment: "USD payment – bank transfer or cash",
    partnerUniversities: [
      {
        name: "Avicenna Tajik State Medical University",
        location: "Dushanbe",
        fees: "$3,500 / year",
        slug: "avicenna-tajik-state-medical-university",
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
  germany: {
    name: "Germany",
    bannerImage:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    partnerUniversities: [
      {
        name: "University of Heidelberg",
        location: "Heidelberg",
        fees: "€1,500 / semester",
      },
      {
        name: "Ludwig Maximilian University",
        location: "Munich",
        fees: "€258 / semester",
      },
      {
        name: "Charité - Universitätsmedizin Berlin",
        location: "Berlin",
        fees: "€315 / semester",
      },
    ],
    otherUniversities: [
      {
        name: "RWTH Aachen University",
        location: "Aachen",
        fees: "€294 / semester",
      },
      {
        name: "University of Freiburg",
        location: "Freiburg",
        fees: "€1,500 / semester",
      },
      {
        name: "University of Tübingen",
        location: "Tübingen",
        fees: "€1,500 / semester",
      },
      {
        name: "University of Göttingen",
        location: "Göttingen",
        fees: "€381 / semester",
      },
    ],
  },
  nepal: {
    name: "Nepal",
    bannerImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    partnerUniversities: [
      {
        name: "Kathmandu Medical College",
        location: "Kathmandu",
        fees: "$6,500 / year",
      },
      {
        name: "Manipal College of Medical Sciences",
        location: "Pokhara",
        fees: "$7,000 / year",
      },
      {
        name: "Nepal Medical College",
        location: "Kathmandu",
        fees: "$6,800 / year",
      },
      {
        name: "KIST Medical College",
        location: "Lalitpur",
        fees: "$6,200 / year",
      },
    ],
    otherUniversities: [
      {
        name: "B.P. Koirala Institute of Health Sciences",
        location: "Dharan",
        fees: "$5,500 / year",
      },
      {
        name: "Patan Academy of Health Sciences",
        location: "Lalitpur",
        fees: "$5,800 / year",
      },
      {
        name: "Gandaki Medical College",
        location: "Pokhara",
        fees: "$6,500 / year",
      },
      {
        name: "Chitwan Medical College",
        location: "Chitwan",
        fees: "$6,000 / year",
      },
    ],
  },
  italy: {
    name: "Italy",
    bannerImage:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    partnerUniversities: [
      {
        name: "University of Bologna",
        location: "Bologna",
        fees: "€2,000 / year",
      },
      {
        name: "Sapienza University of Rome",
        location: "Rome",
        fees: "€2,800 / year",
      },
      {
        name: "University of Padua",
        location: "Padua",
        fees: "€2,500 / year",
      },
    ],
    otherUniversities: [
      {
        name: "University of Milan",
        location: "Milan",
        fees: "€3,000 / year",
      },
      {
        name: "University of Pavia",
        location: "Pavia",
        fees: "€2,200 / year",
      },
      {
        name: "University of Turin",
        location: "Turin",
        fees: "€2,600 / year",
      },
      {
        name: "University of Naples Federico II",
        location: "Naples",
        fees: "€2,000 / year",
      },
      {
        name: "University of Pisa",
        location: "Pisa",
        fees: "€2,400 / year",
      },
    ],
  },
  bangladesh: {
    name: "Bangladesh",
    bannerImage:
      "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    partnerUniversities: [
      {
        name: "Dhaka Medical College",
        location: "Dhaka",
        fees: "$8,000 / year",
      },
      {
        name: "Chittagong Medical College",
        location: "Chittagong",
        fees: "$7,500 / year",
      },
      {
        name: "Sylhet MAG Osmani Medical College",
        location: "Sylhet",
        fees: "$7,200 / year",
      },
      {
        name: "Rajshahi Medical College",
        location: "Rajshahi",
        fees: "$7,000 / year",
      },
    ],
    otherUniversities: [
      {
        name: "Sir Salimullah Medical College",
        location: "Dhaka",
        fees: "$8,500 / year",
      },
      {
        name: "Mymensingh Medical College",
        location: "Mymensingh",
        fees: "$7,800 / year",
      },
      {
        name: "Rangpur Medical College",
        location: "Rangpur",
        fees: "$6,800 / year",
      },
      {
        name: "Comilla Medical College",
        location: "Comilla",
        fees: "$7,000 / year",
      },
    ],
  },
  barbados: {
    name: "Barbados",
    bannerImage:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    partnerUniversities: [
      {
        name: "American University of Barbados",
        location: "Wildey, St. Michael",
        fees: "$16,500 / year",
      },
      {
        name: "Ross University School of Medicine",
        location: "Bridgetown",
        fees: "$18,000 / year",
      },
    ],
    otherUniversities: [
      {
        name: "University of the West Indies",
        location: "Cave Hill",
        fees: "$15,000 / year",
      },
      {
        name: "Texila American University",
        location: "Wildey",
        fees: "$14,500 / year",
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
      <SEO
        title={`MBBS in ${countryName} | Fees, Universities & Admission 2026-2027`}
        description={`Study MBBS in ${countryName} with Capton Visa Point. Complete MBBS admission guidance 2026-2027 — fees structure, eligibility, WHO & NMC approved universities, visa process, hostel facilities, and Indian food availability. Affordable MBBS for Indian students.`}
        keywords={`MBBS in ${countryName}, study MBBS in ${countryName}, MBBS in ${countryName} fees, MBBS in ${countryName} for Indian students, ${countryName} MBBS admission, top medical universities in ${countryName}, low cost MBBS in ${countryName}, MBBS in ${countryName} eligibility, MBBS in ${countryName} consultants, MBBS abroad, WHO approved medical universities, NMC approved medical colleges, FMGE exam after MBBS abroad, NEXT exam for MBBS students`}
      />
      {/* Banner */}
      <section className="relative min-h-[70vh] pt-24 pb-12 flex items-center justify-center overflow-hidden">
        <img
          src={data.bannerImage}
          alt={countryName}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/50 to-slate-900/30" />
        <div className="relative z-20 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-1.5 rounded-full text-sm font-semibold text-white mb-4 inline-block uppercase tracking-wider">
              MBBS in {countryName}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              Study MBBS in {countryName}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
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

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <h3 className="font-bold text-slate-800">
                  {data.medium || "English"} Medium
                </h3>
                <p className="text-slate-500 text-sm">
                  Entire course is taught in {data.medium || "English"} for
                  international students.
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <FiCheck className="text-3xl text-purple-500 mb-3" />
                <h3 className="font-bold text-slate-800">
                  {data.recognition || "NMC"} Recognized
                </h3>
                <p className="text-slate-500 text-sm">
                  Graduates are eligible to sit for FMGE/NEXT in India.
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <FiClock className="text-3xl text-orange-500 mb-3" />
                <h3 className="font-bold text-slate-800">Duration</h3>
                <p className="text-slate-500 text-sm">
                  {data.duration || "6 Years (including internship)"} standard
                  duration.
                </p>
              </div>
              {data.costOfLiving && (
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                  <FiDollarSign className="text-3xl text-teal-500 mb-3" />
                  <h3 className="font-bold text-slate-800">Cost of Living</h3>
                  <p className="text-slate-500 text-sm">
                    Average monthly cost: {data.costOfLiving}
                  </p>
                </div>
              )}
              {data.currency && (
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                  <FiAward className="text-3xl text-indigo-500 mb-3" />
                  <h3 className="font-bold text-slate-800">Currency</h3>
                  <p className="text-slate-500 text-sm">{data.currency}</p>
                </div>
              )}
            </div>

            {/* Fee Payment Info */}
            {data.feePayment && (
              <div className="p-5 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <FiDollarSign className="text-blue-500" /> Fee Payment Method
                </h3>
                <p className="text-slate-600 text-sm">{data.feePayment}</p>
              </div>
            )}

            {/* Top Universities Section */}
            {data.partnerUniversities &&
              data.partnerUniversities.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                      <FiGlobe className="text-2xl text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">
                        Top Medical Universities in {countryName}
                      </h2>
                      <p className="text-sm text-slate-500">
                        Recommended universities for Indian students – Session
                        2026-27
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm mb-6 pl-1">
                    Explore the best medical universities in {countryName}{" "}
                    handpicked by our expert counsellors. These institutes offer
                    quality MBBS education at affordable fees with full
                    admission support from Capton Visa Point.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {data.partnerUniversities.map((uni, idx) => {
                      const CardWrapper = uni.slug ? Link : "div";
                      const cardProps = uni.slug
                        ? { to: `/mbbs/${countryKey}/${uni.slug}` }
                        : {};
                      return (
                        <CardWrapper
                          key={idx}
                          {...cardProps}
                          className="group relative bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                          {/* Top accent bar */}
                          <div className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

                          <div className="p-5">
                            {/* University number badge */}
                            <div className="flex items-start justify-between mb-3">
                              <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-lg text-sm font-bold">
                                {String(idx + 1).padStart(2, "0")}
                              </span>
                              {uni.slug && (
                                <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-500 bg-blue-50 px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                  View Details{" "}
                                  <FiArrowRight className="text-[10px]" />
                                </span>
                              )}
                            </div>

                            <h4 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                              {uni.name}
                            </h4>

                            <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-4">
                              <FiMapPin className="text-xs flex-shrink-0" />
                              <span>{uni.location}</span>
                            </div>

                            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                              <div>
                                <p className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">
                                  Tuition Fee
                                </p>
                                <p className="text-blue-600 font-bold text-lg">
                                  {uni.fees}
                                </p>
                              </div>
                              <span className="inline-flex items-center gap-1 text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full font-medium border border-green-100">
                                <FiCheck className="text-[10px]" /> Recommended
                              </span>
                            </div>
                          </div>
                        </CardWrapper>
                      );
                    })}
                  </div>
                </div>
              )}

            {/* More Universities Section */}
            {data.otherUniversities && data.otherUniversities.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <FiBookOpen className="text-slate-400" /> More Universities in{" "}
                  {countryName}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {data.otherUniversities.map((uni, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all bg-white group"
                    >
                      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 font-bold text-sm flex-shrink-0 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-slate-900 text-sm group-hover:text-blue-600 transition-colors truncate">
                          {uni.name}
                        </h4>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs text-slate-400 flex items-center gap-1">
                            <FiMapPin className="text-[10px]" /> {uni.location}
                          </span>
                          <span className="text-xs font-semibold text-blue-600">
                            {uni.fees}
                          </span>
                        </div>
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
              <InquiryForm
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
                  <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                    <h4 className="font-bold text-blue-700 mb-2 flex items-center gap-2">
                      <FiStar className="text-blue-500" /> Admission Support
                    </h4>
                    <p className="text-sm text-slate-600">
                      We work with{" "}
                      <span className="font-bold text-blue-600">
                        {data.partnerUniversities.length} top{" "}
                        {data.partnerUniversities.length === 1
                          ? "university"
                          : "universities"}
                      </span>{" "}
                      in {countryName}. Apply through us for smooth admission,
                      visa help & complete guidance!
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
