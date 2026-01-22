import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiStar, FiPlay } from "react-icons/fi";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      country: "Canada PR",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      rating: 5,
      text: "Capton Visa Point made my Canada PR dream come true! The team was professional, transparent, and guided me through every step. I got my PR in just 8 months.",
      achievement: "Got PR Visa for Canada",
    },
    {
      name: "Rahul Verma",
      country: "MBBS in Russia",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      rating: 5,
      text: "From counselling to admission, everything was smooth. Now I'm studying at a top medical university in Moscow. Thank you Capton for making this possible!",
      achievement: "Admitted to Moscow State University",
    },
    {
      name: "Sneha Patel",
      country: "Ausbildung Germany",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      rating: 5,
      text: "I'm earning while learning in Germany! The Ausbildung program was explained perfectly. Now I have a guaranteed job and great salary. Highly recommend!",
      achievement: "Working as Nurse in Berlin",
    },
    {
      name: "Amit Kumar",
      country: "Masters in UK",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      rating: 5,
      text: "Got admission to University of Manchester with scholarship! The visa process was handled professionally. Forever grateful to the Capton team.",
      achievement: "Masters with 50% Scholarship",
    },
    {
      name: "Ananya Singh",
      country: "Work Visa Australia",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      rating: 5,
      text: "Landed my dream IT job in Sydney with their help. From job search to visa approval, the entire process was seamless. Best consultancy ever!",
      achievement: "Software Engineer in Sydney",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-100/30 rounded-full blur-[120px] -z-0" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-brand-blue font-semibold tracking-wider text-xs sm:text-sm uppercase">
            Success Stories
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
            Hear From Our Happy Students
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            Real stories from real people who achieved their dreams with our
            guidance
          </p>
          <div className="h-1.5 w-16 sm:w-20 bg-brand-blue mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl"
              >
                {/* Left - Image/Video */}
                <div className="relative h-[280px] sm:h-[400px] md:h-[500px] bg-slate-100 group">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a
                      href={testimonials[currentIndex].video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center text-brand-blue hover:scale-110 transition-transform shadow-2xl group-hover:bg-brand-blue group-hover:text-white"
                    >
                      <FiPlay size={24} className="ml-1 sm:ml-1" />
                    </a>
                  </div>

                  {/* Achievement badge */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                    <p className="text-xs sm:text-sm font-light opacity-90 mb-1">
                      Achievement
                    </p>
                    <p className="text-base sm:text-lg md:text-xl font-bold">
                      {testimonials[currentIndex].achievement}
                    </p>
                  </div>
                </div>

                {/* Right - Content */}
                <div className="p-5 sm:p-8 md:p-12">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4 sm:mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <FiStar
                          key={i}
                          className="text-yellow-400 fill-yellow-400"
                          size={16}
                        />
                      ),
                    )}
                  </div>

                  {/* Quote */}
                  <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed mb-6 sm:mb-8 italic">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* Author */}
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-brand-dark">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-brand-blue font-medium text-sm sm:text-base">
                      {testimonials[currentIndex].country}
                    </p>
                  </div>

                  {/* Watch video link */}
                  <a
                    href={testimonials[currentIndex].video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-brand-blue font-semibold hover:gap-3 transition-all"
                  >
                    <FiPlay /> Watch Full Story
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 sm:-translate-x-4 md:-translate-x-16 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-brand-dark hover:bg-brand-blue hover:text-white transition-all z-10"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 sm:translate-x-4 md:translate-x-16 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-brand-dark hover:bg-brand-blue hover:text-white transition-all z-10"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={20} />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-brand-blue"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-16"
        >
          <div className="inline-flex items-center gap-3 sm:gap-4 bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-md">
            <div className="flex gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className="text-yellow-400 fill-yellow-400"
                  size={18}
                />
              ))}
            </div>
            <div className="border-l border-slate-200 pl-3 sm:pl-4">
              <p className="text-xl sm:text-2xl font-bold text-brand-dark">
                4.9/5
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                Based on 2,500+ reviews
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
