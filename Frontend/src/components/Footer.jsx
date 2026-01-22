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
      {/* Newsletter Section */}
      <div className="bg-brand-blue py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Stay Updated with Latest Immigration News
              </h3>
              <p className="text-blue-100 text-sm sm:text-base">
                Get visa updates, scholarship alerts, and expert tips directly
                in your inbox
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 sm:px-6 py-3 rounded-xl flex-1 w-full sm:w-80 outline-none text-sm sm:text-base"
              />
              <button className="px-6 sm:px-8 py-3 bg-white text-brand-blue rounded-xl font-semibold hover:bg-blue-50 transition-all whitespace-nowrap text-sm sm:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Capton<span className="text-brand-blue">Visa</span>
              </span>
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              India's leading immigration and education consultancy. Established
              2009. Your trusted partner for global opportunities.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: FiFacebook, link: "#" },
                { Icon: FiInstagram, link: "#" },
                { Icon: FiTwitter, link: "#" },
                { Icon: FiLinkedin, link: "#" },
                { Icon: FiYoutube, link: "#" },
              ].map(({ Icon, link }, idx) => (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Study Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Study Services</h4>
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
                    className="hover:text-brand-blue transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Immigration Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Immigration</h4>
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
                    className="hover:text-brand-blue transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coaching & Resources */}
          <div>
            <h4 className="text-white font-bold mb-6">Coaching & Resources</h4>
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
                    className="hover:text-brand-blue transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
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
                    className="hover:text-brand-blue transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-3 text-sm pt-6 border-t border-slate-800">
              <div className="flex gap-3 items-start">
                <FiMapPin className="text-brand-blue mt-1 shrink-0" />
                <span className="text-slate-400">
                  123 Business Tower, Connaught Place, New Delhi, India
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <FiPhone className="text-brand-blue shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-slate-400 hover:text-brand-blue"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <FiMail className="text-brand-blue shrink-0" />
                <a
                  href="mailto:info@captonvisa.com"
                  className="text-slate-400 hover:text-brand-blue"
                >
                  info@captonvisa.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-y border-slate-800 py-8 mb-8">
          <h4 className="text-white font-bold mb-4 text-center">
            Certified & Trusted
          </h4>
          <div className="flex flex-wrap justify-center gap-8 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-brand-blue">
                ✓
              </span>
              ISO Certified
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-brand-blue">
                ✓
              </span>
              ICCRC Registered
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-brand-blue">
                ✓
              </span>
              ICEF Certified
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-brand-blue">
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
            <Link to="/contact" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-white">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-white">
              Refund Policy
            </Link>
            <Link to="/contact" className="hover:text-white">
              Disclaimer
            </Link>
          </div>
        </div>

        {/* Made with */}
        <div className="text-center mt-8 pt-8 border-t border-slate-800">
          <p className="text-xs text-slate-600">
            Empowering dreams since 2009 | Served 10,000+ students across 25+
            countries
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
