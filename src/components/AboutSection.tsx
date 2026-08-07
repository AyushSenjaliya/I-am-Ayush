const AboutSection = () => {
  const skillPills = [
    "TypeScript",
    "React 19",
    "Next.js 16",
    "Node.js",
    "PostgreSQL",
    "REST & WebSockets",
    "Fastify",
    "Supabase",
    "Gemini AI",
    "Sarvam AI",
  ];

  return (
    <section id="about" className="py-24 bg-[var(--bg)] border-b border-[var(--line)]">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column */}
          <div className="lg:col-span-5 space-y-3">
            <div className="section-eyebrow">ABOUT</div>
            <h2 className="section-title">
              Engineering systems with business intent.
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 space-y-6 text-[var(--muted)] text-base leading-relaxed font-body">
            <p>
              I'm a Full Stack Developer based in Surat, India, with 2+ years building production web apps, e-commerce platforms, and backend systems using React, Next.js, and Node.js. I like owning projects end-to-end — architecture, backend, frontend, and third-party integrations — turning business requirements into working software.</p>
            <p>
              Alongside a B.Sc in Information Technology, I'm currently pursuing an MBA, which shapes how I think about the business side of what I build — not just the code, but why it matters.</p>
            <p>
              Over the past 2+ years I've shipped enterprise management tools, real-time data features, and e-commerce systems handling live order sync. I'm now deepening my skills in AI engineering — integrating LLMs like Gemini into production tools and exploring what AI can add to full-stack products.</p>

            {/* Skill Pills */}
            <div className="pt-4 flex flex-wrap gap-2">
              {skillPills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] text-xs font-mono hover:border-[var(--gold)] transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
