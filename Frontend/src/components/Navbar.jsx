import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiChevronDown,
  FiMenu,
  FiX,
  FiArrowRight,
  FiGlobe,
  FiSearch,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Scroll Handler
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation Data
  const navLinks = [
    {
      name: "MBBS",
      path: "/mbbs",
      type: "mega",
      columns: [
        {
          title: "MBBS Abroad",
          path: "/mbbs/abroad",
          items: [
            { name: "Russia", path: "/mbbs/russia" },
            { name: "Georgia", path: "/mbbs/georgia" },
            { name: "Uzbekistan", path: "/mbbs/uzbekistan" },
            { name: "Kazakhstan", path: "/mbbs/kazakhstan" },
            { name: "Kyrgyzstan", path: "/mbbs/kyrgyzstan" },
            { name: "Tajikistan", path: "/mbbs/tajikistan" },
          ],
        },
        {
          title: "MBBS India",
          path: "/mbbs/india",
          items: [
            {
              name: "Govt vs Private",
              path: "/mbbs/india#govt-private",
              flag: "🏛️",
            },
            { name: "Top Colleges", path: "/mbbs/india#colleges", flag: "🏫" },
            {
              name: "NEET Eligibility",
              path: "/mbbs/india#eligibility",
              flag: "✅",
            },
            {
              name: "State-wise Seats",
              path: "/mbbs/india#state-seats",
              flag: "📊",
            },
          ],
        },
      ],
    },
    {
      name: "Study Abroad",
      path: "/study-abroad",
      type: "mega",
      columns: [
        {
          title: "Premier Destinations",
          path: "/study-abroad",
          items: [
            { name: "Germany", path: "/study-abroad/germany", flag: "🇩🇪" },
            { name: "Cyprus", path: "/study-abroad/cyprus", flag: "🇨🇾" },
            { name: "France", path: "/study-abroad/france", flag: "🇫🇷" },
            { name: "UAE", path: "/study-abroad/uae", flag: "🇦🇪" },
            { name: "Mauritius", path: "/study-abroad/mauritius", flag: "🇲🇺" },
            { name: "Singapore", path: "/study-abroad/singapore", flag: "🇸🇬" },
          ],
        },
        {
          title: "More Countries",
          path: "/study-abroad",
          items: [
            { name: "United Kingdom", path: "/study-abroad/uk", flag: "🇬🇧" },
            { name: "USA", path: "/study-abroad/usa", flag: "🇺🇸" },
            { name: "Canada", path: "/study-abroad/canada", flag: "🇨🇦" },
            { name: "Australia", path: "/study-abroad/australia", flag: "🇦🇺" },
            {
              name: "New Zealand",
              path: "/study-abroad/new-zealand",
              flag: "🇳🇿",
            },
            { name: "Denmark", path: "/study-abroad/denmark", flag: "🇩🇰" },
            { name: "Finland", path: "/study-abroad/finland", flag: "🇫🇮" },
          ],
        },
      ],
    },
    { name: "Coaching", path: "/coaching" },
    { name: "Ausbildung", path: "/ausbildung" },
  ];

  return (
    <header className="fixed w-full z-50 font-sans">
      {/* 1. Top Utility Bar - Professional Dark */}
      <div
        className={`hidden sm:block w-full bg-slate-900 text-slate-300 transition-all duration-300 ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-9"}`}
      >
        <div className="container mx-auto px-4 lg:px-8 h-full flex justify-between items-center text-[10px] lg:text-xs font-medium tracking-wide">
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@captonvisa.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <FiMail className="text-blue-400" /> info@captonvisa.com
            </a>
            <a
              href="tel:+919876543210"
              className="hidden sm:flex items-center gap-2 hover:text-white transition-colors"
            >
              <FiPhone className="text-blue-400" /> +91 98765 43210
            </a>
            <span className="hidden md:flex items-center gap-2 text-slate-400">
              <FiMapPin className="text-blue-400" /> Kerala • Dubai • Canada
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 border-r border-slate-700 pr-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                <FaYoutube />
              </a>
            </div>
            <Link to="/contact" className="hover:text-white transition-colors">
              Login / Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav
        className={`w-full bg-gradient-to-r from-slate-50 to-white transition-all duration-300 ${scrolled ? "shadow-xl shadow-slate-200/50 py-2 border-b border-slate-100" : "shadow-md py-3"}`}
      >
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 flex justify-between items-center text-slate-800">
          {/* Branding */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 group relative z-50"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 bg-gradient-to-tr from-blue-600 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl lg:text-2xl shadow-lg shadow-blue-500/20 group-hover:rotate-6 transition-transform duration-300">
              C
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight text-slate-900">
                CAPTON<span className="text-blue-600">VISA</span>
              </span>
              <span className="hidden sm:block text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase mt-0.5">
                Global Education
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden xl:flex items-center gap-1">
            {navLinks.map((link, idx) => (
              <li
                key={idx}
                className="relative group px-3 py-4"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className="flex items-center gap-1.5 text-[15px] font-semibold text-slate-600 group-hover:text-blue-600 transition-colors"
                >
                  {link.name}
                  {(link.type === "mega" || link.type === "dropdown") && (
                    <FiChevronDown
                      className={`text-xs transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>

                {/* Highlight Line */}
                <span className="absolute bottom-2 left-3 right-3 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

                {/* Mega Dropdown */}
                <AnimatePresence>
                  {link.type === "mega" && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[480px] bg-white rounded-xl shadow-2xl border border-slate-100 p-5 grid grid-cols-2 gap-6 z-50 overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
                      {link.columns.map((col, colIdx) => (
                        <div key={colIdx}>
                          {/* Clickable Header */}
                          <Link
                            to={col.path}
                            className="flex items-center gap-2 mb-2 px-2 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:from-blue-100 hover:to-purple-100 transition-all group/header border border-slate-100"
                          >
                            <span className="text-sm font-bold text-slate-800 group-hover/header:text-blue-700">
                              {col.title}
                            </span>
                            <FiArrowRight className="text-xs text-blue-500 opacity-0 group-hover/header:opacity-100 transition-opacity" />
                          </Link>
                          {/* Child Items - Indented */}
                          <ul className="space-y-0.5 pl-3 border-l-2 border-slate-100 ml-2">
                            {col.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                {item.path.includes("#") ? (
                                  <HashLink
                                    smooth
                                    to={item.path}
                                    className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-blue-50 group/item transition-colors"
                                  >
                                    <span className="text-base">
                                      {item.flag}
                                    </span>
                                    <span className="text-xs font-medium text-slate-600 group-hover/item:text-blue-600">
                                      {item.name}
                                    </span>
                                  </HashLink>
                                ) : (
                                  <Link
                                    to={item.path}
                                    className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-blue-50 group/item transition-colors"
                                  >
                                    <span className="text-base">
                                      {item.flag}
                                    </span>
                                    <span className="text-xs font-medium text-slate-600 group-hover/item:text-blue-600">
                                      {item.name}
                                    </span>
                                  </Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Simple Dropdown */}
                <AnimatePresence>
                  {link.type === "dropdown" && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 z-50"
                    >
                      <div className="absolute top-0 left-4 right-4 h-0.5 bg-blue-500" />
                      {link.items.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          to={item.path}
                          className="block px-6 py-3 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden xl:flex items-center gap-3">
            <Link
              to="/eligibility-check"
              className="bg-green-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg shadow-green-500/25 hover:bg-green-600 hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              Free Eligibility Check
            </Link>
            <Link
              to="/contact"
              className="bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg shadow-blue-500/25 hover:bg-blue-600 hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              Contact Us <FiArrowRight />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="xl:hidden text-3xl text-slate-800"
            onClick={() => setIsOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* 3. Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-6">
                  <span className="text-xl font-bold text-slate-900">Menu</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-slate-100 p-2 rounded-full text-slate-500 hover:bg-slate-200"
                  >
                    <FiX />
                  </button>
                </div>

                <ul className="space-y-2">
                  {navLinks.map((link, idx) => (
                    <li
                      key={idx}
                      className="border-b border-slate-50 last:border-0 pb-2"
                    >
                      {link.type === "mega" || link.type === "dropdown" ? (
                        <details className="group">
                          <summary className="flex justify-between items-center py-3 text-slate-800 font-bold text-lg list-none cursor-pointer">
                            {link.name}{" "}
                            <FiChevronDown className="group-open:rotate-180 transition-transform text-slate-400" />
                          </summary>
                          <div className="pl-4 pb-4 bg-slate-50/50 rounded-xl space-y-2 mt-1">
                            {link.type === "mega"
                              ? link.columns.map((col) =>
                                  col.items.map((item, itemIdx) => (
                                    <Link
                                      key={itemIdx}
                                      to={item.path}
                                      onClick={() => setIsOpen(false)}
                                      className="flex items-center gap-3 py-2 text-slate-600 font-medium"
                                    >
                                      <span className="text-xl">
                                        {item.flag}
                                      </span>{" "}
                                      {item.name}
                                    </Link>
                                  )),
                                )
                              : link.items.map((item, itemIdx) => (
                                  <Link
                                    key={itemIdx}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2 text-slate-600 font-medium"
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                          </div>
                        </details>
                      ) : (
                        <Link
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className="block py-3 text-slate-800 font-bold text-lg"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 space-y-3">
                  <Link
                    to="/eligibility-check"
                    onClick={() => setIsOpen(false)}
                    className="block w-full py-4 bg-green-500 text-white rounded-xl text-center font-bold shadow-lg shadow-green-500/25 hover:bg-green-600 transition-colors"
                  >
                    Free Eligibility Check
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full py-4 bg-blue-500 text-white rounded-xl text-center font-bold shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition-colors"
                  >
                    Book Free Consultation
                  </Link>
                  <div className="flex justify-center gap-6 text-slate-400 pt-4">
                    <FaWhatsapp className="text-2xl hover:text-green-500" />
                    <FiPhone className="text-2xl hover:text-blue-500" />
                    <FiMail className="text-2xl hover:text-red-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
