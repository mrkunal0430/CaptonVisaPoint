import React from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import InquiryForm from "../components/forms/InquiryForm";

const Contact = () => {
  return (
    <div>
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
                    123 Immigration Hub, Business Park, New Delhi, India
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center text-xl shrink-0">
                  <FiPhone />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Phone</h3>
                  <p className="text-slate-600">+91 98765 43210</p>
                  <p className="text-slate-600">+91 12345 67890</p>
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
            <div className="mt-12 h-64 bg-slate-200 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.11235398766!2d77.209021!3d28.613939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1625642456456!5m2!1sen!2sin"
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
