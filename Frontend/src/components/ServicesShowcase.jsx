import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiBook,
  FiMonitor,
  FiHeart,
  FiGlobe,
  FiStar,
  FiZap,
} from "react-icons/fi";

const ServicesShowcase = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1e3a8a 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <FiZap size={12} /> What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight">
            Your Gateway to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
              Global Opportunities
            </span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            End-to-end guidance from admissions to career placement across 15+
            countries
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {/* === CARD 1: MBBS (Wide on xl) === */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-2 relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 p-5 sm:p-7">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-semibold mb-2">
                    🩺 Medical Education
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    MBBS
                    <span className="ml-2 text-blue-300 text-lg sm:text-xl font-semibold">
                      India &amp; Abroad
                    </span>
                  </h3>
                </div>
                <div className="hidden sm:flex w-14 h-14 bg-white/10 backdrop-blur rounded-2xl items-center justify-center text-3xl shrink-0">
                  🏥
                </div>
              </div>

              {/* Two sub-cards — each is a self-contained block, no nesting */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {/* MBBS India sub-card */}
                <div className="bg-white/10 border border-white/15 backdrop-blur rounded-2xl p-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold text-sm sm:text-base">
                      🇮🇳 MBBS India
                    </span>
                    <span className="text-[10px] sm:text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-semibold shrink-0">
                      NEET 2026
                    </span>
                  </div>

                  {/* Clickable section links */}
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      {
                        label: "NEET Counselling",
                        path: "/mbbs/india#eligibility",
                        icon: "📋",
                      },
                      {
                        label: "NRI MBBS Seats",
                        path: "/mbbs/india#nri-quota",
                        icon: "🌍",
                      },
                      {
                        label: "Top Govt Colleges",
                        path: "/mbbs/india#colleges",
                        icon: "🏫",
                      },
                      {
                        label: "Management Quota",
                        path: "/mbbs/india#govt-private",
                        icon: "🏛️",
                      },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        className="flex items-center gap-1.5 bg-white/8 hover:bg-white/20 border border-white/10 hover:border-white/25 rounded-xl px-2.5 py-2 text-blue-100 hover:text-white text-[11px] sm:text-xs font-medium transition-all"
                      >
                        <span className="text-sm leading-none shrink-0">
                          {item.icon}
                        </span>
                        <span className="leading-tight">{item.label}</span>
                      </Link>
                    ))}
                  </div>

                  <Link
                    to="/mbbs/india"
                    className="mt-auto inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 text-xs font-bold transition-colors"
                  >
                    View Full Details <FiArrowRight size={12} />
                  </Link>
                </div>

                {/* MBBS Abroad sub-card */}
                <div className="bg-white/10 border border-white/15 backdrop-blur rounded-2xl p-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold text-sm sm:text-base">
                      🌏 MBBS Abroad
                    </span>
                    <span className="text-[10px] sm:text-xs bg-blue-500/30 text-blue-200 px-2 py-0.5 rounded-full font-semibold shrink-0">
                      10+ Countries
                    </span>
                  </div>

                  {/* Clickable country tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { name: "Russia", path: "/mbbs/russia" },
                      { name: "Georgia", path: "/mbbs/georgia" },
                      { name: "Uzbekistan", path: "/mbbs/uzbekistan" },
                      { name: "Kazakhstan", path: "/mbbs/kazakhstan" },
                      { name: "Germany", path: "/mbbs/germany" },
                      { name: "Nepal", path: "/mbbs/nepal" },
                      { name: "Kyrgyzstan", path: "/mbbs/kyrgyzstan" },
                      { name: "Tajikistan", path: "/mbbs/tajikistan" },
                    ].map((c) => (
                      <Link
                        key={c.name}
                        to={c.path}
                        className="text-[10px] sm:text-xs bg-white/10 hover:bg-amber-500/20 text-blue-100 hover:text-amber-200 px-2 py-1 rounded-lg border border-white/10 hover:border-amber-400/30 font-medium transition-all"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>

                  <Link
                    to="/mbbs/abroad"
                    className="mt-auto inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 text-xs font-bold transition-colors"
                  >
                    Explore All Countries <FiArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Stat strip */}
              <div className="flex flex-wrap gap-4 sm:gap-8 mt-5 pt-4 border-t border-white/10">
                {[
                  ["70+", "Universities"],
                  ["4000+", "Students"],
                  ["98%", "Success Rate"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <p className="text-white font-bold text-base sm:text-lg">
                      {n}
                    </p>
                    <p className="text-blue-300 text-[11px]">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* === CARD 2: Healthcare Jobs === */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative bg-white border-2 border-slate-100 hover:border-amber-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600" />
            <div className="p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  🏥
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-800 text-xl leading-tight">
                    Healthcare Jobs
                  </h3>
                  <p className="text-slate-500 text-xs">Abroad Placements</p>
                </div>
              </div>

              <div className="space-y-3 mb-5">
                <Link
                  to="/healthcare/uae"
                  className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-amber-50 border border-slate-100 hover:border-amber-200 rounded-xl transition-all group/item"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-slate-800 text-sm">
                      UAE Healthcare
                    </p>
                    <p className="text-slate-500 text-xs">
                      Nursing · Doctors · Allied Health
                    </p>
                  </div>
                  <FiArrowRight
                    className="text-amber-500 opacity-0 group-hover/item:opacity-100 transition-opacity flex-shrink-0"
                    size={14}
                  />
                </Link>
                <Link
                  to="/healthcare/germany"
                  className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 rounded-xl transition-all group/item"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-slate-800 text-sm">
                      Germany Healthcare
                    </p>
                    <p className="text-slate-500 text-xs">
                      Nursing · Elderly Care · Physio
                    </p>
                  </div>
                  <FiArrowRight
                    className="text-blue-500 opacity-0 group-hover/item:opacity-100 transition-opacity flex-shrink-0"
                    size={14}
                  />
                </Link>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 flex-wrap">
                <FiHeart size={12} className="text-amber-500 flex-shrink-0" />
                <span>Direct employer connections · Visa support</span>
              </div>
            </div>
          </motion.div>

          {/* === CARD 3: Germany Study & Work === */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="relative bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/5 rounded-full" />
            <div className="absolute top-0 left-0 w-20 h-20 bg-amber-500/10 rounded-full blur-2xl" />

            <div className="relative z-10 p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-5">
                <div>
                  <h3 className="font-extrabold text-white text-xl leading-tight">
                    Germany
                  </h3>
                  <p className="text-blue-200 text-xs">
                    Study, Work &amp; Settle
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-5">
                {[
                  {
                    icon: "🎓",
                    label: "Free Bachelors",
                    sub: "& Masters",
                    link: "/study-abroad/germany",
                  },
                  {
                    icon: "🔧",
                    label: "Ausbildung",
                    sub: "Vocational",
                    link: "/ausbildung",
                  },
                  {
                    icon: "💳",
                    label: "Opportunity",
                    sub: "Card Visa",
                    link: "/study-abroad/germany",
                  },
                  {
                    icon: "💼",
                    label: "Other Jobs",
                    sub: "All sectors",
                    link: "/healthcare/germany",
                  },
                ].map((item) => (
                  <Link
                    key={item.label}
                    to={item.link}
                    className="bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/25 rounded-xl p-2.5 transition-all"
                  >
                    <span className="text-lg block mb-1">{item.icon}</span>
                    <p className="text-white text-xs font-semibold leading-tight">
                      {item.label}
                    </p>
                    <p className="text-blue-300 text-[10px]">{item.sub}</p>
                  </Link>
                ))}
              </div>

              <Link
                to="/study-abroad/germany"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold rounded-xl transition-all"
              >
                Explore Germany <FiGlobe size={14} />
              </Link>
            </div>
          </motion.div>

          {/* === CARD 4: Low Budget Countries === */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white border-2 border-slate-100 hover:border-blue-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="p-5 sm:p-6">
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold mb-3">
                  💰 Budget-Friendly
                </span>
                <h3 className="font-extrabold text-slate-800 text-xl">
                  Low Budget
                </h3>
                <p className="text-slate-500 text-sm">
                  High ROI Study Destinations
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {["Cyprus", "Mauritius", "Singapore"].map((name) => (
                  <Link
                    key={name}
                    to={`/study-abroad/${name.toLowerCase()}`}
                    className="flex items-center gap-2 p-2.5 bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 rounded-xl transition-all group/item"
                  >
                    <span className="text-slate-700 text-sm font-semibold group-hover/item:text-blue-700 transition-colors">
                      {name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* === CARD 5: Ausbildung + German Language === */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-col gap-4"
          >
            {/* Ausbildung */}
            <div className="flex-1 bg-white border-2 border-slate-100 hover:border-blue-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 px-5 py-4 flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-white text-lg">
                    Ausbildung
                  </h3>
                  <p className="text-blue-200 text-xs">
                    Earn & Learn in Germany
                  </p>
                </div>
                <span className="text-3xl">🔧</span>
              </div>
              <div className="p-4 sm:p-5">
                {/* Key stats */}
                <div className="grid grid-cols-3 gap-1.5 mb-3">
                  {[
                    { val: "€1,300", label: "/month" },
                    { val: "85%", label: "Placement" },
                    { val: "Zero", label: "Tuition" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="bg-blue-50 rounded-lg px-2 py-1.5 text-center"
                    >
                      <p className="text-blue-800 font-bold text-xs">{s.val}</p>
                      <p className="text-blue-500 text-[9px]">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Job Sectors */}
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Top Sectors
                </p>
                <div className="grid grid-cols-2 gap-1.5 mb-3">
                  {[
                    { icon: "🏥", name: "Healthcare", sub: "€3.2-4.5K" },
                    { icon: "💻", name: "IT & Software", sub: "€3.5-5K" },
                    { icon: "⚙️", name: "Engineering", sub: "€3-4.2K" },
                    { icon: "🏨", name: "Hospitality", sub: "€2.5-3.5K" },
                    { icon: "🚚", name: "Logistics", sub: "€2.8-3.8K" },
                    { icon: "💼", name: "Business", sub: "€2.8-4K" },
                  ].map((sector) => (
                    <Link
                      key={sector.name}
                      to="/ausbildung"
                      className="flex items-center gap-1.5 p-1.5 bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 rounded-lg transition-all group/item"
                    >
                      <span className="text-sm leading-none shrink-0">
                        {sector.icon}
                      </span>
                      <div className="min-w-0">
                        <p className="text-slate-700 text-[11px] font-semibold leading-tight group-hover/item:text-blue-700 transition-colors truncate">
                          {sector.name}
                        </p>
                        <p className="text-slate-400 text-[9px]">
                          {sector.sub}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                <Link
                  to="/ausbildung"
                  className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 bg-blue-700 text-white rounded-full text-sm font-bold hover:bg-blue-800 transition-colors"
                >
                  Explore Ausbildung <FiArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* German Language */}
            <div className="flex-1 bg-white border-2 border-slate-100 hover:border-amber-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-4 flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-white text-lg">
                    German Language
                  </h3>
                  <p className="text-amber-100 text-xs">
                    School &amp; Coaching
                  </p>
                </div>
                <span className="text-3xl">📚</span>
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex gap-2 mb-4">
                  <Link
                    to="/coaching"
                    className="flex-1 flex flex-col items-center gap-1.5 p-3 bg-slate-50 hover:bg-amber-50 border border-slate-100 hover:border-amber-200 rounded-xl transition-all"
                  >
                    <FiBook className="text-amber-500 text-xl" />
                    <span className="text-slate-700 text-xs font-bold">
                      Offline
                    </span>
                  </Link>
                  <Link
                    to="/coaching"
                    className="flex-1 flex flex-col items-center gap-1.5 p-3 bg-slate-50 hover:bg-amber-50 border border-slate-100 hover:border-amber-200 rounded-xl transition-all"
                  >
                    <FiMonitor className="text-amber-500 text-xl" />
                    <span className="text-slate-700 text-xs font-bold">
                      Online
                    </span>
                  </Link>
                </div>
                <Link
                  to="/coaching"
                  className="inline-flex items-center gap-2 w-full justify-center py-2 bg-amber-500 text-white rounded-full text-sm font-bold hover:bg-amber-600 transition-colors"
                >
                  Book Free Demo <FiStar size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 sm:mt-10 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-center sm:text-left">
            <p className="text-white font-bold text-lg sm:text-xl">
              Not sure which path is right for you?
            </p>
            <p className="text-blue-300 text-sm">
              Get a free profile evaluation from our experts in 24 hours.
            </p>
          </div>
          <Link
            to="/eligibility-check"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-amber-500/25 text-sm sm:text-base whitespace-nowrap"
          >
            Free Eligibility Check <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
