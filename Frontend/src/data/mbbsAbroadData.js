import {
  FiDollarSign,
  FiAward,
  FiBook,
  FiCheckCircle,
  FiUsers,
  FiFileText,
  FiGlobe,
  FiMapPin,
} from "react-icons/fi";

export const countries = [
  { name: "Russia",     avgFees: "$3,500 - $6,000/year", universities: "30+", benefit: "WHO & NMC Approved",     path: "/mbbs/russia",     hasPartners: true, partnerCount: 6 },
  { name: "Georgia",    avgFees: "$4,000 - $7,000/year", universities: "20+", benefit: "European Education",     path: "/mbbs/georgia",    hasPartners: true, partnerCount: 6 },
  { name: "Uzbekistan", avgFees: "$2,500 - $4,000/year", universities: "15+", benefit: "Most Affordable",        path: "/mbbs/uzbekistan", hasPartners: true, partnerCount: 8 },
  { name: "Kazakhstan", avgFees: "$3,500 - $5,000/year", universities: "12+", benefit: "Quality Infrastructure", path: "/mbbs/kazakhstan", hasPartners: true, partnerCount: 2 },
  { name: "Kyrgyzstan", avgFees: "$3,000 - $4,500/year", universities: "10+", benefit: "English Medium",         path: "/mbbs/kyrgyzstan", hasPartners: true, partnerCount: 7 },
  { name: "Tajikistan", avgFees: "$2,500 - $3,500/year", universities: "5+",  benefit: "Economical Option",      path: "/mbbs/tajikistan", hasPartners: true, partnerCount: 1 },
];

export const topUniversities = [
  { name: "Crimea Federal University",          location: "Simferopol, Russia",   fees: "$3,500/year", ranking: "WHO Listed" },
  { name: "Tbilisi State Medical University",   location: "Tbilisi, Georgia",     fees: "$6,000/year", ranking: "NMC Approved" },
  { name: "Tashkent Medical Academy",           location: "Tashkent, Uzbekistan", fees: "$3,200/year", ranking: "FAIMER Listed" },
  { name: "Al-Farabi Kazakh National University", location: "Almaty, Kazakhstan", fees: "$4,000/year", ranking: "Top 500 Global" },
];

// icon: component reference, iconClass: tailwind classes applied at render time
export const benefits = [
  { icon: FiDollarSign,   iconClass: "text-4xl text-blue-600",  title: "Affordable Fees",            description: "Government-funded universities with low tuition fees. No donation or capitation fees required. Total cost much lower than private Indian colleges." },
  { icon: FiAward,        iconClass: "text-4xl text-blue-500",  title: "Globally-Recognized Degrees", description: "Degrees recognized by WHO, NMC, UNESCO, FAIMER. Eligible to appear for FMGE/NEXT, USMLE, PLAB exams. Practice anywhere in the world." },
  { icon: FiBook,         iconClass: "text-4xl text-blue-600",  title: "No IELTS/TOEFL Needed",       description: "Complete MBBS program taught in English. No language proficiency tests required. Qualified international faculty with modern teaching methods." },
  { icon: FiCheckCircle, iconClass: "text-4xl text-orange-500", title: "Low NEET Cutoff",             description: "Just 130 marks for General category, 108 for SC/ST/OBC. Much lower than requirements for Indian colleges. Better chances of admission." },
];

export const eligibility = [
  "NEET qualification mandatory for Indian students",
  "Minimum 50% in Physics, Chemistry, Biology (PCB) for General",
  "Minimum 40% in PCB for SC/ST/OBC candidates",
  "Completed 17 years of age as of December 31st of admission year",
  "Valid passport required",
];

export const documents = [
  "10th & 12th Marksheets and Certificates",
  "NEET Score Card & Admit Card",
  "Valid Passport (minimum 18 months validity)",
  "Passport size photographs (white background)",
  "HIV Test Report (negative)",
  "Birth Certificate",
  "Medical Fitness Certificate",
  "Migration Certificate (if applicable)",
];

export const services = [
  { icon: FiUsers,       title: "Counselling",        desc: "Expert guidance from medical professionals with MBBS abroad experience" },
  { icon: FiFileText,    title: "Admission",           desc: "Complete documentation and seat confirmation in top universities" },
  { icon: FiCheckCircle, title: "Documentation",       desc: "Verification and apostille services for all documents" },
  { icon: FiGlobe,       title: "Travel Arrangement",  desc: "Air ticketing, visa, forex, airport pickup - all arranged" },
  { icon: FiMapPin,      title: "Accommodation",       desc: "Comfortable hostel accommodation with 24x7 assistance" },
  { icon: FiBook,        title: "FMGE Coaching",       desc: "Comprehensive coaching to clear FMGE/NEXT exam for India practice" },
];

export const processSteps = [
  { step: "1", title: "Counselling",       desc: "Choose the right university based on budget and preferences" },
  { step: "2", title: "Documentation",     desc: "Prepare and verify all required documents" },
  { step: "3", title: "Admission",         desc: "Apply and receive admission confirmation letter" },
  { step: "4", title: "Visa Processing",   desc: "Student visa application and approval" },
  { step: "5", title: "Travel",            desc: "Flight booking, forex, and airport pickup arrangement" },
  { step: "6", title: "Enrollment",        desc: "University enrollment and accommodation setup" },
];
