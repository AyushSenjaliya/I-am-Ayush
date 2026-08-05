const experiences = [
  {
    period: "May 2025 — Present",
    role: "Full Stack & AI Systems Engineering Consultant",
    company: "Independent Client & Enterprise Projects",
    achievements: [
      "Architected autonomous multi-agent AI platforms (Nexus & Nexara), reducing manual lead generation & trend research overhead by 40%.",
      "Engineered real-time Server-Sent Events (SSE) telemetry and WebSockets pipelines, maintaining sub-50ms data streaming latency.",
      "Integrated 3-tier AI fallback cascades (Gemini API ➔ Sarvam AI ➔ Rule Engines) ensuring 99.9% uptime for automated scraping & pitch generation.",
      "Delivered custom e-commerce management software with automated order workflows, real-time inventory controls, and payment gateway integrations."
    ]
  },
  {
    period: "Jun 2024 — April 2025",
    role: "Full Stack Software Engineer",
    company: "Dot3 Solutions",
    achievements: [
      "Architected full-stack features across React, Next.js, Node.js, and NestJS for enterprise business applications.",
      "Engineered low-latency WebSocket data streaming channels, accelerating real-time client UI updates by 35%.",
      "Designed normalized PostgreSQL & MongoDB schemas with type-safe Prisma ORM migrations, improving database query response times."
    ]
  },
  {
    period: "Dec 2023 — Jun 2024",
    role: "Frontend Engineer Intern",
    company: "Dot3 Solutions",
    achievements: [
      "Built the core UI for the Accounting Management System, implementing accessible React components and complex multi-step financial forms.",
      "Integrated TanStack Query, Zustand, and React Hook Form to eliminate unnecessary component re-renders and boost dashboard responsiveness."
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-[var(--bg)] border-b border-[var(--line)]">
      <div className="max-w-[1080px] mx-auto px-6">
        
        {/* Header */}
        <div className="space-y-3 mb-12">
          <div className="section-eyebrow">CAREER TIMELINE</div>
          <h2 className="section-title">Work Experience</h2>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative pl-6 border-l border-[var(--line)] space-y-12 max-w-3xl">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative space-y-3 group">
              
              {/* Small Gold Dot Marker */}
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[var(--gold)] border-2 border-[var(--bg)] shadow-md group-hover:scale-125 transition-transform"></div>

              {/* Mono Date Range in Gold */}
              <div className="font-mono text-xs font-bold text-[var(--gold)]">
                {exp.period}
              </div>

              {/* Role & Company */}
              <div>
                <h3 className="font-display font-bold text-xl text-[var(--text)]">
                  {exp.role}
                </h3>
                <div className="font-body text-sm text-[var(--muted)]">
                  {exp.company}
                </div>
              </div>

              {/* Bullet List of Achievements */}
              <ul className="space-y-2 pt-2">
                {exp.achievements.map((item, aIdx) => (
                  <li key={aIdx} className="text-sm font-body text-[var(--muted)] flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[var(--gold)] font-mono font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
