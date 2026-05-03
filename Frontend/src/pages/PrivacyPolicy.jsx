import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiShield,
  FiDatabase,
  FiEye,
  FiShare2,
  FiLock,
  FiMail,
  FiChevronDown,
  FiArrowLeft,
} from "react-icons/fi";
import SEO from "../components/SEO";

/* ──────────────────────────────────────────────────────────
   DATA
────────────────────────────────────────────────────────── */
const LAST_UPDATED = "3 May 2025";
const COMPANY_NAME = "Capton Visa Point Pvt. Ltd.";
const COMPANY_ADDRESS = "B-15, Ram Dutt Enclave, Uttam Nagar, New Delhi – 110059, India";
const CONTACT_EMAIL = "info@captonvisapoint.com";
const CONTACT_PHONE = "+91 99147 73125";

const sections = [
  {
    id: "information-we-collect",
    icon: FiDatabase,
    accent: "blue",
    title: "Information We Collect",
    content: [
      {
        heading: "Information You Provide Directly",
        body: "When you fill out an inquiry form, register for a consultation, or contact us through any channel, we collect: full name, email address, phone number, city/location, NEET score or educational background, preferred course or destination country, and any additional details shared in message fields.",
      },
      {
        heading: "Information Collected Automatically",
        body: "When you visit our website, we automatically collect certain technical information such as your IP address, browser type and version, pages visited, time and date of your visit, referring URL, and device type. This data is collected through cookies and similar tracking technologies.",
      },
      {
        heading: "Information from Third Parties",
        body: "We may receive information about you from third-party sources such as social media platforms (if you interact with our ads or pages), referral partners, or public databases — always in compliance with applicable data protection laws.",
      },
    ],
  },
  {
    id: "how-we-use",
    icon: FiEye,
    accent: "indigo",
    title: "How We Use Your Information",
    content: [
      {
        heading: "Service Delivery",
        body: "To provide the services you request — including MBBS counselling, study abroad guidance, visa assistance, and career counselling. This includes contacting you by phone, email, or WhatsApp to discuss your inquiry and send relevant information.",
      },
      {
        heading: "Communication & Follow-up",
        body: "To send you updates on admission deadlines, NEET notifications, visa processing timelines, and service-related information relevant to your inquiry. You may opt out of marketing communications at any time.",
      },
      {
        heading: "Service Improvement",
        body: "To analyse usage patterns, improve our website experience, personalise content, and develop new services. We use aggregated and anonymised data for research and analytics.",
      },
      {
        heading: "Legal Compliance",
        body: "To comply with applicable laws, regulations, legal processes, and governmental requests, and to enforce our terms of service where necessary.",
      },
    ],
  },
  {
    id: "sharing",
    icon: FiShare2,
    accent: "amber",
    title: "Sharing Your Information",
    content: [
      {
        heading: "We Do Not Sell Your Data",
        body: "Capton Visa Point does not sell, rent, or trade your personal information to third parties for their own marketing purposes.",
      },
      {
        heading: "Partner Universities & Institutions",
        body: "With your consent, we may share your information with our partner universities and educational institutions as part of the admission process. This is done only when required to process your application.",
      },
      {
        heading: "Service Providers",
        body: "We engage trusted third-party service providers (e.g., cloud hosting, CRM, email service, analytics) who process data on our behalf. These providers are contractually bound to use your data only to provide services to us.",
      },
      {
        heading: "Legal Requirements",
        body: "We may disclose your information if required by law, court order, or governmental authority, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.",
      },
    ],
  },
  {
    id: "cookies",
    icon: FiShield,
    accent: "green",
    title: "Cookies & Tracking",
    content: [
      {
        heading: "What Are Cookies?",
        body: "Cookies are small text files placed on your device when you visit our website. They help us remember your preferences, understand how you use our site, and improve your experience.",
      },
      {
        heading: "Types of Cookies We Use",
        body: "Essential cookies (required for the site to function), analytics cookies (to understand usage — via Google Analytics), and marketing cookies (to serve relevant ads on platforms like Google and Meta). You can manage cookie preferences through your browser settings.",
      },
      {
        heading: "Third-Party Tracking",
        body: "Our website may include pixels or scripts from third-party platforms such as Google Ads, Meta (Facebook/Instagram), and WhatsApp Business. These tools have their own privacy policies, which we encourage you to review.",
      },
    ],
  },
  {
    id: "security",
    icon: FiLock,
    accent: "red",
    title: "Data Security",
    content: [
      {
        heading: "How We Protect Your Data",
        body: "We implement industry-standard security measures including SSL/TLS encryption for data in transit, access controls, secure servers, and regular security reviews. Only authorised personnel have access to personal information, and they are trained on data protection practices.",
      },
      {
        heading: "Data Retention",
        body: "We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, provide ongoing services, and comply with legal obligations. When data is no longer required, it is securely deleted or anonymised.",
      },
      {
        heading: "No Absolute Guarantee",
        body: "While we take all reasonable steps to protect your information, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security and encourage you to contact us immediately if you believe your data has been compromised.",
      },
    ],
  },
  {
    id: "your-rights",
    icon: FiShield,
    accent: "purple",
    title: "Your Rights",
    content: [
      {
        heading: "Access & Correction",
        body: "You have the right to request a copy of the personal information we hold about you, and to request corrections if any information is inaccurate or incomplete.",
      },
      {
        heading: "Deletion",
        body: "You may request that we delete your personal information, subject to any legal obligations we must fulfil. Requests can be made by emailing us at the contact details below.",
      },
      {
        heading: "Opt-Out of Marketing",
        body: "You can opt out of marketing communications at any time by clicking 'Unsubscribe' in any email or by contacting us directly. Please note that even if you opt out, you may still receive transactional messages related to ongoing services.",
      },
      {
        heading: "Data Portability",
        body: "You have the right to receive your personal data in a structured, commonly used format and to request its transfer to another organisation where technically feasible.",
      },
    ],
  },
];

