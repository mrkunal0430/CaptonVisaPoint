import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiMapPin, FiTarget, FiStar, FiCheckCircle, FiShield } from "react-icons/fi";
import SEO from "../components/SEO";
import InquiryForm from "../components/forms/InquiryForm";
import { services, values, partnerBenefits, partnerTypes } from "../data/aboutData";

const About = () => {
  return (
    <div className="bg-white">
      <SEO
        title="About Us — Capton Visa Point"
        description="Learn about Capton Visa Point — India's trusted education and immigration consultancy helping students achieve global careers through MBBS abroad, study abroad, Ausbildung, and healthcare recruitment with ethical, transparent guidance."
        keywords="about Capton Visa Point, education consultancy India, MBBS abroad consultancy, study abroad India, Ausbildung consultancy, overseas education guidance, trusted visa consultancy, student abroad advisor India"
      />

      {/* Hero Section */}
      <section className="relative min-h-[55vh] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Home_Hero/2.webp"
            alt="About Capton Visa Point"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-900/50 to-black/30" />
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 border border-amber-400/30 text-amber-200">
              Trusted Since 2009
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About{" "}
              <span className="text-amber-400">Capton Visa Point</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              India's most trusted education and immigration consultancy — guiding
              students from college seats to global career success with integrity
              and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-blue-900 text-white py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "10,000+", label: "Students Guided" },
              { number: "25+", label: "Countries" },
              { number: "500+", label: "University Partners" },
              { number: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-snug">
                Built on Responsibility,<br />
                <span className="text-blue-700">Not Just Revenue</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Capton Visa Point was founded with a single belief — that every
                  student deserves guidance they can truly trust. We've seen
                  families make irreversible decisions based on wrong advice, and
                  we set out to change that.
                </p>
                <p>
                  Over 15 years, we have grown from a small counseling desk to
                  one of India's leading multi-service education consultancies,
                  helping students reach universities across 25+ countries. But
                  our core has never changed: student success over sales targets.
                </p>
                <p>
                  Today, our team of experienced counselors, language trainers,
                  visa specialists, and documentation experts work together to
                  give every family the complete, honest picture — from
                  university shortlisting to post-arrival support.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-8 p-4 bg-amber-50 rounded-xl border border-amber-100">
                <FiMapPin className="text-amber-600 shrink-0 text-xl" />
                <p className="text-sm text-slate-700 font-medium">
                  Headquartered in India, serving students across PAN India with
                  a network reaching 25+ countries globally.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/Home_Hero/2.webp"
                  alt="Capton Visa Point office and team"
                  className="w-full h-72 sm:h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-blue-900 text-white p-5 rounded-2xl shadow-xl">
                <p className="text-4xl font-bold text-amber-400">15+</p>
                <p className="text-sm text-blue-200 mt-1">Years of Trust</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-amber-500 text-white p-5 rounded-2xl shadow-xl">
                <p className="text-4xl font-bold">500+</p>
                <p className="text-sm text-amber-100 mt-1">Partner Institutes</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-blue-900 text-white p-8 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-800 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
              <FiTarget className="text-amber-400 text-3xl mb-4 relative z-10" />
              <h3 className="text-2xl font-bold mb-4 relative z-10">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed relative z-10">
                To provide ethical, student-centric education and immigration
                guidance that empowers every family to make informed decisions
                with complete transparency — protecting both the student's future
                and the family's investment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-amber-500 text-white p-8 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
              <FiStar className="text-white text-3xl mb-4 relative z-10" />
              <h3 className="text-2xl font-bold mb-4 relative z-10">Our Vision</h3>
              <p className="text-amber-50 leading-relaxed relative z-10">
                To become South Asia's most trusted name in overseas education
                and career placement — a consultancy where students and families
                always feel heard, respected, and guided toward their best
                possible future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Everything You Need,{" "}
              <span className="text-blue-700">Under One Roof</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From MBBS seats to global career placements — we handle every step
              of your international education journey with specialist teams.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center text-amber-400 mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                  <service.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-b from-blue-950 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-amber-500/30">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core <span className="text-amber-400">Values</span>
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              These principles guide every interaction we have with students,
              families, and partners.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 mb-4">
                  <value.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                Why Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Why Families Choose{" "}
                <span className="text-blue-700">Capton Visa Point</span>
              </h2>
              <div className="space-y-4">
                {[
                  "In-house German language training (A1–C1) & IELTS coaching — no outsourcing",
                  "APS certification guidance for Germany-bound students",
                  "NMC-approved university network for MBBS admissions",
                  "Dedicated visa filing team with high success rates",
                  "Pre-departure orientation and post-arrival support",
                  "Transparent fee structure — no hidden charges",
                  "Personalized counseling based on budget and eligibility",
                  "Strong employer connect for healthcare placements in UAE & Germany",
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <FiCheckCircle className="text-blue-700 text-sm" />
                    </div>
                    <span className="text-slate-700">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-2">
                  Covered Countries & Destinations
                </h3>
                <p className="text-blue-200 text-sm mb-6">
                  We provide admissions and placements support across:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Germany",
                    "Russia",
                    "United Kingdom",
                    "Uzbekistan",
                    "Canada",
                    "Georgia",
                    "Australia",
                    "United Arab Emirates",
                    "United States",
                    "Kazakhstan",
                  ].map((name, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 text-sm font-medium"
                    >
                      <span className="text-blue-100">{name}</span>
                    </div>
                  ))}
                </div>
                <p className="text-blue-300 text-xs mt-4">+ 15 more countries</p>
              </div>

              <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl">
                <FiShield className="text-amber-600 text-2xl mb-3" />
                <h4 className="font-bold text-slate-800 mb-2">
                  Our Commitment to You
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We are not just a visa filing service. We are your long-term
                  education partner — invested in your child's success from the
                  first counseling session to career launch.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Partnership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Partner With <span className="text-blue-700">Capton Visa Point</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Join our growing network of partners and expand your reach across
              India's booming overseas education market.
            </p>
          </motion.div>

          {/* Partner Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-4">
                  <benefit.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Partner Types */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-800 mb-4 pb-3 border-b border-slate-100">
                  {type.title}
                </h3>
                <ul className="space-y-3">
                  {type.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-600 text-sm">
                      <FiCheckCircle className="text-blue-600 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Partnership Form */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                Ready to Grow Together?
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Fill out the form and our partnership team will get in touch
                with you within 24–48 hours to discuss collaboration
                opportunities.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Customized partnership models",
                  "Training and onboarding support",
                  "Marketing collaterals & branding",
                  "Real-time application tracking",
                  "Regular webinars and updates",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <FiCheckCircle className="text-blue-700 text-sm" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-slate-800 mb-2">Have Questions?</h4>
                <p className="text-slate-600 text-sm mb-3">
                  Reach out directly to our partnership team
                </p>
                <a
                  href="mailto:partners@captonvisapoint.com"
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
                >
                  partners@captonvisapoint.com <FiArrowRight />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <InquiryForm
                title="Become a Partner"
                subtitle="Fill out the form below and we'll connect with you shortly"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
