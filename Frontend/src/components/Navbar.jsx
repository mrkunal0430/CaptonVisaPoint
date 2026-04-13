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
          { name: "Romania", path: "/mbbs/romania" },
          { name: "Bulgaria", path: "/mbbs/bulgaria" },
          { name: "Serbia", path: "/mbbs/serbia" },
          { name: "Bosnia", path: "/mbbs/bosnia" },
          { name: "Italy", path: "/mbbs/italy" },
          { name: "Nepal", path: "/mbbs/nepal" },
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
          {
            name: "NRI MBBS Seats",
            path: "/mbbs/india#nri-quota",
            flag: "🌍",
          },
          { name: "MBBS Consultant Delhi", path: "/mbbs-consultant-in-delhi", flag: "📍" },
          { name: "MBBS Consultant Uttam Nagar", path: "/mbbs-consultant-in-uttam-nagar", flag: "📍" },
          { name: "MBBS Consultant West Delhi", path: "/mbbs-consultant-in-west-delhi", flag: "📍" },
          { name: "MBBS Consultant Dwarka", path: "/mbbs-consultant-in-dwarka", flag: "📍" },
          { name: "MBBS Consultant Janakpuri", path: "/mbbs-consultant-in-janakpuri", flag: "📍" },
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
          { name: "Germany", path: "/study-abroad/germany" },
          { name: "Cyprus", path: "/study-abroad/cyprus" },
          { name: "France", path: "/study-abroad/france" },
          { name: "United Arab Emirates", path: "/study-abroad/uae" },
          { name: "Mauritius", path: "/study-abroad/mauritius" },
          { name: "Singapore", path: "/study-abroad/singapore" },
        ],
      },
      {
        title: "More Countries",
        path: "/study-abroad",
        items: [
          { name: "United Kingdom", path: "/study-abroad/uk" },
          { name: "United States", path: "/study-abroad/usa" },
          { name: "Canada", path: "/study-abroad/canada" },
          { name: "Australia", path: "/study-abroad/australia" },
          { name: "New Zealand", path: "/study-abroad/new-zealand" },
          { name: "Denmark", path: "/study-abroad/denmark" },
          { name: "Finland", path: "/study-abroad/finland" },
        ],
      },
    ],
  },
  { name: "Coaching", path: "/coaching" },
  { name: "Ausbildung", path: "/ausbildung" },
  {
    name: "Jobs Abroad",
    path: "/jobs-abroad/after-12th",
    type: "mega",
    columns: [
      {
        title: "Jobs After 12th",
        path: "/jobs-abroad/after-12th",
      },
      {
        title: "Healthcare Jobs",
        path: "/jobs-abroad/healthcare",
      },
      {
        title: "Technical Jobs",
        path: "/jobs-abroad/technical",
      },
      {
        title: "Hospitality Jobs",
        path: "/jobs-abroad/hospitality",
      },
    ],
  },
  {
  name: "Jobs Abroad",
  path: "/jobs-abroad/after-12th",
  type: "mega",
  columns: [
    {
      title: "Jobs After 12th",
      path: "/jobs-abroad/after-12th",
    },
    {
      title: "Healthcare Jobs",
      path: "/jobs-abroad/healthcare",
    },
    {
      title: "Technical Jobs",
      path: "/jobs-abroad/technical",
    },
    {
      title: "Hospitality Jobs",
      path: "/jobs-abroad/hospitality",
    },
  ],
},




