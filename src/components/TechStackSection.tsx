const skillGroups = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "SQL", "Python", "HTML5 / CSS3"],
  },
  {
    category: "Frontend",
    skills: ["React 19", "Next.js 16", "Vite", "Tailwind CSS", "ShadCN UI", "Redux / Zustand"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Fastify", "Express", "NestJS", "REST APIs", "WebSockets", "SSE Telemetry"],
  },
  {
    category: "Database & Storage",
    skills: ["PostgreSQL", "Supabase", "MongoDB", "Mongoose", "Redis", "Prisma ORM"],
  },
  {
    category: "eCommerce",
    skills: ["Custom Shopify Apps", "Shopify Admin APIs", "Storefront API", "Liquid", "Payment Gateways"],
  },
  {
    category: "Platforms & Tools",
    skills: ["Gemini AI", "Sarvam AI", "OpenAI API", "Vector DBs", "Docker", "Vercel", "Git / GitHub"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-[var(--bg)] border-b border-[var(--line)]">
      <div className="max-w-[1080px] mx-auto px-6">
        
        {/* Header */}
        <div className="space-y-3 mb-12">
          <div className="section-eyebrow">TECHNICAL CAPABILITIES</div>
          <h2 className="section-title">Skills & Tech Stack</h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.category} className="theme-card space-y-4">
              <div className="font-mono text-xs font-bold text-[var(--gold)] uppercase tracking-wider">
                {group.category}
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-[var(--surface-2)] border border-[var(--line)] text-[var(--text)] text-xs font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
