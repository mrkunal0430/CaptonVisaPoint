import {
  FiBook,
  FiGlobe,
  FiShield,
  FiMapPin,
  FiAward,
  FiDollarSign,
  FiUsers,
  FiTrendingUp,
  FiClock,
  FiStar,
} from "react-icons/fi";

export const announcements = [
  "🔔 NEET 2025 Results Declared — Apply Now for MBBS Abroad 2025-26!",
  "📢 Last Date for MBBS Russia Admission: August 2025 — Book Your Seat Now!",
  "✅ NMC-Approved Universities Available in Russia, Georgia, Uzbekistan & More!",
  "🎓 4000+ Students Successfully Placed — Join the Capton Family!",
  "📱 Free MBBS Counselling Available — Call +91 99147 73125",
];

export const topCountries = [
  { name: "Russia",     fees: "$3,500/yr", seats: "50+", rank: "#1 Choice",    link: "/mbbs/russia" },
  { name: "Georgia",    fees: "$4,000/yr", seats: "20+", rank: "EU Standards", link: "/mbbs/georgia" },
  { name: "Uzbekistan", fees: "$3,000/yr", seats: "15+", rank: "Lowest Cost",  link: "/mbbs/uzbekistan" },
  { name: "Kazakhstan", fees: "$3,200/yr", seats: "10+", rank: "Top Rated",    link: "/mbbs/kazakhstan" },
  { name: "Kyrgyzstan", fees: "$2,800/yr", seats: "8+",  rank: "Budget Pick",  link: "/mbbs/kyrgyzstan" },
  { name: "Germany",    fees: "€500/yr",   seats: "5+",  rank: "Free Education", link: "/mbbs/abroad" },
];

export const processSteps = [
  {
    num: "01",
    title: "NEET Qualification",
    desc: "Clear NEET with minimum qualifying marks (50th percentile general, 40th OBC/SC/ST)",
    icon: FiBook,
  },
  {
    num: "02",
    title: "University Selection",
    desc: "We shortlist NMC-approved universities matching your budget, rank & preferences",
    icon: FiGlobe,
  },
  {
    num: "03",
    title: "Documentation",
    desc: "Complete application, attestation, and admission letter — we handle everything",
    icon: FiShield,
  },
  {
    num: "04",
    title: "Visa & Travel",
    desc: "Student visa processing, pre-departure orientation, and travel arrangements",
    icon: FiMapPin,
  },
  {
    num: "05",
    title: "Begin Journey",
    desc: "Land, settle, and start your MBBS with ongoing support from our team",
    icon: FiAward,
  },
];

export const whyUs = [
  { icon: FiShield,    title: "NMC Approved Only",      desc: "We partner exclusively with universities recognized by NMC & WHO",           bg: "bg-blue-900" },
  { icon: FiDollarSign, title: "Zero Hidden Fees",       desc: "Transparent pricing — no surprise costs at any stage of admission",           bg: "bg-blue-800" },
  { icon: FiUsers,     title: "Dedicated Counsellors",   desc: "1-on-1 expert guidance from NEET score to graduation",                        bg: "bg-blue-700" },
  { icon: FiTrendingUp, title: "98% Success Rate",       desc: "Over 4000+ students placed in top medical universities worldwide",            bg: "bg-amber-600" },
  { icon: FiClock,     title: "Fast Processing",          desc: "Admission confirmed in 15-30 days — fastest in the industry",                bg: "bg-blue-900" },
  { icon: FiStar,      title: "Post-Admission Support",  desc: "FMGE/NEXT coaching guidance, airport pickup, hostel assistance",             bg: "bg-blue-800" },
];

export const faqs = [
  {
    question: "What is the duration of MBBS?",
    answer: "MBBS is typically a 5.5 to 6-year program including internship, depending on the country and university. In Russia and CIS countries it's 6 years; in India it's 5.5 years.",
  },
  {
    question: "Is NEET mandatory for MBBS abroad?",
    answer: "Yes, NEET qualification is mandatory for Indian students pursuing MBBS abroad to practice in India after completing the degree. Minimum qualifying marks: General 50th percentile, OBC/SC/ST 40th percentile.",
  },
  {
    question: "Can I practice in India after MBBS abroad?",
    answer: "Yes! After completing MBBS abroad from an NMC-approved university, you must clear the FMGE (Foreign Medical Graduate Exam) or the upcoming NEXT exam conducted by NMC to register and practice in India.",
  },
  {
    question: "What is the average cost of MBBS?",
    answer: "Costs vary: Government colleges in India: ₹10K–1L/year | Private India: ₹10–25L/year | MBBS Abroad (Russia, Uzbekistan): $2,800–4,000/year | Georgia, Kazakhstan: $3,200–5,000/year. Total abroad cost: ₹20–35 lakhs for the full course.",
  },
  {
    question: "What is the minimum NEET score for MBBS abroad?",
    answer: "There is no specific minimum score for admission — only the qualifying percentile (50th for General, 40th for OBC/SC/ST). However, universities may have their own criteria. We help match your score to the right university.",
  },
  {
    question: "Do MBBS abroad universities teach in English?",
    answer: "Yes! All our partner universities in Russia, Georgia, Uzbekistan, Kazakhstan, and Kyrgyzstan offer English-medium MBBS programs specifically designed for international students.",
  },
];
