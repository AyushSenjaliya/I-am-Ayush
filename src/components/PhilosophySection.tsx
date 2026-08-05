import { Lightbulb, ShieldAlert, Zap, Target } from "lucide-react";

const PhilosophySection = () => {
  const principles = [
    {
      number: "01",
      title: "Simplicity Over Premature Abstraction",
      icon: <Lightbulb className="text-highlight" size={24} />,
      quote: "Write clean, explicit, self-documenting code before wrapping logic in abstract wrappers.",
      description:
        "Complexity adds maintenance drag. I structure software with clear boundaries, predictable data flow, and minimal unnecessary layers so teams can iterate quickly without breaking core contracts."
    },
    {
      number: "02",
      title: "Resilience & Graceful Degradation",
      icon: <ShieldAlert className="text-highlight" size={24} />,
      quote: "Third-party APIs fail. External LLMs rate-limit. Systems must never crash silently.",
      description:
        "In production multi-agent architectures (like Nexus & Nexara), I build 3-stage fallback cascades (Primary LLM ➔ Regional Backup ➔ Deterministic Rules) with automatic retry logic and incremental Supabase state checkpoints."
    },
    {
      number: "03",
      title: "Sub-100ms Latency & Observability",
      icon: <Zap className="text-highlight" size={24} />,
      quote: "Users should never look at a blank spinner without understanding system state.",
      description:
        "I leverage Server-Sent Events (SSE) streaming, WebSockets, and Redis pub/sub to stream live execution telemetry directly to the frontend, turning long-running agent workflows into interactive user experiences."
    },
    {
      number: "04",
      title: "Business ROI & Measurable Impact",
      icon: <Target className="text-highlight" size={24} />,
      quote: "Engineering decisions should ultimately improve speed, reliability, or bottom-line revenue.",
      description:
        "Combining MBA business insights with full-stack engineering, I evaluate technical trade-offs based on operational time saved, conversion rates, infrastructure cost efficiency, and customer satisfaction."
    }
  ];

  return (
    <section id="philosophy" className="py-20 bg-navy relative border-t border-slate-dark/40">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl font-bold text-white flex items-center gap-2 mb-2">
            <span className="text-highlight font-mono">05.</span> Engineering Philosophy & Principles
          </h2>
          <div className="w-16 h-1 bg-highlight rounded"></div>
          <p className="text-slate text-lg max-w-2xl text-center mt-6">
            Core technical heuristics that guide how I architect systems, manage failure modes, and deliver production software.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((item) => (
            <div
              key={item.number}
              className="bg-navy-dark/90 p-8 rounded-xl border border-slate-dark/70 hover:border-highlight/40 transition-all duration-300 shadow-xl space-y-4 group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 bg-navy-light/80 rounded-lg group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <span className="font-mono text-sm text-highlight bg-highlight/10 px-3 py-1 rounded border border-highlight/20 font-bold">
                  PRINCIPLE // {item.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-highlight transition-colors">
                {item.title}
              </h3>

              <blockquote className="text-highlight/90 font-mono text-xs italic pl-3 border-l-2 border-highlight/50 py-1 bg-navy-light/30 rounded-r">
                "{item.quote}"
              </blockquote>

              <p className="text-slate text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PhilosophySection;
