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
  type?: string;
  role?: string;
  status?: string;
  whyImportant?: string;
  coreWorkflow?: string[];
  contribution?: string[];
  keyAreas?: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "import-business-management-system",
    title: "Import Business Management System",
    category: "Enterprise & Workflow Systems",
    stackLabel: "FULL STACK IMPORT/EXPORT SYSTEM",
    summary: "A complete software system built to digitize an international import/export business workflow from China to India, managing purchase entries, dual-country warehouses, container shipping, inventory, dead-stock tracking, and role-based access.",
    problem: "China-to-India import operations suffer from fragmented purchase logging, zero real-time visibility into shipping containers, dead-stock accumulation, and lack of role-based security across dual-country warehouse teams.",
    solution: "Architected a full-stack business system digitizing the entire supply chain workflow: purchase entry, China warehouse intake, container tracking, India receiving, dead-stock management, and real-time business reporting.",
    type: "Major professional project",
    role: "Full Stack Developer",
    status: "Production / real-world business system",
    coreWorkflow: [
      "Purchase entry & order processing",
      "China warehouse stock management",
      "Container & shipping tracking pipeline",
      "India warehouse receiving & dispatch",
      "Dead-stock identification & management",
      "Real-time inventory analytics & business reports",
      "Role-based access & control (RBAC)",
      "Purchase and stock-related operations"
    ],
    contribution: [
      "Full-stack development using React frontend and Node.js REST APIs",
      "Translated real China-to-India supply chain processes into software workflow",
      "Implemented China & India dual-warehouse inventory management logic",
      "Engineered business reporting tools, dead-stock algorithms, and granular RBAC"
    ],
    architecture: [
      "React dashboard with customized inventory tables, stock status, and filters",
      "Node.js & Express RESTful API backend handling transactional business operations",
      "PostgreSQL relational database schema managing multi-warehouse stock ledgers",
      "Dead-stock detection routines & automated inventory report generator"
    ],
    metrics: [
      "🏬 Dual-Warehouse Sync (China & India)",
      "📦 100% Digitized Purchase & Container Tracking",
      "🔒 Role-Based Access Control & Operations",
      "📈 Production Real-World Business System"
    ],
    whyImportant: "Demonstrates strong enterprise software engineering capabilities by translating a complex real-world business process into software rather than simple CRUD demos.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs", "Tailwind CSS", "Recharts"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    featured: true
  },
  {
    id: "ecommerce-order-management-system",
    title: "E-Commerce Order Management System",
    category: "E-Commerce & Platform Engineering",
    stackLabel: "PRODUCTION-READY OMS & SHOPIFY",
    summary: "A production-ready management system designed around e-commerce operations, featuring native Shopify integration, order workflow automation, product data management, and administrative dashboards.",
    problem: "E-commerce merchants burn time and lose money handling multi-channel order fragmentation, delayed status syncing, and manual fulfillment processing across stores.",
    solution: "Engineered a production-ready Order Management System (OMS) that synchronizes order and product data with Shopify APIs, automates e-commerce fulfillment steps, and provides administrative controls.",
    type: "Professional / production project",
    status: "Production-ready",
    keyAreas: [
      "Order management & fulfillment tracking",
      "Product & order data synchronization",
      "Shopify API & webhook integration",
      "E-commerce workflow automation",
      "Administrative management dashboard"
    ],
    contribution: [
      "Designed and built production-ready OMS web app architecture",
      "Integrated Shopify REST & GraphQL APIs for continuous order/product data ingestion",
      "Automated e-commerce fulfillment workflows and built admin control panels"
    ],
    architecture: [
      "React admin control portal with instant order search, batch filtering, and status badges",
      "Node.js API middleware consuming Shopify Admin GraphQL & REST endpoints",
      "Webhook listener handling real-time order creation, payment updates, and cancellations",
      "MongoDB database storing persistent order state, customer history, and SKU maps"
    ],
    metrics: [
      "🛒 Native Shopify API Integration",
      "⚡ E-Commerce Workflow Automation",
      "🛡️ Production-Ready Administrative Controls",
      "📦 Unified Order & Product Data Sync"
    ],
    whyImportant: "Production-ready system demonstrating practical expertise in building e-commerce tools, Shopify ecosystem integrations, and commercial workflow automation that impress interviewers.",
    technologies: ["React", "Node.js", "Shopify API", "GraphQL", "MongoDB", "Express", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1556742049-0a67568d04e3?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    featured: true
  },
  {
    id: "auco-ai-web-builder",
    title: "AUCO — AI Web Builder",
    category: "AI & Code Generation",
    stackLabel: "AI-POWERED WEB DEV ENVIRONMENT",
    summary: "An AI-powered web development environment where users describe desired web applications in natural language and the system generates, builds, and previews live React applications in the browser.",
    problem: "Scaffolding web applications manually requires setup of React components, CSS styling, dependencies, and state logic, creating high friction for rapid prototyping.",
    solution: "Integrated Google Gemini LLM API, WebContainer in-browser execution, Monaco Editor, and React to build a prompt-driven web creation workspace with live code generation and preview.",
    type: "AI + Full Stack project",
    status: "R&D Prototype / Functional App",
    keyAreas: [
      "AI prompt interface for interactive prompt engineering",
      "Google Gemini AI model integration",
      "Automated code generation engine",
      "Monaco Editor integration",
      "WebContainer browser-side execution environment",
      "Live application preview environment",
      "React frontend & Node.js backend",
      "Tailwind CSS styling engine"
    ],
    architecture: [
      "React + Vite frontend rendering Monaco code editor and WebContainer preview iframe",
      "Node.js backend with Google Gemini AI structured prompt compiler",
      "WebContainer WASM micro-environment executing live React applications inside browser memory",
      "State preservation engine enabling real-time prompt-driven code iteration"
    ],
    metrics: [
      "✨ Natural Language Prompt-to-App Generation",
      "⚡ In-Browser WebContainer Execution Engine",
      "💻 Integrated Monaco Code Editor",
      "🎨 Automated Tailwind CSS Class Generation"
    ],
    whyImportant: "Combines traditional full-stack background with AI-integrated product development, Monaco editor, and WebContainer browser sandboxing.",
    technologies: ["React", "Node.js", "Vite", "Tailwind CSS", "Google Gemini", "WebContainer", "Monaco Editor"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    featured: false
  },
  {
    id: "codium-canvas-editor",
    title: "Codium — Visual Design & Canvas Editor",
    category: "Interactive Frontend & Canvas",
    stackLabel: "CANVAS GRAPHICS & DESIGN EDITOR",
    summary: "A Figma/Canva-style interactive visual design editor built with Konva.js, featuring an interactive 2D canvas where users manipulate design elements with complex state management.",
    problem: "Standard DOM-based web layouts cannot handle high-frequency 2D graphics manipulation, multi-element layering, sub-pixel canvas transformations, or smooth drag-and-drop scaling.",
    solution: "Engineered an interactive 2D canvas editor using Konva.js with custom object state management, shape manipulation, drag-and-drop mechanics, and visual design tools.",
    type: "Frontend / product engineering project",
    status: "Functional Prototype",
    keyAreas: [
      "Canvas rendering engine & performance optimization",
      "Interactive 2D object manipulation (scale, rotate, translate)",
      "Drag-and-drop object mechanics",
      "Visual design editing controls",
      "Konva.js canvas integration",
      "Complex frontend state management"
    ],
    architecture: [
      "Konva.js HTML5 Canvas rendering layer with hardware-accelerated drawing",
      "Zustand state store tracking visual object hierarchy, selection bounds, and undo history",
      "Custom event-driven control handles for dynamic object scaling and rotation"
    ],
    metrics: [
      "🎨 High-Performance 2D Canvas Graphics (Konva.js)",
      "🖱️ Dynamic Object Manipulation & Drag-and-Drop",
      "⚡ Undo/Redo & Complex Canvas State Management"
    ],
    whyImportant: "Demonstrates non-trivial frontend engineering capabilities beyond forms and dashboards by mastering 2D graphics rendering and complex canvas state logic.",
    technologies: ["React", "Konva.js", "HTML5 Canvas", "TypeScript", "Zustand", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    featured: false
  },
  {
    id: "wealth-book-mobile-app",
    title: "Wealth Book — Personal Finance Mobile Application",
    category: "Mobile & Offline Architecture",
    stackLabel: "REACT NATIVE & OFFLINE SQLITE",
    summary: "A personal finance management mobile application built with React Native, Expo, and embedded local SQLite database for private, offline-first expense tracking.",
    problem: "Users dislike uploading personal bank transactions to cloud servers and need instant offline access to their personal finance logs without internet connectivity.",
    solution: "Developed a cross-platform mobile app leveraging Expo and local SQLite database storage, providing offline expense logging, category budgets, and financial tracking.",
    type: "Mobile application / client project",
    role: "Mobile App Developer",
    status: "Phase 1 Delivered (₹45,000 Client Project)",
    coreWorkflow: [
      "React Native cross-platform application",
      "Expo development & native build workflow",
      "Embedded local SQLite database storage",
      "Personal finance & expense tracking",
      "Offline-first local data management",
      "Planned second-phase functionality"
    ],
    architecture: [
      "React Native UI with smooth navigation and custom financial breakdown screens",
      "Local SQLite database schema for zero-latency offline expense persistence",
      "Offline-first local data architecture prioritizing user privacy"
    ],
    metrics: [
      "📱 React Native & Expo Mobile Stack",
      "💾 100% Offline Local SQLite Storage",
      "💰 Client Project Delivered (Phase 1 — ₹45,000)"
    ],
    whyImportant: "Gave practical experience in mobile app engineering, native mobile builds, and local embedded database architecture outside standard MERN stack web applications.",
    technologies: ["React Native", "Expo", "SQLite", "TypeScript", "React Navigation", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    featured: false
  },
  {
    id: "nexara-winning-product",
    title: "Nexara — AI Product Discovery & Trend Intelligence Engine",
    category: "AI & Data Intelligence",
    stackLabel: "AI TREND & DATA SCRAPING PIPELINE",
    summary: "An AI trend intelligence engine that gathers and processes external web data (Apify social scraping, Google Trends API, LLMs) to discover viral e-commerce product candidates.",
    problem: "E-commerce sellers waste thousands testing saturated products found manually through delayed social media trends.",
    solution: "Built an automated trend intelligence pipeline executing social scrapers (Apify), Google Trends verification, supplier data validation, and AI LLM product viability scoring.",
    type: "AI / data intelligence project",
    status: "R&D System",
    keyAreas: [
      "Web scraping automation",
      "Apify data collection actors",
      "Structured data normalization",
      "Google Trends API validation",
      "AI / LLM trend processing",
      "Automated intelligence workflows"
    ],
    architecture: [
      "Fastify API backend managing Apify social scrapers and Google Trends endpoints",
      "Multi-tier AI provider fallback chain (Gemini ➔ OpenAI) scoring product viral potential",
      "MongoDB database storing trend historical scores and keyword performance"
    ],
    metrics: [
      "🔥 Apify Social Media Scraper Actors",
      "📈 Google Trends API Data Validation",
      "🧠 AI-Driven Trend Scoring Engine"
    ],
    whyImportant: "Demonstrates transition from conventional full-stack web development toward AI-driven data intelligence, automated scraping, and trend analysis pipelines.",
    technologies: ["Node.js", "Apify", "Gemini AI", "Google Trends API", "Puppeteer", "Fastify", "MongoDB"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    featured: false
  },
  {
    id: "ai-bde-agent-nexus",
    title: "AI BDE Agent / Nexus — Sales Intelligence & Lead Discovery",
    category: "Autonomous AI Agents",
    stackLabel: "AUTONOMOUS SALES DEVELOPMENT AGENT",
    summary: "An autonomous AI Business Development Executive (BDE) sales agent engineered to discover prospect leads, gather company background research, score ICP fit, and generate automated outreach.",
    problem: "Sales representatives burn hours manually finding leads, verifying company data, evaluating ICP fit, and writing individual pitch emails.",
    solution: "Engineered an autonomous AI agent combining Apify web scraping actors with LLM reasoning models to research target companies, score lead quality, and draft tailored sales hooks.",
    type: "AI agent project",
    status: "Experimental / development",
    keyAreas: [
      "Finding target prospect leads",
      "Gathering company background information & research",
      "Lead intelligence & ICP fit scoring",
      "Automated company analysis & pain-point detection",
      "Personalized outreach message generation",
      "Apify scraping combined with LLM capabilities"
    ],
    architecture: [
      "Autonomous AI agent framework utilizing structured LLM prompt chains",
      "Apify web scrapers collecting target company metadata, social links, and domain info",
      "Lead scoring engine assigning ICP fit scores and generating customized sales strategy hooks"
    ],
    metrics: [
      "🤖 Autonomous Sales Intelligence Agent Pipeline",
      "🔍 Apify Lead Scraping & ICP Scoring",
      "✉️ AI Automated Outreach Messaging"
    ],
    whyImportant: "Advanced exploration combining scraping data sources (Apify) with LLMs to build autonomous AI sales agents and business intelligence tools.",
    technologies: ["Node.js", "Python", "Apify", "LangChain", "Gemini API", "Express", "Supabase"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    featured: false
  },
  {
    id: "account-management-system",
    title: "Account Management System",
    category: "Enterprise & Workflow Systems",
    stackLabel: "STRUCTURED REACT APPLICATION",
    summary: "A structured account and business management application built during internship to manage corporate accounts, client transactions, state hydration, and financial chart analytics.",
    problem: "Managing account records requires efficient client-side state caching, instant chart breakdowns, and clean React architecture without unnecessary re-renders.",
    solution: "Built a production-grade React application leveraging React Query for API caching, Zustand for global state management, and Recharts for dynamic visual financial analytics.",
    type: "Internship project / learning project",
    status: "Completed Internship Project",
    keyAreas: [
      "React core development & application architecture",
      "Global state management with Zustand",
      "Server state caching & fetching with React Query",
      "RESTful API integration & error handling",
      "Financial graphs & charts visualization (Recharts)",
      "Rendering optimization & memoization"
    ],
    architecture: [
      "Modular React application structure with reusable UI components",
      "React Query handling background refetching, cache retention, and query state",
      "Zustand state store providing lightweight global state management"
    ],
    metrics: [
      "⚡ React Query Caching & Zustand Global State",
      "📊 Interactive Financial Charts & Graphs UI",
      "🎓 Core Internship Engineering Foundation"
    ],
    whyImportant: "Key milestone representing the transition from basic frontend development to structured, clean React application architecture and state management.",
    technologies: ["React", "React Query", "Zustand", "Recharts", "Axios", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    featured: false
  },
  {
    id: "garment-costing-calculator",
    title: "Garment Costing Calculator & Cloud Deployment",
    category: "Cloud Infrastructure & Utility",
    stackLabel: "AWS DEPLOYED BUSINESS UTILITY",
    summary: "A web-based business calculator built to digitize apparel production costing workflows, deployed on AWS EC2 with S3 cloud storage.",
    problem: "Garment manufacturers rely on manual paperwork to compute material costs, trim expenses, labor margins, and shipping overheads, resulting in pricing errors.",
    solution: "Developed a domain-specific garment costing web application and connected the workflow with AWS cloud infrastructure (EC2 deployment & S3 static asset storage).",
    type: "Business utility",
    status: "Deployed / Functional Utility",
    coreWorkflow: [
      "Fabric & trims cost breakdown calculation",
      "Labor, washing, and overhead margin calculation",
      "AWS EC2 instance provisioning & web deployment",
      "AWS S3 bucket setup for costing files & assets",
      "Cloud-hosted production web utility"
    ],
    architecture: [
      "React UI with dynamic formula calculators and live margin previews",
      "Express API server hosted on AWS EC2 instance",
      "AWS S3 bucket integration for hosting uploaded tech packs and costing sheets"
    ],
    metrics: [
      "☁️ AWS EC2 & S3 Cloud Infrastructure Deployment",
      "🧵 Domain-Specific Apparel Costing Engine",
      "📊 Instant Profit Margin & Expense Calculation"
    ],
    whyImportant: "Gave practical experience connecting a business calculation workflow with web technology and AWS cloud deployment (EC2/S3).",
    technologies: ["React", "Node.js", "AWS EC2", "AWS S3", "Express", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    featured: false
  },
  {
    id: "clinic-management-whatsapp",
    title: "Clinic Management & WhatsApp Appointment System",
    category: "Enterprise & Workflow Systems",
    stackLabel: "CLINIC CRM & WHATSAPP INTEGRATION",
    summary: "A clinic-oriented frontend and CRM platform designed around patient record management, appointment scheduling, and WhatsApp communication workflows.",
    problem: "Local clinics experience high appointment no-show rates, manual phone scheduling friction, and scattered patient history records.",
    solution: "Built a clinic CRM interface featuring patient management, doctor scheduling calendars, and integrated WhatsApp appointment reminder workflows.",
    type: "Business application",
    status: "Completed Business App",
    coreWorkflow: [
      "Patient & customer profile management",
      "Appointment handling & booking calendar",
      "CRM-style dashboard interface",
      "WhatsApp workflow integration for automated alerts",
      "Doctor queue & schedule management"
    ],
    architecture: [
      "React CRM dashboard with real-time patient queue views",
      "Node.js API communicating with WhatsApp messaging webhooks",
      "MongoDB schema storing doctor schedules, patient profiles, and booking logs"
    ],
    metrics: [
      "🏥 Full-Featured Clinic CRM Interface",
      "💬 WhatsApp Appointment Workflow Integration",
      "📅 Doctor Schedule & Patient Queue Management"
    ],
    whyImportant: "Demonstrates building software around concrete business workflows rather than generic demo applications.",
    technologies: ["React", "Node.js", "WhatsApp API", "Express", "MongoDB", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    featured: false
  },
  {
    id: "realtime-stock-market-frontend",
    title: "Real-Time Stock Market Frontend",
    category: "Real-Time Systems & WebSockets",
    stackLabel: "HIGH-FREQUENCY REAL-TIME UI",
    summary: "A financial stock market interface handling high-frequency WebSocket tick streams, rendering real-time price updates and dynamic state changes with zero UI lag.",
    problem: "High-frequency stock market updates overwhelm standard React state renders, causing UI freezes and unthrottled DOM updates.",
    solution: "Engineered a socket-driven real-time frontend with state update batching, high-performance canvas chart updates, and dynamic price tick indicators.",
    type: "Real-time frontend project",
    status: "Functional System",
    keyAreas: [
      "WebSockets / socket-based data updates",
      "Real-time rendering & state batching",
      "Dynamic high-frequency state updates",
      "Browser performance & memory optimization",
      "Financial data UI & live order book views"
    ],
    architecture: [
      "WebSocket client handling high-frequency binary/JSON market tick feeds",
      "Throttled state update buffer ensuring smooth 60fps UI re-renders",
      "Canvas-based stock chart component rendering live tick price movements"
    ],
    metrics: [
      "⚡ Sub-Second WebSocket Live Tick Telemetry",
      "📈 High-Frequency Financial Data Rendering",
      "🚀 Memory-Optimized State Batching Strategy"
    ],
    whyImportant: "Proves experience working with real-time socket data streams and performance-critical UI rendering beyond conventional REST-based applications.",
    technologies: ["React", "WebSockets / Socket.io", "Chart.js", "TypeScript", "Node.js"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    featured: false
  },
  {
    id: "shopify-store-integration",
    title: "Shopify E-Commerce Store & Integration Project",
    category: "E-Commerce & Platform Engineering",
    stackLabel: "SHOPIFY DEV & CUSTOM API INTEGRATIONS",
    summary: "A client e-commerce store setup and integration project built for a commercial store, covering Shopify theme customization, Shopify CLI, REST/GraphQL APIs, and payment/shipping setups.",
    problem: "E-commerce brands require custom product options, localized shipping rules, and custom API connections unsupported by off-the-shelf store templates.",
    solution: "Developed custom Shopify storefront solutions using Shopify CLI, Liquid theme development, Storefront/Admin APIs, and dev store testing environments.",
    type: "Client / friend project",
    status: "Completed Client Integration",
    keyAreas: [
      "Shopify store setup & theme development",
      "Custom product & order workflows",
      "Shopify REST & GraphQL API integrations",
      "E-commerce management & catalog setup",
      "Shopify themes customization & Liquid templates",
      "Shopify CLI development store environment setup",
      "Payment & shipping gateway configuration"
    ],
    architecture: [
      "Customized Shopify Liquid Theme with responsive product customizers",
      "Node.js API backend syncing custom order metadata with Shopify Admin API",
      "Shopify CLI dev workflow supporting multi-environment deployment"
    ],
    metrics: [
      "🛍️ Custom Shopify Theme & Liquid Storefront",
      "🔌 Shopify REST & GraphQL Admin API Suite",
      "🛠️ Shopify CLI & Dev Store Environment Workflow"
    ],
    whyImportant: "Deep practical experience inside the Shopify developer ecosystem, from theme customization to REST/GraphQL APIs and store launches.",
    technologies: ["Shopify API", "GraphQL", "Liquid", "Shopify CLI", "JavaScript", "Node.js"],
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/AyushSenjaliya/",
    liveUrl: "https://github.com/AyushSenjaliya/",
    featured: false
  }
];
