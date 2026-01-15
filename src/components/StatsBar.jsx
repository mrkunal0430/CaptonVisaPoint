import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiUsers, FiCheckCircle, FiGlobe } from "react-icons/fi";

const StatsBar = () => {
  const stats = [
    {
      icon: FiAward,
      value: "15+",
      label: "Years of Excellence",
      color: "text-yellow-600",
      bg: "bg-yellow-50",
    },
    {
      icon: FiUsers,
      value: "10,000+",
      label: "Students Placed",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: FiCheckCircle,
      value: "98%",
      label: "Visa Success Rate",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: FiGlobe,
      value: "25+",
      label: "Countries Worldwide",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div
                  className={`${stat.bg} ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm`}
                >
                  <stat.icon size={28} />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-brand-dark mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
