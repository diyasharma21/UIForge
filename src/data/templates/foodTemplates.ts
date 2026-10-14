import { TemplateConfig } from '../../types';

export const FOOD_TEMPLATES: TemplateConfig[] = [
  {
    "id": "food-laura-01",
    "slug": "laura-fine-dining",
    "name": "L'Aura Modernist Gastronomy",
    "description": "Three Michelin-starred modernist dining featuring seasonal foraging, blind 12-course tasting menus, and rare reserve wine pairings.",
    "industryId": "food-beverage",
    "categoryId": "fine-dining",
    "collectionId": "fine-dining",
    "designStyle": "luxury-editorial",
    "featured": true,
    "tags": [
      "michelin star",
      "fine dining",
      "tasting menu",
      "wine pairing",
      "gastronomy"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "fd1-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "L'AURA",
          "badge": "Three Michelin Stars",
          "primaryButtonText": "Reserve Table",
          "primaryButtonLink": "#reservation",
          "navLinks": [
            {
              "label": "Philosophy",
              "href": "#about"
            },
            {
              "label": "Tasting Menu",
              "href": "#menu"
            },
            {
              "label": "Cellar",
              "href": "#wine"
            },
            {
              "label": "Private Dining",
              "href": "#private"
            }
          ]
        }
      },
      {
        "id": "fd1-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Chef patron Julian Mercier • Three Michelin Stars",
          "title": "Culinary Artistry Expressed Through Nature and Time",
          "subtitle": "An intimate 12-table sanctuary where heirloom ingredients, wild-foraged coastal aromatics, and avant-garde technique converge into an unforgettable 14-course journey.",
          "primaryButtonText": "Reserve an Experience",
          "primaryButtonLink": "#reservation",
          "secondaryButtonText": "View Seasonal Menu",
          "secondaryButtonLink": "#menu",
          "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Michelin Distinction",
              "value": "3 Stars"
            },
            {
              "id": "s2",
              "label": "Cellar Bottles",
              "value": "4,200 Labels"
            },
            {
              "id": "s3",
              "label": "Seatings Nightly",
              "value": "Two Only"
            }
          ]
        }
      },
      {
        "id": "fd1-menu",
        "type": "menu-catalog",
        "variant": "menu-categorized",
        "visible": true,
        "content": {
          "badge": "Autumn Harvest Progression",
          "title": "The Autumn Equinox Tasting Menu",
          "subtitle": "Each course is conceived to honor the micro-seasons of the North Atlantic coastline.",
          "items": [
            {
              "id": "m1",
              "title": "Hokkaido Scallop & Sea Urchin",
              "description": "Kombu-cured diver scallop, whipped Hokkaido uni emulsion, and finger lime pearls.",
              "badge": "First Movement",
              "price": "Part of Tasting ($395)"
            },
            {
              "id": "m2",
              "title": "A5 Miyazaki Wagyu over Binchotan",
              "description": "Charred over white binchotan coals with matsutake mushroom reduction and fermented black garlic.",
              "badge": "Main Movement"
            },
            {
              "id": "m3",
              "title": "Wild Blackberry & Smoked Pine Parfait",
              "description": "Conifer needle ice cream, toasted buckwheat sable, and reduced mountain bramble coulis.",
              "badge": "Final Movement"
            }
          ]
        }
      },
      {
        "id": "fd1-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "badge": "Reservations Open Monthly",
          "title": "An Unhurried Evening of Pure Gastronomic Wonder",
          "description": "Reservations for each calendar month open on the first day of the preceding month at 10:00 AM EST.",
          "primaryButtonText": "Book via Tock",
          "primaryButtonLink": "#reservation"
        }
      },
      {
        "id": "fd1-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "L'Aura Restaurant",
          "description": "12 Quai Voltaire, Manhattan, NY 10014",
          "copyrightText": "© 2026 L'Aura Gastronomy Group. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "food-fika-02",
    "slug": "fika-roast-nordic-cafe",
    "name": "Fika Roast Nordic Specialty Coffee",
    "description": "Direct-trade light roast specialty coffee, single-origin hand pour-overs, and artisan Scandinavian cardamom buns.",
    "industryId": "food-beverage",
    "categoryId": "coffee-roastery",
    "collectionId": "nordic-cafe",
    "designStyle": "minimal-neutral",
    "featured": true,
    "tags": [
      "coffee roaster",
      "nordic cafe",
      "specialty coffee",
      "pour over",
      "single origin"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "fd2-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "FIKA ROAST CO.",
          "primaryButtonText": "Shop Whole Bean",
          "primaryButtonLink": "#beans",
          "navLinks": [
            {
              "label": "Current Harvests",
              "href": "#coffee"
            },
            {
              "label": "Roastery & Cafe",
              "href": "#cafe"
            },
            {
              "label": "Subscriptions",
              "href": "#subscriptions"
            }
          ]
        }
      },
      {
        "id": "fd2-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Direct Trade • Light Nordic Roast Profile",
          "title": "Sweet, Clean, Terroir-Driven Coffee Roasted in Micro-Batches",
          "subtitle": "We source exclusively from transparent farming partners in Ethiopia, Colombia, and Kenya, roasting on our vintage Loring S15 to celebrate natural fruit florals.",
          "primaryButtonText": "Explore Single Origins",
          "primaryButtonLink": "#coffee",
          "imageUrl": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "fk1",
              "label": "Cup of Excellence Score",
              "value": "88+ Points"
            },
            {
              "id": "fk2",
              "label": "Direct Producer Price",
              "value": "3x Fairtrade"
            }
          ]
        }
      },
      {
        "id": "fd2-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Freshly Roasted Offerings",
          "items": [
            {
              "id": "c1",
              "title": "Ethiopia Yirgacheffe Idido (Washed)",
              "description": "Bergamot blossom, candied lemon peel, and delicate jasmine white tea sweetness.",
              "price": "$22 / 250g"
            },
            {
              "id": "c2",
              "title": "Colombia Huila Pink Bourbon (Anaerobic)",
              "description": "Vibrant tropical guava, sparkling passionfruit, and wild floral honey body.",
              "price": "$26 / 250g"
            },
            {
              "id": "c3",
              "title": "Handcrafted Swedish Cardamom Bullar",
              "description": "Slow-proved sourdough brioche swirled with fresh crushed green cardamom and pearl sugar.",
              "price": "$5.50"
            }
          ]
        }
      },
      {
        "id": "fd2-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Never Run Out of Extraordinary Coffee at Home",
          "description": "Custom subscription delivered every 2 weeks straight from our cooling trays.",
          "primaryButtonText": "Start Coffee Subscription",
          "primaryButtonLink": "#subscriptions"
        }
      },
      {
        "id": "fd2-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Fika Roast Specialty Coffee",
          "copyrightText": "© 2026 Fika Roast Roastery. Specialty Coffee Association Member."
        }
      }
    ]
  },
  {
    "id": "food-bakery-01",
    "slug": "flour-ferment-artisan-bakery",
    "name": "Flour & Ferment Artisan Bakery",
    "description": "Stone-milled heritage grains, 36-hour wild sourdough batards, laminated butter croissants, and seasonal fruit galettes.",
    "industryId": "food-beverage",
    "categoryId": "bakery",
    "collectionId": "artisan-bakery",
    "designStyle": "organic-natural",
    "tags": [
      "bakery",
      "sourdough",
      "croissants",
      "pastry",
      "artisan bread"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "fd3-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "FLOUR & FERMENT",
          "primaryButtonText": "Daily Bread Menu",
          "primaryButtonLink": "#menu",
          "navLinks": [
            {
              "label": "Wild Sourdough",
              "href": "#sourdough"
            },
            {
              "label": "Viennoiserie",
              "href": "#pastry"
            },
            {
              "label": "Baking Schedule",
              "href": "#hours"
            }
          ]
        }
      },
      {
        "id": "fd3-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Naturally Leavened • Local Organic Flours",
          "title": "Real Bread Crafted with Flour, Water, Salt, and Time",
          "subtitle": "Every loaf fermenting for 36 hours before baking on volcanic stone decks to create deep blistered crusts and custard-like open crumb.",
          "primaryButtonText": "See Today’s Fresh Bakes",
          "primaryButtonLink": "#menu",
          "imageUrl": "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "b1",
              "label": "Fermentation Duration",
              "value": "36 Hours"
            },
            {
              "id": "b2",
              "label": "Mother Starter Age",
              "value": "18 Years"
            }
          ]
        }
      },
      {
        "id": "fd3-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Morning Bakes from the Hearth",
          "items": [
            {
              "id": "bk1",
              "title": "Country Heritage Batard",
              "description": "Whole wheat, rye, and sifted organic flour with dark caramel blistered crust.",
              "price": "$9.00"
            },
            {
              "id": "bk2",
              "title": "Normandy Butter Croissant",
              "description": "84-layer laminated pastry made with cultured French butter, crisp and flaky.",
              "price": "$4.75"
            },
            {
              "id": "bk3",
              "title": "Olive & Smoked Rosemary Sourdough",
              "description": "Studded with Kalamata olives, toasted pine nuts, and garden rosemary sprigs.",
              "price": "$11.00"
            }
          ]
        }
      },
      {
        "id": "fd3-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Pre-Order Weekend Breads and Morning Pastries",
          "description": "Reserve your favorite loaves online for quick Saturday and Sunday counter pickup.",
          "primaryButtonText": "Pre-Order for Weekend",
          "primaryButtonLink": "#menu"
        }
      },
      {
        "id": "fd3-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Flour & Ferment Artisan Bakery",
          "copyrightText": "© 2026 Flour & Ferment Bread Co. Hearth baked daily."
        }
      }
    ]
  },
  {
    "id": "food-sushi-01",
    "slug": "omakase-kura-edomae",
    "name": "Omakase Kura Traditional Edomae",
    "description": "Ten-seat hinoki wood sushi bar delivering pristine Tokyo Toyosu Market seafood, aged shari rice, and ceremonial sake.",
    "industryId": "food-beverage",
    "categoryId": "sushi-restaurant",
    "collectionId": "sushi-edomae",
    "designStyle": "luxury-editorial",
    "featured": true,
    "tags": [
      "sushi",
      "omakase",
      "edomae",
      "japan",
      "hinoki counter",
      "nigiri"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "fd4-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "OMAKASE KURA",
          "primaryButtonText": "Reserve Counter Seat",
          "primaryButtonLink": "#reserve",
          "navLinks": [
            {
              "label": "Edomae Philosophy",
              "href": "#about"
            },
            {
              "label": "Fish Sourcing",
              "href": "#sourcing"
            },
            {
              "label": "Sake Pairings",
              "href": "#sake"
            }
          ]
        }
      },
      {
        "id": "fd4-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Master Chef Kenji Takahashi • 10 Seats Only",
          "title": "The Purest Expression of Tokyo Edomae Craftsmanship",
          "subtitle": "Wild bluefin tuna aged for 14 days, wild sea urchin from Hokkaido, and warm akazu-seasoned rice served piece-by-piece directly onto your ceramic plate.",
          "primaryButtonText": "Reserve 18-Course Omakase",
          "primaryButtonLink": "#reserve",
          "imageUrl": "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "su1",
              "label": "Daily Fish Flights from Toyosu",
              "value": "4x Weekly"
            },
            {
              "id": "su2",
              "label": "Counter Seats",
              "value": "10 Exclusive"
            }
          ]
        }
      },
      {
        "id": "fd4-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "title": "Omakase Highlights",
          "items": [
            {
              "id": "su_s1",
              "title": "Otoro (Wild Bluefin Fatty Tuna)",
              "description": "Dry-aged for 14 days under cedar chips, brushed with 20-year aged nikiri shoyu."
            },
            {
              "id": "su_s2",
              "title": "Bafun Uni from Nemuro",
              "description": "Creamy, sweet sea urchin gently layered over warm red vinegar rice and crispy nori."
            },
            {
              "id": "su_s3",
              "title": "Kohada (Japanese Gizzard Shad)",
              "description": "Cured in salt and red rice vinegar, highlighting traditional 200-year-old preservation mastery."
            }
          ]
        }
      },
      {
        "id": "fd4-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "An Intimate Masterclass in Japanese Culinary Devotion",
          "description": "Two seatings nightly at 6:00 PM and 8:30 PM. Bookings open on the 15th of every month.",
          "primaryButtonText": "View Seat Availability",
          "primaryButtonLink": "#reserve"
        }
      },
      {
        "id": "fd4-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Omakase Kura Edomae",
          "copyrightText": "© 2026 Omakase Kura Ltd. Traditional Japanese Sushi Atelier."
        }
      }
    ]
  },
  {
    "id": "food-pizza-01",
    "slug": "forno-napoletano-pizza",
    "name": "Forno Napoletano Wood-Fired Pizzeria",
    "description": "AVPN-certified Neapolitan pizzeria firing Caputo 00 dough in an authentic 900°F Vesuvian volcanic stone oven.",
    "industryId": "food-beverage",
    "categoryId": "pizza-restaurant",
    "collectionId": "italian-dining",
    "designStyle": "bold-creative",
    "tags": [
      "pizza",
      "neapolitan pizza",
      "wood fired",
      "italian food",
      "burrata"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "fd5-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "FORNO NAPOLETANO",
          "badge": "AVPN Certified Naples",
          "primaryButtonText": "Order Online / Pickup",
          "primaryButtonLink": "#order",
          "navLinks": [
            {
              "label": "Pizzas",
              "href": "#pizzas"
            },
            {
              "label": "Antipasti",
              "href": "#antipasti"
            },
            {
              "label": "Our Oven",
              "href": "#oven"
            }
          ]
        }
      },
      {
        "id": "fd5-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "True Neapolitan Pizza Association Certified",
          "title": "Blistered, Pillowy Crusts Fired in 90 Seconds at 900°F",
          "subtitle": "San Marzano D.O.P. tomatoes, fresh buffalo mozzarella flown in from Campania, and wild Sicilian oregano on 48-hour fermented dough.",
          "primaryButtonText": "Explore Pizza Menu",
          "primaryButtonLink": "#pizzas",
          "imageUrl": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "pz1",
              "label": "Oven Temperature",
              "value": "900°F"
            },
            {
              "id": "pz2",
              "label": "Bake Time",
              "value": "90 Seconds"
            }
          ]
        }
      },
      {
        "id": "fd5-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Signature Wood-Fired Pies",
          "items": [
            {
              "id": "pz_s1",
              "title": "Margherita Verace D.O.P.",
              "description": "San Marzano tomatoes, fresh Bufala Campana, organic sweet basil, and extra virgin olive oil.",
              "price": "$19.00"
            },
            {
              "id": "pz_s2",
              "title": "Diavola & Hot Calabrian Honey",
              "description": "Spicy Soppressata, smoked scamorza, fresh chili, and wild wildflower chili-infused honey.",
              "price": "$23.00"
            },
            {
              "id": "pz_s3",
              "title": "Tartufo & Wild Forest Mushrooms",
              "description": "Porcini crema, fontina, roasted chanterelles, white truffle oil, and fresh thyme.",
              "price": "$26.00"
            }
          ]
        }
      },
      {
        "id": "fd5-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Hot Wood-Fired Pizza Delivered to Your Table",
          "description": "Join us for casual indoor dining or take home a piping hot box in 15 minutes.",
          "primaryButtonText": "Order Takeaway Now",
          "primaryButtonLink": "#order"
        }
      },
      {
        "id": "fd5-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Forno Napoletano Pizzeria",
          "copyrightText": "© 2026 Forno Napoletano. AVPN Registered Member #842."
        }
      }
    ]
  },
  {
    "id": "food-burger-01",
    "slug": "iron-patty-craft-smashburger",
    "name": "Iron Patty Craft Smashburger & Brews",
    "description": "Crispy lacy-edged custom brisket-shortrib smashburgers, hand-cut tallow fries, and local craft IPAs on tap.",
    "industryId": "food-beverage",
    "categoryId": "burger-restaurant",
    "collectionId": "craft-burger",
    "designStyle": "brutalist-clean",
    "tags": [
      "burger",
      "smashburger",
      "craft beer",
      "french fries",
      "diner"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "fd6-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "IRON PATTY BURGERS",
          "primaryButtonText": "Order Ahead for Pickup",
          "primaryButtonLink": "#order",
          "navLinks": [
            {
              "label": "Smashburgers",
              "href": "#burgers"
            },
            {
              "label": "Fries & Shakes",
              "href": "#sides"
            },
            {
              "label": "Tap List",
              "href": "#beers"
            }
          ]
        }
      },
      {
        "id": "fd6-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Double Smashed • Custom Brisket & Chuck Blend",
          "title": "Searing Hot Steel. Ultra-Crisp Edges. Pure Beef Flavor.",
          "subtitle": "We smash proprietary 80/20 dry-aged beef balls onto seasoned chrome flat-tops at 450°F to create that caramelized Maillard crust everyone craves.",
          "primaryButtonText": "View the Smash Menu",
          "primaryButtonLink": "#burgers",
          "imageUrl": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "bg1",
              "label": "Beef Grind Blend",
              "value": "Chuck & Brisket"
            },
            {
              "id": "bg2",
              "label": "Local Craft Taps",
              "value": "16 Drafts"
            }
          ]
        }
      },
      {
        "id": "fd6-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "The Burger Lineup",
          "items": [
            {
              "id": "bg_s1",
              "title": "The Double OG Smasher",
              "description": "Two 3oz lacy smash patties, double American cheese, caramelized onions, house pickles, and Iron sauce on toasted potato bun.",
              "price": "$12.50"
            },
            {
              "id": "bg_s2",
              "title": "Oklahoma Onion Crunch",
              "description": "Shaved sweet onions smashed paper-thin directly into beef patties with smoked cheddar and dijonnaise.",
              "price": "$13.50"
            },
            {
              "id": "bg_s3",
              "title": "Beef Tallow Crinkle Cut Fries",
              "description": "Double-fried in pasture-raised beef tallow for supreme crunch, tossed in rosemary Maldon salt.",
              "price": "$5.50"
            }
          ]
        }
      },
      {
        "id": "fd6-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Hungry? Skip the Line with Mobile Ordering",
          "description": "Hot burgers and cold beers ready at our pickup window in 10 minutes.",
          "primaryButtonText": "Order Smashburgers Online",
          "primaryButtonLink": "#order"
        }
      },
      {
        "id": "fd6-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Iron Patty Craft Smashburger & Brews",
          "copyrightText": "© 2026 Iron Patty Burger Co. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "food-bistro-01",
    "slug": "bistro-madeleine-parisian",
    "name": "Bistro Madeleine Parisian Brasserie",
    "description": "Classic French brasserie serving steak frites with béarnaise, duck confit, escargots bourguignonne, and natural Loire wines.",
    "industryId": "food-beverage",
    "categoryId": "restaurant",
    "collectionId": "french-bistro",
    "designStyle": "luxury-editorial",
    "tags": [
      "bistro",
      "french food",
      "steak frites",
      "brasserie",
      "wine bar"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "fd7-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "BISTRO MADELEINE",
          "primaryButtonText": "Book a Table",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Carte & Menu",
              "href": "#menu"
            },
            {
              "label": "Vins Naturels",
              "href": "#wine"
            },
            {
              "label": "Brunch",
              "href": "#brunch"
            }
          ]
        }
      },
      {
        "id": "fd7-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Parisian Bistro Classics Since 1994",
          "title": "A Warm Slice of Saint-Germain-des-Prés in the City",
          "subtitle": "Zinc bar counters, red leather banquettes, sizzling cast-iron skillets of steak au poivre, and carafes of chilled Beaujolais poured until late.",
          "primaryButtonText": "Reserve a Bistro Table",
          "primaryButtonLink": "#book",
          "imageUrl": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "bt1",
              "label": "Steaks Frites Served Monthly",
              "value": "3,200 Plates"
            },
            {
              "id": "bt2",
              "label": "French Natural Wines by the Glass",
              "value": "28 Selections"
            }
          ]
        }
      },
      {
        "id": "fd7-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "title": "Les Classiques de la Maison",
          "items": [
            {
              "id": "fr1",
              "title": "Steak Frites Sauce Béarnaise",
              "description": "Prime 10oz dry-aged bavette steak with hand-cut Kennebec frites and fresh tarragon béarnaise.",
              "price": "$38.00"
            },
            {
              "id": "fr2",
              "title": "Canard Confit Croustillant",
              "description": "Slow-cooked Moulard duck leg with crispy skin, garlic potatoes sarladaises, and frisée salad.",
              "price": "$34.00"
            },
            {
              "id": "fr3",
              "title": "Escargots de Bourgogne (x6)",
              "description": "Wild Burgundy snails baked in shells with garlic, parsley butter, and crusty baguette.",
              "price": "$18.00"
            }
          ]
        }
      },
      {
        "id": "fd7-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Join Us for Lunch, Apéro, or Late Evening Dinner",
          "description": "Walk-ins always welcome at our convivial zinc bar and covered outdoor patio.",
          "primaryButtonText": "Reserve Table Online",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "fd7-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Bistro Madeleine Brasserie",
          "copyrightText": "© 2026 Bistro Madeleine. Authentique cuisine française."
        }
      }
    ]
  },
  {
    "id": "food-steak-01",
    "slug": "prime-ember-chophouse",
    "name": "Prime & Ember Dry-Aged Chop House",
    "description": "Premier steakhouse featuring in-house Himalayan salt-brick dry-aging room, wood-charred tomahawks, and classic scotch cart.",
    "industryId": "food-beverage",
    "categoryId": "steakhouse",
    "collectionId": "luxury-steakhouse",
    "designStyle": "dark-cinematic",
    "tags": [
      "steakhouse",
      "dry aged beef",
      "tomahawk",
      "whiskey",
      "fine dining"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "fd8-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "PRIME & EMBER",
          "primaryButtonText": "Book Dining Room",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "The Cuts",
              "href": "#steaks"
            },
            {
              "label": "Dry Aging Vault",
              "href": "#aging"
            },
            {
              "label": "Scotch Library",
              "href": "#scotch"
            }
          ]
        }
      },
      {
        "id": "fd8-hero",
        "type": "hero",
        "variant": "hero-cinematic-dark",
        "visible": true,
        "content": {
          "badge": "Himalayan Salt Dry-Aging Chamber",
          "title": "Unrivaled Cuts. 1,200° Infrared Broilers. Pure Indulgence.",
          "subtitle": "USDA Prime cuts aged for 45 to 90 days in our glowing salt-brick room, seared at blistering temperatures, and finished with bone marrow butter.",
          "primaryButtonText": "Reserve Table for Tonight",
          "primaryButtonLink": "#book",
          "imageUrl": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "stk1",
              "label": "Maximum Dry Aging Window",
              "value": "90 Days"
            },
            {
              "id": "stk2",
              "label": "Rare Single Malt Whiskeys",
              "value": "350 Bottles"
            }
          ]
        }
      },
      {
        "id": "fd8-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Prime Steak Selections",
          "items": [
            {
              "id": "st_s1",
              "title": "45-Day Dry-Aged Bone-In Ribeye (22oz)",
              "description": "Intense nutty, umami profile charred over white oak with Maldon smoked sea salt.",
              "price": "$94.00"
            },
            {
              "id": "st_s2",
              "title": "A5 Miyazaki Wagyu Striploin (6oz)",
              "description": "Intricate intra-muscular marbling melting effortlessly over hot Japanese river stones.",
              "price": "$145.00"
            },
            {
              "id": "st_s3",
              "title": "Truffled Lobster Mac & Cheese",
              "description": "Maine lobster claw meat, five-cheese Mornay, black winter truffle breadcrumbs.",
              "price": "$32.00"
            }
          ]
        }
      },
      {
        "id": "fd8-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Host Your Next Executive Dinner or Celebration",
          "description": "Private dining rooms with dedicated sommelier service accommodating 8 to 40 guests.",
          "primaryButtonText": "Inquire Private Dining",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "fd8-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Prime & Ember Dry-Aged Chop House",
          "copyrightText": "© 2026 Prime & Ember Hospitality Group. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "food-seafood-01",
    "slug": "pelican-cove-oyster-bar",
    "name": "Pelican Cove Oyster & Raw Seafood Bar",
    "description": "Harborside raw bar featuring daily iced oyster selections, whole steamed Maine lobster, ceviches, and coastal crisp Rieslings.",
    "industryId": "food-beverage",
    "categoryId": "seafood-restaurant",
    "collectionId": "coastal-seafood",
    "designStyle": "luxury-editorial",
    "tags": [
      "seafood",
      "oysters",
      "raw bar",
      "lobster",
      "coastal dining"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "fd9-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "PELICAN COVE SEAFOOD",
          "primaryButtonText": "Reserve Patio Table",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Raw Bar Tides",
              "href": "#raw"
            },
            {
              "label": "Hot Seafood",
              "href": "#mains"
            },
            {
              "label": "Dock Hours",
              "href": "#hours"
            }
          ]
        }
      },
      {
        "id": "fd9-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Wild Caught • Flown in Daily from Maine & Puget Sound",
          "title": "Freshly Shucked Oysters and Ocean Catch by the Harbor",
          "subtitle": "Watch our shuckers ice down cold-water Kumamoto, Wellfleet, and Island Creek oysters alongside fresh Dungeness crab and sea salt martinis.",
          "primaryButtonText": "Explore Today’s Raw Bar",
          "primaryButtonLink": "#raw",
          "imageUrl": "https://images.unsplash.com/photo-1559742811-82286364ceaf?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "sf1",
              "label": "Oysters Shucked Daily",
              "value": "2,500+"
            },
            {
              "id": "sf2",
              "label": "Local Fishermen Co-op",
              "value": "100% Sustainable"
            }
          ]
        }
      },
      {
        "id": "fd9-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "From the Raw Bar & Galley",
          "items": [
            {
              "id": "sf_s1",
              "title": "The Grand Plateau Royale",
              "description": "18 iced oysters, 6 jumbo gulf shrimp, whole split lobster, Alaskan king crab legs, and scallop ceviche.",
              "price": "$145.00"
            },
            {
              "id": "sf_s2",
              "title": "Pan-Seared Day-Boat Halibut",
              "description": "Corn and chanterelle succotash, charred tomato dashi, and garden sorrel purée.",
              "price": "$42.00"
            },
            {
              "id": "sf_s3",
              "title": "Traditional Maine Lobster Roll",
              "description": "Warm butter poached tail and knuckle meat stuffed in a griddled split-top brioche bun.",
              "price": "$34.00"
            }
          ]
        }
      },
      {
        "id": "fd9-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Happy Hour Dollar Oyster Specials Every Weekday",
          "description": "Monday through Thursday 4:00 PM – 6:00 PM with draft beers and sparkling rosé.",
          "primaryButtonText": "Join the Raw Bar Waitlist",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "fd9-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Pelican Cove Oyster & Raw Seafood Bar",
          "copyrightText": "© 2026 Pelican Cove Seafood Ltd. Monterey Bay Aquarium Seafood Watch Certified."
        }
      }
    ]
  },
  {
    "id": "food-vegan-01",
    "slug": "verdant-botanica-vegan",
    "name": "Verdant Botanica Farm-to-Fork Plant Cuisine",
    "description": "Elevated zero-waste 100% plant-based dining showcasing organic microgreens, fermented cashew cheeses, and biodynamic natural wines.",
    "industryId": "food-beverage",
    "categoryId": "vegan-restaurant",
    "collectionId": "plant-based",
    "designStyle": "organic-natural",
    "tags": [
      "vegan",
      "plant based",
      "farm to table",
      "organic",
      "sustainability",
      "gluten free"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "fd10-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "VERDANT BOTANICA",
          "badge": "100% Plant-Based",
          "primaryButtonText": "Reserve Garden Table",
          "primaryButtonLink": "#reserve",
          "navLinks": [
            {
              "label": "Harvest Menu",
              "href": "#menu"
            },
            {
              "label": "Partner Farms",
              "href": "#farms"
            },
            {
              "label": "Zero-Waste",
              "href": "#sustainability"
            }
          ]
        }
      },
      {
        "id": "fd10-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Root-to-Stem Dining • Certified Organic",
          "title": "Celebrating the Extraordinary Flavor Potential of Plants",
          "subtitle": "Smoked king trumpet mushrooms, slow-braised heirloom beets, artisanal cultured nut cheeses, and vibrant culinary edible flowers grown on our rooftop greenhouse.",
          "primaryButtonText": "View Plant Menu",
          "primaryButtonLink": "#menu",
          "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "vg1",
              "label": "Certified Organic Ingredients",
              "value": "100%"
            },
            {
              "id": "vg2",
              "label": "Landfill Diversion Rate",
              "value": "98.5%"
            }
          ]
        }
      },
      {
        "id": "fd10-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Botanical Creations",
          "items": [
            {
              "id": "vg_s1",
              "title": "Smoked King Trumpet Scallops",
              "description": "Pan-seared mushroom medallions over sweet parsnip purée, crispy shallots, and herb oil.",
              "price": "$24.00"
            },
            {
              "id": "vg_s2",
              "title": "Artisanal Cultured Cheese Board",
              "description": "Aged truffle ash cashew wheel, almond brie, fermented fig jam, and seed crisps.",
              "price": "$26.00"
            },
            {
              "id": "vg_s3",
              "title": "Heirloom Squash Agnolotti",
              "description": "Handmade saffron pasta filled with roasted kabocha squash, sage butter, and pomegranate.",
              "price": "$28.00"
            }
          ]
        }
      },
      {
        "id": "fd10-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Dine in Harmony with the Earth",
          "description": "Experience plant-based gastronomy that surprises and delights even the most discerning palate.",
          "primaryButtonText": "Book a Table",
          "primaryButtonLink": "#reserve"
        }
      },
      {
        "id": "fd10-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Verdant Botanica Plant Cuisine",
          "copyrightText": "© 2026 Verdant Botanica. Certified B-Corp Restaurant."
        }
      }
    ]
  },
  {
    "id": "food-gelato-01",
    "slug": "piccolo-fiordilatte-gelato",
    "name": "Piccolo Fiordilatte Artisanal Gelato",
    "description": "Traditional Italian slow-churned gelato made daily with organic whole Guernsey milk, Bronte pistachios, and fresh seasonal fruit sorbetti.",
    "industryId": "food-beverage",
    "categoryId": "ice-cream-shop",
    "collectionId": "gelato-shop",
    "designStyle": "soft-pastel",
    "tags": [
      "gelato",
      "ice cream",
      "italian desserts",
      "pistachio",
      "sorbet"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "fd11-nav",
        "type": "navbar",
        "variant": "navbar-floating",
        "visible": true,
        "content": {
          "title": "PICCOLO FIORDILATTE",
          "primaryButtonText": "Today’s 18 Flavors",
          "primaryButtonLink": "#flavors",
          "navLinks": [
            {
              "label": "Gelato Menu",
              "href": "#flavors"
            },
            {
              "label": "Our Milk & Ingredients",
              "href": "#milk"
            },
            {
              "label": "Catering Cart",
              "href": "#catering"
            }
          ]
        }
      },
      {
        "id": "fd11-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Churned Fresh Every Morning • Low Overrun",
          "title": "Velvety, Dense, Authentic Italian Gelato",
          "subtitle": "Zero artificial flavor pastes or coloring. Just slow-churned grass-fed Guernsey milk, pure roasted Sicilian Bronte pistachios, and Valrhona dark cocoa.",
          "primaryButtonText": "View Rotating Flavors",
          "primaryButtonLink": "#flavors",
          "imageUrl": "https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "gl1",
              "label": "Butterfat Content",
              "value": "7% (Lighter than ice cream)"
            },
            {
              "id": "gl2",
              "label": "Flavors Handcrafted Daily",
              "value": "18 Fresh Tubs"
            }
          ]
        }
      },
      {
        "id": "fd11-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Classic & Seasonal Flavors",
          "items": [
            {
              "id": "gl_s1",
              "title": "Pistacchio di Bronte D.O.P.",
              "description": "Stone-ground emerald pistachios harvested from volcanic slopes of Mount Etna with touch of sea salt."
            },
            {
              "id": "gl_s2",
              "title": "Stracciatella alla Menta",
              "description": "Fresh garden mint infused cream laced with ribbons of dark Ecuadorian chocolate shards."
            },
            {
              "id": "gl_s3",
              "title": "Alphonso Mango & Lime Sorbetto",
              "description": "Dairy-free, pure fruit silkiness bursting with tropical mango brightness."
            }
          ]
        }
      },
      {
        "id": "fd11-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Rent Our Vintage Gelato Cart for Weddings & Events",
          "description": "Two scoops of pure happiness served from our custom white-and-brass mobile cart.",
          "primaryButtonText": "Inquire Gelato Cart Catering",
          "primaryButtonLink": "#catering"
        }
      },
      {
        "id": "fd11-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Piccolo Fiordilatte Gelato Atelier",
          "copyrightText": "© 2026 Piccolo Fiordilatte Gelato. Italian Academy of Gelato Standards."
        }
      }
    ]
  },
  {
    "id": "food-mexican-01",
    "slug": "casa-oaxaca-mexican-cantina",
    "name": "Casa Oaxaca Authentic Mexican Cantina",
    "description": "Ancestral Oaxacan gastronomy, 30-ingredient mole negro, heirloom nixtamalized corn tortillas, and single-village mezcal bar.",
    "industryId": "food-beverage",
    "categoryId": "mexican-restaurant",
    "collectionId": "oaxacan-dining",
    "designStyle": "bold-creative",
    "tags": [
      "mexican",
      "oaxaca",
      "mole",
      "tacos",
      "mezcal",
      "tequila"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "fd12-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "CASA OAXACA",
          "primaryButtonText": "Book Table",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Moles & Tlayudas",
              "href": "#menu"
            },
            {
              "label": "Mezcal Library",
              "href": "#mezcal"
            },
            {
              "label": "Ancestral Corn",
              "href": "#corn"
            }
          ]
        }
      },
      {
        "id": "fd12-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Heirloom Criollo Corn • Hand-Pressed Tortillas",
          "title": "The Soul of Oaxaca: Complex Moles, Smoke, and Fire",
          "subtitle": "Our mole negro simmers for three days with charred chilhuacle chiles, Mexican chocolate, and plantains, served alongside warm tortillas pressed from heirloom Oaxacan corn.",
          "primaryButtonText": "Reserve Cantina Table",
          "primaryButtonLink": "#book",
          "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "mx1",
              "label": "Ancestral Mezcals in Stock",
              "value": "180 Bottles"
            },
            {
              "id": "mx2",
              "label": "Ingredients in House Mole",
              "value": "32 Spices"
            }
          ]
        }
      },
      {
        "id": "fd12-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Sabores de Oaxaca",
          "items": [
            {
              "id": "mx_s1",
              "title": "Mole Negro con Pollo de Granja",
              "description": "Rich velvet black mole over slow-braised organic chicken, served with toasted sesame seeds and fresh rice.",
              "price": "$32.00"
            },
            {
              "id": "mx_s2",
              "title": "Tlayuda Mixta Tradicional",
              "description": "Large crisp toasted corn tortilla spread with asiento, black bean purée, quesillo, cecina, and avocado.",
              "price": "$26.00"
            },
            {
              "id": "mx_s3",
              "title": "Tasting Flight of Rare Wild Agave Mezcals",
              "description": "Three 1oz pours of Tobalá, Tepeztate, and Arroqueño with sal de gusano and fresh orange wheels.",
              "price": "$38.00"
            }
          ]
        }
      },
      {
        "id": "fd12-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Experience Genuine Oaxacan Warmth and Hospitality",
          "description": "Lively dining room, courtyard string lights, and handmade cocktails all evening.",
          "primaryButtonText": "Reserve Your Evening",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "fd12-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Casa Oaxaca Mexican Cantina",
          "copyrightText": "© 2026 Casa Oaxaca Cantina. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "food-italian-01",
    "slug": "trattoria-bella-vista-italian",
    "name": "Trattoria Bella Vista Rustic Italian",
    "description": "Charming Tuscan trattoria with handmade pasta extruded daily, 18-month Prosciutto di Parma, and Chianti Classico cellars.",
    "industryId": "food-beverage",
    "categoryId": "italian-restaurant",
    "collectionId": "italian-dining",
    "designStyle": "organic-natural",
    "tags": [
      "italian",
      "pasta",
      "trattoria",
      "tuscan",
      "tiramisu",
      "wine"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "fd13-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "TRATTORIA BELLA VISTA",
          "primaryButtonText": "Reserve Table",
          "primaryButtonLink": "#reserve",
          "navLinks": [
            {
              "label": "Pasta Fatta a Mano",
              "href": "#pasta"
            },
            {
              "label": "Secondi & Carne",
              "href": "#secondi"
            },
            {
              "label": "Wine Cellar",
              "href": "#cellar"
            }
          ]
        }
      },
      {
        "id": "fd13-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Fresh Pasta Extruded Daily on Bronze Dies",
          "title": "Generous Tuscan Suppers Cooked with Family Passion",
          "subtitle": "Pappardelle with slow-simmered wild boar ragù, pillows of ricotta ravioli bathed in brown butter and sage, and authentic espresso-soaked tiramisu.",
          "primaryButtonText": "Reserve Evening Table",
          "primaryButtonLink": "#reserve",
          "imageUrl": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "it1",
              "label": "Kg of Fresh Pasta Made Daily",
              "value": "60 Kg"
            },
            {
              "id": "it2",
              "label": "Tuscan Estate Wines",
              "value": "140 Labels"
            }
          ]
        }
      },
      {
        "id": "fd13-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Pasta Fatta in Casa",
          "items": [
            {
              "id": "it_s1",
              "title": "Pappardelle al Cinghiale",
              "description": "Wide ribbon pasta with 8-hour braised wild boar ragù, rosemary, and aged Parmigiano-Reggiano.",
              "price": "$29.00"
            },
            {
              "id": "it_s2",
              "title": "Cacio e Pepe in Forma di Pecorino",
              "description": "Hand-rolled tonnarelli tossed tableside inside a hollowed wheel of aged Roman Pecorino.",
              "price": "$26.00"
            },
            {
              "id": "it_s3",
              "title": "Bistecca alla Fiorentina (36oz)",
              "description": "Dry-aged Porterhouse grilled over oak embers with roasted rosemary fingerlings and sea salt.",
              "price": "$98.00"
            }
          ]
        }
      },
      {
        "id": "fd13-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Celebrate Life with Good Wine and Great Pasta",
          "description": "Warm candlelight, rustic brick arches, and authentic Italian hospitality.",
          "primaryButtonText": "Book Dinner Reservations",
          "primaryButtonLink": "#reserve"
        }
      },
      {
        "id": "fd13-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Trattoria Bella Vista",
          "copyrightText": "© 2026 Trattoria Bella Vista. Mangia bene, ridi spesso, ama molto."
        }
      }
    ]
  },
  {
    "id": "food-cake-01",
    "slug": "sugar-gold-cake-atelier",
    "name": "Sugar & Gold Bespoke Cake Atelier",
    "description": "High-end custom wedding cakes, edible gold leaf detailing, sugar floral artistry, and luxury dessert table design.",
    "industryId": "food-beverage",
    "categoryId": "cake-shop",
    "collectionId": "wedding-cakes",
    "designStyle": "soft-pastel",
    "tags": [
      "cake shop",
      "wedding cakes",
      "patisserie",
      "dessert",
      "custom cakes"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "fd14-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "SUGAR & GOLD ATELIER",
          "primaryButtonText": "Book Tasting Box",
          "primaryButtonLink": "#tasting",
          "navLinks": [
            {
              "label": "Wedding Portfolios",
              "href": "#gallery"
            },
            {
              "label": "Cake Flavors",
              "href": "#flavors"
            },
            {
              "label": "Consultations",
              "href": "#consult"
            }
          ]
        }
      },
      {
        "id": "fd14-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Architectural Cake Artistry & Hand-Crafted Sugar Florals",
          "title": "Sculptural Confections for the World’s Grandest Celebrations",
          "subtitle": "Each tiered masterpiece is tailored to your wedding design palette, layered with Swiss meringue buttercream, Valrhona ganache, and lifelike sugar blossoms.",
          "primaryButtonText": "Order Wedding Tasting Kit",
          "primaryButtonLink": "#tasting",
          "imageUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "ck1",
              "label": "Luxury Weddings Styled",
              "value": "450+"
            },
            {
              "id": "ck2",
              "label": "Handcrafted Sugar Petals per Cake",
              "value": "1,200+"
            }
          ]
        }
      },
      {
        "id": "fd14-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "title": "Signature Cake Profiles",
          "items": [
            {
              "id": "ck_s1",
              "title": "Champagne & Wild Raspberry Silk",
              "description": "Brut champagne soaked sponge, whipped white chocolate curd, and tart raspberry coulis."
            },
            {
              "id": "ck_s2",
              "title": "Salted Caramel Espresso Praline",
              "description": "Madagascar vanilla bean cake layered with fleur de sel caramel and roasted hazelnut praline."
            },
            {
              "id": "ck_s3",
              "title": "Earl Grey Lavender & Honey Fig",
              "description": "Bergamot-infused chiffon, wildflower honey buttercream, and fresh black mission fig compote."
            }
          ]
        }
      },
      {
        "id": "fd14-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Reserve Your Wedding Date in Our Atelier Calendar",
          "description": "We limit commissions to two bespoke wedding cakes per weekend to guarantee perfection.",
          "primaryButtonText": "Schedule Design Consultation",
          "primaryButtonLink": "#consult"
        }
      },
      {
        "id": "fd14-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Sugar & Gold Bespoke Cake Atelier",
          "copyrightText": "© 2026 Sugar & Gold Confections. Featured in Vogue Weddings."
        }
      }
    ]
  },
  {
    "id": "food-cafe-01",
    "slug": "morning-ritual-espresso-brunch",
    "name": "Morning Ritual Espresso & Brunch Pavilion",
    "description": "Bright botanical brunch pavilion serving sourdough avocado toasts, lemon ricotta hotcakes, and signature matcha lattes.",
    "industryId": "food-beverage",
    "categoryId": "cafe",
    "collectionId": "brunch-cafe",
    "designStyle": "organic-natural",
    "tags": [
      "cafe",
      "brunch",
      "espresso",
      "avocado toast",
      "pancakes",
      "breakfast"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "fd15-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "MORNING RITUAL BRUNCH",
          "primaryButtonText": "Join Online Waitlist",
          "primaryButtonLink": "#waitlist",
          "navLinks": [
            {
              "label": "Brunch Plates",
              "href": "#menu"
            },
            {
              "label": "Espresso Bar",
              "href": "#drinks"
            },
            {
              "label": "Greenhouse Patio",
              "href": "#patio"
            }
          ]
        }
      },
      {
        "id": "fd15-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "All-Day Brunch • Specialty Coffee",
          "title": "Sunlit Mornings, Great Coffee, and Comforting Brunch",
          "subtitle": "Gather with friends under climbing jasmine vines for soufflé ricotta pancakes, poached egg grain bowls, and iced pistachio cold foams.",
          "primaryButtonText": "Check Live Wait Time",
          "primaryButtonLink": "#waitlist",
          "imageUrl": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "mr1",
              "label": "Average Weekend Table Wait",
              "value": "< 20 Mins"
            },
            {
              "id": "mr2",
              "label": "Organic Eggs Served Weekly",
              "value": "4,000 Eggs"
            }
          ]
        }
      },
      {
        "id": "fd15-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Brunch Favorites",
          "items": [
            {
              "id": "mr_s1",
              "title": "Fluffy Lemon Ricotta Hotcakes",
              "description": "Whipped honeycomb butter, fresh blueberries, and pure Vermont amber maple syrup.",
              "price": "$18.50"
            },
            {
              "id": "mr_s2",
              "title": "Truffle Scramble on Sourdough",
              "description": "Soft creamy pasture eggs, shaved black truffle, chives, and toasted country bread.",
              "price": "$19.00"
            },
            {
              "id": "mr_s3",
              "title": "Iced Ceremonial Uji Matcha Latte",
              "description": "Whisked first-harvest Japanese matcha with oat milk and house vanilla bean syrup.",
              "price": "$7.50"
            }
          ]
        }
      },
      {
        "id": "fd15-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Skip the Sidewalk Wait on Busy Weekends",
          "description": "Add your name to our Yelp Waitlist from your phone before leaving home.",
          "primaryButtonText": "Join Waitlist Now",
          "primaryButtonLink": "#waitlist"
        }
      },
      {
        "id": "fd15-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Morning Ritual Espresso & Brunch",
          "copyrightText": "© 2026 Morning Ritual Cafe. Served with sunshine daily."
        }
      }
    ]
  },
  {
    "id": "food-fastfood-01",
    "slug": "crisp-crunch-fried-chicken",
    "name": "Crisp & Crunch Artisan Fried Chicken",
    "description": "Double-dredged buttermilk fried chicken sandwiches, hot honey tenders, crinkle fries, and freshly whisked shakes.",
    "industryId": "food-beverage",
    "categoryId": "fast-food",
    "collectionId": "fast-casual",
    "designStyle": "bold-creative",
    "tags": [
      "fried chicken",
      "fast food",
      "sandwiches",
      "tenders",
      "hot honey"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "fd16-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "CRISP & CRUNCH CHICKEN",
          "primaryButtonText": "Order Quick Pickup",
          "primaryButtonLink": "#order",
          "navLinks": [
            {
              "label": "Sandwiches",
              "href": "#sandwiches"
            },
            {
              "label": "Tenders & Dips",
              "href": "#tenders"
            },
            {
              "label": "Family Buckets",
              "href": "#family"
            }
          ]
        }
      },
      {
        "id": "fd16-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "24-Hour Herb Buttermilk Brined",
          "title": "Insanely Crispy, Juicy Fried Chicken Sandwiches",
          "subtitle": "Never frozen chicken breasts, marinated in seasoned buttermilk, double-dredged in seasoned flour, and drizzled with hot habanero honey.",
          "primaryButtonText": "Order Pickup Now",
          "primaryButtonLink": "#order",
          "imageUrl": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "cc1",
              "label": "Average Pickup Time",
              "value": "7 Minutes"
            },
            {
              "id": "cc2",
              "label": "Scratch Sauces",
              "value": "8 Flavors"
            }
          ]
        }
      },
      {
        "id": "fd16-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Crispy Favorites",
          "items": [
            {
              "id": "cc_s1",
              "title": "The Hot Honey Deluxe Sandwich",
              "description": "Fried breast, habanero hot honey, creamy cabbage slaw, pickles, brioche bun.",
              "price": "$11.95"
            },
            {
              "id": "cc_s2",
              "title": "5-Piece Jumbo Crispy Tenders",
              "description": "Hand-battered tenders served with choice of garlic ranch, smokey BBQ, or ghost pepper sauce.",
              "price": "$13.50"
            },
            {
              "id": "cc_s3",
              "title": "Loaded Cheddar Bacon Waffle Fries",
              "description": "Crispy waffle fries smothered in warm cheese sauce, bacon crumbles, and scallions.",
              "price": "$6.50"
            }
          ]
        }
      },
      {
        "id": "fd16-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Get 15% Off Your First Online Order",
          "description": "Use code CRISPY15 at checkout for instant mobile order savings.",
          "primaryButtonText": "Start Mobile Order",
          "primaryButtonLink": "#order"
        }
      },
      {
        "id": "fd16-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Crisp & Crunch Fried Chicken Co.",
          "copyrightText": "© 2026 Crisp & Crunch Chicken Inc. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "food-juice-01",
    "slug": "glow-press-cold-pressed-juicery",
    "name": "Glow Press Cold-Pressed Juicery & Bowls",
    "description": "Hydraulic cold-pressed organic juices, superfood wellness shots, organic açai bowls, and functional adaptogenic smoothies.",
    "industryId": "food-beverage",
    "categoryId": "juice-bar",
    "collectionId": "wellness-dining",
    "designStyle": "organic-natural",
    "tags": [
      "juice bar",
      "cold pressed",
      "smoothies",
      "acai bowl",
      "wellness",
      "organic"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "fd17-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "GLOW PRESS JUICERY",
          "primaryButtonText": "Order Juice Cleanses",
          "primaryButtonLink": "#cleanses",
          "navLinks": [
            {
              "label": "Cold-Pressed Juices",
              "href": "#juices"
            },
            {
              "label": "Açai Bowls",
              "href": "#bowls"
            },
            {
              "label": "Cleanse Plans",
              "href": "#cleanses"
            }
          ]
        }
      },
      {
        "id": "fd17-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "100% Raw • Hydraulic Cold-Pressed • Zero HPP",
          "title": "Living Enzymes and Vibrant Nutrition in Every Bottle",
          "subtitle": "Three pounds of certified organic produce cold-pressed into every 16oz glass bottle. No pasteurization, no added sugars, no preservatives.",
          "primaryButtonText": "Shop Fresh Juices",
          "primaryButtonLink": "#juices",
          "imageUrl": "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "gp1",
              "label": "Pounds of Produce per Bottle",
              "value": "3.2 Lbs"
            },
            {
              "id": "gp2",
              "label": "Daily Cold Pressing Time",
              "value": "4:00 AM"
            }
          ]
        }
      },
      {
        "id": "fd17-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Daily Vitality Menu",
          "items": [
            {
              "id": "gp_s1",
              "title": "Deep Green Radiance",
              "description": "Kale, spinach, cucumber, celery, green apple, lemon, and ginger root.",
              "price": "$10.50"
            },
            {
              "id": "gp_s2",
              "title": "Sunset Turmeric & Citrus",
              "description": "Carrot, Valencia orange, fresh turmeric rhizome, pineapple, and black pepper oil.",
              "price": "$10.50"
            },
            {
              "id": "gp_s3",
              "title": "Amazonian Wild Açai Bowl",
              "description": "Pure unsweetened açai topped with hemp granola, strawberries, banana, and raw cacao nibs.",
              "price": "$14.00"
            }
          ]
        }
      },
      {
        "id": "fd17-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Reset Your Energy with a 3-Day Juice Cleanse",
          "description": "Delivered in chilled insulated cooler bags straight to your doorstep.",
          "primaryButtonText": "Order 3-Day Cleanse",
          "primaryButtonLink": "#cleanses"
        }
      },
      {
        "id": "fd17-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Glow Press Cold-Pressed Juicery",
          "copyrightText": "© 2026 Glow Press Organics. USDA Certified Organic."
        }
      }
    ]
  },
  {
    "id": "food-indian-01",
    "slug": "maharaja-heritage-indian",
    "name": "Maharaja Heritage Royal Indian Dining",
    "description": "Awadhi dum biryanis, slow-simmered rich dal makhani, tandoori clay oven grills, and aromatic saffron curries.",
    "industryId": "food-beverage",
    "categoryId": "indian-restaurant",
    "collectionId": "indian-fine-dining",
    "designStyle": "luxury-editorial",
    "tags": [
      "indian",
      "curry",
      "biryani",
      "tandoor",
      "fine dining",
      "tikka"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "fd18-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "MAHARAJA HERITAGE",
          "primaryButtonText": "Reserve Table",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Royal Curries",
              "href": "#curries"
            },
            {
              "label": "Tandoor Grills",
              "href": "#tandoor"
            },
            {
              "label": "Private Banquets",
              "href": "#banquets"
            }
          ]
        }
      },
      {
        "id": "fd18-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Centuries of Royal Awadhi Culinary Heritage",
          "title": "Rich Spices, Slow Clay-Pot Dum Cooking, and Regal Feasts",
          "subtitle": "Saffron-infused basmati sealed with dough, char-grilled tandoori tiger prawns, and velvety butter chicken simmered with fenugreek and Kashmiri chilies.",
          "primaryButtonText": "Book an Evening Feast",
          "primaryButtonLink": "#book",
          "imageUrl": "https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "in1",
              "label": "Spices Sourced Directly from Kerala",
              "value": "45 Whole Spices"
            },
            {
              "id": "in2",
              "label": "Dal Makhani Slow Simmer Time",
              "value": "36 Hours"
            }
          ]
        }
      },
      {
        "id": "fd18-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "title": "Chef’s Royal Specialities",
          "items": [
            {
              "id": "in_s1",
              "title": "Awadhi Dum Gosht Biryani",
              "description": "Tender baby goat sealed in a clay handi with saffron milk, aged basmati rice, and caramelized onions.",
              "price": "$34.00"
            },
            {
              "id": "in_s2",
              "title": "Old Delhi Butter Chicken",
              "description": "Charred tandoori chicken simmered in rich creamy vine-ripened tomato gravy with dried fenugreek leaves.",
              "price": "$28.00"
            },
            {
              "id": "in_s3",
              "title": "Tandoori Smoked Malai Broccoli",
              "description": "Broccoli florets marinated in cardamom, cashew cream, and mild green chilies, roasted in clay tandoor.",
              "price": "$22.00"
            }
          ]
        }
      },
      {
        "id": "fd18-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Experience the Grandeur of Royal Indian Feasting",
          "description": "Intimate booths, hand-carved jali screens, and aromatic cocktails.",
          "primaryButtonText": "Reserve Table Online",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "fd18-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Maharaja Heritage Indian Restaurant",
          "copyrightText": "© 2026 Maharaja Heritage Dining Group. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "food-coffeeshop-01",
    "slug": "the-daily-drip-coffee-shop",
    "name": "The Daily Drip Neighborhood Coffee",
    "description": "Bustling corner coffee shop featuring seasonal espresso drinks, nitro cold brew on tap, flaky pastries, and free gigabit Wi-Fi.",
    "industryId": "food-beverage",
    "categoryId": "coffee-shop",
    "collectionId": "neighborhood-cafe",
    "designStyle": "minimal-neutral",
    "tags": [
      "coffee shop",
      "espresso",
      "cold brew",
      "latte",
      "pastries",
      "remote work"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "fd19-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "THE DAILY DRIP",
          "primaryButtonText": "Order Ahead for Pickup",
          "primaryButtonLink": "#order",
          "navLinks": [
            {
              "label": "Drink Menu",
              "href": "#menu"
            },
            {
              "label": "Bakery Cases",
              "href": "#bakery"
            },
            {
              "label": "Location & Wi-Fi",
              "href": "#location"
            }
          ]
        }
      },
      {
        "id": "fd19-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Your Daily Fuel • Open 6:00 AM Daily",
          "title": "Exceptional Coffee. Warm Smiles. Your Neighborhood Anchor.",
          "subtitle": "Pull up a stool, plug in your laptop, and enjoy smooth espresso drinks pulled on our Synesso MVP with homemade vanilla syrups and oat milk.",
          "primaryButtonText": "Order Coffee Ahead",
          "primaryButtonLink": "#order",
          "imageUrl": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "dd1",
              "label": "Cups Poured Monthly",
              "value": "18,000+"
            },
            {
              "id": "dd2",
              "label": "Wi-Fi Speed",
              "value": "1 Gbps Fiber"
            }
          ]
        }
      },
      {
        "id": "fd19-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Espresso Bar Staples",
          "items": [
            {
              "id": "dd_s1",
              "title": "Brown Sugar Cinnamon Shaken Espresso",
              "description": "Double espresso shots shaken over ice with homemade cinnamon syrup and oat milk.",
              "price": "$6.25"
            },
            {
              "id": "dd_s2",
              "title": "Nitro Cold Brew on Tap",
              "description": "Steeped for 20 hours and infused with pure nitrogen for a creamy, stout-like cascading head.",
              "price": "$5.50"
            },
            {
              "id": "dd_s3",
              "title": "Almond Frangipane Croissant",
              "description": "Twice-baked butter croissant filled with sweet almond frangipane and sliced toasted almonds.",
              "price": "$5.00"
            }
          ]
        }
      },
      {
        "id": "fd19-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Earn Free Drinks with Our Loyalty Punch Card",
          "description": "Every 8 drinks earns a free specialty beverage of any size.",
          "primaryButtonText": "Download Digital Loyalty Card",
          "primaryButtonLink": "#order"
        }
      },
      {
        "id": "fd19-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "The Daily Drip Coffee Shop",
          "copyrightText": "© 2026 The Daily Drip Coffee Co. Proudly independent."
        }
      }
    ]
  },
  {
    "id": "food-dessert-01",
    "slug": "le-macaron-french-patisserie",
    "name": "Le Macaron French Patisserie & Tea",
    "description": "Delicate pastel Parisian macarons, mille-feuille, chocolate éclairs, and rare imported teas served in an ornate salon.",
    "industryId": "food-beverage",
    "categoryId": "dessert-shop",
    "collectionId": "french-patisserie",
    "designStyle": "soft-pastel",
    "tags": [
      "macarons",
      "dessert",
      "patisserie",
      "french bakery",
      "tea room"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1558326567-98ae2405596b?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "fd20-nav",
        "type": "navbar",
        "variant": "navbar-floating",
        "visible": true,
        "content": {
          "title": "LE MACARON PARIS",
          "primaryButtonText": "Gift Box Order",
          "primaryButtonLink": "#gifts",
          "navLinks": [
            {
              "label": "Macaron Flavors",
              "href": "#macarons"
            },
            {
              "label": "Petits Gâteaux",
              "href": "#gateaux"
            },
            {
              "label": "Afternoon Tea",
              "href": "#tea"
            }
          ]
        }
      },
      {
        "id": "fd20-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Parisian Master Pâtissier Technique",
          "title": "Delicate Almond Shells, Silky Ganache, Pure French Luxury",
          "subtitle": "Crisp airy shells made from finely ground California almonds and aged egg whites, sandwiching intensely flavored dark chocolate, salted butter caramel, and rose petal buttercreams.",
          "primaryButtonText": "Order Curated Gift Box",
          "primaryButtonLink": "#gifts",
          "imageUrl": "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "mc1",
              "label": "Signature Macaron Flavors",
              "value": "24 Flavors"
            },
            {
              "id": "mc2",
              "label": "Made Fresh Every Day",
              "value": "100% In-House"
            }
          ]
        }
      },
      {
        "id": "fd20-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Pâtisserie Favorites",
          "items": [
            {
              "id": "mc_s1",
              "title": "Box of 12 Artisanal Macarons",
              "description": "Pistachio, Salted Caramel, Dark Chocolate, Rose Lychee, Passionfruit, and Madagascar Vanilla.",
              "price": "$36.00"
            },
            {
              "id": "mc_s2",
              "title": "Classic Vanilla Mille-Feuille",
              "description": "Caramelized inverted puff pastry layered with rich vanilla bean diplomat cream.",
              "price": "$12.00"
            },
            {
              "id": "mc_s3",
              "title": "Choux au Chocolat Éclair",
              "description": "Crispy choux dough filled with 70% Guanaja chocolate cream and glossy dark chocolate glaze.",
              "price": "$9.50"
            }
          ]
        }
      },
      {
        "id": "fd20-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Nationwide Overnight Chilled Shipping Available",
          "description": "Our luxurious embossed gift boxes arrive fresh anywhere in the country within 24 hours.",
          "primaryButtonText": "Shop Gift Boxes",
          "primaryButtonLink": "#gifts"
        }
      },
      {
        "id": "fd20-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Le Macaron French Patisserie",
          "copyrightText": "© 2026 Le Macaron Paris Ltd. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "food-truck-01",
    "slug": "smoke-fire-bbq-food-truck",
    "name": "Smoke & Fire Street BBQ Food Truck",
    "description": "Mobile oak-smoked Texas BBQ rig serving tender 16-hour smoked brisket tacos, pulled pork sandwiches, and jalapeño mac & cheese.",
    "industryId": "food-beverage",
    "categoryId": "food-truck",
    "collectionId": "street-food",
    "designStyle": "brutalist-clean",
    "tags": [
      "food truck",
      "street food",
      "bbq",
      "brisket",
      "tacos",
      "craft beer"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "fd21-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "SMOKE & FIRE TRUCK",
          "primaryButtonText": "Today’s Location",
          "primaryButtonLink": "#location",
          "navLinks": [
            {
              "label": "Weekly Schedule",
              "href": "#schedule"
            },
            {
              "label": "Truck Menu",
              "href": "#menu"
            },
            {
              "label": "Catering Events",
              "href": "#catering"
            }
          ]
        }
      },
      {
        "id": "fd21-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "16-Hour Post Oak Smoked Meat on Wheels",
          "title": "Award-Winning Texas Pit BBQ Everywhere You Are",
          "subtitle": "Catch our custom 28-foot matte black food truck parked at breweries, festivals, and office plazas serving thick slices of peppery black bark brisket.",
          "primaryButtonText": "Find Our Truck Today",
          "primaryButtonLink": "#location",
          "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "ft1",
              "label": "Brisket Smoked Daily",
              "value": "400 Lbs"
            },
            {
              "id": "ft2",
              "label": "Wood Used",
              "value": "100% Texas Post Oak"
            }
          ]
        }
      },
      {
        "id": "fd21-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Truck Window Specials",
          "items": [
            {
              "id": "ft_s1",
              "title": "The Monster Brisket Melt",
              "description": "Half pound of chopped prime brisket, melted pepper jack, pickled jalapeños, and tangy BBQ sauce on Texas toast.",
              "price": "$15.00"
            },
            {
              "id": "ft_s2",
              "title": "Brisket Street Tacos (x3)",
              "description": "Double corn tortillas stuffed with chopped brisket, cotija cheese, cilantro, and roasted salsa verde.",
              "price": "$13.50"
            },
            {
              "id": "ft_s3",
              "title": "Smoked Jalapeño Mac & Cheese",
              "description": "Cavatappi pasta in four-cheese cream sauce topped with smoked brisket ends and crushed ritz crackers.",
              "price": "$7.00"
            }
          ]
        }
      },
      {
        "id": "fd21-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Book Our BBQ Truck for Your Next Private Party",
          "description": "Weddings, corporate lunches, and backyard parties for 50 to 500 guests.",
          "primaryButtonText": "Book the Truck",
          "primaryButtonLink": "#catering"
        }
      },
      {
        "id": "fd21-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Smoke & Fire Street BBQ Truck",
          "copyrightText": "© 2026 Smoke & Fire Food Trucks LLC. Roll on."
        }
      }
    ]
  },
  {
    "id": "food-cloud-01",
    "slug": "ghostkitchen-culinary-collective",
    "name": "GhostKitchen Culinary Delivery Collective",
    "description": "Multi-brand digital delivery-only kitchen preparing gourmet ramen, smashburgers, and bowls for fast door delivery.",
    "industryId": "food-beverage",
    "categoryId": "cloud-kitchen",
    "collectionId": "virtual-kitchen",
    "designStyle": "dark-cinematic",
    "tags": [
      "cloud kitchen",
      "delivery",
      "ghost kitchen",
      "fast food",
      "virtual brands"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "fd22-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "GHOSTKITCHEN CO.",
          "primaryButtonText": "Order Delivery",
          "primaryButtonLink": "#order",
          "navLinks": [
            {
              "label": "Virtual Brands",
              "href": "#brands"
            },
            {
              "label": "Delivery Zones",
              "href": "#zones"
            },
            {
              "label": "Franchise Partner",
              "href": "#partner"
            }
          ]
        }
      },
      {
        "id": "fd22-hero",
        "type": "hero",
        "variant": "hero-cinematic-dark",
        "visible": true,
        "content": {
          "badge": "Delivery Only • Multiple Concepts One Order",
          "title": "Mix and Match Top Food Brands in a Single Fast Delivery",
          "subtitle": "Craving spicy ramen while your partner wants smashburgers and poke? Order across five chef-driven virtual concepts in one cart with zero extra delivery fees.",
          "primaryButtonText": "Start Combined Order",
          "primaryButtonLink": "#order",
          "imageUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "gk1",
              "label": "Average Delivery Time",
              "value": "28 Minutes"
            },
            {
              "id": "gk2",
              "label": "Virtual Chef Brands",
              "value": "6 Concepts"
            }
          ]
        }
      },
      {
        "id": "fd22-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "title": "Our In-House Delivery Brands",
          "items": [
            {
              "id": "gk_s1",
              "title": "Toridashi Tokyo Ramen",
              "description": "Simmered 18-hour pork tonkotsu broth, springy wavy noodles, chashu, and ajitsuke tamago."
            },
            {
              "id": "gk_s2",
              "title": "Bun & Smasher Burgers",
              "description": "Double crispy edge smashburgers on Martin’s potato rolls with crinkle fries."
            },
            {
              "id": "gk_s3",
              "title": "Ola Poke & Grain Bowls",
              "description": "Ahi tuna, ponzu sesame, avocado, seaweed salad, and brown rice."
            }
          ]
        }
      },
      {
        "id": "fd22-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Order Direct and Save on UberEats / DoorDash Markups",
          "description": "Direct delivery tracking with temperature-controlled insulated couriers.",
          "primaryButtonText": "Order Food Now",
          "primaryButtonLink": "#order"
        }
      },
      {
        "id": "fd22-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "GhostKitchen Culinary Collective",
          "copyrightText": "© 2026 GhostKitchen Brands Inc. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "food-catering-01",
    "slug": "feast-flora-luxury-catering",
    "name": "Feast & Flora Luxury Event Catering",
    "description": "Full-service catering for luxury weddings, corporate galas, and private estate dinners with seasonal grazing tables and bar staff.",
    "industryId": "food-beverage",
    "categoryId": "catering-service",
    "collectionId": "event-catering",
    "designStyle": "luxury-editorial",
    "tags": [
      "catering",
      "events",
      "weddings",
      "grazing table",
      "corporate catering"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "fd23-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "FEAST & FLORA",
          "primaryButtonText": "Request Event Quote",
          "primaryButtonLink": "#quote",
          "navLinks": [
            {
              "label": "Catering Menus",
              "href": "#menus"
            },
            {
              "label": "Grazing Tables",
              "href": "#grazing"
            },
            {
              "label": "Beverage & Bar",
              "href": "#bar"
            }
          ]
        }
      },
      {
        "id": "fd23-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Serving High-End Weddings & Galas Across New England",
          "title": "Unforgettable Culinary Moments for Life’s Grand Milestones",
          "subtitle": "From dramatic 20-foot artfully styled seasonal charcuterie grazing tables to seated four-course plated dinners paired with sommelier-curated wines.",
          "primaryButtonText": "Build Your Custom Menu",
          "primaryButtonLink": "#quote",
          "imageUrl": "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "cat1",
              "label": "Events Catered Annually",
              "value": "250+ Galas"
            },
            {
              "id": "cat2",
              "label": "Guest Capacity",
              "value": "Up to 1,200"
            }
          ]
        }
      },
      {
        "id": "fd23-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "title": "Catering Service Styles",
          "items": [
            {
              "id": "cat_s1",
              "title": "Plated Multi-Course Gala Dinners",
              "description": "Synchronized white-glove service with customized menus meeting all dietary preferences seamlessly."
            },
            {
              "id": "cat_s2",
              "title": "Abundant Botanical Grazing Tables",
              "description": "Artisan cheeses, cured meats, honeycomb, heirloom fruits, and floral styling spanning entire tables."
            },
            {
              "id": "cat_s3",
              "title": "Interactive Chef Tasting Stations",
              "description": "Live shucked oyster bars, carving stations, and flaming dessert flambé demonstrations."
            }
          ]
        }
      },
      {
        "id": "fd23-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Now Booking 2026 & 2027 Wedding and Gala Dates",
          "description": "Share your guest count, venue, and vision for a customized proposal within 48 hours.",
          "primaryButtonText": "Request Catering Proposal",
          "primaryButtonLink": "#quote"
        }
      },
      {
        "id": "fd23-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Feast & Flora Luxury Event Catering",
          "copyrightText": "© 2026 Feast & Flora Catering LLC. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "food-family-01",
    "slug": "sunnyside-hearth-family-diner",
    "name": "Sunnyside Hearth All-Day Family Diner",
    "description": "Cozy family diner serving country fried chicken, biscuits and gravy, chicken pot pies, and bottomless mugs of coffee.",
    "industryId": "food-beverage",
    "categoryId": "family-restaurant",
    "collectionId": "family-dining",
    "designStyle": "soft-pastel",
    "tags": [
      "family restaurant",
      "diner",
      "comfort food",
      "pancakes",
      "breakfast",
      "pot pie"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "fd24-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "SUNNYSIDE HEARTH",
          "primaryButtonText": "View All-Day Menu",
          "primaryButtonLink": "#menu",
          "navLinks": [
            {
              "label": "Breakfast Favorites",
              "href": "#breakfast"
            },
            {
              "label": "Comfort Dinners",
              "href": "#dinner"
            },
            {
              "label": "Kids Menu",
              "href": "#kids"
            }
          ]
        }
      },
      {
        "id": "fd24-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Warm Homestyle Cooking • All Generations Welcome",
          "title": "Generous Portions, Warm Hospitality, and Classic Comfort",
          "subtitle": "Pull up a booth with the kids or grandparents for scratch-made buttermilk biscuits, golden country fried steak, and homemade warm apple pies with vanilla ice cream.",
          "primaryButtonText": "Explore Diner Menu",
          "primaryButtonLink": "#menu",
          "imageUrl": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "hd1",
              "label": "Biscuits Baked Daily",
              "value": "1,500"
            },
            {
              "id": "hd2",
              "label": "Bottomless Coffee Refills",
              "value": "100% Free"
            }
          ]
        }
      },
      {
        "id": "fd24-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Homestyle Comfort Classics",
          "items": [
            {
              "id": "hd_s1",
              "title": "Grandma’s Chicken Pot Pie",
              "description": "Tender chicken breast, sweet carrots, peas, and rich thyme cream sauce under flaky puff pastry.",
              "price": "$16.50"
            },
            {
              "id": "hd_s2",
              "title": "Country Fried Steak & Sausage Gravy",
              "description": "Crispy fried cube steak with two sunny eggs, hashbrowns, and freshly baked buttermilk biscuit.",
              "price": "$17.00"
            },
            {
              "id": "hd_s3",
              "title": "Warm Dutch Apple Pie à la Mode",
              "description": "Heirloom spiced apples with brown sugar crumble topping and a huge scoop of vanilla bean ice cream.",
              "price": "$7.50"
            }
          ]
        }
      },
      {
        "id": "fd24-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Kids Eat Free Every Tuesday Night After 4:00 PM",
          "description": "Bring the whole family together for wholesome, hearty dining that won’t break the budget.",
          "primaryButtonText": "Find Our Nearest Diner",
          "primaryButtonLink": "#menu"
        }
      },
      {
        "id": "fd24-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Sunnyside Hearth All-Day Family Diner",
          "copyrightText": "© 2026 Sunnyside Hearth Diners LLC. All rights reserved."
        }
      }
    ]
  }
];
