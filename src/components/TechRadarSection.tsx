import { Bot, Cpu, ShoppingCart, Activity, Sparkles, Compass } from "lucide-react";

interface TechPillar {
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  icon: React.ReactNode;
}

const pillars: TechPillar[] = [
  {
    title: "Agentic AI & Multi-Agent Orchestration",
    badge: "Active Production",
    description: "Designing autonomous multi-agent pipelines (e.g. Nexus 5-agent system) that coordinate market research, lead scraping, ICP scoring, pitch generation, and multi-channel outreach.",
    highlights: ["Gemini + Sarvam AI Cascade", "Server-Sent Events (SSE) Telemetry", "Autonomous Decision State Machines"],
    icon: <Bot size={24} className="text-highlight" />
  },
  {
    title: "Vector Search & RAG Architectures",
    badge: "Applied AI Research",
    description: "Engineering Retrieval-Augmented Generation (RAG) platforms (e.g. Appy RAG Bot) that index internal documents using semantic embeddings for context-precise conversational Q&A.",
    highlights: ["Semantic Similarity Matching", "Multi-Turn Memory Management", "Hallucination Reduction"],
    icon: <Cpu size={24} className="text-highlight" />
  },
  {
    title: "Shopify API & E-Commerce Automation",
    badge: "Commercial Client Focus",
    description: "Building custom Shopify liquid themes, REST/GraphQL API integrations, real-time product/order synchronization, and automated 3-step WhatsApp order verification flows.",
    highlights: ["Shopify Admin API Integration", "Shiprocket Courier Automation", "Custom E-Commerce Business ERPs"],
    icon: <ShoppingCart size={24} className="text-highlight" />
  },
  {
    title: "Real-Time Streaming & Latency Tuning",
    badge: "High-Velocity Systems",
    description: "Architecting WebSockets data engines and Kafka queues (e.g. Real-Time Stock Analytics Platform) capable of streaming tick updates with <50ms end-to-end latency.",
    highlights: ["Apache Kafka Queue Clusters", "Redis Snapshot Caching", "Sub-50ms Client Streaming"],
    icon: <Activity size={24} className="text-highlight" />
  }
];

const TechRadarSection = () => {
  return (
    <section className="py-20 bg-navy border-t border-slate-dark/40 relative z-10">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-highlight/10 text-highlight font-mono text-xs mb-3 border border-highlight/20">
            <Compass size={13} /> Engineering Horizons
          </div>
          <h2 className="text-3xl font-bold text-white text-center flex items-center gap-2">
            Emerging Research & Technology Expansion
          </h2>
          <div className="w-16 h-1 bg-highlight rounded mt-2"></div>
          <p className="text-slate text-lg max-w-2xl text-center mt-6">
            Key areas where I bridge applied AI research, distributed data pipelines, and production software engineering.
          </p>
        </div>

        {/* 2x2 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-navy-dark/90 p-8 rounded-2xl border border-slate-dark/60 hover:border-highlight/40 transition-all shadow-xl space-y-4 group hover:-translate-y-1"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-navy-light rounded-xl group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <span className="text-xs font-mono text-highlight bg-highlight/10 px-3 py-1 rounded-full border border-highlight/20 font-semibold">
                  {p.badge}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-highlight transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate text-xs leading-relaxed mt-2">
                  {p.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-dark/40">
                <ul className="space-y-1.5">
                  {p.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="text-slate-light text-xs font-mono flex items-center gap-2">
                      <Sparkles size={12} className="text-highlight flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechRadarSection;
