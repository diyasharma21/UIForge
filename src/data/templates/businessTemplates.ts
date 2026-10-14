import { TemplateConfig } from '../../types';

export const BUSINESS_TEMPLATES: TemplateConfig[] = [
  {
    "id": "biz-apexventures-01",
    "slug": "apex-ventures-seed-accelerator",
    "name": "Apex Seed Ventures & Venture Studio",
    "description": "Premier venture studio co-founding and funding high-velocity B2B SaaS and AI infrastructure startups with deep operational backing.",
    "industryId": "business-services",
    "categoryId": "startup",
    "collectionId": "growth-engine",
    "designStyle": "modern-corporate",
    "featured": true,
    "tags": [
      "venture studio",
      "startup accelerator",
      "seed funding",
      "saas incubator",
      "investors",
      "founder capital"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bz1-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "APEX VENTURES",
          "primaryButtonText": "Pitch Your Venture",
          "primaryButtonLink": "#pitch",
          "navLinks": [
            {
              "label": "Studio Portfolio",
              "href": "#portfolio"
            },
            {
              "label": "Methodology",
              "href": "#method"
            },
            {
              "label": "Operating Partners",
              "href": "#partners"
            },
            {
              "label": "Apply",
              "href": "#pitch"
            }
          ]
        }
      },
      {
        "id": "bz1-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Batch W26 Applications Now Open • $500K Initial Capital",
          "title": "We Build, Fund, and Scale Category-Defining Technology Companies",
          "subtitle": "From day zero validation to Series A institutional syndication, our dedicated engineers, growth hackers, and operators work directly alongside founders.",
          "primaryButtonText": "Submit Founder Pitch Deck",
          "primaryButtonLink": "#pitch",
          "secondaryButtonText": "Explore 38 Portfolio Exits",
          "secondaryButtonLink": "#portfolio",
          "imageUrl": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Total Capital Raised",
              "value": "$1.4B+"
            },
            {
              "id": "s2",
              "label": "Follow-On Series A Rate",
              "value": "89%"
            },
            {
              "id": "s3",
              "label": "Average Time to First $1M ARR",
              "value": "8.4 Mos"
            }
          ]
        }
      },
      {
        "id": "bz1-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "badge": "Operational Studio Model",
          "title": "Unfair Structural Advantages for Early Founders",
          "subtitle": "Traditional venture funds hand you a check and occasional advice. Apex provides an embedded 12-person execution team.",
          "items": [
            {
              "id": "bzs1",
              "title": "Full-Stack Architecture & AI Squad",
              "description": "Immediate access to senior staff engineers who spin up robust microservices, LLM pipelines, and SOC2 compliance rails."
            },
            {
              "id": "bzs2",
              "title": "Targeted Go-To-Market & Enterprise Introductions",
              "description": "Direct introductions to Fortune 500 CIOs and early design partners across our proprietary enterprise buyer network."
            },
            {
              "id": "bzs3",
              "title": "Top-Tier Venture Syndicate Placement",
              "description": "Coordinated Series A roadshows connecting founders directly with Tier-1 lead partners across Sand Hill Road and London."
            }
          ]
        }
      },
      {
        "id": "bz1-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "badge": "Rolling Evaluations",
          "title": "Ready to Build Something Extraordinary?",
          "description": "We review decks within 48 hours. If there is mutual conviction, initial term sheets are issued inside 7 business days.",
          "primaryButtonText": "Submit Deck for Review",
          "primaryButtonLink": "#pitch"
        }
      },
      {
        "id": "bz1-footer",
        "type": "footer",
        "variant": "footer-multi-column",
        "visible": true,
        "content": {
          "title": "APEX VENTURES STUDIO",
          "copyrightText": "© 2026 Apex Venture Partners LLC. San Francisco • New York • Singapore."
        }
      }
    ]
  },
  {
    "id": "biz-synapseai-01",
    "slug": "synapse-applied-ai-foundry",
    "name": "Synapse AI Foundry & Incubator",
    "description": "Specialized accelerator pairing applied machine learning researchers with enterprise design partners and GPU compute clusters.",
    "industryId": "business-services",
    "categoryId": "startup",
    "collectionId": "growth-engine",
    "designStyle": "dark-cinematic",
    "featured": false,
    "tags": [
      "ai incubator",
      "machine learning",
      "h100 compute",
      "seed incubator",
      "deeptech",
      "founder grant"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bz2-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "SYNAPSE // AI",
          "primaryButtonText": "Access Compute Grant",
          "primaryButtonLink": "#grant",
          "navLinks": [
            {
              "label": "Compute Clusters",
              "href": "#compute"
            },
            {
              "label": "Resident Teams",
              "href": "#teams"
            },
            {
              "label": "Research Mentors",
              "href": "#mentors"
            }
          ]
        }
      },
      {
        "id": "bz2-hero",
        "type": "hero",
        "variant": "hero-fullscreen-photo",
        "visible": true,
        "content": {
          "badge": "512x H100 Hopper Clusters • Silicon Valley Residency",
          "title": "Where Breakthrough AI Research Becomes Commercial Dominance",
          "subtitle": "We provide technical PhD founders with $250K non-dilutive GPU compute credits, private proprietary training datasets, and elite venture backing.",
          "primaryButtonText": "Apply for Resident Batch",
          "primaryButtonLink": "#apply",
          "imageUrl": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Dedicated GPU Clusters",
              "value": "512 Nodes"
            },
            {
              "id": "s2",
              "label": "Seed Rounds Closed",
              "value": "$310M"
            },
            {
              "id": "s3",
              "label": "Commercial Patents Filed",
              "value": "42"
            }
          ]
        }
      },
      {
        "id": "bz2-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Incubator Resources",
          "title": "Zero Latency Infrastructure for Machine Learning Startups",
          "subtitle": "Engineered specifically for inference optimization, fine-tuning, and multi-modal foundational architectures.",
          "items": [
            {
              "id": "b2s1",
              "title": "Direct Supercomputing Grants",
              "description": "Zero-waitlist access to liquid-cooled DGX clusters networked over 3.2 Tbps InfiniBand fabrics."
            },
            {
              "id": "b2s2",
              "title": "Synthetic Dataset Synthesis",
              "description": "Access to custom synthetic dataset pipelines and enterprise data-cleansing toolkits."
            },
            {
              "id": "b2s3",
              "title": "Model Compression & Quantization",
              "description": "Hands-on mentorship from former PyTorch and vLLM maintainers to slash production inference costs."
            }
          ]
        }
      },
      {
        "id": "bz2-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Turn Model Weights into Multimillion Dollar ARR",
          "description": "Applications reviewed on a rolling basis. Cohorts limited to 12 frontier research teams.",
          "primaryButtonText": "Submit Architecture Spec",
          "primaryButtonLink": "#apply"
        }
      },
      {
        "id": "bz2-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "SYNAPSE AI FOUNDRY",
          "copyrightText": "© 2026 Synapse Labs Inc. Palo Alto, California."
        }
      }
    ]
  },
  {
    "id": "biz-vanguard-01",
    "slug": "vanguard-growth-marketing-agency",
    "name": "Vanguard Omnichannel Growth Partners",
    "description": "Data-driven performance marketing and viral growth agency scaling venture-backed brands from Series A to IPO.",
    "industryId": "business-services",
    "categoryId": "marketing-agency",
    "collectionId": "growth-engine",
    "designStyle": "bold-creative",
    "featured": true,
    "tags": [
      "marketing agency",
      "growth",
      "performance marketing",
      "paid media",
      "b2b",
      "case studies"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bz3-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "VANGUARD // GROWTH",
          "primaryButtonText": "Book Strategy Call",
          "primaryButtonLink": "#contact",
          "navLinks": [
            {
              "label": "Work",
              "href": "#case-studies"
            },
            {
              "label": "Capabilities",
              "href": "#services"
            },
            {
              "label": "Methodology",
              "href": "#about"
            },
            {
              "label": "Insights",
              "href": "#insights"
            }
          ]
        }
      },
      {
        "id": "bz3-hero",
        "type": "hero",
        "variant": "hero-bento",
        "visible": true,
        "content": {
          "badge": "$140M+ Attributed Revenue Generated in 2025",
          "title": "We Engineer Predictable Hypergrowth for Modern Brands",
          "subtitle": "Paid acquisition, viral creative production, and full-funnel CRO that converts skeptics into evangelists.",
          "primaryButtonText": "Request Free Growth Audit",
          "primaryButtonLink": "#contact",
          "secondaryButtonText": "Explore Case Studies",
          "secondaryButtonLink": "#case-studies",
          "imageUrl": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "ags1",
              "label": "Average ROAS Multiplier",
              "value": "4.8x"
            },
            {
              "id": "ags2",
              "label": "Client Retention Rate",
              "value": "94%"
            },
            {
              "id": "ags3",
              "label": "Ad Spend Managed",
              "value": "$85M+"
            }
          ]
        }
      },
      {
        "id": "bz3-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "badge": "Our Capabilities",
          "title": "Engineered for Radical Expansion",
          "subtitle": "We do not sell vague brand consulting. We execute performance sprints that hit verifiable revenue KPIs.",
          "items": [
            {
              "id": "ag1",
              "title": "Omnichannel Paid Media",
              "description": "Algorithmic campaign architecture on Meta, Google Performance Max, TikTok, and LinkedIn Ads."
            },
            {
              "id": "ag2",
              "title": "High-Velocity UGC & Creative Studio",
              "description": "In-house filming and editing delivering 40+ net-new video ad variations every month to defeat fatigue."
            },
            {
              "id": "ag3",
              "title": "Funnel Optimization & Landing Page CRO",
              "description": "Scientific multivariate headline, offer, and layout testing to boost checkout conversion rates."
            }
          ]
        }
      },
      {
        "id": "bz3-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Ready to 3x Your Qualified Customer Acquisition?",
          "description": "Our senior strategists analyze your ad accounts, landing pages, and churn points without charge.",
          "primaryButtonText": "Claim Your Growth Audit",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "bz3-footer",
        "type": "footer",
        "variant": "footer-multi-column",
        "visible": true,
        "content": {
          "title": "VANGUARD GROWTH PARTNERS",
          "copyrightText": "© 2026 Vanguard Growth Partners Inc. New York • London • Los Angeles."
        }
      }
    ]
  },
  {
    "id": "biz-hyperviral-01",
    "slug": "hyperviral-short-form-video-agency",
    "name": "HyperViral TikTok & Reel Production Lab",
    "description": "High-volume short-form vertical video agency engineering organic reach and conversion hooks for consumer brands.",
    "industryId": "business-services",
    "categoryId": "marketing-agency",
    "collectionId": "growth-engine",
    "designStyle": "bold-creative",
    "featured": false,
    "tags": [
      "tiktok agency",
      "short form video",
      "ugc creators",
      "viral marketing",
      "reels",
      "influencer"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bz4-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "HYPERVIRAL //",
          "primaryButtonText": "Start Campaign",
          "primaryButtonLink": "#start",
          "navLinks": [
            {
              "label": "Viral Proof",
              "href": "#proof"
            },
            {
              "label": "Creator Network",
              "href": "#creators"
            },
            {
              "label": "Packages",
              "href": "#pricing"
            }
          ]
        }
      },
      {
        "id": "bz4-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Over 2.8 Billion Organic Views Delivered",
          "title": "We Produce Short-Form Videos That Stop The Scroll and Sell",
          "subtitle": "From retention-tuned scriptwriting to native TikTok creator casting and daily editing, we build brand obsession on vertical video.",
          "primaryButtonText": "View Case Studies",
          "primaryButtonLink": "#proof",
          "imageUrl": "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Average 3-Second Hook Rate",
              "value": "42.6%"
            },
            {
              "id": "s2",
              "label": "Creator Network",
              "value": "450+ Active"
            },
            {
              "id": "s3",
              "label": "Monthly Video Output",
              "value": "1,200+"
            }
          ]
        }
      },
      {
        "id": "bz4-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Production Engine",
          "title": "Complete Vertical Content Factory",
          "subtitle": "Zero stress for your team. We script, cast, shoot, edit, and caption ready-to-post vertical assets.",
          "items": [
            {
              "id": "hv1",
              "title": "Hook Engineering & Trend Mining",
              "description": "Real-time algorithm monitoring identifying breakout audio tracks and framing concepts before competitors."
            },
            {
              "id": "hv2",
              "title": "Vetted UGC Creator Casting",
              "description": "Curated roster of charismatic on-camera storytellers matching your exact demographic and brand tone."
            },
            {
              "id": "hv3",
              "title": "High-Paced Jump-Cut Post Production",
              "description": "Dynamic captioning, sound design, sound effects, and B-roll inserts maintaining peak viewer dopamine."
            }
          ]
        }
      },
      {
        "id": "bz4-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Dominate TikTok and Instagram Reels This Quarter",
          "description": "Receive 5 customized viral script concepts mapped specifically to your flagship product.",
          "primaryButtonText": "Get 5 Free Script Hooks",
          "primaryButtonLink": "#start"
        }
      },
      {
        "id": "bz4-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "HYPERVIRAL MEDIA LAB",
          "copyrightText": "© 2026 HyperViral Media Inc. Los Angeles • Miami."
        }
      }
    ]
  },
  {
    "id": "biz-nexusdigital-01",
    "slug": "nexus-digital-transformation-consulting",
    "name": "Nexus Digital Systems Agency",
    "description": "Enterprise digital engineering and cloud transformation studio delivering custom web portals, API middleware, and modern architectures.",
    "industryId": "business-services",
    "categoryId": "digital-agency",
    "collectionId": "growth-engine",
    "designStyle": "technology-gradient",
    "featured": true,
    "tags": [
      "digital agency",
      "enterprise web",
      "cloud migration",
      "full stack",
      "headless cms",
      "systems engineering"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bz5-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "NEXUS // DIGITAL",
          "primaryButtonText": "Schedule Engineering Call",
          "primaryButtonLink": "#contact",
          "navLinks": [
            {
              "label": "Solutions",
              "href": "#solutions"
            },
            {
              "label": "Case Studies",
              "href": "#cases"
            },
            {
              "label": "Technology Stack",
              "href": "#tech"
            }
          ]
        }
      },
      {
        "id": "bz5-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Enterprise Digital Modernization • ISO 27001 Certified",
          "title": "Transforming Legacy Infrastructure into Resilient Digital Ecosystems",
          "subtitle": "We partner with enterprise leaders to re-architect outdated core systems into high-speed, microservice-powered cloud applications.",
          "primaryButtonText": "Consult Our Architects",
          "primaryButtonLink": "#contact",
          "imageUrl": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Average Latency Reduction",
              "value": "72%"
            },
            {
              "id": "s2",
              "label": "Enterprise Deployments",
              "value": "180+"
            },
            {
              "id": "s3",
              "label": "Infrastructure Uptime SLA",
              "value": "99.99%"
            }
          ]
        }
      },
      {
        "id": "bz5-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Engineering Pillars",
          "title": "Modern Architecture. Uncompromising Security.",
          "subtitle": "End-to-end software delivery designed for zero downtime and massive concurrent scale.",
          "items": [
            {
              "id": "nx1",
              "title": "Headless & Composable Web Systems",
              "description": "Next.js, Remix, and headless Commerce architectures delivering sub-second page loads worldwide."
            },
            {
              "id": "nx2",
              "title": "Legacy Monolith Modernization",
              "description": "Decoupling monolithic Java/PHP backends into containerized Go and Node.js microservices."
            },
            {
              "id": "nx3",
              "title": "Enterprise Data Lake & ETL Pipelines",
              "description": "Snowflake, Databricks, and Kafka real-time streaming architectures powering corporate intelligence."
            }
          ]
        }
      },
      {
        "id": "bz5-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Upgrade Your Digital Foundation Before Your Competitors Do",
          "description": "Book an exploratory discovery sprint with our principal architects and receiving a comprehensive modernization blueprint.",
          "primaryButtonText": "Request Technical Discovery",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "bz5-footer",
        "type": "footer",
        "variant": "footer-multi-column",
        "visible": true,
        "content": {
          "title": "NEXUS DIGITAL SYSTEMS",
          "copyrightText": "© 2026 Nexus Systems Group Inc. Seattle • Chicago • Frankfurt."
        }
      }
    ]
  },
  {
    "id": "biz-kineticweb-01",
    "slug": "kinetic-interactive-digital-studio",
    "name": "Kinetic Web & Interactive Studio",
    "description": "Award-winning digital agency crafting hyper-polished interactive 3D websites, Webflow Enterprise setups, and brand flagships.",
    "industryId": "business-services",
    "categoryId": "digital-agency",
    "collectionId": "growth-engine",
    "designStyle": "glass-interface",
    "featured": false,
    "tags": [
      "webflow agency",
      "interactive web",
      "awwwards",
      "threejs",
      "3d web",
      "digital experience"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bz6-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "KINETIC // LAB",
          "primaryButtonText": "Start Project",
          "primaryButtonLink": "#contact",
          "navLinks": [
            {
              "label": "Selected Works",
              "href": "#work"
            },
            {
              "label": "Interactive Motion",
              "href": "#motion"
            },
            {
              "label": "Agency Rates",
              "href": "#rates"
            }
          ]
        }
      },
      {
        "id": "bz6-hero",
        "type": "hero",
        "variant": "hero-minimal-typography",
        "visible": true,
        "content": {
          "badge": "18x Awwwards Site of the Day Winner",
          "title": "Interactive Web Experiences That Demand Attention",
          "subtitle": "We craft immersive digital storefronts, WebGL canvas motion, and friction-free user journeys that transform passive visitors into passionate brand advocates.",
          "primaryButtonText": "Explore Recent Builds",
          "primaryButtonLink": "#work",
          "imageUrl": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
        }
      },
      {
        "id": "bz6-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "badge": "Studio Capabilities",
          "title": "Where Creative Code Meets Commercial Intent",
          "subtitle": "Fluid framerate physics, responsive kinetic typography, and bulletproof CMS editors.",
          "items": [
            {
              "id": "kw1",
              "title": "WebGL & Three.js 3D Rendering",
              "description": "In-browser interactive 3D product visualizers and shader animations maintaining 60 FPS across mobile and desktop."
            },
            {
              "id": "kw2",
              "title": "Webflow Enterprise Systems",
              "description": "Design-systemized component libraries enabling marketing teams to launch landing pages in minutes without developers."
            },
            {
              "id": "kw3",
              "title": "Micro-Interactions & Audio Design",
              "description": "Subtle haptic-style audio clicks, hover physics, and magnetic buttons that make every interaction delightful."
            }
          ]
        }
      },
      {
        "id": "bz6-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Have an Ambitious Digital Flagship in Mind?",
          "description": "We take on just 4 flagship redesigns per quarter to guarantee obsessive attention to detail.",
          "primaryButtonText": "Inquire About Q3 Slots",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "bz6-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "KINETIC INTERACTIVE STUDIO",
          "copyrightText": "© 2026 Kinetic Digital LLC. Stockholm • London • Tokyo."
        }
      }
    ]
  },
  {
    "id": "biz-ateliermono-01",
    "slug": "atelier-mono-brand-identity-studio",
    "name": "Atelier Mono Brand Architecture",
    "description": "High-end branding consultancy designing iconic visual identities, custom typography, and physical collateral for luxury houses and venture studios.",
    "industryId": "business-services",
    "categoryId": "branding-agency",
    "collectionId": "growth-engine",
    "designStyle": "luxury-editorial",
    "featured": true,
    "tags": [
      "branding agency",
      "luxury branding",
      "visual identity",
      "typography",
      "rebrand",
      "packaging"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bz7-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "ATELIER MONO",
          "primaryButtonText": "Initiate Commission",
          "primaryButtonLink": "#contact",
          "navLinks": [
            {
              "label": "Archive",
              "href": "#archive"
            },
            {
              "label": "Philosophy",
              "href": "#philosophy"
            },
            {
              "label": "Discipline",
              "href": "#services"
            }
          ]
        }
      },
      {
        "id": "bz7-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Brand Strategy • Typographic Direction • Sensory Identity",
          "title": "Enduring Identity Systems Engineered for the World’s Discerning Brands",
          "subtitle": "We strip away noise to reveal the immutable essence of your brand, translating it into bespoke letterforms, tactile materials, and commanding digital presence.",
          "primaryButtonText": "View Selected Rebrands",
          "primaryButtonLink": "#archive",
          "imageUrl": "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Global Design Honors",
              "value": "46"
            },
            {
              "id": "s2",
              "label": "Average Valuation Lift Post-Rebrand",
              "value": "3.4x"
            },
            {
              "id": "s3",
              "label": "Centuries of Collective Expertise",
              "value": "75 Yrs"
            }
          ]
        }
      },
      {
        "id": "bz7-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "Areas of Mastery",
          "title": "Total Brand Orchestration",
          "subtitle": "From initial brand audit to definitive brand guidelines and bespoke foundry typefaces.",
          "items": [
            {
              "id": "am1",
              "title": "Brand Positioning & Narrative Architecture",
              "description": "Defining your unassailable market moat, archetypal voice, and foundational storytelling manifesto."
            },
            {
              "id": "am2",
              "title": "Custom Variable Type Foundry",
              "description": "Commissioning proprietary corporate typefaces that cannot be duplicated or licensed by competitors."
            },
            {
              "id": "am3",
              "title": "Sensory Packaging & Tactile Collateral",
              "description": "Custom foil stamping, heavyweight cotton stocks, FSC-certified unboxing suites, and signature scent guidance."
            }
          ]
        }
      },
      {
        "id": "bz7-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Shape How Your Company Is Remembered for Decades",
          "description": "We collaborate closely with founders and executive boards to deliver transformative brand milestones.",
          "primaryButtonText": "Request Agency Dossier",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "bz7-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "ATELIER MONO BRAND ARCHITECTS",
          "copyrightText": "© 2026 Atelier Mono LLC. Zurich • Milan • New York."
        }
      }
    ]
  },
  {
    "id": "biz-typocraft-01",
    "slug": "typocraft-packaging-and-identity",
    "name": "TypoCraft Packaging & Consumer Identity",
    "description": "Bespoke packaging design and shelf-presence identity agency for premium spirits, gourmet foods, and cosmetic houses.",
    "industryId": "business-services",
    "categoryId": "branding-agency",
    "collectionId": "growth-engine",
    "designStyle": "organic-natural",
    "featured": false,
    "tags": [
      "packaging design",
      "branding",
      "consumer goods",
      "cpg branding",
      "labels",
      "sustainable packaging"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bz8-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "TYPOCRAFT",
          "primaryButtonText": "Start Packaging Brief",
          "primaryButtonLink": "#brief",
          "navLinks": [
            {
              "label": "Shelf Case Studies",
              "href": "#shelf"
            },
            {
              "label": "Materials & Dielines",
              "href": "#materials"
            },
            {
              "label": "Sustainability",
              "href": "#eco"
            }
          ]
        }
      },
      {
        "id": "bz8-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "CPG Design Agency of the Year • Dieline Awards Winner",
          "title": "Packaging That Converts Casual Browsers into Lifelong Brand Devotees",
          "subtitle": "We craft tactile glass silhouettes, textured labels, and unboxing rituals that dominate retail shelves and Instagram unboxings alike.",
          "primaryButtonText": "Explore Shelf Portfolio",
          "primaryButtonLink": "#shelf",
          "imageUrl": "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Retail Sell-Through Increase",
              "value": "+38%"
            },
            {
              "id": "s2",
              "label": "Skus Designed & Launched",
              "value": "420+"
            },
            {
              "id": "s3",
              "label": "Dieline Global Awards",
              "value": "14"
            }
          ]
        }
      },
      {
        "id": "bz8-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "CPG Capabilities",
          "title": "From Concept Sketch to High-Speed Production Lines",
          "subtitle": "Engineered for regulatory compliance, durable transit, and irresistible touch.",
          "items": [
            {
              "id": "tc1",
              "title": "Structural Bottle & Vessel Modeling",
              "description": "Custom 3D bottle geometry, ergonomic cap tooling, and embossed glass molds."
            },
            {
              "id": "tc2",
              "title": "Sustainable Substrate Consultation",
              "description": "Mushroom mycelium packaging, post-consumer ocean plastics, and seed-embedded paper stocks."
            },
            {
              "id": "tc3",
              "title": "Print Vendor Pre-Press Management",
              "description": "On-site press checks, color separations, spot varnishes, and hot foil stamp quality control."
            }
          ]
        }
      },
      {
        "id": "bz8-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Launch a Product Package People Refuse to Throw Away",
          "description": "Share your retail timeline and target market for a comprehensive packaging feasibility study.",
          "primaryButtonText": "Request Packaging Consultation",
          "primaryButtonLink": "#brief"
        }
      },
      {
        "id": "bz8-footer",
        "type": "footer",
        "variant": "footer-multi-column",
        "visible": true,
        "content": {
          "title": "TYPOCRAFT PACKAGING CO.",
          "copyrightText": "© 2026 TypoCraft Studios. Portland • Copenhagen."
        }
      }
    ]
  },
  {
    "id": "biz-formfactor-01",
    "slug": "formfactor-industrial-design-studio",
    "name": "FormFactor Industrial & Physical Design",
    "description": "Silicon Valley industrial design and physical ergonomics consultancy shaping consumer electronics, medical hardware, and robotics.",
    "industryId": "business-services",
    "categoryId": "design-studio",
    "collectionId": "growth-engine",
    "designStyle": "minimal-neutral",
    "featured": true,
    "tags": [
      "industrial design",
      "hardware",
      "cad engineering",
      "ergonomics",
      "prototyping",
      "product design"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bz9-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "FORMFACTOR",
          "primaryButtonText": "Engage Studio",
          "primaryButtonLink": "#contact",
          "navLinks": [
            {
              "label": "Hardware Works",
              "href": "#hardware"
            },
            {
              "label": "Prototyping Lab",
              "href": "#lab"
            },
            {
              "label": "Manufacturing",
              "href": "#mfg"
            }
          ]
        }
      },
      {
        "id": "bz9-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Red Dot: Best of the Best 2025 • iF Gold Award",
          "title": "Sculpting The Physical Hardware of Tomorrow",
          "subtitle": "We translate complex internal electronics into elegant, manufacturable, and deeply ergonomic physical products that delight human hands.",
          "primaryButtonText": "View Hardware Portfolio",
          "primaryButtonLink": "#hardware",
          "imageUrl": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Units Manufactured Globally",
              "value": "25M+"
            },
            {
              "id": "s2",
              "label": "Design Utility Patents",
              "value": "88"
            },
            {
              "id": "s3",
              "label": "Red Dot & iF Awards",
              "value": "31"
            }
          ]
        }
      },
      {
        "id": "bz9-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Engineering & Design Sprints",
          "title": "From Napkin Sketch to Mass Production Tooling",
          "subtitle": "Collaborative development with mechanical engineering teams in Shenzhen and North America.",
          "items": [
            {
              "id": "ff1",
              "title": "Class-A Surface CAD Modeling",
              "description": "Parametric Rhino and SolidWorks surface modeling tuned for high-pressure injection molding."
            },
            {
              "id": "ff2",
              "title": "Rapid In-House CNC & SLS Prototyping",
              "description": "Functional proof-of-concept models fabricated in our rapid lab within 48 hours for ergonomics testing."
            },
            {
              "id": "ff3",
              "title": "DFM & Tooling Optimization",
              "description": "Draft angles, parting lines, gate locations, and ultrasonic weld joints engineered directly for factory lines."
            }
          ]
        }
      },
      {
        "id": "bz9-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Bring Your Physical Device to Life with Unrivaled Craft",
          "description": "Schedule a confidential NDA engineering session with our partners in San Francisco.",
          "primaryButtonText": "Request Hardware Brief",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "bz9-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "FORMFACTOR INDUSTRIAL DESIGN",
          "copyrightText": "© 2026 FormFactor Studios Inc. San Francisco • Munich."
        }
      }
    ]
  },
  {
    "id": "biz-prismaui-01",
    "slug": "prisma-enterprise-design-systems",
    "name": "Prisma Enterprise Design Systems",
    "description": "Design system architects crafting unified Figma libraries, accessible web component tokens, and multi-platform UX standards.",
    "industryId": "business-services",
    "categoryId": "design-studio",
    "collectionId": "growth-engine",
    "designStyle": "technology-gradient",
    "featured": false,
    "tags": [
      "design systems",
      "ui ux",
      "figma tokens",
      "accessibility",
      "enterprise ux",
      "design ops"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bz10-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "PRISMA // SYSTEMS",
          "primaryButtonText": "Audit Your System",
          "primaryButtonLink": "#audit",
          "navLinks": [
            {
              "label": "Component Architecture",
              "href": "#tokens"
            },
            {
              "label": "Case Studies",
              "href": "#studies"
            },
            {
              "label": "DesignOps",
              "href": "#ops"
            }
          ]
        }
      },
      {
        "id": "bz10-hero",
        "type": "hero",
        "variant": "hero-bento",
        "visible": true,
        "content": {
          "badge": "Design System Infrastructure for 500+ Engineers",
          "title": "Ship Cohesive, Accessible Digital Products at 10x Velocity",
          "subtitle": "We eliminate product UI debt by architecting multi-brand design token engines that synchronize seamlessly between Figma and React codebases.",
          "primaryButtonText": "Request Design System Audit",
          "primaryButtonLink": "#audit",
          "imageUrl": "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Engineering Hours Saved / Month",
              "value": "450+ Hrs"
            },
            {
              "id": "s2",
              "label": "WCAG 2.1 AA Compliance",
              "value": "100%"
            },
            {
              "id": "s3",
              "label": "Synchronized Web & Native Platforms",
              "value": "4 Ecosystems"
            }
          ]
        }
      },
      {
        "id": "bz10-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "badge": "DesignOps Practice",
          "title": "A Living Bridge Between Design and Engineering",
          "subtitle": "Stop re-inventing buttons and forms. Provide your engineering team with self-documenting primitives.",
          "items": [
            {
              "id": "pui1",
              "title": "Automated Style Dictionary Tokens",
              "description": "Zero-drift JSON tokens compiling automatically to CSS variables, Tailwind presets, iOS Swift, and Android XML."
            },
            {
              "id": "pui2",
              "title": "Storybook & Interactive Documentation",
              "description": "Comprehensive live code component showcases complete with accessibility audits and usage guidelines."
            },
            {
              "id": "pui3",
              "title": "Enterprise Design Governance & Training",
              "description": "Workshops and contribution models empowering 40+ cross-functional teams to build without fragmentation."
            }
          ]
        }
      },
      {
        "id": "bz10-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "End Product Inconsistency Across Your Enterprise",
          "description": "Our senior DesignOps leads will conduct a 2-week architectural assessment of your existing UI repos.",
          "primaryButtonText": "Book DesignOps Assessment",
          "primaryButtonLink": "#audit"
        }
      },
      {
        "id": "bz10-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "PRISMA DESIGN SYSTEMS",
          "copyrightText": "© 2026 Prisma Systems Inc. Austin • Toronto • London."
        }
      }
    ]
  },
  {
    "id": "biz-strataadvisory-01",
    "slug": "strata-corporate-strategy-and-ma",
    "name": "Strata Strategy & Capital Advisory",
    "description": "Premier tier corporate advisory firm counseling multinational boards on cross-border M&A, market entry, and capital allocation.",
    "industryId": "business-services",
    "categoryId": "consulting-firm",
    "collectionId": "growth-engine",
    "designStyle": "modern-corporate",
    "featured": true,
    "tags": [
      "strategy consulting",
      "ma advisory",
      "corporate finance",
      "management consulting",
      "board advisory",
      "due diligence"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bz11-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "STRATA ADVISORY",
          "primaryButtonText": "Schedule Confidential Briefing",
          "primaryButtonLink": "#contact",
          "navLinks": [
            {
              "label": "Strategic Practices",
              "href": "#practices"
            },
            {
              "label": "Transaction History",
              "href": "#transactions"
            },
            {
              "label": "Senior Partners",
              "href": "#partners"
            }
          ]
        }
      },
      {
        "id": "bz11-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "$42B+ in Completed M&A Transactions Advised",
          "title": "Strategic Clarity for High-Stakes Corporate Transitions",
          "subtitle": "We provide executive boards and private equity sponsors with rigorous economic modeling, competitive intelligence, and transaction execution.",
          "primaryButtonText": "Explore Advisory Practices",
          "primaryButtonLink": "#practices",
          "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Closed Deal Volume",
              "value": "$42B+"
            },
            {
              "id": "s2",
              "label": "Average Shareholder Premium",
              "value": "28.4%"
            },
            {
              "id": "s3",
              "label": "Global Advisory Hubs",
              "value": "11 Offices"
            }
          ]
        }
      },
      {
        "id": "bz11-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Advisory Practice Areas",
          "title": "Rigorous Analytical Rigor. Unbiased Perspective.",
          "subtitle": "Independent counsel focused solely on long-term shareholder value creation.",
          "items": [
            {
              "id": "st1",
              "title": "Cross-Border Buy-Side Due Diligence",
              "description": "Comprehensive commercial, technology, and synergy validation for acquisitions from $100M to $10B."
            },
            {
              "id": "st2",
              "title": "Corporate Carve-Out & Divestiture",
              "description": "Structuring complex operational separations to maximize sale multiples and preserve business continuity."
            },
            {
              "id": "st3",
              "title": "Antitrust & Regulatory Navigation",
              "description": "Economic defense modeling and regulatory presentation before the FTC, DOJ, and European Commission."
            }
          ]
        }
      },
      {
        "id": "bz11-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Navigating an Upcoming Transaction or Strategic Crossroads?",
          "description": "Our senior managing directors hold strictly confidential preliminary discussions under mutual NDA.",
          "primaryButtonText": "Connect with Managing Director",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "bz11-footer",
        "type": "footer",
        "variant": "footer-multi-column",
        "visible": true,
        "content": {
          "title": "STRATA CAPITAL ADVISORY",
          "copyrightText": "© 2026 Strata Strategy Partners LLP. New York • London • Singapore • Zurich."
        }
      }
    ]
  },
  {
    "id": "biz-valorexec-01",
    "slug": "valor-operations-and-restructuring",
    "name": "Valor Operations & Supply Chain Advisory",
    "description": "Turnaround and operational restructuring advisors optimizing global supply chains, manufacturing footprint, and EBITDA margins.",
    "industryId": "business-services",
    "categoryId": "consulting-firm",
    "collectionId": "growth-engine",
    "designStyle": "brutalist-clean",
    "featured": false,
    "tags": [
      "operations consulting",
      "supply chain",
      "ebitda optimization",
      "turnaround",
      "manufacturing",
      "lean sigma"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bz12-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "VALOR // OPS",
          "primaryButtonText": "Consult Partners",
          "primaryButtonLink": "#contact",
          "navLinks": [
            {
              "label": "EBITDA Programs",
              "href": "#ebitda"
            },
            {
              "label": "Supply Chain Audits",
              "href": "#supply"
            },
            {
              "label": "Case Studies",
              "href": "#cases"
            }
          ]
        }
      },
      {
        "id": "bz12-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Average 340 bps EBITDA Expansion Across 85 Engagements",
          "title": "Unlocking Operational Resilience and Rapid Margin Expansion",
          "subtitle": "We deploy seasoned C-suite interim operators on-site to overhaul struggling supply chains, eliminate warehouse bottlenecks, and renegotiate procurement.",
          "primaryButtonText": "Explore Operational Results",
          "primaryButtonLink": "#cases",
          "imageUrl": "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Cumulative Client Cost Savings",
              "value": "$2.1B+"
            },
            {
              "id": "s2",
              "label": "Warehouse Throughput Lift",
              "value": "+44%"
            },
            {
              "id": "s3",
              "label": "Average Payback Period",
              "value": "4.2 Mos"
            }
          ]
        }
      },
      {
        "id": "bz12-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Operational Playbooks",
          "title": "Hands-On Shop Floor Execution. Zero Ivory Tower Theories.",
          "subtitle": "We work side-by-side with plant managers and procurement leads to achieve sustainable cash generation.",
          "items": [
            {
              "id": "vo1",
              "title": "Strategic Sourcing & Vendor Auctions",
              "description": "Consolidating fragmented vendor bases through algorithmic Dutch reverse auctions to trim 12-25% from direct COGS."
            },
            {
              "id": "vo2",
              "title": "Inventory Working Capital Reduction",
              "description": "Implementing dynamic safety stock algorithms that free up millions in tied-up warehouse working capital."
            },
            {
              "id": "vo3",
              "title": "Nearshoring & Geopolitical Risk Hedging",
              "description": "Realigning production footprints across North America and Eastern Europe to insulate against tariff shocks."
            }
          ]
        }
      },
      {
        "id": "bz12-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Identify 15-20% Procurement Savings in 30 Days",
          "description": "Our diagnostic team benchmarks your line-item expenditures against our proprietary industrial database.",
          "primaryButtonText": "Schedule Spend Diagnostic",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "bz12-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "VALOR OPERATIONS PARTNERS",
          "copyrightText": "© 2026 Valor Advisory Group. Chicago • Detroit • Houston."
        }
      }
    ]
  },
  {
    "id": "biz-claritygrowth-01",
    "slug": "clarity-fractional-coo-advisory",
    "name": "Clarity Fractional COO & Scale Advisory",
    "description": "Embedded Chief Operating Officers helping founder-led companies transition from chaotic $2M ARR to structured $20M+ scale.",
    "industryId": "business-services",
    "categoryId": "business-consultant",
    "collectionId": "growth-engine",
    "designStyle": "minimal-neutral",
    "featured": false,
    "tags": [
      "fractional coo",
      "business consultant",
      "operating cadence",
      "scaling",
      "okr alignment",
      "founder advisory"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bz13-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "CLARITY // COO",
          "primaryButtonText": "Book Founder Intake",
          "primaryButtonLink": "#intake",
          "navLinks": [
            {
              "label": "Operating System",
              "href": "#system"
            },
            {
              "label": "Founder Testimonials",
              "href": "#proof"
            },
            {
              "label": "Engagement Models",
              "href": "#models"
            }
          ]
        }
      },
      {
        "id": "bz13-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Operating Cadence for High-Velocity Scale-Ups",
          "title": "Get Out of Daily Fires. Build a Company That Runs Like Clockwork.",
          "subtitle": "We embed as your part-time Fractional COO to install proven accountability rhythms, hire your executive leadership bench, and streamline messy internal processes.",
          "primaryButtonText": "Book Founder Strategy Call",
          "primaryButtonLink": "#intake",
          "imageUrl": "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Founders Scaled Past $10M ARR",
              "value": "48+"
            },
            {
              "id": "s2",
              "label": "Average Weekly Founder Time Saved",
              "value": "22 Hrs"
            },
            {
              "id": "s3",
              "label": "Leadership Team Retention",
              "value": "96%"
            }
          ]
        }
      },
      {
        "id": "bz13-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Execution Architecture",
          "title": "Structured Operational Cadence",
          "subtitle": "Transform your organization from reactive chaos into predictable quarterly execution.",
          "items": [
            {
              "id": "cl1",
              "title": "Quarterly OKR & Scorecard Cadence",
              "description": "Instituting measurable department scorecards that cascade strategic goals into weekly team accountabilities."
            },
            {
              "id": "cl2",
              "title": "Executive Hiring & Org Chart Design",
              "description": "Writing precise job scorecards and vetting full-time VP of Sales, VP of Eng, and CFO candidates."
            },
            {
              "id": "cl3",
              "title": "Cross-Department Bottleneck Elimination",
              "description": "Aligning product roadmap releases with sales quota commitments and customer success onboarding bandwidth."
            }
          ]
        }
      },
      {
        "id": "bz13-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Stop Playing Chief Everything Officer",
          "description": "Get an executive-level operational roadmap during a 60-minute confidential operational triage call.",
          "primaryButtonText": "Schedule Operational Triage",
          "primaryButtonLink": "#intake"
        }
      },
      {
        "id": "bz13-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "CLARITY FRACTIONAL COO GROUP",
          "copyrightText": "© 2026 Clarity Scaling Advisory LLC. Denver • Boston."
        }
      }
    ]
  },
  {
    "id": "biz-scalingformula-01",
    "slug": "scaling-formula-b2b-sales-engine",
    "name": "Scaling Formula B2B Revenue Advisory",
    "description": "Enterprise revenue architecture consultancy building outbound outbound SDR playbooks, compensation plans, and pipeline engines.",
    "industryId": "business-services",
    "categoryId": "business-consultant",
    "collectionId": "growth-engine",
    "designStyle": "bold-creative",
    "featured": false,
    "tags": [
      "sales consultant",
      "b2b revenue",
      "pipeline generation",
      "sales enablement",
      "sdr playbook",
      "deal desk"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bz14-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "SCALING FORMULA",
          "primaryButtonText": "Audit Sales Funnel",
          "primaryButtonLink": "#audit",
          "navLinks": [
            {
              "label": "Playbooks",
              "href": "#playbooks"
            },
            {
              "label": "Outbound Math",
              "href": "#math"
            },
            {
              "label": "Client Results",
              "href": "#results"
            }
          ]
        }
      },
      {
        "id": "bz14-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "$380M In Net New Enterprise Pipeline Built",
          "title": "We Turn Inconsistent Sales Pipelines into Reliable Revenue Machines",
          "subtitle": "We rebuild your outbound messaging, configure high-converting CRM stages, train your account executives on MEDDICC, and fix deal slippage.",
          "primaryButtonText": "Request Pipeline Audit",
          "primaryButtonLink": "#audit",
          "imageUrl": "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Average Pipeline Win-Rate Lift",
              "value": "+32%"
            },
            {
              "id": "s2",
              "label": "Sales Cycle Compression",
              "value": "-24 Days"
            },
            {
              "id": "s3",
              "label": "Average Contract Value (ACV)",
              "value": "+65%"
            }
          ]
        }
      },
      {
        "id": "bz14-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Revenue Architecture",
          "title": "Scientific B2B Pipeline Engineering",
          "subtitle": "Eliminate guesswork from your sales floor with verified enterprise execution frameworks.",
          "items": [
            {
              "id": "sf1",
              "title": "MEDDICC Enterprise Qualification Cadence",
              "description": "Instituting rigorous deal qualification criteria that stop reps from chasing unbudgeted ghost prospects."
            },
            {
              "id": "sf2",
              "title": "Cold Outbound Multi-Touch Playbooks",
              "description": "Hyper-personalized trigger-based cold email and LinkedIn sequences delivering 18%+ positive reply rates."
            },
            {
              "id": "sf3",
              "title": "Commission Comp Plans & Deal Desk Rules",
              "description": "Incentive structures that reward multi-year prepayments and high-margin ARR over discounted volume."
            }
          ]
        }
      },
      {
        "id": "bz14-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Diagnose Exactly Why Deals Are Stalling in Your Pipeline",
          "description": "Our former VP of Sales consultants review your last 50 closed-lost opportunities to isolate root conversion issues.",
          "primaryButtonText": "Book 50-Deal Win/Loss Audit",
          "primaryButtonLink": "#audit"
        }
      },
      {
        "id": "bz14-footer",
        "type": "footer",
        "variant": "footer-multi-column",
        "visible": true,
        "content": {
          "title": "SCALING FORMULA ADVISORY",
          "copyrightText": "© 2026 Scaling Formula Group Inc. New York • Atlanta."
        }
      }
    ]
  },
  {
    "id": "biz-talentsphere-01",
    "slug": "talentsphere-executive-search-partners",
    "name": "TalentSphere Global Executive Search",
    "description": "Retained executive search firm placing world-class Chief Executive, Financial, and Technology Officers in high-growth companies.",
    "industryId": "business-services",
    "categoryId": "recruitment-agency",
    "collectionId": "growth-engine",
    "designStyle": "modern-corporate",
    "featured": true,
    "tags": [
      "executive search",
      "headhunting",
      "c-suite recruitment",
      "board placement",
      "talent advisory",
      "leadership"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bz15-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "TALENTSPHERE",
          "primaryButtonText": "Retain Executive Search",
          "primaryButtonLink": "#retain",
          "navLinks": [
            {
              "label": "Practices",
              "href": "#practices"
            },
            {
              "label": "Completed Searches",
              "href": "#searches"
            },
            {
              "label": "Assessment Method",
              "href": "#method"
            }
          ]
        }
      },
      {
        "id": "bz15-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "98.4% Retention Rate at 24 Months • Retained Search",
          "title": "Placing Transformational C-Suite Leaders Across the Globe",
          "subtitle": "We discreetly identify, assess, and persuade elite executives who are not on job boards, matching them with forward-thinking boards and private equity sponsors.",
          "primaryButtonText": "Initiate Executive Search",
          "primaryButtonLink": "#retain",
          "imageUrl": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Average Days to Shortlist",
              "value": "28 Days"
            },
            {
              "id": "s2",
              "label": "C-Suite Placements Completed",
              "value": "620+"
            },
            {
              "id": "s3",
              "label": "Diversity Placement Ratio",
              "value": "46%"
            }
          ]
        }
      },
      {
        "id": "bz15-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Executive Disciplines",
          "title": "Comprehensive Leadership Placement",
          "subtitle": "Deeply vetted executive matching backed by behavioral psychological benchmarking.",
          "items": [
            {
              "id": "ts1",
              "title": "CEO & Independent Board Director Search",
              "description": "Identifying visionary chiefs capable of public offerings, international expansion, and generational turnaround."
            },
            {
              "id": "ts2",
              "title": "CFO & Capital Markets Leadership",
              "description": "Recruiting capital allocation masters with extensive Wall Street, IPO filing, and syndicated credit credentials."
            },
            {
              "id": "ts3",
              "title": "CTO, CPTO & VP of AI Architecture",
              "description": "Extracting battle-tested engineering leadership from Big Tech hyperscalers and frontier AI labs."
            }
          ]
        }
      },
      {
        "id": "bz15-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "The Cost of a Mis-Hire at the C-Suite Is Catastrophic",
          "description": "Partner with senior headhunters who possess direct personal relationships with industry-leading executives.",
          "primaryButtonText": "Consult Our Practice Leaders",
          "primaryButtonLink": "#retain"
        }
      },
      {
        "id": "bz15-footer",
        "type": "footer",
        "variant": "footer-multi-column",
        "visible": true,
        "content": {
          "title": "TALENTSPHERE EXECUTIVE SEARCH",
          "copyrightText": "© 2026 TalentSphere Partners Inc. New York • London • Singapore."
        }
      }
    ]
  },
  {
    "id": "biz-techrecruit-01",
    "slug": "techrecruit-principal-staffing-partners",
    "name": "TechRecruit Elite Engineering Placement",
    "description": "Specialized technical recruiter placing Staff, Principal, and VP of Engineering talent in venture-backed software and crypto protocols.",
    "industryId": "business-services",
    "categoryId": "recruitment-agency",
    "collectionId": "growth-engine",
    "designStyle": "technology-gradient",
    "featured": false,
    "tags": [
      "tech recruiting",
      "developer staffing",
      "staff engineer",
      "rust developers",
      "engineering leads",
      "remote talent"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bz16-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "TECHRECRUIT",
          "primaryButtonText": "Hire Principal Engineers",
          "primaryButtonLink": "#hire",
          "navLinks": [
            {
              "label": "Talent Pool",
              "href": "#pool"
            },
            {
              "label": "Technical Screening",
              "href": "#vetting"
            },
            {
              "label": "Employer Pricing",
              "href": "#pricing"
            }
          ]
        }
      },
      {
        "id": "bz16-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Top 1% Distributed Systems, Rust, and LLM Engineers",
          "title": "Hire Senior Software Engineers Who Actually Ship Production Code",
          "subtitle": "Our technical sourcers are former senior developers who review GitHub PRs, system architecture designs, and LeetCode benchmarks before you ever see a resume.",
          "primaryButtonText": "Request Candidate Roster",
          "primaryButtonLink": "#hire",
          "imageUrl": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Average Time-to-Offer",
              "value": "18 Days"
            },
            {
              "id": "s2",
              "label": "First-Year Retention Rate",
              "value": "96.2%"
            },
            {
              "id": "s3",
              "label": "Pre-Vetted Technical Bench",
              "value": "3,400+ Devs"
            }
          ]
        }
      },
      {
        "id": "bz16-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "badge": "Specialized Staffing Pods",
          "title": "Zero Resume Spam. Pure Technical Alignment.",
          "subtitle": "We only present candidates who meet your exact language, distributed scale, and timezone demands.",
          "items": [
            {
              "id": "tr1",
              "title": "Low-Latency Rust & Go Infrastructure",
              "description": "Engineers experienced in memory-safe systems, Raft consensus algorithms, and high-frequency order books."
            },
            {
              "id": "tr2",
              "title": "Frontier AI & ML Pipeline Engineers",
              "description": "Talent specialized in PyTorch model parallelization, CUDA kernels, and enterprise RAG deployments."
            },
            {
              "id": "tr3",
              "title": "Site Reliability & Kubernetes Architects",
              "description": "DevOps leads proficient in multi-region Terraform infrastructure and zero-trust security postures."
            }
          ]
        }
      },
      {
        "id": "bz16-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Scale Your Engineering Squad Without Compromising Bar",
          "description": "Receive 3 meticulously vetted Staff or Principal candidates tailored to your stack within 5 business days.",
          "primaryButtonText": "Start Technical Hiring Sprint",
          "primaryButtonLink": "#hire"
        }
      },
      {
        "id": "bz16-footer",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "TECHRECRUIT STAFFING CORP",
          "copyrightText": "© 2026 TechRecruit Global. San Francisco • Berlin • Remote."
        }
      }
    ]
  },
  {
    "id": "biz-culturefirst-01",
    "slug": "culture-first-people-operations",
    "name": "CultureFirst People Ops & DE&I Advisory",
    "description": "Modern human resources consultancy designing remote-first compensation bands, employee handbooks, and executive coaching programs.",
    "industryId": "business-services",
    "categoryId": "hr-consultancy",
    "collectionId": "growth-engine",
    "designStyle": "soft-pastel",
    "featured": false,
    "tags": [
      "hr consultancy",
      "people operations",
      "compensation bands",
      "remote work policy",
      "dei strategy",
      "handbook"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bz17-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "CULTUREFIRST",
          "primaryButtonText": "Book HR Discovery",
          "primaryButtonLink": "#contact",
          "navLinks": [
            {
              "label": "People Systems",
              "href": "#systems"
            },
            {
              "label": "Comp Benchmarks",
              "href": "#comp"
            },
            {
              "label": "Compliance",
              "href": "#compliance"
            }
          ]
        }
      },
      {
        "id": "bz17-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Global Remote HR Compliance Across 42 Countries",
          "title": "Build a High-Performance Culture That Attracts and Retains the Best",
          "subtitle": "We modernize outdated HR practices into transparent compensation bands, humane performance reviews, and seamless international employment compliance.",
          "primaryButtonText": "Modernize Your People Ops",
          "primaryButtonLink": "#contact",
          "imageUrl": "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Voluntary Turnover Reduction",
              "value": "-38%"
            },
            {
              "id": "s2",
              "label": "Organizations Modernized",
              "value": "240+"
            },
            {
              "id": "s3",
              "label": "eNPS Score Improvement",
              "value": "+42 Pts"
            }
          ]
        }
      },
      {
        "id": "bz17-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "People Ops Pillars",
          "title": "People Strategy for Progressive Companies",
          "subtitle": "Protect your organization while empowering employees to do the best work of their lives.",
          "items": [
            {
              "id": "cf1",
              "title": "Transparent Leveling & Compensation Bands",
              "description": "Radford and Pave benchmarked salary, bonus, and equity bands preventing wage compression and bias."
            },
            {
              "id": "cf2",
              "title": "Remote-First Employee Handbooks",
              "description": "Bulletproof, legally compliant company policies designed for async communication and multi-jurisdiction hiring."
            },
            {
              "id": "cf3",
              "title": "Manager Enablement & 360 Feedback",
              "description": "Practical leadership workshops teaching first-time managers how to run productive 1-on-1s and performance turnarounds."
            }
          ]
        }
      },
      {
        "id": "bz17-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Is Your Organization Ready to Scale from 30 to 300 People?",
          "description": "Receive our comprehensive 40-point People Operations Health Checklist during an introductory briefing.",
          "primaryButtonText": "Request Free Health Checklist",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "bz17-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "CULTUREFIRST PEOPLE ADVISORY",
          "copyrightText": "© 2026 CultureFirst LLC. San Francisco • London • Toronto."
        }
      }
    ]
  },
  {
    "id": "biz-sterlingcpa-01",
    "slug": "sterling-cpa-and-fractional-cfo",
    "name": "Sterling CPA & Financial Advisory",
    "description": "Full-service CPA firm providing GAAP financial audits, 409A valuations, R&D tax credit studies, and fractional CFO leadership.",
    "industryId": "business-services",
    "categoryId": "accounting-firm",
    "collectionId": "growth-engine",
    "designStyle": "modern-corporate",
    "featured": true,
    "tags": [
      "cpa firm",
      "accounting",
      "fractional cfo",
      "gaap audit",
      "409a valuation",
      "rd tax credits"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bz18-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "STERLING // CPA",
          "primaryButtonText": "Consult a CPA",
          "primaryButtonLink": "#consult",
          "navLinks": [
            {
              "label": "Audit Services",
              "href": "#audit"
            },
            {
              "label": "Fractional CFO",
              "href": "#cfo"
            },
            {
              "label": "Tax Credits",
              "href": "#tax"
            }
          ]
        }
      },
      {
        "id": "bz18-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Over $45M in Claimed R&D Credits • Big Four Alum Partners",
          "title": "Institutional Accounting and Strategic Capital Stewardship",
          "subtitle": "We provide high-growth enterprises and venture-backed founders with spotless GAAP audit readiness, cash burn modeling, and investor-grade reporting.",
          "primaryButtonText": "Speak with Senior CPA",
          "primaryButtonLink": "#consult",
          "imageUrl": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Audit Clean Opinion Rate",
              "value": "100%"
            },
            {
              "id": "s2",
              "label": "Average R&D Tax Refund",
              "value": "$180K"
            },
            {
              "id": "s3",
              "label": "Client Asset Value Managed",
              "value": "$850M+"
            }
          ]
        }
      },
      {
        "id": "bz18-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Financial Practices",
          "title": "Precision Accounting for Venture and Private Equity Scrutiny",
          "subtitle": "Never let poor bookkeeping derail a critical funding round or acquisition due diligence.",
          "items": [
            {
              "id": "sc1",
              "title": "GAAP Financial Audits & Reviews",
              "description": "Rigorous revenue recognition (ASC 606), stock compensation expense (ASC 718), and balance sheet reconciliations."
            },
            {
              "id": "sc2",
              "title": "Fractional CFO Capital Planning",
              "description": "Multi-scenario runway forecasting, board deck preparation, debt facility covenant tracking, and banking syndication."
            },
            {
              "id": "sc3",
              "title": "Federal & State R&D Tax Credits",
              "description": "Engineering-based tax credit studies recovering up to $500,000 annually against corporate payroll taxes."
            }
          ]
        }
      },
      {
        "id": "bz18-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Prepare Your Balance Sheet for Your Next Institutional Round",
          "description": "Our senior partners review your chart of accounts and revenue recognition policies during a preliminary consultation.",
          "primaryButtonText": "Schedule Financial Review",
          "primaryButtonLink": "#consult"
        }
      },
      {
        "id": "bz18-footer",
        "type": "footer",
        "variant": "footer-multi-column",
        "visible": true,
        "content": {
          "title": "STERLING CPA PARTNERS",
          "copyrightText": "© 2026 Sterling CPA LLP. New York • Boston • Austin."
        }
      }
    ]
  },
  {
    "id": "biz-ledgerworks-01",
    "slug": "ledgerworks-cloud-bookkeeping-services",
    "name": "LedgerWorks Cloud Bookkeeping & Tax",
    "description": "Turnkey cloud bookkeeping, payroll automation, and monthly financial reporting for modern digital agencies and e-commerce stores.",
    "industryId": "business-services",
    "categoryId": "accounting-firm",
    "collectionId": "growth-engine",
    "designStyle": "minimal-neutral",
    "featured": false,
    "tags": [
      "bookkeeping",
      "quickbooks online",
      "xero",
      "payroll automation",
      "monthly close",
      "ecommerce accounting"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bz19-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "LEDGERWORKS",
          "primaryButtonText": "Get Transparent Quote",
          "primaryButtonLink": "#pricing",
          "navLinks": [
            {
              "label": "How It Works",
              "href": "#process"
            },
            {
              "label": "Pricing Plans",
              "href": "#pricing"
            },
            {
              "label": "Integrations",
              "href": "#tools"
            }
          ]
        }
      },
      {
        "id": "bz19-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Monthly Close Completed by the 5th Business Day",
          "title": "Flawless Bookkeeping and Financial Clarity, Completely On Autopilot",
          "subtitle": "Never scramble during tax season again. We reconcile your Stripe, Shopify, and bank accounts daily with automated cloud software and dedicated CPAs.",
          "primaryButtonText": "View Flat-Rate Monthly Plans",
          "primaryButtonLink": "#pricing",
          "imageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Monthly Close Turnaround",
              "value": "5 Days"
            },
            {
              "id": "s2",
              "label": "Average Client Tax Savings",
              "value": "$14,200"
            },
            {
              "id": "s3",
              "label": "Active Monthly Clients",
              "value": "450+"
            }
          ]
        }
      },
      {
        "id": "bz19-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Turnkey Services",
          "title": "Everything Your Business Needs to Stay Financially Sound",
          "subtitle": "Transparent flat monthly pricing with zero surprise hourly bills.",
          "items": [
            {
              "id": "lw1",
              "title": "Accrual-Basis Monthly Bookkeeping",
              "description": "Daily transaction categorization, automated receipt matching, and precise multi-currency reconciliation."
            },
            {
              "id": "lw2",
              "title": "Automated Multi-State Payroll & 1099s",
              "description": "Gusto and Rippling integration handling tax withholdings, contractor filings, and benefits deductions."
            },
            {
              "id": "lw3",
              "title": "Executive KPI Dashboard & Cash Flow Runway",
              "description": "Real-time visual reports tracking gross margins, customer acquisition cost, and runway projections."
            }
          ]
        }
      },
      {
        "id": "bz19-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Hand Off Your Financial Headaches Today",
          "description": "Switch to LedgerWorks in under 48 hours. We handle all historical data cleanups seamlessly.",
          "primaryButtonText": "Schedule Free Bookkeeping Onboarding",
          "primaryButtonLink": "#pricing"
        }
      },
      {
        "id": "bz19-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "LEDGERWORKS ACCOUNTING",
          "copyrightText": "© 2026 LedgerWorks Inc. San Diego • Salt Lake City."
        }
      }
    ]
  },
  {
    "id": "biz-meridiantax-01",
    "slug": "meridian-international-tax-advisors",
    "name": "Meridian Cross-Border Tax Strategies",
    "description": "International tax consultancy specializing in transfer pricing, foreign subsidiary structuring, IP holding trusts, and expat tax mitigation.",
    "industryId": "business-services",
    "categoryId": "tax-consultant",
    "collectionId": "growth-engine",
    "designStyle": "modern-corporate",
    "featured": false,
    "tags": [
      "tax consultant",
      "international tax",
      "transfer pricing",
      "offshore structuring",
      "expat tax",
      "cross border"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bz20-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "MERIDIAN // TAX",
          "primaryButtonText": "Schedule Tax Review",
          "primaryButtonLink": "#contact",
          "navLinks": [
            {
              "label": "Transfer Pricing",
              "href": "#pricing-rules"
            },
            {
              "label": "Holding Structures",
              "href": "#holding"
            },
            {
              "label": "Global Treaties",
              "href": "#treaties"
            }
          ]
        }
      },
      {
        "id": "bz20-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "OECD BEPS 2.0 Compliant • 35 Jurisdictions Covered",
          "title": "Optimized Cross-Border Tax Architecture for Global Enterprises",
          "subtitle": "We navigate complex bilateral tax treaties, intellectual property migration, and global minimum tax frameworks to legally maximize international after-tax earnings.",
          "primaryButtonText": "Consult International Tax Partner",
          "primaryButtonLink": "#contact",
          "imageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Average Corporate Effective Tax Rate Drop",
              "value": "-8.5%"
            },
            {
              "id": "s2",
              "label": "Cross-Border Audits Defended",
              "value": "120+"
            },
            {
              "id": "s3",
              "label": "Jurisdictions Actively Advised",
              "value": "35 Nations"
            }
          ]
        }
      },
      {
        "id": "bz20-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "International Specializations",
          "title": "Global Tax Shielding and Uncompromising Compliance",
          "subtitle": "Balancing aggressive tax optimization with stringent regulatory audit defense.",
          "items": [
            {
              "id": "mt1",
              "title": "OECD Transfer Pricing Benchmarking",
              "description": "Economic intercompany royalty, management fee, and cost-sharing documentation bulletproof against tax authority audits."
            },
            {
              "id": "mt2",
              "title": "IP Migration & Holding Entity Formation",
              "description": "Structuring IP ownership hubs in low-tax jurisdictions such as Ireland, Singapore, and Switzerland with full substance."
            },
            {
              "id": "mt3",
              "title": "GILTI & Subpart F Mitigation",
              "description": "High-tax exception elections and hybrid entity structuring to eliminate double corporate taxation."
            }
          ]
        }
      },
      {
        "id": "bz20-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Are You Overpaying Taxes on Foreign Subsidiary Profits?",
          "description": "Our international tax partners will analyze your existing global entity structure under full confidentiality.",
          "primaryButtonText": "Request Confidential Tax Blueprint",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "bz20-footer",
        "type": "footer",
        "variant": "footer-multi-column",
        "visible": true,
        "content": {
          "title": "MERIDIAN TAX PARTNERS",
          "copyrightText": "© 2026 Meridian International Tax LLP. Geneva • London • Miami."
        }
      }
    ]
  },
  {
    "id": "biz-lexadvocates-01",
    "slug": "lex-advocates-venture-and-ip-law",
    "name": "Lex Advocates Tech & Venture Legal",
    "description": "Premier venture capital and intellectual property law firm structuring funding rounds, patent portfolios, and founder equity agreements.",
    "industryId": "business-services",
    "categoryId": "law-firm",
    "collectionId": "growth-engine",
    "designStyle": "luxury-editorial",
    "featured": true,
    "tags": [
      "law firm",
      "venture law",
      "ip patents",
      "safes",
      "series a",
      "founder equity",
      "corporate legal"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bz21-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "LEX ADVOCATES",
          "primaryButtonText": "Retain Counsel",
          "primaryButtonLink": "#contact",
          "navLinks": [
            {
              "label": "Venture Financings",
              "href": "#venture"
            },
            {
              "label": "Patent & IP",
              "href": "#ip"
            },
            {
              "label": "Attorneys",
              "href": "#attorneys"
            }
          ]
        }
      },
      {
        "id": "bz21-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Counsel to 300+ Venture-Backed Tech Enterprises",
          "title": "Legal Precision for Frontier Technology Innovators",
          "subtitle": "From SAFE seed financings to multi-hundred million dollar Series C syndicated rounds and defensive software patent portfolios, we safeguard founder sovereignty.",
          "primaryButtonText": "Schedule Attorney Consultation",
          "primaryButtonLink": "#contact",
          "imageUrl": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Financings Closed in 2025",
              "value": "$2.8B+"
            },
            {
              "id": "s2",
              "label": "Tech Patents Granted",
              "value": "450+"
            },
            {
              "id": "s3",
              "label": "Average Series Round Close Time",
              "value": "14 Days"
            }
          ]
        }
      },
      {
        "id": "bz21-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "Practice Areas",
          "title": "Comprehensive Technology Counsel",
          "subtitle": "Strategic legal counsel crafted specifically for high-velocity software, AI, and biotech enterprises.",
          "items": [
            {
              "id": "la1",
              "title": "NVCA & Series Preferred Financings",
              "description": "Drafting investor rights agreements, voting trusts, liquidation preferences, and anti-dilution provisions."
            },
            {
              "id": "la2",
              "title": "Defensive Patent Prosecution & Trademarks",
              "description": "Securing USPTO algorithmic utility patents and international PCT registrations to lock in your technical moat."
            },
            {
              "id": "la3",
              "title": "Commercial Licensing & SaaS Terms of Service",
              "description": "Enterprise customer master service agreements (MSAs), SLA clauses, and data protection addendums."
            }
          ]
        }
      },
      {
        "id": "bz21-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Protect Your Cap Table and Core Intellectual Moat",
          "description": "Our senior technology partners provide fixed-fee startup formation and Series financing packages.",
          "primaryButtonText": "Consult Our Legal Partners",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "bz21-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "LEX ADVOCATES LLP",
          "copyrightText": "© 2026 Lex Advocates LLP. Palo Alto • San Francisco • New York."
        }
      }
    ]
  },
  {
    "id": "biz-blackwoodlegal-01",
    "slug": "blackwood-corporate-governance-litigation",
    "name": "Blackwood & Vance Trial Attorneys",
    "description": "Formidable corporate litigation and white-collar defense boutique representing boards, executives, and financial institutions.",
    "industryId": "business-services",
    "categoryId": "law-firm",
    "collectionId": "growth-engine",
    "designStyle": "modern-corporate",
    "featured": false,
    "tags": [
      "litigation",
      "commercial law",
      "trial attorneys",
      "arbitration",
      "corporate governance",
      "dispute resolution"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bz22-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "BLACKWOOD & VANCE",
          "primaryButtonText": "Contact Senior Partner",
          "primaryButtonLink": "#contact",
          "navLinks": [
            {
              "label": "Trial Record",
              "href": "#record"
            },
            {
              "label": "Arbitration",
              "href": "#arbitration"
            },
            {
              "label": "Partners",
              "href": "#partners"
            }
          ]
        }
      },
      {
        "id": "bz22-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Chambers USA Band 1 Commercial Litigation Practice",
          "title": "Relentless Advocacy When Everything Is on the Line",
          "subtitle": "We represent corporations, institutional shareholders, and directors in bet-the-company commercial disputes, breach of fiduciary duty trials, and international arbitrations.",
          "primaryButtonText": "View Trial Verdicts",
          "primaryButtonLink": "#record",
          "imageUrl": "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Verdict & Settlement Value",
              "value": "$3.6B+"
            },
            {
              "id": "s2",
              "label": "Trial Win Rate",
              "value": "92%"
            },
            {
              "id": "s3",
              "label": "Senior Litigators",
              "value": "45 Partners"
            }
          ]
        }
      },
      {
        "id": "bz22-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "badge": "Litigation Practices",
          "title": "Decisive Legal Defense & Aggressive Prosecution",
          "subtitle": "Unrivaled courtroom courtroom preparation and sophisticated appellate advocacy.",
          "items": [
            {
              "id": "bv1",
              "title": "Shareholder & Derivative Disputes",
              "description": "Defending corporate boards against activist investor lawsuits, proxy contests, and fiduciary breach claims."
            },
            {
              "id": "bv2",
              "title": "Breach of Contract & Trade Secret Theft",
              "description": "Immediate temporary restraining orders (TROs) and preliminary injunctions halting proprietary data misappropriation."
            },
            {
              "id": "bv3",
              "title": "International Commercial Arbitration",
              "description": "Enforcing cross-border award enforcement under ICC, LCIA, and AAA arbitral rules across multiple continents."
            }
          ]
        }
      },
      {
        "id": "bz22-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Protect Your Enterprise from Catastrophic Legal Exposure",
          "description": "Our senior managing partners evaluate urgent trial and dispute matters with complete discretion.",
          "primaryButtonText": "Schedule Confidential Case Evaluation",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "bz22-footer",
        "type": "footer",
        "variant": "footer-multi-column",
        "visible": true,
        "content": {
          "title": "BLACKWOOD & VANCE TRIAL ATTORNEYS",
          "copyrightText": "© 2026 Blackwood & Vance LLP. New York • Washington D.C. • London."
        }
      }
    ]
  },
  {
    "id": "biz-monolitharch-01",
    "slug": "monolith-architectural-design-firm",
    "name": "Monolith Architectural Studio",
    "description": "International architectural practice designing monumental corporate headquarters, cultural pavilions, and sustainable timber skyscrapers.",
    "industryId": "business-services",
    "categoryId": "architecture-firm",
    "collectionId": "growth-engine",
    "designStyle": "minimal-neutral",
    "featured": true,
    "tags": [
      "architecture firm",
      "commercial architecture",
      "modernist design",
      "timber skyscraper",
      "leed platinum",
      "urban planning"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bz23-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "MONOLITH // ARCHITECTURE",
          "primaryButtonText": "Commission Studio",
          "primaryButtonLink": "#contact",
          "navLinks": [
            {
              "label": "Built Works",
              "href": "#works"
            },
            {
              "label": "Sustainability",
              "href": "#eco"
            },
            {
              "label": "Monographs",
              "href": "#books"
            }
          ]
        }
      },
      {
        "id": "bz23-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "AIA National Honor Award • Pritzker Nominee Practice",
          "title": "Architecture Defined by Light, Raw Mass, and Sustainable Permanence",
          "subtitle": "We shape civic landmarks and corporate headquarters that harmonize raw architectural concrete, local mass timber, and radical energy efficiency.",
          "primaryButtonText": "Explore Built Portfolio",
          "primaryButtonLink": "#works",
          "imageUrl": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "LEED Platinum Certified Sq Ft",
              "value": "4.2M Sq Ft"
            },
            {
              "id": "s2",
              "label": "Global Civic Landmarks",
              "value": "38 Buildings"
            },
            {
              "id": "s3",
              "label": "AIA & International Design Honors",
              "value": "54 Awards"
            }
          ]
        }
      },
      {
        "id": "bz23-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "Architectural Disciplines",
          "title": "Integrated Spatial Mastery",
          "subtitle": "From masterplanning urban districts to detailing bespoke bronze door handles.",
          "items": [
            {
              "id": "ma1",
              "title": "Corporate Flagships & Tech Campuses",
              "description": "Biophilic open atrium office towers with solar kinetic facades and integrated rooftop biodiversity forests."
            },
            {
              "id": "ma2",
              "title": "Museums & Cultural Pavilions",
              "description": "Sculptural cultural institutions engineered with acoustically tuned exhibition galleries and natural skylight diffusers."
            },
            {
              "id": "ma3",
              "title": "Mass Timber Structural Engineering",
              "description": "Cross-laminated timber (CLT) high-rises sequestering thousands of tons of carbon while accelerating build timelines."
            }
          ]
        }
      },
      {
        "id": "bz23-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Commission a Structure That Will Stand as an Icon for Generations",
          "description": "Our founding partners consult on major civic, institutional, and private estate developments globally.",
          "primaryButtonText": "Inquire with Design Principals",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "bz23-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "MONOLITH ARCHITECTURAL PARTNERS",
          "copyrightText": "© 2026 Monolith Architecture LLP. Copenhagen • Basel • New York."
        }
      }
    ]
  },
  {
    "id": "biz-habitatspatial-01",
    "slug": "habitat-spatial-commercial-interiors",
    "name": "Habitat Spatial Interior Architecture",
    "description": "High-concept interior design studio crafting immersive boutique hotel lobbies, Michelin restaurants, and luxury headquarters.",
    "industryId": "business-services",
    "categoryId": "interior-design-studio",
    "collectionId": "growth-engine",
    "designStyle": "luxury-editorial",
    "featured": false,
    "tags": [
      "interior design",
      "commercial interiors",
      "hospitality design",
      "custom millwork",
      "lighting design",
      "spatial design"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "bz24-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "HABITAT SPATIAL",
          "primaryButtonText": "Request Portfolio",
          "primaryButtonLink": "#contact",
          "navLinks": [
            {
              "label": "Hospitality Spaces",
              "href": "#hospitality"
            },
            {
              "label": "Bespoke Millwork",
              "href": "#millwork"
            },
            {
              "label": "Material Library",
              "href": "#materials"
            }
          ]
        }
      },
      {
        "id": "bz24-hero",
        "type": "hero",
        "variant": "hero-editorial-luxury",
        "visible": true,
        "content": {
          "badge": "Architectural Digest Top 100 Commercial Studio",
          "title": "Atmospheric Spatial Interiors That Elevate The Human Experience",
          "subtitle": "We weave custom hand-troweled plaster, aged walnut millwork, tactile bouclé textiles, and atmospheric low-voltage lighting into unforgettable commercial spaces.",
          "primaryButtonText": "Explore Spatial Portfolio",
          "primaryButtonLink": "#hospitality",
          "imageUrl": "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Completed Hospitality Projects",
              "value": "92 Spaces"
            },
            {
              "id": "s2",
              "label": "Bespoke Furniture Pieces Designed",
              "value": "640+"
            },
            {
              "id": "s3",
              "label": "AD & Elle Decor Covers",
              "value": "18"
            }
          ]
        }
      },
      {
        "id": "bz24-srv",
        "type": "services",
        "variant": "services-editorial-list",
        "visible": true,
        "content": {
          "badge": "Spatial Disciplines",
          "title": "Holistic Interior Transformation",
          "subtitle": "Comprehensive interior architecture from initial 3D VR fly-throughs to custom artisan procurement.",
          "items": [
            {
              "id": "hs1",
              "title": "Hospitality & Fine Dining Atmosphere",
              "description": "Curating acoustic dampening, custom banquet seating, marble bars, and intimate candlelit sightlines."
            },
            {
              "id": "hs2",
              "title": "Executive Suites & Private Member Clubs",
              "description": "Lined with custom acoustic walnut paneling, brass shadow reveals, and vintage mid-century lounge appointments."
            },
            {
              "id": "hs3",
              "title": "Architectural Lighting Orchestration",
              "description": "Circadian rhythm lighting scenes that gracefully transition from morning natural light to warm dusk amber."
            }
          ]
        }
      },
      {
        "id": "bz24-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Elevate Your Physical Space into an Unforgettable Destination",
          "description": "We collaborate with commercial developers, hoteliers, and visionary restaurateurs worldwide.",
          "primaryButtonText": "Schedule Spatial Discovery Session",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "bz24-footer",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "HABITAT SPATIAL INTERIORS",
          "copyrightText": "© 2026 Habitat Spatial Design Group. Milan • London • Los Angeles."
        }
      }
    ]
  }
];
