import { TemplateConfig } from '../../types';

export const BEAUTY_TEMPLATES: TemplateConfig[] = [
  {
    "id": "beauty-maison-01",
    "slug": "maison-balayage-hair-atelier",
    "name": "Maison Balayage Hair Atelier",
    "description": "Parisian-inspired luxury hair salon specializing in custom sun-kissed French balayage, precision shears, and gloss treatments.",
    "industryId": "beauty-aesthetics",
    "categoryId": "hair-salon",
    "collectionId": "luxury-salon",
    "designStyle": "luxury-editorial",
    "featured": true,
    "tags": [
      "hair salon",
      "balayage",
      "hair color",
      "luxury salon",
      "french balayage",
      "haircut"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bt1-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "MAISON BALAYAGE",
          "primaryButtonText": "Reserve Chair",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Color & Cuts",
              "href": "#services"
            },
            {
              "label": "Master Colorists",
              "href": "#team"
            },
            {
              "label": "Portfolio",
              "href": "#gallery"
            },
            {
              "label": "Kérastase Bar",
              "href": "#care"
            }
          ]
        }
      },
      {
        "id": "bt1-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Paris Trained Color Masters • Soho Loft",
          "title": "Luminous, Multi-Dimensional Hair Color Hand-Painted with Artistry",
          "subtitle": "Step into our light-flooded loft for tailored French clay balayage, seamless lived-in blondes, and restorative caviar scalp rituals while sipping chilled prosecco.",
          "primaryButtonText": "Reserve Appointment",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "View Balayage Portfolio",
          "secondaryButtonLink": "#gallery",
          "imageUrl": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Color Transformations",
              "value": "14,000+"
            },
            {
              "id": "s2",
              "label": "Client Retention Rate",
              "value": "97.8%"
            },
            {
              "id": "s3",
              "label": "Vogue Best Salon Honor",
              "value": "2024-2026"
            }
          ]
        }
      },
      {
        "id": "bt1-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "Signature Salon Menu",
          "title": "Atelier Color & Styling Services",
          "subtitle": "All services include complimentary clarifying wash, custom gloss toner, and signature bouncy blowout.",
          "items": [
            {
              "id": "srv1",
              "title": "Signature Parisian French Balayage",
              "description": "Freehand painted seamless highlights on gentle clay lightener, blending into natural roots for zero-demarcation grow-out.",
              "badge": "Client Favorite",
              "price": "From $380"
            },
            {
              "id": "srv2",
              "title": "Precision Dry Cut & Face-Framing Layers",
              "description": "Sculptural dry cutting that respects natural wave patterns and movement, finished with customized fringe styling.",
              "badge": "Bespoke Shears",
              "price": "From $160"
            },
            {
              "id": "srv3",
              "title": "Chronologiste Caviar Scalp & Fiber Treatment",
              "description": "Micro-encapsulated restorative caviar pearls intensely regenerating fiber shine and scalp microbiome balance.",
              "badge": "Luxury Ritual",
              "price": "From $120"
            }
          ]
        }
      },
      {
        "id": "bt1-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "badge": "Appointments by Reservation",
          "title": "Experience Hair Care Elevated to an Art Form",
          "description": "Consultations are always complimentary. Let our senior colorists design your personalized seasonal hair roadmap.",
          "primaryButtonText": "Book Color Consultation",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "bt1-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Maison Balayage Hair Atelier",
          "description": "450 West Broadway, 3rd Floor, Soho, New York, NY 10012",
          "copyrightText": "© 2026 Maison Balayage Atelier LLC. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "beauty-spa-01",
    "slug": "celestial-thermal-baths-spa",
    "name": "Celestial Thermal Baths & Day Spa",
    "description": "Roman-inspired underground stone bathhouse offering magnesium soaking pools, eucalyptus steam rooms, and aromatherapy massages.",
    "industryId": "beauty-aesthetics",
    "categoryId": "spa",
    "collectionId": "luxury-spa",
    "designStyle": "luxury-editorial",
    "featured": true,
    "tags": [
      "spa",
      "thermal baths",
      "massage",
      "hydrotherapy",
      "day spa",
      "wellness"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bt2-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "CELESTIAL BATHS",
          "primaryButtonText": "Book Bath Ritual",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Thermal Circuit",
              "href": "#baths"
            },
            {
              "label": "Massage Menu",
              "href": "#massages"
            },
            {
              "label": "Couples Sanctuary",
              "href": "#couples"
            }
          ]
        }
      },
      {
        "id": "bt2-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Roman Hydrotherapy Architecture",
          "title": "Submerge in Ancient Waters. Emerge Restored.",
          "subtitle": "Lantern-lit subterranean vaulted stone chambers featuring caldarium hot pools, frigidarium cold plunges, salt flotation caves, and soothing lavender steam.",
          "primaryButtonText": "Reserve 2-Hour Bath Experience",
          "primaryButtonLink": "#book",
          "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "sp1",
              "label": "Thermal Pool Temperatures",
              "value": "4 Distinct Pools"
            },
            {
              "id": "sp2",
              "label": "Silence Policy",
              "value": "100% Whisper Only"
            }
          ]
        }
      },
      {
        "id": "bt2-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "title": "Signature Spa Rituals",
          "items": [
            {
              "id": "sp_s1",
              "title": "Celestial Thermal Hydrotherapy Journey",
              "description": "Two hours of self-guided thermal contrast soaking through our mineral pools, salt cave, and steam room.",
              "price": "$125"
            },
            {
              "id": "sp_s2",
              "title": "Warm Botanical Basalt Stone Massage (75 Min)",
              "description": "Smooth heated volcanic river stones paired with organic wild rosemary and arnica essential oils.",
              "price": "$220"
            },
            {
              "id": "sp_s3",
              "title": "Hammam Eucalyptus Black Soap Exfoliation",
              "description": "Traditional Kessa mitt body scrub on heated marble slab removing dead cells and leaving skin like silk.",
              "price": "$185"
            }
          ]
        }
      },
      {
        "id": "bt2-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Surrender Your Senses to Total Stillness",
          "description": "Robes, slippers, and organic herbal teas provided with every bathhouse reservation.",
          "primaryButtonText": "Book Spa Reservation",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "bt2-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Celestial Thermal Baths & Day Spa",
          "copyrightText": "© 2026 Celestial Spa Group. The sanctuary of restorative waters."
        }
      }
    ]
  },
  {
    "id": "beauty-barber-01",
    "slug": "the-noble-razor-barbershop",
    "name": "The Noble Razor Heritage Gentlemen's Barbershop",
    "description": "Old-school luxury barbershop with vintage Belmont chairs, hot lather straight-razor shaves, bespoke fades, and bourbon service.",
    "industryId": "beauty-aesthetics",
    "categoryId": "barber-shop",
    "collectionId": "barber-club",
    "designStyle": "brutalist-clean",
    "tags": [
      "barber",
      "haircut",
      "shave",
      "beard trim",
      "fade",
      "gentlemen"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bt3-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "THE NOBLE RAZOR",
          "primaryButtonText": "Book Chair",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Cuts & Shaves",
              "href": "#services"
            },
            {
              "label": "Master Barbers",
              "href": "#barbers"
            },
            {
              "label": "Grooming Products",
              "href": "#products"
            }
          ]
        }
      },
      {
        "id": "bt3-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Est. 1928 • Vintage Belmont Leather Chairs",
          "title": "Precision Haircuts and Traditional Hot Lather Shaves",
          "subtitle": "Step through our mahogany doors for a complimentary single malt scotch, a hot steamed sandalwood towel, and flawless straight-razor detailing by master barbers.",
          "primaryButtonText": "Schedule Cut or Shave",
          "primaryButtonLink": "#book",
          "imageUrl": "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "br1",
              "label": "Straight Razor Shaves Completed",
              "value": "28,000+"
            },
            {
              "id": "br2",
              "label": "Complimentary Bourbon Pours",
              "value": "On the House"
            }
          ]
        }
      },
      {
        "id": "bt3-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Grooming Services",
          "items": [
            {
              "id": "br_s1",
              "title": "The Executive Cut & Beard Sculpt",
              "description": "Tailored shears and taper fade, hot lather neck shave, botanical beard oil, and hot towel finish.",
              "price": "$75.00"
            },
            {
              "id": "br_s2",
              "title": "Traditional Straight Razor Shave",
              "description": "Three hot steamed essential oil towels, pre-shave badger brush lather, double razor passes, and cold tonic splash.",
              "price": "$65.00"
            },
            {
              "id": "br_s3",
              "title": "Grey Blending & Scalp Tonic Massage",
              "description": "Subtle 10-minute demi-permanent color blending away silver streaks naturally at the wash basin.",
              "price": "$50.00"
            }
          ]
        }
      },
      {
        "id": "bt3-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Look Sharp for Your Next Big Meeting or Date Night",
          "description": "Walk-ins welcomed when chairs allow, or reserve your preferred barber online.",
          "primaryButtonText": "Reserve Your Barber Chair",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "bt3-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "The Noble Razor Heritage Barbershop",
          "copyrightText": "© 2026 The Noble Razor Grooming Co. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "beauty-nail-01",
    "slug": "onyx-gloss-nail-studio",
    "name": "Onyx & Gloss High-End Nail Architecture",
    "description": "Modern minimalist nail atelier specializing in Russian e-file dry manicures, Japanese soft gel art, and builder gel (BIAB) extensions.",
    "industryId": "beauty-aesthetics",
    "categoryId": "nail-studio",
    "collectionId": "nail-atelier",
    "designStyle": "high-fashion",
    "tags": [
      "nail studio",
      "russian manicure",
      "gel nails",
      "biab",
      "nail art",
      "manicure"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bt4-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "ONYX & GLOSS",
          "primaryButtonText": "Book Manicure",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Nail Architecture",
              "href": "#services"
            },
            {
              "label": "Nail Art Lookbook",
              "href": "#gallery"
            },
            {
              "label": "Hygienic Standards",
              "href": "#hygiene"
            }
          ]
        }
      },
      {
        "id": "bt4-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Medical-Grade Autoclave Sterilization • Russian E-File",
          "title": "Impeccable Cuticle Architecture and Enduring Gel Artistry",
          "subtitle": "Our diamond-bit dry e-file technique achieves microscopic cuticle precision, allowing Japanese soft gel and builder gel overlays to stay immaculate for 4+ weeks.",
          "primaryButtonText": "Book Russian Manicure",
          "primaryButtonLink": "#book",
          "imageUrl": "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "nl1",
              "label": "Average Gel Retention",
              "value": "4-5 Weeks"
            },
            {
              "id": "nl2",
              "label": "Toxic Chemical Formulation",
              "value": "10-Free & Vegan"
            }
          ]
        }
      },
      {
        "id": "bt4-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "title": "Nail Studio Treatments",
          "items": [
            {
              "id": "nl_s1",
              "title": "Signature Russian E-File Dry Manicure",
              "description": "Precision dry diamond cuticle contouring and structural apex alignment with long-lasting gel coating.",
              "price": "$120"
            },
            {
              "id": "nl_s2",
              "title": "BIAB Builder Gel Natural Nail Overlay",
              "description": "Flexible strengthening keratin layer protecting weak natural nails from chipping and breakage.",
              "price": "$140"
            },
            {
              "id": "nl_s3",
              "title": "Custom Japanese Fine Line Hand-Painted Art",
              "description": "Chrome finishes, micro-pearls, tortoiseshell, and delicate botanical line work per nail.",
              "price": "From $40"
            }
          ]
        }
      },
      {
        "id": "bt4-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Never Settle for Peeling Cuticles or Chipped Polish Again",
          "description": "Experience the clean, sculptural perfection of true European dry manicures.",
          "primaryButtonText": "Reserve Your Nail Artist",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "bt4-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Onyx & Gloss Nail Architecture",
          "copyrightText": "© 2026 Onyx & Gloss Studio. Medical autoclave sterilization verified."
        }
      }
    ]
  },
  {
    "id": "beauty-skin-01",
    "slug": "luminique-clinical-skincare",
    "name": "Luminique Botanical Clinical Serums",
    "description": "Clean clinical skincare brand formulated with stabilized vitamin C, plant bio-retinol, and triple ceramide lipid barrier creams.",
    "industryId": "beauty-aesthetics",
    "categoryId": "skincare-brand",
    "collectionId": "clean-beauty",
    "designStyle": "minimal-neutral",
    "tags": [
      "skincare",
      "clean beauty",
      "serum",
      "vitamin c",
      "barrier cream",
      "dermatology"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bt5-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "LUMINIQUE CLINICAL",
          "primaryButtonText": "Shop All Formulas",
          "primaryButtonLink": "#shop",
          "navLinks": [
            {
              "label": "Active Serums",
              "href": "#serums"
            },
            {
              "label": "Barrier Restoration",
              "href": "#barrier"
            },
            {
              "label": "Clinical Trials",
              "href": "#trials"
            }
          ]
        }
      },
      {
        "id": "bt5-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Dermatologist Tested • 100% Fragrance Free",
          "title": "Active Ingredients at Proven Clinical Percentages",
          "subtitle": "No filler, no sensitizing essential oils. High-potency tetrahexyldecyl ascorbate, bakuchiol, and bio-identical ceramides that repair cutaneous barrier integrity.",
          "primaryButtonText": "Take Skin Quiz & Build Routine",
          "primaryButtonLink": "#shop",
          "imageUrl": "https://images.unsplash.com/photo-1608248597359-2e617066928e?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "lm1",
              "label": "Clinically Proven Barrier Repair",
              "value": "+78% in 14 Days"
            },
            {
              "id": "lm2",
              "label": "Dermatologist Endorsed",
              "value": "450+ Clinics"
            }
          ]
        }
      },
      {
        "id": "bt5-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Hero Clinical Formulations",
          "items": [
            {
              "id": "lm_s1",
              "title": "20% Vitamin C + Ferulic Radiance Serum",
              "description": "Lipophilic tetrahexyldecyl ascorbate penetrating deep to inhibit tyrosinase and fade hyperpigmentation.",
              "price": "$78.00"
            },
            {
              "id": "lm_s2",
              "title": "Triple Ceramide + Ectoin Lipid Barrier Cream",
              "description": "Replenishing 3:1:1 physiologic ratio of ceramides, cholesterol, and fatty acids with microbiome postbiotics.",
              "price": "$64.00"
            },
            {
              "id": "lm_s3",
              "title": "1% Granactive Retinoid Night Elixir",
              "description": "Next-generation bio-retinoid stimulating cellular turnover without redness, peeling, or photosensitivity.",
              "price": "$82.00"
            }
          ]
        }
      },
      {
        "id": "bt5-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Experience Healthier, Glowing Skin in 30 Days Guaranteed",
          "description": "Try Luminique risk-free with our 30-day empty bottle money-back guarantee.",
          "primaryButtonText": "Shop the Core Routine",
          "primaryButtonLink": "#shop"
        }
      },
      {
        "id": "bt5-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Luminique Botanical Clinical Serums",
          "copyrightText": "© 2026 Luminique Skincare Inc. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "beauty-bridal-01",
    "slug": "ethereal-glow-bridal-makeup",
    "name": "Ethereal Glow Bridal & Red Carpet Artistry",
    "description": "On-location luxury bridal makeup artistry, airbrush foundation, bespoke false lashes, and red carpet beauty teams.",
    "industryId": "beauty-aesthetics",
    "categoryId": "bridal-makeup",
    "collectionId": "bridal-beauty",
    "designStyle": "soft-pastel",
    "tags": [
      "bridal makeup",
      "wedding makeup",
      "airbrush makeup",
      "red carpet",
      "makeup artist"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bt6-nav",
        "type": "navbar",
        "variant": "navbar-floating",
        "visible": true,
        "content": {
          "title": "ETHEREAL GLOW BRIDAL",
          "primaryButtonText": "Check Wedding Date",
          "primaryButtonLink": "#inquire",
          "navLinks": [
            {
              "label": "Bridal Portfolio",
              "href": "#gallery"
            },
            {
              "label": "Wedding Packages",
              "href": "#packages"
            },
            {
              "label": "Makeup Trial",
              "href": "#trial"
            }
          ]
        }
      },
      {
        "id": "bt6-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Featured in Brides & Martha Stewart Weddings",
          "title": "Timeless, Radiant Beauty That Captivates Down the Aisle",
          "subtitle": "Our luxury on-site bridal artists create luminous, photo-ready skin that lasts from first tears to the final dance, enhancing your natural features with weightless elegance.",
          "primaryButtonText": "Inquire for Your Wedding Date",
          "primaryButtonLink": "#inquire",
          "imageUrl": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "eg1",
              "label": "Brides Styled Worldwide",
              "value": "850+ Brides"
            },
            {
              "id": "eg2",
              "label": "Waterproof Wear Test",
              "value": "16+ Hours"
            }
          ]
        }
      },
      {
        "id": "bt6-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "title": "Bridal Beauty Packages",
          "items": [
            {
              "id": "eg_s1",
              "title": "The Couture Bride Package",
              "description": "Comprehensive preview trial, luxury skincare prep, HD airbrush foundation, individual mink lashes, and touch-up kit.",
              "price": "$450"
            },
            {
              "id": "eg_s2",
              "title": "Bridal Party & Mother of the Bride Glam",
              "description": "Radiant full-face beauty application, custom lashes, and setting mist for all bridesmaids.",
              "price": "$175 / person"
            },
            {
              "id": "eg_s3",
              "title": "Full-Day VIP Bridal Concierge",
              "description": "Personal artist remains on-site through ceremony and photos for reception look change and continuous touch-ups.",
              "price": "$1,200"
            }
          ]
        }
      },
      {
        "id": "bt6-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Now Reserving 2026 & 2027 Wedding Season Dates",
          "description": "Share your wedding date and venue to check artist availability.",
          "primaryButtonText": "Check Date Availability",
          "primaryButtonLink": "#inquire"
        }
      },
      {
        "id": "bt6-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Ethereal Glow Bridal & Red Carpet Artistry",
          "copyrightText": "© 2026 Ethereal Glow Artistry LLC. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "beauty-cosmetics-01",
    "slug": "velvet-chromatics-cosmetics",
    "name": "Velvet Chromatics Mineral Pigments",
    "description": "High-pigment vegan color cosmetics brand featuring buttery eyeshadow palettes, blurred velvet lip tints, and baked mineral highlighters.",
    "industryId": "beauty-aesthetics",
    "categoryId": "cosmetics-brand",
    "collectionId": "clean-beauty",
    "designStyle": "bold-creative",
    "tags": [
      "cosmetics",
      "makeup brand",
      "eyeshadow",
      "lipstick",
      "vegan beauty",
      "pigments"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bt7-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "VELVET CHROMATICS",
          "primaryButtonText": "Shop New Arrivals",
          "primaryButtonLink": "#shop",
          "navLinks": [
            {
              "label": "Eye Palettes",
              "href": "#eyes"
            },
            {
              "label": "Velvet Lips",
              "href": "#lips"
            },
            {
              "label": "Clean Standards",
              "href": "#standards"
            }
          ]
        }
      },
      {
        "id": "bt7-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "100% Cruelty-Free • Ultra-Refined Mineral Mica",
          "title": "Saturated Color Payoff Meets Weightless Silk Texture",
          "subtitle": "Pure micro-milled minerals, jojoba oil infusions, and vibrant multi-chrome pigments that swipe on like butter with zero talc and zero creasing.",
          "primaryButtonText": "Explore the Chromatic Palette",
          "primaryButtonLink": "#shop",
          "imageUrl": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "vc1",
              "label": "Pigment Purity Concentration",
              "value": "94% Active"
            },
            {
              "id": "vc2",
              "label": "Allure Best of Beauty Award",
              "value": "Winner 2025"
            }
          ]
        }
      },
      {
        "id": "bt7-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Cult Favorite Releases",
          "items": [
            {
              "id": "vc_s1",
              "title": "Celestial Duochrome 12-Pan Eyeshadow",
              "description": "Shifting holographic jewel tones, velvety transition mattes, and foiled molten metallic shimmers.",
              "price": "$58.00"
            },
            {
              "id": "vc_s2",
              "title": "Blurred Velvet Cloud Lip Soufflé",
              "description": "Air-whipped matte pigment that blurs lip texture with zero drying, lasting up to 8 hours comfortably.",
              "price": "$26.00"
            },
            {
              "id": "vc_s3",
              "title": "Baked Italian Luminescence Highlighter",
              "description": "Slow-baked in Tuscany on terracotta tiles, imparting a wet glass-skin sheen with zero glitter chunks.",
              "price": "$34.00"
            }
          ]
        }
      },
      {
        "id": "bt7-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Free Shipping and Luxury Velvet Pouch on Orders Over $50",
          "description": "Experience professional artistry grade makeup designed for your everyday expression.",
          "primaryButtonText": "Shop All Cosmetics",
          "primaryButtonLink": "#shop"
        }
      },
      {
        "id": "bt7-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Velvet Chromatics Mineral Pigments",
          "copyrightText": "© 2026 Velvet Chromatics Beauty Inc. Cruelty-Free Leaping Bunny Certified."
        }
      }
    ]
  },
  {
    "id": "beauty-laser-01",
    "slug": "silktouch-laser-clinic",
    "name": "SilkTouch Painless Diode Laser Clinic",
    "description": "Medical aesthetics laser clinic offering FDA-cleared Soprano Titanium pain-free hair reduction, carbon laser facials, and tattoo removal.",
    "industryId": "beauty-aesthetics",
    "categoryId": "laser-hair-removal",
    "collectionId": "medical-spa",
    "designStyle": "medical-clean",
    "tags": [
      "laser hair removal",
      "laser clinic",
      "painless laser",
      "smooth skin",
      "medical aesthetics"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bt8-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "SILKTOUCH LASER",
          "primaryButtonText": "Book Free Laser Test",
          "primaryButtonLink": "#test",
          "navLinks": [
            {
              "label": "Laser Areas & Pricing",
              "href": "#pricing"
            },
            {
              "label": "Titanium Technology",
              "href": "#tech"
            },
            {
              "label": "Patient Reviews",
              "href": "#reviews"
            }
          ]
        }
      },
      {
        "id": "bt8-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "FDA Cleared • Safe on All Fitzpatrick Skin Tones (I-VI)",
          "title": "Permanently Smooth Skin with Zero Discomfort",
          "subtitle": "Our advanced Soprano Titanium laser combines three wavelengths simultaneously with continuous contact IcePlus cooling, eliminating stubble and ingrowns painlessly.",
          "primaryButtonText": "Claim 50% Off First Package",
          "primaryButtonLink": "#pricing",
          "imageUrl": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "lt1",
              "label": "Permanent Hair Reduction Rate",
              "value": "95% in 6 Sessions"
            },
            {
              "id": "lt2",
              "label": "Sessions Completed",
              "value": "50,000+"
            }
          ]
        }
      },
      {
        "id": "bt8-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Laser Treatment Packages",
          "items": [
            {
              "id": "lt_s1",
              "title": "Full Brazilian & Underarms Package",
              "description": "Includes 6 sessions with cooling diode laser permanently eliminating ingrown hairs and razor rash.",
              "price": "$699 (6 Visits)"
            },
            {
              "id": "lt_s2",
              "title": "Full Legs & Bikini Laser Package",
              "description": "Silky smooth legs from thighs down to toes in comfortable 30-minute monthly appointments.",
              "price": "$999 (6 Visits)"
            },
            {
              "id": "lt_s3",
              "title": "Gentlemen’s Full Back & Shoulders",
              "description": "Clean, professional grooming reducing coarse back hair permanently without razor burn.",
              "price": "$850 (6 Visits)"
            }
          ]
        }
      },
      {
        "id": "bt8-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Throw Away Your Razors and Wax Strips Forever",
          "description": "Try a complimentary test patch on your arm or underarm today to experience zero pain.",
          "primaryButtonText": "Book Free Patch Test",
          "primaryButtonLink": "#test"
        }
      },
      {
        "id": "bt8-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "SilkTouch Painless Diode Laser Clinic",
          "copyrightText": "© 2026 SilkTouch Medical Aesthetics LLC. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "beauty-perfume-01",
    "slug": "olfactive-lab-bespoke-perfumery",
    "name": "Olfactive Lab Bespoke Artisan Perfumery",
    "description": "Niche luxury fragrance house in Grasse blending rare natural essences, aged sandalwood, damascena rose, and custom scent creation workshops.",
    "industryId": "beauty-aesthetics",
    "categoryId": "perfume-brand",
    "collectionId": "luxury-perfumery",
    "designStyle": "luxury-editorial",
    "tags": [
      "perfume",
      "fragrance",
      "niche perfume",
      "grasse",
      "luxury scent",
      "cologne"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bt9-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "OLFACTIVE LAB",
          "primaryButtonText": "Discover Scent Wardrobe",
          "primaryButtonLink": "#shop",
          "navLinks": [
            {
              "label": "The Collection",
              "href": "#fragrances"
            },
            {
              "label": "Bespoke Organ Atelier",
              "href": "#bespoke"
            },
            {
              "label": "Discovery Kit",
              "href": "#discovery"
            }
          ]
        }
      },
      {
        "id": "bt9-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Compounded in Grasse, France • High Extrait Concentration",
          "title": "Liquid Poetry Distilled from Rare Botanicals and Time",
          "subtitle": "Our master perfumers capture evanescent emotional memories in 30% pure extrait de parfum, marrying wild Florentine orris root, aged Mysore sandalwood, and night-blooming jasmine.",
          "primaryButtonText": "Order Discovery Set (5 x 2ml)",
          "primaryButtonLink": "#discovery",
          "imageUrl": "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "ol1",
              "label": "Fragrance Concentration",
              "value": "30% Extrait de Parfum"
            },
            {
              "id": "ol2",
              "label": "Maceration Period",
              "value": "90 Days in Glass"
            }
          ]
        }
      },
      {
        "id": "bt9-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "title": "Signature Extraits de Parfum",
          "items": [
            {
              "id": "ol_s1",
              "title": "Santal Céleste Extrait (50ml)",
              "description": "Australian sandalwood, creamy cardamom, violet leaf, and warm amber resin with 14-hour sillage.",
              "price": "$240"
            },
            {
              "id": "ol_s2",
              "title": "Rose Sauvage & Smoked Oud (50ml)",
              "description": "Turkish Damask rose petals drenched in morning dew against smoked Cambodian agarwood and incense.",
              "price": "$280"
            },
            {
              "id": "ol_s3",
              "title": "Bespoke Custom Scent Atelier Experience",
              "description": "Private three-hour consultation at the perfumer organ crafting your personal signature formula.",
              "price": "$850"
            }
          ]
        }
      },
      {
        "id": "bt9-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Find Your Scent Signature from the Comfort of Home",
          "description": "Our 5-piece Discovery Set includes a $40 voucher towards your first full 50ml bottle.",
          "primaryButtonText": "Order Discovery Set ($45)",
          "primaryButtonLink": "#discovery"
        }
      },
      {
        "id": "bt9-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Olfactive Lab Bespoke Perfumery",
          "copyrightText": "© 2026 Olfactive Lab Parfums. Grasse & New York."
        }
      }
    ]
  },
  {
    "id": "beauty-massage-01",
    "slug": "theratouch-massage-sanctuary",
    "name": "TheraTouch Deep Tissue & Shiatsu Sanctuary",
    "description": "Therapeutic clinical massage center offering deep tissue myofascial release, Japanese Shiatsu, hot stone therapy, and prenatal relief.",
    "industryId": "beauty-aesthetics",
    "categoryId": "massage-center",
    "collectionId": "therapeutic-massage",
    "designStyle": "organic-natural",
    "tags": [
      "massage",
      "deep tissue",
      "shiatsu",
      "wellness",
      "relaxation",
      "pain relief"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bt10-nav",
        "type": "navbar",
        "variant": "navbar-floating",
        "visible": true,
        "content": {
          "title": "THERATOUCH MASSAGE",
          "primaryButtonText": "Book Massage Table",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Massage Modalities",
              "href": "#services"
            },
            {
              "label": "Licensed Therapists",
              "href": "#team"
            },
            {
              "label": "Monthly Wellness Club",
              "href": "#club"
            }
          ]
        }
      },
      {
        "id": "bt10-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Licensed Massage Therapists (LMT) Only",
          "title": "Targeted Deep Muscle Relief from Chronic Body Tension",
          "subtitle": "Our therapists customize every session with firm myofascial stripping, warm organic jojoba oil, and trigger point acupressure in peaceful cedarwood rooms.",
          "primaryButtonText": "Book 60 or 90-Min Massage",
          "primaryButtonLink": "#book",
          "imageUrl": "https://images.unsplash.com/photo-1512290900672-1f4a47690a61?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "tt1",
              "label": "Average Client Pain Relief",
              "value": "-80% in 1 Visit"
            },
            {
              "id": "tt2",
              "label": "Licensed Therapists",
              "value": "16 Providers"
            }
          ]
        }
      },
      {
        "id": "bt10-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Therapeutic Modalities",
          "items": [
            {
              "id": "tt_s1",
              "title": "Targeted Deep Tissue & Myofascial Release",
              "description": "Slow, deep deliberate pressure unsticking chronic adhesions in neck, shoulders, and lower back.",
              "price": "$135 (60 Min)"
            },
            {
              "id": "tt_s2",
              "title": "Traditional Japanese Acupressure Shiatsu",
              "description": "Rhythmic finger and palm pressure along energetic meridian pathways while fully clothed on a tatami mat.",
              "price": "$140 (60 Min)"
            },
            {
              "id": "tt_s3",
              "title": "Prenatal Nurturing Pregnancy Massage",
              "description": "Side-lying cushioned support alleviating sciatica, hip tension, and ankle edema safely for expectant mothers.",
              "price": "$130 (60 Min)"
            }
          ]
        }
      },
      {
        "id": "bt10-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Your Body Deserves Real Restoration This Week",
          "description": "Same-day appointments often available. HSA and FSA card payments accepted.",
          "primaryButtonText": "Check Appointment Availability",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "bt10-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "TheraTouch Deep Tissue Sanctuary",
          "copyrightText": "© 2026 TheraTouch Massage Therapy. AMTA Member."
        }
      }
    ]
  },
  {
    "id": "beauty-tattoo-01",
    "slug": "ink-quill-aesthetic-tattoo",
    "name": "Ink & Quill Fine Line Aesthetic Tattoo",
    "description": "Upscale fine-line botanical tattoo atelier featuring single-needle micro-realism, minimal typography, and single-use hygienic suites.",
    "industryId": "beauty-aesthetics",
    "categoryId": "tattoo-studio",
    "collectionId": "fine-line-tattoo",
    "designStyle": "brutalist-clean",
    "tags": [
      "tattoo",
      "fine line tattoo",
      "micro realism",
      "botanical tattoo",
      "ink studio"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bt11-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "INK & QUILL ATELIER",
          "primaryButtonText": "Submit Tattoo Project",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Resident Artists",
              "href": "#artists"
            },
            {
              "label": "Fine Line Portfolio",
              "href": "#portfolio"
            },
            {
              "label": "Aftercare Guide",
              "href": "#aftercare"
            }
          ]
        }
      },
      {
        "id": "bt11-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Single Needle Micro-Realism • Private Studio",
          "title": "Delicate Fine Line Tattoos Designed to Age with Grace",
          "subtitle": "A bright, spa-like sunlit studio where international guest artists specialize in whisper-thin floral botanicals, miniature pet portraits, and elegant script with zero blowouts.",
          "primaryButtonText": "Book Artist Consultation",
          "primaryButtonLink": "#booking",
          "imageUrl": "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "iq1",
              "label": "Single-Needle Gauge Used",
              "value": "0.25mm Bugpin"
            },
            {
              "id": "iq2",
              "label": "Autoclave Clean Standards",
              "value": "Hospital Grade"
            }
          ]
        }
      },
      {
        "id": "bt11-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Tattoo Specializations",
          "items": [
            {
              "id": "iq_s1",
              "title": "Micro-Botanical Flora & Fauna",
              "description": "Delicate single-pass wildflower stems, butterflies, and conifer branches contoured to anatomy."
            },
            {
              "id": "iq_s2",
              "title": "Single-Needle Micro-Realism Portraits",
              "description": "Photorealistic miniature animal portraits and classical sculpture details with soft shading."
            },
            {
              "id": "iq_s3",
              "title": "Minimalist Typography & Fine Quotes",
              "description": "Crisp typewriter, vintage cursive, and architectural serif lettering that heals razor-sharp."
            }
          ]
        }
      },
      {
        "id": "bt11-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Turn Your Meaningful Idea into Permanent Living Art",
          "description": "Submit your reference images and placement ideas for review by our resident artists.",
          "primaryButtonText": "Submit Your Tattoo Concept",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "bt11-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Ink & Quill Fine Line Tattoo Atelier",
          "copyrightText": "© 2026 Ink & Quill Studio. Bloodborne pathogen certified."
        }
      }
    ]
  },
  {
    "id": "beauty-academy-01",
    "slug": "elite-cosmetology-academy",
    "name": "Elite Academy of Cosmetology & Aesthetics",
    "description": "Accredited beauty academy training licensed cosmetologists, medical estheticians, master lash technicians, and permanent makeup artists.",
    "industryId": "beauty-aesthetics",
    "categoryId": "beauty-academy",
    "collectionId": "beauty-education",
    "designStyle": "modern-corporate",
    "tags": [
      "cosmetology school",
      "esthetician license",
      "beauty school",
      "lash certification",
      "pmu"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bt12-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "ELITE BEAUTY ACADEMY",
          "primaryButtonText": "Apply for Enrollment",
          "primaryButtonLink": "#apply",
          "navLinks": [
            {
              "label": "Cosmetology (1500h)",
              "href": "#cosmetology"
            },
            {
              "label": "Esthetics (600h)",
              "href": "#esthetics"
            },
            {
              "label": "Student Salon Clinic",
              "href": "#salon"
            }
          ]
        }
      },
      {
        "id": "bt12-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "State Board Accredited • Financial Aid Available",
          "title": "Launch a Lucrative Career in High-Fashion Beauty and Esthetics",
          "subtitle": "Learn in our professional commercial student salon working with real clients. Master balayage, chemical peels, dermaplaning, and social media salon marketing.",
          "primaryButtonText": "Download Course Prospectus",
          "primaryButtonLink": "#apply",
          "imageUrl": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "ea1",
              "label": "State Board Exam Pass Rate",
              "value": "98.6%"
            },
            {
              "id": "ea2",
              "label": "Salon Placement Rate",
              "value": "94%"
            }
          ]
        }
      },
      {
        "id": "bt12-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Accredited Diploma Programs",
          "items": [
            {
              "id": "ea_s1",
              "title": "Comprehensive Cosmetology (1,500 Hours)",
              "description": "Advanced coloring, hair cutting, keratin smoothing, makeup, and professional salon ownership."
            },
            {
              "id": "ea_s2",
              "title": "Clinical Advanced Esthetics (600 Hours)",
              "description": "Hydrafacial, medical-grade chemical peels, LED light therapy, and microdermabrasion."
            },
            {
              "id": "ea_s3",
              "title": "Master Lash & Brow Microblading Certification",
              "description": "Volume eyelash extensions, lash lifting, brow lamination, and microblading feathering."
            }
          ]
        }
      },
      {
        "id": "bt12-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Next Cohort Starts in 4 Weeks • Reserve Your Station",
          "description": "Schedule a campus walkthrough and sit in on an active student styling demonstration.",
          "primaryButtonText": "Book Academy Campus Tour",
          "primaryButtonLink": "#apply"
        }
      },
      {
        "id": "bt12-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Elite Academy of Cosmetology & Aesthetics",
          "copyrightText": "© 2026 Elite Beauty Academy. Accredited by NACCAS."
        }
      }
    ]
  },
  {
    "id": "beauty-ecom-01",
    "slug": "luxeboutique-clean-beauty",
    "name": "LuxeBoutique Curated Clean Beauty",
    "description": "Curated e-commerce storefront retailing niche Korean skincare, cult Japanese sunscreen lotions, and artisanal organic haircare.",
    "industryId": "beauty-aesthetics",
    "categoryId": "beauty-ecommerce",
    "collectionId": "clean-beauty",
    "designStyle": "high-fashion",
    "tags": [
      "ecommerce",
      "k beauty",
      "j beauty",
      "clean skincare",
      "sunscreen",
      "beauty store"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bt13-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "LUXEBOUTIQUE",
          "primaryButtonText": "Shopping Bag (0)",
          "primaryButtonLink": "#cart",
          "navLinks": [
            {
              "label": "K-Beauty Curations",
              "href": "#kbeauty"
            },
            {
              "label": "Clean Sunscreens",
              "href": "#spf"
            },
            {
              "label": "Glass Skin Sets",
              "href": "#sets"
            }
          ]
        }
      },
      {
        "id": "bt13-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Seoul & Tokyo Direct Imports • Fresh Batch Guaranteed",
          "title": "The World’s Most Coveted Skincare Curated in One Destination",
          "subtitle": "From hydrating snail mucin essences and fermented galactomyces toners to watery invisible SPF 50+ sunscreens that melt invisibly into your skin.",
          "primaryButtonText": "Shop Best-Selling Serums",
          "primaryButtonLink": "#shop",
          "imageUrl": "https://images.unsplash.com/photo-1608248597359-2e617066928e?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "lx1",
              "label": "Verified 5-Star Reviews",
              "value": "42,000+"
            },
            {
              "id": "lx2",
              "label": "Free Shipping Threshold",
              "value": "$45+"
            }
          ]
        }
      },
      {
        "id": "bt13-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Trending Cult Formulas",
          "items": [
            {
              "id": "lx_s1",
              "title": "Centella Asiatica Calming Water Cream",
              "description": "Soothing Madagascar cica extract calming angry breakouts and replenishing transepidermal hydration.",
              "price": "$24.00"
            },
            {
              "id": "lx_s2",
              "title": "Watery Essence SPF 50+ PA++++ Sunscreen",
              "description": "Chemical organic filters leaving zero white cast, zero eye stinging, and glowing skin finish.",
              "price": "$18.00"
            },
            {
              "id": "lx_s3",
              "title": "Fermented Rice & Niacinamide Glow Serum",
              "description": "Restores skin bounce, fades post-acne dark spots, and imparts instant glass-skin radiance.",
              "price": "$22.00"
            }
          ]
        }
      },
      {
        "id": "bt13-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Get 20% Off Your First Order + 3 Free Deluxe Samples",
          "description": "Join over 100,000 clean beauty lovers discovering their holy grail skincare.",
          "primaryButtonText": "Unlock 20% Off Code",
          "primaryButtonLink": "#shop"
        }
      },
      {
        "id": "bt13-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "LuxeBoutique Curated Clean Beauty",
          "copyrightText": "© 2026 LuxeBoutique Beauty Inc. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "beauty-salon-01",
    "slug": "allure-premiere-beauty-lounge",
    "name": "Allure Premiere Head-to-Toe Beauty Lounge",
    "description": "Full-service modern luxury salon offering haircuts, hair extensions, airbrush tanning, lash extensions, and makeup glam.",
    "industryId": "beauty-aesthetics",
    "categoryId": "beauty-salon",
    "collectionId": "luxury-salon",
    "designStyle": "luxury-editorial",
    "tags": [
      "beauty salon",
      "hair extensions",
      "blowout",
      "glam",
      "tanning",
      "lash extensions"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bt14-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "ALLURE PREMIERE",
          "primaryButtonText": "Book Full Glam",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Salon Menu",
              "href": "#menu"
            },
            {
              "label": "Hair Extensions",
              "href": "#extensions"
            },
            {
              "label": "Lash & Brow Bar",
              "href": "#lashes"
            }
          ]
        }
      },
      {
        "id": "bt14-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "All-in-One Luxury Beauty Sanctuary",
          "title": "Total Head-to-Toe Radiance in One Luxurious Visit",
          "subtitle": "From seamless hand-tied Bellami weft hair extensions and Brazilian blowouts to custom airbrush spray tans and Russian volume lashes in private suites.",
          "primaryButtonText": "Reserve Your Glam Session",
          "primaryButtonLink": "#book",
          "imageUrl": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "al1",
              "label": "Services Under One Roof",
              "value": "25+ Treatments"
            },
            {
              "id": "al2",
              "label": "Bellami Certified Master Stylists",
              "value": "100%"
            }
          ]
        }
      },
      {
        "id": "bt14-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "title": "Lounge Services",
          "items": [
            {
              "id": "al_s1",
              "title": "Hand-Tied Weft Hair Extensions",
              "description": "Zero heat, zero glue invisible bead installation creating natural thickness and cascading length.",
              "price": "From $650"
            },
            {
              "id": "al_s2",
              "title": "Full Hybrid Lash Extension Set",
              "description": "Wispy combination of classic singles and fluffy handmade volume fans for effortlessly fluttery eyes.",
              "price": "$195"
            },
            {
              "id": "al_s3",
              "title": "Custom Organic Airbrush Spray Tan",
              "description": "Rapid rinse botanical DHA mist customized with violet undertones to banish orange tones.",
              "price": "$65"
            }
          ]
        }
      },
      {
        "id": "bt14-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Get Ready for Your Next Event with Our Signature Glam Day",
          "description": "Package hair, makeup, spray tan, and nails into one effortless pampering afternoon.",
          "primaryButtonText": "Book Glam Day Package",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "bt14-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Allure Premiere Beauty Lounge",
          "copyrightText": "© 2026 Allure Premiere Salon Group. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "beauty-haircare-01",
    "slug": "trichology-center-hair-care",
    "name": "Trichology Center Hair & Scalp Restoration",
    "description": "Clinical trichology scalp brand delivering botanical DHT-blocking peptides, rosemary stem-cell hair serums, and detoxifying scalp scrubs.",
    "industryId": "beauty-aesthetics",
    "categoryId": "haircare-brand",
    "collectionId": "clean-beauty",
    "designStyle": "medical-clean",
    "tags": [
      "haircare",
      "trichology",
      "scalp health",
      "hair growth",
      "rosemary serum"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bt15-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "TRICHOLOGY CLINICAL",
          "primaryButtonText": "Shop Scalp Serums",
          "primaryButtonLink": "#shop",
          "navLinks": [
            {
              "label": "Hair Density Serum",
              "href": "#density"
            },
            {
              "label": "Scalp Detox",
              "href": "#detox"
            },
            {
              "label": "Clinical Studies",
              "href": "#studies"
            }
          ]
        }
      },
      {
        "id": "bt15-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Formulated by Certified Trichologists",
          "title": "Thicker, Fuller Hair Roots Begin with a Healthy Scalp Microbiome",
          "subtitle": "Our multi-peptide hair density serum utilizes redensyl, capixyl, and fermented rosemary extract to stimulate follicular dermal papillae cells without greasy residue.",
          "primaryButtonText": "Shop 90-Day Hair Growth Kit",
          "primaryButtonLink": "#shop",
          "imageUrl": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "tc1",
              "label": "Hair Density Improvement",
              "value": "+28% in 90 Days"
            },
            {
              "id": "tc2",
              "label": "Reduction in Shedding",
              "value": "88% of Users"
            }
          ]
        }
      },
      {
        "id": "bt15-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Clinical Scalp Formulations",
          "items": [
            {
              "id": "tc_s1",
              "title": "Multi-Peptide Follicle Density Serum",
              "description": "Water-based nightly leave-in peptide drops reviving dormant hair follicles and reducing fallout.",
              "price": "$58.00"
            },
            {
              "id": "tc_s2",
              "title": "Salicylic Acid & Pink Clay Scalp Clarifier",
              "description": "Gentle exfoliating pre-wash scrub eliminating sebum buildup, dandruff, and product residue.",
              "price": "$36.00"
            },
            {
              "id": "tc_s3",
              "title": "Ceramide Moisture Recovery Hair Mask",
              "description": "Deeply replenishing lipid moisture in bleached and heat-damaged hair shafts in 10 minutes.",
              "price": "$42.00"
            }
          ]
        }
      },
      {
        "id": "bt15-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Real Hair Density Results in 90 Days or Your Money Back",
          "description": "Try the Trichology 3-Step Density System risk-free for three full months.",
          "primaryButtonText": "Start 90-Day Hair Journey",
          "primaryButtonLink": "#shop"
        }
      },
      {
        "id": "bt15-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Trichology Center Hair & Scalp Restoration",
          "copyrightText": "© 2026 Trichology Clinical Lab Inc. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "beauty-store-01",
    "slug": "glow-botanics-beauty-store",
    "name": "Glow Botanics Clean Beauty Emporium",
    "description": "Curated boutique beauty retail store stocking independently tested organic skincare, mineral makeup, and clean fragrances.",
    "industryId": "beauty-aesthetics",
    "categoryId": "cosmetic-store",
    "collectionId": "clean-beauty",
    "designStyle": "organic-natural",
    "tags": [
      "cosmetic store",
      "clean beauty",
      "organic makeup",
      "skincare shop",
      "boutique"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bt16-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "GLOW BOTANICS",
          "primaryButtonText": "Visit Store / Shop Online",
          "primaryButtonLink": "#shop",
          "navLinks": [
            {
              "label": "Skincare Bar",
              "href": "#skincare"
            },
            {
              "label": "Makeup Brands",
              "href": "#makeup"
            },
            {
              "label": "Our Ingredient Ban-List",
              "href": "#banned"
            }
          ]
        }
      },
      {
        "id": "bt16-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Over 2,800 Banned Questionable Ingredients",
          "title": "Pure Beauty That Loves Your Skin and the Planet",
          "subtitle": "We test every bottle for heavy metals, microplastics, and endocrine disruptors so you can shop clean foundations, vitamin serums, and botanical lip oils with complete confidence.",
          "primaryButtonText": "Shop Clean Bestsellers",
          "primaryButtonLink": "#shop",
          "imageUrl": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "gb1",
              "label": "Banned Toxic Chemicals",
              "value": "2,800+ Ingredients"
            },
            {
              "id": "gb2",
              "label": "Indie Clean Brands Curated",
              "value": "75 Brands"
            }
          ]
        }
      },
      {
        "id": "bt16-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Curated Categories",
          "items": [
            {
              "id": "gb_s1",
              "title": "Clean Mineral Complexion Bar",
              "description": "Shade matching station with organic tinted serums, non-comedogenic concealers, and dewy balms."
            },
            {
              "id": "gb_s2",
              "title": "Sustainable Solid Haircare & Body",
              "description": "Zero-waste French shampoo bars, cold-pressed marula body oils, and refillable glass cleansers."
            },
            {
              "id": "gb_s3",
              "title": "Eco-Luxury Candle & Fragrance Nook",
              "description": "100% natural soy candles infused with cedarwood, sweet fig, and non-toxic phthalate-free perfumes."
            }
          ]
        }
      },
      {
        "id": "bt16-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Bring In Your Empty Beauty Bottles for 15% Off Refills",
          "description": "Our TerraCycle recycling station accepts any cosmetic plastic packaging.",
          "primaryButtonText": "Learn About Recycling Program",
          "primaryButtonLink": "#shop"
        }
      },
      {
        "id": "bt16-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Glow Botanics Clean Beauty Emporium",
          "copyrightText": "© 2026 Glow Botanics Store LLC. Certified Clean Beauty Retailer."
        }
      }
    ]
  },
  {
    "id": "beauty-brow-01",
    "slug": "arch-feather-microblading-studio",
    "name": "Arch & Feather Microblading & Brow Studio",
    "description": "Bespoke microblading, ombre powder brows, brow lamination, and keratin lash lifts tailored to your natural bone structure.",
    "industryId": "beauty-aesthetics",
    "categoryId": "makeup-artist",
    "collectionId": "brow-atelier",
    "designStyle": "luxury-editorial",
    "tags": [
      "microblading",
      "brows",
      "brow lamination",
      "lash lift",
      "permanent makeup",
      "arch"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bt17-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "ARCH & FEATHER",
          "primaryButtonText": "Book Brow Consult",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Microblading & Powder",
              "href": "#brows"
            },
            {
              "label": "Lamination & Tint",
              "href": "#lamination"
            },
            {
              "label": "Healed Work",
              "href": "#gallery"
            }
          ]
        }
      },
      {
        "id": "bt17-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "PhiBrows Master Certified Artists",
          "title": "Hyper-Realistic Feathery Hair Strokes Tailored to Your Face",
          "subtitle": "We map facial golden-ratio symmetry and hand-draw microscopic hair strokes with hypoallergenic mineral pigment, restoring sparse brows to full, fluffy elegance.",
          "primaryButtonText": "Book Microblading Session",
          "primaryButtonLink": "#book",
          "imageUrl": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "af1",
              "label": "Brows Transformed",
              "value": "6,200+"
            },
            {
              "id": "af2",
              "label": "Healed Pigment Retention",
              "value": "96%"
            }
          ]
        }
      },
      {
        "id": "bt17-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "title": "Bespoke Brow Protocols",
          "items": [
            {
              "id": "af_s1",
              "title": "Feather Stroke Nano-Microblading",
              "description": "Single-hair ultra-fine hair strokes blending seamlessly into existing eyebrow hairs for natural fullness.",
              "price": "$550"
            },
            {
              "id": "af_s2",
              "title": "Ombré Powder Shading Brows",
              "description": "Soft pixelated gradient shading creating a soft makeup powder look that lasts up to 3 years.",
              "price": "$500"
            },
            {
              "id": "af_s3",
              "title": "Keratin Brow Lamination & Hybrid Tint",
              "description": "Repositioning unruly brow hairs upward for full, feathery fluffiness lasting up to 8 weeks.",
              "price": "$120"
            }
          ]
        }
      },
      {
        "id": "bt17-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Wake Up Every Morning with Effortlessly Flawless Brows",
          "description": "Includes your comprehensive consultation, mapping approval, and 6-week perfecting touch-up.",
          "primaryButtonText": "Schedule Brow Appointment",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "bt17-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Arch & Feather Microblading Studio",
          "copyrightText": "© 2026 Arch & Feather Eyebrow Atelier. Licensed & Insured."
        }
      }
    ]
  },
  {
    "id": "beauty-lash-01",
    "slug": "mink-flutter-luxury-lashes",
    "name": "Mink & Flutter Luxury Lash Lounge",
    "description": "Boutique eyelash extension lounge offering Japanese feather-light classic sets, Russian volume fans, and lash bath cleansers.",
    "industryId": "beauty-aesthetics",
    "categoryId": "beauty-salon",
    "collectionId": "lash-lounge",
    "designStyle": "soft-pastel",
    "tags": [
      "lash extensions",
      "eyelash extensions",
      "volume lashes",
      "mink lashes",
      "lash studio"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bt18-nav",
        "type": "navbar",
        "variant": "navbar-floating",
        "visible": true,
        "content": {
          "title": "MINK & FLUTTER",
          "primaryButtonText": "Book Lash Set",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Lash Styles",
              "href": "#styles"
            },
            {
              "label": "Refill Plans",
              "href": "#refills"
            },
            {
              "label": "Aftercare",
              "href": "#aftercare"
            }
          ]
        }
      },
      {
        "id": "bt18-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Medical Grade Adhesive • Zero Clumping",
          "title": "Weightless, Fluffy Lashes Customized to Your Eye Shape",
          "subtitle": "Nap comfortably on our memory foam cloud recliners with soothing eye gel pads while our master lash artists apply bespoke silk lashes one by one with surgical precision.",
          "primaryButtonText": "Book Full Lash Set ($160)",
          "primaryButtonLink": "#book",
          "imageUrl": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "mf1",
              "label": "Average Lash Retention",
              "value": "3-4 Weeks"
            },
            {
              "id": "mf2",
              "label": "Lash Sets Applied Annually",
              "value": "5,000+"
            }
          ]
        }
      },
      {
        "id": "bt18-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Custom Lash Styles",
          "items": [
            {
              "id": "mf_s1",
              "title": "Japanese Natural Classic Set",
              "description": "Single extension bonded to each healthy natural lash for clean, mascara-like definition and length.",
              "price": "$150"
            },
            {
              "id": "mf_s2",
              "title": "Russian Mega Volume Glam Set",
              "description": "Fluffy handmade fans of 6 to 10 ultra-lightweight cashmere lashes creating dramatic black density.",
              "price": "$220"
            },
            {
              "id": "mf_s3",
              "title": "Wispy Wet-Look Kim K Textured Set",
              "description": "Alternating spikes and textured volume fans for an effortless, fluttery, runway-ready look.",
              "price": "$190"
            }
          ]
        }
      },
      {
        "id": "bt18-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Skip the Mascara and Wake Up Picture-Perfect Everyday",
          "description": "First-time clients receive a free lash bath cleanser and crystal spoolie brush.",
          "primaryButtonText": "Schedule Lash Appointment",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "bt18-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Mink & Flutter Luxury Lash Lounge",
          "copyrightText": "© 2026 Mink & Flutter Lashes LLC. Certified Lash Artists."
        }
      }
    ]
  },
  {
    "id": "beauty-medspa-01",
    "slug": "aethelgard-regenerative-medspa",
    "name": "Aethelgard Regenerative Aesthetics & MedSpa",
    "description": "Physician-directed medical spa delivering Juvederm dermal fillers, Botox neurotoxin, Morpheus8 RF microneedling, and PRP hair rejuvenation.",
    "industryId": "beauty-aesthetics",
    "categoryId": "beauty-salon",
    "collectionId": "medical-spa",
    "designStyle": "luxury-editorial",
    "tags": [
      "medspa",
      "botox",
      "fillers",
      "rf microneedling",
      "morpheus8",
      "prp"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bt19-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "AETHELGARD MEDSPA",
          "badge": "Board Certified MD Supervised",
          "primaryButtonText": "Book Consult",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Injectables",
              "href": "#injectables"
            },
            {
              "label": "Morpheus8 RF",
              "href": "#morpheus8"
            },
            {
              "label": "Before & Afters",
              "href": "#gallery"
            }
          ]
        }
      },
      {
        "id": "bt19-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Top 1% Allergan Platinum Provider",
          "title": "Subtle Facial Rejuvenation That Preserves Your Individuality",
          "subtitle": "Specializing in micro-dosing neurotoxins, anatomical hyaluronic lip contouring, and deep collagen-induction radiofrequency microneedling.",
          "primaryButtonText": "Reserve Aesthetic Evaluation",
          "primaryButtonLink": "#book",
          "imageUrl": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "at1",
              "label": "Injectable Treatments Performed",
              "value": "18,000+"
            },
            {
              "id": "at2",
              "label": "Master Nurse Injectors",
              "value": "100% RN/NP"
            }
          ]
        }
      },
      {
        "id": "bt19-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "title": "Medical Aesthetics Menu",
          "items": [
            {
              "id": "at_s1",
              "title": "Botox & Dysport Natural Expression Dosing",
              "description": "Smoothing forehead lines, crow’s feet, and masseters while preserving authentic eyebrow mobility.",
              "price": "From $14 / unit"
            },
            {
              "id": "at_s2",
              "title": "Morpheus8 Fractional RF Microneedling",
              "description": "Remodeling subdermal adipose tissue to tighten jowls, stimulate elastin, and smooth crepey skin.",
              "price": "From $850"
            },
            {
              "id": "at_s3",
              "title": "Tear Trough & Cheek Hyaluronic Contouring",
              "description": "Micro-cannula delivery of Restylane restoring mid-face volume and banishing under-eye hollows safely.",
              "price": "From $750"
            }
          ]
        }
      },
      {
        "id": "bt19-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Consult with Our Master Aesthetic Nurse Specialists",
          "description": "Receive a personalized full-face assessment and 3D imaging review before any treatment.",
          "primaryButtonText": "Book Private Consultation",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "bt19-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Aethelgard Regenerative Aesthetics",
          "copyrightText": "© 2026 Aethelgard Medical Spa LLC. Supervised by Board Certified Plastic Surgeons."
        }
      }
    ]
  },
  {
    "id": "beauty-barber-02",
    "slug": "the-grooming-club-executive",
    "name": "The Grooming Club Executive Shave Parlor",
    "description": "Private members club barbershop with private leather booths, custom shoe shines, tailored clipper fades, and cigar terrace.",
    "industryId": "beauty-aesthetics",
    "categoryId": "barber-shop",
    "collectionId": "barber-club",
    "designStyle": "dark-cinematic",
    "tags": [
      "barber",
      "executive grooming",
      "shave parlor",
      "fade",
      "mens club"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bt20-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "THE GROOMING CLUB",
          "primaryButtonText": "Reserve Booth",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Grooming Services",
              "href": "#services"
            },
            {
              "label": "Club Membership",
              "href": "#membership"
            },
            {
              "label": "Private Bar",
              "href": "#bar"
            }
          ]
        }
      },
      {
        "id": "bt20-hero",
        "type": "hero",
        "variant": "hero-cinematic-dark",
        "visible": true,
        "content": {
          "badge": "Private Suites • Bespoke Men’s Grooming",
          "title": "Refined Men’s Barbering in an Unrivaled Sanctuary",
          "subtitle": "Enjoy a bespoke cut, straight-razor shave, and manicured hand care in completely private wood-paneled suites equipped with personal sound systems and bar service.",
          "primaryButtonText": "Book Executive Grooming",
          "primaryButtonLink": "#book",
          "imageUrl": "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "gc1",
              "label": "Private Executive Suites",
              "value": "8 Suites"
            },
            {
              "id": "gc2",
              "label": "Member Cut Satisfaction",
              "value": "99.8%"
            }
          ]
        }
      },
      {
        "id": "bt20-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "title": "Executive Services",
          "items": [
            {
              "id": "gc_s1",
              "title": "The Complete Executive Overhaul",
              "description": "Scissor cut and taper, eucalyptus hot towel straight shave, eyebrow trim, and hand conditioning."
            },
            {
              "id": "gc_s2",
              "title": "Royal Hot Towel Straight Razor Shave",
              "description": "Pre-shave essential oils, badger hair foam, two razor passes, cold towel splash, and post-shave balm."
            },
            {
              "id": "gc_s3",
              "title": "Beard Reshaping & Ozone Steam Conditioning",
              "description": "Beard line definition with razor finish, deep conditioning steam treatment, and beard balm styling."
            }
          ]
        }
      },
      {
        "id": "bt20-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Elevate Your Personal Grooming Standard",
          "description": "Membership packages include unlimited monthly touch-ups, shoe shines, and priority booking.",
          "primaryButtonText": "Join the Executive Club",
          "primaryButtonLink": "#membership"
        }
      },
      {
        "id": "bt20-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "The Grooming Club Executive Shave Parlor",
          "copyrightText": "© 2026 The Grooming Club Inc. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "beauty-eco-01",
    "slug": "chloris-organic-hair-salon",
    "name": "Chloris Zero-Waste Organic Hair Salon",
    "description": "Eco-conscious hair salon using certified biodynamic ammonia-free hair colors, organic botanicals, and circular hair clipping recycling.",
    "industryId": "beauty-aesthetics",
    "categoryId": "hair-salon",
    "collectionId": "organic-salon",
    "designStyle": "organic-natural",
    "tags": [
      "organic salon",
      "eco friendly",
      "ammonia free",
      "sustainable beauty",
      "clean hair"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bt21-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "CHLORIS ORGANIC SALON",
          "primaryButtonText": "Book Clean Hair Service",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Organic Color",
              "href": "#color"
            },
            {
              "label": "Sustainability Impact",
              "href": "#eco"
            },
            {
              "label": "Stylists",
              "href": "#team"
            }
          ]
        }
      },
      {
        "id": "bt21-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Certified Green Circle Salon • 100% Ammonia Free",
          "title": "Gorgeous Hair Color That Breathes Life Without Toxins",
          "subtitle": "We craft stunning blondes, brunettes, and rich coppers using biodynamic herbal color systems from Bologna, recycling 95% of all salon waste including cut hair.",
          "primaryButtonText": "Book Ammonia-Free Color",
          "primaryButtonLink": "#book",
          "imageUrl": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "ch1",
              "label": "Salon Waste Recycled",
              "value": "95% Green Circle"
            },
            {
              "id": "ch2",
              "label": "Toxic Fumes / Ammonia",
              "value": "0% Guaranteed"
            }
          ]
        }
      },
      {
        "id": "bt21-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Organic Hair Services",
          "items": [
            {
              "id": "ch_s1",
              "title": "Biodynamic Ammonia-Free Hair Color",
              "description": "Enriched with organic jojoba, illipe butter, and sunflower seed extract for glossy, vibrant coverage."
            },
            {
              "id": "ch_s2",
              "title": "Clay-Based Low-Impact Balayage",
              "description": "Lightening with mineral kaolin clay free of aggressive persulfates, protecting scalp and strand integrity."
            },
            {
              "id": "ch_s3",
              "title": "Herbal Scalp Detox & Botanical Steam",
              "description": "Sage, lavender, and white tea infusions restoring balanced sebum and eliminating micro-inflammation."
            }
          ]
        }
      },
      {
        "id": "bt21-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Experience Odorless, Gentle Hair Color That Lasts",
          "description": "No burning scalp, no chemical fumes. Just soft, radiant hair.",
          "primaryButtonText": "Reserve Your Eco-Chic Visit",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "bt21-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Chloris Zero-Waste Organic Hair Salon",
          "copyrightText": "© 2026 Chloris Organic Hair Group. Green Circle Certified."
        }
      }
    ]
  },
  {
    "id": "beauty-hydro-01",
    "slug": "serenity-spring-hydrotherapy",
    "name": "Serenity Spring Hydrotherapy & Thalasso Spa",
    "description": "Ocean-inspired thalassotherapy center featuring warm seawater hydro-jets, marine algae wraps, and Vichy shower scrubs.",
    "industryId": "beauty-aesthetics",
    "categoryId": "spa",
    "collectionId": "luxury-spa",
    "designStyle": "minimal-neutral",
    "tags": [
      "thalassotherapy",
      "hydrotherapy",
      "vichy shower",
      "seawater spa",
      "marine algae"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bt22-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "SERENITY SPRING",
          "primaryButtonText": "Book Water Journey",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Thalasso Circuit",
              "href": "#circuit"
            },
            {
              "label": "Vichy Showers",
              "href": "#vichy"
            },
            {
              "label": "Marine Wraps",
              "href": "#wraps"
            }
          ]
        }
      },
      {
        "id": "bt22-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Heated Seawater Minerals • Breton Thalasso Method",
          "title": "Rebalance Cellular Electrolytes with Living Sea Minerals",
          "subtitle": "Warm ionized seawater jets massage muscle tension while micro-ionized Brittany seaweed wraps infuse magnesium, potassium, and calcium directly into the skin.",
          "primaryButtonText": "Experience Thalassotherapy",
          "primaryButtonLink": "#book",
          "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "ss1",
              "label": "Marine Trace Minerals",
              "value": "92 Natural Elements"
            },
            {
              "id": "ss2",
              "label": "Hydro-Jet Pressure Zones",
              "value": "24 Massaging Jets"
            }
          ]
        }
      },
      {
        "id": "bt22-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Marine Spa Protocols",
          "items": [
            {
              "id": "ss_s1",
              "title": "Heated Hydro-Jet Seawater Circuit (60 Min)",
              "description": "Walking against alternating warm seawater currents with targeted high-pressure back jets."
            },
            {
              "id": "ss_s2",
              "title": "Vichy Shower Horizontal Rain Massage",
              "description": "Seven warm rain shower heads soothing your body while therapists perform sea salt oil polishing."
            },
            {
              "id": "ss_s3",
              "title": "Detoxifying Laminaria Seaweed Cocoon",
              "description": "Warm Brittany marine algae mask wrapped in thermal blankets to stimulate lymphatic drainage."
            }
          ]
        }
      },
      {
        "id": "bt22-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Let the Healing Waters of the Sea Wash Away Stress",
          "description": "Day packages include private seawater soak, Vichy scrub, and relaxation tea pavilion.",
          "primaryButtonText": "Book Thalasso Day Package",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "bt22-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Serenity Spring Hydrotherapy & Thalasso Spa",
          "copyrightText": "© 2026 Serenity Spring Wellness. International Thalasso Association."
        }
      }
    ]
  },
  {
    "id": "beauty-contour-01",
    "slug": "sculptique-body-modeling",
    "name": "Sculptique Non-Invasive Body Modeling",
    "description": "High-end body contouring studio utilizing Emsculpt Neo electromagnetic muscle toning, Cryolipolysis fat freezing, and lymphatic pressotherapy.",
    "industryId": "beauty-aesthetics",
    "categoryId": "beauty-salon",
    "collectionId": "body-contouring",
    "designStyle": "modern-corporate",
    "tags": [
      "body contouring",
      "emsculpt",
      "fat freezing",
      "cryo",
      "cellulite reduction",
      "toning"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bt23-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "SCULPTIQUE BODY",
          "primaryButtonText": "Free Body Scan",
          "primaryButtonLink": "#scan",
          "navLinks": [
            {
              "label": "Technology",
              "href": "#tech"
            },
            {
              "label": "Treatment Areas",
              "href": "#areas"
            },
            {
              "label": "Results & Reviews",
              "href": "#results"
            }
          ]
        }
      },
      {
        "id": "bt23-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "HIFEM+ & Synchronized Radiofrequency",
          "title": "Build 25% More Muscle. Burn 30% Stubborn Fat.",
          "subtitle": "FDA-cleared Emsculpt Neo triggers 20,000 supramaximal muscle contractions in 30 minutes while RF heat permanently dissolves subcutaneous fat cells with zero downtime.",
          "primaryButtonText": "Book Free 3D Body Scan",
          "primaryButtonLink": "#scan",
          "imageUrl": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "sq1",
              "label": "Average Muscle Mass Gain",
              "value": "+25%"
            },
            {
              "id": "sq2",
              "label": "Average Fat Reduction",
              "value": "-30%"
            }
          ]
        }
      },
      {
        "id": "bt23-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "title": "Body Sculpting Modalities",
          "items": [
            {
              "id": "sq_s1",
              "title": "Emsculpt Neo Core & Abdominal Toning",
              "description": "Simultaneous fat reduction and abdominal six-pack definition equivalent to 20,000 crunches."
            },
            {
              "id": "sq_s2",
              "title": "Non-Surgical Buttock Lift & Glute Toning",
              "description": "Strengthening and lifting gluteus maximus without volume loss or needles."
            },
            {
              "id": "sq_s3",
              "title": "Ballancer Pro Lymphatic Pressotherapy",
              "description": "24-chamber compressed air massage flushing toxins and visibly smoothing cellulite."
            }
          ]
        }
      },
      {
        "id": "bt23-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Target Stubborn Areas That Diet and Gym Cannot Touch",
          "description": "Try a demo session during your complimentary 3D Styku body composition scan.",
          "primaryButtonText": "Claim Free 3D Scan & Trial",
          "primaryButtonLink": "#scan"
        }
      },
      {
        "id": "bt23-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Sculptique Non-Invasive Body Modeling",
          "copyrightText": "© 2026 Sculptique Aesthetics LLC. FDA Cleared Medical Devices."
        }
      }
    ]
  },
  {
    "id": "beauty-tan-01",
    "slug": "solstice-bronze-sunless-tan",
    "name": "Solstice Bronze Organic Sunless Studio",
    "description": "Custom hand-sprayed organic airbrush sunless tanning with customized undertones, fast rinse formulas, and zero streak guarantee.",
    "industryId": "beauty-aesthetics",
    "categoryId": "beauty-salon",
    "collectionId": "spray-tan",
    "designStyle": "soft-pastel",
    "tags": [
      "spray tan",
      "sunless tanning",
      "organic tan",
      "bronze",
      "airbrush tan"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bt24-nav",
        "type": "navbar",
        "variant": "navbar-floating",
        "visible": true,
        "content": {
          "title": "SOLSTICE BRONZE",
          "primaryButtonText": "Book Sunless Tan",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Tan Shades",
              "href": "#shades"
            },
            {
              "label": "Rapid Rinse",
              "href": "#rapid"
            },
            {
              "label": "Prep & Care",
              "href": "#prep"
            }
          ]
        }
      },
      {
        "id": "bt24-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Ecocert Certified Organic DHA • 100% Odorless",
          "title": "The Golden Glow of St. Tropez in Just 15 Minutes",
          "subtitle": "Our certified master spray technicians custom-blend violet, olive, and caramel undertones to your exact skin tone, delivering a radiant streak-free golden tan that fades naturally.",
          "primaryButtonText": "Book Custom Spray Tan ($65)",
          "primaryButtonLink": "#book",
          "imageUrl": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "sb1",
              "label": "Streak-Free Guarantee",
              "value": "100% Backed"
            },
            {
              "id": "sb2",
              "label": "Rapid Shower Rinse Time",
              "value": "2 Hours"
            }
          ]
        }
      },
      {
        "id": "bt24-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Sunless Tan Formulas",
          "items": [
            {
              "id": "sb_s1",
              "title": "Signature Mediterranean Olive Tan",
              "description": "Counteracts warm red undertones for a rich, deep European vacation bronze that lasts 8-10 days."
            },
            {
              "id": "sb_s2",
              "title": "Express 2-Hour Rapid Rinse Tan",
              "description": "Fast-developing organic formula allowing you to rinse off in as little as 2 hours for customizable depth."
            },
            {
              "id": "sb_s3",
              "title": "Bridal Luminous Glow with Shimmer Finishing Dust",
              "description": "Translucent golden glow set with moisture-wicking organic baby powder scented with Tahitian vanilla."
            }
          ]
        }
      },
      {
        "id": "bt24-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Get Glowing for Your Next Vacation, Wedding, or Weekend",
          "description": "Private ventilated suites with drying fans and barrier creams included.",
          "primaryButtonText": "Book Your Bronze Session",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "bt24-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Solstice Bronze Organic Sunless Studio",
          "copyrightText": "© 2026 Solstice Bronze LLC. All rights reserved."
        }
      }
    ]
  }
];
