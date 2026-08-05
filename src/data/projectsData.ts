export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  stackLabel: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string[];
  metrics: string[];
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "nexus-market-intelligence",
    title: "Nexus — Autonomous Multi-Agent Market Intelligence System",
    category: "AI Multi-Agent System",
    stackLabel: "AI MULTI-AGENT ARCHITECTURE",
    summary: "Autonomous 5-agent AI framework for end-to-end B2B lead generation, market intelligence research, ICP lead scoring, hyper-personalized sales strategy generation, and multi-channel outreach execution (Email + WhatsApp).",
    problem: "B2B sales and agency teams waste hundreds of manual hours searching local market grids, validating lead emails, scoring Ideal Customer Profile (ICP) fit, and drafting individual pitch emails.",
    solution: "Engineered an autonomous 5-agent pipeline orchestrated via a central agent registry, featuring a 3-stage AI provider cascade (Gemini Primary ➔ Gemini Backup ➔ Sarvam AI) and real-time Server-Sent Events (SSE) telemetry.",
    architecture: [
      "Agent 1 (Market Intel) & Agent 2 (Grid Density Scraper + Deep Email Verifier)",
      "Agent 3 (ICP Scorer) & Agent 4 (Personalized Pitch Hook & Pain-Point Strategist)",
      "Agent 5 (Multi-Channel Outreach Sequencer via Nodemailer/IMAP & WhatsApp Web JS)",
      "Supabase PostgreSQL data store with incremental state checkpoint resumption"
    ],
    metrics: [
      "🤖 5-Agent Autonomous Pipeline",
      "⚡ 3-Tier AI Fallback Cascade (Gemini + Sarvam)",
      "📬 Multi-Channel Execution (Email + WhatsApp)"
    ],
    technologies: ["Node.js", "Express", "React 19", "Supabase", "PostgreSQL", "Gemini AI", "Sarvam AI", "WhatsApp Web JS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    featured: true
  },
  {
    id: "nexara-trend-intelligence",
    title: "Nexara — AI Trend & Product Discovery Engine",
    category: "AI & E-Commerce",
    stackLabel: "AI E-COMMERCE ENGINE",
    summary: "Automated AI-driven e-commerce product discovery and validation platform. Discovers viral TikTok candidates (>100k views), validates supplier metrics on AliExpress, checks Meta Ads Library saturation, and scores products dynamically via a weighted learning loop.",
    problem: "E-commerce sellers burn thousands of dollars testing saturated, low-margin products discovered manually through unverified social media trends.",
    solution: "Developed a dynamic modular pipeline engine executing automated scan strategies (TikTok Scraper ➔ AI Product Detector ➔ Supplier Validator ➔ Meta Ads Validator ➔ AI Desire Analysis ➔ Weighted Learning Loop Scoring).",
    architecture: [
      "Fastify 4 API server with MongoDB & Mongoose persistent schema models",
      "Multi-tier AI provider fallback chain (Gemini ➔ Sarvam AI ➔ OpenAI)",
      "3-tier supplier validation (Apify ➔ RapidAPI ➔ AliExpress DataHub) & Meta Ads Library checker",
      "Self-learning feedback loop dynamically adjusting keyword weights based on historical product success scores"
    ],
    metrics: [
      "🔥 100k+ View TikTok Viral Scraper",
      "📦 3-Tier Supplier & Ad Saturation Validation",
      "🧠 Self-Learning Weighted Scoring Loop"
    ],
    technologies: ["Node.js", "Fastify", "Next.js 16", "React 19", "MongoDB", "Gemini AI", "Sarvam AI", "Apify"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    featured: true
  },
  {
    id: "auco-codegen",
    title: "Auco — Generative UI & Production Code Scaffolding Compiler",
    category: "AI & Code Generation",
    stackLabel: "GENERATIVE UI BUILDER",
    summary: "Modern frontend application builder that transforms plain-language ideas into production-ready user interfaces, automatically handling UI generation, component structuring, and live preview workflows.",
    problem: "Developers and creators waste hours manually scaffolding React components, setting up CSS layouts, and translating wireframe text into functional frontend code.",
    solution: "Built a generative UI platform utilizing React and Node.js that parses natural language prompts, constructs modular component hierarchies, and renders live interactive previews with iterative editing.",
    architecture: [
      "React + Node.js modular project generator and live preview compiler sandbox",
      "Automated Tailwind CSS class generator & layout structural validator",
      "State preservation engine allowing real-time prompt-driven code iteration"
    ],
    metrics: [
      "✨ Instant Plain-Language UI Generation",
      "⚡ Live Interactive Component Preview",
      "🛠️ Production-Ready Code Export"
    ],
    technologies: ["React", "Node.js", "TypeScript", "Tailwind CSS", "Vite", "ShadCN UI"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    featured: true
  },
  {
    id: "appy-rag-bot",
    title: "Appy — Gemini RAG Conversational Assistant Platform",
    category: "AI & Machine Learning",
    stackLabel: "GEMINI RAG PLATFORM",
    summary: "Production-grade conversational assistant platform built with Gemini integration and RAG architecture, enabling multi-turn memory, document Q&A, and semantic search.",
    problem: "Standard chatbots lack domain knowledge context and hallucinate when answering questions from internal company documents or complex user knowledge bases.",
    solution: "Engineered a Retrieval-Augmented Generation (RAG) assistant using Google Gemini API, vector embeddings, and document chunking for context-precise conversational responses.",
    architecture: [
      "Gemini AI LLM API integration with multi-turn conversation memory store",
      "Vector embeddings & document parser for PDF, Markdown, and TXT knowledge bases",
      "Semantic similarity search pipeline for instant context injection"
    ],
    metrics: [
      "🤖 Multi-Turn Context Memory",
      "📄 Document-Based Knowledge Q&A",
      "🔍 Semantic Search Retrieval"
    ],
    technologies: ["React", "Node.js", "Gemini API", "RAG Architecture", "Vector Search", "Express"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    featured: true
  },
  {
    id: "leadingly-voice-diagram",
    title: "Leadingly — Voice-to-Diagram Architectural Compiler",
    category: "AI & Code Generation",
    stackLabel: "VOICE ARCHITECTURE COMPILER",
    summary: "Real-time voice interpretation system parsing natural speech commands into interactive Mermaid.js AST diagrams, sequence flows, and system architecture blueprints.",
    problem: "Engineering leaders waste valuable meeting minutes manually drawing flowcharts instead of capturing system design decisions instantly.",
    solution: "Integrated Web Speech API real-time recognition with an LLM grammar parser that translates natural spoken instructions into structured AST diagrams rendered dynamically on canvas.",
    architecture: [
      "Web Speech API audio stream parser & NLP instruction extractor",
      "Mermaid.js AST canvas compiler with live layout re-calculation",
      "Export suite to SVG, PNG, and structural JSON schema"
    ],
    metrics: [
      "🎙️ Hands-Free Voice-to-Diagram",
      "⚡ Real-Time AST Visual Compilation",
      "📐 Automated Layout Structuring"
    ],
    technologies: ["React", "Node.js", "Web Speech API", "Mermaid.js", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    featured: false
  },
  {
    id: "zenith-accounting-platform",
    title: "Zenith — Enterprise Multi-Currency Financial Platform",
    category: "Enterprise Software",
    stackLabel: "ENTERPRISE FINANCIAL SYSTEM",
    summary: "Full-stack accounting management platform featuring double-entry ledger book, automated multi-currency conversion, invoice PDF generation, and balance sheet auditing.",
    problem: "SMEs struggle with manual spreadsheets, missing audit trails, and complex tax calculations across multi-currency client invoices.",
    solution: "Architected a type-safe accounting application using React, NestJS, and PostgreSQL with atomic database transactions to ensure zero financial record discrepancies.",
    architecture: [
      "NestJS microservice backend with PostgreSQL double-entry transaction ledger",
      "Prisma ORM with strict decimal precision types & audit log triggers",
      "React UI with TanStack Query caching and Zustand state hydration"
    ],
    metrics: [
      "⚖️ 100% Atomic Ledger Transactions",
      "💱 Real-Time Forex API Exchange",
      "📊 Automated Audit & Tax Reports"
    ],
    technologies: ["React", "NestJS", "TypeScript", "PostgreSQL", "Prisma ORM", "TanStack Query", "Zustand"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    featured: false
  },
  {
    id: "shopify-erp-sync",
    title: "Shopify ERP Sync Engine & Order Automation Tool",
    category: "eCommerce Systems",
    stackLabel: "ECOMMERCE ERP AUTOMATION",
    summary: "High-throughput webhook synchronization service connecting Shopify Admin GraphQL APIs with custom warehouse inventory databases.",
    problem: "E-commerce stores suffer overselling and stock discrepancies when order spikes outpace manual inventory adjustments.",
    solution: "Engineered an asynchronous Node.js webhook listener using Redis pub/sub queue worker to process 1,000+ stock sync operations per minute.",
    architecture: [
      "Node.js Express API with Redis BullMQ queue processing",
      "Shopify GraphQL Admin API & Webhooks subscriber",
      "MongoDB state tracker ensuring idempotent webhook processing"
    ],
    metrics: [
      "⚡ 1,000+ Sync Ops / Minute",
      "🛡️ Idempotent Webhook Processing",
      "📦 Sub-Second Inventory Balance"
    ],
    technologies: ["Node.js", "Express", "Shopify API", "Redis", "BullMQ", "MongoDB", "GraphQL"],
    image: "https://images.unsplash.com/photo-1556742049-0a67568d04e3?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    featured: false
  }
];
