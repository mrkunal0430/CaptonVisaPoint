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
  FiCheckCircle,
  FiHeadphones,
  FiNavigation,
  FiHeart,
} from "react-icons/fi";

export const announcements = [
  "🔔 NEET 2025 Results Declared — Apply Now for MBBS Abroad 2025-26!",
  "📢 Last Date for MBBS Russia Admission: August 2025 — Book Your Seat Now!",
  "✅ NMC-Approved Universities Available in Russia, Georgia, Uzbekistan & More!",
  "🎓 4000+ Students Successfully Placed — Join the Capton Family!",
  "📱 Free MBBS Counselling Available — Call +91 99147 73125",
];

export const topCountries = [
  {
    name: "India",
    fees: "$3,500/yr",
    rank: "#1 Choice",
    link: "/mbbs/india",
    description: "Government & Private Colleges",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&auto=format&fit=crop&q=80",
    
  },
  {
    name: "Georgia",
    fees: "$4,000/yr",
    rank: "EU Standards",
    link: "/mbbs/georgia",
    description: "Lowest Fees in Europe",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&auto=format&fit=crop&q=80",
    
  },
  {
    name: "Russia",
    fees: "$3,500/yr",
    rank: "#1 Choice",
    link: "/mbbs/russia",
    description: "Top Ranked Universities",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=600&auto=format&fit=crop&q=80",
    
  },
  {
    name: "Uzbekistan",
    fees: "$3,000/yr",
    rank: "Lowest Cost",
    link: "/mbbs/uzbekistan",
    description: "NMC Approved Universities",
    image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=600&auto=format&fit=crop&q=80",
    
  },
  {
    name: "Kyrgyzstan",
    fees: "$2,800/yr",
    rank: "Budget Pick",
    link: "/mbbs/kyrgyzstan",
    description: "Top Medical Universities",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&auto=format&fit=crop&q=80",
    
  },
  {
    name: "Nepal",
    fees: "$6,200/yr",
    rank: "Nearest",
    link: "/mbbs/nepal",
    description: "Affordable Fees & Quality Education",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=80",
    
  },
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

export const whyChooseUs = [
  {
    icon: FiUsers,
    title: "Expert Counseling",
    desc: "One to one guidance by MBBS experts",
  },
  {
    icon: FiCheckCircle,
    title: "100% Admission Assistance",
    desc: "End to end admission support",
  },
  {
    icon: FiNavigation,
    title: "Visa & Travel Support",
    desc: "Complete visa & travel assistance",
  },
  {
    icon: FiHeadphones,
    title: "After Admission Support",
    desc: "Continued support even after admission",
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

export const costComparison = [
  {
    option: "Government Colleges (India)",
    fees: "₹ 5 - 10 Lacs",
    chance: "Very Low",
    chanceColor: "text-red-500",
    highlights: "Very tough competition",
  },
  {
    option: "Private Colleges (India)",
    fees: "₹ 80 Lacs - ₹ 1 Cr",
    chance: "Medium",
    chanceColor: "text-amber-500",
    highlights: "High fees & donation",
  },
  {
    option: "MBBS Abroad",
    fees: "₹ 15 Lacs - ₹ 30 Lacs",
    chance: "High",
    chanceColor: "text-green-600",
    highlights: "Affordable & High Admission Chance",
    highlighted: true,
  },
];

export const studentLife = [
  {
    title: "Comfortable Hostel & Indian Food",
    image: "/mbbs-assets/student-hostel.png",
  },
  {
    title: "Practical Training in Top Hospitals",
    image: "/mbbs-assets/student-training.png",
  },
  {
    title: "Modern Labs & Infrastructure",
    image: "/mbbs-assets/student-labs.png",
  },
  {
    title: "Safe & Secure Environment",
    image: "/mbbs-assets/student-campus.png",
  },
  {
    title: "Indian Student Community",
    image: "/mbbs-assets/student-community.png",
  },
];

export const trustBadges = [
  { icon: FiAward, value: "10+", label: "Years of Experience" },
  { icon: FiUsers, value: "5000+", label: "Successful Admissions" },
  { icon: FiShield, value: "NMC & WHO", label: "Approved Universities" },
  { icon: FiCheckCircle, value: "Transparent", label: "Process No Hidden Charges" },
  { icon: FiHeadphones, value: "24/7", label: "Support for Students & Parents" },
];

export const mbbsTestimonials = [
  {
    name: "Rahul Sharma",
    role: "MBBS, Georgia",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    text: "I couldn't get a good college in India. Thanks to Capton Visa Point, I am now studying in a top university in Georgia at an affordable cost.",
    rating: 5,
  },
  {
    name: "Anita Verma (Parent)",
    role: "Mother of MBBS Student, Russia",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    text: "The team guided us in every step. My daughter is now pursuing MBBS in Russia. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    role: "Medical Student, Uzbekistan",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    text: "Very transparent counseling. They explained everything honestly about fees, living conditions and exam preparation. Trustworthy consultancy.",
    rating: 5,
  },
  {
    name: "Arjun Reddy",
    role: "MBBS Student, Kyrgyzstan",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    text: "Capton Visa Point made my dream of becoming a doctor come true. The support from counseling to arrival was exceptional.",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "Is MBBS abroad valid in India?",
    answer: "Yes! MBBS degrees from NMC-approved and WHO-listed universities abroad are valid in India. Graduates need to clear the FMGE (Foreign Medical Graduate Exam) or the upcoming NEXT exam to practice medicine in India.",
  },
  {
    question: "What is FMGE / NEXT exam?",
    answer: "FMGE (Foreign Medical Graduate Examination) is a licensing exam conducted by NMC for Indian students who completed MBBS abroad. NEXT (National Exit Test) is planned to replace FMGE as a unified exam for all medical graduates.",
  },
  {
    question: "Is NEET compulsory for MBBS abroad?",
    answer: "Yes, NEET qualification is mandatory for Indian students pursuing MBBS abroad to be eligible to practice in India. Minimum qualifying marks: General 50th percentile, OBC/SC/ST 40th percentile.",
  },
  {
    question: "Is it safe for girls to study abroad?",
    answer: "Absolutely! All our partner universities provide safe, secure hostels with CCTV surveillance, separate girls' hostels, 24/7 security, and a dedicated support team for international students.",
  },
  {
    question: "What is the total cost of MBBS abroad?",
    answer: "The total cost varies by country: Russia ₹20-35L, Georgia ₹25-40L, Uzbekistan ₹15-20L, Kyrgyzstan ₹15-30L. This includes tuition, hostel, and living expenses for the full 6-year course.",
  },
  {
    question: "What is the admission process?",
    answer: "The process is simple: 1) NEET qualification 2) Choose university with our guidance 3) Submit documents 4) Receive admission letter 5) Visa processing 6) Travel & enrollment. We handle everything end-to-end.",
  },
];
