import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-white to-white">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-100/30 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-brand-blue text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              #1 Trusted Immigration Consultants
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.15]">
              Your Gateway to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-600">
                Global Opportunities
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Expert guidance for Study, Work, and PR visas. We make your dream
              of moving abroad a reality with transparency and integrity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-brand-blue text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2">
                Free Consultation <FiArrowRight />
              </button>
              <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center justify-center">
                Check Eligibility
              </button>
            </div>

            <div className="pt-8 flex items-center gap-6 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-500 text-lg" /> 98% Success
                Rate
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-500 text-lg" /> Certified
                Experts
              </div>
            </div>
          </motion.div>

          {/* Visual/Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Placeholder for a high-quality image */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-slate-200 h-[500px] w-full object-cover flex items-center justify-center text-slate-400">
              {/* Use a placeholder image or generating one would be better */}
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                alt="Students Happy"
                className="w-full h-full object-cover"
              />

              {/* Floating Badges */}
              <div className="absolute top-10 left-10 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-white/50 animate-bounce-slow">
                <p className="text-sm font-bold text-slate-800">10k+ Visas</p>
                <p className="text-xs text-slate-500">Succesfully Processed</p>
              </div>

              <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-white/50">
                <div className="flex -space-x-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-red-400 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white"></div>
                </div>
                <p className="text-xs font-bold text-slate-700">
                  Join our community
                </p>
              </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-blue-100/20 to-transparent rounded-full -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Services Section Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Visa Services
            </h2>
            <p className="text-slate-600">
              We guide you through every step of the process, ensuring a smooth
              journey to your destination.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Study Abroad",
                desc: "Top universities in UK, Canada, USA & more.",
                color: "bg-blue-50 text-blue-600",
              },
              {
                title: "Work Visa",
                desc: "Unlock global career opportunities.",
                color: "bg-green-50 text-green-600",
              },
              {
                title: "Permanent Residency",
                desc: "Your path to settling down overseas.",
                color: "bg-purple-50 text-purple-600",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all bg-white"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}
                >
                  {/* Icon placeholder */}
                  Coming
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 mb-6">{service.desc}</p>
                <a
                  href="#"
                  className="flex items-center gap-2 text-brand-blue font-semibold group-hover:gap-3 transition-all"
                >
                  Learn More <FiArrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
