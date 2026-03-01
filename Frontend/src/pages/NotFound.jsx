import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiHome,
  FiArrowLeft,
  FiCompass,
  FiBook,
  FiGlobe,
  FiBriefcase,
} from "react-icons/fi";
import SEO from "../components/SEO";

const quickLinks = [
  { label: "MBBS Abroad", path: "/mbbs/abroad", icon: FiBook },
  { label: "Study Abroad", path: "/study-abroad", icon: FiGlobe },
  { label: "Ausbildung", path: "/ausbildung", icon: FiBriefcase },
  { label: "Eligibility Check", path: "/eligibility-check", icon: FiCompass },
];

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/40 to-white px-4 py-16">
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist. Return to Capton Visa Point to explore MBBS abroad, study abroad, and career opportunities." />

      <div className="text-center max-w-2xl w-full">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block mb-6"
        >
          <span className="text-[120px] sm:text-[160px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[120px] sm:text-[160px] font-black leading-none text-blue-100/60 select-none blur-sm">
              404
            </span>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-3">
            Page Not Found
          </h1>
          <p className="text-slate-500 text-base sm:text-lg mb-2 leading-relaxed">
            The page{" "}
            <span className="font-mono text-sm bg-slate-100 text-blue-700 px-2 py-0.5 rounded">
              {location.pathname}
            </span>{" "}
            doesn't exist.
          </p>
          <p className="text-slate-400 text-sm mb-10">
            It may have been moved, deleted, or you may have mistyped the URL.
          </p>
        </motion.div>

        {/* Primary Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-sm hover:border-blue-300 hover:text-blue-700 transition-all"
          >
            <FiArrowLeft size={16} />
            Go Back
          </button>
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 text-white font-semibold text-sm hover:bg-blue-800 shadow-lg shadow-blue-700/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <FiHome size={16} />
            Back to Home
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
            Popular Pages
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {quickLinks.map(({ label, path, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Icon size={18} className="text-blue-700" />
                </div>
                <span className="text-xs font-semibold text-slate-600 group-hover:text-blue-700 transition-colors text-center leading-tight">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Amber accent bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-amber-500 to-amber-400"
        />
      </div>
    </div>
  );
};

export default NotFound;
