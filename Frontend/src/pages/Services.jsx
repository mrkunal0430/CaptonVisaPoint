import React from "react";
import {
  FiBookOpen,
  FiBriefcase,
  FiMap,
  FiAnchor,
  FiGlobe,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const Services = () => {
  const services = [
    {
      title: "Study Visa",
      description:
        "Expert guidance for securing admission in top universities across Canada, UK, USA, Australia, and New Zealand. We help with course selection, application, and visa filing.",
      icon: FiBookOpen,
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "Work Visa",
      description:
        "Navigate the complex work permit requirements for various countries. We assist with skilled worker visas, employer-sponsored visas, and temporary work permits.",
      icon: FiBriefcase,
      color: "text-blue-700 bg-blue-50",
    },
    {
      title: "Permanent Residency (PR)",
      description:
        "Settle abroad permanently. We specialize in Canada Express Entry, PNP, and Australia PR pathways. Assessment and comprehensive filing support.",
      icon: FiAnchor,
      color: "text-blue-700 bg-blue-50",
    },
    {
      title: "Visitor / Tourist Visa",
      description:
        "Visiting family or planning a vacation? We ensure your visitor visa application is error-free and has the highest chance of approval.",
      icon: FiMap,
      color: "text-orange-600 bg-orange-50",
    },
    {
      title: "IELTS / PTE Coaching",
      description:
        "Achieve your desired band score with our certified trainers. Personalized coaching, mock tests, and study materials provided.",
      icon: FiGlobe,
      color: "text-red-600 bg-red-50",
    },
  ];

  return (
    <div>
      <SEO
        title="Our Services"
        description="Explore Capton Visa Point services — MBBS abroad & India admissions, study abroad programs, Ausbildung in Germany, German language coaching (A1–C1), IELTS training, healthcare jobs in UAE & Germany, NEET counseling, and complete visa assistance. Trusted education consultants for Indian students."
        keywords="study abroad services, MBBS abroad, MBBS in India, MBBS admission services, MBBS counseling services, MBBS admission agents, overseas MBBS consultants, Ausbildung Germany, German language coaching, visa assistance, IELTS coaching, IELTS PTE coaching, medical admission consultants, MBBS admission guidance, MBBS seat booking, education loan for MBBS, MBBS financial planning, healthcare jobs abroad, study visa, work visa, PR visa, visitor visa, MBBS abroad consultancy India, medical education consultants India"
      />
      <section className="bg-slate-50 py-14 sm:py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
            Our Premium Services
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            End-to-end support for all your immigration and study abroad needs.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 lg:p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all group"
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl ${service.color} flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-brand-blue font-semibold hover:gap-2 transition-all"
                >
                  Get Started <span>&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
