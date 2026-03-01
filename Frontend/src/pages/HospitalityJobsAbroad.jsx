import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiStar,
  FiChevronDown,
} from "react-icons/fi";
import SEO from "../components/SEO";
import HospitalityJobsForm from "../components/forms/HospitalityJobsForm";

const jobCategories = [
  {
    icon: "🏨",
    title: "Front Desk & Reception",
    countries: "UAE, Qatar, Maldives, Europe",
    salary: "₹30,000 – ₹80,000/month",
    roles: [
      "Front Office Executive",
      "Guest Relations Officer",
      "Receptionist",
      "Concierge",
      "Night Auditor",
    ],
    eligibility: "12th / Hotel Management Diploma",
    requirements: [
      "Good English communication",
      "Customer service skills",
      "Computer proficiency",
    ],
    demand: "Very High",
  },
  {
    icon: "🍽️",
    title: "Food & Beverage Service",
    countries: "UAE, Saudi Arabia, Qatar, Maldives",
    salary: "₹25,000 – ₹70,000/month",
    roles: [
      "Waiter / Waitress",
      "Restaurant Supervisor",
      "Banquet Server",
      "Room Service Attendant",
      "F&B Captain",
    ],
    eligibility: "10th/12th pass + F&B experience",
    requirements: [
      "Serving & table etiquette",
      "Customer-facing skills",
      "Team player",
    ],
    demand: "Very High",
  },
  {
    icon: "👨‍🍳",
    title: "Chef & Kitchen Staff",
    countries: "UAE, Saudi Arabia, Europe, Gulf",
    salary: "₹40,000 – ₹1.5 Lakh/month",
    roles: [
      "Sous Chef / Commis Chef",
      "Indian / Continental Chef",
      "Pastry Chef",
      "Kitchen Steward",
      "Cook / Helper",
    ],
    eligibility: "Hotel Management / Culinary Arts",
    requirements: [
      "Culinary certification preferred",
      "Hygiene & food safety",
      "1+ year kitchen experience",
    ],
    demand: "High",
  },
  {
    icon: "🛏️",
    title: "Housekeeping",
    countries: "UAE, Saudi Arabia, Qatar, Oman",
    salary: "₹20,000 – ₹50,000/month",
    roles: [
      "Room Attendant",
      "Housekeeping Supervisor",
      "Laundry Attendant",
      "Public Area Cleaner",
      "Linen Room Attendant",
    ],
    eligibility: "10th Pass minimum",
    requirements: [
      "Attention to detail",
      "Physical fitness",
      "Housekeeping training",
    ],
    demand: "High",
  },
  {
    icon: "🍸",
    title: "Bartender & Barista",
    countries: "UAE, Maldives, Europe",
    salary: "₹35,000 – ₹90,000/month",
    roles: [
      "Bartender",
      "Barista",
      "Beverage Supervisor",
      "Mixologist",
      "Bar Captain",
    ],
    eligibility: "12th Pass + Bartending / Barista course",
    requirements: [
      "WSET or Barista certification",
      "Creative drink making",
      "Customer engagement",
    ],
    demand: "Medium-High",
  },
  {
    icon: "💆",
    title: "Spa & Wellness",
    countries: "Maldives, UAE, Europe",
    salary: "₹35,000 – ₹90,000/month",
    roles: [
      "Spa Therapist",
      "Massage Therapist",
      "Wellness Consultant",
      "Spa Receptionist",
      "Yoga / Fitness Instructor",
    ],
    eligibility: "Spa / Beauty Therapy certification",
    requirements: [
      "Certified therapy qualification",
      "Soft-spoken & groomed",
      "2+ years experience preferred",
    ],
    demand: "Medium",
  },
];

const faqs = [
  {
    q: "Do I need a hotel management degree for hospitality jobs abroad?",
    a: "Not always. Many roles like housekeeping, F&B service, and kitchen helpers require only 10th/12th pass with basic training. However, supervisory and managerial roles prefer a hotel management diploma or degree.",
  },
  {
    q: "Which countries are best for hospitality jobs?",
    a: "UAE (Dubai, Abu Dhabi), Saudi Arabia, Qatar, Kuwait, Oman, and Bahrain are the top Gulf destinations. Maldives is great for luxury resort jobs. Europe (Germany, Cyprus) is growing for chefs and restaurant staff.",
  },
  {
    q: "What is the salary range for hospitality jobs abroad?",
    a: "Entry-level roles (housekeeping, F&B staff): ₹20,000–₹50,000/month. Mid-level (supervisor, chef): ₹40,000–₹1 Lakh/month. Senior roles (F&B manager, head chef): ₹1–₹3 Lakh/month. Gulf jobs are often tax-free with accommodation.",
  },
  {
    q: "Is English required for Gulf hospitality jobs?",
    a: "Basic to intermediate English is required for most customer-facing roles. For back-of-house (kitchen helpers, housekeeping), basic English is sufficient. Communication skills are highly valued by international hotel chains.",
  },
  {
    q: "Do hotels provide accommodation and food?",
    a: "Yes, most 3-5 star hotels in the Gulf provide free staff accommodation, meals, and transportation. Some also provide health insurance and annual flight tickets to India.",
  },
  {
    q: "Can freshers apply for hospitality jobs abroad?",
    a: "Yes! Many Gulf hotels actively recruit freshers for entry-level positions like housekeeping attendants, F&B helpers, and kitchen staff. Having a hotel management diploma significantly improves your chances.",
  },
];

