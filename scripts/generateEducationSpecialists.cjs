const fs = require('fs');
const path = require('path');
const { writeTemplateFile } = require('./writeHelper.cjs');

const educationSpecs = [
  {
    id: 'school',
    name: 'Oakridge Preparatory Academy',
    slug: 'oakridge-preparatory-academy',
    desc: 'Exemplary K-12 preparatory institution blending classical humanities, competitive robotics, and Olympic-grade athletic development.',
    style: 'academic-classic',
    thumb: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    tags: ['school', 'k12', 'preparatory academy', 'academics', 'stem labs', 'athletics'],
    heroBadge: 'Cognia Accredited • Top 1% National Merit Scholars',
    title: 'Cultivating Inquiring Minds and Principled Global Leaders',
    subtitle: 'From exploratory primary education through AP Capstone diplomas, Oakridge prepares students to excel at the world’s most demanding universities.',
    courses: [
      { id: 'c1', title: 'AP Capstone & Research Diploma', description: 'Two-year interdisciplinary seminar fostering advanced collegiate research, data synthesis, and oral defense.', price: 'Grades 11-12' },
      { id: 'c2', title: 'FIRST Robotics & Autonomous Systems', description: 'Hands-on CAD modeling, pneumatic engineering, and C++ control algorithm design for global competitions.', price: 'Grades 7-12' },
      { id: 'c3', title: 'Classical Humanities & Rhetoric Studio', description: 'Deep engagement with foundational Western and Eastern texts, formal debate, and persuasive writing.', price: 'Grades 6-10' }
    ],
    faculty: { name: 'Dr. Evelyn Montgomery, Ed.D.', role: 'Head of School • Columbia Teachers College', desc: 'Over 24 years directing elite college preparatory institutions with a focus on student intellectual autonomy.' }
  },
  {
    id: 'public-school',
    name: 'Westfield Community Public High School',
    slug: 'westfield-community-public-school',
    desc: 'Award-winning Blue Ribbon comprehensive public high school celebrating academic rigor, dual enrollment college credits, and inclusive civic engagement.',
    style: 'modern-corporate',
    thumb: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=80',
    tags: ['public school', 'high school', 'blue ribbon', 'dual enrollment', 'stem', 'civics'],
    heroBadge: 'National Blue Ribbon Exemplary High School • 98% Graduation Rate',
    title: 'Accessible Academic Excellence and Vibrant Civic Community',
    subtitle: 'Empowering every student with tuition-free college dual credits, state-of-the-art career-tech labs, and championship athletic programs.',
    courses: [
      { id: 'ps1', title: 'University Dual-Credit Pathways', description: 'Earn up to 30 transferable college credits in partnership with State University before graduating high school.', price: 'Free Tuition' },
      { id: 'ps2', title: 'Biotechnology & Environmental Science Lab', description: 'Real-world genetic sequencing, CRISPR introductory modules, and local watershed conservation field studies.', price: 'STEM Track' },
      { id: 'ps3', title: 'Comprehensive Performing & Fine Arts', description: 'Award-winning symphony orchestra, wind ensemble, Broadway theatrical staging, and ceramics atelier.', price: 'Fine Arts' }
    ],
    faculty: { name: 'Principal Marcus Sterling, M.Ed.', role: 'District Principal of the Year • Stanford Fellow', desc: 'Champion of equitable high-rigor curriculum pathways and community-integrated career mentorship.' }
  },
  {
    id: 'private-school',
    name: 'St. Jude Collegiate Independent School',
    slug: 'st-jude-collegiate-private-school',
    desc: 'Historic independent day and boarding academy dedicated to small Harkness table seminars, ethical character formation, and 100% university matriculation.',
    style: 'academic-classic',
    thumb: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    tags: ['private school', 'independent school', 'boarding school', 'harkness table', 'ivy league prep', 'character'],
    heroBadge: '100% University Acceptance • 7:1 Student-to-Faculty Ratio',
    title: 'Intellectual Rigor, Socratic Inquiry, and Timeless Character',
    subtitle: 'Where round-table discussion replaces passive lectures, and lifelong mentorship unlocks every student’s deepest academic and creative potential.',
    courses: [
      { id: 'pvs1', title: 'Harkness Humanities Seminar', description: 'Discussion-driven peer analysis of classical literature, political philosophy, and historical jurisprudence.', price: 'Upper School' },
      { id: 'pvs2', title: 'Biomedical Innovation & Neuroscience', description: 'Advanced wet lab research analyzing cellular regeneration, cognitive behavior, and bioethics.', price: 'Honor Elective' },
      { id: 'pvs3', title: 'Global Diplomacy & Model United Nations', description: 'Intensive geopolitical negotiation, international treaty drafting, and multi-lateral crisis simulations.', price: 'Co-Curricular' }
    ],
    faculty: { name: 'Dr. Archibald Sterling, D.Phil. (Oxon)', role: 'Dean of Academic Affairs • Rhodes Scholar', desc: 'Dedicated to fostering analytical precision and moral responsibility through Socratic discussion.' }
  },
  {
    id: 'primary-school',
    name: 'Little Pioneers Elementary & Primary School',
    slug: 'little-pioneers-primary-school',
    desc: 'Joyful, play-grounded primary academy blending inquiry-based STEM, phonics mastery, and nature-immersive outdoor classrooms for early learners.',
    style: 'soft-pastel',
    thumb: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    tags: ['primary school', 'elementary school', 'early learning', 'phonics', 'kindergarten', 'inquiry based'],
    heroBadge: 'Early Childhood Excellence • Nature Immersion Campus',
    title: 'Where Curiosity Takes Root and Lifelong Joy in Learning Begins',
    subtitle: 'Nurturing confident readers, creative thinkers, and kind friends in a warm, wonder-filled environment designed specifically for young minds.',
    courses: [
      { id: 'pri1', title: 'Multi-Sensory Phonics & Early Literacy', description: 'Structured Orton-Gillingham methodology ensuring effortless reading fluency and expressive storytelling.', price: 'Kindergarten - G2' },
      { id: 'pri2', title: 'Exploratory Nature STEM & Garden Lab', description: 'Botany seed-cycles, weather stations, and tactile physics through water play and block architecture.', price: 'All Grades' },
      { id: 'pri3', title: 'Creative Expression & Orff Music Studio', description: 'Early percussion rhythms, melodic exploration, watercolors, and dramatic imaginative play.', price: 'Arts Enrichment' }
    ],
    faculty: { name: 'Sarah Jenkins, M.S. Early Education', role: 'Primary School Director • Reggio Emilia Certified', desc: 'Over 18 years shaping joyful, developmentally responsive elementary learning spaces.' }
  },
  {
    id: 'college',
    name: 'Beacon Hill Undergraduate Collegiate Institute',
    slug: 'beacon-hill-undergraduate-college',
    desc: 'Distinguished 4-year undergraduate liberal arts and sciences college known for undergraduate research fellowships, close faculty mentorship, and career launch.',
    style: 'academic-classic',
    thumb: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    tags: ['college', 'undergraduate', 'liberal arts', 'bachelor degree', 'campus life', 'research'],
    heroBadge: 'Top 10 National Liberal Arts • 94% Career or Grad School in 6 Mo',
    title: 'Transformative Undergraduate Education Grounded in Discovery',
    subtitle: 'Engage in funded faculty research from your first year, master critical thinking across disciplines, and join an influential alumni network.',
    courses: [
      { id: 'col1', title: 'B.S. in Computational Neuroscience', description: 'Combining deep neural networks, cognitive psychology, and wet lab electrophysiology.', price: '4-Year Degree' },
      { id: 'col2', title: 'B.A. in Political Economy & Global Policy', description: 'Interdisciplinary study of markets, geopolitical institutions, macroeconomics, and public law.', price: '4-Year Degree' },
      { id: 'col3', title: 'B.S. in Applied Clean Energy Engineering', description: 'Photovoltaic design, battery chemistries, grid integration, and thermodynamic sustainability.', price: 'ABET Accredited' }
    ],
    faculty: { name: 'Prof. Julian Vance, Ph.D.', role: 'Dean of Faculty • Harvard & Princeton Alum', desc: 'Author of 4 books on higher education pedagogy and advocate of undergraduate research fellowships.' }
  },
  {
    id: 'dental-college',
    name: 'Apex Institute of Dental Medicine & Oral Surgery',
    slug: 'apex-dental-medicine-college',
    desc: 'CODA-accredited dental medical school offering Doctor of Dental Medicine (DMD), post-doctoral orthodontic residency, and advanced haptic simulation suites.',
    style: 'medical-clean',
    thumb: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    tags: ['dental college', 'dmd', 'dental school', 'oral surgery', 'orthodontics', 'dental clinical training'],
    heroBadge: 'CODA Accredited • 100% Board Pass Rate • 60-Station Haptic Lab',
    title: 'Training the Next Generation of Elite Clinicians and Oral Surgeons',
    subtitle: 'Master restorative dentistry, implantology, and micro-endodontics using cutting-edge 3D virtual reality haptic simulators and supervised community clinics.',
    courses: [
      { id: 'dc1', title: 'Doctor of Dental Medicine (DMD) Curriculum', description: 'Comprehensive 4-year pre-doctoral curriculum integrating biomedical fundamentals with intensive clinical rotations.', price: '4-Year Professional' },
      { id: 'dc2', title: 'Postgraduate Orthodontics & Dentofacial Residency', description: '36-month specialty certificate and M.S. in complex clear aligner biomechanics and surgical orthognathics.', price: 'Residency Track' },
      { id: 'dc3', title: 'Implantology & Bone Augmentation Fellowship', description: 'Surgical placement of endosseous implants, sinus lifts, and guided bone regeneration procedures.', price: 'Advanced Fellowship' }
    ],
    faculty: { name: 'Dr. Raymond Zhao, DMD, MD, FACS', role: 'Dean of Dental Medicine • Board Certified Oral Surgeon', desc: 'Former president of the Oral Surgery Academy with 30 years in surgical dental education.' }
  },
  {
    id: 'arts-college',
    name: 'Prism Conservatory of Fine Arts & Spatial Design',
    slug: 'prism-conservatory-fine-arts',
    desc: 'Internationally acclaimed visual arts conservatory offering BFA and MFA degrees in fine arts, 3D digital animation, fashion design, and spatial architecture.',
    style: 'bold-creative',
    thumb: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80',
    tags: ['arts college', 'fine arts', 'bfa', 'animation', 'fashion design', 'sculpture', 'conservatory'],
    heroBadge: 'NASAD Accredited • Global Alumni Exhibiting at Venice Biennale',
    title: 'Ignite Provocative Vision. Master Timeless and Emerging Mediums.',
    subtitle: 'Private studio space for every student, world-class foundry and kiln facilities, and industry pipelines to leading animation studios and galleries.',
    courses: [
      { id: 'ac1', title: 'BFA in 3D Character Animation & VFX', description: 'Industry-standard Maya, Houdini, and Unreal Engine pipelines mentored by Pixar and ILM veterans.', price: '4-Year BFA' },
      { id: 'ac2', title: 'BFA in Contemporary Painting & Sculpture', description: 'Large-scale canvas construction, bronze casting, conceptual installation, and solo gallery exhibition.', price: '4-Year BFA' },
      { id: 'ac3', title: 'MFA in Spatial Design & Sustainable Architecture', description: 'Postgraduate exploration of regenerative materials, kinetic structures, and urban public installations.', price: '2-Year MFA' }
    ],
    faculty: { name: 'Helena Vane, MFA', role: 'Dean of Visual Arts • Whitney Biennial Artist', desc: 'Internationally recognized sculptor whose monumental public works stand across 14 international capitals.' }
  },
  {
    id: 'competitive-exam-coaching',
    name: 'Zenith Premier Entrance & Olympiad Coaching',
    slug: 'zenith-entrance-olympiad-coaching',
    desc: 'Results-obsessed preparatory institute producing national top-100 rankers in IIT-JEE, NEET, MCAT, and International Science Olympiads.',
    style: 'modern-corporate',
    thumb: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    tags: ['exam coaching', 'iit jee', 'neet', 'mcat', 'olympiad', 'test prep', 'rank booster'],
    heroBadge: 'Over 480 Top-100 National Ranks • AI Adaptive Problem Sets',
    title: 'Strategic Mastery, Speed, and Flawless Conceptual Precision',
    subtitle: 'Taught exclusively by top percentile mentors and Olympiad medalists. We turn difficult physics, organic chemistry, and calculus into intuitive reflex.',
    courses: [
      { id: 'ce1', title: 'IIT-JEE Advanced Mastery Intensive', description: 'Comprehensive mechanics, electrodynamics, organic synthesis, and advanced coordinate geometry.', price: '1-Year Program' },
      { id: 'ce2', title: 'NEET / Medical Entrance Biology & Chemistry', description: 'High-yield NCERT diagram deconstruction, genetics problem solving, and weekly computer-based test drills.', price: '2-Year Program' },
      { id: 'ce3', title: 'Physics & Math Olympiad Elite Batch', description: 'Non-routine Olympiad problems, Putnam-level proofs, and specialized international contest mentorship.', price: 'By Selection Only' }
    ],
    faculty: { name: 'Prof. Alok Mukherjee, M.Tech (IIT Kanpur)', role: 'Head Academic Director • 25+ Years Mentorship', desc: 'Personal mentor to 32 AIR Top-50 rankers in engineering and medicine.' }
  },
  {
    id: 'programming-academy',
    name: 'CodeForge Full-Stack & AI Engineering Academy',
    slug: 'codeforge-programming-academy',
    desc: 'Intensive software engineering academy producing production-ready full-stack engineers, cloud architects, and applied LLM developers.',
    style: 'technology-gradient',
    thumb: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    tags: ['programming academy', 'coding bootcamp', 'software engineering', 'full stack', 'ai developer', 'python', 'react'],
    heroBadge: '96% Job Placement in 180 Days • Average Starting Salary $118k',
    title: 'Build Production Software. Master Applied AI. Launch Your Tech Career.',
    subtitle: 'No toy projects. Build distributed microservices, train fine-tuned neural models, and pass senior technical interviews with Silicon Valley mentors.',
    courses: [
      { id: 'pa1', title: 'Full-Stack Software Architecture Bootcamp', description: 'TypeScript, Next.js, PostgreSQL, Docker, and Kubernetes deployment with CI/CD testing pipelines.', price: '16 Weeks Immersive' },
      { id: 'pa2', title: 'Applied Generative AI & LLM Engineering', description: 'RAG architectures, vector embeddings (Pinecone/Milvus), LangChain, and fine-tuning open weights models.', price: '12 Weeks Advanced' },
      { id: 'pa3', title: 'Algorithms, Data Structures & System Design', description: 'Master distributed consensus, caching strategies, load balancing, and competitive LeetCode patterns.', price: '8 Weeks Part-Time' }
    ],
    faculty: { name: 'Alexandre Duval', role: 'Chief Instructor • Ex-Senior Staff Engineer at Stripe', desc: 'Over 16 years scaling high-throughput distributed systems and mentoring 1,200+ junior engineers.' }
  },
  {
    id: 'corporate-training',
    name: 'Vanguard Enterprise Executive Learning & Upskilling',
    slug: 'vanguard-enterprise-corporate-training',
    desc: 'Custom corporate education solutions for Fortune 500 leadership, agile enterprise transformation, and organizational AI adoption.',
    style: 'modern-corporate',
    thumb: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    tags: ['corporate training', 'executive education', 'upskilling', 'leadership development', 'change management'],
    heroBadge: 'Trusted by 42 Fortune 500 Enterprises • Measured ROI Assessment',
    title: 'Reskill Your Workforce for the Age of Intelligent Automation',
    subtitle: 'From C-suite strategic AI roadmaps to team-wide agile execution, we design bespoke cohorts that directly accelerate business KPI velocity.',
    courses: [
      { id: 'ct1', title: 'Executive Generative AI Transformation Cohort', description: 'Demystifying AI capabilities, ethical data governance, and identifying high-impact automation pipelines.', price: '3-Day Executive Intensive' },
      { id: 'ct2', title: 'High-Impact Enterprise Leadership & Influence', description: 'Crucial negotiations, cross-functional stakeholder alignment, and managing distributed global teams.', price: '6-Week Cohort' },
      { id: 'ct3', title: 'Agile at Scale & Modern Product Delivery', description: 'Scrum/Kanban modernization, continuous discovery frameworks, and outcome-oriented OKR alignment.', price: 'Enterprise Custom' }
    ],
    faculty: { name: 'Caroline Thorne, MBA', role: 'Global Managing Director of Corporate Solutions', desc: 'Former McKinsey partner and organizational design strategist advising Fortune 100 boards.' }
  },
  {
    id: 'study-abroad-consultancy',
    name: 'GlobalPass Overseas University Admissions & Visa Advisory',
    slug: 'globalpass-study-abroad-consultancy',
    desc: 'Full-service international educational consultancy guiding students through Ivy League, Oxbridge, Canadian, and Australian university admissions and visas.',
    style: 'modern-corporate',
    thumb: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    tags: ['study abroad', 'university admissions', 'visa consultancy', 'ivy league', 'scholarships', 'oxbridge'],
    heroBadge: '99.2% Visa Success Rate • $14M+ Merit Scholarships Secured',
    title: 'Your Gateway to the World’s Most Renowned Global Universities',
    subtitle: 'From personal statement polishing and SAT/IELTS prep to student visa approvals and foreign housing, we walk every step of your journey abroad.',
    courses: [
      { id: 'sa1', title: 'US Ivy League & Top 30 Comprehensive Package', description: 'Common App narrative strategy, supplemental essay reviews, activity list optimization, and interview drills.', price: 'Full Cycle' },
      { id: 'sa2', title: 'UK Oxbridge & Russell Group UCAS Application', description: 'Rigorous subject test prep (STEP/MAT/UCAT), UCAS statement drafting, and collegiate interview simulations.', price: 'Full Cycle' },
      { id: 'sa3', title: 'Student Visa Filing & Financial Dossier Review', description: 'Bulletproof financial verification, DS-160 filing, mock consular visa interviews, and health compliance.', price: 'Guaranteed Service' }
    ],
    faculty: { name: 'David Kensington, MA (Oxon)', role: 'Lead Admissions Advisor • Former Oxford Reader', desc: 'Guiding over 800 international applicants to successful admissions at Oxford, Cambridge, and Ivy League schools.' }
  },
  {
    id: 'educational-consultancy',
    name: 'NextGen Educational Pathways & Academic Advisory',
    slug: 'nextgen-educational-pathways-consultancy',
    desc: 'Holistic K-12 and collegiate pathway planning, psychometric career mapping, customized tutoring strategy, and neurodivergent learning advocacy.',
    style: 'minimal-neutral',
    thumb: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80',
    tags: ['educational consultancy', 'academic advising', 'psychometric testing', 'career counseling', 'school placement'],
    heroBadge: 'Independent Educational Consultants Association (IECA) Member',
    title: 'Clarity, Strategy, and Confidence for Every Academic Milestone',
    subtitle: 'We identify your child’s innate learning profile, eliminate academic anxiety, and map a personalized roadmap to their ideal school and career.',
    courses: [
      { id: 'ec1', title: 'Comprehensive Psychometric & Aptitude Assessment', description: 'In-depth cognitive processing analysis, learning style evaluation, and future-proof career match report.', price: '$750 Evaluation' },
      { id: 'ec2', title: 'Boarding School & Day School Placement Strategy', description: 'School shortlisting, campus visit planning, SSAT/ISEE strategy, and parent interview coaching.', price: 'Admissions Package' },
      { id: 'ec3', title: 'Neurodiverse & IEP Academic Advocacy', description: 'Specialized accommodations advocacy for ADHD and dyslexia with tailored executive functioning coaching.', price: 'Ongoing Support' }
    ],
    faculty: { name: 'Rebecca Vance-Holt, M.S., CEP', role: 'Certified Educational Planner • IECA Professional Member', desc: 'Over 20 years guiding families toward empowering educational environments where children thrive.' }
  }
];

