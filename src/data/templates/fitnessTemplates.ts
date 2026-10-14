import { TemplateConfig } from '../../types';

export const FITNESS_TEMPLATES: TemplateConfig[] = [
  {
    "id": "fit-ironforge-01",
    "slug": "ironforge-athletic-performance",
    "name": "IronForge Athletic Performance Box",
    "description": "Raw industrial CrossFit training box featuring Eleiko Olympic barbells, assault bikes, gymnastics rigs, and high-intensity WODs.",
    "industryId": "fitness-wellness",
    "categoryId": "crossfit",
    "collectionId": "athletic-box",
    "designStyle": "brutalist-clean",
    "featured": true,
    "tags": [
      "crossfit",
      "olympic lifting",
      "wod",
      "strength training",
      "barbell",
      "conditioning"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ft1-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "IRONFORGE ATHLETIC",
          "badge": "CrossFit Affiliate",
          "primaryButtonText": "Claim Free Intro WOD",
          "primaryButtonLink": "#intro",
          "navLinks": [
            {
              "label": "Workouts of the Day",
              "href": "#wod"
            },
            {
              "label": "Class Schedule",
              "href": "#schedule"
            },
            {
              "label": "Coaches",
              "href": "#coaches"
            },
            {
              "label": "Memberships",
              "href": "#pricing"
            }
          ]
        }
      },
      {
        "id": "ft1-hero",
        "type": "hero",
        "variant": "hero-cinematic-dark",
        "visible": true,
        "content": {
          "badge": "No Gimmicks • Pure Human Performance",
          "title": "Forging Unbreakable Strength and Elite Conditioning",
          "subtitle": "A high-energy 10,000 sq ft industrial strength training facility where athletes of all backgrounds conquer Olympic weightlifting, gymnastics, and high-intensity aerobic capacity.",
          "primaryButtonText": "Book Free Trial Workout",
          "primaryButtonLink": "#intro",
          "secondaryButtonText": "View Today’s WOD",
          "secondaryButtonLink": "#wod",
          "imageUrl": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Eleiko Competition Barbells",
              "value": "40 Stations"
            },
            {
              "id": "s2",
              "label": "Certified L3 Coaches",
              "value": "8 Specialists"
            },
            {
              "id": "s3",
              "label": "PRs Logged This Month",
              "value": "1,420+"
            }
          ]
        }
      },
      {
        "id": "ft1-schedule",
        "type": "class-schedule",
        "variant": "classes-timetable",
        "visible": true,
        "content": {
          "badge": "Daily Class Schedule",
          "title": "Structured Hourly Programming",
          "subtitle": "Led by certified CrossFit Level 3 coaches with personalized scaling for every movement.",
          "items": [
            {
              "id": "cs1",
              "title": "Daily WOD (Warmup + Strength + Metcon)",
              "description": "Snatch technical complexes followed by a 15-minute AMRAP of wall balls and burpee box jump-overs.",
              "meta": "Daily at 6:00 AM, 7:00 AM, 12:00 PM, 5:30 PM, 6:30 PM"
            },
            {
              "id": "cs2",
              "title": "Barbell Club (Olympic Snatch & Clean)",
              "description": "Dedicated barbell session targeting bar path mechanics, catch mobility, and heavy singles.",
              "meta": "Tue & Thu at 7:30 PM"
            },
            {
              "id": "cs3",
              "title": "Engine Room (Aerobic Capacity)",
              "description": "Low-impact high-output pacing on Concept2 Rowers, SkiErgs, and Echo assault bikes.",
              "meta": "Sat at 9:00 AM"
            }
          ]
        }
      },
      {
        "id": "ft1-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "badge": "Start Today",
          "title": "Stop Wishing. Start Building Real Athletic Capability.",
          "description": "Try your first baseline workout with an experienced coach. Zero commitment required.",
          "primaryButtonText": "Claim Your Free Class Pass",
          "primaryButtonLink": "#intro"
        }
      },
      {
        "id": "ft1-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "IronForge Athletic Performance",
          "description": "88 Industrial Way, Austin, TX 78701",
          "copyrightText": "© 2026 IronForge Athletic Performance Box. Official Affiliate."
        }
      }
    ]
  },
  {
    "id": "fit-prana-02",
    "slug": "prana-botanical-yoga-sanctuary",
    "name": "Prāna Botanical Yoga & Breath Sanctuary",
    "description": "Serene light-filled yoga studio offering infrared heated vinyasa, restorative sound baths, breathwork, and meditation.",
    "industryId": "fitness-wellness",
    "categoryId": "yoga-studio",
    "collectionId": "yoga-sanctuary",
    "designStyle": "organic-natural",
    "featured": true,
    "tags": [
      "yoga",
      "vinyasa",
      "sound bath",
      "breathwork",
      "meditation",
      "infrared yoga"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ft2-nav",
        "type": "navbar",
        "variant": "navbar-floating",
        "visible": true,
        "content": {
          "title": "PRĀNA YOGA SANCTUARY",
          "primaryButtonText": "Book Mat",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Flow & Sound Classes",
              "href": "#classes"
            },
            {
              "label": "Workshops & Retreats",
              "href": "#workshops"
            },
            {
              "label": "Studio Pass",
              "href": "#pricing"
            }
          ]
        }
      },
      {
        "id": "ft2-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Gentle Infrared Warmth • Living Greenery",
          "title": "Inhale Presence. Move with Grace. Exhale Stillness.",
          "subtitle": "A warm botanical oasis with reclaimed timber floors, gentle radiant infrared heating, and Tibetan singing bowls designed to release deep somatic tension and quiet the mind.",
          "primaryButtonText": "Claim Intro Week ($35)",
          "primaryButtonLink": "#pricing",
          "imageUrl": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "pr1",
              "label": "Infant Air Filter Cycles",
              "value": "100% Fresh Air"
            },
            {
              "id": "pr2",
              "label": "Certified 500-HR Teachers",
              "value": "12 Guides"
            }
          ]
        }
      },
      {
        "id": "ft2-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Mind-Body Practices",
          "items": [
            {
              "id": "yo1",
              "title": "Infrared Solar Vinyasa (Warm)",
              "description": "Dynamic breath-to-movement flow set to gentle 85°F radiant warmth improving elasticity without harsh heat."
            },
            {
              "id": "yo2",
              "title": "Yin Yoga & Crystal Singing Bowls",
              "description": "Passive floor postures held for 3-5 minutes targeting deep fascia, followed by resonant 432Hz sound baths."
            },
            {
              "id": "yo3",
              "title": "Pranayama & Somatic Breathwork",
              "description": "Guided conscious connected breathing clearing emotional blockages and down-regulating the nervous system."
            }
          ]
        }
      },
      {
        "id": "ft2-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Begin Your Practice with 7 Days of Unlimited Yoga",
          "description": "Try morning flows, restorative evening sound baths, and gentle weekend Yin for just $35.",
          "primaryButtonText": "Claim Intro Pass",
          "primaryButtonLink": "#pricing"
        }
      },
      {
        "id": "ft2-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Prāna Botanical Yoga Sanctuary",
          "copyrightText": "© 2026 Prāna Sanctuary. Yoga Alliance Registered School."
        }
      }
    ]
  },
  {
    "id": "fit-gym-01",
    "slug": "valkyrie-strength-club",
    "name": "Valkyrie High-Performance Strength Club",
    "description": "Premier 24/7 strength and bodybuilding club featuring Arsenal Strength and Prime selectorized machinery, deadlift platforms, and infrared saunas.",
    "industryId": "fitness-wellness",
    "categoryId": "gym",
    "collectionId": "athletic-box",
    "designStyle": "dark-cinematic",
    "featured": true,
    "tags": [
      "gym",
      "strength training",
      "bodybuilding",
      "powerlifting",
      "fitness center"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ft3-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "VALKYRIE STRENGTH",
          "badge": "24/7 Keycard Access",
          "primaryButtonText": "Join Club",
          "primaryButtonLink": "#join",
          "navLinks": [
            {
              "label": "The Equipment",
              "href": "#equipment"
            },
            {
              "label": "Amenities & Sauna",
              "href": "#amenities"
            },
            {
              "label": "Membership Tiers",
              "href": "#pricing"
            }
          ]
        }
      },
      {
        "id": "ft3-hero",
        "type": "hero",
        "variant": "hero-cinematic-dark",
        "visible": true,
        "content": {
          "badge": "Arsenal Strength & Prime Equipped Gym",
          "title": "Where Serious Lifters Build Uncompromising Physiques",
          "subtitle": "Matte black steel, precision calibrated plates, monolifts, specialty bars, and custom variable-resistance machines built for lifters who demand the best.",
          "primaryButtonText": "Get 24/7 Day Pass",
          "primaryButtonLink": "#join",
          "imageUrl": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "vk1",
              "label": "Arsenal Strength Machines",
              "value": "65 Pieces"
            },
            {
              "id": "vk2",
              "label": "Dumbbell Range",
              "value": "5 to 175 Lbs"
            }
          ]
        }
      },
      {
        "id": "ft3-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "title": "Club Features",
          "items": [
            {
              "id": "vk_s1",
              "title": "Dedicated Powerlifting Zone",
              "description": "Eleiko competition racks, band pegs, oak lifting platforms, and approved kilo plates."
            },
            {
              "id": "vk_s2",
              "title": "Biomechanical Hypertrophy Area",
              "description": "Prime variable-resistance cam machines and Arsenal pin-select equipment aligning with muscle fiber planes."
            },
            {
              "id": "vk_s3",
              "title": "Post-Workout Thermal Recovery",
              "description": "Finnish dry sauna at 195°F, cold plunge tubs at 44°F, and Normatec compression boots."
            }
          ]
        }
      },
      {
        "id": "ft3-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "No Crowds. No Influencer Tripods. Just Serious Work.",
          "description": "Capped club memberships ensure zero waiting for equipment during peak training hours.",
          "primaryButtonText": "Apply for Membership",
          "primaryButtonLink": "#join"
        }
      },
      {
        "id": "ft3-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Valkyrie High-Performance Strength Club",
          "copyrightText": "© 2026 Valkyrie Strength Inc. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "fit-pilates-01",
    "slug": "reformer-core-sculpt-pilates",
    "name": "Reformer Core Sculpt & Cadence Pilates",
    "description": "Chic boutique reformer studio delivering high-intensity low-impact lengthening, core stabilization, and athletic resistance pilates.",
    "industryId": "fitness-wellness",
    "categoryId": "pilates-studio",
    "collectionId": "pilates-boutique",
    "designStyle": "soft-pastel",
    "tags": [
      "pilates",
      "reformer",
      "core workout",
      "sculpt",
      "low impact",
      "barre"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ft4-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "REFORMER SCULPT",
          "primaryButtonText": "Book Reformer",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Reformer Classes",
              "href": "#classes"
            },
            {
              "label": "Pricing Packs",
              "href": "#pricing"
            },
            {
              "label": "Private Sessions",
              "href": "#private"
            }
          ]
        }
      },
      {
        "id": "ft4-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Balanced Body Allegro 2 Reformers",
          "title": "Long, Lean, Powerful Muscle Without Joint Impact",
          "subtitle": "Our athletic reformer sequences fire slow-twitch muscle fibers through continuous spring tension, sculpting your deepest core, glutes, and posture.",
          "primaryButtonText": "Book First Class ($25)",
          "primaryButtonLink": "#book",
          "imageUrl": "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "pl1",
              "label": "Maximum Reformers per Class",
              "value": "10 Mats"
            },
            {
              "id": "pl2",
              "label": "Certified Comprehensive Instructors",
              "value": "100% Balanced Body"
            }
          ]
        }
      },
      {
        "id": "ft4-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Signature Reformer Formats",
          "items": [
            {
              "id": "pl_s1",
              "title": "Athletic Core & Glute Sculpt",
              "description": "Fast-paced spring resistance targeting inner thighs, carriage lunges, and deep transverse abdominis."
            },
            {
              "id": "pl_s2",
              "title": "Jumpboard Cardio Reformer",
              "description": "Low-impact plyometric jumping against spring resistance boosting heart rate without spinal compression."
            },
            {
              "id": "pl_s3",
              "title": "Restorative Stretch & Spine Mobility",
              "description": "Gentle spinal decompression, hamstring lengthening, and thoracic opening with long carriage stretches."
            }
          ]
        }
      },
      {
        "id": "ft4-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Feel the Shake and See the Definition in Just 4 Weeks",
          "description": "Start with our 3-Class Welcome Pack and discover why reformer pilates is the ultimate workout.",
          "primaryButtonText": "Claim 3-Class Welcome Pack",
          "primaryButtonLink": "#pricing"
        }
      },
      {
        "id": "ft4-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Reformer Core Sculpt & Cadence Pilates",
          "copyrightText": "© 2026 Core Sculpt Pilates Atelier. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "fit-boxing-01",
    "slug": "southpaw-boxing-conditioning",
    "name": "Southpaw Boxing & Combat Conditioning",
    "description": "Authentic Sweet Science boxing gym with heavy bag rounds, mitt work with pro fighters, footwork agility, and title belt conditioning.",
    "industryId": "fitness-wellness",
    "categoryId": "boxing-club",
    "collectionId": "combat-fitness",
    "designStyle": "brutalist-clean",
    "tags": [
      "boxing",
      "combat sports",
      "heavy bag",
      "mitt work",
      "fight conditioning",
      "sparring"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ft5-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "SOUTHPAW BOXING",
          "primaryButtonText": "Book Gloves & Class",
          "primaryButtonLink": "#intro",
          "navLinks": [
            {
              "label": "Boxing Rounds",
              "href": "#classes"
            },
            {
              "label": "Pro Trainers",
              "href": "#trainers"
            },
            {
              "label": "Sparring Rules",
              "href": "#sparring"
            }
          ]
        }
      },
      {
        "id": "ft5-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Golden Gloves Trainers • Real Ring Technique",
          "title": "The Sweet Science of Punching Power and Iron Will",
          "subtitle": "Wrap your hands, step up to the leather heavy bags, and burn 800 calories in 12 intense rounds of authentic combinations, slips, rolls, and core conditioning.",
          "primaryButtonText": "First Class + Free Hand Wraps",
          "primaryButtonLink": "#intro",
          "imageUrl": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "bx1",
              "label": "Heavy Bag Stations",
              "value": "32 Bags"
            },
            {
              "id": "bx2",
              "label": "Average Calories Burned",
              "value": "800 kcal / Session"
            }
          ]
        }
      },
      {
        "id": "ft5-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Training Formats",
          "items": [
            {
              "id": "bx_s1",
              "title": "12-Round Heavy Bag Conditioning",
              "description": "Synchronized rhythm combinations, power hooks, speed intervals, and medicine ball core burnout."
            },
            {
              "id": "bx_s2",
              "title": "1-on-1 Focus Mitt Technique",
              "description": "Precision defensive slips, counter hooks, and footwork angles with active pro boxing coaches."
            },
            {
              "id": "bx_s3",
              "title": "Controlled Sparring Clinic",
              "description": "Technical sparring under headgear and 16oz gloves applying ring craft and distance control safely."
            }
          ]
        }
      },
      {
        "id": "ft5-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Leave Your Stress and Excuses on the Heavy Bag",
          "description": "No experience needed. All beginner classes include hand wrapping instruction and glove rental.",
          "primaryButtonText": "Claim First Boxing Session",
          "primaryButtonLink": "#intro"
        }
      },
      {
        "id": "ft5-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Southpaw Boxing & Combat Conditioning",
          "copyrightText": "© 2026 Southpaw Boxing Club. USA Boxing Certified Facility."
        }
      }
    ]
  },
  {
    "id": "fit-bjj-01",
    "slug": "bushido-dojo-brazilian-jiujitsu",
    "name": "Bushido Traditional Dojo & Brazilian Jiu-Jitsu",
    "description": "Black belt Brazilian Jiu-Jitsu, Judo throws, and Muay Thai striking academy emphasizing discipline, honor, and leverage.",
    "industryId": "fitness-wellness",
    "categoryId": "martial-arts-academy",
    "collectionId": "combat-fitness",
    "designStyle": "minimal-neutral",
    "tags": [
      "bjj",
      "jiu jitsu",
      "martial arts",
      "self defense",
      "muay thai",
      "judo"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ft6-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "BUSHIDO DOJO",
          "primaryButtonText": "Free Trial Gi Class",
          "primaryButtonLink": "#trial",
          "navLinks": [
            {
              "label": "BJJ Fundamentals",
              "href": "#bjj"
            },
            {
              "label": "Kids Martial Arts",
              "href": "#kids"
            },
            {
              "label": "Black Belt Lineage",
              "href": "#lineage"
            }
          ]
        }
      },
      {
        "id": "ft6-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "IBJJF Certified • 4th Degree Black Belt Head Professor",
          "title": "Master Leverage, Calm Under Pressure, and Real Self-Defense",
          "subtitle": "Step onto 4,000 sq ft of seamless Dollamur tatami mats to learn authentic Gracie Brazilian Jiu-Jitsu, positional control, and joint submissions in a respectful community.",
          "primaryButtonText": "Book Free 1-Week Trial",
          "primaryButtonLink": "#trial",
          "imageUrl": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "bj1",
              "label": "Seamless Tatami Mat Area",
              "value": "4,000 Sq Ft"
            },
            {
              "id": "bj2",
              "label": "Active World Champions",
              "value": "6 Competitors"
            }
          ]
        }
      },
      {
        "id": "ft6-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Academy Disciplines",
          "items": [
            {
              "id": "bj_s1",
              "title": "Adult BJJ Fundamentals (Gi)",
              "description": "Core guard passes, escapes, sweeps, and armbars taught in a safe, ego-free beginner environment."
            },
            {
              "id": "bj_s2",
              "title": "No-Gi Submission Grappling",
              "description": "Faster-paced wrestling takedowns, leg locks, and back attacks under ADCC submission rules."
            },
            {
              "id": "bj_s3",
              "title": "Champions Kids Martial Arts (Ages 5-13)",
              "description": "Anti-bullying confidence, discipline, coordination, and practical defensive ground control."
            }
          ]
        }
      },
      {
        "id": "ft6-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Begin Your Martial Arts Journey Today",
          "description": "Loaner Gi provided for your first class. Discover the confidence that comes from genuine skill.",
          "primaryButtonText": "Schedule Free Trial Class",
          "primaryButtonLink": "#trial"
        }
      },
      {
        "id": "ft6-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Bushido Traditional Dojo & Brazilian Jiu-Jitsu",
          "copyrightText": "© 2026 Bushido Dojo. IBJJF Registered Academy."
        }
      }
    ]
  },
  {
    "id": "fit-pt-01",
    "slug": "apex-biomechanics-personal-training",
    "name": "Apex Biomechanics 1-on-1 Transformation",
    "description": "Private 1-on-1 personal training studio with force plate analysis, DEXA body composition scans, and customized hypertrophy programming.",
    "industryId": "fitness-wellness",
    "categoryId": "personal-trainer",
    "collectionId": "personal-training",
    "designStyle": "modern-corporate",
    "tags": [
      "personal trainer",
      "1 on 1",
      "biomechanics",
      "body composition",
      "dexa scan"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ft7-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "APEX BIOMECHANICS",
          "primaryButtonText": "Book Free Assessment",
          "primaryButtonLink": "#assessment",
          "navLinks": [
            {
              "label": "Methodology",
              "href": "#method"
            },
            {
              "label": "Client Results",
              "href": "#results"
            },
            {
              "label": "DEXA Testing",
              "href": "#dexa"
            }
          ]
        }
      },
      {
        "id": "ft7-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Exclusive Private Suite • Zero Crowds",
          "title": "Science-Backed Physical Transformation Tailored to You",
          "subtitle": "Our CSCS-certified strength coaches use 3D force plates, movement screens, and nutritional periodization to build lean muscle, strip fat, and bulletproof joints.",
          "primaryButtonText": "Apply for 1-on-1 Coaching",
          "primaryButtonLink": "#assessment",
          "imageUrl": "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "pt1",
              "label": "Average 12-Week Body Fat Loss",
              "value": "-8.4%"
            },
            {
              "id": "pt2",
              "label": "Client Success Retention",
              "value": "96.2%"
            }
          ]
        }
      },
      {
        "id": "ft7-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "title": "Coaching Architecture",
          "items": [
            {
              "id": "pt_s1",
              "title": "1-on-1 Biomechanical Training Suites",
              "description": "Private training room with your coach, custom cable systems, and real-time movement velocity tracking."
            },
            {
              "id": "pt_s2",
              "title": "Clinical DEXA Body Composition & VO2",
              "description": "Gold-standard bone density, lean mass symmetry, and visceral fat quantification."
            },
            {
              "id": "pt_s3",
              "title": "Metabolic & Macronutrient Periodization",
              "description": "Weekly macro targets adapted to your training volume, resting metabolic rate, and travel schedules."
            }
          ]
        }
      },
      {
        "id": "ft7-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Transform Your Body with Absolute Scientific Predictability",
          "description": "Book your complimentary 60-minute movement screening and goal-setting roadmap.",
          "primaryButtonText": "Schedule Transformation Consult",
          "primaryButtonLink": "#assessment"
        }
      },
      {
        "id": "ft7-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Apex Biomechanics 1-on-1 Transformation",
          "copyrightText": "© 2026 Apex Biomechanics Group. NSCA & ACSM Certified."
        }
      }
    ]
  },
  {
    "id": "fit-swim-01",
    "slug": "aquasprint-olympic-aquatics",
    "name": "AquaSprint Olympic Aquatic Center",
    "description": "50-meter Olympic swimming facility offering stroke clinic analysis, masters swim squads, underwater cameras, and youth racing leagues.",
    "industryId": "fitness-wellness",
    "categoryId": "swimming-academy",
    "collectionId": "aquatics",
    "designStyle": "medical-clean",
    "tags": [
      "swimming",
      "olympic pool",
      "swim lessons",
      "triathlon",
      "water polo"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ft8-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "AQUASPRINT AQUATICS",
          "badge": "50M Olympic Standard",
          "primaryButtonText": "Swim Assessment",
          "primaryButtonLink": "#assess",
          "navLinks": [
            {
              "label": "Pool Schedule",
              "href": "#lanes"
            },
            {
              "label": "Stroke Technique",
              "href": "#technique"
            },
            {
              "label": "Masters Squad",
              "href": "#masters"
            }
          ]
        }
      },
      {
        "id": "ft8-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Ozone-Purified Water • 10 Competition Lanes",
          "title": "Glide Through Crystal Water with Effortless Stroke Power",
          "subtitle": "Train in our temperature-controlled 50-meter Olympic pool featuring underwater digital motion capture cameras, starting blocks, and elite coaches.",
          "primaryButtonText": "Book Stroke Video Analysis",
          "primaryButtonLink": "#assess",
          "imageUrl": "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "sw1",
              "label": "Pool Length",
              "value": "50 Meters"
            },
            {
              "id": "sw2",
              "label": "Water Filtration",
              "value": "100% UV & Ozone"
            }
          ]
        }
      },
      {
        "id": "ft8-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Aquatic Programs",
          "items": [
            {
              "id": "sw_s1",
              "title": "High-Speed Underwater Video Stroke Clinic",
              "description": "Dual-angle underwater cameras analyzing catch angle, hip rotation, and kick efficiency."
            },
            {
              "id": "sw_s2",
              "title": "Masters & Triathlon Swimming Squad",
              "description": "Morning coached endurance and interval workouts structured for triathletes and open-water racers."
            },
            {
              "id": "sw_s3",
              "title": "Junior Competitive Racing Academy",
              "description": "USA Swimming sanctioned youth team progressing swimmers from learn-to-swim to state finals."
            }
          ]
        }
      },
      {
        "id": "ft8-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Reserve Your Dedicated Lap Lane",
          "description": "Open lane swimming available from 5:00 AM to 10:00 PM daily with mobile lane booking.",
          "primaryButtonText": "View Lap Lane Availability",
          "primaryButtonLink": "#lanes"
        }
      },
      {
        "id": "ft8-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "AquaSprint Olympic Aquatic Center",
          "copyrightText": "© 2026 AquaSprint Aquatics. USA Swimming Club Member."
        }
      }
    ]
  },
  {
    "id": "fit-womens-01",
    "slug": "empowerfit-womens-gym",
    "name": "EmpowerFit Boutique Strength For Women",
    "description": "Empowering women-only boutique gym offering small-group barbell training, glute hypertrophy, pre/post-natal fitness, and luxury dressing suites.",
    "industryId": "fitness-wellness",
    "categoryId": "womens-gym",
    "collectionId": "womens-fitness",
    "designStyle": "soft-pastel",
    "tags": [
      "womens gym",
      "female fitness",
      "strength training",
      "glutes",
      "post natal",
      "boutique gym"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ft9-nav",
        "type": "navbar",
        "variant": "navbar-floating",
        "visible": true,
        "content": {
          "title": "EMPOWERFIT WOMEN",
          "primaryButtonText": "Join the Community",
          "primaryButtonLink": "#join",
          "navLinks": [
            {
              "label": "Programs",
              "href": "#programs"
            },
            {
              "label": "Dressing Lounge",
              "href": "#amenities"
            },
            {
              "label": "Free Trial",
              "href": "#trial"
            }
          ]
        }
      },
      {
        "id": "ft9-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Women Only • Uplifting Community",
          "title": "Strong, Confident, and Unapologetically Powerful",
          "subtitle": "A welcoming, judgement-free boutique training sanctuary where women learn proper barbell lifts, build toned athletic muscle, and celebrate personal bests together.",
          "primaryButtonText": "Claim Free 3-Day Trial Pass",
          "primaryButtonLink": "#trial",
          "imageUrl": "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "ef1",
              "label": "Women Transformed",
              "value": "4,500+"
            },
            {
              "id": "ef2",
              "label": "Average Squat PR Increase",
              "value": "+45 Lbs"
            }
          ]
        }
      },
      {
        "id": "ft9-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Curated Training Tracks",
          "items": [
            {
              "id": "ef_s1",
              "title": "Small Group Barbell & Strength",
              "description": "Coached squads of 6 mastering deadlifts, hip thrusts, bench, and overhead presses with correct form."
            },
            {
              "id": "ef_s2",
              "title": "Targeted Glute & Hamstring Hypertrophy",
              "description": "Biomechanical hip abduction, Romanian deadlifts, and resistance bands sculpting curves."
            },
            {
              "id": "ef_s3",
              "title": "Pre & Post-Natal Core Rehab",
              "description": "Pelvic floor safe strength protocols guided by certified perinatal exercise specialists."
            }
          ]
        }
      },
      {
        "id": "ft9-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Find Your Strongest, Most Confident Self",
          "description": "Tour our boutique club, meet our supportive female coaches, and try your first workout free.",
          "primaryButtonText": "Book Your Free Tour & Class",
          "primaryButtonLink": "#trial"
        }
      },
      {
        "id": "ft9-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "EmpowerFit Boutique Strength For Women",
          "copyrightText": "© 2026 EmpowerFit Strength Club. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "fit-med-01",
    "slug": "stillness-zen-meditation-center",
    "name": "Stillness Zen Mindfulness & Sound Sanctuary",
    "description": "Immersive sound healing, guided mindfulness meditation, breathwork journeys, and tea ceremonies in an acoustically tuned sanctuary.",
    "industryId": "fitness-wellness",
    "categoryId": "meditation-center",
    "collectionId": "mindfulness",
    "designStyle": "organic-natural",
    "tags": [
      "meditation",
      "mindfulness",
      "sound bath",
      "zen",
      "sound healing",
      "breathwork"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ft10-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "STILLNESS SANCTUARY",
          "primaryButtonText": "Book Sound Journey",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Sound Baths",
              "href": "#sound"
            },
            {
              "label": "Mindfulness Classes",
              "href": "#meditation"
            },
            {
              "label": "Tea Ceremonies",
              "href": "#tea"
            }
          ]
        }
      },
      {
        "id": "ft10-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "432Hz Acoustic Harmonic Architecture",
          "title": "A Silent Refuge from the Noise of the Modern World",
          "subtitle": "Lie back on organic wool cushions and let the soothing vibrations of planetary gongs, quartz crystal bowls, and gentle breathwork dissolve mental fatigue.",
          "primaryButtonText": "Reserve Sound Bath Cushion",
          "primaryButtonLink": "#book",
          "imageUrl": "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "st1",
              "label": "Acoustic Quartz Singing Bowls",
              "value": "38 Bowls"
            },
            {
              "id": "st2",
              "label": "Average Cortisol Reduction",
              "value": "-35%"
            }
          ]
        }
      },
      {
        "id": "ft10-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "title": "Restorative Journeys",
          "items": [
            {
              "id": "st_s1",
              "title": "Cosmic Gong & Crystal Sound Immersion",
              "description": "Multi-layered vibrational acoustic waves shifting brain states from beta down to deep regenerative theta."
            },
            {
              "id": "st_s2",
              "title": "Vipassana Insight Mindfulness Training",
              "description": "Systematic breath observation and body scanning cultivating emotional non-reactivity and inner peace."
            },
            {
              "id": "st_s3",
              "title": "Ceremonial Gongfu Tea Meditation",
              "description": "Silent appreciation of rare aged Taiwanese oolongs brewed with mineral spring water."
            }
          ]
        }
      },
      {
        "id": "ft10-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Give Your Nervous System the Rest It Craves",
          "description": "Evening candlelight sound baths held nightly at 7:30 PM. Wool blankets and eye pillows provided.",
          "primaryButtonText": "Book Evening Sound Bath",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "ft10-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Stillness Zen Mindfulness Center",
          "copyrightText": "© 2026 Stillness Meditation Sanctuary. Dedicated to inner peace."
        }
      }
    ]
  },
  {
    "id": "fit-wellness-01",
    "slug": "soma-biohacking-wellness-retreat",
    "name": "Soma Recovery Biohacking & Contrast Therapy",
    "description": "Premier urban recovery bathhouse featuring cedar saunas, cold plunge pools at 39°F, hyperbaric oxygen, and red light therapy.",
    "industryId": "fitness-wellness",
    "categoryId": "wellness-retreat",
    "collectionId": "biohacking-recovery",
    "designStyle": "glass-interface",
    "tags": [
      "cold plunge",
      "sauna",
      "biohacking",
      "contrast therapy",
      "hyperbaric",
      "red light"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ft11-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "SOMA RECOVERY",
          "primaryButtonText": "Book Contrast Circuit",
          "primaryButtonLink": "#circuit",
          "navLinks": [
            {
              "label": "Thermal Circuit",
              "href": "#circuit"
            },
            {
              "label": "Hyperbaric & Light",
              "href": "#tech"
            },
            {
              "label": "Day Passes",
              "href": "#passes"
            }
          ]
        }
      },
      {
        "id": "ft11-hero",
        "type": "hero",
        "variant": "hero-cinematic-dark",
        "visible": true,
        "content": {
          "badge": "Cellular Recovery & Athletic Longevity",
          "title": "Hot. Cold. Red Light. Radical Biological Renewal.",
          "subtitle": "Cycle between 200°F aromatic cedar saunas and 39°F ozone-purified cold plunges to spike norepinephrine, flush inflammation, and supercharge mitochondrial energy.",
          "primaryButtonText": "Reserve 90-Min Contrast Pass",
          "primaryButtonLink": "#circuit",
          "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "sm1",
              "label": "Cold Plunge Temp",
              "value": "39°F"
            },
            {
              "id": "sm2",
              "label": "Nordic Sauna Temp",
              "value": "205°F"
            }
          ]
        }
      },
      {
        "id": "ft11-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "title": "Recovery Modalities",
          "items": [
            {
              "id": "sm_s1",
              "title": "Contrast Thermal Bathhouse Circuit",
              "description": "Three rounds of 15-min dry heat sauna paired with 3-min sub-40°F cold plunge immersions."
            },
            {
              "id": "sm_s2",
              "title": "Hard-Shell 2.0 ATA Hyperbaric Oxygen",
              "description": "Flooding depleted cellular tissues with 100% pure oxygen under pressure, accelerating tissue repair."
            },
            {
              "id": "sm_s3",
              "title": "Full-Body Joovv Red & Infrared Light Bed",
              "description": "660nm and 850nm therapeutic wavelengths stimulating cytochrome c oxidase and ATP production."
            }
          ]
        }
      },
      {
        "id": "ft11-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Feel Euphoric within 90 Minutes",
          "description": "Experience the proven mood-elevating and recovery-accelerating power of contrast therapy.",
          "primaryButtonText": "Book First Bathhouse Session",
          "primaryButtonLink": "#circuit"
        }
      },
      {
        "id": "ft11-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Soma Recovery & Biohacking Sanctuary",
          "copyrightText": "© 2026 Soma Wellness Technologies LLC. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "fit-nutri-01",
    "slug": "metabolic-nutrition-lifestyle-lab",
    "name": "Metabolic Nutrition & Lifestyle Lab",
    "description": "Registered dietitian nutrition coaching, continuous glucose monitoring analysis, blood lipid optimization, and personalized meal planning.",
    "industryId": "fitness-wellness",
    "categoryId": "nutrition-coach",
    "collectionId": "nutrition-coaching",
    "designStyle": "medical-clean",
    "tags": [
      "nutrition",
      "dietitian",
      "cgm",
      "macro coaching",
      "weight loss",
      "metabolism"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ft12-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "METABOLIC NUTRITION LAB",
          "primaryButtonText": "Book Free Consult",
          "primaryButtonLink": "#consult",
          "navLinks": [
            {
              "label": "Dietitian Coaching",
              "href": "#coaching"
            },
            {
              "label": "CGM Biosensor Analysis",
              "href": "#cgm"
            },
            {
              "label": "Client Bloodwork",
              "href": "#results"
            }
          ]
        }
      },
      {
        "id": "ft12-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Registered Dietitians (RD) & Functional Nutritionists",
          "title": "Eat for Your Unique Metabolic Genetic Blueprint",
          "subtitle": "No restrictive fad diets. We analyze continuous glucose sensor spikes, micronutrient blood panels, and gut microbiome data to build sustainable nutrition protocols.",
          "primaryButtonText": "Book Free 20-Min Discovery Call",
          "primaryButtonLink": "#consult",
          "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "nt1",
              "label": "Average Client Glycemic Variability Drop",
              "value": "-42%"
            },
            {
              "id": "nt2",
              "label": "1-on-1 Dietitian Check-ins",
              "value": "Weekly Video"
            }
          ]
        }
      },
      {
        "id": "ft12-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Nutrition Science Tracks",
          "items": [
            {
              "id": "nt_s1",
              "title": "1-on-1 Personalized Dietitian Coaching",
              "description": "Weekly video strategy sessions, real-time app food photo feedback, and grocery shopping guides."
            },
            {
              "id": "nt_s2",
              "title": "Continuous Glucose Monitor (CGM) Tuning",
              "description": "Seeing how specific carbs, stress, and meal timing affect your real-time blood sugar curves."
            },
            {
              "id": "nt_s3",
              "title": "Advanced Cardiovascular Lipid Optimization",
              "description": "Targeting ApoB, Triglyceride-to-HDL ratios, and fasting insulin through tailored dietary fiber."
            }
          ]
        }
      },
      {
        "id": "ft12-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Take the Guesswork Out of What to Eat for Your Goals",
          "description": "Covered by many health insurance plans. Check your benefits today.",
          "primaryButtonText": "Verify Insurance & Book Call",
          "primaryButtonLink": "#consult"
        }
      },
      {
        "id": "ft12-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Metabolic Nutrition & Lifestyle Lab",
          "copyrightText": "© 2026 Metabolic Nutrition Lab. Commission on Dietetic Registration."
        }
      }
    ]
  },
  {
    "id": "fit-rehab-01",
    "slug": "kinetic-motion-sports-rehab",
    "name": "Kinetic Motion Sports Rehabilitation",
    "description": "Physical therapy and sports biomechanics clinic focused on return-to-sport testing, ACL rehabilitation, and dry needling.",
    "industryId": "fitness-wellness",
    "categoryId": "sports-rehabilitation",
    "collectionId": "physiotherapy",
    "designStyle": "modern-corporate",
    "tags": [
      "sports rehab",
      "physical therapy",
      "acl injury",
      "biomechanics",
      "dry needling"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ft13-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "KINETIC MOTION REHAB",
          "primaryButtonText": "Book Initial Exam",
          "primaryButtonLink": "#exam",
          "navLinks": [
            {
              "label": "Rehab Specialties",
              "href": "#specialties"
            },
            {
              "label": "Return to Play",
              "href": "#returntoplay"
            },
            {
              "label": "Our DPTs",
              "href": "#team"
            }
          ]
        }
      },
      {
        "id": "ft13-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Doctor of Physical Therapy Specialists",
          "title": "Rehab Like a Pro Athlete. Return Stronger Than Before.",
          "subtitle": "We treat active individuals and athletes with 100% one-on-one doctorate care, utilizing Vald force decks, blood flow restriction, and progressive loading.",
          "primaryButtonText": "Schedule 60-Min Evaluation",
          "primaryButtonLink": "#exam",
          "imageUrl": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "rh1",
              "label": "1-on-1 PT Care (No Aides)",
              "value": "100% Guarantee"
            },
            {
              "id": "rh2",
              "label": "Athletes Returned to Sport",
              "value": "2,800+"
            }
          ]
        }
      },
      {
        "id": "ft13-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "title": "Advanced Sports Therapies",
          "items": [
            {
              "id": "rh_s1",
              "title": "Vald Force Decks Return-to-Sport Testing",
              "description": "Objective quad symmetry and eccentric braking force metrics determining true safe return to cutting."
            },
            {
              "id": "rh_s2",
              "title": "Blood Flow Restriction (BFR) Hypertrophy",
              "description": "Achieving massive muscle protein synthesis with light loads following surgery or tendon injury."
            },
            {
              "id": "rh_s3",
              "title": "Targeted Dry Needling with Electrical Stim",
              "description": "Deactivating chronic neuromuscular trigger points and resetting persistent movement dysfunction."
            }
          ]
        }
      },
      {
        "id": "ft13-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Do Not Let Pain Keep You Sidelined Another Month",
          "description": "Direct access physical therapy appointments available this week.",
          "primaryButtonText": "Book Evaluation with a DPT",
          "primaryButtonLink": "#exam"
        }
      },
      {
        "id": "ft13-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Kinetic Motion Sports Rehabilitation",
          "copyrightText": "© 2026 Kinetic Motion Physical Therapy LLC. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "fit-dance-01",
    "slug": "rhythm-motion-dance-cardio",
    "name": "Rhythm Motion Dance & Cardio Studio",
    "description": "High-energy club lighting dance cardio, hip-hop intervals, ballet barre sculpt, and music festival energy in a boutique studio.",
    "industryId": "fitness-wellness",
    "categoryId": "dance-fitness-studio",
    "collectionId": "dance-fitness",
    "designStyle": "bold-creative",
    "tags": [
      "dance fitness",
      "cardio dance",
      "hip hop fitness",
      "barre",
      "calorie burn"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ft14-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "RHYTHM MOTION",
          "primaryButtonText": "Book First Class",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Class Formats",
              "href": "#classes"
            },
            {
              "label": "Weekly Schedule",
              "href": "#schedule"
            },
            {
              "label": "Studio Pass",
              "href": "#pricing"
            }
          ]
        }
      },
      {
        "id": "ft14-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Nightclub Sound • Immersive Lighting",
          "title": "Lose Yourself in the Beat. Torch 600 Calories.",
          "subtitle": "The sweat-drenched dance party that feels nothing like a traditional gym workout. Follow dynamic choreographed tracks set to global beats, hip-hop, and pop remixes.",
          "primaryButtonText": "Try Your First Class ($20)",
          "primaryButtonLink": "#book",
          "imageUrl": "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "dm1",
              "label": "Average Class Burn",
              "value": "600-800 kcal"
            },
            {
              "id": "dm2",
              "label": "Classes Taught Weekly",
              "value": "45 Sessions"
            }
          ]
        }
      },
      {
        "id": "ft14-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Dance Studio Formats",
          "items": [
            {
              "id": "dm_s1",
              "title": "Full-Out Hip Hop Cardio",
              "description": "Sweat-heavy urban choreo broken down into repetitive high-energy blocks anyone can master."
            },
            {
              "id": "dm_s2",
              "title": "Barre & Mat Core Sculpt",
              "description": "Isometric pulses, light hand weights, and resistance loops shaping lean calves, glutes, and arms."
            },
            {
              "id": "dm_s3",
              "title": "Latin Heat & Reggaeton Sweat",
              "description": "Fast hip isolations, salsa footwork, and syncopated dembow rhythms that make an hour fly by."
            }
          ]
        }
      },
      {
        "id": "ft14-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Workout Clothes. Sneakers. Pure Joy.",
          "description": "No prior dance background required. Grab a friend and sweat with our vibrant tribe.",
          "primaryButtonText": "Book Dance Cardio Class",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "ft14-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Rhythm Motion Dance Cardio Studio",
          "copyrightText": "© 2026 Rhythm Motion Fitness. Moving bodies with love."
        }
      }
    ]
  },
  {
    "id": "fit-weight-01",
    "slug": "metabolic-precision-weight-clinic",
    "name": "Metabolic Precision Weight Management",
    "description": "Medical weight wellness clinic integrating GLP-1 therapy, resting metabolic rate testing, body fat scans, and lifestyle behavior coaching.",
    "industryId": "fitness-wellness",
    "categoryId": "weight-management-clinic",
    "collectionId": "weight-wellness",
    "designStyle": "medical-clean",
    "tags": [
      "weight loss",
      "glp1",
      "metabolic health",
      "body fat",
      "physician guided"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ft15-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "METABOLIC PRECISION",
          "primaryButtonText": "Check Eligibility",
          "primaryButtonLink": "#eligibility",
          "navLinks": [
            {
              "label": "Medical Program",
              "href": "#program"
            },
            {
              "label": "Physician Team",
              "href": "#team"
            },
            {
              "label": "Client Transformations",
              "href": "#results"
            }
          ]
        }
      },
      {
        "id": "ft15-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Board-Certified Obesity Medicine MDs",
          "title": "Sustainable Fat Loss Driven by Modern Metabolic Biology",
          "subtitle": "We treat the underlying hormonal set-point of weight through medical GLP-1 therapies, continuous body composition monitoring, and muscle-sparing nutrition.",
          "primaryButtonText": "See If You Qualify",
          "primaryButtonLink": "#eligibility",
          "imageUrl": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "wm1",
              "label": "Average Weight Loss in 6 Months",
              "value": "-15.8%"
            },
            {
              "id": "wm2",
              "label": "Muscle Mass Preservation Rate",
              "value": "92%"
            }
          ]
        }
      },
      {
        "id": "ft15-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Clinical Protocol Modules",
          "items": [
            {
              "id": "wm_s1",
              "title": "Physician-Prescribed GLP-1 Therapy",
              "description": "Personalized dosing of semaglutide or tirzepatide mitigating appetite and resetting leptin signaling."
            },
            {
              "id": "wm_s2",
              "title": "Resting Metabolic Rate (RMR) Testing",
              "description": "Accurate oxygen consumption calorimetry discovering your exact daily baseline caloric burn."
            },
            {
              "id": "wm_s3",
              "title": "Resistance Training for Sarcopenia Prevention",
              "description": "Coached progressive strength plans ensuring all lost weight is stored visceral fat, not lean muscle."
            }
          ]
        }
      },
      {
        "id": "ft15-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Stop Struggling Against Your Biology",
          "description": "Schedule a confidential telehealth or in-person consultation with our medical director.",
          "primaryButtonText": "Book Medical Consultation",
          "primaryButtonLink": "#eligibility"
        }
      },
      {
        "id": "ft15-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Metabolic Precision Weight Management",
          "copyrightText": "© 2026 Metabolic Precision Health. American Board of Obesity Medicine."
        }
      }
    ]
  },
  {
    "id": "fit-coach-01",
    "slug": "lifeforge-health-coaching",
    "name": "LifeForge Functional Health & Longevity Coaching",
    "description": "Executive health coaching addressing circadian sleep architecture, Oura ring recovery data, stress resilience, and sustainable habits.",
    "industryId": "fitness-wellness",
    "categoryId": "health-coaching",
    "collectionId": "health-coaching",
    "designStyle": "minimal-neutral",
    "tags": [
      "health coaching",
      "longevity",
      "sleep optimization",
      "biohacking",
      "habits",
      "wellness"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ft16-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "LIFEFORGE HEALTH",
          "primaryButtonText": "Apply for Coaching",
          "primaryButtonLink": "#apply",
          "navLinks": [
            {
              "label": "Framework",
              "href": "#framework"
            },
            {
              "label": "Wearable Integration",
              "href": "#wearables"
            },
            {
              "label": "Testimonials",
              "href": "#reviews"
            }
          ]
        }
      },
      {
        "id": "ft16-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "NBC-HWC Certified Health Coaches",
          "title": "High-Performance Wellness Built Around Your Busy Life",
          "subtitle": "We translate wearable biometric data from Whoop, Oura, and Apple Watch into daily micro-habits that double your energy, deepen deep sleep, and optimize stress resilience.",
          "primaryButtonText": "Schedule Free Strategy Call",
          "primaryButtonLink": "#apply",
          "imageUrl": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "hc1",
              "label": "Average Deep Sleep Increase",
              "value": "+45 Mins/Night"
            },
            {
              "id": "hc2",
              "label": "Client Accountability Retention",
              "value": "94%"
            }
          ]
        }
      },
      {
        "id": "ft16-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Pillars of Coaching",
          "items": [
            {
              "id": "hc_s1",
              "title": "Circadian Sleep Architecture Optimization",
              "description": "Optimizing light exposure, thermal bedrooms, and evening routines to maximize restorative REM sleep."
            },
            {
              "id": "hc_s2",
              "title": "Autonomic Nervous System & HRV Training",
              "description": "Heart rate variability tracking, resonance frequency breathing, and daytime stress reduction."
            },
            {
              "id": "hc_s3",
              "title": "Daily Asynchronous Wearable Review",
              "description": "Your coach reviews recovery scores daily, fine-tuning training strain and recovery protocols."
            }
          ]
        }
      },
      {
        "id": "ft16-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Operate at Your Absolute Peak Every Single Day",
          "description": "Limited to 20 executive coaching clients per quarter to ensure deep personalization.",
          "primaryButtonText": "Apply for 1-on-1 Health Coaching",
          "primaryButtonLink": "#apply"
        }
      },
      {
        "id": "ft16-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "LifeForge Functional Health Coaching",
          "copyrightText": "© 2026 LifeForge Coaching LLC. NBC-HWC Certified."
        }
      }
    ]
  },
  {
    "id": "fit-holistic-01",
    "slug": "solstice-holistic-wellness",
    "name": "Solstice Natural Healing & Acupuncture",
    "description": "Traditional Chinese medicine, acupuncture, herbal pharmacopeia, cupping therapy, and lymphatic drainage in a calm restorative setting.",
    "industryId": "fitness-wellness",
    "categoryId": "holistic-wellness",
    "collectionId": "holistic-health",
    "designStyle": "organic-natural",
    "tags": [
      "acupuncture",
      "holistic health",
      "chinese medicine",
      "cupping",
      "herbalism"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ft17-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "SOLSTICE HOLISTIC",
          "primaryButtonText": "Book Treatment",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Acupuncture",
              "href": "#acupuncture"
            },
            {
              "label": "Herbal Medicine",
              "href": "#herbs"
            },
            {
              "label": "Practitioners",
              "href": "#team"
            }
          ]
        }
      },
      {
        "id": "ft17-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Licensed Acupuncturists (L.Ac) & Herbalists",
          "title": "Ancient Wisdom for Modern Physical Harmony",
          "subtitle": "Restore your body’s natural self-healing capacity with ultra-gentle sterile hair-thin acupuncture, glass fire cupping, and bespoke raw herbal tea prescriptions.",
          "primaryButtonText": "Book Initial Acupuncture Visit",
          "primaryButtonLink": "#book",
          "imageUrl": "https://images.unsplash.com/photo-1512290900672-1f4a47690a61?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "hw1",
              "label": "Treated Patients Annually",
              "value": "3,400+"
            },
            {
              "id": "hw2",
              "label": "Herbal Formula Custom Blends",
              "value": "180 Botanicals"
            }
          ]
        }
      },
      {
        "id": "ft17-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "title": "Natural Healing Therapies",
          "items": [
            {
              "id": "hw_s1",
              "title": "Classical Japanese Acupuncture",
              "description": "Pain-free insertion balancing meridian flow for migraines, hormonal dysregulation, and joint pain."
            },
            {
              "id": "hw_s2",
              "title": "Traditional Fire Cupping & Gua Sha",
              "description": "Suction decompression drawing stale cellular waste and metabolic stagnation from tight back muscles."
            },
            {
              "id": "hw_s3",
              "title": "Bespoke Traditional Herbal Prescriptions",
              "description": "Tailored decoctions and granules supporting digestion, adrenal burnout, and peaceful sleep."
            }
          ]
        }
      },
      {
        "id": "ft17-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Relieve Pain and Stress Naturally",
          "description": "Initial 90-minute consultation includes full tongue and pulse diagnosis and your first treatment.",
          "primaryButtonText": "Schedule First Visit",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "ft17-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Solstice Natural Healing & Acupuncture",
          "copyrightText": "© 2026 Solstice Holistic Health. NCCAOM Board Certified."
        }
      }
    ]
  },
  {
    "id": "fit-endurance-01",
    "slug": "endurance-forge-triathlon-coaching",
    "name": "Endurance Forge Triathlon & Marathon Coaching",
    "description": "Data-driven endurance coaching with lactate threshold testing, TrainingPeaks power metrics, and aero bike fitting for Ironman athletes.",
    "industryId": "fitness-wellness",
    "categoryId": "fitness-coach",
    "collectionId": "athletic-box",
    "designStyle": "technology-gradient",
    "tags": [
      "triathlon",
      "marathon",
      "endurance coach",
      "ironman",
      "lactate testing",
      "cycling"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ft18-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "ENDURANCE FORGE",
          "badge": "USAT Level 3 Certified",
          "primaryButtonText": "Apply for Coaching",
          "primaryButtonLink": "#apply",
          "navLinks": [
            {
              "label": "Ironman Coaching",
              "href": "#triathlon"
            },
            {
              "label": "Lactate Testing",
              "href": "#lactate"
            },
            {
              "label": "Athlete Results",
              "href": "#results"
            }
          ]
        }
      },
      {
        "id": "ft18-hero",
        "type": "hero",
        "variant": "hero-cinematic-dark",
        "visible": true,
        "content": {
          "badge": "Data-Driven Physiological Training Plans",
          "title": "Break Your PRs with Precision Lactate and Power Pacing",
          "subtitle": "From qualifying for the Boston Marathon to finishing on the podium at Ironman Kona, our coaches calibrate your exact heart rate, wattage, and fueling zones.",
          "primaryButtonText": "Book Lactate Profile Test",
          "primaryButtonLink": "#apply",
          "imageUrl": "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "ef1",
              "label": "Kona Ironman Qualifiers",
              "value": "64 Athletes"
            },
            {
              "id": "ef2",
              "label": "Boston Marathon Qualifiers",
              "value": "180+ Runners"
            }
          ]
        }
      },
      {
        "id": "ft18-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "title": "Endurance Systems",
          "items": [
            {
              "id": "ef_s1",
              "title": "Blood Lactate Threshold Testing",
              "description": "Treadmill and Wahoo KICKR stepped tests pinpointing exact LT1 and LT2 metabolic transition zones."
            },
            {
              "id": "ef_s2",
              "title": "Dynamic TrainingPeaks Power Programming",
              "description": "Weekly adjusted workouts based on TSS, resting HRV, and recovery data."
            },
            {
              "id": "ef_s3",
              "title": "Race-Day Fueling & Sodium Osmolality Strategy",
              "description": "Calculating hourly grams of carbohydrates and milligrams of sodium to prevent bonking and cramps."
            }
          ]
        }
      },
      {
        "id": "ft18-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Turn Miles of Hard Training into Guaranteed Race-Day PRs",
          "description": "Schedule a free 30-minute season planning call with our head endurance coach.",
          "primaryButtonText": "Schedule Race Planning Call",
          "primaryButtonLink": "#apply"
        }
      },
      {
        "id": "ft18-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Endurance Forge Triathlon Coaching",
          "copyrightText": "© 2026 Endurance Forge Coaching. USA Triathlon Certified."
        }
      }
    ]
  },
  {
    "id": "fit-barre-01",
    "slug": "grace-core-barre-atelier",
    "name": "Grace & Core Isometric Barre Atelier",
    "description": "Chic Parisian ballet barre studio combining micro-isometric pulses, resistance bands, light weights, and posture lengthening.",
    "industryId": "fitness-wellness",
    "categoryId": "pilates-studio",
    "collectionId": "pilates-boutique",
    "designStyle": "soft-pastel",
    "tags": [
      "barre",
      "ballet workout",
      "pilates",
      "core sculpt",
      "isometric",
      "posture"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ft19-nav",
        "type": "navbar",
        "variant": "navbar-floating",
        "visible": true,
        "content": {
          "title": "GRACE & CORE BARRE",
          "primaryButtonText": "Book a Barre Spot",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Barre Formats",
              "href": "#classes"
            },
            {
              "label": "The Studio",
              "href": "#studio"
            },
            {
              "label": "Pricing Packs",
              "href": "#pricing"
            }
          ]
        }
      },
      {
        "id": "ft19-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Ballet-Inspired Isometric Conditioning",
          "title": "Micro-Pulses. Deep Muscle Burn. Graceful Carriage.",
          "subtitle": "A sun-drenched oak floor studio where tiny targeted movements at the ballet barre sculpt your glutes, thighs, core, and shoulders while improving spinal alignment.",
          "primaryButtonText": "Book First Barre Class ($22)",
          "primaryButtonLink": "#book",
          "imageUrl": "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "gc1",
              "label": "Handcrafted Oak Barres",
              "value": "4 Studio Walls"
            },
            {
              "id": "gc2",
              "label": "Average Muscle Burn Time",
              "value": "55 Mins"
            }
          ]
        }
      },
      {
        "id": "ft19-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Barre Class Offerings",
          "items": [
            {
              "id": "gc_s1",
              "title": "Classic Signature Barre Sculpt",
              "description": "The original method: thighs, seat, abs, and upper body working to fatigue, followed by deep stretches."
            },
            {
              "id": "gc_s2",
              "title": "Barre Cardio & Jump Interval",
              "description": "Low-impact gliding discs, light cardio bursts, and pulse sequences elevating endurance."
            },
            {
              "id": "gc_s3",
              "title": "Barre Stretch & Fascia Release",
              "description": "Foam rolling, yoga strap hamstrings openers, and restorative barre barre hangs."
            }
          ]
        }
      },
      {
        "id": "ft19-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Step Up to the Barre and Feel the Difference",
          "description": "Try our 3-Class Welcome Package and join our warm, supportive community.",
          "primaryButtonText": "Claim 3-Class Barre Pass",
          "primaryButtonLink": "#pricing"
        }
      },
      {
        "id": "ft19-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Grace & Core Isometric Barre Atelier",
          "copyrightText": "© 2026 Grace & Core Barre. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "fit-climb-01",
    "slug": "crux-summit-bouldering-gym",
    "name": "Crux & Summit Indoor Bouldering Gym",
    "description": "Premier indoor climbing and bouldering center with 16-foot competition walls, Kilter Boards, MoonBoard, and modern route setting.",
    "industryId": "fitness-wellness",
    "categoryId": "gym",
    "collectionId": "athletic-box",
    "designStyle": "minimal-neutral",
    "tags": [
      "bouldering",
      "climbing gym",
      "kilter board",
      "moonboard",
      "rock climbing"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ft20-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "CRUX & SUMMIT CLIMBING",
          "primaryButtonText": "Day Pass & Rental",
          "primaryButtonLink": "#pass",
          "navLinks": [
            {
              "label": "Walls & Route Setting",
              "href": "#walls"
            },
            {
              "label": "Training & Boards",
              "href": "#training"
            },
            {
              "label": "First Timers",
              "href": "#firsttime"
            }
          ]
        }
      },
      {
        "id": "ft20-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "18,000 Sq Ft of Seamless Bouldering Terrain",
          "title": "Solve Complex Physical Movement Puzzles in Mid-Air",
          "subtitle": "From beginner-friendly VB slabs to V12 comp roofs reset weekly by USAC Level 4 setters, plus adjustable LED Kilter and MoonBoards for serious finger strength.",
          "primaryButtonText": "Get Climbing Day Pass",
          "primaryButtonLink": "#pass",
          "imageUrl": "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "cl1",
              "label": "Bouldering Problems on Wall",
              "value": "250+ Routes"
            },
            {
              "id": "cl2",
              "label": "Safety Mats Thickness",
              "value": "16-Inch Flak"
            }
          ]
        }
      },
      {
        "id": "ft20-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Climbing & Training Zones",
          "items": [
            {
              "id": "cl_s1",
              "title": "World Cup Spec Bouldering Walls",
              "description": "Overhanging caves, top-out boulders, and technical balance slabs reset fresh every Tuesday."
            },
            {
              "id": "cl_s2",
              "title": "LED Kilter Board & MoonBoard Studio",
              "description": "Connect with your phone to illuminate thousands of benchmark problems set by world-class climbers."
            },
            {
              "id": "cl_s3",
              "title": "Climber Fitness & Fingerboard Loft",
              "description": "Campus rungs, Beastmaker hangboards, pull-up rigs, and kettlebells built for tendon power."
            }
          ]
        }
      },
      {
        "id": "ft20-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "New to Bouldering? No Harness or Knots Required.",
          "description": "Rent shoes and chalk at the front desk and start climbing within 10 minutes of arrival.",
          "primaryButtonText": "Claim First Timer Day Pass Package",
          "primaryButtonLink": "#pass"
        }
      },
      {
        "id": "ft20-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Crux & Summit Indoor Bouldering Gym",
          "copyrightText": "© 2026 Crux & Summit Climbing LLC. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "fit-spin-01",
    "slug": "cadence-pulse-cycle-studio",
    "name": "Cadence Pulse Immersive Cycle Studio",
    "description": "High-intensity indoor cycling theatre with concert audio, reactive LED light shows, clip-in shoes, and metric wattage tracking.",
    "industryId": "fitness-wellness",
    "categoryId": "gym",
    "collectionId": "athletic-box",
    "designStyle": "dark-cinematic",
    "tags": [
      "indoor cycling",
      "spin class",
      "spin studio",
      "cardio",
      "cycling theatre"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ft21-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "CADENCE PULSE CYCLE",
          "primaryButtonText": "Book a Bike",
          "primaryButtonLink": "#bike",
          "navLinks": [
            {
              "label": "Rides & Themes",
              "href": "#rides"
            },
            {
              "label": "Class Schedule",
              "href": "#schedule"
            },
            {
              "label": "Instructors",
              "href": "#team"
            }
          ]
        }
      },
      {
        "id": "ft21-hero",
        "type": "hero",
        "variant": "hero-cinematic-dark",
        "visible": true,
        "content": {
          "badge": "Stadium Seating • Stages SC3 Bikes",
          "title": "Heavy Bass. Dark Room. 45 Minutes of Pure Escape.",
          "subtitle": "Clip in and ride to the rhythm of pulse-pounding DJ sets with custom reactive lighting that matches your cadence, hill climbs, and sprint finishes.",
          "primaryButtonText": "Book First Ride ($18)",
          "primaryButtonLink": "#bike",
          "imageUrl": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "sp1",
              "label": "Stadium Cycle Capacity",
              "value": "48 Bikes"
            },
            {
              "id": "sp2",
              "label": "Audio Power",
              "value": "10,000 Watts"
            }
          ]
        }
      },
      {
        "id": "ft21-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "title": "Ride Formats",
          "items": [
            {
              "id": "sp_s1",
              "title": "Rhythm Pulse 45 (Beat-Driven)",
              "description": "Choreographed tap backs, pushups on the handlebars, and sprint tracks synced to the drop."
            },
            {
              "id": "sp_s2",
              "title": "Power Metrics & Wattage Intervals",
              "description": "Live leaderboard sprint zones and FTP tracking for cycling enthusiasts and athletes."
            },
            {
              "id": "sp_s3",
              "title": "Theme Rides: Throwbacks, EDM, & Pop",
              "description": "Curated one-hour playlist spectacles celebrating specific iconic artists and music festivals."
            }
          ]
        }
      },
      {
        "id": "ft21-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Complimentary Shoe Rental & Chilled Eucalyptus Towels",
          "description": "Everything you need for an unforgettable workout is waiting for you.",
          "primaryButtonText": "Reserve Your Bike Seat",
          "primaryButtonLink": "#bike"
        }
      },
      {
        "id": "ft21-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Cadence Pulse Cycle Studio",
          "copyrightText": "© 2026 Cadence Pulse Fitness. Ride together, shine together."
        }
      }
    ]
  },
  {
    "id": "fit-cali-01",
    "slug": "gravity-rebel-calisthenics",
    "name": "Gravity Rebel Street Workout Guild",
    "description": "Bodyweight calisthenics gym focusing on muscle-ups, handstands, human flags, planche progressions, and gymnastics rings.",
    "industryId": "fitness-wellness",
    "categoryId": "gym",
    "collectionId": "athletic-box",
    "designStyle": "brutalist-clean",
    "tags": [
      "calisthenics",
      "bodyweight fitness",
      "handstand",
      "muscle up",
      "planche",
      "gymnastics"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ft22-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "GRAVITY REBEL",
          "primaryButtonText": "Join Workshop",
          "primaryButtonLink": "#workshop",
          "navLinks": [
            {
              "label": "Skills & Progression",
              "href": "#skills"
            },
            {
              "label": "Open Jam Hours",
              "href": "#open"
            },
            {
              "label": "Coaches",
              "href": "#coaches"
            }
          ]
        }
      },
      {
        "id": "ft22-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Master Your Bodyweight Against Gravity",
          "title": "Defy Gravity. Build Real Gymnastic Strength and Control.",
          "subtitle": "No heavy weights or complicated machinery. Master strict pull-ups, freestanding handstands, front levers, and muscle-ups on wooden parallettes and ceiling rings.",
          "primaryButtonText": "Book Intro Calisthenics Class",
          "primaryButtonLink": "#workshop",
          "imageUrl": "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "gr1",
              "label": "Suspended Wood Ring Stations",
              "value": "20 Rings"
            },
            {
              "id": "gr2",
              "label": "Coached Skill Progressions",
              "value": "White to Black Band"
            }
          ]
        }
      },
      {
        "id": "ft22-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Skill Progressions",
          "items": [
            {
              "id": "gr_s1",
              "title": "Freestanding Handstand Foundations",
              "description": "Wrist prep, shoulder mobility, hollow body lines, wall kick-ups, and balance micro-adjustments."
            },
            {
              "id": "gr_s2",
              "title": "Strict Bar & Ring Muscle-Up Mastery",
              "description": "False grip strength, explosive high pull-ups, deep dips, and smooth transition drills."
            },
            {
              "id": "gr_s3",
              "title": "Front Lever & Planche Geometry",
              "description": "Straight-arm scapular retraction, band-assisted tuck holds, and core isometric compression."
            }
          ]
        }
      },
      {
        "id": "ft22-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Every Incredible Calisthenics Skill Starts with Step One",
          "description": "Our beginner coaches break down each skill into safe, achievable progressions.",
          "primaryButtonText": "Start Your Skill Journey",
          "primaryButtonLink": "#workshop"
        }
      },
      {
        "id": "ft22-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Gravity Rebel Street Workout Guild",
          "copyrightText": "© 2026 Gravity Rebel Fitness. Master your own weight."
        }
      }
    ]
  },
  {
    "id": "fit-aerial-01",
    "slug": "silk-suspended-aerial-studio",
    "name": "Silk & Suspended Aerial Yoga & Lyra",
    "description": "Aerial hammock yoga, lyra hoop acrobatics, suspended spinal decompression, and circus fitness in a high-ceiling loft.",
    "industryId": "fitness-wellness",
    "categoryId": "dance-fitness-studio",
    "collectionId": "dance-fitness",
    "designStyle": "luxury-editorial",
    "tags": [
      "aerial yoga",
      "aerial silks",
      "lyra hoop",
      "decompression",
      "circus arts"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ft23-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "SILK & SUSPENDED",
          "primaryButtonText": "Book Aerial Silk",
          "primaryButtonLink": "#silk",
          "navLinks": [
            {
              "label": "Aerial Silks & Hammock",
              "href": "#silks"
            },
            {
              "label": "Lyra Hoop",
              "href": "#lyra"
            },
            {
              "label": "Workshops",
              "href": "#workshops"
            }
          ]
        }
      },
      {
        "id": "ft23-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "20-Foot Steel Load-Bearing Rigging",
          "title": "Float Above the Floor. Decompress Your Spine. Fly.",
          "subtitle": "Suspend yourself in soft aerial hammocks to achieve effortless zero-compression inversions, deepen backbends, and build remarkable core and upper-body grip strength.",
          "primaryButtonText": "Book Intro Aerial Class",
          "primaryButtonLink": "#silk",
          "imageUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "sl1",
              "label": "Rigging Safety Factor",
              "value": "5,000 Lbs Rating"
            },
            {
              "id": "sl2",
              "label": "Maximum Students per Class",
              "value": "12 Silks"
            }
          ]
        }
      },
      {
        "id": "ft23-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "title": "Suspended Disciplines",
          "items": [
            {
              "id": "sl_s1",
              "title": "Aerial Hammock Yoga Decompression",
              "description": "Zero-gravity hip openers, gentle spinal inversions, and floating cocoon sound bath savasanas."
            },
            {
              "id": "sl_s2",
              "title": "Circus Lyra (Aerial Steel Hoop)",
              "description": "Spinning poses, knee hangs, and artistic transitions inside suspended circular steel apparatus."
            },
            {
              "id": "sl_s3",
              "title": "Aerial Silks Acrobatics Foundations",
              "description": "Foot locks, climbing technique, wrist wraps, and safe intro drops on dual silk fabrics."
            }
          ]
        }
      },
      {
        "id": "ft23-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Experience the Magic of Aerial Movement",
          "description": "No gymnastics background needed. Our beginner classes guide you through every wrap safely.",
          "primaryButtonText": "Book Intro Aerial Workshop",
          "primaryButtonLink": "#silk"
        }
      },
      {
        "id": "ft23-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Silk & Suspended Aerial Yoga Atelier",
          "copyrightText": "© 2026 Silk & Suspended Aerial Arts. Certified Aerial Yoga Academy."
        }
      }
    ]
  },
  {
    "id": "fit-titan-01",
    "slug": "titan-aesthetics-bodybuilding",
    "name": "Titan Aesthetics Pro Bodybuilding Gym",
    "description": "Old-school bodybuilding gym with heavy iron dumbbells up to 200 lbs, dual-cable crossover bays, contest prep posing room, and pro coaching.",
    "industryId": "fitness-wellness",
    "categoryId": "gym",
    "collectionId": "athletic-box",
    "designStyle": "dark-cinematic",
    "tags": [
      "bodybuilding",
      "gym",
      "contest prep",
      "hypertrophy",
      "heavy weights",
      "posing room"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ft24-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "TITAN AESTHETICS",
          "badge": "Home of Champions",
          "primaryButtonText": "Join the Iron Brotherhood",
          "primaryButtonLink": "#join",
          "navLinks": [
            {
              "label": "Gym Equipment",
              "href": "#gym"
            },
            {
              "label": "Posing Studio",
              "href": "#posing"
            },
            {
              "label": "Contest Prep",
              "href": "#prep"
            }
          ]
        }
      },
      {
        "id": "ft24-hero",
        "type": "hero",
        "variant": "hero-cinematic-dark",
        "visible": true,
        "content": {
          "badge": "Gold’s Mecca Energy • Serious Iron Only",
          "title": "Built by Competitors for Those Who Live to Lift",
          "subtitle": "Heavy iron dumbbells climbing to 200 lbs, chalk bins everywhere, Hammer Strength plate-loaded stations, and stage lighting in our competition posing room.",
          "primaryButtonText": "Get a Day Pass ($20)",
          "primaryButtonLink": "#join",
          "imageUrl": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "tt1",
              "label": "Max Dumbbell Pair",
              "value": "200 Lbs"
            },
            {
              "id": "tt2",
              "label": "IFBB Pro Athletes",
              "value": "24 Members"
            }
          ]
        }
      },
      {
        "id": "ft24-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "title": "Hardcore Gym Features",
          "items": [
            {
              "id": "tt_s1",
              "title": "Hammer Strength & Nautilus Plate-Loaded Bays",
              "description": "Iso-lateral chest presses, ground base jammers, and heavy hack squats with 45-degree angle tracks."
            },
            {
              "id": "tt_s2",
              "title": "Black-Out Stage Posing Room with Downlighting",
              "description": "Mirrored studio with warm theatrical downlighting matching NPC and IFBB stage conditions."
            },
            {
              "id": "tt_s3",
              "title": "Championship Contest Prep Coaching",
              "description": "Peak week protocols, water manipulation guidance, and weekly mandatory posing feedback."
            }
          ]
        }
      },
      {
        "id": "ft24-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Join the Most Respected Iron Gym in the Region",
          "description": "No annual contracts, no cancellation fees. Just hard work and genuine camaraderie.",
          "primaryButtonText": "Join Titan Aesthetics Now",
          "primaryButtonLink": "#join"
        }
      },
      {
        "id": "ft24-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Titan Aesthetics Pro Bodybuilding Gym",
          "copyrightText": "© 2026 Titan Aesthetics Gym. Where champions are forged."
        }
      }
    ]
  }
];
