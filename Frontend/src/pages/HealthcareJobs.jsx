import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { FiArrowRight, FiCheckCircle, FiAward, FiHeart } from "react-icons/fi";
import InquiryForm from "../components/forms/InquiryForm";
import { countries, benefits } from "../data/healthcareJobsData";

const HealthcareJobs = () => {
  return (
    <div className="bg-white">
      <SEO
        title="Healthcare Jobs Abroad"
        description="Explore healthcare job opportunities in UAE and Germany with Capton Visa Point. Direct placement for nurses, doctors, and healthcare professionals. Career after MBBS — work abroad with visa support, attractive salaries, and PR pathway."
        keywords="healthcare jobs abroad, nursing jobs UAE, healthcare Germany, medical jobs abroad, nurse recruitment, doctor jobs overseas, career after MBBS, doctor career path, medical career options, scope of MBBS abroad, healthcare career India, government jobs after MBBS, best specialization after MBBS, medical profession growth, healthcare recruitment, work abroad after MBBS"
      />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Home_Hero/5.webp"
            alt="Healthcare Jobs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              <FiHeart className="text-red-400" /> Healthcare Opportunities
              Abroad
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-bold mb-6">
              Healthcare Jobs <br />
              <span className="text-blue-400">Abroad</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mb-8">
              Launch your international healthcare career in UAE and Germany. We
              connect qualified medical professionals with top hospitals
              worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/healthcare/uae"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all"
              >
                UAE Healthcare <FiArrowRight />
              </Link>
              <Link
                to="/healthcare/germany"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 bg-white text-slate-800 rounded-full font-bold hover:bg-gray-100 transition-all"
              >
                Germany Healthcare <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Choose Your Destination
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We specialize in healthcare placements in these high-demand
              countries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {countries.map((country, index) => (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[16/10] relative">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-3xl font-bold text-white">
                        {country.name}
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-4">{country.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {country.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {country.jobs.slice(0, 4).map((job, idx) => (
                        <span
                          key={idx}
                          className="flex items-center gap-1 text-sm text-gray-300"
                        >
                          <FiCheckCircle className="text-blue-400" /> {job}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/healthcare/${country.id}`}
                      className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all w-fit"
                    >
                      Explore {country.name} Jobs <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Work in Healthcare Abroad?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              International healthcare careers offer unparalleled benefits and
              growth opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Placement Process
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A streamlined process to get you placed in your dream healthcare
              job
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Apply & Register",
                desc: "Submit your profile and credentials",
              },
              {
                step: "02",
                title: "Document Verification",
                desc: "We verify and prepare your documents",
              },
              {
                step: "03",
                title: "Job Matching",
                desc: "Get matched with suitable positions",
              },
              {
                step: "04",
                title: "Visa & Deployment",
                desc: "Complete visa and travel to your job",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 sm:py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your International Healthcare Career?
              </h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Fill out the form and our healthcare recruitment team will get
                in touch with you within 24 hours to discuss opportunities
                matching your profile.
              </p>

              <div className="space-y-4">
                {[
                  "Free profile assessment",
                  "Document preparation assistance",
                  "Interview coaching",
                  "Visa support",
                  "Pre-departure orientation",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FiCheckCircle className="text-blue-400" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <InquiryForm
                title="Apply for Healthcare Jobs"
                subtitle="Get matched with top healthcare employers"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareJobs;
