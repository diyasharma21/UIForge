import { TemplateConfig } from '../../types';

export const REAL_ESTATE_TEMPLATES: TemplateConfig[] = [
  {
    "id": "re-sovereign-01",
    "slug": "sovereign-architectural-real-estate",
    "name": "Sovereign Architectural Estates",
    "description": "High-value architectural residences, minimalist photography, floor plan specs, private viewing requests, and premier broker profiles.",
    "industryId": "real-estate",
    "categoryId": "real-estate",
    "collectionId": "luxury-real-estate",
    "designStyle": "minimal-neutral",
    "featured": true,
    "tags": [
      "real estate",
      "luxury homes",
      "architecture",
      "villas",
      "penthouse",
      "property"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "re1-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "SOVEREIGN ESTATES",
          "primaryButtonText": "Schedule Showing",
          "primaryButtonLink": "#contact",
          "navLinks": [
            {
              "label": "Featured Properties",
              "href": "#listings"
            },
            {
              "label": "Neighborhoods",
              "href": "#neighborhoods"
            },
            {
              "label": "Private Office",
              "href": "#agents"
            },
            {
              "label": "Valuation",
              "href": "#valuation"
            }
          ]
        }
      },
      {
        "id": "re1-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Curated Architectural Masterpieces",
          "title": "Residences Defined by Light, Space, and Form",
          "subtitle": "Representing the world’s most distinctive modernist residences, coastal estates, and skyline penthouses.",
          "primaryButtonText": "View Available Residences",
          "primaryButtonLink": "#listings",
          "secondaryButtonText": "Meet Principal Brokers",
          "secondaryButtonLink": "#agents",
          "imageUrl": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
          "imageAlt": "Modernist concrete and glass residence in twilight",
          "stats": [
            {
              "id": "res1",
              "label": "Average Property Value",
              "value": "$8.4M"
            },
            {
              "id": "res2",
              "label": "Off-Market Portfolio",
              "value": "$420M"
            },
            {
              "id": "res3",
              "label": "Global High-Net-Worth Buyers",
              "value": "14,000+"
            }
          ]
        }
      },
      {
        "id": "re1-listings",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Exclusive Listings",
          "title": "Current Premier Residences",
          "subtitle": "Available exclusively through Sovereign Private Brokerage.",
          "items": [
            {
              "id": "pr1",
              "title": "The Glass Pavilion at Carbon Beach",
              "description": "6 Beds • 8 Baths • 8,400 Sq Ft • 80 Ft Private Beachfront",
              "price": "$24,500,000"
            },
            {
              "id": "pr2",
              "title": "Villa Brutale in Trousdale Estates",
              "description": "5 Beds • 6 Baths • 6,900 Sq Ft • Zero Edge Infinity Pool",
              "price": "$18,750,000"
            },
            {
              "id": "pr3",
              "title": "The Tribeca Skyline Penthouse Duplex",
              "description": "4 Beds • 5 Baths • 5,400 Sq Ft • 1,800 Sq Ft Landscaped Terrace",
              "price": "$15,200,000"
            }
          ]
        }
      },
      {
        "id": "re1-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Request a Private Viewing Experience",
          "description": "Our private brokers arrange chauffeured showings and off-market confidential dossiers.",
          "primaryButtonText": "Contact Senior Broker",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "re1-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "SOVEREIGN PRIVATE BROKERAGE",
          "copyrightText": "© 2026 Sovereign Estates International. Licensed Real Estate Broker."
        }
      }
    ]
  },
  {
    "id": "re-metropolispenthouses-01",
    "slug": "manhattan-sky-tower-penthouses",
    "name": "Metropolis Manhattan Sky Tower Penthouses",
    "description": "Billionaires’ Row skyline penthouses with 360-degree Central Park views, private elevator vestibules, and 14-foot ceiling heights.",
    "industryId": "real-estate",
    "categoryId": "real-estate",
    "collectionId": "luxury-real-estate",
    "designStyle": "modern-corporate",
    "featured": true,
    "tags": [
      "manhattan",
      "penthouse",
      "central park",
      "skyline",
      "luxury real estate",
      "new york"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "re2-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "METROPOLIS // PENTHOUSES",
          "primaryButtonText": "Book Private Showing",
          "primaryButtonLink": "#showing",
          "navLinks": [
            {
              "label": "Available Towers",
              "href": "#towers"
            },
            {
              "label": "Central Park Views",
              "href": "#views"
            },
            {
              "label": "Building Amenities",
              "href": "#amenities"
            }
          ]
        }
      },
      {
        "id": "re2-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Billionaires’ Row Landmark Tower • 1,100 Feet Above Midtown",
          "title": "The Summit of New York Skyline Living",
          "subtitle": "Full-floor and duplex sky mansions featuring acoustically insulated floor-to-ceiling curtain wall glass framing unhindered vistas from Central Park to the Atlantic Ocean.",
          "primaryButtonText": "Explore Available Penthouses",
          "primaryButtonLink": "#towers",
          "imageUrl": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Ceiling Heights",
              "value": "14.5 Ft Soaring"
            },
            {
              "id": "s2",
              "label": "Private Residence Elevators",
              "value": "Dual High-Speed"
            },
            {
              "id": "s3",
              "label": "Full-Floor Square Footage",
              "value": "7,800 Sq Ft"
            }
          ]
        }
      },
      {
        "id": "re2-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Sky Residences",
          "title": "Unparalleled Architectural Grandeur",
          "subtitle": "Interiors curated by world-renowned AD100 architectural studios.",
          "items": [
            {
              "id": "mp1",
              "title": "The Grand Central Park Full-Floor Penthouse",
              "description": "5 Bedrooms • 6.5 Baths • 7,850 Sq Ft • Custom Calacatta marble fireplace and private terrace.",
              "price": "$38,500,000"
            },
            {
              "id": "mp2",
              "title": "The Sky Duplex with Cantilevered Pool",
              "description": "6 Bedrooms • 8 Baths • 9,400 Sq Ft • Heated indoor plunge pool cantilevered over 57th Street.",
              "price": "$54,000,000"
            },
            {
              "id": "mp3",
              "title": "The Sunset Harbor Tower Suite",
              "description": "3 Bedrooms • 3.5 Baths • 3,900 Sq Ft • Panoramic Hudson River sunset views and Poliform kitchen.",
              "price": "$18,900,000"
            }
          ]
        }
      },
      {
        "id": "re2-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Schedule a Confidential Tower Tour",
          "description": "Access the private sales gallery with interactive 3D view simulations and full-scale kitchen mockups.",
          "primaryButtonText": "Register Private Interest",
          "primaryButtonLink": "#showing"
        }
      },
      {
        "id": "re2-footer",
        "type": "footer",
        "variant": "footer-multi-column",
        "visible": true,
        "content": {
          "title": "METROPOLIS REALTY PARTNERS",
          "copyrightText": "© 2026 Metropolis Tower Holdings LLC. New York, NY."
        }
      }
    ]
  },
  {
    "id": "re-coastalpalms-01",
    "slug": "costa-azul-oceanfront-mansions",
    "name": "Costa Azul Oceanfront & Island Estates",
    "description": "Premier South Florida luxury brokerage representing deepwater waterfront mansions, private yacht docks, and gated island estates in Palm Beach and Miami.",
    "industryId": "real-estate",
    "categoryId": "real-estate",
    "collectionId": "luxury-real-estate",
    "designStyle": "luxury-editorial",
    "featured": false,
    "tags": [
      "miami",
      "palm beach",
      "waterfront mansion",
      "yacht dock",
      "florida real estate",
      "gated island"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "re3-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "COSTA AZUL ESTATES",
          "primaryButtonText": "Inquire Properties",
          "primaryButtonLink": "#contact",
          "navLinks": [
            {
              "label": "Waterfront Mansions",
              "href": "#mansions"
            },
            {
              "label": "Deepwater Docks",
              "href": "#docks"
            },
            {
              "label": "Private Islands",
              "href": "#islands"
            }
          ]
        }
      },
      {
        "id": "re3-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Star Island • Indian Creek • Palm Beach Ocean Boulevard",
          "title": "South Florida’s Most Prestigious Waterfront Sanctuaries",
          "subtitle": "Guarded island compounds with 150-foot superyacht slips, lush tropical landscaping, coral stone facades, and seamless indoor-outdoor coastal living.",
          "primaryButtonText": "View Waterfront Mansions",
          "primaryButtonLink": "#mansions",
          "imageUrl": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Average Oceanfront Lot Size",
              "value": "1.5+ Acres"
            },
            {
              "id": "s2",
              "label": "Deepwater Yacht Slip Depth",
              "value": "12 Ft Draft"
            },
            {
              "id": "s3",
              "label": "Closed Volume 2025",
              "value": "$640M+"
            }
          ]
        }
      },
      {
        "id": "re3-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "Featured Coastal Mansions",
          "title": "Prime Deepwater Real Estate",
          "subtitle": "Direct unrestricted ocean access with zero fixed bridges to open water.",
          "items": [
            {
              "id": "ca1",
              "title": "The Star Island Neo-Palladian Villa",
              "description": "8 Beds • 11 Baths • 14,200 Sq Ft • 200 Ft Water Frontage with 130ft Yacht Dock and Tennis Court.",
              "price": "$49,000,000"
            },
            {
              "id": "ca2",
              "title": "Palm Beach Direct Oceanfront Compound",
              "description": "7 Beds • 9 Baths • 11,800 Sq Ft • Private Beach Tunnel with Direct Atlantic Sand Access.",
              "price": "$62,500,000"
            },
            {
              "id": "ca3",
              "title": "Venetian Islands Modernist Spec Residence",
              "description": "5 Beds • 6.5 Baths • 7,100 Sq Ft • Zero-Edge Rooftop Lap Pool with Downtown Miami Skyline Views.",
              "price": "$22,800,000"
            }
          ]
        }
      },
      {
        "id": "re3-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Explore Off-Market Gated Island Residences",
          "description": "Many of South Florida’s most exceptional trophy homes trade discreetly off-market.",
          "primaryButtonText": "Request Off-Market Portfolio",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "re3-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "COSTA AZUL LUXURY REALTY",
          "copyrightText": "© 2026 Costa Azul Real Estate LLC. Miami Beach • Palm Beach."
        }
      }
    ]
  },
  {
    "id": "re-alpinesanctuary-01",
    "slug": "aspen-ridge-timberline-chalets",
    "name": "Aspen Ridge Timberline Mountain Chalets",
    "description": "Premier mountain real estate brokerage specializing in ski-in ski-out timber chalets, heated driveways, and Red Mountain luxury ranches.",
    "industryId": "real-estate",
    "categoryId": "real-estate",
    "collectionId": "luxury-real-estate",
    "designStyle": "organic-natural",
    "featured": false,
    "tags": [
      "aspen",
      "ski chalet",
      "colorado real estate",
      "mountain home",
      "red mountain",
      "snowmass"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "re4-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "ASPEN RIDGE REALTY",
          "primaryButtonText": "Browse Chalets",
          "primaryButtonLink": "#chalets",
          "navLinks": [
            {
              "label": "Ski-In / Ski-Out",
              "href": "#ski"
            },
            {
              "label": "Red Mountain",
              "href": "#red"
            },
            {
              "label": "Equestrian Ranches",
              "href": "#ranches"
            }
          ]
        }
      },
      {
        "id": "re4-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Aspen Mountain • Snowmass • Buttermilk Ridge",
          "title": "Alpine Grandeur Where Powder Meets Hearth",
          "subtitle": "Soaring reclaimed douglas fir timber frames, floor-to-ceiling glass framing Ajax Mountain, geothermal heated stone patios, and private chairlift connectivity.",
          "primaryButtonText": "Explore Ski Properties",
          "primaryButtonLink": "#ski",
          "imageUrl": "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Average Elevation",
              "value": "8,200 Ft"
            },
            {
              "id": "s2",
              "label": "Skiable Mountain Acreage",
              "value": "5,500+ Acres"
            },
            {
              "id": "s3",
              "label": "Average Chalet Value",
              "value": "$16.2M"
            }
          ]
        }
      },
      {
        "id": "re4-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Alpine Trophy Homes",
          "title": "Residences Crafted for Mountain Seasons",
          "subtitle": "Engineered with commercial snowmelt systems, wine cellars, and bunk rooms.",
          "items": [
            {
              "id": "ar1",
              "title": "The Red Mountain Timberline Compound",
              "description": "7 Beds • 9 Baths • 10,400 Sq Ft • Unobstructed views of Aspen Mountain and Roaring Fork Valley.",
              "price": "$32,000,000"
            },
            {
              "id": "ar2",
              "title": "Snowmass Direct Ski-In/Ski-Out Lodge",
              "description": "5 Beds • 6 Baths • 6,800 Sq Ft • Heated ski lounge, outdoor copper hot tub, and cinema room.",
              "price": "$19,500,000"
            },
            {
              "id": "ar3",
              "title": "Woody Creek 35-Acre Equestrian Ranch",
              "description": "Main residence + guest cabin + 8-stall heated equestrian barn with direct National Forest trails.",
              "price": "$26,400,000"
            }
          ]
        }
      },
      {
        "id": "re4-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Secure Your Aspen Winter Legacy Residence",
          "description": "Our senior mountain brokers arrange helicopter property viewings and private showings.",
          "primaryButtonText": "Connect with Aspen Managing Broker",
          "primaryButtonLink": "#chalets"
        }
      },
      {
        "id": "re4-footer",
        "type": "footer",
        "variant": "footer-multi-column",
        "visible": true,
        "content": {
          "title": "ASPEN RIDGE REAL ESTATE",
          "copyrightText": "© 2026 Aspen Ridge Mountain Properties LLC. Aspen, Colorado."
        }
      }
    ]
  },
  {
    "id": "re-mediterraneanvillas-01",
    "slug": "villa-bellisima-amalfi-cliff-estates",
    "name": "Villa Bellissima Amalfi Coast Properties",
    "description": "Italian luxury brokerage representing historic cliff-hanging villas, terraced lemon groves, and private sea-access stairs along the Amalfi Coast and Capri.",
    "industryId": "real-estate",
    "categoryId": "real-estate",
    "collectionId": "luxury-real-estate",
    "designStyle": "luxury-editorial",
    "featured": false,
    "tags": [
      "amalfi",
      "italy real estate",
      "positano",
      "capri",
      "mediterranean villa",
      "cliffside",
      "sea view"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "re5-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "VILLA BELLISSIMA",
          "primaryButtonText": "Inquire Villas",
          "primaryButtonLink": "#villas",
          "navLinks": [
            {
              "label": "Positano Estates",
              "href": "#positano"
            },
            {
              "label": "Capri Mansions",
              "href": "#capri"
            },
            {
              "label": "Private Sea Access",
              "href": "#sea"
            }
          ]
        }
      },
      {
        "id": "re5-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Amalfi Coast UNESCO World Heritage Line • Capri & Positano",
          "title": "Where Terraced Lemon Groves Cascade into Azure Sea",
          "subtitle": "Ancient stone archways, hand-painted Vietri majolica tiles, bougainvillea-covered pergolas, and private carved stone staircases descending directly into crystalline Mediterranean waters.",
          "primaryButtonText": "Explore Coast Villas",
          "primaryButtonLink": "#villas",
          "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Average Terrace Square Footage",
              "value": "2,800 Sq Ft"
            },
            {
              "id": "s2",
              "label": "Private Boat Moorings",
              "value": "Available"
            },
            {
              "id": "s3",
              "label": "Historical Origins",
              "value": "17th - 19th Century"
            }
          ]
        }
      },
      {
        "id": "re5-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "Italian Coastal Masterpieces",
          "title": "The Romance of Coastal Living",
          "subtitle": "Rare historical estates with modern seismic retrofitting and luxury amenities.",
          "items": [
            {
              "id": "vb1",
              "title": "Villa Sirenuse High Above Positano",
              "description": "5 Beds • 6 Baths • 520 Sqm • Infinity pool carved into rock with panoramic sunset views over Li Galli islands.",
              "price": "€16,800,000"
            },
            {
              "id": "vb2",
              "title": "The Anacapri Cliffside Sanctuary",
              "description": "6 Beds • 7 Baths • 680 Sqm • 2-Hectare private pine estate overlooking the Faraglioni rocks.",
              "price": "€22,500,000"
            },
            {
              "id": "vb3",
              "title": "Ravello Terraced Lemon Orchard Manor",
              "description": "4 Beds • 5 Baths • 440 Sqm • 300-year-old vaulted ceilings, frescoed salons, and private funicular lift.",
              "price": "€12,900,000"
            }
          ]
        }
      },
      {
        "id": "re5-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Acquire Your Private Slice of the Italian Dream",
          "description": "Our multilingual legal and notary team assists international buyers through all Italian conveyancing steps.",
          "primaryButtonText": "Request Villa Portfolio Dossier",
          "primaryButtonLink": "#villas"
        }
      },
      {
        "id": "re5-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "VILLA BELLISSIMA IMMOBILIARE",
          "copyrightText": "© 2026 Villa Bellissima S.r.l. Positano • Napoli • Milano."
        }
      }
    ]
  },
  {
    "id": "re-countryestates-01",
    "slug": "cotswold-stone-historic-manors",
    "name": "Cotswold Heritage Manors & Country Estates",
    "description": "Specialist country home agency marketing Grade II listed Cotswold honey-stone manors, equestrian grounds, and private trout rivers.",
    "industryId": "real-estate",
    "categoryId": "real-estate",
    "collectionId": "luxury-real-estate",
    "designStyle": "academic-classic",
    "featured": false,
    "tags": [
      "cotswolds",
      "country estate",
      "manor house",
      "grade listed",
      "equestrian",
      "english countryside"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "re6-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "COTSWOLD HERITAGE",
          "primaryButtonText": "Browse Manors",
          "primaryButtonLink": "#manors",
          "navLinks": [
            {
              "label": "Listed Manors",
              "href": "#manors"
            },
            {
              "label": "Equestrian Estates",
              "href": "#equestrian"
            },
            {
              "label": "Walled Gardens",
              "href": "#gardens"
            }
          ]
        }
      },
      {
        "id": "re6-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Area of Outstanding Natural Beauty • 90 Mins from London",
          "title": "Honey-Colored Limestone, Ancient Oaks, and Country Heritage",
          "subtitle": "Gable-roofed Jacobean and Georgian manors with mullioned stone windows, walled rose gardens, staff cottages, and private salmon rivers.",
          "primaryButtonText": "Explore Country Manors",
          "primaryButtonLink": "#manors",
          "imageUrl": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Average Estate Acreage",
              "value": "45 to 350 Acres"
            },
            {
              "id": "s2",
              "label": "Heritage Protection",
              "value": "Grade II & II* Listed"
            },
            {
              "id": "s3",
              "label": "Historic Cellars",
              "value": "Vaulted Flagstone"
            }
          ]
        }
      },
      {
        "id": "re6-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "English Country Properties",
          "title": "Centuries of English Architectural Grace",
          "subtitle": "Sympathetically restored with discreet modern heating, fiber connectivity, and wellness facilities.",
          "items": [
            {
              "id": "ch1",
              "title": "The Windrush Valley Jacobean Manor",
              "description": "8 Beds • 6 Reception Rooms • 65 Acres • Original flagstone hallways, oak paneling, and private river frontage.",
              "price": "£11,500,000"
            },
            {
              "id": "ch2",
              "title": "Chipping Campden Equestrian Estate",
              "description": "6 Beds • 4 Bathrooms • 42 Acres • Olympic-spec indoor manege, 12 American barn stables, and groom’s cottage.",
              "price": "£8,750,000"
            },
            {
              "id": "ch3",
              "title": "Georgian Honey-Stone Rectory & Walled Garden",
              "description": "5 Beds • 4 Baths • 12 Acres • Restored Gertrude Jekyll designed walled gardens and heated outdoor pool.",
              "price": "£6,200,000"
            }
          ]
        }
      },
      {
        "id": "re6-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Find Your Peaceful English Country Retreat",
          "description": "Our partners provide confidential buying advisory services for international and London clients.",
          "primaryButtonText": "Schedule Confidential Consultation",
          "primaryButtonLink": "#manors"
        }
      },
      {
        "id": "re6-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "COTSWOLD HERITAGE ESTATES",
          "copyrightText": "© 2026 Cotswold Heritage Real Estate Ltd. Cirencester • London."
        }
      }
    ]
  },
  {
    "id": "re-urbanlofts-01",
    "slug": "tribeca-brick-beam-industrial-lofts",
    "name": "Brick & Beam Tribeca Industrial Lofts",
    "description": "Historic Tribeca cast-iron building lofts featuring original timber beams, exposed brick, oversized factory sash windows, and key-locked elevator access.",
    "industryId": "real-estate",
    "categoryId": "luxury-real-estate",
    "collectionId": "luxury-real-estate",
    "designStyle": "brutalist-clean",
    "featured": false,
    "tags": [
      "tribeca",
      "loft",
      "industrial",
      "exposed brick",
      "cast iron",
      "new york real estate",
      "timber beams"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "re7-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "TRIBECA LOFTS",
          "primaryButtonText": "View Lofts",
          "primaryButtonLink": "#lofts",
          "navLinks": [
            {
              "label": "Cast-Iron Floorplates",
              "href": "#lofts"
            },
            {
              "label": "Original Details",
              "href": "#details"
            },
            {
              "label": "Franklin St Historic Block",
              "href": "#location"
            }
          ]
        }
      },
      {
        "id": "re7-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Tribeca Historic Landmark District • Built 1894",
          "title": "Authentic Industrial Scale, Massive Volume, Cast-Iron Soul",
          "subtitle": "Soaring 13-foot ceilings, Corinthian cast-iron structural columns, wide-plank reclaimed pine floors, and direct keyed elevator access into sprawling art collector spaces.",
          "primaryButtonText": "Browse Loft Floorplates",
          "primaryButtonLink": "#lofts",
          "imageUrl": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Ceiling Clearance",
              "value": "13.5 Ft Massive"
            },
            {
              "id": "s2",
              "label": "Average Floorplate Size",
              "value": "4,200 Sq Ft"
            },
            {
              "id": "s3",
              "label": "Direct Key-Locked Elevator",
              "value": "100% Private"
            }
          ]
        }
      },
      {
        "id": "re7-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Available Loft Spaces",
          "title": "Rare Full-Floor Architectural Volumes",
          "subtitle": "Retaining authentic 19th-century manufacturing character with state-of-the-art building infrastructure.",
          "items": [
            {
              "id": "tl1",
              "title": "Franklin Street Full-Floor Artist Loft",
              "description": "3 Beds • 3.5 Baths • 4,400 Sq Ft • 8 Massive arched south-facing windows, wood-burning hearth, and Valcucine kitchen.",
              "price": "$9,800,000"
            },
            {
              "id": "tl2",
              "title": "North Moore Street Penthouse Loft with Roof Deck",
              "description": "4 Beds • 4.5 Baths • 5,100 Sq Ft Interior • 1,500 Sq Ft Private landscaped roof terrace with outdoor kitchen.",
              "price": "$14,250,000"
            },
            {
              "id": "tl3",
              "title": "White Street Gallery Loft Residence",
              "description": "2 Beds • 2.5 Baths • 3,200 Sq Ft • 60-foot great room with museum-grade lighting and custom steel pivot doors.",
              "price": "$6,950,000"
            }
          ]
        }
      },
      {
        "id": "re7-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Live in Downtown Manhattan’s Most Coveted Enclave",
          "description": "Cobblestone streets, world-class dining, and unmatched architectural authenticity.",
          "primaryButtonText": "Schedule Private Loft Tour",
          "primaryButtonLink": "#lofts"
        }
      },
      {
        "id": "re7-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "TRIBECA CAST IRON LOFTS",
          "copyrightText": "© 2026 Tribeca Lofts Realty Inc. Franklin Street, New York, NY."
        }
      }
    ]
  },
  {
    "id": "re-desertmodernism-01",
    "slug": "palm-springs-mid-century-modern",
    "name": "Desert Modernism Palm Springs Architecture",
    "description": "Specialist brokerage celebrating restored 1950s and 60s mid-century modern architectural gems by Donald Wexler, William Krisel, and Richard Neutra.",
    "industryId": "real-estate",
    "categoryId": "luxury-real-estate",
    "collectionId": "luxury-real-estate",
    "designStyle": "minimal-neutral",
    "featured": false,
    "tags": [
      "mid century modern",
      "palm springs",
      "eichler",
      "neutra",
      "desert architecture",
      "butterfly roof",
      "pool home"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "re8-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "DESERT MODERNISM",
          "primaryButtonText": "View Desert Homes",
          "primaryButtonLink": "#homes",
          "navLinks": [
            {
              "label": "Butterfly Roofs",
              "href": "#butterfly"
            },
            {
              "label": "Architect Registry",
              "href": "#architects"
            },
            {
              "label": "Modernism Week",
              "href": "#modernism"
            }
          ]
        }
      },
      {
        "id": "re8-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Iconic Palm Springs Neighborhoods • Deepwell & Old Las Palmas",
          "title": "Clean Lines, Clerestory Windows, and San Jacinto Mountain Vistas",
          "subtitle": "Post-and-beam construction, floating tongue-and-groove cedar ceilings, breezeway concrete blocks, and turquoise kidney-shaped swimming pools surrounded by desert palms.",
          "primaryButtonText": "Explore Mid-Century Homes",
          "primaryButtonLink": "#homes",
          "imageUrl": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Average Sunny Days / Year",
              "value": "350 Days"
            },
            {
              "id": "s2",
              "label": "Preserved Architectural Details",
              "value": "100% Period-True"
            },
            {
              "id": "s3",
              "label": "Iconic Architects Featured",
              "value": "Wexler, Krisel, Cody"
            }
          ]
        }
      },
      {
        "id": "re8-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Curated Desert Homes",
          "title": "Authentic Mid-Century Architecture",
          "subtitle": "Carefully restored to preserve original historic aesthetics while upgrading insulation and solar power.",
          "items": [
            {
              "id": "dm1",
              "title": "1962 Donald Wexler Steel Post & Beam House",
              "description": "3 Beds • 3 Baths • 2,650 Sq Ft • Folded steel roofline, terrazzo floors, and original Alexander pool.",
              "price": "$2,850,000"
            },
            {
              "id": "dm2",
              "title": "William Krisel Butterfly Roof Residence in Twin Palms",
              "description": "4 Beds • 3.5 Baths • 3,100 Sq Ft • Clerestory mountain views, shadow-block breezeways, and outdoor fire bowl.",
              "price": "$2,450,000"
            },
            {
              "id": "dm3",
              "title": "Old Las Palmas Modernist Estate with Tennis Court",
              "description": "5 Beds • 6 Baths • 5,400 Sq Ft • 0.85 Acre walled private compound with citrus grove and guest casita.",
              "price": "$5,900,000"
            }
          ]
        }
      },
      {
        "id": "re8-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Own an Icon of California Architectural History",
          "description": "Our desert architecture specialists curate homes featured in Architectural Digest and Modernism Week.",
          "primaryButtonText": "Schedule Architecture Tour",
          "primaryButtonLink": "#homes"
        }
      },
      {
        "id": "re8-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "DESERT MODERNISM REALTY",
          "copyrightText": "© 2026 Desert Modernism Brokerage Inc. Palm Springs, California."
        }
      }
    ]
  },
  {
    "id": "re-ecovillage-01",
    "slug": "solterra-net-zero-solar-community",
    "name": "Solterra Net-Zero Sustainable Living Village",
    "description": "Regenerative eco-village community featuring mass timber homes, solar microgrids, community organic agriculture, and rainwater retention.",
    "industryId": "real-estate",
    "categoryId": "luxury-real-estate",
    "collectionId": "luxury-real-estate",
    "designStyle": "organic-natural",
    "featured": false,
    "tags": [
      "net zero",
      "eco village",
      "passive house",
      "solar homes",
      "sustainable community",
      "green real estate"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "re9-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "SOLTERRA // ECO",
          "primaryButtonText": "Tour Community",
          "primaryButtonLink": "#tour",
          "navLinks": [
            {
              "label": "Passive Homes",
              "href": "#homes"
            },
            {
              "label": "Microgrid Solar",
              "href": "#solar"
            },
            {
              "label": "Agrihood Farm",
              "href": "#farm"
            }
          ]
        }
      },
      {
        "id": "re9-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Certified Passive House Standard • 100% Net-Positive Energy",
          "title": "A Flourishing Village Designed in Harmony with Nature",
          "subtitle": "Triple-glazed airtight timber construction requiring 85% less energy to heat and cool. Powered by rooftop solar shingles and central battery microgrids with farm-to-table communal gardens.",
          "primaryButtonText": "Explore Available Eco-Homes",
          "primaryButtonLink": "#homes",
          "imageUrl": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Annual Utility Bills",
              "value": "$0 Net Positive"
            },
            {
              "id": "s2",
              "label": "Community Agrihood Acreage",
              "value": "45 Acres Organic"
            },
            {
              "id": "s3",
              "label": "Indoor Air Quality Index",
              "value": "AQI 10 Pure"
            }
          ]
        }
      },
      {
        "id": "re9-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Sustainable Living",
          "title": "The Future of Residential Living",
          "subtitle": "Designed for multi-generational families who value clean air, clean energy, and real community.",
          "items": [
            {
              "id": "st1",
              "title": "The Meadow Passive Timber Home (3 Bed)",
              "description": "Mass timber framing, induction cooktop, ERV continuous air filtration, and private vegetable greenhouse.",
              "price": "$1,250,000"
            },
            {
              "id": "st2",
              "title": "The Orchard Courtyard Villa (4 Bed)",
              "description": "Rooftop 15kW solar array, 30kWh home battery storage, rainwater harvesting, and electric vehicle bi-directional charging.",
              "price": "$1,680,000"
            },
            {
              "id": "st3",
              "title": "Shared Agrihood & Community Maker Barn",
              "description": "Weekly organic harvest baskets from on-site farm, co-working hub, and commercial canning kitchen.",
              "price": "Community Amenity"
            }
          ]
        }
      },
      {
        "id": "re9-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Step into a Healthier, Low-Impact Way of Living",
          "description": "Phase II home reservations now accepting priority lot deposits.",
          "primaryButtonText": "Reserve Your Eco-Lot",
          "primaryButtonLink": "#tour"
        }
      },
      {
        "id": "re9-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "SOLTERRA SUSTAINABLE LIVING",
          "copyrightText": "© 2026 Solterra Eco-Villages Inc. Boulder, Colorado."
        }
      }
    ]
  },
  {
    "id": "re-islandparadisio-01",
    "slug": "caribbean-deepwater-cay-islands",
    "name": "Deepwater Cays Private Island Brokerage",
    "description": "International private island brokerage representing freehold tropical islands, superyacht cays, and airstrip-equipped atolls across the Bahamas and Caribbean.",
    "industryId": "real-estate",
    "categoryId": "luxury-real-estate",
    "collectionId": "luxury-real-estate",
    "designStyle": "luxury-editorial",
    "featured": false,
    "tags": [
      "private island",
      "bahamas",
      "caribbean",
      "exuma cays",
      "superyacht",
      "luxury islands",
      "airstrip"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "re10-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "DEEPWATER CAYS",
          "primaryButtonText": "Inquire Islands",
          "primaryButtonLink": "#contact",
          "navLinks": [
            {
              "label": "Exumas Islands",
              "href": "#exumas"
            },
            {
              "label": "Airstrip Cays",
              "href": "#airstrips"
            },
            {
              "label": "Freehold Title",
              "href": "#freehold"
            }
          ]
        }
      },
      {
        "id": "re10-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Freehold Title • Private Sovereignty • Exumas & Caribbean",
          "title": "The Ultimate Trophy: An Entire Island of Your Own",
          "subtitle": "White powder sand beaches surrounded by fifty shades of turquoise water. Equipped with private runway airstrips, deepwater yacht anchorages, solar desalination, and total seclusion.",
          "primaryButtonText": "Explore Private Island Portfolio",
          "primaryButtonLink": "#contact",
          "imageUrl": "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Freehold Islands Listed",
              "value": "18 Cays"
            },
            {
              "id": "s2",
              "label": "Private Airstrips Included",
              "value": "Up to 3,500 Ft"
            },
            {
              "id": "s3",
              "label": "Water Clarity Visibility",
              "value": "100+ Feet"
            }
          ]
        }
      },
      {
        "id": "re10-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "Exclusive Island Offerings",
          "title": "Private Sanctuaries of Absolute Discretion",
          "subtitle": "Complete sovereign infrastructure including reverse osmosis water and satellite internet.",
          "items": [
            {
              "id": "dc1",
              "title": "Little Whale Cay (Exumas, Bahamas)",
              "description": "93 Acres • 4 Private Residences • 4,000 Ft Paved Airstrip • Deepwater marina capable of docking 100ft yachts.",
              "price": "$35,000,000"
            },
            {
              "id": "dc2",
              "title": "Pelican Reef Atoll (Belize Barrier Reef)",
              "description": "42 Acres • Natural deep harbor anchorage, thriving coral house reef, and turnkey 6-villa eco compound.",
              "price": "$18,500,000"
            },
            {
              "id": "dc3",
              "title": "Emerald Isle Cay (British Virgin Islands)",
              "description": "65 Acres • 3 Virgin sandy beaches, elevation up to 180 feet with panoramic 360-degree Sir Francis Drake Channel views.",
              "price": "$42,000,000"
            }
          ]
        }
      },
      {
        "id": "re10-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Take Sovereignty of Your Private Tropical Horizon",
          "description": "Our private island brokers arrange chartered seaplane and yacht inspections under strict mutual NDA.",
          "primaryButtonText": "Request Island Portfolio Dossier",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "re10-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "DEEPWATER CAYS ISLAND BROKERAGE",
          "copyrightText": "© 2026 Deepwater Cays Ltd. Nassau, Bahamas • Miami."
        }
      }
    ]
  },
  {
    "id": "re-golfestates-01",
    "slug": "fairway-club-reserve-villas",
    "name": "The Fairway Club Championship Golf Estates",
    "description": "Premier golf community real estate agency marketing luxury fairway villas, private cart barns, and membership privileges on PGA championship courses.",
    "industryId": "real-estate",
    "categoryId": "luxury-real-estate",
    "collectionId": "luxury-real-estate",
    "designStyle": "modern-corporate",
    "featured": false,
    "tags": [
      "golf real estate",
      "pga course",
      "fairway home",
      "country club",
      "scottsdale",
      "luxury villa"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "re11-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "THE FAIRWAY CLUB",
          "primaryButtonText": "Browse Fairway Homes",
          "primaryButtonLink": "#homes",
          "navLinks": [
            {
              "label": "Championship Course",
              "href": "#course"
            },
            {
              "label": "Club Membership",
              "href": "#club"
            },
            {
              "label": "Fairway Villas",
              "href": "#villas"
            }
          ]
        }
      },
      {
        "id": "re11-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Tom Fazio Designed 18-Hole Championship Course • Scottsdale",
          "title": "Wake Up Directly on the 18th Fairway",
          "subtitle": "Custom architectural villas featuring motorized glass pocket doors opening onto panoramic emerald greens, outdoor putting greens, and dedicated luxury golf cart garages.",
          "primaryButtonText": "View Fairway Villas",
          "primaryButtonLink": "#villas",
          "imageUrl": "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Championship Course Holes",
              "value": "36 Championship"
            },
            {
              "id": "s2",
              "label": "Average Green Stimp Rating",
              "value": "12.5 Fast"
            },
            {
              "id": "s3",
              "label": "Full Golf Membership",
              "value": "Deed Included"
            }
          ]
        }
      },
      {
        "id": "re11-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Course Residences",
          "title": "Tailored for the Dedicated Golfer",
          "subtitle": "Seamless access from your private cart path onto the practice range and clubhouse.",
          "items": [
            {
              "id": "fc1",
              "title": "The 18th Green Signature Residence",
              "description": "5 Beds • 6.5 Baths • 7,200 Sq Ft • Outdoor misting system, putting green, firepit, and Trackman golf simulator room.",
              "price": "$6,850,000"
            },
            {
              "id": "fc2",
              "title": "Desert Mountain Contemporary Fairway Villa",
              "description": "4 Beds • 4.5 Baths • 5,100 Sq Ft • Negative edge spa facing Pinnacle Peak and McDowell Mountain silhouettes.",
              "price": "$4,950,000"
            },
            {
              "id": "fc3",
              "title": "Golf Clubhouse Social & Wellness Membership",
              "description": "Full access to tennis pavilion, lap pool, fitness spa, and wine cellar dining rooms.",
              "price": "Included with Deed"
            }
          ]
        }
      },
      {
        "id": "re11-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Live Where You Love to Play Every Single Day",
          "description": "Full golf membership privileges transfer automatically with property title.",
          "primaryButtonText": "Schedule Fairway Discovery Tour",
          "primaryButtonLink": "#homes"
        }
      },
      {
        "id": "re11-footer",
        "type": "footer",
        "variant": "footer-multi-column",
        "visible": true,
        "content": {
          "title": "THE FAIRWAY CLUB REALTY",
          "copyrightText": "© 2026 Fairway Club Properties LLC. Scottsdale, Arizona."
        }
      }
    ]
  },
  {
    "id": "re-lakefrontresidences-01",
    "slug": "lake-tahoe-granite-shoreline-cabins",
    "name": "Lake Tahoe Granite Shoreline Waterfront Homes",
    "description": "Premier Lake Tahoe shoreline brokerage specializing in deepwater piers, private boat buoys, granite boulders, and mountain modern timber architecture.",
    "industryId": "real-estate",
    "categoryId": "luxury-real-estate",
    "collectionId": "luxury-real-estate",
    "designStyle": "dark-cinematic",
    "featured": false,
    "tags": [
      "lake tahoe",
      "waterfront",
      "lake house",
      "deepwater pier",
      "boat buoy",
      "mountain modern",
      "nevada real estate"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "re12-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "LAKE TAHOE SHORELINE",
          "primaryButtonText": "Browse Shoreline Homes",
          "primaryButtonLink": "#shoreline",
          "navLinks": [
            {
              "label": "Deepwater Piers",
              "href": "#piers"
            },
            {
              "label": "Nevada Tax Advantages",
              "href": "#tax"
            },
            {
              "label": "Mountain Modern",
              "href": "#architecture"
            }
          ]
        }
      },
      {
        "id": "re12-hero",
        "type": "hero",
        "variant": "hero-fullscreen-photo",
        "visible": true,
        "content": {
          "badge": "Lake Tahoe Crystal Bay & Glenbrook • Nevada Tax Haven",
          "title": "Direct Deepwater Pier Living on North America’s Clearest Alpine Lake",
          "subtitle": "Soak in breathtaking sunset pinks illuminating snow-capped peaks across crystal-clear blue waters. Private deepwater crib piers, hydraulic boat lifts, and heated lakeside fire terraces.",
          "primaryButtonText": "Explore Shoreline Residences",
          "primaryButtonLink": "#shoreline",
          "imageUrl": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Lake Clarity Measurement",
              "value": "75+ Ft Deep"
            },
            {
              "id": "s2",
              "label": "Private Deepwater Piers",
              "value": "Permitted Steel Crib"
            },
            {
              "id": "s3",
              "label": "Nevada State Income Tax",
              "value": "0% State Tax"
            }
          ]
        }
      },
      {
        "id": "re12-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Lakefront Estates",
          "title": "The Summit of Alpine Waterfront Living",
          "subtitle": "Rare shoreline properties with TRPA-certified piers and boat hoists.",
          "items": [
            {
              "id": "lt1",
              "title": "The Crystal Bay Granite Shoreline Estate",
              "description": "6 Beds • 8 Baths • 8,900 Sq Ft • 120 Ft shoreline, private pier with 12,000 lb boat lift, and dual buoys.",
              "price": "$27,500,000"
            },
            {
              "id": "lt2",
              "title": "Glenbrook Gated Community Mountain Modern",
              "description": "5 Beds • 6 Baths • 6,400 Sq Ft • Private community sandy beach, golf cart access, and pier privileges.",
              "price": "$18,900,000"
            },
            {
              "id": "lt3",
              "title": "Rubicon Bay Sandy Beach Retreat",
              "description": "4 Beds • 4.5 Baths • 4,800 Sq Ft • Gentle walk-in white sandy shoreline, outdoor hot tub, and cedar sauna.",
              "price": "$14,200,000"
            }
          ]
        }
      },
      {
        "id": "re12-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Claim Your Front-Row Seat on Lake Tahoe",
          "description": "Direct deepwater piers are strictly capped by lake environmental authorities and rarely trade.",
          "primaryButtonText": "Inquire with Shoreline Specialist",
          "primaryButtonLink": "#shoreline"
        }
      },
      {
        "id": "re12-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "LAKE TAHOE SHORELINE REALTY",
          "copyrightText": "© 2026 Tahoe Shoreline Estates Inc. Incline Village, Nevada."
        }
      }
    ]
  },
  {
    "id": "re-keypropertymgmt-01",
    "slug": "keystone-asset-management",
    "name": "KeyStone High-Value Property Asset Management",
    "description": "Premier residential property management firm providing institutional portfolio oversight, high-net-worth tenant vetting, and 24/7 proactive maintenance.",
    "industryId": "real-estate",
    "categoryId": "property-management",
    "collectionId": "luxury-real-estate",
    "designStyle": "modern-corporate",
    "featured": true,
    "tags": [
      "property management",
      "asset management",
      "tenant screening",
      "rental management",
      "luxury rentals",
      "hoa"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "re13-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "KEYSTONE // ASSETS",
          "primaryButtonText": "Get Management Proposal",
          "primaryButtonLink": "#proposal",
          "navLinks": [
            {
              "label": "Management Services",
              "href": "#services"
            },
            {
              "label": "Tenant Vetting",
              "href": "#vetting"
            },
            {
              "label": "Owner Portal",
              "href": "#portal"
            }
          ]
        }
      },
      {
        "id": "re13-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "$1.8 Billion In Residential Real Estate Under Stewardship",
          "title": "Protecting and Maximizing High-Value Real Estate Portfolios",
          "subtitle": "From single luxury penthouses to multi-family residential portfolios, we eliminate landlord stress through rigorous tenant background checks, automated rent collection, and white-glove maintenance.",
          "primaryButtonText": "Request Management Proposal",
          "primaryButtonLink": "#proposal",
          "imageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Average On-Time Rent Collection",
              "value": "99.4%"
            },
            {
              "id": "s2",
              "label": "Average Tenant Stay",
              "value": "3.2 Years"
            },
            {
              "id": "s3",
              "label": "Maintenance Response Time",
              "value": "<2 Hours"
            }
          ]
        }
      },
      {
        "id": "re13-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Asset Services",
          "title": "Total Peace of Mind for Property Owners",
          "subtitle": "Transparent real-time financial reporting accessible 24/7 via mobile owner portal.",
          "items": [
            {
              "id": "ks1",
              "title": "Rigorous Executive Tenant Screening",
              "description": "Comprehensive credit, criminal, asset verification, and prior landlord interviews to secure spotless occupants."
            },
            {
              "id": "ks2",
              "title": "Preventive HVAC & Mechanical Inspections",
              "description": "Quarterly certified inspections protecting high-value fixtures, sub-zero appliances, and climate systems."
            },
            {
              "id": "ks3",
              "title": "Automated Direct Deposit & Year-End Tax Packets",
              "description": "Direct monthly net income wiring and ready-to-file 1099 financial statements prepared for your CPA."
            }
          ]
        }
      },
      {
        "id": "re13-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Hand Off Your Rental Property Headaches Today",
          "description": "Receive a free rental rate valuation and management fee quote in under 24 hours.",
          "primaryButtonText": "Claim Free Rental Analysis",
          "primaryButtonLink": "#proposal"
        }
      },
      {
        "id": "re13-footer",
        "type": "footer",
        "variant": "footer-multi-column",
        "visible": true,
        "content": {
          "title": "KEYSTONE PROPERTY MANAGEMENT",
          "copyrightText": "© 2026 KeyStone Asset Management Inc. San Francisco • Los Angeles • Seattle."
        }
      }
    ]
  },
  {
    "id": "re-urbanlivingrentals-01",
    "slug": "metronest-boutique-property-managers",
    "name": "MetroNest Boutique Rental & Property Care",
    "description": "Modern property management agency for urban condo owners, offering high-end tenant matching, automated leasing, and 24/7 concierge response.",
    "industryId": "real-estate",
    "categoryId": "property-management",
    "collectionId": "luxury-real-estate",
    "designStyle": "minimal-neutral",
    "featured": false,
    "tags": [
      "property management",
      "condo rentals",
      "urban living",
      "tenant placement",
      "rent collection",
      "leasing"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "re14-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "METRONEST // PROPERTY",
          "primaryButtonText": "List Your Condo",
          "primaryButtonLink": "#list",
          "navLinks": [
            {
              "label": "Owner Pricing",
              "href": "#pricing"
            },
            {
              "label": "Tenant Portal",
              "href": "#tenants"
            },
            {
              "label": "Neighborhoods",
              "href": "#coverage"
            }
          ]
        }
      },
      {
        "id": "re14-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Zero Vacancy Days Average Between Leases • Flat Fee Pricing",
          "title": "Effortless Condo Ownership in the Heart of the City",
          "subtitle": "We market your downtown condo with architectural photography, secure top-tier corporate tenants, and handle all repairs so you simply collect passive monthly income.",
          "primaryButtonText": "Calculate Rental Income",
          "primaryButtonLink": "#list",
          "imageUrl": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Average Days to Lease",
              "value": "9 Days"
            },
            {
              "id": "s2",
              "label": "Owner Satisfaction",
              "value": "98.8%"
            },
            {
              "id": "s3",
              "label": "Units Under Care",
              "value": "820 Condos"
            }
          ]
        }
      },
      {
        "id": "re14-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Turnkey Services",
          "title": "Modern Care for Urban Condominiums",
          "subtitle": "Flat fee monthly plans with no surprise leasing markups or hidden fees.",
          "items": [
            {
              "id": "mn1",
              "title": "High-Impact Digital Marketing & Showings",
              "description": "Professional staging photography, 3D Matterport walkthroughs, and guided agent showings."
            },
            {
              "id": "mn2",
              "title": "Digital Lease Signing & Security Deposit Escrow",
              "description": "Legally compliant city-specific lease contracts, electronic signatures, and insured security deposit holding."
            },
            {
              "id": "mn3",
              "title": "24/7 Emergency Dispatch & Maintenance",
              "description": "Licensed, insured plumbers and electricians dispatched immediately for urgent tenant repair calls."
            }
          ]
        }
      },
      {
        "id": "re14-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Ready to Experience Hands-Off Real Estate Income?",
          "description": "Switching property managers is simple. We handle tenant transitions smoothly at zero cost.",
          "primaryButtonText": "Get Free Rental Estimate",
          "primaryButtonLink": "#list"
        }
      },
      {
        "id": "re14-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "METRONEST PROPERTY MANAGEMENT",
          "copyrightText": "© 2026 MetroNest Living Inc. Chicago • Boston • Austin."
        }
      }
    ]
  },
  {
    "id": "re-shorttermhost-01",
    "slug": "superhost-luxe-vacation-rental-management",
    "name": "SuperHost Luxe Vacation Rental Fleet Management",
    "description": "Turnkey short-term vacation rental management agency maximizing Airbnb revenue through algorithmic pricing, 5-star hotel linen service, and guest concierge.",
    "industryId": "real-estate",
    "categoryId": "property-management",
    "collectionId": "luxury-real-estate",
    "designStyle": "bold-creative",
    "featured": false,
    "tags": [
      "airbnb management",
      "vacation rental",
      "short term rental",
      "superhost",
      "dynamic pricing",
      "str management"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "re15-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "SUPERHOST LUXE",
          "primaryButtonText": "Estimate Revenue",
          "primaryButtonLink": "#estimate",
          "navLinks": [
            {
              "label": "Revenue Lift",
              "href": "#revenue"
            },
            {
              "label": "Hotel Turnovers",
              "href": "#turnover"
            },
            {
              "label": "Properties Managed",
              "href": "#fleet"
            }
          ]
        }
      },
      {
        "id": "re15-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "+42% Higher Net Earnings Than Traditional Long-Term Leases",
          "title": "Turn Your Second Home into a High-Yield Cash Generator",
          "subtitle": "We manage everything: dynamic daily price adjustments, professional guest vetting, 5-star hotel housekeeping, linen laundering, and 24/7 guest messaging.",
          "primaryButtonText": "Calculate Your Property’s Airbnb Yield",
          "primaryButtonLink": "#estimate",
          "imageUrl": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Average Superhost Rating",
              "value": "4.96 ★ Stars"
            },
            {
              "id": "s2",
              "label": "Occupancy Rate Year-Round",
              "value": "84%"
            },
            {
              "id": "s3",
              "label": "Average Revenue Multiplier",
              "value": "2.1x Market"
            }
          ]
        }
      },
      {
        "id": "re15-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Turnkey Operations",
          "title": "Five-Star Hospitality on Autopilot",
          "subtitle": "Owners retain full personal vacation calendar access with zero operational headaches.",
          "items": [
            {
              "id": "sh1",
              "title": "Algorithmic Dynamic Pricing Engine",
              "description": "Real-time price optimization adjusting for local events, festivals, flight bookings, and seasonal demand spikes."
            },
            {
              "id": "sh2",
              "title": "Commercial Hotel Linen & Housekeeping",
              "description": "Uniformed turnover teams providing freshly pressed 400-thread Egyptian cotton sheets, fluffy towels, and luxury toiletries."
            },
            {
              "id": "sh3",
              "title": "Strict Guest Screening & Noise Monitoring",
              "description": "Minut privacy-safe sound decibel monitors and ID verification that strictly prevent unauthorized parties."
            }
          ]
        }
      },
      {
        "id": "re15-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "See How Much Your Home Can Earn on Airbnb Luxe",
          "description": "Receive a complimentary 12-month revenue projection based on historical neighborhood comp data.",
          "primaryButtonText": "Get Free Revenue Projection",
          "primaryButtonLink": "#estimate"
        }
      },
      {
        "id": "re15-footer",
        "type": "footer",
        "variant": "footer-multi-column",
        "visible": true,
        "content": {
          "title": "SUPERHOST LUXE VACATION ASSETS",
          "copyrightText": "© 2026 SuperHost Luxe Inc. Miami • Scottsdale • Lake Tahoe."
        }
      }
    ]
  },
  {
    "id": "re-commercialrealty-01",
    "slug": "nexus-commercial-real-estate-partners",
    "name": "Nexus Commercial Real Estate Asset Partners",
    "description": "Commercial real estate asset management firm overseeing Class-A office towers, medical office pavilions, and urban retail centers.",
    "industryId": "real-estate",
    "categoryId": "property-management",
    "collectionId": "luxury-real-estate",
    "designStyle": "modern-corporate",
    "featured": false,
    "tags": [
      "commercial real estate",
      "office leasing",
      "retail management",
      "asset management",
      "class a office",
      "cre"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "re16-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "NEXUS // COMMERCIAL",
          "primaryButtonText": "Consult Asset Team",
          "primaryButtonLink": "#contact",
          "navLinks": [
            {
              "label": "Office Portfolios",
              "href": "#office"
            },
            {
              "label": "Medical Facilities",
              "href": "#medical"
            },
            {
              "label": "Investor Relations",
              "href": "#ir"
            }
          ]
        }
      },
      {
        "id": "re16-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Over 8.5 Million Sq Ft Under Active Commercial Management",
          "title": "Optimizing Commercial Yield and Tenant Retention",
          "subtitle": "We partner with institutional REITs and private family offices to lease, operate, and capital-upgrade Class-A office parks, medical plazas, and lifestyle centers.",
          "primaryButtonText": "Explore Commercial Capabilities",
          "primaryButtonLink": "#office",
          "imageUrl": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Commercial Sq Ft Managed",
              "value": "8.5M Sq Ft"
            },
            {
              "id": "s2",
              "label": "Lease Renewal Rate",
              "value": "92%"
            },
            {
              "id": "s3",
              "label": "CAM Expense Savings",
              "value": "-18% Saved"
            }
          ]
        }
      },
      {
        "id": "re16-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Commercial Disciplines",
          "title": "Operational Excellence for Institutional Landlords",
          "subtitle": "Proven strategies to compress operating expenses and expand net operating income (NOI).",
          "items": [
            {
              "id": "nc1",
              "title": "Triple-Net (NNN) Lease Administration",
              "description": "Accurate common area maintenance (CAM) reconciliations, insurance tracking, and tax escrows."
            },
            {
              "id": "nc2",
              "title": "Bespoke Tenant Improvement (TI) Buildouts",
              "description": "In-house project management delivering custom corporate architectural fit-outs on schedule and on budget."
            },
            {
              "id": "nc3",
              "title": "Smart Building IoT & Energy Management",
              "description": "Centralized HVAC automation and LED retrofits slashing utility expenditures while improving LEED scores."
            }
          ]
        }
      },
      {
        "id": "re16-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Increase Your Commercial NOI This Fiscal Year",
          "description": "Our senior commercial asset managers will conduct a full operational audit of your property.",
          "primaryButtonText": "Request Commercial Asset Audit",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "re16-footer",
        "type": "footer",
        "variant": "footer-multi-column",
        "visible": true,
        "content": {
          "title": "NEXUS COMMERCIAL PARTNERS",
          "copyrightText": "© 2026 Nexus Commercial Asset Group LLC. New York • Dallas • Charlotte."
        }
      }
    ]
  },
  {
    "id": "re-hoaadvisory-01",
    "slug": "communityshield-hoa-condo-management",
    "name": "CommunityShield HOA & Condominium Governance",
    "description": "Professional HOA and master-planned community management agency providing financial reserve studies, vendor compliance, and board governance.",
    "industryId": "real-estate",
    "categoryId": "property-management",
    "collectionId": "luxury-real-estate",
    "designStyle": "academic-classic",
    "featured": false,
    "tags": [
      "hoa management",
      "condo board",
      "community association",
      "reserve study",
      "bylaw enforcement",
      "governance"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "re17-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "COMMUNITYSHIELD",
          "primaryButtonText": "Request HOA Proposal",
          "primaryButtonLink": "#proposal",
          "navLinks": [
            {
              "label": "Board Governance",
              "href": "#governance"
            },
            {
              "label": "Reserve Studies",
              "href": "#reserves"
            },
            {
              "label": "Vendor Oversight",
              "href": "#vendors"
            }
          ]
        }
      },
      {
        "id": "re17-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Managing 120+ Premier Condominium & Townhome Associations",
          "title": "Transparent, Professional Governance for Community Boards",
          "subtitle": "We bring order and fiscal discipline to HOA and condo boards. Transparent accounting, automated dues collection, certified reserve fund analysis, and fair bylaw compliance.",
          "primaryButtonText": "Request Board Proposal",
          "primaryButtonLink": "#proposal",
          "imageUrl": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Dues Delinquency Rate Reduction",
              "value": "-82%"
            },
            {
              "id": "s2",
              "label": "Communities Managed",
              "value": "120+ HOAs"
            },
            {
              "id": "s3",
              "label": "Certified Community Managers",
              "value": "100% CMCA"
            }
          ]
        }
      },
      {
        "id": "re17-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "Association Governance",
          "title": "Protecting Community Value and Harmony",
          "subtitle": "Eliminate board burnout with comprehensive administrative, financial, and physical oversight.",
          "items": [
            {
              "id": "cs1",
              "title": "Automated Dues Portal & Financial Auditing",
              "description": "Direct debit and credit card resident payments, transparent budget forecasting, and annual independent audits."
            },
            {
              "id": "cs2",
              "title": "Competitive Vendor Sourcing & RFP Management",
              "description": "Vetting landscaping, pool maintenance, security, and elevator service contracts to trim 15-20% from association budgets."
            },
            {
              "id": "cs3",
              "title": "Statutory Capital Reserve Study Analysis",
              "description": "Long-term 30-year physical component replacement modeling preventing surprise special assessments."
            }
          ]
        }
      },
      {
        "id": "re17-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Is Your HOA Board Experiencing Vendor Chaos or Fiscal Stress?",
          "description": "Our senior association managers will evaluate your current financials and bylaws without charge.",
          "primaryButtonText": "Schedule Board Consultation",
          "primaryButtonLink": "#proposal"
        }
      },
      {
        "id": "re17-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "COMMUNITYSHIELD HOA MANAGEMENT",
          "copyrightText": "© 2026 CommunityShield Governance Partners Inc. Atlanta • Tampa."
        }
      }
    ]
  },
  {
    "id": "re-landlordpro-01",
    "slug": "propflow-multi-family-operations",
    "name": "PropFlow Multi-Family Residential Operations",
    "description": "Tech-enabled property management firm operating mid-rise and garden-style apartment communities with automated leasing and maintenance dispatch.",
    "industryId": "real-estate",
    "categoryId": "property-management",
    "collectionId": "luxury-real-estate",
    "designStyle": "technology-gradient",
    "featured": false,
    "tags": [
      "multi-family",
      "apartment operations",
      "leasing automation",
      "landlord software",
      "tenant app",
      "property operations"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "re18-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "PROPFLOW // OPS",
          "primaryButtonText": "Demo Platform",
          "primaryButtonLink": "#demo",
          "navLinks": [
            {
              "label": "Automated Leasing",
              "href": "#leasing"
            },
            {
              "label": "Maintenance Bots",
              "href": "#maintenance"
            },
            {
              "label": "Resident Mobile App",
              "href": "#app"
            }
          ]
        }
      },
      {
        "id": "re18-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Operating 4,500+ Multi-Family Units with 97.2% Occupancy",
          "title": "Autonomous Operations for Multi-Family Communities",
          "subtitle": "We replace outdated on-site leasing offices with AI self-guided smart lock tours, instant digital background checks, and automated maintenance ticketing that resolves issues in hours.",
          "primaryButtonText": "Request Operational Assessment",
          "primaryButtonLink": "#demo",
          "imageUrl": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Average Self-Guided Tour Conversion",
              "value": "46%"
            },
            {
              "id": "s2",
              "label": "Maintenance First-Visit Fix Rate",
              "value": "94%"
            },
            {
              "id": "s3",
              "label": "Payroll Overhead Reduction",
              "value": "-35%"
            }
          ]
        }
      },
      {
        "id": "re18-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "badge": "Tech-Powered Management",
          "title": "Frictionless Living for Residents. Peak NOI for Owners.",
          "subtitle": "Real-time property intelligence at your fingertips.",
          "items": [
            {
              "id": "pf1",
              "title": "Self-Guided Smart Lock Tours",
              "description": "Prospective renters scan ID, receive single-use digital Bluetooth keys, and tour available units on their own schedule."
            },
            {
              "id": "pf2",
              "title": "AI-Powered Maintenance Triage",
              "description": "Residents submit smartphone photos of leaks or broken appliances; our system automatically matches parts and dispatches vetted techs."
            },
            {
              "id": "pf3",
              "title": "Resident Perks & Rent Rewards Program",
              "description": "Incentivize on-time rent payments through credit score reporting and cashback rewards redeemable at local stores."
            }
          ]
        }
      },
      {
        "id": "re18-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Modernize Your Multi-Family Assets",
          "description": "Transition 50 to 500-unit properties to PropFlow within 30 days.",
          "primaryButtonText": "Book Operational Demo",
          "primaryButtonLink": "#demo"
        }
      },
      {
        "id": "re18-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "PROPFLOW MULTI-FAMILY SYSTEMS",
          "copyrightText": "© 2026 PropFlow Technologies Inc. Phoenix • Denver • Dallas."
        }
      }
    ]
  },
  {
    "id": "re-luminaryapartments-01",
    "slug": "the-luminary-high-rise-apartments",
    "name": "The Luminary Downtown Luxury Residences",
    "description": "Iconic 50-story downtown residential tower featuring studio to 3-bedroom luxury flats, 24/7 valet, private cinema, and rooftop glass-bottom cantilevered pool.",
    "industryId": "real-estate",
    "categoryId": "apartment-complex",
    "collectionId": "luxury-real-estate",
    "designStyle": "luxury-editorial",
    "featured": true,
    "tags": [
      "luxury apartments",
      "high rise",
      "downtown living",
      "penthouse rental",
      "infinity pool",
      "concierge"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "re19-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "THE LUMINARY",
          "primaryButtonText": "Schedule Tour",
          "primaryButtonLink": "#tour",
          "navLinks": [
            {
              "label": "Residences",
              "href": "#floorplans"
            },
            {
              "label": "50th Floor Pool",
              "href": "#pool"
            },
            {
              "label": "Club Amenities",
              "href": "#amenities"
            }
          ]
        }
      },
      {
        "id": "re19-hero",
        "type": "hero",
        "variant": "hero-fullscreen-photo",
        "visible": true,
        "content": {
          "badge": "50 Stories Above The City • Now Welcoming Immediate Move-Ins",
          "title": "Downtown Living Elevated to Pure Architectural Brilliance",
          "subtitle": "Floor-to-ceiling glass walls, Italian Scavolini kitchens, Sub-Zero appliances, private balconies, and an awe-inspiring glass-bottom infinity pool suspended 500 feet in the sky.",
          "primaryButtonText": "View Available Floor Plans",
          "primaryButtonLink": "#floorplans",
          "imageUrl": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Tower Height",
              "value": "50 Stories High"
            },
            {
              "id": "s2",
              "label": "Rooftop Pool Elevation",
              "value": "500 Feet"
            },
            {
              "id": "s3",
              "label": "Valet & Concierge Staff",
              "value": "24/7 Dedicated"
            }
          ]
        }
      },
      {
        "id": "re19-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Tower Amenities",
          "title": "Six-Star Hotel Living Every Day",
          "subtitle": "Designed to elevate every aspect of your downtown lifestyle.",
          "items": [
            {
              "id": "lm1",
              "title": "The Sky Club & Glass Cantilever Pool",
              "description": "Heated infinity pool hanging over the streetscape, private cabanas, and sunset cocktail service."
            },
            {
              "id": "lm2",
              "title": "Equinox-Inspired Wellness & Recovery Spa",
              "description": "Peloton studio, eucalyptus steam rooms, infrared cedar saunas, and private personal training suites."
            },
            {
              "id": "lm3",
              "title": "Private Screening Room & Executive Co-Working",
              "description": "Dolby Atmos 18-seat private cinema and soundproof Zoom focus pods with fiber gigabit internet."
            }
          ]
        }
      },
      {
        "id": "re19-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Claim Your Elevated Perspective Over the City",
          "description": "Special move-in incentives including 6 weeks complimentary rent on select 2-bedroom corner residences.",
          "primaryButtonText": "Book Private Residence Tour",
          "primaryButtonLink": "#tour"
        }
      },
      {
        "id": "re19-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "THE LUMINARY RESIDENCES",
          "copyrightText": "© 2026 The Luminary Tower LLC. Downtown Metropolis."
        }
      }
    ]
  },
  {
    "id": "re-botanicalflats-01",
    "slug": "greenleaf-biophilic-apartments",
    "name": "GreenLeaf Biophilic Urban Living Flats",
    "description": "Eco-modern apartment complex incorporating 4-story living plant walls, rooftop community organic farm, solar shading, and wellness yoga lawns.",
    "industryId": "real-estate",
    "categoryId": "apartment-complex",
    "collectionId": "luxury-real-estate",
    "designStyle": "organic-natural",
    "featured": false,
    "tags": [
      "biophilic living",
      "green apartments",
      "living wall",
      "rooftop farm",
      "eco friendly",
      "healthy living"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "re20-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "GREENLEAF // LIVING",
          "primaryButtonText": "Schedule Visit",
          "primaryButtonLink": "#visit",
          "navLinks": [
            {
              "label": "Botanical Flats",
              "href": "#flats"
            },
            {
              "label": "Living Plant Walls",
              "href": "#nature"
            },
            {
              "label": "Rooftop Farming",
              "href": "#farm"
            }
          ]
        }
      },
      {
        "id": "re20-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "LEED Platinum Certified • 12,000 Living Plants Integrated",
          "title": "Where Urban Energy Meets Healing Natural Greenery",
          "subtitle": "Air purified by towering multi-story internal living plant walls, daylight-optimized floor plans, natural timber finishes, and an expansive rooftop community organic vegetable garden.",
          "primaryButtonText": "Explore Green Flats",
          "primaryButtonLink": "#flats",
          "imageUrl": "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Living Wall Plant Count",
              "value": "12,000+ Plants"
            },
            {
              "id": "s2",
              "label": "Fresh Air Turnover Rate",
              "value": "100% Outdoor Air"
            },
            {
              "id": "s3",
              "label": "Rooftop Organic Produce",
              "value": "Free for Residents"
            }
          ]
        }
      },
      {
        "id": "re20-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Living Amenities",
          "title": "A Restorative Urban Sanctuary",
          "subtitle": "Designed to reduce cortisol, encourage connection, and optimize well-being.",
          "items": [
            {
              "id": "gl1",
              "title": "Four-Story Living Atrium Green Wall",
              "description": "Massive vertical biological air purification wall cascading with ferns, philodendrons, and flowering orchids."
            },
            {
              "id": "gl2",
              "title": "Rooftop Greenhouse & Community Garden Beds",
              "description": "Harvest heirloom tomatoes, fresh herbs, and leafy greens for your dinner table from our resident farm."
            },
            {
              "id": "gl3",
              "title": "Circadian Human-Centric Natural Lighting",
              "description": "Automated dynamic lighting that mimics the natural color temperatures of the sun throughout the day."
            }
          ]
        }
      },
      {
        "id": "re20-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Experience Life in Nature, Right in the City",
          "description": "Studio, 1-bedroom, and 2-bedroom flats available for summer leasing.",
          "primaryButtonText": "Book GreenLeaf Tour",
          "primaryButtonLink": "#visit"
        }
      },
      {
        "id": "re20-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "GREENLEAF BIOPHILIC RESIDENCES",
          "copyrightText": "© 2026 GreenLeaf Living LLC. Seattle • Portland."
        }
      }
    ]
  },
  {
    "id": "re-harborviewapts-01",
    "slug": "beacon-harbor-waterfront-flats",
    "name": "Beacon Harbor Waterfront Boardwalk Flats",
    "description": "Maritime waterfront apartment community featuring direct marina boardwalk access, kayak launch docks, waterfront dog parks, and harbor-view balconies.",
    "industryId": "real-estate",
    "categoryId": "apartment-complex",
    "collectionId": "luxury-real-estate",
    "designStyle": "minimal-neutral",
    "featured": false,
    "tags": [
      "waterfront apartments",
      "marina living",
      "harbor view",
      "kayak launch",
      "dog park",
      "boardwalk"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "re21-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "BEACON HARBOR",
          "primaryButtonText": "View Waterfront Units",
          "primaryButtonLink": "#units",
          "navLinks": [
            {
              "label": "Harbor Views",
              "href": "#views"
            },
            {
              "label": "Marina Kayak Dock",
              "href": "#dock"
            },
            {
              "label": "Floor Plans",
              "href": "#plans"
            }
          ]
        }
      },
      {
        "id": "re21-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Direct Harbor Boardwalk Access • Pet Friendly",
          "title": "Maritime Serenity with City Skyline Reflections",
          "subtitle": "Step straight from your private balcony onto the wooden boardwalk. Watch sailing regattas, paddle kayaks on calm morning waters, and enjoy coastal harbor sunsets every evening.",
          "primaryButtonText": "See Available Waterfront Flats",
          "primaryButtonLink": "#units",
          "imageUrl": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Waterfront Frontage",
              "value": "1,200 Ft"
            },
            {
              "id": "s2",
              "label": "Resident Kayak Storage",
              "value": "Complimentary"
            },
            {
              "id": "s3",
              "label": "Downtown Water Taxi",
              "value": "On-Site Stop"
            }
          ]
        }
      },
      {
        "id": "re21-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Coastal Living Perks",
          "title": "A Nautical Lifestyle for City Dwellers",
          "subtitle": "Everything you need to enjoy waterfront living right outside your front door.",
          "items": [
            {
              "id": "bh1",
              "title": "Private Resident Kayak & Paddleboard Launch",
              "description": "Floating low-profile launch dock with complimentary equipment checkout and life vests."
            },
            {
              "id": "bh2",
              "title": "Harborside Dog Park & Pet Spa",
              "description": "Fenced agility lawn with synthetic antimicrobial turf and warm-water pet wash stations."
            },
            {
              "id": "bh3",
              "title": "Direct Water Taxi Terminal to Financial District",
              "description": "Breeze past highway traffic with a scenic 12-minute catamaran ferry commute directly to downtown."
            }
          ]
        }
      },
      {
        "id": "re21-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Claim Your Harbor-View Balcony Before Summer",
          "description": "Ask about our preferred employer programs and flexible lease terms.",
          "primaryButtonText": "Schedule Harbor Showing",
          "primaryButtonLink": "#units"
        }
      },
      {
        "id": "re21-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "BEACON HARBOR LIVING",
          "copyrightText": "© 2026 Beacon Harbor Apartments LLC. Boston • Baltimore."
        }
      }
    ]
  },
  {
    "id": "re-artsdistrictlofts-01",
    "slug": "the-kiln-arts-district-lofts",
    "name": "The Kiln Arts District Studio Lofts",
    "description": "Converted historic ceramics factory offering open-concept live/work artist lofts with 18-foot ceilings, communal woodshop, and gallery exhibitions.",
    "industryId": "real-estate",
    "categoryId": "apartment-complex",
    "collectionId": "luxury-real-estate",
    "designStyle": "brutalist-clean",
    "featured": false,
    "tags": [
      "artist loft",
      "live work",
      "maker space",
      "arts district",
      "industrial",
      "gallery",
      "open concept"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "re22-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "THE KILN // LOFTS",
          "primaryButtonText": "Apply for Loft",
          "primaryButtonLink": "#apply",
          "navLinks": [
            {
              "label": "Live/Work Floorplates",
              "href": "#lofts"
            },
            {
              "label": "Maker Workshop",
              "href": "#maker"
            },
            {
              "label": "Resident Gallery",
              "href": "#gallery"
            }
          ]
        }
      },
      {
        "id": "re22-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Historic 1912 Industrial Ceramics Kiln Factory • Arts District",
          "title": "Massive Creative Live/Work Spaces for Designers and Makers",
          "subtitle": "Polished raw concrete floors, exposed steel ductwork, 18-foot ceilings with north-facing skylights, 220V heavy power outlets, and full access to our community CNC and woodworking shop.",
          "primaryButtonText": "View Live/Work Lofts",
          "primaryButtonLink": "#lofts",
          "imageUrl": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Clearance Ceiling Heights",
              "value": "18 Feet High"
            },
            {
              "id": "s2",
              "label": "Industrial Freight Elevator",
              "value": "8,000 Lb Capacity"
            },
            {
              "id": "s3",
              "label": "Resident Maker Equipment",
              "value": "CNC, 3D Print, Wood"
            }
          ]
        }
      },
      {
        "id": "re22-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Creator Facilities",
          "title": "Built Specifically for Heavy Creative Work",
          "subtitle": "Legal live/work zoning permitting light manufacturing, photography studios, and digital agencies.",
          "items": [
            {
              "id": "kl1",
              "title": "Community Maker Space & Fabrication Lab",
              "description": "Equipped with SawStop table saws, industrial drill presses, 3D printers, and ceramic pottery wheels."
            },
            {
              "id": "kl2",
              "title": "Ground-Floor Resident Art Gallery",
              "description": "Monthly First Friday open gallery nights showcasing resident art, design products, and creative exhibitions."
            },
            {
              "id": "kl3",
              "title": "Massive Industrial Freight Elevator & Loading Dock",
              "description": "Drive straight into the loading bay to easily transport oversized sculptures, lumber, and canvases."
            }
          ]
        }
      },
      {
        "id": "re22-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Join an Inspiring Community of Creators",
          "description": "Live and build in one uncompromised, inspiring space with like-minded creators.",
          "primaryButtonText": "Submit Artist / Maker Application",
          "primaryButtonLink": "#apply"
        }
      },
      {
        "id": "re22-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "THE KILN ARTS DISTRICT LOFTS",
          "copyrightText": "© 2026 The Kiln Arts Living LLC. Los Angeles • Denver."
        }
      }
    ]
  },
  {
    "id": "re-studentresidences-01",
    "slug": "campusedge-smart-student-residences",
    "name": "CampusEdge Smart Collegiate Living",
    "description": "Modern, fully furnished university student apartments with gigabit study lounges, private podcast booths, gaming suites, and roommate matching.",
    "industryId": "real-estate",
    "categoryId": "apartment-complex",
    "collectionId": "luxury-real-estate",
    "designStyle": "bold-creative",
    "featured": false,
    "tags": [
      "student housing",
      "college apartments",
      "furnished student living",
      "study lounge",
      "campus living"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "re23-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "CAMPUSEDGE // LIVING",
          "primaryButtonText": "Reserve Room",
          "primaryButtonLink": "#reserve",
          "navLinks": [
            {
              "label": "Furnished Suites",
              "href": "#suites"
            },
            {
              "label": "Study Lounges",
              "href": "#study"
            },
            {
              "label": "Roommate Match",
              "href": "#match"
            }
          ]
        }
      },
      {
        "id": "re23-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Steps from University Quad • All Utilities & High-Speed Wi-Fi Included",
          "title": "Collegiate Living Redesigned for Academic and Social Success",
          "subtitle": "Individual leases, modern private bedrooms, memory foam beds, in-unit laundry, 24/7 quiet study hubs, and a rooftop resort pool to celebrate after finals.",
          "primaryButtonText": "Explore Floor Plans",
          "primaryButtonLink": "#suites",
          "imageUrl": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Walking Time to Main Quad",
              "value": "3 Minutes"
            },
            {
              "id": "s2",
              "label": "Internet Speed Per Room",
              "value": "1 Gbps Symmetrical"
            },
            {
              "id": "s3",
              "label": "All Utilities Included",
              "value": "Zero Bills"
            }
          ]
        }
      },
      {
        "id": "re23-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Student Amenities",
          "title": "Everything You Need to Excel in School",
          "subtitle": "Individual liability leases so you are never on the hook for a roommate’s rent.",
          "items": [
            {
              "id": "ce1",
              "title": "24/7 Quiet Study Pavilions & Printing",
              "description": "Dual-monitor iMac workstations, free color printing, and private soundproof rooms for exam cramming."
            },
            {
              "id": "ce2",
              "title": "Resort Pool Deck & Sand Volleyball Court",
              "description": "Heated outdoor swimming pool, hot tub, cabanas with charging stations, and barbecue grills."
            },
            {
              "id": "ce3",
              "title": "Smart Mobile Access & Secure Package Lockers",
              "description": "Keyless smartphone entry to building, apartment, and private bedroom with automated Amazon package lockers."
            }
          ]
        }
      },
      {
        "id": "re23-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Lock In Your Room for the Upcoming Academic Year",
          "description": "Spaces sell out early each spring. Apply online in 10 minutes with zero application fee.",
          "primaryButtonText": "Apply for Upcoming Fall Term",
          "primaryButtonLink": "#reserve"
        }
      },
      {
        "id": "re23-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "CAMPUSEDGE STUDENT HOUSING",
          "copyrightText": "© 2026 CampusEdge Communities Inc. Ann Arbor • Austin • Madison."
        }
      }
    ]
  },
  {
    "id": "re-seniorresidences-01",
    "slug": "silvermeadow-senior-living-residences",
    "name": "SilverMeadow Independent Senior Living Pavilions",
    "description": "Resort-style independent senior community featuring single-story garden cottages, chef dining rooms, wellness physiotherapy, and vibrant social clubs.",
    "industryId": "real-estate",
    "categoryId": "apartment-complex",
    "collectionId": "luxury-real-estate",
    "designStyle": "soft-pastel",
    "featured": false,
    "tags": [
      "senior living",
      "independent living",
      "retirement community",
      "chef dining",
      "wellness",
      "cottages"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "re24-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "SILVERMEADOW",
          "primaryButtonText": "Schedule Family Visit",
          "primaryButtonLink": "#visit",
          "navLinks": [
            {
              "label": "Garden Cottages",
              "href": "#cottages"
            },
            {
              "label": "Chef Dining",
              "href": "#dining"
            },
            {
              "label": "Wellness Pavilion",
              "href": "#wellness"
            }
          ]
        }
      },
      {
        "id": "re24-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Resort-Style Independent Living • 24/7 On-Site Wellness Staff",
          "title": "A Vibrant, Active, and Engaging Chapter of Life",
          "subtitle": "Single-story light-filled garden cottages with zero step thresholds, beautiful walking trails around our tranquil pond, gourmet scratch dining, and a warm community of friends.",
          "primaryButtonText": "Explore Living Cottages",
          "primaryButtonLink": "#cottages",
          "imageUrl": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Resident Happiness Rating",
              "value": "99.2%"
            },
            {
              "id": "s2",
              "label": "Daily Social Activities",
              "value": "14+ Clubs"
            },
            {
              "id": "s3",
              "label": "Chef-Prepared Daily Meals",
              "value": "3 Gourmet"
            }
          ]
        }
      },
      {
        "id": "re24-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Life at SilverMeadow",
          "title": "Freedom, Security, and Genuine Connection",
          "subtitle": "Maintenance-free living so you can dedicate every day to your passions and friendships.",
          "items": [
            {
              "id": "sm1",
              "title": "Executive Chef Farm-to-Table Dining",
              "description": "Seasonal restaurant-style menus with dietary accommodations, wine pairings, and private dining for family celebrations."
            },
            {
              "id": "sm2",
              "title": "Heated Hydrotherapy Pool & Fitness Studio",
              "description": "Gentle water aerobics, joint mobility classes, and personalized physical therapy sessions."
            },
            {
              "id": "sm3",
              "title": "Chauffeured Transportation & Excursions",
              "description": "Scheduled limousine transport for medical appointments, symphony concerts, and museum outings."
            }
          ]
        }
      },
      {
        "id": "re24-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Come Experience The Warmth of Our Community",
          "description": "Join us for a complimentary chef-prepared lunch and guided tour of our landscaped grounds.",
          "primaryButtonText": "Book Family Lunch & Tour",
          "primaryButtonLink": "#visit"
        }
      },
      {
        "id": "re24-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "SILVERMEADOW SENIOR LIVING",
          "copyrightText": "© 2026 SilverMeadow Communities LLC. Scottsdale • Sarasota."
        }
      }
    ]
  }
];