const HospitalityJobsAbroad = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-gradient-to-b from-white to-slate-50">
      <SEO
        title="Hospitality Jobs Abroad | Hotels, F&B, Spa | Gulf & Europe | Capton Visa Point"
        description="Hospitality job opportunities abroad — hotels, restaurants, spa, housekeeping in UAE, Dubai, Saudi Arabia, Qatar, Maldives & Europe. Front desk, chef, F&B, and more."
        keywords="hospitality jobs abroad, hotel jobs UAE, Dubai hotel jobs, chef jobs Gulf, F&B jobs abroad, housekeeping jobs abroad, spa therapist abroad, restaurant jobs abroad, hotel management jobs"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-blue-950 text-white py-20 sm:py-24">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-yellow-400/30">
            <span className="text-lg">🏨</span>
            <span className="text-sm font-semibold text-yellow-100">
              Hotels · Restaurants · Spa · F&B
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Hospitality Jobs{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Abroad
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
            Build your hospitality career in 5-star hotels, luxury resorts &
            top restaurants across UAE, Gulf, Maldives, and Europe.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToForm}
              className="bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-all shadow-2xl hover:scale-105 flex items-center gap-2"
            >
              Apply Now <FiArrowRight />
            </button>
            <a
              href="https://wa.me/919914773125?text=Hi, I'm interested in hospitality jobs abroad"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-all"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            {[
              { val: "5★", label: "Hotel Partners" },
              { val: "Gulf+", label: "Top Destinations" },
              { val: "24h", label: "Response Time" },
            ].map((s) => (
              <div key={s.label} className="text-center bg-white/10 rounded-2xl py-4 px-2 backdrop-blur border border-white/10">
                <div className="text-2xl font-extrabold text-yellow-300">{s.val}</div>
                <div className="text-xs text-white/70 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 text-center mb-4">
            Hospitality{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
              Job Categories
            </span>
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
            Roles, salary ranges, eligibility & requirements for each hospitality field
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobCategories.map((cat) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-5 text-white">
                  <div className="text-3xl mb-2">{cat.icon}</div>
                  <h3 className="text-xl font-extrabold">{cat.title}</h3>
                  <p className="text-xs text-blue-200 mt-1">{cat.countries}</p>
                  <span className="inline-block mt-2 text-xs bg-yellow-400/20 text-yellow-200 px-2 py-0.5 rounded-full font-semibold">
                    {cat.demand} Demand
                  </span>
                </div>
                <div className="p-5">
                  <div className="bg-blue-50 rounded-lg p-3 mb-4">
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Salary Range</p>
                    <p className="text-blue-900 font-bold text-sm">{cat.salary}</p>
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Job Roles
                  </p>
                  <ul className="space-y-1 mb-4">
                    {cat.roles.map((r) => (
                      <li key={r} className="flex items-center gap-2 text-sm text-slate-600">
                        <FiCheckCircle className="text-blue-600 shrink-0" size={12} />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Requirements
                  </p>
                  <ul className="space-y-1 mb-3">
                    {cat.requirements.map((r) => (
                      <li key={r} className="flex items-center gap-2 text-xs text-slate-500">
                        <FiStar className="text-yellow-500 shrink-0" size={11} />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs text-blue-700 bg-blue-50 px-3 py-2 rounded-lg font-medium">
                    <strong>Eligibility:</strong> {cat.eligibility}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hospitality Abroad */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 text-center mb-12">
            Why Choose Hospitality Jobs Abroad?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "💰", title: "Tax-Free Salary", desc: "Gulf countries offer 100% tax-free income with accommodation & meals included" },
              { icon: "🌍", title: "Global Experience", desc: "Work in world-class international hotel chains that boost your resume" },
              { icon: "📈", title: "Fast Growth", desc: "Hospitality industry is growing rapidly — quick promotions for skilled staff" },
              { icon: "✈️", title: "Flight Ticket", desc: "Most employers provide annual flight tickets back home to India" },
            ].map((b) => (
              <div key={b.title} className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                <div className="text-4xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-slate-800 mb-2">{b.title}</h3>
                <p className="text-sm text-slate-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 text-center mb-10">
            FAQs
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-bold text-slate-800 text-sm sm:text-base pr-4">
                    {faq.q}
                  </span>
                  <FiChevronDown
                    className={`text-slate-400 shrink-0 transition-transform ${activeFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {activeFaq === i && (
                  <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Work in a 5-Star Hotel Abroad?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Free profile evaluation, job matching & visa support — get placed in
            top hotels across the Gulf, Maldives & Europe.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-xl flex items-center gap-2"
            >
              Apply Now <FiArrowRight />
            </button>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <HospitalityJobsForm ref={formRef} />
    </div>
  );
};

export default HospitalityJobsAbroad;
