import {
  FiDollarSign,
  FiHome,
  FiShield,
  FiUsers,
  FiStar,
  FiClock,
} from "react-icons/fi";

export const jobCategories = [
  {
    title: "Nursing Jobs",
    positions: ["Staff Nurse", "ICU Nurse", "OR Nurse", "Pediatric Nurse", "Emergency Nurse", "Oncology Nurse"],
    salary: "AED 6,000 - 15,000/month",
    demand: "Very High",
  },
  {
    title: "Doctor Positions",
    positions: ["General Practitioner", "Specialist Doctors", "Consultant", "Resident Doctor", "Medical Officer"],
    salary: "AED 20,000 - 80,000/month",
    demand: "High",
  },
  {
    title: "Allied Health",
    positions: ["Lab Technician", "Radiographer", "Physiotherapist", "Pharmacist", "Dietitian", "Respiratory Therapist"],
    salary: "AED 8,000 - 20,000/month",
    demand: "High",
  },
  {
    title: "Support Staff",
    positions: ["Medical Assistant", "Healthcare Administrator", "Patient Care Coordinator", "Medical Coder"],
    salary: "AED 4,000 - 10,000/month",
    demand: "Moderate",
  },
];

export const benefits = [
  { icon: FiDollarSign, title: "Tax-Free Salary",      desc: "100% of your salary is yours - no income tax in UAE" },
  { icon: FiHome,       title: "Free Accommodation",   desc: "Most employers provide free housing or housing allowance" },
  { icon: FiShield,     title: "Health Insurance",     desc: "Comprehensive medical coverage for you and family" },
  { icon: FiUsers,      title: "Family Visa",          desc: "Sponsor your spouse and children under your visa" },
  { icon: FiStar,       title: "Annual Bonus",         desc: "Performance bonuses and annual air tickets home" },
  { icon: FiClock,      title: "Paid Leave",           desc: "30 days annual leave + public holidays" },
];

export const cities = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah"];

export const requirements = [
  "Valid nursing/medical degree from recognized institution",
  "Minimum 2 years of clinical experience",
  "Dataflow verification of credentials",
  "DHA/DOH/MOH licensing exam clearance",
  "Good communication skills in English",
  "Valid passport with 6+ months validity",
];
