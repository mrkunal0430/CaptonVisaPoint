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
import InquiryForm from "../components/InquiryForm";
import InquiryPopup from "../components/InquiryPopup";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";
import PopularVisaCards from "../components/PopularVisaCards";

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
      {/* Hero Section */}
      <Hero />

      {/* Popular Visa Cards Section */}
      <PopularVisaCards />

      {/* Director Message - Premium Design */}
      <section className="py-2 sm:py-3 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        {/* Background Elements */}

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
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
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl" />
                <div className="absolute -inset-px bg-gradient-to-br from-blue-500/50 via-purple-500/50 to-cyan-500/50 rounded-2xl" />

                {/* Main image container */}
                <div className="relative bg-slate-900 p-1 rounded-2xl">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                    <img
                      src="RichaMam.jpeg"
                      alt="Director"
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                    {/* Info card at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                            RS
                          </div>
                          <div>
                            <h4 className="text-white font-bold text-lg">
                              Richa Sharma
                            </h4>
                            <p className="text-blue-300 text-sm">
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
                  className="absolute -right-15 top-8 bg-white rounded-xl shadow-2xl p-3 hidden sm:flex items-center gap-2"
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
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
                  className="absolute -left-14 bottom-32 bg-white rounded-xl shadow-2xl p-3 hidden sm:flex items-center gap-2"
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
              {/* Main quote */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
                Our mission is to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                  democratize international education
                </span>
                . Every student deserves a chance to shine globally.
              </h2>

              {/* Description */}
              <p className="text-blue-200/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                At Capton Visa Point, we don't just process visas; we build
                careers. With over a decade of experience, we understand the
                nuances of global education systems and immigration laws. My
                team and I are committed to providing you with honest,
                transparent, and personalized guidance.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10 mb-10">
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-white">
                    98%
                  </p>
                  <p className="text-blue-300 text-sm">Success Rate</p>
                </div>
                <div className="w-px h-12 bg-blue-500/30 hidden sm:block" />
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-white">
                    15+
                  </p>
                  <p className="text-blue-300 text-sm">Countries</p>
                </div>
                <div className="w-px h-12 bg-blue-500/30 hidden sm:block" />
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-white">
                    100+
                  </p>
                  <p className="text-blue-300 text-sm">University Partners</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowInquiry(true)}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 flex items-center justify-center gap-3 hover:shadow-blue-500/40 transition-all"
                >
                  <FiPlay className="text-lg" />
                  Free Consultation
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={scrollToWhyChooseUs}
                  className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-white/20 transition-all"
                >
                  <FiStar className="text-yellow-400" />
                  Why Choose CaptonVisaPoint
                  <FiChevronDown className="group-hover:translate-y-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

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
