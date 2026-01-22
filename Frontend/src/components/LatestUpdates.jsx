import React from "react";
import { motion } from "framer-motion";
import { FiClock, FiArrowRight, FiCalendar } from "react-icons/fi";
import { Link } from "react-router-dom";

const LatestUpdates = () => {
  const updates = [
    {
      category: "Visa Update",
      title: "Canada Announces New Express Entry Draws for 2026",
      excerpt:
        "Great news for PR aspirants! Canada has announced increased quotas and faster processing for skilled workers.",
      date: "Jan 10, 2026",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800",
      link: "/blog/canada-express-entry-2026",
      tag: "Immigration",
    },
    {
      category: "Study Abroad",
      title: "Top 10 Universities Offering Full Scholarships in 2026",
      excerpt:
        "Discover universities in USA, UK, and Canada offering 100% tuition waivers for international students.",
      date: "Jan 8, 2026",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
      link: "/blog/full-scholarships-2026",
      tag: "Scholarships",
    },
    {
      category: "MBBS News",
      title: "New Medical Universities Approved in Russia & Uzbekistan",
      excerpt:
        "5 new WHO-approved medical universities are now accepting applications with NMC recognition guaranteed.",
      date: "Jan 5, 2026",
      readTime: "4 min read",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
      link: "/blog/new-medical-universities-2026",
      tag: "MBBS",
    },
    {
      category: "Ausbildung",
      title: "Germany Increases Ausbildung Stipend to €1,200/Month",
      excerpt:
        "Exciting update! German government increases monthly stipends for vocational training programs in healthcare sector.",
      date: "Jan 3, 2026",
      readTime: "3 min read",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800",
      link: "/blog/germany-ausbildung-stipend-increase",
      tag: "Germany",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-blue font-semibold tracking-wider text-sm uppercase">
            Stay Updated
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
            Latest News & Updates
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Get the latest immigration news, visa updates, and study abroad opportunities
          </p>
          <div className="h-1.5 w-20 bg-brand-blue mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {updates.map((update, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={update.image}
                  alt={update.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-blue text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {update.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                  <div className="flex items-center gap-1">
                    <FiCalendar size={12} />
                    {update.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <FiClock size={12} />
                    {update.readTime}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-brand-dark mb-3 line-clamp-2 group-hover:text-brand-blue transition-colors">
                  {update.title}
                </h3>

                <p className="text-slate-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {update.excerpt}
                </p>

                <Link
                  to={update.link}
                  className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Read More <FiArrowRight />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-100 text-brand-dark rounded-xl font-semibold hover:bg-brand-blue hover:text-white transition-all group"
          >
            View All Updates{" "}
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestUpdates;
