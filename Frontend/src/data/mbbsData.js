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

// ═══════════════════════════════════════════════════
// Country-specific data with partner universities
// ═══════════════════════════════════════════════════

export const countryData = {
  russia: {
    name: "Russia",
    bannerImage:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    duration: "6 Years (including 1 year internship)",
    medium: "English",
    recognition: "WHO, NMC (India), FAIMER",
    currency: "Russian Ruble (1 Ruble Γëê 1 INR)",
    costOfLiving: "$100ΓÇô120 / month",
    feePayment: "Online bank transfer or USD cash payment after arrival",
    seoTitle: "MBBS in Russia for Indian Students | Fees & Admission",
    seoDescription: "Study MBBS in Russia at low fees. Get admission guidance, eligibility support & visa assistance for Indian students. Apply now 2026.",
    seoKeywords: "MBBS in Russia for Indian students, study MBBS in Russia fees, low cost MBBS in Russia, Russia medical universities for Indians, MBBS Russia admission 2026, study medicine in Russia consultants, MBBS in Russia without donation, Russia MBBS eligibility for Indian students, best medical colleges in Russia for Indians, Russia MBBS visa process India, study abroad consultants India, best study abroad consultants in Delhi, student visa consultants India, overseas education consultants",
    whyChoose:
      "Russia is one of the most popular and trusted destinations for Indian students seeking affordable, world-class MBBS education abroad. With over 50 NMC-recognized and WHO-listed medical universities, Russia has a proven track record of training competent doctors from around the globe. Tuition fees in Russia are among the lowest ΓÇö the total 6-year MBBS cost ranges from just Γé╣18ΓÇô35 Lakhs including tuition, hostel, and living. Most universities offer fully English-medium programs, and there are no donation or capitation fees. Russian medical universities feature modern laboratories, simulation centers, and extensive clinical training at multi-specialty hospitals. Indian students benefit from the availability of Indian food in hostel messes, a growing Indian community, safe campus environments, and dedicated FMGE/NEXT coaching at many institutions.",
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
    costOfLiving: "$150ΓÇô200 / month",
    feePayment: "Direct bank transfer or USD payment",
    seoTitle: "MBBS in Georgia for Indian Students | Fees & Colleges",
    seoDescription: "Affordable MBBS in Georgia with top universities. Get admission help, eligibility details & visa support for Indian students.",
    seoKeywords: "MBBS in Georgia for Indian students, study MBBS in Georgia fees, Georgia medical universities admission, MBBS Georgia eligibility India, low cost MBBS in Georgia, Georgia MBBS consultants India, study medicine in Georgia, Georgia MBBS without donation, Georgia medical college admission, Georgia MBBS visa process, study abroad consultants India, best study abroad consultants in Delhi, student visa consultants India, overseas education consultants",
    whyChoose:
      "Georgia has emerged as one of Europe's most sought-after destinations for Indian medical students, offering European-standard MBBS education at highly affordable fees. Georgian medical universities are recognized by WHO, NMC, ECFMG, and FAIMER, ensuring global degree validity. Annual tuition fees range from just $3,000ΓÇô$6,000, and the total 6-year cost is approximately Γé╣25ΓÇô40 Lakhs ΓÇö a fraction of what Indian private medical colleges charge. Admissions are merit-based with no donation or capitation fees, and all programs are taught entirely in English. Georgia is known for its exceptionally safe and welcoming environment, low crime rate, and multicultural atmosphere. Universities feature modern infrastructure, simulation labs, and strong clinical hospital training. Many Georgian medical graduates achieve excellent FMGE/NEXT pass rates, and some universities offer integrated preparation within their curriculum.",
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
    bannerImage: "/Mbbs_Countries/Uzbekistan.webp",
    duration: "5+1 Years (5 years study + 1 year internship)",
    medium: "English",
    recognition: "WHO, NMC (India), FAIMER",
    currency: "Uzbek Som (UZS)",
    costOfLiving: "$80ΓÇô120 / month",
    feePayment: "USD payment ΓÇô online transfer or cash",
    seoTitle: "MBBS in Uzbekistan for Indian Students | Low Fees",
    seoDescription: "Study MBBS in Uzbekistan at low cost. Explore top medical colleges, eligibility & visa process for Indian students.",
    seoKeywords: "MBBS in Uzbekistan for Indian students, study MBBS in Uzbekistan fees, Uzbekistan medical colleges admission, low cost MBBS Uzbekistan, Uzbekistan MBBS eligibility India, study medicine in Uzbekistan, Uzbekistan MBBS consultants, MBBS Uzbekistan admission 2026, Uzbekistan medical university fees, Uzbekistan MBBS visa process, study abroad consultants India, best study abroad consultants in Delhi, student visa consultants India, overseas education consultants",
    whyChoose:
      "Choosing the right destination for your MBBS is not just about education. It is about your future, your career, and your long-term success.\n\nIf you are a NEET-qualified student struggling with limited seats and high fees in India, Uzbekistan offers a reliable and affordable alternative. It combines quality education, global recognition, and a student-friendly environment.\n\nUzbekistan has emerged as a popular destination for Indian medical aspirants. In recent years, more than 4000 Indian students have chosen Uzbekistan for their MBBS studies. The growing student community ensures better support and familiarity for new students.\n\nMedical universities in Uzbekistan follow international standards similar to countries like the UK, USA, and Australia. Degrees are recognized by major global bodies such as NMC, WHO, and FAIMER, allowing students to pursue medical careers worldwide after clearing required licensing exams.\n\nAll major universities offer MBBS programs in English. This eliminates language barriers and helps Indian students adapt easily to the academic environment.\n\nThe total cost of completing MBBS in Uzbekistan is approximately 15 to 20 lakhs for six years. This makes it a cost-effective option compared to private medical colleges in India.\n\nThe MBBS program includes a mandatory one-year internship. Students gain hands-on clinical experience in university-affiliated hospitals, ensuring they are well-prepared for real-world medical practice.",
    highlights: [
      "Strong IndiaΓÇôUzbekistan relations with 4000+ Indian students",
      "Globally recognized degrees ΓÇö NMC, WHO, FAIMER approved",
      "English medium education at all major universities",
      "Affordable fees ΓÇö total Γé╣15ΓÇô20 Lakhs for 6 years",
      "Mandatory 1-year internship with hands-on clinical training",
      "Indian food, groceries & daily-use products easily available",
      "Modern & secure hostels with AC, CCTV & separate facilities",
      "Simple admission ΓÇö 50% in PCB + NEET, no donations",
      "Low cost of living ΓÇö Γé╣70,000ΓÇô80,000/month including accommodation",
    ],
    whoShouldChoose:
      "MBBS in Uzbekistan is ideal for NEET-qualified students looking for affordable medical education, students unable to secure government seats in India, and those seeking global exposure with quality training. Do not let limited seats or high costs stop you from achieving your dream of becoming a doctor. Capton Visa Point provides complete support including university selection, admission assistance, visa processing, and travel guidance.",
    faqs: [
      {
        question: "Is MBBS in Uzbekistan valid in India?",
        answer: "Yes, universities are recognized by NMC. Students need to clear FMGE or NEXT to practice in India.",
      },
      {
        question: "What is the duration of MBBS in Uzbekistan?",
        answer: "The course duration is six years including internship.",
      },
      {
        question: "Is NEET mandatory?",
        answer: "Yes, NEET qualification is required for Indian students.",
      },
      {
        question: "Is Uzbekistan safe for Indian students?",
        answer: "Yes, it is considered safe with proper hostel facilities and campus security.",
      },
    ],
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
    costOfLiving: "$120ΓÇô180 / month",
    feePayment: "USD payment ΓÇô bank transfer or cash",
    seoTitle: "MBBS in Kazakhstan for Indian Students | Fees & Visa",
    seoDescription: "Affordable MBBS in Kazakhstan with top universities. Get admission guidance, eligibility & visa support for Indian students.",
    seoKeywords: "MBBS in Kazakhstan for Indian students, study MBBS in Kazakhstan fees, Kazakhstan medical colleges admission, low cost MBBS Kazakhstan, Kazakhstan MBBS eligibility India, study medicine in Kazakhstan, Kazakhstan MBBS consultants India, MBBS Kazakhstan admission 2026, Kazakhstan medical university fees, Kazakhstan MBBS visa process, study abroad consultants India, best study abroad consultants in Delhi, student visa consultants India, overseas education consultants",
    whyChoose:
      "Kazakhstan offers Indian students a unique combination of affordable, high-quality medical education with globally recognized degrees in a modern, multicultural Central Asian setting. Several Kazakh medical universities are NMC-approved and WHO-listed, with annual tuition fees ranging from $3,500ΓÇô$5,500 and total course costs between Γé╣20ΓÇô35 Lakhs. Most programs are offered in English medium, and admissions are straightforward ΓÇö based on NEET qualification with no donation or capitation fees. Kazakhstan's medical universities feature modern laboratories, advanced teaching facilities, and comprehensive clinical training at multi-specialty hospitals. The country is known for its safe environment, welcoming attitude toward international students, and relatively affordable cost of living. Students benefit from multicultural campus life, Indian food availability, and excellent connectivity to India.",
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
      "https://tse1.mm.bing.net/th/id/OIP.j-6VMIkb0CckCZfe1-ku5wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    duration: "5+1 Years (5 years study + 1 year internship)",
    medium: "English",
    recognition: "WHO, NMC (India), FAIMER",
    currency: "Kyrgyzstani Som (KGS)",
    costOfLiving: "$80ΓÇô120 / month",
    feePayment: "USD payment ΓÇô online transfer or cash",
    seoTitle: "MBBS in Kyrgyzstan for Indian Students | Low Fees",
    seoDescription: "Affordable MBBS in Kyrgyzstan with top universities. Get admission support, eligibility & visa assistance for students.",
    seoKeywords: "MBBS in Kyrgyzstan for Indian students, study MBBS in Kyrgyzstan fees, Kyrgyzstan medical universities admission, low cost MBBS Kyrgyzstan, Kyrgyzstan MBBS eligibility India, study medicine in Kyrgyzstan, Kyrgyzstan MBBS consultants, MBBS Kyrgyzstan admission 2026, Kyrgyzstan medical college fees, Kyrgyzstan MBBS visa process, study abroad consultants India, best study abroad consultants in Delhi, student visa consultants India, overseas education consultants",
    whyChoose:
      "Kyrgyzstan is a highly popular and budget-friendly destination for Indian students pursuing MBBS abroad, known for its NMC-recognized universities, English-medium programs, and one of the lowest costs of medical education globally. The total 6-year MBBS cost ranges from just Γé╣15ΓÇô30 Lakhs, with annual tuition fees between $3,500ΓÇô$4,500. Multiple universities ΓÇö including Kyrgyz State Medical Academy, International School of Medicine, and others ΓÇö are NMC-approved and WHO-listed, ensuring graduates can practice in India after clearing FMGE/NEXT. The admission process is simple, requiring only NEET qualification with no entrance exams or capitation fees. Kyrgyzstan's universities provide quality practical training with clinical exposure at affiliated hospitals, and many offer dedicated FMGE coaching by Indian professors. Students enjoy a safe, peaceful study environment with comfortable hostels, Indian food messes, and a vibrant Indian student community.",
    partnerUniversities: [
      {
        name: "Kyrgyz State Medical Academy",
        location: "Bishkek",
        fees: "$4,000 / year",
        slug: "kyrgyz-state-medical-academy",
      },
      {
        name: "International School of Medicine (ISM) ΓÇô Central Campus",
        location: "Bishkek",
        fees: "$4,500 / year",
        slug: "international-school-of-medicine-central",
      },
      {
        name: "International School of Medicine (ISM) ΓÇô Issyk-Kul",
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
    costOfLiving: "$70ΓÇô100 / month",
    feePayment: "USD payment ΓÇô bank transfer or cash",
    seoTitle: "MBBS in Tajikistan for Indian Students | Fees & Colleges",
    seoDescription: "Study MBBS in Tajikistan at low cost. Get admission guidance, eligibility & visa support for Indian students.",
    seoKeywords: "MBBS in Tajikistan for Indian students, study MBBS in Tajikistan fees, Tajikistan medical universities admission, low cost MBBS Tajikistan, Tajikistan MBBS eligibility India, study medicine in Tajikistan, Tajikistan MBBS consultants, MBBS Tajikistan admission 2026, Tajikistan medical college fees, Tajikistan MBBS visa process, study abroad consultants India, best study abroad consultants in Delhi, student visa consultants India, overseas education consultants",
    whyChoose:
      "Tajikistan is an emerging and cost-effective destination for Indian students seeking MBBS abroad, particularly known for the prestigious Avicenna Tajik State Medical University ΓÇö the oldest and most renowned medical institution in the country. With annual tuition fees of $3,000ΓÇô$4,800 and a total course cost of approximately Γé╣18ΓÇô28 Lakhs, Tajikistan offers one of the most affordable MBBS programs globally. Medical universities here are recognized by NMC, WHO, FAIMER, and ECFMG, ensuring graduates are eligible to practice in India after clearing FMGE/NEXT. Programs are taught in English medium, and admission is straightforward ΓÇö based on NEET qualification with no donation required. Students benefit from quality clinical exposure, experienced faculty, safe and friendly campus environments, and very low cost of living ($70ΓÇô100/month). Tajikistan is an ideal choice for students looking for a genuine, affordable medical education without compromising on quality and recognition.",
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
    duration: "6 Years 3 Months (incl. 1 year internship)",
    medium: "German (B2/C1 required); some English-track programs",
    recognition: "WHO, NMC (FMGE/NEXT required), FAIMER",
    currency: "Euro (Γé¼)",
    costOfLiving: "Γé¼850ΓÇô1,200 / month",
    feePayment: "Semester contribution to university ΓÇô online transfer in EUR",
    seoTitle: "MBBS in Germany for Indian Students | Free Education",
    seoDescription: "Study MBBS in Germany with low or no tuition fees. Get admission guidance, eligibility & visa assistance for Indian students.",
    seoKeywords: "MBBS in Germany for Indian students, study medicine in Germany, free MBBS in Germany, Germany medical universities admission, MBBS Germany eligibility India, study MBBS in Germany requirements, Germany medical course without tuition fees, MBBS Germany consultants India, Germany medical visa process, study medicine Germany without IELTS, study abroad consultants India, best study abroad consultants in Delhi, student visa consultants India, overseas education consultants",
    whyChoose:
      "Germany is a global leader in medical education and research with public universities offering virtually tuition-free MBBS (Medizin) programs. German medical degrees are recognized worldwide. The country boasts cutting-edge research facilities, university hospitals ranked among the best in Europe, and strong clinical training. Students benefit from a structured Studienkolleg pathway, a 6-year rigorous curriculum, and the opportunity to practice in one of the world's best healthcare systems.",
    partnerUniversities: [
      {
        name: "University of Heidelberg",
        location: "Heidelberg",
        fees: "Γé¼1,500 / semester",
        slug: "university-of-heidelberg",
      },
      {
        name: "Ludwig Maximilian University (LMU)",
        location: "Munich",
        fees: "Γé¼258 / semester",
        slug: "ludwig-maximilian-university",
      },
      {
        name: "Charit├⌐ ΓÇô Universit├ñtsmedizin Berlin",
        location: "Berlin",
        fees: "Γé¼315 / semester",
        slug: "charite-universitaetsmedizin-berlin",
      },
      {
        name: "Technical University of Munich (TUM)",
        location: "Munich",
        fees: "Γé¼258 / semester",
        slug: "technical-university-of-munich",
      },
    ],
    otherUniversities: [
      {
        name: "RWTH Aachen University",
        location: "Aachen",
        fees: "Γé¼294 / semester",
      },
      {
        name: "University of Freiburg",
        location: "Freiburg",
        fees: "Γé¼1,500 / semester",
      },
      {
        name: "University of T├╝bingen",
        location: "T├╝bingen",
        fees: "Γé¼1,500 / semester",
      },
      {
        name: "University of G├╢ttingen",
        location: "G├╢ttingen",
        fees: "Γé¼381 / semester",
      },
      {
        name: "Goethe University Frankfurt",
        location: "Frankfurt",
        fees: "Γé¼390 / semester",
      },
      {
        name: "University of Hamburg",
        location: "Hamburg",
        fees: "Γé¼335 / semester",
      },
    ],
  },
  nepal: {
    name: "Nepal",
    bannerImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    duration: "5.5 Years (4.5 years study + 1 year internship)",
    medium: "English",
    recognition: "WHO, NMC (India), FAIMER",
    currency: "Nepalese Rupee (NPR)",
    costOfLiving: "Γé╣10,000ΓÇô15,000 / month",
    feePayment: "INR or USD payment ΓÇô bank transfer",
    seoTitle: "MBBS in Nepal for Indian Students | Fees & Admission",
    seoDescription: "Study MBBS in Nepal at affordable fees. Get admission support, eligibility & entrance exam guidance for Indian students.",
    seoKeywords: "MBBS in Nepal for Indian students, study MBBS in Nepal fees, Nepal medical colleges admission, low cost MBBS Nepal, Nepal MBBS eligibility India, study medicine in Nepal, Nepal MBBS consultants India, MBBS Nepal admission 2026, Nepal medical college fees, Nepal MBBS entrance exam, study abroad consultants India, best study abroad consultants in Delhi, student visa consultants India, overseas education consultants",
    whyChoose:
      "Nepal is one of the most convenient destinations for Indian students to study MBBS due to its geographical proximity, similar culture, and no visa requirement for Indian citizens. The medical curriculum in Nepal closely follows the Indian pattern. Universities are NMC & WHO recognized, fees are affordable compared to Indian private colleges, and degrees are valid for FMGE/NEXT licensing in India. Students enjoy a familiar environment, easy travel to and from India, and quality clinical training.",
    partnerUniversities: [
      {
        name: "Kathmandu Medical College",
        location: "Kathmandu",
        fees: "$6,500 / year",
        slug: "kathmandu-medical-college",
      },
      {
        name: "Manipal College of Medical Sciences",
        location: "Pokhara",
        fees: "$7,000 / year",
        slug: "manipal-college-of-medical-sciences",
      },
      {
        name: "Nepal Medical College",
        location: "Kathmandu",
        fees: "$6,800 / year",
        slug: "nepal-medical-college",
      },
      {
        name: "KIST Medical College",
        location: "Lalitpur",
        fees: "$6,200 / year",
        slug: "kist-medical-college",
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
      {
        name: "Nobel Medical College",
        location: "Biratnagar",
        fees: "$6,200 / year",
      },
      {
        name: "Universal College of Medical Sciences",
        location: "Bhairahawa",
        fees: "$5,800 / year",
      },
      {
        name: "Lumbini Medical College",
        location: "Palpa",
        fees: "$5,500 / year",
      },
      {
        name: "College of Medical Sciences",
        location: "Bharatpur",
        fees: "$6,000 / year",
      },
    ],
  },
  italy: {
    name: "Italy",
    bannerImage:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    duration: "6 Years (integrated MD program)",
    medium: "English (IMAT entrance exam required)",
    recognition: "WHO, NMC (FMGE/NEXT required), FAIMER",
    currency: "Euro (Γé¼)",
    costOfLiving: "Γé¼700ΓÇô1,000 / month",
    feePayment: "Income-based (ISEE certificate) ΓÇô EUR bank transfer",
    seoTitle: "MBBS in Italy for Indian Students | IMAT & Fees",
    seoDescription: "Study MBBS in Italy via IMAT exam. Get admission guidance, eligibility & visa assistance for Indian students.",
    seoKeywords: "MBBS in Italy for Indian students, study MBBS in Italy fees, Italy medical universities admission, IMAT exam preparation India, low cost MBBS Italy, Italy MBBS eligibility India, study medicine in Italy, Italy MBBS consultants, MBBS Italy admission 2026, Italy medical visa process, study abroad consultants India, best study abroad consultants in Delhi, student visa consultants India, overseas education consultants",
    whyChoose:
      "Italy offers one of the most affordable and prestigious MBBS (Medicina e Chirurgia) programs in Europe. Public universities charge income-based fees starting from as low as Γé¼500/year. Many top universities ΓÇô including Sapienza, University of Bologna, and University of Padua ΓÇô offer English-taught MD programs through the IMAT entrance exam. Italy's medical degrees are globally recognized by WHO and NMC. Students benefit from a rich cultural experience, world-class hospital training in renowned Italian healthcare institutions, and access to DSU scholarships that can cover tuition, housing, and living expenses.",
    partnerUniversities: [
      {
        name: "University of Bologna",
        location: "Bologna",
        fees: "Γé¼500ΓÇô4,500 / year (income-based)",
        slug: "university-of-bologna",
      },
      {
        name: "Sapienza University of Rome",
        location: "Rome",
        fees: "Γé¼1,000ΓÇô2,900 / year (income-based)",
        slug: "sapienza-university-of-rome",
      },
      {
        name: "University of Padua",
        location: "Padua",
        fees: "Γé¼500ΓÇô2,700 / year (income-based)",
        slug: "university-of-padua",
      },
    ],
    otherUniversities: [
      {
        name: "University of Milan",
        location: "Milan",
        fees: "Γé¼500ΓÇô4,100 / year",
      },
      {
        name: "University of Pavia",
        location: "Pavia",
        fees: "Γé¼500ΓÇô3,500 / year",
      },
      {
        name: "University of Turin",
        location: "Turin",
        fees: "Γé¼500ΓÇô2,800 / year",
      },
      {
        name: "University of Naples Federico II",
        location: "Naples",
        fees: "Γé¼500ΓÇô2,500 / year",
      },
      {
        name: "University of Pisa",
        location: "Pisa",
        fees: "Γé¼500ΓÇô3,000 / year",
      },
      {
        name: "University of Milan-Bicocca",
        location: "Milan",
        fees: "Γé¼500ΓÇô4,900 / year",
      },
      {
        name: "University of Bari Aldo Moro",
        location: "Bari",
        fees: "Γé¼500ΓÇô2,500 / year",
      },
    ],
  },
  bangladesh: {
    name: "Bangladesh",
    bannerImage:
      "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    duration: "5+1 Years (5 years study + 1 year internship)",
    medium: "English",
    recognition: "WHO, NMC (India), BMDC",
    currency: "Bangladeshi Taka (BDT)",
    costOfLiving: "Γé╣6,000ΓÇô10,000 / month",
    feePayment: "USD or BDT payment ΓÇô bank transfer or demand draft",
    seoTitle: "MBBS in Bangladesh for Indian Students | Low Fees",
    seoDescription: "Affordable MBBS in Bangladesh with top colleges. Get admission guidance, eligibility & visa support for Indian students.",
    seoKeywords: "MBBS in Bangladesh for Indian students, study MBBS in Bangladesh fees, Bangladesh medical colleges admission, low cost MBBS Bangladesh, Bangladesh MBBS eligibility India, study medicine in Bangladesh, Bangladesh MBBS consultants, MBBS Bangladesh admission 2026, Bangladesh medical college fees, Bangladesh MBBS visa process, study abroad consultants India, best study abroad consultants in Delhi, student visa consultants India, overseas education consultants",
    whyChoose:
      "Bangladesh is a popular and cost-effective destination for Indian students seeking MBBS education. The medical curriculum closely mirrors the Indian system, making it easier for students to prepare for FMGE/NEXT. With NMC & WHO recognized universities, affordable fees (total Γé╣37ΓÇô44 Lakhs for the full course), English-medium instruction, and a similar cultural environment, Bangladesh offers a comfortable transition. 25ΓÇô40% of MBBS seats are reserved for international students, and the geographic proximity ensures easy travel.",
    partnerUniversities: [
      {
        name: "Dhaka Medical College",
        location: "Dhaka",
        fees: "$8,000 / year",
        slug: "dhaka-medical-college",
      },
      {
        name: "Chittagong Medical College",
        location: "Chittagong",
        fees: "$7,500 / year",
        slug: "chittagong-medical-college",
      },
      {
        name: "Sylhet MAG Osmani Medical College",
        location: "Sylhet",
        fees: "$7,200 / year",
        slug: "sylhet-mag-osmani-medical-college",
      },
      {
        name: "Rajshahi Medical College",
        location: "Rajshahi",
        fees: "$7,000 / year",
        slug: "rajshahi-medical-college",
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
      {
        name: "Dhaka National Medical College",
        location: "Dhaka",
        fees: "$9,600 / year",
      },
      {
        name: "Bangladesh Medical College",
        location: "Dhaka",
        fees: "$9,800 / year",
      },
    ],
  },
  barbados: {
    name: "Barbados",
    bannerImage:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    duration: "5ΓÇô6 Years (including clinical rotations)",
    medium: "English",
    recognition: "WHO, NMC (India), ECFMG, WDOMS",
    currency: "Barbadian Dollar (BBD) / USD accepted",
    costOfLiving: "$400ΓÇô800 / month",
    feePayment: "USD payment ΓÇô bank transfer or online",
    seoTitle: "MBBS in Barbados for Indian Students | Caribbean Study",
    seoDescription: "Study MBBS in Barbados with global exposure. Get admission support, eligibility & visa guidance for Indian students.",
    seoKeywords: "MBBS in Barbados for Indian students, study MBBS in Barbados fees, Barbados medical universities admission, low cost MBBS Barbados, Barbados MBBS eligibility India, study medicine in Caribbean Barbados, Barbados MBBS consultants India, MBBS Barbados admission 2026, Caribbean medical college Barbados, Barbados MBBS visa process, study abroad consultants India, best study abroad consultants in Delhi, student visa consultants India, overseas education consultants",
    whyChoose:
      "Barbados offers a unique opportunity for Indian students to pursue MBBS with a US-based curriculum in a Caribbean island setting. Medical universities in Barbados are recognized by NMC, WHO, ECFMG, and WDOMS, ensuring global degree validity. The instruction is entirely in English, no IELTS/TOEFL is required, and graduates are prepared for international licensing exams (USMLE, FMGE/NEXT). With affordable tuition (total Γé╣32ΓÇô36 Lakhs), clinical rotation opportunities in the US/UK, and a safe, English-speaking environment, Barbados is an emerging medical education hub.",
    partnerUniversities: [
      {
        name: "American University of Barbados",
        location: "Wildey, St. Michael",
        fees: "$16,500 / year",
        slug: "american-university-of-barbados",
      },
      {
        name: "Victoria University of Barbados",
        location: "Bridgetown",
        fees: "$7,000 / year",
        slug: "victoria-university-of-barbados",
      },
    ],
    otherUniversities: [
      {
        name: "University of the West Indies",
        location: "Cave Hill",
        fees: "$15,000 / year",
      },
      {
        name: "Bridgetown International University",
        location: "Bridgetown",
        fees: "$12,000 / year",
      },
      {
        name: "International University of Barbados",
        location: "Bridgetown",
        fees: "$10,000 / year",
      },
    ],
  },
  romania: {
    name: "Romania",
    bannerImage:
      "https://images.unsplash.com/photo-1592850033717-bca77a0be38a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    duration: "6 Years (integrated MD program)",
    medium: "English",
    recognition: "WHO, NMC (FMGE/NEXT required), EU Directive 2005/36/EC",
    currency: "Romanian Leu (RON) / Euro accepted",
    costOfLiving: "Γé¼250ΓÇô400 / month",
    feePayment: "EUR payment ΓÇô bank transfer per semester",
    seoTitle: "MBBS in Romania for Indian Students | Fees & Admission",
    seoDescription: "Study MBBS in Romania at affordable fees. Get admission support, eligibility details & visa assistance for Indian students.",
    seoKeywords: "MBBS in Romania for Indian students, study MBBS in Romania fees, Romania medical universities admission, low cost MBBS Romania, Romania MBBS eligibility India, study medicine in Romania, Romania MBBS consultants, MBBS Romania admission 2026, Romania medical college fees, Romania MBBS visa process, study abroad consultants India, best study abroad consultants in Delhi, student visa consultants India, overseas education consultants",
    whyChoose:
      "Romania is one of the most popular European destinations for studying MBBS (Medicine & Surgery), offering EU-recognized medical degrees at affordable tuition fees. Romanian medical universities have a long tradition of training international students ΓÇö many programs have been running in English for over 20 years. Annual tuition fees range from Γé¼5,000ΓÇôΓé¼8,000, and the total 6-year cost is approximately Γé╣35ΓÇô55 Lakhs. As an EU and Schengen member, a Romanian medical degree is automatically recognized across all 27 EU countries under Directive 2005/36/EC. Universities feature modern simulation centers, hospital affiliations, and strong clinical training. Romania is known for its safe environment, vibrant student life, low cost of living, and excellent healthcare infrastructure. Graduates can practice across Europe without additional licensing exams, and in India after clearing FMGE/NEXT.",
    partnerUniversities: [
      {
        name: "Carol Davila University of Medicine and Pharmacy",
        location: "Bucharest",
        fees: "Γé¼7,500 / year",
        slug: "carol-davila-university",
      },
      {
        name: "Grigore T. Popa University of Medicine and Pharmacy",
        location: "Ia╚Öi",
        fees: "Γé¼6,000 / year",
        slug: "grigore-t-popa-university",
      },
      {
        name: "Iuliu Ha╚¢ieganu University of Medicine and Pharmacy",
        location: "Cluj-Napoca",
        fees: "Γé¼7,000 / year",
        slug: "iuliu-hatieganu-university",
      },
      {
        name: "University of Medicine and Pharmacy Craiova",
        location: "Craiova",
        fees: "Γé¼5,500 / year",
        slug: "university-of-medicine-craiova",
      },
    ],
    otherUniversities: [
      {
        name: "Victor Babe╚Ö University of Medicine and Pharmacy",
        location: "Timi╚Öoara",
        fees: "Γé¼6,500 / year",
      },
      {
        name: "University of Oradea ΓÇô Faculty of Medicine",
        location: "Oradea",
        fees: "Γé¼5,000 / year",
      },
      {
        name: "Lucian Blaga University of Sibiu",
        location: "Sibiu",
        fees: "Γé¼5,500 / year",
      },
      {
        name: "Transilvania University of Bra╚Öov",
        location: "Bra╚Öov",
        fees: "Γé¼5,000 / year",
      },
      {
        name: "Vasile Goldi╚Ö Western University of Arad",
        location: "Arad",
        fees: "Γé¼5,500 / year",
      },
    ],
  },
  bulgaria: {
    name: "Bulgaria",
    bannerImage:
      "https://images.unsplash.com/photo-1591804774246-e8e50e53a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    duration: "6 Years (integrated MD program)",
    medium: "English",
    recognition: "WHO, NMC (FMGE/NEXT required), EU Directive 2005/36/EC",
    currency: "Bulgarian Lev (BGN)",
    costOfLiving: "Γé¼200ΓÇô350 / month",
    feePayment: "EUR payment ΓÇô bank transfer per semester",
    seoTitle: "MBBS in Bulgaria for Indian Students | Low Cost Study",
    seoDescription: "Affordable MBBS in Bulgaria with top universities. Get admission guidance, eligibility & visa support for Indian students.",
    seoKeywords: "MBBS in Bulgaria for Indian students, study MBBS in Bulgaria fees, Bulgaria medical universities admission, low cost MBBS Bulgaria, Bulgaria MBBS eligibility India, study medicine in Bulgaria, Bulgaria MBBS consultants India, MBBS Bulgaria admission 2026, Bulgaria medical college fees, Bulgaria MBBS visa process, study abroad consultants India, best study abroad consultants in Delhi, student visa consultants India, overseas education consultants",
    whyChoose:
      "Bulgaria is a top-tier EU destination for Indian students seeking an affordable, internationally recognized MBBS degree. As an EU and Schengen member, Bulgarian medical degrees are automatically valid across all EU countries. Annual tuition fees range from Γé¼6,000ΓÇôΓé¼8,000, making it one of the most affordable options in Western and Central Europe, with a total 6-year cost of approximately Γé╣35ΓÇô50 Lakhs. Bulgarian universities like Medical University of Sofia, Plovdiv, and Varna have decades of experience teaching international students in English. Clinical training takes place in well-equipped university hospitals. Bulgaria offers very low cost of living, a safe student-friendly environment, and strong cultural appeal. Graduates can work across Europe or return to India to practice after clearing FMGE/NEXT.",
    galleryImages: [
      "/Mbbs_Countries/bulgeria-1.jpeg",
      "/Mbbs_Countries/bulgeria-2.jpeg",
      "/Mbbs_Countries/bulgeria-3.jpeg",
      "/Mbbs_Countries/bulgeria-4.jpeg",
      "/Mbbs_Countries/bulgeria-5.jpeg",
      "/Mbbs_Countries/bulgeria-6.jpeg",
    ],
    partnerUniversities: [
      {
        name: "Medical University of Sofia",
        location: "Sofia",
        fees: "Γé¼8,000 / year",
        slug: "medical-university-of-sofia",
      },
      {
        name: "Medical University of Plovdiv",
        location: "Plovdiv",
        fees: "Γé¼7,000 / year",
        slug: "medical-university-of-plovdiv",
      },
      {
        name: "Medical University of Varna",
        location: "Varna",
        fees: "Γé¼7,500 / year",
        slug: "medical-university-of-varna",
      },
      {
        name: "Medical University of Pleven",
        location: "Pleven",
        fees: "Γé¼6,500 / year",
        slug: "medical-university-of-pleven",
      },
    ],
    otherUniversities: [
      {
        name: "Trakia University ΓÇô Medical Faculty",
        location: "Stara Zagora",
        fees: "Γé¼6,000 / year",
      },
      {
        name: "Sofia University ΓÇô Medical Faculty",
        location: "Sofia",
        fees: "Γé¼7,000 / year",
      },
    ],
  },
  serbia: {
    name: "Serbia",
    bannerImage:
      "https://images.unsplash.com/photo-1584279879874-ef8eb93eb6a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    duration: "6 Years (integrated MD program)",
    medium: "English",
    recognition: "WHO, NMC (FMGE/NEXT required), FAIMER",
    currency: "Serbian Dinar (RSD) / Euro accepted",
    costOfLiving: "Γé¼200ΓÇô350 / month",
    feePayment: "EUR payment ΓÇô bank transfer per semester",
    seoTitle: "MBBS in Serbia for Indian Students | Fees & Colleges",
    seoDescription: "Study MBBS in Serbia at low fees. Get admission assistance, eligibility details & visa support for Indian students.",
    seoKeywords: "MBBS in Serbia for Indian students, study MBBS in Serbia fees, Serbia medical universities admission, low cost MBBS Serbia, Serbia MBBS eligibility India, study medicine in Serbia, Serbia MBBS consultants, MBBS Serbia admission 2026, Serbia medical college fees, Serbia MBBS visa process, study abroad consultants India, best study abroad consultants in Delhi, student visa consultants India, overseas education consultants",
    whyChoose:
      "Serbia is an emerging and highly affordable European destination for studying MBBS, gaining popularity among Indian students for its quality medical education at budget-friendly costs. Serbian medical universities are recognized by WHO, NMC, and FAIMER, offering fully English-taught programs. Annual tuition fees range from Γé¼4,500ΓÇôΓé¼6,500, with a total 6-year cost of approximately Γé╣30ΓÇô45 Lakhs ΓÇö among the lowest in Europe. Serbia is an EU candidate country with strong healthcare infrastructure and modern university hospitals. Students benefit from experienced faculty, small class sizes, excellent clinical exposure, and a safe, multicultural environment. The cost of living in Serbia is very low compared to Western Europe. Belgrade, the capital, is a vibrant and student-friendly city with rich history and culture.",
    partnerUniversities: [
      {
        name: "University of Belgrade ΓÇô Faculty of Medicine",
        location: "Belgrade",
        fees: "Γé¼6,000 / year",
        slug: "university-of-belgrade-medicine",
      },
      {
        name: "University of Novi Sad ΓÇô Faculty of Medicine",
        location: "Novi Sad",
        fees: "Γé¼5,500 / year",
        slug: "university-of-novi-sad-medicine",
      },
      {
        name: "University of Ni┼í ΓÇô Faculty of Medicine",
        location: "Ni┼í",
        fees: "Γé¼4,500 / year",
        slug: "university-of-nis-medicine",
      },
    ],
    otherUniversities: [
      {
        name: "University of Kragujevac ΓÇô Faculty of Medical Sciences",
        location: "Kragujevac",
        fees: "Γé¼5,000 / year",
      },
      {
        name: "Singidunum University",
        location: "Belgrade",
        fees: "Γé¼5,500 / year",
      },
    ],
  },
  bosnia: {
    name: "Bosnia & Herzegovina",
    bannerImage:
      "https://images.unsplash.com/photo-1555990793-da11153b2473?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    duration: "6 Years (integrated MD program)",
    medium: "English",
    recognition: "WHO, NMC (FMGE/NEXT required), FAIMER",
    currency: "Convertible Mark (BAM) / Euro accepted",
    costOfLiving: "Γé¼200ΓÇô300 / month",
    feePayment: "EUR payment ΓÇô bank transfer per semester",
    seoTitle: "MBBS in Bosnia for Indian Students | Low Fees Study",
    seoDescription: "Affordable MBBS in Bosnia with top medical universities. Get admission support, eligibility & visa assistance today.",
    seoKeywords: "MBBS in Bosnia for Indian students, study MBBS in Bosnia fees, Bosnia medical universities admission, low cost MBBS Bosnia, Bosnia MBBS eligibility India, study medicine in Bosnia, Bosnia MBBS consultants, MBBS Bosnia admission 2026, Bosnia medical college fees, Bosnia MBBS visa process, study abroad consultants India, best study abroad consultants in Delhi, student visa consultants India, overseas education consultants",
    whyChoose:
      "Bosnia & Herzegovina is rapidly becoming one of the most affordable European destinations for Indian students to study MBBS. With annual tuition fees as low as Γé¼3,500ΓÇôΓé¼5,500 and a total 6-year cost of just Γé╣25ΓÇô40 Lakhs, Bosnia offers some of the lowest medical education costs in Europe. Medical universities in Bosnia are recognized by WHO, NMC, and FAIMER, and offer fully English-taught MD (MBBS equivalent) programs. The country features a European healthcare model with well-equipped teaching hospitals and hands-on clinical training. Bosnia's universities have small class sizes ensuring personalized attention, experienced professors (many trained in Western Europe), and a supportive environment for international students. The cost of living is among the lowest in Europe, making this an excellent value-for-money destination. Graduates can pursue licensing across Europe, the US, or India (via FMGE/NEXT).",
    partnerUniversities: [
      {
        name: "University of Sarajevo ΓÇô Faculty of Medicine",
        location: "Sarajevo",
        fees: "Γé¼5,000 / year",
        slug: "university-of-sarajevo-medicine",
      },
      {
        name: "University of Tuzla ΓÇô Faculty of Medicine",
        location: "Tuzla",
        fees: "Γé¼4,000 / year",
        slug: "university-of-tuzla-medicine",
      },
      {
        name: "University of Mostar ΓÇô Faculty of Medicine",
        location: "Mostar",
        fees: "Γé¼3,800 / year",
        slug: "university-of-mostar-medicine",
      },
    ],
    otherUniversities: [
      {
        name: "University of Banja Luka ΓÇô Faculty of Medicine",
        location: "Banja Luka",
        fees: "Γé¼4,500 / year",
      },
      {
        name: "University of Zenica ΓÇô Faculty of Medicine",
        location: "Zenica",
        fees: "Γé¼3,500 / year",
      },
    ],
  },
};

// Default country data for countries not in the list
export const defaultCountryData = {
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
