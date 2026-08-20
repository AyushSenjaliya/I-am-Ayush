const experiences = [
  {
    period: "Mar 2026 — Jul 2026",
    role: "Full Stack Developer",
    company: "Asterixz Infotech",
    achievements: [
      "Led the full client lifecycle end-to-end: outreach and sales conversations through to converting prospects into signed engagements.",
      "Owned product and business strategy — pricing plans, product ideation, and go-to-market approach — alongside technical architecture for client-facing products.",
      "Designed, developed, and deployed products including Nexus (AI trend intelligence & outreach engine), Nexara (autonomous product validation engine), and several client Shopify stores.",
      "Operated as a generalist across business development and hands-on engineering — a hybrid scope beyond a typical developer role."
    ]
  },
  {
    period: "Nov 2025 — Feb 2026",
    role: "Full Stack Developer",
    company: "Oftgen Infotech",
    achievements: [
      "Built and shipped Auco (AI code-generation platform), Appy (Gemini + chatbot platform), Leadingly (voice-to-diagram tool), and Codium (design/code workspace) as a full-stack developer.",
      "Worked across frontend, backend, and AI/LLM integration (Gemini) for each product.",
      "Learned AI integrations and rapid product development using vibe coding methodologies."
    ]
  },
  {
    period: "May 2025 — Nov 2025",
    role: "Full Stack & Shopify Developer",
    company: "Independent / Freelance",
    achievements: [
      "Built and shipped custom Shopify stores end-to-end — theme customization, checkout/payment flow configuration, and UX improvements — for multiple small-business clients.",
      "Designed and built a custom eCommerce management web app (order tracking, inventory, automated customer notifications) that let non-technical business owners replace manual/spreadsheet-based workflows.",
      "Integrated Shopify Admin/Storefront APIs with backend systems for real-time, bidirectional order and product sync, removing manual reconciliation between storefront and internal systems.",
      "Owned each freelance engagement end-to-end: client requirements, architecture, development, and deployment."
    ]
  },
  {
    period: "Jun 2024 — Apr 2025",
    role: "Full Stack Developer",
    company: "Dot3 Solutions",
    achievements: [
      "Built and optimized scalable web applications across the stack using React/Next.js on the frontend and Node.js/NestJS on the backend.",
      "Implemented real-time data features using WebSockets for live-updating dashboards/data systems."
    ]
  },
  {
    period: "Dec 2023 — Jun 2024",
    role: "React.js Intern",
    company: "Dot3 Solutions",
    achievements: [
      "Built and optimized scalable web applications across the stack using React/Next.js on the frontend and Node.js/NestJS on the backend.",
      "Implemented real-time data features using WebSockets for live-updating dashboards/data systems."
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
