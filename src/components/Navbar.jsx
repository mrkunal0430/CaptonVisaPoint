import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Study",
      dropdown: [
        { name: "MBBS Abroad", path: "/mbbs" },
        { name: "Study Abroad", path: "/study-abroad" },
        { name: "Ausbildung Germany", path: "/ausbildung" },
      ],
    },
    {
      name: "Visa Services",
      dropdown: [
        { name: "PR / Immigration", path: "/pr-visa" },
        { name: "Work Visa", path: "/work-visa" },
        { name: "Visit Visa", path: "/contact" },
      ],
    },
    { name: "Language Coaching", path: "/language-coaching" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <span className="text-2xl font-bold text-brand-blue tracking-tight">
            Capton<span className="text-brand-dark">Visa</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item, index) =>
            item.dropdown ? (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-brand-blue transition-colors py-2">
                  {item.name}
                  <FiChevronDown
                    className={`transition-transform ${
                      activeDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 overflow-hidden"
                    >
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className="block px-6 py-3 text-sm text-slate-700 hover:bg-blue-50 hover:text-brand-blue transition-colors font-medium"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={index}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                  location.pathname === item.path
                    ? "text-brand-blue"
                    : "text-slate-700"
                }`}
              >
                {item.name}
              </Link>
            )
          )}
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-brand-blue text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 text-sm"
          >
            Free Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-slate-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 max-h-[70vh] overflow-y-auto">
              <Link
                to="/"
                className={`text-sm font-medium ${
                  location.pathname === "/" ? "text-brand-blue" : "text-slate-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Study Dropdown */}
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase mb-2">
                  Study Options
                </p>
                <div className="flex flex-col gap-3 pl-3">
                  <Link
                    to="/mbbs"
                    className="text-sm font-medium text-slate-700 hover:text-brand-blue"
                    onClick={() => setIsOpen(false)}
                  >
                    MBBS Abroad
                  </Link>
                  <Link
                    to="/study-abroad"
                    className="text-sm font-medium text-slate-700 hover:text-brand-blue"
                    onClick={() => setIsOpen(false)}
                  >
                    Study Abroad
                  </Link>
                  <Link
                    to="/ausbildung"
                    className="text-sm font-medium text-slate-700 hover:text-brand-blue"
                    onClick={() => setIsOpen(false)}
                  >
                    Ausbildung Germany
                  </Link>
                </div>
              </div>

              {/* Visa Services Dropdown */}
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase mb-2">
                  Visa Services
                </p>
                <div className="flex flex-col gap-3 pl-3">
                  <Link
                    to="/pr-visa"
                    className="text-sm font-medium text-slate-700 hover:text-brand-blue"
                    onClick={() => setIsOpen(false)}
                  >
                    PR / Immigration
                  </Link>
                  <Link
                    to="/work-visa"
                    className="text-sm font-medium text-slate-700 hover:text-brand-blue"
                    onClick={() => setIsOpen(false)}
                  >
                    Work Visa
                  </Link>
                  <Link
                    to="/contact"
                    className="text-sm font-medium text-slate-700 hover:text-brand-blue"
                    onClick={() => setIsOpen(false)}
                  >
                    Visit Visa
                  </Link>
                </div>
              </div>

              <Link
                to="/language-coaching"
                className="text-sm font-medium text-slate-700 hover:text-brand-blue"
                onClick={() => setIsOpen(false)}
              >
                Language Coaching
              </Link>

              <Link
                to="/blog"
                className="text-sm font-medium text-slate-700 hover:text-brand-blue"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className="w-full text-center py-3 bg-brand-blue text-white font-semibold rounded-xl shadow-lg mt-2"
                onClick={() => setIsOpen(false)}
              >
                Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
