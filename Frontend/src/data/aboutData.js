import {
  FiBookOpen,
  FiGlobe,
  FiTarget,
  FiHeart,
  FiStar,
  FiShield,
  FiCheckCircle,
  FiUsers,
  FiTrendingUp,
  FiAward,
} from "react-icons/fi";

export const services = [
  { icon: FiBookOpen, title: "MBBS Abroad",            description: "NMC-approved medical universities in Russia, Georgia, Uzbekistan, Kazakhstan, and 8+ more countries with direct seat booking." },
  { icon: FiGlobe,    title: "Study Abroad",           description: "Undergraduate and postgraduate admissions in Germany, UK, Canada, Australia, UAE, and 15+ countries with full application support." },
  { icon: FiTarget,   title: "Ausbildung Germany",     description: "Vocational training programs in Germany with paid apprenticeships, language preparation (A1–B2), and visa filing." },
  { icon: FiHeart,    title: "Healthcare Recruitment", description: "Nurse and paramedic placements in UAE and Germany with licensing support, language coaching, and employer connect." },
  { icon: FiStar,     title: "IELTS & German Coaching", description: "In-house IELTS, PTE, and German language training (A1–C1) conducted by certified trainers for global readiness." },
  { icon: FiShield,   title: "Visa & Documentation",  description: "End-to-end visa filing, APS certification, financial documentation, and pre-departure orientation for every student." },
];

export const values = [
  { icon: FiShield,      title: "Ethics First",       description: "We never push students toward options that don't fit their profile. Our advice is always honest, even when it's not what they want to hear." },
  { icon: FiHeart,       title: "Student-Centric",    description: "Every recommendation is based on the student's goals, budget, and eligibility — not our commission structure." },
  { icon: FiCheckCircle, title: "Full Transparency",  description: "No hidden fees, no false promises. We share complete cost breakdowns, timelines, and realistic outcomes from day one." },
  { icon: FiUsers,       title: "Family Trust",       description: "We understand the emotional and financial weight parents carry. Our guidance protects both your child's future and your investment." },
];

export const partnerBenefits = [
  { icon: FiGlobe,      title: "Global Network",          description: "Access to our extensive network of universities and educational institutions across 25+ countries." },
  { icon: FiTrendingUp, title: "Growing Opportunities",   description: "Be part of India's fastest-growing education consultancy with increasing student volumes year over year." },
  { icon: FiUsers,      title: "Dedicated Support",       description: "Get dedicated partner support, training materials, and marketing resources to help you succeed." },
  { icon: FiAward,      title: "Attractive Commissions",  description: "Competitive commission structure with timely payouts and performance-based incentives." },
];

export const partnerTypes = [
  {
    title: "Educational Institutions",
    points: ["Universities & Colleges abroad", "Medical Universities (MBBS)", "Vocational Training Centers", "Language Schools"],
  },
  {
    title: "Business Partners",
    points: ["Sub-agents & Franchisees", "Education Counselors", "Career Guidance Centers", "Coaching Institutes"],
  },
  {
    title: "Corporate Partners",
    points: ["Banks & Financial Institutions", "Travel & Forex Companies", "Insurance Providers", "Accommodation Partners"],
  },
];
