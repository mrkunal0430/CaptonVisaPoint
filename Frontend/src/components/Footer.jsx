import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowRight,
  FiShield,
  FiAward,
  FiStar,
  FiGlobe,
  FiCheck,
  FiMessageCircle,
} from "react-icons/fi";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const mbbsLinks = [
  { name: "MBBS Abroad Overview", path: "/mbbs/abroad" },
  { name: "MBBS in India", path: "/mbbs/india" },
  { name: "MBBS in Russia", path: "/mbbs/russia" },
  { name: "MBBS in Georgia", path: "/mbbs/georgia" },
  { name: "MBBS in Uzbekistan", path: "/mbbs/uzbekistan" },
  { name: "MBBS in Kazakhstan", path: "/mbbs/kazakhstan" },
  { name: "MBBS in Kyrgyzstan", path: "/mbbs/kyrgyzstan" },
  { name: "Medical PG in Germany", path: "/medical-pg/germany" },
];

const studyLinks = [
  { name: "Study Abroad Overview", path: "/study-abroad" },
  { name: "Study in Germany", path: "/study-abroad/germany" },
  { name: "Study in UK", path: "/study-abroad/uk" },
  { name: "Study in Canada", path: "/study-abroad/canada" },
  { name: "Study in Cyprus", path: "/study-abroad/cyprus" },
  { name: "Study in France", path: "/study-abroad/france" },
  { name: "Ausbildung in Germany", path: "/ausbildung" },
  { name: "Language & Test Prep", path: "/coaching" },
  { name: "Free Eligibility Check", path: "/eligibility-check" },
];

const stats = [
  { value: "15,000+", label: "Students Placed" },
  { value: "98%", label: "Visa Success Rate" },
  { value: "20+", label: "Countries" },
  { value: "200+", label: "Partner Universities" },
];

const socials = [
  {
    Icon: FiFacebook,
    href: "#",
    label: "Facebook",
    hover: "hover:bg-blue-700",
  },
  {
    Icon: FiInstagram,
    href: "https://www.instagram.com/captonvisapoint?igsh=MXUyeW11eWRzZDVpdg==",
    label: "Instagram",
    hover: "hover:bg-pink-600",
  },
  {
    Icon: FiLinkedin,
    href: "#",
    label: "LinkedIn",
    hover: "hover:bg-blue-800",
  },
  { Icon: FiYoutube, href: "#", label: "YouTube", hover: "hover:bg-red-600" },
];

const badges = [
  { Icon: FiShield, text: "NMC Approved" },
  { Icon: FiAward, text: "Govt. Certified" },
  { Icon: FiStar, text: "MCI Recognized" },
  { Icon: FiCheck, text: "ISO Certified" },
  { Icon: FiGlobe, text: "20+ Countries Served" },
];

const legalLinks = [
  { label: "About Us", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Partner With Us", path: "/partner" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Contact Us", path: "/contact" },
];

const countryFlags = ["🇮🇳", "🇷🇺", "🇩🇪", "🇬🇧", "🇨🇦", "🇦🇺", "🇦🇪"];

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

/** Animated arrow link used in all nav columns */
const FooterLink = ({ name, path }) => (
  <li>
    <Link
      to={path}
      className="group inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 text-[13px] leading-relaxed transition-colors duration-150"
    >
      <FiArrowRight
        size={11}
        className="shrink-0 opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-amber-400"
      />
      <span>{name}</span>
    </Link>
  </li>
);

