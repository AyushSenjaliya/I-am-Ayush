import { useState } from "react";
import {
  ArrowUpRight,
  Github,
  Calculator,
  ShoppingCart,
  Calendar,
  BarChart3,
  TrendingUp,
  LayoutDashboard,
  ExternalLink,
  Sparkles,
  FileText,
  Bot,
  Code2,
  Mic,
  Smartphone,
  Layers,
  Building,
  Target,
  Flame
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectModal, { DetailedProject } from "./ProjectModal";
import Card3DTilt from "./Card3DTilt";
import ProjectSandbox from "./ProjectSandbox";

interface ProjectItem extends DetailedProject {
  id: string;
  icon: React.ReactNode;
  filterCategory: "ai_codegen" | "realtime_mobile" | "enterprise_ecom";
}

const projectsList: ProjectItem[] = [
  {
    id: "nexus-market-intelligence",
    title: "Nexus - Market Intelligence & Outreach Platform",
    category: "AI Multi-Agent System",
    filterCategory: "ai_codegen",
    summary: "Autonomous multi-agent AI framework for end-to-end B2B lead generation, market intelligence research, ICP lead scoring, hyper-personalized sales strategy generation, and multi-channel outreach execution (Email + WhatsApp).",
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
    technologies: ["Node.js", "Express", "React", "Vite", "Supabase", "PostgreSQL", "Gemini AI", "Sarvam AI", "WhatsApp Web JS", "Apify", "Cheerio"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    icon: <Target size={24} className="text-highlight" />
  },
  {
    id: "nexara-trend-intelligence",
    title: "Nexara - AI Trend & Product Discovery Engine",
    category: "AI & E-Commerce",
    filterCategory: "ai_codegen",
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
    technologies: ["Node.js", "Fastify", "Next.js 16", "React 19", "MongoDB", "Mongoose", "Gemini AI", "Sarvam AI", "OpenAI", "Apify", "RapidAPI"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    icon: <Flame size={24} className="text-highlight" />
  },
  {
    id: "auco-codegen",
    title: "Auco - Code Generation Platform",
    category: "AI & Code Generation",
    filterCategory: "ai_codegen",
    summary: "Modern frontend application builder that transforms plain-language ideas into production-ready user interfaces, automatically handling UI generation, component structuring, and live preview workflows.",
    problem: "Developers and non-technical creators waste hours manually scaffolding React components, setting up CSS layouts, and translating wireframe text into functional frontend code.",
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
    icon: <Code2 size={24} className="text-highlight" />
  },
  {
    id: "appy-rag-bot",
    title: "Appy - Gemini RAG Chatbot Platform",
    category: "AI & Machine Learning",
    filterCategory: "ai_codegen",
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
    icon: <Bot size={24} className="text-highlight" />
  },
  {
    id: "leadingly-voice-diagram",
    title: "Leadingly - Voice Diagram Generation",
    category: "AI & Code Generation",
    filterCategory: "ai_codegen",
    summary: "Voice-based diagram creation system converting natural spoken instructions into structured visual workflows, mind maps, and architecture diagrams in real time.",
    problem: "Visualizing system architecture during meetings is slow when manually dragging boxes and arrows in static drawing software.",
    solution: "Designed a Web Speech API interpretation pipeline that listens to spoken commands, extracts flow logic, and dynamically renders visual diagrams in real time.",
    architecture: [
      "Web Speech API real-time voice recognition & NLP instruction parser",
      "Dynamic node-graph rendering engine for workflows and mind maps",
      "Export pipeline to PNG/SVG & SVG live canvas manipulation"
    ],
    metrics: [
      "🎙️ Hands-Free Voice-to-Diagram",
      "⚡ Real-Time Mind Map Rendering",
      "📐 Automated Layout Structuring"
    ],
    technologies: ["React", "Node.js", "Web Speech API", "SVG/Canvas", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    icon: <Mic size={24} className="text-highlight" />
  },
  {
    id: "codium-developer-tool",
    title: "Codium - Design-to-Code Workspace",
    category: "Developer Tooling",
    filterCategory: "enterprise_ecom",
    summary: "Modern design engineering workspace unifying a Figma-like visual canvas with a VS Code-inspired IDE interface, enabling live design-to-code synchronization.",
    problem: "Designers and frontend developers suffer from friction during handoff, leading to layout inconsistencies and repetitive coding of UI specs.",
    solution: "Architected a desktop developer workspace in Electron.js that bidirectionally syncs visual drag-and-drop design elements with clean React code.",
    architecture: [
      "Electron.js desktop application framework with multi-window IPC communication",
      "Visual canvas rendering engine with live CSS code bi-directional parser",
      "Monaco Editor integration providing VS Code-like editing and syntax highlighting"
    ],
    metrics: [
      "🎨 Figma + VS Code Unified IDE",
      "🔄 Bi-Directional Design-to-Code Sync",
      "⚡ Instant React Component Export"
    ],
    technologies: ["Electron.js", "React", "TypeScript", "Monaco Editor", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    icon: <Layers size={24} className="text-highlight" />
  },
  {
    id: "wealthbook-mobile",
    title: "WealthBook - Mobile Finance Assistant",
    category: "Mobile Application",
    filterCategory: "realtime_mobile",
    summary: "Modern React Native mobile finance assistant for managing income, expenses, assets, liabilities, savings goals, and real-time wealth analytics.",
    problem: "Personal finance tracking applications are often cluttered, lack asset/liability tracking, or fail to provide visual financial health insights.",
    solution: "Built a cross-platform mobile application in React Native featuring smart budgeting, transaction categorizers, and wealth analytics dashboards.",
    architecture: [
      "React Native cross-platform mobile architecture (iOS & Android)",
      "Local encrypted SQLite storage & optional cloud sync API",
      "Visual chart analytics for expense breakdown & net worth trajectory"
    ],
    metrics: [
      "📱 Cross-Platform iOS & Android",
      "💰 Assets & Liabilities Management",
      "📊 Smart Budgeting Insights"
    ],
    technologies: ["React Native", "TypeScript", "Node.js", "SQLite", "Victory Charts"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    icon: <Smartphone size={24} className="text-highlight" />
  },
  {
    id: "stock-analytics",
    title: "Real-Time Stock Market Analytics Platform",
    category: "Real-Time Systems",
    filterCategory: "realtime_mobile",
    summary: "Data-driven trading platform displaying live stock market tick data, Futures & Options (F&O), OHLC charts, and Implied Volatility (IV) metrics.",
    problem: "Traders face latency bottlenecks when processing live F&O data streams across traditional HTTP polling endpoints.",
    solution: "Engineered a low-latency WebSockets streaming engine with Kafka queues and Redis caching to process live tick data under 50ms.",
    architecture: [
      "NestJS microservices communicating over Apache Kafka pub/sub queues",
      "Redis snapshot cache for instant tick lookups",
      "WebSocket room broadcasting for customizable live watchlists"
    ],
    metrics: [
      "⚡ <50ms End-to-End Latency",
      "📈 F&O, OHLC & IV Charts",
      "🔒 99.9% Uptime Stream Target"
    ],
    technologies: ["React", "TypeScript", "NestJS", "WebSockets", "Kafka", "Redis", "MySQL", "Prisma"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    icon: <TrendingUp size={24} className="text-highlight" />
  },
  {
    id: "ecom-oms",
    title: "Ecommerce Order Management System",
    category: "Enterprise Systems",
    filterCategory: "enterprise_ecom",
    summary: "Automated eCommerce order management system integrated with Shopify, featuring automated 3-step WhatsApp confirmation flows and courier auto-dispatching.",
    problem: "E-commerce merchants lose revenue to unconfirmed COD orders, manual shipping errors, and fragmented tracking.",
    solution: "Designed a centralized order processing pipeline with automated WhatsApp API webhooks and smart courier auto-assignment.",
    architecture: [
      "Shopify Admin API webhook listeners for real-time order import",
      "Automated WhatsApp 3-step verification state machine",
      "Courier API integrations (Shiprocket) for auto-label dispatch"
    ],
    metrics: [
      "📉 25% Reduction in Order Cancellation",
      "🚀 100% Automated Courier Dispatch",
      "📦 Complete Pickup to Delivery Tracking"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Shopify API"],
    image: "/ecom.jpg",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    icon: <LayoutDashboard size={24} className="text-highlight" />
  },
  {
    id: "import-maxzope",
    title: "Import Business Management System (Maxzope)",
    category: "Enterprise Systems",
    filterCategory: "enterprise_ecom",
    summary: "Comprehensive import business management platform built for Maxzope, covering order placement, container tracking, warehouse operations, and sales stock maintenance.",
    problem: "Maxzope faced logistics bottlenecks tracking international containers, warehouse stock allocation, and multi-supplier sales reporting.",
    solution: "Built an integrated logistics platform for ordering, container management, stock maintenance, and sales analytics.",
    architecture: [
      "Next.js server-rendered dashboard for fast inventory queries",
      "Container lifecycle tracking state manager",
      "MongoDB database modeling multi-warehouse stock balances"
    ],
    metrics: [
      "📦 Container & Warehouse Operations Sync",
      "📊 Comprehensive Sales & Stock Reporting",
      "🚢 Streamlined Import Logistics"
    ],
    technologies: ["Next.js", "Node.js", "Redux", "MongoDB", "MUI", "AWS"],
    image: "https://images.unsplash.com/photo-1618317502010-1a3a94ab9b75?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    icon: <Building size={24} className="text-highlight" />
  },
  {
    id: "clinic-mgmt",
    title: "Clinic Management System",
    category: "Healthcare Solutions",
    filterCategory: "realtime_mobile",
    summary: "Healthcare solution featuring WhatsApp-based appointment booking, digital patient records, and doctor scheduling built for smooth real-time performance.",
    problem: "Clinics experience manual front-desk bottlenecks, missed patient appointments, and paper record disorganization.",
    solution: "Built a unified digital clinic application with automated WhatsApp appointment booking and doctor schedule management.",
    architecture: [
      "NestJS REST service with Prisma ORM for patient records",
      "WhatsApp Business API webhooks for instant appointment confirmation",
      "Redis session caching for doctor schedule availability"
    ],
    metrics: [
      "🩺 50% Faster Patient Intake",
      "📱 Automated WhatsApp Booking",
      "📋 Digital EHR Record Compliance"
    ],
    technologies: ["React", "TypeScript", "NestJS", "Prisma", "Redis", "ShadCN"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    icon: <Calendar size={24} className="text-highlight" />
  },
  {
    id: "garment-costing",
    title: "Garment Costing Calculator",
    category: "Manufacturing Tools",
    filterCategory: "enterprise_ecom",
    summary: "Specialized tool for garment manufacturers to calculate production costs, manage raw materials, and create accurate client pricing estimates.",
    problem: "Garment manufacturers rely on error-prone spreadsheets for fabric consumption and production quotes.",
    solution: "Engineered a precise formula-based costing engine calculating fabric yards, labor hours, and margin quotes.",
    architecture: [
      "Vite + React 18 client for instant multi-variable calculations",
      "NestJS backend storing fabric cost master tables",
      "Proposal generator creating client PDF estimates"
    ],
    metrics: [
      "🧵 Accurate Production Cost Planning",
      "⏱️ Estimates Generated in <2 Mins",
      "📉 Reduced Material Waste"
    ],
    technologies: ["React", "TypeScript", "Tailwind", "NestJS", "MySQL", "Prisma"],
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    icon: <BarChart3 size={24} className="text-highlight" />
  },
  {
    id: "accounting-mgmt",
    title: "Accounting Management System",
    category: "Financial Systems",
    filterCategory: "enterprise_ecom",
    summary: "Accounting management system for tracking expenses and incomes for individuals and companies, featuring an interactive financial dashboard.",
    problem: "Businesses encounter accounting errors with manual income/expense spreadsheets and fragmented billing.",
    solution: "Designed a financial accounting management system with interactive charts, financial tracking, and React Hook Form validation.",
    architecture: [
      "React + React Hook Form + TanStack Query async state layer",
      "Zustand global store for multi-account ledger state",
      "Chart.js visualizers for income vs expense analytics"
    ],
    metrics: [
      "💼 Complete Expense & Income Tracking",
      "📊 Interactive Dashboard Analytics",
      "⚡ Fast API Integration & State Sync"
    ],
    technologies: ["React", "React Hook Form", "TanStack Query", "Zustand", "ShadCN", "Chart.js"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    icon: <Calculator size={24} className="text-highlight" />
  }
];

const ProjectsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<DetailedProject | null>(null);

  const filteredProjects = projectsList.filter((p) => {
    if (selectedFilter === "all") return true;
    return p.filterCategory === selectedFilter;
  });

  const filterTabs = [
    { id: "all", label: "All 13 Projects" },
    { id: "ai_codegen", label: "AI Platforms & Agents" },
    { id: "realtime_mobile", label: "Real-Time & Mobile" },
    { id: "enterprise_ecom", label: "Enterprise & eCommerce" },
  ];

  return (
    <section id="projects" className="py-20 bg-navy relative">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-white flex items-center gap-2 mb-2">
            <span className="text-highlight font-mono">02.</span> Projects Portfolio ({projectsList.length})
          </h2>
          <div className="w-16 h-1 bg-highlight rounded"></div>
          <p className="text-slate text-lg max-w-2xl text-center mt-6">
            Featuring 13 flagship systems: autonomous multi-agent AI outreach, viral product trend validation engines, real-time trading platforms, and enterprise management tools.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${selectedFilter === tab.id
                  ? "bg-highlight text-navy-dark font-bold shadow-lg"
                  : "bg-navy-light/60 text-slate-light hover:text-white border border-slate-dark/60"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Bento Grid layout with Card3DTilt wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <Card3DTilt key={project.id} maxTilt={10}>
              <div className="bg-navy-dark/90 rounded-xl border border-slate-dark/60 hover:border-highlight/40 transition-all duration-300 group flex flex-col justify-between overflow-hidden shadow-xl h-full">

                {/* Card Top Image & Badges */}
                <div>
                  <div className="relative h-48 overflow-hidden bg-navy">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-navy-dark/40 group-hover:bg-transparent transition-colors"></div>

                    {/* Top Overlay Badges */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                      <span className="text-[11px] font-mono text-highlight bg-navy-dark/90 backdrop-blur-md px-2.5 py-1 rounded border border-highlight/30 flex items-center gap-1">
                        {project.filterCategory === "ai_codegen" && <Bot size={12} />}
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-highlight transition-colors flex items-center gap-2">
                      {project.icon}
                      <span>{project.title}</span>
                    </h3>

                    <p className="text-slate text-xs leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>

                    <div className="p-2.5 bg-navy-light/60 rounded-lg border border-slate-dark/40 text-[11px] font-mono text-highlight">
                      {project.metrics[0]}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-navy-light text-slate-light border-slate-dark text-[10px] font-mono"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge className="bg-navy-light text-highlight border-slate-dark text-[10px] font-mono">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <Button
                    className="w-full bg-highlight/10 hover:bg-highlight text-highlight hover:text-navy-dark border border-highlight/30 font-semibold text-xs py-2 flex items-center justify-center gap-1.5 transition-all"
                    onClick={() => setActiveModalProject(project)}
                  >
                    <FileText size={14} /> Case Study
                  </Button>
                  <Button
                    className="bg-navy-light hover:bg-navy-light/80 text-white p-2 border border-slate-dark"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                    title="View Repository"
                  >
                    <Github size={16} />
                  </Button>
                </div>

              </div>
            </Card3DTilt>
          ))}
        </div>

        {/* Interactive In-Browser Project Sandbox */}
        {/* <ProjectSandbox /> */}

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;
