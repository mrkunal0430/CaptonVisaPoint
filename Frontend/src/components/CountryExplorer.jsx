import React, { useId } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  explorerGroups,
  capitalPhoto,
  hasCapitalPhoto,
  photoCredits,
} from "../data/countryExplorerData";

const badgeTone = {
  blue: "bg-blue-50 border-blue-100",
  amber: "bg-amber-50 border-amber-500/30",
  navy: "bg-[#0A1628] border-[#0A1628] text-white",
};

const ruleTone = {
  blue: "bg-gradient-to-r from-blue-700 to-blue-100",
  amber: "bg-gradient-to-r from-amber-500 to-amber-50",
  navy: "bg-gradient-to-r from-[#0A1628] to-slate-200",
};

/**
 * The flag, clipped to a gentle double-curve so it reads as cloth rather than
 * a rectangle, then skewed on a loop by the cvpWave keyframes.
 */
const WavyFlag = ({ code, delay }) => {
  const clipId = useId().replace(/:/g, "");
  if (!code) return null;
  return (
    <svg
      viewBox="0 0 60 40"
      aria-hidden="true"
      className="absolute top-3 right-[13px] z-[3] w-[50px] h-[34px] origin-left animate-[cvpWave_5.5s_ease-in-out_infinite]"
      style={{
        filter:
          "drop-shadow(0 0 1.5px rgba(255,255,255,.85)) drop-shadow(0 3px 7px rgba(0,0,0,.55))",
        animationDelay: `${delay}s`,
      }}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M0 5C10 0 20 0 30 5s20 5 30 0v30c-10 5-20 5-30 0s-20-5-30 0z" />
        </clipPath>
      </defs>
      <image
        href={`https://flagcdn.com/w320/${code}.png`}
        x="0"
        y="0"
        width="60"
        height="40"
        preserveAspectRatio="xMidYMid slice"
        clipPath={`url(#${clipId})`}
      />
    </svg>
  );
};

/** Line-art globe, shown on the "Other Destinations" card which has no photo. */
const GlobeArt = () => (
  <svg
    viewBox="0 0 120 76"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="absolute left-1/2 bottom-5 z-[2] h-auto w-[150px] -translate-x-1/2 text-amber-400 transition-transform duration-[350ms] group-hover:-translate-y-[5px] group-hover:scale-105"
    style={{ transformOrigin: "center" }}
  >
    <path d="M8 68h104" />
    <circle cx="56" cy="38" r="22" />
    <path d="M34 38h44M56 16c8 7 8 37 0 44M56 16c-8 7-8 37 0 44" />
    <path d="M84 22a7 7 0 1 1 14 0c0 6-7 12-7 12s-7-6-7-12z" />
    <circle cx="91" cy="22" r="2.4" />
  </svg>
);

/**
 * Used where we hold no capital photograph: the flag sits large and softened
 * on the navy scene so the card still reads as that country, not as a gap.
 */
const FlagCrest = ({ code }) => (
  <span className="absolute inset-0 grid place-items-center">
    <img
      src={`https://flagcdn.com/w320/${code}.png`}
      alt=""
      loading="lazy"
      aria-hidden="true"
      className="h-full w-full scale-110 object-cover opacity-25 blur-[2px]"
    />
    <img
      src={`https://flagcdn.com/w320/${code}.png`}
      alt=""
      loading="lazy"
      aria-hidden="true"
      className="absolute h-[52px] w-[78px] rounded-md object-cover shadow-[0_6px_18px_rgba(0,0,0,.5)] ring-1 ring-white/40 transition-transform duration-[550ms] group-hover:scale-105"
    />
  </span>
);

