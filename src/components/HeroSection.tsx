import { FileText, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 bg-[var(--bg)] border-b border-[var(--line)]">
      <div className="max-w-[1080px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column (60% split = 7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="section-eyebrow">
              SENIOR FULL STACK & AI SYSTEMS ENGINEER
            </div>

            <h1 className="hero-title">
              I build the systems behind{" "}
              <span className="text-[var(--gold)] font-bold">growth</span> — not just the interface.
            </h1>

            <p className="text-[var(--muted)] text-base sm:text-lg leading-relaxed max-w-xl font-body">
              Full Stack & AI Systems Engineer with MBA insights. I architect autonomous multi-agent AI frameworks, low-latency microservices, and enterprise applications designed for production scale and measurable revenue.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="bg-[var(--gold)] text-[#0F1B1E] font-mono text-sm font-bold px-6 py-3.5 rounded-lg hover:bg-[var(--gold)]/90 transition-all inline-flex items-center gap-2 shadow-md hover:translate-y-[-2px]"
              >
                See the work <ArrowRight size={16} />
              </a>

              <a
                href="/AyushResume1.pdf"
                target="_blank"
                rel="noreferrer"
                className="border border-[var(--line)] text-[var(--text)] hover:text-[var(--gold)] hover:border-[var(--gold)] bg-transparent font-mono text-sm font-semibold px-6 py-3.5 rounded-lg transition-all inline-flex items-center gap-2"
              >
                <FileText size={16} /> Download résumé
              </a>
            </div>
          </div>

          {/* Right Column (40% split = 5 cols on lg) - Stat Card */}
          <div className="lg:col-span-5">
            <div className="theme-card space-y-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                <span className="section-eyebrow">KEY SYSTEM METRICS</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--gold)] animate-pulse"></span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="theme-card-nested">
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-[var(--gold)]">
                    2+
                  </div>
                  <div className="text-xs text-[var(--muted)] font-mono mt-1">
                    Years Exp.
                  </div>
                </div>

                <div className="theme-card-nested">
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-[var(--gold)]">
                    13+
                  </div>
                  <div className="text-xs text-[var(--muted)] font-mono mt-1">
                    Products Shipped
                  </div>
                </div>

                <div className="theme-card-nested">
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-[var(--gold)]">
                    5-Agent
                  </div>
                  <div className="text-xs text-[var(--muted)] font-mono mt-1">
                    AI AI Cascades
                  </div>
                </div>

                <div className="theme-card-nested">
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-[var(--gold)]">
                    8.45
                  </div>
                  <div className="text-xs text-[var(--muted)] font-mono mt-1">
                    CGPA (B.Sc IT)
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs font-mono text-[var(--muted)] border-t border-[var(--line)] flex items-center justify-between">
                <span>Location: Surat, India</span>
                <span className="text-[var(--gold)]">Available for Hire</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
