import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiMapPin,
  FiCheck,
  FiBookOpen,
  FiDollarSign,
  FiClock,
  FiCalendar,
  FiAward,
  FiUsers,
  FiGlobe,
  FiHome,
  FiFileText,
  FiShield,
  FiStar,
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
    feeStructure: [
      {
        year: "1st Year",
        tuition: "$5,500",
        hostel: "$800",
        food: "$1,200",
        total: "$7,500",
      },
      {
        year: "2nd Year",
        tuition: "$5,500",
        hostel: "$800",
        food: "$1,200",
        total: "$7,500",
      },
      {
        year: "3rd Year",
        tuition: "$5,500",
        hostel: "$800",
        food: "$1,200",
        total: "$7,500",
      },
      {
        year: "4th Year",
        tuition: "$5,500",
        hostel: "$800",
        food: "$1,200",
        total: "$7,500",
      },
      {
        year: "5th Year",
        tuition: "$5,500",
        hostel: "$800",
        food: "$1,200",
        total: "$7,500",
      },
      {
        year: "6th Year",
        tuition: "$5,500",
        hostel: "$800",
        food: "$1,200",
        total: "$7,500",
      },
    ],
    duration: "6 Years (including internship)",
    medium: "English",
    recognition: "WHO, NMC, FAIMER, MCI Listed",
    banner:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Kazan State Medical University (KSMU), founded in 1814, is ranked 3rd among all medical universities in Russia and is one of the most prestigious medical institutions in the country. Originally established as the medical faculty of Kazan Emperor University, it gained independent university status in 1994 and has over 210 years of academic excellence. KSMU provides clinical training across 54 medical units in Kazan, including 33 general hospitals with approximately 9,000 hospital beds — offering unparalleled hands-on experience. The university hosts over 1,500 Indian students and has a vibrant international community from 50+ countries. KSMU is recognized by WHO, NMC (India), ECFMG, and FAIMER, and offers dedicated FMGE/NEXT coaching to help Indian graduates prepare for licensing exams.",
    highlights: [
      "Ranked #3 among medical universities in Russia",
      "210+ years of academic excellence (founded 1814)",
      "Clinical training across 54 hospitals with ~9,000 beds",
      "1,500+ Indian students currently enrolled",
      "English-medium MBBS with dedicated FMGE/NEXT coaching",
      "WHO, NMC, ECFMG & FAIMER recognized degree",
      "Modern simulation centers & advanced medical labs",
      "Scholarship available (10–15% fee reduction for 85%+ scorers)",
      "Indian food mess & multicultural campus life",
      "Safe city with excellent public transport",
    ],
    eligibility: [
      "Applicant must have passed 12th with PCB (Physics, Chemistry, Biology)",
      "Minimum 50% aggregate in PCB (40% for reserved categories)",
      "Must have qualified NEET UG exam (current or previous 2 years)",
      "Age: 17 years or above on 31st December of the admission year",
      "Valid Indian passport required",
    ],
    hostel:
      "KSMU provides well-furnished university hostels with modern amenities including central heating, attached bathrooms, and common kitchens. Separate hostels for boys and girls with 24/7 security and CCTV surveillance. Indian mess facility is available at additional cost serving North & South Indian cuisine. Laundry and housekeeping services are provided. Hostels are located within walking distance of the campus.",
    facilities: [
      "Central Library",
      "Simulation Center",
      "Sports Complex",
      "Wi-Fi Campus",
      "9,000-Bed Hospital Network",
      "Anatomy Museum",
      "Cafeteria",
      "Gym & Fitness Center",
      "Student Cultural Center",
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
    feeStructure: [
      {
        year: "1st Year",
        tuition: "$3,500",
        hostel: "$600",
        food: "$1,000",
        total: "$5,100",
      },
      {
        year: "2nd Year",
        tuition: "$3,500",
        hostel: "$600",
        food: "$1,000",
        total: "$5,100",
      },
      {
        year: "3rd Year",
        tuition: "$3,500",
        hostel: "$600",
        food: "$1,000",
        total: "$5,100",
      },
      {
        year: "4th Year",
        tuition: "$3,500",
        hostel: "$600",
        food: "$1,000",
        total: "$5,100",
      },
      {
        year: "5th Year",
        tuition: "$3,500",
        hostel: "$600",
        food: "$1,000",
        total: "$5,100",
      },
      {
        year: "6th Year",
        tuition: "$3,500",
        hostel: "$600",
        food: "$1,000",
        total: "$5,100",
      },
    ],
    duration: "6 Years (including internship)",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Crimea Federal University (V.I. Vernadsky), established in 1918 as the Medical Faculty of Taurida University, is one of the oldest and most reputed medical institutions in Russia with over 100 years of history. After gaining federal university status, CFU is now ranked among the top 5 medical universities in Russia and has trained thousands of successful doctors worldwide. The university's medical faculty in Simferopol boasts a high FMGE passing rate among its Indian graduates, making it one of the most trusted choices for Indian students. CFU is recognized by WHO, NMC (India), and FAIMER, offering an affordable 6-year English-medium MBBS program with total fees of just ₹18–22 Lakhs — one of the lowest in Russia.",
    highlights: [
      "100+ years of medical education excellence (est. 1918)",
      "Ranked among top 5 medical universities in Russia",
      "One of the most affordable MBBS programs — ₹18–22 Lakhs total",
      "High FMGE/NEXT passing rate among Indian graduates",
      "English-medium MBBS with experienced faculty",
      "WHO, NMC & FAIMER recognized degree",
      "Modern campus with advanced labs & simulation center",
      "Indian food mess and comfortable hostels",
      "Scenic coastal city of Simferopol",
      "Multicultural student community from 30+ countries",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% aggregate (40% for reserved)",
      "NEET UG qualification mandatory (current or previous 2 years)",
      "Age 17+ on 31st December of the admission year",
      "Valid Indian passport",
    ],
    hostel:
      "CFU offers comfortable, well-maintained hostel accommodation with central heating, hot water, and shared kitchen facilities. Separate hostels for male and female students with round-the-clock security. Indian mess facility available serving vegetarian and non-vegetarian meals. The hostels are located close to the university campus and clinical hospitals.",
    facilities: [
      "Central Library",
      "Research Laboratories",
      "Clinical Hospital Attachment",
      "Simulation Lab",
      "Sports Complex",
      "Cafeteria",
      "Wi-Fi Campus",
      "Student Activity Center",
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
    feeStructure: [
      {
        year: "1st Year",
        tuition: "$4,500",
        hostel: "$700",
        food: "$1,000",
        total: "$6,200",
      },
      {
        year: "2nd Year",
        tuition: "$4,500",
        hostel: "$700",
        food: "$1,000",
        total: "$6,200",
      },
      {
        year: "3rd Year",
        tuition: "$4,500",
        hostel: "$700",
        food: "$1,000",
        total: "$6,200",
      },
      {
        year: "4th Year",
        tuition: "$4,500",
        hostel: "$700",
        food: "$1,000",
        total: "$6,200",
      },
      {
        year: "5th Year",
        tuition: "$4,500",
        hostel: "$700",
        food: "$1,000",
        total: "$6,200",
      },
      {
        year: "6th Year",
        tuition: "$4,500",
        hostel: "$700",
        food: "$1,000",
        total: "$6,200",
      },
    ],
    duration: "6 Years (including internship)",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Izhevsk State Medical Academy (ISMA), established in 1933, is a prestigious government medical university located in Izhevsk, the capital of the Udmurt Republic in Russia. With over 90 years of academic tradition, ISMA has trained tens of thousands of doctors and is recognized for its emphasis on practical clinical skills. The university operates multiple affiliated teaching hospitals, providing students with hands-on clinical experience from the third year. ISMA offers an English-medium MBBS program recognized by WHO, NMC (India), and FAIMER at an affordable fee structure, making it an excellent choice for Indian students seeking quality medical education on a budget.",
    highlights: [
      "90+ years of medical education (est. 1933)",
      "Government-funded medical university",
      "English-medium MBBS program",
      "WHO, NMC & FAIMER recognized degree",
      "Affordable fees — among the lowest in Russia",
      "Multiple affiliated teaching hospitals for clinical training",
      "Indian food mess facility available",
      "Safe & peaceful city with low cost of living",
      "Practical skills-focused curriculum",
      "Dedicated support for international students",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% aggregate (40% for reserved)",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "ISMA provides well-maintained government hostel accommodation with central heating, shared kitchens, and common rooms. Separate hostels for male and female students with security and CCTV surveillance. Indian food mess serving vegetarian and non-vegetarian meals is available at affordable rates. The hostels are conveniently located near the university campus.",
    facilities: [
      "Central Library",
      "Teaching Hospitals",
      "Anatomy & Pathology Labs",
      "Biochemistry Laboratory",
      "Sports Ground",
      "Cafeteria",
      "Wi-Fi Campus",
      "Student Common Room",
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
    feeStructure: [
      {
        year: "1st Year",
        tuition: "$5,200",
        hostel: "$1,000",
        food: "$1,500",
        total: "$7,700",
      },
      {
        year: "2nd Year",
        tuition: "$5,200",
        hostel: "$1,000",
        food: "$1,500",
        total: "$7,700",
      },
      {
        year: "3rd Year",
        tuition: "$5,200",
        hostel: "$1,000",
        food: "$1,500",
        total: "$7,700",
      },
      {
        year: "4th Year",
        tuition: "$5,200",
        hostel: "$1,000",
        food: "$1,500",
        total: "$7,700",
      },
      {
        year: "5th Year",
        tuition: "$5,200",
        hostel: "$1,000",
        food: "$1,500",
        total: "$7,700",
      },
      {
        year: "6th Year",
        tuition: "$5,200",
        hostel: "$1,000",
        food: "$1,500",
        total: "$7,700",
      },
    ],
    duration: "6 Years (including internship)",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Georgian National University SEU is one of the most reputable private medical universities in Georgia and a top choice for Indian students. Established in 2001 in the heart of Tbilisi, SEU offers a 6-year English-medium MD (MBBS equivalent) program that is fully accredited by WFME (World Federation for Medical Education), recognized by WHO, NMC (India), ECFMG (USA), and listed in WDOMS. SEU has exclusive clinical training partnerships with leading hospitals including the American Hospital Tbilisi, Tbilisi State Central Hospital, Givi Zhvania Paediatric Hospital, and MediClub Georgia. The university features state-of-the-art simulation labs for skills development and offers integrated FMGE/NEXT coaching with support from Indian faculty, contributing to strong pass rates among its graduates.",
    highlights: [
      "WFME accredited — highest quality assurance in medical education",
      "Exclusive clinical partner: American Hospital Tbilisi",
      "WHO, NMC, ECFMG & WDOMS recognized degree",
      "English-medium MD program in Tbilisi city center",
      "State-of-the-art simulation labs & digital classrooms",
      "Integrated FMGE/NEXT coaching with Indian faculty support",
      "Clinical rotations across 5+ partner hospitals",
      "No donation or capitation fees — transparent admissions",
      "European standard ECTS credit system curriculum",
      "Indian-friendly environment with mess & hostel support",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% aggregate (40% for reserved)",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
      "No IELTS/TOEFL required",
    ],
    hostel:
      "SEU arranges comfortable accommodation near the campus in Tbilisi with modern amenities including furnished rooms, Wi-Fi, laundry, and common kitchen areas. Indian food mess is available with vegetarian and non-vegetarian options. The accommodation areas are well-connected to the university and clinical hospitals via Tbilisi's metro and bus network. Georgia is one of the safest countries in Europe with very low crime rates.",
    facilities: [
      "Digital Library",
      "Clinical Simulation Center",
      "Anatomy Lab",
      "Hospital Training (5+ partners)",
      "Digital Smart Classrooms",
      "Sports & Recreation",
      "Cafeteria",
      "Wi-Fi Campus",
      "Student Support Office",
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
    feeStructure: [
      {
        year: "1st Year",
        tuition: "$5,500",
        hostel: "$1,000",
        food: "$1,500",
        total: "$8,000",
      },
      {
        year: "2nd Year",
        tuition: "$5,500",
        hostel: "$1,000",
        food: "$1,500",
        total: "$8,000",
      },
      {
        year: "3rd Year",
        tuition: "$5,500",
        hostel: "$1,000",
        food: "$1,500",
        total: "$8,000",
      },
      {
        year: "4th Year",
        tuition: "$5,500",
        hostel: "$1,000",
        food: "$1,500",
        total: "$8,000",
      },
      {
        year: "5th Year",
        tuition: "$5,500",
        hostel: "$1,000",
        food: "$1,500",
        total: "$8,000",
      },
      {
        year: "6th Year",
        tuition: "$5,500",
        hostel: "$1,000",
        food: "$1,500",
        total: "$8,000",
      },
    ],
    duration: "6 Years (including internship)",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "BAU International University Batumi is part of the prestigious global Bahçeşehir (BAU) education network spanning 9 countries, making it one of the most internationally connected medical universities in Georgia. Located in the stunning Black Sea coastal city of Batumi, BAU offers a 6-year English-medium MD (MBBS equivalent) program that follows the American educational model and European ECTS credit system. The university is recognized by WHO, NMC (India), ECFMG (USA), FAIMER, and listed in WDOMS — ensuring global degree validity. BAU provides clinical training from the first year through partnerships with leading hospitals in Batumi and features digitally equipped classrooms, advanced simulation centers, and a dedicated anatomy museum.",
    highlights: [
      "Part of BAU Global Education Network (9 countries)",
      "American educational model with ECTS credit system",
      "WHO, NMC, ECFMG & WDOMS recognized degree",
      "Clinical exposure from the 1st year of study",
      "Stunning Black Sea coastal campus in Batumi",
      "Advanced simulation center & anatomy museum",
      "Digitally equipped smart classrooms",
      "No entrance exam other than NEET — transparent admissions",
      "International faculty from 15+ countries",
      "Affordable tuition with comfortable living",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% aggregate (40% for reserved)",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
      "No IELTS/TOEFL required",
    ],
    hostel:
      "BAU offers modern student residences in Batumi with furnished rooms, Wi-Fi, study areas, and common lounges. Indian food mess and restaurants are available nearby. The coastal city of Batumi is extremely safe and affordable with beautiful parks, beaches, and a vibrant international student community. 24/7 security in all residences.",
    facilities: [
      "Digital Library",
      "Clinical Simulation Center",
      "Anatomy Museum",
      "Partner Hospital Network",
      "Smart Classrooms",
      "Gym & Sports",
      "Cafeteria",
      "Wi-Fi Campus",
      "Student Activity Center",
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
    feeStructure: [
      {
        year: "1st Year",
        tuition: "$3,800",
        hostel: "$500",
        food: "$800",
        total: "$5,100",
      },
      {
        year: "2nd Year",
        tuition: "$3,800",
        hostel: "$500",
        food: "$800",
        total: "$5,100",
      },
      {
        year: "3rd Year",
        tuition: "$3,800",
        hostel: "$500",
        food: "$800",
        total: "$5,100",
      },
      {
        year: "4th Year",
        tuition: "$3,800",
        hostel: "$500",
        food: "$800",
        total: "$5,100",
      },
      {
        year: "5th Year",
        tuition: "$3,800",
        hostel: "$500",
        food: "$800",
        total: "$5,100",
      },
      {
        year: "6th Year (Internship)",
        tuition: "$1,500",
        hostel: "$500",
        food: "$800",
        total: "$2,800",
      },
    ],
    duration: "5+1 Years",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Tashkent State Medical Institute (now Tashkent Medical Academy) traces its roots to 1919 when the medical faculty was established at Turkestan State University — making it one of the oldest medical institutions in Central Asia with over 100 years of history. In 2005, the First and Second Tashkent State Medical Institutes were merged by presidential decree to form the modern Tashkent Medical Academy. The institution is recognized by WHO, NMC (India), WFME, ECFMG, and UNESCO, and offers a 6-year English-medium MBBS program. With annual tuition of $3,400–$4,500 and total costs of ₹20–33 Lakhs, TMA is one of the most affordable yet prestigious medical education options available for Indian students.",
    highlights: [
      "100+ years of medical education legacy (est. 1919)",
      "Premier government medical academy of Uzbekistan",
      "WHO, NMC, WFME, ECFMG & UNESCO recognized",
      "English-medium MBBS program",
      "Among the most affordable MBBS globally — ₹20–33 Lakhs total",
      "Multiple modern teaching hospitals for clinical training",
      "Indian food mess facility available",
      "Tashkent — safe, modern capital with low cost of living",
      "Well-equipped laboratories & research facilities",
      "Large and growing Indian student community",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% aggregate (40% for reserved)",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "Tashkent Medical Academy provides comfortable university hostels with central heating, shared kitchens, and furnished rooms. Separate hostels for boys and girls with 24/7 security. Dedicated Indian food mess is available serving home-style vegetarian and non-vegetarian meals. Hostels are located close to the campus and teaching hospitals. Monthly living costs are very low at $100–200.",
    facilities: [
      "Central Library",
      "Research Laboratories",
      "Teaching Hospitals",
      "Anatomy Museum",
      "Sports Complex",
      "Indian Mess",
      "Wi-Fi Campus",
      "Student Common Room",
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
    feeStructure: [
      {
        year: "1st Year",
        tuition: "$3,300",
        hostel: "$400",
        food: "$700",
        total: "$4,400",
      },
      {
        year: "2nd Year",
        tuition: "$3,300",
        hostel: "$400",
        food: "$700",
        total: "$4,400",
      },
      {
        year: "3rd Year",
        tuition: "$3,300",
        hostel: "$400",
        food: "$700",
        total: "$4,400",
      },
      {
        year: "4th Year",
        tuition: "$3,300",
        hostel: "$400",
        food: "$700",
        total: "$4,400",
      },
      {
        year: "5th Year",
        tuition: "$3,300",
        hostel: "$400",
        food: "$700",
        total: "$4,400",
      },
      {
        year: "6th Year (Internship)",
        tuition: "$1,200",
        hostel: "$400",
        food: "$700",
        total: "$2,300",
      },
    ],
    duration: "5+1 Years",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Samarkand State Medical University is a prestigious government medical institution established in 1930 in the legendary Silk Road city of Samarkand, Uzbekistan. With over 90 years of academic tradition, it is one of the most respected medical universities in Central Asia and is recognized by WHO, NMC (India), and FAIMER. The university offers one of the most affordable English-medium MBBS programs globally, with total course costs as low as ₹16–20 Lakhs. SSMU operates multiple teaching hospitals and clinics, providing comprehensive clinical training. The historic city of Samarkand is a UNESCO World Heritage Site — offering students a unique blend of world-class education and rich cultural experience.",
    highlights: [
      "90+ years of academic tradition (est. 1930)",
      "One of the most affordable MBBS programs globally — ₹16–20 Lakhs total",
      "Government-funded medical university",
      "WHO, NMC & FAIMER recognized degree",
      "English-medium MBBS program",
      "Located in UNESCO World Heritage city of Samarkand",
      "Multiple teaching hospitals for clinical training",
      "Indian food mess facility available",
      "Very low cost of living ($80–100/month)",
      "Growing Indian student community",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% (40% for reserved)",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "SSMU provides university hostels with furnished rooms, central heating, and shared kitchen facilities. Indian food mess is available with home-style cooking. Separate accommodation for male and female students with security. The cost of living in Samarkand is among the lowest — making it very affordable for Indian families.",
    facilities: [
      "Central Library",
      "Teaching Hospitals",
      "Anatomy & Pathology Labs",
      "Indian Mess",
      "Sports Ground",
      "Wi-Fi Campus",
      "Pharmacy Lab",
      "Student Recreation Area",
    ],
  },
  "fergana-medical-institute": {
    name: "Fergana Medical Institute",
    country: "Uzbekistan",
    countrySlug: "uzbekistan",
    location: "Fergana, Uzbekistan",
    established: "1991",
    fees: "$3,200 / year",
    totalFees: "~₹15–18 Lakhs (Full Course)",
    feeStructure: [
      {
        year: "1st Year",
        tuition: "$3,200",
        hostel: "$400",
        food: "$600",
        total: "$4,200",
      },
      {
        year: "2nd Year",
        tuition: "$3,200",
        hostel: "$400",
        food: "$600",
        total: "$4,200",
      },
      {
        year: "3rd Year",
        tuition: "$3,200",
        hostel: "$400",
        food: "$600",
        total: "$4,200",
      },
      {
        year: "4th Year",
        tuition: "$3,200",
        hostel: "$400",
        food: "$600",
        total: "$4,200",
      },
      {
        year: "5th Year",
        tuition: "$3,200",
        hostel: "$400",
        food: "$600",
        total: "$4,200",
      },
      {
        year: "6th Year (Internship)",
        tuition: "$1,200",
        hostel: "$400",
        food: "$600",
        total: "$2,200",
      },
    ],
    duration: "6 Years (including internship)",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner: "/Mbbs_Universitiwes/fergana.webp",
    youtubeVideo: "https://www.youtube.com/watch?v=YN8nRpqxYbs",
    about:
      "Fergana Medical Institute of Public Health (FerMI) is a well-established government medical institution located in the historic Fergana Valley of Uzbekistan. The institute offers a comprehensive 6-year English-medium MBBS program that is recognized by WHO, NMC (India), and FAIMER, ensuring graduates can pursue medical careers worldwide after clearing required licensing exams. Fergana Medical Institute is known for its affordable fee structure — with total course costs as low as ₹15–18 Lakhs — making it one of the most budget-friendly MBBS options globally. The institute features experienced faculty, modern laboratories, and provides extensive clinical training at affiliated hospitals in the Fergana region. Indian students benefit from a safe, student-friendly environment with Indian food availability and comfortable hostel facilities.",
    highlights: [
      "Government medical institute in the historic Fergana Valley",
      "WHO, NMC & FAIMER recognized degree",
      "English-medium MBBS program",
      "One of the most affordable MBBS programs — ₹15–18 Lakhs total",
      "Experienced faculty with practical-focused curriculum",
      "Clinical training at affiliated hospitals",
      "Indian food mess facility available",
      "Safe & peaceful city with very low cost of living",
      "Comfortable hostel with AC, CCTV & separate facilities",
      "Simple admission — 50% in PCB + NEET, no donations",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% aggregate (40% for reserved)",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "Fergana Medical Institute provides well-equipped hostels with essential amenities such as beds, study tables, cupboards, air conditioning, and clean drinking water systems. Security measures include CCTV surveillance and separate hostels for boys and girls. Indian food mess is available serving home-style vegetarian and non-vegetarian meals. The cost of living in Fergana is among the lowest in Uzbekistan, making it very affordable for Indian families.",
    facilities: [
      "Central Library",
      "Teaching Hospitals",
      "Anatomy & Pathology Labs",
      "Indian Mess",
      "Sports Ground",
      "Wi-Fi Campus",
      "Simulation Lab",
      "Student Recreation Area",
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
    feeStructure: [
      {
        year: "1st Year",
        tuition: "$4,200",
        hostel: "$700",
        food: "$1,000",
        total: "$5,900",
      },
      {
        year: "2nd Year",
        tuition: "$4,200",
        hostel: "$700",
        food: "$1,000",
        total: "$5,900",
      },
      {
        year: "3rd Year",
        tuition: "$4,200",
        hostel: "$700",
        food: "$1,000",
        total: "$5,900",
      },
      {
        year: "4th Year",
        tuition: "$4,200",
        hostel: "$700",
        food: "$1,000",
        total: "$5,900",
      },
      {
        year: "5th Year",
        tuition: "$4,200",
        hostel: "$700",
        food: "$1,000",
        total: "$5,900",
      },
      {
        year: "6th Year (Internship)",
        tuition: "$2,000",
        hostel: "$700",
        food: "$1,000",
        total: "$3,700",
      },
    ],
    duration: "5+1 Years",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Caspian International School of Medicine (CISM), part of Caspian University in Almaty, is one of the top-ranked medical institutions in Kazakhstan — ranked 3rd among all higher education medical institutions in the country. Established in 1992, CISM offers a comprehensive 6-year English-medium MBBS program recognized by WHO, NMC (India), FAIMER, and ECFMG. The university is located in Almaty, Kazakhstan's largest and most cosmopolitan city, surrounded by the stunning Tien Shan mountains. CISM features modern classrooms, advanced laboratories, and provides clinical training at top multi-specialty hospitals across the city. The university has a strong and growing Indian student community and offers dedicated support for international admissions.",
    highlights: [
      "Ranked 3rd among medical institutions in Kazakhstan",
      "WHO, NMC, FAIMER & ECFMG recognized degree",
      "English-medium MBBS program",
      "Located in Almaty — largest & most modern city in Kazakhstan",
      "Modern infrastructure with advanced labs & classrooms",
      "Clinical training at top multi-specialty hospitals",
      "Strong Indian student community",
      "Affordable — total cost ₹22–26 Lakhs",
      "Indian mess facility & 24/7 hostel security",
      "Beautiful mountain surroundings & safe environment",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% (40% for reserved)",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "CISM provides well-furnished hostel accommodation with modern amenities including Wi-Fi, heating, and common areas. Indian food mess is available serving vegetarian and non-vegetarian meals. Hostels have 24/7 security with CCTV surveillance. The hostels are conveniently located near the university campus. Almaty offers a low cost of living with excellent public transport, parks, and amenities.",
    facilities: [
      "Central Library",
      "Advanced Medical Labs",
      "Multi-Specialty Teaching Hospitals",
      "Simulation Lab",
      "Sports Complex",
      "Cafeteria",
      "Wi-Fi Campus",
      "Indian Mess",
      "Student Lounge",
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
    feeStructure: [
      {
        year: "1st Year",
        tuition: "$4,000",
        hostel: "$600",
        food: "$900",
        total: "$5,500",
      },
      {
        year: "2nd Year",
        tuition: "$4,000",
        hostel: "$600",
        food: "$900",
        total: "$5,500",
      },
      {
        year: "3rd Year",
        tuition: "$4,000",
        hostel: "$600",
        food: "$900",
        total: "$5,500",
      },
      {
        year: "4th Year",
        tuition: "$4,000",
        hostel: "$600",
        food: "$900",
        total: "$5,500",
      },
      {
        year: "5th Year",
        tuition: "$4,000",
        hostel: "$600",
        food: "$900",
        total: "$5,500",
      },
      {
        year: "6th Year (Internship)",
        tuition: "$2,000",
        hostel: "$600",
        food: "$900",
        total: "$3,500",
      },
    ],
    duration: "5+1 Years",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1571940747783-5d5db2ac5ce5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Kyrgyz State Medical Academy (KSMA), officially named after I.K. Akhunbaev, is the oldest and most prestigious government medical university in Kyrgyzstan — ranked #1 in the country. Founded on September 1, 1939, with just 200 students and support from leading medical schools in Moscow, Leningrad, and Tashkent, KSMA has grown into a leading Central Asian medical institution over 85+ years. The academy graduated its first batch of 120 doctors in 1943 and received Academy status by presidential decree in 1996. KSMA offers an English-medium MBBS program recognized by WHO, NMC (India), and listed in WDOMS, with a very large Indian student community. The university provides dedicated FMGE/NEXT coaching and clinical training at government hospitals in Bishkek.",
    highlights: [
      "Ranked #1 medical university in Kyrgyzstan",
      "85+ years of medical education excellence (est. 1939)",
      "Government-funded medical academy",
      "WHO, NMC & WDOMS recognized degree",
      "English-medium MBBS with FMGE/NEXT coaching",
      "Very affordable — ₹20–25 Lakhs total course cost",
      "Large and active Indian student community",
      "Clinical training at government hospitals in Bishkek",
      "Indian food mess with home-style cooking",
      "Safe, peaceful capital city with low cost of living",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% (40% for reserved)",
      "NEET UG qualification mandatory (current or previous 2 years)",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "KSMA provides well-maintained government hostel accommodation with central heating, furnished rooms, and common kitchen areas. Dedicated Indian food mess serves home-style vegetarian and non-vegetarian meals. Separate hostels for boys and girls with round-the-clock security. Hostels are within walking distance of the campus. Bishkek is one of the safest and most affordable capital cities in Central Asia.",
    facilities: [
      "Central Library",
      "Government Teaching Hospitals",
      "Anatomy & Physiology Labs",
      "Indian Mess",
      "Sports & Recreation",
      "Wi-Fi Campus",
      "FMGE Coaching Center",
      "Student Cultural Center",
    ],
  },
  "international-school-of-medicine-central": {
    name: "International School of Medicine (ISM) – Central Campus",
    country: "Kyrgyzstan",
    countrySlug: "kyrgyzstan",
    location: "Bishkek, Kyrgyzstan",
    established: "2003",
    fees: "$4,500 / year",
    totalFees: "~₹23–27 Lakhs (Full Course)",
    feeStructure: [
      {
        year: "1st Year",
        tuition: "$4,500",
        hostel: "$600",
        food: "$900",
        total: "$6,000",
      },
      {
        year: "2nd Year",
        tuition: "$4,500",
        hostel: "$600",
        food: "$900",
        total: "$6,000",
      },
      {
        year: "3rd Year",
        tuition: "$4,500",
        hostel: "$600",
        food: "$900",
        total: "$6,000",
      },
      {
        year: "4th Year",
        tuition: "$4,500",
        hostel: "$600",
        food: "$900",
        total: "$6,000",
      },
      {
        year: "5th Year",
        tuition: "$4,500",
        hostel: "$600",
        food: "$900",
        total: "$6,000",
      },
      {
        year: "6th Year (Internship)",
        tuition: "$2,000",
        hostel: "$600",
        food: "$900",
        total: "$3,500",
      },
    ],
    duration: "5+1 Years",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1571940747783-5d5db2ac5ce5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "International School of Medicine (ISM) Central Campus, established in 2003 in Bishkek, is one of the most popular and highly-rated medical institutions in Kyrgyzstan for Indian students. ISM offers a 6-year English-medium MBBS program with a strong emphasis on practical clinical training and FMGE/NEXT exam preparation — with coaching conducted by experienced Indian professors. The university is recognized by WHO, NMC (India), and FAIMER. ISM is known for its modern infrastructure, simulation labs, and well-structured curriculum that prepares students for global medical practice. The university has a vibrant Indian student community and provides comprehensive support from admission to graduation.",
    highlights: [
      "Top choice for Indian students in Kyrgyzstan",
      "FMGE/NEXT coaching by Indian professors",
      "WHO, NMC & FAIMER recognized degree",
      "English-medium MBBS with modern curriculum",
      "State-of-the-art simulation labs",
      "Strong clinical training at partner hospitals",
      "Indian mess with home-style food",
      "Bishkek — safe, affordable capital city",
      "Comprehensive student support from admission to graduation",
      "Affordable total fees — ₹23–27 Lakhs",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% (40% for reserved)",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "ISM provides modern hostel accommodation with furnished rooms, Wi-Fi, heating, and common recreational areas. Dedicated Indian food mess serves North and South Indian cuisine. Separate hostels for boys and girls with 24/7 security and CCTV. The hostels are located near the campus with easy access to public transport, shopping, and entertainment.",
    facilities: [
      "Central Library",
      "Clinical Simulation Lab",
      "Partner Teaching Hospitals",
      "FMGE Coaching Center",
      "Indian Mess",
      "Sports & Fitness",
      "Cafeteria",
      "Wi-Fi Campus",
      "Student Counseling Office",
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
    feeStructure: [
      {
        year: "1st Year",
        tuition: "$3,500",
        hostel: "$400",
        food: "$700",
        total: "$4,600",
      },
      {
        year: "2nd Year",
        tuition: "$3,500",
        hostel: "$400",
        food: "$700",
        total: "$4,600",
      },
      {
        year: "3rd Year",
        tuition: "$3,500",
        hostel: "$400",
        food: "$700",
        total: "$4,600",
      },
      {
        year: "4th Year",
        tuition: "$3,500",
        hostel: "$400",
        food: "$700",
        total: "$4,600",
      },
      {
        year: "5th Year",
        tuition: "$3,500",
        hostel: "$400",
        food: "$700",
        total: "$4,600",
      },
      {
        year: "6th Year (Internship)",
        tuition: "$1,500",
        hostel: "$400",
        food: "$700",
        total: "$2,600",
      },
    ],
    duration: "5+1 Years",
    medium: "English",
    recognition: "WHO, NMC, FAIMER",
    banner:
      "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Avicenna Tajik State Medical University (ATSMU), established in 1939, is the oldest, largest, and most prestigious medical university in Tajikistan — ranked #1 in the country and #3 nationally. Named after the legendary Persian physician Abu Ali Ibn Sino (Avicenna), ATSMU was initially founded as Abu Ali Ibn Sino University before being renamed in 1959 and achieving full university status in 1992. The university operates 15+ teaching hospitals with a combined capacity of approximately 1,200 hospital beds, providing extensive clinical training. ATSMU hosts over 700 Indian students (growing to 1,350+) among its 4,800+ student body. The university is recognized by WHO, NMC (India), FAIMER, ECFMG, and listed in WDOMS, offering one of the most affordable MBBS programs globally at ₹18–22 Lakhs total.",
    highlights: [
      "Ranked #1 medical university in Tajikistan (est. 1939)",
      "Named after legendary physician Avicenna (Abu Ali Ibn Sino)",
      "15+ teaching hospitals with ~1,200 hospital beds",
      "700+ Indian students currently enrolled",
      "WHO, NMC, FAIMER, ECFMG & WDOMS recognized",
      "English-medium MBBS program",
      "One of the most affordable MBBS globally — ₹18–22 Lakhs total",
      "Government-funded medical university",
      "Very low cost of living in Dushanbe ($70–100/month)",
      "4,800+ students with a growing international community",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% (40% for reserved)",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "ATSMU provides university hostel accommodation with furnished rooms, central heating, and shared kitchen facilities. Separate hostels for male and female students with 24/7 security. Indian food mess is available serving home-style meals. Dushanbe is a very safe and affordable city with monthly living costs of just $70–100, making it one of the cheapest destinations for medical students globally.",
    facilities: [
      "Central Library",
      "15+ Teaching Hospitals",
      "Anatomy & Pathology Labs",
      "Pharmacology Laboratory",
      "Indian Mess",
      "Sports & Recreation",
      "Wi-Fi Campus",
      "Student Welfare Office",
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
      "Omsk State Medical University (OSMU), founded in 1920 as the Medical Faculty of the Siberian Institute, is one of Siberia's oldest and most respected medical institutions with over 100 years of history. The university gained full university status in 2015 after evolving from the Omsk Medical Academy. OSMU is recognized by WHO, NMC (India), and FAIMER, offering an affordable English-medium MBBS program. The university features modern research facilities, well-equipped laboratories, and provides clinical training at affiliated city hospitals.",
    highlights: [
      "100+ years of medical education (founded 1920)",
      "One of the oldest medical institutions in Siberia",
      "Government medical university",
      "WHO, NMC & FAIMER recognized degree",
      "English-medium MBBS program",
      "Affordable tuition — ₹22–26 Lakhs total",
      "Modern research labs & clinical facilities",
      "Indian food mess available",
      "Safe environment with strong alumni network",
      "24/7 hostel security with CCTV",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% (40% for reserved)",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "OSMU provides university hostels with central heating, furnished rooms, and shared kitchen facilities. Indian food mess is available with home-style meals. Separate hostels for boys and girls with 24/7 security and CCTV surveillance. Living costs in Omsk are among the lowest in Russia.",
    facilities: [
      "Central Library",
      "Research Laboratories",
      "Teaching Hospitals",
      "Sports Complex",
      "Cafeteria",
      "Wi-Fi Campus",
      "Indian Mess",
      "Student Recreation Area",
    ],
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
      "Novosibirsk State University (NSU), founded in 1959, is one of Russia's most prestigious research universities located in Akademgorodok — a world-renowned science hub in Siberia. NSU is QS World Ranked and consistently placed among the top universities in Russia. The university's Institute of Medicine offers a modern English-medium MBBS program with access to cutting-edge research facilities and affiliated hospitals. NSU is recognized by WHO, NMC (India), and FAIMER, and is an excellent option for students who value a research-oriented medical education.",
    highlights: [
      "QS World Ranked prestigious research university",
      "Located in Akademgorodok — Russia's science capital",
      "WHO, NMC & FAIMER recognized degree",
      "English-medium MBBS program",
      "World-class research facilities & laboratories",
      "Vibrant international student community",
      "Affordable living in Novosibirsk",
      "Access to 40+ research institutes in the area",
      "Modern campus with state-of-the-art infrastructure",
      "Indian food options available",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% (40% for reserved)",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "NSU provides modern university hostels in the scenic Akademgorodok campus surrounded by birch forests. Furnished rooms, central heating, common kitchens, and laundry facilities are provided. Indian food options are available nearby. The campus offers an exceptionally safe, academic environment with easy access to libraries, labs, and sports facilities.",
    facilities: [
      "Central Research Library",
      "Advanced Research Labs",
      "University Hospital",
      "Sports Complex",
      "Student Cultural Center",
      "Cafeteria",
      "Wi-Fi Campus",
      "Gym & Recreation",
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
      "Kazan Federal University (KFU), founded in 1804, is Russia's second-oldest university and one of the most prestigious educational institutions in the country. KFU re-established its medical programs in 2013 through the Institute of Fundamental Medicine and Biology. The university is QS World Ranked at #450 (2026) and ranked 6th in Russia by EduRank. KFU's medical faculty offers an English-medium MBBS program recognized by WHO and NMC (India), with an impressive 68.42% FMGE passing rate (2024). The rich 220-year academic heritage combined with modern facilities makes KFU a top-tier choice for Indian students seeking quality medical education in Russia.",
    highlights: [
      "Russia's 2nd oldest university (founded 1804)",
      "QS World Ranked #450 — internationally prestigious",
      "68.42% FMGE passing rate (2024)",
      "Ranked 6th in Russia by EduRank",
      "WHO, NMC & FAIMER recognized degree",
      "English-medium MBBS program",
      "Modern medical simulation center",
      "Thousands of Indian students enrolled",
      "Multicultural campus with 50+ nationalities",
      "Indian food mess & comfortable hostels",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% (40% for reserved)",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "KFU provides well-furnished university hostels with modern amenities including central heating, Wi-Fi, shared kitchens, and common study areas. Indian food mess is available serving vegetarian and non-vegetarian meals. Separate hostels for boys and girls with 24/7 security. Kazan is a safe, vibrant multicultural city — UNESCO City of Culture.",
    facilities: [
      "Central University Library",
      "Medical Simulation Center",
      "Research Laboratories",
      "University Hospital",
      "Sports Complex",
      "Gym & Fitness",
      "Cafeteria",
      "Wi-Fi Campus",
      "Cultural Center",
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
      "Bashkir State Medical University (BSMU), established in 1932 in Ufa, is one of Russia's leading government medical universities with over 90 years of academic excellence. BSMU is ranked 5th among Russian medical universities by RUR (Round University Ranking) and was listed among the top 15 medical universities in the BRICS pilot ranking. The university operates a 700+ bed university hospital for extensive clinical training and has a large community of 2,000+ Indian students. BSMU offers dedicated FMGE/NEXT coaching, and its degrees are recognized by WHO, NMC (India), and FAIMER.",
    highlights: [
      "90+ years of medical excellence (est. 1932)",
      "Ranked #5 among Russian medical universities (RUR)",
      "Top 15 in BRICS medical university ranking",
      "700+ bed university hospital for clinical training",
      "2,000+ Indian students currently enrolled",
      "WHO, NMC & FAIMER recognized degree",
      "English-medium MBBS with FMGE/NEXT coaching",
      "Indian food mess & comfortable hostels",
      "Affordable total cost — ₹22–26 Lakhs",
      "Safe city of Ufa with low living costs",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% (40% for reserved)",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "BSMU provides comfortable government hostels with central heating, furnished rooms, and shared kitchen facilities. Indian food mess is available with home-style cooking. Separate hostels for boys and girls with 24/7 security and CCTV surveillance. The hostels are located within walking distance of the campus and university hospital.",
    facilities: [
      "Central Library",
      "700-Bed University Hospital",
      "Advanced Medical Labs",
      "Anatomy Museum",
      "FMGE Coaching Center",
      "Sports Complex",
      "Indian Mess",
      "Wi-Fi Campus",
      "Student Welfare Office",
    ],
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
      "Kemerovo State Medical University (KemSMU), established in 1955, is a government medical institution located in Kemerovo, the heart of the Kuzbass industrial region, Siberia. With nearly 70 years of medical education experience, KemSMU offers an affordable English-medium MBBS program recognized by WHO, NMC (India), and FAIMER. The university provides strong practical clinical training at multiple affiliated city hospitals and is known for its supportive learning environment and growing Indian student community.",
    highlights: [
      "Nearly 70 years of medical education (est. 1955)",
      "Government-funded medical university",
      "WHO, NMC & FAIMER recognized degree",
      "English-medium MBBS program",
      "Very affordable — ₹20–24 Lakhs total",
      "Clinical training at city hospitals",
      "Indian food mess available",
      "Growing Indian student community",
      "Safe & peaceful city with low cost of living",
      "24/7 hostel security",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% (40% for reserved)",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "KemSMU provides university hostels with central heating, furnished rooms, and shared kitchen facilities. Indian food mess is available. Separate hostels for boys and girls with 24/7 security. Living costs in Kemerovo are among the lowest in Russia, making it very affordable for international students.",
    facilities: [
      "Central Library",
      "Teaching Hospitals",
      "Medical Laboratories",
      "Sports Complex",
      "Cafeteria",
      "Wi-Fi Campus",
      "Indian Mess",
      "Student Common Room",
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
      "Voronezh State Medical University (VSMU), named after N.N. Burdenko, was founded in 1918 and is one of Russia's leading medical universities in the European part of the country. With over 100 years of academic tradition, VSMU has trained thousands of successful doctors and offers a well-structured English-medium MBBS program. The university is recognized by WHO, NMC (India), and FAIMER. Voronezh is a culturally rich city located about 500 km south of Moscow, offering Indian students an excellent mix of quality education and affordable living.",
    highlights: [
      "100+ years of medical excellence (est. 1918)",
      "Named after renowned surgeon N.N. Burdenko",
      "WHO, NMC & FAIMER recognized degree",
      "English-medium MBBS program",
      "Located in European Russia — 500 km from Moscow",
      "Modern medical equipment & labs",
      "Strong clinical training at affiliated hospitals",
      "Indian food mess available",
      "Culturally rich city with affordable living",
      "Growing Indian student community",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% (40% for reserved)",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "VSMU provides comfortable university hostels near the campus with central heating, furnished rooms, and common kitchen areas. Indian food mess is available with vegetarian and non-vegetarian options. Separate hostels for boys and girls with 24/7 security.",
    facilities: [
      "Central Library",
      "Teaching Hospitals",
      "Medical Laboratories",
      "Anatomy Museum",
      "Sports Complex",
      "Cafeteria",
      "Wi-Fi Campus",
      "Student Activity Center",
    ],
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
      "North Western State Medical University (NWSMU), named after Nobel laureate I.I. Mechnikov, is a prestigious medical institution located in Saint Petersburg — Russia's cultural capital. NWSMU was formed in 2011 by merging two legendary medical academies: I.I. Mechnikov State Medical Academy (founded 1907) and Saint Petersburg Medical Academy of Postgraduate Studies (founded 1885). This combined legacy of over 135 years of medical education makes NWSMU one of the most historically significant medical institutions in Russia. The university offers a top-quality English-medium MBBS program and provides clinical training at advanced multi-specialty hospitals in Saint Petersburg.",
    highlights: [
      "Named after Nobel laureate I.I. Mechnikov",
      "Merged from two legendary academies (1885 & 1907)",
      "Located in Saint Petersburg — Russia's cultural capital",
      "WHO, NMC & FAIMER recognized degree",
      "English-medium MBBS program",
      "World-class hospital training facilities",
      "Modern simulation center & labs",
      "International student body from 50+ countries",
      "Rich cultural environment with museums & architecture",
      "Indian food mess & hostel facilities",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% (40% for reserved)",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "NWSMU provides university hostels in Saint Petersburg with furnished rooms, central heating, and modern amenities. Indian food mess is available serving vegetarian and non-vegetarian meals. Separate hostels for boys and girls with 24/7 security. Saint Petersburg is a vibrant, cosmopolitan city with world-famous museums, theaters, and architectural landmarks.",
    facilities: [
      "Central Library",
      "Clinical Simulation Center",
      "Multi-Specialty Teaching Hospitals",
      "Research Laboratories",
      "Sports Complex",
      "Cafeteria",
      "Wi-Fi Campus",
      "Student Cultural Center",
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
      "Irkutsk State Medical University (ISMU), founded in 1919, is a prestigious government medical university located near the world-famous Lake Baikal — a UNESCO World Heritage Site. With over 100 years of academic history, ISMU has trained tens of thousands of doctors and is recognized by WHO, NMC (India), and FAIMER. The university offers an affordable English-medium MBBS program with clinical training at affiliated teaching hospitals. Irkutsk is known as the 'Gateway to Lake Baikal' and offers a unique combination of quality education, natural beauty, and very affordable living.",
    highlights: [
      "100+ years of medical education (est. 1919)",
      "Near UNESCO World Heritage Lake Baikal",
      "Government-funded medical university",
      "WHO, NMC & FAIMER recognized degree",
      "English-medium MBBS program",
      "Affordable total cost — ₹22–26 Lakhs",
      "Clinical training at affiliated hospitals",
      "Indian food mess facility available",
      "Peaceful, safe environment surrounded by nature",
      "Low cost of living in Irkutsk",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% (40% for reserved)",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "ISMU provides well-maintained government hostel accommodation with central heating, shared kitchens, and common areas. Indian food mess is available with home-style meals. Separate hostels for boys and girls with 24/7 security. The city of Irkutsk offers a very peaceful and affordable living environment.",
    facilities: [
      "Central Library",
      "Teaching Hospitals",
      "Medical Laboratories",
      "Anatomy Museum",
      "Sports Complex",
      "Cafeteria",
      "Wi-Fi Campus",
      "Student Recreation Area",
    ],
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
      "Samara State Medical University (SamSMU), founded in 1919, is a well-established government medical university located on the banks of the scenic Volga River in Samara, Russia. With over 100 years of academic tradition, SamSMU offers a comprehensive English-medium MBBS program with extensive clinical training across multiple city hospitals and clinics. The university is recognized by WHO, NMC (India), and FAIMER. Samara is a major Volga River city with excellent infrastructure, affordable living costs, and a vibrant cultural scene.",
    highlights: [
      "100+ years of medical tradition (est. 1919)",
      "Government medical university",
      "Located on the banks of Volga River",
      "WHO, NMC & FAIMER recognized degree",
      "English-medium MBBS program",
      "Extensive clinical training at multiple hospitals",
      "Modern facilities & well-equipped labs",
      "Indian food mess available",
      "Affordable living costs in Samara",
      "Active Indian student community",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% (40% for reserved)",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "SamSMU provides university hostels with modern amenities including central heating, furnished rooms, and common kitchen areas. Indian food mess is available serving vegetarian and non-vegetarian meals. Separate hostels for boys and girls with 24/7 security. The campus is well-connected to the city's public transport.",
    facilities: [
      "Central Library",
      "Teaching Hospitals",
      "Clinical Laboratories",
      "Anatomy Museum",
      "Sports Complex",
      "Cafeteria",
      "Wi-Fi Campus",
      "Student Support Office",
    ],
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
      "Sevastopol State University (SevSU), established in 2014 as a modern federal-level institution, is located in the historic Black Sea port city of Sevastopol in the Crimean Peninsula. SevSU's medical faculty offers an affordable English-medium MBBS program recognized by WHO, NMC (India), and FAIMER. Being one of the newest medical programs in Russia, it features state-of-the-art infrastructure and modern teaching methodologies. Sevastopol enjoys a pleasant Mediterranean-like climate, making it an attractive destination for international students.",
    highlights: [
      "Modern university with state-of-the-art infrastructure",
      "Located in historic Black Sea port city",
      "WHO, NMC & FAIMER recognized degree",
      "English-medium MBBS program",
      "Among the most affordable MBBS — ₹20–24 Lakhs total",
      "Pleasant Mediterranean-like climate",
      "Low cost of living",
      "Growing medical faculty with modern equipment",
      "Indian student support available",
      "Scenic coastal city environment",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% (40% for reserved)",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "SevSU provides university hostels with modern amenities in the scenic coastal city of Sevastopol. Indian food options are available nearby. The city has a pleasant climate year-round, is safe, and offers a very affordable cost of living. Separate accommodation for boys and girls with security.",
    facilities: [
      "Central Library",
      "Teaching Hospitals",
      "Medical Laboratories",
      "Sports Complex",
      "Cafeteria",
      "Wi-Fi Campus",
      "Student Recreation Area",
      "Coastal Campus Grounds",
    ],
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
      "Ulyanovsk State University (UlGU), founded in 1988, is a modern university on the banks of the Volga River offering affordable English-medium medical education in the city of Ulyanovsk, Russia. The university features a compact, student-friendly campus with modern facilities and a supportive academic environment. UlGU is recognized by WHO, NMC (India), and FAIMER, and provides clinical training at affiliated city hospitals. With one of the lowest cost structures in Russia, it's an ideal choice for budget-conscious Indian families.",
    highlights: [
      "Modern university on the Volga River (est. 1988)",
      "WHO, NMC & FAIMER recognized degree",
      "English-medium MBBS program",
      "Among the most affordable — ₹20–24 Lakhs total",
      "Compact, student-friendly campus",
      "Good clinical exposure at city hospitals",
      "Indian student support & community",
      "Very low cost of living in Ulyanovsk",
      "Safe, peaceful mid-sized city",
      "Supportive faculty & staff",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% (40% for reserved)",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "UlGU provides university hostel accommodation with furnished rooms, central heating, and shared kitchen facilities. Indian food options are available. Separate hostels for boys and girls with security. Living costs in Ulyanovsk are among the lowest in Russia.",
    facilities: [
      "Central Library",
      "Teaching Hospitals",
      "Medical Laboratories",
      "Sports Complex",
      "Cafeteria",
      "Wi-Fi Campus",
      "Student Support Office",
      "Recreation Area",
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
      "East European University (EEU), established in 2012 in Tbilisi, Georgia, is a modern private university offering a well-structured English-medium MD (MBBS equivalent) program following European educational standards. EEU is recognized by WHO, NMC (India), FAIMER, and is listed in WDOMS. The university places strong emphasis on practical clinical skills development and evidence-based medicine. With a student-centric approach and transparent admission process, EEU has become a popular choice among Indian students seeking quality medical education in Georgia.",
    highlights: [
      "Modern European-standard curriculum",
      "WHO, NMC, FAIMER & WDOMS recognized",
      "English-medium MD (MBBS equivalent) program",
      "Evidence-based medicine approach",
      "Strong focus on practical clinical skills",
      "No capitation or donation fees",
      "Student-centric learning environment",
      "Located in Tbilisi — European-style capital city",
      "Indian-friendly with mess & accommodation support",
      "Transparent admission process",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% (40% for reserved)",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
      "No IELTS/TOEFL required",
    ],
    hostel:
      "EEU arranges modern accommodation near the campus in Tbilisi with furnished rooms, Wi-Fi, and common areas. Indian food options are available nearby. Georgia is one of the safest countries in Europe with very low crime rates. Tbilisi offers affordable living with excellent public transport.",
    facilities: [
      "Digital Library",
      "Clinical Simulation Lab",
      "Partner Teaching Hospitals",
      "Smart Classrooms",
      "Sports & Recreation",
      "Cafeteria",
      "Wi-Fi Campus",
      "Student Welfare Office",
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
      "Georgian American University (GAU), established in 2005, offers American-model medical education in the heart of Tbilisi, Georgia. GAU follows a US-oriented curriculum structure and provides excellent clinical training at partner hospitals. The university is recognized by WHO, NMC (India), FAIMER, and listed in WDOMS. GAU is a premium choice for Indian students who aspire to a globally competitive medical education, with faculty trained in American and European medical institutions.",
    highlights: [
      "American-model medical education",
      "US-oriented curriculum structure",
      "WHO, NMC, FAIMER & WDOMS recognized",
      "English-medium MD (MBBS equivalent) program",
      "Premium infrastructure & digital classrooms",
      "International faculty from US & European institutions",
      "Strong clinical rotations at partner hospitals",
      "Located in central Tbilisi",
      "USMLE preparation support available",
      "Indian student community & mess support",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% (40% for reserved)",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
      "No IELTS/TOEFL required",
    ],
    hostel:
      "GAU arranges modern student accommodation in central Tbilisi with furnished rooms, Wi-Fi, and modern amenities. Indian food mess and restaurants are readily available in Tbilisi's diverse food scene. The city offers affordable living, excellent metro connectivity, and a safe, cosmopolitan environment.",
    facilities: [
      "Digital Library",
      "Clinical Simulation Center",
      "Partner Teaching Hospitals",
      "Smart Classrooms",
      "Gym & Sports",
      "Cafeteria",
      "Wi-Fi Campus",
      "Student Advisory Office",
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
  // ========== GERMANY ==========
  "university-of-heidelberg": {
    name: "University of Heidelberg",
    country: "Germany",
    countrySlug: "germany",
    location: "Heidelberg, Baden-Württemberg",
    established: "1386",
    fees: "€1,500 / semester",
    totalFees: "~€18,000 (Full Course – 12 semesters)",
    duration: "6 Years 3 Months",
    medium: "German (C1 level required)",
    recognition: "WHO, NMC (FMGE/NEXT required), FAIMER",
    banner:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "The University of Heidelberg, founded in 1386, is Germany's oldest university and one of the most prestigious medical schools in Europe. Its Faculty of Medicine, along with the Heidelberg University Hospital (one of the largest in Europe), offers exceptional clinical training. The Medizin program is among the most competitive in Germany, attracting top talent globally. Graduates are highly sought after worldwide.",
    highlights: [
      "Germany's oldest and most prestigious university (est. 1386)",
      "Heidelberg University Hospital – one of Europe's largest",
      "Cutting-edge medical research and Nobel laureate faculty",
      "WHO & NMC recognized medical degree",
      "Strong focus on clinical training from early semesters",
      "Excellent student-to-faculty ratio",
      "Vibrant student life in historic Heidelberg",
      "Global alumni network in medicine",
    ],
    eligibility: [
      "German language proficiency – C1 level (TestDaF/DSH)",
      "Strong academic record in science subjects (Biology, Chemistry, Physics)",
      "Indian students: 12th with PCB + NEET score for NMC compliance",
      "Application via uni-assist or direct university portal",
      "Studienkolleg may be required for foundation year",
    ],
    hostel:
      "Student dormitories (Studentenwerk) available in Heidelberg. Shared apartments also popular. Indian grocery stores and restaurants available in the city.",
    facilities: [
      "University Hospital",
      "Research Labs",
      "Central Library",
      "Sports Center",
      "Cafeteria (Mensa)",
      "Student Housing",
    ],
  },
  "ludwig-maximilian-university": {
    name: "Ludwig Maximilian University (LMU)",
    country: "Germany",
    countrySlug: "germany",
    location: "Munich, Bavaria",
    established: "1472",
    fees: "€258 / semester (admin fee only)",
    totalFees: "~€3,100 (Full Course – tuition free)",
    duration: "6 Years 3 Months",
    medium: "German (C1 level required)",
    recognition: "WHO, NMC (FMGE/NEXT required), FAIMER",
    banner:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Ludwig Maximilian University of Munich (LMU) is one of the top-ranked universities in Germany and consistently ranked among the top 50 worldwide. Its medical faculty, established in 1472, is one of the largest in Germany. LMU's medical program is virtually tuition-free – students only pay a small semester contribution. The university is affiliated with the LMU Klinikum, one of the top university hospitals in Europe, providing outstanding clinical exposure.",
    highlights: [
      "Consistently ranked among top 50 universities globally",
      "Virtually tuition-free MBBS – only €258/semester admin fee",
      "LMU Klinikum – top-ranked university hospital",
      "WHO & NMC recognized degree",
      "World-class research facilities and labs",
      "Located in Munich – Germany's most livable city",
      "Extensive international exchange programs",
      "Strong emphasis on research-oriented medical education",
    ],
    eligibility: [
      "German C1 proficiency (TestDaF/DSH-2)",
      "Excellent academic grades in science subjects",
      "Indian students: 12th with PCB + NEET qualification",
      "Application via hochschulstart.de (centralized admission)",
      "May require Studienkolleg completion",
    ],
    hostel:
      "Studentenwerk München provides affordable student housing. Private shared apartments (WG) are also available. Munich has a thriving Indian community with restaurants and cultural events.",
    facilities: [
      "LMU Klinikum",
      "Biomedical Center",
      "Central Library",
      "Sports Facilities",
      "Mensa",
      "Student Counseling",
    ],
  },
  "charite-universitaetsmedizin-berlin": {
    name: "Charité – Universitätsmedizin Berlin",
    country: "Germany",
    countrySlug: "germany",
    location: "Berlin",
    established: "1710",
    fees: "€315 / semester (admin fee only)",
    totalFees: "~€3,800 (Full Course – tuition free)",
    duration: "6 Years 3 Months",
    medium: "German (C1 level required)",
    recognition: "WHO, NMC (FMGE/NEXT required), FAIMER",
    banner:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Charité – Universitätsmedizin Berlin is one of the largest university hospitals in Europe and among the most prestigious medical institutions in the world. Founded in 1710, Charité is a joint institution of Freie Universität Berlin and Humboldt-Universität zu Berlin. Over half of Germany's Nobel Prize winners in medicine have worked at Charité. The medical curriculum is innovatively structured with early clinical exposure and an emphasis on evidence-based practice.",
    highlights: [
      "One of Europe's largest and most prestigious university hospitals",
      "Over 50% of German Nobel laureates in medicine were at Charité",
      "Tuition-free MBBS – only semester contribution",
      "WHO & NMC recognized",
      "Innovative modular curriculum with early clinical exposure",
      "Located in Berlin – vibrant, multicultural capital",
      "300+ years of medical excellence",
      "Extensive international research collaborations",
    ],
    eligibility: [
      "German C1 proficiency (DSH-2 or equivalent)",
      "Outstanding academic record in sciences",
      "Indian students: 12th with PCB + NEET",
      "Application via hochschulstart.de",
      "Highly competitive admission – strong profile needed",
    ],
    hostel:
      "Studierendenwerk Berlin operates student dormitories across the city. Affordable shared apartments available. Berlin has a large Indian community with many Indian restaurants and grocery stores.",
    facilities: [
      "Charité Hospital Campus",
      "State-of-art Research Labs",
      "Medical Library",
      "Skills Lab",
      "Sports",
      "Mensa",
    ],
  },
  "technical-university-of-munich": {
    name: "Technical University of Munich (TUM)",
    country: "Germany",
    countrySlug: "germany",
    location: "Munich, Bavaria",
    established: "1868",
    fees: "€258 / semester (admin fee only)",
    totalFees: "~€3,100 (Full Course – tuition free)",
    duration: "6 Years 3 Months",
    medium: "German (C1 level required)",
    recognition: "WHO, NMC (FMGE/NEXT required), FAIMER",
    banner:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "The Technical University of Munich (TUM) is Germany's top-ranked technical university and one of Europe's leading institutions. TUM's School of Medicine, affiliated with Klinikum rechts der Isar, offers a cutting-edge medical program that integrates technology and medicine. TUM is renowned for its interdisciplinary approach, combining engineering, AI, and data science with clinical medicine – preparing students for the future of healthcare.",
    highlights: [
      "Germany's #1 technical university",
      "Tuition-free – only €258/semester admin fee",
      "Klinikum rechts der Isar – renowned teaching hospital",
      "WHO & NMC recognized degree",
      "Pioneering integration of technology in medicine",
      "Strong research focus – AI in medicine, biomedical engineering",
      "Munich – excellent quality of life",
      "Outstanding career prospects for graduates",
    ],
    eligibility: [
      "German C1 proficiency required",
      "Excellent academic grades in sciences",
      "Indian students: 12th with PCB + NEET",
      "Application via TUM Online portal",
      "Studienkolleg may be required",
    ],
    hostel:
      "Studentenwerk München housing available. TUM also has its own student residences. Munich has a well-established Indian community.",
    facilities: [
      "Klinikum rechts der Isar",
      "Research Center",
      "TUM Library",
      "Sports Complex",
      "Cafeteria",
      "Innovation Labs",
    ],
  },
  // ========== NEPAL ==========
  "kathmandu-medical-college": {
    name: "Kathmandu Medical College",
    country: "Nepal",
    countrySlug: "nepal",
    location: "Sinamangal, Kathmandu",
    established: "1997",
    fees: "$6,500 / year",
    totalFees: "~₹27–30 Lakhs (Full Course)",
    duration: "5.5 Years (4.5 + 1 year internship)",
    medium: "English",
    recognition: "WHO, NMC (India), Nepal Medical Council",
    banner:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Kathmandu Medical College (KMC) is one of the premier medical colleges in Nepal, affiliated with Kathmandu University. Established in 1997, it is located in Sinamangal, Kathmandu, and has its own 630-bed teaching hospital. KMC offers an MBBS program that follows a curriculum similar to the Indian medical education system, making it an ideal choice for Indian students. The college is recognized by WHO and NMC India.",
    highlights: [
      "Affiliated with Kathmandu University",
      "630-bed own teaching hospital",
      "NMC India & WHO recognized",
      "Curriculum similar to Indian MBBS pattern",
      "No visa required for Indian students",
      "Affordable fees – significantly lower than Indian private colleges",
      "Close proximity to India – easy travel",
      "English-medium instruction",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% aggregate",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "College hostel available within campus. Indian food mess facility provided. Separate hostels for boys and girls with modern amenities.",
    facilities: [
      "Teaching Hospital",
      "Library",
      "Labs",
      "Hostel",
      "Cafeteria",
      "Sports Ground",
    ],
  },
  "manipal-college-of-medical-sciences": {
    name: "Manipal College of Medical Sciences",
    country: "Nepal",
    countrySlug: "nepal",
    location: "Pokhara, Kaski",
    established: "1994",
    fees: "$7,000 / year",
    totalFees: "~₹30–34 Lakhs (Full Course)",
    duration: "5.5 Years (4.5 + 1 year internship)",
    medium: "English",
    recognition: "WHO, NMC (India), Nepal Medical Council",
    banner:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Manipal College of Medical Sciences (MCOMS), Pokhara, is part of the renowned Manipal Education Group. Established in 1994 and affiliated with Kathmandu University, it is one of the oldest and most trusted medical colleges in Nepal for Indian students. The college has its own 900-bed Manipal Teaching Hospital and follows a curriculum closely aligned with the Indian MBBS pattern. Located in the scenic city of Pokhara, it offers a peaceful study environment.",
    highlights: [
      "Part of the prestigious Manipal Education Group",
      "900-bed Manipal Teaching Hospital",
      "NMC India & WHO recognized",
      "Indian-pattern MBBS curriculum",
      "30+ years of educational excellence",
      "Located in scenic Pokhara – peaceful study environment",
      "Large Indian student community",
      "Well-established placement support",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% aggregate",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "Well-maintained hostel within campus. Indian mess with home-style food. Separate accommodation for boys and girls.",
    facilities: [
      "Manipal Teaching Hospital",
      "Central Library",
      "Research Labs",
      "Sports Complex",
      "Hostel",
      "Cafeteria",
    ],
  },
  "nepal-medical-college": {
    name: "Nepal Medical College",
    country: "Nepal",
    countrySlug: "nepal",
    location: "Jorpati, Kathmandu",
    established: "1998",
    fees: "$6,800 / year",
    totalFees: "~₹28–32 Lakhs (Full Course)",
    duration: "5.5 Years (4.5 + 1 year internship)",
    medium: "English",
    recognition: "WHO, NMC (India), Nepal Medical Council",
    banner:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Nepal Medical College (NMC), established in 1998, is a well-known private medical college in Kathmandu affiliated with Kathmandu University. It has its own 500-bed teaching hospital and provides comprehensive medical education with a focus on clinical skills. The college has a significant Indian student population and offers a comfortable learning environment with modern facilities.",
    highlights: [
      "Affiliated with Kathmandu University",
      "500-bed own teaching hospital",
      "NMC India & WHO recognized",
      "Strong clinical training focus",
      "Significant Indian student community",
      "Modern lab and library facilities",
      "Located in Kathmandu – convenient location",
      "Affordable tuition fees",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% aggregate",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "Hostel accommodation available near campus. Indian food mess provided. Safe and comfortable living environment.",
    facilities: [
      "Teaching Hospital",
      "Library",
      "Labs",
      "Hostel",
      "Cafeteria",
      "Sports",
    ],
  },
  "kist-medical-college": {
    name: "KIST Medical College",
    country: "Nepal",
    countrySlug: "nepal",
    location: "Imadol, Lalitpur",
    established: "2004",
    fees: "$6,200 / year",
    totalFees: "~₹25–28 Lakhs (Full Course)",
    duration: "5.5 Years (4.5 + 1 year internship)",
    medium: "English",
    recognition: "WHO, NMC (India), Nepal Medical Council",
    banner:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "KIST Medical College and Teaching Hospital, located in Lalitpur (near Kathmandu), is a growing medical institution affiliated with Tribhuvan University. Established in 2004, it offers an affordable MBBS program that is recognized by WHO and NMC India. The college has its own teaching hospital and provides hands-on clinical training. It is popular among Indian students for its low fees and quality education.",
    highlights: [
      "Affiliated with Tribhuvan University",
      "Own teaching hospital for clinical training",
      "NMC India & WHO recognized",
      "One of the most affordable MBBS options in Nepal",
      "Good clinical exposure from early years",
      "Located near Kathmandu – easy access",
      "Growing infrastructure and facilities",
      "Supportive environment for Indian students",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% aggregate",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "Campus hostel available with basic amenities. Indian food mess. Separate hostels for male and female students.",
    facilities: [
      "Teaching Hospital",
      "Library",
      "Labs",
      "Hostel",
      "Cafeteria",
      "Wi-Fi",
    ],
  },
  // ========== ITALY ==========
  "university-of-bologna": {
    name: "University of Bologna",
    country: "Italy",
    countrySlug: "italy",
    location: "Bologna, Emilia-Romagna",
    established: "1088",
    fees: "€500–4,500 / year (income-based)",
    totalFees: "~€3,000–27,000 (Full Course – income dependent)",
    duration: "6 Years (integrated MD)",
    medium: "English (IMAT entrance exam)",
    recognition: "WHO, NMC (FMGE/NEXT required), FAIMER",
    banner:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "The University of Bologna (UNIBO), founded in 1088, is the oldest university in the world. Its School of Medicine offers a 6-year English-taught Medicine and Surgery (MD) degree through the IMAT entrance exam. Fees are income-based, making it accessible for international students. The university is affiliated with Policlinico Sant'Orsola-Malpighi, one of Italy's largest teaching hospitals. UNIBO has a long tradition of excellence in medical research and education.",
    highlights: [
      "World's oldest university – founded 1088",
      "English-taught MD program via IMAT",
      "Income-based fees – starting from €500/year",
      "WHO & NMC recognized degree",
      "Policlinico Sant'Orsola – major teaching hospital",
      "DSU scholarships available for international students",
      "Rich cultural and academic heritage in Bologna",
      "Strong international student community",
    ],
    eligibility: [
      "IMAT entrance exam qualification required",
      "12th pass with PCB – strong academic record",
      "NEET qualification for NMC recognition",
      "Valid passport and student visa",
      "English proficiency (B2 level recommended)",
    ],
    hostel:
      "ER.GO (regional student services) provides subsidized student housing. Private apartments also available. Bologna is known for its excellent food culture and affordable cost of living.",
    facilities: [
      "Policlinico Sant'Orsola",
      "University Libraries",
      "Research Labs",
      "Sports",
      "Mensa",
      "Student Services",
    ],
  },
  "sapienza-university-of-rome": {
    name: "Sapienza University of Rome",
    country: "Italy",
    countrySlug: "italy",
    location: "Rome, Lazio",
    established: "1303",
    fees: "€1,000–2,900 / year (income-based)",
    totalFees: "~€6,000–17,400 (Full Course – income dependent)",
    duration: "6 Years (integrated MD)",
    medium: "English (IMAT entrance exam)",
    recognition: "WHO, NMC (FMGE/NEXT required), FAIMER",
    banner:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Sapienza University of Rome is the largest university in Europe and one of the oldest, founded in 1303. Its Faculty of Medicine offers a 6-year English-taught Medicine and Surgery program, highly popular among international students. Sapienza is affiliated with Policlinico Umberto I, one of the largest hospitals in Europe. The university consistently ranks among Italy's top medical schools and provides excellent clinical training opportunities in Rome's advanced healthcare system.",
    highlights: [
      "Largest university in Europe – 100,000+ students",
      "Founded in 1303 – over 700 years of excellence",
      "English-taught MD via IMAT entrance exam",
      "WHO & NMC recognized",
      "Policlinico Umberto I – one of Europe's largest hospitals",
      "Income-based affordable fees",
      "Located in Rome – rich cultural experience",
      "Laziodisco scholarships for international students",
    ],
    eligibility: [
      "IMAT entrance exam qualification",
      "12th with PCB – strong academic record",
      "NEET qualification for NMC compliance",
      "Valid passport and Italian student visa",
      "English proficiency (B2 recommended)",
    ],
    hostel:
      "Laziodisco provides subsidized student residences. Many international students share apartments in Rome's university neighborhoods. Indian restaurants and communities are present in Rome.",
    facilities: [
      "Policlinico Umberto I",
      "Medical Libraries",
      "Anatomy Labs",
      "Simulation Center",
      "Sports",
      "Mensa",
    ],
  },
  "university-of-padua": {
    name: "University of Padua",
    country: "Italy",
    countrySlug: "italy",
    location: "Padua, Veneto",
    established: "1222",
    fees: "€500–2,700 / year (income-based)",
    totalFees: "~€3,000–16,200 (Full Course – income dependent)",
    duration: "6 Years (integrated MD)",
    medium: "English (IMAT entrance exam)",
    recognition: "WHO, NMC (FMGE/NEXT required), FAIMER",
    banner:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "The University of Padua (UNIPD), founded in 1222, is one of the world's oldest universities and has been at the forefront of medical science for 800 years. It was here that the famous anatomist Andreas Vesalius worked, and the world's first permanent anatomical theater was built. The Faculty of Medicine offers a prestigious 6-year English-taught MD program via IMAT. UNIPD is affiliated with Azienda Ospedaliera di Padova, a major teaching hospital in Northern Italy.",
    highlights: [
      "800+ years of medical education tradition",
      "Home to the world's first anatomical theater",
      "English-taught MD program via IMAT",
      "WHO & NMC recognized",
      "Azienda Ospedaliera di Padova – major teaching hospital",
      "Among the lowest tuition fees in Europe",
      "ESU Padova scholarships for international students",
      "Padua – charming university city near Venice",
    ],
    eligibility: [
      "IMAT entrance exam qualification",
      "12th with PCB – 50%+ aggregate",
      "NEET qualification for NMC recognition",
      "Valid passport and student visa",
      "English proficiency recommended",
    ],
    hostel:
      "ESU Padova provides subsidized student housing. Padua is an affordable and safe student city. Private rooms and shared apartments are easy to find.",
    facilities: [
      "Teaching Hospital",
      "Anatomical Theater",
      "Research Labs",
      "University Library",
      "Sports Center",
      "Mensa",
    ],
  },
  // ========== BANGLADESH ==========
  "dhaka-medical-college": {
    name: "Dhaka Medical College",
    country: "Bangladesh",
    countrySlug: "bangladesh",
    location: "Dhaka, Bangladesh",
    established: "1946",
    fees: "$8,000 / year",
    totalFees: "~₹37–44 Lakhs (Full Course)",
    duration: "5+1 Years (5 years study + 1 year internship)",
    medium: "English",
    recognition: "WHO, NMC (India), BMDC",
    banner:
      "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Dhaka Medical College (DMC) is the most prestigious and oldest medical college in Bangladesh, established in 1946. It is a government medical college affiliated with the University of Dhaka. DMC has a 2,300-bed teaching hospital – one of the largest in South Asia. The MBBS program follows a curriculum similar to the Indian pattern, and the degree is recognized by WHO, NMC India, and BMDC. Thousands of Indian students have graduated from DMC over the decades.",
    highlights: [
      "Most prestigious medical college in Bangladesh",
      "2,300-bed teaching hospital – among South Asia's largest",
      "Government college – affordable fees",
      "NMC India & WHO recognized",
      "75+ years of medical education excellence",
      "Curriculum similar to Indian MBBS pattern",
      "Large Indian student alumni network",
      "English-medium instruction",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% aggregate",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "Government hostel available within campus at affordable rates. Indian food mess facility provided. Separate hostels for boys and girls.",
    facilities: [
      "2300-bed Hospital",
      "Central Library",
      "Research Labs",
      "Auditorium",
      "Sports Ground",
      "Cafeteria",
    ],
  },
  "chittagong-medical-college": {
    name: "Chittagong Medical College",
    country: "Bangladesh",
    countrySlug: "bangladesh",
    location: "Chittagong, Bangladesh",
    established: "1957",
    fees: "$7,500 / year",
    totalFees: "~₹35–40 Lakhs (Full Course)",
    duration: "5+1 Years (5 years study + 1 year internship)",
    medium: "English",
    recognition: "WHO, NMC (India), BMDC",
    banner:
      "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Chittagong Medical College is one of the leading government medical colleges in Bangladesh, established in 1957. Located in the port city of Chittagong, it has a large teaching hospital with over 1,800 beds. The college offers a comprehensive MBBS program in English, recognized by WHO and NMC India. It has a long history of training competent medical professionals and is known for its strong clinical programs.",
    highlights: [
      "Leading government medical college in Chittagong",
      "1,800+ bed teaching hospital",
      "NMC India & WHO recognized",
      "65+ years of medical education",
      "Affordable government fees",
      "Strong clinical training programs",
      "English-medium MBBS curriculum",
      "Port city with good connectivity to India",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% aggregate",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "Government hostel on campus. Indian food options available. Separate accommodation for male and female students.",
    facilities: [
      "Teaching Hospital",
      "Library",
      "Labs",
      "Hostel",
      "Sports",
      "Cafeteria",
    ],
  },
  "sylhet-mag-osmani-medical-college": {
    name: "Sylhet MAG Osmani Medical College",
    country: "Bangladesh",
    countrySlug: "bangladesh",
    location: "Sylhet, Bangladesh",
    established: "1962",
    fees: "$7,200 / year",
    totalFees: "~₹33–38 Lakhs (Full Course)",
    duration: "5+1 Years (5 years study + 1 year internship)",
    medium: "English",
    recognition: "WHO, NMC (India), BMDC",
    banner:
      "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Sylhet MAG Osmani Medical College, established in 1962, is a renowned government medical college in Sylhet division. Named after General MAG Osmani, it has a 1,200-bed teaching hospital and provides quality medical education at affordable fees. The college is recognized by WHO and NMC India. Sylhet's proximity to the Indian border makes it a convenient option for Indian students from the northeast.",
    highlights: [
      "Renowned government medical college",
      "1,200-bed teaching hospital",
      "NMC India & WHO recognized",
      "60+ years of academic excellence",
      "Affordable government college fees",
      "Close to Indian border – easy access for NE India students",
      "Good clinical exposure",
      "English-medium instruction",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% aggregate",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "On-campus hostel available. Indian food mess. Safe environment with security.",
    facilities: [
      "Teaching Hospital",
      "Library",
      "Labs",
      "Hostel",
      "Sports",
      "Cafeteria",
    ],
  },
  "rajshahi-medical-college": {
    name: "Rajshahi Medical College",
    country: "Bangladesh",
    countrySlug: "bangladesh",
    location: "Rajshahi, Bangladesh",
    established: "1958",
    fees: "$7,000 / year",
    totalFees: "~₹32–37 Lakhs (Full Course)",
    duration: "5+1 Years (5 years study + 1 year internship)",
    medium: "English",
    recognition: "WHO, NMC (India), BMDC",
    banner:
      "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Rajshahi Medical College (RMC) is one of the oldest and most reputed government medical colleges in Bangladesh, established in 1958. Located in Rajshahi – known as the 'Education City' of Bangladesh – the college has a 1,000-bed teaching hospital and provides excellent clinical training. RMC is recognized by WHO and NMC India and has a strong track record of producing competent medical graduates.",
    highlights: [
      "One of Bangladesh's oldest government medical colleges",
      "1,000-bed teaching hospital",
      "NMC India & WHO recognized",
      "Located in Rajshahi – 'Education City' of Bangladesh",
      "65+ years of medical excellence",
      "Affordable fees – government subsidized",
      "Strong clinical training and patient exposure",
      "English-medium MBBS program",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% aggregate",
      "NEET UG qualification mandatory",
      "Age 17+ on 31st December of admission year",
      "Valid Indian passport",
    ],
    hostel:
      "On-campus government hostel with basic amenities. Indian food available. Separate hostels for boys and girls.",
    facilities: [
      "Teaching Hospital",
      "Central Library",
      "Research Labs",
      "Hostel",
      "Sports Ground",
      "Cafeteria",
    ],
  },
  // ========== BARBADOS ==========
  "american-university-of-barbados": {
    name: "American University of Barbados",
    country: "Barbados",
    countrySlug: "barbados",
    location: "Wildey, St. Michael, Barbados",
    established: "2011",
    fees: "$16,500 / year",
    totalFees: "~₹32–36 Lakhs (Full Course for Basic Sciences)",
    duration:
      "5 Years (2 years basic sciences + 2 years clinical + 1 year internship)",
    medium: "English",
    recognition: "WHO, NMC (India), ECFMG, WDOMS",
    banner:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "The American University of Barbados (AUB) School of Medicine is a Caribbean medical school offering a US-modeled MBBS/MD program. Located in Wildey, St. Michael, it provides a comprehensive medical curriculum designed to prepare students for international licensing exams including USMLE and FMGE/NEXT. AUB's clinical rotations take place in affiliated hospitals in the US, UK, and the Caribbean, providing diverse clinical exposure. The university is recognized by WHO, NMC India, ECFMG, and WDOMS.",
    highlights: [
      "US-modeled medical curriculum",
      "WHO, NMC, ECFMG, WDOMS recognized",
      "Clinical rotations in US/UK affiliated hospitals",
      "No IELTS/TOEFL required",
      "Small class sizes – personalized attention",
      "USMLE & FMGE/NEXT preparation built into curriculum",
      "English-medium instruction",
      "Safe Caribbean island study environment",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% aggregate",
      "NEET UG qualification mandatory for Indian students",
      "Age 17+ at time of admission",
      "Valid Indian passport",
      "No IELTS/TOEFL required",
    ],
    hostel:
      "University-arranged accommodation in Wildey area. Furnished apartments for students. Indian grocery stores accessible in Bridgetown.",
    facilities: [
      "Clinical Skills Lab",
      "Library",
      "Computer Lab",
      "Student Lounge",
      "Anatomy Lab",
      "Research Center",
    ],
  },
  "victoria-university-of-barbados": {
    name: "Victoria University of Barbados",
    country: "Barbados",
    countrySlug: "barbados",
    location: "Bridgetown, Barbados",
    established: "2018",
    fees: "$7,000 / year",
    totalFees: "~₹18–22 Lakhs (Full Course for Basic Sciences)",
    duration:
      "5 Years (2 years basic sciences + 2 years clinical + 1 year internship)",
    medium: "English",
    recognition: "WHO, NMC (India), WDOMS",
    banner:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    about:
      "Victoria University of Barbados (VUB) is an affordable Caribbean medical school located in Bridgetown, Barbados. It offers an MD program designed for international students, following a comprehensive curriculum that prepares graduates for USMLE, FMGE/NEXT, and other international licensing exams. VUB is recognized by WHO and NMC India. The university focuses on providing quality medical education at one of the most affordable fee structures in the Caribbean region.",
    highlights: [
      "One of the most affordable Caribbean medical schools",
      "WHO & NMC (India) recognized",
      "English-medium MD program",
      "No IELTS/TOEFL required",
      "USMLE & FMGE preparation support",
      "Clinical rotations in affiliated hospitals",
      "Safe and English-speaking environment",
      "Modern campus in Bridgetown",
    ],
    eligibility: [
      "12th pass with PCB – minimum 50% aggregate",
      "NEET UG qualification mandatory for Indian students",
      "Age 17+ at time of admission",
      "Valid Indian passport",
    ],
    hostel:
      "Campus-arranged student accommodation in Bridgetown. Affordable living costs. English-speaking environment for easy adaptation.",
    facilities: [
      "Anatomy Lab",
      "Library",
      "Computer Lab",
      "Student Lounge",
      "Simulation Lab",
      "Cafeteria",
    ],
  },
};

// Auto-generate fee structure from existing fee and duration data
const generateFeeStructure = (uniData) => {
  if (uniData.feeStructure) return uniData.feeStructure;

  const feeStr = uniData.fees || "";
  const durationStr = uniData.duration || "";

  // Parse tuition amount
  let tuitionNum = 0;
  let currency = "$";
  const feeMatch = feeStr.match(/([€$])([\d,]+(?:\.\d+)?)/);
  if (feeMatch) {
    currency = feeMatch[1];
    tuitionNum = parseFloat(feeMatch[2].replace(/,/g, ""));
  }
  // Handle income-based / range fees (e.g. "€500–4,500")
  const rangeMatch = feeStr.match(/([€$])([\d,]+).*?([\d,]+)/);
  if (!feeMatch && rangeMatch) {
    currency = rangeMatch[1];
    tuitionNum = parseFloat(rangeMatch[3].replace(/,/g, ""));
  }

  // Determine number of years
  let years = 6;
  if (
    durationStr.includes("5+1") ||
    durationStr.includes("5.5") ||
    durationStr.includes("5 Years")
  )
    years = 6;
  else if (durationStr.includes("6 Years 3")) years = 6;
  else if (durationStr.includes("6 Years")) years = 6;

  // Estimate hostel & food based on country
  const countryName = (uniData.country || "").toLowerCase();
  let hostel = 600,
    food = 1000;
  if (["uzbekistan", "tajikistan", "kyrgyzstan"].includes(countryName)) {
    hostel = 400;
    food = 700;
  } else if (countryName === "russia") {
    hostel = 700;
    food = 1000;
  } else if (countryName === "georgia") {
    hostel = 900;
    food = 1300;
  } else if (countryName === "kazakhstan") {
    hostel = 600;
    food = 900;
  } else if (countryName === "germany") {
    hostel = 3600;
    food = 3000;
    currency = "€";
  } else if (countryName === "italy") {
    hostel = 3000;
    food = 3600;
    currency = "€";
  } else if (countryName === "nepal") {
    hostel = 600;
    food = 800;
  } else if (countryName === "bangladesh") {
    hostel = 500;
    food = 700;
  } else if (countryName === "barbados") {
    hostel = 2400;
    food = 2400;
  }

  const rows = [];
  for (let i = 1; i <= years; i++) {
    const isInternship = i === years;
    const yearTuition = isInternship
      ? Math.round(tuitionNum * 0.5)
      : tuitionNum;
    const yearHostel = hostel;
    const yearFood = food;
    const total = yearTuition + yearHostel + yearFood;
    rows.push({
      year: isInternship ? `Year ${i} (Internship)` : `Year ${i}`,
      tuition: `${currency}${yearTuition.toLocaleString()}`,
      hostel: `${currency}${yearHostel.toLocaleString()}`,
      food: `${currency}${yearFood.toLocaleString()}`,
      total: `${currency}${total.toLocaleString()}`,
    });
  }
  return rows;
};

// University Minimal Slider — Sleek, modern horizontal slider
const UniversityMinimalSlider = ({ universities }) => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeftArrow(scrollLeft > 20);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative group/slider">
      {/* Navigation Arrows */}
      <button
        onClick={() => scroll("left")}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 ${
          showLeftArrow
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } hidden md:flex`}
      >
        <FiArrowLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 ${
          showRightArrow
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } hidden md:flex`}
      >
        <FiArrowRight />
      </button>

      {/* Gradient Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-opacity" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-opacity" />

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 pt-4 px-4 no-scrollbar scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {universities.map((uni, idx) => (
          <motion.div
            key={uni.slug}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex-shrink-0"
          >
            <Link
              to={`/mbbs/${uni.countrySlug}/${uni.slug}`}
              className="block w-72 sm:w-80 group/card relative"
            >
              <div className="relative p-6 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] group-hover/card:shadow-[0_20px_40px_-12px_rgba(59,130,246,0.15)] group-hover/card:border-blue-100 group-hover/card:-translate-y-2 transition-all duration-500 overflow-hidden">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-12 -mt-12 group-hover/card:bg-blue-600 transition-colors duration-500 opacity-20 group-hover/card:opacity-10" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-blue-200 group-hover/card:scale-110 transition-transform duration-500">
                      {uni.name.charAt(0)}
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-1">
                        Session 2026-27
                      </span>
                      <div className="flex items-center gap-1 justify-end text-amber-500">
                        <FiStar className="fill-current text-[10px]" />
                        <span className="text-[10px] font-bold">Top Rated</span>
                      </div>
                    </div>
                  </div>

                  <h4 className="font-bold text-slate-900 text-lg leading-tight mb-2 group-hover/card:text-blue-600 transition-colors line-clamp-2 min-h-[3.5rem]">
                    {uni.name}
                  </h4>

                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
                    <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center">
                      <FiMapPin className="text-[10px]" />
                    </div>
                    <span>{uni.location}</span>
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider mb-1">
                        Tuition Fees
                      </p>
                      <p className="text-xl font-black text-slate-900 group-hover/card:text-blue-600 transition-colors">
                        {uni.fees}
                        <span className="text-xs font-medium text-slate-400 ml-1">
                          /yr
                        </span>
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover/card:bg-blue-600 group-hover/card:text-white group-hover/card:border-blue-600 transition-all duration-300">
                      <FiArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
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
            className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 sm:px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
          >
            <FiArrowLeft /> Back to Country Page
          </Link>
        </div>
      </div>
    );
  }

  // Generate fee structure
  const feeStructure = generateFeeStructure(uniData);

  // Get other universities from same country for "Explore Other Universities"
  const otherUniversities = Object.entries(universityData)
    .filter(
      ([slug, data]) =>
        data.countrySlug === uniData.countrySlug && slug !== university,
    )
    .slice(0, 6)
    .map(([slug, data]) => ({ slug, ...data }));

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
      <section className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[800px] flex items-center justify-center overflow-hidden">
        <img
          src={uniData.banner}
          alt={uniData.name}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/30" />
        <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto">
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
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
        <div className="container mx-auto px-4 sm:px-6 py-6">
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
              <p className="text-xl font-bold text-blue-700 mt-1">
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
        <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-12">
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

            {/* YouTube Video */}
            {uniData.youtubeVideo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <FiGlobe className="text-red-500" /> Watch Video —{" "}
                  {uniData.name}
                </h2>
                <div
                  className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${uniData.youtubeVideo.split("v=")[1]?.split("&")[0]}`}
                    title={`${uniData.name} - Video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            )}

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
                    className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-blue-50 rounded-xl border border-blue-100"
                  >
                    <FiCheck className="text-blue-600 mt-0.5 flex-shrink-0" />
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
                <FiFileText className="text-blue-600" /> Eligibility Criteria
              </h2>
              <ul className="space-y-3">
                {uniData.eligibility.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl"
                  >
                    <div className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
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
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
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
                <FiHome className="text-blue-600" /> Hostel & Accommodation
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {uniData.hostel}
              </p>
              <div className="flex flex-wrap gap-3">
                {uniData.facilities.map((f, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-800 border border-blue-200 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    <FiShield className="text-xs" /> {f}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Year-Wise Fee Structure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                <FiDollarSign className="text-green-600" /> Year-Wise Fee
                Structure
              </h2>
              <p className="text-slate-500 text-sm mb-6">
                Estimated annual costs including tuition, hostel, and living
                expenses (approx.)
              </p>

              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                      <th className="text-left py-4 px-5 font-semibold rounded-tl-2xl">
                        Year
                      </th>
                      <th className="text-left py-4 px-5 font-semibold">
                        Tuition Fee
                      </th>
                      <th className="text-left py-4 px-5 font-semibold">
                        Hostel
                      </th>
                      <th className="text-left py-4 px-5 font-semibold">
                        Food & Living
                      </th>
                      <th className="text-left py-4 px-5 font-semibold rounded-tr-2xl">
                        Total (Approx.)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.map((row, idx) => (
                      <tr
                        key={idx}
                        className={`border-b border-slate-100 last:border-b-0 ${
                          idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                        } hover:bg-blue-50/40 transition-colors`}
                      >
                        <td className="py-3.5 px-5 font-semibold text-slate-900">
                          {row.year}
                        </td>
                        <td className="py-3.5 px-5 text-blue-600 font-bold">
                          {row.tuition}
                        </td>
                        <td className="py-3.5 px-5 text-slate-600">
                          {row.hostel}
                        </td>
                        <td className="py-3.5 px-5 text-slate-600">
                          {row.food}
                        </td>
                        <td className="py-3.5 px-5 font-bold text-green-700">
                          {row.total}
                        </td>
                      </tr>
                    ))}
                    {/* Total Row */}
                    <tr className="bg-gradient-to-r from-blue-50 to-blue-100 border-t-2 border-blue-200">
                      <td className="py-4 px-5 font-bold text-slate-900 rounded-bl-2xl">
                        Total Course
                      </td>
                      <td
                        colSpan={3}
                        className="py-4 px-5 text-slate-600 font-semibold"
                      >
                        {uniData.totalFees}
                      </td>
                      <td className="py-4 px-5 font-bold text-green-800 text-lg rounded-br-2xl">
                        {uniData.totalFees}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-3">
                {feeStructure.map((row, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-bold text-slate-900 text-base">
                        {row.year}
                      </span>
                      <span className="text-green-700 font-bold bg-green-50 px-3 py-1 rounded-full text-sm border border-green-200">
                        {row.total}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-blue-50 rounded-lg p-2">
                        <p className="text-[10px] text-slate-400 uppercase font-semibold">
                          Tuition
                        </p>
                        <p className="text-sm font-bold text-blue-600">
                          {row.tuition}
                        </p>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-2">
                        <p className="text-[10px] text-slate-400 uppercase font-semibold">
                          Hostel
                        </p>
                        <p className="text-sm font-bold text-slate-700">
                          {row.hostel}
                        </p>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-2">
                        <p className="text-[10px] text-slate-400 uppercase font-semibold">
                          Food
                        </p>
                        <p className="text-sm font-bold text-slate-700">
                          {row.food}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">
                      Total Course Cost
                    </span>
                    <span className="text-green-800 font-bold text-lg">
                      {uniData.totalFees}
                    </span>
                  </div>
                </div>
              </div>

              {/* Fee disclaimer */}
              <p className="text-xs text-slate-400 mt-4 italic">
                * Fees are approximate and may vary. Hostel and food costs are
                estimated averages. Contact us for the latest fee details.
              </p>
            </motion.div>
          </div>

          {/* Sidebar — Enhanced */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <InquiryForm
                title={`Apply to ${uniData.name}`}
                subtitle="Get free admission assessment"
                showNeetScore={true}
              />

              {/* University Quick Facts */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5">
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    <FiGlobe /> Quick Facts
                  </h4>
                </div>
                <div className="p-5 space-y-0">
                  {[
                    {
                      icon: <FiMapPin className="text-blue-400" />,
                      label: "Location",
                      value: uniData.location || uniData.country,
                    },
                    {
                      icon: <FiCalendar className="text-blue-400" />,
                      label: "Established",
                      value: uniData.established || "—",
                    },
                    {
                      icon: <FiBookOpen className="text-blue-400" />,
                      label: "Medium",
                      value: uniData.medium || "English",
                    },
                    {
                      icon: <FiShield className="text-blue-400" />,
                      label: "Recognition",
                      value: uniData.recognition || "WHO, NMC",
                    },
                    {
                      icon: <FiDollarSign className="text-blue-400" />,
                      label: "Fee / Year",
                      value: uniData.fees || "—",
                    },
                    {
                      icon: <FiClock className="text-blue-400" />,
                      label: "Duration",
                      value: uniData.duration || "6 Years",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-b-0"
                    >
                      <span className="text-slate-500 text-sm flex items-center gap-2">
                        {item.icon} {item.label}
                      </span>
                      <span className="font-bold text-slate-800 text-sm text-right max-w-[55%] truncate">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Apply Through Us */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-blue-700 mb-3 flex items-center gap-2">
                  <FiShield className="text-blue-500" /> Why Apply Through
                  Capton Visa Point?
                </h4>
                <ul className="text-sm text-slate-600 space-y-2.5">
                  <li className="flex items-start gap-2">
                    <FiCheck className="text-blue-600 mt-0.5 flex-shrink-0" />{" "}
                    Direct admission – no middlemen
                  </li>
                  <li className="flex items-start gap-2">
                    <FiCheck className="text-blue-600 mt-0.5 flex-shrink-0" />{" "}
                    Complete visa & documentation support
                  </li>
                  <li className="flex items-start gap-2">
                    <FiCheck className="text-blue-600 mt-0.5 flex-shrink-0" />{" "}
                    Pre-departure & airport assistance
                  </li>
                  <li className="flex items-start gap-2">
                    <FiCheck className="text-blue-600 mt-0.5 flex-shrink-0" />{" "}
                    On-ground support after arrival
                  </li>
                  <li className="flex items-start gap-2">
                    <FiCheck className="text-blue-600 mt-0.5 flex-shrink-0" />{" "}
                    Transparent fees – no hidden charges
                  </li>
                </ul>
              </div>

              {/* Admission Steps Timeline */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-5">
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    <FiFileText /> Admission Steps
                  </h4>
                </div>
                <div className="p-5">
                  {[
                    {
                      step: "1",
                      label: "Apply Online",
                      desc: "Fill form & submit documents",
                    },
                    {
                      step: "2",
                      label: "Get Offer Letter",
                      desc: "University confirmation",
                    },
                    {
                      step: "3",
                      label: "Pay Fee",
                      desc: "Complete first year fee",
                    },
                    {
                      step: "4",
                      label: "Visa Processing",
                      desc: "Apply with invitation letter",
                    },
                    {
                      step: "5",
                      label: "Fly & Join",
                      desc: "Start your MBBS journey!",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 mb-4 last:mb-0">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {item.step}
                        </div>
                        {i < 4 && (
                          <div className="w-0.5 h-6 bg-blue-200 mt-1" />
                        )}
                      </div>
                      <div className="pt-1">
                        <p className="font-bold text-slate-900 text-sm">
                          {item.label}
                        </p>
                        <p className="text-slate-500 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Need Help CTA */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-amber-200/50">
                    <FiStar className="text-white text-xl" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    Need Guidance?
                  </h4>
                  <p className="text-slate-600 text-xs mb-4">
                    Our experts can help you choose the right university.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-orange-200/50 transition-all"
                  >
                    Talk to Expert <FiArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Universities — Full-Width Premium Section */}
      {otherUniversities.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 flex items-center justify-center gap-3">
                <FiGlobe className="text-blue-500" /> Explore Other Universities
                in {uniData.country}
              </h2>
              <p className="text-slate-500 text-sm max-w-xl mx-auto">
                Compare and explore more MBBS options in {uniData.country}
              </p>
            </motion.div>

            <UniversityMinimalSlider universities={otherUniversities} />
          </div>
        </section>
      )}
    </div>
  );
};

export default MbbsUniversity;
