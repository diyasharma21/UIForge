import { TemplateConfig } from '../../types';

export const HEALTHCARE_SPECIALISTS_TEMPLATES: TemplateConfig[] = [
  {
    "id": "healthcare-neurosurgeon-01",
    "slug": "apex-neurosurgery-institute",
    "name": "Apex Cranial & Spine Neurosurgery Institute",
    "description": "Fellowship-trained neurosurgeons specializing in minimally invasive spine decompression, cranial microsurgery, and robotic computer-guided neuronavigation.",
    "industryId": "healthcare",
    "categoryId": "neurosurgeon",
    "collectionId": "specialized-care",
    "designStyle": "medical-clean",
    "featured": true,
    "tags": [
      "neurosurgeon",
      "spine surgery",
      "brain surgery",
      "neurosurgery",
      "cranial",
      "minimally invasive"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs1-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "APEX CRANIAL & SPINE NEU",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs1-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Board-Certified Neurosurgeons • Computer-Assisted Navigation",
          "title": "Precision Cranial & Complex Spine Surgery Powered by Micro-Robotics",
          "subtitle": "Restoring functional mobility and neurological health with world-leading surgical expertise and compassionate, patient-centered postoperative rehabilitation.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs1-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "ns1",
              "title": "Minimally Invasive Spine Surgery (MISS)",
              "description": "Keyhole access techniques preserving muscle integrity with reduced recovery times.",
              "price": "Consultation $450",
              "badge": "Featured"
            },
            {
              "id": "ns2",
              "title": "Cranial Tumors & Microvascular Decompression",
              "description": "Intraoperative neuro-monitoring for trigeminal neuralgia and acoustic neuromas.",
              "price": "Surgical Evaluation"
            },
            {
              "id": "ns3",
              "title": "Cervical Disc Arthroplasty",
              "description": "Next-generation artificial disc replacement restoring natural cervical range of motion.",
              "price": "Specialized Consult"
            }
          ]
        }
      },
      {
        "id": "hs1-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Alistair Sterling, MD, FAANS",
              "description": "Over 22 years of surgical excellence with more than 4,200 successful cranial and spinal operations performed.",
              "meta": "Chief of Neurosurgery • Harvard Fellow",
              "imageUrl": "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs1-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs1-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Apex Cranial & Spine Neurosurgery Institute",
          "description": "Fellowship-trained neurosurgeons specializing in minimally invasive spine decompression, cranial microsurgery, and robotic computer-guided neuronavigation.",
          "copyrightText": "© 2026 Apex Cranial & Spine Neurosurgery Institute. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-orthopedic-doctor-01",
    "slug": "vanguard-orthopedic-reconstruction",
    "name": "Vanguard Orthopedic & Joint Reconstruction",
    "description": "Advanced robotic-assisted joint replacement, sports cartilage restoration, and comprehensive biomechanical rehabilitation.",
    "industryId": "healthcare",
    "categoryId": "orthopedic-doctor",
    "collectionId": "specialized-care",
    "designStyle": "medical-clean",
    "featured": false,
    "tags": [
      "orthopedic",
      "joint replacement",
      "sports medicine",
      "knee surgery",
      "hip replacement",
      "rotator cuff"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs2-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "VANGUARD ORTHOPEDIC & JO",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs2-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Mako Robotic-Arm Assisted Surgery • Rapid Recovery Protocol",
          "title": "Breakthrough Orthopedic Mobility and Joint Restoration",
          "subtitle": "Eliminate chronic pain and return to high-impact living with personalized arthroscopic repairs and sub-millimeter robotic joint reconstructions.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs2-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "op1",
              "title": "Robotic Total Knee Arthroplasty",
              "description": "CT-guided 3D pre-planning ensuring sub-millimeter component alignment and soft-tissue balance.",
              "price": "Comprehensive Protocol",
              "badge": "Featured"
            },
            {
              "id": "op2",
              "title": "Anterior Approach Hip Replacement",
              "description": "Muscle-sparing incision allowing same-day weight bearing and expedited physical therapy.",
              "price": "Rapid Mobilization"
            },
            {
              "id": "op3",
              "title": "Complex Arthroscopic Shoulder Repair",
              "description": "Bio-inductive patch augmentation for massive rotator cuff tears and labral stabilization.",
              "price": "Elite Sports Recovery"
            }
          ]
        }
      },
      {
        "id": "hs2-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Marcus Vance, MD, FAAOS",
              "description": "Team physician for collegiate athletes specializing in minimally invasive joint preservation.",
              "meta": "Lead Orthopedic Surgeon • Mayo Clinic Fellow",
              "imageUrl": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs2-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs2-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Vanguard Orthopedic & Joint Reconstruction",
          "description": "Advanced robotic-assisted joint replacement, sports cartilage restoration, and comprehensive biomechanical rehabilitation.",
          "copyrightText": "© 2026 Vanguard Orthopedic & Joint Reconstruction. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-skin-specialist-01",
    "slug": "dermamatrix-skin-specialist",
    "name": "DermaMatrix Clinical Skin Specialist Practice",
    "description": "Evidence-based clinical treatments for stubborn eczema, chronic psoriasis, rosacea flare-ups, and systemic dermatologic conditions.",
    "industryId": "healthcare",
    "categoryId": "skin-specialist",
    "collectionId": "specialized-care",
    "designStyle": "medical-clean",
    "featured": false,
    "tags": [
      "skin specialist",
      "psoriasis",
      "eczema",
      "dermatology",
      "skin allergy",
      "rosacea"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs3-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "DERMAMATRIX CLINICAL SKI",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs3-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Clinical Dermatology • Phototherapy Center",
          "title": "Advanced Therapies for Chronic and Complex Dermatological Disorders",
          "subtitle": "From targeted biologics for severe psoriasis to narrow-band UVB phototherapy, we deliver profound skin relief backed by double-boarded dermatologists.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs3-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "ss1",
              "title": "Targeted Biologic Immunotherapy",
              "description": "Monoclonal antibody protocols targeting IL-17 and IL-23 pathways for clear, sustained remission.",
              "price": "Specialized Consult",
              "badge": "Featured"
            },
            {
              "id": "ss2",
              "title": "Narrowband UVB Phototherapy",
              "description": "In-clinic computerized light chambers for widespread vitiligo, eczema, and cutaneous T-cell lymphoma.",
              "price": "$120 / session"
            },
            {
              "id": "ss3",
              "title": "Digital Dermoscopy Body Mapping",
              "description": "Automated total-body mole surveillance identifying atypical melanocytic lesions at the earliest stage.",
              "price": "$350"
            }
          ]
        }
      },
      {
        "id": "hs3-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Elena Rostova, MD, FAAD",
              "description": "Specialist in autoimmune dermatoses and inflammatory barrier reconstruction.",
              "meta": "Medical Director of Clinical Dermatology",
              "imageUrl": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs3-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs3-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "DermaMatrix Clinical Skin Specialist Practice",
          "description": "Evidence-based clinical treatments for stubborn eczema, chronic psoriasis, rosacea flare-ups, and systemic dermatologic conditions.",
          "copyrightText": "© 2026 DermaMatrix Clinical Skin Specialist Practice. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-skincare-clinic-01",
    "slug": "auraluxe-medical-skincare",
    "name": "AuraLuxe Medical Skincare Atelier",
    "description": "Where medical efficacy meets sensory luxury. Bespoke dermal infusions, medical microneedling, and cellular barrier restoration.",
    "industryId": "healthcare",
    "categoryId": "skincare-clinic",
    "collectionId": "specialized-care",
    "designStyle": "luxury-editorial",
    "featured": false,
    "tags": [
      "skincare clinic",
      "hydrafacial",
      "microneedling",
      "chemical peel",
      "barrier repair",
      "medical facial"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs4-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "AURALUXE MEDICAL SKINCAR",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs4-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Physician-Formulated Protocols • Private Treatment Suites",
          "title": "Transformative Clinical Facials Engineered for Luminous Cellular Health",
          "subtitle": "Experience customized diamond-tip micro-exfoliation, medical PRP infusion, and bioactive peptide delivery inside our quiet architectural spa sanctuaries.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs4-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "sc1",
              "title": "Triple-Infusion Hydro-Oxygen Facial",
              "description": "Vortex suction and lymphatic drainage paired with low-molecular hyaluronic acid and resveratrol.",
              "price": "$290",
              "badge": "Featured"
            },
            {
              "id": "sc2",
              "title": "Collagen-P.I.N. Medical Microneedling",
              "description": "Controlled dermal micro-punctures stimulating elastin synthesis paired with growth factor serums.",
              "price": "$480"
            },
            {
              "id": "sc3",
              "title": "Bio-Nutri Glow Cellular Peel",
              "description": "Glycolic, mandelic, and phytic acid blend designed to dissolve hyperpigmentation without downtime.",
              "price": "$220"
            }
          ]
        }
      },
      {
        "id": "hs4-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Camille Laurent, MD",
              "description": "Pioneer of barrier-protective protocol layering and customized epidermal recovery formulations.",
              "meta": "Aesthetic Physician & Skin Biologist",
              "imageUrl": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs4-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs4-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "AuraLuxe Medical Skincare Atelier",
          "description": "Where medical efficacy meets sensory luxury. Bespoke dermal infusions, medical microneedling, and cellular barrier restoration.",
          "copyrightText": "© 2026 AuraLuxe Medical Skincare Atelier. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-acne-treatment-clinic-01",
    "slug": "clearform-acne-scar-clinic",
    "name": "ClearForm Acne & Scar Revision Clinic",
    "description": "Specialized multi-modal acne eradication, hormonal breakouts management, and fractional CO2 subcision for deep pitted acne scars.",
    "industryId": "healthcare",
    "categoryId": "acne-treatment-clinic",
    "collectionId": "specialized-care",
    "designStyle": "minimal-neutral",
    "featured": true,
    "tags": [
      "acne treatment",
      "acne scars",
      "subcision",
      "tca cross",
      "isotretinoin",
      "clear skin"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1512290900672-1f55a124c653?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs5-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "CLEARFORM ACNE & SCAR RE",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs5-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "98% Patient Clearance Rate • Hormonal & Cystic Specialists",
          "title": "Permanent Acne Eradication and Advanced Micro-Surgical Scar Remodeling",
          "subtitle": "Break free from chronic breakout cycles. We combine low-dose isotretinoin management, AviClear 1726nm laser, and manual scar subcision.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1512290900672-1f55a124c653?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs5-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "ac1",
              "title": "AviClear Sebaceous Laser Protocol",
              "description": "FDA-cleared 1726nm laser selectively targeting overactive sebaceous glands for long-term acne remission.",
              "price": "3-Session Series",
              "badge": "Featured"
            },
            {
              "id": "ac2",
              "title": "TCA Cross & Subcision Remodeling",
              "description": "Manual release of tethered fibrotic scars combined with 90% trichloroacetic acid focal collagen induction.",
              "price": "$650 / session"
            },
            {
              "id": "ac3",
              "title": "Fractional Non-Ablative Resurfacing",
              "description": "Stimulates deep reticular dermis to smooth rolling and boxcar scar depressions without prolonged redness.",
              "price": "$500"
            }
          ]
        }
      },
      {
        "id": "hs5-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Jonathan Park, MD, FAAD",
              "description": "Over 14 years specializing exclusively in resistant cystic acne and structural scar revision.",
              "meta": "Acne & Scar Reconstructive Specialist",
              "imageUrl": "https://images.unsplash.com/photo-1512290900672-1f55a124c653?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs5-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs5-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "ClearForm Acne & Scar Revision Clinic",
          "description": "Specialized multi-modal acne eradication, hormonal breakouts management, and fractional CO2 subcision for deep pitted acne scars.",
          "copyrightText": "© 2026 ClearForm Acne & Scar Revision Clinic. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-cosmetic-surgery-clinic-01",
    "slug": "elysium-cosmetic-surgery",
    "name": "Elysium Plastic & Cosmetic Surgery Center",
    "description": "Accredited ambulatory surgical center delivering natural deep-plane facelifts, high-definition liposuction, and composite breast augmentation.",
    "industryId": "healthcare",
    "categoryId": "cosmetic-surgery-clinic",
    "collectionId": "specialized-care",
    "designStyle": "luxury-editorial",
    "featured": false,
    "tags": [
      "cosmetic surgery",
      "plastic surgeon",
      "facelift",
      "liposuction",
      "rhinoplasty",
      "breast augmentation"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs6-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "ELYSIUM PLASTIC & COSMET",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs6-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Quad-A Accredited Surgical Suites • Natural Aesthetic Mastery",
          "title": "Harmonious, Undetectable Facial and Body Rejuvenation",
          "subtitle": "Under the guidance of triple-boarded plastic surgeons, discover bespoke transformations that honor your unique anatomy with natural elegance.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs6-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "cs1",
              "title": "Deep-Plane Extended Facelift",
              "description": "Releases retaining ligaments and repositions the SMAS layer for natural, un-pulled jawline definition.",
              "price": "Consultation Required",
              "badge": "Featured"
            },
            {
              "id": "cs2",
              "title": "Preservation Ultrasonic Rhinoplasty",
              "description": "Piezoelectric precision sculpting nasal bones without fracturing, minimizing bruising and edema.",
              "price": "Surgical Plan"
            },
            {
              "id": "cs3",
              "title": "High-Definition VASER Liposculpture",
              "description": "Ultrasound-assisted fat removal highlighting natural athletic muscle contours with rapid recovery.",
              "price": "Customized Quote"
            }
          ]
        }
      },
      {
        "id": "hs6-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Sebastian Vance, MD, FACS",
              "description": "Known internationally for natural facial rejuvenation and peer-reviewed deep plane vector techniques.",
              "meta": "Board-Certified Plastic Surgeon",
              "imageUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs6-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs6-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Elysium Plastic & Cosmetic Surgery Center",
          "description": "Accredited ambulatory surgical center delivering natural deep-plane facelifts, high-definition liposuction, and composite breast augmentation.",
          "copyrightText": "© 2026 Elysium Plastic & Cosmetic Surgery Center. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-hair-transplant-clinic-01",
    "slug": "follicore-robotic-hair-transplant",
    "name": "FolliCore Robotic Hair Restoration Institute",
    "description": "State-of-the-art ARTAS iX robotic FUE hair transplants, dense packing hairline design, and pain-free donor zone preservation.",
    "industryId": "healthcare",
    "categoryId": "hair-transplant-clinic",
    "collectionId": "specialized-care",
    "designStyle": "technology-gradient",
    "featured": false,
    "tags": [
      "hair transplant",
      "fue",
      "artas",
      "hairline restoration",
      "beard transplant",
      "hair restoration"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs7-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "FOLLICORE ROBOTIC HAIR R",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs7-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "ARTAS iX AI Robotic System • Zero Linear Scarring",
          "title": "Permanent, High-Density Hair Transplants Guided by AI Robotics",
          "subtitle": "Precision harvesting of follicular units at micron angles. Maximized graft survival, natural swirl angle replication, and rapid healing.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs7-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "ht1",
              "title": "ARTAS iX AI Robotic FUE",
              "description": "Algorithmically harvests healthy follicular units with optical cameras, protecting neighboring follicles.",
              "price": "From $4.50 / graft",
              "badge": "Featured"
            },
            {
              "id": "ht2",
              "title": "Ultra-Dense Hairline Architecture",
              "description": "Hand-crafted single-hair graft micro-incisions mimicking natural organic growth direction.",
              "price": "Custom Design"
            },
            {
              "id": "ht3",
              "title": "Exosome & Growth Factor Infusion",
              "description": "Acellular bio-signals applied immediately post-transplant to shorten dormancy and speed sprouting.",
              "price": "$1,200 / treatment"
            }
          ]
        }
      },
      {
        "id": "hs7-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Tariq Al-Hassan, MD, FISHRS",
              "description": "Over 18 years dedicated to surgical hairline design with over 6 million successful grafts transplanted.",
              "meta": "Lead Hair Restoration Surgeon",
              "imageUrl": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs7-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs7-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "FolliCore Robotic Hair Restoration Institute",
          "description": "State-of-the-art ARTAS iX robotic FUE hair transplants, dense packing hairline design, and pain-free donor zone preservation.",
          "copyrightText": "© 2026 FolliCore Robotic Hair Restoration Institute. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-hair-restoration-clinic-01",
    "slug": "regenhair-trichology-clinic",
    "name": "RegenHair Non-Surgical Trichology & Restoration",
    "description": "Medical management of androgenetic alopecia, telogen effluvium, low-level laser therapy, and personalized compounded peptide topicals.",
    "industryId": "healthcare",
    "categoryId": "hair-restoration-clinic",
    "collectionId": "specialized-care",
    "designStyle": "medical-clean",
    "featured": false,
    "tags": [
      "hair loss",
      "trichology",
      "alopecia",
      "prp hair",
      "scalp therapy",
      "hair restoration"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs8-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "REGENHAIR NON-SURGICAL T",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs8-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Trichoscopic Scalp Analysis • Evidence-Based Protocols",
          "title": "Halt Thinning Hair and Awaken Dormant Follicles Without Surgery",
          "subtitle": "Comprehensive medical trichology diagnosing nutrient deficiencies, scalp microbiome imbalances, and hormonal DHT sensitivity.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs8-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "hr1",
              "title": "High-Concentration Scalp PRP",
              "description": "Double-spin platelet rich plasma injecting concentrated autologous growth factors directly to roots.",
              "price": "$750 / session",
              "badge": "Featured"
            },
            {
              "id": "hr2",
              "title": "Compounded Peptide & Finasteride Topicals",
              "description": "Custom pharmacy formulations avoiding systemic side effects while blocking localized DHT.",
              "price": "$85 / month"
            },
            {
              "id": "hr3",
              "title": "Clinical Low-Level Laser Helmet Therapy",
              "description": "650nm cold diode irradiation increasing ATP mitochondrial synthesis in miniaturized follicles.",
              "price": "In-Clinic / Home"
            }
          ]
        }
      },
      {
        "id": "hs8-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Maya Lin, MD, Trichologist",
              "description": "Member of the International Association of Trichologists researching non-scarring alopecia interventions.",
              "meta": "Medical Director of Scalp Health",
              "imageUrl": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs8-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs8-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "RegenHair Non-Surgical Trichology & Restoration",
          "description": "Medical management of androgenetic alopecia, telogen effluvium, low-level laser therapy, and personalized compounded peptide topicals.",
          "copyrightText": "© 2026 RegenHair Non-Surgical Trichology & Restoration. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-laser-clinic-01",
    "slug": "spectralight-medical-laser",
    "name": "SpectraLight Advanced Medical Laser Center",
    "description": "PicoSure picosecond tattoo clearance, Sciton Halo hybrid fractional skin resurfacing, and BBL HERO photo-rejuvenation.",
    "industryId": "healthcare",
    "categoryId": "laser-clinic",
    "collectionId": "specialized-care",
    "designStyle": "technology-gradient",
    "featured": true,
    "tags": [
      "laser clinic",
      "picosure",
      "laser resurfacing",
      "tattoo removal",
      "bbl laser",
      "pigmentation"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs9-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "SPECTRALIGHT ADVANCED ME",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs9-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Class-4 Medical Laser Suite • Licensed Laser Specialists",
          "title": "Gold-Standard Laser Wavelengths for Flawless Dermal Correction",
          "subtitle": "Harnessing fractional photothermolysis, picosecond acoustic waves, and vascular lasers to eliminate pigmentation, redness, and deep lines.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs9-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "lc1",
              "title": "Sciton Halo Hybrid Fractional Laser",
              "description": "Simultaneously delivers ablative and non-ablative wavelengths for dramatic tone and pore reduction.",
              "price": "$1,400 / session",
              "badge": "Featured"
            },
            {
              "id": "lc2",
              "title": "PicoSure Pro Multi-Color Tattoo Removal",
              "description": "PressureWave technology shattering ink particles into dust without thermal burning.",
              "price": "From $190"
            },
            {
              "id": "lc3",
              "title": "BBL HERO Full Body Photofacial",
              "description": "High-speed pulsed light reversing solar elastosis and broken capillaries four times faster.",
              "price": "$450"
            }
          ]
        }
      },
      {
        "id": "hs9-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Julian Foster, MD",
              "description": "Key opinion leader on dual-wavelength fractional thermal physics and safe laser settings for Fitzpatrick skin types.",
              "meta": "Director of Laser Surgery",
              "imageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs9-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs9-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "SpectraLight Advanced Medical Laser Center",
          "description": "PicoSure picosecond tattoo clearance, Sciton Halo hybrid fractional skin resurfacing, and BBL HERO photo-rejuvenation.",
          "copyrightText": "© 2026 SpectraLight Advanced Medical Laser Center. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-aesthetic-clinic-01",
    "slug": "kallos-aesthetic-clinic",
    "name": "Kallos Facial Architecture & Aesthetic Medicine",
    "description": "Micro-droplet neuromodulators, structural jawline contouring, tear-trough restoration, and biostimulatory collagen inductors.",
    "industryId": "healthcare",
    "categoryId": "aesthetic-clinic",
    "collectionId": "specialized-care",
    "designStyle": "luxury-editorial",
    "featured": false,
    "tags": [
      "aesthetic clinic",
      "botox",
      "fillers",
      "sculptra",
      "lip filler",
      "jawline contouring"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs10-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "KALLOS FACIAL ARCHITECTU",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs10-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Sculptra & Radiesse Master Center • Subtle Precision",
          "title": "Architectural Facial Rejuvenation Honoring Proportions and Motion",
          "subtitle": "Never overfilled, never frozen. We sculpt the dynamic facial tiers with micro-cannula techniques and collagen-stimulating poly-L-lactic acid.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs10-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "ae1",
              "title": "Full Facial Balancing (Dermal Hyaluronic)",
              "description": "Structural mid-face, piriform, and chin augmentation supporting soft tissue drape.",
              "price": "From $850 / syringe",
              "badge": "Featured"
            },
            {
              "id": "ae2",
              "title": "Sculptra Aesthetic Bio-Stimulation",
              "description": "Stimulates native type-1 collagen synthesis over 24 months for smooth, firm facial thickness.",
              "price": "$900 / vial"
            },
            {
              "id": "ae3",
              "title": "Micro-Tox Pore Refinement & Smoothing",
              "description": "Intra-dermal micro-droplet neurotoxin reducing sebum secretion and softening superficial dynamic lines.",
              "price": "$420"
            }
          ]
        }
      },
      {
        "id": "hs10-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Vivienne Moreau, MD",
              "description": "Internationally recognized injector emphasizing vascular mapping and harmonious 3D anatomy.",
              "meta": "Aesthetic Physician & Anatomist",
              "imageUrl": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs10-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs10-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Kallos Facial Architecture & Aesthetic Medicine",
          "description": "Micro-droplet neuromodulators, structural jawline contouring, tear-trough restoration, and biostimulatory collagen inductors.",
          "copyrightText": "© 2026 Kallos Facial Architecture & Aesthetic Medicine. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-dentist-01",
    "slug": "lumina-modern-dental",
    "name": "Lumina Modern Dental & Smile Care",
    "description": "Comprehensive gentle general dentistry, digital 3D intraoral scanning, pain-free laser cleanings, and emergency tooth relief.",
    "industryId": "healthcare",
    "categoryId": "dentist",
    "collectionId": "specialized-care",
    "designStyle": "medical-clean",
    "featured": false,
    "tags": [
      "dentist",
      "dental care",
      "teeth cleaning",
      "cavity filling",
      "emergency dentist",
      "dental exam"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs11-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "LUMINA MODERN DENTAL & S",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs11-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Noise-Cancelling Headphones • Zero-Anxiety Care",
          "title": "Gentle, Technology-Driven Dental Care Designed for Total Peace of Mind",
          "subtitle": "Leave dental dread in the past. Experience warm ceiling TV displays, warm scented towels, ultrasonic hygiene cleanings, and same-day dental crowns.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs11-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "dt1",
              "title": "Comprehensive Exam & 3D iTero Scan",
              "description": "Zero radiation digital tooth models paired with laser cavity detection and oral cancer screening.",
              "price": "$150",
              "badge": "Featured"
            },
            {
              "id": "dt2",
              "title": "Same-Day CEREC Porcelain Crowns",
              "description": "Milled in-house while you relax, eliminating messy impression molds and temporary crowns.",
              "price": "$1,100"
            },
            {
              "id": "dt3",
              "title": "Laser-Assisted Periodontal Hygiene",
              "description": "Gentle bacterial decontamination eliminating gum inflammation without scalpels or sutures.",
              "price": "$220"
            }
          ]
        }
      },
      {
        "id": "hs11-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Nicholas Reed, DDS",
              "description": "Graduate of NYU College of Dentistry dedicated to compassionate, fear-free family oral health.",
              "meta": "General & Restorative Dentist",
              "imageUrl": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs11-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs11-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Lumina Modern Dental & Smile Care",
          "description": "Comprehensive gentle general dentistry, digital 3D intraoral scanning, pain-free laser cleanings, and emergency tooth relief.",
          "copyrightText": "© 2026 Lumina Modern Dental & Smile Care. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-orthodontist-01",
    "slug": "alignworks-orthodontic-studio",
    "name": "AlignWorks Orthodontic Studio",
    "description": "Top 1% Diamond Plus Invisalign Provider, discreet ceramic brackets, and accelerated digital tooth alignment for teens and adults.",
    "industryId": "healthcare",
    "categoryId": "orthodontist",
    "collectionId": "specialized-care",
    "designStyle": "medical-clean",
    "featured": false,
    "tags": [
      "orthodontist",
      "invisalign",
      "braces",
      "teeth straightening",
      "retainers",
      "clear aligners"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs12-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "ALIGNWORKS ORTHODONTIC S",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs12-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Diamond Plus Invisalign Provider • Virtual Progress Tracking",
          "title": "Transformative Smiles Aligned with Discretion and Speed",
          "subtitle": "Straighten your teeth without disrupting your lifestyle. Custom virtual 3D ClinCheck simulations show your finished smile before you even begin.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs12-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "ot1",
              "title": "Comprehensive Invisalign Clear Aligners",
              "description": "SmartTrack material moving teeth with 75% more predictability. Removable for eating and flossing.",
              "price": "From $3,400",
              "badge": "Featured"
            },
            {
              "id": "ot2",
              "title": "Clear Aesthetic Ceramic Braces",
              "description": "Translucent monocrystalline brackets that blend invisibly with your natural enamel.",
              "price": "From $3,800"
            },
            {
              "id": "ot3",
              "title": "Accelerated Orthodontics (Propel VPro)",
              "description": "High-frequency vibration device stimulating cellular alveolar bone remodeling to cut treatment time by 30%.",
              "price": "$650"
            }
          ]
        }
      },
      {
        "id": "hs12-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Sophia Chen, DMD, MS",
              "description": "Specialist in complex adult airway orthodontics and digital tooth biomechanics.",
              "meta": "Board-Certified Orthodontist",
              "imageUrl": "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs12-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs12-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "AlignWorks Orthodontic Studio",
          "description": "Top 1% Diamond Plus Invisalign Provider, discreet ceramic brackets, and accelerated digital tooth alignment for teens and adults.",
          "copyrightText": "© 2026 AlignWorks Orthodontic Studio. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-pediatric-dentist-01",
    "slug": "sprout-pediatric-dental",
    "name": "Sprout & Smile Pediatric Dental Wonderland",
    "description": "Joyful, fear-free pediatric dentistry featuring safari-themed private rooms, sensory-friendly options, and gentle preventive care.",
    "industryId": "healthcare",
    "categoryId": "pediatric-dentist",
    "collectionId": "specialized-care",
    "designStyle": "soft-pastel",
    "featured": true,
    "tags": [
      "pediatric dentist",
      "kids dentist",
      "baby teeth",
      "fluoride",
      "dental sealants",
      "child friendly"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs13-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "SPROUT & SMILE PEDIATRIC",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs13-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Board-Certified Pediatric Specialists • Sensory Certified",
          "title": "Where Kids Love Visiting the Dentist and Smiling Big",
          "subtitle": "From baby’s first tooth to orthodontic guidance for tweens, our child-focused team fosters lifelong oral hygiene with laughter and patience.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs13-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "pd1",
              "title": "Infant Knee-to-Knee Dental Exams",
              "description": "Gentle checkups for infants under 12 months checking tongue ties and enamel calcification.",
              "price": "$95",
              "badge": "Featured"
            },
            {
              "id": "pd2",
              "title": "BPA-Free Protective Dental Sealants",
              "description": "Shields deep grooves on chewing molars from cavity-causing bacteria and sugary snacks.",
              "price": "$55 / tooth"
            },
            {
              "id": "pd3",
              "title": "Laughing Gas & Gentle Sedation",
              "description": "Mild inhaled nitrous oxide to help anxious children stay calm and comfortable through treatment.",
              "price": "$120"
            }
          ]
        }
      },
      {
        "id": "hs13-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Hannah Bloom, DDS",
              "description": "Fellow of the American Academy of Pediatric Dentistry with special training in sensory sensitivities.",
              "meta": "Board-Certified Pediatric Dentist",
              "imageUrl": "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs13-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs13-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Sprout & Smile Pediatric Dental Wonderland",
          "description": "Joyful, fear-free pediatric dentistry featuring safari-themed private rooms, sensory-friendly options, and gentle preventive care.",
          "copyrightText": "© 2026 Sprout & Smile Pediatric Dental Wonderland. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-ophthalmologist-01",
    "slug": "visionary-eye-surgery",
    "name": "Visionary Eye Surgery & Retinal Institute",
    "description": "Blade-free SMILE and LASIK laser vision correction, advanced multifocal cataract lens implants, and medical retinal diagnostics.",
    "industryId": "healthcare",
    "categoryId": "ophthalmologist",
    "collectionId": "specialized-care",
    "designStyle": "medical-clean",
    "featured": false,
    "tags": [
      "ophthalmologist",
      "lasik",
      "cataract surgery",
      "smile laser",
      "glaucoma",
      "retina specialist"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs14-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "VISIONARY EYE SURGERY & ",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs14-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "ZEISS VisuMax SMILE Center • PanOptix Multifocal Lenses",
          "title": "Crystal Clear Vision Restored with Micro-Precision Laser Optics",
          "subtitle": "Say goodbye to glasses and contacts. Wake up to crisp, high-definition sight with blade-free laser procedures completed in under 15 minutes.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs14-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "op1",
              "title": "ZEISS SMILE Pro Laser Correction",
              "description": "Keyhole laser vision correction with no flap creation, preserving corneal biomechanics and tear film.",
              "price": "$2,200 / eye",
              "badge": "Featured"
            },
            {
              "id": "op2",
              "title": "Femtosecond Laser Cataract Surgery",
              "description": "Replaces cloudy crystalline lenses with trifocal PanOptix IOLs for near, intermediate, and distance vision.",
              "price": "Covered + Premium IOL"
            },
            {
              "id": "op3",
              "title": "Spectral-Domain OCT Retinal Imaging",
              "description": "Non-invasive high-resolution cross-sectional retinal mapping diagnosing macular degeneration and diabetic edema.",
              "price": "$180"
            }
          ]
        }
      },
      {
        "id": "hs14-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Arthur Sterling, MD, FACS",
              "description": "Performed over 18,000 successful laser vision corrections and laser-assisted cataract extractions.",
              "meta": "Cornea & Refractive Surgeon",
              "imageUrl": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs14-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs14-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Visionary Eye Surgery & Retinal Institute",
          "description": "Blade-free SMILE and LASIK laser vision correction, advanced multifocal cataract lens implants, and medical retinal diagnostics.",
          "copyrightText": "© 2026 Visionary Eye Surgery & Retinal Institute. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-gynecologist-01",
    "slug": "haven-womens-health",
    "name": "Haven Women’s Health & Gynecology Clinic",
    "description": "Holistic and clinical gynecological care covering PCOS management, endometriosis diagnostics, contraceptive choices, and menopause vitality.",
    "industryId": "healthcare",
    "categoryId": "gynecologist",
    "collectionId": "specialized-care",
    "designStyle": "minimal-neutral",
    "featured": false,
    "tags": [
      "gynecologist",
      "womens health",
      "pap smear",
      "pcos",
      "endometriosis",
      "menopause"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs15-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "HAVEN WOMEN’S HEALTH & G",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs15-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "All-Female Clinical Team • Compassionate Privacy",
          "title": "Empathetic, Comprehensive Healthcare for Every Season of Womanhood",
          "subtitle": "From annual preventive wellness visits to advanced minimally invasive laparoscopic procedures, we listen to your body and honor your choices.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs15-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "gy1",
              "title": "Annual Well-Woman Preventive Screen",
              "description": "Cervical Pap smear, HPV testing, clinical breast exam, and comprehensive hormonal blood profiling.",
              "price": "$180",
              "badge": "Featured"
            },
            {
              "id": "gy2",
              "title": "PCOS & Metabolic Hormonal Care",
              "description": "Integrated nutritional, medication, and cycle regulation therapies restoring ovulatory balance.",
              "price": "$250"
            },
            {
              "id": "gy3",
              "title": "Bio-Identical Hormone Optimization (BHRT)",
              "description": "Tailored estrogen and progesterone therapies relieving hot flashes, brain fog, and sleep disruption.",
              "price": "$300"
            }
          ]
        }
      },
      {
        "id": "hs15-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Rebecca Stone, MD, FACOG",
              "description": "Dedicated to dismantling medical gaslighting and delivering transparent, research-backed female care.",
              "meta": "Board-Certified Obstetrician & Gynecologist",
              "imageUrl": "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs15-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs15-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Haven Women’s Health & Gynecology Clinic",
          "description": "Holistic and clinical gynecological care covering PCOS management, endometriosis diagnostics, contraceptive choices, and menopause vitality.",
          "copyrightText": "© 2026 Haven Women’s Health & Gynecology Clinic. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-obstetrician-01",
    "slug": "cradlecare-obstetric-practice",
    "name": "CradleCare Maternal & Obstetric Practice",
    "description": "Empowered pregnancy journeys with low-intervention birth plans, high-risk maternal-fetal surveillance, and 4D sonography.",
    "industryId": "healthcare",
    "categoryId": "obstetrician",
    "collectionId": "specialized-care",
    "designStyle": "soft-pastel",
    "featured": false,
    "tags": [
      "obstetrician",
      "pregnancy",
      "prenatal care",
      "childbirth",
      "ultrasound",
      "maternal care"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs16-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "CRADLECARE MATERNAL & OB",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs16-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Low C-Section Rate • In-Clinic 4D HD-Live Ultrasounds",
          "title": "Guiding Mothers and Babies Safely from Conception to Delivery",
          "subtitle": "Every birth story is sacred. We collaborate with you to create a personalized labor plan in world-class partner hospital birthing suites.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs16-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "ob1",
              "title": "Comprehensive Prenatal Care Program",
              "description": "Monthly and weekly checkups monitoring fetal heart tones, fundal growth, and maternal vitals.",
              "price": "Global Maternity Fee",
              "badge": "Featured"
            },
            {
              "id": "ob2",
              "title": "GE Voluson HD-Live 4D Sonograms",
              "description": "Breathtaking photorealistic imaging revealing your baby’s facial expressions and movements in real time.",
              "price": "$180"
            },
            {
              "id": "ob3",
              "title": "Postpartum 4th-Trimester Wellness",
              "description": "Pelvic floor therapy evaluation, postpartum depression screening, and lactation consultant support.",
              "price": "Included in Care"
            }
          ]
        }
      },
      {
        "id": "hs16-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Sarah Jennings, MD, FACOG",
              "description": "Over 16 years attending over 3,500 peaceful deliveries with a passion for natural physiologic birth.",
              "meta": "Senior Obstetrician & Laborist",
              "imageUrl": "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs16-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs16-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "CradleCare Maternal & Obstetric Practice",
          "description": "Empowered pregnancy journeys with low-intervention birth plans, high-risk maternal-fetal surveillance, and 4D sonography.",
          "copyrightText": "© 2026 CradleCare Maternal & Obstetric Practice. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-maternity-hospital-01",
    "slug": "serenity-maternity-hospital",
    "name": "Serenity Pavilion Maternity Hospital",
    "description": "Private luxury labor and delivery suites with water-birth tubs, Level III neonatal intensive care unit (NICU), and five-star room service.",
    "industryId": "healthcare",
    "categoryId": "maternity-hospital",
    "collectionId": "specialized-care",
    "designStyle": "luxury-editorial",
    "featured": true,
    "tags": [
      "maternity hospital",
      "birthing center",
      "nicu",
      "water birth",
      "postpartum suite",
      "labor and delivery"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs17-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "SERENITY PAVILION MATERN",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs17-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Level-III NICU On-Site • 24/7 Anesthesiology & Neonatology",
          "title": "A Tranquil, World-Class Hospital Sanctuary for Welcoming New Life",
          "subtitle": "Enjoy the warmth of a boutique hotel combined with the uncompromising safety of board-certified obstetricians and neonatal specialists.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs17-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "mh1",
              "title": "Private Boutique Birthing Suites",
              "description": "Spacious birthing suites featuring hydrotherapy tubs, customizable ambient lighting, and partner sleeping beds.",
              "price": "Insurance Accepted",
              "badge": "Featured"
            },
            {
              "id": "mh2",
              "title": "Level-III Neonatal Intensive Care (NICU)",
              "description": "Private pod incubators for premature infants staffed 24/7 by fellowship-trained neonatologists.",
              "price": "Full Hospital Service"
            },
            {
              "id": "mh3",
              "title": "Postpartum Celebratory Dinner & Suite",
              "description": "Gourmet multi-course celebratory dining prepared by our executive chef for new parents.",
              "price": "Complimentary"
            }
          ]
        }
      },
      {
        "id": "hs17-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Catherine Ross, MD",
              "description": "Oversees safety and clinical quality across 4,800 annual deliveries in the regional flagship pavilion.",
              "meta": "Chief of Maternal-Fetal Medicine",
              "imageUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs17-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs17-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Serenity Pavilion Maternity Hospital",
          "description": "Private luxury labor and delivery suites with water-birth tubs, Level III neonatal intensive care unit (NICU), and five-star room service.",
          "copyrightText": "© 2026 Serenity Pavilion Maternity Hospital. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-ivf-center-01",
    "slug": "genesis-fertility-ivf",
    "name": "Genesis Fertility & Advanced IVF Institute",
    "description": "Leading success rates with pre-implantation genetic screening (PGT-A), ICSI fertilization, egg freezing, and compassionate third-party reproduction.",
    "industryId": "healthcare",
    "categoryId": "ivf-center",
    "collectionId": "specialized-care",
    "designStyle": "medical-clean",
    "featured": false,
    "tags": [
      "ivf center",
      "fertility clinic",
      "egg freezing",
      "icsi",
      "pgt-a",
      "surrogacy"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs18-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "GENESIS FERTILITY & ADVA",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs18-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "68% Clinical Pregnancy Rate • SART Verified Laboratory",
          "title": "Turning Hope Into Families with Next-Generation Reproductive Science",
          "subtitle": "Clean-room IVF embryology chambers, AI-assisted embryo selection, and deeply supportive fertility doctors guiding every step of your journey.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs18-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "iv1",
              "title": "IVF with PGT-A Genetic Testing",
              "description": "Screening embryos for chromosomal euploidy to maximize implantation rates and minimize miscarriage risk.",
              "price": "Cycle Plans from $11,500",
              "badge": "Featured"
            },
            {
              "id": "iv2",
              "title": "Vitrification Egg Freezing Program",
              "description": "Flash-freezing unfertilized oocytes at peak reproductive vitality for future family planning.",
              "price": "$6,800 + Storage"
            },
            {
              "id": "iv3",
              "title": "Intracytoplasmic Sperm Injection (ICSI)",
              "description": "Direct injection of a single high-morphology sperm cell into each mature egg overcoming male-factor obstacles.",
              "price": "Included in Protocol"
            }
          ]
        }
      },
      {
        "id": "hs18-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Alexander Vance, MD, FACOG",
              "description": "Over 20 years guiding thousands of intended parents to healthy live births.",
              "meta": "Reproductive Endocrinologist & Infertility Specialist",
              "imageUrl": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs18-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs18-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Genesis Fertility & Advanced IVF Institute",
          "description": "Leading success rates with pre-implantation genetic screening (PGT-A), ICSI fertilization, egg freezing, and compassionate third-party reproduction.",
          "copyrightText": "© 2026 Genesis Fertility & Advanced IVF Institute. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-gastroenterologist-01",
    "slug": "digestive-health-endoscopy",
    "name": "Digestive Health & Endoscopy Institute",
    "description": "Painless propofol-sedated colonoscopies, acid reflux Stretta procedures, Crohn’s and colitis management, and microbiome diagnostics.",
    "industryId": "healthcare",
    "categoryId": "gastroenterologist",
    "collectionId": "specialized-care",
    "designStyle": "medical-clean",
    "featured": false,
    "tags": [
      "gastroenterologist",
      "colonoscopy",
      "endoscopy",
      "acid reflux",
      "ibs",
      "crohns"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs19-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "DIGESTIVE HEALTH & ENDOS",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs19-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Painless Twilight Sedation • High Adenoma Detection Rate",
          "title": "Complete Gastrointestinal Health and Early Colon Cancer Prevention",
          "subtitle": "From preventative routine screenings to targeted biologic therapies for irritable bowel disease, experience digestive comfort and reassurance.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs19-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "ge1",
              "title": "High-Definition Screening Colonoscopy",
              "description": "AI-assisted computer vision detecting precancerous polyps with complete painless sedation.",
              "price": "Fully Insured Preventive",
              "badge": "Featured"
            },
            {
              "id": "ge2",
              "title": "Upper Endoscopy (EGD) & Bravo pH",
              "description": "Diagnosing Barrett’s esophagus, hiatal hernias, and measuring 48-hour wireless acid reflux levels.",
              "price": "$850"
            },
            {
              "id": "ge3",
              "title": "SIBO & Comprehensive Microbiome Profiling",
              "description": "Breath hydrogen testing and stool PCR assays identifying dysbiosis and small intestinal bacterial overgrowth.",
              "price": "$290"
            }
          ]
        }
      },
      {
        "id": "hs19-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Christopher Patel, MD, FACG",
              "description": "Specialist in advanced therapeutic endoscopy and clinical nutritional gastroenterology.",
              "meta": "Board-Certified Gastroenterologist",
              "imageUrl": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs19-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs19-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Digestive Health & Endoscopy Institute",
          "description": "Painless propofol-sedated colonoscopies, acid reflux Stretta procedures, Crohn’s and colitis management, and microbiome diagnostics.",
          "copyrightText": "© 2026 Digestive Health & Endoscopy Institute. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-pulmonologist-01",
    "slug": "pulmocare-lung-sleep",
    "name": "PulmoCare Lung & Sleep Medicine Specialists",
    "description": "Targeted therapies for asthma, chronic obstructive pulmonary disease (COPD), pulmonary fibrosis, and in-lab sleep apnea diagnostics.",
    "industryId": "healthcare",
    "categoryId": "pulmonologist",
    "collectionId": "specialized-care",
    "designStyle": "medical-clean",
    "featured": false,
    "tags": [
      "pulmonologist",
      "asthma",
      "copd",
      "sleep apnea",
      "lung doctor",
      "bronchoscopy"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs20-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "PULMOCARE LUNG & SLEEP M",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs20-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "AASM Accredited Sleep Lab • Full Pulmonary Function Testing",
          "title": "Breathe Freely and Sleep Soundly with Expert Respiratory Care",
          "subtitle": "Restoring lung capacity and nocturnal oxygenation through advanced biologic asthma inhalers, CPAP optimization, and pulmonary rehabilitation.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs20-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "pu1",
              "title": "Complete Plethysmography PFT Testing",
              "description": "Measures forced expiratory volume (FEV1), total lung capacity, and gas diffusion capacity.",
              "price": "$220",
              "badge": "Featured"
            },
            {
              "id": "pu2",
              "title": "Home & In-Lab Polysomnography Sleep Studies",
              "description": "EEG and airflow tracking diagnosing obstructive sleep apnea and titration of whisper-quiet CPAP devices.",
              "price": "$350"
            },
            {
              "id": "pu3",
              "title": "Bronchial Thermoplasty & Biologics",
              "description": "Interventional thermal treatments and anti-IgE/anti-IL5 monoclonal antibody injections for refractory asthma.",
              "price": "Specialist Evaluation"
            }
          ]
        }
      },
      {
        "id": "hs20-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. David Morales, MD, FCCP",
              "description": "Former director of critical care medicine dedicated to chronic airway optimization and restorative sleep.",
              "meta": "Pulmonologist & Sleep Medicine Specialist",
              "imageUrl": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs20-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs20-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "PulmoCare Lung & Sleep Medicine Specialists",
          "description": "Targeted therapies for asthma, chronic obstructive pulmonary disease (COPD), pulmonary fibrosis, and in-lab sleep apnea diagnostics.",
          "copyrightText": "© 2026 PulmoCare Lung & Sleep Medicine Specialists. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-urologist-01",
    "slug": "precision-urology-center",
    "name": "Precision Urology & Men’s Health Center",
    "description": "Da Vinci robotic prostatectomies, laser kidney stone clearance, gentle no-scalpel vasectomies, and low-T hormone optimization.",
    "industryId": "healthcare",
    "categoryId": "urologist",
    "collectionId": "specialized-care",
    "designStyle": "modern-corporate",
    "featured": true,
    "tags": [
      "urologist",
      "kidney stone",
      "vasectomy",
      "prostate",
      "mens health",
      "urinary health"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs21-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "PRECISION UROLOGY & MEN’",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs21-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Da Vinci Xi Robotic Surgery • 15-Minute No-Scalpel Vasectomy",
          "title": "Advanced Robotic Urological Surgery and Restorative Men’s Vitality",
          "subtitle": "Compassionate, discreet care delivering rapid laser lithotripsy for agonizing kidney stones and nerve-sparing robotic precision.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs21-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "ur1",
              "title": "Holmium Laser Kidney Stone Lithotripsy",
              "description": "Dusts painful stones via flexible ureteroscopy with no external incisions and immediate relief.",
              "price": "Outpatient Procedure",
              "badge": "Featured"
            },
            {
              "id": "ur2",
              "title": "No-Scalpel, No-Needle Vasectomy",
              "description": "Minimally invasive 15-minute in-office procedure with puncture technique and over 99.8% efficacy.",
              "price": "$850"
            },
            {
              "id": "ur3",
              "title": "UroLift System for Enlarged Prostate (BPH)",
              "description": "Tiny permanent implants opening the urethra without heat, cutting, or sexual side effects.",
              "price": "Covered by Insurance"
            }
          ]
        }
      },
      {
        "id": "hs21-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Gregory Vance, MD, FACS",
              "description": "Over 17 years specializing in robotic oncology and minimally invasive benign prostatic hyperplasia therapies.",
              "meta": "Chief of Urologic Surgery",
              "imageUrl": "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs21-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs21-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Precision Urology & Men’s Health Center",
          "description": "Da Vinci robotic prostatectomies, laser kidney stone clearance, gentle no-scalpel vasectomies, and low-T hormone optimization.",
          "copyrightText": "© 2026 Precision Urology & Men’s Health Center. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-psychiatrist-01",
    "slug": "auramind-neuropsychiatry",
    "name": "AuraMind Neuropsychiatry & Ketamine Clinic",
    "description": "Integrative adult psychiatry combining precise pharmacogenomic DNA medication matching, Spravato esketamine, and transcranial magnetic stimulation (TMS).",
    "industryId": "healthcare",
    "categoryId": "psychiatrist",
    "collectionId": "specialized-care",
    "designStyle": "minimal-neutral",
    "featured": false,
    "tags": [
      "psychiatrist",
      "mental health",
      "depression",
      "anxiety",
      "adhd",
      "tms therapy"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs22-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "AURAMIND NEUROPSYCHIATRY",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs22-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "GeneSight DNA Matching • FDA-Cleared Magstim TMS",
          "title": "Precision Neuropsychiatric Medicine for Lasting Cognitive Clarity",
          "subtitle": "Move past trial-and-error antidepressant cycles. We leverage genetic metabolic profiling and non-invasive brain stimulation for treatment-resistant depression.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs22-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "ps1",
              "title": "Comprehensive Psychiatric Diagnostic Intake",
              "description": "90-minute evaluation exploring neurochemistry, trauma history, sleep metrics, and biometric markers.",
              "price": "$450",
              "badge": "Featured"
            },
            {
              "id": "ps2",
              "title": "Deep TMS (Transcranial Magnetic Stimulation)",
              "description": "Painless magnetic pulses stimulating underactive prefrontal cortex circuits without medication side effects.",
              "price": "Insurance Covered"
            },
            {
              "id": "ps3",
              "title": "Spravato (Esketamine) In-Clinic Protocol",
              "description": "Rapid glutamate-pathway neurogenesis relieving acute suicidal ideation and major depressive disorder.",
              "price": "Specialized Program"
            }
          ]
        }
      },
      {
        "id": "hs22-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Julianne Mercer, MD",
              "description": "Pioneer in interventional psychiatry combining neuroplasticity protocols with personalized medication management.",
              "meta": "Board-Certified Adult Psychiatrist",
              "imageUrl": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs22-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs22-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "AuraMind Neuropsychiatry & Ketamine Clinic",
          "description": "Integrative adult psychiatry combining precise pharmacogenomic DNA medication matching, Spravato esketamine, and transcranial magnetic stimulation (TMS).",
          "copyrightText": "© 2026 AuraMind Neuropsychiatry & Ketamine Clinic. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-psychologist-01",
    "slug": "mindwell-psychology-clinic",
    "name": "MindWell Clinical Psychology & Psychotherapy",
    "description": "Doctorate-level clinical psychologists providing evidence-based cognitive behavioral therapy (CBT), EMDR trauma therapy, and psychological testing.",
    "industryId": "healthcare",
    "categoryId": "psychologist",
    "collectionId": "specialized-care",
    "designStyle": "soft-pastel",
    "featured": false,
    "tags": [
      "psychologist",
      "therapy",
      "cbt",
      "emdr",
      "trauma",
      "counseling"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs23-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "MINDWELL CLINICAL PSYCHO",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs23-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "PsyD / PhD Licensed Psychologists • In-Person & Telehealth",
          "title": "Transformative Psychotherapy Rooted in Science and Human Warmth",
          "subtitle": "Untangle overwhelming anxiety, process buried trauma, and build resilient emotional coping mechanisms in a completely judgment-free space.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs23-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "pc1",
              "title": "Individual Cognitive Behavioral Therapy (CBT)",
              "description": "Targeting automatic negative thought loops, core cognitive distortions, and panic behavior cycles.",
              "price": "$220 / 50 min",
              "badge": "Featured"
            },
            {
              "id": "pc2",
              "title": "EMDR Trauma Reprocessing Therapy",
              "description": "Bilateral eye movement stimulation resolving distressing traumatic memories and complex PTSD.",
              "price": "$240 / 60 min"
            },
            {
              "id": "pc3",
              "title": "Comprehensive ADHD & Neuropsych Testing",
              "description": "Standardized cognitive battery diagnosing executive dysfunction, learning disabilities, and giftedness.",
              "price": "$1,800 Complete"
            }
          ]
        }
      },
      {
        "id": "hs23-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Marcus Thorne, PhD, ABPP",
              "description": "Over 15 years specializing in anxiety disorders, executive performance, and evidence-based trauma recovery.",
              "meta": "Licensed Clinical Psychologist",
              "imageUrl": "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs23-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs23-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "MindWell Clinical Psychology & Psychotherapy",
          "description": "Doctorate-level clinical psychologists providing evidence-based cognitive behavioral therapy (CBT), EMDR trauma therapy, and psychological testing.",
          "copyrightText": "© 2026 MindWell Clinical Psychology & Psychotherapy. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-rehabilitation-center-01",
    "slug": "horizon-rehab-institute",
    "name": "Horizon Neuro & Physical Rehabilitation Institute",
    "description": "Inpatient and day-hospital rehabilitation for stroke recovery, spinal cord injury, traumatic brain injury, and post-surgical mobility restoration.",
    "industryId": "healthcare",
    "categoryId": "rehabilitation-center",
    "collectionId": "specialized-care",
    "designStyle": "medical-clean",
    "featured": false,
    "tags": [
      "rehab center",
      "physical therapy",
      "stroke recovery",
      "occupational therapy",
      "neuro rehab",
      "mobility"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs24-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "HORIZON NEURO & PHYSICAL",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs24-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "CARF-Accredited • Ekso Bionics Robotic Exoskeletons",
          "title": "Rebuilding Independence, Strength, and Hope After Major Trauma",
          "subtitle": "Equipped with robotic gait trainers, zero-gravity treadmills, and dedicated physical, occupational, and speech therapists working as one unified team.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs24-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "rh1",
              "title": "Robotic Exoskeleton Gait Training",
              "description": "Motorized bionic suit retraining neural pathways for walking in spinal cord and stroke survivors.",
              "price": "Inpatient / Outpatient",
              "badge": "Featured"
            },
            {
              "id": "rh2",
              "title": "Activities of Daily Living (ADL) Suite",
              "description": "Real-world apartment simulator practicing kitchen safety, bed transfers, and vehicle entry.",
              "price": "Therapy Program"
            },
            {
              "id": "rh3",
              "title": "Aquatic Hydrotherapy Rehabilitation",
              "description": "Warm saltwater therapy pools unloading 80% of body weight for early low-pain joint motion.",
              "price": "$140 / session"
            }
          ]
        }
      },
      {
        "id": "hs24-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Arthur Vance, MD, FAAPMR",
              "description": "Board-certified physiatrist committed to helping patients maximize functional independence.",
              "meta": "Director of Physical Medicine & Rehab",
              "imageUrl": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs24-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs24-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Horizon Neuro & Physical Rehabilitation Institute",
          "description": "Inpatient and day-hospital rehabilitation for stroke recovery, spinal cord injury, traumatic brain injury, and post-surgical mobility restoration.",
          "copyrightText": "© 2026 Horizon Neuro & Physical Rehabilitation Institute. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-nutrition-clinic-01",
    "slug": "metabolic-nutrition-clinic",
    "name": "Metabolic Matrix Clinical Nutrition Clinic",
    "description": "Functional lab-tested medical nutrition therapy for insulin resistance, gut permeability, Hashimoto’s thyroiditis, and sustainable fat loss.",
    "industryId": "healthcare",
    "categoryId": "nutrition-clinic",
    "collectionId": "specialized-care",
    "designStyle": "organic-natural",
    "featured": true,
    "tags": [
      "nutrition clinic",
      "functional medicine",
      "gut health",
      "insulin resistance",
      "meal planning",
      "dietitian"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs25-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "METABOLIC MATRIX CLINICA",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs25-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Continuous Glucose Monitoring (CGM) • Microbiome Sequencing",
          "title": "Cellular Nutritional Medicine Tailored to Your Unique Biochemistry",
          "subtitle": "Say goodbye to generic crash diets. We calibrate your macronutrient ratios using continuous interstitial glucose biosensors and micronutrient assays.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs25-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "nu1",
              "title": "Metabolic & Continuous Glucose Evaluation",
              "description": "14-day CGM sensor tracking glycemic volatility paired with resting metabolic rate (RMR) calorimetry.",
              "price": "$380",
              "badge": "Featured"
            },
            {
              "id": "nu2",
              "title": "Intestinal Barrier & GI-MAP Protocol",
              "description": "Targeted antimicrobial and mucosal healing plans repairing leaky gut and eliminating food sensitivities.",
              "price": "$450"
            },
            {
              "id": "nu3",
              "title": "Physician-Supervised Weight Optimization",
              "description": "Combines micro-dosed GLP-1 peptide support with high-protein body recomposition coaching.",
              "price": "$290 / month"
            }
          ]
        }
      },
      {
        "id": "hs25-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Danielle Cole, MS, RD, CDN",
              "description": "Specialist in endocrine metabolism and clinical nutritional biochemistry.",
              "meta": "Clinical Nutrition Director",
              "imageUrl": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs25-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs25-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Metabolic Matrix Clinical Nutrition Clinic",
          "description": "Functional lab-tested medical nutrition therapy for insulin resistance, gut permeability, Hashimoto’s thyroiditis, and sustainable fat loss.",
          "copyrightText": "© 2026 Metabolic Matrix Clinical Nutrition Clinic. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-dietitian-01",
    "slug": "nourishwise-dietitian-practice",
    "name": "NourishWise Registered Dietitian Practice",
    "description": "One-on-one nutrition counseling, intuitive eating transitions, sports fueling for endurance athletes, and pediatric feeding therapies.",
    "industryId": "healthcare",
    "categoryId": "dietitian",
    "collectionId": "specialized-care",
    "designStyle": "organic-natural",
    "featured": false,
    "tags": [
      "dietitian",
      "registered dietitian",
      "nutritionist",
      "meal plan",
      "sports nutrition",
      "intuitive eating"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs26-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "NOURISHWISE REGISTERED D",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs26-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Registered Dietitian Nutritionists (RDN) • Covered by Insurance",
          "title": "Cultivate a Peaceful, Vibrant Relationship with Wholesome Food",
          "subtitle": "Practical, delicious nutrition strategies that fit your hectic schedule, heal emotional eating patterns, and fuel sustained daily energy.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs26-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "di1",
              "title": "Initial Nutritional Assessment & Roadmap",
              "description": "75-minute deep dive examining dietary recall, lifestyle stressors, lab values, and personal culinary preferences.",
              "price": "$190",
              "badge": "Featured"
            },
            {
              "id": "di2",
              "title": "Endurance Sports Nutrition Programming",
              "description": "Intra-race carbohydrate fueling plans, sweat sodium testing, and glycogen replenishment strategies.",
              "price": "$240"
            },
            {
              "id": "di3",
              "title": "Intuitive Eating & Body Image Mentorship",
              "description": "Ten principles of intuitive eating breaking diet-binge cycles and establishing lasting self-trust.",
              "price": "$140 / bi-weekly"
            }
          ]
        }
      },
      {
        "id": "hs26-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Kendra Sterling, MS, RDN, LDN",
              "description": "Over 12 years helping clients reclaim joyful, nutrient-dense eating without restrictive guilt.",
              "meta": "Lead Registered Dietitian",
              "imageUrl": "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs26-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs26-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "NourishWise Registered Dietitian Practice",
          "description": "One-on-one nutrition counseling, intuitive eating transitions, sports fueling for endurance athletes, and pediatric feeding therapies.",
          "copyrightText": "© 2026 NourishWise Registered Dietitian Practice. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-pathology-lab-01",
    "slug": "biocheck-pathology-lab",
    "name": "BioCheck Diagnostic Pathology Laboratories",
    "description": "CLIA-certified high-throughput molecular diagnostics, histopathology, full hormone panels, and same-day digital lab results.",
    "industryId": "healthcare",
    "categoryId": "pathology-lab",
    "collectionId": "specialized-care",
    "designStyle": "medical-clean",
    "featured": false,
    "tags": [
      "pathology lab",
      "blood test",
      "lab tests",
      "molecular diagnostics",
      "biopsy",
      "clia certified"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1579165466791-788226ab77b6?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs27-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "BIOCHECK DIAGNOSTIC PATH",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs27-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "CLIA & CAP Certified • 4-Hour Urgent Stat Reporting",
          "title": "Rapid, Uncompromising Diagnostic Accuracy for Clinical Decisions",
          "subtitle": "Direct-to-consumer and physician-ordered laboratory testing with gentle phlebotomy and encrypted digital portal delivery within hours.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1579165466791-788226ab77b6?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs27-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "pl1",
              "title": "Executive Comprehensive Metabolic & Lipid Panel",
              "description": "65 clinical biomarkers covering hepatic, renal, cardiac apolipoproteins, and fasting insulin.",
              "price": "$149",
              "badge": "Featured"
            },
            {
              "id": "pl2",
              "title": "Advanced Histopathology & Biopsy Staining",
              "description": "Immunohistochemical and frozen section tissue analysis supervised by board-certified pathologists.",
              "price": "Stat Billing"
            },
            {
              "id": "pl3",
              "title": "Liquid Biopsy & Early Cancer Screening",
              "description": "Circulating tumor cell DNA profiling identifying microscopic multi-cancer methylation signals.",
              "price": "$890"
            }
          ]
        }
      },
      {
        "id": "hs27-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Leonard Gross, MD, FCAP",
              "description": "Fellow of the College of American Pathologists ensuring rigorous quality control across 1.2M annual tests.",
              "meta": "Medical Director of Pathology",
              "imageUrl": "https://images.unsplash.com/photo-1579165466791-788226ab77b6?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs27-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs27-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "BioCheck Diagnostic Pathology Laboratories",
          "description": "CLIA-certified high-throughput molecular diagnostics, histopathology, full hormone panels, and same-day digital lab results.",
          "copyrightText": "© 2026 BioCheck Diagnostic Pathology Laboratories. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-blood-bank-01",
    "slug": "vitalblood-community-center",
    "name": "VitalBlood Community Donor & Transfusion Center",
    "description": "Nonprofit regional blood and platelet donation sanctuary saving trauma victims, cancer patients, and surgical candidates daily.",
    "industryId": "healthcare",
    "categoryId": "blood-bank",
    "collectionId": "specialized-care",
    "designStyle": "medical-clean",
    "featured": false,
    "tags": [
      "blood bank",
      "blood donation",
      "platelets",
      "plasma",
      "transfusion",
      "community health"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs28-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "VITALBLOOD COMMUNITY DON",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs28-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "AABB Accredited • 100% Volunteer Donor Sustained",
          "title": "One Pint Saves Three Lives: Join Our Community Lifeline Today",
          "subtitle": "Relax in heated zero-gravity chairs with complimentary smoothies while our skilled phlebotomists complete whole blood donations in under 12 minutes.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs28-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "bb1",
              "title": "Whole Blood Community Donation",
              "description": "Simple 10-minute red blood cell collection tested for infectious agents and separated into vital components.",
              "price": "Free / Volunteer",
              "badge": "Featured"
            },
            {
              "id": "bb2",
              "title": "Apheresis Platelet Donation Program",
              "description": "Automated centrifuge collecting clotting platelets essential for leukemia and chemotherapy patients.",
              "price": "Volunteer Program"
            },
            {
              "id": "bb3",
              "title": "Mobile Corporate Blood Drive Unit",
              "description": "Fully equipped 40-foot motorcoaches deploying directly to office parks, universities, and churches.",
              "price": "Community Event"
            }
          ]
        }
      },
      {
        "id": "hs28-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Miriam Patel, MD",
              "description": "Oversees safety and rapid distribution of critical blood products across 24 regional hospital emergency rooms.",
              "meta": "Director of Transfusion Medicine",
              "imageUrl": "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs28-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs28-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "VitalBlood Community Donor & Transfusion Center",
          "description": "Nonprofit regional blood and platelet donation sanctuary saving trauma victims, cancer patients, and surgical candidates daily.",
          "copyrightText": "© 2026 VitalBlood Community Donor & Transfusion Center. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-pharmacy-01",
    "slug": "apotheca-community-pharmacy",
    "name": "Apotheca Compounding & Community Pharmacy",
    "description": "Independent neighborhood pharmacy offering non-sterile customized compounding, rapid prescription dispensing, and clinical vaccinations.",
    "industryId": "healthcare",
    "categoryId": "pharmacy",
    "collectionId": "specialized-care",
    "designStyle": "organic-natural",
    "featured": true,
    "tags": [
      "pharmacy",
      "chemist",
      "compounding",
      "prescription",
      "medicine",
      "vaccinations"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs29-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "APOTHECA COMPOUNDING & C",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs29-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "5-Minute Fill Times • Drive-Thru & Local Delivery",
          "title": "Personalized Pharmacy Care Where You’re a Name, Not a Number",
          "subtitle": "Skip the massive chain delays. Our doctors of pharmacy offer personal medication therapy reviews, pediatric flavor additions, and hormone compounding.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs29-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "ph1",
              "title": "Customized Prescription Compounding",
              "description": "Dye-free, allergen-free capsules, topical hormone creams, and specialized veterinary formulations.",
              "price": "Custom Quote",
              "badge": "Featured"
            },
            {
              "id": "ph2",
              "title": "Walk-In Travel & Flu Immunizations",
              "description": "CDC-recommended travel vaccines, shingles, pneumonia, and updated annual influenza shots.",
              "price": "Insurance Copay"
            },
            {
              "id": "ph3",
              "title": "Discreet Same-Day Home Delivery",
              "description": "Temperature-controlled couriers bringing maintenance prescriptions straight to your front door.",
              "price": "Free over $35"
            }
          ]
        }
      },
      {
        "id": "hs29-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Gregory Vance, PharmD, RPh",
              "description": "Over 20 years providing personalized pharmaceutical counseling and medication reconciliation.",
              "meta": "Supervising Pharmacist & Compounding Specialist",
              "imageUrl": "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs29-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs29-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Apotheca Compounding & Community Pharmacy",
          "description": "Independent neighborhood pharmacy offering non-sterile customized compounding, rapid prescription dispensing, and clinical vaccinations.",
          "copyrightText": "© 2026 Apotheca Compounding & Community Pharmacy. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-online-pharmacy-01",
    "slug": "omnirx-digital-pharmacy",
    "name": "OmniRx Direct Digital Pharmacy & Telehealth",
    "description": "Seamless digital prescription transfers, transparent wholesale pricing, automated 90-day refills, and licensed pharmacist chat 24/7.",
    "industryId": "healthcare",
    "categoryId": "online-pharmacy",
    "collectionId": "specialized-care",
    "designStyle": "technology-gradient",
    "featured": false,
    "tags": [
      "online pharmacy",
      "mail order pharmacy",
      "digital prescriptions",
      "generic drugs",
      "telehealth",
      "medication delivery"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs30-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "OMNIRX DIRECT DIGITAL PH",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs30-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "NABP Digital Pharmacy Accredited • Up to 85% Off Generic Cash Price",
          "title": "Prescriptions Delivered to Your Doorstep with Zero Markups",
          "subtitle": "Transfer any prescription in 60 seconds with a photo. Transparent pricing, discreet climate-monitored packaging, and free express 2-day delivery.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs30-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "op1",
              "title": "Cost-Plus Transparent Generic Formulary",
              "description": "Every medication priced at exact manufacturing cost + 15% margin with zero insurance middlemen.",
              "price": "From $4 / mo",
              "badge": "Featured"
            },
            {
              "id": "op2",
              "title": "Smart Pre-Sorted Daily Pill Packs",
              "description": "Tear-away packets organized by day and time so you never miss a dose or double-medicate.",
              "price": "Free Service"
            },
            {
              "id": "op3",
              "title": "Instant Online Doctor Consultation",
              "description": "Quick asynchronous consultations for hair loss, asthma inhalers, birth control, and skin creams.",
              "price": "$29 Consult"
            }
          ]
        }
      },
      {
        "id": "hs30-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Amanda Foster, PharmD",
              "description": "Overseeing regulatory compliance and safe mail-order pharmacy distribution across all 50 states.",
              "meta": "Head of Digital Clinical Operations",
              "imageUrl": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs30-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs30-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "OmniRx Direct Digital Pharmacy & Telehealth",
          "description": "Seamless digital prescription transfers, transparent wholesale pricing, automated 90-day refills, and licensed pharmacist chat 24/7.",
          "copyrightText": "© 2026 OmniRx Direct Digital Pharmacy & Telehealth. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-medical-store-01",
    "slug": "surgicalsupply-medical-store",
    "name": "SurgicalSupply Medical Store & Home Care",
    "description": "Retail showroom for mobility scooters, lift chairs, hospital beds, ostomy supplies, wound dressings, and compression garments.",
    "industryId": "healthcare",
    "categoryId": "medical-store",
    "collectionId": "specialized-care",
    "designStyle": "modern-corporate",
    "featured": false,
    "tags": [
      "medical store",
      "medical supplies",
      "wheelchair",
      "lift chair",
      "crutches",
      "compression socks"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs31-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "SURGICALSUPPLY MEDICAL S",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs31-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Accredited Medicare Provider • 10,000+ Items in Showroom",
          "title": "Medical Equipment and Home Health Essentials You Can Trust",
          "subtitle": "From temporary post-operative wheelchair rentals to custom orthotic bracing, our certified fitters ensure you get the exact right medical equipment.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs31-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "ms1",
              "title": "Mobility Scooters & Power Wheelchairs",
              "description": "Test drive lightweight foldable travel scooters and heavy-duty all-terrain power chairs in our showroom.",
              "price": "Rent or Buy",
              "badge": "Featured"
            },
            {
              "id": "ms2",
              "title": "Certified Compression Garment Fitting",
              "description": "Custom measurements for Sigvaris and Jobst medical gradient compression stockings (20-30 mmHg).",
              "price": "Free Fitting"
            },
            {
              "id": "ms3",
              "title": "Full Hospital Bed & Lift Chair Setup",
              "description": "White-glove home delivery, assembly, and safety tutorial by certified medical technicians.",
              "price": "Delivery Available"
            }
          ]
        }
      },
      {
        "id": "hs31-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Thomas Bradley, ATP, CRTS",
              "description": "Over 16 years matching patients with customized seating and complex rehab mobility solutions.",
              "meta": "Assistive Technology Professional",
              "imageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs31-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs31-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "SurgicalSupply Medical Store & Home Care",
          "description": "Retail showroom for mobility scooters, lift chairs, hospital beds, ostomy supplies, wound dressings, and compression garments.",
          "copyrightText": "© 2026 SurgicalSupply Medical Store & Home Care. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-medical-equipment-supplier-01",
    "slug": "medvanguard-equipment-supplier",
    "name": "MedVanguard Surgical & Hospital Equipment B2B",
    "description": "B2B distributor of OEM surgical tables, anesthesia workstations, ICU ventilators, patient telemetry monitors, and biomedical maintenance contracts.",
    "industryId": "healthcare",
    "categoryId": "medical-equipment-supplier",
    "collectionId": "specialized-care",
    "designStyle": "modern-corporate",
    "featured": false,
    "tags": [
      "medical equipment",
      "hospital supplier",
      "surgical tables",
      "ventilators",
      "biomedical",
      "b2b medical"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs32-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "MEDVANGUARD SURGICAL & H",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs32-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "ISO 13485 Certified • 24/7 Emergency Biomeds On-Call",
          "title": "Hospital-Grade Medical Systems and Surgical Infrastructure",
          "subtitle": "Supplying ambulatory surgery centers, regional health systems, and emergency clinics with certified OEM medical hardware and preventive maintenance.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs32-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "me1",
              "title": "Surgical Suite Turnkey Outfitting",
              "description": "Surgical lighting booms, carbon-fiber radiolucent tables, and integrated 4K laparoscopic video towers.",
              "price": "Enterprise Quote",
              "badge": "Featured"
            },
            {
              "id": "me2",
              "title": "Biomedical Maintenance & Calibration",
              "description": "Annual electrical safety inspections, NIST-traceable calibration, and emergency loaner equipment.",
              "price": "Service Contract"
            },
            {
              "id": "me3",
              "title": "Refurbished Certified Capital Equipment",
              "description": "Factory-refurbished ultrasound and anesthesia machines with full 2-year parts and labor warranties.",
              "price": "Save up to 45%"
            }
          ]
        }
      },
      {
        "id": "hs32-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Markus Henderson, CBET",
              "description": "Oversees safety and clinical compliance across 85 hospital client installations nationwide.",
              "meta": "VP of Biomedical Engineering",
              "imageUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs32-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs32-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "MedVanguard Surgical & Hospital Equipment B2B",
          "description": "B2B distributor of OEM surgical tables, anesthesia workstations, ICU ventilators, patient telemetry monitors, and biomedical maintenance contracts.",
          "copyrightText": "© 2026 MedVanguard Surgical & Hospital Equipment B2B. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-health-insurance-01",
    "slug": "aegisshield-health-insurance",
    "name": "AegisShield Comprehensive Health Insurance",
    "description": "Affordable ACA-compliant individual, family, and group health plans with nationwide Tier-1 doctor networks and $0 copay preventative visits.",
    "industryId": "healthcare",
    "categoryId": "health-insurance",
    "collectionId": "specialized-care",
    "designStyle": "modern-corporate",
    "featured": true,
    "tags": [
      "health insurance",
      "medical coverage",
      "hmo",
      "ppo",
      "family plan",
      "dental vision"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs33-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "AEGISSHIELD COMPREHENSIV",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs33-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "98% Network Satisfaction • Open Enrollment Live",
          "title": "Health Coverage That Protects Your Family Without the Fine Print",
          "subtitle": "Transparent deductibles, expansive in-network specialist rosters, zero-cost virtual urgent care visits, and personalized health concierge advocates.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs33-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "hi1",
              "title": "Prime PPO Complete Coverage Plan",
              "description": "Freedom to see any in-network or out-of-network specialist without gatekeeping referrals.",
              "price": "From $240 / mo",
              "badge": "Featured"
            },
            {
              "id": "hi2",
              "title": "Small Business Group Health Solutions",
              "description": "Tax-advantaged health plans for teams of 2 to 100 with composite rating and employee wellness apps.",
              "price": "Custom Proposal"
            },
            {
              "id": "hi3",
              "title": "Comprehensive Dental, Vision & Hearing Add-On",
              "description": "Covers annual dental checkups, orthodontic allowances, and annual designer eyewear frames.",
              "price": "+$28 / mo"
            }
          ]
        }
      },
      {
        "id": "hs33-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Sarah Montgomery",
              "description": "Over 18 years helping individuals and employers navigate health policy with crystal clarity.",
              "meta": "Chief Benefits Strategist",
              "imageUrl": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs33-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs33-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "AegisShield Comprehensive Health Insurance",
          "description": "Affordable ACA-compliant individual, family, and group health plans with nationwide Tier-1 doctor networks and $0 copay preventative visits.",
          "copyrightText": "© 2026 AegisShield Comprehensive Health Insurance. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-cancer-hospital-01",
    "slug": "beacon-hope-cancer-institute",
    "name": "Beacon Hope Comprehensive Oncology & Cancer Institute",
    "description": "NCI-designated cancer center pioneering proton beam radiation, personalized genomic immunotherapy, CAR-T cell infusions, and compassionate oncology care.",
    "industryId": "healthcare",
    "categoryId": "cancer-hospital",
    "collectionId": "specialized-care",
    "designStyle": "medical-clean",
    "featured": false,
    "tags": [
      "cancer hospital",
      "oncology",
      "chemotherapy",
      "proton therapy",
      "car-t",
      "radiation oncology"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs34-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "BEACON HOPE COMPREHENSIV",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs34-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "NCI-Designated Cancer Center • Clinical Trials Access",
          "title": "Relentless Oncology Science Combined with Unwavering Human Compassion",
          "subtitle": "Every patient is reviewed by our multidisciplinary tumor board of surgical oncologists, radiation physicists, and genomic pathologists.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs34-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "ca1",
              "title": "Next-Generation Genomic Tumor Profiling",
              "description": "Sequencing 500+ cancer-driver genes to match you with targeted small-molecule oral inhibitors.",
              "price": "Fully Insured Service",
              "badge": "Featured"
            },
            {
              "id": "ca2",
              "title": "Pencil-Beam Proton Radiation Therapy",
              "description": "Deposits maximum radiation directly into the tumor with zero exit dose, sparing healthy adjacent organs.",
              "price": "Specialized Program"
            },
            {
              "id": "ca3",
              "title": "Infusion Suite with Integrative Healing",
              "description": "Private chemotherapy suites with heated massage recliners, oncology massage, and acupuncture.",
              "price": "Supportive Care"
            }
          ]
        }
      },
      {
        "id": "hs34-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Evelyn Sterling, MD, PhD",
              "description": "Principal investigator on breakthrough immunological clinical trials with over 25 years of oncology leadership.",
              "meta": "Physician-in-Chief & Oncologist",
              "imageUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs34-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs34-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Beacon Hope Comprehensive Oncology & Cancer Institute",
          "description": "NCI-designated cancer center pioneering proton beam radiation, personalized genomic immunotherapy, CAR-T cell infusions, and compassionate oncology care.",
          "copyrightText": "© 2026 Beacon Hope Comprehensive Oncology & Cancer Institute. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-veterinary-clinic-01",
    "slug": "paws-whiskers-veterinary",
    "name": "Paws & Whiskers Companion Animal Hospital",
    "description": "Fear-free certified small animal clinic providing wellness vaccinations, dental scaling, soft tissue surgeries, and in-house diagnostic bloodwork.",
    "industryId": "healthcare",
    "categoryId": "veterinary-clinic",
    "collectionId": "specialized-care",
    "designStyle": "soft-pastel",
    "featured": false,
    "tags": [
      "veterinary clinic",
      "pet doctor",
      "dog clinic",
      "cat vet",
      "pet vaccinations",
      "animal hospital"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs35-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "PAWS & WHISKERS COMPANIO",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs35-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Fear-Free Certified Clinic • Separate Dog & Cat Waiting Lounges",
          "title": "Gentle, Compassionate Medicine for Your Beloved Four-Legged Family",
          "subtitle": "We treat your furry companions like family. Calming pheromone diffusers, lick-mats with organic peanut butter, and low-stress handling protocols.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs35-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "vc1",
              "title": "Comprehensive Nose-to-Tail Pet Wellness Exam",
              "description": "Ophthalmic, cardiac, joint mobility, and dental health evaluations for puppies, kittens, and seniors.",
              "price": "$75",
              "badge": "Featured"
            },
            {
              "id": "vc2",
              "title": "Ultrasonic Dental Scaling & Polishing",
              "description": "General anesthesia cleanings eliminating tartar below the gumline with full-mouth digital dental x-rays.",
              "price": "From $420"
            },
            {
              "id": "vc3",
              "title": "Core Preventive Vaccinations & Parasite Prevention",
              "description": "Rabies, DHPP, Bordetella, and FVRCP vaccines paired with 12-month heartworm and flea protection.",
              "price": "Packages Available"
            }
          ]
        }
      },
      {
        "id": "hs35-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Chloe Martinez, DVM",
              "description": "Graduate of UC Davis School of Veterinary Medicine dedicated to low-stress animal medical care.",
              "meta": "Medical Director & Veterinarian",
              "imageUrl": "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs35-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs35-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Paws & Whiskers Companion Animal Hospital",
          "description": "Fear-free certified small animal clinic providing wellness vaccinations, dental scaling, soft tissue surgeries, and in-house diagnostic bloodwork.",
          "copyrightText": "© 2026 Paws & Whiskers Companion Animal Hospital. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-animal-hospital-01",
    "slug": "metrowest-animal-hospital",
    "name": "MetroWest 24/7 Emergency Animal Hospital",
    "description": "24-hour emergency and critical veterinary trauma center with oxygen kennels, digital trauma sonography, emergency surgery, and board-certified surgeons.",
    "industryId": "healthcare",
    "categoryId": "animal-hospital",
    "collectionId": "specialized-care",
    "designStyle": "medical-clean",
    "featured": false,
    "tags": [
      "animal hospital",
      "emergency vet",
      "pet emergency",
      "24-7 vet",
      "pet surgery",
      "veterinary trauma"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs36-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "METROWEST 24/7 EMERGENCY",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs36-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Open 24/7/365 • Level-1 Veterinary Trauma Center",
          "title": "Always Here When Emergencies Strike Your Beloved Companion",
          "subtitle": "No appointment needed. Our emergency veterinarians, critical care nurses, and surgical suites are staffed 24 hours a day, 365 days a year.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs36-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "ah1",
              "title": "24/7 Emergency Triage & Intensive Care",
              "description": "Immediate stabilization for toxic ingestions, hit-by-car trauma, bloat (GDV), and acute seizures.",
              "price": "Emergency Triage",
              "badge": "Featured"
            },
            {
              "id": "ah2",
              "title": "Emergency Soft-Tissue & Orthopedic Surgery",
              "description": "Foreign body removal, splenectomies, and emergency fracture repair with board-certified surgeons.",
              "price": "Surgical Unit"
            },
            {
              "id": "ah3",
              "title": "Climate & Oxygen-Controlled ICU Kennels",
              "description": "Continuous ECG, arterial blood pressure monitoring, and supplemental oxygen therapy for critical patients.",
              "price": "ICU Monitoring"
            }
          ]
        }
      },
      {
        "id": "hs36-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Ryan Gallagher, DVM, DACVECC",
              "description": "Over 14 years managing acute veterinary trauma and life-threatening surgical emergencies.",
              "meta": "Emergency & Critical Care Specialist",
              "imageUrl": "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs36-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs36-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "MetroWest 24/7 Emergency Animal Hospital",
          "description": "24-hour emergency and critical veterinary trauma center with oxygen kennels, digital trauma sonography, emergency surgery, and board-certified surgeons.",
          "copyrightText": "© 2026 MetroWest 24/7 Emergency Animal Hospital. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  },
  {
    "id": "healthcare-pet-pharmacy-01",
    "slug": "vetrx-express-pet-pharmacy",
    "name": "VetRx Express Compounding & Pet Pharmacy",
    "description": "Specialized veterinary compounding preparing chewable meat-flavored treats, transdermal ear gels, and liquid suspensions pets actually love.",
    "industryId": "healthcare",
    "categoryId": "pet-pharmacy",
    "collectionId": "specialized-care",
    "designStyle": "organic-natural",
    "featured": true,
    "tags": [
      "pet pharmacy",
      "pet meds",
      "veterinary compounding",
      "flea tick",
      "heartworm",
      "chewable treats"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "hs37-navbar",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "VETRX EXPRESS COMPOUNDIN",
          "primaryButtonText": "Book Consultation",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Clinical Treatments",
              "href": "#services"
            },
            {
              "label": "Medical Faculty",
              "href": "#doctor"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            },
            {
              "label": "Insurance & FAQ",
              "href": "#faq"
            }
          ]
        }
      },
      {
        "id": "hs37-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "PCAB Accredited Compounding • 100% Palatability Guarantee",
          "title": "Ending the Pill Struggle: Flavored Pet Medications They Beg For",
          "subtitle": "No more wrestling your cat or hiding bitter pills in cheese. We compound exact veterinary dosages into savory chicken, bacon, and fish chewables.",
          "primaryButtonText": "Schedule Specialist Visit",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Clinical Services",
          "secondaryButtonLink": "#services",
          "imageUrl": "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Patient Trust Score",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Procedures Performed",
              "value": "12,500+"
            },
            {
              "id": "s3",
              "label": "Average Wait Time",
              "value": "< 8 Mins"
            }
          ]
        }
      },
      {
        "id": "hs37-services",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Specialized Treatments",
          "title": "Evidence-Based Clinical Procedures",
          "subtitle": "Our practitioners utilize the latest medical advancements and technology to deliver predictable outcomes.",
          "items": [
            {
              "id": "pp1",
              "title": "Savory Chewable Treat Formulations",
              "description": "Active pharmaceutical ingredients baked into soft chewable real-meat treats formulated for dogs and cats.",
              "price": "From $24",
              "badge": "Featured"
            },
            {
              "id": "pp2",
              "title": "Transdermal Ear-Tip Gels (Penetran)",
              "description": "Apply a drop of medication to the inner ear flap for rapid transdermal absorption without swallowing.",
              "price": "From $32"
            },
            {
              "id": "pp3",
              "title": "Discount Brand Flea, Tick & Heartworm",
              "description": "Simparica Trio, NexGard, Bravecto, and Heartgard shipped straight from manufacturer with manufacturer warranty.",
              "price": "Price-Match Guarantee"
            }
          ]
        }
      },
      {
        "id": "hs37-doctor-profile",
        "type": "doctor-profile",
        "variant": "doctor-grid",
        "visible": true,
        "content": {
          "badge": "Lead Specialist",
          "title": "Meet Our Medical Director",
          "subtitle": "Board-certified excellence combined with dedicated one-on-one patient advocacy.",
          "items": [
            {
              "id": "doc1",
              "title": "Dr. Lindsey Vance, PharmD, DICVP",
              "description": "Diplomate of the International College of Veterinary Pharmacy specialized in canine and feline pharmacology.",
              "meta": "Veterinary Pharmacist Specialist",
              "imageUrl": "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1200&q=80"
            }
          ]
        }
      },
      {
        "id": "hs37-appointment-booking",
        "type": "appointment-booking",
        "variant": "appointment-card-compact",
        "visible": true,
        "content": {
          "badge": "Online Booking",
          "title": "Reserve Your Private Consultation",
          "description": "Instant confirmation. In-person and HIPAA-compliant virtual telemedicine visits available.",
          "primaryButtonText": "Confirm Appointment Time",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "hs37-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "VetRx Express Compounding & Pet Pharmacy",
          "description": "Specialized veterinary compounding preparing chewable meat-flavored treats, transdermal ear gels, and liquid suspensions pets actually love.",
          "copyrightText": "© 2026 VetRx Express Compounding & Pet Pharmacy. All medical rights reserved. Fully HIPAA & OSHA Compliant."
        }
      }
    ]
  }
];
