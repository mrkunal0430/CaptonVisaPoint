export const NAV_LINKS = [
  {
    name: "MBBS",
    path: "/mbbs",
    type: "mega",
    columns: [
      {
        title: "MBBS Abroad",
        path: "/mbbs/abroad",
        items: [
          { name: "Russia",     path: "/mbbs/russia",      flagCode: "ru" },
          { name: "Georgia",    path: "/mbbs/georgia",     flagCode: "ge" },
          { name: "Uzbekistan", path: "/mbbs/uzbekistan",  flagCode: "uz" },
          { name: "Kazakhstan", path: "/mbbs/kazakhstan",  flagCode: "kz" },
          { name: "Germany",    path: "/mbbs/germany",     flagCode: "de" },
          { name: "Nepal",      path: "/mbbs/nepal",       flagCode: "np" },
          { name: "Italy",      path: "/mbbs/italy",       flagCode: "it" },
          { name: "Bangladesh", path: "/mbbs/bangladesh",  flagCode: "bd" },
          { name: "Barbados",   path: "/mbbs/barbados",    flagCode: "bb" },
          { name: "Kyrgyzstan", path: "/mbbs/kyrgyzstan",  flagCode: "kg" },
          { name: "Tajikistan", path: "/mbbs/tajikistan",  flagCode: "tj" },
        ],
      },
      {
        title: "MBBS India",
        path: "/mbbs/india",
        items: [
          { name: "Govt vs Private",  path: "/mbbs/india#govt-private", flag: "🏛️" },
          { name: "Top Colleges",     path: "/mbbs/india#colleges",     flag: "🏫" },
          { name: "NEET Eligibility", path: "/mbbs/india#eligibility",  flag: "✅" },
          { name: "State-wise Seats", path: "/mbbs/india#state-seats",  flag: "📊" },
          { name: "NRI MBBS Seats",   path: "/mbbs/india#nri-quota",    flag: "🌍" },
        ],
      },
    ],
  },
  {
    name: "Study Abroad",
    path: "/study-abroad",
    type: "mega",
    columns: [
      {
        title: "Premier Destinations",
        path: "/study-abroad",
        items: [
          { name: "Germany",              path: "/study-abroad/germany",     flagCode: "de" },
          { name: "Cyprus",               path: "/study-abroad/cyprus",      flagCode: "cy" },
          { name: "France",               path: "/study-abroad/france",      flagCode: "fr" },
          { name: "United Arab Emirates", path: "/study-abroad/uae",         flagCode: "ae" },
          { name: "Mauritius",            path: "/study-abroad/mauritius",   flagCode: "mu" },
          { name: "Singapore",            path: "/study-abroad/singapore",   flagCode: "sg" },
        ],
      },
      {
        title: "More Countries",
        path: "/study-abroad",
        items: [
          { name: "United Kingdom", path: "/study-abroad/uk",          flagCode: "gb" },
          { name: "United States",  path: "/study-abroad/usa",         flagCode: "us" },
          { name: "Canada",         path: "/study-abroad/canada",      flagCode: "ca" },
          { name: "Australia",      path: "/study-abroad/australia",   flagCode: "au" },
          { name: "New Zealand",    path: "/study-abroad/new-zealand", flagCode: "nz" },
          { name: "Denmark",        path: "/study-abroad/denmark",     flagCode: "dk" },
          { name: "Finland",        path: "/study-abroad/finland",     flagCode: "fi" },
        ],
      },
    ],
  },
  { name: "Coaching",   path: "/coaching" },
  { name: "Ausbildung", path: "/ausbildung" },
  {
    name: "Job Abroad",
    path: "/healthcare",
    type: "mega",
    columns: [
      { title: "UAE Healthcare",     path: "/healthcare/uae" },
      { title: "Germany Healthcare", path: "/healthcare/germany" },
    ],
  },
  { name: "About", path: "/about" },
];