/** Column section header with colored underline accent */
const ColHeader = ({ text, accentColor }) => (
  <h4 className="text-white font-bold text-xs uppercase tracking-[2px] mb-5 flex items-center gap-2.5">
    <span className={`block w-5 h-[3px] rounded-full ${accentColor}`} />
    {text}
  </h4>
);

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* ═══════════════════════════════════════
          1. MAIN FOOTER BODY
      ═══════════════════════════════════════ */}
      <div className="bg-slate-950 relative overflow-hidden">
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Ambient blue glow — top right */}
        <div className="absolute -top-20 -right-20 w-[600px] h-[500px] bg-blue-800/15 rounded-full blur-[120px] pointer-events-none" />
        {/* Ambient amber glow — bottom left */}
        <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] bg-amber-500/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 pt-14 pb-10 relative">
          {/* ── 4-COLUMN REDESIGNED GRID ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-14">
            {/* ── COLUMN 1: BRAND & CREDENTIALS ── */}
            <div className="space-y-5">
              {/* Logo */}
              <Link to="/" className="inline-flex items-center gap-2.5 group">
                <img
                  src="/logo.png"
                  alt="CaptonVisaPoint"
                  className="w-10 h-10 object-contain shrink-0"
                />
                <span className="text-[19px] font-bold text-white tracking-tight">
                  Capton<span className="text-blue-400">Visa</span>
                  <span className="text-amber-400">Point</span>
                </span>
              </Link>

              {/* Live badge */}
              <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-full px-3 py-1.5">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shrink-0" />
                <span className="text-slate-400 text-[11px]">
                  Open Mon–Sat, 9am–7pm IST
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed">
                India's premier education and visa consultancy. Helping 15,000+
                students secure medical seats and global careers across 20+
                countries with transparent guidance.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-2 pt-1">
                {socials.map(({ Icon, href, label, hover }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 ${hover} hover:text-white hover:border-transparent transition-all duration-200 hover:scale-105 active:scale-95`}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>

              {/* Country flags */}
              <div className="flex items-center gap-1.5 flex-wrap pt-1">
                {countryFlags.map((flag, i) => (
                  <span key={i} className="text-base leading-none">
                    {flag}
                  </span>
                ))}
                <span className="text-slate-500 text-[11px] ml-1">
                  +15 more destinations
                </span>
              </div>
            </div>

            {/* ── COLUMN 2: MBBS PROGRAMS ── */}
            <div className="min-w-0">
              <ColHeader text="MBBS Programs" accentColor="bg-blue-500" />
              <ul className="space-y-2.5">
                {mbbsLinks.map((item) => (
                  <FooterLink key={item.path} {...item} />
                ))}
              </ul>
            </div>

            {/* ── COLUMN 3: STUDY ABROAD & PATHWAYS ── */}
            <div className="min-w-0">
              <ColHeader text="Study Abroad" accentColor="bg-teal-500" />
              <ul className="space-y-2.5">
                {studyLinks.map((item) => (
                  <FooterLink key={item.path} {...item} />
                ))}
              </ul>
            </div>

            {/* ── COLUMN 4: CONTACT & SUPPORT ── */}
            <div className="min-w-0">
              <ColHeader text="Contact Us" accentColor="bg-amber-500" />
              <div className="space-y-3.5">
                {/* India Office */}
                <div className="flex gap-3 items-start p-2.5 rounded-xl bg-slate-900/60 border border-slate-850">
                  <div className="w-7 h-7 rounded-lg bg-blue-900/40 border border-blue-800/40 flex items-center justify-center shrink-0 mt-0.5">
                    <FiMapPin size={13} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] uppercase tracking-wider font-bold">
                      Delhi Office
                    </p>
                    <p className="text-slate-300 text-xs leading-snug mt-0.5">
                      B-15, Ram Dutt Enclave, Uttam Nagar, New Delhi – 110059
                    </p>
                  </div>
                </div>

                {/* Canada Office */}
                <div className="flex gap-3 items-start p-2.5 rounded-xl bg-slate-900/60 border border-slate-850">
                  <div className="w-7 h-7 rounded-lg bg-blue-900/40 border border-blue-800/40 flex items-center justify-center shrink-0 mt-0.5">
                    <FiMapPin size={13} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] uppercase tracking-wider font-bold">
                      Canada Office
                    </p>
                    <p className="text-slate-300 text-xs leading-snug mt-0.5">
                      Calgary, Alberta, Canada
                    </p>
                  </div>
                </div>

                {/* Phone India */}
                <a
                  href="tel:+919914773125"
                  className="flex gap-3 items-center group text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-900/40 border border-blue-800/40 flex items-center justify-center shrink-0 group-hover:bg-blue-700 group-hover:border-blue-600 transition-colors">
                    <FiPhone size={12} className="text-blue-400 group-hover:text-white" />
                  </div>
                  <span>+91 99147 73125 (India)</span>
                </a>

                {/* Phone Canada */}
                <a
                  href="tel:+18258836784"
                  className="flex gap-3 items-center group text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-900/40 border border-blue-800/40 flex items-center justify-center shrink-0 group-hover:bg-blue-700 group-hover:border-blue-600 transition-colors">
                    <FiPhone size={12} className="text-blue-400 group-hover:text-white" />
                  </div>
                  <span>+1 (825) 883-6784 (Canada)</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@captonvisapoint.com"
                  className="flex gap-3 items-center group text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-900/40 border border-blue-800/40 flex items-center justify-center shrink-0 group-hover:bg-blue-700 group-hover:border-blue-600 transition-colors">
                    <FiMail size={12} className="text-blue-400 group-hover:text-white" />
                  </div>
                  <span className="truncate">info@captonvisapoint.com</span>
                </a>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/919914773125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 w-full py-2.5 bg-green-600 hover:bg-green-500 text-white rounded-xl text-xs font-bold transition-all hover:shadow-lg hover:shadow-green-600/20 active:scale-95"
                >
                  <FiMessageCircle size={14} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* ── ABOUT US HIGHLIGHT ── */}
          <div className="border-t border-slate-800/80 pt-8 mb-8">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 border border-blue-800/40 p-6 sm:p-8">
              {/* subtle glow */}
              <div className="absolute top-0 left-0 w-64 h-full bg-blue-700/10 blur-[80px] pointer-events-none rounded-full" />
              <div className="absolute top-0 right-0 w-48 h-full bg-amber-500/8 blur-[80px] pointer-events-none rounded-full" />

              {/* ABOUT US label pill */}
              <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-3 py-1 mb-4">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                <span className="text-amber-400 text-[10px] font-bold uppercase tracking-[2px]">
                  About Us
                </span>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 relative">
                {/* Left — text */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-white text-lg sm:text-xl font-bold leading-tight">
                    Who is <span className="text-blue-400">Capton</span>
                    <span className="text-amber-400">VisaPoint</span>?
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl">
                    Founded in{" "}
                    <span className="text-slate-200 font-semibold">2010</span>,
                    CaptonVisaPoint is India's most trusted immigration &amp;
                    overseas education consultancy. We guide students and
                    professionals through every step — from career counselling
                    and university selection to visa processing and
                    pre-departure support — across{" "}
                    <span className="text-slate-200 font-semibold">
                      20+ countries
                    </span>
                    . With a team of certified counsellors and a 98% visa
                    success rate, we turn your global ambitions into reality.
                  </p>

                  {/* mini stats row */}
                  <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
                    {stats.map(({ value, label }) => (
                      <div key={label} className="flex items-baseline gap-1.5">
                        <span className="text-amber-400 font-bold text-sm">
                          {value}
                        </span>
                        <span className="text-slate-500 text-[11px]">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right — CTA */}
                <div className="flex-shrink-0">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-5 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-amber-500/25 active:scale-95"
                  >
                    Learn About Us
                    <FiArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── TRUST BADGES ── */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {badges.map(({ Icon, text }) => (
                <div
                  key={text}
                  className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-full px-3.5 py-1.5"
                >
                  <Icon size={11} className="text-amber-400 shrink-0" />
                  <span className="text-slate-400 text-[11px] font-medium">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── BOTTOM BAR ── */}
          <div className="border-t border-slate-800/60 pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-[11px] text-center sm:text-left">
                © {year} Capton Visa Point Pvt. Ltd. All rights reserved.
                <span className="mx-1.5 text-slate-700">·</span>
                Empowering students &amp; professionals globally.
              </p>
              <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
                {legalLinks.map(({ label, path }) => (
                  <Link
                    key={label}
                    to={path}
                    className="text-slate-500 hover:text-slate-300 text-[11px] transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
