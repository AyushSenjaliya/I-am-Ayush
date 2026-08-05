const AboutSection = () => {
  const skillPills = [
    "TypeScript",
    "Node.js",
    "React 19",
    "Next.js 16",
    "PostgreSQL",
    "Supabase",
    "Gemini AI",
    "Sarvam AI",
    "Fastify",
    "REST & WebSockets",
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
              I am a Full Stack & AI Systems Engineer based in Surat, India. I specialize in architecting autonomous multi-agent AI frameworks, real-time microservices, and scalable web applications that turn complex requirements into high-performing business software.
            </p>
            <p>
              Holding a B.Sc in Information Technology and currently pursuing an MBA, I bridge the gap between deep technical execution and commercial strategy—evaluating software architecture through user experience, latency, and business ROI.
            </p>
            <p>
              Over the past 2+ years, I've built enterprise management software, real-time data streaming pipelines, and 3-stage LLM fallback cascades (Gemini + Sarvam AI) that maintain high availability and reliability under load.
            </p>

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
