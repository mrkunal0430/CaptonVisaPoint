import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiYoutube,
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowRight,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
        {/*
          Grid layout strategy:
          xs  (< 640px)  : 2 cols — brand spans full row, 4 sections in 2×2 pairs (no ladder!)
          sm  (640-1023px): 2 cols — same with more padding
          lg  (1024px+)  : 5 cols — all 5 columns side by side
        */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-8 sm:gap-x-8 lg:gap-x-12 mb-10 sm:mb-16">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1 space-y-4 sm:space-y-5">
            <Link to="/" className="flex items-center gap-2.5 group w-fit">
              <img
                src="/logo.png"
                alt="Capton Visa Point Logo"
                className="w-10 h-10 object-contain shrink-0"
              />
              <span className="text-xl sm:text-2xl font-bold text-white tracking-tight whitespace-nowrap">
                Capton<span className="text-blue-400">VisaPoint</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              India's leading immigration and education consultancy. Your
              trusted partner for global opportunities.
            </p>

            {/* Social icons — each 44×44px for proper touch targets */}
            <div className="flex flex-wrap gap-2">
              {[
                {
                  Icon: FiFacebook,
                  link: "#",
                  label: "Facebook",
                  color: "hover:bg-blue-700",
                },
                {
                  Icon: FiInstagram,
                  link: "#",
                  label: "Instagram",
                  color: "hover:bg-amber-500",
                },

                {
                  Icon: FiLinkedin,
                  link: "#",
                  label: "LinkedIn",
                  color: "hover:bg-blue-800",
                },
                {
                  Icon: FiYoutube,
                  link: "#",
                  label: "YouTube",
                  color: "hover:bg-amber-600",
                },
              ].map(({ Icon, link, label, color }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 ${color} hover:text-white transition-all hover:scale-105 active:scale-95`}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* MBBS Abroad */}
          <div className="min-w-0">
            <h4 className="text-white font-bold mb-3 sm:mb-4 flex items-center gap-2 text-xs sm:text-sm lg:text-base">
              <span className="w-1 h-4 bg-blue-600 rounded-full shrink-0"></span>
              MBBS Abroad
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { name: "MBBS Abroad", link: "/mbbs/abroad" },
                { name: "MBBS India", link: "/mbbs/india" },
                { name: "MBBS in Russia", link: "/mbbs/russia" },
                { name: "MBBS in Georgia", link: "/mbbs/georgia" },
                { name: "MBBS in Kazakhstan", link: "/mbbs/kazakhstan" },
                { name: "MBBS in Uzbekistan", link: "/mbbs/uzbekistan" },
                { name: "MBBS in Kyrgyzstan", link: "/mbbs/kyrgyzstan" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="text-slate-400 hover:text-blue-400 sm:hover:translate-x-1 transition-all inline-block text-xs leading-snug"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Abroad */}
          <div className="min-w-0">
            <h4 className="text-white font-bold mb-3 sm:mb-4 flex items-center gap-2 text-xs sm:text-sm lg:text-base">
              <span className="w-1 h-4 bg-blue-400 rounded-full shrink-0"></span>
              Study Abroad
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { name: "Study Abroad", link: "/study-abroad" },
                { name: "Study in Germany", link: "/study-abroad/germany" },
                { name: "Study in Cyprus", link: "/study-abroad/cyprus" },
                { name: "Study in France", link: "/study-abroad/france" },
                { name: "Study in UK", link: "/study-abroad/uk" },
                { name: "Study in Canada", link: "/study-abroad/canada" },
                { name: "Ausbildung Germany", link: "/ausbildung" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="text-slate-400 hover:text-blue-400 sm:hover:translate-x-1 transition-all inline-block text-xs leading-snug"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="min-w-0">
            <h4 className="text-white font-bold mb-3 sm:mb-4 flex items-center gap-2 text-xs sm:text-sm lg:text-base">
              <span className="w-1 h-4 bg-amber-500 rounded-full shrink-0"></span>
              Services
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { name: "Healthcare Jobs", link: "/healthcare" },
                { name: "UAE Healthcare", link: "/healthcare/uae" },
                { name: "Germany Healthcare", link: "/healthcare/germany" },
                { name: "Language Coaching", link: "/coaching" },
                { name: "Eligibility Check", link: "/eligibility-check" },
                { name: "Partner With Us", link: "/partner" },
                { name: "Blog & News", link: "/blog" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="text-slate-400 hover:text-amber-400 sm:hover:translate-x-1 transition-all inline-block text-xs leading-snug"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="min-w-0">
            <h4 className="text-white font-bold mb-3 sm:mb-4 flex items-center gap-2 text-xs sm:text-sm lg:text-base">
              <span className="w-1 h-4 bg-amber-400 rounded-full shrink-0"></span>
              Contact Us
            </h4>

            {/* Quick nav links */}
            <ul className="space-y-1.5 sm:space-y-2 mb-4">
              {[
                { name: "Contact", link: "/contact" },
                { name: "Services", link: "/services" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="text-slate-400 hover:text-amber-400 sm:hover:translate-x-1 transition-all inline-flex items-center gap-1 text-xs leading-snug"
                  >
                    {item.name}
                    <FiArrowRight size={10} />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact details */}
            <div className="space-y-2.5 sm:space-y-3 pt-3 border-t border-slate-700/60">
              {/* Address */}
              <div className="flex gap-2.5 items-start">
                <FiMapPin className="text-blue-400 mt-0.5 shrink-0" size={14} />
                <span className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  B-15, Ram Dutt Enclave, Uttam Nagar, New Delhi – 110059
                </span>
              </div>

              {/* Phone — href and display text must match */}
              <div className="flex gap-2.5 items-center">
                <FiPhone className="text-amber-400 shrink-0" size={14} />
                <a
                  href="tel:+919914773125"
                  className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors"
                >
                  +91 99147 73125
                </a>
              </div>

              {/* Email */}
              <div className="flex gap-2.5 items-center min-w-0">
                <FiMail className="text-amber-400 shrink-0" size={14} />
                <a
                  href="mailto:info@captonvisapoint.com"
                  className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors truncate"
                >
                  info@captonvisapoint.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/60 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-slate-500 text-xs sm:text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} Capton Visa Point. All rights
              reserved.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="text-slate-500 hover:text-white transition-colors text-xs sm:text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/contact"
                className="text-slate-500 hover:text-white transition-colors text-xs sm:text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
