import React, { useState, useEffect, useRef } from "react";
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
    whyChoose:
      "Russia is one of the most popular and trusted destinations for Indian students seeking affordable, world-class MBBS education abroad. With over 50 NMC-recognized and WHO-listed medical universities, Russia has a proven track record of training competent doctors from around the globe. Tuition fees in Russia are among the lowest — the total 6-year MBBS cost ranges from just ₹18–35 Lakhs including tuition, hostel, and living. Most universities offer fully English-medium programs, and there are no donation or capitation fees. Russian medical universities feature modern laboratories, simulation centers, and extensive clinical training at multi-specialty hospitals. Indian students benefit from the availability of Indian food in hostel messes, a growing Indian community, safe campus environments, and dedicated FMGE/NEXT coaching at many institutions.",
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
    whyChoose:
      "Georgia has emerged as one of Europe's most sought-after destinations for Indian medical students, offering European-standard MBBS education at highly affordable fees. Georgian medical universities are recognized by WHO, NMC, ECFMG, and FAIMER, ensuring global degree validity. Annual tuition fees range from just $3,000–$6,000, and the total 6-year cost is approximately ₹25–40 Lakhs — a fraction of what Indian private medical colleges charge. Admissions are merit-based with no donation or capitation fees, and all programs are taught entirely in English. Georgia is known for its exceptionally safe and welcoming environment, low crime rate, and multicultural atmosphere. Universities feature modern infrastructure, simulation labs, and strong clinical hospital training. Many Georgian medical graduates achieve excellent FMGE/NEXT pass rates, and some universities offer integrated preparation within their curriculum.",
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
    whyChoose:
      "Uzbekistan is rapidly becoming one of the top choices for Indian students seeking an extremely affordable yet high-quality MBBS education. With annual tuition fees as low as $2,800–$3,800 and a total 6-year course cost of just ₹15–30 Lakhs, Uzbekistan offers some of the most budget-friendly medical programs in the world. Multiple universities are NMC-approved and WHO-listed (WDOMS), and all programs are taught in English medium. The country has a transparent, merit-based admission process with no donation or capitation fees. Uzbek medical institutes feature experienced faculty, modern infrastructure, well-equipped laboratories, and affiliated hospitals for practical clinical training. The cost of living is remarkably low ($80–120/month), and Indian students enjoy a safe, student-friendly environment with Indian food messes available at most universities. Uzbekistan's growing reputation as a medical education hub makes it an excellent value-for-money option.",
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
    whyChoose:
      "Kazakhstan offers Indian students a unique combination of affordable, high-quality medical education with globally recognized degrees in a modern, multicultural Central Asian setting. Several Kazakh medical universities are NMC-approved and WHO-listed, with annual tuition fees ranging from $3,500–$5,500 and total course costs between ₹20–35 Lakhs. Most programs are offered in English medium, and admissions are straightforward — based on NEET qualification with no donation or capitation fees. Kazakhstan's medical universities feature modern laboratories, advanced teaching facilities, and comprehensive clinical training at multi-specialty hospitals. The country is known for its safe environment, welcoming attitude toward international students, and relatively affordable cost of living. Students benefit from multicultural campus life, Indian food availability, and excellent connectivity to India.",
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
    costOfLiving: "$80–120 / month",
    feePayment: "USD payment – online transfer or cash",
    whyChoose:
      "Kyrgyzstan is a highly popular and budget-friendly destination for Indian students pursuing MBBS abroad, known for its NMC-recognized universities, English-medium programs, and one of the lowest costs of medical education globally. The total 6-year MBBS cost ranges from just ₹15–30 Lakhs, with annual tuition fees between $3,500–$4,500. Multiple universities — including Kyrgyz State Medical Academy, International School of Medicine, and others — are NMC-approved and WHO-listed, ensuring graduates can practice in India after clearing FMGE/NEXT. The admission process is simple, requiring only NEET qualification with no entrance exams or capitation fees. Kyrgyzstan's universities provide quality practical training with clinical exposure at affiliated hospitals, and many offer dedicated FMGE coaching by Indian professors. Students enjoy a safe, peaceful study environment with comfortable hostels, Indian food messes, and a vibrant Indian student community.",
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
    whyChoose:
      "Tajikistan is an emerging and cost-effective destination for Indian students seeking MBBS abroad, particularly known for the prestigious Avicenna Tajik State Medical University — the oldest and most renowned medical institution in the country. With annual tuition fees of $3,000–$4,800 and a total course cost of approximately ₹18–28 Lakhs, Tajikistan offers one of the most affordable MBBS programs globally. Medical universities here are recognized by NMC, WHO, FAIMER, and ECFMG, ensuring graduates are eligible to practice in India after clearing FMGE/NEXT. Programs are taught in English medium, and admission is straightforward — based on NEET qualification with no donation required. Students benefit from quality clinical exposure, experienced faculty, safe and friendly campus environments, and very low cost of living ($70–100/month). Tajikistan is an ideal choice for students looking for a genuine, affordable medical education without compromising on quality and recognition.",
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
    currency: "Euro (€)",
    costOfLiving: "€850–1,200 / month",
    feePayment: "Semester contribution to university – online transfer in EUR",
    whyChoose:
      "Germany is a global leader in medical education and research with public universities offering virtually tuition-free MBBS (Medizin) programs. German medical degrees are recognized worldwide. The country boasts cutting-edge research facilities, university hospitals ranked among the best in Europe, and strong clinical training. Students benefit from a structured Studienkolleg pathway, a 6-year rigorous curriculum, and the opportunity to practice in one of the world's best healthcare systems.",
    partnerUniversities: [
      {
        name: "University of Heidelberg",
        location: "Heidelberg",
        fees: "€1,500 / semester",
        slug: "university-of-heidelberg",
      },
      {
        name: "Ludwig Maximilian University (LMU)",
        location: "Munich",
        fees: "€258 / semester",
        slug: "ludwig-maximilian-university",
      },
      {
        name: "Charité – Universitätsmedizin Berlin",
        location: "Berlin",
        fees: "€315 / semester",
        slug: "charite-universitaetsmedizin-berlin",
      },
      {
        name: "Technical University of Munich (TUM)",
        location: "Munich",
        fees: "€258 / semester",
        slug: "technical-university-of-munich",
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
      {
        name: "Goethe University Frankfurt",
        location: "Frankfurt",
        fees: "€390 / semester",
      },
      {
        name: "University of Hamburg",
        location: "Hamburg",
        fees: "€335 / semester",
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
    costOfLiving: "₹10,000–15,000 / month",
    feePayment: "INR or USD payment – bank transfer",
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
    currency: "Euro (€)",
    costOfLiving: "€700–1,000 / month",
    feePayment: "Income-based (ISEE certificate) – EUR bank transfer",
    whyChoose:
      "Italy offers one of the most affordable and prestigious MBBS (Medicina e Chirurgia) programs in Europe. Public universities charge income-based fees starting from as low as €500/year. Many top universities – including Sapienza, University of Bologna, and University of Padua – offer English-taught MD programs through the IMAT entrance exam. Italy's medical degrees are globally recognized by WHO and NMC. Students benefit from a rich cultural experience, world-class hospital training in renowned Italian healthcare institutions, and access to DSU scholarships that can cover tuition, housing, and living expenses.",
    partnerUniversities: [
      {
        name: "University of Bologna",
        location: "Bologna",
        fees: "€500–4,500 / year (income-based)",
        slug: "university-of-bologna",
      },
      {
        name: "Sapienza University of Rome",
        location: "Rome",
        fees: "€1,000–2,900 / year (income-based)",
        slug: "sapienza-university-of-rome",
      },
      {
        name: "University of Padua",
        location: "Padua",
        fees: "€500–2,700 / year (income-based)",
        slug: "university-of-padua",
      },
    ],
    otherUniversities: [
      {
        name: "University of Milan",
        location: "Milan",
        fees: "€500–4,100 / year",
      },
      {
        name: "University of Pavia",
        location: "Pavia",
        fees: "€500–3,500 / year",
      },
      {
        name: "University of Turin",
        location: "Turin",
        fees: "€500–2,800 / year",
      },
      {
        name: "University of Naples Federico II",
        location: "Naples",
        fees: "€500–2,500 / year",
      },
      {
        name: "University of Pisa",
        location: "Pisa",
        fees: "€500–3,000 / year",
      },
      {
        name: "University of Milan-Bicocca",
        location: "Milan",
        fees: "€500–4,900 / year",
      },
      {
        name: "University of Bari Aldo Moro",
        location: "Bari",
        fees: "€500–2,500 / year",
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
    costOfLiving: "₹6,000–10,000 / month",
    feePayment: "USD or BDT payment – bank transfer or demand draft",
    whyChoose:
      "Bangladesh is a popular and cost-effective destination for Indian students seeking MBBS education. The medical curriculum closely mirrors the Indian system, making it easier for students to prepare for FMGE/NEXT. With NMC & WHO recognized universities, affordable fees (total ₹37–44 Lakhs for the full course), English-medium instruction, and a similar cultural environment, Bangladesh offers a comfortable transition. 25–40% of MBBS seats are reserved for international students, and the geographic proximity ensures easy travel.",
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
    duration: "5–6 Years (including clinical rotations)",
    medium: "English",
    recognition: "WHO, NMC (India), ECFMG, WDOMS",
    currency: "Barbadian Dollar (BBD) / USD accepted",
    costOfLiving: "$400–800 / month",
    feePayment: "USD payment – bank transfer or online",
    whyChoose:
      "Barbados offers a unique opportunity for Indian students to pursue MBBS with a US-based curriculum in a Caribbean island setting. Medical universities in Barbados are recognized by NMC, WHO, ECFMG, and WDOMS, ensuring global degree validity. The instruction is entirely in English, no IELTS/TOEFL is required, and graduates are prepared for international licensing exams (USMLE, FMGE/NEXT). With affordable tuition (total ₹32–36 Lakhs), clinical rotation opportunities in the US/UK, and a safe, English-speaking environment, Barbados is an emerging medical education hub.",
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

// Infinite Marquee Slider Component
const InfiniteMarqueeSlider = ({ items, renderCard, speed = 35 }) => {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(320);

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) setCardWidth(280);
      else if (window.innerWidth < 1024) setCardWidth(300);
      else setCardWidth(320);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // We need at least enough items to fill the screen + extra for seamless loop
  const repeatedItems = [...items, ...items, ...items, ...items];
  const gap = 20;
  const singleSetWidth = items.length * (cardWidth + gap);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient fades on edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, white, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, white, transparent)" }}
      />

      <div
        ref={trackRef}
        className="flex py-6"
        style={{
          gap: `${gap}px`,
          animation: `marquee-scroll ${speed}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
          width: `${repeatedItems.length * (cardWidth + gap)}px`,
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {repeatedItems.map((item, idx) => (
          <div
            key={`${item.slug || item.id}-${idx}`}
            style={{ minWidth: cardWidth, maxWidth: cardWidth }}
            className="flex-shrink-0"
          >
            {renderCard(item, idx)}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${singleSetWidth}px); }
        }
      `}</style>
    </div>
  );
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

  // Get other countries for "Explore Other Countries" section
  const otherCountries = Object.entries(countryData)
    .filter(([key]) => key !== countryKey)
    .map(([key, cData]) => ({ slug: key, ...cData }));

  // Merge partnerUniversities + otherUniversities into a single list
  const allUniversities = [
    ...(data.partnerUniversities || []),
    ...(data.otherUniversities || []),
  ];

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
        <div className="relative z-20 text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-1.5 rounded-full text-sm font-semibold text-white mb-4 inline-block uppercase tracking-wider">
              MBBS in {countryName}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
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
      <section className="py-14 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Why choose {countryName}?
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {data.whyChoose ||
                  `Studying MBBS in ${countryName} is an excellent choice for Indian students. ${countryName} is known for its high standard of medical education, affordable tuition fees, and world-class infrastructure. Most medical universities in ${countryName} are recognized by WHO, FAIMER, and the National Medical Commission (NMC) of India.`}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <FiDollarSign className="text-3xl text-blue-600 mb-3" />
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
                <FiCheck className="text-3xl text-blue-600 mb-3" />
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
                  <FiDollarSign className="text-3xl text-blue-600 mb-3" />
                  <h3 className="font-bold text-slate-800">Cost of Living</h3>
                  <p className="text-slate-500 text-sm">
                    Average monthly cost: {data.costOfLiving}
                  </p>
                </div>
              )}
              {data.currency && (
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                  <FiAward className="text-3xl text-blue-600 mb-3" />
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

            {/* All Universities Table Section (Merged) */}
            {allUniversities.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl">
                    <FiGlobe className="text-2xl text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      Medical Universities in {countryName}
                    </h2>
                    <p className="text-sm text-slate-500">
                      All universities for Indian students – Session 2026-27
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-6 pl-1">
                  Explore the best medical universities in {countryName}{" "}
                  handpicked by our expert counsellors. Universities marked with
                  ⭐ are clickable — click to view detailed info, fees, hostel,
                  and admission process.
                </p>

                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                        <th className="text-left py-4 px-5 font-semibold rounded-tl-2xl">
                          #
                        </th>
                        <th className="text-left py-4 px-5 font-semibold">
                          University Name
                        </th>
                        <th className="text-left py-4 px-5 font-semibold">
                          Location
                        </th>
                        <th className="text-left py-4 px-5 font-semibold">
                          Tuition Fee
                        </th>
                        <th className="text-center py-4 px-5 font-semibold rounded-tr-2xl">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {allUniversities.map((uni, idx) => {
                        const row = (
                          <>
                            <td className="py-4 px-5 font-bold text-blue-600">
                              {String(idx + 1).padStart(2, "0")}
                            </td>
                            <td className="py-4 px-5">
                              <div className="flex items-center gap-2">
                                {uni.slug && (
                                  <span className="text-amber-500">⭐</span>
                                )}
                                <span className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                  {uni.name}
                                </span>
                              </div>
                            </td>
                            <td className="py-4 px-5 text-slate-500">
                              <span className="flex items-center gap-1">
                                <FiMapPin className="text-xs" /> {uni.location}
                              </span>
                            </td>
                            <td className="py-4 px-5 font-bold text-blue-600">
                              {uni.fees}
                            </td>
                            <td className="py-4 px-5 text-center">
                              {uni.slug ? (
                                <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                  View <FiArrowRight className="text-[10px]" />
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 text-xs text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full">
                                  <FiCheck className="text-[10px]" /> Listed
                                </span>
                              )}
                            </td>
                          </>
                        );
                        return uni.slug ? (
                          <Link
                            key={idx}
                            to={`/mbbs/${countryKey}/${uni.slug}`}
                            className="group table-row hover:bg-blue-50/60 transition-colors cursor-pointer border-b border-slate-100 last:border-b-0"
                          >
                            {row}
                          </Link>
                        ) : (
                          <tr
                            key={idx}
                            className="group hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-b-0"
                          >
                            {row}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-3">
                  {allUniversities.map((uni, idx) => {
                    const CardWrapper = uni.slug ? Link : "div";
                    const cardProps = uni.slug
                      ? { to: `/mbbs/${countryKey}/${uni.slug}` }
                      : {};
                    return (
                      <CardWrapper
                        key={idx}
                        {...cardProps}
                        className="group block bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all p-4"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <span className="inline-flex items-center justify-center w-7 h-7 bg-blue-100 text-blue-600 rounded-lg text-xs font-bold">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          {uni.slug && (
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-500 bg-blue-50 px-2 py-1 rounded-full">
                              View <FiArrowRight className="text-[10px]" />
                            </span>
                          )}
                        </div>
                        <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                          {uni.slug && (
                            <span className="text-amber-500 mr-1">⭐</span>
                          )}
                          {uni.name}
                        </h4>
                        <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-2">
                          <FiMapPin className="text-[10px]" /> {uni.location}
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                          <span className="text-blue-600 font-bold text-sm">
                            {uni.fees}
                          </span>
                          {uni.slug ? (
                            <span className="text-[10px] bg-blue-50 text-blue-800 px-2 py-0.5 rounded-full font-medium border border-blue-100">
                              <FiCheck className="inline text-[8px] mr-0.5" />{" "}
                              Recommended
                            </span>
                          ) : (
                            <span className="text-[10px] bg-slate-50 text-slate-500 px-2 py-0.5 rounded-full font-medium border border-slate-200">
                              <FiCheck className="inline text-[8px] mr-0.5" />{" "}
                              Listed
                            </span>
                          )}
                        </div>
                      </CardWrapper>
                    );
                  })}
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

              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-blue-50 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-brand-blue mb-2 flex items-center gap-2">
                  <FiAward className="text-amber-500" /> Why Capton Visa Point?
                </h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <FiCheck className="text-blue-600" /> Direct university
                    partnerships
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="text-blue-600" /> Hassle-free admission
                    process
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="text-blue-600" /> Complete visa
                    assistance
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="text-blue-600" /> Pre-departure guidance
                  </li>
                </ul>
              </div>

              {data.partnerUniversities &&
                data.partnerUniversities.length > 0 && (
                  <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-blue-50 rounded-2xl border border-blue-200">
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

      {/* Explore Other Countries - Infinite Marquee Slider */}
      {otherCountries.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 flex items-center justify-center gap-3">
                <FiGlobe className="text-blue-500" /> Explore Other Countries
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Discover MBBS opportunities in other top destinations
              </p>
            </motion.div>
          </div>

          <InfiniteMarqueeSlider
            items={otherCountries}
            speed={otherCountries.length * 5}
            renderCard={(c) => (
              <Link
                to={`/mbbs/${c.slug}`}
                className="group block rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-blue-400 shadow-lg hover:shadow-2xl transition-all duration-500 h-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Country Image with parallax-like overlay */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={c.bannerImage}
                    alt={`MBBS in ${c.name}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  {/* Animated shimmer overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    style={{ animation: "shimmer 2s ease-in-out infinite" }}
                  />
                  <h3 className="absolute bottom-3 left-4 text-white font-bold text-lg drop-shadow-lg group-hover:translate-x-1 transition-transform duration-300">
                    {c.name}
                  </h3>
                  {/* Floating badge */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold">
                      <FiGlobe className="text-[10px]" /> MBBS
                    </span>
                  </div>
                </div>

                {/* Country Info */}
                <div className="p-4">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <FiClock className="text-blue-500 flex-shrink-0" />
                      <span>{c.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <FiBookOpen className="text-blue-500 flex-shrink-0" />
                      <span>{c.medium}</span>
                    </div>
                    {c.costOfLiving && (
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <FiDollarSign className="text-green-500 flex-shrink-0" />
                        <span>Living: {c.costOfLiving}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <span className="text-[10px] font-semibold bg-green-50 text-green-700 px-2 py-0.5 rounded-full border border-green-200">
                      {c.recognition?.split(",")[0]} Recognized
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-500 group-hover:text-blue-700 transition-colors">
                      Explore{" "}
                      <FiArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </Link>
            )}
          />

          <style>{`
            @keyframes shimmer {
              0%, 100% { transform: translateX(-100%); }
              50% { transform: translateX(100%); }
            }
          `}</style>
        </section>
      )}
    </div>
  );
};

export default MbbsCountry;
