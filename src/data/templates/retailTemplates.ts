import { TemplateConfig } from '../../types';

export const RETAIL_TEMPLATES: TemplateConfig[] = [
  {
    "id": "ret-ateliermode-01",
    "slug": "atelier-mode-couture-runway",
    "name": "Atelier Mode Runway & Ready-to-Wear",
    "description": "Monochrome haute couture runway lookbook, razor-sharp serif headlines, seasonal capsule drops, and luxury boutique cart.",
    "industryId": "retail-ecommerce",
    "categoryId": "fashion-store",
    "collectionId": "high-fashion-editorial",
    "designStyle": "high-fashion",
    "featured": true,
    "tags": [
      "fashion",
      "apparel",
      "runway",
      "couture",
      "luxury",
      "lookbook",
      "monochrome"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "rt1-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "ATELIER MODE",
          "badge": "FW26 COLLECTION",
          "primaryButtonText": "Shop Capsule",
          "primaryButtonLink": "#collection",
          "navLinks": [
            {
              "label": "Lookbook",
              "href": "#lookbook"
            },
            {
              "label": "Tailoring",
              "href": "#tailoring"
            },
            {
              "label": "Runway",
              "href": "#runway"
            },
            {
              "label": "Stockists",
              "href": "#stockists"
            }
          ]
        }
      },
      {
        "id": "rt1-hero",
        "type": "hero",
        "variant": "hero-fullscreen-photo",
        "visible": true,
        "content": {
          "badge": "Autumn / Winter Collection 2026",
          "title": "STARK GEOMETRY. MONOCHROME SILENCE.",
          "subtitle": "Structured wool overcoats, sculptural silk drape silhouettes, and handcrafted Italian nappa leather footwear.",
          "primaryButtonText": "Explore Capsule Drop",
          "primaryButtonLink": "#collection",
          "secondaryButtonText": "View Campaign Film",
          "secondaryButtonLink": "#runway",
          "imageUrl": "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80",
          "imageAlt": "Haute couture editorial model on runway in monochrome"
        }
      },
      {
        "id": "rt1-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Capsule Drops",
          "title": "Selected Runway Pieces",
          "subtitle": "Limited editions hand-numbered in our Paris atelier.",
          "items": [
            {
              "id": "fs1",
              "title": "The Double-Breasted Cashmere Trench",
              "description": "Hand-stitched in Florence with structured drop shoulders and horn buttons.",
              "price": "€1,850"
            },
            {
              "id": "fs2",
              "title": "Sculptural Asymmetric Silk Tunic",
              "description": "Raw mulberry silk with bias cut draping and architectural side split.",
              "price": "€920"
            },
            {
              "id": "fs3",
              "title": "Aniline Calfskin Combat Boot",
              "description": "Goodyear welted with lightweight vibram lug sole and polished metal aglets.",
              "price": "€780"
            }
          ]
        }
      },
      {
        "id": "rt1-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Join The Private Atelier Client List",
          "description": "Receive private access codes 24 hours prior to public seasonal capsule releases.",
          "primaryButtonText": "Request Client Invitation",
          "primaryButtonLink": "#collection"
        }
      },
      {
        "id": "rt1-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "ATELIER MODE PARIS",
          "copyrightText": "© 2026 Atelier Mode S.A. 18 Rue Cambon, Paris."
        }
      }
    ]
  },
  {
    "id": "ret-nordicthreads-01",
    "slug": "nordkapp-heavy-merino-knitwear",
    "name": "Nordkapp Heavy Merino Knitwear",
    "description": "Sustainable Norwegian organic Merino wool knitwear, cable-knit fishermen jumpers, and breathable cold-weather essentials.",
    "industryId": "retail-ecommerce",
    "categoryId": "fashion-store",
    "collectionId": "high-fashion-editorial",
    "designStyle": "minimal-neutral",
    "featured": false,
    "tags": [
      "knitwear",
      "wool",
      "merino",
      "sweater",
      "nordic fashion",
      "sustainable apparel",
      "winter wear"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "rt2-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "NORDKAPP // KNITWEAR",
          "primaryButtonText": "Shop Collection",
          "primaryButtonLink": "#shop",
          "navLinks": [
            {
              "label": "Heavy Wool",
              "href": "#heavy"
            },
            {
              "label": "Cardigans",
              "href": "#cardigans"
            },
            {
              "label": "Wool Traceability",
              "href": "#wool"
            }
          ]
        }
      },
      {
        "id": "rt2-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "100% Traceable Norwegian Merino Wool • Bergen Atelier",
          "title": "Built to Endure Decades of Arctic Winds and Ocean Spray",
          "subtitle": "Pure un-dyed Norwegian wool spun on heritage watermills, knitted into heavy cable sweaters that naturally repel rain, wind, and freezing cold.",
          "primaryButtonText": "Shop Heritage Jumpers",
          "primaryButtonLink": "#shop",
          "imageUrl": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Wool Fiber Micron",
              "value": "21.5 μm Soft"
            },
            {
              "id": "s2",
              "label": "Expected Garment Lifespan",
              "value": "25+ Years"
            },
            {
              "id": "s3",
              "label": "Zero Plastic Synthetics",
              "value": "100% Wool"
            }
          ]
        }
      },
      {
        "id": "rt2-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Signature Knits",
          "title": "Timeless Wool Craftsmanship",
          "subtitle": "Each sweater is spun, knit, and hand-inspected in Western Norway.",
          "items": [
            {
              "id": "nk1",
              "title": "The Lofoten Fisherman Rollneck",
              "description": "Heavyweight 5-gauge pure wool jumper featuring traditional ribbed collar and windproof knit density.",
              "price": "$290"
            },
            {
              "id": "nk2",
              "title": "Fjord Moss Stitch Cardigan",
              "description": "Oversized raglan sleeve cardigan with horn buttons and deep fleece-lined hand pockets.",
              "price": "$340"
            },
            {
              "id": "nk3",
              "title": "Seamless Merino Baselayer Crew",
              "description": "Ultra-fine 18.5 micron next-to-skin thermoregulating baselayer with zero chafing seams.",
              "price": "$145"
            }
          ]
        }
      },
      {
        "id": "rt2-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Invest in Knitwear Your Grandchildren Will Wear",
          "description": "Free carbon-neutral worldwide shipping on orders over $250. Free lifetime repairs guaranteed.",
          "primaryButtonText": "Shop All Knitwear",
          "primaryButtonLink": "#shop"
        }
      },
      {
        "id": "rt2-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "NORDKAPP WOOLEN MILLS",
          "copyrightText": "© 2026 Nordkapp Strikk AS. Bergen, Norway."
        }
      }
    ]
  },
  {
    "id": "ret-solsticeapparel-01",
    "slug": "solstice-technical-streetwear-lab",
    "name": "Solstice Technical Streetwear & Outerwear",
    "description": "Futuristic technical streetwear brand engineering waterproof 3-layer GORE-TEX shells, magnetic Fidlock cargo pants, and modular sling packs.",
    "industryId": "retail-ecommerce",
    "categoryId": "fashion-store",
    "collectionId": "high-fashion-editorial",
    "designStyle": "dark-cinematic",
    "featured": true,
    "tags": [
      "techwear",
      "streetwear",
      "goretex",
      "fidlock",
      "waterproof jacket",
      "cyberpunk",
      "modular"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "rt3-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "SOLSTICE // TECH",
          "primaryButtonText": "Shop Drop 04",
          "primaryButtonLink": "#drop",
          "navLinks": [
            {
              "label": "Weather Shells",
              "href": "#shells"
            },
            {
              "label": "Modular Pants",
              "href": "#pants"
            },
            {
              "label": "Sling Packs",
              "href": "#gear"
            }
          ]
        }
      },
      {
        "id": "rt3-hero",
        "type": "hero",
        "variant": "hero-fullscreen-photo",
        "visible": true,
        "content": {
          "badge": "Drop 04 // Urban Stormproof Systems",
          "title": "ENGINEERED FOR THE MONSOON CONCRETE",
          "subtitle": "3-layer waterproof membrane fabrics, laser-cut taped seams, magnetic Fidlock quick-release hardware, and anatomical articulation.",
          "primaryButtonText": "Access Drop 04",
          "primaryButtonLink": "#drop",
          "imageUrl": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Waterproof Hydrostatic Head",
              "value": "28,000mm"
            },
            {
              "id": "s2",
              "label": "Breathability Rating",
              "value": "25,000 g/m²"
            },
            {
              "id": "s3",
              "label": "Hardware Fasteners",
              "value": "German Fidlock"
            }
          ]
        }
      },
      {
        "id": "rt3-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Technical Hardware",
          "title": "Modular Utility for Extreme Urban Conditions",
          "subtitle": "Tested in typhoon downpours across Tokyo and London.",
          "items": [
            {
              "id": "st1",
              "title": "Interceptor 3L Storm Shell",
              "description": "Featuring waterproof Aquaguard zippers, packable storm hood, and internal gravity pocket phone ejection.",
              "price": "$580"
            },
            {
              "id": "st2",
              "title": "Modular Tactical Cargo Pant",
              "description": "Schoeller dynamic 4-way stretch fabric with detachable MOLLE pouches and articulated knee pleats.",
              "price": "$360"
            },
            {
              "id": "st3",
              "title": "X-Pac VX21 Crossbody Sling",
              "description": "Kevlar-reinforced waterproof sailcloth with magnetic key tether and padded tablet compartment.",
              "price": "$190"
            }
          ]
        }
      },
      {
        "id": "rt3-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Limited Technical Batch Releases",
          "description": "Each production run is capped at 300 serialized units to maintain surgical manufacturing standards.",
          "primaryButtonText": "Shop Available Stock",
          "primaryButtonLink": "#drop"
        }
      },
      {
        "id": "rt3-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "SOLSTICE TECHNICAL SYSTEMS",
          "copyrightText": "© 2026 Solstice Lab Ltd. Tokyo • Berlin • Seoul."
        }
      }
    ]
  },
  {
    "id": "ret-selvedgedenim-01",
    "slug": "ironloft-japanese-selvedge-denim",
    "name": "IronLoft Japanese Selvedge Denim",
    "description": "Heritage raw selvedge denim woven on vintage Toyoda shuttle looms in Okayama Japan, featuring chainstitch hems and heavyweight cotton.",
    "industryId": "retail-ecommerce",
    "categoryId": "clothing-brand",
    "collectionId": "high-fashion-editorial",
    "designStyle": "brutalist-clean",
    "featured": false,
    "tags": [
      "denim",
      "selvedge",
      "raw denim",
      "okayama",
      "vintage looms",
      "jeans",
      "menswear"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "rt4-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "IRONLOFT // DENIM",
          "primaryButtonText": "Shop Fits",
          "primaryButtonLink": "#fits",
          "navLinks": [
            {
              "label": "16oz Raw Jeans",
              "href": "#jeans"
            },
            {
              "label": "Type III Jackets",
              "href": "#jackets"
            },
            {
              "label": "The Loom Story",
              "href": "#loom"
            }
          ]
        }
      },
      {
        "id": "rt4-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Woven on Toyoda G3 Shuttle Looms in Kojima, Japan",
          "title": "Raw, Heavyweight Selvedge That Fades With Your Story",
          "subtitle": "No artificial pre-distressing or sandblasting. Pure rope-dyed indigo yarn woven under low tension to produce slubby, textured denim that evolves into a personal work of art.",
          "primaryButtonText": "Find Your Denim Fit",
          "primaryButtonLink": "#fits",
          "imageUrl": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Fabric Weight",
              "value": "16.5oz Heavy"
            },
            {
              "id": "s2",
              "label": "Vintage Toyoda Looms",
              "value": "1968 G3 Looms"
            },
            {
              "id": "s3",
              "label": "Indigo Dip Cycles",
              "value": "18x Rope Dye"
            }
          ]
        }
      },
      {
        "id": "rt4-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "The IronLoft Lineup",
          "title": "Crafted Without Compromise in Kojima",
          "subtitle": "Constructed with copper punch-through rivets and thick vegetable-tanned leather patches.",
          "items": [
            {
              "id": "il1",
              "title": "The G3 Relaxed Taper 16.5oz",
              "description": "High rise with roomy thighs tapering down to a narrow leg opening showing crisp red selvedge ID.",
              "price": "$285"
            },
            {
              "id": "il2",
              "title": "Type III Modified Trucker Jacket",
              "description": "Deep indigo warp with sulphur black weft, lined handwarmer pockets, and heavy iron donut buttons.",
              "price": "$345"
            },
            {
              "id": "il3",
              "title": "Union Special Chainstitch Hemming",
              "description": "Complimentary vintage Union Special 43200G chainstitch hemming delivering authentic roping fades.",
              "price": "Included"
            }
          ]
        }
      },
      {
        "id": "rt4-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Start Your Raw Indigo Journey Today",
          "description": "Free chainstitch hemming and personalized sizing consultation on all denim orders.",
          "primaryButtonText": "Explore Available Cuts",
          "primaryButtonLink": "#fits"
        }
      },
      {
        "id": "rt4-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "IRONLOFT DENIM CO.",
          "copyrightText": "© 2026 IronLoft Manufacturing Ltd. Kojima, Okayama • Tokyo."
        }
      }
    ]
  },
  {
    "id": "ret-linenliving-01",
    "slug": "brisa-natural-flax-linen",
    "name": "Brisa Natural Flax Linen Coastal Wear",
    "description": "Eco-conscious Mediterranean coastal wear brand crafting pre-washed natural flax linen shirts, drawstring trousers, and summer tunics.",
    "industryId": "retail-ecommerce",
    "categoryId": "clothing-brand",
    "collectionId": "high-fashion-editorial",
    "designStyle": "organic-natural",
    "featured": false,
    "tags": [
      "linen",
      "flax",
      "summer fashion",
      "resort wear",
      "sustainable fashion",
      "organic clothing"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "rt5-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "BRISA // LINEN",
          "primaryButtonText": "Shop Summer",
          "primaryButtonLink": "#shop",
          "navLinks": [
            {
              "label": "Linen Shirts",
              "href": "#shirts"
            },
            {
              "label": "Drawstring Pants",
              "href": "#pants"
            },
            {
              "label": "French Flax Heritage",
              "href": "#flax"
            }
          ]
        }
      },
      {
        "id": "rt5-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "100% Normandy Certified Organic Flax Linen",
          "title": "Effortless Breathability for Sun-Drenched Coastal Days",
          "subtitle": "Pre-washed with volcanic stones for an exceptionally soft, lived-in feel from the first wear. Naturally hypoallergenic, temperature-regulating, and biodegradable.",
          "primaryButtonText": "Explore Resort Collection",
          "primaryButtonLink": "#shop",
          "imageUrl": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Flax Origin",
              "value": "Normandy, France"
            },
            {
              "id": "s2",
              "label": "Water Savings vs Cotton",
              "value": "-85% Water"
            },
            {
              "id": "s3",
              "label": "Stone-Washed Softness",
              "value": "Pre-Shrunk"
            }
          ]
        }
      },
      {
        "id": "rt5-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Linen Essentials",
          "title": "Relaxed Tailoring for Warm Climates",
          "subtitle": "Designed to drape gracefully and breathe through the hottest days of summer.",
          "items": [
            {
              "id": "bl1",
              "title": "The Amalfi Camp Collar Shirt",
              "description": "Relaxed open collar cut from airy 160 GSM Normandy linen with natural mother-of-pearl buttons.",
              "price": "$140"
            },
            {
              "id": "bl2",
              "title": "Pleated Drawstring Seaside Trouser",
              "description": "Tailored front pleats meeting an elasticated drawstring waistband for breezy comfort and style.",
              "price": "$165"
            },
            {
              "id": "bl3",
              "title": "Oversized Boyfriend Linen Tunic",
              "description": "Longline tunic with rolled tab sleeves and side slit hems, perfect over swimwear or with trousers.",
              "price": "$150"
            }
          ]
        }
      },
      {
        "id": "rt5-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Upgrade Your Warm-Weather Wardrobe",
          "description": "Ethically crafted in Portugal in solar-powered family-owned textile studios.",
          "primaryButtonText": "Shop Linen Arrivals",
          "primaryButtonLink": "#shop"
        }
      },
      {
        "id": "rt5-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "BRISA LINEN CO.",
          "copyrightText": "© 2026 Brisa Textiles Lda. Porto • Palma de Mallorca."
        }
      }
    ]
  },
  {
    "id": "ret-velvetnight-01",
    "slug": "noir-et-nacre-evening-gowns",
    "name": "Noir & Nacre Bespoke Eveningwear",
    "description": "Bespoke silk evening gowns, hand-embellished crystal corsets, and red-carpet couture tailored in Milan for galas and opera evenings.",
    "industryId": "retail-ecommerce",
    "categoryId": "clothing-brand",
    "collectionId": "high-fashion-editorial",
    "designStyle": "luxury-editorial",
    "featured": true,
    "tags": [
      "evening gowns",
      "couture",
      "red carpet",
      "silk gown",
      "corsetry",
      "milan couture",
      "formalwear"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "rt6-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "NOIR & NACRE",
          "primaryButtonText": "Book Fitting",
          "primaryButtonLink": "#fitting",
          "navLinks": [
            {
              "label": "Gala Collection",
              "href": "#gowns"
            },
            {
              "label": "Corsetry",
              "href": "#corsets"
            },
            {
              "label": "Milan Atelier",
              "href": "#atelier"
            }
          ]
        }
      },
      {
        "id": "rt6-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Milanese Haute Couture • By Private Appointment",
          "title": "Gowns Sculpted in Silk, Velvet, and Luminous Shadow",
          "subtitle": "Hand-draped Como silk faille, internal boned corsetry engineered to flatter every curve, and hours of hand-stitched Swarovski crystals creating unforgettable red-carpet moments.",
          "primaryButtonText": "View Evening Collection",
          "primaryButtonLink": "#gowns",
          "imageUrl": "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Hand-Stitched Hours / Gown",
              "value": "120+ Hrs"
            },
            {
              "id": "s2",
              "label": "Pure Como Silk Faille",
              "value": "100% Italian"
            },
            {
              "id": "s3",
              "label": "Cannes & Met Gala Appearances",
              "value": "28 Gowns"
            }
          ]
        }
      },
      {
        "id": "rt6-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "Couture Creations",
          "title": "The Architecture of Evening Splendor",
          "subtitle": "Every creation begins with an individual muslin fitting in Milan or New York.",
          "items": [
            {
              "id": "nn1",
              "title": "The Midnight Velvet Column Gown",
              "description": "Deep obsidian silk velvet with sweeping train, architectural shoulder drapes, and concealed thigh slit.",
              "price": "€3,400"
            },
            {
              "id": "nn2",
              "title": "Crystal-Embroidered Corset Tulle Gown",
              "description": "Multi-layered smokey quartz illusion tulle with hand-embroidered micro-beading and structured Victorian stays.",
              "price": "€4,800"
            },
            {
              "id": "nn3",
              "title": "Liquid Gold Metallic Lamé Slip",
              "description": "Bias-cut metallic silk lamé that cascades like liquid sunlight with cowl backline.",
              "price": "€2,600"
            }
          ]
        }
      },
      {
        "id": "rt6-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Commission Your Custom Red-Carpet Silhouette",
          "description": "Our senior couturières travel worldwide for private fittings with 8 weeks lead time.",
          "primaryButtonText": "Request Private Couture Consultation",
          "primaryButtonLink": "#fitting"
        }
      },
      {
        "id": "rt6-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "NOIR & NACRE HAUTE COUTURE",
          "copyrightText": "© 2026 Noir & Nacre S.r.l. Via Montenapoleone, Milano • New York."
        }
      }
    ]
  },
  {
    "id": "ret-leathersmith-01",
    "slug": "tanner-and-hide-handmade-leather",
    "name": "Tanner & Hide Heritage Leathercraft",
    "description": "Artisanal leather goods atelier crafting vegetable-tanned Italian leather briefcases, duffel bags, wallets, and brass-buckled belts.",
    "industryId": "retail-ecommerce",
    "categoryId": "boutique",
    "collectionId": "high-fashion-editorial",
    "designStyle": "minimal-neutral",
    "featured": false,
    "tags": [
      "leather goods",
      "leather bag",
      "briefcase",
      "handmade leather",
      "tuscany leather",
      "wallets",
      "patina"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "rt7-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "TANNER & HIDE",
          "primaryButtonText": "Shop Goods",
          "primaryButtonLink": "#shop",
          "navLinks": [
            {
              "label": "Briefcases",
              "href": "#briefcases"
            },
            {
              "label": "Weekenders",
              "href": "#weekenders"
            },
            {
              "label": "Vegetable Tanning",
              "href": "#tanning"
            }
          ]
        }
      },
      {
        "id": "rt7-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Consorzio Vera Pelle Italiana Conciata al Vegetale",
          "title": "Full-Grain Leather That Grows More Beautiful Every Year",
          "subtitle": "Tanned using chestnut and mimosa bark extracts in Santa Croce sull’Arno. Saddle-stitched by hand with waxed linen thread to survive a lifetime of journeys.",
          "primaryButtonText": "Explore Leather Collection",
          "primaryButtonLink": "#shop",
          "imageUrl": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Tanning Duration",
              "value": "60 Days Oak Bark"
            },
            {
              "id": "s2",
              "label": "Warranty Duration",
              "value": "100-Year Guarantee"
            },
            {
              "id": "s3",
              "label": "Hardware Solid Metal",
              "value": "Sand-Cast Brass"
            }
          ]
        }
      },
      {
        "id": "rt7-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Heritage Goods",
          "title": "Handcrafted With Uncompromising Integrity",
          "subtitle": "No bonded leather, cardboard stiffeners, or plastic edge paints.",
          "items": [
            {
              "id": "th1",
              "title": "The Architect Executive Briefcase",
              "description": "Dual brass tuck-lock closures, laptop sleeve, and burnished beeswax edges that will never crack.",
              "price": "$620"
            },
            {
              "id": "th2",
              "title": "The 48-Hour Heritage Weekender",
              "description": "Generous full-grain luggage bag with reinforced double base, YKK Excella zippers, and padded shoulder strap.",
              "price": "$780"
            },
            {
              "id": "th3",
              "title": "Minimalist Bifold Card Wallet",
              "description": "Ultra-slim profile holding 8 cards and cash, hand-saddle stitched with French fil au chinois thread.",
              "price": "$95"
            }
          ]
        }
      },
      {
        "id": "rt7-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Carry a Piece of Living Leather Craftsmanship",
          "description": "Complimentary heat-stamped monogramming included with all bag orders.",
          "primaryButtonText": "Shop All Leather Pieces",
          "primaryButtonLink": "#shop"
        }
      },
      {
        "id": "rt7-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "TANNER & HIDE LEATHERMAKERS",
          "copyrightText": "© 2026 Tanner & Hide Co. Florence • Boston."
        }
      }
    ]
  },
  {
    "id": "ret-curatedwardrobe-01",
    "slug": "minimal-capsule-wardrobe-studio",
    "name": "The Minimal Capsule Wardrobe Studio",
    "description": "Personalized capsule wardrobe curation service delivering 10 interchangeable minimalist pieces per season designed for infinite outfits.",
    "industryId": "retail-ecommerce",
    "categoryId": "boutique",
    "collectionId": "high-fashion-editorial",
    "designStyle": "editorial-magazine",
    "featured": false,
    "tags": [
      "capsule wardrobe",
      "minimalism",
      "stylist",
      "slow fashion",
      "personal styling",
      "wardrobe subscription"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "rt8-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "THE MINIMAL CAPSULE",
          "primaryButtonText": "Start Styling Quiz",
          "primaryButtonLink": "#quiz",
          "navLinks": [
            {
              "label": "The 10 Pieces",
              "href": "#system"
            },
            {
              "label": "Lookbook Combinations",
              "href": "#looks"
            },
            {
              "label": "Stylist Roster",
              "href": "#stylists"
            }
          ]
        }
      },
      {
        "id": "rt8-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "10 Garments • 30+ Outfits • Zero Wardrobe Decision Fatigue",
          "title": "Fewer Clothes. Effortless Elegance. Endless Combinations.",
          "subtitle": "We curate cohesive seasonal capsule wardrobes matching your body architecture and palette, cutting clutter while ensuring you look flawlessly put together every morning.",
          "primaryButtonText": "Take The Wardrobe Quiz",
          "primaryButtonLink": "#quiz",
          "imageUrl": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Average Morning Time Saved",
              "value": "18 Min / Day"
            },
            {
              "id": "s2",
              "label": "Interchangeable Outfits",
              "value": "32+ Looks"
            },
            {
              "id": "s3",
              "label": "Client Satisfaction Rating",
              "value": "98.6%"
            }
          ]
        }
      },
      {
        "id": "rt8-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "The Capsule Methodology",
          "title": "Curated Simplicity Designed for Real Life",
          "subtitle": "A dedicated stylist matches your lifestyle, color season, and professional dress code.",
          "items": [
            {
              "id": "mc1",
              "title": "Personal Color & Body Silhouette Audit",
              "description": "1-on-1 virtual consultation determining your ideal contrast levels, proportions, and neutral palette."
            },
            {
              "id": "mc2",
              "title": "The Core 10 Seasonal Garment Box",
              "description": "Tailored wool blazers, silk tees, crisp poplins, and fluid trousers that all pair with each other without clash."
            },
            {
              "id": "mc3",
              "title": "Digital Lookbook App on Your Phone",
              "description": "Access a private interactive lookbook showing exactly what shoes, jewelry, and coat to pair each day."
            }
          ]
        }
      },
      {
        "id": "rt8-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Transform Your Closet into a Calm Sanctuary",
          "description": "Capsule boxes ship quarterly with free exchanges and in-home fitting guarantee.",
          "primaryButtonText": "Begin Your Capsule Journey",
          "primaryButtonLink": "#quiz"
        }
      },
      {
        "id": "rt8-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "THE MINIMAL CAPSULE STUDIO",
          "copyrightText": "© 2026 Minimal Capsule Studio Inc. New York • London."
        }
      }
    ]
  },
  {
    "id": "ret-vintagedesigner-01",
    "slug": "archive-90s-luxury-consignment",
    "name": "Archive 90s Collector Fashion & Consignment",
    "description": "Curated archive and authenticated resale salon dealing in rare 1990s and 2000s runway pieces from Maison Margiela, Helmut Lang, and Yohji Yamamoto.",
    "industryId": "retail-ecommerce",
    "categoryId": "boutique",
    "collectionId": "high-fashion-editorial",
    "designStyle": "bold-creative",
    "featured": false,
    "tags": [
      "vintage designer",
      "archival fashion",
      "helmut lang",
      "margiela",
      "runway fashion",
      "consignment",
      "resale"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "rt9-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "ARCHIVE // 90S",
          "primaryButtonText": "Shop Archive",
          "primaryButtonLink": "#vault",
          "navLinks": [
            {
              "label": "The Vault",
              "href": "#vault"
            },
            {
              "label": "Designers",
              "href": "#designers"
            },
            {
              "label": "Consign Pieces",
              "href": "#consign"
            }
          ]
        }
      },
      {
        "id": "rt9-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "100% Certified Physical Authentication • Museum Grade",
          "title": "Fashion History Preserved. Cult Runway Rarities.",
          "subtitle": "The premier destination for collectors of deconstructed fashion, bondage straps, raw hems, and avant-garde runway grails from fashion’s most revolutionary era.",
          "primaryButtonText": "Explore Archival Vault",
          "primaryButtonLink": "#vault",
          "imageUrl": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Archival Runway Rarities",
              "value": "850+ Pieces"
            },
            {
              "id": "s2",
              "label": "Multi-Point Authenticity Check",
              "value": "18 Factors"
            },
            {
              "id": "s3",
              "label": "Collectors Worldwide",
              "value": "14,000+"
            }
          ]
        }
      },
      {
        "id": "rt9-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Vault Highlights",
          "title": "Grail Pieces Sourced from Private European Closets",
          "subtitle": "Each garment includes physical forensic certificate of authenticity and provenance dossier.",
          "items": [
            {
              "id": "ar1",
              "title": "Helmut Lang 1999 Astro Moto Biker",
              "description": "Museum condition ballistic nylon biker jacket with internal backpack carry straps and collar shearling.",
              "price": "$3,800"
            },
            {
              "id": "ar2",
              "title": "Maison Martin Margiela 1998 Artisanal Knit",
              "description": "Hand-knitted socks repurposed into a sculptural cropped sweater from the iconic white label era.",
              "price": "$2,900"
            },
            {
              "id": "ar3",
              "title": "Raf Simons 2002 Virginia Creeper Raglan",
              "description": "Acid-treated distressed college raglan crewneck from the historic autumn/winter collection.",
              "price": "$4,200"
            }
          ]
        }
      },
      {
        "id": "rt9-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Have Archival Designer Clothing to Consign?",
          "description": "We offer industry-leading 85% payouts on museum-grade 1990s and 2000s runway pieces.",
          "primaryButtonText": "Submit Consignment Assessment",
          "primaryButtonLink": "#consign"
        }
      },
      {
        "id": "rt9-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "ARCHIVE 90S RUNWAY CONSIGNMENT",
          "copyrightText": "© 2026 Archive 90s Ltd. Antwerp • Paris • Tokyo."
        }
      }
    ]
  },
  {
    "id": "ret-aureliajewels-01",
    "slug": "aurelia-fine-diamonds-and-gold",
    "name": "Aurelia Fine Jewelry & Lab Diamonds",
    "description": "Modern fine jewelry boutique specializing in 100% recycled 18k solid gold, conflict-free certified lab diamonds, and custom engagement rings.",
    "industryId": "retail-ecommerce",
    "categoryId": "jewelry-store",
    "collectionId": "high-fashion-editorial",
    "designStyle": "luxury-editorial",
    "featured": true,
    "tags": [
      "jewelry",
      "diamonds",
      "lab diamonds",
      "18k gold",
      "engagement ring",
      "wedding band",
      "fine jewelry"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "rt10-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "AURELIA // FINE JEWELS",
          "primaryButtonText": "Design Custom Ring",
          "primaryButtonLink": "#custom",
          "navLinks": [
            {
              "label": "Engagement",
              "href": "#rings"
            },
            {
              "label": "Solid Gold Chains",
              "href": "#chains"
            },
            {
              "label": "Lab Diamond Ethics",
              "href": "#ethics"
            }
          ]
        }
      },
      {
        "id": "rt10-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "100% Recycled 18K Solid Gold • Carbon-Neutral Lab Diamonds",
          "title": "Heirloom Fine Jewelry Crafted for Conscientious Modern Lovers",
          "subtitle": "Zero mining compromise. Chemical, optical, and physical perfection. Hand-set by master stone setters in our New York studio.",
          "primaryButtonText": "Explore Engagement Rings",
          "primaryButtonLink": "#rings",
          "imageUrl": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Diamond Clarity Rating",
              "value": "VVS1 / VVS2 Only"
            },
            {
              "id": "s2",
              "label": "Gold Purity",
              "value": "18K Solid Gold"
            },
            {
              "id": "s3",
              "label": "Diamond Warranty",
              "value": "Lifetime Guarantee"
            }
          ]
        }
      },
      {
        "id": "rt10-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "Signature Creations",
          "title": "Modern Elegance That Never Diminishes",
          "subtitle": "Never gold-plated. Solid gold that withstands showers, oceans, and daily life.",
          "items": [
            {
              "id": "aj1",
              "title": "The Solstice Oval Solitaire Ring",
              "description": "3.2 carat elongated brilliant lab diamond set in delicate claw prongs with hidden diamond gallery wrap.",
              "price": "$4,200"
            },
            {
              "id": "aj2",
              "title": "Heavy Beveled 18K Curb Chain",
              "description": "Solid 4.5mm Italian link chain with secure lobster lock and high mirror polish, weighty and tactile.",
              "price": "$1,850"
            },
            {
              "id": "aj3",
              "title": "Emerald-Cut Diamond Tennis Bracelet",
              "description": "6.5 total carats of bezel-set rectangular emerald diamonds with safety clasp mechanism.",
              "price": "$5,900"
            }
          ]
        }
      },
      {
        "id": "rt10-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Design Your Dream Ring with Master Jewelers",
          "description": "Complimentary CAD renders and wax 3D models before final gold casting.",
          "primaryButtonText": "Schedule Ring Consultation",
          "primaryButtonLink": "#custom"
        }
      },
      {
        "id": "rt10-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "AURELIA FINE JEWELRY",
          "copyrightText": "© 2026 Aurelia Fine Jewelry Inc. New York • London."
        }
      }
    ]
  },
  {
    "id": "ret-silversmith-01",
    "slug": "lunula-sculptural-sterling-silver",
    "name": "Lunula Sculptural Sterling Silver Studio",
    "description": "Heavy architectural .925 sterling silver jewelry hand-carved in lost wax, featuring brutalist molten cuffs, signet rings, and textured chains.",
    "industryId": "retail-ecommerce",
    "categoryId": "jewelry-store",
    "collectionId": "high-fashion-editorial",
    "designStyle": "brutalist-clean",
    "featured": false,
    "tags": [
      "silver jewelry",
      "sterling silver",
      "signet ring",
      "brutalist jewelry",
      "hand forged",
      "cuff bracelet"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "rt11-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "LUNULA // SILVER",
          "primaryButtonText": "Shop Forged Silver",
          "primaryButtonLink": "#shop",
          "navLinks": [
            {
              "label": "Molten Rings",
              "href": "#rings"
            },
            {
              "label": "Heavy Cuffs",
              "href": "#cuffs"
            },
            {
              "label": "Lost-Wax Method",
              "href": "#craft"
            }
          ]
        }
      },
      {
        "id": "rt11-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Lost-Wax Casting in Recycled .925 Sterling Silver",
          "title": "Brutalist Weight. Molten Texture. Unpolished Silver.",
          "subtitle": "We embrace raw volcanic pitting, oxidation patinas, and substantial hand-feel. Heavy solid sterling silver sculpted to feel like ancient relics excavated from the future.",
          "primaryButtonText": "View Silver Catalog",
          "primaryButtonLink": "#shop",
          "imageUrl": "https://images.unsplash.com/photo-1611591475819-79b8b1a72645?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Silver Purity",
              "value": "92.5% Solid"
            },
            {
              "id": "s2",
              "label": "Average Cuff Weight",
              "value": "68 Grams"
            },
            {
              "id": "s3",
              "label": "Crafting Method",
              "value": "100% Hand-Cast"
            }
          ]
        }
      },
      {
        "id": "rt11-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Silver Artifacts",
          "title": "Substantial Metal Architecture",
          "subtitle": "Never hollowed out. Solid silver that carries weight and character.",
          "items": [
            {
              "id": "ls1",
              "title": "The Molten Crater Heavy Signet",
              "description": "Massive signet ring featuring distressed molten surface textures and blackened recessed oxidation.",
              "price": "$260"
            },
            {
              "id": "ls2",
              "title": "Armor Segmented Cuff Bracelet",
              "description": "Thick hand-hammered sterling silver cuff with raw beveled edges, contoured to fit the wrist bone.",
              "price": "$420"
            },
            {
              "id": "ls3",
              "title": "Heavy Hand-Forged Cable Chain",
              "description": "Individually soldered and textured heavy silver links finished with custom toggle latch mechanism.",
              "price": "$380"
            }
          ]
        }
      },
      {
        "id": "rt11-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Wear Heavy Silver Crafted for Life",
          "description": "Each piece is individually cast and hand-oxidized in our Berlin metal studio.",
          "primaryButtonText": "Shop Available Pieces",
          "primaryButtonLink": "#shop"
        }
      },
      {
        "id": "rt11-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "LUNULA METALS BERLIN",
          "copyrightText": "© 2026 Lunula Silversmiths GmbH. Berlin • Stockholm."
        }
      }
    ]
  },
  {
    "id": "ret-gemheritage-01",
    "slug": "ceylon-sapphire-gemstone-vault",
    "name": "Ceylon Sapphire & Rare Gemstone Vault",
    "description": "High jewelry salon specializing in certified unheated royal blue Ceylon sapphires, Colombian emeralds, and bespoke cocktail rings.",
    "industryId": "retail-ecommerce",
    "categoryId": "jewelry-store",
    "collectionId": "high-fashion-editorial",
    "designStyle": "luxury-editorial",
    "featured": false,
    "tags": [
      "sapphires",
      "gemstones",
      "emeralds",
      "high jewelry",
      "cocktail ring",
      "rare gems",
      "ceylon"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "rt12-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "CEYLON VAULT",
          "primaryButtonText": "View Gem Inventory",
          "primaryButtonLink": "#vault",
          "navLinks": [
            {
              "label": "Royal Blue Sapphires",
              "href": "#sapphires"
            },
            {
              "label": "Colombian Emeralds",
              "href": "#emeralds"
            },
            {
              "label": "GIA & Gübelin Reports",
              "href": "#reports"
            }
          ]
        }
      },
      {
        "id": "rt12-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Unheated Natural Sri Lankan Sapphires • Gübelin Certified",
          "title": "The Deep Velvet Blue of Rare Natural Sapphires",
          "subtitle": "Untouched by artificial thermal treatment. Sourced directly from historical gem gravels in Ratnapura Sri Lanka, set in platinum and 18k yellow gold high jewelry.",
          "primaryButtonText": "Explore Gemstone Vault",
          "primaryButtonLink": "#vault",
          "imageUrl": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Unheated Status",
              "value": "100% Natural"
            },
            {
              "id": "s2",
              "label": "Color Grade",
              "value": "Royal Blue & Cornflower"
            },
            {
              "id": "s3",
              "label": "Independent Gem Labs",
              "value": "GIA & Gübelin"
            }
          ]
        }
      },
      {
        "id": "rt12-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "High Jewelry Pieces",
          "title": "Collector-Grade Natural Gemstones",
          "subtitle": "Every stone is accompanied by dual independent gemological laboratory reports.",
          "items": [
            {
              "id": "gv1",
              "title": "5.8 Carat Royal Blue Cushion Sapphire Ring",
              "description": "Unheated Ceylon sapphire flanked by tapered trapezoid diamonds set in platinum hand-pierced basket.",
              "price": "$28,000"
            },
            {
              "id": "gv2",
              "title": "Muzo Minor-Oil Colombian Emerald Pendant",
              "description": "3.4 carat luminous vivid green emerald framed in warm 18k yellow gold with fine cable chain.",
              "price": "$19,500"
            },
            {
              "id": "gv3",
              "title": "Padparadscha Sunset Sapphire Drop Earrings",
              "description": "Rare lotus-pink-orange unheated sapphires suspended beneath brilliant diamond clusters.",
              "price": "$16,000"
            }
          ]
        }
      },
      {
        "id": "rt12-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Acquire Rare Earth Gemstones with Provenance",
          "description": "Our private gemologists offer secure insured worldwide shipping and private viewing appointments.",
          "primaryButtonText": "Inquire with Head Gemologist",
          "primaryButtonLink": "#vault"
        }
      },
      {
        "id": "rt12-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "CEYLON GEMSTONE VAULT",
          "copyrightText": "© 2026 Ceylon Gemstone Vault Ltd. Colombo • Geneva • London."
        }
      }
    ]
  },
  {
    "id": "ret-audiophilegear-01",
    "slug": "sonuspure-vacuum-tube-audio",
    "name": "SonusPure Vacuum Tube Hi-Fi & Audio",
    "description": "Artisanal audiophile boutique engineering point-to-point hand-wired vacuum tube headphone amplifiers, planar magnetic headphones, and DACs.",
    "industryId": "retail-ecommerce",
    "categoryId": "electronics-store",
    "collectionId": "high-fashion-editorial",
    "designStyle": "dark-cinematic",
    "featured": true,
    "tags": [
      "audiophile",
      "vacuum tube",
      "hi-fi",
      "headphones",
      "amplifier",
      "tube amp",
      "dac"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "rt13-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "SONUSPURE // AUDIO",
          "primaryButtonText": "Shop Amplifiers",
          "primaryButtonLink": "#shop",
          "navLinks": [
            {
              "label": "Tube Amps",
              "href": "#amps"
            },
            {
              "label": "Planar Headphones",
              "href": "#headphones"
            },
            {
              "label": "R-2R DACs",
              "href": "#dacs"
            }
          ]
        }
      },
      {
        "id": "rt13-hero",
        "type": "hero",
        "variant": "hero-fullscreen-photo",
        "visible": true,
        "content": {
          "badge": "Point-to-Point Hand-Wired in Vermont • NOS Western Electric Tubes",
          "title": "Liquid Warmth, Holographic Soundstage, Acoustic Truth",
          "subtitle": "Rediscover your favorite master recordings. Hand-wound Toroidal transformers, oiled American walnut chassis, and genuine 300B triode tubes delivering spine-tingling acoustic realism.",
          "primaryButtonText": "Experience SonusPure",
          "primaryButtonLink": "#shop",
          "imageUrl": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Signal-to-Noise Ratio",
              "value": "118 dB Clean"
            },
            {
              "id": "s2",
              "label": "Wiring Architecture",
              "value": "Point-to-Point Silver"
            },
            {
              "id": "s3",
              "label": "Chassis Material",
              "value": "Solid Walnut & Billet Alum"
            }
          ]
        }
      },
      {
        "id": "rt13-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Audiophile Instruments",
          "title": "Pure Analog Euphoria",
          "subtitle": "Every unit is burned in for 100 hours and bench-tested with Audio Precision analyzers.",
          "items": [
            {
              "id": "sp1",
              "title": "The Aether 300B Triode Headphone Amp",
              "description": "Single-ended Class-A tube amplifier driving even the most demanding 600-ohm headphones with effortless authority.",
              "price": "$2,850"
            },
            {
              "id": "sp2",
              "title": "Elysium Open-Back Planar Headphones",
              "description": "Ultra-thin nano-scale diaphragms encased in milled cherry wood cups with lambskin memory foam ear pads.",
              "price": "$1,650"
            },
            {
              "id": "sp3",
              "title": "Ladder R-2R Discrete Resistor DAC",
              "description": "Discrete resistor ladder network preserving authentic musical micro-dynamics without harsh digital glare.",
              "price": "$1,950"
            }
          ]
        }
      },
      {
        "id": "rt13-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Hear What You Have Been Missing",
          "description": "Try SonusPure gear in your home acoustic setup with our 30-day risk-free audition guarantee.",
          "primaryButtonText": "Start Your 30-Day In-Home Audition",
          "primaryButtonLink": "#shop"
        }
      },
      {
        "id": "rt13-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "SONUSPURE AUDIO LABS",
          "copyrightText": "© 2026 SonusPure Acoustics Corp. Burlington, Vermont • Tokyo."
        }
      }
    ]
  },
  {
    "id": "ret-smartgadget-01",
    "slug": "lumina-smart-home-automation",
    "name": "Lumina Next-Gen Smart Home Controls",
    "description": "Minimalist smart home hardware company engineering knurled brass rotary dials, tactile wall controllers, and Matter-compatible ambient sensors.",
    "industryId": "retail-ecommerce",
    "categoryId": "electronics-store",
    "collectionId": "high-fashion-editorial",
    "designStyle": "glass-interface",
    "featured": false,
    "tags": [
      "smart home",
      "iot",
      "hardware",
      "minimalist switch",
      "matter protocol",
      "home automation"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "rt14-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "LUMINA // CONTROLS",
          "primaryButtonText": "Build Home Kit",
          "primaryButtonLink": "#kit",
          "navLinks": [
            {
              "label": "Rotary Dials",
              "href": "#dials"
            },
            {
              "label": "Touch Plates",
              "href": "#plates"
            },
            {
              "label": "Matter Standard",
              "href": "#matter"
            }
          ]
        }
      },
      {
        "id": "rt14-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Thread & Matter 2.0 Certified • Zero Cloud Dependency",
          "title": "Tactile Architectural Controls for the Modern Smart Home",
          "subtitle": "Replace cheap plastic light switches with precision-machined unlacquered brass dials, OLED micro-displays, and haptic feedback clicks that make controlling your environment satisfying.",
          "primaryButtonText": "Explore Control Hardware",
          "primaryButtonLink": "#kit",
          "imageUrl": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Local Control Latency",
              "value": "<5ms Instant"
            },
            {
              "id": "s2",
              "label": "Hardware Finishes",
              "value": "Solid Brass & Anodized"
            },
            {
              "id": "s3",
              "label": "Smart Ecosystems",
              "value": "Apple, Google, Home Assistant"
            }
          ]
        }
      },
      {
        "id": "rt14-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "badge": "Hardware Lineup",
          "title": "Form Meets Functional Brilliance",
          "subtitle": "Engineered for seamless architectural integration into standard wall gang boxes.",
          "items": [
            {
              "id": "lm1",
              "title": "The Halo Knurled Rotary Dial",
              "description": "Smooth magnetic resistance dial controlling dimming, motorized shades, and multi-room audio volume.",
              "price": "$180"
            },
            {
              "id": "lm2",
              "title": "Quad-Scene Tactile Wall Keypad",
              "description": "Laser-etched metal buttons with subtle LED status indicators triggering morning, cinema, and goodnight scenes.",
              "price": "$220"
            },
            {
              "id": "lm3",
              "title": "Discreet Environmental Climate Sensor",
              "description": "Tiny wall-mounted brass stud monitoring temperature, humidity, and CO2 levels with 5-year battery life.",
              "price": "$95"
            }
          ]
        }
      },
      {
        "id": "rt14-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Transform How You Interact With Your Living Space",
          "description": "Special pricing and wiring blueprints available for architects and interior designers.",
          "primaryButtonText": "Configure Your Home System",
          "primaryButtonLink": "#kit"
        }
      },
      {
        "id": "rt14-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "LUMINA SMART SYSTEMS",
          "copyrightText": "© 2026 Lumina Hardware Corp. San Francisco • Munich."
        }
      }
    ]
  },
  {
    "id": "ret-mechkeyboard-01",
    "slug": "switchcraft-bespoke-mechanical-keyboards",
    "name": "SwitchCraft Bespoke Mechanical Keyboards",
    "description": "High-end custom mechanical keyboard studio featuring CNC-milled brass and aluminum cases, hand-lubed switches, and dye-sub PBT keycaps.",
    "industryId": "retail-ecommerce",
    "categoryId": "electronics-store",
    "collectionId": "high-fashion-editorial",
    "designStyle": "technology-gradient",
    "featured": false,
    "tags": [
      "mechanical keyboard",
      "custom keyboard",
      "lubed switches",
      "cnc aluminum",
      "desk setup",
      "keycaps"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "rt15-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "SWITCHCRAFT",
          "primaryButtonText": "Configure Board",
          "primaryButtonLink": "#builder",
          "navLinks": [
            {
              "label": "Milled Cases",
              "href": "#cases"
            },
            {
              "label": "Lubed Switches",
              "href": "#switches"
            },
            {
              "label": "Sound Tests",
              "href": "#sound"
            }
          ]
        }
      },
      {
        "id": "rt15-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Gasket-Mounted CNC 6063 Aluminum • Deep Acoustic Thock",
          "title": "Typing Elevated to Acoustic and Tactile Art",
          "subtitle": "Engineered for developers, writers, and keyboard enthusiasts. Heavy brass internal weights, Poron foam dampening, and Krytox 205g0 hand-lubricated mechanical switches.",
          "primaryButtonText": "Build Custom Keyboard",
          "primaryButtonLink": "#builder",
          "imageUrl": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Case Weight",
              "value": "2.4 kg Solid"
            },
            {
              "id": "s2",
              "label": "Acoustic Sound Profile",
              "value": "Deep Marbly Thock"
            },
            {
              "id": "s3",
              "label": "Polling Rate",
              "value": "8,000 Hz Ultra"
            }
          ]
        }
      },
      {
        "id": "rt15-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "badge": "Keyboard Hardware",
          "title": "Meticulously Tuned Typist Instruments",
          "subtitle": "Every board is hand-assembled, tuned for zero stabilizer rattle, and flashed with VIA/QMK firmware.",
          "items": [
            {
              "id": "sc1",
              "title": "The Apex 75% Gasket Milled Case",
              "description": "Beveled 6063 aluminum chassis with PVD mirror brass weight and flexible polycarbonate switch plate.",
              "price": "$420"
            },
            {
              "id": "sc2",
              "title": "Hand-Lubed Linear Cream Switches",
              "description": "Krytox 205g0 lubed stems with 62g progressive gold-plated springs for buttery smooth keystrokes.",
              "price": "$95 / 90pk"
            },
            {
              "id": "sc3",
              "title": "Dye-Sublimated PBT Cherry Keycaps",
              "description": "1.6mm thick PBT keycaps with crisp Japanese sub-legends that will never shine or wear down.",
              "price": "$120"
            }
          ]
        }
      },
      {
        "id": "rt15-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Experience The Joy of Perfect Keystrokes",
          "description": "Listen to live 4K binaural microphone sound tests before finalizing your switch selection.",
          "primaryButtonText": "Launch Keyboard Sound Studio",
          "primaryButtonLink": "#sound"
        }
      },
      {
        "id": "rt15-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "SWITCHCRAFT KEYBOARDS",
          "copyrightText": "© 2026 SwitchCraft Works Inc. Austin, Texas • Seoul."
        }
      }
    ]
  },
  {
    "id": "ret-scandifurniture-01",
    "slug": "hygge-and-holm-scandi-furniture",
    "name": "Hygge & Holm Solid Wood Scandinavian Living",
    "description": "Danish modern solid teak and white oak furniture studio crafting heirloom expandable dining tables, paper cord chairs, and credenzas.",
    "industryId": "retail-ecommerce",
    "categoryId": "furniture-store",
    "collectionId": "high-fashion-editorial",
    "designStyle": "organic-natural",
    "featured": true,
    "tags": [
      "scandinavian furniture",
      "dining table",
      "teak",
      "danish modern",
      "paper cord chairs",
      "woodworking",
      "credenza"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "rt16-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "HYGGE & HOLM",
          "primaryButtonText": "Shop Dining",
          "primaryButtonLink": "#dining",
          "navLinks": [
            {
              "label": "Extendable Tables",
              "href": "#tables"
            },
            {
              "label": "Woven Chairs",
              "href": "#chairs"
            },
            {
              "label": "Craft & Joinery",
              "href": "#craft"
            }
          ]
        }
      },
      {
        "id": "rt16-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "FSC-Certified Solid Danish White Oak & Teak • Copenhagen Atelier",
          "title": "Furniture That Gathers Generations Around the Table",
          "subtitle": "Organic curved silhouettes, traditional mortise-and-tenon joinery, and natural vegetable oil finishes that invite fingers to trace the grain of slow-grown Scandinavian timber.",
          "primaryButtonText": "Discover Dining Tables",
          "primaryButtonLink": "#tables",
          "imageUrl": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Wood Certification",
              "value": "100% FSC Solid"
            },
            {
              "id": "s2",
              "label": "Table Expansion Leaves",
              "value": "Seats 6 to 14"
            },
            {
              "id": "s3",
              "label": "Paper Cord Weave Time",
              "value": "14 Hours / Chair"
            }
          ]
        }
      },
      {
        "id": "rt16-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Heirloom Furniture",
          "title": "Master Woodworking Built to Last Centuries",
          "subtitle": "Zero veneer or particleboard. Crafted entirely from seasoned solid hardwood boards.",
          "items": [
            {
              "id": "hh1",
              "title": "The Odense Extendable Dining Table",
              "description": "Concealed butterfly leaf mechanism extending table seamlessly from 180cm to 280cm without visible split seams.",
              "price": "$2,400"
            },
            {
              "id": "hh2",
              "title": "The Aarhus Hand-Woven Paper Cord Chair",
              "description": "Steam-bent solid oak backrest paired with 120 meters of unbleached Danish paper cord woven by hand.",
              "price": "$650"
            },
            {
              "id": "hh3",
              "title": "Floating Solid Oak Low Credenza",
              "description": "Tambour sliding slatted doors with brass handles, providing concealed storage for dinnerware and vinyl.",
              "price": "$1,950"
            }
          ]
        }
      },
      {
        "id": "rt16-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Invest in Furniture That Becomes a Family Legacy",
          "description": "White-glove in-room delivery and packaging removal included across North America and Europe.",
          "primaryButtonText": "Explore Complete Furniture Catalog",
          "primaryButtonLink": "#dining"
        }
      },
      {
        "id": "rt16-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "HYGGE & HOLM COPENHAGEN",
          "copyrightText": "© 2026 Hygge & Holm Møbler A/S. Copenhagen, Denmark."
        }
      }
    ]
  },
  {
    "id": "ret-japandiliving-01",
    "slug": "wabi-living-japandi-furniture",
    "name": "Wabi Living Minimalist Japandi Beds & Screens",
    "description": "Serene Japandi bedroom design studio creating low-profile solid hinoki platform beds, tatami floor mats, and sliding rice paper screens.",
    "industryId": "retail-ecommerce",
    "categoryId": "furniture-store",
    "collectionId": "high-fashion-editorial",
    "designStyle": "minimal-neutral",
    "featured": false,
    "tags": [
      "japandi",
      "platform bed",
      "shoji screen",
      "tatami",
      "minimalist bedroom",
      "zen furniture",
      "hinoki"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "rt17-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "WABI // LIVING",
          "primaryButtonText": "Shop Beds",
          "primaryButtonLink": "#beds",
          "navLinks": [
            {
              "label": "Platform Beds",
              "href": "#beds"
            },
            {
              "label": "Shoji Screens",
              "href": "#screens"
            },
            {
              "label": "Natural Futons",
              "href": "#futons"
            }
          ]
        }
      },
      {
        "id": "rt17-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Japanese Cedar & Japanese Joinery • Zero Nails or Screws",
          "title": "Rest Grounded Close to the Earth in Quiet Tranquility",
          "subtitle": "Inspired by traditional Japanese ryokans and Nordic functionalism. Low-profile floating platform beds constructed with interlocking kanawa-tsugi joinery that assemble effortlessly.",
          "primaryButtonText": "View Platform Beds",
          "primaryButtonLink": "#beds",
          "imageUrl": "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Platform Elevation",
              "value": "18cm Low Ground"
            },
            {
              "id": "s2",
              "label": "Joinery System",
              "value": "Japanese Interlocking"
            },
            {
              "id": "s3",
              "label": "Aromatic Hinoki Cedar",
              "value": "Calming Scent"
            }
          ]
        }
      },
      {
        "id": "rt17-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Sanctuary Elements",
          "title": "Designed for Restorative Slumber",
          "subtitle": "Natural materials that emit subtle forest scents and promote clean air quality.",
          "items": [
            {
              "id": "wb1",
              "title": "The Kyoto Low-Profile Floating Bed",
              "description": "Solid Japanese hinoki cypress with extended side ledges serving as floating bedside nightstands.",
              "price": "$1,850"
            },
            {
              "id": "wb2",
              "title": "Authentic Igusa Rush Grass Tatami Inset",
              "description": "Natural rush grass mat inserts that naturally absorb humidity and purify bedroom air with fresh herbal scent.",
              "price": "$420"
            },
            {
              "id": "wb3",
              "title": "Three-Panel Freestanding Washi Screen",
              "description": "Translucent mulberry washi paper set into lightweight black cedar latticework to gently diffuse morning sunlight.",
              "price": "$580"
            }
          ]
        }
      },
      {
        "id": "rt17-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Create Your Personal Zen Sanctuary Tonight",
          "description": "Flat-packed with numbered interlocking joints that lock together in under 15 minutes.",
          "primaryButtonText": "Order Your Platform Bed",
          "primaryButtonLink": "#beds"
        }
      },
      {
        "id": "rt17-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "WABI LIVING JAPANDI FURNITURE",
          "copyrightText": "© 2026 Wabi Living Co. Kyoto • Vancouver."
        }
      }
    ]
  },
  {
    "id": "ret-industrialoffice-01",
    "slug": "foundry-walnut-standing-desks",
    "name": "Foundry Steel & Walnut Executive Desks",
    "description": "Commercial and executive studio crafting solid live-edge walnut motorized standing desks, steel cable management channels, and ergonomic chairs.",
    "industryId": "retail-ecommerce",
    "categoryId": "furniture-store",
    "collectionId": "high-fashion-editorial",
    "designStyle": "modern-corporate",
    "featured": false,
    "tags": [
      "standing desk",
      "walnut desk",
      "executive furniture",
      "office furniture",
      "steel desk",
      "ergonomic workspace"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "rt18-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "FOUNDRY WORKSPACES",
          "primaryButtonText": "Configure Desk",
          "primaryButtonLink": "#config",
          "navLinks": [
            {
              "label": "Solid Walnut Desks",
              "href": "#desks"
            },
            {
              "label": "Dual-Motor Lifting",
              "href": "#motors"
            },
            {
              "label": "Cable Management",
              "href": "#cables"
            }
          ]
        }
      },
      {
        "id": "rt18-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Solid 1.75\" American Black Walnut • Commercial Dual Linak Motors",
          "title": "A Command Center of Solid Wood and Industrial Steel",
          "subtitle": "Heavy dual-stage electric columns lift up to 350 lbs with whisper-quiet precision. Integrated power channels hide every single cable for an immaculate desktop.",
          "primaryButtonText": "Customize Desk Dimensions",
          "primaryButtonLink": "#config",
          "imageUrl": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Weight Lift Capacity",
              "value": "350 Lbs Heavy"
            },
            {
              "id": "s2",
              "label": "Solid Walnut Slab Thickness",
              "value": "1.75 Inches"
            },
            {
              "id": "s3",
              "label": "Lifting Motor Noise",
              "value": "<42 dB Silent"
            }
          ]
        }
      },
      {
        "id": "rt18-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Workspace Engineering",
          "title": "Engineered for Peak Daily Output",
          "subtitle": "Say goodbye to wobbly cheap desks and rat’s nests of power cords.",
          "items": [
            {
              "id": "fd1",
              "title": "The Apex Walnut Standing Desk (72\" x 30\")",
              "description": "Continuous-grain solid American black walnut slab with beveled ergonomic front edge and memory keypad.",
              "price": "$1,950"
            },
            {
              "id": "fd2",
              "title": "Under-Desk Steel Cable Conduit & Power Strip",
              "description": "Heavy-gauge laser-cut steel wire tray hiding power bricks, monitor cables, and high-speed USB hubs.",
              "price": "$190"
            },
            {
              "id": "fd3",
              "title": "Magnetic Walnut Desktop MagSafe Charger",
              "description": "Flush-mounted Qi2 fast wireless charger embedded invisibly beneath the solid wood surface.",
              "price": "$120"
            }
          ]
        }
      },
      {
        "id": "rt18-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Upgrade Your Daily Workstation to Executive Caliber",
          "description": "Each desk slab is individually selected, sanded, and hand-finished with zero-VOC hardwax oil.",
          "primaryButtonText": "Start Your Desk Build",
          "primaryButtonLink": "#config"
        }
      },
      {
        "id": "rt18-footer",
        "type": "footer",
        "variant": "footer-multi-column",
        "visible": true,
        "content": {
          "title": "FOUNDRY INDUSTRIAL WORKSPACES",
          "copyrightText": "© 2026 Foundry Desks Corp. Minneapolis • Denver."
        }
      }
    ]
  },
  {
    "id": "ret-ceramicstudio-01",
    "slug": "earth-and-kiln-stoneware-ceramics",
    "name": "Earth & Kiln Hand-Thrown Stoneware",
    "description": "Ceramics pottery studio crafting tactile matte-glazed dinnerware sets, organic coffee mugs, and sculptural vases fired in wood kilns.",
    "industryId": "retail-ecommerce",
    "categoryId": "home-decor-store",
    "collectionId": "high-fashion-editorial",
    "designStyle": "organic-natural",
    "featured": true,
    "tags": [
      "ceramics",
      "pottery",
      "stoneware",
      "tableware",
      "handmade mugs",
      "dinnerware",
      "vases"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "rt19-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "EARTH & KILN",
          "primaryButtonText": "Shop Ceramics",
          "primaryButtonLink": "#shop",
          "navLinks": [
            {
              "label": "Dinnerware",
              "href": "#dinner"
            },
            {
              "label": "Morning Mugs",
              "href": "#mugs"
            },
            {
              "label": "The Kiln Wood Firing",
              "href": "#firing"
            }
          ]
        }
      },
      {
        "id": "rt19-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Hand-Thrown on the Potter’s Wheel in Cornwall • Wood-Fired",
          "title": "Tactile Stoneware That Celebrates Earth and Imperfection",
          "subtitle": "Heavy iron-rich clay thrown by hand and coated with natural wood ash glazes. Dishwasher and microwave safe pieces designed to turn every meal into a grounding sensory ritual.",
          "primaryButtonText": "Explore Dinner Sets",
          "primaryButtonLink": "#dinner",
          "imageUrl": "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Kiln Firing Temperature",
              "value": "1,280°C Vitrified"
            },
            {
              "id": "s2",
              "label": "Glaze Recipe",
              "value": "100% Non-Toxic"
            },
            {
              "id": "s3",
              "label": "Hand-Thrown Origin",
              "value": "Cornwall, UK"
            }
          ]
        }
      },
      {
        "id": "rt19-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Studio Collections",
          "title": "Functional Art for Daily Living",
          "subtitle": "Every plate and bowl bears subtle finger marks of the potter who threw it.",
          "items": [
            {
              "id": "ek1",
              "title": "The Coastal Dune 16-Piece Dinner Set",
              "description": "Complete set of four dinner plates, salad plates, pasta bowls, and breakfast bowls in speckled matte cream glaze.",
              "price": "$380"
            },
            {
              "id": "ek2",
              "title": "The Wabi Ribbed Pour-Over Coffee Mug",
              "description": "Ergonomic two-finger loop handle with raw exposed clay footing and satin chalk glaze interior.",
              "price": "$48"
            },
            {
              "id": "ek3",
              "title": "Sculptural Moon Vase (Large 30cm)",
              "description": "Wheel-thrown spherical vase with pinched bottleneck lip, ideal for dried wild grasses and eucalyptus branches.",
              "price": "$145"
            }
          ]
        }
      },
      {
        "id": "rt19-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Bring Handmade Soul to Your Dining Table",
          "description": "Small batch drops release every first Sunday of the month.",
          "primaryButtonText": "Shop Current Kiln Release",
          "primaryButtonLink": "#shop"
        }
      },
      {
        "id": "rt19-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "EARTH & KILN POTTERY ATELIER",
          "copyrightText": "© 2026 Earth & Kiln Studios Ltd. St Ives, Cornwall • London."
        }
      }
    ]
  },
  {
    "id": "ret-botanicaldecor-01",
    "slug": "flora-and-brass-botanical-vessels",
    "name": "Flora & Brass Architectural Botanical Vessels",
    "description": "Designer indoor plant vessel brand crafting architectural unlacquered brass hanging planters, self-watering terracotta urns, and glass propagation stations.",
    "industryId": "retail-ecommerce",
    "categoryId": "home-decor-store",
    "collectionId": "high-fashion-editorial",
    "designStyle": "soft-pastel",
    "featured": false,
    "tags": [
      "planters",
      "plant vessels",
      "botanical",
      "indoor plants",
      "brass planter",
      "propagation",
      "home decor"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "rt20-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "FLORA & BRASS",
          "primaryButtonText": "Shop Planters",
          "primaryButtonLink": "#shop",
          "navLinks": [
            {
              "label": "Brass Vessels",
              "href": "#brass"
            },
            {
              "label": "Self-Watering",
              "href": "#watering"
            },
            {
              "label": "Propagation Glass",
              "href": "#glass"
            }
          ]
        }
      },
      {
        "id": "rt20-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Living Greenery Elevated by Architectural Craft",
          "title": "Sculptural Homes for Your Most Cherished Houseplants",
          "subtitle": "We design spun solid brass plant pots with concealed drainage trays, hanging brass hoops, and borosilicate propagation tubes that turn plants into living gallery installations.",
          "primaryButtonText": "Browse Botanical Vessels",
          "primaryButtonLink": "#shop",
          "imageUrl": "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Vessel Material",
              "value": "Spun Solid Brass"
            },
            {
              "id": "s2",
              "label": "Root Aeration Engineering",
              "value": "Sub-Irrigated"
            },
            {
              "id": "s3",
              "label": "Design Awards Won",
              "value": "8 International"
            }
          ]
        }
      },
      {
        "id": "rt20-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Botanical Hardware",
          "title": "Where Plant Health Meets Sculptural Form",
          "subtitle": "Engineered with hidden internal drainage to eliminate root rot forever.",
          "items": [
            {
              "id": "fb1",
              "title": "The Orbit Spun Brass Hanging Planter",
              "description": "Precision spun raw brass sphere suspended from minimalist braided brass cable and ceiling hook.",
              "price": "$135"
            },
            {
              "id": "fb2",
              "title": "Terracotta Sub-Irrigated Self-Watering Urn",
              "description": "Porous terracotta cylinder with frosted glass reservoir providing consistent root hydration for 14 days.",
              "price": "$95"
            },
            {
              "id": "fb3",
              "title": "Wall-Mounted Walnut Propagation Station",
              "description": "Solid American walnut backplate holding 5 removable test tubes for rooting plant cuttings in water.",
              "price": "$75"
            }
          ]
        }
      },
      {
        "id": "rt20-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Bring Vibrant Living Greenery into Your Home",
          "description": "Free plant-care handbook included with every vessel purchase.",
          "primaryButtonText": "Shop Botanical Collection",
          "primaryButtonLink": "#shop"
        }
      },
      {
        "id": "rt20-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "FLORA & BRASS BOTANICALS",
          "copyrightText": "© 2026 Flora & Brass Design Ltd. Portland • Melbourne."
        }
      }
    ]
  },
  {
    "id": "ret-lightingatelier-01",
    "slug": "lumen-sculptural-pendant-lamps",
    "name": "Lumen Hand-Blown Glass & Brass Lighting",
    "description": "High-end lighting studio crafting mouth-blown organic glass pendant chandeliers, brutalist brass sconces, and dimmable architectural fixtures.",
    "industryId": "retail-ecommerce",
    "categoryId": "home-decor-store",
    "collectionId": "high-fashion-editorial",
    "designStyle": "luxury-editorial",
    "featured": false,
    "tags": [
      "lighting",
      "pendant lamp",
      "blown glass",
      "chandelier",
      "brass sconce",
      "architectural lighting"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "rt21-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "LUMEN // ATELIER",
          "primaryButtonText": "Request Catalog",
          "primaryButtonLink": "#catalog",
          "navLinks": [
            {
              "label": "Pendant Chandeliers",
              "href": "#chandeliers"
            },
            {
              "label": "Wall Sconces",
              "href": "#sconces"
            },
            {
              "label": "Glass Blowing Studio",
              "href": "#craft"
            }
          ]
        }
      },
      {
        "id": "rt21-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Mouth-Blown Murano & Czech Crystal • Architectural Dimming",
          "title": "Lighting Sculptures That Cast Radiant Atmospheric Warmth",
          "subtitle": "Each organic glass shade is individually blown by master glassmakers without molds. Paired with aged raw brass armatures and warm 2200K high-CRI circadian LEDs.",
          "primaryButtonText": "Explore Lighting Fixtures",
          "primaryButtonLink": "#chandeliers",
          "imageUrl": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Color Rendering Index",
              "value": "98 CRI True Color"
            },
            {
              "id": "s2",
              "label": "Glass Shade Method",
              "value": "100% Free-Blown"
            },
            {
              "id": "s3",
              "label": "UL & CE Certified",
              "value": "Commercial Grade"
            }
          ]
        }
      },
      {
        "id": "rt21-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "Signature Luminaires",
          "title": "Atmospheric Light Sculptures",
          "subtitle": "Custom drops and multi-canopy configurations available for residential and hospitality projects.",
          "items": [
            {
              "id": "lm1",
              "title": "The Selene Smoked Glass Cascade Chandelier",
              "description": "Cluster of 7 irregular mouth-blown smoked crystal globes suspended at staggered heights on brass rods.",
              "price": "$2,850"
            },
            {
              "id": "lm2",
              "title": "Brutalist Raw Brass Fluted Sconce",
              "description": "Heavy unlacquered brass channel projecting dual up-and-down ambient light along textured plaster walls.",
              "price": "$540"
            },
            {
              "id": "lm3",
              "title": "Opaline Sphere Table Lamp with Dimmer",
              "description": "Milk glass globe resting upon an oiled travertine stone cylinder with integrated smooth rotary brass dimmer.",
              "price": "$460"
            }
          ]
        }
      },
      {
        "id": "rt21-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Illuminate Your Space with Unrivaled Craft",
          "description": "Trade discounts and customized suspension rod lengths available for interior architects.",
          "primaryButtonText": "Inquire for Custom Fixture",
          "primaryButtonLink": "#catalog"
        }
      },
      {
        "id": "rt21-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "LUMEN LIGHTING ATELIER",
          "copyrightText": "© 2026 Lumen Lighting Studio Ltd. Venice • London."
        }
      }
    ]
  },
  {
    "id": "ret-antiquarianbooks-01",
    "slug": "folio-and-quill-rare-first-editions",
    "name": "Folio & Quill Rare First Editions & Antiquarian Books",
    "description": "Antiquarian book dealer and rare manuscript vault specializing in signed 19th and 20th-century first editions, fine bindings, and historical cartography.",
    "industryId": "retail-ecommerce",
    "categoryId": "book-store",
    "collectionId": "high-fashion-editorial",
    "designStyle": "academic-classic",
    "featured": true,
    "tags": [
      "rare books",
      "first editions",
      "antiquarian",
      "bookstore",
      "leather bound",
      "cartography",
      "literary history"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "rt22-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "FOLIO & QUILL",
          "primaryButtonText": "Search Vault",
          "primaryButtonLink": "#vault",
          "navLinks": [
            {
              "label": "Rare First Editions",
              "href": "#first-editions"
            },
            {
              "label": "Fine Leather Bindings",
              "href": "#bindings"
            },
            {
              "label": "Antiquarian Maps",
              "href": "#maps"
            }
          ]
        }
      },
      {
        "id": "rt22-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Member Antiquarian Booksellers’ Association of America (ABAA)",
          "title": "Holding Human Thought in Its Original Printed Form",
          "subtitle": "From signed Virginia Woolf and James Joyce first editions to hand-colored 17th-century celestial star charts bound in gilt-embossed crushed morocco leather.",
          "primaryButtonText": "Browse Rare Manuscripts",
          "primaryButtonLink": "#vault",
          "imageUrl": "https://images.unsplash.com/photo-1507842229451-7f01beff9c0d?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Authenticated First Editions",
              "value": "3,200 Titles"
            },
            {
              "id": "s2",
              "label": "Oldest Manuscript Held",
              "value": "1493 Nuremberg"
            },
            {
              "id": "s3",
              "label": "ABAA & ILAB Certification",
              "value": "100% Guaranteed"
            }
          ]
        }
      },
      {
        "id": "rt22-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "The Antiquarian Vault",
          "title": "Milestones of Human Literature",
          "subtitle": "Every volume preserved in climate-controlled museum vaults with custom archival slipcases.",
          "items": [
            {
              "id": "fq1",
              "title": "F. Scott Fitzgerald // The Great Gatsby (1925)",
              "description": "First printing, first state text with original unclipped Cugat pictorial dust jacket in remarkable conservation condition.",
              "price": "$14,500"
            },
            {
              "id": "fq2",
              "title": "Mary Shelley // Frankenstein (1831 3rd Edition)",
              "description": "First illustrated edition bound in contemporary three-quarter crushed plum morocco with gilt-stamped spine panels.",
              "price": "$6,800"
            },
            {
              "id": "fq3",
              "title": "Willem Blaeu // 1640 Hand-Colored World Map",
              "description": "Double-hemisphere copperplate engraving with allegory of four seasons and early cartographic discoveries.",
              "price": "$8,200"
            }
          ]
        }
      },
      {
        "id": "rt22-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Begin or Expand Your Personal Library Collection",
          "description": "Our senior bibliophiles provide confidential provenance research and private library curation.",
          "primaryButtonText": "Inquire with Head Bibliographer",
          "primaryButtonLink": "#vault"
        }
      },
      {
        "id": "rt22-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "FOLIO & QUILL ANTIQUARIAN BOOKSELLERS",
          "copyrightText": "© 2026 Folio & Quill Ltd. Bloomsbury, London • Boston."
        }
      }
    ]
  },
  {
    "id": "ret-indiepress-01",
    "slug": "small-batch-poetry-risograph-zines",
    "name": "Small Batch Risograph Zines & Independent Press",
    "description": "Underground design bookstore and risograph publishing house offering limited-run photography zines, experimental poetry, and typography prints.",
    "industryId": "retail-ecommerce",
    "categoryId": "book-store",
    "collectionId": "high-fashion-editorial",
    "designStyle": "bold-creative",
    "featured": false,
    "tags": [
      "risograph",
      "indie bookstore",
      "zines",
      "poetry",
      "art book",
      "typography prints",
      "independent press"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "rt23-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "SMALL BATCH // PRESS",
          "primaryButtonText": "Shop Zines",
          "primaryButtonLink": "#zines",
          "navLinks": [
            {
              "label": "Printed Zines",
              "href": "#zines"
            },
            {
              "label": "Riso Art Prints",
              "href": "#prints"
            },
            {
              "label": "Submissions",
              "href": "#submit"
            }
          ]
        }
      },
      {
        "id": "rt23-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Printed on Dual-Drum Risograph GR3770 • Soy Inks on Munken Paper",
          "title": "Fluorescent Inks, Raw Halftones, and Independent Voices",
          "subtitle": "A sanctuary for independent visual culture. Vibrant soy-based neon inks, tactile uncoated paper stocks, and handmade saddle-stitched publications celebrating photography, subcultures, and verse.",
          "primaryButtonText": "Explore Indie Publications",
          "primaryButtonLink": "#zines",
          "imageUrl": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Edition Sizes",
              "value": "100-300 Hand Numbered"
            },
            {
              "id": "s2",
              "label": "Spot Riso Colors",
              "value": "28 Custom Inks"
            },
            {
              "id": "s3",
              "label": "Global Artists Published",
              "value": "140+ Creators"
            }
          ]
        }
      },
      {
        "id": "rt23-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Recent Publications",
          "title": "Physical Print in the Digital Age",
          "subtitle": "Every edition is hand-collated, folded, and stitched in our East London studio.",
          "items": [
            {
              "id": "sb1",
              "title": "Night Shift Tokyo Photography Zine",
              "description": "4-color Risograph print (Fluorescent Pink, Aqua, Yellow, Black) capturing empty Shinjuku rain alleys.",
              "price": "$24"
            },
            {
              "id": "sb2",
              "title": "Concrete Verses: Brutalist Architecture & Poems",
              "description": "Heavy 240 GSM Munken Lynx stock featuring silver metallic ink and debossed letterpress cover.",
              "price": "$32"
            },
            {
              "id": "sb3",
              "title": "A2 Geometric Typographic Poster Print",
              "description": "Limited edition of 50 hand-pulled 3-color risograph posters featuring custom variable typography.",
              "price": "$45"
            }
          ]
        }
      },
      {
        "id": "rt23-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Support Independent Print Culture",
          "description": "Join our Monthly Zine Club to receive 2 freshly printed publications in your mailbox every month.",
          "primaryButtonText": "Join The Zine Club",
          "primaryButtonLink": "#zines"
        }
      },
      {
        "id": "rt23-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "SMALL BATCH INDEPENDENT PRESS",
          "copyrightText": "© 2026 Small Batch Press Ltd. Hackney, London • Brooklyn."
        }
      }
    ]
  },
  {
    "id": "ret-culinarylibrary-01",
    "slug": "cooks-codex-gastronomy-books",
    "name": "The Cook’s Codex Culinary Books & Quarterly",
    "description": "Curated gastronomy bookstore and quarterly journal celebrating rare regional recipes, fermentation science, and Michelin chef monographs.",
    "industryId": "retail-ecommerce",
    "categoryId": "book-store",
    "collectionId": "high-fashion-editorial",
    "designStyle": "editorial-magazine",
    "featured": false,
    "tags": [
      "cookbooks",
      "gastronomy",
      "culinary books",
      "fermentation",
      "michelin chef",
      "food quarterly",
      "recipes"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "rt24-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "THE COOK’S CODEX",
          "primaryButtonText": "Shop Cookbooks",
          "primaryButtonLink": "#shop",
          "navLinks": [
            {
              "label": "Chef Monographs",
              "href": "#chefs"
            },
            {
              "label": "Fermentation Science",
              "href": "#science"
            },
            {
              "label": "The Quarterly",
              "href": "#journal"
            }
          ]
        }
      },
      {
        "id": "rt24-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Hardcover Linen Monographs • Photography by Food Masters",
          "title": "The Literature of Fire, Ferment, and Flavor",
          "subtitle": "We curate the definitive culinary library for chefs and passionate home cooks. Bound in textured bookcloth with Smyth-sewn lay-flat bindings that stay open on flour-dusted kitchen counters.",
          "primaryButtonText": "Explore Culinary Library",
          "primaryButtonLink": "#shop",
          "imageUrl": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Culinary Titles Curated",
              "value": "450 Books"
            },
            {
              "id": "s2",
              "label": "Binding Type",
              "value": "Lay-Flat Smyth Sewn"
            },
            {
              "id": "s3",
              "label": "Michelin Chef Collaborations",
              "value": "35 Chefs"
            }
          ]
        }
      },
      {
        "id": "rt24-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "Featured Monographs",
          "title": "Culinary Masterpieces in Print",
          "subtitle": "Stunning full-page macro photography and thoroughly tested, precise culinary formulas.",
          "items": [
            {
              "id": "cc1",
              "title": "The Noma Fermentation Compendium (Expanded)",
              "description": "Step-by-step master guide to koji, lacto-ferments, garums, and black fruits with microbial science explanations.",
              "price": "$55"
            },
            {
              "id": "cc2",
              "title": "Wild Dough: Heritage Ancient Grains & Sourdough",
              "description": "500-page encyclopedia detailing heritage grain varieties, hydration percentages, and wood-fired hearth baking.",
              "price": "$65"
            },
            {
              "id": "cc3",
              "title": "The Cook’s Codex Quarterly Journal (Issue 08)",
              "description": "Our 180-page ad-free quarterly journal exploring the vanishing coastal fishing cuisines of Hokkaido and Sicily.",
              "price": "$28"
            }
          ]
        }
      },
      {
        "id": "rt24-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Build a Kitchen Library That Inspires Every Dinner",
          "description": "Free worldwide cookbook shipping on all orders over $75.",
          "primaryButtonText": "Shop All Gastronomy Volumes",
          "primaryButtonLink": "#shop"
        }
      },
      {
        "id": "rt24-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "THE COOK’S CODEX PUBLISHING",
          "copyrightText": "© 2026 The Cook’s Codex Ltd. San Francisco • Copenhagen."
        }
      }
    ]
  }
];
