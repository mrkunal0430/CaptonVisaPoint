import {
  FiDollarSign,
  FiHome,
  FiShield,
  FiUsers,
  FiBook,
  FiGlobe,
} from "react-icons/fi";

export const jobCategories = [
  {
    title: "Nursing in Germany",
    subtitle: "Krankenpfleger/in",
    positions: ["Registered Nurse", "ICU Nurse", "Geriatric Nurse", "Pediatric Nurse", "Surgical Nurse"],
    salary: "€2,500 - €4,500/month",
    demand: "Very High",
    highlight: "Most in-demand profession with fast-track visa",
  },
  {
    title: "Elderly Care (Altenpflege)",
    subtitle: "Altenpfleger/in",
    positions: ["Care Assistant", "Senior Caregiver", "Home Care Provider", "Nursing Home Staff"],
    salary: "€2,200 - €3,500/month",
    demand: "Very High",
    highlight: "Growing demand due to aging population",
  },
  {
    title: "Medical Professionals",
    subtitle: "Ärzte & Fachkräfte",
    positions: ["General Physician", "Specialist Doctors", "Dentists", "Pharmacists"],
    salary: "€4,500 - €10,000/month",
    demand: "High",
    highlight: "Recognition of degrees required",
  },
  {
    title: "Allied Healthcare",
    subtitle: "Gesundheitsfachberufe",
    positions: ["Physiotherapist", "Lab Technician", "Radiology Technician", "Medical Assistant"],
    salary: "€2,800 - €4,000/month",
    demand: "Moderate",
    highlight: "Vocational recognition needed",
  },
];

export const benefits = [
  { icon: FiDollarSign, title: "High Salary",      desc: "Earn €2,500-4,500/month with regular increments" },
  { icon: FiHome,       title: "PR Pathway",       desc: "Permanent residency after 2-4 years of work" },
  { icon: FiShield,     title: "Social Security",  desc: "Comprehensive pension, health & unemployment insurance" },
  { icon: FiUsers,      title: "Family Reunion",   desc: "Bring spouse and children after establishing" },
  { icon: FiBook,       title: "Free Education",   desc: "Free university education for your children" },
  { icon: FiGlobe,      title: "EU Freedom",       desc: "Travel freely across 27 EU countries" },
];

export const requirements = [
  "Nursing/Healthcare degree from recognized institution",
  "Minimum B1 German language proficiency (B2 preferred)",
  "Valid professional registration in home country",
  "Minimum 1-2 years of relevant experience",
  "Deficiency course completion (if required)",
  "Clean medical and police clearance",
];

export const process = [
  { step: "1", title: "German Language",        desc: "Learn German to B1/B2 level (4-8 months)",              duration: "4-8 months" },
  { step: "2", title: "Document Preparation",   desc: "Gather and legalize all documents",                      duration: "1-2 months" },
  { step: "3", title: "Recognition Application", desc: "Apply for credential recognition (Anerkennung)",        duration: "3-4 months" },
  { step: "4", title: "Job Search",             desc: "Get job offer from German employer",                     duration: "1-2 months" },
  { step: "5", title: "Visa Application",       desc: "Apply for work visa at German embassy",                  duration: "2-3 months" },
  { step: "6", title: "Arrival & Adaptation",   desc: "Start work with adaptation period",                     duration: "6-12 months" },
];
