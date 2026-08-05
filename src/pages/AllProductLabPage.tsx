import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Beaker, Filter } from "lucide-react";
import { productLabData, ProductLabItem } from "../data/productLabData";
import Header from "../components/Header";
import ContactSection from "../components/ContactSection";

const AllProductLabPage = () => {
  const [statusFilter, setStatusFilter] = useState<"All" | "Active" | "Shelved">("All");

  const filteredItems = productLabData.filter((item) => {
    if (statusFilter === "Active") return item.statusType === "gold";
    if (statusFilter === "Shelved") return item.statusType === "coral";
    return true;
  });

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] relative antialiased">
      <Header />

      <main className="pt-28 pb-20 max-w-[1080px] mx-auto px-6 space-y-12">
        {/* Back Link & Title */}
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-[var(--muted)] hover:text-[var(--gold)] transition-colors"
          >
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>

          <div className="space-y-2">
            <div className="section-eyebrow flex items-center gap-2">
              <Beaker size={14} className="text-[var(--gold)]" />
              UNSHIPPED RESEARCH & R&D CATALOG
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-5xl text-[var(--text)]">
              Product Lab Research Spikes ({productLabData.length})
            </h1>
            <p className="text-[var(--muted)] font-body text-base max-w-2xl">
              Exploratory technical prototypes, architectural spikes, and unreleased product concepts evaluated for feasibility, token cost, and commercial readiness.
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="theme-card flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--muted)]">
            <Filter size={14} className="text-[var(--gold)]" />
            <span>Filter Status:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {(["All", "Active", "Shelved"] as const).map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  statusFilter === st
                    ? "bg-[var(--gold)] text-[#0F1B1E] font-bold shadow-sm"
                    : "bg-[var(--surface-2)] text-[var(--muted)] hover:text-[var(--text)] border border-[var(--line)]"
                }`}
              >
                {st === "All" ? "All Experiments" : st === "Active" ? "Active R&D" : "Shelved"}
              </button>
            ))}
          </div>
        </div>

        {/* Stacked Cards with Dashed Borders */}
        <div className="space-y-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border border-dashed border-[var(--line)] space-y-6 hover:border-[var(--gold)]/50 transition-colors"
            >
              {/* Top Bar: Title + Status Tag */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--line)] pb-4">
                <div>
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-[var(--text)] mb-1">
                    {item.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-[var(--surface-2)] border border-[var(--line)] font-mono text-[10px] text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <span
                  className={`px-3.5 py-1.5 rounded-full font-mono text-xs font-semibold ${
                    item.statusType === "coral"
                      ? "bg-[var(--coral)]/10 text-[var(--coral)] border border-[var(--coral)]/30"
                      : "bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/30"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              {/* 4-Column Breakdown Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-body text-xs">
                <div className="space-y-1.5 theme-card-nested">
                  <div className="font-mono text-[11px] text-[var(--gold)] font-bold uppercase tracking-wider">
                    PROBLEM
                  </div>
                  <p className="text-[var(--muted)] leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                <div className="space-y-1.5 theme-card-nested">
                  <div className="font-mono text-[11px] text-[var(--gold)] font-bold uppercase tracking-wider">
                    APPROACH
                  </div>
                  <p className="text-[var(--muted)] leading-relaxed">
                    {item.approach}
                  </p>
                </div>

                <div className="space-y-1.5 theme-card-nested">
                  <div className="font-mono text-[11px] text-[var(--gold)] font-bold uppercase tracking-wider">
                    WHY SHELVED / STATUS
                  </div>
                  <p className="text-[var(--muted)] leading-relaxed">
                    {item.whyShelved}
                  </p>
                </div>

                <div className="space-y-1.5 theme-card-nested">
                  <div className="font-mono text-[11px] text-[var(--gold)] font-bold uppercase tracking-wider">
                    WHAT IT'D TAKE
                  </div>
                  <p className="text-[var(--muted)] leading-relaxed">
                    {item.whatItTakes}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Invitation Line */}
        <div className="theme-card text-center py-8 space-y-3">
          <h3 className="font-display font-bold text-lg text-[var(--text)]">
            Want to collaborate or sponsor an R&D spike?
          </h3>
          <p className="text-xs font-mono text-[var(--muted)] max-w-lg mx-auto">
            If your team is exploring edge WASM runtimes, agentic automation, or custom LLM JSON schema parsers, let me know.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[var(--gold)] text-[#0F1B1E] font-mono text-xs font-bold px-6 py-3 rounded-lg hover:bg-[var(--gold)]/90 transition-all shadow-md"
            >
              <span>Get in touch regarding Product Lab</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

      </main>

      <ContactSection />
    </div>
  );
};

export default AllProductLabPage;
