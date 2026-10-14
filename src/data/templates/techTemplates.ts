import { TemplateConfig } from '../../types';

export const TECH_TEMPLATES: TemplateConfig[] = [
  {
    "id": "tech-hyperscale-01",
    "slug": "hyperscale-ai-compute-platform",
    "name": "Hyperscale AI Cloud Compute",
    "description": "Ultra-low latency serverless GPU cloud infrastructure with on-demand H100 clusters, RoCE v2 networking, and sub-millisecond cold starts.",
    "industryId": "technology",
    "categoryId": "cloud-platform",
    "collectionId": "developer-infrastructure",
    "designStyle": "technology-gradient",
    "featured": true,
    "tags": [
      "ai compute",
      "gpu cloud",
      "kubernetes",
      "cloud infrastructure",
      "h100",
      "serverless"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "tc1-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "HYPERSCALE AI",
          "badge": "NVIDIA H100 SXM5 Live",
          "primaryButtonText": "Deploy Cluster in 60s",
          "primaryButtonLink": "#deploy",
          "navLinks": [
            {
              "label": "Compute Instances",
              "href": "#gpu"
            },
            {
              "label": "Benchmark Matrix",
              "href": "#specs"
            },
            {
              "label": "Documentation",
              "href": "#docs"
            },
            {
              "label": "Pricing / Hour",
              "href": "#pricing"
            }
          ]
        }
      },
      {
        "id": "tc1-hero",
        "type": "hero",
        "variant": "hero-cinematic-dark",
        "visible": true,
        "content": {
          "badge": "Sub-Millisecond Cold Starts • 3.2 Tbps InfiniBand Fabric",
          "title": "The Sovereign Cloud for Frontier AI Training and Real-Time Inference",
          "subtitle": "Spin up on-demand clusters of 8x H100 SXM5 GPUs in 45 seconds. Pay per second with transparent billing, zero egress extortion, and automated Slurm job orchestrations.",
          "primaryButtonText": "Start Free with $100 Credits",
          "primaryButtonLink": "#deploy",
          "secondaryButtonText": "Read Architecture Whitepaper",
          "secondaryButtonLink": "#docs",
          "imageUrl": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "s1",
              "label": "Global Interconnect Fabric",
              "value": "3.2 Tbps"
            },
            {
              "id": "s2",
              "label": "Average Pod Spin-up Time",
              "value": "42 Seconds"
            },
            {
              "id": "s3",
              "label": "Egress Transfer Fee",
              "value": "$0.00 / TB"
            }
          ]
        }
      },
      {
        "id": "tc1-specs",
        "type": "tech-specs-comparison",
        "variant": "tech-matrix",
        "visible": true,
        "content": {
          "badge": "Architectural Benchmarks",
          "title": "Engineered for Model Training at Extreme Scale",
          "subtitle": "Compare raw hardware capabilities against legacy hyperscaler cloud providers.",
          "items": [
            {
              "id": "t1",
              "title": "NVIDIA H100 SXM5 (80GB HBM3)",
              "description": "3.35 TB/s memory bandwidth, FP8 tensor cores delivering 4X faster transformer training.",
              "badge": "In Stock Today",
              "price": "$2.85 / hr"
            },
            {
              "id": "t2",
              "title": "Bare-Metal Slurm Cluster (64x H100)",
              "description": "Non-blocking fat-tree RoCE v2 networking with direct GPUDirect RDMA inter-node connectivity.",
              "badge": "Dedicated Fabric",
              "price": "$22.80 / hr"
            },
            {
              "id": "t3",
              "title": "Serverless vLLM Inference Endpoints",
              "description": "Zero idle cost autoscaling from 0 to 500 replicas with p99 latency under 22 milliseconds.",
              "badge": "Pay-per-Token",
              "price": "$0.0004 / 1k"
            }
          ]
        }
      },
      {
        "id": "tc1-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "badge": "Instant Provisioning",
          "title": "Scale Your AI Models on the World’s Fastest Silicon",
          "description": "Deploy with Terraform, our Python SDK, or the Hyperscale CLI. Free instant quota for verified engineering teams.",
          "primaryButtonText": "Claim Your $100 Cloud Credit",
          "primaryButtonLink": "#deploy"
        }
      },
      {
        "id": "tc1-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "Hyperscale Cloud Technologies Inc.",
          "description": "Tier-IV Data Centers in Northern Virginia, Oregon, Frankfurt, and Tokyo",
          "copyrightText": "© 2026 Hyperscale Cloud Inc. SOC 2 Type II & ISO 27001 Certified."
        }
      }
    ]
  },
  {
    "id": "tech-launchpad-02",
    "slug": "launchpad-venture-startup",
    "name": "Launchpad Venture AI Platform",
    "description": "Developer workspace for autonomous AI agents, multi-agent evaluation, vector memory retrieval, and human-in-the-loop approvals.",
    "industryId": "technology",
    "categoryId": "ai-startup",
    "collectionId": "developer-infrastructure",
    "designStyle": "modern-corporate",
    "featured": true,
    "tags": [
      "ai agents",
      "startup",
      "llm evaluation",
      "vector database",
      "developer platform"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "tc2-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "LAUNCHPAD AI",
          "primaryButtonText": "Start Building (Free)",
          "primaryButtonLink": "#signup",
          "navLinks": [
            {
              "label": "Agent Engine",
              "href": "#features"
            },
            {
              "label": "Evaluation Traces",
              "href": "#evals"
            },
            {
              "label": "Integrations",
              "href": "#integrations"
            },
            {
              "label": "Documentation",
              "href": "#docs"
            }
          ]
        }
      },
      {
        "id": "tc2-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Over 100M Agent Tool Calls Executed Daily",
          "title": "Ship Reliable Autonomous AI Agents with Deterministic Safeguards",
          "subtitle": "The complete development environment to orchestrate, debug, evaluate, and deploy autonomous LLM agents with real-world tool execution and safety guardrails.",
          "primaryButtonText": "Get Started for Free",
          "primaryButtonLink": "#signup",
          "secondaryButtonText": "Live Interactive Playground",
          "secondaryButtonLink": "#demo",
          "imageUrl": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "st1",
              "label": "Production Engineering Teams",
              "value": "4,200+"
            },
            {
              "id": "st2",
              "label": "Agent Tool Accuracy",
              "value": "99.8%"
            }
          ]
        }
      },
      {
        "id": "tc2-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "badge": "Core Platform Capabilities",
          "title": "Everything You Need to Take AI Beyond Simple Chatbots",
          "items": [
            {
              "id": "f1",
              "title": "Visual State-Machine DAGs",
              "description": "Design multi-agent handoffs and fallback loops with visual drag-and-drop or pure TypeScript code."
            },
            {
              "id": "f2",
              "title": "Automated Red-Teaming & Evals",
              "description": "Continuously benchmark agent prompts against synthetic adversarial datasets before merging to main."
            },
            {
              "id": "f3",
              "title": "Ephemeral Sandboxed Code Execution",
              "description": "Run Python data science scripts in secure micro-VMs with isolated network egress and 20ms startup."
            }
          ]
        }
      },
      {
        "id": "tc2-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Turn Experimental AI Prompts into Scalable Enterprise Systems",
          "description": "Deploy your first agent in under 5 minutes with our open-source Python and TypeScript SDKs.",
          "primaryButtonText": "Create Free Developer Account",
          "primaryButtonLink": "#signup"
        }
      },
      {
        "id": "tc2-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Launchpad Venture AI Technologies",
          "copyrightText": "© 2026 Launchpad AI Systems Inc. Backed by Y Combinator."
        }
      }
    ]
  },
  {
    "id": "tech-codepulse-01",
    "slug": "codepulse-git-observability",
    "name": "CodePulse Git Observability & CI Engine",
    "description": "Next-generation continuous integration and code review observability eliminating flaky tests and cutting PR review cycles by 70%.",
    "industryId": "technology",
    "categoryId": "developer-tools",
    "collectionId": "developer-tools",
    "designStyle": "dark-cinematic",
    "tags": [
      "developer tools",
      "ci cd",
      "testing",
      "git",
      "observability",
      "devops"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "tc3-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "CODEPULSE CI",
          "primaryButtonText": "Install GitHub App",
          "primaryButtonLink": "#install",
          "navLinks": [
            {
              "label": "Test Intelligence",
              "href": "#tests"
            },
            {
              "label": "Flaky Detection",
              "href": "#flaky"
            },
            {
              "label": "Pricing",
              "href": "#pricing"
            }
          ]
        }
      },
      {
        "id": "tc3-hero",
        "type": "hero",
        "variant": "hero-cinematic-dark",
        "visible": true,
        "content": {
          "badge": "Trusted by 12,000+ Engineering Teams",
          "title": "Kill Flaky Tests. Accelerate Monorepo CI Builds by 5x.",
          "subtitle": "CodePulse uses predictive test selection and distributed remote caching to run only the tests affected by your PR changes, turning 45-minute pipelines into 3 minutes.",
          "primaryButtonText": "Connect GitHub Repo (Free)",
          "primaryButtonLink": "#install",
          "imageUrl": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "cp1",
              "label": "Average CI Build Speedup",
              "value": "4.8X Faster"
            },
            {
              "id": "cp2",
              "label": "Flaky Test Elimination",
              "value": "99.4%"
            }
          ]
        }
      },
      {
        "id": "tc3-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "title": "CI Intelligence Features",
          "items": [
            {
              "id": "cp_s1",
              "title": "Predictive Affected Test Selection",
              "description": "Static dependency graphing identifies the exact subset of unit and e2e tests required per commit."
            },
            {
              "id": "cp_s2",
              "title": "Automatic Flaky Test Quarantine",
              "description": "Isolate intermittent failures without blocking deployments while filing auto-repro tickets for engineers."
            },
            {
              "id": "cp_s3",
              "title": "Global Multi-Region Distributed Cache",
              "description": "Zero-configuration Bazel, Turborepo, and Gradle build artifact sharing with sub-5ms latency."
            }
          ]
        }
      },
      {
        "id": "tc3-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Reclaim 30 Engineering Hours per Developer Every Month",
          "description": "Installs in 60 seconds with zero YAML overhaul required.",
          "primaryButtonText": "Start Free 14-Day Team Trial",
          "primaryButtonLink": "#install"
        }
      },
      {
        "id": "tc3-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "CodePulse Systems Inc.",
          "copyrightText": "© 2026 CodePulse Inc. Built for high-velocity software engineering."
        }
      }
    ]
  },
  {
    "id": "tech-sentinel-01",
    "slug": "sentinelzero-ai-defense-mesh",
    "name": "SentinelZero AI Zero-Trust Defense Mesh",
    "description": "Autonomous enterprise cybersecurity platform detecting insider lateral movement, cloud misconfigurations, and supply-chain attacks in real-time.",
    "industryId": "technology",
    "categoryId": "cybersecurity",
    "collectionId": "enterprise-security",
    "designStyle": "dark-cinematic",
    "tags": [
      "cybersecurity",
      "zero trust",
      "siem",
      "soc",
      "cloud security",
      "threat detection"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "tc4-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "SENTINELZERO",
          "badge": "SOC 2 & FedRAMP Ready",
          "primaryButtonText": "Request Threat Audit",
          "primaryButtonLink": "#audit",
          "navLinks": [
            {
              "label": "Autonomous Mesh",
              "href": "#mesh"
            },
            {
              "label": "Cloud Posture (CSPM)",
              "href": "#cspm"
            },
            {
              "label": "Live Incident Response",
              "href": "#incident"
            }
          ]
        }
      },
      {
        "id": "tc4-hero",
        "type": "hero",
        "variant": "hero-cinematic-dark",
        "visible": true,
        "content": {
          "badge": "Autonomous AI Threat Triage in Under 800ms",
          "title": "Neutralize Advanced Threats Before They Move Laterally",
          "subtitle": "SentinelZero maps continuous identity baselines across AWS, GCP, Azure, and Okta, automatically severing compromised credentials and isolating hijacked containers in real time.",
          "primaryButtonText": "Request Red-Team Defense Audit",
          "primaryButtonLink": "#audit",
          "imageUrl": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "sz1",
              "label": "Mean Time to Contain (MTTC)",
              "value": "< 1.2 Seconds"
            },
            {
              "id": "sz2",
              "label": "False Positive Reduction",
              "value": "98.5%"
            }
          ]
        }
      },
      {
        "id": "tc4-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Zero-Trust Defense Capabilities",
          "items": [
            {
              "id": "sz_s1",
              "title": "Autonomous Identity Threat Detection (ITDR)",
              "description": "Flags session cookie hijacking, anomalous Okta MFA fatigue attacks, and privilege escalation."
            },
            {
              "id": "sz_s2",
              "title": "Agentless Multi-Cloud Security Posture",
              "description": "Instant API telemetry scanning Kubernetes clusters, IAM roles, and S3 permissions for toxic combinations."
            },
            {
              "id": "sz_s3",
              "title": "Automated Micro-Segmentation Isolations",
              "description": "Dynamic eBPF firewall policies that instantly quarantine compromised hosts without network downtime."
            }
          ]
        }
      },
      {
        "id": "tc4-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Discover What Hidden Vulnerabilities Live in Your Cloud Right Now",
          "description": "Get an automated, read-only 24-hour security health audit across all your cloud tenants.",
          "primaryButtonText": "Run Free Cloud Security Scan",
          "primaryButtonLink": "#audit"
        }
      },
      {
        "id": "tc4-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "SentinelZero Security Technologies Inc.",
          "copyrightText": "© 2026 SentinelZero Inc. Zero Trust Architecture."
        }
      }
    ]
  },
  {
    "id": "tech-prismiq-01",
    "slug": "prismiq-lakehouse-analytics",
    "name": "PrismIQ Real-Time Lakehouse Analytics",
    "description": "Sub-second SQL lakehouse analytics platform querying billions of events with Apache Iceberg and DuckDB in-memory engine.",
    "industryId": "technology",
    "categoryId": "data-analytics",
    "collectionId": "developer-infrastructure",
    "designStyle": "glass-interface",
    "tags": [
      "data lake",
      "analytics",
      "sql",
      "iceberg",
      "duckdb",
      "business intelligence"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "tc5-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "PRISMIQ ANALYTICS",
          "primaryButtonText": "Start Free Sandbox",
          "primaryButtonLink": "#sandbox",
          "navLinks": [
            {
              "label": "Lakehouse Engine",
              "href": "#engine"
            },
            {
              "label": "DuckDB Query Acceleration",
              "href": "#acceleration"
            },
            {
              "label": "Documentation",
              "href": "#docs"
            }
          ]
        }
      },
      {
        "id": "tc5-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Powered by Apache Iceberg & Vectorized DuckDB",
          "title": "Query Billions of Rows in Milliseconds at 1/10th the Cost",
          "subtitle": "Unify real-time streaming events and petabyte-scale historical data into one open Lakehouse format. Zero data copies, zero vendor lock-in, pure ANSI SQL speed.",
          "primaryButtonText": "Query Live Demo Dataset",
          "primaryButtonLink": "#sandbox",
          "imageUrl": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "pi1",
              "label": "Query Latency (1B Rows)",
              "value": "18 Milliseconds"
            },
            {
              "id": "pi2",
              "label": "Warehouse Cost Savings",
              "value": "85% vs Snowflake"
            }
          ]
        }
      },
      {
        "id": "tc5-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "title": "Data Engine Architecture",
          "items": [
            {
              "id": "pi_s1",
              "title": "Serverless Vectorized SQL Engine",
              "description": "Multi-threaded SIMD execution parsing Parquet directly from S3 without cold warehouse spin-up delays."
            },
            {
              "id": "pi_s2",
              "title": "Open Apache Iceberg Table Management",
              "description": "Native ACID transactions, partition evolution, and zero-copy time travel rollbacks on open storage."
            },
            {
              "id": "pi_s3",
              "title": "Sub-Second Embedded BI Dashboards",
              "description": "Deliver customer-facing dashboards that load instantly with zero caching warm-up friction."
            }
          ]
        }
      },
      {
        "id": "tc5-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Stop Overpaying for Proprietary Cloud Warehouses",
          "description": "Connect your S3 or GCS bucket and run your first benchmark query in 3 minutes.",
          "primaryButtonText": "Connect Storage & Benchmark",
          "primaryButtonLink": "#sandbox"
        }
      },
      {
        "id": "tc5-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "PrismIQ Data Technologies",
          "copyrightText": "© 2026 PrismIQ Inc. Open data architectures."
        }
      }
    ]
  },
  {
    "id": "tech-worksync-01",
    "slug": "worksync-enterprise-collaboration",
    "name": "WorkSync Enterprise Collaboration & Task HQ",
    "description": "All-in-one workspaces uniting project roadmaps, live collaborative documents, automated sprints, and team chat without context switching.",
    "industryId": "technology",
    "categoryId": "productivity-app",
    "collectionId": "enterprise-software",
    "designStyle": "modern-corporate",
    "tags": [
      "project management",
      "collaboration",
      "productivity",
      "remote work",
      "kanban",
      "docs"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "tc6-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "WORKSYNC",
          "primaryButtonText": "Get WorkSync Free",
          "primaryButtonLink": "#signup",
          "navLinks": [
            {
              "label": "Workspaces",
              "href": "#features"
            },
            {
              "label": "Templates",
              "href": "#templates"
            },
            {
              "label": "Enterprise Security",
              "href": "#security"
            }
          ]
        }
      },
      {
        "id": "tc6-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "The Digital Headquarters for High-Output Teams",
          "title": "Where Strategy, Docs, and Execution Move as One",
          "subtitle": "Replace four disconnected subscriptions with a unified canvas where PRDs turn into sprint tasks, live meeting notes sync with Jira, and status reports write themselves.",
          "primaryButtonText": "Create Team Workspace",
          "primaryButtonLink": "#signup",
          "imageUrl": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "ws1",
              "label": "Teams Migrated from Notion/Asana",
              "value": "25,000+"
            },
            {
              "id": "ws2",
              "label": "Reported Weekly Time Saved",
              "value": "4.2 Hrs / Person"
            }
          ]
        }
      },
      {
        "id": "tc6-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Unified Workspace Modules",
          "items": [
            {
              "id": "ws_s1",
              "title": "Fluid Canvas Documents & Tables",
              "description": "Real-time multi-cursor editing combining rich text, relational databases, code blocks, and Figma embeds."
            },
            {
              "id": "ws_s2",
              "title": "Automated Sprint & Kanban Planning",
              "description": "Custom workflow automations assigning PR reviews, moving tickets, and generating changelogs."
            },
            {
              "id": "ws_s3",
              "title": "AI Executive Daily Briefings",
              "description": "Summarizes unread threads, overdue milestones, and cross-team dependencies in an executive morning digest."
            }
          ]
        }
      },
      {
        "id": "tc6-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Free for Up to 10 Users Forever",
          "description": "Zero credit card required. Import your existing workspace from Notion or Trello in one click.",
          "primaryButtonText": "Get Started with WorkSync",
          "primaryButtonLink": "#signup"
        }
      },
      {
        "id": "tc6-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "WorkSync Technologies Inc.",
          "copyrightText": "© 2026 WorkSync Inc. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "tech-nexus-01",
    "slug": "nexus-gateway-api-platform",
    "name": "Nexus Gateway High-Throughput API Mesh",
    "description": "Ultra-fast Rust-based GraphQL and REST API gateway with sub-millisecond federated schema stitching, rate-limiting, and edge caching.",
    "industryId": "technology",
    "categoryId": "api-platform",
    "collectionId": "developer-tools",
    "designStyle": "brutalist-clean",
    "tags": [
      "api gateway",
      "graphql",
      "rest api",
      "rust",
      "rate limiting",
      "federation"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "tc7-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "NEXUS API GATEWAY",
          "badge": "Written in Rust • Zero Garbage Collection",
          "primaryButtonText": "Deploy Gateway",
          "primaryButtonLink": "#deploy",
          "navLinks": [
            {
              "label": "Federation",
              "href": "#federation"
            },
            {
              "label": "Edge Latency",
              "href": "#latency"
            },
            {
              "label": "Docs & SDK",
              "href": "#docs"
            }
          ]
        }
      },
      {
        "id": "tc7-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Handling 40B Requests Daily at Sub-Millisecond P99",
          "title": "The Blisteringly Fast API Gateway for Distributed Services",
          "subtitle": "Unify dozens of microservices into one cohesive, federated GraphQL schema. Written in pure Rust to deliver zero-copy proxying, JWT verification, and distributed Redis rate limiting.",
          "primaryButtonText": "Run with Docker in 30 Seconds",
          "primaryButtonLink": "#deploy",
          "imageUrl": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "nx1",
              "label": "Proxy Overhead P99",
              "value": "0.42 Milliseconds"
            },
            {
              "id": "nx2",
              "label": "Memory Footprint Under Heavy Load",
              "value": "< 24 MB RAM"
            }
          ]
        }
      },
      {
        "id": "tc7-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Core Gateway Architecture",
          "items": [
            {
              "id": "nx_s1",
              "title": "Apollo Federation v2 Compatibility",
              "description": "Declarative schema composition across microservices with automatic query planning and parallel execution."
            },
            {
              "id": "nx_s2",
              "title": "Distributed Sliding-Window Rate Limiting",
              "description": "Protection against DDoS attacks and brute-force key abuse across multiple geographic edge nodes."
            },
            {
              "id": "nx_s3",
              "title": "WASM Extensible Plugin Runtime",
              "description": "Write custom auth, transformation, and billing middlewares in Rust, Go, or TypeScript compiled to WebAssembly."
            }
          ]
        }
      },
      {
        "id": "tc7-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Upgrade from Bloated Gateways to Pure Rust Performance",
          "description": "Open source core available on GitHub with 18k stars. Enterprise support and cloud managed planes.",
          "primaryButtonText": "View on GitHub",
          "primaryButtonLink": "#deploy"
        }
      },
      {
        "id": "tc7-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Nexus Gateway API Technologies",
          "copyrightText": "© 2026 Nexus Gateway. Open source Apache 2.0 licensed core."
        }
      }
    ]
  },
  {
    "id": "tech-zenith-01",
    "slug": "zenith-habit-architecture-app",
    "name": "Zenith Habit Architecture & Bio-Tracking",
    "description": "Minimalist iOS and Android behavioral science app tracking dopamine habits, micro-routines, and biometric recovery correlation.",
    "industryId": "technology",
    "categoryId": "mobile-app",
    "collectionId": "mobile-apps",
    "designStyle": "soft-pastel",
    "tags": [
      "mobile app",
      "habit tracker",
      "productivity",
      "behavioral science",
      "ios app"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "tc8-nav",
        "type": "navbar",
        "variant": "navbar-floating",
        "visible": true,
        "content": {
          "title": "ZENITH HABITS",
          "primaryButtonText": "Download on App Store",
          "primaryButtonLink": "#download",
          "navLinks": [
            {
              "label": "Features",
              "href": "#features"
            },
            {
              "label": "Behavioral Science",
              "href": "#science"
            },
            {
              "label": "Apple Watch App",
              "href": "#watch"
            }
          ]
        }
      },
      {
        "id": "tc8-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Apple Design Award Nominee • 4.9 Stars",
          "title": "Design Unbreakable Habits Through Behavioral Physics",
          "subtitle": "No guilt streaks or annoying notification spam. Zenith uses identity-based habit stacking, interactive iOS 18 lock screen widgets, and Apple Health correlations.",
          "primaryButtonText": "Get on the App Store",
          "primaryButtonLink": "#download",
          "imageUrl": "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "zn1",
              "label": "Active Daily Habit Trackers",
              "value": "450,000+"
            },
            {
              "id": "zn2",
              "label": "Average Habit Longevity",
              "value": "88 Days"
            }
          ]
        }
      },
      {
        "id": "tc8-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "App Architecture",
          "items": [
            {
              "id": "zn_s1",
              "title": "Frictionless Interactive Widgets",
              "description": "Check off morning routines directly from your iPhone home screen or Apple Watch without opening the app."
            },
            {
              "id": "zn_s2",
              "title": "Biometric Correlation Analytics",
              "description": "See how consistent sleep routines and 10,000 daily steps directly boost your morning focus score."
            },
            {
              "id": "zn_s3",
              "title": "Zero-Cloud Private SQLite Encryption",
              "description": "Your personal behavioral data lives strictly on your device and iCloud with zero tracking."
            }
          ]
        }
      },
      {
        "id": "tc8-cta",
        "type": "cta",
        "variant": "cta-editorial-split",
        "visible": true,
        "content": {
          "title": "Start Building the Identity You Want One Day at a Time",
          "description": "Download Zenith for iOS and iPadOS. Includes 7-day trial of Zenith Pro.",
          "primaryButtonText": "Download Zenith Free",
          "primaryButtonLink": "#download"
        }
      },
      {
        "id": "tc8-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "Zenith Habit Architecture App",
          "copyrightText": "© 2026 Zenith Mobile Labs Inc. Private by design."
        }
      }
    ]
  },
  {
    "id": "tech-kubeorbit-01",
    "slug": "kubeorbit-kubernetes-fleet",
    "name": "KubeOrbit Autonomous Kubernetes Fleet Manager",
    "description": "Multi-cloud Kubernetes cluster management, automated node right-sizing, cost optimization, and GitOps deployments.",
    "industryId": "technology",
    "categoryId": "devops-platform",
    "collectionId": "developer-infrastructure",
    "designStyle": "dark-cinematic",
    "tags": [
      "kubernetes",
      "devops",
      "gitops",
      "cloud cost",
      "cloud native",
      "containers"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "tc9-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "KUBEORBIT",
          "badge": "CNCF Silver Member",
          "primaryButtonText": "Connect EKS/GKE Cluster",
          "primaryButtonLink": "#connect",
          "navLinks": [
            {
              "label": "Cost Optimizer",
              "href": "#cost"
            },
            {
              "label": "Fleet Topology",
              "href": "#fleet"
            },
            {
              "label": "GitOps Pipeline",
              "href": "#gitops"
            }
          ]
        }
      },
      {
        "id": "tc9-hero",
        "type": "hero",
        "variant": "hero-cinematic-dark",
        "visible": true,
        "content": {
          "badge": "Autonomous Spot Node Orchestration",
          "title": "Cut Kubernetes Cloud Bills by 60% with Zero Outages",
          "subtitle": "KubeOrbit continuously monitors container pod resource requests, automatically bin-packing onto diversified Spot instances with automated drain predictions.",
          "primaryButtonText": "Connect Cluster in Read-Only Mode",
          "primaryButtonLink": "#connect",
          "imageUrl": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "ko1",
              "label": "Total Cloud Spend Saved",
              "value": "$45M+"
            },
            {
              "id": "ko2",
              "label": "Average Cluster Cost Reduction",
              "value": "58.4%"
            }
          ]
        }
      },
      {
        "id": "tc9-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "title": "Fleet Management Capabilities",
          "items": [
            {
              "id": "ko_s1",
              "title": "Real-Time Dynamic Node Autoscale",
              "description": "Replaces Karpenter and Cluster Autoscaler with predictive provisioning in under 12 seconds."
            },
            {
              "id": "ko_s2",
              "title": "Cross-Cloud Disaster Recovery",
              "description": "Synchronize namespaces and Persistent Volumes between AWS EKS and Google Cloud GKE."
            },
            {
              "id": "ko_s3",
              "title": "GitOps Drift Detection & Rollback",
              "description": "Instant alerts when production cluster state deviates from committed Helm charts in GitHub."
            }
          ]
        }
      },
      {
        "id": "tc9-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "See How Much You Can Save on Kubernetes This Month",
          "description": "Install our lightweight Helm agent in 2 minutes for an instant cost-savings analysis.",
          "primaryButtonText": "Run Free Cluster Cost Audit",
          "primaryButtonLink": "#connect"
        }
      },
      {
        "id": "tc9-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "KubeOrbit Autonomous Fleet Technologies",
          "copyrightText": "© 2026 KubeOrbit Inc. Cloud Native Computing Foundation."
        }
      }
    ]
  },
  {
    "id": "tech-vectorforge-01",
    "slug": "vectorforge-web-development-studio",
    "name": "VectorForge High-Performance Next.js Studio",
    "description": "Boutique web engineering studio building custom React and Next.js digital platforms with 100/100 Lighthouse performance and WebGL motion.",
    "industryId": "technology",
    "categoryId": "web-development-agency",
    "collectionId": "web-engineering",
    "designStyle": "dark-cinematic",
    "tags": [
      "web development",
      "next.js",
      "react",
      "webgl",
      "three.js",
      "performance"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "tc10-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "VECTORFORGE",
          "primaryButtonText": "Start a Project",
          "primaryButtonLink": "#contact",
          "navLinks": [
            {
              "label": "Client Work",
              "href": "#work"
            },
            {
              "label": "Performance Standards",
              "href": "#performance"
            },
            {
              "label": "Engineering Stack",
              "href": "#stack"
            }
          ]
        }
      },
      {
        "id": "tc10-hero",
        "type": "hero",
        "variant": "hero-cinematic-dark",
        "visible": true,
        "content": {
          "badge": "Awwwards Site of the Year Nominee",
          "title": "We Build Websites That Move at the Speed of Light",
          "subtitle": "We craft bespoke web experiences for global tech brands, pairing buttery-smooth Three.js WebGL interactions with sub-second core web vitals and headless CMS architectures.",
          "primaryButtonText": "View Case Studies",
          "primaryButtonLink": "#work",
          "imageUrl": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "vf1",
              "label": "Average Google Lighthouse Score",
              "value": "100 / 100"
            },
            {
              "id": "vf2",
              "label": "International Design Honors",
              "value": "42 Awwwards"
            }
          ]
        }
      },
      {
        "id": "tc10-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "title": "Our Engineering Disciplines",
          "items": [
            {
              "id": "vf_s1",
              "title": "Headless Next.js & React Architectures",
              "description": "Static-site generation with incremental revalidation, edge API routes, and Tailwind CSS."
            },
            {
              "id": "vf_s2",
              "title": "Interactive 3D WebGL & Shaders",
              "description": "Three.js and GLSL shaders creating stunning interactive product visualizers that run smoothly on mobile."
            },
            {
              "id": "vf_s3",
              "title": "Extreme Core Web Vitals Optimization",
              "description": "Eliminating layout shifts, asset minification, and zero-runtime CSS delivering instant page transitions."
            }
          ]
        }
      },
      {
        "id": "tc10-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Ready to Build a Website That Leaves Competitors in the Dust?",
          "description": "Let’s discuss your technical architecture, design goals, and launch timeline.",
          "primaryButtonText": "Book Architecture Discovery Call",
          "primaryButtonLink": "#contact"
        }
      },
      {
        "id": "tc10-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "VectorForge Web Engineering Studio",
          "copyrightText": "© 2026 VectorForge Digital Inc. San Francisco & Berlin."
        }
      }
    ]
  },
  {
    "id": "tech-ledgersync-01",
    "slug": "ledgersync-b2b-treasury",
    "name": "LedgerSync B2B Invoicing & Treasury Platform",
    "description": "Automated accounts receivable, AI-powered invoice reconciliation, multi-currency treasury yields, and ERP sync for high-growth tech companies.",
    "industryId": "technology",
    "categoryId": "fintech-product",
    "collectionId": "fintech-saas",
    "designStyle": "modern-corporate",
    "tags": [
      "fintech",
      "invoicing",
      "treasury",
      "b2b payments",
      "erp",
      "accounting"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "tc11-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "LEDGERSYNC",
          "primaryButtonText": "Book Product Demo",
          "primaryButtonLink": "#demo",
          "navLinks": [
            {
              "label": "Automated Invoicing",
              "href": "#invoicing"
            },
            {
              "label": "Treasury & Yield",
              "href": "#treasury"
            },
            {
              "label": "ERP Integrations",
              "href": "#erp"
            }
          ]
        }
      },
      {
        "id": "tc11-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Processing $4B+ in Annual B2B SaaS Volume",
          "title": "Accelerate Cash Collection and Automate Corporate Treasury",
          "subtitle": "Stop chasing unpaid client invoices. LedgerSync uses autonomous AR dunning workflows, instant global ACH/wire rails, and auto-sweeps cash into 5.1% yield treasury accounts.",
          "primaryButtonText": "Schedule 15-Min Live Demo",
          "primaryButtonLink": "#demo",
          "imageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "ls1",
              "label": "Average Days Sales Outstanding (DSO) Drop",
              "value": "-18 Days"
            },
            {
              "id": "ls2",
              "label": "Treasury Yield on Idle Cash",
              "value": "5.10% APY"
            }
          ]
        }
      },
      {
        "id": "tc11-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Financial Operating System",
          "items": [
            {
              "id": "ls_s1",
              "title": "Automated Accounts Receivable & Dunning",
              "description": "Smart multi-channel email, SMS, and WhatsApp payment reminders that collect past-due balances gently."
            },
            {
              "id": "ls_s2",
              "title": "Two-Way ERP Sync (NetSuite & QuickBooks)",
              "description": "Real-time reconciliation matching bank deposits with line-item invoices in your general ledger."
            },
            {
              "id": "ls_s3",
              "title": "Multi-Currency Global Corporate Virtual Cards",
              "description": "Issue unlimited physical and virtual cards with pre-approved spend limits and zero foreign exchange fees."
            }
          ]
        }
      },
      {
        "id": "tc11-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Take Complete Control of Your Enterprise Working Capital",
          "description": "Integrates with your existing bank accounts in under 15 minutes with zero disruption.",
          "primaryButtonText": "Request Access & Demo",
          "primaryButtonLink": "#demo"
        }
      },
      {
        "id": "tc11-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "LedgerSync Financial Technologies Inc.",
          "copyrightText": "© 2026 LedgerSync Inc. FDIC Insured through partner banks."
        }
      }
    ]
  },
  {
    "id": "tech-omnipulse-01",
    "slug": "omnipulse-sales-crm",
    "name": "OmniPulse Conversational Sales CRM",
    "description": "AI-native sales CRM that listens to Zoom customer calls, auto-updates Salesforce pipeline stages, and writes follow-up emails.",
    "industryId": "technology",
    "categoryId": "crm-platform",
    "collectionId": "enterprise-software",
    "designStyle": "modern-corporate",
    "tags": [
      "crm",
      "sales",
      "sales pipeline",
      "call intelligence",
      "b2b sales",
      "leads"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "tc12-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "OMNIPULSE CRM",
          "primaryButtonText": "Try OmniPulse Free",
          "primaryButtonLink": "#trial",
          "navLinks": [
            {
              "label": "Call Intelligence",
              "href": "#calls"
            },
            {
              "label": "Pipeline Automation",
              "href": "#pipeline"
            },
            {
              "label": "Integrations",
              "href": "#integrations"
            }
          ]
        }
      },
      {
        "id": "tc12-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Zero Manual CRM Data Entry Ever Again",
          "title": "The Sales CRM Your Account Executives Will Actually Love",
          "subtitle": "OmniPulse joins customer calls, transcribes decisions, identifies objections, updates deal amounts, and drafts personalized follow-up emails in seconds.",
          "primaryButtonText": "Start Free 14-Day Trial",
          "primaryButtonLink": "#trial",
          "imageUrl": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "op1",
              "label": "Rep Time Spent on CRM Data Entry",
              "value": "Reduced by 90%"
            },
            {
              "id": "op2",
              "label": "Win Rate Lift on Qualified Deals",
              "value": "+24%"
            }
          ]
        }
      },
      {
        "id": "tc12-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "title": "Autonomous Sales Tools",
          "items": [
            {
              "id": "op_s1",
              "title": "Conversation Intelligence & Action Items",
              "description": "Identifies competitor mentions, pricing pushback, and buyer sentiment with timestamped highlights."
            },
            {
              "id": "op_s2",
              "title": "Automated Deal Stage Progression",
              "description": "Automatically moves pipeline deals to \"Contract Review\" when legal NDAs or MSAs are exchanged."
            },
            {
              "id": "op_s3",
              "title": "Instant 1-Click Meeting Follow-Ups",
              "description": "Generates customized recap emails with agreed-upon deliverables ready in your Gmail draft folder."
            }
          ]
        }
      },
      {
        "id": "tc12-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Empower Your Sales Team to Close More Deals",
          "description": "Syncs with Google Workspace, Microsoft Outlook, and Slack in two clicks.",
          "primaryButtonText": "Connect Your Calendar Free",
          "primaryButtonLink": "#trial"
        }
      },
      {
        "id": "tc12-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "OmniPulse CRM Technologies",
          "copyrightText": "© 2026 OmniPulse Systems Inc. Built for top revenue teams."
        }
      }
    ]
  },
  {
    "id": "tech-hyperkv-01",
    "slug": "hyperkv-distributed-cache",
    "name": "HyperKV Distributed In-Memory Storage",
    "description": "High-performance Redis-compatible distributed key-value store with SSD tiering, Raft consensus, and multi-threaded kernel bypass.",
    "industryId": "technology",
    "categoryId": "open-source-project",
    "collectionId": "developer-tools",
    "designStyle": "minimal-neutral",
    "tags": [
      "open source",
      "database",
      "key value",
      "redis",
      "caching",
      "distributed systems"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "tc13-nav",
        "type": "navbar",
        "variant": "navbar-minimal",
        "visible": true,
        "content": {
          "title": "HYPERKV",
          "badge": "GitHub 24k Stars",
          "primaryButtonText": "Quickstart Guide",
          "primaryButtonLink": "#docs",
          "navLinks": [
            {
              "label": "Benchmarks",
              "href": "#benchmarks"
            },
            {
              "label": "Architecture",
              "href": "#architecture"
            },
            {
              "label": "Cloud Hosted",
              "href": "#cloud"
            }
          ]
        }
      },
      {
        "id": "tc13-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "100% Redis Protocol Compatible • Written in C++23",
          "title": "10x Higher Throughput than Redis with Transparent NVMe Tiering",
          "subtitle": "Drop-in replacement for Redis clusters delivering 5 million QPS per node using modern io_uring kernel bypass and multi-threaded shared-nothing core architecture.",
          "primaryButtonText": "Star on GitHub (24k)",
          "primaryButtonLink": "#github",
          "imageUrl": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "hk1",
              "label": "Queries Per Second (Single Node)",
              "value": "5,200,000 QPS"
            },
            {
              "id": "hk2",
              "label": "P99 Latency Under Load",
              "value": "180 Microseconds"
            }
          ]
        }
      },
      {
        "id": "tc13-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Engine Breakthroughs",
          "items": [
            {
              "id": "hk_s1",
              "title": "True Multi-Threaded Core-Pinned Architecture",
              "description": "Zero lock contention across CPU sockets, scaling linearly with available processor cores."
            },
            {
              "id": "hk_s2",
              "title": "NVMe Flash Storage Tiering",
              "description": "Store hot data in DRAM while seamlessly offloading cold keys to NVMe SSDs, slashing RAM costs by 80%."
            },
            {
              "id": "hk_s3",
              "title": "Multi-Raft Consensus Replication",
              "description": "Zero data loss cross-AZ failover with sub-second leader election and zero blocking during snapshotting."
            }
          ]
        }
      },
      {
        "id": "tc13-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Run HyperKV in Your Stack with One Terminal Command",
          "description": "docker run -p 6379:6379 hyperkv/hyperkv:latest",
          "primaryButtonText": "Read the Getting Started Docs",
          "primaryButtonLink": "#docs"
        }
      },
      {
        "id": "tc13-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "HyperKV Open Source Database",
          "copyrightText": "© 2026 HyperKV Project. Open Source Apache 2.0 License."
        }
      }
    ]
  },
  {
    "id": "tech-flowweave-01",
    "slug": "flowweave-workflow-automation",
    "name": "FlowWeave Enterprise Workflow Automation",
    "description": "Visual low-code automation platform integrating 500+ SaaS applications with branching conditional logic, webhook triggers, and AI transforms.",
    "industryId": "technology",
    "categoryId": "automation-platform",
    "collectionId": "enterprise-software",
    "designStyle": "glass-interface",
    "tags": [
      "automation",
      "workflow",
      "zapier alternative",
      "integration",
      "webhooks",
      "low code"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "tc14-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "FLOWWEAVE",
          "primaryButtonText": "Build Flow Free",
          "primaryButtonLink": "#build",
          "navLinks": [
            {
              "label": "500+ Connectors",
              "href": "#connectors"
            },
            {
              "label": "Self-Hosted Option",
              "href": "#selfhost"
            },
            {
              "label": "Pricing Plans",
              "href": "#pricing"
            }
          ]
        }
      },
      {
        "id": "tc14-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "10x Cheaper than Zapier • Unlimited Step Runs",
          "title": "Automate Complex Multi-App Workflows Without Writing Glue Code",
          "subtitle": "Connect your CRM, database, payment processor, and LLMs in an intuitive drag-and-drop canvas with enterprise SOC 2 audit logs and sub-second execution.",
          "primaryButtonText": "Start Automating Free",
          "primaryButtonLink": "#build",
          "imageUrl": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "fw1",
              "label": "Monthly Workflow Executions",
              "value": "250 Million"
            },
            {
              "id": "fw2",
              "label": "Pre-Built App Connectors",
              "value": "550+ Apps"
            }
          ]
        }
      },
      {
        "id": "tc14-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Automation Engine Features",
          "items": [
            {
              "id": "fw_s1",
              "title": "Visual Branching Logic & Loops",
              "description": "Conditionals, array map/filter iterations, and error-handling fallback routes built visually."
            },
            {
              "id": "fw_s2",
              "title": "Native Generative AI Data Extraction",
              "description": "Parse unstructured customer emails, invoices, and PDFs into clean JSON schemas automatically."
            },
            {
              "id": "fw_s3",
              "title": "On-Premises Docker Deployment",
              "description": "Deploy within your own AWS VPC or air-gapped datacenter with full HIPAA and GDPR compliance."
            }
          ]
        }
      },
      {
        "id": "tc14-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Connect Your First 5 Automated Workflows in 10 Minutes",
          "description": "Free tier includes 5,000 monthly executions with zero credit card required.",
          "primaryButtonText": "Create Your Free Flow",
          "primaryButtonLink": "#build"
        }
      },
      {
        "id": "tc14-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "FlowWeave Automation Technologies Inc.",
          "copyrightText": "© 2026 FlowWeave Inc. Automate everything."
        }
      }
    ]
  },
  {
    "id": "tech-talentforge-01",
    "slug": "talentforge-technical-hiring",
    "name": "TalentForge AI Technical Hiring & Assessment",
    "description": "Real-world coding sandboxes, proctored system design interviews, and unbiased skill assessments for hiring senior software engineers.",
    "industryId": "technology",
    "categoryId": "hr-software",
    "collectionId": "enterprise-software",
    "designStyle": "modern-corporate",
    "tags": [
      "hr tech",
      "technical hiring",
      "coding assessment",
      "recruiting",
      "interview sandbox"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "tc15-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "TALENTFORGE",
          "primaryButtonText": "Request Demo",
          "primaryButtonLink": "#demo",
          "navLinks": [
            {
              "label": "Coding Sandboxes",
              "href": "#sandbox"
            },
            {
              "label": "System Design Canvas",
              "href": "#systemdesign"
            },
            {
              "label": "Anti-Cheat AI",
              "href": "#security"
            }
          ]
        }
      },
      {
        "id": "tc15-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Real Dev Environments • No LeetCode Trivia",
          "title": "Identify Exceptional Software Engineers with Real Production Tasks",
          "subtitle": "Evaluate candidates on real full-stack repos, Git PR reviews, and live architectural design rather than abstract textbook puzzles, cutting hiring time by 60%.",
          "primaryButtonText": "Try Candidate Sandbox Demo",
          "primaryButtonLink": "#demo",
          "imageUrl": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "tf1",
              "label": "Interviews Conducted",
              "value": "1.2 Million"
            },
            {
              "id": "tf2",
              "label": "Candidate Satisfaction Rating",
              "value": "4.8 / 5.0"
            }
          ]
        }
      },
      {
        "id": "tc15-srv",
        "type": "services",
        "variant": "services-cards-accent",
        "visible": true,
        "content": {
          "title": "Evaluation Capabilities",
          "items": [
            {
              "id": "tf_s1",
              "title": "Full-Stack Containerized Dev Environments",
              "description": "Real VS Code browser IDE with terminal access, package managers, and live running web previews."
            },
            {
              "id": "tf_s2",
              "title": "Collaborative Multi-User System Design Canvas",
              "description": "Real-time whiteboard with latency calculators, load balancer stencils, and cache bottlenecks."
            },
            {
              "id": "tf_s3",
              "title": "AI Copilot Interview Proctoring",
              "description": "Analyzes problem-solving thought patterns and debugging perseverance while mitigating copy-paste cheating."
            }
          ]
        }
      },
      {
        "id": "tc15-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Hire the Top 1% of Engineering Talent Faster",
          "description": "Used by engineering leaders at Stripe, Datadog, and DoorDash.",
          "primaryButtonText": "Schedule Engineering Demo",
          "primaryButtonLink": "#demo"
        }
      },
      {
        "id": "tc15-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "TalentForge Technical Hiring Inc.",
          "copyrightText": "© 2026 TalentForge Technologies. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "tech-shopmatrix-01",
    "slug": "shopmatrix-headless-commerce",
    "name": "ShopMatrix High-Volume Headless Commerce Engine",
    "description": "Enterprise API-first e-commerce engine powering lightning-fast checkouts, multi-currency catalogs, and automated omnichannel inventory.",
    "industryId": "technology",
    "categoryId": "ecommerce-software",
    "collectionId": "enterprise-software",
    "designStyle": "modern-corporate",
    "tags": [
      "ecommerce",
      "headless commerce",
      "checkout",
      "api first",
      "shopify alternative"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "tc16-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "SHOPMATRIX",
          "primaryButtonText": "Explore Developer Sandbox",
          "primaryButtonLink": "#sandbox",
          "navLinks": [
            {
              "label": "Headless Checkout",
              "href": "#checkout"
            },
            {
              "label": "Catalog API",
              "href": "#catalog"
            },
            {
              "label": "Omnichannel Inventory",
              "href": "#inventory"
            }
          ]
        }
      },
      {
        "id": "tc16-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Handles 100,000 Orders Per Minute on Black Friday",
          "title": "The Composable Commerce Engine for High-Velocity Global Brands",
          "subtitle": "Decouple your frontend customer experience from legacy backend monoliths. Deliver sub-second product pages, one-click global checkouts, and real-time multi-warehouse synchronization.",
          "primaryButtonText": "Test Live Checkout API",
          "primaryButtonLink": "#sandbox",
          "imageUrl": "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "sm1",
              "label": "Black Friday Uptime",
              "value": "100.0%"
            },
            {
              "id": "sm2",
              "label": "Average Checkout Conversion Lift",
              "value": "+32%"
            }
          ]
        }
      },
      {
        "id": "tc16-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Engine Architecture",
          "items": [
            {
              "id": "sm_s1",
              "title": "Sub-Second Edge Checkout Engine",
              "description": "Zero redirect hosted checkout pre-filling addresses and processing Apple Pay, Google Pay, and Klarna."
            },
            {
              "id": "sm_s2",
              "title": "Multi-Region Omnichannel Inventory",
              "description": "Real-time stock synchronization across Shopify, Amazon, physical retail POS, and 3PL warehouses."
            },
            {
              "id": "sm_s3",
              "title": "Dynamic B2B & Wholesale Pricing Engine",
              "description": "Custom tiered price lists, net-30 terms, volume quantity discounts, and automated PO processing."
            }
          ]
        }
      },
      {
        "id": "tc16-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Migrate to Modern Composable Commerce Without Downtime",
          "description": "Our engineering architects guide your headless transition with pre-built Next.js starter templates.",
          "primaryButtonText": "Talk with a Commerce Architect",
          "primaryButtonLink": "#sandbox"
        }
      },
      {
        "id": "tc16-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "ShopMatrix Commerce Technologies",
          "copyrightText": "© 2026 ShopMatrix Inc. Powering global enterprise retail."
        }
      }
    ]
  },
  {
    "id": "tech-fortress-01",
    "slug": "fortresscloud-edge-hosting",
    "name": "FortressCloud Managed Edge Hosting & Anycast DNS",
    "description": "Global 300-location Anycast edge network with DDoS mitigation, automatic SSL, enterprise edge functions, and zero-downtime deploys.",
    "industryId": "technology",
    "categoryId": "hosting-provider",
    "collectionId": "developer-infrastructure",
    "designStyle": "dark-cinematic",
    "tags": [
      "hosting",
      "edge hosting",
      "anycast dns",
      "ddos protection",
      "cdn",
      "edge compute"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "tc17-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "FORTRESSCLOUD",
          "badge": "300+ Edge POPs Worldwide",
          "primaryButtonText": "Deploy Site in 10s",
          "primaryButtonLink": "#deploy",
          "navLinks": [
            {
              "label": "Global Network",
              "href": "#network"
            },
            {
              "label": "Edge Functions",
              "href": "#functions"
            },
            {
              "label": "DDoS Shield",
              "href": "#ddos"
            }
          ]
        }
      },
      {
        "id": "tc17-hero",
        "type": "hero",
        "variant": "hero-cinematic-dark",
        "visible": true,
        "content": {
          "badge": "Sub-15ms Round-Trip Worldwide • 180 Tbps Network Capacity",
          "title": "Serve Your Web Applications Closer to Your Users than Ever",
          "subtitle": "Static assets, dynamic SSR pages, and edge database queries executed across 300 global edge locations with automated multi-terabit DDoS scrubbing.",
          "primaryButtonText": "Deploy Your First Domain Free",
          "primaryButtonLink": "#deploy",
          "imageUrl": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "fc1",
              "label": "Global Edge Locations",
              "value": "312 Cities"
            },
            {
              "id": "fc2",
              "label": "DDoS Mitigation Capacity",
              "value": "185 Tbps"
            }
          ]
        }
      },
      {
        "id": "tc17-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "title": "Network Infrastructure",
          "items": [
            {
              "id": "fc_s1",
              "title": "Anycast DNS Resolution Under 5ms",
              "description": "Redundant global nameserver constellation routing users to the geographically closest server instantly."
            },
            {
              "id": "fc_s2",
              "title": "Serverless V8 Edge Compute Workers",
              "description": "Execute personalization, A/B testing, and authentication at the network edge with 0ms cold starts."
            },
            {
              "id": "fc_s3",
              "title": "Automated Layer 3/4 and 7 DDoS Shield",
              "description": "Absorbs volumetic SYN floods, UDP amplification, and HTTP layer 7 scraping automatically."
            }
          ]
        }
      },
      {
        "id": "tc17-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Accelerate Your Website by 40% in Just One DNS Switch",
          "description": "Point your nameservers to FortressCloud and see instant global TTFB drops.",
          "primaryButtonText": "Start Free Edge Hosting",
          "primaryButtonLink": "#deploy"
        }
      },
      {
        "id": "tc17-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "FortressCloud Edge Network Inc.",
          "copyrightText": "© 2026 FortressCloud. High availability guaranteed by 100% SLA."
        }
      }
    ]
  },
  {
    "id": "tech-cloudarch-01",
    "slug": "cloudarch-enterprise-it-consulting",
    "name": "CloudArch Enterprise Systems Integration",
    "description": "Premier cloud migration and systems architecture advisory modernizing mainframe monoliths into cloud-native microservices on AWS and Azure.",
    "industryId": "technology",
    "categoryId": "it-consulting",
    "collectionId": "enterprise-security",
    "designStyle": "modern-corporate",
    "tags": [
      "it consulting",
      "cloud migration",
      "enterprise architecture",
      "aws partner",
      "azure"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "tc18-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "CLOUDARCH CONSULTING",
          "badge": "AWS Premier Tier Partner",
          "primaryButtonText": "Consult an Architect",
          "primaryButtonLink": "#consult",
          "navLinks": [
            {
              "label": "Cloud Migration",
              "href": "#migration"
            },
            {
              "label": "Modernization Case Studies",
              "href": "#cases"
            },
            {
              "label": "Security & Compliance",
              "href": "#compliance"
            }
          ]
        }
      },
      {
        "id": "tc18-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Over 250 Enterprise Migrations Delivered with Zero Data Loss",
          "title": "Modernize Complex Legacy IT Monoliths into Agile Cloud Assets",
          "subtitle": "Our certified principal architects partner with Fortune 500 CIOs to decouple legacy systems, eliminate technical debt, and accelerate engineering release velocity.",
          "primaryButtonText": "Request Executive Architecture Assessment",
          "primaryButtonLink": "#consult",
          "imageUrl": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "ca1",
              "label": "Enterprise Migrations Completed",
              "value": "250+"
            },
            {
              "id": "ca2",
              "label": "Average Infrastructure Savings",
              "value": "42%"
            }
          ]
        }
      },
      {
        "id": "tc18-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Advisory Practice Areas",
          "items": [
            {
              "id": "ca_s1",
              "title": "Mainframe to Cloud-Native Migration",
              "description": "Deconstructing COBOL and legacy relational databases into event-driven Kafka microservices."
            },
            {
              "id": "ca_s2",
              "title": "Well-Architected Cloud Cost Optimization (FinOps)",
              "description": "Auditing multi-account AWS organizations to eliminate zombie resources and optimize savings plans."
            },
            {
              "id": "ca_s3",
              "title": "Enterprise Disaster Recovery & Multi-Region Resiliency",
              "description": "Designing active-active replication ensuring sub-minute RTO and RPO across geographic regions."
            }
          ]
        }
      },
      {
        "id": "tc18-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Plan Your Cloud Transformation with Industry Veteran Architects",
          "description": "Schedule an executive discovery workshop to evaluate migration feasibility and ROI.",
          "primaryButtonText": "Schedule Architecture Workshop",
          "primaryButtonLink": "#consult"
        }
      },
      {
        "id": "tc18-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "CloudArch Enterprise Systems Integration",
          "copyrightText": "© 2026 CloudArch Consulting Group. AWS & Azure Premier Partner."
        }
      }
    ]
  },
  {
    "id": "tech-edtech-01",
    "slug": "codeacademy-kids-coding",
    "name": "CodeAcademy Kids STEM & Game Coding Platform",
    "description": "Gamified interactive programming curriculum teaching kids ages 7-16 Python, Scratch, Roblox Lua, and Minecraft modding.",
    "industryId": "technology",
    "categoryId": "educational-technology",
    "collectionId": "online-learning",
    "designStyle": "bold-creative",
    "tags": [
      "edtech",
      "kids coding",
      "python for kids",
      "scratch",
      "roblox lua",
      "stem"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "tc19-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "CODEACADEMY KIDS",
          "primaryButtonText": "Free Trial Coding Class",
          "primaryButtonLink": "#trial",
          "navLinks": [
            {
              "label": "Roblox & Python",
              "href": "#courses"
            },
            {
              "label": "Parent Dashboard",
              "href": "#parents"
            },
            {
              "label": "Pricing Plans",
              "href": "#pricing"
            }
          ]
        }
      },
      {
        "id": "tc19-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Ages 7 to 16 • Gamified Learning Journey",
          "title": "Turn Screen Time into Real Future-Ready Coding Skills",
          "subtitle": "Kids build their own 3D Roblox worlds, code arcade games in Scratch, and create automated Python bots through bite-sized quests guided by live mentor coaches.",
          "primaryButtonText": "Claim 1-on-1 Free Trial Class",
          "primaryButtonLink": "#trial",
          "imageUrl": "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "ck1",
              "label": "Games Built by Students",
              "value": "180,000+"
            },
            {
              "id": "ck2",
              "label": "Average Student Rating",
              "value": "4.9 Stars"
            }
          ]
        }
      },
      {
        "id": "tc19-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Kid-Friendly Learning Paths",
          "items": [
            {
              "id": "ck_s1",
              "title": "Scratch Creative Storytelling (Ages 7-9)",
              "description": "Block-based coding logic teaching loops, variables, and animated character interactions."
            },
            {
              "id": "ck_s2",
              "title": "Roblox Game Design & Lua (Ages 10-13)",
              "description": "3D game mechanics, obstacle courses, player leaderboards, and real scripting fundamentals."
            },
            {
              "id": "ck_s3",
              "title": "Python Arcade & Discord Bots (Ages 12-16)",
              "description": "Real syntax programming building text RPG adventures and interactive community bots."
            }
          ]
        }
      },
      {
        "id": "tc19-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Watch Your Child Create Their First Playable Game in 50 Minutes",
          "description": "Try a 1-on-1 private lesson with a friendly coding coach completely free.",
          "primaryButtonText": "Book Free 50-Min Trial Class",
          "primaryButtonLink": "#trial"
        }
      },
      {
        "id": "tc19-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "CodeAcademy Kids STEM Platform",
          "copyrightText": "© 2026 CodeAcademy Kids Inc. Empowering young creators."
        }
      }
    ]
  },
  {
    "id": "tech-managedit-01",
    "slug": "apexcare-managed-it-services",
    "name": "ApexCare Managed IT & 24/7 Cyber Helpdesk",
    "description": "Complete outsourced IT department for mid-market businesses providing workstation management, remote employee onboarding, and SOC monitoring.",
    "industryId": "technology",
    "categoryId": "managed-it-services",
    "collectionId": "enterprise-security",
    "designStyle": "modern-corporate",
    "tags": [
      "managed it",
      "helpdesk",
      "msp",
      "it support",
      "endpoint security",
      "office 365"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "tc20-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "APEXCARE MANAGED IT",
          "badge": "24/7/365 US-Based Support",
          "primaryButtonText": "Get IT Quote in 5 Min",
          "primaryButtonLink": "#quote",
          "navLinks": [
            {
              "label": "Managed Services",
              "href": "#services"
            },
            {
              "label": "Security & Backup",
              "href": "#security"
            },
            {
              "label": "Pricing per Seat",
              "href": "#pricing"
            }
          ]
        }
      },
      {
        "id": "tc20-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Average Helpdesk Response Time: 4 Minutes",
          "title": "Your Complete, Reliable Outsourced Corporate IT Department",
          "subtitle": "Never worry about computer crashes, malware outbreaks, or slow employee laptop setup again. We handle your entire IT ecosystem for one predictable monthly fee per seat.",
          "primaryButtonText": "Calculate Your IT Support Cost",
          "primaryButtonLink": "#quote",
          "imageUrl": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "ac1",
              "label": "Helpdesk Call Answer Time",
              "value": "< 60 Seconds"
            },
            {
              "id": "ac2",
              "label": "Endpoints Protected",
              "value": "35,000+ Devices"
            }
          ]
        }
      },
      {
        "id": "tc20-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Comprehensive Managed Services",
          "items": [
            {
              "id": "ac_s1",
              "title": "24/7 Live End-User Helpdesk Support",
              "description": "Immediate remote screen-share resolution for Windows, Mac, printer, and software issues."
            },
            {
              "id": "ac_s2",
              "title": "Automated Employee Laptop Provisioning",
              "description": "Zero-touch drop-shipping of pre-configured laptops with BitLocker and company apps direct to new hires."
            },
            {
              "id": "ac_s3",
              "title": "Managed Ransomware Defense & Backup",
              "description": "Immutable cloud backups, automated patch management, and EDR endpoint antivirus protection."
            }
          ]
        }
      },
      {
        "id": "tc20-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Eliminate Tech Headaches for Your Entire Company",
          "description": "Transparent flat-rate per-user pricing with zero long-term lock-in contracts.",
          "primaryButtonText": "Get Custom MSP Pricing",
          "primaryButtonLink": "#quote"
        }
      },
      {
        "id": "tc20-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "ApexCare Managed IT Solutions",
          "copyrightText": "© 2026 ApexCare Managed Services LLC. Certified Microsoft Cloud Partner."
        }
      }
    ]
  },
  {
    "id": "tech-cognitive-01",
    "slug": "cognitiveflow-ai-agent-engine",
    "name": "CognitiveFlow Autonomous AI Agent Engine",
    "description": "Enterprise generative AI platform orchestrating multimodal reasoning agents with real-time enterprise search, RAG, and compliance auditing.",
    "industryId": "technology",
    "categoryId": "ai-product",
    "collectionId": "developer-infrastructure",
    "designStyle": "technology-gradient",
    "tags": [
      "ai product",
      "enterprise ai",
      "autonomous agents",
      "rag",
      "llm",
      "generative ai"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "tc21-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "COGNITIVEFLOW",
          "badge": "Enterprise AI Platform",
          "primaryButtonText": "Schedule Architecture Demo",
          "primaryButtonLink": "#demo",
          "navLinks": [
            {
              "label": "RAG Architecture",
              "href": "#rag"
            },
            {
              "label": "Security & Privacy",
              "href": "#security"
            },
            {
              "label": "Client Case Studies",
              "href": "#cases"
            }
          ]
        }
      },
      {
        "id": "tc21-hero",
        "type": "hero",
        "variant": "hero-cinematic-dark",
        "visible": true,
        "content": {
          "badge": "Hallucination Rate Under 0.05% • Zero Data Training Guarantee",
          "title": "Empower Your Enterprise Workforce with Grounded AI Intelligence",
          "subtitle": "Connect your internal Confluence, Google Drive, Jira, and Salesforce records into high-accuracy reasoning agents that research, draft, and execute multi-step operations.",
          "primaryButtonText": "Request Enterprise Trial",
          "primaryButtonLink": "#demo",
          "imageUrl": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "cf1",
              "label": "Hallucination Benchmark Rate",
              "value": "< 0.05%"
            },
            {
              "id": "cf2",
              "label": "Enterprise Documents Indexed",
              "value": "500M+ Docs"
            }
          ]
        }
      },
      {
        "id": "tc21-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "title": "Enterprise AI Architecture",
          "items": [
            {
              "id": "cf_s1",
              "title": "Hybrid Dense & Sparse Semantic RAG",
              "description": "Combining BM25 keyword matching with vector embeddings to locate exact clauses across millions of files."
            },
            {
              "id": "cf_s2",
              "title": "Granular Role-Based Access Controls (RBAC)",
              "description": "AI responses strictly inherit user document permissions, preventing unauthorized internal data leaks."
            },
            {
              "id": "cf_s3",
              "title": "Complete Traceability & Source Citations",
              "description": "Every claim is footnoted with clickable links directly highlighting original source sentences in original PDFs."
            }
          ]
        }
      },
      {
        "id": "tc21-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Bring True Generative AI Capabilities into Your Organization",
          "description": "Deploy on dedicated single-tenant VPCs or managed cloud with zero customer data retention.",
          "primaryButtonText": "Book Enterprise AI Briefing",
          "primaryButtonLink": "#demo"
        }
      },
      {
        "id": "tc21-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "CognitiveFlow AI Systems Inc.",
          "copyrightText": "© 2026 CognitiveFlow Inc. Built for enterprise compliance."
        }
      }
    ]
  },
  {
    "id": "tech-quantumscale-01",
    "slug": "quantumscale-distributed-database",
    "name": "QuantumScale Distributed Cloud Database",
    "description": "Globally distributed multi-model database engine delivering multi-master replication, ACID guarantees, and zero-downtime schema migrations.",
    "industryId": "technology",
    "categoryId": "software-company",
    "collectionId": "developer-infrastructure",
    "designStyle": "technology-gradient",
    "tags": [
      "database",
      "distributed database",
      "acid",
      "multi-region",
      "cloud database"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "tc22-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "QUANTUMSCALE",
          "primaryButtonText": "Start Free Cluster",
          "primaryButtonLink": "#cluster",
          "navLinks": [
            {
              "label": "Multi-Region ACID",
              "href": "#acid"
            },
            {
              "label": "Zero-Downtime Migrations",
              "href": "#migrations"
            },
            {
              "label": "Pricing Calculator",
              "href": "#pricing"
            }
          ]
        }
      },
      {
        "id": "tc22-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "Active-Active Multi-Master Distributed Architecture",
          "title": "The Database That Never Goes Down, Anywhere on Earth",
          "subtitle": "Write data anywhere in the world and read it locally with guaranteed serializable transactions, automatic geographic sharding, and zero manual failover gymnastics.",
          "primaryButtonText": "Create 5GB Free Cluster",
          "primaryButtonLink": "#cluster",
          "imageUrl": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "qs1",
              "label": "Availability SLA",
              "value": "99.999% SLA"
            },
            {
              "id": "qs2",
              "label": "Automatic Global Replication",
              "value": "< 80ms Worldwide"
            }
          ]
        }
      },
      {
        "id": "tc22-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Distributed Database Features",
          "items": [
            {
              "id": "qs_s1",
              "title": "Global Multi-Region Active Replication",
              "description": "Users read and write to their closest geographic region while consensus maintains serializable ACID state."
            },
            {
              "id": "qs_s2",
              "title": "Instant Online Non-Blocking Schema Migrations",
              "description": "Add columns, create indexes, and modify types on production tables with zero table locking."
            },
            {
              "id": "qs_s3",
              "title": "Native SQL + Document JSON Querying",
              "description": "Combine structured relational joins with schemaless JSON document querying in unified queries."
            }
          ]
        }
      },
      {
        "id": "tc22-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Eliminate Database Maintenance Windows Forever",
          "description": "Spin up a multi-region cluster in under 60 seconds on AWS, GCP, or Azure.",
          "primaryButtonText": "Deploy Free Database Cluster",
          "primaryButtonLink": "#cluster"
        }
      },
      {
        "id": "tc22-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "QuantumScale Distributed Database Systems",
          "copyrightText": "© 2026 QuantumScale Database Inc. All rights reserved."
        }
      }
    ]
  },
  {
    "id": "tech-pulsemetric-01",
    "slug": "pulsemetric-product-analytics",
    "name": "PulseMetric Product Analytics & Session Replay",
    "description": "Privacy-first product analytics platform combining visual session replays, funnel drop-off analysis, feature flag rollouts, and heatmaps.",
    "industryId": "technology",
    "categoryId": "saas-product",
    "collectionId": "developer-tools",
    "designStyle": "modern-corporate",
    "tags": [
      "product analytics",
      "session replay",
      "heatmaps",
      "conversion rate",
      "funnel analysis"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "tc23-nav",
        "type": "navbar",
        "variant": "navbar-solid-pill",
        "visible": true,
        "content": {
          "title": "PULSEMETRIC",
          "primaryButtonText": "Start Free Tracking",
          "primaryButtonLink": "#signup",
          "navLinks": [
            {
              "label": "Session Replay",
              "href": "#replay"
            },
            {
              "label": "Funnels & Retention",
              "href": "#funnels"
            },
            {
              "label": "Feature Flags",
              "href": "#flags"
            }
          ]
        }
      },
      {
        "id": "tc23-hero",
        "type": "hero",
        "variant": "hero-split",
        "visible": true,
        "content": {
          "badge": "100% GDPR & HIPAA Compliant • Client-Side Masking",
          "title": "See Exactly Why Users Convert, Rage-Click, or Drop Off",
          "subtitle": "Watch high-definition session recordings paired with automated conversion funnel drop-offs, user journey paths, and targeted feature flag rollouts in one script.",
          "primaryButtonText": "Install Lightweight SDK (Free)",
          "primaryButtonLink": "#signup",
          "imageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "pm1",
              "label": "Client SDK Script Size",
              "value": "< 14 KB Gzipped"
            },
            {
              "id": "pm2",
              "label": "Weekly Sessions Analyzed",
              "value": "80 Million"
            }
          ]
        }
      },
      {
        "id": "tc23-srv",
        "type": "services",
        "variant": "services-grid",
        "visible": true,
        "content": {
          "title": "Analytics Capabilities",
          "items": [
            {
              "id": "pm_s1",
              "title": "High-Fidelity DOM Session Replay",
              "description": "Pixel-perfect playback showing where users get stuck, with auto-masking of passwords and card details."
            },
            {
              "id": "pm_s2",
              "title": "Multi-Step Conversion Funnel Drop-offs",
              "description": "Instantly pinpoint the exact step where users abandon signup or checkout flows."
            },
            {
              "id": "pm_s3",
              "title": "Integrated Feature Flags & A/B Testing",
              "description": "Roll out new UI variants to 10% of users and measure impact on retention in real time."
            }
          ]
        }
      },
      {
        "id": "tc23-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Start Understanding Your Users Better in 5 Minutes",
          "description": "Free plan includes 10,000 monthly recorded sessions forever.",
          "primaryButtonText": "Get Started with PulseMetric",
          "primaryButtonLink": "#signup"
        }
      },
      {
        "id": "tc23-foot",
        "type": "footer",
        "variant": "footer-minimal-clean",
        "visible": true,
        "content": {
          "title": "PulseMetric Product Analytics Inc.",
          "copyrightText": "© 2026 PulseMetric Technologies. Privacy first analytics."
        }
      }
    ]
  },
  {
    "id": "tech-neuralvoice-01",
    "slug": "neuralvoice-ai-audio-synthesis",
    "name": "NeuralVoice Ultra-Realistic Audio Synthesis",
    "description": "Generative voice AI platform generating indistinguishable human speech in 32 languages with emotional inflection, voice cloning, and sub-100ms latency.",
    "industryId": "technology",
    "categoryId": "ai-startup",
    "collectionId": "developer-tools",
    "designStyle": "technology-gradient",
    "tags": [
      "ai voice",
      "text to speech",
      "voice cloning",
      "audio ai",
      "speech synthesis"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "sections": [
      {
        "id": "tc24-nav",
        "type": "navbar",
        "variant": "navbar-glass",
        "visible": true,
        "content": {
          "title": "NEURALVOICE",
          "primaryButtonText": "Test Voice Playground",
          "primaryButtonLink": "#playground",
          "navLinks": [
            {
              "label": "Voice Library",
              "href": "#voices"
            },
            {
              "label": "Real-Time Streaming API",
              "href": "#streaming"
            },
            {
              "label": "Pricing per Character",
              "href": "#pricing"
            }
          ]
        }
      },
      {
        "id": "tc24-hero",
        "type": "hero",
        "variant": "hero-cinematic-dark",
        "visible": true,
        "content": {
          "badge": "Streaming Audio Latency Under 95 Milliseconds",
          "title": "Lifelike Human Voice Synthesis with Real Breath and Emotion",
          "subtitle": "Generate broadcast-quality voiceovers, conversational gaming NPCs, and real-time interactive phone agents with nuanced pauses, laughter, and emotional tone.",
          "primaryButtonText": "Listen to Voice Samples",
          "primaryButtonLink": "#playground",
          "imageUrl": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
          "stats": [
            {
              "id": "nv1",
              "label": "Real-Time WebSocket Latency",
              "value": "92 Milliseconds"
            },
            {
              "id": "nv2",
              "label": "Supported Global Languages",
              "value": "32 Dialects"
            }
          ]
        }
      },
      {
        "id": "tc24-srv",
        "type": "services",
        "variant": "services-bento",
        "visible": true,
        "content": {
          "title": "Voice AI Capabilities",
          "items": [
            {
              "id": "nv_s1",
              "title": "Real-Time Low-Latency WebSocket Streaming",
              "description": "Stream generated audio chunks directly into telephony and voice agents with sub-100ms response."
            },
            {
              "id": "nv_s2",
              "title": "Instant Zero-Shot Voice Cloning (60 Seconds)",
              "description": "Provide a 1-minute clean audio sample to create an exact digital twin voice with full consent security."
            },
            {
              "id": "nv_s3",
              "title": "Emotional Tone & Cadence Control Tags",
              "description": "Fine-tune whispering, urgency, sarcasm, and laughter with simple inline SSML emotional markers."
            }
          ]
        }
      },
      {
        "id": "tc24-cta",
        "type": "cta",
        "variant": "cta-banner-glow",
        "visible": true,
        "content": {
          "title": "Hear the Difference True Neural Audio Makes",
          "description": "Includes 10,000 free characters every month to test our developer API.",
          "primaryButtonText": "Try NeuralVoice Playground",
          "primaryButtonLink": "#playground"
        }
      },
      {
        "id": "tc24-foot",
        "type": "footer",
        "variant": "footer-dark-editorial",
        "visible": true,
        "content": {
          "title": "NeuralVoice AI Technologies Inc.",
          "copyrightText": "© 2026 NeuralVoice Inc. Ethical Voice Cloning Standards."
        }
      }
    ]
  }
];
