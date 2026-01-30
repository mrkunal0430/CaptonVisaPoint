import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import InquiryForm from "./InquiryForm";

const InquiryPopup = ({ isOpen, onClose }) => {
  const handleSuccess = () => {
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
            className="relative w-full max-w-md my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-3 -right-3 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <FiX size={20} />
            </button>

            <InquiryForm
              title="Quick Inquiry"
              subtitle="Fill the form and we'll get back to you"
              variant="popup"
              onSuccess={handleSuccess}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InquiryPopup;