const faqs = [
  {
    q: "Does Capton Visa Point share my data with universities without my permission?",
    a: "No. We only share your application data with partner universities as part of the admission process, and only after you have engaged with us for that purpose. We never share data for unsolicited purposes.",
  },
  {
    q: "How can I request deletion of my personal data?",
    a: `Email us at ${CONTACT_EMAIL} with the subject line "Data Deletion Request". We will process your request within 30 working days, subject to any legal retention obligations.`,
  },
  {
    q: "Does this policy apply to information shared on WhatsApp?",
    a: "When you contact us via WhatsApp, the conversation is subject to WhatsApp's own Privacy Policy in addition to ours. We treat information shared in these conversations with the same care as any other channel.",
  },
  {
    q: "Is my NEET score stored securely?",
    a: "Yes. All sensitive information including academic scores is stored in encrypted databases with access restricted to authorised counselling staff only.",
  },
  {
    q: "Will this policy change in the future?",
    a: "Yes, we may update this policy from time to time to reflect changes in our services or applicable laws. We will notify you of significant changes by updating the 'Last Updated' date and, where appropriate, via email.",
  },
];

/* ──────────────────────────────────────────────────────────
   ACCENT MAP
────────────────────────────────────────────────────────── */
const accentMap = {
  blue:   { bg: "bg-blue-50",   border: "border-blue-200",  icon: "text-blue-600",   dot: "bg-blue-500",   badge: "bg-blue-100 text-blue-700" },
  indigo: { bg: "bg-indigo-50", border: "border-indigo-200", icon: "text-indigo-600", dot: "bg-indigo-500", badge: "bg-indigo-100 text-indigo-700" },
  amber:  { bg: "bg-amber-50",  border: "border-amber-200", icon: "text-amber-600",  dot: "bg-amber-500",  badge: "bg-amber-100 text-amber-700" },
  green:  { bg: "bg-green-50",  border: "border-green-200", icon: "text-green-600",  dot: "bg-green-500",  badge: "bg-green-100 text-green-700" },
  red:    { bg: "bg-red-50",    border: "border-red-200",   icon: "text-red-600",    dot: "bg-red-500",    badge: "bg-red-100 text-red-700" },
  purple: { bg: "bg-purple-50", border: "border-purple-200", icon: "text-purple-600", dot: "bg-purple-500", badge: "bg-purple-100 text-purple-700" },
};

