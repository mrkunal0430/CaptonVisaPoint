import React from "react";
import { useParams, Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiMapPin,
  FiCheck,
  FiBookOpen,
  FiDollarSign,
  FiClock,
  FiAward,
  FiUsers,
  FiGlobe,
  FiHome,
  FiFileText,
  FiShield,
} from "react-icons/fi";
import InquiryForm from "../components/forms/InquiryForm";
import SEO from "../components/SEO";

// University detail data – only featured/popular universities get individual pages
const universityData = {
  // ========== RUSSIA ==========
  "kazan-state-medical-university": {
    name: "Kazan State Medical University",
    country: "Russia",
    countrySlug: "russia",
    location: "Kazan, Republic of Tatarstan",
    established: "1814",
    fees: "$5,500 / year",
    totalFees: "~₹28–32 Lakhs (Full Course)",
    duration: "6 Years (including internship)",
    medium: "English",
    recognition: "WHO, NMC, FAIMER, MCI Listed",
    banner:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Kazan State Medical University (KSMU) is one of the oldest and most prestigious medical universities in Russia, founded in 1814. It has been a prime destination for Indian students seeking affordable yet world-class medical education. The university is located in Kazan, a vibrant city with a rich multicultural heritage. KSMU offers an English-medium MBBS program that is fully recognized by WHO, NMC (formerly MCI), and FAIMER.",
    highlights: [
      "200+ years of academic excellence",
      "English-medium MBBS program",
      "WHO & NMC recognized degree",
      "Modern laboratories and simulation centers",
      "Indian food mess facility available",
      "Safe & multicultural campus environment",
      "Strong clinical training with hospital exposure",
      "Affordable tuition and living costs",
    ],
    eligibility: [
      "Applicant must have passed 12th with PCB (Physics, Chemistry, Biology)",
      "Minimum 50% aggregate in PCB (40% for reserved categories)",
      "Must have qualified NEET UG exam",
      "Age: 17 years or above on 31st December of the admission year",
      "Valid passport required",
    ],
    hostel:
      "University hostels with modern amenities. Separate hostels for boys and girls. Indian mess facility available at additional cost. 24/7 security and CCTV surveillance.",
    facilities: [
      "Library",
      "Sports Complex",
      "Wi-Fi Campus",
      "Hospital Training",
      "Cafeteria",
      "Gym",
    ],
  },
  "crimea-federal-university": {
    name: "Crimea Federal University",
    country: "Russia",
    countrySlug: "russia",
    location: "Simferopol, Crimea",
    established: "1918",
    fees: "$3,500 / year",
    totalFees: "~₹20–24 Lakhs (Full Course)",
    duration: "6 Years (including internship)",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Crimea Federal University (CFU) is a leading medical institution in Russia, known for its affordable fee structure and high-quality medical education. Located in the scenic city of Simferopol, CFU has been attracting Indian students for years due to its English-medium program, recognized degrees, and modern teaching facilities.",
    highlights: [
      "One of the most affordable MBBS programs in Russia",
      "English-medium instruction",
      "WHO & NMC recognized",
      "Modern campus with advanced medical labs",
      "Indian food available",
      "Multicultural student community",
      "Strong clinical training program",
      "Excellent pass rate for FMGE/NEXT",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% aggregate",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of the admission year",
      "Valid Indian passport",
    ],
    hostel:
      "Comfortable university hostels with all basic amenities. Indian mess available. Separate housing for male and female students.",
    facilities: [
      "Library",
      "Research Labs",
      "Hospital Attachment",
      "Sports",
      "Cafeteria",
      "Wi-Fi",
    ],
  },
  "izhevsk-state-medical-university": {
    name: "Izhevsk State Medical University",
    country: "Russia",
    countrySlug: "russia",
    location: "Izhevsk, Udmurt Republic",
    established: "1933",
    fees: "$4,500 / year",
    totalFees: "~₹25–28 Lakhs (Full Course)",
    duration: "6 Years (including internship)",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Izhevsk State Medical Academy (ISMA) is a government medical university located in Izhevsk, Russia. The university is recognized by WHO, NMC, and offers an English-medium MBBS program. It is well-known for providing practical clinical training and modern facilities at affordable fees.",
    highlights: [
      "Government medical university",
      "English-medium MBBS program",
      "WHO & NMC recognized",
      "Affordable fee structure",
      "Indian mess facility available",
      "Clinical training at affiliated hospitals",
      "Well-equipped modern labs",
      "Safe environment for international students",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% aggregate",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid passport",
    ],
    hostel:
      "University provides comfortable hostel accommodation. Indian food mess is available. Safe campus with security.",
    facilities: [
      "Library",
      "Hospital",
      "Labs",
      "Sports Ground",
      "Cafeteria",
      "Internet",
    ],
  },
  // ========== GEORGIA ==========
  "seu-university": {
    name: "SEU University",
    country: "Georgia",
    countrySlug: "georgia",
    location: "Tbilisi, Georgia",
    established: "2001",
    fees: "$5,200 / year",
    totalFees: "~₹28–32 Lakhs (Full Course)",
    duration: "6 Years (including internship)",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "SEU University (Georgian National University SEU) is one of the top-ranked private universities in Georgia for medical education. Located in the capital city Tbilisi, it offers a globally recognized English-medium MBBS program. The university is known for its modern infrastructure, excellent faculty, and strong clinical training partnerships with leading hospitals.",
    highlights: [
      "Top-ranked private university in Georgia",
      "English-medium MBBS program",
      "WHO & NMC recognized degree",
      "Modern campus in Tbilisi city center",
      "Strong clinical training with partner hospitals",
      "European standard education",
      "No donation or capitation fees",
      "Safe and student-friendly environment",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% aggregate",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "University-arranged accommodation near campus. Indian food options available. Modern amenities provided.",
    facilities: [
      "Digital Library",
      "Simulation Lab",
      "Hospital Training",
      "Sports",
      "Cafeteria",
      "Wi-Fi Campus",
    ],
  },
  "bau-international-university": {
    name: "BAU International University",
    country: "Georgia",
    countrySlug: "georgia",
    location: "Batumi, Georgia",
    established: "2012",
    fees: "$5,500 / year",
    totalFees: "~₹30–35 Lakhs (Full Course)",
    duration: "6 Years (including internship)",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "BAU International University, Batumi is part of the prestigious Bahçeşehir University global network. Located in the beautiful coastal city of Batumi, Georgia, it offers a world-class English-medium MBBS program recognized by WHO and NMC. The university is known for its modern teaching methods, international faculty, and state-of-the-art medical facilities.",
    highlights: [
      "Part of global BAU university network",
      "English-medium MBBS with European standards",
      "WHO & NMC recognized",
      "Beautiful coastal campus in Batumi",
      "International faculty and students",
      "Advanced simulation and anatomy labs",
      "Clinical rotations at partner hospitals",
      "No entrance exam other than NEET",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% aggregate",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid passport",
    ],
    hostel:
      "Modern student residences in Batumi. Indian food mess available. Safe campus living with all amenities.",
    facilities: [
      "Library",
      "Simulation Center",
      "Hospital",
      "Gym",
      "Cafeteria",
      "Wi-Fi",
    ],
  },
  // ========== UZBEKISTAN ==========
  "tashkent-state-medical-institute": {
    name: "Tashkent State Medical Institute",
    country: "Uzbekistan",
    countrySlug: "uzbekistan",
    location: "Tashkent, Uzbekistan",
    established: "1919",
    fees: "$3,800 / year",
    totalFees: "~₹18–22 Lakhs (Full Course)",
    duration: "5+1 Years",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Tashkent State Medical Institute is the premier medical institution in Uzbekistan, located in the capital city Tashkent. Established in 1919, it is one of the oldest and most respected medical universities in Central Asia. The institute offers an affordable English-medium MBBS program recognized by WHO and NMC of India.",
    highlights: [
      "Premier medical institute of Uzbekistan",
      "100+ years of academic excellence",
      "English-medium MBBS program",
      "WHO & NMC recognized",
      "Very affordable fee structure",
      "Indian mess facility with Indian food",
      "Modern teaching hospitals for clinical training",
      "Safe city with low cost of living",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% aggregate",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "University hostels with modern amenities. Compulsory Indian mess facility. Separate hostel for boys and girls.",
    facilities: [
      "Library",
      "Labs",
      "Teaching Hospital",
      "Sports",
      "Mess",
      "Wi-Fi",
    ],
  },
  "samarkand-state-medical-university": {
    name: "Samarkand State Medical University",
    country: "Uzbekistan",
    countrySlug: "uzbekistan",
    location: "Samarkand, Uzbekistan",
    established: "1930",
    fees: "$3,300 / year",
    totalFees: "~₹16–20 Lakhs (Full Course)",
    duration: "5+1 Years",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Samarkand State Medical University is a prestigious government medical university located in the historic city of Samarkand, Uzbekistan. The university offers a highly affordable MBBS program in English medium, making it a top choice for Indian students. It is fully recognized by WHO and NMC.",
    highlights: [
      "Government medical university",
      "One of the most affordable MBBS abroad",
      "English-medium instruction",
      "WHO & NMC recognized",
      "Located in historic Samarkand city",
      "Indian food mess available",
      "Well-equipped hospitals for clinical training",
      "Growing Indian student community",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "University hostels with all basic amenities. Indian mess available. Safe campus.",
    facilities: [
      "Library",
      "Hospital",
      "Labs",
      "Mess",
      "Sports Ground",
      "Wi-Fi",
    ],
  },
  // ========== KAZAKHSTAN ==========
  "caspian-international-school-of-medicine": {
    name: "Caspian International School of Medicine",
    country: "Kazakhstan",
    countrySlug: "kazakhstan",
    location: "Almaty, Kazakhstan",
    established: "1992",
    fees: "$4,200 / year",
    totalFees: "~₹22–26 Lakhs (Full Course)",
    duration: "5+1 Years",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Caspian International School of Medicine (Caspian University) is a premier private medical institution in Kazakhstan, located in the beautiful city of Almaty. The university offers a comprehensive English-medium MBBS program that is recognized by WHO and NMC. Known for its practical-oriented teaching and modern infrastructure.",
    highlights: [
      "Top private medical school in Kazakhstan",
      "English-medium MBBS program",
      "WHO & NMC recognized",
      "Located in Almaty – Kazakhstan's largest city",
      "Modern teaching methods and infrastructure",
      "Clinical training at multi-specialty hospitals",
      "Indian student community present",
      "Affordable compared to Indian private colleges",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "University-managed hostels with modern amenities. Indian food options available nearby.",
    facilities: [
      "Library",
      "Labs",
      "Teaching Hospital",
      "Sports Complex",
      "Cafeteria",
      "Wi-Fi",
    ],
  },
  // ========== KYRGYZSTAN ==========
  "kyrgyz-state-medical-academy": {
    name: "Kyrgyz State Medical Academy",
    country: "Kyrgyzstan",
    countrySlug: "kyrgyzstan",
    location: "Bishkek, Kyrgyzstan",
    established: "1939",
    fees: "$4,000 / year",
    totalFees: "~₹20–25 Lakhs (Full Course)",
    duration: "5+1 Years",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1571940747783-5d5db2ac5ce5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Kyrgyz State Medical Academy (KSMA) is the leading government medical university in Kyrgyzstan, located in the capital city Bishkek. Founded in 1939, it is the oldest and most reputed medical institution in the country. KSMA offers an English-medium MBBS program recognized by WHO and NMC, making it popular among Indian students.",
    highlights: [
      "Leading government medical university",
      "80+ years of excellence",
      "English-medium MBBS program",
      "WHO & NMC recognized",
      "Very affordable fees and living cost",
      "Large Indian student community",
      "Clinical training at government hospitals",
      "Safe and peaceful city for students",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "University hostels available. Indian mess facility with home-style food. Well-maintained campus.",
    facilities: ["Library", "Hospital", "Labs", "Sports", "Mess", "Wi-Fi"],
  },
  "international-school-of-medicine-central": {
    name: "International School of Medicine (ISM) – Central Campus",
    country: "Kyrgyzstan",
    countrySlug: "kyrgyzstan",
    location: "Bishkek, Kyrgyzstan",
    established: "2003",
    fees: "$4,500 / year",
    totalFees: "~₹23–27 Lakhs (Full Course)",
    duration: "5+1 Years",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1571940747783-5d5db2ac5ce5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "International School of Medicine (ISM) Central Campus in Bishkek is one of the most popular choices for Indian medical students in Kyrgyzstan. The university offers a comprehensive English-medium MBBS program with strong clinical training. ISM is recognized by WHO and NMC, ensuring graduates can practice in India after clearing FMGE/NEXT.",
    highlights: [
      "Popular choice among Indian students",
      "English-medium MBBS program",
      "WHO & NMC recognized",
      "Strong clinical training focus",
      "Indian mess with Indian food available",
      "Modern infrastructure and labs",
      "Located in Bishkek – capital city",
      "Affordable fee structure",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "Modern hostel accommodation. Indian food mess available. Safe campus environment.",
    facilities: [
      "Library",
      "Simulation Lab",
      "Hospital",
      "Sports",
      "Cafeteria",
      "Wi-Fi",
    ],
  },
  // ========== TAJIKISTAN ==========
  "avicenna-tajik-state-medical-university": {
    name: "Avicenna Tajik State Medical University",
    country: "Tajikistan",
    countrySlug: "tajikistan",
    location: "Dushanbe, Tajikistan",
    established: "1939",
    fees: "$3,500 / year",
    totalFees: "~₹18–22 Lakhs (Full Course)",
    duration: "5+1 Years",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Avicenna Tajik State Medical University (ATSMU) is the premier and oldest medical university in Tajikistan, named after the legendary physician Ibn Sina (Avicenna). Located in Dushanbe, the capital city, ATSMU offers an affordable English-medium MBBS program recognized by WHO and NMC. The university is the top choice for studying medicine in Tajikistan.",
    highlights: [
      "Premier medical university of Tajikistan",
      "Named after legendary physician Avicenna (Ibn Sina)",
      "English-medium MBBS program",
      "WHO & NMC recognized",
      "Most affordable MBBS abroad option",
      "Low cost of living in Dushanbe",
      "Government medical university",
      "Growing Indian student community",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "University hostels available with basic amenities. Indian food options available. Safe campus.",
    facilities: [
      "Library",
      "Hospital",
      "Labs",
      "Sports",
      "Cafeteria",
      "Internet",
    ],
  },
  // ========== REMAINING RUSSIA UNIVERSITIES ==========
  "omsk-state-medical-university": {
    name: "Omsk State Medical University",
    country: "Russia",
    countrySlug: "russia",
    location: "Omsk, Omsk Oblast",
    established: "1920",
    fees: "$4,000 / year",
    totalFees: "~₹22–26 Lakhs (Full Course)",
    duration: "6 Years (including internship)",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Omsk State Medical University (OSMU) is one of the leading medical universities in Siberia, Russia. Founded in 1920, it offers a comprehensive English-medium MBBS program recognized by WHO and NMC. The university is known for its strong research background, modern facilities, and affordable fee structure.",
    highlights: [
      "Government medical university since 1920",
      "English-medium MBBS program",
      "WHO & NMC recognized",
      "Affordable tuition fees",
      "Modern labs and hospital training",
      "Indian food available",
      "Safe campus environment",
      "Strong alumni network",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "University hostels with all amenities. Indian mess available. 24/7 security.",
    facilities: ["Library", "Hospital", "Labs", "Sports", "Cafeteria", "Wi-Fi"],
  },
  "novosibirsk-state-university": {
    name: "Novosibirsk State University",
    country: "Russia",
    countrySlug: "russia",
    location: "Novosibirsk, Novosibirsk Oblast",
    established: "1959",
    fees: "$5,000 / year",
    totalFees: "~₹28–32 Lakhs (Full Course)",
    duration: "6 Years (including internship)",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Novosibirsk State University (NSU) is a prestigious research university in the heart of Siberia's academic hub, Akademgorodok. Known for its world-class research and innovation, NSU offers a quality English-medium medical program recognized by international bodies.",
    highlights: [
      "Top research university in Siberia",
      "Internationally recognized degree",
      "WHO & NMC recognized",
      "World-class research facilities",
      "English-medium instruction",
      "Vibrant student community",
      "Affordable living costs",
      "Modern campus in Akademgorodok",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "Modern university hostels in Akademgorodok. Safe and academic environment. Indian food options nearby.",
    facilities: [
      "Library",
      "Research Labs",
      "Hospital",
      "Sports Complex",
      "Cafeteria",
      "Wi-Fi",
    ],
  },
  "kazan-federal-university": {
    name: "Kazan Federal University",
    country: "Russia",
    countrySlug: "russia",
    location: "Kazan, Republic of Tatarstan",
    established: "1804",
    fees: "$5,200 / year",
    totalFees: "~₹28–32 Lakhs (Full Course)",
    duration: "6 Years (including internship)",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Kazan Federal University (KFU) is one of the oldest universities in Russia, founded in 1804. It is a federal university with a prestigious medical faculty offering English-medium MBBS programs. KFU is recognized for its rich academic history, modern infrastructure, and multicultural environment.",
    highlights: [
      "220+ years of academic history",
      "Federal university status",
      "English-medium MBBS",
      "WHO & NMC recognized",
      "Modern medical simulation center",
      "Multicultural campus",
      "Strong clinical training",
      "Affordable fee structure",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "University hostels with modern amenities. Indian food mess available. Safe and multicultural campus.",
    facilities: [
      "Library",
      "Simulation Center",
      "Hospital",
      "Gym",
      "Cafeteria",
      "Wi-Fi",
    ],
  },
  "bashkir-state-medical-university": {
    name: "Bashkir State Medical University",
    country: "Russia",
    countrySlug: "russia",
    location: "Ufa, Republic of Bashkortostan",
    established: "1932",
    fees: "$4,000 / year",
    totalFees: "~₹22–26 Lakhs (Full Course)",
    duration: "6 Years (including internship)",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Bashkir State Medical University (BSMU) is a well-established government medical university in Ufa, Russia. Founded in 1932, BSMU offers affordable English-medium medical education with strong practical training. The university is popular among Indian students for its quality education and supportive environment.",
    highlights: [
      "Government medical university since 1932",
      "English-medium MBBS",
      "WHO & NMC recognized",
      "One of the most affordable options",
      "Indian student community",
      "Good clinical exposure",
      "Indian food available",
      "Safe city environment",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "Comfortable hostels with basic amenities. Indian mess facility. Separate hostels for boys and girls.",
    facilities: ["Library", "Hospital", "Labs", "Sports", "Mess", "Wi-Fi"],
  },
  "kemerovo-state-medical-university": {
    name: "Kemerovo State Medical University",
    country: "Russia",
    countrySlug: "russia",
    location: "Kemerovo, Kemerovo Oblast",
    established: "1955",
    fees: "$3,800 / year",
    totalFees: "~₹20–24 Lakhs (Full Course)",
    duration: "6 Years (including internship)",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Kemerovo State Medical University (KemSMU) is a government medical institution in Kemerovo, Siberia. It offers an affordable MBBS program in English medium, recognized by WHO and NMC. The university is known for practical training at affiliated hospitals and a supportive learning environment.",
    highlights: [
      "Government medical university",
      "Very affordable fee structure",
      "English-medium instruction",
      "WHO & NMC recognized",
      "Clinical training at city hospitals",
      "Indian food mess available",
      "Growing Indian student community",
      "Safe and peaceful city",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "University hostels with all amenities. Indian food available. Safe campus.",
    facilities: [
      "Library",
      "Hospital",
      "Labs",
      "Sports",
      "Cafeteria",
      "Internet",
    ],
  },
  "voronezh-state-medical-university": {
    name: "Voronezh State Medical University",
    country: "Russia",
    countrySlug: "russia",
    location: "Voronezh, Voronezh Oblast",
    established: "1918",
    fees: "$4,200 / year",
    totalFees: "~₹24–28 Lakhs (Full Course)",
    duration: "6 Years (including internship)",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Voronezh State Medical University (VSMU) is a leading medical university of European Russia, founded in 1918. It offers English-medium MBBS with excellent clinical training at affiliated hospitals. VSMU is recognized by WHO, NMC and is a popular choice among Indian medical students.",
    highlights: [
      "100+ years of excellence",
      "English-medium MBBS",
      "WHO & NMC recognized",
      "Strong clinical training",
      "Modern medical equipment",
      "Indian food available",
      "Cultural city environment",
      "Affordable fees",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "Comfortable hostels near campus. Indian mess available. 24/7 security.",
    facilities: ["Library", "Hospital", "Labs", "Sports", "Cafeteria", "Wi-Fi"],
  },
  "north-western-state-medical-university": {
    name: "North Western State Medical University",
    country: "Russia",
    countrySlug: "russia",
    location: "Saint Petersburg, Russia",
    established: "2011",
    fees: "$5,800 / year",
    totalFees: "~₹32–36 Lakhs (Full Course)",
    duration: "6 Years (including internship)",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "North Western State Medical University (NWSMU) named after I.I. Mechnikov is located in the beautiful city of Saint Petersburg. It was formed by merging two prestigious medical academies. NWSMU offers top-quality English-medium MBBS with clinical training at advanced hospitals in Russia's cultural capital.",
    highlights: [
      "Located in Saint Petersburg",
      "Merged from two prestigious academies",
      "English-medium MBBS",
      "WHO & NMC recognized",
      "World-class hospital training",
      "Rich cultural environment",
      "Modern campus facilities",
      "International student body",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "University hostels in Saint Petersburg. Indian food mess available. Cultural city with many attractions.",
    facilities: [
      "Library",
      "Simulation Lab",
      "Hospital",
      "Sports",
      "Cafeteria",
      "Wi-Fi",
    ],
  },
  "irkutsk-state-medical-university": {
    name: "Irkutsk State Medical University",
    country: "Russia",
    countrySlug: "russia",
    location: "Irkutsk, Irkutsk Oblast",
    established: "1919",
    fees: "$4,000 / year",
    totalFees: "~₹22–26 Lakhs (Full Course)",
    duration: "6 Years (including internship)",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Irkutsk State Medical University (ISMU) is a prestigious government medical university near Lake Baikal. Founded in 1919, it offers affordable English-medium MBBS recognized by WHO and NMC. Known for its quality education and natural surroundings.",
    highlights: [
      "Government university since 1919",
      "Near Lake Baikal",
      "English-medium MBBS",
      "WHO & NMC recognized",
      "Affordable fees",
      "Clinical hospital training",
      "Indian food available",
      "Peaceful environment",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "University hostels with amenities. Indian food mess available. Safe campus.",
    facilities: ["Library", "Hospital", "Labs", "Sports", "Cafeteria", "Wi-Fi"],
  },
  "samara-state-medical-university": {
    name: "Samara State Medical University",
    country: "Russia",
    countrySlug: "russia",
    location: "Samara, Samara Oblast",
    established: "1919",
    fees: "$4,500 / year",
    totalFees: "~₹25–28 Lakhs (Full Course)",
    duration: "6 Years (including internship)",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Samara State Medical University (SamSMU) is a well-established medical university on the banks of the Volga River. It offers a comprehensive English-medium MBBS program with extensive clinical training at city hospitals. The university is WHO and NMC recognized.",
    highlights: [
      "Established government university",
      "On the banks of Volga River",
      "English-medium MBBS",
      "WHO & NMC recognized",
      "Extensive clinical training",
      "Modern facilities",
      "Indian food available",
      "Affordable living",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "University hostels with modern amenities. Indian mess facility. Safe campus.",
    facilities: ["Library", "Hospital", "Labs", "Sports", "Cafeteria", "Wi-Fi"],
  },
  "sevastopol-state-university": {
    name: "Sevastopol State University",
    country: "Russia",
    countrySlug: "russia",
    location: "Sevastopol, Crimea",
    established: "2014",
    fees: "$3,500 / year",
    totalFees: "~₹20–24 Lakhs (Full Course)",
    duration: "6 Years (including internship)",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Sevastopol State University is a modern university in the port city of Sevastopol. It offers an affordable English-medium MBBS program with recognition from WHO and NMC. Known for its coastal campus and growing medical faculty.",
    highlights: [
      "Affordable fee structure",
      "Coastal city campus",
      "English-medium MBBS",
      "WHO & NMC recognized",
      "Modern medical faculty",
      "Low cost of living",
      "Indian support available",
      "Pleasant climate",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "University hostels available. Indian food options nearby. Safe city.",
    facilities: ["Library", "Hospital", "Labs", "Sports", "Cafeteria", "Wi-Fi"],
  },
  "ulyanovsk-state-university": {
    name: "Ulyanovsk State University",
    country: "Russia",
    countrySlug: "russia",
    location: "Ulyanovsk, Ulyanovsk Oblast",
    established: "1988",
    fees: "$3,800 / year",
    totalFees: "~₹20–24 Lakhs (Full Course)",
    duration: "6 Years (including internship)",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Ulyanovsk State University (UlGU) is a modern university offering affordable English-medium medical education. Known for its compact campus, supportive faculty, and practical training approach. Recognized by WHO and NMC.",
    highlights: [
      "Affordable MBBS program",
      "English-medium instruction",
      "WHO & NMC recognized",
      "Compact and student-friendly campus",
      "Good clinical exposure",
      "Indian student support",
      "Low cost of living",
      "Safe city",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "University hostel with basic amenities. Indian food options available. Safe environment.",
    facilities: [
      "Library",
      "Hospital",
      "Labs",
      "Sports",
      "Cafeteria",
      "Internet",
    ],
  },
  // ========== REMAINING GEORGIA UNIVERSITIES ==========
  "east-european-university": {
    name: "East European University",
    country: "Georgia",
    countrySlug: "georgia",
    location: "Tbilisi, Georgia",
    established: "2012",
    fees: "$5,000 / year",
    totalFees: "~₹28–32 Lakhs (Full Course)",
    duration: "6 Years (including internship)",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "East European University (EEU) is a modern private university in Tbilisi, Georgia. It offers a well-structured English-medium MBBS program recognized by WHO and NMC. EEU is known for its European-standard curriculum, modern infrastructure, and student-centric approach.",
    highlights: [
      "Modern private university",
      "European-standard curriculum",
      "English-medium MBBS",
      "WHO & NMC recognized",
      "Student-friendly environment",
      "Clinical hospital training",
      "No capitation fees",
      "Located in Tbilisi",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "University-arranged accommodation. Indian food options available. Modern amenities.",
    facilities: [
      "Library",
      "Simulation Lab",
      "Hospital",
      "Sports",
      "Cafeteria",
      "Wi-Fi",
    ],
  },
  "georgian-american-university": {
    name: "Georgian American University",
    country: "Georgia",
    countrySlug: "georgia",
    location: "Tbilisi, Georgia",
    established: "2005",
    fees: "$5,800 / year",
    totalFees: "~₹32–36 Lakhs (Full Course)",
    duration: "6 Years (including internship)",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Georgian American University (GAU) offers American-style medical education in Tbilisi, Georgia. The university follows a US-oriented curriculum and provides excellent clinical training opportunities. Recognized by WHO and NMC, GAU is a premium choice for Indian students.",
    highlights: [
      "American-style medical education",
      "US-oriented curriculum",
      "English-medium MBBS",
      "WHO & NMC recognized",
      "Premium infrastructure",
      "Strong clinical rotations",
      "International faculty",
      "Located in Tbilisi center",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "Modern student accommodation. Indian food options available. Central location in Tbilisi.",
    facilities: [
      "Digital Library",
      "Simulation Center",
      "Hospital",
      "Gym",
      "Cafeteria",
      "Wi-Fi",
    ],
  },
  "alte-university": {
    name: "Alte University",
    country: "Georgia",
    countrySlug: "georgia",
    location: "Tbilisi, Georgia",
    established: "2014",
    fees: "$4,800 / year",
    totalFees: "~₹26–30 Lakhs (Full Course)",
    duration: "6 Years (including internship)",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Alte University is a private medical university in Tbilisi, Georgia. It offers an affordable English-medium MBBS program recognized by WHO and NMC. Known for its innovative teaching methods and practical clinical training approach.",
    highlights: [
      "Private university in Tbilisi",
      "Innovative teaching methods",
      "English-medium MBBS",
      "WHO & NMC recognized",
      "Affordable fee structure",
      "Practical clinical focus",
      "Indian student community",
      "Modern campus",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "Student accommodation available near campus. Indian food options. Safe area.",
    facilities: [
      "Library",
      "Labs",
      "Hospital Training",
      "Sports",
      "Cafeteria",
      "Wi-Fi",
    ],
  },
  "avicenna-medical-university-georgia": {
    name: "Avicenna Medical University",
    country: "Georgia",
    countrySlug: "georgia",
    location: "Tbilisi, Georgia",
    established: "2011",
    fees: "$5,000 / year",
    totalFees: "~₹28–32 Lakhs (Full Course)",
    duration: "6 Years (including internship)",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Avicenna Medical University in Tbilisi, Georgia is named after the legendary physician Ibn Sina (Avicenna). It offers a quality English-medium MBBS program recognized by WHO and NMC. Popular among Indian students for its clinical training and affordable fees.",
    highlights: [
      "Named after legendary physician Avicenna",
      "English-medium MBBS",
      "WHO & NMC recognized",
      "Quality clinical training",
      "Affordable fees",
      "Indian student support",
      "Modern campus",
      "Located in Tbilisi",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "University accommodation available. Indian food options. Safe campus environment.",
    facilities: ["Library", "Labs", "Hospital", "Sports", "Cafeteria", "Wi-Fi"],
  },
  // ========== REMAINING UZBEKISTAN UNIVERSITIES ==========
  "tashkent-medical-academy-termez": {
    name: "Tashkent Medical Academy (Termez Branch)",
    country: "Uzbekistan",
    countrySlug: "uzbekistan",
    location: "Termez, Uzbekistan",
    established: "2017",
    fees: "$3,000 / year",
    totalFees: "~₹15–18 Lakhs (Full Course)",
    duration: "5+1 Years",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Tashkent Medical Academy – Termez Branch is an affiliate campus of the prestigious Tashkent Medical Academy. Located in Termez, it offers an extremely affordable MBBS program in English medium. Recognized by WHO and NMC, it is one of the cheapest MBBS options abroad.",
    highlights: [
      "Branch of prestigious TMA",
      "Most affordable MBBS option",
      "English-medium instruction",
      "WHO & NMC recognized",
      "Very low cost of living",
      "Indian mess available",
      "Growing campus infrastructure",
      "Supportive faculty",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "University hostels available. Indian food mess. Affordable living.",
    facilities: ["Library", "Hospital", "Labs", "Sports", "Mess", "Internet"],
  },
  "bukhara-state-medical-institute": {
    name: "Bukhara State Medical Institute",
    country: "Uzbekistan",
    countrySlug: "uzbekistan",
    location: "Bukhara, Uzbekistan",
    established: "1990",
    fees: "$3,500 / year",
    totalFees: "~₹18–22 Lakhs (Full Course)",
    duration: "5+1 Years",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Bukhara State Medical Institute is a government medical institution in the historic city of Bukhara, Uzbekistan. It offers affordable English-medium MBBS recognized by WHO and NMC. Known for its practical training and rich cultural surroundings.",
    highlights: [
      "Government medical institute",
      "Historic city of Bukhara",
      "English-medium MBBS",
      "WHO & NMC recognized",
      "Affordable fees",
      "Indian food available",
      "Clinical hospital training",
      "Safe environment",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel: "University hostels with amenities. Indian mess. Safe campus.",
    facilities: ["Library", "Hospital", "Labs", "Sports", "Mess", "Wi-Fi"],
  },
  "fergana-medical-institute": {
    name: "Fergana Medical Institute",
    country: "Uzbekistan",
    countrySlug: "uzbekistan",
    location: "Fergana, Uzbekistan",
    established: "1991",
    fees: "$3,200 / year",
    totalFees: "~₹16–20 Lakhs (Full Course)",
    duration: "5+1 Years",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Fergana Medical Institute is located in the fertile Fergana Valley of Uzbekistan. It offers an affordable English-medium MBBS program recognized by WHO and NMC. The institute is known for its practical training approach and supportive environment for international students.",
    highlights: [
      "Located in Fergana Valley",
      "Very affordable fees",
      "English-medium MBBS",
      "WHO & NMC recognized",
      "Practical training focus",
      "Indian student community",
      "Low cost of living",
      "Safe city",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "University hostel available. Indian food mess. Basic amenities provided.",
    facilities: ["Library", "Hospital", "Labs", "Sports", "Mess", "Internet"],
  },
  "gulistan-state-university": {
    name: "Gulistan State University",
    country: "Uzbekistan",
    countrySlug: "uzbekistan",
    location: "Gulistan, Uzbekistan",
    established: "1992",
    fees: "$2,800 / year",
    totalFees: "~₹14–18 Lakhs (Full Course)",
    duration: "5+1 Years",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Gulistan State University offers one of the most affordable MBBS programs for Indian students in Uzbekistan. Located in the city of Gulistan, it provides English-medium medical education recognized by WHO and NMC.",
    highlights: [
      "One of the cheapest MBBS abroad",
      "English-medium instruction",
      "WHO & NMC recognized",
      "Very low cost of living",
      "Indian food available",
      "Supportive faculty",
      "Growing medical faculty",
      "Safe small city",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "University hostel available. Indian food options. Affordable living.",
    facilities: ["Library", "Hospital", "Labs", "Sports", "Mess", "Internet"],
  },
  "bukhara-innovative-medical-institute": {
    name: "Bukhara Innovative Medical Institute",
    country: "Uzbekistan",
    countrySlug: "uzbekistan",
    location: "Bukhara, Uzbekistan",
    established: "2019",
    fees: "$3,200 / year",
    totalFees: "~₹16–20 Lakhs (Full Course)",
    duration: "5+1 Years",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Bukhara Innovative Medical Institute is a newer medical institution in the historic city of Bukhara. It focuses on innovative teaching methods and modern medical education. The institute offers affordable English-medium MBBS programs recognized by WHO and NMC.",
    highlights: [
      "Innovative teaching approach",
      "Modern campus infrastructure",
      "English-medium MBBS",
      "WHO & NMC recognized",
      "Affordable fee structure",
      "Indian food available",
      "Historic city of Bukhara",
      "Growing reputation",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "Modern hostel facilities. Indian food mess available. Safe campus.",
    facilities: ["Library", "Hospital", "Labs", "Sports", "Cafeteria", "Wi-Fi"],
  },
  "kimyo-international-university": {
    name: "Kimyo International University in Tashkent",
    country: "Uzbekistan",
    countrySlug: "uzbekistan",
    location: "Tashkent, Uzbekistan",
    established: "2019",
    fees: "$3,500 / year",
    totalFees: "~₹18–22 Lakhs (Full Course)",
    duration: "5+1 Years",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Kimyo International University in Tashkent is a modern private university offering medical education in Uzbekistan's capital. It combines international teaching standards with affordable pricing. The medical program is recognized by WHO and NMC.",
    highlights: [
      "International university in Tashkent",
      "Modern teaching standards",
      "English-medium MBBS",
      "WHO & NMC recognized",
      "Capital city location",
      "Affordable fees",
      "Indian student support",
      "Modern facilities",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "University accommodation in Tashkent. Indian food options. Modern amenities.",
    facilities: [
      "Library",
      "Labs",
      "Hospital Training",
      "Sports",
      "Cafeteria",
      "Wi-Fi",
    ],
  },
  "andijan-state-medical-institute": {
    name: "Andijan State Medical Institute",
    country: "Uzbekistan",
    countrySlug: "uzbekistan",
    location: "Andijan, Uzbekistan",
    established: "1955",
    fees: "$3,000 / year",
    totalFees: "~₹15–18 Lakhs (Full Course)",
    duration: "5+1 Years",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Andijan State Medical Institute is one of the well-established medical institutes in Uzbekistan's Fergana Valley region. It offers affordable English-medium MBBS recognized by WHO and NMC. The institute has a long history of training medical professionals.",
    highlights: [
      "Established since 1955",
      "Very affordable fees",
      "English-medium MBBS",
      "WHO & NMC recognized",
      "Strong clinical training",
      "Low cost of living",
      "Indian food available",
      "Safe environment",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "University hostel with basic amenities. Indian food available. Safe campus.",
    facilities: ["Library", "Hospital", "Labs", "Sports", "Mess", "Internet"],
  },
  "mamun-university": {
    name: "Mamun University",
    country: "Uzbekistan",
    countrySlug: "uzbekistan",
    location: "Khiva, Uzbekistan",
    established: "2017",
    fees: "$3,000 / year",
    totalFees: "~₹15–18 Lakhs (Full Course)",
    duration: "5+1 Years",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Mamun University is located in the historic city of Khiva, a UNESCO World Heritage Site. The university offers affordable MBBS in English medium, recognized by WHO and NMC. Named after the great scholar Al-Mamun, it provides quality education in a culturally rich setting.",
    highlights: [
      "Located in UNESCO Heritage city Khiva",
      "Named after scholar Al-Mamun",
      "English-medium MBBS",
      "WHO & NMC recognized",
      "Very affordable fees",
      "Cultural heritage environment",
      "Indian food available",
      "Growing medical program",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "University hostel available. Indian food options. Safe and historic city.",
    facilities: ["Library", "Hospital", "Labs", "Sports", "Mess", "Internet"],
  },
  // ========== REMAINING KAZAKHSTAN UNIVERSITIES ==========
  "kazakh-russian-medical-university": {
    name: "Kazakh Russian Medical University",
    country: "Kazakhstan",
    countrySlug: "kazakhstan",
    location: "Almaty, Kazakhstan",
    established: "1992",
    fees: "$4,500 / year",
    totalFees: "~₹24–28 Lakhs (Full Course)",
    duration: "5+1 Years",
    medium: "English / Russian",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Kazakh Russian Medical University is a joint Kazakh-Russian medical institution in Almaty, Kazakhstan's largest city. It combines the best of Kazakh and Russian medical education traditions. The university offers an English-medium MBBS program recognized by WHO and NMC.",
    highlights: [
      "Joint Kazakh-Russian university",
      "English/Russian medium",
      "WHO & NMC recognized",
      "Located in Almaty",
      "Quality clinical training",
      "Modern facilities",
      "Indian food available",
      "Multicultural environment",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "University hostels with amenities. Indian food options nearby. Safe city.",
    facilities: ["Library", "Hospital", "Labs", "Sports", "Cafeteria", "Wi-Fi"],
  },
  // ========== REMAINING KYRGYZSTAN UNIVERSITIES ==========
  "international-school-of-medicine-issyk-kul": {
    name: "International School of Medicine (ISM) – Issyk-Kul",
    country: "Kyrgyzstan",
    countrySlug: "kyrgyzstan",
    location: "Issyk-Kul, Kyrgyzstan",
    established: "2003",
    fees: "$4,200 / year",
    totalFees: "~₹22–26 Lakhs (Full Course)",
    duration: "5+1 Years",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1571940747783-5d5db2ac5ce5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "International School of Medicine (ISM) Issyk-Kul campus is a branch of the ISM network, located near the scenic Issyk-Kul Lake. It offers an English-medium MBBS program recognized by WHO and NMC. The campus provides a peaceful studying environment surrounded by nature.",
    highlights: [
      "Near scenic Issyk-Kul Lake",
      "Part of ISM network",
      "English-medium MBBS",
      "WHO & NMC recognized",
      "Peaceful study environment",
      "Affordable fees",
      "Indian food available",
      "Nature surroundings",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "Campus hostel with amenities. Indian food mess. Scenic environment.",
    facilities: ["Library", "Hospital", "Labs", "Sports", "Cafeteria", "Wi-Fi"],
  },
  "kyrgyz-uzbek-international-university": {
    name: "Kyrgyz-Uzbek International University",
    country: "Kyrgyzstan",
    countrySlug: "kyrgyzstan",
    location: "Osh, Kyrgyzstan",
    established: "1994",
    fees: "$3,500 / year",
    totalFees: "~₹18–22 Lakhs (Full Course)",
    duration: "5+1 Years",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1571940747783-5d5db2ac5ce5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Kyrgyz-Uzbek International University in Osh is a joint international university offering medical education. It provides an affordable English-medium MBBS program recognized by WHO and NMC. Located in Osh, Kyrgyzstan's second-largest city.",
    highlights: [
      "International joint university",
      "Located in Osh city",
      "English-medium MBBS",
      "WHO & NMC recognized",
      "Affordable fee structure",
      "Low cost of living",
      "Indian food available",
      "Growing medical program",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "University hostel with basic amenities. Indian food options. Safe campus.",
    facilities: ["Library", "Hospital", "Labs", "Sports", "Mess", "Internet"],
  },
  "international-medical-university-imu": {
    name: "International Medical University (IMU)",
    country: "Kyrgyzstan",
    countrySlug: "kyrgyzstan",
    location: "Bishkek, Kyrgyzstan",
    established: "2004",
    fees: "$4,300 / year",
    totalFees: "~₹22–26 Lakhs (Full Course)",
    duration: "5+1 Years",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1571940747783-5d5db2ac5ce5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "International Medical University (IMU) in Bishkek is a popular choice for Indian students in Kyrgyzstan. The university offers a comprehensive English-medium MBBS program with clinical training at city hospitals. IMU is recognized by WHO and NMC.",
    highlights: [
      "Popular among Indian students",
      "English-medium MBBS",
      "WHO & NMC recognized",
      "Capital city location",
      "Strong clinical training",
      "Indian food mess available",
      "Modern facilities",
      "Affordable fee structure",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50%",
      "NEET UG qualification mandatory",
      "Age 17+",
      "Valid passport",
    ],
    hostel:
      "University hostel in Bishkek. Indian food mess available. Safe environment.",
    facilities: ["Library", "Hospital", "Labs", "Sports", "Cafeteria", "Wi-Fi"],
  },
};

const MbbsUniversity = () => {
  const { country, university } = useParams();
  const uniData = universityData[university];

  if (!uniData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            University Not Found
          </h1>
          <p className="text-slate-500 mb-8">
            The university page you're looking for doesn't exist.
          </p>
          <Link
            to={`/mbbs/${country || "abroad"}`}
            className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
          >
            <FiArrowLeft /> Back to Country Page
          </Link>
        </div>
      </div>
    );
  }

  const admissionSteps = [
    {
      step: "01",
      title: "Apply Online",
      desc: "Fill out the application form & submit documents",
    },
    {
      step: "02",
      title: "Get Offer Letter",
      desc: "Receive admission confirmation from the university",
    },
    {
      step: "03",
      title: "Pay Fees",
      desc: "Complete the first-year fee payment",
    },
    {
      step: "04",
      title: "Visa Processing",
      desc: "Apply for student visa with invitation letter",
    },
    {
      step: "05",
      title: "Travel & Join",
      desc: "Fly to the university & begin your MBBS journey",
    },
  ];

  return (
    <div>
      <SEO
        title={`${uniData.name} | MBBS in ${uniData.country} – Fees, Admission 2026`}
        description={`Study MBBS at ${uniData.name}, ${uniData.country}. Fees: ${uniData.fees}. ${uniData.recognition} recognized. Complete admission guidance by Capton Visa Point.`}
        keywords={`${uniData.name}, MBBS in ${uniData.name}, ${uniData.name} fees, ${uniData.name} admission, MBBS in ${uniData.country}, ${uniData.name} for Indian students`}
      />

      {/* Hero Banner */}
      <section className="relative min-h-[60vh] pt-20 pb-12 flex items-center justify-center overflow-hidden">
        <img
          src={uniData.banner}
          alt={uniData.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/30" />
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to={`/mbbs/${uniData.countrySlug}`}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-1.5 rounded-full text-sm font-medium text-white mb-6 hover:bg-white/25 transition-colors"
            >
              <FiArrowLeft className="text-xs" /> Back to MBBS in{" "}
              {uniData.country}
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
              {uniData.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-1.5">
                <FiMapPin /> {uniData.location}
              </span>
              <span className="flex items-center gap-1.5">
                <FiClock /> Est. {uniData.established}
              </span>
              <span className="flex items-center gap-1.5">
                <FiGlobe /> {uniData.recognition}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">
                Tuition Fee
              </p>
              <p className="text-xl font-bold text-blue-600 mt-1">
                {uniData.fees}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">
                Total Cost
              </p>
              <p className="text-xl font-bold text-green-600 mt-1">
                {uniData.totalFees}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">
                Duration
              </p>
              <p className="text-xl font-bold text-slate-800 mt-1">
                {uniData.duration}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">
                Medium
              </p>
              <p className="text-xl font-bold text-slate-800 mt-1">
                {uniData.medium}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <FiBookOpen className="text-blue-500" /> About {uniData.name}
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {uniData.about}
              </p>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <FiAward className="text-amber-500" /> Key Highlights
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {uniData.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100"
                  >
                    <FiCheck className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Eligibility Criteria */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <FiFileText className="text-purple-500" /> Eligibility Criteria
              </h2>
              <ul className="space-y-3">
                {uniData.eligibility.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl"
                  >
                    <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Admission Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <FiUsers className="text-blue-500" /> Admission Process
              </h2>
              <div className="space-y-4">
                {admissionSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{step.title}</h4>
                      <p className="text-slate-500 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hostel & Facilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <FiHome className="text-teal-500" /> Hostel & Accommodation
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {uniData.hostel}
              </p>
              <div className="flex flex-wrap gap-3">
                {uniData.facilities.map((f, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-700 border border-teal-200 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    <FiShield className="text-xs" /> {f}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <InquiryForm
                title={`Apply to ${uniData.name}`}
                subtitle="Get free admission assessment"
              />

              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-blue-700 mb-3 flex items-center gap-2">
                  <FiShield className="text-blue-500" /> Why Apply Through
                  Capton Visa Point?
                </h4>
                <ul className="text-sm text-slate-600 space-y-2.5">
                  <li className="flex items-start gap-2">
                    <FiCheck className="text-green-500 mt-0.5 flex-shrink-0" />{" "}
                    Direct admission – no middlemen
                  </li>
                  <li className="flex items-start gap-2">
                    <FiCheck className="text-green-500 mt-0.5 flex-shrink-0" />{" "}
                    Complete visa & documentation support
                  </li>
                  <li className="flex items-start gap-2">
                    <FiCheck className="text-green-500 mt-0.5 flex-shrink-0" />{" "}
                    Pre-departure & airport assistance
                  </li>
                  <li className="flex items-start gap-2">
                    <FiCheck className="text-green-500 mt-0.5 flex-shrink-0" />{" "}
                    On-ground support after arrival
                  </li>
                  <li className="flex items-start gap-2">
                    <FiCheck className="text-green-500 mt-0.5 flex-shrink-0" />{" "}
                    Transparent fees – no hidden charges
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MbbsUniversity;