function buildSection(idPrefix, type, variant, content) {
  return {
    id: `${idPrefix}-${type}`,
    type,
    variant,
    visible: true,
    content
  };
}

const templates = educationSpecs.map((spec, i) => {
  const p = `es${i + 1}`;
  return {
    id: `edu-${spec.id}-01`,
    slug: spec.slug,
    name: spec.name,
    description: spec.desc,
    industryId: 'education',
    categoryId: spec.id,
    collectionId: 'modern-school',
    designStyle: spec.style,
    featured: i % 3 === 0,
    tags: spec.tags,
    thumbnail: spec.thumb,
    sections: [
      buildSection(p, 'navbar', 'navbar-glass', {
        title: spec.name.toUpperCase().slice(0, 24),
        primaryButtonText: 'Apply Now',
        primaryButtonLink: '#apply',
        navLinks: [
          { label: 'Academic Programs', href: '#courses' },
          { label: 'Faculty & Mentors', href: '#faculty' },
          { label: 'Admissions & Aid', href: '#admissions' },
          { label: 'Campus Tour', href: '#tour' }
        ]
      }),
      buildSection(p, 'hero', 'hero-split', {
        badge: spec.heroBadge,
        title: spec.title,
        subtitle: spec.subtitle,
        primaryButtonText: 'Explore Programs',
        primaryButtonLink: '#courses',
        secondaryButtonText: 'Schedule a Visit',
        secondaryButtonLink: '#tour',
        imageUrl: spec.thumb,
        stats: [
          { id: 's1', label: 'Student Success Rate', value: '98.5%' },
          { id: 's2', label: 'Alumni Network', value: '45,000+' },
          { id: 's3', label: 'Faculty Credentials', value: '92% Adv. Degrees' }
        ]
      }),
      buildSection(p, 'course-catalog', 'courses-grid', {
        badge: 'Featured Curriculums',
        title: 'Rigorous Academic Pathways',
        subtitle: 'Designed to challenge assumptions, foster analytical discipline, and build practical real-world mastery.',
        items: spec.courses.map((c, idx) => ({
          id: c.id,
          title: c.title,
          description: c.description,
          price: c.price,
          badge: idx === 0 ? 'Premier Track' : undefined
        }))
      }),
      buildSection(p, 'faculty-showcase', 'faculty-cards', {
        badge: 'Distinguished Leadership',
        title: 'Learn from Visionary Scholars & Practitioners',
        subtitle: 'Our faculty combine terminal academic degrees with active real-world leadership in their respective fields.',
        items: [
          {
            id: 'fac1',
            title: spec.faculty.name,
            description: spec.faculty.desc,
            meta: spec.faculty.role,
            imageUrl: spec.thumb
          }
        ]
      }),
      buildSection(p, 'cta', 'cta-banner-glow', {
        badge: 'Admissions Open',
        title: 'Begin Your Transformative Educational Journey',
        subtitle: 'Take the first step toward academic excellence, creative discovery, and lifelong achievement.',
        primaryButtonText: 'Submit Application',
        primaryButtonLink: '#apply',
        secondaryButtonText: 'Download Prospectus',
        secondaryButtonLink: '#prospectus'
      }),
      buildSection(p, 'footer', 'footer-dark-editorial', {
        title: spec.name,
        description: spec.desc,
        copyrightText: `© 2026 ${spec.name}. All institutional rights reserved. Fully accredited.`
      })
    ]
  };
});

writeTemplateFile('educationSpecialistsTemplates.ts', 'EDUCATION_SPECIALISTS_TEMPLATES', templates);
console.log(`Generated ${templates.length} education specialist templates successfully!`);
