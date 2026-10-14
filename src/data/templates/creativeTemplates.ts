import { TemplateConfig } from '../../types';

export const CREATIVE_TEMPLATES: TemplateConfig[] = [
  {
    "id": "creat-elenaart-01",
    "slug": "elena-vance-interactive-designer",
    "name": "Elena Vance Creative Technologist & WebGL",
    "description": "Award-winning portfolio of an interactive designer specializing in WebGL shaders, Three.js 3D web experiences, and generative kinetic typography.",
    "industryId": "creative-portfolio",
    "categoryId": "personal-portfolio",
    "collectionId": "growth-engine",
    "designStyle": "glass-interface",
    "featured": true,
    "tags": [
      "portfolio",
      "webgl",
      "threejs",
      "creative developer",
      "interactive design",
      "awwwards"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "cr1-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "ELENA VANCE // 01",
          "primaryButtonText": "Start Collaboration",
          "primaryButtonLink": "#contact",
          "navLinks": [
            {
              "label": "Interactive Experiments",
              "href": "#experiments"
            },
            {
              "label": "Commercial Work",
              "href": "#work"
            },
            {
              "label": "Shader Lab",
              "href": "#lab"
            }
          ]
        }
      },
      {
        "id": "cr1-hero",
        "type": "hero",
        "variant": "hero-minimal-typography",
        "visible": true,
        "content": {
          "badge": "Awwwards Independent Designer of the Year 2025",
          "title": "Crafting Immersive 3D Digital Realms for Forward-Thinking Brands",
          "subtitle": "Bridging creative code and visual poetry. Specializing in high-performance WebGL canvas physics, mathematical particle systems, and unforgettable interactive brand flagships.",
          "primaryButtonText": "Explore Interactive Work",
          "primaryButtonLink": "#work",
          "imageUrl": "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80"
        }
      },
      {
        "id": "cr1-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "badge": "Creative Disciplines",
          "title": "Code Meets Contemporary Art",
          "subtitle": "Delivering silky 60 FPS physics animations across mobile and desktop browsers.",
          "items": [
            {
              "id": "ev1",
              "title": "Interactive 3D Web Experiences (WebGL / GLSL)",
              "description": "Custom vertex and fragment shaders bringing kinetic liquid glass, iridescent materials, and spatial audio to life."
            },
            {
              "id": "ev2",
              "title": "Generative Typography & Kinetic Identity",
              "description": "Real-time mouse-reactive fonts and responsive procedural type systems that transform static text into living sculpture."
            },
            {
              "id": "ev3",
              "title": "Headless Digital Brand Flagships",
              "description": "Next.js, GSAP, and headless e-commerce architectures engineered for sub-second global load times."
            }
          ]
        }
      },
      {
        "id": "cr1-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Have an Ambitious Digital Vision?",
          "description": "Currently reserving project slots for Q3/Q4. Available for select creative direction and hands-on build commissions.",
          "primaryButtonText": "Initiate Project Discussion",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "cr1-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "ELENA VANCE STUDIO",
          "copyrightText": "© 2026 Elena Vance. All rights reserved. Tokyo • London."
        }
      }
    ]
  },
  {
    "id": "creat-marcustech-01",
    "slug": "marcus-cole-systems-engineer",
    "name": "Marcus Cole Principal Systems Engineer",
    "description": "Technical portfolio and blog of a staff distributed systems engineer specializing in low-latency Rust, Raft consensus protocols, and Linux kernel tuning.",
    "industryId": "creative-portfolio",
    "categoryId": "personal-portfolio",
    "collectionId": "growth-engine",
    "designStyle": "brutalist-clean",
    "featured": false,
    "tags": [
      "developer portfolio",
      "rust",
      "distributed systems",
      "linux kernel",
      "open source",
      "software engineer"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "cr2-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "MARCUS COLE // RUST",
          "primaryButtonText": "GitHub Profile",
          "primaryButtonLink": "#github",
          "navLinks": [
            {
              "label": "Open Source",
              "href": "#oss"
            },
            {
              "label": "Technical Writing",
              "href": "#blog"
            },
            {
              "label": "Architecture Specs",
              "href": "#specs"
            }
          ]
        }
      },
      {
        "id": "cr2-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Principal Engineer • Former Stripe & Cloudflare Infrastructure",
          "title": "Building Resilient, Low-Latency Distributed Infrastructure in Rust",
          "subtitle": "I design consensus algorithms, lock-free memory queues, and zero-copy network microservices that process tens of millions of transactions per second without breaking a sweat.",
          "primaryButtonText": "Explore System Designs",
          "primaryButtonLink": "#specs",
          "imageUrl": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "GitHub Stars on Personal Repos",
              "value": "18,500+"
            },
            {
              "id": "s2",
              "label": "P99 Latency SLA Target",
              "value": "<450 μs"
            },
            {
              "id": "s3",
              "label": "Concurrent Network Sockets",
              "value": "2M / Box"
            }
          ]
        }
      },
      {
        "id": "cr2-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Core Competencies",
          "title": "Mission-Critical Engineering Disciplines",
          "subtitle": "Zero fluff. Deep mastery of computer systems from silicon cache lines to distributed consensus.",
          "items": [
            {
              "id": "mc1",
              "title": "Memory-Safe Low-Latency Rust Engines",
              "description": "SIMD-vectorized parsing, lock-free ring buffers, and zero-allocation network protocol parsers."
            },
            {
              "id": "mc2",
              "title": "Raft & Paxos Distributed Consensus Protocols",
              "description": "Fault-tolerant replicated state machines engineered for strict serializability under high network partition stress."
            },
            {
              "id": "mc3",
              "title": "eBPF Kernel Probing & Linux Performance Tuning",
              "description": "Microsecond packet tracing, custom XDP network filters, and CPU cache-miss optimization on high-core servers."
            }
          ]
        }
      },
      {
        "id": "cr2-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Need High-Level Distributed Architecture Advisory?",
          "description": "Available for technical board advisory, principal engineer consulting sprints, and keynote talks.",
          "primaryButtonText": "Inquire for Advisory Availability",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "cr2-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "MARCUS COLE SYSTEMS ARCHITECTURE",
          "copyrightText": "© 2026 Marcus Cole. PGP Key Verified. Seattle, WA."
        }
      }
    ]
  },
  {
    "id": "creat-sarahcopy-01",
    "slug": "sarah-sterling-conversion-copywriter",
    "name": "Sarah Sterling B2B SaaS Conversion Copywriter",
    "description": "High-converting portfolio of an elite tech copywriter crafting homepage headlines, product launches, and narrative positioning for Series B+ startups.",
    "industryId": "creative-portfolio",
    "categoryId": "personal-portfolio",
    "collectionId": "growth-engine",
    "designStyle": "minimal-neutral",
    "featured": false,
    "tags": [
      "copywriter",
      "conversion copy",
      "saas copywriting",
      "positioning",
      "landing page",
      "messaging strategy"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "cr3-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "SARAH STERLING // WORDS",
          "primaryButtonText": "Book Copy Sprint",
          "primaryButtonLink": "#sprint",
          "navLinks": [
            {
              "label": "Case Studies",
              "href": "#cases"
            },
            {
              "label": "Copy Sprints",
              "href": "#sprints"
            },
            {
              "label": "The Teardowns",
              "href": "#teardowns"
            }
          ]
        }
      },
      {
        "id": "cr3-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Over $85M in Attributed Pipeline Generated for SaaS Clients",
          "title": "Words That Clarify Your Value and Convert Skeptics into Buyers",
          "subtitle": "I turn confusing technical jargon into razor-sharp homepage headlines, product launch emails, and sales narratives that enterprise buyers instantly grasp and pay for.",
          "primaryButtonText": "Explore Conversion Teardowns",
          "primaryButtonLink": "#cases",
          "imageUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Average Landing Page Lift",
              "value": "+46% Signups"
            },
            {
              "id": "s2",
              "label": "Customer Interview Sprints",
              "value": "250+ Conducted"
            },
            {
              "id": "s3",
              "label": "Series A to IPO Clients",
              "value": "42 Startups"
            }
          ]
        }
      },
      {
        "id": "cr3-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Strategic Copy Sprints",
          "title": "Scientific Messaging Grounded in Customer Research",
          "subtitle": "No guessing. I interview your churned users, power users, and sales reps before writing a single word.",
          "items": [
            {
              "id": "ss1",
              "title": "The 10-Day Flagship Homepage Copy Sprint",
              "description": "Customer Voice-of-Customer research, competitive teardown, headline wireframes, and final copy deck ready for design."
            },
            {
              "id": "ss2",
              "title": "Enterprise Product Positioning Architecture",
              "description": "Defining your unassailable category point-of-view, battle cards against legacy incumbents, and elevator pitches."
            },
            {
              "id": "ss3",
              "title": "High-Converting Email Launch Sequences",
              "description": "Nurture, onboarding, and trial-to-paid lifecycle email flows engineered to boost product adoption velocity."
            }
          ]
        }
      },
      {
        "id": "cr3-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Stop Losing Qualified Signups to Vague Messaging",
          "description": "Receive a free 10-minute video audit analyzing your current homepage headline and hero copy.",
          "primaryButtonText": "Request Free Video Copy Audit",
          "primaryButtonLink": "#sprint"
        }
      },
      {
        "id": "cr3-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "SARAH STERLING COPYWRITING",
          "copyrightText": "© 2026 Sarah Sterling LLC. San Francisco • New York."
        }
      }
    ]
  },
  {
    "id": "creat-davidproduct-01",
    "slug": "david-zhao-principal-product-designer",
    "name": "David Zhao Principal Product Designer",
    "description": "Portfolio of a senior product designer crafting complex trading dashboards, fintech mobile flows, and scalable enterprise design systems.",
    "industryId": "creative-portfolio",
    "categoryId": "personal-portfolio",
    "collectionId": "growth-engine",
    "designStyle": "technology-gradient",
    "featured": true,
    "tags": [
      "product designer",
      "ux designer",
      "ui design",
      "fintech ux",
      "trading interface",
      "design systems"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "cr4-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "DAVID ZHAO // PRODUCT",
          "primaryButtonText": "View Case Studies",
          "primaryButtonLink": "#cases",
          "navLinks": [
            {
              "label": "Fintech Dashboards",
              "href": "#fintech"
            },
            {
              "label": "Design Systems",
              "href": "#tokens"
            },
            {
              "label": "Figma Plugins",
              "href": "#plugins"
            }
          ]
        }
      },
      {
        "id": "cr4-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Staff Product Designer • Ex-Robinhood & Coinbase • Austin, TX",
          "title": "Simplifying High-Stakes Financial Complexity into Intuitive UI",
          "subtitle": "I transform dense algorithmic data streams, order books, and multi-asset wealth management tools into sleek, accessible, and delightfully intuitive interfaces.",
          "primaryButtonText": "Read Detailed Case Studies",
          "primaryButtonLink": "#cases",
          "imageUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Daily Active Users on Designed Products",
              "value": "4.8M DAU"
            },
            {
              "id": "s2",
              "label": "Figma Community Plugin Installs",
              "value": "180,000+"
            },
            {
              "id": "s3",
              "label": "Average User Task Completion Lift",
              "value": "+34%"
            }
          ]
        }
      },
      {
        "id": "cr4-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "badge": "Design Disciplines",
          "title": "End-to-End Product Craftsmanship",
          "subtitle": "From exploratory user journey wireframing to production-ready design token code.",
          "items": [
            {
              "id": "dz1",
              "title": "Complex Trading Terminal UX (Desktop & Web)",
              "description": "Real-time market depth charts, multi-leg options order forms, and low-latency hotkey workflows."
            },
            {
              "id": "dz2",
              "title": "Multi-Brand Enterprise Design Tokens",
              "description": "Scalable Figma component architectures compiling cleanly into React, SwiftUI, and Jetpack Compose."
            },
            {
              "id": "dz3",
              "title": "Quantitative UX Benchmarking & User Testing",
              "description": "Rigorous usability metrics, eye-tracking heatmaps, and funnel drop-off analytics that validate design choices."
            }
          ]
        }
      },
      {
        "id": "cr4-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Looking for a Staff Product Designer for Your Fintech Product?",
          "description": "Open to select high-impact advisory roles, founding design consultations, and lead design sprints.",
          "primaryButtonText": "Get in Touch with David",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "cr4-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "DAVID ZHAO PRODUCT DESIGN",
          "copyrightText": "© 2026 David Zhao. Austin, Texas • San Francisco."
        }
      }
    ]
  },
  {
    "id": "creat-alexanim-01",
    "slug": "alex-rivera-3d-motion-director",
    "name": "Alex Rivera 3D Motion Director & CGI Visualizer",
    "description": "Sensory 3D motion design portfolio featuring surreal brand identity films, Octane render visuals, and tactile consumer electronics CGI.",
    "industryId": "creative-portfolio",
    "categoryId": "personal-portfolio",
    "collectionId": "growth-engine",
    "designStyle": "dark-cinematic",
    "featured": false,
    "tags": [
      "motion design",
      "3d animation",
      "cgi",
      "cinema4d",
      "octane render",
      "vfx",
      "creative director"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "cr5-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "ALEX RIVERA // 3D",
          "primaryButtonText": "Watch Showreel",
          "primaryButtonLink": "#reel",
          "navLinks": [
            {
              "label": "Brand Films",
              "href": "#films"
            },
            {
              "label": "Hardware CGI",
              "href": "#hardware"
            },
            {
              "label": "Surreal Lab",
              "href": "#lab"
            }
          ]
        }
      },
      {
        "id": "cr5-hero",
        "type": "hero",
        "variant": "hero-fullscreen-photo",
        "visible": true,
        "content": {
          "badge": "Cinema4D • Houdini Pyro & Fluids • Octane & Redshift • London",
          "title": "Breathtaking 3D Motion That Ignites Brand Fascination",
          "subtitle": "I direct and animate hypnotic 3D product unveilings, kinetic iridescent simulations, and tactile hardware explosions for Apple, Nike, and leading venture-backed brands.",
          "primaryButtonText": "Play 2026 4K Showreel",
          "primaryButtonLink": "#reel",
          "imageUrl": "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Commercial Campaign Views",
              "value": "45M+ Views"
            },
            {
              "id": "s2",
              "label": "Render Quality Mastered",
              "value": "8K Ultra HDR"
            },
            {
              "id": "s3",
              "label": "International Design Honors",
              "value": "24 Awards"
            }
          ]
        }
      },
      {
        "id": "cr5-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Motion Capabilities",
          "title": "Hyper-Detailed Visual Alchemy",
          "subtitle": "From initial styleframe boards to photorealistic final composite deliveries.",
          "items": [
            {
              "id": "ar1",
              "title": "Product Launch Keynote Films",
              "description": "Seamless CAD model conversion, exploded internal component animations, and dramatic cinematic lighting."
            },
            {
              "id": "ar2",
              "title": "Procedural Houdini Fluid & Particle Simulations",
              "description": "Viscous organic liquids, billowing volumetric smoke, and dynamic cloth collisions simulated at high physical fidelity."
            },
            {
              "id": "ar3",
              "title": "Immersive 3D Digital Billboard Billboards (OOH)",
              "description": "Forced-perspective anamorphic 3D optical illusion animations for Times Square and Tokyo Shinjuku curved LED displays."
            }
          ]
        }
      },
      {
        "id": "cr5-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Bring Your Flagship Product Launch to Life in 3D",
          "description": "Available for full commercial direction, motion agency partnerships, and luxury campaign assets.",
          "primaryButtonText": "Request Commercial Pitch Deck",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "cr5-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "ALEX RIVERA 3D MOTION LAB",
          "copyrightText": "© 2026 Alex Rivera Studio Ltd. Soho, London • Berlin."
        }
      }
    ]
  },
  {
    "id": "creat-chloefilmmaker-01",
    "slug": "chloe-dupont-documentary-filmmaker",
    "name": "Chloe Dupont Documentary Filmmaker & Colorist",
    "description": "Cinematic portfolio of an independent documentary director and master colorist with Sundance premieres and Kodak 35mm film credentials.",
    "industryId": "creative-portfolio",
    "categoryId": "personal-portfolio",
    "collectionId": "growth-engine",
    "designStyle": "editorial-magazine",
    "featured": false,
    "tags": [
      "filmmaker",
      "director",
      "colorist",
      "documentary",
      "35mm film",
      "sundance",
      "davinci resolve"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "cr6-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "CHLOE DUPONT // FILM",
          "primaryButtonText": "Watch Trailers",
          "primaryButtonLink": "#trailers",
          "navLinks": [
            {
              "label": "Selected Films",
              "href": "#films"
            },
            {
              "label": "Color Grading Suite",
              "href": "#color"
            },
            {
              "label": "Press & Awards",
              "href": "#press"
            }
          ]
        }
      },
      {
        "id": "cr6-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Sundance Grand Jury Nominee • Kodak 35mm & 16mm Specialist",
          "title": "Human Truth Captured with Intimacy, Light, and Analog Texture",
          "subtitle": "Documentary storytelling exploring vanishing subcultures, environmental frontiers, and profound human resilience, photographed on anamorphic vintage lenses and graded in DaVinci Resolve.",
          "primaryButtonText": "View Film Catalogue",
          "primaryButtonLink": "#films",
          "imageUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Feature Documentaries Premiered",
              "value": "5 Films"
            },
            {
              "id": "s2",
              "label": "Film Festival Honors",
              "value": "16 Global"
            },
            {
              "id": "s3",
              "label": "Color Master Monitored",
              "value": "Barco 4K DCI"
            }
          ]
        }
      },
      {
        "id": "cr6-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "Filmmaking Disciplines",
          "title": "Cinematic Authenticity from Field to Screen",
          "subtitle": "Deeply researched long-form human documentary production.",
          "items": [
            {
              "id": "cd1",
              "title": "Feature & Short Documentary Directing",
              "description": "Intimate verité cinematography, sensitive access to closed communities, and emotionally resonant narrative arcs."
            },
            {
              "id": "cd2",
              "title": "DaVinci Resolve Master Color Grading",
              "description": "Crafting bespoke film emulation profiles, organic grain matrices, and rich skin tone color science."
            },
            {
              "id": "cd3",
              "title": "Anamorphic Lens & 35mm Celluloid Cinematography",
              "description": "Shooting on ARRI Alexa Mini LF paired with vintage Cooke and Kowa anamorphic lenses for painterly bokeh."
            }
          ]
        }
      },
      {
        "id": "cr6-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Inquire for Directing & Color Commissions",
          "description": "Represented internationally for original documentary features and high-concept brand cinema.",
          "primaryButtonText": "Contact Film Representation",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "cr6-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "CHLOE DUPONT FILMS",
          "copyrightText": "© 2026 Chloe Dupont Films Ltd. Paris • Montreal."
        }
      }
    ]
  },
  {
    "id": "creat-kenjiarchitect-01",
    "slug": "kenji-sato-spatial-exhibition-designer",
    "name": "Kenji Sato Spatial & Exhibition Architecture",
    "description": "Architectural portfolio of a spatial and exhibition designer crafting Venice Biennale pavilions, museum galleries, and luxury retail installations.",
    "industryId": "creative-portfolio",
    "categoryId": "personal-portfolio",
    "collectionId": "growth-engine",
    "designStyle": "minimal-neutral",
    "featured": false,
    "tags": [
      "spatial design",
      "exhibition design",
      "museum architecture",
      "pavilion",
      "scenography",
      "biennale"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "cr7-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "KENJI SATO // SPATIAL",
          "primaryButtonText": "Commission Studio",
          "primaryButtonLink": "#contact",
          "navLinks": [
            {
              "label": "Exhibition Pavilions",
              "href": "#pavilions"
            },
            {
              "label": "Museum Scenography",
              "href": "#museums"
            },
            {
              "label": "Light Installations",
              "href": "#light"
            }
          ]
        }
      },
      {
        "id": "cr7-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Venice Architecture Biennale Exhibitor • Tokyo & Zurich",
          "title": "Sculpting Ephemeral Spaces of Contemplation and Light",
          "subtitle": "We choreograph visitor journeys through temporary architecture, delicate paper scrims, acoustic zoning, and shadow play to transform how culture and contemporary art are perceived.",
          "primaryButtonText": "Explore Built Spatial Works",
          "primaryButtonLink": "#pavilions",
          "imageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Museum Installations Designed",
              "value": "42 Galleries"
            },
            {
              "id": "s2",
              "label": "Biennale & Triennale Pavilions",
              "value": "6 Commissions"
            },
            {
              "id": "s3",
              "label": "Material Recyclability Rating",
              "value": "98% Circular"
            }
          ]
        }
      },
      {
        "id": "cr7-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Spatial Disciplines",
          "title": "Temporary Architecture with Lasting Impact",
          "subtitle": "Holistic scenography marrying structural lightweight engineering with sensory atmosphere.",
          "items": [
            {
              "id": "ks1",
              "title": "Museum Exhibition Architecture & Scenography",
              "description": "Curating circulation flows, bespoke display vitrines, and museum-grade fiber optic illumination for priceless artifacts."
            },
            {
              "id": "ks2",
              "title": "Biennale & Art Fair Cultural Pavilions",
              "description": "Demountable structural mass timber and tensioned fabric pavilions designed for zero waste post-event dismantling."
            },
            {
              "id": "ks3",
              "title": "Sensory Light & Acoustic Installations",
              "description": "Spatial soundscapes and circadian LED diffusers transforming raw concrete warehouses into spiritual sanctuaries."
            }
          ]
        }
      },
      {
        "id": "cr7-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Commission an Unforgettable Exhibition Environment",
          "description": "Our spatial design team collaborates with global cultural institutions, foundation boards, and luxury houses.",
          "primaryButtonText": "Inquire with Studio Principals",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "cr7-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "KENJI SATO SPATIAL ARCHITECTURE",
          "copyrightText": "© 2026 Kenji Sato Studio. Tokyo • Zurich."
        }
      }
    ]
  },
  {
    "id": "creat-ninacreative-01",
    "slug": "nina-morales-fractional-creative-director",
    "name": "Nina Morales Fractional Creative Director",
    "description": "Executive creative director portfolio leading 360-degree brand turnarounds, cultural campaigns, and visual strategy for modern consumer brands.",
    "industryId": "creative-portfolio",
    "categoryId": "personal-portfolio",
    "collectionId": "growth-engine",
    "designStyle": "bold-creative",
    "featured": false,
    "tags": [
      "creative director",
      "brand turnaround",
      "campaign strategy",
      "fashion creative",
      "art direction",
      "executive creative"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "cr8-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "NINA MORALES // CD",
          "primaryButtonText": "Retain Creative Direction",
          "primaryButtonLink": "#retain",
          "navLinks": [
            {
              "label": "Campaigns",
              "href": "#campaigns"
            },
            {
              "label": "Brand Evolution",
              "href": "#evolution"
            },
            {
              "label": "Advisory Retainer",
              "href": "#retain"
            }
          ]
        }
      },
      {
        "id": "cr8-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Former Global VP Creative • Cannes Lions Grand Prix Winner",
          "title": "Injecting Culture, Conviction, and Creative Edge into Modern Brands",
          "subtitle": "I embed as a Fractional Creative Director for high-growth consumer brands and luxury houses, assembling world-class creative squads and crafting campaigns that enter the cultural zeitgeist.",
          "primaryButtonText": "Explore Selected Campaigns",
          "primaryButtonLink": "#campaigns",
          "imageUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Cannes Lions & D&AD Pencils",
              "value": "18 Awards"
            },
            {
              "id": "s2",
              "label": "Brand Valuation Lift Post-Rebrand",
              "value": "4.2x Average"
            },
            {
              "id": "s3",
              "label": "Global Campaign Budgets Directed",
              "value": "$120M+"
            }
          ]
        }
      },
      {
        "id": "cr8-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Creative Leadership",
          "title": "Strategic Vision Backed by Relentless Taste",
          "subtitle": "Bridging high-level executive boardrooms with hands-on creative execution.",
          "items": [
            {
              "id": "nm1",
              "title": "Total Brand Platform & Aesthetic Overhaul",
              "description": "Restructuring photography guidelines, typographic standards, brand tone of voice, and packaging architecture."
            },
            {
              "id": "nm2",
              "title": "Global Omnichannel Launch Campaigns",
              "description": "Directing celebrity talent, high-fashion photographers, and viral video crews across Paris, New York, and Tokyo."
            },
            {
              "id": "nm3",
              "title": "Internal In-House Creative Team Mentorship",
              "description": "Recruiting, leveling, and inspiring internal brand designers and copywriters into an autonomous world-class creative engine."
            }
          ]
        }
      },
      {
        "id": "cr8-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Elevate Your Brand to an Iconic Cultural Standard",
          "description": "Taking on just two fractional leadership retainers per year to guarantee dedicated focus.",
          "primaryButtonText": "Inquire for Creative Leadership",
          "primaryButtonLink": "#retain"
        }
      },
      {
        "id": "cr8-footer",
        "type": "footer",
        "variant": "footer-multi-column",
        "visible": true,
        "content": {
          "title": "NINA MORALES CREATIVE DIRECTION",
          "copyrightText": "© 2026 Nina Morales Studio. New York • Paris."
        }
      }
    ]
  },
  {
    "id": "creat-editorialphoto-01",
    "slug": "julian-cross-editorial-fashion-photographer",
    "name": "Julian Cross Haute Fashion & Editorial Photography",
    "description": "Paris and Milan fashion photographer shooting Vogue covers, luxury house campaigns, and backstage runway collections on medium-format Hasselblad digital.",
    "industryId": "creative-portfolio",
    "categoryId": "photographer",
    "collectionId": "high-fashion-editorial",
    "designStyle": "high-fashion",
    "featured": true,
    "tags": [
      "fashion photographer",
      "editorial photography",
      "vogue",
      "hasselblad",
      "runway photography",
      "couture"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "cr9-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "JULIAN CROSS // PARIS",
          "primaryButtonText": "Request Portfolio PDF",
          "primaryButtonLink": "#portfolio",
          "navLinks": [
            {
              "label": "Editorials",
              "href": "#editorials"
            },
            {
              "label": "Campaigns",
              "href": "#campaigns"
            },
            {
              "label": "Runway Backstage",
              "href": "#backstage"
            }
          ]
        }
      },
      {
        "id": "cr9-hero",
        "type": "hero",
        "variant": "hero-fullscreen-photo",
        "visible": true,
        "content": {
          "badge": "Vogue, Harper’s Bazaar, and Dazed Contributor • Paris Fashion Week",
          "title": "STARK SILHOUETTES. MONOCHROME DRAMA.",
          "subtitle": "Capturing the raw tension between tailored couture fabric and sculptural human form through medium format lenses, raking tungsten light, and uncompromising artistic direction.",
          "primaryButtonText": "View Editorial Gallery",
          "primaryButtonLink": "#editorials",
          "imageUrl": "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "International Magazine Covers",
              "value": "38 Covers"
            },
            {
              "id": "s2",
              "label": "Medium Format Sensor Resolution",
              "value": "100MP Hasselblad"
            },
            {
              "id": "s3",
              "label": "Fashion Capitals Active",
              "value": "Paris • Milan • NYC"
            }
          ]
        }
      },
      {
        "id": "cr9-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Photographic Disciplines",
          "title": "Visual Storytelling for Luxury Houses",
          "subtitle": "Complete production from casting and location scouting to master silver-gelatin prints.",
          "items": [
            {
              "id": "jc1",
              "title": "Haute Couture Campaign Photography",
              "description": "Monumental location shoots and studio lighting setups accentuating textile drape, fine jewelry, and accessories."
            },
            {
              "id": "jc2",
              "title": "Magazine Cover Editorial Direction",
              "description": "Developing arresting narrative concepts for top-tier international fashion month publications."
            },
            {
              "id": "jc3",
              "title": "Backstage Runway Intimate Chronicles",
              "description": "Unscripted, energetic 35mm black-and-white reportage capturing the backstage frenzy of top Paris ateliers."
            }
          ]
        }
      },
      {
        "id": "cr9-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Commission Julian Cross for Upcoming Seasonal Campaigns",
          "description": "Represented worldwide by Art & Commerce Agency.",
          "primaryButtonText": "Inquire with Agent",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "cr9-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "JULIAN CROSS PHOTOGRAPHY",
          "copyrightText": "© 2026 Julian Cross Studio. Rue Saint-Honoré, Paris • London."
        }
      }
    ]
  },
  {
    "id": "creat-archphoto-01",
    "slug": "simone-meyer-architectural-photographer",
    "name": "Simone Meyer Architectural & Fine Art Photography",
    "description": "Fine art architectural photographer documenting raw concrete brutalism, civic landmarks, and minimalist private residences across Europe.",
    "industryId": "creative-portfolio",
    "categoryId": "photographer",
    "collectionId": "growth-engine",
    "designStyle": "minimal-neutral",
    "featured": false,
    "tags": [
      "architectural photography",
      "brutalism",
      "concrete architecture",
      "fine art photography",
      "large format",
      "architecture"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "cr10-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "SIMONE MEYER // ARCH",
          "primaryButtonText": "Print Editions",
          "primaryButtonLink": "#prints",
          "navLinks": [
            {
              "label": "Brutalist Concrete",
              "href": "#concrete"
            },
            {
              "label": "Civic Monoliths",
              "href": "#civic"
            },
            {
              "label": "Monographs",
              "href": "#books"
            }
          ]
        }
      },
      {
        "id": "cr10-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "4x5 Large Format Tilt-Shift Film • AIA Architectural Photography Honor",
          "title": "Geometry, Pure Void, and The Raking Grazing of Morning Light",
          "subtitle": "I document architectural structures through precise perspective correction, deep tonal contrasts, and patient twilight exposures that honor the pure mass and intention of the builder.",
          "primaryButtonText": "Explore Built Works",
          "primaryButtonLink": "#concrete",
          "imageUrl": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Architectural Monograph Books",
              "value": "4 Published"
            },
            {
              "id": "s2",
              "label": "Large Format Tilt-Shift Rig",
              "value": "Zero Parallax"
            },
            {
              "id": "s3",
              "label": "Museum Permanent Collections",
              "value": "Tate & MoMA"
            }
          ]
        }
      },
      {
        "id": "cr10-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "Photographic Services",
          "title": "Precision Architectural Documentation",
          "subtitle": "Commissioned by Pritzker prize-winning architects and design institutions.",
          "items": [
            {
              "id": "sm1",
              "title": "Comprehensive Architectural Building Monograph",
              "description": "Full daylight, twilight blue-hour, and interior detail photography capturing architectural materiality and spatial flow."
            },
            {
              "id": "sm2",
              "title": "Museum Exhibition Archival Gelatin Silver Prints",
              "description": "Limited-edition fiber darkroom prints hand-toned with selenium for archival permanence over 150 years."
            },
            {
              "id": "sm3",
              "title": "Drone High-Angle Spatial Urban Mapping",
              "description": "Precision Hasselblad medium format aerial photography framing the building in its geographic and civic context."
            }
          ]
        }
      },
      {
        "id": "cr10-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Commission Architectural Documentation of Your Structure",
          "description": "Scheduling shoots timed precisely with solar equinox angles for ideal facade shadow lines.",
          "primaryButtonText": "Inquire for Architectural Commissions",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "cr10-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "SIMONE MEYER ARCHITECTURAL PHOTOGRAPHY",
          "copyrightText": "© 2026 Simone Meyer. Basel, Switzerland • Berlin."
        }
      }
    ]
  },
  {
    "id": "creat-wildlifephoto-01",
    "slug": "callum-macleod-wildlife-photographer",
    "name": "Callum MacLeod Sub-Zero Wildlife Photography",
    "description": "National Geographic contributing wildlife photographer documenting polar bear mothers, sub-zero Arctic wolves, and Antarctic penguin colonies.",
    "industryId": "creative-portfolio",
    "categoryId": "photographer",
    "collectionId": "growth-engine",
    "designStyle": "dark-cinematic",
    "featured": true,
    "tags": [
      "wildlife photographer",
      "arctic photography",
      "national geographic",
      "polar bears",
      "sub zero",
      "nature photography"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "cr11-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "CALLUM MACLEOD // ARCTIC",
          "primaryButtonText": "Fine Art Prints",
          "primaryButtonLink": "#prints",
          "navLinks": [
            {
              "label": "Polar Bears",
              "href": "#bears"
            },
            {
              "label": "Arctic Wolves",
              "href": "#wolves"
            },
            {
              "label": "Expedition Journal",
              "href": "#journal"
            }
          ]
        }
      },
      {
        "id": "cr11-hero",
        "type": "hero",
        "variant": "hero-fullscreen-photo",
        "visible": true,
        "content": {
          "badge": "Wildlife Photographer of the Year Winner • -45°C Field Veteran",
          "title": "The Silent Majesty of Earth’s Most Remote Polar Frontiers",
          "subtitle": "Weeks spent living on sea ice floes in blinding blizzards to capture a single fleeting moment of animal tenderness, survival, and untamed beauty.",
          "primaryButtonText": "Explore Wildlife Portfolio",
          "primaryButtonLink": "#bears",
          "imageUrl": "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Days Spent in Sub-Zero Fieldwork",
              "value": "1,200+ Days"
            },
            {
              "id": "s2",
              "label": "Lowest Field Operating Temp",
              "value": "-52°C Windchill"
            },
            {
              "id": "s3",
              "label": "Conservation Raised from Prints",
              "value": "$1.2M Donated"
            }
          ]
        }
      },
      {
        "id": "cr11-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Field Projects",
          "title": "Witnessing Fragile Polar Ecosystems",
          "subtitle": "Photographs captured without baiting or animal harassment, respecting wildlife territory.",
          "items": [
            {
              "id": "cm1",
              "title": "Svalbard Polar Bear Denning Study",
              "description": "Three-season photographic survey documenting polar bear mothers leading newly emerged cubs across pack ice."
            },
            {
              "id": "cm2",
              "title": "Ellesmere Island White Wolf Tracking",
              "description": "Trailing the legendary ghost wolves of the High Canadian Arctic on skis across frozen tundra."
            },
            {
              "id": "cm3",
              "title": "Museum-Scale Platinum Palladium Prints",
              "description": "Hand-pulled platinum prints on Japanese kozo paper offering unrivaled tonal depth and permanent conservation quality."
            }
          ]
        }
      },
      {
        "id": "cr11-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Acquire Limited-Edition Conservation Wildlife Prints",
          "description": "50% of print proceeds are donated directly to polar habitat preservation and indigenous tracker trusts.",
          "primaryButtonText": "Browse Signed Print Collection",
          "primaryButtonLink": "#prints"
        }
      },
      {
        "id": "cr11-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "CALLUM MACLEOD EXPEDITIONS",
          "copyrightText": "© 2026 Callum MacLeod Photography. Edinburgh • Tromsø."
        }
      }
    ]
  },
  {
    "id": "creat-documentaryphoto-01",
    "slug": "maya-lin-human-condition-photojournalism",
    "name": "Maya Lin Human Condition Photojournalism",
    "description": "Independent documentary photojournalist and World Press Photo winner documenting indigenous cultures, climate displacement, and human resilience on Leica M.",
    "industryId": "creative-portfolio",
    "categoryId": "photographer",
    "collectionId": "growth-engine",
    "designStyle": "editorial-magazine",
    "featured": false,
    "tags": [
      "photojournalist",
      "documentary photography",
      "world press photo",
      "leica monochrome",
      "human rights",
      "street photography"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "cr12-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "MAYA LIN // REPORTAGE",
          "primaryButtonText": "View Stories",
          "primaryButtonLink": "#stories",
          "navLinks": [
            {
              "label": "Displacement",
              "href": "#displacement"
            },
            {
              "label": "Living Traditions",
              "href": "#traditions"
            },
            {
              "label": "Monograph Essays",
              "href": "#essays"
            }
          ]
        }
      },
      {
        "id": "cr12-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "World Press Photo First Prize Winner • Robert Capa Gold Medal",
          "title": "Witnessing Human Dignity Across the Fringes of History",
          "subtitle": "Armed only with an unobtrusive rangefinder and quiet patience, I embed with communities experiencing seismic cultural and environmental transitions.",
          "primaryButtonText": "Explore Photo Essays",
          "primaryButtonLink": "#stories",
          "imageUrl": "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Field Assignments Completed",
              "value": "48 Countries"
            },
            {
              "id": "s2",
              "label": "Camera Equipment",
              "value": "Leica M11 Monochrom"
            },
            {
              "id": "s3",
              "label": "Pulitzer & World Press Honors",
              "value": "8 Awards"
            }
          ]
        }
      },
      {
        "id": "cr12-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "Long-Form Reportage",
          "title": "Ethical, Compassionate Visual Journalism",
          "subtitle": "Giving voice to human experiences that corporate headlines ignore.",
          "items": [
            {
              "id": "ml1",
              "title": "The Vanishing Nomad: Tibetan Plateau",
              "description": "Five-year documentary project tracking high-altitude pastoralist families adapting to climate relocation."
            },
            {
              "id": "ml2",
              "title": "Rising Tides: Island Communities of Tuvalu",
              "description": "Intimate visual testimony of Pacific islanders facing rising sea levels with fierce cultural preservation."
            },
            {
              "id": "ml3",
              "title": "The Silent Silk Weavers of Oaxaca",
              "description": "Documenting indigenous Zapotec women preserving natural cochineal and indigo textile dyeing rituals."
            }
          ]
        }
      },
      {
        "id": "cr12-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Inquire for Editorial Assignments & Foundation Grants",
          "description": "Available for editorial commissions with The New York Times Magazine, National Geographic, and UNHCR.",
          "primaryButtonText": "Contact Bureau Representation",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "cr12-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "MAYA LIN PHOTOJOURNALISM",
          "copyrightText": "© 2026 Maya Lin. Magnum Photos Member. New York • Bangkok."
        }
      }
    ]
  },
  {
    "id": "creat-foodphoto-01",
    "slug": "pierre-roux-michelin-food-photographer",
    "name": "Pierre Roux Culinary & Gastronomy Photography",
    "description": "Michelin three-star culinary photographer capturing macro textures, steam, and plated fine dining art for world-renowned chefs and gastronomy books.",
    "industryId": "creative-portfolio",
    "categoryId": "photographer",
    "collectionId": "growth-engine",
    "designStyle": "organic-natural",
    "featured": false,
    "tags": [
      "food photographer",
      "culinary photography",
      "michelin dining",
      "gastronomy",
      "cookbook photography",
      "macro food"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "cr13-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "PIERRE ROUX // FOOD",
          "primaryButtonText": "Book Shoot",
          "primaryButtonLink": "#book",
          "navLinks": [
            {
              "label": "Michelin Dishes",
              "href": "#dishes"
            },
            {
              "label": "Chef Kitchens",
              "href": "#kitchens"
            },
            {
              "label": "Cookbook Work",
              "href": "#books"
            }
          ]
        }
      },
      {
        "id": "cr13-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Photographer to 42 Three-Michelin-Starred Restaurants Globally",
          "title": "Capturing Flavor, Steam, and The Fleeting Art of Haute Cuisine",
          "subtitle": "Natural window daylight, macro textures of glistening sea urchin, rising aromatic steam, and the electric intensity of service in the world’s most demanding kitchens.",
          "primaryButtonText": "View Gastronomy Portfolio",
          "primaryButtonLink": "#dishes",
          "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Michelin Starred Chefs Photographed",
              "value": "180+ Chefs"
            },
            {
              "id": "s2",
              "label": "Culinary Monographs Authored",
              "value": "14 Cookbooks"
            },
            {
              "id": "s3",
              "label": "Lighting Philosophy",
              "value": "100% Natural Daylight"
            }
          ]
        }
      },
      {
        "id": "cr13-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Culinary Services",
          "title": "Elevating Gastronomy to Visual Poetry",
          "subtitle": "Working without fake food styling gels or sprays. Pure culinary truth.",
          "items": [
            {
              "id": "pr1",
              "title": "Haute Dining Tasting Menu Photography",
              "description": "High-speed capture ensuring delicate foams do not collapse, sauces retain gloss, and quenelles stay sharp."
            },
            {
              "id": "pr2",
              "title": "Cookbook Production & Creative Direction",
              "description": "End-to-end multi-week residency shooting plating, farm origins, fermentation jars, and step-by-step techniques."
            },
            {
              "id": "pr3",
              "title": "Behind-the-Pass Kitchen Documentary",
              "description": "Raw, atmospheric black-and-white portraits of brigade chefs working the hearth, plancha, and pass."
            }
          ]
        }
      },
      {
        "id": "cr13-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Immortalize Your Restaurant’s Culinary Artistry",
          "description": "Pierre Roux travels worldwide with custom mobile natural-light studio equipment.",
          "primaryButtonText": "Schedule Culinary Production Briefing",
          "primaryButtonLink": "#book"
        }
      },
      {
        "id": "cr13-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "PIERRE ROUX GASTRONOMY STUDIO",
          "copyrightText": "© 2026 Pierre Roux Photography. Lyon • Paris • Tokyo."
        }
      }
    ]
  },
  {
    "id": "creat-motorsportphoto-01",
    "slug": "enzo-rossi-grand-prix-motorsport-photographer",
    "name": "Enzo Rossi Grand Prix & Supercar Photography",
    "description": "High-speed motorsport photographer capturing Formula 1 apex pans, Monaco street circuits, Le Mans 24-hour endurance, and supercar campaign films.",
    "industryId": "creative-portfolio",
    "categoryId": "photographer",
    "collectionId": "growth-engine",
    "designStyle": "bold-creative",
    "featured": false,
    "tags": [
      "motorsport photography",
      "formula 1",
      "supercars",
      "trackside",
      "racing photography",
      "le mans",
      "action photography"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "cr14-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "ENZO ROSSI // F1",
          "primaryButtonText": "Trackside Passes",
          "primaryButtonLink": "#trackside",
          "navLinks": [
            {
              "label": "Grand Prix Racing",
              "href": "#f1"
            },
            {
              "label": "Le Mans 24h",
              "href": "#lemans"
            },
            {
              "label": "Supercars",
              "href": "#supercars"
            }
          ]
        }
      },
      {
        "id": "cr14-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Official FIA Accredited Trackside Photographer • 200 MPH Shutter Pans",
          "title": "200 MPH Kinetic Fury Captured in Razor-Sharp Stillness",
          "subtitle": "Glowing carbon brake discs into the chicane, rain roost rooster tails under Singapore floodlights, and raw champagne euphoria on the podium step.",
          "primaryButtonText": "Explore Racing Portfolio",
          "primaryButtonLink": "#f1",
          "imageUrl": "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Grand Prix Races Photographed",
              "value": "140+ Grands Prix"
            },
            {
              "id": "s2",
              "label": "Fastest Shutter Speed Tracking",
              "value": "1/8000s Sharp"
            },
            {
              "id": "s3",
              "label": "Supercar OEM Commercial Clients",
              "value": "Ferrari, Porsche, McLaren"
            }
          ]
        }
      },
      {
        "id": "cr14-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "High-Speed Capabilities",
          "title": "The Drama and Precision of Modern Motorsport",
          "subtitle": "Trackside access with heavy super-telephoto primes and custom gyro-stabilized camera cars.",
          "items": [
            {
              "id": "er1",
              "title": "Formula 1 & WEC Trackside Race Coverage",
              "description": "Low-shutter dynamic speed blur pans capturing wheel-to-wheel battles at the absolute edge of physics."
            },
            {
              "id": "er2",
              "title": "Hypercar Commercial Launch Campaigns",
              "description": "Alpine pass camera car chasing, dynamic tracking shots, and twilight runway rolling photography."
            },
            {
              "id": "er3",
              "title": "Pit Lane & Paddock Psychological Intimacy",
              "description": "Tense driver telemetry huddles, mechanic tire changes in 1.8 seconds, and raw cockpit concentration."
            }
          ]
        }
      },
      {
        "id": "cr14-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Commission Enzo Rossi for Upcoming Race Seasons",
          "description": "Available for Formula 1 teams, supercar manufacturers, and luxury automotive media.",
          "primaryButtonText": "Inquire for Trackside Bookings",
          "primaryButtonLink": "#trackside"
        }
      },
      {
        "id": "cr14-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "ENZO ROSSI MOTORSPORT PHOTOGRAPHY",
          "copyrightText": "© 2026 Enzo Rossi. Monza, Italy • Monaco."
        }
      }
    ]
  },
  {
    "id": "creat-weddingluxe-01",
    "slug": "vivienne-laurent-luxury-wedding-photographer",
    "name": "Vivienne Laurent Destination Wedding Stories",
    "description": "High-fashion destination wedding photographer capturing multi-day celebrations at Lake Como villas, Amalfi cliffs, and French châteaux on medium format film.",
    "industryId": "creative-portfolio",
    "categoryId": "photographer",
    "collectionId": "growth-engine",
    "designStyle": "luxury-editorial",
    "featured": true,
    "tags": [
      "wedding photographer",
      "destination wedding",
      "lake como wedding",
      "luxury wedding",
      "editorial wedding",
      "film wedding"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "cr15-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "VIVIENNE LAURENT",
          "primaryButtonText": "Check Wedding Dates",
          "primaryButtonLink": "#dates",
          "navLinks": [
            {
              "label": "Lake Como Love",
              "href": "#como"
            },
            {
              "label": "French Châteaux",
              "href": "#france"
            },
            {
              "label": "Medium Format Film",
              "href": "#film"
            }
          ]
        }
      },
      {
        "id": "cr15-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Vogue Weddings Top Destination Photographer • Contax 645 Film",
          "title": "Timeless Romance, Spontaneous Joy, and Editorial Elegance",
          "subtitle": "I document three-day European destination celebrations with an effortless high-fashion gaze, blending luminous medium-format film tones with unscripted, candid human emotion.",
          "primaryButtonText": "View Wedding Stories",
          "primaryButtonLink": "#como",
          "imageUrl": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Destination Celebrations Documented",
              "value": "180+ Weddings"
            },
            {
              "id": "s2",
              "label": "Film Stock Chemistry",
              "value": "Fuji 400H & Kodak Portra"
            },
            {
              "id": "s3",
              "label": "Vogue & Harper’s Features",
              "value": "45+ Stories"
            }
          ]
        }
      },
      {
        "id": "cr15-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "The Wedding Experience",
          "title": "An Heirloom Visual Chronicle",
          "subtitle": "Discreet, warm, and sophisticated coverage for private celebrations worldwide.",
          "items": [
            {
              "id": "vl1",
              "title": "Multi-Day Weekend Destination Coverage",
              "description": "From the welcome Riva boat cruise and rehearsal dinner to midnight after-party fireworks and recovery brunch."
            },
            {
              "id": "vl2",
              "title": "Fine Art Medium Format Celluloid Film",
              "description": "Shot on vintage Contax 645 lenses and hand-developed in boutique London color laboratories."
            },
            {
              "id": "vl3",
              "title": "Handmade Italian Leather Heirloom Albums",
              "description": "Museum-grade flush-mount cotton rag albums bound in soft Florentine calfskin with custom debossing."
            }
          ]
        }
      },
      {
        "id": "cr15-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Inquire for Your Celebration Dates",
          "description": "To maintain intimate focus, Vivienne accepts only 12 exclusive destination celebrations annually.",
          "primaryButtonText": "Request Wedding Commission Guide",
          "primaryButtonLink": "#dates"
        }
      },
      {
        "id": "cr15-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "VIVIENNE LAURENT PHOTOGRAPHY",
          "copyrightText": "© 2026 Vivienne Laurent. Lake Como, Italy • London."
        }
      }
    ]
  },
  {
    "id": "creat-astrocosmic-01",
    "slug": "leo-vance-astrophotography-nightscapes",
    "name": "Leo Vance Deep Space & Nightscape Astrophotography",
    "description": "Fine art astrophotographer capturing deep space nebulae, celestial Milky Way arches over desert arches, and solar eclipse composites.",
    "industryId": "creative-portfolio",
    "categoryId": "photographer",
    "collectionId": "growth-engine",
    "designStyle": "dark-cinematic",
    "featured": false,
    "tags": [
      "astrophotography",
      "night sky",
      "milky way",
      "deep space",
      "nebula",
      "stargazing",
      "astronomy photography"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "cr16-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "LEO VANCE // ASTRO",
          "primaryButtonText": "Celestial Prints",
          "primaryButtonLink": "#prints",
          "navLinks": [
            {
              "label": "Milky Way Arches",
              "href": "#milkyway"
            },
            {
              "label": "Deep Space Nebulae",
              "href": "#nebulae"
            },
            {
              "label": "Dark Sky Reserves",
              "href": "#reserves"
            }
          ]
        }
      },
      {
        "id": "cr16-hero",
        "type": "hero",
        "variant": "hero-fullscreen-photo",
        "visible": true,
        "content": {
          "badge": "Astronomy Photographer of the Year Winner • Atacama Dark Sky Veteran",
          "title": "The Ancient Light of the Cosmos Revealed in High Fidelity",
          "subtitle": "Equatorial tracking mounts, hydrogen-alpha narrowband filters, and hours of photon integration from the darkest plateaus on Earth to reveal the swirling majesty of deep space.",
          "primaryButtonText": "Explore Cosmic Portfolio",
          "primaryButtonLink": "#milkyway",
          "imageUrl": "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Average Exposure Integration Time",
              "value": "38 Hours / Image"
            },
            {
              "id": "s2",
              "label": "Dark Sky Bortle Class",
              "value": "Bortle 1 Pure Dark"
            },
            {
              "id": "s3",
              "label": "NASA Astronomy Picture of the Day",
              "value": "9 Features"
            }
          ]
        }
      },
      {
        "id": "cr16-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Astrophotography Works",
          "title": "Revealing the Invisible Universe",
          "subtitle": "Mastering high signal-to-noise ratio astrophotography and terrestrial nightscapes.",
          "items": [
            {
              "id": "lv1",
              "title": "Gigapixel Panoramic Milky Way Arches",
              "description": "Multi-row panoramic stitched exposures framing the glowing galactic core over pristine desert monuments."
            },
            {
              "id": "lv2",
              "title": "Narrowband Deep Space Emission Nebulae",
              "description": "Hydrogen-alpha, Oxygen-III, and Sulfur-II ionized gas cloud exposures revealing stellar nurseries thousands of light-years away."
            },
            {
              "id": "lv3",
              "title": "Museum Backlit LumaCore Fine Art Prints",
              "description": "High-definition acrylic facemount prints that illuminate under dim room light like glowing stained glass."
            }
          ]
        }
      },
      {
        "id": "cr16-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Bring The Wonders of the Cosmos into Your Space",
          "description": "Limited edition prints signed and numbered, accompanied by telescope exposure calibration metadata.",
          "primaryButtonText": "Browse Celestial Print Shop",
          "primaryButtonLink": "#prints"
        }
      },
      {
        "id": "cr16-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "LEO VANCE ASTROPHOTOGRAPHY",
          "copyrightText": "© 2026 Leo Vance Studio. Atacama, Chile • Flagstaff, Arizona."
        }
      }
    ]
  },
  {
    "id": "creat-brandidentity-01",
    "slug": "studio-forma-swiss-graphic-design",
    "name": "Studio Forma Swiss Graphic Design",
    "description": "Zurich graphic design studio practicing rationalist Swiss typography, mathematical grid systems, visual identity, and cultural posters.",
    "industryId": "creative-portfolio",
    "categoryId": "graphic-designer",
    "collectionId": "growth-engine",
    "designStyle": "brutalist-clean",
    "featured": true,
    "tags": [
      "swiss design",
      "graphic design",
      "typography",
      "grid system",
      "helvetica",
      "poster design",
      "visual identity"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "cr17-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "STUDIO FORMA // ZURICH",
          "primaryButtonText": "Commission Studio",
          "primaryButtonLink": "#contact",
          "navLinks": [
            {
              "label": "Identity Systems",
              "href": "#identity"
            },
            {
              "label": "Typography Spec",
              "href": "#type"
            },
            {
              "label": "Cultural Posters",
              "href": "#posters"
            }
          ]
        }
      },
      {
        "id": "cr17-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "International Typographic Style • Founded in Zurich",
          "title": "Rational Mathematical Order, Asymmetric Balance, Timeless Form",
          "subtitle": "We reject decorative trends in favor of objective clarity, rigorous modular grid systems, crisp grotesque typography, and functional hierarchy that endures for decades.",
          "primaryButtonText": "View Identity Portfolio",
          "primaryButtonLink": "#identity",
          "imageUrl": "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Grid Modular Ratios",
              "value": "1:1.618 Golden"
            },
            {
              "id": "s2",
              "label": "Museum Poster Archives",
              "value": "34 Permanent"
            },
            {
              "id": "s3",
              "label": "Design System Lifespan Target",
              "value": "50+ Years"
            }
          ]
        }
      },
      {
        "id": "cr17-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Graphic Disciplines",
          "title": "Systematic Design Architecture",
          "subtitle": "Rooted in the foundational principles of Max Bill, Josef Müller-Brockmann, and Emil Ruder.",
          "items": [
            {
              "id": "sf1",
              "title": "Modular Corporate Identity Systems",
              "description": "Strict geometric logomarks, color hierarchy, and grid-aligned stationery designed for institutional clarity."
            },
            {
              "id": "sf2",
              "title": "Screenprinted Typographic Posters (Weltformat)",
              "description": "Classic Swiss Weltformat (90.5 x 128 cm) cultural posters silk-screened with high-pigment spot inks."
            },
            {
              "id": "sf3",
              "title": "Editorial Book Architecture & Wayfinding",
              "description": "Comprehensive grid page layouts, micro-typographic rag balancing, and airport architectural signage."
            }
          ]
        }
      },
      {
        "id": "cr17-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Bring Order and Clarity to Your Corporate Identity",
          "description": "Our founding partners consult on institutional rebranding and major cultural identity commissions.",
          "primaryButtonText": "Initiate Design Briefing",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "cr17-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "STUDIO FORMA GRAPHIC DESIGN",
          "copyrightText": "© 2026 Studio Forma GmbH. Zurich, Switzerland."
        }
      }
    ]
  },
  {
    "id": "creat-packagingdesign-01",
    "slug": "botanica-paper-spirits-packaging",
    "name": "Botanica Paper & Luxury Spirits Packaging Studio",
    "description": "Boutique packaging design firm specializing in tactile hot-stamped foil labels, custom glass bottle silhouettes, and biodegradable luxury packaging.",
    "industryId": "creative-portfolio",
    "categoryId": "graphic-designer",
    "collectionId": "high-fashion-editorial",
    "designStyle": "luxury-editorial",
    "featured": false,
    "tags": [
      "packaging design",
      "spirits packaging",
      "bottle design",
      "foil stamping",
      "label design",
      "cpg branding"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "cr18-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "BOTANICA // PACKAGING",
          "primaryButtonText": "Start Packaging Brief",
          "primaryButtonLink": "#brief",
          "navLinks": [
            {
              "label": "Spirits & Wine",
              "href": "#spirits"
            },
            {
              "label": "Glass Tooling",
              "href": "#glass"
            },
            {
              "label": "Substrate Archive",
              "href": "#paper"
            }
          ]
        }
      },
      {
        "id": "cr18-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Pentawards Diamond Winner • Dieline Design Studio of the Year",
          "title": "Vessels That Command The Shelf and Delight The Senses",
          "subtitle": "We craft heavy-bottomed bespoke glass bottles, blind debossed cotton label papers, and warm metallic foils that turn spirits, fragrances, and luxury goods into coveted artifacts.",
          "primaryButtonText": "View Packaging Works",
          "primaryButtonLink": "#spirits",
          "imageUrl": "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Average Shelf Sell-Through Lift",
              "value": "+44%"
            },
            {
              "id": "s2",
              "label": "Packaging Honors Won",
              "value": "32 Pentawards"
            },
            {
              "id": "s3",
              "label": "Sustainable Substrate Ratio",
              "value": "100% Plastic Free"
            }
          ]
        }
      },
      {
        "id": "cr18-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "Packaging Mastery",
          "title": "From Concept Sketch to High-Speed Bottling Lines",
          "subtitle": "Flawlessly coordinated with master glassmakers in France and Italy.",
          "items": [
            {
              "id": "bp1",
              "title": "Custom 3D Glass Bottle & Closure Tooling",
              "description": "Sculpting ergonomic bottle geometries, embossed brand shields, and weighted cork stopper designs."
            },
            {
              "id": "bp2",
              "title": "Multi-Level Blind Embossing & Micro-Etched Foils",
              "description": "Tactile label engineering that catches natural shelf light and invites the consumer’s fingertips."
            },
            {
              "id": "bp3",
              "title": "Rigid Box Unboxing Experience Engineering",
              "description": "Magnetic closure presentation boxes lined with recycled velvet inserts for collector edition releases."
            }
          ]
        }
      },
      {
        "id": "cr18-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Launch a Bottle That Dominates the Premium Back Bar",
          "description": "Share your liquid profile and target retail positioning for a comprehensive packaging proposal.",
          "primaryButtonText": "Request Packaging Consultation",
          "primaryButtonLink": "#brief"
        }
      },
      {
        "id": "cr18-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "BOTANICA PACKAGING ATELIER",
          "copyrightText": "© 2026 Botanica Packaging Design Ltd. Edinburgh • Cognac • Portland."
        }
      }
    ]
  },
  {
    "id": "creat-typefoundry-01",
    "slug": "monotype-werk-custom-font-foundry",
    "name": "Monotype Werk Custom Variable Type Foundry",
    "description": "Independent digital type foundry crafting bespoke corporate variable fonts, editorial serif families, and high-performance web typefaces.",
    "industryId": "creative-portfolio",
    "categoryId": "graphic-designer",
    "collectionId": "growth-engine",
    "designStyle": "editorial-magazine",
    "featured": true,
    "tags": [
      "type foundry",
      "variable fonts",
      "typography",
      "custom typeface",
      "font design",
      "glyphs",
      "opentype"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "cr19-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "MONOTYPE WERK",
          "primaryButtonText": "Test Variable Glyphs",
          "primaryButtonLink": "#tester",
          "navLinks": [
            {
              "label": "Retail Fonts",
              "href": "#retail"
            },
            {
              "label": "Bespoke Corporate Type",
              "href": "#bespoke"
            },
            {
              "label": "Specimen Books",
              "href": "#specimens"
            }
          ]
        }
      },
      {
        "id": "cr19-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "OpenType Variable Font Engineering • Multi-Script Latin & Cyrillic",
          "title": "The Unmistakable Voice of Custom Drawn Letterforms",
          "subtitle": "A single proprietary typeface gives your company an uncopyable visual fingerprint. We design variable font families with fluid weight, optical size, and slant axes tuned for micro-screens and monumental billboards.",
          "primaryButtonText": "Try Interactive Type Tester",
          "primaryButtonLink": "#tester",
          "imageUrl": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Average Glyphs Per Font Family",
              "value": "1,200+ Characters"
            },
            {
              "id": "s2",
              "label": "Language Scripts Supported",
              "value": "Latin, Cyrillic, Greek"
            },
            {
              "id": "s3",
              "label": "Web Font File Optimization",
              "value": "<28 KB WOFF2"
            }
          ]
        }
      },
      {
        "id": "cr19-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "Typefoundry Services",
          "title": "Precision Micro-Typographic Engineering",
          "subtitle": "Crafted with obsessive kerning pairs, tabular figures, and contextual alternates.",
          "items": [
            {
              "id": "mw1",
              "title": "Bespoke Corporate Enterprise Typefaces",
              "description": "Custom proprietary font families engineered for multi-platform licensing, eliminating recurring web font subscription costs."
            },
            {
              "id": "mw2",
              "title": "Single-File OpenType Variable Fonts",
              "description": "Interpolating seamlessly along weight (100 to 900), width, and optical size axes in a single ultra-lightweight WOFF2."
            },
            {
              "id": "mw3",
              "title": "Physical Letterpress Specimen Broadsides",
              "description": "Hand-set metal and wood type printed on heavyweight archival paper documenting the design pedigree."
            }
          ]
        }
      },
      {
        "id": "cr19-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Commission a Proprietary Corporate Typeface",
          "description": "Our type designers collaborate directly with brand directors to define your company’s unique typographic voice.",
          "primaryButtonText": "Inquire for Custom Type Commission",
          "primaryButtonLink": "#bespoke"
        }
      },
      {
        "id": "cr19-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "MONOTYPE WERK TYPE FOUNDRY",
          "copyrightText": "© 2026 Monotype Werk Typefoundry GmbH. Berlin • Zurich."
        }
      }
    ]
  },
  {
    "id": "creat-posterart-01",
    "slug": "brutalprint-risograph-poster-studio",
    "name": "BrutalPrint Silkscreen & Risograph Studio",
    "description": "Underground graphic art studio producing hand-pulled silkscreen concert posters, fluorescent risograph art prints, and limited-run apparel.",
    "industryId": "creative-portfolio",
    "categoryId": "graphic-designer",
    "collectionId": "growth-engine",
    "designStyle": "bold-creative",
    "featured": false,
    "tags": [
      "screenprint",
      "risograph",
      "poster art",
      "gig posters",
      "silkscreen",
      "graphic art",
      "printmaking"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "cr20-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "BRUTALPRINT // STUDIO",
          "primaryButtonText": "Shop Prints",
          "primaryButtonLink": "#prints",
          "navLinks": [
            {
              "label": "Gig Posters",
              "href": "#gig"
            },
            {
              "label": "Riso Art Editions",
              "href": "#riso"
            },
            {
              "label": "Screenprint Lab",
              "href": "#lab"
            }
          ]
        }
      },
      {
        "id": "cr20-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Hand-Pulled in East London • Fluorescent UV Inks on Heavy French Paper",
          "title": "Loud Inks, Raw Halftones, and Tactile Screenprint Energy",
          "subtitle": "We collaborate with underground musicians, independent record labels, and cultural festivals to produce screenprinted posters that fans frame and cherish for decades.",
          "primaryButtonText": "Browse Limited Edition Posters",
          "primaryButtonLink": "#prints",
          "imageUrl": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Limited Run Batch Sizes",
              "value": "50-150 Hand Numbered"
            },
            {
              "id": "s2",
              "label": "Spot Inks Formulated",
              "value": "Custom Metallic & Fluoro"
            },
            {
              "id": "s3",
              "label": "Paper Stock Weight",
              "value": "300 GSM Heavy Cotton"
            }
          ]
        }
      },
      {
        "id": "cr20-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Printmaking Craft",
          "title": "Analogue Print in a Disposable World",
          "subtitle": "Every print features subtle misregistrations and ink textures that prove human craft.",
          "items": [
            {
              "id": "bp1",
              "title": "5-Color Screenprinted Gig Posters",
              "description": "Hand-pulled using water-based acrylic inks on French Paper Co. Speckletone stock, signed and numbered."
            },
            {
              "id": "bp2",
              "title": "Dual-Drum Fluorescent Risograph Art Prints",
              "description": "Vibrant soy-based neon pink, sunflower yellow, and blue inks blending into unexpected optical third colors."
            },
            {
              "id": "bp3",
              "title": "Custom Heavyweight Band Tour Merch",
              "description": "Discharge screenprinted heavyweight 6.5oz cotton tees that feel soft to the touch with zero plastic plastisol hand-feel."
            }
          ]
        }
      },
      {
        "id": "cr20-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Commission a Limited Edition Print Run",
          "description": "Share your event dates, band roster, or art edition concepts for a custom printmaking quote.",
          "primaryButtonText": "Request Printmaking Quote",
          "primaryButtonLink": "#prints"
        }
      },
      {
        "id": "cr20-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "BRUTALPRINT PRINTMAKING STUDIO",
          "copyrightText": "© 2026 BrutalPrint Studio Ltd. Hackney, London • Brooklyn."
        }
      }
    ]
  },
  {
    "id": "creat-3dbrandart-01",
    "slug": "neondream-3d-cgi-visualizer",
    "name": "NeonDream 3D CGI Brand & Surrealist Art",
    "description": "Surrealist 3D artist crafting hyper-stylized iridescent CGI brand campaigns, chrome typography, and virtual universe key art.",
    "industryId": "creative-portfolio",
    "categoryId": "graphic-designer",
    "collectionId": "growth-engine",
    "designStyle": "glass-interface",
    "featured": false,
    "tags": [
      "3d art",
      "cgi",
      "surrealism",
      "chrome typography",
      "iridescent 3d",
      "virtual worlds",
      "key art"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "cr21-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "NEONDREAM // 3D",
          "primaryButtonText": "Explore Vault",
          "primaryButtonLink": "#vault",
          "navLinks": [
            {
              "label": "CGI Artworks",
              "href": "#art"
            },
            {
              "label": "Chrome Type",
              "href": "#type"
            },
            {
              "label": "Virtual Worlds",
              "href": "#worlds"
            }
          ]
        }
      },
      {
        "id": "cr21-hero",
        "type": "hero",
        "variant": "hero-minimal-typography",
        "visible": true,
        "content": {
          "badge": "Octane Render Master • Collaborator with Highsnobiety and Apple Music",
          "title": "Surreal Chromatic Dreams Rendered in Luminous 3D Glass",
          "subtitle": "Melting liquid chrome, refractive prismatic glass sculptures, floating metallic botanical forms, and otherworldly visual identities for cultural pioneers.",
          "primaryButtonText": "Explore Surreal 3D Gallery",
          "primaryButtonLink": "#art",
          "imageUrl": "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80"
        }
      },
      {
        "id": "cr21-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "badge": "Visual Worlds",
          "title": "Hyper-Stylized Contemporary 3D Art",
          "subtitle": "Pushing the boundaries of raytracing, glass caustics, and atmospheric depth.",
          "items": [
            {
              "id": "nd1",
              "title": "Liquid Chrome & Prismatic Key Visuals",
              "description": "High-resolution hero artworks for music festivals, album covers, and global fashion product drops."
            },
            {
              "id": "nd2",
              "title": "Custom 3D Sculpted Chromatic Typography",
              "description": "Inflated balloon typography, liquid mercury letterforms, and spiked metallic 3D logos."
            },
            {
              "id": "nd3",
              "title": "Virtual Metaverse Spaces & Spatial Worlds",
              "description": "Real-time optimized 3D gallery environments for virtual exhibitions and web browser exploration."
            }
          ]
        }
      },
      {
        "id": "cr21-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Ready to Enter the NeonDream Dimension?",
          "description": "Available for high-profile album art, brand key visuals, and festival visual identity.",
          "primaryButtonText": "Commission 3D Art Piece",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "cr21-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "NEONDREAM 3D CGI STUDIO",
          "copyrightText": "© 2026 NeonDream Artworks Ltd. Seoul • Los Angeles."
        }
      }
    ]
  },
  {
    "id": "creat-infographicdata-01",
    "slug": "datamatrix-information-designer",
    "name": "DataMatrix Information Design & Cartography",
    "description": "Visual journalist and information designer creating complex data visualizations, scientific diagrams, and interactive historical maps.",
    "industryId": "creative-portfolio",
    "categoryId": "graphic-designer",
    "collectionId": "growth-engine",
    "designStyle": "technology-gradient",
    "featured": false,
    "tags": [
      "information design",
      "data visualization",
      "cartography",
      "infographics",
      "visual journalism",
      "dataviz"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "cr22-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "DATAMATRIX // VIZ",
          "primaryButtonText": "Explore Graphics",
          "primaryButtonLink": "#graphics",
          "navLinks": [
            {
              "label": "Data Visualizations",
              "href": "#dataviz"
            },
            {
              "label": "Cartography",
              "href": "#maps"
            },
            {
              "label": "Scientific Graphics",
              "href": "#science"
            }
          ]
        }
      },
      {
        "id": "cr22-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Kantar Information is Beautiful Gold Award • Malofiej Infographics Winner",
          "title": "Transforming Massive Datasets into Lucid Visual Understanding",
          "subtitle": "We decode complex macroeconomic trends, climate modeling, and deep geopolitical histories into rigorous, elegant, and instantly readable infographics and interactive maps.",
          "primaryButtonText": "View Data Projects",
          "primaryButtonLink": "#graphics",
          "imageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Data Points Visualized",
              "value": "45 Million+"
            },
            {
              "id": "s2",
              "label": "Global Media Publications",
              "value": "The Economist, NYT, Nature"
            },
            {
              "id": "s3",
              "label": "Cartographic Precision",
              "value": "Sub-Meter GIS"
            }
          ]
        }
      },
      {
        "id": "cr22-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Visual Journalism",
          "title": "Visual Rigor. Unbiased Clarity.",
          "subtitle": "Merging investigative journalism, statistical data science, and refined typography.",
          "items": [
            {
              "id": "dm1",
              "title": "Interactive D3.js & WebGL Data Dashboards",
              "description": "Responsive exploratory data graphics allowing users to filter, zoom, and discover personalized statistical insights."
            },
            {
              "id": "dm2",
              "title": "Large-Format Editorial Print Infographics",
              "description": "Double-page spread diagrams detailing space missions, deep ocean trenches, and global trade flows."
            },
            {
              "id": "dm3",
              "title": "Topographic & Geopolitical Cartography",
              "description": "GIS-accurate terrain maps utilizing shaded relief, bathymetry, and custom vector contour lines."
            }
          ]
        }
      },
      {
        "id": "cr22-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Make Your Complex Data Impossible to Misunderstand",
          "description": "We partner with think tanks, scientific research institutions, and national publications.",
          "primaryButtonText": "Commission Information Design",
          "primaryButtonLink": "#graphics"
        }
      },
      {
        "id": "cr22-footer",
        "type": "footer",
        "variant": "footer-multi-column",
        "visible": true,
        "content": {
          "title": "DATAMATRIX VISUAL JOURNALISM",
          "copyrightText": "© 2026 DataMatrix Studio. Washington D.C. • London."
        }
      }
    ]
  },
  {
    "id": "creat-bookdesigner-01",
    "slug": "atelier-gutenberg-fine-book-typographer",
    "name": "Atelier Gutenberg Fine Book & Editorial Typography",
    "description": "Bespoke book design studio crafting limited-edition clothbound literary volumes, Smyth-sewn journals, and handset letterpress typography.",
    "industryId": "creative-portfolio",
    "categoryId": "graphic-designer",
    "collectionId": "growth-engine",
    "designStyle": "academic-classic",
    "featured": false,
    "tags": [
      "book design",
      "editorial design",
      "letterpress",
      "clothbound book",
      "typography",
      "publishing design"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "cr23-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "ATELIER GUTENBERG",
          "primaryButtonText": "Book Commissions",
          "primaryButtonLink": "#commissions",
          "navLinks": [
            {
              "label": "Clothbound Books",
              "href": "#books"
            },
            {
              "label": "Letterpress Editions",
              "href": "#letterpress"
            },
            {
              "label": "Typography Proofs",
              "href": "#proofs"
            }
          ]
        }
      },
      {
        "id": "cr23-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "50 Books / 50 Covers Award Winner • Hand-Bound in Leipzig & Oxford",
          "title": "The Sacred Architecture of the Printed Book",
          "subtitle": "We design books that feel sacred in the hand. Proportional margin grids, immaculate leaded typography, deckled uncoated cotton papers, silk ribbon markers, and gold foil-stamped Dutch bookcloth.",
          "primaryButtonText": "View Designed Books",
          "primaryButtonLink": "#books",
          "imageUrl": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Books Published Worldwide",
              "value": "160+ Editions"
            },
            {
              "id": "s2",
              "label": "Binding Standard",
              "value": "Smyth-Sewn Lay-Flat"
            },
            {
              "id": "s3",
              "label": "Archival Paper Certification",
              "value": "Acid-Free 300 Yr"
            }
          ]
        }
      },
      {
        "id": "cr23-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "Bookcraft Disciplines",
          "title": "Crafting Physical Literary Monuments",
          "subtitle": "End-to-end editorial design from manuscript typesetting to master printer press checks.",
          "items": [
            {
              "id": "ag1",
              "title": "Complete Interior Book Layout & Typesetting",
              "description": "Flawlessly balanced running headers, footnote references, drop caps, and hyphenation dictionaries."
            },
            {
              "id": "ag2",
              "title": "Hardcover Clothbound & Dust Jacket Architecture",
              "description": "Embossed foil typography on natural linen bookcloth, custom marbled endpapers, and French-folded jackets."
            },
            {
              "id": "ag3",
              "title": "Limited Hand-Fed Letterpress Broadside Editions",
              "description": "Printing on antique Heidelberg cylinder presses using deep impression relief inks on handmade rag paper."
            }
          ]
        }
      },
      {
        "id": "cr23-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Bring Exceptional Craft to Your Upcoming Book Publication",
          "description": "We collaborate with independent authors, university presses, and literary publishing houses.",
          "primaryButtonText": "Inquire for Book Design",
          "primaryButtonLink": "#commissions"
        }
      },
      {
        "id": "cr23-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "ATELIER GUTENBERG BOOK DESIGN",
          "copyrightText": "© 2026 Atelier Gutenberg Ltd. Oxford • Leipzig."
        }
      }
    ]
  },
  {
    "id": "creat-motiongraphics-01",
    "slug": "kineticflow-title-sequences-ui-motion",
    "name": "KineticFlow Film Titles & UI Micro-Interactions",
    "description": "Kinetic motion studio directing cinematic film title sequences, software micro-interaction design, and fluid Framer design systems.",
    "industryId": "creative-portfolio",
    "categoryId": "graphic-designer",
    "collectionId": "growth-engine",
    "designStyle": "dark-cinematic",
    "featured": false,
    "tags": [
      "title sequence",
      "motion graphics",
      "ui motion",
      "micro interactions",
      "kinetic typography",
      "framer motion",
      "cinema title"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "cr24-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "KINETICFLOW // MOTION",
          "primaryButtonText": "Watch Title Reel",
          "primaryButtonLink": "#reel",
          "navLinks": [
            {
              "label": "Film Title Sequences",
              "href": "#titles"
            },
            {
              "label": "UI Micro-Interactions",
              "href": "#ui"
            },
            {
              "label": "Motion Guidelines",
              "href": "#guidelines"
            }
          ]
        }
      },
      {
        "id": "cr24-hero",
        "type": "hero",
        "variant": "hero-fullscreen-photo",
        "visible": true,
        "content": {
          "badge": "Emmy Nominee Outstanding Title Design • Netflix & HBO Series Titles",
          "title": "Motion That Tells Stories in Fractions of a Second",
          "subtitle": "From atmospheric, moody cinematic opening title sequences to spring-physics micro-interactions that make modern mobile and web software feel weightless and responsive.",
          "primaryButtonText": "Watch Motion Reel",
          "primaryButtonLink": "#reel",
          "imageUrl": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Streaming Series Titles Designed",
              "value": "14 Shows"
            },
            {
              "id": "s2",
              "label": "UI Motion Physics Accuracy",
              "value": "Spring Curves"
            },
            {
              "id": "s3",
              "label": "Emmy & SXSW Title Nominations",
              "value": "6 Honors"
            }
          ]
        }
      },
      {
        "id": "cr24-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Motion Practice",
          "title": "The Art of Choreographed Movement",
          "subtitle": "Bridging high-end cinematic titles with interactive product usability.",
          "items": [
            {
              "id": "kf1",
              "title": "Cinematic Main Title Sequences",
              "description": "Conceptualizing, filming, and animating opening credit sequences with custom typography and score timing."
            },
            {
              "id": "kf2",
              "title": "Framer & React Spring UI Motion Choreography",
              "description": "Delivering production-ready easing curves, transition durations, and gesture physics for engineering teams."
            },
            {
              "id": "kf3",
              "title": "Kinetic Brand Identity Guidelines",
              "description": "Documenting logo reveal choreographies, loading animations, and dynamic video bumpers in living design systems."
            }
          ]
        }
      },
      {
        "id": "cr24-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Infuse Your Production or Product with Fluid Motion",
          "description": "Available for streaming feature film titles, commercial creative direction, and SaaS product motion sprints.",
          "primaryButtonText": "Discuss Upcoming Motion Project",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "cr24-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "KINETICFLOW MOTION STUDIO",
          "copyrightText": "© 2026 KineticFlow Studios Inc. Los Angeles • London."
        }
      }
    ]
  }
];
