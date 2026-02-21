import {
  FiDollarSign,
  FiGlobe,
  FiBriefcase,
  FiUsers,
} from "react-icons/fi";

export const countries = [
  {
    id: "uae",
    name: "United Arab Emirates",
    image: "/Home_Hero/3.webp",
    description: "Premier healthcare destination with world-class facilities",
    highlights: ["Tax-free salary", "Modern hospitals", "International exposure"],
    jobs: ["Nurses", "Doctors", "Lab Technicians", "Pharmacists", "Physiotherapists"],
  },
  {
    id: "germany",
    name: "Germany",
    image: "/Home_Hero/4.webp",
    description: "Europe's largest healthcare job market with excellent benefits",
    highlights: ["High salary", "PR pathway", "Social security benefits"],
    jobs: ["Nursing", "Caregiving", "Medical Assistants", "Healthcare Aides"],
  },
];

export const benefits = [
  { icon: FiDollarSign, title: "Competitive Salary",      description: "Earn significantly higher than domestic salaries with additional benefits" },
  { icon: FiGlobe,      title: "International Exposure",  description: "Work in world-class hospitals with cutting-edge medical technology" },
  { icon: FiBriefcase,  title: "Career Growth",           description: "Fast-track your career with international certifications and experience" },
  { icon: FiUsers,      title: "Family Benefits",         description: "Most positions offer family visa sponsorship and housing allowances" },
];
