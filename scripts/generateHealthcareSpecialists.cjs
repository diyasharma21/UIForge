const fs = require('fs');
const path = require('path');
const { writeTemplateFile } = require('./writeHelper.cjs');

const healthcareSpecs = [
  {
    id: 'neurosurgeon',
    name: 'Apex Cranial & Spine Neurosurgery Institute',
    slug: 'apex-neurosurgery-institute',
    desc: 'Fellowship-trained neurosurgeons specializing in minimally invasive spine decompression, cranial microsurgery, and robotic computer-guided neuronavigation.',
    style: 'medical-clean',
    thumb: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80',
    tags: ['neurosurgeon', 'spine surgery', 'brain surgery', 'neurosurgery', 'cranial', 'minimally invasive'],
    heroBadge: 'Board-Certified Neurosurgeons • Computer-Assisted Navigation',
    title: 'Precision Cranial & Complex Spine Surgery Powered by Micro-Robotics',
    subtitle: 'Restoring functional mobility and neurological health with world-leading surgical expertise and compassionate, patient-centered postoperative rehabilitation.',
    services: [
      { id: 'ns1', title: 'Minimally Invasive Spine Surgery (MISS)', description: 'Keyhole access techniques preserving muscle integrity with reduced recovery times.', price: 'Consultation $450' },
      { id: 'ns2', title: 'Cranial Tumors & Microvascular Decompression', description: 'Intraoperative neuro-monitoring for trigeminal neuralgia and acoustic neuromas.', price: 'Surgical Evaluation' },
      { id: 'ns3', title: 'Cervical Disc Arthroplasty', description: 'Next-generation artificial disc replacement restoring natural cervical range of motion.', price: 'Specialized Consult' }
    ],
    doctor: { name: 'Dr. Alistair Sterling, MD, FAANS', role: 'Chief of Neurosurgery • Harvard Fellow', desc: 'Over 22 years of surgical excellence with more than 4,200 successful cranial and spinal operations performed.' }
  },
  {
    id: 'orthopedic-doctor',
    name: 'Vanguard Orthopedic & Joint Reconstruction',
    slug: 'vanguard-orthopedic-reconstruction',
    desc: 'Advanced robotic-assisted joint replacement, sports cartilage restoration, and comprehensive biomechanical rehabilitation.',
    style: 'medical-clean',
    thumb: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    tags: ['orthopedic', 'joint replacement', 'sports medicine', 'knee surgery', 'hip replacement', 'rotator cuff'],
    heroBadge: 'Mako Robotic-Arm Assisted Surgery • Rapid Recovery Protocol',
    title: 'Breakthrough Orthopedic Mobility and Joint Restoration',
    subtitle: 'Eliminate chronic pain and return to high-impact living with personalized arthroscopic repairs and sub-millimeter robotic joint reconstructions.',
    services: [
      { id: 'op1', title: 'Robotic Total Knee Arthroplasty', description: 'CT-guided 3D pre-planning ensuring sub-millimeter component alignment and soft-tissue balance.', price: 'Comprehensive Protocol' },
      { id: 'op2', title: 'Anterior Approach Hip Replacement', description: 'Muscle-sparing incision allowing same-day weight bearing and expedited physical therapy.', price: 'Rapid Mobilization' },
      { id: 'op3', title: 'Complex Arthroscopic Shoulder Repair', description: 'Bio-inductive patch augmentation for massive rotator cuff tears and labral stabilization.', price: 'Elite Sports Recovery' }
    ],
    doctor: { name: 'Dr. Marcus Vance, MD, FAAOS', role: 'Lead Orthopedic Surgeon • Mayo Clinic Fellow', desc: 'Team physician for collegiate athletes specializing in minimally invasive joint preservation.' }
  },
  {
    id: 'skin-specialist',
    name: 'DermaMatrix Clinical Skin Specialist Practice',
    slug: 'dermamatrix-skin-specialist',
    desc: 'Evidence-based clinical treatments for stubborn eczema, chronic psoriasis, rosacea flare-ups, and systemic dermatologic conditions.',
    style: 'medical-clean',
    thumb: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=80',
    tags: ['skin specialist', 'psoriasis', 'eczema', 'dermatology', 'skin allergy', 'rosacea'],
    heroBadge: 'Clinical Dermatology • Phototherapy Center',
    title: 'Advanced Therapies for Chronic and Complex Dermatological Disorders',
    subtitle: 'From targeted biologics for severe psoriasis to narrow-band UVB phototherapy, we deliver profound skin relief backed by double-boarded dermatologists.',
    services: [
      { id: 'ss1', title: 'Targeted Biologic Immunotherapy', description: 'Monoclonal antibody protocols targeting IL-17 and IL-23 pathways for clear, sustained remission.', price: 'Specialized Consult' },
      { id: 'ss2', title: 'Narrowband UVB Phototherapy', description: 'In-clinic computerized light chambers for widespread vitiligo, eczema, and cutaneous T-cell lymphoma.', price: '$120 / session' },
      { id: 'ss3', title: 'Digital Dermoscopy Body Mapping', description: 'Automated total-body mole surveillance identifying atypical melanocytic lesions at the earliest stage.', price: '$350' }
    ],
    doctor: { name: 'Dr. Elena Rostova, MD, FAAD', role: 'Medical Director of Clinical Dermatology', desc: 'Specialist in autoimmune dermatoses and inflammatory barrier reconstruction.' }
  },
  {
    id: 'skincare-clinic',
    name: 'AuraLuxe Medical Skincare Atelier',
    slug: 'auraluxe-medical-skincare',
    desc: 'Where medical efficacy meets sensory luxury. Bespoke dermal infusions, medical microneedling, and cellular barrier restoration.',
    style: 'luxury-editorial',
    thumb: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    tags: ['skincare clinic', 'hydrafacial', 'microneedling', 'chemical peel', 'barrier repair', 'medical facial'],
    heroBadge: 'Physician-Formulated Protocols • Private Treatment Suites',
    title: 'Transformative Clinical Facials Engineered for Luminous Cellular Health',
    subtitle: 'Experience customized diamond-tip micro-exfoliation, medical PRP infusion, and bioactive peptide delivery inside our quiet architectural spa sanctuaries.',
    services: [
      { id: 'sc1', title: 'Triple-Infusion Hydro-Oxygen Facial', description: 'Vortex suction and lymphatic drainage paired with low-molecular hyaluronic acid and resveratrol.', price: '$290' },
      { id: 'sc2', title: 'Collagen-P.I.N. Medical Microneedling', description: 'Controlled dermal micro-punctures stimulating elastin synthesis paired with growth factor serums.', price: '$480' },
      { id: 'sc3', title: 'Bio-Nutri Glow Cellular Peel', description: 'Glycolic, mandelic, and phytic acid blend designed to dissolve hyperpigmentation without downtime.', price: '$220' }
    ],
    doctor: { name: 'Dr. Camille Laurent, MD', role: 'Aesthetic Physician & Skin Biologist', desc: 'Pioneer of barrier-protective protocol layering and customized epidermal recovery formulations.' }
  },
  {
    id: 'acne-treatment-clinic',
    name: 'ClearForm Acne & Scar Revision Clinic',
    slug: 'clearform-acne-scar-clinic',
    desc: 'Specialized multi-modal acne eradication, hormonal breakouts management, and fractional CO2 subcision for deep pitted acne scars.',
    style: 'minimal-neutral',
    thumb: 'https://images.unsplash.com/photo-1512290900672-1f55a124c653?auto=format&fit=crop&w=1200&q=80',
    tags: ['acne treatment', 'acne scars', 'subcision', 'tca cross', 'isotretinoin', 'clear skin'],
    heroBadge: '98% Patient Clearance Rate • Hormonal & Cystic Specialists',
    title: 'Permanent Acne Eradication and Advanced Micro-Surgical Scar Remodeling',
    subtitle: 'Break free from chronic breakout cycles. We combine low-dose isotretinoin management, AviClear 1726nm laser, and manual scar subcision.',
    services: [
      { id: 'ac1', title: 'AviClear Sebaceous Laser Protocol', description: 'FDA-cleared 1726nm laser selectively targeting overactive sebaceous glands for long-term acne remission.', price: '3-Session Series' },
      { id: 'ac2', title: 'TCA Cross & Subcision Remodeling', description: 'Manual release of tethered fibrotic scars combined with 90% trichloroacetic acid focal collagen induction.', price: '$650 / session' },
      { id: 'ac3', title: 'Fractional Non-Ablative Resurfacing', description: 'Stimulates deep reticular dermis to smooth rolling and boxcar scar depressions without prolonged redness.', price: '$500' }
    ],
    doctor: { name: 'Dr. Jonathan Park, MD, FAAD', role: 'Acne & Scar Reconstructive Specialist', desc: 'Over 14 years specializing exclusively in resistant cystic acne and structural scar revision.' }
  },
  {
    id: 'cosmetic-surgery-clinic',
    name: 'Elysium Plastic & Cosmetic Surgery Center',
    slug: 'elysium-cosmetic-surgery',
    desc: 'Accredited ambulatory surgical center delivering natural deep-plane facelifts, high-definition liposuction, and composite breast augmentation.',
    style: 'luxury-editorial',
    thumb: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    tags: ['cosmetic surgery', 'plastic surgeon', 'facelift', 'liposuction', 'rhinoplasty', 'breast augmentation'],
    heroBadge: 'Quad-A Accredited Surgical Suites • Natural Aesthetic Mastery',
    title: 'Harmonious, Undetectable Facial and Body Rejuvenation',
    subtitle: 'Under the guidance of triple-boarded plastic surgeons, discover bespoke transformations that honor your unique anatomy with natural elegance.',
    services: [
      { id: 'cs1', title: 'Deep-Plane Extended Facelift', description: 'Releases retaining ligaments and repositions the SMAS layer for natural, un-pulled jawline definition.', price: 'Consultation Required' },
      { id: 'cs2', title: 'Preservation Ultrasonic Rhinoplasty', description: 'Piezoelectric precision sculpting nasal bones without fracturing, minimizing bruising and edema.', price: 'Surgical Plan' },
      { id: 'cs3', title: 'High-Definition VASER Liposculpture', description: 'Ultrasound-assisted fat removal highlighting natural athletic muscle contours with rapid recovery.', price: 'Customized Quote' }
    ],
    doctor: { name: 'Dr. Sebastian Vance, MD, FACS', role: 'Board-Certified Plastic Surgeon', desc: 'Known internationally for natural facial rejuvenation and peer-reviewed deep plane vector techniques.' }
  },
  {
    id: 'hair-transplant-clinic',
    name: 'FolliCore Robotic Hair Restoration Institute',
    slug: 'follicore-robotic-hair-transplant',
    desc: 'State-of-the-art ARTAS iX robotic FUE hair transplants, dense packing hairline design, and pain-free donor zone preservation.',
    style: 'technology-gradient',
    thumb: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    tags: ['hair transplant', 'fue', 'artas', 'hairline restoration', 'beard transplant', 'hair restoration'],
    heroBadge: 'ARTAS iX AI Robotic System • Zero Linear Scarring',
    title: 'Permanent, High-Density Hair Transplants Guided by AI Robotics',
    subtitle: 'Precision harvesting of follicular units at micron angles. Maximized graft survival, natural swirl angle replication, and rapid healing.',
    services: [
      { id: 'ht1', title: 'ARTAS iX AI Robotic FUE', description: 'Algorithmically harvests healthy follicular units with optical cameras, protecting neighboring follicles.', price: 'From $4.50 / graft' },
      { id: 'ht2', title: 'Ultra-Dense Hairline Architecture', description: 'Hand-crafted single-hair graft micro-incisions mimicking natural organic growth direction.', price: 'Custom Design' },
      { id: 'ht3', title: 'Exosome & Growth Factor Infusion', description: 'Acellular bio-signals applied immediately post-transplant to shorten dormancy and speed sprouting.', price: '$1,200 / treatment' }
    ],
    doctor: { name: 'Dr. Tariq Al-Hassan, MD, FISHRS', role: 'Lead Hair Restoration Surgeon', desc: 'Over 18 years dedicated to surgical hairline design with over 6 million successful grafts transplanted.' }
  },
  {
    id: 'hair-restoration-clinic',
    name: 'RegenHair Non-Surgical Trichology & Restoration',
    slug: 'regenhair-trichology-clinic',
    desc: 'Medical management of androgenetic alopecia, telogen effluvium, low-level laser therapy, and personalized compounded peptide topicals.',
    style: 'medical-clean',
    thumb: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80',
    tags: ['hair loss', 'trichology', 'alopecia', 'prp hair', 'scalp therapy', 'hair restoration'],
    heroBadge: 'Trichoscopic Scalp Analysis • Evidence-Based Protocols',
    title: 'Halt Thinning Hair and Awaken Dormant Follicles Without Surgery',
    subtitle: 'Comprehensive medical trichology diagnosing nutrient deficiencies, scalp microbiome imbalances, and hormonal DHT sensitivity.',
    services: [
      { id: 'hr1', title: 'High-Concentration Scalp PRP', description: 'Double-spin platelet rich plasma injecting concentrated autologous growth factors directly to roots.', price: '$750 / session' },
      { id: 'hr2', title: 'Compounded Peptide & Finasteride Topicals', description: 'Custom pharmacy formulations avoiding systemic side effects while blocking localized DHT.', price: '$85 / month' },
      { id: 'hr3', title: 'Clinical Low-Level Laser Helmet Therapy', description: '650nm cold diode irradiation increasing ATP mitochondrial synthesis in miniaturized follicles.', price: 'In-Clinic / Home' }
    ],
    doctor: { name: 'Dr. Maya Lin, MD, Trichologist', role: 'Medical Director of Scalp Health', desc: 'Member of the International Association of Trichologists researching non-scarring alopecia interventions.' }
  },
  {
    id: 'laser-clinic',
    name: 'SpectraLight Advanced Medical Laser Center',
    slug: 'spectralight-medical-laser',
    desc: 'PicoSure picosecond tattoo clearance, Sciton Halo hybrid fractional skin resurfacing, and BBL HERO photo-rejuvenation.',
    style: 'technology-gradient',
    thumb: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    tags: ['laser clinic', 'picosure', 'laser resurfacing', 'tattoo removal', 'bbl laser', 'pigmentation'],
    heroBadge: 'Class-4 Medical Laser Suite • Licensed Laser Specialists',
    title: 'Gold-Standard Laser Wavelengths for Flawless Dermal Correction',
    subtitle: 'Harnessing fractional photothermolysis, picosecond acoustic waves, and vascular lasers to eliminate pigmentation, redness, and deep lines.',
    services: [
      { id: 'lc1', title: 'Sciton Halo Hybrid Fractional Laser', description: 'Simultaneously delivers ablative and non-ablative wavelengths for dramatic tone and pore reduction.', price: '$1,400 / session' },
      { id: 'lc2', title: 'PicoSure Pro Multi-Color Tattoo Removal', description: 'PressureWave technology shattering ink particles into dust without thermal burning.', price: 'From $190' },
      { id: 'lc3', title: 'BBL HERO Full Body Photofacial', description: 'High-speed pulsed light reversing solar elastosis and broken capillaries four times faster.', price: '$450' }
    ],
    doctor: { name: 'Dr. Julian Foster, MD', role: 'Director of Laser Surgery', desc: 'Key opinion leader on dual-wavelength fractional thermal physics and safe laser settings for Fitzpatrick skin types.' }
  },
  {
    id: 'aesthetic-clinic',
    name: 'Kallos Facial Architecture & Aesthetic Medicine',
    slug: 'kallos-aesthetic-clinic',
    desc: 'Micro-droplet neuromodulators, structural jawline contouring, tear-trough restoration, and biostimulatory collagen inductors.',
    style: 'luxury-editorial',
    thumb: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80',
    tags: ['aesthetic clinic', 'botox', 'fillers', 'sculptra', 'lip filler', 'jawline contouring'],
    heroBadge: 'Sculptra & Radiesse Master Center • Subtle Precision',
    title: 'Architectural Facial Rejuvenation Honoring Proportions and Motion',
    subtitle: 'Never overfilled, never frozen. We sculpt the dynamic facial tiers with micro-cannula techniques and collagen-stimulating poly-L-lactic acid.',
    services: [
      { id: 'ae1', title: 'Full Facial Balancing (Dermal Hyaluronic)', description: 'Structural mid-face, piriform, and chin augmentation supporting soft tissue drape.', price: 'From $850 / syringe' },
      { id: 'ae2', title: 'Sculptra Aesthetic Bio-Stimulation', description: 'Stimulates native type-1 collagen synthesis over 24 months for smooth, firm facial thickness.', price: '$900 / vial' },
      { id: 'ae3', title: 'Micro-Tox Pore Refinement & Smoothing', description: 'Intra-dermal micro-droplet neurotoxin reducing sebum secretion and softening superficial dynamic lines.', price: '$420' }
    ],
    doctor: { name: 'Dr. Vivienne Moreau, MD', role: 'Aesthetic Physician & Anatomist', desc: 'Internationally recognized injector emphasizing vascular mapping and harmonious 3D anatomy.' }
  },
  {
    id: 'dentist',
    name: 'Lumina Modern Dental & Smile Care',
    slug: 'lumina-modern-dental',
    desc: 'Comprehensive gentle general dentistry, digital 3D intraoral scanning, pain-free laser cleanings, and emergency tooth relief.',
    style: 'medical-clean',
    thumb: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
    tags: ['dentist', 'dental care', 'teeth cleaning', 'cavity filling', 'emergency dentist', 'dental exam'],
    heroBadge: 'Noise-Cancelling Headphones • Zero-Anxiety Care',
    title: 'Gentle, Technology-Driven Dental Care Designed for Total Peace of Mind',
    subtitle: 'Leave dental dread in the past. Experience warm ceiling TV displays, warm scented towels, ultrasonic hygiene cleanings, and same-day dental crowns.',
    services: [
      { id: 'dt1', title: 'Comprehensive Exam & 3D iTero Scan', description: 'Zero radiation digital tooth models paired with laser cavity detection and oral cancer screening.', price: '$150' },
      { id: 'dt2', title: 'Same-Day CEREC Porcelain Crowns', description: 'Milled in-house while you relax, eliminating messy impression molds and temporary crowns.', price: '$1,100' },
      { id: 'dt3', title: 'Laser-Assisted Periodontal Hygiene', description: 'Gentle bacterial decontamination eliminating gum inflammation without scalpels or sutures.', price: '$220' }
    ],
    doctor: { name: 'Dr. Nicholas Reed, DDS', role: 'General & Restorative Dentist', desc: 'Graduate of NYU College of Dentistry dedicated to compassionate, fear-free family oral health.' }
  },
  {
    id: 'orthodontist',
    name: 'AlignWorks Orthodontic Studio',
    slug: 'alignworks-orthodontic-studio',
    desc: 'Top 1% Diamond Plus Invisalign Provider, discreet ceramic brackets, and accelerated digital tooth alignment for teens and adults.',
    style: 'medical-clean',
    thumb: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80',
    tags: ['orthodontist', 'invisalign', 'braces', 'teeth straightening', 'retainers', 'clear aligners'],
    heroBadge: 'Diamond Plus Invisalign Provider • Virtual Progress Tracking',
    title: 'Transformative Smiles Aligned with Discretion and Speed',
    subtitle: 'Straighten your teeth without disrupting your lifestyle. Custom virtual 3D ClinCheck simulations show your finished smile before you even begin.',
    services: [
      { id: 'ot1', title: 'Comprehensive Invisalign Clear Aligners', description: 'SmartTrack material moving teeth with 75% more predictability. Removable for eating and flossing.', price: 'From $3,400' },
      { id: 'ot2', title: 'Clear Aesthetic Ceramic Braces', description: 'Translucent monocrystalline brackets that blend invisibly with your natural enamel.', price: 'From $3,800' },
      { id: 'ot3', title: 'Accelerated Orthodontics (Propel VPro)', description: 'High-frequency vibration device stimulating cellular alveolar bone remodeling to cut treatment time by 30%.', price: '$650' }
    ],
    doctor: { name: 'Dr. Sophia Chen, DMD, MS', role: 'Board-Certified Orthodontist', desc: 'Specialist in complex adult airway orthodontics and digital tooth biomechanics.' }
  },
  {
    id: 'pediatric-dentist',
    name: 'Sprout & Smile Pediatric Dental Wonderland',
    slug: 'sprout-pediatric-dental',
    desc: 'Joyful, fear-free pediatric dentistry featuring safari-themed private rooms, sensory-friendly options, and gentle preventive care.',
    style: 'soft-pastel',
    thumb: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1200&q=80',
    tags: ['pediatric dentist', 'kids dentist', 'baby teeth', 'fluoride', 'dental sealants', 'child friendly'],
    heroBadge: 'Board-Certified Pediatric Specialists • Sensory Certified',
    title: 'Where Kids Love Visiting the Dentist and Smiling Big',
    subtitle: 'From baby’s first tooth to orthodontic guidance for tweens, our child-focused team fosters lifelong oral hygiene with laughter and patience.',
    services: [
      { id: 'pd1', title: 'Infant Knee-to-Knee Dental Exams', description: 'Gentle checkups for infants under 12 months checking tongue ties and enamel calcification.', price: '$95' },
      { id: 'pd2', title: 'BPA-Free Protective Dental Sealants', description: 'Shields deep grooves on chewing molars from cavity-causing bacteria and sugary snacks.', price: '$55 / tooth' },
      { id: 'pd3', title: 'Laughing Gas & Gentle Sedation', description: 'Mild inhaled nitrous oxide to help anxious children stay calm and comfortable through treatment.', price: '$120' }
    ],
    doctor: { name: 'Dr. Hannah Bloom, DDS', role: 'Board-Certified Pediatric Dentist', desc: 'Fellow of the American Academy of Pediatric Dentistry with special training in sensory sensitivities.' }
  },
  {
    id: 'ophthalmologist',
    name: 'Visionary Eye Surgery & Retinal Institute',
    slug: 'visionary-eye-surgery',
    desc: 'Blade-free SMILE and LASIK laser vision correction, advanced multifocal cataract lens implants, and medical retinal diagnostics.',
    style: 'medical-clean',
    thumb: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    tags: ['ophthalmologist', 'lasik', 'cataract surgery', 'smile laser', 'glaucoma', 'retina specialist'],
    heroBadge: 'ZEISS VisuMax SMILE Center • PanOptix Multifocal Lenses',
    title: 'Crystal Clear Vision Restored with Micro-Precision Laser Optics',
    subtitle: 'Say goodbye to glasses and contacts. Wake up to crisp, high-definition sight with blade-free laser procedures completed in under 15 minutes.',
    services: [
      { id: 'op1', title: 'ZEISS SMILE Pro Laser Correction', description: 'Keyhole laser vision correction with no flap creation, preserving corneal biomechanics and tear film.', price: '$2,200 / eye' },
      { id: 'op2', title: 'Femtosecond Laser Cataract Surgery', description: 'Replaces cloudy crystalline lenses with trifocal PanOptix IOLs for near, intermediate, and distance vision.', price: 'Covered + Premium IOL' },
      { id: 'op3', title: 'Spectral-Domain OCT Retinal Imaging', description: 'Non-invasive high-resolution cross-sectional retinal mapping diagnosing macular degeneration and diabetic edema.', price: '$180' }
    ],
    doctor: { name: 'Dr. Arthur Sterling, MD, FACS', role: 'Cornea & Refractive Surgeon', desc: 'Performed over 18,000 successful laser vision corrections and laser-assisted cataract extractions.' }
  },
  {
    id: 'gynecologist',
    name: 'Haven Women’s Health & Gynecology Clinic',
    slug: 'haven-womens-health',
    desc: 'Holistic and clinical gynecological care covering PCOS management, endometriosis diagnostics, contraceptive choices, and menopause vitality.',
    style: 'minimal-neutral',
    thumb: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=1200&q=80',
    tags: ['gynecologist', 'womens health', 'pap smear', 'pcos', 'endometriosis', 'menopause'],
    heroBadge: 'All-Female Clinical Team • Compassionate Privacy',
    title: 'Empathetic, Comprehensive Healthcare for Every Season of Womanhood',
    subtitle: 'From annual preventive wellness visits to advanced minimally invasive laparoscopic procedures, we listen to your body and honor your choices.',
    services: [
      { id: 'gy1', title: 'Annual Well-Woman Preventive Screen', description: 'Cervical Pap smear, HPV testing, clinical breast exam, and comprehensive hormonal blood profiling.', price: '$180' },
      { id: 'gy2', title: 'PCOS & Metabolic Hormonal Care', description: 'Integrated nutritional, medication, and cycle regulation therapies restoring ovulatory balance.', price: '$250' },
      { id: 'gy3', title: 'Bio-Identical Hormone Optimization (BHRT)', description: 'Tailored estrogen and progesterone therapies relieving hot flashes, brain fog, and sleep disruption.', price: '$300' }
    ],
    doctor: { name: 'Dr. Rebecca Stone, MD, FACOG', role: 'Board-Certified Obstetrician & Gynecologist', desc: 'Dedicated to dismantling medical gaslighting and delivering transparent, research-backed female care.' }
  },
  {
    id: 'obstetrician',
    name: 'CradleCare Maternal & Obstetric Practice',
    slug: 'cradlecare-obstetric-practice',
    desc: 'Empowered pregnancy journeys with low-intervention birth plans, high-risk maternal-fetal surveillance, and 4D sonography.',
    style: 'soft-pastel',
    thumb: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1200&q=80',
    tags: ['obstetrician', 'pregnancy', 'prenatal care', 'childbirth', 'ultrasound', 'maternal care'],
    heroBadge: 'Low C-Section Rate • In-Clinic 4D HD-Live Ultrasounds',
    title: 'Guiding Mothers and Babies Safely from Conception to Delivery',
    subtitle: 'Every birth story is sacred. We collaborate with you to create a personalized labor plan in world-class partner hospital birthing suites.',
    services: [
      { id: 'ob1', title: 'Comprehensive Prenatal Care Program', description: 'Monthly and weekly checkups monitoring fetal heart tones, fundal growth, and maternal vitals.', price: 'Global Maternity Fee' },
      { id: 'ob2', title: 'GE Voluson HD-Live 4D Sonograms', description: 'Breathtaking photorealistic imaging revealing your baby’s facial expressions and movements in real time.', price: '$180' },
      { id: 'ob3', title: 'Postpartum 4th-Trimester Wellness', description: 'Pelvic floor therapy evaluation, postpartum depression screening, and lactation consultant support.', price: 'Included in Care' }
    ],
    doctor: { name: 'Dr. Sarah Jennings, MD, FACOG', role: 'Senior Obstetrician & Laborist', desc: 'Over 16 years attending over 3,500 peaceful deliveries with a passion for natural physiologic birth.' }
  },
  {
    id: 'maternity-hospital',
    name: 'Serenity Pavilion Maternity Hospital',
    slug: 'serenity-maternity-hospital',
    desc: 'Private luxury labor and delivery suites with water-birth tubs, Level III neonatal intensive care unit (NICU), and five-star room service.',
    style: 'luxury-editorial',
    thumb: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    tags: ['maternity hospital', 'birthing center', 'nicu', 'water birth', 'postpartum suite', 'labor and delivery'],
    heroBadge: 'Level-III NICU On-Site • 24/7 Anesthesiology & Neonatology',
    title: 'A Tranquil, World-Class Hospital Sanctuary for Welcoming New Life',
    subtitle: 'Enjoy the warmth of a boutique hotel combined with the uncompromising safety of board-certified obstetricians and neonatal specialists.',
    services: [
      { id: 'mh1', title: 'Private Boutique Birthing Suites', description: 'Spacious birthing suites featuring hydrotherapy tubs, customizable ambient lighting, and partner sleeping beds.', price: 'Insurance Accepted' },
      { id: 'mh2', title: 'Level-III Neonatal Intensive Care (NICU)', description: 'Private pod incubators for premature infants staffed 24/7 by fellowship-trained neonatologists.', price: 'Full Hospital Service' },
      { id: 'mh3', title: 'Postpartum Celebratory Dinner & Suite', description: 'Gourmet multi-course celebratory dining prepared by our executive chef for new parents.', price: 'Complimentary' }
    ],
    doctor: { name: 'Dr. Catherine Ross, MD', role: 'Chief of Maternal-Fetal Medicine', desc: 'Oversees safety and clinical quality across 4,800 annual deliveries in the regional flagship pavilion.' }
  },
  {
    id: 'ivf-center',
    name: 'Genesis Fertility & Advanced IVF Institute',
    slug: 'genesis-fertility-ivf',
    desc: 'Leading success rates with pre-implantation genetic screening (PGT-A), ICSI fertilization, egg freezing, and compassionate third-party reproduction.',
    style: 'medical-clean',
    thumb: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    tags: ['ivf center', 'fertility clinic', 'egg freezing', 'icsi', 'pgt-a', 'surrogacy'],
    heroBadge: '68% Clinical Pregnancy Rate • SART Verified Laboratory',
    title: 'Turning Hope Into Families with Next-Generation Reproductive Science',
    subtitle: 'Clean-room IVF embryology chambers, AI-assisted embryo selection, and deeply supportive fertility doctors guiding every step of your journey.',
    services: [
      { id: 'iv1', title: 'IVF with PGT-A Genetic Testing', description: 'Screening embryos for chromosomal euploidy to maximize implantation rates and minimize miscarriage risk.', price: 'Cycle Plans from $11,500' },
      { id: 'iv2', title: 'Vitrification Egg Freezing Program', description: 'Flash-freezing unfertilized oocytes at peak reproductive vitality for future family planning.', price: '$6,800 + Storage' },
      { id: 'iv3', title: 'Intracytoplasmic Sperm Injection (ICSI)', description: 'Direct injection of a single high-morphology sperm cell into each mature egg overcoming male-factor obstacles.', price: 'Included in Protocol' }
    ],
    doctor: { name: 'Dr. Alexander Vance, MD, FACOG', role: 'Reproductive Endocrinologist & Infertility Specialist', desc: 'Over 20 years guiding thousands of intended parents to healthy live births.' }
  },
  {
    id: 'gastroenterologist',
    name: 'Digestive Health & Endoscopy Institute',
    slug: 'digestive-health-endoscopy',
    desc: 'Painless propofol-sedated colonoscopies, acid reflux Stretta procedures, Crohn’s and colitis management, and microbiome diagnostics.',
    style: 'medical-clean',
    thumb: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',
    tags: ['gastroenterologist', 'colonoscopy', 'endoscopy', 'acid reflux', 'ibs', 'crohns'],
    heroBadge: 'Painless Twilight Sedation • High Adenoma Detection Rate',
    title: 'Complete Gastrointestinal Health and Early Colon Cancer Prevention',
    subtitle: 'From preventative routine screenings to targeted biologic therapies for irritable bowel disease, experience digestive comfort and reassurance.',
    services: [
      { id: 'ge1', title: 'High-Definition Screening Colonoscopy', description: 'AI-assisted computer vision detecting precancerous polyps with complete painless sedation.', price: 'Fully Insured Preventive' },
      { id: 'ge2', title: 'Upper Endoscopy (EGD) & Bravo pH', description: 'Diagnosing Barrett’s esophagus, hiatal hernias, and measuring 48-hour wireless acid reflux levels.', price: '$850' },
      { id: 'ge3', title: 'SIBO & Comprehensive Microbiome Profiling', description: 'Breath hydrogen testing and stool PCR assays identifying dysbiosis and small intestinal bacterial overgrowth.', price: '$290' }
    ],
    doctor: { name: 'Dr. Christopher Patel, MD, FACG', role: 'Board-Certified Gastroenterologist', desc: 'Specialist in advanced therapeutic endoscopy and clinical nutritional gastroenterology.' }
  },
  {
    id: 'pulmonologist',
    name: 'PulmoCare Lung & Sleep Medicine Specialists',
    slug: 'pulmocare-lung-sleep',
    desc: 'Targeted therapies for asthma, chronic obstructive pulmonary disease (COPD), pulmonary fibrosis, and in-lab sleep apnea diagnostics.',
    style: 'medical-clean',
    thumb: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    tags: ['pulmonologist', 'asthma', 'copd', 'sleep apnea', 'lung doctor', 'bronchoscopy'],
    heroBadge: 'AASM Accredited Sleep Lab • Full Pulmonary Function Testing',
    title: 'Breathe Freely and Sleep Soundly with Expert Respiratory Care',
    subtitle: 'Restoring lung capacity and nocturnal oxygenation through advanced biologic asthma inhalers, CPAP optimization, and pulmonary rehabilitation.',
    services: [
      { id: 'pu1', title: 'Complete Plethysmography PFT Testing', description: 'Measures forced expiratory volume (FEV1), total lung capacity, and gas diffusion capacity.', price: '$220' },
      { id: 'pu2', title: 'Home & In-Lab Polysomnography Sleep Studies', description: 'EEG and airflow tracking diagnosing obstructive sleep apnea and titration of whisper-quiet CPAP devices.', price: '$350' },
      { id: 'pu3', title: 'Bronchial Thermoplasty & Biologics', description: 'Interventional thermal treatments and anti-IgE/anti-IL5 monoclonal antibody injections for refractory asthma.', price: 'Specialist Evaluation' }
    ],
    doctor: { name: 'Dr. David Morales, MD, FCCP', role: 'Pulmonologist & Sleep Medicine Specialist', desc: 'Former director of critical care medicine dedicated to chronic airway optimization and restorative sleep.' }
  },
  {
    id: 'urologist',
    name: 'Precision Urology & Men’s Health Center',
    slug: 'precision-urology-center',
    desc: 'Da Vinci robotic prostatectomies, laser kidney stone clearance, gentle no-scalpel vasectomies, and low-T hormone optimization.',
    style: 'modern-corporate',
    thumb: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80',
    tags: ['urologist', 'kidney stone', 'vasectomy', 'prostate', 'mens health', 'urinary health'],
    heroBadge: 'Da Vinci Xi Robotic Surgery • 15-Minute No-Scalpel Vasectomy',
    title: 'Advanced Robotic Urological Surgery and Restorative Men’s Vitality',
    subtitle: 'Compassionate, discreet care delivering rapid laser lithotripsy for agonizing kidney stones and nerve-sparing robotic precision.',
    services: [
      { id: 'ur1', title: 'Holmium Laser Kidney Stone Lithotripsy', description: 'Dusts painful stones via flexible ureteroscopy with no external incisions and immediate relief.', price: 'Outpatient Procedure' },
      { id: 'ur2', title: 'No-Scalpel, No-Needle Vasectomy', description: 'Minimally invasive 15-minute in-office procedure with puncture technique and over 99.8% efficacy.', price: '$850' },
      { id: 'ur3', title: 'UroLift System for Enlarged Prostate (BPH)', description: 'Tiny permanent implants opening the urethra without heat, cutting, or sexual side effects.', price: 'Covered by Insurance' }
    ],
    doctor: { name: 'Dr. Gregory Vance, MD, FACS', role: 'Chief of Urologic Surgery', desc: 'Over 17 years specializing in robotic oncology and minimally invasive benign prostatic hyperplasia therapies.' }
  },
  {
    id: 'psychiatrist',
    name: 'AuraMind Neuropsychiatry & Ketamine Clinic',
    slug: 'auramind-neuropsychiatry',
    desc: 'Integrative adult psychiatry combining precise pharmacogenomic DNA medication matching, Spravato esketamine, and transcranial magnetic stimulation (TMS).',
    style: 'minimal-neutral',
    thumb: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    tags: ['psychiatrist', 'mental health', 'depression', 'anxiety', 'adhd', 'tms therapy'],
    heroBadge: 'GeneSight DNA Matching • FDA-Cleared Magstim TMS',
    title: 'Precision Neuropsychiatric Medicine for Lasting Cognitive Clarity',
    subtitle: 'Move past trial-and-error antidepressant cycles. We leverage genetic metabolic profiling and non-invasive brain stimulation for treatment-resistant depression.',
    services: [
      { id: 'ps1', title: 'Comprehensive Psychiatric Diagnostic Intake', description: '90-minute evaluation exploring neurochemistry, trauma history, sleep metrics, and biometric markers.', price: '$450' },
      { id: 'ps2', title: 'Deep TMS (Transcranial Magnetic Stimulation)', description: 'Painless magnetic pulses stimulating underactive prefrontal cortex circuits without medication side effects.', price: 'Insurance Covered' },
      { id: 'ps3', title: 'Spravato (Esketamine) In-Clinic Protocol', description: 'Rapid glutamate-pathway neurogenesis relieving acute suicidal ideation and major depressive disorder.', price: 'Specialized Program' }
    ],
    doctor: { name: 'Dr. Julianne Mercer, MD', role: 'Board-Certified Adult Psychiatrist', desc: 'Pioneer in interventional psychiatry combining neuroplasticity protocols with personalized medication management.' }
  },
  {
    id: 'psychologist',
    name: 'MindWell Clinical Psychology & Psychotherapy',
    slug: 'mindwell-psychology-clinic',
    desc: 'Doctorate-level clinical psychologists providing evidence-based cognitive behavioral therapy (CBT), EMDR trauma therapy, and psychological testing.',
    style: 'soft-pastel',
    thumb: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1200&q=80',
    tags: ['psychologist', 'therapy', 'cbt', 'emdr', 'trauma', 'counseling'],
    heroBadge: 'PsyD / PhD Licensed Psychologists • In-Person & Telehealth',
    title: 'Transformative Psychotherapy Rooted in Science and Human Warmth',
    subtitle: 'Untangle overwhelming anxiety, process buried trauma, and build resilient emotional coping mechanisms in a completely judgment-free space.',
    services: [
      { id: 'pc1', title: 'Individual Cognitive Behavioral Therapy (CBT)', description: 'Targeting automatic negative thought loops, core cognitive distortions, and panic behavior cycles.', price: '$220 / 50 min' },
      { id: 'pc2', title: 'EMDR Trauma Reprocessing Therapy', description: 'Bilateral eye movement stimulation resolving distressing traumatic memories and complex PTSD.', price: '$240 / 60 min' },
      { id: 'pc3', title: 'Comprehensive ADHD & Neuropsych Testing', description: 'Standardized cognitive battery diagnosing executive dysfunction, learning disabilities, and giftedness.', price: '$1,800 Complete' }
    ],
    doctor: { name: 'Dr. Marcus Thorne, PhD, ABPP', role: 'Licensed Clinical Psychologist', desc: 'Over 15 years specializing in anxiety disorders, executive performance, and evidence-based trauma recovery.' }
  },
  {
    id: 'rehabilitation-center',
    name: 'Horizon Neuro & Physical Rehabilitation Institute',
    slug: 'horizon-rehab-institute',
    desc: 'Inpatient and day-hospital rehabilitation for stroke recovery, spinal cord injury, traumatic brain injury, and post-surgical mobility restoration.',
    style: 'medical-clean',
    thumb: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    tags: ['rehab center', 'physical therapy', 'stroke recovery', 'occupational therapy', 'neuro rehab', 'mobility'],
    heroBadge: 'CARF-Accredited • Ekso Bionics Robotic Exoskeletons',
    title: 'Rebuilding Independence, Strength, and Hope After Major Trauma',
    subtitle: 'Equipped with robotic gait trainers, zero-gravity treadmills, and dedicated physical, occupational, and speech therapists working as one unified team.',
    services: [
      { id: 'rh1', title: 'Robotic Exoskeleton Gait Training', description: 'Motorized bionic suit retraining neural pathways for walking in spinal cord and stroke survivors.', price: 'Inpatient / Outpatient' },
      { id: 'rh2', title: 'Activities of Daily Living (ADL) Suite', description: 'Real-world apartment simulator practicing kitchen safety, bed transfers, and vehicle entry.', price: 'Therapy Program' },
      { id: 'rh3', title: 'Aquatic Hydrotherapy Rehabilitation', description: 'Warm saltwater therapy pools unloading 80% of body weight for early low-pain joint motion.', price: '$140 / session' }
    ],
    doctor: { name: 'Dr. Arthur Vance, MD, FAAPMR', role: 'Director of Physical Medicine & Rehab', desc: 'Board-certified physiatrist committed to helping patients maximize functional independence.' }
  },
  {
    id: 'nutrition-clinic',
    name: 'Metabolic Matrix Clinical Nutrition Clinic',
    slug: 'metabolic-nutrition-clinic',
    desc: 'Functional lab-tested medical nutrition therapy for insulin resistance, gut permeability, Hashimoto’s thyroiditis, and sustainable fat loss.',
    style: 'organic-natural',
    thumb: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80',
    tags: ['nutrition clinic', 'functional medicine', 'gut health', 'insulin resistance', 'meal planning', 'dietitian'],
    heroBadge: 'Continuous Glucose Monitoring (CGM) • Microbiome Sequencing',
    title: 'Cellular Nutritional Medicine Tailored to Your Unique Biochemistry',
    subtitle: 'Say goodbye to generic crash diets. We calibrate your macronutrient ratios using continuous interstitial glucose biosensors and micronutrient assays.',
    services: [
      { id: 'nu1', title: 'Metabolic & Continuous Glucose Evaluation', description: '14-day CGM sensor tracking glycemic volatility paired with resting metabolic rate (RMR) calorimetry.', price: '$380' },
      { id: 'nu2', title: 'Intestinal Barrier & GI-MAP Protocol', description: 'Targeted antimicrobial and mucosal healing plans repairing leaky gut and eliminating food sensitivities.', price: '$450' },
      { id: 'nu3', title: 'Physician-Supervised Weight Optimization', description: 'Combines micro-dosed GLP-1 peptide support with high-protein body recomposition coaching.', price: '$290 / month' }
    ],
    doctor: { name: 'Dr. Danielle Cole, MS, RD, CDN', role: 'Clinical Nutrition Director', desc: 'Specialist in endocrine metabolism and clinical nutritional biochemistry.' }
  },
  {
    id: 'dietitian',
    name: 'NourishWise Registered Dietitian Practice',
    slug: 'nourishwise-dietitian-practice',
    desc: 'One-on-one nutrition counseling, intuitive eating transitions, sports fueling for endurance athletes, and pediatric feeding therapies.',
    style: 'organic-natural',
    thumb: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1200&q=80',
    tags: ['dietitian', 'registered dietitian', 'nutritionist', 'meal plan', 'sports nutrition', 'intuitive eating'],
    heroBadge: 'Registered Dietitian Nutritionists (RDN) • Covered by Insurance',
    title: 'Cultivate a Peaceful, Vibrant Relationship with Wholesome Food',
    subtitle: 'Practical, delicious nutrition strategies that fit your hectic schedule, heal emotional eating patterns, and fuel sustained daily energy.',
    services: [
      { id: 'di1', title: 'Initial Nutritional Assessment & Roadmap', description: '75-minute deep dive examining dietary recall, lifestyle stressors, lab values, and personal culinary preferences.', price: '$190' },
      { id: 'di2', title: 'Endurance Sports Nutrition Programming', description: 'Intra-race carbohydrate fueling plans, sweat sodium testing, and glycogen replenishment strategies.', price: '$240' },
      { id: 'di3', title: 'Intuitive Eating & Body Image Mentorship', description: 'Ten principles of intuitive eating breaking diet-binge cycles and establishing lasting self-trust.', price: '$140 / bi-weekly' }
    ],
    doctor: { name: 'Kendra Sterling, MS, RDN, LDN', role: 'Lead Registered Dietitian', desc: 'Over 12 years helping clients reclaim joyful, nutrient-dense eating without restrictive guilt.' }
  },
  {
    id: 'pathology-lab',
    name: 'BioCheck Diagnostic Pathology Laboratories',
    slug: 'biocheck-pathology-lab',
    desc: 'CLIA-certified high-throughput molecular diagnostics, histopathology, full hormone panels, and same-day digital lab results.',
    style: 'medical-clean',
    thumb: 'https://images.unsplash.com/photo-1579165466791-788226ab77b6?auto=format&fit=crop&w=1200&q=80',
    tags: ['pathology lab', 'blood test', 'lab tests', 'molecular diagnostics', 'biopsy', 'clia certified'],
    heroBadge: 'CLIA & CAP Certified • 4-Hour Urgent Stat Reporting',
    title: 'Rapid, Uncompromising Diagnostic Accuracy for Clinical Decisions',
    subtitle: 'Direct-to-consumer and physician-ordered laboratory testing with gentle phlebotomy and encrypted digital portal delivery within hours.',
    services: [
      { id: 'pl1', title: 'Executive Comprehensive Metabolic & Lipid Panel', description: '65 clinical biomarkers covering hepatic, renal, cardiac apolipoproteins, and fasting insulin.', price: '$149' },
      { id: 'pl2', title: 'Advanced Histopathology & Biopsy Staining', description: 'Immunohistochemical and frozen section tissue analysis supervised by board-certified pathologists.', price: 'Stat Billing' },
      { id: 'pl3', title: 'Liquid Biopsy & Early Cancer Screening', description: 'Circulating tumor cell DNA profiling identifying microscopic multi-cancer methylation signals.', price: '$890' }
    ],
    doctor: { name: 'Dr. Leonard Gross, MD, FCAP', role: 'Medical Director of Pathology', desc: 'Fellow of the College of American Pathologists ensuring rigorous quality control across 1.2M annual tests.' }
  },
  {
    id: 'blood-bank',
    name: 'VitalBlood Community Donor & Transfusion Center',
    slug: 'vitalblood-community-center',
    desc: 'Nonprofit regional blood and platelet donation sanctuary saving trauma victims, cancer patients, and surgical candidates daily.',
    style: 'medical-clean',
    thumb: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1200&q=80',
    tags: ['blood bank', 'blood donation', 'platelets', 'plasma', 'transfusion', 'community health'],
    heroBadge: 'AABB Accredited • 100% Volunteer Donor Sustained',
    title: 'One Pint Saves Three Lives: Join Our Community Lifeline Today',
    subtitle: 'Relax in heated zero-gravity chairs with complimentary smoothies while our skilled phlebotomists complete whole blood donations in under 12 minutes.',
    services: [
      { id: 'bb1', title: 'Whole Blood Community Donation', description: 'Simple 10-minute red blood cell collection tested for infectious agents and separated into vital components.', price: 'Free / Volunteer' },
      { id: 'bb2', title: 'Apheresis Platelet Donation Program', description: 'Automated centrifuge collecting clotting platelets essential for leukemia and chemotherapy patients.', price: 'Volunteer Program' },
      { id: 'bb3', title: 'Mobile Corporate Blood Drive Unit', description: 'Fully equipped 40-foot motorcoaches deploying directly to office parks, universities, and churches.', price: 'Community Event' }
    ],
    doctor: { name: 'Dr. Miriam Patel, MD', role: 'Director of Transfusion Medicine', desc: 'Oversees safety and rapid distribution of critical blood products across 24 regional hospital emergency rooms.' }
  },
  {
    id: 'pharmacy',
    name: 'Apotheca Compounding & Community Pharmacy',
    slug: 'apotheca-community-pharmacy',
    desc: 'Independent neighborhood pharmacy offering non-sterile customized compounding, rapid prescription dispensing, and clinical vaccinations.',
    style: 'organic-natural',
    thumb: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80',
    tags: ['pharmacy', 'chemist', 'compounding', 'prescription', 'medicine', 'vaccinations'],
    heroBadge: '5-Minute Fill Times • Drive-Thru & Local Delivery',
    title: 'Personalized Pharmacy Care Where You’re a Name, Not a Number',
    subtitle: 'Skip the massive chain delays. Our doctors of pharmacy offer personal medication therapy reviews, pediatric flavor additions, and hormone compounding.',
    services: [
      { id: 'ph1', title: 'Customized Prescription Compounding', description: 'Dye-free, allergen-free capsules, topical hormone creams, and specialized veterinary formulations.', price: 'Custom Quote' },
      { id: 'ph2', title: 'Walk-In Travel & Flu Immunizations', description: 'CDC-recommended travel vaccines, shingles, pneumonia, and updated annual influenza shots.', price: 'Insurance Copay' },
      { id: 'ph3', title: 'Discreet Same-Day Home Delivery', description: 'Temperature-controlled couriers bringing maintenance prescriptions straight to your front door.', price: 'Free over $35' }
    ],
    doctor: { name: 'Dr. Gregory Vance, PharmD, RPh', role: 'Supervising Pharmacist & Compounding Specialist', desc: 'Over 20 years providing personalized pharmaceutical counseling and medication reconciliation.' }
  },
  {
    id: 'online-pharmacy',
    name: 'OmniRx Direct Digital Pharmacy & Telehealth',
    slug: 'omnirx-digital-pharmacy',
    desc: 'Seamless digital prescription transfers, transparent wholesale pricing, automated 90-day refills, and licensed pharmacist chat 24/7.',
    style: 'technology-gradient',
    thumb: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    tags: ['online pharmacy', 'mail order pharmacy', 'digital prescriptions', 'generic drugs', 'telehealth', 'medication delivery'],
    heroBadge: 'NABP Digital Pharmacy Accredited • Up to 85% Off Generic Cash Price',
    title: 'Prescriptions Delivered to Your Doorstep with Zero Markups',
    subtitle: 'Transfer any prescription in 60 seconds with a photo. Transparent pricing, discreet climate-monitored packaging, and free express 2-day delivery.',
    services: [
      { id: 'op1', title: 'Cost-Plus Transparent Generic Formulary', description: 'Every medication priced at exact manufacturing cost + 15% margin with zero insurance middlemen.', price: 'From $4 / mo' },
      { id: 'op2', title: 'Smart Pre-Sorted Daily Pill Packs', description: 'Tear-away packets organized by day and time so you never miss a dose or double-medicate.', price: 'Free Service' },
      { id: 'op3', title: 'Instant Online Doctor Consultation', description: 'Quick asynchronous consultations for hair loss, asthma inhalers, birth control, and skin creams.', price: '$29 Consult' }
    ],
    doctor: { name: 'Dr. Amanda Foster, PharmD', role: 'Head of Digital Clinical Operations', desc: 'Overseeing regulatory compliance and safe mail-order pharmacy distribution across all 50 states.' }
  },
  {
    id: 'medical-store',
    name: 'SurgicalSupply Medical Store & Home Care',
    slug: 'surgicalsupply-medical-store',
    desc: 'Retail showroom for mobility scooters, lift chairs, hospital beds, ostomy supplies, wound dressings, and compression garments.',
    style: 'modern-corporate',
    thumb: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    tags: ['medical store', 'medical supplies', 'wheelchair', 'lift chair', 'crutches', 'compression socks'],
    heroBadge: 'Accredited Medicare Provider • 10,000+ Items in Showroom',
    title: 'Medical Equipment and Home Health Essentials You Can Trust',
    subtitle: 'From temporary post-operative wheelchair rentals to custom orthotic bracing, our certified fitters ensure you get the exact right medical equipment.',
    services: [
      { id: 'ms1', title: 'Mobility Scooters & Power Wheelchairs', description: 'Test drive lightweight foldable travel scooters and heavy-duty all-terrain power chairs in our showroom.', price: 'Rent or Buy' },
      { id: 'ms2', title: 'Certified Compression Garment Fitting', description: 'Custom measurements for Sigvaris and Jobst medical gradient compression stockings (20-30 mmHg).', price: 'Free Fitting' },
      { id: 'ms3', title: 'Full Hospital Bed & Lift Chair Setup', description: 'White-glove home delivery, assembly, and safety tutorial by certified medical technicians.', price: 'Delivery Available' }
    ],
    doctor: { name: 'Thomas Bradley, ATP, CRTS', role: 'Assistive Technology Professional', desc: 'Over 16 years matching patients with customized seating and complex rehab mobility solutions.' }
  },
  {
    id: 'medical-equipment-supplier',
    name: 'MedVanguard Surgical & Hospital Equipment B2B',
    slug: 'medvanguard-equipment-supplier',
    desc: 'B2B distributor of OEM surgical tables, anesthesia workstations, ICU ventilators, patient telemetry monitors, and biomedical maintenance contracts.',
    style: 'modern-corporate',
    thumb: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    tags: ['medical equipment', 'hospital supplier', 'surgical tables', 'ventilators', 'biomedical', 'b2b medical'],
    heroBadge: 'ISO 13485 Certified • 24/7 Emergency Biomeds On-Call',
    title: 'Hospital-Grade Medical Systems and Surgical Infrastructure',
    subtitle: 'Supplying ambulatory surgery centers, regional health systems, and emergency clinics with certified OEM medical hardware and preventive maintenance.',
    services: [
      { id: 'me1', title: 'Surgical Suite Turnkey Outfitting', description: 'Surgical lighting booms, carbon-fiber radiolucent tables, and integrated 4K laparoscopic video towers.', price: 'Enterprise Quote' },
      { id: 'me2', title: 'Biomedical Maintenance & Calibration', description: 'Annual electrical safety inspections, NIST-traceable calibration, and emergency loaner equipment.', price: 'Service Contract' },
      { id: 'me3', title: 'Refurbished Certified Capital Equipment', description: 'Factory-refurbished ultrasound and anesthesia machines with full 2-year parts and labor warranties.', price: 'Save up to 45%' }
    ],
    doctor: { name: 'Markus Henderson, CBET', role: 'VP of Biomedical Engineering', desc: 'Oversees safety and clinical compliance across 85 hospital client installations nationwide.' }
  },
  {
    id: 'health-insurance',
    name: 'AegisShield Comprehensive Health Insurance',
    slug: 'aegisshield-health-insurance',
    desc: 'Affordable ACA-compliant individual, family, and group health plans with nationwide Tier-1 doctor networks and $0 copay preventative visits.',
    style: 'modern-corporate',
    thumb: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    tags: ['health insurance', 'medical coverage', 'hmo', 'ppo', 'family plan', 'dental vision'],
    heroBadge: '98% Network Satisfaction • Open Enrollment Live',
    title: 'Health Coverage That Protects Your Family Without the Fine Print',
    subtitle: 'Transparent deductibles, expansive in-network specialist rosters, zero-cost virtual urgent care visits, and personalized health concierge advocates.',
    services: [
      { id: 'hi1', title: 'Prime PPO Complete Coverage Plan', description: 'Freedom to see any in-network or out-of-network specialist without gatekeeping referrals.', price: 'From $240 / mo' },
      { id: 'hi2', title: 'Small Business Group Health Solutions', description: 'Tax-advantaged health plans for teams of 2 to 100 with composite rating and employee wellness apps.', price: 'Custom Proposal' },
      { id: 'hi3', title: 'Comprehensive Dental, Vision & Hearing Add-On', description: 'Covers annual dental checkups, orthodontic allowances, and annual designer eyewear frames.', price: '+$28 / mo' }
    ],
    doctor: { name: 'Sarah Montgomery', role: 'Chief Benefits Strategist', desc: 'Over 18 years helping individuals and employers navigate health policy with crystal clarity.' }
  },
  {
    id: 'cancer-hospital',
    name: 'Beacon Hope Comprehensive Oncology & Cancer Institute',
    slug: 'beacon-hope-cancer-institute',
    desc: 'NCI-designated cancer center pioneering proton beam radiation, personalized genomic immunotherapy, CAR-T cell infusions, and compassionate oncology care.',
    style: 'medical-clean',
    thumb: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    tags: ['cancer hospital', 'oncology', 'chemotherapy', 'proton therapy', 'car-t', 'radiation oncology'],
    heroBadge: 'NCI-Designated Cancer Center • Clinical Trials Access',
    title: 'Relentless Oncology Science Combined with Unwavering Human Compassion',
    subtitle: 'Every patient is reviewed by our multidisciplinary tumor board of surgical oncologists, radiation physicists, and genomic pathologists.',
    services: [
      { id: 'ca1', title: 'Next-Generation Genomic Tumor Profiling', description: 'Sequencing 500+ cancer-driver genes to match you with targeted small-molecule oral inhibitors.', price: 'Fully Insured Service' },
      { id: 'ca2', title: 'Pencil-Beam Proton Radiation Therapy', description: 'Deposits maximum radiation directly into the tumor with zero exit dose, sparing healthy adjacent organs.', price: 'Specialized Program' },
      { id: 'ca3', title: 'Infusion Suite with Integrative Healing', description: 'Private chemotherapy suites with heated massage recliners, oncology massage, and acupuncture.', price: 'Supportive Care' }
    ],
    doctor: { name: 'Dr. Evelyn Sterling, MD, PhD', role: 'Physician-in-Chief & Oncologist', desc: 'Principal investigator on breakthrough immunological clinical trials with over 25 years of oncology leadership.' }
  },
  {
    id: 'veterinary-clinic',
    name: 'Paws & Whiskers Companion Animal Hospital',
    slug: 'paws-whiskers-veterinary',
    desc: 'Fear-free certified small animal clinic providing wellness vaccinations, dental scaling, soft tissue surgeries, and in-house diagnostic bloodwork.',
    style: 'soft-pastel',
    thumb: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80',
    tags: ['veterinary clinic', 'pet doctor', 'dog clinic', 'cat vet', 'pet vaccinations', 'animal hospital'],
    heroBadge: 'Fear-Free Certified Clinic • Separate Dog & Cat Waiting Lounges',
    title: 'Gentle, Compassionate Medicine for Your Beloved Four-Legged Family',
    subtitle: 'We treat your furry companions like family. Calming pheromone diffusers, lick-mats with organic peanut butter, and low-stress handling protocols.',
    services: [
      { id: 'vc1', title: 'Comprehensive Nose-to-Tail Pet Wellness Exam', description: 'Ophthalmic, cardiac, joint mobility, and dental health evaluations for puppies, kittens, and seniors.', price: '$75' },
      { id: 'vc2', title: 'Ultrasonic Dental Scaling & Polishing', description: 'General anesthesia cleanings eliminating tartar below the gumline with full-mouth digital dental x-rays.', price: 'From $420' },
      { id: 'vc3', title: 'Core Preventive Vaccinations & Parasite Prevention', description: 'Rabies, DHPP, Bordetella, and FVRCP vaccines paired with 12-month heartworm and flea protection.', price: 'Packages Available' }
    ],
    doctor: { name: 'Dr. Chloe Martinez, DVM', role: 'Medical Director & Veterinarian', desc: 'Graduate of UC Davis School of Veterinary Medicine dedicated to low-stress animal medical care.' }
  },
  {
    id: 'animal-hospital',
    name: 'MetroWest 24/7 Emergency Animal Hospital',
    slug: 'metrowest-animal-hospital',
    desc: '24-hour emergency and critical veterinary trauma center with oxygen kennels, digital trauma sonography, emergency surgery, and board-certified surgeons.',
    style: 'medical-clean',
    thumb: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80',
    tags: ['animal hospital', 'emergency vet', 'pet emergency', '24-7 vet', 'pet surgery', 'veterinary trauma'],
    heroBadge: 'Open 24/7/365 • Level-1 Veterinary Trauma Center',
    title: 'Always Here When Emergencies Strike Your Beloved Companion',
    subtitle: 'No appointment needed. Our emergency veterinarians, critical care nurses, and surgical suites are staffed 24 hours a day, 365 days a year.',
    services: [
      { id: 'ah1', title: '24/7 Emergency Triage & Intensive Care', description: 'Immediate stabilization for toxic ingestions, hit-by-car trauma, bloat (GDV), and acute seizures.', price: 'Emergency Triage' },
      { id: 'ah2', title: 'Emergency Soft-Tissue & Orthopedic Surgery', description: 'Foreign body removal, splenectomies, and emergency fracture repair with board-certified surgeons.', price: 'Surgical Unit' },
      { id: 'ah3', title: 'Climate & Oxygen-Controlled ICU Kennels', description: 'Continuous ECG, arterial blood pressure monitoring, and supplemental oxygen therapy for critical patients.', price: 'ICU Monitoring' }
    ],
    doctor: { name: 'Dr. Ryan Gallagher, DVM, DACVECC', role: 'Emergency & Critical Care Specialist', desc: 'Over 14 years managing acute veterinary trauma and life-threatening surgical emergencies.' }
  },
  {
    id: 'pet-pharmacy',
    name: 'VetRx Express Compounding & Pet Pharmacy',
    slug: 'vetrx-express-pet-pharmacy',
    desc: 'Specialized veterinary compounding preparing chewable meat-flavored treats, transdermal ear gels, and liquid suspensions pets actually love.',
    style: 'organic-natural',
    thumb: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1200&q=80',
    tags: ['pet pharmacy', 'pet meds', 'veterinary compounding', 'flea tick', 'heartworm', 'chewable treats'],
    heroBadge: 'PCAB Accredited Compounding • 100% Palatability Guarantee',
    title: 'Ending the Pill Struggle: Flavored Pet Medications They Beg For',
    subtitle: 'No more wrestling your cat or hiding bitter pills in cheese. We compound exact veterinary dosages into savory chicken, bacon, and fish chewables.',
    services: [
      { id: 'pp1', title: 'Savory Chewable Treat Formulations', description: 'Active pharmaceutical ingredients baked into soft chewable real-meat treats formulated for dogs and cats.', price: 'From $24' },
      { id: 'pp2', title: 'Transdermal Ear-Tip Gels (Penetran)', description: 'Apply a drop of medication to the inner ear flap for rapid transdermal absorption without swallowing.', price: 'From $32' },
      { id: 'pp3', title: 'Discount Brand Flea, Tick & Heartworm', description: 'Simparica Trio, NexGard, Bravecto, and Heartgard shipped straight from manufacturer with manufacturer warranty.', price: 'Price-Match Guarantee' }
    ],
    doctor: { name: 'Dr. Lindsey Vance, PharmD, DICVP', role: 'Veterinary Pharmacist Specialist', desc: 'Diplomate of the International College of Veterinary Pharmacy specialized in canine and feline pharmacology.' }
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

const templates = healthcareSpecs.map((spec, i) => {
  const p = `hs${i + 1}`;
  return {
    id: `healthcare-${spec.id}-01`,
    slug: spec.slug,
    name: spec.name,
    description: spec.desc,
    industryId: 'healthcare',
    categoryId: spec.id,
    collectionId: 'specialized-care',
    designStyle: spec.style,
    featured: i % 4 === 0,
    tags: spec.tags,
    thumbnail: spec.thumb,
    sections: [
      buildSection(p, 'navbar', 'navbar-glass', {
        title: spec.name.toUpperCase().slice(0, 24),
        primaryButtonText: 'Book Consultation',
        primaryButtonLink: '#booking',
        navLinks: [
          { label: 'Clinical Treatments', href: '#services' },
          { label: 'Medical Faculty', href: '#doctor' },
          { label: 'Patient Reviews', href: '#reviews' },
          { label: 'Insurance & FAQ', href: '#faq' }
        ]
      }),
      buildSection(p, 'hero', 'hero-split', {
        badge: spec.heroBadge,
        title: spec.title,
        subtitle: spec.subtitle,
        primaryButtonText: 'Schedule Specialist Visit',
        primaryButtonLink: '#booking',
        secondaryButtonText: 'View Clinical Services',
        secondaryButtonLink: '#services',
        imageUrl: spec.thumb,
        stats: [
          { id: 's1', label: 'Patient Trust Score', value: '99.4%' },
          { id: 's2', label: 'Procedures Performed', value: '12,500+' },
          { id: 's3', label: 'Average Wait Time', value: '< 8 Mins' }
        ]
      }),
      buildSection(p, 'services', 'services-cards-accent', {
        badge: 'Specialized Treatments',
        title: 'Evidence-Based Clinical Procedures',
        subtitle: 'Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.',
        items: spec.services.map((s, idx) => ({
          id: s.id,
          title: s.title,
          description: s.description,
          price: s.price,
          badge: idx === 0 ? 'Featured' : undefined
        }))
      }),
      buildSection(p, 'doctor-profile', 'doctor-grid', {
        badge: 'Lead Specialist',
        title: 'Meet Our Medical Director',
        subtitle: 'Board-certified excellence combined with dedicated one-on-one patient advocacy.',
        items: [
          {
            id: 'doc1',
            title: spec.doctor.name,
            description: spec.doctor.desc,
            meta: spec.doctor.role,
            imageUrl: spec.thumb
          }
        ]
      }),
      buildSection(p, 'appointment-booking', 'appointment-card-compact', {
        badge: 'Online Booking',
        title: 'Reserve Your Private Consultation',
        description: 'Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.',
        primaryButtonText: 'Confirm Appointment Time',
        primaryButtonLink: '#booking'
      }),
      buildSection(p, 'footer', 'footer-dark-editorial', {
        title: spec.name,
        description: spec.desc,
        copyrightText: `© 2026 ${spec.name}. All medical rights reserved. Fully HIPAA & OSHA Compliant.`
      })
    ]
  };
});

writeTemplateFile('healthcareSpecialistsTemplates.ts', 'HEALTHCARE_SPECIALISTS_TEMPLATES', templates);
console.log(`Generated ${templates.length} healthcare specialist templates successfully!`);
