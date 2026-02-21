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
          { name: "Russia",     path: "/mbbs/russia" },
          { name: "Georgia",    path: "/mbbs/georgia" },
          { name: "Uzbekistan", path: "/mbbs/uzbekistan" },
          { name: "Kazakhstan", path: "/mbbs/kazakhstan" },
          { name: "Germany",    path: "/mbbs/germany" },
          { name: "Nepal",      path: "/mbbs/nepal" },
          { name: "Italy",      path: "/mbbs/italy" },
          { name: "Bangladesh", path: "/mbbs/bangladesh" },
          { name: "Barbados",   path: "/mbbs/barbados" },
          { name: "Kyrgyzstan", path: "/mbbs/kyrgyzstan" },
          { name: "Tajikistan", path: "/mbbs/tajikistan" },
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
          { name: "Germany",              path: "/study-abroad/germany" },
          { name: "Cyprus",               path: "/study-abroad/cyprus" },
          { name: "France",               path: "/study-abroad/france" },
          { name: "United Arab Emirates", path: "/study-abroad/uae" },
          { name: "Mauritius",            path: "/study-abroad/mauritius" },
          { name: "Singapore",            path: "/study-abroad/singapore" },
        ],
      },
      {
        title: "More Countries",
        path: "/study-abroad",
        items: [
          { name: "United Kingdom", path: "/study-abroad/uk" },
          { name: "United States",  path: "/study-abroad/usa" },
          { name: "Canada",         path: "/study-abroad/canada" },
          { name: "Australia",      path: "/study-abroad/australia" },
          { name: "New Zealand",    path: "/study-abroad/new-zealand" },
          { name: "Denmark",        path: "/study-abroad/denmark" },
          { name: "Finland",        path: "/study-abroad/finland" },
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
