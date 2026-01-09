import React from "react";
import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link
              to="/"
              className="text-2xl font-bold text-white tracking-tight"
            >
              Capton<span className="text-blue-500">Visa</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted partner for international education and immigration
              services. We turn your global dreams into reality.
            </p>
            <div className="flex gap-4">
              {[FiFacebook, FiInstagram, FiTwitter, FiLinkedin].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {[
                "Home",
                "About Us",
                "Services",
                "Success Stories",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="hover:text-brand-blue transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm">
              {[
                "Student Visa",
                "Work Permit",
                "PR Visa",
                "Visitor Visa",
                "IELTS Coaching",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="hover:text-brand-blue transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-3">
                <FiMapPin className="text-brand-blue text-xl shrink-0" />
                <span>123 Immigration Ave, Global Tower, New Delhi, India</span>
              </li>
              <li className="flex gap-3">
                <FiPhone className="text-brand-blue text-lg shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3">
                <FiMail className="text-brand-blue text-lg shrink-0" />
                <span>info@captonvisa.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Capton Visa Point. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
