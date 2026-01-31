import React from "react";
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
  FiGlobe,
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
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Capton<span className="text-blue-400">Visa</span>
              </span>
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              India's leading immigration and education consultancy. Established
              2009. Your trusted partner for global opportunities.
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

          {/* Study Services */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-blue-500 rounded-full"></span>
              Study Services
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "MBBS Abroad", link: "/mbbs" },
                { name: "Study in USA", link: "/study-abroad" },
                { name: "Study in UK", link: "/study-abroad" },
                { name: "Study in Canada", link: "/study-abroad" },
                { name: "Study in Australia", link: "/study-abroad" },
                { name: "Study in Germany", link: "/study-abroad" },
                { name: "Ausbildung Germany", link: "/ausbildung" },
                { name: "Scholarships", link: "/blog" },
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

          {/* Immigration Services */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-green-500 rounded-full"></span>
              Immigration
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Canada PR", link: "/pr-visa" },
                { name: "Australia PR", link: "/pr-visa" },
                { name: "Germany Blue Card", link: "/pr-visa" },
                { name: "UK Skilled Worker", link: "/work-visa" },
                { name: "Work Visa", link: "/work-visa" },
                { name: "Job Seeker Visa", link: "/work-visa" },
                { name: "Visit Visa", link: "/contact" },
                { name: "Points Calculator", link: "/pr-visa" },
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

          {/* Coaching & Resources */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-purple-500 rounded-full"></span>
              Coaching & Resources
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "IELTS Coaching", link: "/language-coaching" },
                { name: "PTE Coaching", link: "/language-coaching" },
                { name: "German Language", link: "/language-coaching" },
                { name: "TOEFL Coaching", link: "/language-coaching" },
                { name: "Blog & News", link: "/blog" },
                { name: "Success Stories", link: "/blog" },
                { name: "Free Webinars", link: "/contact" },
                { name: "Download Brochures", link: "/contact" },
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

          {/* Company & Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-orange-500 rounded-full"></span>
              Company
            </h4>
            <ul className="space-y-3 text-sm mb-6">
              {[
                { name: "About Us", link: "/about" },
                { name: "Our Team", link: "/about" },
                { name: "Careers", link: "/contact" },
                { name: "Office Locations", link: "/contact" },
                { name: "Contact Us", link: "/contact" },
                { name: "Testimonials", link: "/" },
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

            <div className="space-y-3 text-sm pt-6 border-t border-slate-700">
              <div className="flex gap-3 items-start">
                <FiMapPin className="text-blue-400 mt-1 shrink-0" />
                <span className="text-slate-400">
                  123 Business Tower, Connaught Place, New Delhi, India
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <FiPhone className="text-green-400 shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <FiMail className="text-purple-400 shrink-0" />
                <a
                  href="mailto:info@captonvisa.com"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  info@captonvisa.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-y border-slate-700 py-8 mb-8">
          <h4 className="text-white font-bold mb-4 text-center">
            Certified & Trusted
          </h4>
          <div className="flex flex-wrap justify-center gap-8 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-green-400">
                ✓
              </span>
              ISO Certified
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-green-400">
                ✓
              </span>
              ICCRC Registered
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-green-400">
                ✓
              </span>
              ICEF Certified
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-green-400">
                ✓
              </span>
              AIRC Member
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Capton Visa Point. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link to="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Refund Policy
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>

        {/* Made with */}
        <div className="text-center mt-8 pt-8 border-t border-slate-800">
          <p className="text-xs text-slate-500">
            Empowering dreams since 2009 | Served 10,000+ students across 25+
            countries
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
