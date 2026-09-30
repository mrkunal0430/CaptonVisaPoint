/**
 * Country Explorer groups — mirrors the reference landing page's three-tier
 * split (high-demand / low & zero-tuition Europe / smaller budgets).
 *
 * `code`  — ISO 3166-1 alpha-2, used for the flag and the capital photo in
 *           /public/capitals/<code>.webp
 * `slug`  — study-abroad detail route, when we have a page for that country.
 *           Cards without a slug are picker-only (no detail page yet).
 */

export const explorerGroups = [
  {
    id: "high",
    badge: "🌎",
    badgeTone: "blue",
    title: "High-demand global destinations",
    lede: "The names everyone knows — deepest course choice, longest work rights, biggest budget",
    cta: "See if I qualify for these",
    countries: [
      {
        code: "gb",
        capital: "London",
        name: "United Kingdom",
        sub: "A master’s done in twelve months",
        slug: "uk",
      },
      {
        code: "us",
        capital: "Washington DC",
        name: "United States",
        sub: "The widest course catalogue on earth",
        slug: "usa",
      },
      {
        code: "ca",
        capital: "Ottawa",
        name: "Canada",
        sub: "Built around the job after the degree",
        slug: "canada",
      },
      {
        code: "au",
        capital: "Canberra",
        name: "Australia",
        sub: "February and July starts, not just September",
        slug: "australia",
      },
      {
        code: "nz",
        capital: "Wellington",
        name: "New Zealand",
        sub: "Smaller intakes, gentler pace, English throughout",
        slug: "new-zealand",
      },
    ],
  },
  {
    id: "low",
    badge: "🎓",
    badgeTone: "amber",
    title: "Low and zero-tuition Europe",
    lede: "Public universities where the fee is small or nil, and living costs are the real budget",
    cta: "Show me the low-fee route",
    countries: [
      {
        code: "de",
        capital: "Berlin",
        name: "Germany",
        sub: "Public universities charge no tuition",
        slug: "germany",
      },
      {
        code: "it",
        capital: "Rome",
        name: "Italy",
        sub: "Grants that cover fees, a room and meals",
      },
      {
        code: "at",
        capital: "Vienna",
        name: "Austria",
        sub: "One flat public fee for everyone",
      },
      {
        code: "pl",
        capital: "Warsaw",
        name: "Poland",
        sub: "English-taught degrees at a modest price",
      },
      {
        code: "gr",
        capital: "Athens",
        name: "Greece",
        sub: "Where your money goes furthest",
      },
      {
        code: "mt",
        capital: "Valletta",
        name: "Malta",
        sub: "An EU degree, in English, in the Med",
      },
      {
        code: "lv",
        capital: "Riga",
        name: "Latvia",
        sub: "Small EU nation, small price tag",
      },
      {
        code: "cy",
        capital: "Nicosia",
        name: "Cyprus",
        sub: "European education in the Mediterranean",
        slug: "cyprus",
      },
      {
        code: "fr",
        capital: "Paris",
        name: "France",
        sub: "Excellence in arts, sciences and innovation",
        slug: "france",
      },
      {
        code: "dk",
        capital: "Copenhagen",
        name: "Denmark",
        sub: "Happy nation, innovative education",
        slug: "denmark",
      },
      {
        code: "fi",
        capital: "Helsinki",
        name: "Finland",
        sub: "One of the world’s strongest education systems",
        slug: "finland",
      },
    ],
  },
  {
    id: "roi",
    badge: "💰",
    badgeTone: "navy",
    title: "Smaller budgets, solid returns",
    lede: "Lower total outlay, faster admission decisions, recognised qualifications",
    cta: "Match a country to my budget",
    countries: [
      {
        code: "ru",
        capital: "Moscow",
        name: "Russia",
        sub: "The long-standing low-cost route, MBBS included",
      },
      {
        code: "mu",
        capital: "Port Louis",
        name: "Mauritius",
        sub: "English-medium, three hours from home",
        slug: "mauritius",
      },
      {
        code: "sg",
        capital: "Singapore",
        name: "Singapore",
        sub: "Asia’s business hub on your doorstep",
        slug: "singapore",
      },
      {
        code: "ae",
        capital: "Abu Dhabi",
        name: "United Arab Emirates",
        sub: "Global education hub, three hours away",
        slug: "uae",
      },
      {
        code: "",
        capital: "Anywhere else",
        name: "Other Destinations",
        sub: "Name a country and we will check its rules",
      },
    ],
  },
];

/**
 * Capital-landmark photographs we actually hold (extracted from the reference
 * design). Countries outside this set fall back to a flag-on-navy treatment.
 */
const WITH_PHOTO = new Set([
  "gb", "us", "ca", "au", "nz",
  "de", "it", "at", "pl", "gr", "mt", "lv",
  "ru", "mu", "sg",
]);

export const hasCapitalPhoto = (code) => WITH_PHOTO.has(code);
export const capitalPhoto = (code) => `/capitals/${code}.webp`;

/** Flat CC-BY attribution for the capital photographs (Wikimedia Commons). */
export const photoCredits =
  "Landmark photographs via Wikimedia Commons — London © Christian David (CC BY-SA 4.0); Washington DC © Noclip (Public domain); Ottawa © Wladyslaw (CC BY-SA 3.0); Canberra © Thennicke (CC BY-SA 4.0); Wellington © Ulrich Lange, Bochum, Germany (CC BY-SA 3.0); Berlin © Thomas Wolf, www.foto-tw.de (CC BY-SA 3.0); Rome © FeaturedPics (CC BY-SA 4.0); Vienna © C.Stadler/Bwag (CC BY-SA 4.0); Warsaw © Adrian Grycuk (CC BY-SA 3.0 pl); Athens © Steve Swayne (CC BY 2.0); Valletta © Mandyy88 (CC BY-SA 4.0); Riga © Diliff (CC BY-SA 3.0); Moscow © (WT-shared) Moscow City Guide at wts wikivoyage (Public domain); Port Louis © Thierry (CC BY-SA 3.0); Singapore © Supanut Arunoprayote (CC BY 4.0).";
