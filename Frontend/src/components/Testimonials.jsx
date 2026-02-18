import { motion } from "framer-motion";
import {
  FiStar,
  FiMapPin,
  FiAward,
  FiGlobe,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";

const Testimonials = () => {
  const testimonials = [
    // BTech Germany via JEE Advanced
    {
      name: "Aditya Sharma",
      role: "BTech Student",
      destination: "Germany",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      rating: 5,
      text: "Thanks to Richa Mam, I didn't waste a year in Studienkolleg. She clearly explained how JEE Advanced helps in direct BTech admission in Germany and handled my case with complete professionalism.",
      flag: "🇩🇪",
      type: "BTech Germany",
      gradient: "from-blue-500 to-blue-400",
    },
    {
      name: "Rohan Gupta",
      role: "Engineering Student",
      destination: "Germany",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      rating: 5,
      text: "Richa Mam treats every student like her own. From shortlisting universities to visa approval, she guided me step by step for direct BTech admission in Germany through JEE Advanced. Honest advice, no false promises.",
      flag: "🇩🇪",
      type: "BTech Germany",
      gradient: "from-blue-500 to-blue-400",
    },
    // MBA Germany
    {
      name: "Priya Mehta",
      role: "MBA Student",
      destination: "TU Berlin",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      rating: 5,
      text: "Richa Mam guided me personally for my MBA application and helped me secure admission at Technical University of Berlin. Her ROI-focused counseling was extremely helpful.",
      flag: "🇩🇪",
      type: "MBA Germany",
      gradient: "from-blue-500 to-amber-400",
    },
    {
      name: "Vikram Singh",
      role: "MBA Aspirant",
      destination: "Germany",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      rating: 5,
      text: "Richa Mam's counseling was extremely honest and practical. She guided me on the right MBA universities and explained ROI clearly. Capton Visa Point helped me secure admission with proper profile evaluation and SOP guidance.",
      flag: "🇩🇪",
      type: "MBA Germany",
      gradient: "from-blue-500 to-blue-400",
    },
    // MBBS Reviews
    {
      name: "Ankit Verma",
      role: "Medical Student",
      destination: "Uzbekistan",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
      rating: 5,
      text: "Capton Visa Point guided me for MBBS at Ferghana Medical Institute of Public Health. They clearly explained academics, living conditions, and future exams. No false promises, only facts.",
      flag: "🇺🇿",
      type: "MBBS Abroad",
      gradient: "from-blue-500 to-blue-400",
    },
    {
      name: "Sneha Patel",
      role: "Medical Student",
      destination: "Russia",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      rating: 5,
      text: "Richa Mam explained both positives and challenges very clearly while counseling for Kazan State Medical University. Weather, language adaptation, and exam reality were discussed honestly. This transparency built complete trust.",
      flag: "🇷🇺",
      type: "MBBS Abroad",
      gradient: "from-amber-500 to-amber-400",
    },
    {
      name: "Rahul Kumar",
      role: "Medical Student",
      destination: "Uzbekistan",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
      rating: 5,
      text: "The team at Capton Visa Point helped me secure MBBS admission at Bukhara State Medical University. They focused on genuine information instead of showing rosy pictures. Very ethical consultancy.",
      flag: "🇺🇿",
      type: "MBBS Abroad",
      gradient: "from-blue-500 to-blue-400",
    },
    {
      name: "Divya Sharma",
      role: "Medical Student",
      destination: "Kyrgyzstan",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
      rating: 5,
      text: "I received proper guidance for MBBS at Kyrgyz State Medical Academy. Admission process, hostel life, and study pattern were explained realistically. Good experience overall.",
      flag: "🇰🇬",
      type: "MBBS Abroad",
      gradient: "from-amber-500 to-amber-400",
    },
    {
      name: "Arjun Reddy",
      role: "Medical Student",
      destination: "Georgia",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      rating: 5,
      text: "The counseling for MBBS in Georgia was very transparent. Richa Mam did not oversell anything and explained safety, academics, and long-term prospects honestly. Very trustworthy experience.",
      flag: "🇬🇪",
      type: "MBBS Abroad",
      gradient: "from-amber-500 to-amber-400",
    },
    // Healthcare & Nursing
    {
      name: "Meera Joshi",
      role: "Nursing Professional",
      destination: "Germany",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
      rating: 5,
      text: "Capton Visa Point helped me with documentation and employer coordination for nursing jobs in Germany. Richa Mam was very supportive and guided me patiently through the nursing visa and interview process.",
      flag: "🇩🇪",
      type: "Healthcare Jobs",
      gradient: "from-amber-500 to-amber-400",
    },
    // Ausbildung
    {
      name: "Karthik Nair",
      role: "Nursing Ausbildung",
      destination: "Germany",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      rating: 5,
      text: "Highly recommended for Nursing Ausbildung. Capton Visa Point handled documentation, employer coordination, and visa process very smoothly. Everything moved on time without delays.",
      flag: "🇩🇪",
      type: "Ausbildung",
      gradient: "from-amber-500 to-amber-400",
    },
    {
      name: "Amit Patel",
      role: "IT Ausbildung",
      destination: "Germany",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      rating: 5,
      text: "Capton Visa Point helped me secure an IT Ausbildung opportunity in Germany. Richa Mam personally evaluated my profile and explained language and technical expectations honestly. Smooth and transparent experience.",
      flag: "🇩🇪",
      type: "Ausbildung",
      gradient: "from-blue-500 to-blue-400",
    },
    // Study Abroad - Cyprus & Malta
    {
      name: "Ananya Singh",
      role: "Student",
      destination: "Cyprus",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400",
      rating: 5,
      text: "Excellent support for Cyprus admissions. The team handled documentation and embassy process very professionally. Capton Visa Point made studying in Cyprus easy and affordable for me.",
      flag: "🇨🇾",
      type: "Study Abroad",
      gradient: "from-blue-600 to-blue-400",
    },
    {
      name: "Nikhil Sharma",
      role: "Student",
      destination: "Malta",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      rating: 5,
      text: "Capton Visa Point helped me secure admission in Malta with proper guidance on courses and post-study work options. Highly recommended consultancy.",
      flag: "🇲🇹",
      type: "Study Abroad",
      gradient: "from-amber-500 to-orange-400",
    },
    // German Language
    {
      name: "Pooja Verma",
      role: "German Learner",
      destination: "Online Classes",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      rating: 5,
      text: "Initially I was scared, but after learning German online, everything became clear. Online classes are very effective and well-structured. Highly recommended.",
      flag: "🇩🇪",
      type: "German Language",
      gradient: "from-blue-600 to-blue-400",
    },
    // Opportunity Card
    {
      name: "Rajesh Kumar",
      role: "Professional",
      destination: "Germany",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
      rating: 5,
      text: "Capton Visa Point guided me well for the Germany Opportunity Card. Clear explanation of points system and documents. Professional handling throughout.",
      flag: "🇩🇪",
      type: "Opportunity Card",
      gradient: "from-slate-500 to-gray-400",
    },
  ];

  const row1 = [...testimonials.slice(0, 5), ...testimonials.slice(0, 5)];
  const row2 = [...testimonials.slice(5), ...testimonials.slice(5)];

  const TestimonialCard = ({ testimonial, size = "normal" }) => (
    <div
      className={`p-2 testimonial-card flex-shrink-0 ${size === "large" ? "w-[340px] sm:w-[420px]" : "w-[280px] sm:w-[340px]"} mx-2 sm:mx-3`}
    >
      <div className="group relative h-full">
        {/* Animated gradient border */}
        <div
          className={`absolute -inset-[1px] bg-gradient-to-r ${testimonial.gradient} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 animate-gradient-shift`}
        />

        {/* Card content */}
        <div className="relative h-full bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/50 group-hover:border-transparent transition-all duration-500 overflow-hidden">
          {/* Background glow */}
          <div
            className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${testimonial.gradient} opacity-[0.07] rounded-full blur-3xl group-hover:opacity-[0.15] transition-opacity duration-500`}
          />

          {/* Service type badge */}
          <div
            className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gradient-to-r ${testimonial.gradient} text-white text-[10px] sm:text-xs font-semibold mb-3 sm:mb-4 shadow-lg`}
          >
            <FiAward size={10} className="sm:w-3 sm:h-3" />
            {testimonial.type}
          </div>

          {/* Quote */}
          <p
            className={`text-slate-600 leading-relaxed mb-4 sm:mb-5 ${size === "large" ? "text-sm sm:text-base" : "text-xs sm:text-sm"} line-clamp-4`}
          >
            "{testimonial.text}"
          </p>

          {/* Rating */}
          <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <FiStar
                key={i}
                className="text-amber-400 fill-amber-400 w-3 h-3 sm:w-4 sm:h-4"
              />
            ))}
          </div>

          {/* Profile section */}
          <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-slate-100">
            <div className="relative">
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${testimonial.gradient} rounded-full opacity-50 blur-sm`}
              />
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-white"
              />
              <span className="absolute -bottom-0.5 -right-0.5 text-sm sm:text-base">
                {testimonial.flag}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-slate-800 text-sm sm:text-base truncate">
                {testimonial.name}
              </h4>
              <div className="flex items-center gap-1 text-[10px] sm:text-xs text-slate-500">
                <FiMapPin size={10} className="text-slate-400" />
                <span className="truncate">
                  {testimonial.role} • {testimonial.destination}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const stats = [
    {
      icon: FiUsers,
      value: "10,000+",
      label: "Happy Students",
      color: "text-blue-500",
    },
    {
      icon: FiTrendingUp,
      value: "98%",
      label: "Success Rate",
      color: "text-blue-600",
    },
    {
      icon: FiGlobe,
      value: "25+",
      label: "Countries",
      color: "text-blue-600",
    },
    {
      icon: FiStar,
      value: "4.9",
      label: "Google Rating",
      color: "text-amber-500",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-[10%] w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-blue-400/20 to-blue-500/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 right-[10%] w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-blue-500/20 to-pink-400/20 rounded-full blur-3xl animate-float-slow-reverse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-gradient-to-br from-amber-400/10 to-orange-400/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20 px-4"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 border border-amber-500/20 mb-4 sm:mb-6">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-amber-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-amber-700">
              Trusted by 10,000+ Students Worldwide
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 sm:mb-6 leading-tight">
            Success Stories That
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-blue-600 via-blue-700 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
              Inspire Dreams
            </span>
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            Real journeys, real achievements. See how we've helped thousands
            transform their international aspirations into reality.
          </p>
        </motion.div>

        {/* Marquee Section */}
        <div className="relative mb-12 sm:mb-16 lg:mb-20">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 lg:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 lg:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          {/* Row 1 */}
          <div className="mb-4 sm:mb-6 overflow-hidden">
            <div
              className="flex animate-marquee-left"
              style={{ width: "fit-content" }}
            >
              {row1.map((testimonial, index) => (
                <TestimonialCard
                  key={`row1-${index}`}
                  testimonial={testimonial}
                  size="large"
                />
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="overflow-hidden">
            <div
              className="flex animate-marquee-right"
              style={{ width: "fit-content" }}
            >
              {row2.map((testimonial, index) => (
                <TestimonialCard
                  key={`row2-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="px-4"
        >
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-blue-600/10 to-pink-500/10 rounded-2xl sm:rounded-3xl blur-2xl" />

              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/50 shadow-2xl shadow-slate-200/50 overflow-hidden">
                {/* Decorative top border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-pink-500" />

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group text-center p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-slate-50/80 transition-all duration-300"
                      >
                        <div
                          className={`inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        >
                          <stat.icon
                            className={`w-5 h-5 sm:w-7 sm:h-7 ${stat.color}`}
                          />
                        </div>
                        <div
                          className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${stat.color} mb-0.5 sm:mb-1`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-500 font-medium">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Trust badges */}
                  <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-100">
                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
                      {[
                        { label: "ISO Certified", icon: "🏆" },
                        { label: "ICEF Agency", icon: "✓" },
                        { label: "AIRC Member", icon: "🌐" },
                        { label: "15+ Years", icon: "⭐" },
                      ].map((badge, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-50 rounded-full text-xs sm:text-sm text-slate-600 font-medium hover:bg-slate-100 transition-colors"
                        >
                          <span className="text-sm sm:text-base">
                            {badge.icon}
                          </span>
                          <span>{badge.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10 sm:mt-12 lg:mt-16 px-4"
        >
          <p className="text-slate-500 text-xs sm:text-sm mb-3 sm:mb-4">
            Ready to write your own success story?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-blue-600/25 hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
          >
            Start Your Journey
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