const CountryCard = ({ country, index, selected, onToggle }) => {
  const { code, capital, name, sub, slug } = country;

  const inner = (
    <>
      {/* selection chip — stops navigation so the card can be picked without leaving */}
      <span
        role="checkbox"
        tabIndex={0}
        aria-checked={selected}
        aria-label={`Add ${name} to my assessment`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onToggle(name);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            e.stopPropagation();
            onToggle(name);
          }
        }}
        className={`absolute top-3 left-[13px] z-[5] cursor-pointer rounded-full px-[11px] py-[5px] text-[11px] font-extrabold tracking-[0.04em] shadow-[0_1px_3px_rgba(10,22,40,.06)] transition-colors ${
          selected
            ? "bg-amber-500 text-[#0A1628]"
            : "bg-white/[0.93] text-blue-800 hover:bg-white"
        }`}
      >
        {selected ? "✓ Added" : "+ Add"}
      </span>

      <span className="relative block h-[132px] shrink-0 overflow-hidden bg-[linear-gradient(168deg,#16295A_0%,#0F1F42_55%,#0A1628_100%)]">
        {!code ? (
          <GlobeArt />
        ) : hasCapitalPhoto(code) ? (
          <img
            src={capitalPhoto(code)}
            alt={`${capital}, ${name}`}
            loading="lazy"
            width={760}
            height={380}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[550ms] group-hover:scale-[1.07]"
          />
        ) : (
          <FlagCrest code={code} />
        )}

        {/* keeps the capital name and flag legible over any photograph */}
        <span
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg,rgba(10,22,40,.20) 0%,rgba(10,22,40,0) 34%,rgba(10,22,40,.50) 74%,rgba(10,22,40,.90) 100%)",
          }}
        />

        <WavyFlag code={code} delay={-1.8 * (index % 3)} />

        <span className="absolute bottom-2.5 left-[15px] z-[3] text-[10.5px] font-extrabold uppercase tracking-[0.15em] text-amber-400 [text-shadow:0_1px_5px_rgba(0,0,0,.65)]">
          {capital}
        </span>
      </span>

      <span className="block flex-1 px-4 pt-[15px]">
        <span className="block text-[16.5px] font-extrabold leading-tight tracking-[-0.032em] text-[#0A1628]">
          {name}
        </span>
        <span className="mt-[5px] block text-[13.5px] font-medium leading-[1.48] text-slate-600">
          {sub}
        </span>
      </span>
    </>
  );

  const shell = `group relative flex h-full w-full flex-col overflow-hidden rounded-[18px] border-[1.5px] bg-white pb-[17px] text-left transition-all duration-300 hover:-translate-y-[7px] hover:border-blue-600 hover:shadow-[0_12px_32px_rgba(10,22,40,.10)] ${
    selected
      ? "border-amber-500 shadow-[0_0_0_3px_rgba(245,158,11,.18)]"
      : "border-slate-200"
  }`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
      className={index % 2 === 1 ? "lg:mt-[22px]" : ""}
    >
      {slug ? (
        <Link to={`/study-abroad/${slug}`} className={shell}>
          {inner}
        </Link>
      ) : (
        // no detail page for this country yet — the card selects instead
        <button
          type="button"
          onClick={() => onToggle(name)}
          aria-pressed={selected}
          className={shell}
        >
          {inner}
        </button>
      )}
    </motion.div>
  );
};

const CountryExplorer = ({ selected = [], onToggle = () => {} }) => (
  <>
    {explorerGroups.map((group) => (
      <div key={group.id} className="mb-[52px]">
        <div className="mb-5 flex items-center gap-4">
          <div
            className={`grid h-[52px] w-[52px] shrink-0 place-items-center rounded-[14px] border text-2xl ${
              badgeTone[group.badgeTone]
            }`}
          >
            {group.badge}
          </div>
          <div>
            <h3 className="mb-[3px] text-[21px] font-extrabold leading-tight tracking-[-0.03em]">
              {group.title}
            </h3>
            <p className="m-0 text-[14.5px] leading-[1.45] text-slate-500">
              {group.lede}
            </p>
          </div>
        </div>
        <div
          className={`mb-5 h-[3px] rounded-[3px] ${ruleTone[group.badgeTone]}`}
        />

        <div className="mb-[26px] grid grid-cols-[repeat(auto-fill,minmax(238px,1fr))] gap-[18px]">
          {group.countries.map((country, i) => (
            <CountryCard
              key={country.name}
              country={country}
              index={i}
              selected={selected.includes(country.name)}
              onToggle={onToggle}
            />
          ))}
        </div>

        <a
          href="#consultation-form"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-[26px] py-[15px] text-[15.5px] font-bold tracking-[-0.01em] text-white shadow-[0_8px_22px_rgba(29,78,216,.24)] transition-all hover:-translate-y-0.5 hover:bg-blue-800"
        >
          {group.cta}
        </a>
      </div>
    ))}

    <p className="mt-6 rounded-r-lg border-l-[3px] border-amber-500 bg-amber-50 px-[18px] py-3.5 text-[13.5px] leading-[1.6] text-slate-600">
      Course availability, tuition, living costs, entry requirements, visa rules
      and career outcomes differ by country, university, programme and
      individual profile, and they change between intakes. Nothing here is an
      offer of admission or an indication of a visa outcome.
    </p>

    <p className="mt-3 text-[11.5px] leading-[1.55] text-slate-400">
      {photoCredits}
    </p>
  </>
);

export default CountryExplorer;
