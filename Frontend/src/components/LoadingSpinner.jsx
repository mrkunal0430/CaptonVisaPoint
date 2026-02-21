import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-slate-50">
      {/* Logo placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <img
          src="/logo.png"
          alt="Capton Visa Point"
          className="w-16 h-16 object-contain"
        />
      </motion.div>

      {/* Spinner */}
      <div className="relative">
        <div className="w-12 h-12 border-4 border-blue-200 rounded-full" />
        <div className="absolute top-0 left-0 w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>

      {/* Loading text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-slate-500 text-sm font-medium"
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default LoadingSpinner;
