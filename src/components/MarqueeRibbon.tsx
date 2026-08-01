import { Sparkles, Code2, Cpu, Zap, Layers, Server } from "lucide-react";

const MarqueeRibbon = () => {
  const row1Items = [
    "React 18",
    "Next.js App Router",
    "TypeScript",
    "Node.js",
    "NestJS",
    "WebSockets",
    "Kafka Pub/Sub",
    "Shopify Admin API",
    "Gemini RAG AI",
    "Supabase PostgreSQL",
    "Docker",
    "Tailwind CSS v4",
  ];

  const row2Items = [
    "Full Stack Engineering",
    "AI Multi-Agent Systems",
    "Custom E-Commerce ERP",
    "Real-Time Analytics",
    "Electron.js IDEs",
    "React Native Finance Apps",
    "Prisma & Mongoose ORM",
    "WhatsApp API Automations",
  ];

  return (
    <div className="py-6 bg-navy-dark border-b border-slate-dark/60 overflow-hidden relative z-10 select-none">
      
      {/* Row 1: Left to Right Marquee */}
      <div className="flex whitespace-nowrap gap-6 animate-marquee mb-3 text-xs font-mono text-slate-light">
        {Array.from({ length: 4 }).flatMap(() => row1Items).map((item, idx) => (
          <span key={idx} className="flex items-center gap-3 bg-navy px-4 py-2 rounded-full border border-slate-dark/60 shadow-sm hover:border-highlight/40 transition-colors">
            <Sparkles size={13} className="text-highlight" />
            <span className="text-white font-medium">{item}</span>
          </span>
        ))}
      </div>

      {/* Row 2: Right to Left Marquee */}
      <div className="flex whitespace-nowrap gap-6 animate-marquee-reverse text-xs font-mono text-highlight">
        {Array.from({ length: 4 }).flatMap(() => row2Items).map((item, idx) => (
          <span key={idx} className="flex items-center gap-3 bg-navy-light/40 px-4 py-2 rounded-full border border-highlight/20 shadow-sm">
            <Zap size={13} className="text-highlight" />
            <span className="font-semibold">{item}</span>
          </span>
        ))}
      </div>

    </div>
  );
};

export default MarqueeRibbon;
