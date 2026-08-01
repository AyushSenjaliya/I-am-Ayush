import { useState } from "react";
import { Server, Cpu, Database, Network, ShieldCheck, ArrowRight, Sparkles, Bot, Flame } from "lucide-react";

interface Pattern {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  nodes: string[];
  flowDescription: string;
  benefits: string[];
}

const patterns: Pattern[] = [
  {
    id: "nexus-multi-agent",
    title: "Nexus Autonomous 5-Agent AI Pipeline",
    category: "AI Multi-Agent Systems",
    subtitle: "End-to-end B2B market intelligence, lead scoring, and automated outreach pipeline",
    nodes: ["Agent 1 Market Intel", "Agent 2 Scraper & Grid", "Agent 3 ICP Scorer", "Agent 4 Pitch Strategist", "Agent 5 Email/WhatsApp Sequencer"],
    flowDescription: "Agents run sequentially with checkpoint recovery. Agent 1 identifies market trends, Agent 2 performs grid density scanning & deep email verification, Agent 3 calculates ICP scores, Agent 4 generates tailored pitch hooks, and Agent 5 executes multi-channel sequences via Nodemailer and WhatsApp Web JS.",
    benefits: ["3-Tier AI Fallback Cascade (Gemini ➔ Sarvam)", "Server-Sent Events (SSE) Live Telemetry", "100% Automated Multi-Channel Outreach"]
  },
  {
    id: "nexara-trend-engine",
    title: "Nexara AI Trend & Validation Pipeline",
    category: "E-Commerce AI Intelligence",
    subtitle: "Automated TikTok viral product candidate discovery and 3-tier supplier validation engine",
    nodes: ["TikTok Viral Scraper", "AI Product Detector", "AliExpress Supplier Check", "Meta Ads Saturation", "Self-Learning Scoring"],
    flowDescription: "TikTok videos filtered for >100k views are parsed by Gemini AI to extract product entities. AliExpress DataHub verifies unit costs and seller ratings, Meta Ads Library analyzes competitor ad spend, and a self-learning feedback loop adjusts future keyword weights.",
    benefits: ["Self-learning keyword weight loop", "3-Tier Supplier & Ad Validation", "Eliminates low-margin product testing"]
  }
  // ,
  // {
  //   id: "kafka-websockets",
  //   title: "Real-Time Event-Driven Streaming",
  //   category: "High-Velocity Systems",
  //   subtitle: "Low-latency data pipeline powering tick charts and live analytics",
  //   nodes: ["Market Data Feeds", "Kafka Ingestion Cluster", "NestJS Processing Service", "Redis Snapshot Cache", "WebSocket Broadcast"],
  //   flowDescription: "Incoming high-frequency tick events are ingested into Kafka partitions, processed asynchronously by NestJS workers, updated in Redis cache, and pushed to active client WebSocket connections in <50ms.",
  //   benefits: ["Zero polling overhead", "Scales to 10k+ concurrent connections", "Sub-50ms latency"]
  // }
];

const ArchitectureSection = () => {
  const [activePattern, setActivePattern] = useState<Pattern>(patterns[0]);

  return (
    <section className="py-20 bg-navy border-t border-slate-dark/40 relative z-10">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col items-center mb-14">
          <h2 className="text-3xl font-bold text-white flex items-center gap-2 mb-2">
            <span className="text-highlight font-mono">03.</span> Enterprise Architecture Explorer
          </h2>
          <div className="w-16 h-1 bg-highlight rounded"></div>
          <p className="text-slate text-lg max-w-2xl text-center mt-6">
            Visual breakdown of distributed multi-agent AI systems, e-commerce trend validation engines, and high-velocity streaming queues.
          </p>
        </div>

        {/* Pattern Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {patterns.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePattern(p)}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${activePattern.id === p.id
                ? "bg-highlight text-navy-dark font-bold shadow-lg"
                : "bg-navy-dark text-slate-light hover:text-white border border-slate-dark/60"
                }`}
            >
              <Network size={14} />
              {p.title}
            </button>
          ))}
        </div>

        {/* Visual Architecture Flow Display */}
        <div className="bg-navy-dark p-6 sm:p-8 rounded-2xl border border-highlight/30 shadow-2xl space-y-8">

          <div>
            <span className="text-highlight font-mono text-xs bg-highlight/10 px-2.5 py-1 rounded border border-highlight/20">
              {activePattern.category}
            </span>
            <h3 className="text-2xl font-bold text-white mt-2">
              {activePattern.title}
            </h3>
            <p className="text-slate text-sm mt-1">
              {activePattern.subtitle}
            </p>
          </div>

          {/* Nodes Flow Pipeline */}
          <div className="bg-navy p-6 rounded-xl border border-slate-dark/60">
            <h4 className="text-slate-light text-xs font-mono mb-4 flex items-center gap-1.5">
              <Sparkles size={13} className="text-highlight" /> ARCHITECTURE FLOW NODES
            </h4>
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              {activePattern.nodes.map((node, idx) => (
                <div key={idx} className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
                  <div className="bg-navy-light/80 border border-slate-dark p-3.5 rounded-xl text-center w-full md:w-auto min-w-[120px]">
                    <span className="text-[10px] font-mono text-highlight block mb-1">NODE 0{idx + 1}</span>
                    <span className="text-white text-xs font-semibold">{node}</span>
                  </div>
                  {idx < activePattern.nodes.length - 1 && (
                    <ArrowRight size={16} className="text-highlight transform rotate-90 md:rotate-0 flex-shrink-0 my-1 md:my-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Description & Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-navy p-5 rounded-xl border border-slate-dark/40 space-y-2">
              <h4 className="text-white font-semibold text-sm flex items-center gap-2">
                <Server size={16} className="text-highlight" /> Data Flow Breakdown
              </h4>
              <p className="text-slate text-xs leading-relaxed">
                {activePattern.flowDescription}
              </p>
            </div>

            <div className="bg-navy p-5 rounded-xl border border-slate-dark/40 space-y-2">
              <h4 className="text-white font-semibold text-sm flex items-center gap-2">
                <ShieldCheck size={16} className="text-highlight" /> Core Features
              </h4>
              <ul className="space-y-1.5 text-xs text-slate">
                {activePattern.benefits.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-center gap-2">
                    <span className="text-highlight font-mono">✓</span> {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ArchitectureSection;
