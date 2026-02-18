import { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  FiChevronDown,
  FiMenu,
  FiX,
  FiArrowRight,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Navigation data moved outside component to prevent recreation on each render
const NAV_LINKS = [
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
          { name: "Germany", path: "/mbbs/germany" },
          { name: "Nepal", path: "/mbbs/nepal" },
          { name: "Italy", path: "/mbbs/italy" },
          { name: "Bangladesh", path: "/mbbs/bangladesh" },
          { name: "Barbados", path: "/mbbs/barbados" },
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
  {
    name: "Healthcare",
    path: "/healthcare",
    type: "mega",
    columns: [
      {
        title: "UAE Healthcare",
        path: "/healthcare/uae",
      },
      {
        title: "Germany Healthcare",
        path: "/healthcare/germany",
      },
    ],
  },
  { name: "Partner", path: "/partner" },
];

// Dropdown item component to reduce duplication
const DropdownItem = ({ item, onClick }) => {
  const Component = item.path.includes("#") ? HashLink : Link;
  const props = item.path.includes("#")
    ? { smooth: true, to: item.path }
    : { to: item.path };

  return (
    <Component
      {...props}
      onClick={onClick}
      className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-blue-50 group/item transition-colors"
    >
      {item.flag && <span className="text-base">{item.flag}</span>}
      <span className="text-xs font-medium text-slate-600 group-hover/item:text-blue-600">
        {item.name}
      </span>
    </Component>
  );
};

// Mega dropdown component
const MegaDropdown = ({ columns }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.15 }}
    className="absolute top-full left-1/2 -translate-x-1/2 w-[480px] bg-white rounded-xl shadow-2xl border border-slate-100 p-5 grid grid-cols-2 gap-6 z-50 overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-800 to-blue-900" />
    {columns.map((col, colIdx) => (
      <div key={colIdx}>
        <Link
          to={col.path}
          className="flex items-center gap-2 mb-2 px-2 py-2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all group/header border border-slate-100"
        >
          <span className="text-sm font-bold text-slate-800 group-hover/header:text-blue-700">
            {col.title}
          </span>
          <FiArrowRight className="text-xs text-blue-500 opacity-0 group-hover/header:opacity-100 transition-opacity" />
        </Link>
        {col.items && col.items.length > 0 && (
          <ul className="space-y-0.5 pl-3 border-l-2 border-slate-100 ml-2">
            {col.items.map((item, itemIdx) => (
              <li key={itemIdx}>
                <DropdownItem item={item} />
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </motion.div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Optimized scroll handler with passive listener
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMobileMenu = useCallback(() => setIsOpen(false), []);
  const openMobileMenu = useCallback(() => setIsOpen(true), []);

  // Memoize nav class to prevent recalculation
  const navClassName = useMemo(
    () =>
      `w-full bg-gradient-to-r from-slate-50 to-white transition-all duration-300 ${
        scrolled
          ? "shadow-xl shadow-slate-200/50 py-2 border-b border-slate-100"
          : "shadow-md py-3"
      }`,
    [scrolled],
  );

  return (
    <header className="fixed w-full z-50 font-sans">
      {/* SEO: Hidden description for search engine crawlers */}
      <p className="sr-only">
        At Capton Visa Point, we don't just offer consultancy—we offer responsible guidance that families can truly rely on. We understand the emotional and financial weight a parent carries while planning a child's education abroad, which is why our advice is always ethical, realistic, and student-centric. Every recommendation is based on facts, eligibility, budget clarity, and future career stability, not sales targets. Whether it's MBBS abroad, Study in Germany, B.Tech in Germany, or Ausbildung (German vocational training), we map the right path with complete transparency. Our in-house German language training (A1–C1) and IELTS coaching ensure students are academically and linguistically ready before departure. From university shortlisting, APS, documentation, visa filing, and interview preparation to pre-departure guidance, we support families end-to-end. With coverage across Germany, USA, UK, Canada, and Australia, Capton Visa Point stands as a trusted partner that protects both your child's future and your hard-earned money.
      </p>
      <nav
        className={navClassName}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 flex justify-between items-center text-slate-800">
          {/* Branding */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 group relative z-50"
            aria-label="Capton Visa Point - Home"
          >
            <img
              src="/logo.png"
              alt="Capton Visa Point Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight text-slate-900">
                CAPTON<span className="text-blue-600">VISAPOINT</span>
              </span>
              <span className="hidden sm:block text-[10px] font-bold text-black tracking-[0.2em] uppercase mt-0.5">
                College Seats to Global Career Success
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden xl:flex items-center gap-1" role="menubar">
            {NAV_LINKS.map((link) => (
              <li
                key={link.name}
                className="relative group px-3 py-4"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
                role="none"
              >
                <Link
                  to={link.path}
                  className="flex items-center gap-1.5 text-[15px] font-semibold text-slate-600 group-hover:text-blue-600 transition-colors"
                  role="menuitem"
                  aria-haspopup={link.type === "mega" ? "true" : undefined}
                  aria-expanded={
                    activeDropdown === link.name ? "true" : undefined
                  }
                >
                  {link.name}
                  {link.type === "mega" && (
                    <FiChevronDown
                      className={`text-xs transition-transform duration-300 ${
                        activeDropdown === link.name ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  )}
                </Link>

                {/* Highlight Line */}
                <span
                  className="absolute bottom-2 left-3 right-3 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
                  aria-hidden="true"
                />

                {/* Mega Dropdown */}
                <AnimatePresence>
                  {link.type === "mega" && activeDropdown === link.name && (
                    <MegaDropdown columns={link.columns} />
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden xl:flex items-center gap-3">
            <Link
              to="/contact"
              className="bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg shadow-blue-700/25 hover:bg-blue-800 hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              Contact Us <FiArrowRight aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="xl:hidden text-3xl text-slate-800 p-2 -mr-2 relative z-50"
            onClick={openMobileMenu}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <FiMenu aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-[60] overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-6">
                  <span className="text-xl font-bold text-slate-900">Menu</span>
                  <button
                    onClick={closeMobileMenu}
                    className="bg-slate-100 p-2 rounded-full text-slate-500 hover:bg-slate-200 transition-colors"
                    aria-label="Close menu"
                  >
                    <FiX aria-hidden="true" />
                  </button>
                </div>

                <ul className="space-y-2">
                  {NAV_LINKS.map((link) => (
                    <li
                      key={link.name}
                      className="border-b border-slate-50 last:border-0 pb-2"
                    >
                      {link.type === "mega" ? (
                        <details className="group">
                          <summary className="flex justify-between items-center py-3 text-slate-800 font-bold text-lg list-none cursor-pointer">
                            {link.name}
                            <FiChevronDown
                              className="group-open:rotate-180 transition-transform text-slate-400"
                              aria-hidden="true"
                            />
                          </summary>
                          <div className="pl-4 pb-4 bg-slate-50/50 rounded-xl space-y-1 mt-1">
                            {link.columns.map((col, colIdx) =>
                              col.items && col.items.length > 0 ? (
                                col.items.map((item, itemIdx) => (
                                  <Link
                                    key={`${colIdx}-${itemIdx}`}
                                    to={item.path}
                                    onClick={closeMobileMenu}
                                    className="flex items-center gap-3 py-2 px-2 text-slate-600 font-medium hover:bg-blue-50 rounded-lg transition-colors"
                                  >
                                    {item.flag && (
                                      <span className="text-xl">
                                        {item.flag}
                                      </span>
                                    )}
                                    {item.name}
                                  </Link>
                                ))
                              ) : (
                                <Link
                                  key={colIdx}
                                  to={col.path}
                                  onClick={closeMobileMenu}
                                  className="flex items-center gap-3 py-2 px-2 text-slate-600 font-medium hover:bg-blue-50 rounded-lg transition-colors"
                                >
                                  {col.title}
                                </Link>
                              ),
                            )}
                          </div>
                        </details>
                      ) : (
                        <Link
                          to={link.path}
                          onClick={closeMobileMenu}
                          className="block py-3 text-slate-800 font-bold text-lg hover:text-blue-600 transition-colors"
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
                    onClick={closeMobileMenu}
                    className="block w-full py-4 bg-amber-500 text-white rounded-xl text-center font-bold shadow-lg shadow-amber-500/25 hover:bg-amber-600 transition-colors"
                  >
                    Free Eligibility Check
                  </Link>
                  <Link
                    to="/contact"
                    onClick={closeMobileMenu}
                    className="block w-full py-4 bg-blue-700 text-white rounded-xl text-center font-bold shadow-lg shadow-blue-700/25 hover:bg-blue-800 transition-colors"
                  >
                    Book Free Consultation
                  </Link>
                  <div className="flex justify-center gap-6 text-slate-400 pt-4">
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="hover:text-amber-500 transition-colors"
                    >
                      <FaWhatsapp className="text-2xl" />
                    </a>
                    <a
                      href="tel:+919876543210"
                      aria-label="Call us"
                      className="hover:text-blue-500 transition-colors"
                    >
                      <FiPhone className="text-2xl" />
                    </a>
                    <a
                      href="mailto:info@captonvisapoint.com"
                      aria-label="Email us"
                      className="hover:text-amber-500 transition-colors"
                    >
                      <FiMail className="text-2xl" />
                    </a>
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
