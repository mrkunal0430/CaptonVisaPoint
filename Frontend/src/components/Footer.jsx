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
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="/logo.png"
                alt="Capton Visa Point Logo"
                className="w-10 h-10 object-contain"
                style={{
                  filter: "drop-shadow(0 0 0 transparent)",
                  mixBlendMode: "screen",
                }}
              />
              <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Capton<span className="text-blue-400">VisaPoint</span>
              </span>
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              India's leading immigration and education consultancy. Your
              trusted partner for global opportunities.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: FiFacebook, link: "#", color: "hover:bg-blue-600" },
                { Icon: FiInstagram, link: "#", color: "hover:bg-pink-600" },
                { Icon: FiTwitter, link: "#", color: "hover:bg-sky-500" },
                { Icon: FiLinkedin, link: "#", color: "hover:bg-blue-700" },
                { Icon: FiYoutube, link: "#", color: "hover:bg-red-600" },
              ].map(({ Icon, link, color }, idx) => (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 ${color} hover:text-white transition-all hover:scale-110`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* MBBS Abroad */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-blue-500 rounded-full"></span>
              MBBS Abroad
            </h4>
            <ul className="space-y-3 text-sm">
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
                    className="text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Abroad */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-green-500 rounded-full"></span>
              Study Abroad
            </h4>
            <ul className="space-y-3 text-sm">
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
                    className="text-slate-400 hover:text-green-400 transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Healthcare & Coaching */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-purple-500 rounded-full"></span>
              Services
            </h4>
            <ul className="space-y-3 text-sm">
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
                    className="text-slate-400 hover:text-purple-400 transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-orange-500 rounded-full"></span>
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm mb-6">
              {[
                { name: "Contact", link: "/contact" },
                { name: "Services", link: "/services" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="text-slate-400 hover:text-orange-400 transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-3 text-sm pt-4 border-t border-slate-700">
              <div className="flex gap-3 items-start">
                <FiMapPin className="text-blue-400 mt-1 shrink-0" />
                <span className="text-slate-400">
                  B-15 , Ram Dutt Enclave, Uttam Nagar , New Delhi - 110059
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <FiPhone className="text-green-400 shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  +91 99147 73125
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <FiMail className="text-purple-400 shrink-0" />
                <a
                  href="mailto:info@captonvisapoint.com"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  info@captonvisapoint.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} Capton Visa Point. All rights
              reserved.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
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