/* ──────────────────────────────────────────────────────────
   SUB-COMPONENTS
────────────────────────────────────────────────────────── */
const PolicySection = ({ section }) => {
  const ac = accentMap[section.accent];
  const Icon = section.icon;
  return (
    <section id={section.id} className="scroll-mt-24">
      <div className={`flex items-center gap-3 mb-5`}>
        <div className={`w-10 h-10 rounded-xl ${ac.bg} ${ac.border} border flex items-center justify-center flex-shrink-0`}>
          <Icon className={`${ac.icon}`} size={18} />
        </div>
        <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
      </div>

      <div className="space-y-5">
        {section.content.map((item, i) => (
          <div key={i} className={`rounded-xl border ${ac.border} ${ac.bg} p-5`}>
            <div className="flex items-start gap-3">
              <div className={`w-2 h-2 rounded-full ${ac.dot} mt-2 flex-shrink-0`} />
              <div>
                <h3 className="font-semibold text-slate-800 mb-1.5">{item.heading}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-xl overflow-hidden transition-all ${open ? "border-blue-200 shadow-sm" : "border-slate-200"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 p-4 text-left bg-white hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-800 text-sm">{q}</span>
        <FiChevronDown
          className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          size={16}
        />
      </button>
      {open && (
        <div className="px-4 pb-4 pt-1 text-slate-600 text-sm leading-relaxed bg-blue-50/40 border-t border-slate-100">
          {a}
        </div>
      )}
    </div>
  );
};

/* ──────────────────────────────────────────────────────────
   PAGE
────────────────────────────────────────────────────────── */
const PrivacyPolicy = () => {
  return (
    <div className="bg-white">
      <SEO
        title="Privacy Policy | Capton Visa Point"
        description="Read the Privacy Policy of Capton Visa Point Pvt. Ltd. — how we collect, use, and protect your personal information when you use our MBBS abroad, study abroad, and visa consultancy services."
        keywords="Capton Visa Point privacy policy, data protection, personal information, MBBS consultancy privacy, student data security"
      />

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8 transition-colors"
          >
            <FiArrowLeft size={14} /> Back to Home
          </Link>

          <div className="flex items-start gap-5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
              <FiShield className="text-blue-400" size={28} />
            </div>
            <div>
              <span className="inline-block bg-blue-500/15 border border-blue-500/25 text-blue-400 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
                Legal Document
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Privacy Policy</h1>
              <p className="text-slate-400 text-sm">
                Last updated: <span className="text-slate-300 font-medium">{LAST_UPDATED}</span>
                &nbsp;·&nbsp;Effective immediately
              </p>
            </div>
          </div>

          {/* Summary pills */}
          <div className="flex flex-wrap gap-2 mt-8">
            {[
              "We don't sell your data",
              "SSL encrypted",
              "GDPR aligned",
              "Opt-out anytime",
            ].map((pill) => (
              <span key={pill} className="inline-flex items-center gap-1.5 bg-white/8 border border-white/12 text-slate-300 text-[11px] px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" /> {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <div className="container mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="max-w-4xl mx-auto">

          {/* Introduction */}
          <div className="mb-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              This Privacy Policy describes how <strong>{COMPANY_NAME}</strong> ("<strong>Capton Visa Point</strong>", "<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>") collects, uses, stores, and protects your personal information when you visit our website (<strong>captonvisapoint.com</strong>), use our services, or interact with us through any channel including phone, email, and WhatsApp.
            </p>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base mt-3">
              By using our website or services, you agree to the collection and use of information in accordance with this policy. If you do not agree, please discontinue use of our services.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <h2 className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-4">Contents</h2>
            <ol className="space-y-2">
              {sections.map((s, i) => {
                const ac = accentMap[s.accent];
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="flex items-center gap-3 group hover:no-underline"
                    >
                      <span className={`w-6 h-6 rounded-lg ${ac.badge} text-[11px] font-bold flex items-center justify-center flex-shrink-0`}>
                        {i + 1}
                      </span>
                      <span className="text-sm text-slate-600 group-hover:text-blue-600 transition-colors">
                        {s.title}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Policy Sections */}
          <div className="space-y-12">
            {sections.map((section) => (
              <PolicySection key={section.id} section={section} />
            ))}
          </div>

          {/* Children's Privacy */}
          <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-2xl">
            <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="text-2xl">👶</span> Children's Privacy
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our services are intended for individuals who are 16 years of age or older. We do not knowingly collect personal information from children under 16. If you believe we have inadvertently collected such information, please contact us immediately and we will delete it promptly.
            </p>
          </div>

          {/* Third-Party Links */}
          <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-2xl">
            <h2 className="text-lg font-bold text-slate-900 mb-2">Third-Party Links</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our website may contain links to external websites, including partner universities and social media platforms. We are not responsible for the privacy practices of those websites and encourage you to review their respective privacy policies before providing any personal information.
            </p>
          </div>

          {/* FAQs */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>

          {/* Contact / Grievance */}
          <div className="mt-14 p-6 sm:p-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                <FiMail className="text-white" size={20} />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Questions About This Policy?</h2>
                <p className="text-blue-100 text-sm leading-relaxed mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please contact our Data Protection Officer:
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-blue-100">
                    <span className="font-semibold text-white">Company:</span> {COMPANY_NAME}
                  </p>
                  <p className="text-blue-100">
                    <span className="font-semibold text-white">Address:</span> {COMPANY_ADDRESS}
                  </p>
                  <p className="text-blue-100">
                    <span className="font-semibold text-white">Email:</span>{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-white transition-colors">
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                  <p className="text-blue-100">
                    <span className="font-semibold text-white">Phone:</span>{" "}
                    <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="underline hover:text-white transition-colors">
                      {CONTACT_PHONE}
                    </a>
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Governing Law */}
          <div className="mt-8 p-5 border border-slate-200 rounded-xl bg-slate-50">
            <p className="text-slate-500 text-xs leading-relaxed">
              <strong className="text-slate-700">Governing Law:</strong> This Privacy Policy is governed by and construed in accordance with the laws of India, including the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. Any disputes shall be subject to the exclusive jurisdiction of the courts of New Delhi, India.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
