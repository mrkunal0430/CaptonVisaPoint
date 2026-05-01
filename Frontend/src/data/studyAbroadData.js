// Study Abroad Data - Comprehensive country and university information
// Preferred Countries: Germany, Cyprus, France, UAE, Mauritius, Singapore
// Other Countries: UK, USA, Canada, Australia, New Zealand, Denmark, Finland

export const preferredCountries = [
  {
    id: "germany",
    name: "Germany",
    tagline: "World-Class Education, Zero Tuition",
    bannerImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1600",
    description: "Germany offers tuition-free education at public universities, world-renowned engineering and technology programs, and excellent post-study work opportunities.",
    seoTitle: "Study in Germany for Indian Students | Free Education",
    seoDescription: "Study in Germany with low or no tuition fees. Get admission guidance, visa support & Ausbildung opportunities.",
    seoKeywords: "study in Germany for Indian students, Germany student visa consultants India, Ausbildung in Germany for Indians, study in Germany without IELTS, free education in Germany, Germany universities admission, study abroad Germany consultants, Germany visa process India, German language requirement study, public universities Germany free",
    highlights: ["No Tuition Fees", "18-Month Post-Study Work Visa", "Strong Economy", "English Programs Available"],
    intakes: ["Winter (October)", "Summer (April)"],
    language: "German/English",
    universities: [
      {
        id: "tu-munich",
        name: "Technical University of Munich",
        location: "Munich, Bavaria",
        image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=800",
        courses: ["Engineering", "Computer Science", "Natural Sciences", "Medicine", "Architecture"],
        highlights: ["#1 in Germany", "QS World Ranking: Top 50", "Strong Industry Connections"],
        intakes: ["October", "April"],
        eligibility: "Bachelor's degree, IELTS 6.5+, German B2 for some programs"
      },
      {
        id: "lmu-munich",
        name: "Ludwig Maximilian University",
        location: "Munich, Bavaria",
        image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=800",
        courses: ["Law", "Business", "Medicine", "Humanities", "Sciences"],
        highlights: ["Founded 1472", "Nobel Prize Winners", "Research Excellence"],
        intakes: ["October", "April"],
        eligibility: "Bachelor's degree, Language proficiency required"
      },
      {
        id: "heidelberg",
        name: "Heidelberg University",
        location: "Heidelberg, Baden-Württemberg",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
        courses: ["Medicine", "Law", "Sciences", "Humanities", "Theology"],
        highlights: ["Germany's Oldest University", "UNESCO Heritage City", "Research Focused"],
        intakes: ["October", "April"],
        eligibility: "Bachelor's degree, German C1 for most programs"
      },
      {
        id: "rwth-aachen",
        name: "RWTH Aachen University",
        location: "Aachen, North Rhine-Westphalia",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
        courses: ["Mechanical Engineering", "Electrical Engineering", "Computer Science", "Physics"],
        highlights: ["Top Technical University", "Industry Partnerships", "Innovation Hub"],
        intakes: ["October", "April"],
        eligibility: "Bachelor's in related field, IELTS 6.5+"
      }
    ]
  },
  {
    id: "cyprus",
    name: "Cyprus",
    tagline: "European Education in the Mediterranean",
    bannerImage: "https://images.unsplash.com/photo-1580227974546-fbd48825d991?w=1600",
    description: "Cyprus offers quality European education with affordable living costs, English-taught programs, and an excellent Mediterranean climate.",
    seoTitle: "Study in Cyprus for Indian Students | Low Cost Study",
    seoDescription: "Study in Cyprus at affordable fees. Get admission guidance, visa support & top university options for Indian students.",
    seoKeywords: "study in Cyprus for Indian students, Cyprus student visa consultants, study abroad Cyprus universities, Cyprus university admission, low cost study in Cyprus, Cyprus visa process India, Cyprus education consultants, study in Cyprus without IELTS, Cyprus courses for Indian students, Cyprus study abroad consultants",
    highlights: ["EU Member State", "English Medium", "Affordable Living", "Safe Environment"],
    intakes: ["September", "February"],
    language: "English/Greek",
    universities: [
      {
        id: "university-cyprus",
        name: "University of Cyprus",
        location: "Nicosia",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
        courses: ["Engineering", "Sciences", "Economics", "Humanities", "Education"],
        highlights: ["Top Ranked in Cyprus", "Research Excellence", "Modern Campus"],
        intakes: ["September", "February"],
        eligibility: "High school diploma, IELTS 6.0+"
      },
      {
        id: "cyprus-tech",
        name: "Cyprus University of Technology",
        location: "Limassol",
        image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800",
        courses: ["Engineering", "Health Sciences", "Management", "Communication"],
        highlights: ["Modern Facilities", "Industry Focus", "Coastal Location"],
        intakes: ["September", "February"],
        eligibility: "High school diploma, English proficiency"
      },
      {
        id: "european-cyprus",
        name: "European University Cyprus",
        location: "Nicosia",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
        courses: ["Medicine", "Dentistry", "Business", "Law", "Arts"],
        highlights: ["Medical Programs", "International Faculty", "Career Services"],
        intakes: ["September", "February"],
        eligibility: "Varies by program, IELTS 6.0+"
      }
    ]
  },
  {
    id: "france",
    name: "France",
    tagline: "Excellence in Arts, Sciences & Innovation",
    bannerImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600",
    description: "France is home to world-class universities, prestigious grandes écoles, and offers affordable education with rich cultural experiences.",
    seoTitle: "Study in France for Indian Students | Fees & Visa",
    seoDescription: "Study in France with top universities. Get admission support, visa guidance & affordable study options for Indians.",
    seoKeywords: "study in France for Indian students, France student visa consultants, study abroad France universities, France university admission, low cost study in France, France visa process India, France education consultants, study in France without IELTS, France courses for Indian students, France study abroad consultants",
    highlights: ["Low Tuition Fees", "Post-Study Work Visa", "Cultural Hub", "Research Excellence"],
    intakes: ["September", "January"],
    language: "French/English",
    universities: [
      {
        id: "sorbonne",
        name: "Sorbonne University",
        location: "Paris",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
        courses: ["Humanities", "Sciences", "Medicine", "Engineering", "Law"],
        highlights: ["Founded 1257", "World Top 100", "Historic Campus"],
        intakes: ["September", "January"],
        eligibility: "Bachelor's degree, French B2 or English for specific programs"
      },
      {
        id: "psl",
        name: "PSL Research University",
        location: "Paris",
        image: "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=800",
        courses: ["Sciences", "Arts", "Engineering", "Economics", "Humanities"],
        highlights: ["QS Top 30", "Multi-Institution", "Nobel Laureates"],
        intakes: ["September"],
        eligibility: "Varies by institution, competitive admission"
      },
      {
        id: "ecole-polytechnique",
        name: "École Polytechnique",
        location: "Palaiseau, Paris Region",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
        courses: ["Engineering", "Science", "Economics", "Computer Science"],
        highlights: ["Top Engineering School", "Elite Institution", "Strong Alumni Network"],
        intakes: ["September"],
        eligibility: "Competitive entrance exams, strong academic background"
      }
    ]
  },
  {
    id: "uae",
    name: "United Arab Emirates",
    tagline: "Global Education Hub of the Middle East",
    bannerImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600",
    description: "UAE offers world-class education with international branch campuses, modern infrastructure, and excellent career opportunities.",
    seoTitle: "Study in UAE for Indian Students | Dubai Universities",
    seoDescription: "Study in UAE with top universities in Dubai. Get admission help, visa support & affordable study options.",
    seoKeywords: "study in UAE for Indian students, Dubai student visa consultants, study abroad UAE universities, UAE university admission, low cost study in Dubai, UAE visa process India, Dubai education consultants, study in UAE without IELTS, UAE courses for Indian students, Dubai study abroad consultants",
    highlights: ["Tax-Free Income", "International Campuses", "Modern Infrastructure", "Career Opportunities"],
    intakes: ["September", "January", "May"],
    language: "English/Arabic",
    universities: [
      {
        id: "uae-university",
        name: "United Arab Emirates University",
        location: "Al Ain",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
        courses: ["Engineering", "Business", "Medicine", "Sciences", "Law"],
        highlights: ["Top UAE University", "Research Focus", "Government Funded"],
        intakes: ["September", "January"],
        eligibility: "High school diploma, IELTS 5.0-6.0"
      },
      {
        id: "aus",
        name: "American University of Sharjah",
        location: "Sharjah",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
        courses: ["Architecture", "Engineering", "Business", "Arts & Sciences"],
        highlights: ["American Curriculum", "Beautiful Campus", "Diverse Community"],
        intakes: ["Fall", "Spring"],
        eligibility: "High school diploma, SAT/ACT, IELTS/TOEFL"
      },
      {
        id: "khalifa",
        name: "Khalifa University",
        location: "Abu Dhabi",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
        courses: ["Engineering", "Science", "Medicine", "Nuclear Engineering"],
        highlights: ["Research Intensive", "Scholarships Available", "Industry Links"],
        intakes: ["September", "January"],
        eligibility: "Strong academic record, standardized tests"
      }
    ]
  },
  {
    id: "mauritius",
    name: "Mauritius",
    tagline: "Island Paradise Education Hub",
    bannerImage: "https://images.unsplash.com/photo-1589979481223-deb893043163?w=1600",
    description: "Mauritius offers affordable education in a multicultural environment with beautiful surroundings and growing international university presence.",
    seoTitle: "Study in Mauritius for Indian Students | Low Cost",
    seoDescription: "Study in Mauritius at affordable fees. Get admission guidance, visa support & top university options.",
    seoKeywords: "study in Mauritius for Indian students, Mauritius student visa consultants, study abroad Mauritius universities, Mauritius university admission, low cost study in Mauritius, Mauritius visa process India, Mauritius education consultants, study in Mauritius without IELTS, Mauritius courses for Indian students, Mauritius study abroad consultants",
    highlights: ["Affordable Education", "English Medium", "Safe & Beautiful", "Growing Education Hub"],
    intakes: ["August", "January"],
    language: "English/French",
    universities: [
      {
        id: "uom",
        name: "University of Mauritius",
        location: "Réduit",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
        courses: ["Engineering", "Science", "Agriculture", "Law", "Social Studies"],
        highlights: ["National University", "Research Programs", "Affordable"],
        intakes: ["August"],
        eligibility: "A-Levels or equivalent, English proficiency"
      },
      {
        id: "middlesex-mauritius",
        name: "Middlesex University Mauritius",
        location: "Cascavelle",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
        courses: ["Business", "Law", "IT", "Media", "Psychology"],
        highlights: ["UK Degree", "Modern Campus", "International Recognition"],
        intakes: ["September", "February"],
        eligibility: "High school diploma, IELTS 6.0"
      }
    ]
  },
  {
    id: "singapore",
    name: "Singapore",
    tagline: "Asia's Premier Education Destination",
    bannerImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1600",
    description: "Singapore offers world-class education with globally ranked universities, excellent infrastructure, and strong ties to industry and innovation.",
    seoTitle: "Study in Singapore for Indian Students | Top Colleges",
    seoDescription: "Study in Singapore with top universities. Get admission support, visa assistance & career opportunities.",
    seoKeywords: "study in Singapore for Indian students, Singapore student visa consultants, study abroad Singapore universities, Singapore university admission, low cost study in Singapore, Singapore visa process India, Singapore education consultants, study in Singapore without IELTS, Singapore courses for Indian students, Singapore study abroad consultants",
    highlights: ["World Top Universities", "Safe & Modern", "Career Opportunities", "Multicultural Hub"],
    intakes: ["August", "January"],
    language: "English",
    universities: [
      {
        id: "nus",
        name: "National University of Singapore",
        location: "Singapore",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
        courses: ["Engineering", "Business", "Computing", "Medicine", "Law", "Arts"],
        highlights: ["QS Top 15", "Asia's #1", "Research Excellence"],
        intakes: ["August", "January"],
        eligibility: "Strong academics, standardized tests, portfolio for some"
      },
      {
        id: "ntu",
        name: "Nanyang Technological University",
        location: "Singapore",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
        courses: ["Engineering", "Science", "Business", "Humanities", "Art & Design"],
        highlights: ["QS Top 20", "Young University #1", "Innovation Focus"],
        intakes: ["August", "January"],
        eligibility: "Strong academics, English proficiency, interviews"
      },
      {
        id: "smu",
        name: "Singapore Management University",
        location: "Singapore",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
        courses: ["Business", "Accountancy", "Economics", "Law", "Information Systems"],
        highlights: ["Business Focused", "City Campus", "Industry Connections"],
        intakes: ["August"],
        eligibility: "Strong academics, GMAT/GRE for some programs"
      }
    ]
  }
];