{ name: "Blog", path: "/blog" },
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
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 8 }}
    transition={{ duration: 0.15 }}
    className={`absolute top-full left-1/2 -translate-x-1/2 w-[90vw] bg-white rounded-xl shadow-2xl border border-slate-100 pt-3 pb-3 px-4 grid gap-3 z-50 overflow-hidden ${columns.length >= 4
        ? "max-w-[300px] grid-cols-2"
        : columns.length >= 3
          ? "max-w-[580px] grid-cols-3"
          : "max-w-[380px] grid-cols-2"
      }`}
  >
    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-800 to-blue-900" />
    {columns.map((col, colIdx) => (
      <div key={colIdx} className="flex flex-col min-h-0">
        <Link
          to={col.path}
          className="flex items-center gap-1.5 mb-1.5 px-2 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all group/header border border-slate-100 shrink-0"
        >
          <span className="text-xs font-bold text-slate-800 group-hover/header:text-blue-700">
            {col.title}
          </span>
          <FiArrowRight className="text-xs text-blue-500 opacity-0 group-hover/header:opacity-100 transition-opacity" />
        </Link>
        {col.items && col.items.length > 0 && (
          <ul className="space-y-0.5 pl-2 border-l-2 border-slate-100 ml-1 max-h-44 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent pr-1">
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
      `w-full bg-gradient-to-r from-slate-50 to-white transition-all duration-300 ${scrolled
        ? "shadow-xl shadow-slate-200/50 py-2 border-b border-slate-100"
        : "shadow-md py-3"
      }`,
    [scrolled],
  );

  return (
    <header className="fixed w-full z-50 font-sans">
      {/* SEO: Hidden description for search engine crawlers */}
      <p className="sr-only">
        At Capton Visa Point, we don't just offer consultancy—we offer
        responsible guidance that families can truly rely on. We understand the
        emotional and financial weight a parent carries while planning a child's
        education abroad, which is why our advice is always ethical, realistic,
        and student-centric. Every recommendation is based on facts,
        eligibility, budget clarity, and future career stability, not sales
        targets. Whether it's MBBS abroad, Study in Germany, B.Tech in Germany,
        or Ausbildung (German vocational training), we map the right path with
        complete transparency. Our in-house German language training (A1–C1) and
        IELTS coaching ensure students are academically and linguistically ready
        before departure. From university shortlisting, APS, documentation, visa
        filing, and interview preparation to pre-departure guidance, we support
        families end-to-end. With coverage across Germany, USA, UK, Canada, and
        Australia, Capton Visa Point stands as a trusted partner that protects
        both your child's future and your hard-earned money.
      </p>
      <nav
        className={navClassName}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 flex justify-between items-center text-slate-800">
          {/* Branding — shrink-0 prevents logo from being squeezed by nav items */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 group relative z-50 shrink-0"
            aria-label="Capton Visa Point - Home"
          >
            <img
              src="/logo.png"
              alt="Capton Visa Point Logo"
              className="h-9 w-9 sm:h-11 sm:w-11 object-contain shrink-0"
            />
            <div className="flex flex-col leading-none min-w-0">
              <span className="text-base sm:text-xl lg:text-2xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap">
                CAPTON<span className="text-blue-600">VISAPOINT</span>
              </span>
              <span className="hidden sm:block text-[9px] lg:text-[10px] font-bold text-slate-500 tracking-[0.15em] lg:tracking-[0.2em] uppercase mt-0.5 whitespace-nowrap">
                College Seats to Global Career Success
              </span>
            </div>
          </Link>

          {/* Desktop Menu — shows at xl (1280px+) */}
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
                      className={`text-xs transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""
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

          {/* Mobile Toggle — 44×44px touch target */}
          <button
            className="xl:hidden flex items-center justify-center w-11 h-11 rounded-xl text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors relative z-50 -mr-1"
            onClick={openMobileMenu}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <FiMenu className="text-2xl" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Drawer Panel */}
            <motion.div
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-[88%] max-w-[380px] bg-white shadow-2xl z-[60] flex flex-col"
              style={{ overscrollBehavior: "contain" }}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-slate-100 shrink-0">
                <div className="flex items-center gap-2">
                  <img
                    src="/logo.png"
                    alt="Capton Visa Point"
                    className="h-8 w-8 object-contain"
                  />
                  <span className="text-base font-extrabold text-slate-900">
                    CAPTON<span className="text-blue-600">VISAPOINT</span>
                  </span>
                </div>
                {/* Close button — explicit 44×44px touch target */}
                <button
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-600 transition-colors"
                  aria-label="Close menu"
                >
                  <FiX className="text-xl" aria-hidden="true" />
                </button>
              </div>

              {/* Scrollable Nav List */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                <ul className="px-4 py-3 space-y-1">
                  {NAV_LINKS.map((link) => (
                    <li
                      key={link.name}
                      className="border-b border-slate-50 last:border-0"
                    >
                      {link.type === "mega" ? (
                        <details className="group">
                          <summary className="flex justify-between items-center py-3.5 text-slate-800 font-bold text-base list-none cursor-pointer select-none">
                            {link.name}
                            <FiChevronDown
                              className="group-open:rotate-180 transition-transform duration-200 text-slate-400 shrink-0"
                              aria-hidden="true"
                            />
                          </summary>

                          {/* Grouped mega menu columns */}
                          <div className="pb-4 space-y-4">
                            {link.columns.map((col, colIdx) => (
                              <div key={colIdx}>
                                {/* Column section header */}
                                <Link
                                  to={col.path}
                                  onClick={closeMobileMenu}
                                  className="flex items-center gap-1.5 text-[11px] font-black text-blue-700 uppercase tracking-wider px-2 mb-1.5"
                                >
                                  {col.title}
                                  <FiArrowRight size={10} />
                                </Link>

                                {/* Column items */}
                                {col.items && col.items.length > 0 ? (
                                  <div className="space-y-0.5 pl-1">
                                    {col.items.map((item, itemIdx) => {
                                      const Component = item.path.includes("#")
                                        ? HashLink
                                        : Link;
                                      const props = item.path.includes("#")
                                        ? { smooth: true, to: item.path }
                                        : { to: item.path };
                                      return (
                                        <Component
                                          key={itemIdx}
                                          {...props}
                                          onClick={closeMobileMenu}
                                          className="flex items-center gap-3 py-2 px-3 text-sm text-slate-600 font-medium hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
                                        >
                                          {item.flag && (
                                            <span className="text-base leading-none shrink-0">
                                              {item.flag}
                                            </span>
                                          )}
                                          <span>{item.name}</span>
                                        </Component>
                                      );
                                    })}
                                  </div>
                                ) : (
                                  /* Column with no items — just a link */
                                  <Link
                                    to={col.path}
                                    onClick={closeMobileMenu}
                                    className="flex items-center gap-3 py-2.5 px-3 text-sm text-slate-700 font-semibold hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
                                  >
                                    {col.title}
                                    <FiArrowRight
                                      size={12}
                                      className="text-slate-400"
                                    />
                                  </Link>
                                )}

                                {/* Separator between columns */}
                                {colIdx < link.columns.length - 1 && (
                                  <div className="mt-3 border-t border-slate-100" />
                                )}
                              </div>
                            ))}
                          </div>
                        </details>
                      ) : (
                        <Link
                          to={link.path}
                          onClick={closeMobileMenu}
                          className="flex items-center justify-between py-3.5 text-slate-800 font-bold text-base hover:text-blue-600 transition-colors"
                        >
                          {link.name}
                          <FiArrowRight
                            className="text-slate-300 text-sm"
                            aria-hidden="true"
                          />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Drawer Footer — CTA + contact */}
              <div
                className="shrink-0 px-4 pt-4 pb-5 border-t border-slate-100 space-y-3"
                style={{
                  paddingBottom: "max(20px, env(safe-area-inset-bottom))",
                }}
              >
                <Link
                  to="/eligibility-check"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center w-full py-3.5 bg-amber-500 text-white rounded-xl text-center font-bold shadow-lg shadow-amber-500/20 hover:bg-amber-600 active:bg-amber-700 transition-colors"
                >
                  Free Eligibility Check
                </Link>
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center w-full py-3.5 bg-blue-700 text-white rounded-xl text-center font-bold shadow-lg shadow-blue-700/20 hover:bg-blue-800 active:bg-blue-900 transition-colors"
                >
                  Book Free Consultation
                </Link>

                {/* Contact links — explicit 44×44px touch targets */}
                <div className="flex items-center justify-center gap-2 pt-1">
                  <a
                    href="https://wa.me/919914773125"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-100 hover:bg-amber-50 text-slate-500 hover:text-amber-600 transition-colors"
                  >
                    <FaWhatsapp className="text-xl" />
                  </a>
                  <a
                    href="tel:+919914773125"
                    aria-label="Call us"
                    className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    <FiPhone className="text-xl" />
                  </a>
                  <a
                    href="mailto:info@captonvisapoint.com"
                    aria-label="Email us"
                    className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-100 hover:bg-amber-50 text-slate-500 hover:text-amber-600 transition-colors"
                  >
                    <FiMail className="text-xl" />
                  </a>
                  <a
                    href="tel:+919914773125"
                    className="flex-1 flex items-center justify-center gap-1.5 h-11 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-600 font-semibold text-sm transition-colors"
                  >
                    <FiPhone size={14} />
                    +91 99147 73125
                  </a>
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
