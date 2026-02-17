import React from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import InquiryForm from "../components/forms/InquiryForm";
import SEO from "../components/SEO";

const Contact = () => {
  return (
    <div>
      <SEO
        title="Contact Us"
        description="Contact Capton Visa Point for free counselling on MBBS abroad, MBBS in India, study abroad, Ausbildung, and immigration. Book a free consultation — MBBS admission help, NEET counseling, visa guidance, and career planning."
        keywords="contact Capton Visa Point, free consultation, study abroad counselling, immigration consultants, MBBS admission help, MBBS admission enquiry, MBBS admission helpline, MBBS guidance center, MBBS abroad counseling experts, MBBS abroad admission India helpline, MBBS consultants near me, best medical education consultants, MBBS career guidance, medical admission experts, apply MBBS online, MBBS admission enquiry India"
      />
      <div className="bg-gradient-to-br from-white via-blue-50 to-slate-50 py-20 text-center border-b border-slate-100">
        <h1 className="text-4xl font-bold mb-4 text-slate-800">Contact Us</h1>
        <p className="text-slate-600">We are here to help you.</p>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Get in Touch
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center text-xl shrink-0">
                  <FiMapPin />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Head Office</h3>
                  <p className="text-slate-600">
                    B-15, Ram Dutt Enclave, Uttam Nagar, New Delhi - 110059
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center text-xl shrink-0">
                  <FiPhone />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Phone</h3>
                  <p className="text-slate-600">+91 99147 73125</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center text-xl shrink-0">
                  <FiMail />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <p className="text-slate-600">info@captonvisapoint.com</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 sm:mt-12 h-48 sm:h-64 bg-slate-200 rounded-2xl overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=B-15+Ram+Dutt+Enclave+Uttam+Nagar+New+Delhi+110059&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div>
            <InquiryForm
              title="Send us a Message"
              subtitle="Fill the form below and we'll get back to you"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
