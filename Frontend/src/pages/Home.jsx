import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiGlobe,
  FiTarget,
  FiMessageCircle,
  FiChevronDown,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import LeadForm from "../components/LeadForm";
import Testimonials from "../components/Testimonials";
import EligibilityCalculator from "../components/EligibilityCalculator";
import LatestUpdates from "../components/LatestUpdates";
import TrustBadges from "../components/TrustBadges";
import Hero from "../components/Hero";
import CountryCards from "../components/CountryCards";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
};

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            {...fadeInUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-brand-blue font-semibold tracking-wider text-sm uppercase">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
              Comprehensive Services for <br /> Your Global Ambitions
            </h2>
            <div className="h-1.5 w-20 bg-brand-blue mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8"
          >
            {[
              {
                title: "MBBS Abroad",
                desc: "Top medical universities in Russia, Uzbekistan & more with low fees.",
                icon: "🩺",
                link: "/mbbs",
                color: "bg-blue-50 text-blue-600",
              },
              {
                title: "Study Abroad",
                desc: "Bachelors & Masters in UK, USA, Canada, Australia.",
                icon: "🎓",
                link: "/study-abroad",
                color: "bg-purple-50 text-purple-600",
              },
              {
                title: "Ausbildung",
                desc: "Vocational training in Germany with stipend & job guarantee.",
                icon: "🛠️",
                link: "/ausbildung",
                color: "bg-yellow-50 text-yellow-600",
              },
              {
                title: "Language Prep",
                desc: "IELTS, German (A1-B2) coaching to clear your path.",
                icon: "🗣️",
                link: "/language-coaching",
                color: "bg-green-50 text-green-600",
              },
            ].map((service, idx) => (
              <motion.Link
                to={service.link}
                key={idx}
                variants={fadeInUp}
                className="group p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl ${service.color} flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6 shadow-sm group-hover:scale-110 transition-transform`}
                >
                  {service.icon}
                </div>
                <h3 className="text-base sm:text-xl font-bold text-brand-dark mb-2 sm:mb-3 group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm line-clamp-2 sm:line-clamp-none">
                  {service.desc}
                </p>
                <div className="flex items-center text-brand-blue font-semibold text-xs sm:text-sm">
                  Learn More{" "}
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Eligibility Calculator */}
      <EligibilityCalculator />

      {/* Director Message */}
      <section className="py-16 sm:py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-500/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
            <div className="w-full md:w-1/3">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/20 max-w-[280px] sm:max-w-none mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Director"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="font-bold text-base sm:text-lg">
                    Dr. A. Sharma
                  </p>
                  <p className="text-blue-200 text-xs sm:text-sm">
                    Founder & Director
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-6 sm:space-y-8 text-center md:text-left">
              <FiMessageCircle className="text-4xl sm:text-5xl text-blue-300 opacity-50 mx-auto md:mx-0" />
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
                "Our mission is to democratize international education. Every
                student deserves a chance to shine globally."
              </h2>
              <p className="text-blue-200 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                At Capton Visa Point, we don't just process visas; we build
                careers. With over a decade of experience, we understand the
                nuances of global education systems and immigration laws. My
                team and I are committed to providing you with honest,
                transparent, and personalized guidance."
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg"
                alt="Signature"
                className="h-12 sm:h-16 invert opacity-80 mx-auto md:mx-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Testimonials */}
      <Testimonials />

      {/* Countries Section */}
      <CountryCards />

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl sm:text-4xl font-bold text-brand-dark mb-4 sm:mb-6">
              Why Choose <br />
              Capton Visa Point?
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  title: "Direct University Tie-ups",
                  desc: "No middle-men. Direct admissions to top universities.",
                },
                {
                  title: "100% Transparent Process",
                  desc: "No hidden charges. You know exactly what you pay for.",
                },
                {
                  title: "End-to-End Support",
                  desc: "From counselling to airport pickup, we are with you.",
                },
                {
                  title: "Certified Counsellors",
                  desc: "Guidance from experts with deep industry knowledge.",
                },
              ].map((item, id) => (
                <div key={id} className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                    <FiCheckCircle size={14} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">
                      {item.title}
                    </h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="h-[300px] sm:h-full bg-slate-100 rounded-2xl sm:rounded-[3rem] p-6 sm:p-8 md:p-12 relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
              alt="Happy Team"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end p-6 sm:p-8">
              <div className="text-white">
                <p className="text-2xl sm:text-3xl font-bold mb-2">10+ Years</p>
                <p className="opacity-90 text-sm sm:text-base">
                  Of excellence in education consultancy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <LatestUpdates />

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div {...fadeInUp} className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="space-y-3 sm:space-y-4">
            {[
              "How do I choose the right country for my MBBS?",
              "What is the total cost for MBBS in Russia including stay?",
              "Can I work while studying in Germany?",
              "Is NEET mandatory for studying MBBS abroad?",
              "Do you provide education loan assistance?",
            ].map((q, i) => (
              <details
                key={i}
                className="group bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm cursor-pointer [&_summary::-webkit-details-marker]:hidden border border-slate-100"
              >
                <summary className="flex items-center justify-between font-semibold text-slate-800 text-sm sm:text-base gap-2">
                  <span>{q}</span>
                  <FiChevronDown className="group-open:rotate-180 transition-transform text-slate-400 shrink-0" />
                </summary>
                <p className="text-slate-600 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  We provide detailed guidance during our counselling sessions.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-brand-blue rounded-2xl sm:rounded-[3rem] p-6 sm:p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-white/10 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>

            <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center relative z-10">
              <div className="text-white space-y-4 sm:space-y-6 text-center lg:text-left">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">
                  Ready to take the leap?
                </h2>
                <p className="text-blue-100 text-sm sm:text-lg max-w-md mx-auto lg:mx-0">
                  Get your profile evaluated for free. Fill out the form and our
                  experts will contact you within 24 hours.
                </p>
                <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4 inline-block lg:block">
                  <li className="flex items-center gap-3 justify-center lg:justify-start">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">
                      1
                    </div>
                    <span className="text-sm sm:text-base">
                      Fill the details
                    </span>
                  </li>
                  <li className="flex items-center gap-3 justify-center lg:justify-start">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">
                      2
                    </div>
                    <span className="text-sm sm:text-base">
                      Get Expert Call
                    </span>
                  </li>
                  <li className="flex items-center gap-3 justify-center lg:justify-start">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">
                      3
                    </div>
                    <span className="text-sm sm:text-base">
                      Start Application
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <LeadForm
                  title="Book Free Counselling"
                  subtitle="Start your international journey today"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
