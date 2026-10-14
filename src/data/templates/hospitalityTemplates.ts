import { TemplateConfig } from '../../types';

export const HOSPITALITY_TEMPLATES: TemplateConfig[] = [
  {
    "id": "hosp-obsidian-01",
    "slug": "obsidian-cliff-sanctuary-resort",
    "name": "The Obsidian Cliff Villas & Sanctuary",
    "description": "Ultra-exclusive oceanfront cliffside resort with private infinity plunge pools, Ayurvedic spa pavilions, and Michelin-starred dining.",
    "industryId": "hospitality-travel",
    "categoryId": "resort",
    "collectionId": "luxury-hotel-resort",
    "designStyle": "premium-hospitality",
    "featured": true,
    "tags": [
      "hotel",
      "resort",
      "luxury hotel",
      "suites",
      "vacation",
      "villas",
      "hospitality",
      "infinity pool"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ht1-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "THE OBSIDIAN CLIFF",
          "badge": "Relais & Châteaux Member",
          "primaryButtonText": "Check Availability",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Sanctuary Villas",
              "href": "#suites"
            },
            {
              "label": "Wellness Spa",
              "href": "#spa"
            },
            {
              "label": "Private Dining",
              "href": "#dining"
            },
            {
              "label": "Experiences",
              "href": "#experiences"
            }
          ]
        }
      },
      {
        "id": "ht1-hero",
        "type": "hero",
        "variant": "hero-fullscreen-photo",
        "visible": true,
        "content": {
          "badge": "Private Oceanfront Sanctuaries",
          "title": "Where the Horizon Melts into Stillness",
          "subtitle": "Perched 200 feet above the azure coastline, twenty-four private pool villas provide an intimate sanctuary untouched by the modern world.",
          "primaryButtonText": "Reserve Your Villa",
          "primaryButtonLink": "#booking",
          "secondaryButtonText": "Explore Estate Grounds",
          "secondaryButtonLink": "#suites",
          "imageUrl": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
          "imageAlt": "Private cliffside infinity pool overlooking the ocean at dusk",
          "stats": [
            {
              "id": "hts1",
              "label": "Private Guest Villas",
              "value": "24 Only"
            },
            {
              "id": "hts2",
              "label": "Dedicated Butler Ratio",
              "value": "1:1"
            },
            {
              "id": "hts3",
              "label": "Guest Privacy Rating",
              "value": "100%"
            }
          ]
        }
      },
      {
        "id": "ht1-rooms",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Villa Accommodations",
          "title": "Architectural Cliffside Living",
          "subtitle": "Constructed with local volcanic stone, aged teak wood, and floor-to-ceiling retractable glass walls.",
          "items": [
            {
              "id": "rm1",
              "title": "Ocean Horizon Pool Pavilion",
              "description": "1,800 sq ft pavilion featuring a 15-meter cantilevered infinity pool, outdoor rain shower, and sunken marble bathtub.",
              "price": "From $1,450 / night"
            },
            {
              "id": "rm2",
              "title": "The Grand Cliffside Sanctuary",
              "description": "Two-bedroom estate with private chef kitchen, private wellness steam suite, and panoramic 270-degree sunset views.",
              "price": "From $2,800 / night"
            },
            {
              "id": "rm3",
              "title": "Ayurvedic Garden Suite",
              "description": "Surrounded by fragrant frangipani and night-blooming jasmine, with private outdoor lotus soaking pond.",
              "price": "From $1,150 / night"
            }
          ]
        }
      },
      {
        "id": "ht1-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Escape to Pure Solitude",
          "description": "Reservations include daily organic breakfast, afternoon tea, dedicated butler service, and private yacht transfers.",
          "primaryButtonText": "Inquire for Seasonal Dates",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "ht1-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "THE OBSIDIAN CLIFF SANCTUARY",
          "copyrightText": "© 2026 The Obsidian Cliff Hospitality Group. Big Sur, California."
        }
      }
    ]
  },
  {
    "id": "hosp-chaletalpin-01",
    "slug": "chalet-lalpiniste-zermatt",
    "name": "Chalet L'Alpiniste Luxury Alpine Lodge",
    "description": "Exclusive ski-in ski-out Swiss chalet facing the Matterhorn, featuring crackling stone fireplaces, private cedar hot tubs, and Michelin-trained chef service.",
    "industryId": "hospitality-travel",
    "categoryId": "luxury-hotel",
    "collectionId": "luxury-hotel-resort",
    "designStyle": "luxury-editorial",
    "featured": true,
    "tags": [
      "ski lodge",
      "swiss alps",
      "zermatt",
      "luxury chalet",
      "matterhorn",
      "winter resort",
      "spa"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ht2-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "CHALET L'ALPINISTE",
          "primaryButtonText": "Reserve Winter Season",
          "primaryButtonLink": "#reserve",
          "navLinks": [
            {
              "label": "Chalet Suites",
              "href": "#suites"
            },
            {
              "label": "Alpine Spa",
              "href": "#spa"
            },
            {
              "label": "Private Chef",
              "href": "#dining"
            },
            {
              "label": "Ski Concierge",
              "href": "#ski"
            }
          ]
        }
      },
      {
        "id": "ht2-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Direct Ski-In / Ski-Out Access • Matterhorn Views",
          "title": "Alpine Splendor at the Roof of the World",
          "subtitle": "Step straight from your private heated ski room onto pristine powdered pistes. Return to roaring fireplaces, vintage fondue cellars, and cedar hot tubs under star-strewn skies.",
          "primaryButtonText": "Check Chalet Dates",
          "primaryButtonLink": "#reserve",
          "imageUrl": "https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Elevation",
              "value": "2,200m"
            },
            {
              "id": "s2",
              "label": "Ski-in Ski-Out Pistes",
              "value": "360km"
            },
            {
              "id": "s3",
              "label": "Private Wine Cellar",
              "value": "1,800 Bottles"
            }
          ]
        }
      },
      {
        "id": "ht2-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "Alpine Amenities",
          "title": "Tailored Mountain Luxury",
          "subtitle": "Every winter stay is fully catered by our dedicated chalet host, sommelier, and private ski guide.",
          "items": [
            {
              "id": "ch1",
              "title": "Private Heated Ski Room & Boot Warmers",
              "description": "State-of-the-art ski racks, heated glove and boot dryers, and morning weather condition briefings."
            },
            {
              "id": "ch2",
              "title": "Thermal Cedar Hot Tub & Finnish Sauna",
              "description": "Outdoor wood-fired red cedar hot tubs overlooking the Matterhorn silhouette at twilight."
            },
            {
              "id": "ch3",
              "title": "Six-Course Evening Gastronomy",
              "description": "Curated menus featuring dry-aged local beef, wild alpine truffles, and rare Swiss Valais vintages."
            }
          ]
        }
      },
      {
        "id": "ht2-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Winter Season 2026 Reservations Now Open",
          "description": "Chalet buyouts available for intimate gatherings and corporate executive retreats.",
          "primaryButtonText": "Inquire for Chalet Buyout",
          "primaryButtonLink": "#reserve"
        }
      },
      {
        "id": "ht2-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "CHALET L'ALPINISTE ZERMATT",
          "copyrightText": "© 2026 Chalet L’Alpiniste SA. Zermatt, Switzerland."
        }
      }
    ]
  },
  {
    "id": "hosp-azureretreat-01",
    "slug": "azure-atoll-overwater-bungalows",
    "name": "Azure Atoll Overwater Villas & Spa",
    "description": "Secluded private atoll sanctuary in the Maldives featuring glass-floor overwater bungalows, coral reef restoration, and underwater dining.",
    "industryId": "hospitality-travel",
    "categoryId": "resort",
    "collectionId": "luxury-hotel-resort",
    "designStyle": "premium-hospitality",
    "featured": true,
    "tags": [
      "maldives",
      "overwater villa",
      "island resort",
      "lagoon",
      "snorkeling",
      "underwater dining",
      "honeymoon"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ht3-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "AZURE ATOLL",
          "primaryButtonText": "Reserve Bungalow",
          "primaryButtonLink": "#booking",
          "navLinks": [
            {
              "label": "Overwater Villas",
              "href": "#villas"
            },
            {
              "label": "Subsea Dining",
              "href": "#dining"
            },
            {
              "label": "Coral Diving",
              "href": "#diving"
            }
          ]
        }
      },
      {
        "id": "ht3-hero",
        "type": "hero",
        "variant": "hero-fullscreen-photo",
        "visible": true,
        "content": {
          "badge": "UNESCO Biosphere Reserve • Baa Atoll",
          "title": "Wake Up Suspended Above Turquoise Waters",
          "subtitle": "Step directly from your private sun deck into crystal-clear lagoon waters teeming with manta rays and vibrant coral gardens.",
          "primaryButtonText": "Explore Overwater Villas",
          "primaryButtonLink": "#villas",
          "imageUrl": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Overwater Villas",
              "value": "32 Villas"
            },
            {
              "id": "s2",
              "label": "House Reef Visibility",
              "value": "40+ Meters"
            },
            {
              "id": "s3",
              "label": "Solar Powered Ratio",
              "value": "100% Green"
            }
          ]
        }
      },
      {
        "id": "ht3-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Island Experiences",
          "title": "Unrivaled Indian Ocean Luxury",
          "subtitle": "Tailored experiences crafted for couples, divers, and marine enthusiasts.",
          "items": [
            {
              "id": "az1",
              "title": "Subsea 5-Meter Coral Dining Room",
              "description": "Enjoy multi-course degustation menus while reef sharks and sea turtles glide past curved acrylic walls."
            },
            {
              "id": "az2",
              "title": "Sunset Catamaran Manta Safaris",
              "description": "Private marine biologist-led expeditions snorkeling alongside majestic oceanic manta ray feeding aggregations."
            },
            {
              "id": "az3",
              "title": "Glass-Floor Overwater Wellness Suites",
              "description": "Holistic deep-tissue massages while observing tropical marine life directly below the massage table."
            }
          ]
        }
      },
      {
        "id": "ht3-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Your Private Island Paradise Awaits",
          "description": "Complimentary round-trip seaplane transfers included with all 5+ night reservations.",
          "primaryButtonText": "Check Island Dates",
          "primaryButtonLink": "#booking"
        }
      },
      {
        "id": "ht3-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "AZURE ATOLL RESORT & RESIDENCES",
          "copyrightText": "© 2026 Azure Atoll Resorts Maldives Ltd. Baa Atoll, Republic of Maldives."
        }
      }
    ]
  },
  {
    "id": "hosp-palazzoriva-01",
    "slug": "palazzo-riva-grand-canal-venice",
    "name": "Palazzo Riva Grand Canal Heritage Hotel",
    "description": "16th-century Venetian palazzo hotel with original Tiepolo frescoes, private water gate for gondolas, and canal-front terrace dining.",
    "industryId": "hospitality-travel",
    "categoryId": "boutique-hotel",
    "collectionId": "luxury-hotel-resort",
    "designStyle": "editorial-magazine",
    "featured": false,
    "tags": [
      "venice",
      "grand canal",
      "palazzo",
      "boutique hotel",
      "historic hotel",
      "italy",
      "gondola"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ht4-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "PALAZZO RIVA",
          "primaryButtonText": "Reserve Room",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Frescoed Rooms",
              "href": "#rooms"
            },
            {
              "label": "Canal Terrace",
              "href": "#dining"
            },
            {
              "label": "Water Salone",
              "href": "#salone"
            }
          ]
        }
      },
      {
        "id": "ht4-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "16th Century Venetian Renaissance Monument",
          "title": "Timeless Venetian Nobility on the Grand Canal",
          "subtitle": "Arrive via private mahogany water taxi directly into our marble watergate. Sleep under restored baroque ceilings, surrounded by Murano chandeliers and damask silks.",
          "primaryButtonText": "Discover Rooms",
          "primaryButtonLink": "#rooms",
          "imageUrl": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Historic Frescoes",
              "value": "18 Suites"
            },
            {
              "id": "s2",
              "label": "Grand Canal Frontage",
              "value": "45 Meters"
            },
            {
              "id": "s3",
              "label": "Constructed In",
              "value": "1584 A.D."
            }
          ]
        }
      },
      {
        "id": "ht4-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "The Palazzo Experience",
          "title": "Aristocratic Splendor on the Water",
          "subtitle": "Immerse yourself in authentic Venetian grandeur preserved with modern boutique luxury.",
          "items": [
            {
              "id": "pr1",
              "title": "Tiepolo Heritage Grand Suite",
              "description": "Featuring original 400-year-old allegorical ceiling frescoes, gothic arch balconies, and terrazzo floors."
            },
            {
              "id": "pr2",
              "title": "Private Riva Water Limousine",
              "description": "Exclusive transfers to Piazza San Marco, the Murano glass ateliers, and hidden lagoon islands."
            },
            {
              "id": "pr3",
              "title": "Canal-Edge Bellini Terrazza",
              "description": "Sip chilled prosecco and freshly squeezed white peach nectar as vaporettos and gondolas glide past."
            }
          ]
        }
      },
      {
        "id": "ht4-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Experience Venice from Its Most Storied Address",
          "description": "Special arrangements available for Venice Biennale and Film Festival guests.",
          "primaryButtonText": "Check Canal Suite Availability",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "ht4-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "PALAZZO RIVA VENEZIA",
          "copyrightText": "© 2026 Palazzo Riva S.r.l. San Polo, Venezia, Italia."
        }
      }
    ]
  },
  {
    "id": "hosp-kasbahmarrakesh-01",
    "slug": "kasbah-al-noor-courtyard-riad",
    "name": "Kasbah Al-Noor Courtyard Riad & Hammam",
    "description": "An intimate sanctuary inside the Medina of Marrakech, featuring intricate zellij tilework, orange blossom courtyards, and traditional black soap hammams.",
    "industryId": "hospitality-travel",
    "categoryId": "boutique-hotel",
    "collectionId": "luxury-hotel-resort",
    "designStyle": "luxury-editorial",
    "featured": false,
    "tags": [
      "marrakech",
      "riad",
      "morocco",
      "boutique hotel",
      "hammam",
      "courtyard",
      "medina"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ht5-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "KASBAH AL-NOOR",
          "primaryButtonText": "Reserve Riad",
          "primaryButtonLink": "#reserve",
          "navLinks": [
            {
              "label": "Suites & Patios",
              "href": "#suites"
            },
            {
              "label": "Royal Hammam",
              "href": "#hammam"
            },
            {
              "label": "Rooftop Lounge",
              "href": "#rooftop"
            }
          ]
        }
      },
      {
        "id": "ht5-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Historic Medina Oasis • Marrakech",
          "title": "A Tranquil Oasis of Cedar, Zellij, and Orange Blossoms",
          "subtitle": "Step beyond the bustling Medina alleys into a quiet haven of bubbling fountains, hand-carved plaster arches, and rooftop sunset mint tea facing the Atlas Mountains.",
          "primaryButtonText": "Explore Suites",
          "primaryButtonLink": "#suites",
          "imageUrl": "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Private Guest Suites",
              "value": "12 Only"
            },
            {
              "id": "s2",
              "label": "Century-Old Bitter Orange Trees",
              "value": "4 Trees"
            },
            {
              "id": "s3",
              "label": "Marble Hammam Steam Suites",
              "value": "2 Baths"
            }
          ]
        }
      },
      {
        "id": "ht5-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "Moroccan Hospitality",
          "title": "Sensory Immersion in Medina Tradition",
          "subtitle": "Impeccable service delivered with timeless Moroccan warmth and discretion.",
          "items": [
            {
              "id": "kn1",
              "title": "Beldi Black Soap & Eucalyptus Hammam",
              "description": "Traditional steam scrubbing with crushed olive black soap, rhassoul clay wraps, and argan oil hydration."
            },
            {
              "id": "kn2",
              "title": "Courtyard Plunge Basin & Petal Baths",
              "description": "Cool off in the mosaic-lined emerald plunge pool beneath scented flowering bougainvillea vines."
            },
            {
              "id": "kn3",
              "title": "Fassi Tagine & Pastilla Gastronomy",
              "description": "Slow-cooked lamb tagines with caramelised prunes, saffron almonds, and crisp spiced pigeon pastillas."
            }
          ]
        }
      },
      {
        "id": "ht5-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Find Serenity Inside the Red City",
          "description": "All reservations include complimentary airport limousine transfers and escorted Medina luggage handling.",
          "primaryButtonText": "Reserve Your Moroccan Riad Stay",
          "primaryButtonLink": "#reserve"
        }
      },
      {
        "id": "ht5-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "KASBAH AL-NOOR MARRAKECH",
          "copyrightText": "© 2026 Kasbah Al-Noor SARL. Derb El Cadi, Médina, Marrakech."
        }
      }
    ]
  },
  {
    "id": "hosp-kyotoryokan-01",
    "slug": "koto-an-sukiya-ryokan-onsen",
    "name": "Koto-an Sukiya Ryokan & Forest Onsen",
    "description": "Centuries-old Kyoto ryokan nestled in bamboo hills, offering private cypress hot spring baths, tatami garden villas, and multi-course kaiseki.",
    "industryId": "hospitality-travel",
    "categoryId": "hotel",
    "collectionId": "luxury-hotel-resort",
    "designStyle": "minimal-neutral",
    "featured": true,
    "tags": [
      "kyoto",
      "ryokan",
      "onsen",
      "japan",
      "kaiseki",
      "zen garden",
      "traditional hotel"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ht6-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "KOTO-AN KYOTO",
          "primaryButtonText": "Reserve Room",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Tatami Rooms",
              "href": "#rooms"
            },
            {
              "label": "Cypress Onsen",
              "href": "#onsen"
            },
            {
              "label": "Kaiseki Menu",
              "href": "#kaiseki"
            }
          ]
        }
      },
      {
        "id": "ht6-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Arashiyama Bamboo Forest Foothills • Founded 1892",
          "title": "The Art of Mindful Stillness in Ancient Kyoto",
          "subtitle": "Soak in natural mineral thermal springs infused with local yuzu fruit, walk on fresh rush tatami, and savor twelve-course seasonal banquet feasts served in your room.",
          "primaryButtonText": "Explore Ryokan Suites",
          "primaryButtonLink": "#rooms",
          "imageUrl": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Natural Thermal Spring Temp",
              "value": "41.5°C"
            },
            {
              "id": "s2",
              "label": "Guest Pavilions",
              "value": "14 Rooms"
            },
            {
              "id": "s3",
              "label": "Centuries of Hospitality",
              "value": "134 Yrs"
            }
          ]
        }
      },
      {
        "id": "ht6-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Ryokan Disciplines",
          "title": "Omotenashi: Selfless Hospitality",
          "subtitle": "Immerse all five senses in the refined aesthetic rituals of traditional Japan.",
          "items": [
            {
              "id": "kt1",
              "title": "Private Hinoki Cedar Open-Air Onsen",
              "description": "Aromatic Japanese cypress wood tubs overlooking private moss rock gardens shrouded in mountain mist."
            },
            {
              "id": "kt2",
              "title": "Seasonal Kyo-Kaiseki Gastronomy",
              "description": "Exquisite multi-course seasonal cuisine prepared with Kyoto heirloom vegetables, sweet river ayu, and A5 Wagyu."
            },
            {
              "id": "kt3",
              "title": "Morning Tea Ceremony & Meditation",
              "description": "Whisked organic Uji matcha served by a licensed tea master in our 150-year-old thatched chashitsu."
            }
          ]
        }
      },
      {
        "id": "ht6-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Slow Down and Reconnect in Kyoto",
          "description": "Reservations open precisely 90 days in advance to preserve intimacy and seasonal perfection.",
          "primaryButtonText": "Check Ryokan Calendar",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "ht6-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "KOTO-AN RYOKAN KYOTO",
          "copyrightText": "© 2026 Koto-an Ryokan Ltd. Sagano, Ukyo-ku, Kyoto, Japan."
        }
      }
    ]
  },
  {
    "id": "hosp-safaricamp-01",
    "slug": "mara-tented-wilderness-lodge",
    "name": "Mara Tented Safari & Wilderness Reserve",
    "description": "Ultra-luxury mobile tented camp tracking the Great Wildebeest Migration across the Serengeti with private land rovers and bush banquets.",
    "industryId": "hospitality-travel",
    "categoryId": "resort",
    "collectionId": "luxury-hotel-resort",
    "designStyle": "organic-natural",
    "featured": true,
    "tags": [
      "safari",
      "serengeti",
      "tented camp",
      "wildlife",
      "luxury safari",
      "africa",
      "big five"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ht7-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "MARA SAFARI",
          "primaryButtonText": "Book Safari",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Canvas Suites",
              "href": "#tents"
            },
            {
              "label": "Migration Tracking",
              "href": "#migration"
            },
            {
              "label": "Conservation",
              "href": "#eco"
            }
          ]
        }
      },
      {
        "id": "ht7-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Unfenced African Wilderness • Solar Powered Eco-Lodge",
          "title": "Witness Earth’s Greatest Wildlife Spectacle in Total Comfort",
          "subtitle": "Canvas suites appointed with handwoven Kenyan rugs, copper soaking tubs, and open-sided 4x4 vehicles led by certified Maasai trackers.",
          "primaryButtonText": "View Safari Itineraries",
          "primaryButtonLink": "#migration",
          "imageUrl": "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Big Five Sighting Probability",
              "value": "98%"
            },
            {
              "id": "s2",
              "label": "Private Canvas Tents",
              "value": "10 Suites"
            },
            {
              "id": "s3",
              "label": "Land Conserved",
              "value": "250,000 Acres"
            }
          ]
        }
      },
      {
        "id": "ht7-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Wilderness Safaris",
          "title": "Intimate Encounters with Untamed Nature",
          "subtitle": "Zero crowds. Exclusive off-road traversing rights across pristine conservation land.",
          "items": [
            {
              "id": "ms1",
              "title": "Dawn Hot Air Balloon Safari",
              "description": "Glide silently above awakening herds of elephants and lions, culminating in a champagne bush breakfast under an acacia tree."
            },
            {
              "id": "ms2",
              "title": "Maasai Guided Walking Safaris",
              "description": "Learn medicinal plant tracking, spoor identification, and micro-ecosystems on foot with warrior guides."
            },
            {
              "id": "ms3",
              "title": "Night Game Drives with Infrared Spotting",
              "description": "Observe leopards, servals, and aardvarks on active nocturnal hunts utilizing night-vision thermal scopes."
            }
          ]
        }
      },
      {
        "id": "ht7-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "The Great Migration Awaits Your Arrival",
          "description": "All-inclusive packages cover private bush flights from Kilimanjaro, park permits, and safari guides.",
          "primaryButtonText": "Inquire with Safari Specialists",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "ht7-footer",
        "type": "footer",
        "variant": "footer-multi-column",
        "visible": true,
        "content": {
          "title": "MARA WILDERNESS LODGES",
          "copyrightText": "© 2026 Mara Safari Reserves Ltd. Serengeti National Park, Tanzania."
        }
      }
    ]
  },
  {
    "id": "hosp-nordicfjord-01",
    "slug": "fjordvass-glass-igloo-aurora-lodge",
    "name": "Fjordvass Glass Aurora Lodge & Fjord Spa",
    "description": "Arctic Norway retreat featuring heated glass geodome cabins, aurora borealis alarms, dog sledding, and fjord saunas.",
    "industryId": "hospitality-travel",
    "categoryId": "resort",
    "collectionId": "luxury-hotel-resort",
    "designStyle": "dark-cinematic",
    "featured": false,
    "tags": [
      "aurora borealis",
      "glass igloo",
      "norway",
      "arctic",
      "fjord",
      "northern lights",
      "sauna"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ht8-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "FJORDVASS // ARCTIC",
          "primaryButtonText": "Book Aurora Pod",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Glass Domes",
              "href": "#domes"
            },
            {
              "label": "Aurora Tracker",
              "href": "#aurora"
            },
            {
              "label": "Fjord Sauna",
              "href": "#sauna"
            }
          ]
        }
      },
      {
        "id": "ht8-hero",
        "type": "hero",
        "variant": "hero-fullscreen-photo",
        "visible": true,
        "content": {
          "badge": "Tromsø Arctic Archipelago • 69° North",
          "title": "Sleep Under The Dance of the Northern Lights",
          "subtitle": "Heated panoramic glass igloos engineered to give you unobstructed views of shimmering green auroras from the comfort of a motorized goose-down bed.",
          "primaryButtonText": "Explore Arctic Domes",
          "primaryButtonLink": "#domes",
          "imageUrl": "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Aurora Sighting Nights / Year",
              "value": "210+ Nights"
            },
            {
              "id": "s2",
              "label": "Glass Dome Transparency",
              "value": "360° Field"
            },
            {
              "id": "s3",
              "label": "Floating Fjord Sauna Heat",
              "value": "88°C"
            }
          ]
        }
      },
      {
        "id": "ht8-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Arctic Expeditions",
          "title": "Polar Wonder in Absolute Warmth",
          "subtitle": "Unforgettable polar experiences framed by the rugged beauty of Norwegian fjords.",
          "items": [
            {
              "id": "fv1",
              "title": "Automated Aurora Wake-Up Alerts",
              "description": "Gentle vibrational nightstands activate only when celestial auroral activity reaches geomagnetic KP4 thresholds."
            },
            {
              "id": "fv2",
              "title": "Floating Wood-Fired Fjord Sauna",
              "description": "Sweat in traditional birch-scented steam before taking an invigorating cold dip directly into Arctic fjord waters."
            },
            {
              "id": "fv3",
              "title": "Husky Dog Sledding Through Tundra",
              "description": "Drive your own team of energetic Alaskan huskies across frozen alpine lakes and snow-covered pine forests."
            }
          ]
        }
      },
      {
        "id": "ht8-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Witness the Sky Blaze with Solar Fire",
          "description": "Aurora season runs from September through April. Early booking highly recommended.",
          "primaryButtonText": "Reserve Your Aurora Dome",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "ht8-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "FJORDVASS ARCTIC RETREAT",
          "copyrightText": "© 2026 Fjordvass AS. Tromsø, Norway."
        }
      }
    ]
  },
  {
    "id": "hosp-santorinicliff-01",
    "slug": "oia-caldera-sunken-cave-suites",
    "name": "Oia Caldera Sunken Cave Suites & Plunge Pools",
    "description": "Sculpted cycladic cave suites carved directly into the volcanic cliffs of Oia Santorini with unobstructed Aegean sunset vistas.",
    "industryId": "hospitality-travel",
    "categoryId": "luxury-hotel",
    "collectionId": "luxury-hotel-resort",
    "designStyle": "minimal-neutral",
    "featured": false,
    "tags": [
      "santorini",
      "oia",
      "greece",
      "caldera",
      "cave hotel",
      "sunset",
      "aegean",
      "honeymoon"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ht9-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "OIA CALDERA",
          "primaryButtonText": "Book Suite",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Cave Suites",
              "href": "#suites"
            },
            {
              "label": "Caldera Dining",
              "href": "#dining"
            },
            {
              "label": "Sunset Terrace",
              "href": "#terrace"
            }
          ]
        }
      },
      {
        "id": "ht9-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Cliffside Caldera • Oia Village",
          "title": "Sculptural Cycladic Caves Suspended Over The Aegean Sea",
          "subtitle": "Carved out of volcanic rock, our chalk-white suites offer deep subterranean cooling, private heated caldera plunge pools, and front-row seats to world-famous sunsets.",
          "primaryButtonText": "Explore Sunset Suites",
          "primaryButtonLink": "#suites",
          "imageUrl": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Elevation Above Aegean",
              "value": "300m"
            },
            {
              "id": "s2",
              "label": "Heated Infinity Plunge Pools",
              "value": "16 Pools"
            },
            {
              "id": "s3",
              "label": "Sunset Sightline Rating",
              "value": "Unobstructed"
            }
          ]
        }
      },
      {
        "id": "ht9-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "The Cycladic Sanctuary",
          "title": "Pure White Simplicity and Mediterranean Calm",
          "subtitle": "Organic curved architecture meeting effortless coastal indulgence.",
          "items": [
            {
              "id": "oc1",
              "title": "Subterranean Caldera Cave Suites",
              "description": "Hand-troweled smooth white lime plaster walls, floating king beds, and cave tunnel showers."
            },
            {
              "id": "oc2",
              "title": "Champagne Sunset Terrace Service",
              "description": "Chilled Assyrtiko wines from volcanic Santorini vineyards served with fresh Aegean sea bass carpaccio."
            },
            {
              "id": "oc3",
              "title": "Private Catamaran Caldera Sailing",
              "description": "Swim in thermal sulfur hot springs and explore secluded red sand beaches aboard our 50-foot catamaran."
            }
          ]
        }
      },
      {
        "id": "ht9-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Reserve Your Front-Row Sunset Seat in Oia",
          "description": "Includes daily champagne breakfast served directly onto your private caldera terrace.",
          "primaryButtonText": "Inquire for Summer Season",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "ht9-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "OIA CALDERA SUITES",
          "copyrightText": "© 2026 Oia Caldera Hospitality Ltd. Oia, Santorini, Greece."
        }
      }
    ]
  },
  {
    "id": "hosp-sohorooftop-01",
    "slug": "mercer-gramercy-boutique-hotel",
    "name": "The Mercer Gramercy Club Hotel",
    "description": "Manhattan boutique design hotel featuring dark walnut libraries, cocktail parlors, curated contemporary art, and members-only rooftop lounge.",
    "industryId": "hospitality-travel",
    "categoryId": "boutique-hotel",
    "collectionId": "luxury-hotel-resort",
    "designStyle": "modern-corporate",
    "featured": false,
    "tags": [
      "boutique hotel",
      "manhattan",
      "new york",
      "rooftop bar",
      "design hotel",
      "gramercy",
      "cocktails"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ht10-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "THE MERCER GRAMERCY",
          "primaryButtonText": "Book Room",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Loft Rooms",
              "href": "#lofts"
            },
            {
              "label": "The Library Bar",
              "href": "#bar"
            },
            {
              "label": "Skyline Terrace",
              "href": "#terrace"
            }
          ]
        }
      },
      {
        "id": "ht10-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Gramercy Park Access Key Included For All Guests",
          "title": "New York Sophistication with Downtown Edge",
          "subtitle": "Soaring 14-foot loft ceilings, blackened steel industrial windows, Italian velvet furnishings, and a subterranean vinyl listening lounge.",
          "primaryButtonText": "Reserve Loft Suite",
          "primaryButtonLink": "#book",
          "imageUrl": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Downtown Lofts",
              "value": "78 Keys"
            },
            {
              "id": "s2",
              "label": "Vinyl Records in Library",
              "value": "3,200 LPs"
            },
            {
              "id": "s3",
              "label": "Gramercy Key Privileges",
              "value": "Exclusive"
            }
          ]
        }
      },
      {
        "id": "ht10-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Club Amenities",
          "title": "An Insider’s Portal to New York City",
          "subtitle": "Designed for discerning travelers, creative leaders, and culture seekers.",
          "items": [
            {
              "id": "mg1",
              "title": "The Gramercy Key Access",
              "description": "Step into Manhattan’s only private keyed park, reserved exclusively for neighborhood residents and hotel guests."
            },
            {
              "id": "mg2",
              "title": "Analog Hi-Fi Listening Lounge",
              "description": "Bespoke vacuum-tube McIntosh audio system with curated Japanese jazz and funk vinyl presses."
            },
            {
              "id": "mg3",
              "title": "Skyline Garden Cocktail Terrace",
              "description": "Craft cocktails, raw oyster bar, and panoramic Empire State Building views above the city hum."
            }
          ]
        }
      },
      {
        "id": "ht10-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Your Private Midtown Manhattan Residence",
          "description": "Special weekend and corporate executive rates available with priority restaurant reservations.",
          "primaryButtonText": "Check Room Availability",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "ht10-footer",
        "type": "footer",
        "variant": "footer-multi-column",
        "visible": true,
        "content": {
          "title": "THE MERCER GRAMERCY HOTEL",
          "copyrightText": "© 2026 Mercer Hospitality Group Inc. Lexington Ave, New York, NY."
        }
      }
    ]
  },
  {
    "id": "hosp-tuscanaestate-01",
    "slug": "borgo-di-montepulciano-wine-resort",
    "name": "Borgo Di Montepulciano Wine Estate & Spa",
    "description": "17th-century restored Tuscan hamlet surrounded by cypress trees and Brunello vineyards, featuring wine cellars and truffle hunts.",
    "industryId": "hospitality-travel",
    "categoryId": "resort",
    "collectionId": "luxury-hotel-resort",
    "designStyle": "organic-natural",
    "featured": false,
    "tags": [
      "tuscany",
      "wine resort",
      "italy",
      "vineyard",
      "montepulciano",
      "pasta cooking",
      "truffles"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ht11-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "BORGO DI MONTEPULCIANO",
          "primaryButtonText": "Reserve Stay",
          "primaryButtonLink": "#reserve",
          "navLinks": [
            {
              "label": "Stone Cottages",
              "href": "#villas"
            },
            {
              "label": "Wine Cellars",
              "href": "#wine"
            },
            {
              "label": "Cooking Academy",
              "href": "#cooking"
            }
          ]
        }
      },
      {
        "id": "ht11-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Val d’Orcia UNESCO Heritage Valley • 120 Hectare Estate",
          "title": "Sun-Drenched Tuscan Hills, Sangiovese Vines, and Slow Living",
          "subtitle": "Restored stone hamlets featuring terracotta hearths, infinity pool overlooking rolling hills, private sommelier cellars, and morning pasta masterclasses.",
          "primaryButtonText": "Explore Estate Cottages",
          "primaryButtonLink": "#villas",
          "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Estate Vineyards",
              "value": "120 Hectares"
            },
            {
              "id": "s2",
              "label": "Vino Nobile Barrels",
              "value": "450 Barriques"
            },
            {
              "id": "s3",
              "label": "Farm-to-Table Ratio",
              "value": "92% Sourced Onsite"
            }
          ]
        }
      },
      {
        "id": "ht11-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Estate Experiences",
          "title": "The Essence of Italian Slow Living",
          "subtitle": "Immerse in the timeless culinary and agricultural rhythms of the Tuscan countryside.",
          "items": [
            {
              "id": "bm1",
              "title": "Barrique Cellar Barrel Tastings",
              "description": "Guided sommelier walk-through of our historic vaulted brick cellars tasting library vintages of Vino Nobile di Montepulciano."
            },
            {
              "id": "bm2",
              "title": "Estate Truffle Hunting with Lagotto Dogs",
              "description": "Forage for prized white and black truffles through private oak woodlands, followed by shaved truffle tagliolini."
            },
            {
              "id": "bm3",
              "title": "Infinity Pool Facing Pienza",
              "description": "Heated travertine stone pool floating above olive groves with panoramic views of the Val d’Orcia valley."
            }
          ]
        }
      },
      {
        "id": "ht11-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Experience The Soul of Tuscany",
          "description": "Special harvest week packages include hands-on grape pressing and vintage wine allocation.",
          "primaryButtonText": "Check Harvest & Summer Dates",
          "primaryButtonLink": "#reserve"
        }
      },
      {
        "id": "ht11-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "BORGO DI MONTEPULCIANO RESORT",
          "copyrightText": "© 2026 Borgo Montepulciano S.r.l. Siena, Toscana, Italia."
        }
      }
    ]
  },
  {
    "id": "hosp-patagonialodge-01",
    "slug": "torres-del-fuego-glacial-lodge",
    "name": "Torres Del Fuego Glacial Eco-Lodge",
    "description": "Off-grid sustainable timber and granite lodge facing Torres del Paine granite towers, offering glacier treks and puma tracking.",
    "industryId": "hospitality-travel",
    "categoryId": "hotel",
    "collectionId": "luxury-hotel-resort",
    "designStyle": "brutalist-clean",
    "featured": false,
    "tags": [
      "patagonia",
      "eco lodge",
      "glacier",
      "hiking",
      "torres del paine",
      "chile",
      "adventure travel"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ht12-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "TORRES DEL FUEGO",
          "primaryButtonText": "Reserve Expedition",
          "primaryButtonLink": "#reserve",
          "navLinks": [
            {
              "label": "Timber Cabins",
              "href": "#cabins"
            },
            {
              "label": "Glacier Treks",
              "href": "#treks"
            },
            {
              "label": "Patagonian Asado",
              "href": "#dining"
            }
          ]
        }
      },
      {
        "id": "ht12-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Carbon-Neutral Wilderness Lodge • Southern Patagonia",
          "title": "Where Dramatic Glacial Spires Meet Raw Southern Sky",
          "subtitle": "Engineered with local lenga wood and insulated triple-glazed panoramic windows to withstand fierce Patagonian winds while cradling guests in warmth.",
          "primaryButtonText": "Plan Wilderness Stay",
          "primaryButtonLink": "#reserve",
          "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Glaciers Explored Nearby",
              "value": "4 Major"
            },
            {
              "id": "s2",
              "label": "Renewable Hydro Power",
              "value": "100%"
            },
            {
              "id": "s3",
              "label": "Certified Trek Guides",
              "value": "12 Naturalists"
            }
          ]
        }
      },
      {
        "id": "ht12-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Expedition Programs",
          "title": "The Edge of the Inhabited World",
          "subtitle": "Daily tailored excursions across untamed icefields, fjords, and granite peaks.",
          "items": [
            {
              "id": "tf1",
              "title": "Grey Glacier Crampon Ice Walk",
              "description": "Navigate deep blue crevasse fields, ice caves, and seracs with specialized high-altitude mountain equipment."
            },
            {
              "id": "tf2",
              "title": "Traditional Spit-Roasted Lamb Asado",
              "description": "Savor organic local lamb slow-roasted over native beechwood embers paired with Chilean Carménère."
            },
            {
              "id": "tf3",
              "title": "Wood-Fired Fjord Hot Tubs",
              "description": "Rest aching muscles in thermal wooden soaking tubs as dusk turns the granite horns of Paine glowing violet."
            }
          ]
        }
      },
      {
        "id": "ht12-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Conquer the Southern Ice Fields in Unrivaled Comfort",
          "description": "Expedition packages include private transfers from Punta Arenas, park entry permits, and all meals.",
          "primaryButtonText": "Check Expedition Seasons",
          "primaryButtonLink": "#reserve"
        }
      },
      {
        "id": "ht12-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "TORRES DEL FUEGO ECO-LODGE",
          "copyrightText": "© 2026 Torres del Fuego Lodges S.A. Magallanes, Chile."
        }
      }
    ]
  },
  {
    "id": "hosp-balivilla-01",
    "slug": "ubudsari-bamboo-canopy-reserve",
    "name": "Ubudsari Bamboo Canopy Rainforest Sanctuary",
    "description": "Architectural bamboo treehouses cantilevered over the Ayung River valley in Bali, offering sound healing, cold plunges, and organic permaculture dining.",
    "industryId": "hospitality-travel",
    "categoryId": "resort",
    "collectionId": "luxury-hotel-resort",
    "designStyle": "organic-natural",
    "featured": false,
    "tags": [
      "bali",
      "ubud",
      "bamboo villa",
      "wellness retreat",
      "yoga",
      "sound healing",
      "jungle resort"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ht13-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "UBUDSARI // BAMBOO",
          "primaryButtonText": "Reserve Treehouse",
          "primaryButtonLink": "#reserve",
          "navLinks": [
            {
              "label": "Bamboo Mansions",
              "href": "#villas"
            },
            {
              "label": "Sound Domes",
              "href": "#sound"
            },
            {
              "label": "Permaculture",
              "href": "#food"
            }
          ]
        }
      },
      {
        "id": "ht13-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Ayung River Sacred Valley • Hand-Bent Petung Bamboo",
          "title": "Live Suspended in the Emerald Jungle Canopy",
          "subtitle": "Award-winning biomimetic bamboo villas featuring river plunge pools, open-air rainforest showers, and morning yoga above the river mist.",
          "primaryButtonText": "Explore Bamboo Villas",
          "primaryButtonLink": "#villas",
          "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "River Valley Acreage",
              "value": "18 Hectares"
            },
            {
              "id": "s2",
              "label": "Custom Bamboo Villas",
              "value": "16 Pavilions"
            },
            {
              "id": "s3",
              "label": "Organic Permaculture Farm",
              "value": "100% On-Site"
            }
          ]
        }
      },
      {
        "id": "ht13-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Jungle Sanctuary",
          "title": "Holistic Mind-Body Regeneration",
          "subtitle": "Reconnect with natural biological rhythms in an untouched tropical rainforest setting.",
          "items": [
            {
              "id": "ub1",
              "title": "Tibetan Brass & Quartz Sound Dome",
              "description": "Immersive vibrational sound healing sessions harmonizing brainwaves into restorative theta frequencies."
            },
            {
              "id": "ub2",
              "title": "Riverstone Ice Plunge & Herbal Steam",
              "description": "Contrast hydrotherapy overlooking rushing whitewater rapids and towering tropical ferns."
            },
            {
              "id": "ub3",
              "title": "Farm-to-Table Balinese Alchemy",
              "description": "Sprouted grains, freshly harvested jackfruit curry, and young coconut elixirs picked minutes before plating."
            }
          ]
        }
      },
      {
        "id": "ht13-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Find Sanctuary in Bali’s Sacred Canopy",
          "description": "Special 7-day holistic cleanse and yoga immersion packages available.",
          "primaryButtonText": "Check Rainforest Availability",
          "primaryButtonLink": "#reserve"
        }
      },
      {
        "id": "ht13-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "UBUDSARI BAMBOO SANCTUARY",
          "copyrightText": "© 2026 PT Ubudsari Bamboo Retreat. Gianyar, Bali, Indonesia."
        }
      }
    ]
  },
  {
    "id": "hosp-provencechateau-01",
    "slug": "chateau-de-lavande-provence",
    "name": "Château De Lavande Relais & Châteaux",
    "description": "18th-century French country manor in Provence flanked by purple lavender fields, centuries-old plane trees, and Michelin star gastronomy.",
    "industryId": "hospitality-travel",
    "categoryId": "luxury-hotel",
    "collectionId": "luxury-hotel-resort",
    "designStyle": "luxury-editorial",
    "featured": false,
    "tags": [
      "provence",
      "chateau",
      "france",
      "lavender",
      "relais chateaux",
      "michelin",
      "wine"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ht14-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "CHÂTEAU DE LAVANDE",
          "primaryButtonText": "Reserve Room",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Château Suites",
              "href": "#suites"
            },
            {
              "label": "Michelin Dining",
              "href": "#dining"
            },
            {
              "label": "Lavender Fields",
              "href": "#fields"
            }
          ]
        }
      },
      {
        "id": "ht14-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Relais & Châteaux • Luberon Valley",
          "title": "Sunlit Stone, Fragrant Lavender, and Provençal Art de Vivre",
          "subtitle": "Restored stone fireplaces, limestone fountains, shaded gravel terraces, and summer evenings scented with wild thyme, rosemary, and lavender.",
          "primaryButtonText": "Discover Rooms",
          "primaryButtonLink": "#suites",
          "imageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Private Lavender Fields",
              "value": "45 Hectares"
            },
            {
              "id": "s2",
              "label": "Michelin Star Rating",
              "value": "★★ Stars"
            },
            {
              "id": "s3",
              "label": "Founded In",
              "value": "1742 A.D."
            }
          ]
        }
      },
      {
        "id": "ht14-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "Château Privileges",
          "title": "The Soul of the Luberon",
          "subtitle": "Uncompromising French culinary refinement in a pastoral countryside haven.",
          "items": [
            {
              "id": "cl1",
              "title": "Two-Michelin-Starred Terroir Dining",
              "description": "Chef’s multi-course tasting menu utilizing heritage vegetables and goat cheeses from neighboring artisan dairies."
            },
            {
              "id": "cl2",
              "title": "Classic Vintage Citröen 2CV Excursions",
              "description": "Tour hilltop stone villages like Gordes and Roussillon in a meticulously restored convertible retro motorcar."
            },
            {
              "id": "cl3",
              "title": "Bespoke Lavender Perfume Creation",
              "description": "Private atelier with master Grasse perfumers blending your own custom eau de parfum from estate blooms."
            }
          ]
        }
      },
      {
        "id": "ht14-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Experience Summer in the Heart of Provence",
          "description": "Lavender blooming season peaks between late June and early August.",
          "primaryButtonText": "Inquire for Seasonal Reservation",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "ht14-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "CHÂTEAU DE LAVANDE PROVENCE",
          "copyrightText": "© 2026 Château de Lavande SAS. Luberon, Provence, France."
        }
      }
    ]
  },
  {
    "id": "hosp-dubaisand-01",
    "slug": "al-miraj-desert-oasis-dunes-camp",
    "name": "Al-Miraj Desert Oasis & Dunes Reserve",
    "description": "Ultra-luxury bedouin-inspired royal tented reserve set deep in the Arabian desert dunes, featuring private temperature-controlled plunge pools and falconry.",
    "industryId": "hospitality-travel",
    "categoryId": "luxury-hotel",
    "collectionId": "luxury-hotel-resort",
    "designStyle": "premium-hospitality",
    "featured": false,
    "tags": [
      "dubai",
      "desert resort",
      "dunes",
      "oasis",
      "falconry",
      "stargazing",
      "luxury desert"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1512632570417-a60008dd66f7?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ht15-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "AL-MIRAJ DESERT",
          "primaryButtonText": "Reserve Tent",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Royal Tents",
              "href": "#tents"
            },
            {
              "label": "Falconry & Horses",
              "href": "#activities"
            },
            {
              "label": "Dune Banquets",
              "href": "#dining"
            }
          ]
        }
      },
      {
        "id": "ht15-hero",
        "type": "hero",
        "variant": "hero-fullscreen-photo",
        "visible": true,
        "content": {
          "badge": "Dubai Desert Conservation Reserve • Private Sanctuaries",
          "title": "Golden Sands, Arabian Nights, and Unmatched Royal Luxury",
          "subtitle": "Private air-conditioned canopied villas nestled among crimson dunes, offering chilled infinity pools, Arabian horse rides, and starlit feasts under the Milky Way.",
          "primaryButtonText": "Explore Royal Tents",
          "primaryButtonLink": "#tents",
          "imageUrl": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Private Sand Dunes",
              "value": "5,000 Acres"
            },
            {
              "id": "s2",
              "label": "Private Chilled Pools",
              "value": "Every Villa"
            },
            {
              "id": "s3",
              "label": "Arabian Oryx Population",
              "value": "400+ Free Roaming"
            }
          ]
        }
      },
      {
        "id": "ht15-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Desert Heritage",
          "title": "Majestic Arabian Hospitality",
          "subtitle": "Immerse in ancient desert traditions reimagined with six-star royal refinement.",
          "items": [
            {
              "id": "am1",
              "title": "Royal Peregrine Falconry Experience",
              "description": "Train majestic hunting falcons with royal falconers at sunrise amidst the silence of the shifting dunes."
            },
            {
              "id": "am2",
              "title": "Purebred Arabian Horse Treks",
              "description": "Ride championship-pedigree desert horses across open sands as the morning sun casts dramatic shadows."
            },
            {
              "id": "am3",
              "title": "Candlelit Stargazing Dune Banquets",
              "description": "Private carpets, silk cushions, and aromatic charcoal-grilled meats served under high-powered astronomy telescopes."
            }
          ]
        }
      },
      {
        "id": "ht15-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Experience The Silence of the Arabian Desert",
          "description": "Includes complimentary 4x4 luxury fleet transfers from Dubai International Airport.",
          "primaryButtonText": "Check Royal Tent Dates",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "ht15-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "AL-MIRAJ ROYAL DESERT RESORT",
          "copyrightText": "© 2026 Al-Miraj Hospitality LLC. Dubai, United Arab Emirates."
        }
      }
    ]
  },
  {
    "id": "hosp-amsterdamcanal-01",
    "slug": "keizersgracht-heritage-suites",
    "name": "Keizersgracht Canal Townhouse Suites",
    "description": "Golden Age 17th-century Amsterdam canal house hotel featuring wood-paneled parlors, private canal boat excursions, and canal-view suites.",
    "industryId": "hospitality-travel",
    "categoryId": "boutique-hotel",
    "collectionId": "luxury-hotel-resort",
    "designStyle": "minimal-neutral",
    "featured": false,
    "tags": [
      "amsterdam",
      "canal hotel",
      "keizersgracht",
      "netherlands",
      "boutique hotel",
      "salon boat"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ht16-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "KEIZERSGRACHT SUITES",
          "primaryButtonText": "Book Suite",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Canal Rooms",
              "href": "#rooms"
            },
            {
              "label": "Salon Boat",
              "href": "#boat"
            },
            {
              "label": "Hidden Garden",
              "href": "#garden"
            }
          ]
        }
      },
      {
        "id": "ht16-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "UNESCO Heritage Canal Ring • Built 1686",
          "title": "Quiet Dutch Elegance Overlooking Historic Waters",
          "subtitle": "Soaring beamed ceilings, monumental sash windows framing canal swans, Dutch master art reproductions, and a secret interior courtyard garden.",
          "primaryButtonText": "View Canal Suites",
          "primaryButtonLink": "#rooms",
          "imageUrl": "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Boutique Canal Suites",
              "value": "18 Keys"
            },
            {
              "id": "s2",
              "label": "Private Teak Salon Boat",
              "value": "1928 Classic"
            },
            {
              "id": "s3",
              "label": "Canal Ring Location",
              "value": "Keizersgracht"
            }
          ]
        }
      },
      {
        "id": "ht16-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Townhouse Heritage",
          "title": "An Intimate Home on the Canals",
          "subtitle": "Experience Amsterdam like a cultured local with refined personalized service.",
          "items": [
            {
              "id": "kg1",
              "title": "1928 Historic Teak Salon Boat",
              "description": "Private electric salon boat canal cruises equipped with champagne cooler, artisan cheeses, and knowledgeable captain."
            },
            {
              "id": "kg2",
              "title": "Secret Courtyard Garden Pavilion",
              "description": "Quiet landscaped garden sanctuary surrounded by brick facades, perfect for morning espresso and reading."
            },
            {
              "id": "kg3",
              "title": "Bespoke Dutch Art & Museum Access",
              "description": "VIP line-skipping reservations and curator introductions to the Rijksmuseum and Van Gogh Museum."
            }
          ]
        }
      },
      {
        "id": "ht16-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Stay in the Heart of the Golden Age",
          "description": "Suites feature complimentary Dutch breakfast, canal-facing bathtubs, and curated bicycles.",
          "primaryButtonText": "Check Canal Room Rates",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "ht16-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "KEIZERSGRACHT HERITAGE SUITES",
          "copyrightText": "© 2026 Keizersgracht Suites B.V. Amsterdam, The Netherlands."
        }
      }
    ]
  },
  {
    "id": "hosp-costaricaeco-01",
    "slug": "cloud-forest-mist-bio-resort",
    "name": "Cloud Forest Mist Canopy Treehouses",
    "description": "Bioluminescent cloud forest treehouse resort nestled in Monteverde Costa Rica, featuring suspension bridges, sloths, and organic coffee estates.",
    "industryId": "hospitality-travel",
    "categoryId": "resort",
    "collectionId": "luxury-hotel-resort",
    "designStyle": "organic-natural",
    "featured": false,
    "tags": [
      "costa rica",
      "cloud forest",
      "treehouse",
      "eco resort",
      "monteverde",
      "wildlife",
      "biodiversity"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1518182170546-07661fd94144?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ht17-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "CLOUD FOREST MIST",
          "primaryButtonText": "Book Treehouse",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Canopy Villas",
              "href": "#villas"
            },
            {
              "label": "Hanging Bridges",
              "href": "#bridges"
            },
            {
              "label": "Wildlife Tours",
              "href": "#wildlife"
            }
          ]
        }
      },
      {
        "id": "ht17-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "100% Regenerative Eco-Resort • Monteverde Biosphere",
          "title": "Wake Up Floating in the Swirling Mountain Mist",
          "subtitle": "Luxury teak treehouses elevated 80 feet in the jungle canopy, where hummingbirds, sloths, and resplendent quetzals live right outside your wrap-around terrace.",
          "primaryButtonText": "Explore Canopy Treehouses",
          "primaryButtonLink": "#villas",
          "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Elevation Above Pacific",
              "value": "1,440m"
            },
            {
              "id": "s2",
              "label": "Cloud Forest Bird Species",
              "value": "400+ Species"
            },
            {
              "id": "s3",
              "label": "Private Canopy Hanging Bridges",
              "value": "8 Bridges"
            }
          ]
        }
      },
      {
        "id": "ht17-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Biodiversity Immersion",
          "title": "Pure Life (Pura Vida) in the Cloud Forest",
          "subtitle": "Encounter the most biodiverse ecosystems on Earth with expert certified naturalists.",
          "items": [
            {
              "id": "cf1",
              "title": "Private Night Rainforest Walks",
              "description": "Explore nocturnal wildlife tracking red-eyed tree frogs, kinkajous, and tarantulas under ultraviolet lanterns."
            },
            {
              "id": "cf2",
              "title": "Estate Volcanic Geothermal Soaking Springs",
              "description": "Naturally heated mineral springs hidden amidst giant tree ferns and wild orchids."
            },
            {
              "id": "cf3",
              "title": "Single-Origin Shade-Grown Coffee Tastings",
              "description": "Harvest, roast, and taste estate-grown Geisha and Bourbon arabica beans paired with local single-origin chocolate."
            }
          ]
        }
      },
      {
        "id": "ht17-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Immerse Yourself in Pure Biological Wonder",
          "description": "Treehouses feature outdoor rain showers, stone fireplaces, and high-speed fiber internet.",
          "primaryButtonText": "Reserve Your Treehouse Dates",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "ht17-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "CLOUD FOREST MIST BIO-RESORT",
          "copyrightText": "© 2026 Cloud Forest Eco-Lodges S.A. Monteverde, Puntarenas, Costa Rica."
        }
      }
    ]
  },
  {
    "id": "hosp-capsuleluxe-01",
    "slug": "kinetik-micro-cabin-sleep-pods",
    "name": "Kinetik Micro-Cabin Architecture & Pods",
    "description": "Futuristic architectural sleep pods in central Tokyo featuring soundproof acoustic cabins, circadian sleep lighting, and sento bathhouse.",
    "industryId": "hospitality-travel",
    "categoryId": "hotel",
    "collectionId": "luxury-hotel-resort",
    "designStyle": "technology-gradient",
    "featured": false,
    "tags": [
      "capsule hotel",
      "tokyo",
      "japan",
      "minimalist",
      "sleep pods",
      "shinjuku",
      "architecture"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ht18-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "KINETIK // TOKYO",
          "primaryButtonText": "Book Pod",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Sleep Cabins",
              "href": "#cabins"
            },
            {
              "label": "Sento Bathhouse",
              "href": "#sento"
            },
            {
              "label": "Coworking Floor",
              "href": "#work"
            }
          ]
        }
      },
      {
        "id": "ht18-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Shinjuku Central Station 3 Min Walk • Soundproof Pods",
          "title": "Futuristic Micro-Architectural Serenity in Tokyo",
          "subtitle": "The evolution of Japanese capsule hospitality. Acoustic soundproofing, Tempur-Pedic mattresses, circadian sunrise light cycles, and rooftop sento thermal baths.",
          "primaryButtonText": "Reserve Sleep Pod",
          "primaryButtonLink": "#book",
          "imageUrl": "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Soundproofing Rating",
              "value": "-48 dB Noise"
            },
            {
              "id": "s2",
              "label": "Sleep Quality Optimization",
              "value": "Deep Delta"
            },
            {
              "id": "s3",
              "label": "Fiber Speed Per Pod",
              "value": "1 Gbps"
            }
          ]
        }
      },
      {
        "id": "ht18-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "badge": "Engineering Excellence",
          "title": "Designed for Rest and High-Performance Travel",
          "subtitle": "Everything you need to sleep deeply and conquer Tokyo.",
          "items": [
            {
              "id": "kp1",
              "title": "Circadian Sunrise Wake-Up Simulator",
              "description": "Gradual amber-to-daylight illumination naturally raising cortisol and eliminating jarring acoustic alarms."
            },
            {
              "id": "kp2",
              "title": "Black Granite Rooftop Sento & Cold Dip",
              "description": "Relax tired muscles in 42°C mineral hot springs overlooking the glowing neon skyline of Shinjuku."
            },
            {
              "id": "kp3",
              "title": "Biometric Smart Lockers & Valet Laundry",
              "description": "Zero keys needed. Tap your phone to store luggage and receive freshly steamed laundry within 4 hours."
            }
          ]
        }
      },
      {
        "id": "ht18-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Your Ultimate High-Tech Tokyo Basecamp",
          "description": "Hourly day-use and multi-night executive passes available 24/7.",
          "primaryButtonText": "Check Pod Availability",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "ht18-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "KINETIK ARCHITECTURE & PODS",
          "copyrightText": "© 2026 Kinetik Hospitality Inc. Shinjuku, Tokyo, Japan."
        }
      }
    ]
  },
  {
    "id": "hosp-voyagebespoke-01",
    "slug": "silk-and-compass-private-jet-expeditions",
    "name": "Silk & Compass Private Jet Journeys",
    "description": "Ultra-high-net-worth travel designers crafting customized private jet world tours, remote island landings, and diplomatic access expeditions.",
    "industryId": "hospitality-travel",
    "categoryId": "travel-agency",
    "collectionId": "luxury-hotel-resort",
    "designStyle": "modern-corporate",
    "featured": true,
    "tags": [
      "travel agency",
      "private jet",
      "luxury travel",
      "bespoke itineraries",
      "world tour",
      "concierge"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ht19-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "SILK & COMPASS",
          "primaryButtonText": "Design Journey",
          "primaryButtonLink": "#design",
          "navLinks": [
            {
              "label": "Circumnavigations",
              "href": "#routes"
            },
            {
              "label": "Private Jet Fleet",
              "href": "#fleet"
            },
            {
              "label": "Curators",
              "href": "#curators"
            }
          ]
        }
      },
      {
        "id": "ht19-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Curated Itineraries for Global Leaders and Families",
          "title": "The Entire Planet, Arranged Around Your Desires",
          "subtitle": "We charter customized Boeing 777 and Gulfstream G700 private jets to link Easter Island, the pyramids of Giza, Kyoto tea masters, and the Serengeti in seamless wonder.",
          "primaryButtonText": "Commission Private Journey",
          "primaryButtonLink": "#design",
          "imageUrl": "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Countries Visited",
              "value": "140+ Nations"
            },
            {
              "id": "s2",
              "label": "Custom Expeditions Crafted",
              "value": "380 Trips"
            },
            {
              "id": "s3",
              "label": "Client Net Promoter Score",
              "value": "100%"
            }
          ]
        }
      },
      {
        "id": "ht19-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Advisory Pillars",
          "title": "Access Beyond What Money Alone Can Buy",
          "subtitle": "Diplomatic clearances, after-hours museum buyouts, and private island takeovers.",
          "items": [
            {
              "id": "sc1",
              "title": "Private Jet Circumnavigations",
              "description": "24-day around-the-world itineraries with custom flatbed VIP seating, private onboard physicians, and dedicated chefs."
            },
            {
              "id": "sc2",
              "title": "After-Hours Monuments & Sovereign Access",
              "description": "Private nighttime tours of the Vatican Sistine Chapel, the Louvre, or the Great Sphinx with lead archaeologists."
            },
            {
              "id": "sc3",
              "title": "24/7 Security & Diplomatic Concierge",
              "description": "Comprehensive medical evacuation insurance, diplomatic clearances, and vetted personal executive protection."
            }
          ]
        }
      },
      {
        "id": "ht19-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Begin Designing Your Family’s Definitive Journey",
          "description": "Our managing partners hold confidential itinerary planning sessions in London, New York, or Geneva.",
          "primaryButtonText": "Consult Our Expedition Curators",
          "primaryButtonLink": "#design"
        }
      },
      {
        "id": "ht19-footer",
        "type": "footer",
        "variant": "footer-multi-column",
        "visible": true,
        "content": {
          "title": "SILK & COMPASS EXPEDITIONS",
          "copyrightText": "© 2026 Silk & Compass Travel Group Ltd. Mayfair, London • Geneva."
        }
      }
    ]
  },
  {
    "id": "hosp-polarvoyage-01",
    "slug": "ultima-thule-arctic-expeditions",
    "name": "Ultima Thule Polar & Arctic Expeditions",
    "description": "Polar expedition outfitters running luxury icebreaker voyages to Svalbard, Greenland, and the North Pole with wildlife photographers.",
    "industryId": "hospitality-travel",
    "categoryId": "travel-agency",
    "collectionId": "luxury-hotel-resort",
    "designStyle": "dark-cinematic",
    "featured": false,
    "tags": [
      "arctic expedition",
      "svalbard",
      "polar bears",
      "icebreaker",
      "greenland",
      "adventure travel",
      "north pole"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ht20-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "ULTIMA THULE // POLAR",
          "primaryButtonText": "View Voyages",
          "primaryButtonLink": "#voyages",
          "navLinks": [
            {
              "label": "Icebreaker Routes",
              "href": "#routes"
            },
            {
              "label": "Polar Bears",
              "href": "#wildlife"
            },
            {
              "label": "Expedition Vessel",
              "href": "#vessel"
            }
          ]
        }
      },
      {
        "id": "ht20-hero",
        "type": "hero",
        "variant": "hero-fullscreen-photo",
        "visible": true,
        "content": {
          "badge": "Ice Class 1A Super Polar Vessels • 80° North Latitude",
          "title": "The Untamed Majesty of the High Arctic",
          "subtitle": "Navigate through pack ice to observe polar bears hunting on sea ice floes, listen to calving blue glaciers, and kayaked alongside pod of beluga whales.",
          "primaryButtonText": "Explore Polar Departures",
          "primaryButtonLink": "#voyages",
          "imageUrl": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Max Passengers Per Vessel",
              "value": "48 Only"
            },
            {
              "id": "s2",
              "label": "Zodiac Landings Daily",
              "value": "2-3 Landings"
            },
            {
              "id": "s3",
              "label": "Polar Bear Encounter Rate",
              "value": "99.4%"
            }
          ]
        }
      },
      {
        "id": "ht20-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Polar Capabilities",
          "title": "Real Exploration. Zero Sacrifice in Luxury.",
          "subtitle": "Equipped with heated viewing domes, sauna facing icebergs, and world-class glaciologists.",
          "items": [
            {
              "id": "ut1",
              "title": "Zodiac Ice Floe Safaris",
              "description": "Reinforced Mark V Zodiac boats bringing you safely within ethical observation distance of walrus haul-outs and bearded seals."
            },
            {
              "id": "ut2",
              "title": "National Geographic Photographer Guides",
              "description": "Daily technical masterclasses on capturing high-contrast Arctic white wildlife and freezing spray action."
            },
            {
              "id": "ut3",
              "title": "Helicopter Glacier Inset Landings",
              "description": "Twin-engine helicopters flying inland onto untouched polar ice sheets inaccessible by any sea vessel."
            }
          ]
        }
      },
      {
        "id": "ht20-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Answer the Call of the Far North",
          "description": "Svalbard summer departures fill 12 months in advance due to strict environmental permit caps.",
          "primaryButtonText": "Reserve Your Polar Berth",
          "primaryButtonLink": "#voyages"
        }
      },
      {
        "id": "ht20-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "ULTIMA THULE EXPEDITIONS",
          "copyrightText": "© 2026 Ultima Thule Expeditions AS. Longyearbyen, Svalbard • Oslo."
        }
      }
    ]
  },
  {
    "id": "hosp-luxuryrail-01",
    "slug": "gilded-orient-express-journeys",
    "name": "The Gilded Rail Heritage Train Journeys",
    "description": "Premier booking agency specializing in vintage sleeper train journeys across the Alps, Scottish Highlands, and continental Europe.",
    "industryId": "hospitality-travel",
    "categoryId": "travel-agency",
    "collectionId": "luxury-hotel-resort",
    "designStyle": "luxury-editorial",
    "featured": false,
    "tags": [
      "luxury train",
      "sleeper train",
      "orient express",
      "scenic rail",
      "europe travel",
      "vintage travel"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ht21-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "THE GILDED RAIL",
          "primaryButtonText": "Book Train Suite",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Grand Suites",
              "href": "#suites"
            },
            {
              "label": "Alpine Routes",
              "href": "#routes"
            },
            {
              "label": "Dining Cars",
              "href": "#dining"
            }
          ]
        }
      },
      {
        "id": "ht21-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Paris to Venice • Scottish Highlands • Vienna to Istanbul",
          "title": "The Golden Age of Romance and Travel Restored",
          "subtitle": "Step into polished mahogany carriages, Lalique crystal glass, personal stewards in liveried uniform, and four-course banquets while European peaks slide past your window.",
          "primaryButtonText": "Explore Classic Routes",
          "primaryButtonLink": "#routes",
          "imageUrl": "https://images.unsplash.com/photo-1532105956626-9569c03602f6?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Historic Sleeper Carriages",
              "value": "1920s Restored"
            },
            {
              "id": "s2",
              "label": "Michelin Star Chef Curated",
              "value": "All Meals"
            },
            {
              "id": "s3",
              "label": "Private Cabin Stewards",
              "value": "24/7 Service"
            }
          ]
        }
      },
      {
        "id": "ht21-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "The Carriage Experience",
          "title": "Slow Romance on Steel Tracks",
          "subtitle": "Reclaim the joy of the journey itself through timeless craftsmanship.",
          "items": [
            {
              "id": "gr1",
              "title": "Grand Sleeper Cabin Suites",
              "description": "Double beds, private marble mosaic en-suite bathrooms, and complimentary vintage champagne on ice."
            },
            {
              "id": "gr2",
              "title": "Bar Car with Live Baby Grand Piano",
              "description": "Intimate midnight cocktails, jazz standards, and lively conversation as the train crosses alpine mountain passes."
            },
            {
              "id": "gr3",
              "title": "Formal Silver Service Dining",
              "description": "Fine bone china, heavy silver cutlery, and seasonal French cuisine matched with legendary European cellar wines."
            }
          ]
        }
      },
      {
        "id": "ht21-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Step Aboard a Living Masterpiece of Travel History",
          "description": "Grand Suite allocations on signature European routes sell out months ahead.",
          "primaryButtonText": "Reserve Your Carriage Suite",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "ht21-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "THE GILDED RAIL HERITAGE TOURS",
          "copyrightText": "© 2026 The Gilded Rail Co. Ltd. London • Paris • Venice."
        }
      }
    ]
  },
  {
    "id": "hosp-yachtcharter-01",
    "slug": "sirena-yachting-catamaran-charters",
    "name": "Sirena Yachting & Catamaran Charters",
    "description": "Bespoke private yacht charter agency specializing in crewed motor yachts, catamarans, and sailing itineraries across Amalfi, Mallorca, and the Greek Isles.",
    "industryId": "hospitality-travel",
    "categoryId": "travel-agency",
    "collectionId": "luxury-hotel-resort",
    "designStyle": "premium-hospitality",
    "featured": true,
    "tags": [
      "yacht charter",
      "sailing",
      "mediterranean",
      "amalfi",
      "greek islands",
      "superyacht",
      "catamaran"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ht22-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "SIRENA YACHTING",
          "primaryButtonText": "Charter a Yacht",
          "primaryButtonLink": "#charter",
          "navLinks": [
            {
              "label": "Fleet Roster",
              "href": "#fleet"
            },
            {
              "label": "Cruising Grounds",
              "href": "#routes"
            },
            {
              "label": "Onboard Chefs",
              "href": "#crew"
            }
          ]
        }
      },
      {
        "id": "ht22-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Fully Crewed Motor Yachts & Catamarans • 40ft to 220ft",
          "title": "Drop Anchor in Hidden Turquoise Mediterranean Coves",
          "subtitle": "Wake up in a new secluded bay every morning. From cliffside Amalfi towns to deserted Cycladic islets, our professional captains and private chefs cater to your every whim.",
          "primaryButtonText": "Browse Charter Fleet",
          "primaryButtonLink": "#fleet",
          "imageUrl": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Vetted Mediterranean Fleet",
              "value": "280+ Vessels"
            },
            {
              "id": "s2",
              "label": "Crew Service Excellence",
              "value": "5-Star Rated"
            },
            {
              "id": "s3",
              "label": "Cruising Grounds Covered",
              "value": "18 Regions"
            }
          ]
        }
      },
      {
        "id": "ht22-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Yachting Excellence",
          "title": "Unfettered Freedom Upon Azure Waters",
          "subtitle": "Tailored itineraries with zero rigid schedules. You decide when to weigh anchor.",
          "items": [
            {
              "id": "sy1",
              "title": "Dedicated Private Yacht Chef",
              "description": "Daily fresh catch preparation, morning pastries, chilled rosé, and customized gourmet menus tailored to all dietary preferences."
            },
            {
              "id": "sy2",
              "title": "Water Toys & Seabob Dive Fleet",
              "description": "High-speed Seabobs, stand-up paddleboards, foil surfboards, and tender boat waterskiing in calm coves."
            },
            {
              "id": "sy3",
              "title": "VIP Marina Slips & Beach Club Access",
              "description": "Securing coveted reservations in Capri, Porto Cervo, Saint-Tropez, and Mykonos harbor berths."
            }
          ]
        }
      },
      {
        "id": "ht22-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Your Private Yacht Is Ready to Cast Off",
          "description": "Consult with our Mediterranean charter brokers to match your family or group with the perfect vessel.",
          "primaryButtonText": "Request Custom Charter Proposal",
          "primaryButtonLink": "#charter"
        }
      },
      {
        "id": "ht22-footer",
        "type": "footer",
        "variant": "footer-multi-column",
        "visible": true,
        "content": {
          "title": "SIRENA YACHTING INTERNATIONAL",
          "copyrightText": "© 2026 Sirena Yacht Charters Ltd. Monaco • Athens • Palma de Mallorca."
        }
      }
    ]
  },
  {
    "id": "hosp-surflodge-01",
    "slug": "salty-point-surf-house-eco-cabins",
    "name": "Salty Point Surf House & Ocean Cabins",
    "description": "Boutique surf lodge and Scandinavian timber cabins on the rugged cliffs of Ericeira Portugal, offering elite wave coaching and sunset yoga.",
    "industryId": "hospitality-travel",
    "categoryId": "boutique-hotel",
    "collectionId": "luxury-hotel-resort",
    "designStyle": "bold-creative",
    "featured": false,
    "tags": [
      "surf lodge",
      "ericeira",
      "portugal",
      "surfing",
      "ocean view",
      "yoga",
      "coastal cabins"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ht23-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "SALTY POINT // SURF",
          "primaryButtonText": "Book Surf Stay",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Ocean Cabins",
              "href": "#cabins"
            },
            {
              "label": "Wave Coaching",
              "href": "#surf"
            },
            {
              "label": "Yoga Shala",
              "href": "#yoga"
            }
          ]
        }
      },
      {
        "id": "ht23-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Ericeira World Surfing Reserve • 7 Signature Reef Breaks",
          "title": "Where Salt Air, Perfect Barrels, and Coastal Energy Meet",
          "subtitle": "Perched on cliffs overlooking the Atlantic swell, our design-forward cedar cabins offer heated board storage, daily video analysis surf coaching, and oceanfront firepits.",
          "primaryButtonText": "Check Cabin Dates",
          "primaryButtonLink": "#book",
          "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Wave Breaks Within 10 Min",
              "value": "11 Reefs"
            },
            {
              "id": "s2",
              "label": "Average Daily Swell Height",
              "value": "4-7 Ft"
            },
            {
              "id": "s3",
              "label": "Surf Coach Ratio",
              "value": "1:4 Max"
            }
          ]
        }
      },
      {
        "id": "ht23-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Lodge Features",
          "title": "Built by Surfers for Wave Connoisseurs",
          "subtitle": "From beginner wave-catchers to advanced hollow reef chargers.",
          "items": [
            {
              "id": "sp1",
              "title": "Daily 4K Drone Video Surf Analysis",
              "description": "Review your bottom turns, wave positioning, and rail carves on the big screen every afternoon with ISA Level 2 coaches."
            },
            {
              "id": "sp2",
              "title": "Cliffside Yoga Shala & Breathwork",
              "description": "Pre-surf mobility stretching and Wim Hof breathwork sessions designed to expand breath hold and prevent wipeout panic."
            },
            {
              "id": "sp3",
              "title": "Firepit Barbecue & Craft Beer Bar",
              "description": "Savor freshly caught Atlantic sardines, grilled piri-piri chicken, and local Portuguese craft ales around the sunset pit."
            }
          ]
        }
      },
      {
        "id": "ht23-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Catch the Swell of Your Life This Season",
          "description": "Packages include board rental, wetsuits, daily coaching, and breakfast.",
          "primaryButtonText": "Reserve Your Surf Week",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "ht23-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "SALTY POINT SURF HOUSE",
          "copyrightText": "© 2026 Salty Point Lda. Ericeira, Portugal."
        }
      }
    ]
  },
  {
    "id": "hosp-winevoyage-01",
    "slug": "terroir-sommelier-trails-wine-tours",
    "name": "Terroir Sommelier Trails & Grand Cru Tours",
    "description": "Exclusive sommelier-led private wine expeditions through Bordeaux first-growths, Burgundy grand crus, and Champagne chalk cellars.",
    "industryId": "hospitality-travel",
    "categoryId": "travel-agency",
    "collectionId": "luxury-hotel-resort",
    "designStyle": "editorial-magazine",
    "featured": false,
    "tags": [
      "wine tour",
      "bordeaux",
      "burgundy",
      "sommelier",
      "grand cru",
      "france travel",
      "luxury wine"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "ht24-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "TERROIR TRAILS",
          "primaryButtonText": "Book Wine Trail",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Bordeaux Châteaux",
              "href": "#bordeaux"
            },
            {
              "label": "Burgundy Grand Crus",
              "href": "#burgundy"
            },
            {
              "label": "Master Sommeliers",
              "href": "#sommeliers"
            }
          ]
        }
      },
      {
        "id": "ht24-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Master Sommelier Escorted • Private Château Buyouts",
          "title": "Unlocking the World’s Most Inaccessible Wine Cellars",
          "subtitle": "Gain private entrance into historic châteaux that never open to the public. Taste directly from French oak barrels alongside generation-ten winemakers.",
          "primaryButtonText": "Explore Grand Cru Itineraries",
          "primaryButtonLink": "#bordeaux",
          "imageUrl": "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Private Châteaux Access",
              "value": "65 Châteaux"
            },
            {
              "id": "s2",
              "label": "Average Vintage Rating",
              "value": "98 Pts"
            },
            {
              "id": "s3",
              "label": "Master Sommelier Guides",
              "value": "4 MS & MW"
            }
          ]
        }
      },
      {
        "id": "ht24-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Curated Cellar Expeditions",
          "title": "A Pilgrimage for True Oenophiles",
          "subtitle": "From Pauillac and Saint-Émilion to Vosne-Romanée and Reims.",
          "items": [
            {
              "id": "tt1",
              "title": "First Growth Châteaux Vertical Tastings",
              "description": "Taste five-decade vertical library vintages at Premier Grand Cru Classé estates in Bordeaux."
            },
            {
              "id": "tt2",
              "title": "Private Domaine Dining with Winemakers",
              "description": "Intimate multi-course dinners inside private family dining rooms of cult Burgundy producers."
            },
            {
              "id": "tt3",
              "title": "Temperature-Controlled Cellar Shipping",
              "description": "Insured worldwide white-glove transport bringing your acquired rare bottles directly to your home cellar."
            }
          ]
        }
      },
      {
        "id": "ht24-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Reserve an Unforgettable Wine Pilgrimage",
          "description": "Customized private tours tailored to your personal cellar wish list and favorite appellations.",
          "primaryButtonText": "Inquire with Master Sommeliers",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "ht24-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "TERROIR TRAILS WINE EXPEDITIONS",
          "copyrightText": "© 2026 Terroir Sommelier Trails SARL. Bordeaux • Beaune, France."
        }
      }
    ]
  }
];