export const otherCountries = [
  {
    id: "uk",
    name: "United Kingdom",
    tagline: "Historic Excellence & Global Recognition",
    bannerImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600",
    description: "The UK is home to some of the world's oldest and most prestigious universities, offering globally recognized degrees and excellent research opportunities.",
    seoTitle: "Study in UK for Indian Students | Visa & Universities",
    seoDescription: "Study in UK with top universities. Get admission support, visa guidance & affordable study options for Indian students.",
    seoKeywords: "study in UK for Indian students, UK student visa consultants India, study abroad UK universities, UK university admission, low cost study in UK, UK visa process India, UK education consultants, study in UK without IELTS, UK courses for Indian students, UK study abroad consultants",
    highlights: ["World-Class Universities", "1-Year Masters", "Post-Study Work Visa", "Rich Heritage"],
    intakes: ["September", "January"],
    language: "English",
    universities: [
      {
        id: "oxford",
        name: "University of Oxford",
        location: "Oxford, England",
        image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=800",
        courses: ["Humanities", "Sciences", "Medicine", "Law", "Business"],
        highlights: ["World's #1", "Founded 1096", "Nobel Laureates: 72"],
        intakes: ["October"],
        eligibility: "Exceptional academics, entrance tests, interview"
      },
      {
        id: "cambridge",
        name: "University of Cambridge",
        location: "Cambridge, England",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
        courses: ["Sciences", "Engineering", "Arts", "Medicine", "Law"],
        highlights: ["World Top 5", "31 Colleges", "Research Leader"],
        intakes: ["October"],
        eligibility: "Outstanding academics, entrance tests, interview"
      },
      {
        id: "imperial",
        name: "Imperial College London",
        location: "London, England",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
        courses: ["Engineering", "Medicine", "Science", "Business"],
        highlights: ["STEM Focus", "QS Top 10", "London Location"],
        intakes: ["October"],
        eligibility: "Strong STEM background, IELTS 6.5-7.0"
      },
      {
        id: "ucl",
        name: "University College London",
        location: "London, England",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
        courses: ["Arts", "Sciences", "Engineering", "Medicine", "Architecture"],
        highlights: ["Multidisciplinary", "Central London", "Global Community"],
        intakes: ["September"],
        eligibility: "Strong academics, IELTS 6.5-7.5"
      }
    ]
  },
  {
    id: "usa",
    name: "United States",
    tagline: "Land of Opportunity & Innovation",
    bannerImage: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1600",
    description: "The USA offers diverse educational opportunities, cutting-edge research facilities, and globally recognized degrees across thousands of institutions.",
    seoTitle: "Study in USA for Indian Students | Universities & Visa",
    seoDescription: "Study in USA with top universities. Get admission support, visa guidance & scholarship options for Indian students.",
    seoKeywords: "study in USA for Indian students, USA student visa consultants India, study abroad USA universities, USA university admission, low cost study in USA, USA visa process India, USA education consultants, study in USA without IELTS, USA courses for Indian students, USA study abroad consultants",
    highlights: ["Top Global Universities", "Flexible Curriculum", "OPT Work Program", "Research Opportunities"],
    intakes: ["Fall (August)", "Spring (January)"],
    language: "English",
    universities: [
      {
        id: "mit",
        name: "Massachusetts Institute of Technology",
        location: "Cambridge, Massachusetts",
        image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800",
        courses: ["Engineering", "Computer Science", "Science", "Architecture", "Business"],
        highlights: ["#1 for Engineering", "Innovation Hub", "Tech Leaders"],
        intakes: ["Fall"],
        eligibility: "Exceptional academics, SAT/ACT, extracurriculars"
      },
      {
        id: "stanford",
        name: "Stanford University",
        location: "Stanford, California",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
        courses: ["Engineering", "Business", "Medicine", "Law", "Humanities"],
        highlights: ["Silicon Valley", "Entrepreneurship", "Research Excellence"],
        intakes: ["Fall"],
        eligibility: "Top academics, strong profile, essays"
      },
      {
        id: "harvard",
        name: "Harvard University",
        location: "Cambridge, Massachusetts",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
        courses: ["Law", "Medicine", "Business", "Arts & Sciences"],
        highlights: ["World's Most Prestigious", "Powerful Network", "Nobel Winners"],
        intakes: ["Fall"],
        eligibility: "Outstanding academics, leadership, holistic review"
      }
    ]
  },
  {
    id: "canada",
    name: "Canada",
    tagline: "Quality Education with Immigration Pathways",
    bannerImage: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1600",
    description: "Canada offers high-quality education, multicultural environment, and excellent post-graduation work permit and immigration opportunities.",
    seoTitle: "Study in Canada for Indian Students | Visa & Colleges",
    seoDescription: "Study in Canada with top colleges. Get admission guidance, visa support & affordable study options for students.",
    seoKeywords: "study in Canada for Indian students, Canada student visa consultants India, study abroad Canada universities, Canada university admission, low cost study in Canada, Canada visa process India, Canada education consultants, study in Canada without IELTS, Canada courses for Indian students, Canada study abroad consultants",
    highlights: ["PR Pathway", "3-Year PGWP", "Affordable", "Safe & Welcoming"],
    intakes: ["September", "January", "May"],
    language: "English/French",
    universities: [
      {
        id: "toronto",
        name: "University of Toronto",
        location: "Toronto, Ontario",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
        courses: ["Engineering", "Medicine", "Arts", "Science", "Business"],
        highlights: ["Canada's #1", "QS Top 25", "Research Intensive"],
        intakes: ["September", "January"],
        eligibility: "Strong academics, English proficiency"
      },
      {
        id: "ubc",
        name: "University of British Columbia",
        location: "Vancouver, BC",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
        courses: ["Sciences", "Engineering", "Arts", "Business", "Forestry"],
        highlights: ["Beautiful Campus", "Top 40 Global", "Sustainability Focus"],
        intakes: ["September", "January"],
        eligibility: "Competitive admission, IELTS 6.5"
      },
      {
        id: "mcgill",
        name: "McGill University",
        location: "Montreal, Quebec",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
        courses: ["Medicine", "Law", "Engineering", "Music", "Sciences"],
        highlights: ["Historic Excellence", "Bilingual City", "Nobel Laureates"],
        intakes: ["September", "January"],
        eligibility: "Strong academics, English proficiency"
      }
    ]
  },
  {
    id: "australia",
    name: "Australia",
    tagline: "World-Class Education Down Under",
    bannerImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1600",
    description: "Australia offers internationally recognized qualifications, excellent quality of life, and post-study work opportunities in a diverse environment.",
    seoTitle: "Study in Australia for Indian Students | Visa & Courses",
    seoDescription: "Study in Australia with top universities. Get admission support, visa guidance & career opportunities.",
    seoKeywords: "study in Australia for Indian students, Australia student visa consultants India, study abroad Australia universities, Australia university admission, low cost study in Australia, Australia visa process India, Australia education consultants, study in Australia without IELTS, Australia courses for Indian students, Australia study abroad consultants",
    highlights: ["Post-Study Work Visa", "High Quality of Life", "Diverse Culture", "Research Excellence"],
    intakes: ["February", "July"],
    language: "English",
    universities: [
      {
        id: "melbourne",
        name: "University of Melbourne",
        location: "Melbourne, Victoria",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
        courses: ["Arts", "Science", "Engineering", "Medicine", "Law", "Business"],
        highlights: ["Australia's #1", "QS Top 15", "Research Leader"],
        intakes: ["February", "July"],
        eligibility: "Strong academics, IELTS 6.5-7.0"
      },
      {
        id: "sydney",
        name: "University of Sydney",
        location: "Sydney, NSW",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
        courses: ["Arts", "Engineering", "Health", "Business", "Architecture"],
        highlights: ["Historic Campus", "Global Recognition", "Industry Links"],
        intakes: ["February", "July"],
        eligibility: "Competitive admission, English proficiency"
      },
      {
        id: "anu",
        name: "Australian National University",
        location: "Canberra, ACT",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
        courses: ["Science", "Arts", "Law", "Public Policy", "Asian Studies"],
        highlights: ["Research Focused", "National University", "Small Class Sizes"],
        intakes: ["February", "July"],
        eligibility: "Strong academics, IELTS 6.5"
      }
    ]
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    tagline: "Adventure Meets Academic Excellence",
    bannerImage: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1600",
    description: "New Zealand offers quality education in a safe, beautiful environment with excellent post-study work opportunities and pathways to residency.",
    seoTitle: "Study in New Zealand for Indian Students | Visa Guide",
    seoDescription: "Study in New Zealand with top universities. Get admission support, visa assistance & affordable study options.",
    seoKeywords: "study in New Zealand for Indian students, New Zealand student visa consultants, study abroad New Zealand universities, New Zealand university admission, low cost study in New Zealand, New Zealand visa process India, New Zealand education consultants, study in New Zealand without IELTS, New Zealand courses for Indian students, New Zealand study abroad consultants",
    highlights: ["Safe Environment", "Work While Studying", "PR Pathways", "Natural Beauty"],
    intakes: ["February", "July"],
    language: "English",
    universities: [
      {
        id: "auckland",
        name: "University of Auckland",
        location: "Auckland",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
        courses: ["Engineering", "Business", "Arts", "Science", "Health"],
        highlights: ["NZ's #1", "QS Top 100", "Largest University"],
        intakes: ["February", "July"],
        eligibility: "Strong academics, IELTS 6.0-6.5"
      },
      {
        id: "otago",
        name: "University of Otago",
        location: "Dunedin",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
        courses: ["Medicine", "Dentistry", "Science", "Humanities", "Business"],
        highlights: ["Oldest NZ University", "Student City", "Research Excellence"],
        intakes: ["February", "July"],
        eligibility: "Strong academics, English proficiency"
      }
    ]
  },
  {
    id: "denmark",
    name: "Denmark",
    tagline: "Happy Nation, Innovative Education",
    bannerImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1600",
    description: "Denmark offers excellent education with a focus on innovation, sustainability, and work-life balance in one of the world's happiest countries.",
    seoTitle: "Study in Denmark for Indian Students | Low Cost Study",
    seoDescription: "Study in Denmark at affordable fees. Get admission guidance, visa support & top university options for Indian students.",
    seoKeywords: "study in Denmark for Indian students, Denmark student visa consultants, study abroad Denmark universities, Denmark university admission, low cost study in Denmark, Denmark visa process India, Denmark education consultants, study in Denmark without IELTS, Denmark courses for Indian students, Denmark study abroad consultants",
    highlights: ["High Quality of Life", "Innovation Focus", "English Programs", "Sustainable Living"],
    intakes: ["September", "February"],
    language: "Danish/English",
    universities: [
      {
        id: "copenhagen",
        name: "University of Copenhagen",
        location: "Copenhagen",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
        courses: ["Sciences", "Medicine", "Law", "Humanities", "Social Sciences"],
        highlights: ["Denmark's Largest", "Nobel Laureates", "Research Intensive"],
        intakes: ["September", "February"],
        eligibility: "Bachelor's degree, English proficiency"
      },
      {
        id: "dtu",
        name: "Technical University of Denmark",
        location: "Kongens Lyngby",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
        courses: ["Engineering", "Science", "Technology", "Sustainability"],
        highlights: ["Top Technical University", "Industry Collaboration", "Innovation"],
        intakes: ["September", "February"],
        eligibility: "Bachelor's in related field, IELTS 6.5"
      }
    ]
  },
  {
    id: "finland",
    name: "Finland",
    tagline: "World's Best Education System",
    bannerImage: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=1600",
    description: "Finland is renowned for its excellent education system, innovative teaching methods, and high quality of life with abundant natural beauty.",
    seoTitle: "Study in Finland for Indian Students | Free Education",
    seoDescription: "Study in Finland with top universities. Get admission support, visa guidance & scholarship opportunities.",
    seoKeywords: "study in Finland for Indian students, Finland student visa consultants, study abroad Finland universities, Finland university admission, low cost study in Finland, Finland visa process India, Finland education consultants, study in Finland without IELTS, Finland courses for Indian students, Finland study abroad consultants",
    highlights: ["Top Education System", "Safe & Clean", "Northern Lights", "Innovation Hub"],
    intakes: ["August", "January"],
    language: "Finnish/English",
    universities: [
      {
        id: "helsinki",
        name: "University of Helsinki",
        location: "Helsinki",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
        courses: ["Sciences", "Arts", "Medicine", "Law", "Education"],
        highlights: ["Finland's #1", "QS Top 100", "Research Excellence"],
        intakes: ["August", "January"],
        eligibility: "Bachelor's degree, English proficiency"
      },
      {
        id: "aalto",
        name: "Aalto University",
        location: "Espoo, Helsinki Region",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
        courses: ["Design", "Engineering", "Business", "Art", "Architecture"],
        highlights: ["Design & Innovation", "Startup Culture", "Modern Campus"],
        intakes: ["August", "January"],
        eligibility: "Bachelor's degree, portfolio for design programs"
      }
    ]
  }
];

// Get all countries combined
export const getAllCountries = () => [...preferredCountries, ...otherCountries];

// Get country by ID
export const getCountryById = (id) => {
  return getAllCountries().find(c => c.id === id.toLowerCase());
};

// Get university by country and university ID
export const getUniversityById = (countryId, universityId) => {
  const country = getCountryById(countryId);
  if (!country) return null;
  return country.universities.find(u => u.id === universityId);
};
