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
import StatsBar from "../components/StatsBar";
import Testimonials from "../components/Testimonials";
import EligibilityCalculator from "../components/EligibilityCalculator";
import LatestUpdates from "../components/LatestUpdates";
import TrustBadges from "../components/TrustBadges";

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
      <section className="relative min-h-[90vh] flex items-center pt-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-blue-100/40 rounded-full blur-[100px] -z-0 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-yellow-100/40 rounded-full blur-[80px] -z-0 -translate-x-1/4 translate-y-1/4" />

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-full text-brand-blue text-sm font-semibold shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-blue"></span>
              </span>
              Your Trusted Partner for Global Education
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-brand-dark leading-[1.1] tracking-tight">
              Shape Your Future <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-500">
                Beyond Borders
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Expert guidance for MBBS, Study Abroad, Ausbildung in Germany, and
              Career Coaching. We turn your global dreams into reality with
              transparency and trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/contact"
                className="px-8 py-4 bg-brand-blue text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 group"
              >
                Free Consultation{" "}
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/mbbs"
                className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center justify-center hover:shadow-md"
              >
                Check Eligibility
              </Link>
            </div>

            <div className="pt-8 flex items-center gap-8 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <div className="p-1 bg-green-100 rounded-full">
                  <FiCheckCircle className="text-green-600 text-sm" />
                </div>
                98% Visa Success
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 bg-blue-100 rounded-full">
                  <FiGlobe className="text-brand-blue text-sm" />
                </div>
                20+ Countries
              </div>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100 h-[600px] w-full">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                alt="Student Success"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm font-light opacity-90">
                  Start your journey today
                </p>
                <p className="text-2xl font-bold">World-class Education</p>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-20 -left-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xl font-bold">
                  🇩🇪
                </div>
                <div>
                  <p className="text-xs text-slate-500">Germany</p>
                  <p className="font-bold text-slate-800">Ausbildung</p>
                </div>
              </div>
              <p className="text-xs text-slate-600">
                Earn while you learn programs available now.
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-32 -right-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <p className="text-sm font-bold text-slate-800">
                  Admissions Open 2026
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* Services Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
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
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
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
                className="group p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 mb-6 leading-relaxed text-sm">
                  {service.desc}
                </p>
                <div className="flex items-center text-brand-blue font-semibold text-sm">
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
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Director"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="font-bold text-lg">Dr. A. Sharma</p>
                  <p className="text-blue-200 text-sm">Founder & Director</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <FiMessageCircle className="text-5xl text-blue-300 opacity-50" />
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                "Our mission is to democratize international education. Every
                student deserves a chance to shine globally."
              </h2>
              <p className="text-blue-200 text-lg leading-relaxed max-w-2xl">
                At Capton Visa Point, we don't just process visas; we build
                careers. With over a decade of experience, we understand the
                nuances of global education systems and immigration laws. My
                team and I are committed to providing you with honest,
                transparent, and personalized guidance."
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg"
                alt="Signature"
                className="h-16 invert opacity-80"
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
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Top Destinations
            </h2>
            <p className="text-slate-600">
              We assist with admissions and visas for over 20+ countries
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "USA",
              "UK",
              "Canada",
              "Germany",
              "Australia",
              "Russia",
              "Uzbekistan",
              "Kazakhstan",
              "Georgia",
              "Philippines",
              "New Zealand",
              "Ireland",
            ].map((country, idx) => (
              <Link
                to={`/study-abroad`}
                key={idx}
                className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center flex flex-col items-center justify-center gap-4 border border-slate-100"
              >
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  🌍
                </div>
                <span className="font-semibold text-slate-700">{country}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-brand-dark mb-6">
              Why Choose <br /> Capton Visa Point?
            </h2>
            <div className="space-y-6">
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
          <div className="h-full bg-slate-100 rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
              alt="Happy Team"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end p-8">
              <div className="text-white">
                <p className="text-3xl font-bold mb-2">10+ Years</p>
                <p className="opacity-90">
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
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="space-y-4">
            {[
              "How do I choose the right country for my MBBS?",
              "What is the total cost for MBBS in Russia including stay?",
              "Can I work while studying in Germany?",
              "Is NEET mandatory for studying MBBS abroad?",
              "Do you provide education loan assistance?",
            ].map((q, i) => (
              <details
                key={i}
                className="group bg-white p-6 rounded-2xl shadow-sm cursor-pointer [&_summary::-webkit-details-marker]:hidden border border-slate-100"
              >
                <summary className="flex items-center justify-between font-semibold text-slate-800">
                  {q}
                  <FiChevronDown className="group-open:rotate-180 transition-transform text-slate-400" />
                </summary>
                <p className="text-slate-600 mt-4 leading-relaxed">
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-brand-blue rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>

            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="text-white space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Ready to take the leap?
                </h2>
                <p className="text-blue-100 text-lg max-w-md">
                  Get your profile evaluated for free. Fill out the form and our
                  experts will contact you within 24 hours.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      1
                    </div>
                    <span>Fill the details</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      2
                    </div>
                    <span>Get Expert Call</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      3
                    </div>
                    <span>Start Application</span>
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
