import { useState } from "react";
import { Search, Code, Server, Database, Cloud, Sparkles, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TechItem {
  name: string;
  category: "frontend" | "backend" | "database" | "ai_cloud";
  level: "Advanced" | "Proficient" | "Exploring";
  description: string;
  iconName: string;
}

const techItems: TechItem[] = [
  // Frontend
  { name: "React 18", category: "frontend", level: "Advanced", description: "Hooks, Context API, Suspense & Performance Tuning", iconName: "React" },
  { name: "Next.js (App Router)", category: "frontend", level: "Advanced", description: "Server Components, Server Actions & SSR", iconName: "Next" },
  { name: "TypeScript", category: "frontend", level: "Advanced", description: "Strict type safety, Generics & Utility types", iconName: "TS" },
  { name: "Tailwind CSS", category: "frontend", level: "Advanced", description: "Responsive layouts, animations & custom themes", iconName: "Tailwind" },
  { name: "ShadCN / Radix UI", category: "frontend", level: "Advanced", description: "Accessible UI components & headless primitives", iconName: "ShadCN" },
  { name: "Redux Toolkit / Zustand", category: "frontend", level: "Proficient", description: "Global state management & Async Thunks", iconName: "State" },

  // Backend
  { name: "Node.js", category: "backend", level: "Advanced", description: "Event loop optimization & asynchronous microservices", iconName: "Node" },
  { name: "NestJS", category: "backend", level: "Advanced", description: "Modular enterprise architecture, DTOs & Dependency Injection", iconName: "Nest" },
  { name: "Express.js", category: "backend", level: "Advanced", description: "REST APIs, Middleware chains & Auth verification", iconName: "Express" },
  { name: "WebSockets / Socket.io", category: "backend", level: "Advanced", description: "Bi-directional real-time data push & live streaming", iconName: "WS" },
  { name: "Apache Kafka", category: "backend", level: "Proficient", description: "Event streaming, pub/sub queues & event-driven design", iconName: "Kafka" },

  // Databases
  { name: "MongoDB", category: "database", level: "Advanced", description: "NoSQL schemas, Aggregation pipelines & Indexing", iconName: "Mongo" },
  { name: "PostgreSQL / MySQL", category: "database", level: "Advanced", description: "Relational queries, transactions & schema normalization", iconName: "SQL" },
  { name: "Redis", category: "database", level: "Proficient", description: "In-memory caching, Pub/Sub & Rate limiting", iconName: "Redis" },
  { name: "Prisma ORM", category: "database", level: "Advanced", description: "Type-safe database queries & migration management", iconName: "Prisma" },

  // AI & Cloud
  { name: "OpenAI / LLM APIs", category: "ai_cloud", level: "Advanced", description: "Function calling, embeddings, prompt engineering & RAG", iconName: "AI" },
  { name: "Vercel AI SDK", category: "ai_cloud", level: "Proficient", description: "Streaming text responses & AI chatbot integration", iconName: "VercelAI" },
  { name: "Vector DBs (Pinecone/pgvector)", category: "ai_cloud", level: "Proficient", description: "Similarity search & semantic knowledge retrieval", iconName: "Vector" },
  { name: "Docker", category: "ai_cloud", level: "Proficient", description: "Containerization, multi-stage builds & compose environments", iconName: "Docker" },
  { name: "AWS & Vercel", category: "ai_cloud", level: "Proficient", description: "Serverless functions, S3 bucket storage & CDN deployment", iconName: "Cloud" },
];

const TechStackSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredItems = techItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoryTabs = [
    { id: "all", label: "All Stack", icon: <Sparkles size={14} /> },
    { id: "frontend", label: "Frontend", icon: <Code size={14} /> },
    { id: "backend", label: "Backend & APIs", icon: <Server size={14} /> },
    { id: "database", label: "Databases & ORM", icon: <Database size={14} /> },
    { id: "ai_cloud", label: "AI & Cloud DevOps", icon: <Cloud size={14} /> },
  ];

  return (
    <section id="skills" className="py-20 bg-navy-dark relative">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-white flex items-center gap-2 mb-2">
            <span className="text-highlight font-mono">01.</span> Tech Stack Explorer
          </h2>
          <div className="w-16 h-1 bg-highlight rounded"></div>
          <p className="text-slate text-lg max-w-2xl text-center mt-6">
            A comprehensive matrix of tools, frameworks, and cloud infrastructure I use to build production systems.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-navy p-4 rounded-xl border border-slate-dark/60">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-2 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all ${
                  selectedCategory === tab.id
                    ? "bg-highlight text-navy-dark font-semibold shadow-md"
                    : "text-slate-light hover:text-white bg-navy-light/40 hover:bg-navy-light"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search size={15} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-light" />
            <input
              type="text"
              placeholder="Search tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-navy-light/80 border border-slate-dark/80 rounded-lg pl-9 pr-4 py-1.5 text-xs text-white placeholder:text-slate focus:border-highlight focus:outline-none"
            />
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.name}
              className="bg-navy p-5 rounded-xl border border-slate-dark/60 hover:border-highlight/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-bold text-base group-hover:text-highlight transition-colors">
                    {item.name}
                  </h3>
                  <Badge
                    className={`text-[10px] font-mono border ${
                      item.level === "Advanced"
                        ? "bg-highlight/10 text-highlight border-highlight/30"
                        : "bg-navy-light text-slate-light border-slate-dark"
                    }`}
                  >
                    {item.level}
                  </Badge>
                </div>
                <p className="text-slate text-xs leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-dark/40 flex items-center justify-between text-[11px] font-mono text-slate-light">
                <span className="capitalize text-highlight/80 flex items-center gap-1">
                  <Check size={12} /> Production Ready
                </span>
                <span className="uppercase text-[10px] text-slate-dark font-semibold">
                  {item.category.replace("_", " & ")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-navy rounded-xl border border-slate-dark/40">
            <p className="text-slate">No technologies matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechStackSection;
