import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiZap } from "react-icons/fi";

// Y-Axis style split bands: solid colour panel + full-bleed image, alternating sides
const bands = [
  {
    id: "mbbs",
    eyebrow: "Medical Education",
    title: "MBBS in India & Abroad",
    subtitle: "NEET counselling, NRI seats & 70+ partner universities in 10+ countries.",
    image: "/mbbs-assets/Mbbs_hero_BANNER.webp",
    imagePosition: "object-[60%_center]",
    panel: "bg-blue-900",
    stats: [
      ["70+", "Universities"],
      ["4000+", "Students"],
      ["98%", "Success Rate"],
    ],
    links: [
      { label: "MBBS India", path: "/mbbs/india" },
      { label: "NRI Quota", path: "/mbbs/india#nri-quota" },
      { label: "Russia", path: "/mbbs/russia" },
      { label: "Georgia", path: "/mbbs/georgia" },
      { label: "Uzbekistan", path: "/mbbs/uzbekistan" },
      { label: "Kazakhstan", path: "/mbbs/kazakhstan" },
      { label: "Nepal", path: "/mbbs/nepal" },
      { label: "Kyrgyzstan", path: "/mbbs/kyrgyzstan" },
    ],
    cta: { label: "Explore All Countries", path: "/mbbs/abroad" },
  },
  {
    id: "healthcare",
    eyebrow: "Abroad Placements",
    title: "Healthcare Jobs Abroad",
    subtitle: "Nursing, doctors, allied health & elderly care — direct employer connections with full visa support.",
    image: "/Home_Hero/6.webp",
    imagePosition: "object-[center_25%]",
    panel: "bg-blue-800",
    links: [
      { label: "UAE Healthcare", path: "/healthcare/uae" },
      { label: "Germany Healthcare", path: "/healthcare/germany" },
    ],
    cta: { label: "Free Consultation", path: "/contact" },
  },
  {
    id: "germany",
    eyebrow: "Study, Work & Settle",
    title: "Germany",
    subtitle: "Tuition-free degrees, paid Ausbildung (€1,300/month) and the Opportunity Card visa.",
    image: "/capitals/de.webp",
    imagePosition: "object-center",
    panel: "bg-slate-800",
    links: [
      { label: "Free Bachelors & Masters", path: "/study-abroad/germany" },
      { label: "Ausbildung", path: "/ausbildung" },
      { label: "Opportunity Card", path: "/study-abroad/germany" },
      { label: "Other Jobs", path: "/healthcare/germany" },
    ],
    cta: { label: "Explore Germany", path: "/study-abroad/germany" },
  },
  {
    id: "budget",
    eyebrow: "Budget-Friendly",
    title: "Low Budget, High ROI",
    subtitle: "Quality global degrees at a fraction of the cost — study where your money goes further.",
    image: "/capitals/mu.webp",
    imagePosition: "object-center",
    panel: "bg-blue-700",
    links: [
      { label: "Cyprus", path: "/study-abroad/cyprus" },
      { label: "Mauritius", path: "/study-abroad/mauritius" },
      { label: "Singapore", path: "/study-abroad/singapore" },
    ],
    cta: { label: "Check Eligibility", path: "/eligibility-check" },
  },
  {
    id: "coaching",
    eyebrow: "Language & Entrance Exams",
    title: "Test Prep Coaching",
    subtitle: "IELTS, PTE, TOEFL, GRE, GMAT & German — offline and online batches.",
    image: "/capitals/gb.webp",
    imagePosition: "object-center",
    panel: "bg-amber-600",
    accent: "bg-blue-900",
    links: [
      { label: "IELTS", path: "/coaching" },
      { label: "PTE", path: "/coaching" },
      { label: "TOEFL", path: "/coaching" },
      { label: "GRE / GMAT", path: "/coaching" },
      { label: "German", path: "/coaching" },
    ],
    cta: { label: "Book Free Demo", path: "/coaching" },
  },
];

const Band = ({ band, reverse }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="grid grid-cols-1 lg:grid-cols-2 bg-white shadow-sm overflow-hidden"
  >
    {/* Colour panel */}
    <div
      className={`relative ${band.panel} ${reverse ? "lg:order-2" : ""} px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16 flex flex-col justify-center min-h-0 lg:min-h-[420px]`}
    >
      {/* Accent bar on the seam (Y-Axis signature) */}
      <span
        aria-hidden="true"
        className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-3 h-2/5 ${
          band.accent || "bg-amber-500"
        } ${reverse ? "-left-1.5" : "-right-1.5"} z-10`}
      />

      <p className="text-white/70 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] mb-3">
        {band.eyebrow}
      </p>
      <h3 className="text-white text-3xl sm:text-4xl xl:text-[2.75rem] font-extrabold leading-tight tracking-tight">
        {band.title}
      </h3>
      <p className="text-white/90 text-sm sm:text-base font-medium mt-3 max-w-lg">
        {band.subtitle}
      </p>

      {band.stats && (
        <div className="flex flex-wrap gap-6 sm:gap-10 mt-5">
          {band.stats.map(([n, l]) => (
            <div key={l}>
              <p className="text-amber-400 font-extrabold text-xl sm:text-2xl leading-none">
                {n}
              </p>
              <p className="text-white/70 text-xs mt-1">{l}</p>
            </div>
          ))}
        </div>
      )}

      {/* Outlined square buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 mt-7 max-w-xl">
        {band.links.map((l) => (
          <Link
            key={l.label}
            to={l.path}
            className="flex items-center justify-center text-center min-h-[48px] px-3 py-2 border-2 border-white/90 text-white text-xs sm:text-sm font-semibold leading-tight hover:bg-white hover:text-slate-900 transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </div>

      <Link
        to={band.cta.path}
        className="group inline-flex items-center gap-2 mt-6 text-white font-bold text-sm sm:text-base underline-offset-4 hover:underline self-start"
      >
        {band.cta.label}
        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>

    {/* Image */}
    <div className="relative h-52 sm:h-72 lg:h-auto bg-slate-200">
      <img
        src={band.image}
        alt={band.title}
        loading="lazy"
        className={`absolute inset-0 w-full h-full object-cover ${band.imagePosition}`}
      />
    </div>
  </motion.div>
);

const ServicesShowcase = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
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

        {/* Split bands */}
        <div className="space-y-8 sm:space-y-12">
          {bands.map((band, i) => (
            <Band key={band.id} band={band} reverse={i % 2 === 1} />
          ))}
        </div>

        {/* Bottom CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 bg-blue-900 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-l-8 border-amber-500"
        >
          <div className="text-center sm:text-left">
            <p className="text-white font-bold text-lg sm:text-2xl">
              Not sure which path is right for you?
            </p>
            <p className="text-blue-200 text-sm mt-1">
              Get a free profile evaluation from our experts in 24 hours.
            </p>
          </div>
          <Link
            to="/eligibility-check"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold transition-colors text-sm sm:text-base whitespace-nowrap"
          >
            Free Eligibility Check <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
