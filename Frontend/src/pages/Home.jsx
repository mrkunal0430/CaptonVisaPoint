import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiGlobe,
  FiTarget,
  FiMessageCircle,
  FiChevronDown,
  FiAward,
  FiUsers,
  FiStar,
  FiPlay,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import InquiryForm from "../components/forms/InquiryForm";
import InquiryPopup from "../components/forms/InquiryPopup";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";
import SEO from "../components/SEO";
import PopularVisaCards from "../components/PopularVisaCards";
import LatestBlogs from "../components/LatestBlogs";
import ServicesShowcase from "../components/ServicesShowcase";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Home = () => {
  const [showInquiry, setShowInquiry] = useState(false);

  const scrollToWhyChooseUs = () => {
    const element = document.getElementById("why-choose-us");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full overflow-hidden">
      <SEO
        title="Study & Immigration Consultants"
        description="Capton Visa Point — trusted MBBS abroad & India consultants. Expert guidance for MBBS admission 2026-2027, Study in Germany, Ausbildung, German language training (A1–C1), IELTS coaching, and healthcare jobs. End-to-end support from NEET counseling to visa filing across Germany, USA, UK, Canada, and Australia."
        keywords="MBBS in India, MBBS abroad, study MBBS abroad, MBBS admission, MBBS admission 2026, MBBS admission 2027, MBBS consultants in India, MBBS abroad consultants, best MBBS consultants, medical admission consultants, MBBS counseling services, trusted MBBS consultants, study abroad consultants, study in Germany, Ausbildung, German language training, B.Tech Germany, IELTS coaching, visa consultants, Capton Visa Point, NEET exam, NEET UG exam, NEET counseling process, medical education consultants India, overseas MBBS consultants, MBBS admission guidance, healthcare jobs abroad, best MBBS destination 2026, MBBS abroad admission India"
      />
      {/* Hero Section */}
      <Hero />

      {/* Popular Visa Cards Section */}
      <PopularVisaCards />

      {/* Director Message - Premium Design */}
      <section className="py-2 sm:py-3 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Background Elements */}

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
            {/* Left - Image Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="relative max-w-sm mx-auto lg:mx-0">
                {/* Decorative frame */}
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-200/40 via-blue-100/40 to-blue-200/40 rounded-3xl blur-xl" />
                <div className="absolute -inset-px bg-gradient-to-br from-blue-300/50 via-blue-200/50 to-blue-300/50 rounded-2xl" />

                {/* Main image container */}
                <div className="relative bg-white p-1 rounded-2xl shadow-lg">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                    <img
                      src="RichaMam.jpeg"
                      alt="Richa Sharma - Founder & Director"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-transparent to-transparent" />

                    {/* Info card at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="bg-white/90 backdrop-blur-xl rounded-xl p-4 border border-slate-200 shadow-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold text-lg">
                            RP
                          </div>
                          <div>
                            <h4 className="text-slate-800 font-bold text-lg">
                              Richa Pal
                            </h4>
                            <p className="text-blue-700 text-sm">
                              Founder & Director
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating stats cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-16 top-8 bg-white rounded-xl shadow-2xl p-3 hidden xl:flex items-center gap-2"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                    <FiUsers size={18} />
                  </div>
                  <div>
                    <p className="text-slate-800 font-bold text-sm">5,000+</p>
                    <p className="text-slate-500 text-xs">Students Guided</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -left-16 bottom-32 bg-white rounded-xl shadow-2xl p-3 hidden xl:flex items-center gap-2"
                >
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                    <FiAward size={18} />
                  </div>
                  <div>
                    <p className="text-slate-800 font-bold text-sm">
                      10+ Years
                    </p>
                    <p className="text-slate-500 text-xs">Experience</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3 text-center lg:text-left"
            >
              {/* Section Label */}

              {/* Main quote */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 leading-tight mb-6">
                Our mission is to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                  democratize international education
                </span>
                , ensuring that every student has the right to shine globally.
              </h2>

              {/* Description */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4 max-w-2xl mx-auto lg:mx-0">
                My journey into education and career consulting was shaped by
                experience. Despite strong academic performance, I could not
                pursue medicine due to lack of timely and correct guidance—a
                reality many students face.
              </p>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
                At Capton Visa Point, we don't just process visas—we build
                careers. Our guidance is honest, transparent, and personalized,
                based on each student's individual profile, not trending
                countries. We assess skills, budget, long-term goals, and future
                job market demand to deliver meaningful outcomes.
              </p>

              {/* Tagline */}
              <p className="text-xl sm:text-2xl font-bold text-blue-600 mb-8">
                Right Guidance. Right Time. Right Country.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10 mb-10">
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-slate-800">
                    98%
                  </p>
                  <p className="text-blue-500 text-sm">Success Rate</p>
                </div>
                <div className="w-px h-12 bg-blue-200 hidden sm:block" />
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-slate-800">
                    15+
                  </p>
                  <p className="text-blue-500 text-sm">Countries</p>
                </div>
                <div className="w-px h-12 bg-blue-200 hidden sm:block" />
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-slate-800">
                    100+
                  </p>
                  <p className="text-blue-500 text-sm">University Partners</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowInquiry(true)}
                  className="group px-8 py-4 bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 flex items-center justify-center gap-3 hover:bg-blue-600 hover:shadow-blue-500/40 transition-all"
                >
                  <FiPlay className="text-lg" />
                  Free Consultation
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={scrollToWhyChooseUs}
                  className="group px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-slate-50 transition-all shadow-sm"
                >
                  <FiStar className="text-amber-500" />
                  Why Choose CaptonVisaPoint
                  <FiChevronDown className="group-hover:translate-y-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <ServicesShowcase />

      {/* Testimonials */}
      <Testimonials />

      {/* Latest Blog Articles */}
      <LatestBlogs />

      {/* Why Choose Us */}
      <section
        id="why-choose-us"
        className="py-16 sm:py-24 bg-white scroll-mt-20"
      >
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
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
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
          <div className="h-[300px] sm:h-full bg-bg-light rounded-2xl sm:rounded-[3rem] p-6 sm:p-8 md:p-12 relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
              alt="Happy Team"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent flex items-end p-6 sm:p-8">
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

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-bg-soft">
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
          <div className="bg-brand-blue rounded-2xl sm:rounded-[3rem] p-5 sm:p-8 md:p-10 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-white/10 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>

            <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center relative z-10">
              <div className="text-white space-y-4 sm:space-y-6 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
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
                <InquiryForm
                  title="Book Free Counselling"
                  subtitle="Start your international journey today"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Popup */}
      <InquiryPopup
        isOpen={showInquiry}
        onClose={() => setShowInquiry(false)}
      />
    </div>
  );
};

export default Home;
