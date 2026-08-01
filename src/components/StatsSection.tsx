import { Activity, Code2, CheckCircle2, Zap } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      label: "Real-Time Data Velocity",
      value: "1,000+",
      unit: "Ticks / sec",
      desc: "Low-latency WebSockets & Kafka streaming pipelines",
      icon: <Activity className="text-highlight" size={22} />,
    },
    {
      label: "Production Platforms",
      value: "13+",
      unit: "AI & Full-Stack Systems",
      desc: "Multi-agent AI platforms, SaaS, trading & eCommerce apps",
      icon: <Code2 className="text-highlight" size={22} />,
    },
    {
      label: "Operational Efficiency",
      value: "40%",
      unit: "Time Reduction",
      desc: "Achieved via automated multi-agent workflows & Shopify tools",
      icon: <Zap className="text-highlight" size={22} />,
    },
    {
      label: "Code & API Reliability",
      value: "99.9%",
      unit: "Uptime Target",
      desc: "3-tier AI fallback cascades (Gemini + Sarvam + OpenAI)",
      icon: <CheckCircle2 className="text-highlight" size={22} />,
    },
  ];

  return (
    <section className="py-12 bg-navy border-y border-slate-dark/40 relative z-10">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="bg-navy-dark/80 backdrop-blur-md p-6 rounded-xl border border-slate-dark/60 hover:border-highlight/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-navy-light rounded-lg group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <span className="font-mono text-xs text-highlight bg-highlight/10 px-2 py-1 rounded">
                  0{idx + 1}
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-highlight transition-colors">
                  {stat.value}
                </span>
                <span className="text-xs font-mono text-slate-light">
                  {stat.unit}
                </span>
              </div>

              <h4 className="text-white font-semibold text-sm mb-1">
                {stat.label}
              </h4>
              <p className="text-slate text-xs leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
