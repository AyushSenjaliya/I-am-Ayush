import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { productLabData } from "../data/productLabData";

const ProductLabSection = () => {
  // Show top 2 experiments on homepage
  const featuredLab = productLabData.slice(0, 2);

  return (
    <section id="product-lab" className="py-24 bg-[var(--bg)] border-b border-[var(--line)]">
      <div className="max-w-[1080px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="section-eyebrow">UNSHIPPED RESEARCH & EXPERIMENTS</div>
            <h2 className="section-title">Product Lab</h2>
            <p className="text-[var(--muted)] text-base font-body max-w-xl">
              Exploratory architectures, technical spikes, and research prototypes evaluated for commercial viability.
            </p>
          </div>

          <Link
            to="/product-lab"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[var(--gold)] hover:text-[var(--gold)]/80 transition-colors border border-[var(--line)] hover:border-[var(--gold)] px-4 py-2.5 rounded-lg bg-[var(--surface-2)] shadow-sm"
          >
            <span>View Full Product Lab ({productLabData.length})</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Vertically Stacked Cards with Dashed Border */}
        <div className="space-y-8 mb-10">
          {featuredLab.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border border-dashed border-[var(--line)] space-y-6 hover:border-[var(--gold)]/50 transition-colors"
            >
              {/* Top Row: Title + Status Pill */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--line)] pb-4">
                <h3 className="font-display font-bold text-xl text-[var(--text)]">
                  {item.title}
                </h3>

                <span
                  className={`px-3 py-1 rounded-full font-mono text-xs font-semibold ${
                    item.statusType === "coral"
                      ? "bg-[var(--coral)]/10 text-[var(--coral)] border border-[var(--coral)]/30"
                      : "bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/30"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              {/* 4-Column Grid (collapsing to 2 on mobile) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-body text-xs">
                {/* Problem */}
                <div className="space-y-1.5">
                  <div className="font-mono text-[11px] text-[var(--gold)] font-bold uppercase tracking-wider">
                    PROBLEM
                  </div>
                  <p className="text-[var(--muted)] leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                {/* Approach */}
                <div className="space-y-1.5">
                  <div className="font-mono text-[11px] text-[var(--gold)] font-bold uppercase tracking-wider">
                    APPROACH
                  </div>
                  <p className="text-[var(--muted)] leading-relaxed">
                    {item.approach}
                  </p>
                </div>

                {/* Why Shelved */}
                <div className="space-y-1.5">
                  <div className="font-mono text-[11px] text-[var(--gold)] font-bold uppercase tracking-wider">
                    WHY SHELVED / STATUS
                  </div>
                  <p className="text-[var(--muted)] leading-relaxed">
                    {item.whyShelved}
                  </p>
                </div>

                {/* What It'd Take */}
                <div className="space-y-1.5">
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

        {/* Redirect CTA Line */}
        <div className="theme-card-nested border-[var(--line)] text-center py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-[var(--muted)]">
            Exploring 4 active R&D prototypes across edge WASM embeddings, stream parsers, and SLM agents.
          </p>

          <Link
            to="/product-lab"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[var(--gold)] hover:underline flex-shrink-0"
          >
            <span>Explore All R&D Spikes ({productLabData.length})</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProductLabSection;
