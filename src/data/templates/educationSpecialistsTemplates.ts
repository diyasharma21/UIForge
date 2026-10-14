import { TemplateConfig } from '../../types';

export const EDUCATION_SPECIALISTS_TEMPLATES: TemplateConfig[] = [
  {
    "id": "edu-school-01",
    "slug": "oakridge-preparatory-academy",
    "name": "Oakridge Preparatory Academy",
    "description": "Exemplary K-12 preparatory institution blending classical humanities, competitive robotics, and Olympic-grade athletic development.",
    "industryId": "education",
    "categoryId": "school",
    "collectionId": "modern-school",
    "designStyle": "academic-classic",
    "featured": true,
    "tags": [
      "school",
      "k12",
      "preparatory academy",
      "academics",
      "stem labs",
      "athletics"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "es1-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "OAKRIDGE PREPARATORY ACA",
          "primaryButtonText": "Apply Now",
          "primaryButtonLink": "#apply",
          "navLinks": [
            {
              "label": "Academic Programs",
              "href": "#courses"
            },
            {
              "label": "Faculty & Mentors",
              "href": "#faculty"
            },
            {
              "label": "Admissions & Aid",
              "href": "#admissions"
            },
            {
              "label": "Campus Tour",
              "href": "#tour"
            }
          ]
        }
      },
      {
        "id": "es1-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Cognia Accredited • Top 1% National Merit Scholars",
          "title": "Cultivating Inquiring Minds and Principled Global Leaders",
          "subtitle": "From exploratory primary education through AP Capstone diplomas, Oakridge prepares students to excel at the world’s most demanding universities.",
          "primaryButtonText": "Explore Programs",
          "primaryButtonLink": "#courses",
          "secondaryButtonText": "Schedule a Visit",
          "secondaryButtonLink": "#tour",
          "imageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Student Success Rate",
              "value": "98.5%"
            },
            {
              "id": "s2",
              "label": "Alumni Network",
              "value": "45,000+"
            },
            {
              "id": "s3",
              "label": "Faculty Credentials",
              "value": "92% Adv. Degrees"
            }
          ]
        }
      },
      {
        "id": "es1-course-catalog",
        "type": "course-catalog",
        "variant": "courses-grid",
        "visible": true,
        "content": {
          "badge": "Featured Curriculums",
          "title": "Rigorous Academic Pathways",
          "subtitle": "Designed to challenge assumptions, foster analytical discipline, and build practical real-world mastery.",
          "items": [
            {
              "id": "c1",
              "title": "AP Capstone & Research Diploma",
              "description": "Two-year interdisciplinary seminar fostering advanced collegiate research, data synthesis, and oral defense.",
              "price": "Grades 11-12",
              "badge": "Premier Track"
            },
            {
              "id": "c2",
              "title": "FIRST Robotics & Autonomous Systems",
              "description": "Hands-on CAD modeling, pneumatic engineering, and C++ control algorithm design for global competitions.",
              "price": "Grades 7-12"
            },
            {
              "id": "c3",
              "title": "Classical Humanities & Rhetoric Studio",
              "description": "Deep engagement with foundational Western and Eastern texts, formal debate, and persuasive writing.",
              "price": "Grades 6-10"
            }
          ]
        }
      },
      {
        "id": "es1-faculty-showcase",
        "type": "faculty-showcase",
        "variant": "faculty-cards",
        "visible": true,
        "content": {
          "badge": "Distinguished Leadership",
          "title": "Learn from Visionary Scholars & Practitioners",
          "subtitle": "Our faculty combine terminal academic degrees with active real-world leadership in their respective fields.",
          "items": [
            {
              "id": "fac1",
              "title": "Dr. Evelyn Montgomery, Ed.D.",
              "description": "Over 24 years directing elite college preparatory institutions with a focus on student intellectual autonomy.",
              "meta": "Head of School • Columbia Teachers College",
              "imageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "es1-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "badge": "Admissions Open",
          "title": "Begin Your Transformative Educational Journey",
          "subtitle": "Take the first step toward academic excellence, creative discovery, and lifelong achievement.",
          "primaryButtonText": "Submit Application",
          "primaryButtonLink": "#apply",
          "secondaryButtonText": "Download Prospectus",
          "secondaryButtonLink": "#prospectus"
        }
      },
      {
        "id": "es1-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Oakridge Preparatory Academy",
          "description": "Exemplary K-12 preparatory institution blending classical humanities, competitive robotics, and Olympic-grade athletic development.",
          "copyrightText": "© 2026 Oakridge Preparatory Academy. All institutional rights reserved. Fully accredited."
        }
      }
    ]
  },
  {
    "id": "edu-public-school-01",
    "slug": "westfield-community-public-school",
    "name": "Westfield Community Public High School",
    "description": "Award-winning Blue Ribbon comprehensive public high school celebrating academic rigor, dual enrollment college credits, and inclusive civic engagement.",
    "industryId": "education",
    "categoryId": "public-school",
    "collectionId": "modern-school",
    "designStyle": "modern-corporate",
    "featured": false,
    "tags": [
      "public school",
      "high school",
      "blue ribbon",
      "dual enrollment",
      "stem",
      "civics"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "es2-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "WESTFIELD COMMUNITY PUBL",
          "primaryButtonText": "Apply Now",
          "primaryButtonLink": "#apply",
          "navLinks": [
            {
              "label": "Academic Programs",
              "href": "#courses"
            },
            {
              "label": "Faculty & Mentors",
              "href": "#faculty"
            },
            {
              "label": "Admissions & Aid",
              "href": "#admissions"
            },
            {
              "label": "Campus Tour",
              "href": "#tour"
            }
          ]
        }
      },
      {
        "id": "es2-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "National Blue Ribbon Exemplary High School • 98% Graduation Rate",
          "title": "Accessible Academic Excellence and Vibrant Civic Community",
          "subtitle": "Empowering every student with tuition-free college dual credits, state-of-the-art career-tech labs, and championship athletic programs.",
          "primaryButtonText": "Explore Programs",
          "primaryButtonLink": "#courses",
          "secondaryButtonText": "Schedule a Visit",
          "secondaryButtonLink": "#tour",
          "imageUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Student Success Rate",
              "value": "98.5%"
            },
            {
              "id": "s2",
              "label": "Alumni Network",
              "value": "45,000+"
            },
            {
              "id": "s3",
              "label": "Faculty Credentials",
              "value": "92% Adv. Degrees"
            }
          ]
        }
      },
      {
        "id": "es2-course-catalog",
        "type": "course-catalog",
        "variant": "courses-grid",
        "visible": true,
        "content": {
          "badge": "Featured Curriculums",
          "title": "Rigorous Academic Pathways",
          "subtitle": "Designed to challenge assumptions, foster analytical discipline, and build practical real-world mastery.",
          "items": [
            {
              "id": "ps1",
              "title": "University Dual-Credit Pathways",
              "description": "Earn up to 30 transferable college credits in partnership with State University before graduating high school.",
              "price": "Free Tuition",
              "badge": "Premier Track"
            },
            {
              "id": "ps2",
              "title": "Biotechnology & Environmental Science Lab",
              "description": "Real-world genetic sequencing, CRISPR introductory modules, and local watershed conservation field studies.",
              "price": "STEM Track"
            },
            {
              "id": "ps3",
              "title": "Comprehensive Performing & Fine Arts",
              "description": "Award-winning symphony orchestra, wind ensemble, Broadway theatrical staging, and ceramics atelier.",
              "price": "Fine Arts"
            }
          ]
        }
      },
      {
        "id": "es2-faculty-showcase",
        "type": "faculty-showcase",
        "variant": "faculty-cards",
        "visible": true,
        "content": {
          "badge": "Distinguished Leadership",
          "title": "Learn from Visionary Scholars & Practitioners",
          "subtitle": "Our faculty combine terminal academic degrees with active real-world leadership in their respective fields.",
          "items": [
            {
              "id": "fac1",
              "title": "Principal Marcus Sterling, M.Ed.",
              "description": "Champion of equitable high-rigor curriculum pathways and community-integrated career mentorship.",
              "meta": "District Principal of the Year • Stanford Fellow",
              "imageUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "es2-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "badge": "Admissions Open",
          "title": "Begin Your Transformative Educational Journey",
          "subtitle": "Take the first step toward academic excellence, creative discovery, and lifelong achievement.",
          "primaryButtonText": "Submit Application",
          "primaryButtonLink": "#apply",
          "secondaryButtonText": "Download Prospectus",
          "secondaryButtonLink": "#prospectus"
        }
      },
      {
        "id": "es2-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Westfield Community Public High School",
          "description": "Award-winning Blue Ribbon comprehensive public high school celebrating academic rigor, dual enrollment college credits, and inclusive civic engagement.",
          "copyrightText": "© 2026 Westfield Community Public High School. All institutional rights reserved. Fully accredited."
        }
      }
    ]
  },
  {
    "id": "edu-private-school-01",
    "slug": "st-jude-collegiate-private-school",
    "name": "St. Jude Collegiate Independent School",
    "description": "Historic independent day and boarding academy dedicated to small Harkness table seminars, ethical character formation, and 100% university matriculation.",
    "industryId": "education",
    "categoryId": "private-school",
    "collectionId": "modern-school",
    "designStyle": "academic-classic",
    "featured": false,
    "tags": [
      "private school",
      "independent school",
      "boarding school",
      "harkness table",
      "ivy league prep",
      "character"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "es3-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "ST. JUDE COLLEGIATE INDE",
          "primaryButtonText": "Apply Now",
          "primaryButtonLink": "#apply",
          "navLinks": [
            {
              "label": "Academic Programs",
              "href": "#courses"
            },
            {
              "label": "Faculty & Mentors",
              "href": "#faculty"
            },
            {
              "label": "Admissions & Aid",
              "href": "#admissions"
            },
            {
              "label": "Campus Tour",
              "href": "#tour"
            }
          ]
        }
      },
      {
        "id": "es3-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "100% University Acceptance • 7:1 Student-to-Faculty Ratio",
          "title": "Intellectual Rigor, Socratic Inquiry, and Timeless Character",
          "subtitle": "Where round-table discussion replaces passive lectures, and lifelong mentorship unlocks every student’s deepest academic and creative potential.",
          "primaryButtonText": "Explore Programs",
          "primaryButtonLink": "#courses",
          "secondaryButtonText": "Schedule a Visit",
          "secondaryButtonLink": "#tour",
          "imageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Student Success Rate",
              "value": "98.5%"
            },
            {
              "id": "s2",
              "label": "Alumni Network",
              "value": "45,000+"
            },
            {
              "id": "s3",
              "label": "Faculty Credentials",
              "value": "92% Adv. Degrees"
            }
          ]
        }
      },
      {
        "id": "es3-course-catalog",
        "type": "course-catalog",
        "variant": "courses-grid",
        "visible": true,
        "content": {
          "badge": "Featured Curriculums",
          "title": "Rigorous Academic Pathways",
          "subtitle": "Designed to challenge assumptions, foster analytical discipline, and build practical real-world mastery.",
          "items": [
            {
              "id": "pvs1",
              "title": "Harkness Humanities Seminar",
              "description": "Discussion-driven peer analysis of classical literature, political philosophy, and historical jurisprudence.",
              "price": "Upper School",
              "badge": "Premier Track"
            },
            {
              "id": "pvs2",
              "title": "Biomedical Innovation & Neuroscience",
              "description": "Advanced wet lab research analyzing cellular regeneration, cognitive behavior, and bioethics.",
              "price": "Honor Elective"
            },
            {
              "id": "pvs3",
              "title": "Global Diplomacy & Model United Nations",
              "description": "Intensive geopolitical negotiation, international treaty drafting, and multi-lateral crisis simulations.",
              "price": "Co-Curricular"
            }
          ]
        }
      },
      {
        "id": "es3-faculty-showcase",
        "type": "faculty-showcase",
        "variant": "faculty-cards",
        "visible": true,
        "content": {
          "badge": "Distinguished Leadership",
          "title": "Learn from Visionary Scholars & Practitioners",
          "subtitle": "Our faculty combine terminal academic degrees with active real-world leadership in their respective fields.",
          "items": [
            {
              "id": "fac1",
              "title": "Dr. Archibald Sterling, D.Phil. (Oxon)",
              "description": "Dedicated to fostering analytical precision and moral responsibility through Socratic discussion.",
              "meta": "Dean of Academic Affairs • Rhodes Scholar",
              "imageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "es3-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "badge": "Admissions Open",
          "title": "Begin Your Transformative Educational Journey",
          "subtitle": "Take the first step toward academic excellence, creative discovery, and lifelong achievement.",
          "primaryButtonText": "Submit Application",
          "primaryButtonLink": "#apply",
          "secondaryButtonText": "Download Prospectus",
          "secondaryButtonLink": "#prospectus"
        }
      },
      {
        "id": "es3-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "St. Jude Collegiate Independent School",
          "description": "Historic independent day and boarding academy dedicated to small Harkness table seminars, ethical character formation, and 100% university matriculation.",
          "copyrightText": "© 2026 St. Jude Collegiate Independent School. All institutional rights reserved. Fully accredited."
        }
      }
    ]
  },
  {
    "id": "edu-primary-school-01",
    "slug": "little-pioneers-primary-school",
    "name": "Little Pioneers Elementary & Primary School",
    "description": "Joyful, play-grounded primary academy blending inquiry-based STEM, phonics mastery, and nature-immersive outdoor classrooms for early learners.",
    "industryId": "education",
    "categoryId": "primary-school",
    "collectionId": "modern-school",
    "designStyle": "soft-pastel",
    "featured": true,
    "tags": [
      "primary school",
      "elementary school",
      "early learning",
      "phonics",
      "kindergarten",
      "inquiry based"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "es4-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "LITTLE PIONEERS ELEMENTA",
          "primaryButtonText": "Apply Now",
          "primaryButtonLink": "#apply",
          "navLinks": [
            {
              "label": "Academic Programs",
              "href": "#courses"
            },
            {
              "label": "Faculty & Mentors",
              "href": "#faculty"
            },
            {
              "label": "Admissions & Aid",
              "href": "#admissions"
            },
            {
              "label": "Campus Tour",
              "href": "#tour"
            }
          ]
        }
      },
      {
        "id": "es4-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Early Childhood Excellence • Nature Immersion Campus",
          "title": "Where Curiosity Takes Root and Lifelong Joy in Learning Begins",
          "subtitle": "Nurturing confident readers, creative thinkers, and kind friends in a warm, wonder-filled environment designed specifically for young minds.",
          "primaryButtonText": "Explore Programs",
          "primaryButtonLink": "#courses",
          "secondaryButtonText": "Schedule a Visit",
          "secondaryButtonLink": "#tour",
          "imageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Student Success Rate",
              "value": "98.5%"
            },
            {
              "id": "s2",
              "label": "Alumni Network",
              "value": "45,000+"
            },
            {
              "id": "s3",
              "label": "Faculty Credentials",
              "value": "92% Adv. Degrees"
            }
          ]
        }
      },
      {
        "id": "es4-course-catalog",
        "type": "course-catalog",
        "variant": "courses-grid",
        "visible": true,
        "content": {
          "badge": "Featured Curriculums",
          "title": "Rigorous Academic Pathways",
          "subtitle": "Designed to challenge assumptions, foster analytical discipline, and build practical real-world mastery.",
          "items": [
            {
              "id": "pri1",
              "title": "Multi-Sensory Phonics & Early Literacy",
              "description": "Structured Orton-Gillingham methodology ensuring effortless reading fluency and expressive storytelling.",
              "price": "Kindergarten - G2",
              "badge": "Premier Track"
            },
            {
              "id": "pri2",
              "title": "Exploratory Nature STEM & Garden Lab",
              "description": "Botany seed-cycles, weather stations, and tactile physics through water play and block architecture.",
              "price": "All Grades"
            },
            {
              "id": "pri3",
              "title": "Creative Expression & Orff Music Studio",
              "description": "Early percussion rhythms, melodic exploration, watercolors, and dramatic imaginative play.",
              "price": "Arts Enrichment"
            }
          ]
        }
      },
      {
        "id": "es4-faculty-showcase",
        "type": "faculty-showcase",
        "variant": "faculty-cards",
        "visible": true,
        "content": {
          "badge": "Distinguished Leadership",
          "title": "Learn from Visionary Scholars & Practitioners",
          "subtitle": "Our faculty combine terminal academic degrees with active real-world leadership in their respective fields.",
          "items": [
            {
              "id": "fac1",
              "title": "Sarah Jenkins, M.S. Early Education",
              "description": "Over 18 years shaping joyful, developmentally responsive elementary learning spaces.",
              "meta": "Primary School Director • Reggio Emilia Certified",
              "imageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "es4-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "badge": "Admissions Open",
          "title": "Begin Your Transformative Educational Journey",
          "subtitle": "Take the first step toward academic excellence, creative discovery, and lifelong achievement.",
          "primaryButtonText": "Submit Application",
          "primaryButtonLink": "#apply",
          "secondaryButtonText": "Download Prospectus",
          "secondaryButtonLink": "#prospectus"
        }
      },
      {
        "id": "es4-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Little Pioneers Elementary & Primary School",
          "description": "Joyful, play-grounded primary academy blending inquiry-based STEM, phonics mastery, and nature-immersive outdoor classrooms for early learners.",
          "copyrightText": "© 2026 Little Pioneers Elementary & Primary School. All institutional rights reserved. Fully accredited."
        }
      }
    ]
  },
  {
    "id": "edu-college-01",
    "slug": "beacon-hill-undergraduate-college",
    "name": "Beacon Hill Undergraduate Collegiate Institute",
    "description": "Distinguished 4-year undergraduate liberal arts and sciences college known for undergraduate research fellowships, close faculty mentorship, and career launch.",
    "industryId": "education",
    "categoryId": "college",
    "collectionId": "modern-school",
    "designStyle": "academic-classic",
    "featured": false,
    "tags": [
      "college",
      "undergraduate",
      "liberal arts",
      "bachelor degree",
      "campus life",
      "research"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "es5-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "BEACON HILL UNDERGRADUAT",
          "primaryButtonText": "Apply Now",
          "primaryButtonLink": "#apply",
          "navLinks": [
            {
              "label": "Academic Programs",
              "href": "#courses"
            },
            {
              "label": "Faculty & Mentors",
              "href": "#faculty"
            },
            {
              "label": "Admissions & Aid",
              "href": "#admissions"
            },
            {
              "label": "Campus Tour",
              "href": "#tour"
            }
          ]
        }
      },
      {
        "id": "es5-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Top 10 National Liberal Arts • 94% Career or Grad School in 6 Mo",
          "title": "Transformative Undergraduate Education Grounded in Discovery",
          "subtitle": "Engage in funded faculty research from your first year, master critical thinking across disciplines, and join an influential alumni network.",
          "primaryButtonText": "Explore Programs",
          "primaryButtonLink": "#courses",
          "secondaryButtonText": "Schedule a Visit",
          "secondaryButtonLink": "#tour",
          "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Student Success Rate",
              "value": "98.5%"
            },
            {
              "id": "s2",
              "label": "Alumni Network",
              "value": "45,000+"
            },
            {
              "id": "s3",
              "label": "Faculty Credentials",
              "value": "92% Adv. Degrees"
            }
          ]
        }
      },
      {
        "id": "es5-course-catalog",
        "type": "course-catalog",
        "variant": "courses-grid",
        "visible": true,
        "content": {
          "badge": "Featured Curriculums",
          "title": "Rigorous Academic Pathways",
          "subtitle": "Designed to challenge assumptions, foster analytical discipline, and build practical real-world mastery.",
          "items": [
            {
              "id": "col1",
              "title": "B.S. in Computational Neuroscience",
              "description": "Combining deep neural networks, cognitive psychology, and wet lab electrophysiology.",
              "price": "4-Year Degree",
              "badge": "Premier Track"
            },
            {
              "id": "col2",
              "title": "B.A. in Political Economy & Global Policy",
              "description": "Interdisciplinary study of markets, geopolitical institutions, macroeconomics, and public law.",
              "price": "4-Year Degree"
            },
            {
              "id": "col3",
              "title": "B.S. in Applied Clean Energy Engineering",
              "description": "Photovoltaic design, battery chemistries, grid integration, and thermodynamic sustainability.",
              "price": "ABET Accredited"
            }
          ]
        }
      },
      {
        "id": "es5-faculty-showcase",
        "type": "faculty-showcase",
        "variant": "faculty-cards",
        "visible": true,
        "content": {
          "badge": "Distinguished Leadership",
          "title": "Learn from Visionary Scholars & Practitioners",
          "subtitle": "Our faculty combine terminal academic degrees with active real-world leadership in their respective fields.",
          "items": [
            {
              "id": "fac1",
              "title": "Prof. Julian Vance, Ph.D.",
              "description": "Author of 4 books on higher education pedagogy and advocate of undergraduate research fellowships.",
              "meta": "Dean of Faculty • Harvard & Princeton Alum",
              "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "es5-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "badge": "Admissions Open",
          "title": "Begin Your Transformative Educational Journey",
          "subtitle": "Take the first step toward academic excellence, creative discovery, and lifelong achievement.",
          "primaryButtonText": "Submit Application",
          "primaryButtonLink": "#apply",
          "secondaryButtonText": "Download Prospectus",
          "secondaryButtonLink": "#prospectus"
        }
      },
      {
        "id": "es5-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Beacon Hill Undergraduate Collegiate Institute",
          "description": "Distinguished 4-year undergraduate liberal arts and sciences college known for undergraduate research fellowships, close faculty mentorship, and career launch.",
          "copyrightText": "© 2026 Beacon Hill Undergraduate Collegiate Institute. All institutional rights reserved. Fully accredited."
        }
      }
    ]
  },
  {
    "id": "edu-dental-college-01",
    "slug": "apex-dental-medicine-college",
    "name": "Apex Institute of Dental Medicine & Oral Surgery",
    "description": "CODA-accredited dental medical school offering Doctor of Dental Medicine (DMD), post-doctoral orthodontic residency, and advanced haptic simulation suites.",
    "industryId": "education",
    "categoryId": "dental-college",
    "collectionId": "modern-school",
    "designStyle": "medical-clean",
    "featured": false,
    "tags": [
      "dental college",
      "dmd",
      "dental school",
      "oral surgery",
      "orthodontics",
      "dental clinical training"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "es6-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "APEX INSTITUTE OF DENTAL",
          "primaryButtonText": "Apply Now",
          "primaryButtonLink": "#apply",
          "navLinks": [
            {
              "label": "Academic Programs",
              "href": "#courses"
            },
            {
              "label": "Faculty & Mentors",
              "href": "#faculty"
            },
            {
              "label": "Admissions & Aid",
              "href": "#admissions"
            },
            {
              "label": "Campus Tour",
              "href": "#tour"
            }
          ]
        }
      },
      {
        "id": "es6-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "CODA Accredited • 100% Board Pass Rate • 60-Station Haptic Lab",
          "title": "Training the Next Generation of Elite Clinicians and Oral Surgeons",
          "subtitle": "Master restorative dentistry, implantology, and micro-endodontics using cutting-edge 3D virtual reality haptic simulators and supervised community clinics.",
          "primaryButtonText": "Explore Programs",
          "primaryButtonLink": "#courses",
          "secondaryButtonText": "Schedule a Visit",
          "secondaryButtonLink": "#tour",
          "imageUrl": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Student Success Rate",
              "value": "98.5%"
            },
            {
              "id": "s2",
              "label": "Alumni Network",
              "value": "45,000+"
            },
            {
              "id": "s3",
              "label": "Faculty Credentials",
              "value": "92% Adv. Degrees"
            }
          ]
        }
      },
      {
        "id": "es6-course-catalog",
        "type": "course-catalog",
        "variant": "courses-grid",
        "visible": true,
        "content": {
          "badge": "Featured Curriculums",
          "title": "Rigorous Academic Pathways",
          "subtitle": "Designed to challenge assumptions, foster analytical discipline, and build practical real-world mastery.",
          "items": [
            {
              "id": "dc1",
              "title": "Doctor of Dental Medicine (DMD) Curriculum",
              "description": "Comprehensive 4-year pre-doctoral curriculum integrating biomedical fundamentals with intensive clinical rotations.",
              "price": "4-Year Professional",
              "badge": "Premier Track"
            },
            {
              "id": "dc2",
              "title": "Postgraduate Orthodontics & Dentofacial Residency",
              "description": "36-month specialty certificate and M.S. in complex clear aligner biomechanics and surgical orthognathics.",
              "price": "Residency Track"
            },
            {
              "id": "dc3",
              "title": "Implantology & Bone Augmentation Fellowship",
              "description": "Surgical placement of endosseous implants, sinus lifts, and guided bone regeneration procedures.",
              "price": "Advanced Fellowship"
            }
          ]
        }
      },
      {
        "id": "es6-faculty-showcase",
        "type": "faculty-showcase",
        "variant": "faculty-cards",
        "visible": true,
        "content": {
          "badge": "Distinguished Leadership",
          "title": "Learn from Visionary Scholars & Practitioners",
          "subtitle": "Our faculty combine terminal academic degrees with active real-world leadership in their respective fields.",
          "items": [
            {
              "id": "fac1",
              "title": "Dr. Raymond Zhao, DMD, MD, FACS",
              "description": "Former president of the Oral Surgery Academy with 30 years in surgical dental education.",
              "meta": "Dean of Dental Medicine • Board Certified Oral Surgeon",
              "imageUrl": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "es6-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "badge": "Admissions Open",
          "title": "Begin Your Transformative Educational Journey",
          "subtitle": "Take the first step toward academic excellence, creative discovery, and lifelong achievement.",
          "primaryButtonText": "Submit Application",
          "primaryButtonLink": "#apply",
          "secondaryButtonText": "Download Prospectus",
          "secondaryButtonLink": "#prospectus"
        }
      },
      {
        "id": "es6-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Apex Institute of Dental Medicine & Oral Surgery",
          "description": "CODA-accredited dental medical school offering Doctor of Dental Medicine (DMD), post-doctoral orthodontic residency, and advanced haptic simulation suites.",
          "copyrightText": "© 2026 Apex Institute of Dental Medicine & Oral Surgery. All institutional rights reserved. Fully accredited."
        }
      }
    ]
  },
  {
    "id": "edu-arts-college-01",
    "slug": "prism-conservatory-fine-arts",
    "name": "Prism Conservatory of Fine Arts & Spatial Design",
    "description": "Internationally acclaimed visual arts conservatory offering BFA and MFA degrees in fine arts, 3D digital animation, fashion design, and spatial architecture.",
    "industryId": "education",
    "categoryId": "arts-college",
    "collectionId": "modern-school",
    "designStyle": "bold-creative",
    "featured": true,
    "tags": [
      "arts college",
      "fine arts",
      "bfa",
      "animation",
      "fashion design",
      "sculpture",
      "conservatory"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "es7-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "PRISM CONSERVATORY OF FI",
          "primaryButtonText": "Apply Now",
          "primaryButtonLink": "#apply",
          "navLinks": [
            {
              "label": "Academic Programs",
              "href": "#courses"
            },
            {
              "label": "Faculty & Mentors",
              "href": "#faculty"
            },
            {
              "label": "Admissions & Aid",
              "href": "#admissions"
            },
            {
              "label": "Campus Tour",
              "href": "#tour"
            }
          ]
        }
      },
      {
        "id": "es7-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "NASAD Accredited • Global Alumni Exhibiting at Venice Biennale",
          "title": "Ignite Provocative Vision. Master Timeless and Emerging Mediums.",
          "subtitle": "Private studio space for every student, world-class foundry and kiln facilities, and industry pipelines to leading animation studios and galleries.",
          "primaryButtonText": "Explore Programs",
          "primaryButtonLink": "#courses",
          "secondaryButtonText": "Schedule a Visit",
          "secondaryButtonLink": "#tour",
          "imageUrl": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Student Success Rate",
              "value": "98.5%"
            },
            {
              "id": "s2",
              "label": "Alumni Network",
              "value": "45,000+"
            },
            {
              "id": "s3",
              "label": "Faculty Credentials",
              "value": "92% Adv. Degrees"
            }
          ]
        }
      },
      {
        "id": "es7-course-catalog",
        "type": "course-catalog",
        "variant": "courses-grid",
        "visible": true,
        "content": {
          "badge": "Featured Curriculums",
          "title": "Rigorous Academic Pathways",
          "subtitle": "Designed to challenge assumptions, foster analytical discipline, and build practical real-world mastery.",
          "items": [
            {
              "id": "ac1",
              "title": "BFA in 3D Character Animation & VFX",
              "description": "Industry-standard Maya, Houdini, and Unreal Engine pipelines mentored by Pixar and ILM veterans.",
              "price": "4-Year BFA",
              "badge": "Premier Track"
            },
            {
              "id": "ac2",
              "title": "BFA in Contemporary Painting & Sculpture",
              "description": "Large-scale canvas construction, bronze casting, conceptual installation, and solo gallery exhibition.",
              "price": "4-Year BFA"
            },
            {
              "id": "ac3",
              "title": "MFA in Spatial Design & Sustainable Architecture",
              "description": "Postgraduate exploration of regenerative materials, kinetic structures, and urban public installations.",
              "price": "2-Year MFA"
            }
          ]
        }
      },
      {
        "id": "es7-faculty-showcase",
        "type": "faculty-showcase",
        "variant": "faculty-cards",
        "visible": true,
        "content": {
          "badge": "Distinguished Leadership",
          "title": "Learn from Visionary Scholars & Practitioners",
          "subtitle": "Our faculty combine terminal academic degrees with active real-world leadership in their respective fields.",
          "items": [
            {
              "id": "fac1",
              "title": "Helena Vane, MFA",
              "description": "Internationally recognized sculptor whose monumental public works stand across 14 international capitals.",
              "meta": "Dean of Visual Arts • Whitney Biennial Artist",
              "imageUrl": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "es7-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "badge": "Admissions Open",
          "title": "Begin Your Transformative Educational Journey",
          "subtitle": "Take the first step toward academic excellence, creative discovery, and lifelong achievement.",
          "primaryButtonText": "Submit Application",
          "primaryButtonLink": "#apply",
          "secondaryButtonText": "Download Prospectus",
          "secondaryButtonLink": "#prospectus"
        }
      },
      {
        "id": "es7-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Prism Conservatory of Fine Arts & Spatial Design",
          "description": "Internationally acclaimed visual arts conservatory offering BFA and MFA degrees in fine arts, 3D digital animation, fashion design, and spatial architecture.",
          "copyrightText": "© 2026 Prism Conservatory of Fine Arts & Spatial Design. All institutional rights reserved. Fully accredited."
        }
      }
    ]
  },
  {
    "id": "edu-competitive-exam-coaching-01",
    "slug": "zenith-entrance-olympiad-coaching",
    "name": "Zenith Premier Entrance & Olympiad Coaching",
    "description": "Results-obsessed preparatory institute producing national top-100 rankers in IIT-JEE, NEET, MCAT, and International Science Olympiads.",
    "industryId": "education",
    "categoryId": "competitive-exam-coaching",
    "collectionId": "modern-school",
    "designStyle": "modern-corporate",
    "featured": false,
    "tags": [
      "exam coaching",
      "iit jee",
      "neet",
      "mcat",
      "olympiad",
      "test prep",
      "rank booster"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "es8-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "ZENITH PREMIER ENTRANCE ",
          "primaryButtonText": "Apply Now",
          "primaryButtonLink": "#apply",
          "navLinks": [
            {
              "label": "Academic Programs",
              "href": "#courses"
            },
            {
              "label": "Faculty & Mentors",
              "href": "#faculty"
            },
            {
              "label": "Admissions & Aid",
              "href": "#admissions"
            },
            {
              "label": "Campus Tour",
              "href": "#tour"
            }
          ]
        }
      },
      {
        "id": "es8-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Over 480 Top-100 National Ranks • AI Adaptive Problem Sets",
          "title": "Strategic Mastery, Speed, and Flawless Conceptual Precision",
          "subtitle": "Taught exclusively by top percentile mentors and Olympiad medalists. We turn difficult physics, organic chemistry, and calculus into intuitive reflex.",
          "primaryButtonText": "Explore Programs",
          "primaryButtonLink": "#courses",
          "secondaryButtonText": "Schedule a Visit",
          "secondaryButtonLink": "#tour",
          "imageUrl": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Student Success Rate",
              "value": "98.5%"
            },
            {
              "id": "s2",
              "label": "Alumni Network",
              "value": "45,000+"
            },
            {
              "id": "s3",
              "label": "Faculty Credentials",
              "value": "92% Adv. Degrees"
            }
          ]
        }
      },
      {
        "id": "es8-course-catalog",
        "type": "course-catalog",
        "variant": "courses-grid",
        "visible": true,
        "content": {
          "badge": "Featured Curriculums",
          "title": "Rigorous Academic Pathways",
          "subtitle": "Designed to challenge assumptions, foster analytical discipline, and build practical real-world mastery.",
          "items": [
            {
              "id": "ce1",
              "title": "IIT-JEE Advanced Mastery Intensive",
              "description": "Comprehensive mechanics, electrodynamics, organic synthesis, and advanced coordinate geometry.",
              "price": "1-Year Program",
              "badge": "Premier Track"
            },
            {
              "id": "ce2",
              "title": "NEET / Medical Entrance Biology & Chemistry",
              "description": "High-yield NCERT diagram deconstruction, genetics problem solving, and weekly computer-based test drills.",
              "price": "2-Year Program"
            },
            {
              "id": "ce3",
              "title": "Physics & Math Olympiad Elite Batch",
              "description": "Non-routine Olympiad problems, Putnam-level proofs, and specialized international contest mentorship.",
              "price": "By Selection Only"
            }
          ]
        }
      },
      {
        "id": "es8-faculty-showcase",
        "type": "faculty-showcase",
        "variant": "faculty-cards",
        "visible": true,
        "content": {
          "badge": "Distinguished Leadership",
          "title": "Learn from Visionary Scholars & Practitioners",
          "subtitle": "Our faculty combine terminal academic degrees with active real-world leadership in their respective fields.",
          "items": [
            {
              "id": "fac1",
              "title": "Prof. Alok Mukherjee, M.Tech (IIT Kanpur)",
              "description": "Personal mentor to 32 AIR Top-50 rankers in engineering and medicine.",
              "meta": "Head Academic Director • 25+ Years Mentorship",
              "imageUrl": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "es8-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "badge": "Admissions Open",
          "title": "Begin Your Transformative Educational Journey",
          "subtitle": "Take the first step toward academic excellence, creative discovery, and lifelong achievement.",
          "primaryButtonText": "Submit Application",
          "primaryButtonLink": "#apply",
          "secondaryButtonText": "Download Prospectus",
          "secondaryButtonLink": "#prospectus"
        }
      },
      {
        "id": "es8-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Zenith Premier Entrance & Olympiad Coaching",
          "description": "Results-obsessed preparatory institute producing national top-100 rankers in IIT-JEE, NEET, MCAT, and International Science Olympiads.",
          "copyrightText": "© 2026 Zenith Premier Entrance & Olympiad Coaching. All institutional rights reserved. Fully accredited."
        }
      }
    ]
  },
  {
    "id": "edu-programming-academy-01",
    "slug": "codeforge-programming-academy",
    "name": "CodeForge Full-Stack & AI Engineering Academy",
    "description": "Intensive software engineering academy producing production-ready full-stack engineers, cloud architects, and applied LLM developers.",
    "industryId": "education",
    "categoryId": "programming-academy",
    "collectionId": "modern-school",
    "designStyle": "technology-gradient",
    "featured": false,
    "tags": [
      "programming academy",
      "coding bootcamp",
      "software engineering",
      "full stack",
      "ai developer",
      "python",
      "react"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "es9-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "CODEFORGE FULL-STACK & A",
          "primaryButtonText": "Apply Now",
          "primaryButtonLink": "#apply",
          "navLinks": [
            {
              "label": "Academic Programs",
              "href": "#courses"
            },
            {
              "label": "Faculty & Mentors",
              "href": "#faculty"
            },
            {
              "label": "Admissions & Aid",
              "href": "#admissions"
            },
            {
              "label": "Campus Tour",
              "href": "#tour"
            }
          ]
        }
      },
      {
        "id": "es9-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "96% Job Placement in 180 Days • Average Starting Salary $118k",
          "title": "Build Production Software. Master Applied AI. Launch Your Tech Career.",
          "subtitle": "No toy projects. Build distributed microservices, train fine-tuned neural models, and pass senior technical interviews with Silicon Valley mentors.",
          "primaryButtonText": "Explore Programs",
          "primaryButtonLink": "#courses",
          "secondaryButtonText": "Schedule a Visit",
          "secondaryButtonLink": "#tour",
          "imageUrl": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Student Success Rate",
              "value": "98.5%"
            },
            {
              "id": "s2",
              "label": "Alumni Network",
              "value": "45,000+"
            },
            {
              "id": "s3",
              "label": "Faculty Credentials",
              "value": "92% Adv. Degrees"
            }
          ]
        }
      },
      {
        "id": "es9-course-catalog",
        "type": "course-catalog",
        "variant": "courses-grid",
        "visible": true,
        "content": {
          "badge": "Featured Curriculums",
          "title": "Rigorous Academic Pathways",
          "subtitle": "Designed to challenge assumptions, foster analytical discipline, and build practical real-world mastery.",
          "items": [
            {
              "id": "pa1",
              "title": "Full-Stack Software Architecture Bootcamp",
              "description": "TypeScript, Next.js, PostgreSQL, Docker, and Kubernetes deployment with CI/CD testing pipelines.",
              "price": "16 Weeks Immersive",
              "badge": "Premier Track"
            },
            {
              "id": "pa2",
              "title": "Applied Generative AI & LLM Engineering",
              "description": "RAG architectures, vector embeddings (Pinecone/Milvus), LangChain, and fine-tuning open weights models.",
              "price": "12 Weeks Advanced"
            },
            {
              "id": "pa3",
              "title": "Algorithms, Data Structures & System Design",
              "description": "Master distributed consensus, caching strategies, load balancing, and competitive LeetCode patterns.",
              "price": "8 Weeks Part-Time"
            }
          ]
        }
      },
      {
        "id": "es9-faculty-showcase",
        "type": "faculty-showcase",
        "variant": "faculty-cards",
        "visible": true,
        "content": {
          "badge": "Distinguished Leadership",
          "title": "Learn from Visionary Scholars & Practitioners",
          "subtitle": "Our faculty combine terminal academic degrees with active real-world leadership in their respective fields.",
          "items": [
            {
              "id": "fac1",
              "title": "Alexandre Duval",
              "description": "Over 16 years scaling high-throughput distributed systems and mentoring 1,200+ junior engineers.",
              "meta": "Chief Instructor • Ex-Senior Staff Engineer at Stripe",
              "imageUrl": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "es9-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "badge": "Admissions Open",
          "title": "Begin Your Transformative Educational Journey",
          "subtitle": "Take the first step toward academic excellence, creative discovery, and lifelong achievement.",
          "primaryButtonText": "Submit Application",
          "primaryButtonLink": "#apply",
          "secondaryButtonText": "Download Prospectus",
          "secondaryButtonLink": "#prospectus"
        }
      },
      {
        "id": "es9-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "CodeForge Full-Stack & AI Engineering Academy",
          "description": "Intensive software engineering academy producing production-ready full-stack engineers, cloud architects, and applied LLM developers.",
          "copyrightText": "© 2026 CodeForge Full-Stack & AI Engineering Academy. All institutional rights reserved. Fully accredited."
        }
      }
    ]
  },
  {
    "id": "edu-corporate-training-01",
    "slug": "vanguard-enterprise-corporate-training",
    "name": "Vanguard Enterprise Executive Learning & Upskilling",
    "description": "Custom corporate education solutions for Fortune 500 leadership, agile enterprise transformation, and organizational AI adoption.",
    "industryId": "education",
    "categoryId": "corporate-training",
    "collectionId": "modern-school",
    "designStyle": "modern-corporate",
    "featured": true,
    "tags": [
      "corporate training",
      "executive education",
      "upskilling",
      "leadership development",
      "change management"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "es10-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "VANGUARD ENTERPRISE EXEC",
          "primaryButtonText": "Apply Now",
          "primaryButtonLink": "#apply",
          "navLinks": [
            {
              "label": "Academic Programs",
              "href": "#courses"
            },
            {
              "label": "Faculty & Mentors",
              "href": "#faculty"
            },
            {
              "label": "Admissions & Aid",
              "href": "#admissions"
            },
            {
              "label": "Campus Tour",
              "href": "#tour"
            }
          ]
        }
      },
      {
        "id": "es10-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Trusted by 42 Fortune 500 Enterprises • Measured ROI Assessment",
          "title": "Reskill Your Workforce for the Age of Intelligent Automation",
          "subtitle": "From C-suite strategic AI roadmaps to team-wide agile execution, we design bespoke cohorts that directly accelerate business KPI velocity.",
          "primaryButtonText": "Explore Programs",
          "primaryButtonLink": "#courses",
          "secondaryButtonText": "Schedule a Visit",
          "secondaryButtonLink": "#tour",
          "imageUrl": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Student Success Rate",
              "value": "98.5%"
            },
            {
              "id": "s2",
              "label": "Alumni Network",
              "value": "45,000+"
            },
            {
              "id": "s3",
              "label": "Faculty Credentials",
              "value": "92% Adv. Degrees"
            }
          ]
        }
      },
      {
        "id": "es10-course-catalog",
        "type": "course-catalog",
        "variant": "courses-grid",
        "visible": true,
        "content": {
          "badge": "Featured Curriculums",
          "title": "Rigorous Academic Pathways",
          "subtitle": "Designed to challenge assumptions, foster analytical discipline, and build practical real-world mastery.",
          "items": [
            {
              "id": "ct1",
              "title": "Executive Generative AI Transformation Cohort",
              "description": "Demystifying AI capabilities, ethical data governance, and identifying high-impact automation pipelines.",
              "price": "3-Day Executive Intensive",
              "badge": "Premier Track"
            },
            {
              "id": "ct2",
              "title": "High-Impact Enterprise Leadership & Influence",
              "description": "Crucial negotiations, cross-functional stakeholder alignment, and managing distributed global teams.",
              "price": "6-Week Cohort"
            },
            {
              "id": "ct3",
              "title": "Agile at Scale & Modern Product Delivery",
              "description": "Scrum/Kanban modernization, continuous discovery frameworks, and outcome-oriented OKR alignment.",
              "price": "Enterprise Custom"
            }
          ]
        }
      },
      {
        "id": "es10-faculty-showcase",
        "type": "faculty-showcase",
        "variant": "faculty-cards",
        "visible": true,
        "content": {
          "badge": "Distinguished Leadership",
          "title": "Learn from Visionary Scholars & Practitioners",
          "subtitle": "Our faculty combine terminal academic degrees with active real-world leadership in their respective fields.",
          "items": [
            {
              "id": "fac1",
              "title": "Caroline Thorne, MBA",
              "description": "Former McKinsey partner and organizational design strategist advising Fortune 100 boards.",
              "meta": "Global Managing Director of Corporate Solutions",
              "imageUrl": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "es10-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "badge": "Admissions Open",
          "title": "Begin Your Transformative Educational Journey",
          "subtitle": "Take the first step toward academic excellence, creative discovery, and lifelong achievement.",
          "primaryButtonText": "Submit Application",
          "primaryButtonLink": "#apply",
          "secondaryButtonText": "Download Prospectus",
          "secondaryButtonLink": "#prospectus"
        }
      },
      {
        "id": "es10-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Vanguard Enterprise Executive Learning & Upskilling",
          "description": "Custom corporate education solutions for Fortune 500 leadership, agile enterprise transformation, and organizational AI adoption.",
          "copyrightText": "© 2026 Vanguard Enterprise Executive Learning & Upskilling. All institutional rights reserved. Fully accredited."
        }
      }
    ]
  },
  {
    "id": "edu-study-abroad-consultancy-01",
    "slug": "globalpass-study-abroad-consultancy",
    "name": "GlobalPass Overseas University Admissions & Visa Advisory",
    "description": "Full-service international educational consultancy guiding students through Ivy League, Oxbridge, Canadian, and Australian university admissions and visas.",
    "industryId": "education",
    "categoryId": "study-abroad-consultancy",
    "collectionId": "modern-school",
    "designStyle": "modern-corporate",
    "featured": false,
    "tags": [
      "study abroad",
      "university admissions",
      "visa consultancy",
      "ivy league",
      "scholarships",
      "oxbridge"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "es11-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "GLOBALPASS OVERSEAS UNIV",
          "primaryButtonText": "Apply Now",
          "primaryButtonLink": "#apply",
          "navLinks": [
            {
              "label": "Academic Programs",
              "href": "#courses"
            },
            {
              "label": "Faculty & Mentors",
              "href": "#faculty"
            },
            {
              "label": "Admissions & Aid",
              "href": "#admissions"
            },
            {
              "label": "Campus Tour",
              "href": "#tour"
            }
          ]
        }
      },
      {
        "id": "es11-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "99.2% Visa Success Rate • $14M+ Merit Scholarships Secured",
          "title": "Your Gateway to the World’s Most Renowned Global Universities",
          "subtitle": "From personal statement polishing and SAT/IELTS prep to student visa approvals and foreign housing, we walk every step of your journey abroad.",
          "primaryButtonText": "Explore Programs",
          "primaryButtonLink": "#courses",
          "secondaryButtonText": "Schedule a Visit",
          "secondaryButtonLink": "#tour",
          "imageUrl": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Student Success Rate",
              "value": "98.5%"
            },
            {
              "id": "s2",
              "label": "Alumni Network",
              "value": "45,000+"
            },
            {
              "id": "s3",
              "label": "Faculty Credentials",
              "value": "92% Adv. Degrees"
            }
          ]
        }
      },
      {
        "id": "es11-course-catalog",
        "type": "course-catalog",
        "variant": "courses-grid",
        "visible": true,
        "content": {
          "badge": "Featured Curriculums",
          "title": "Rigorous Academic Pathways",
          "subtitle": "Designed to challenge assumptions, foster analytical discipline, and build practical real-world mastery.",
          "items": [
            {
              "id": "sa1",
              "title": "US Ivy League & Top 30 Comprehensive Package",
              "description": "Common App narrative strategy, supplemental essay reviews, activity list optimization, and interview drills.",
              "price": "Full Cycle",
              "badge": "Premier Track"
            },
            {
              "id": "sa2",
              "title": "UK Oxbridge & Russell Group UCAS Application",
              "description": "Rigorous subject test prep (STEP/MAT/UCAT), UCAS statement drafting, and collegiate interview simulations.",
              "price": "Full Cycle"
            },
            {
              "id": "sa3",
              "title": "Student Visa Filing & Financial Dossier Review",
              "description": "Bulletproof financial verification, DS-160 filing, mock consular visa interviews, and health compliance.",
              "price": "Guaranteed Service"
            }
          ]
        }
      },
      {
        "id": "es11-faculty-showcase",
        "type": "faculty-showcase",
        "variant": "faculty-cards",
        "visible": true,
        "content": {
          "badge": "Distinguished Leadership",
          "title": "Learn from Visionary Scholars & Practitioners",
          "subtitle": "Our faculty combine terminal academic degrees with active real-world leadership in their respective fields.",
          "items": [
            {
              "id": "fac1",
              "title": "David Kensington, MA (Oxon)",
              "description": "Guiding over 800 international applicants to successful admissions at Oxford, Cambridge, and Ivy League schools.",
              "meta": "Lead Admissions Advisor • Former Oxford Reader",
              "imageUrl": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "es11-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "badge": "Admissions Open",
          "title": "Begin Your Transformative Educational Journey",
          "subtitle": "Take the first step toward academic excellence, creative discovery, and lifelong achievement.",
          "primaryButtonText": "Submit Application",
          "primaryButtonLink": "#apply",
          "secondaryButtonText": "Download Prospectus",
          "secondaryButtonLink": "#prospectus"
        }
      },
      {
        "id": "es11-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "GlobalPass Overseas University Admissions & Visa Advisory",
          "description": "Full-service international educational consultancy guiding students through Ivy League, Oxbridge, Canadian, and Australian university admissions and visas.",
          "copyrightText": "© 2026 GlobalPass Overseas University Admissions & Visa Advisory. All institutional rights reserved. Fully accredited."
        }
      }
    ]
  },
  {
    "id": "edu-educational-consultancy-01",
    "slug": "nextgen-educational-pathways-consultancy",
    "name": "NextGen Educational Pathways & Academic Advisory",
    "description": "Holistic K-12 and collegiate pathway planning, psychometric career mapping, customized tutoring strategy, and neurodivergent learning advocacy.",
    "industryId": "education",
    "categoryId": "educational-consultancy",
    "collectionId": "modern-school",
    "designStyle": "minimal-neutral",
    "featured": false,
    "tags": [
      "educational consultancy",
      "academic advising",
      "psychometric testing",
      "career counseling",
      "school placement"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "es12-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "NEXTGEN EDUCATIONAL PATH",
          "primaryButtonText": "Apply Now",
          "primaryButtonLink": "#apply",
          "navLinks": [
            {
              "label": "Academic Programs",
              "href": "#courses"
            },
            {
              "label": "Faculty & Mentors",
              "href": "#faculty"
            },
            {
              "label": "Admissions & Aid",
              "href": "#admissions"
            },
            {
              "label": "Campus Tour",
              "href": "#tour"
            }
          ]
        }
      },
      {
        "id": "es12-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Independent Educational Consultants Association (IECA) Member",
          "title": "Clarity, Strategy, and Confidence for Every Academic Milestone",
          "subtitle": "We identify your child’s innate learning profile, eliminate academic anxiety, and map a personalized roadmap to their ideal school and career.",
          "primaryButtonText": "Explore Programs",
          "primaryButtonLink": "#courses",
          "secondaryButtonText": "Schedule a Visit",
          "secondaryButtonLink": "#tour",
          "imageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Student Success Rate",
              "value": "98.5%"
            },
            {
              "id": "s2",
              "label": "Alumni Network",
              "value": "45,000+"
            },
            {
              "id": "s3",
              "label": "Faculty Credentials",
              "value": "92% Adv. Degrees"
            }
          ]
        }
      },
      {
        "id": "es12-course-catalog",
        "type": "course-catalog",
        "variant": "courses-grid",
        "visible": true,
        "content": {
          "badge": "Featured Curriculums",
          "title": "Rigorous Academic Pathways",
          "subtitle": "Designed to challenge assumptions, foster analytical discipline, and build practical real-world mastery.",
          "items": [
            {
              "id": "ec1",
              "title": "Comprehensive Psychometric & Aptitude Assessment",
              "description": "In-depth cognitive processing analysis, learning style evaluation, and future-proof career match report.",
              "price": "$750 Evaluation",
              "badge": "Premier Track"
            },
            {
              "id": "ec2",
              "title": "Boarding School & Day School Placement Strategy",
              "description": "School shortlisting, campus visit planning, SSAT/ISEE strategy, and parent interview coaching.",
              "price": "Admissions Package"
            },
            {
              "id": "ec3",
              "title": "Neurodiverse & IEP Academic Advocacy",
              "description": "Specialized accommodations advocacy for ADHD and dyslexia with tailored executive functioning coaching.",
              "price": "Ongoing Support"
            }
          ]
        }
      },
      {
        "id": "es12-faculty-showcase",
        "type": "faculty-showcase",
        "variant": "faculty-cards",
        "visible": true,
        "content": {
          "badge": "Distinguished Leadership",
          "title": "Learn from Visionary Scholars & Practitioners",
          "subtitle": "Our faculty combine terminal academic degrees with active real-world leadership in their respective fields.",
          "items": [
            {
              "id": "fac1",
              "title": "Rebecca Vance-Holt, M.S., CEP",
              "description": "Over 20 years guiding families toward empowering educational environments where children thrive.",
              "meta": "Certified Educational Planner • IECA Professional Member",
              "imageUrl": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "es12-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "badge": "Admissions Open",
          "title": "Begin Your Transformative Educational Journey",
          "subtitle": "Take the first step toward academic excellence, creative discovery, and lifelong achievement.",
          "primaryButtonText": "Submit Application",
          "primaryButtonLink": "#apply",
          "secondaryButtonText": "Download Prospectus",
          "secondaryButtonLink": "#prospectus"
        }
      },
      {
        "id": "es12-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "NextGen Educational Pathways & Academic Advisory",
          "description": "Holistic K-12 and collegiate pathway planning, psychometric career mapping, customized tutoring strategy, and neurodivergent learning advocacy.",
          "copyrightText": "© 2026 NextGen Educational Pathways & Academic Advisory. All institutional rights reserved. Fully accredited."
        }
      }
    ]
  }
];
