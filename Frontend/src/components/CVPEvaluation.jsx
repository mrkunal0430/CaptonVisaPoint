import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animate, useInView } from "framer-motion";

const SAMPLE_SCORE = 78;
const RADIUS = 24;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// Compact "CVP Evaluation System" badge shown beside the hero CTA buttons
const CVPEvaluation = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, SAMPLE_SCORE, {
      duration: 1.2,
      delay: 0.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView]);

  return (
    <Link
      ref={ref}
      to="/eligibility-check"
      className="group flex items-center gap-4 sm:gap-5 shrink-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
      aria-label="CVP Evaluation System — see your eligibility score"
    >
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0">
        <svg viewBox="0 0 60 60" className="w-full h-full -rotate-90">
          <circle
            cx="30"
            cy="30"
            r={RADIUS}
            fill="none"
            strokeWidth="5"
            className="stroke-slate-100"
          />
          <circle
            cx="30"
            cy="30"
            r={RADIUS}
            fill="none"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE * (1 - display / 100)}
            className="stroke-amber-500"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
          {display}
        </span>
      </div>
      <div className="leading-tight text-left max-w-[17rem] sm:max-w-[19rem] xl:max-w-[17rem]">
        <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          CVP Evaluation System
        </p>
        <p className="text-xl sm:text-2xl xl:text-xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors mt-1">
          Where can you go? See your score first
          <span className="text-amber-500">.</span>
        </p>
        <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
          Free · 60 seconds · Instant score
        </p>
      </div>
    </Link>
  );
};

export default CVPEvaluation;
