import { useState, useMemo } from "react";
import { AlertCircle } from "lucide-react";

const CalculatorSection = () => {
  // Currency Toggle State
  const [currencySymbol, setCurrencySymbol] = useState<"$" | "₹" | "£">("$");

  // Slider State (Default values according to Section 3 spec)
  const [inquiries, setInquiries] = useState<number>(100);
  const [jobValue, setJobValue] = useState<number>(450);
  const [responseRate, setResponseRate] = useState<number>(70);
  const [quoteRate, setQuoteRate] = useState<number>(43);
  const [closeRate, setCloseRate] = useState<number>(67);

  // Calculations
  const stats = useMemo(() => {
    // 1. Manual Scenario
    const responded = inquiries * (responseRate / 100);
    const quoted = responded * (quoteRate / 100);
    const closed = quoted * (closeRate / 100);
    const manualRevenue = closed * jobValue;

    // 2. Automated Scenario (fixed uplift caps)
    const autoResponseRate = Math.min(97, responseRate + 25);
    const autoQuoteRate = Math.min(88, quoteRate + 15);
    const autoCloseRate = Math.min(92, closeRate + 8);

    const autoResponded = inquiries * (autoResponseRate / 100);
    const autoQuoted = autoResponded * (autoQuoteRate / 100);
    const autoClosed = autoQuoted * (autoCloseRate / 100);
    const autoRevenue = autoClosed * jobValue;

    // 3. Leak Card metrics
    const leak = Math.max(0, autoRevenue - manualRevenue);
    const missedInquiries = Math.round(inquiries - responded);

    return {
      manual: {
        inquiries,
        responded: Math.round(responded),
        quoted: Math.round(quoted),
        closed: Math.round(closed),
        revenue: Math.round(manualRevenue),
      },
      automated: {
        inquiries,
        responded: Math.round(autoResponded),
        quoted: Math.round(autoQuoted),
        closed: Math.round(autoClosed),
        revenue: Math.round(autoRevenue),
      },
      leak: Math.round(leak),
      missedInquiries,
    };
  }, [inquiries, jobValue, responseRate, quoteRate, closeRate]);

  // Helper for currency formatting
  const formatCurrency = (val: number) => {
    return `${currencySymbol}${val.toLocaleString()}`;
  };

  return (
    <section id="calculator" className="py-24 bg-[var(--bg)] border-b border-[var(--line)]">
      <div className="max-w-[1080px] mx-auto px-6">
        
        {/* Header */}
        <div className="space-y-3 mb-12">
          <div className="section-eyebrow">SEE IT IN ACTION</div>
          <h2 className="section-title">
            How much is a slow follow-up costing a business?
          </h2>
          <p className="text-[var(--muted)] text-base font-body max-w-xl">
            Adjust the sliders below to calculate lost revenue from unautomated inquiry handling in real time.
          </p>
        </div>

        {/* Sliders Input Panel */}
        <div className="theme-card mb-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--line)] pb-4">
            <span className="font-mono text-xs font-bold text-[var(--gold)] uppercase tracking-wider">
              INTERACTIVE BUSINESS INPUTS
            </span>

            {/* Currency Symbol Toggle */}
            <div className="flex items-center gap-1.5 bg-[var(--surface-2)] p-1 rounded-lg border border-[var(--line)]">
              <span className="text-xs font-mono text-[var(--muted)] px-2">Currency:</span>
              {(["$", "₹", "£"] as const).map((sym) => (
                <button
                  key={sym}
                  type="button"
                  onClick={() => setCurrencySymbol(sym)}
                  className={`px-2.5 py-1 text-xs font-mono rounded-md transition-all ${
                    currencySymbol === sym
                      ? "bg-[var(--gold)] text-[#0F1B1E] font-bold"
                      : "text-[var(--muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {sym}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
            {/* Slider 1: Monthly inquiries */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-[var(--text)] font-medium">Monthly Inquiries</label>
                <span className="text-[var(--gold)] font-bold">{inquiries}</span>
              </div>
              <input
                type="range"
                min="20"
                max="500"
                step="10"
                value={inquiries}
                onChange={(e) => setInquiries(Number(e.target.value))}
                className="w-full accent-[var(--gold)] bg-[var(--surface-2)] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[var(--muted)]">
                <span>20</span>
                <span>500</span>
              </div>
            </div>

            {/* Slider 2: Avg. job value */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-[var(--text)] font-medium">Avg. Job Value</label>
                <span className="text-[var(--gold)] font-bold">{formatCurrency(jobValue)}</span>
              </div>
              <input
                type="range"
                min="100"
                max="2000"
                step="25"
                value={jobValue}
                onChange={(e) => setJobValue(Number(e.target.value))}
                className="w-full accent-[var(--gold)] bg-[var(--surface-2)] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[var(--muted)]">
                <span>{currencySymbol}100</span>
                <span>{currencySymbol}2,000</span>
              </div>
            </div>

            {/* Slider 3: Response rate today (%) */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-[var(--text)] font-medium">Response Rate Today</label>
                <span className="text-[var(--gold)] font-bold">{responseRate}%</span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                step="1"
                value={responseRate}
                onChange={(e) => setResponseRate(Number(e.target.value))}
                className="w-full accent-[var(--gold)] bg-[var(--surface-2)] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[var(--muted)]">
                <span>20%</span>
                <span>100%</span>
              </div>
            </div>

            {/* Slider 4: Quote rate (%) */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-[var(--text)] font-medium">Quote Rate (% of responded)</label>
                <span className="text-[var(--gold)] font-bold">{quoteRate}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="95"
                step="1"
                value={quoteRate}
                onChange={(e) => setQuoteRate(Number(e.target.value))}
                className="w-full accent-[var(--gold)] bg-[var(--surface-2)] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[var(--muted)]">
                <span>10%</span>
                <span>95%</span>
              </div>
            </div>

            {/* Slider 5: Close rate (%) */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-[var(--text)] font-medium">Close Rate (% of quoted)</label>
                <span className="text-[var(--gold)] font-bold">{closeRate}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="95"
                step="1"
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full accent-[var(--gold)] bg-[var(--surface-2)] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[var(--muted)]">
                <span>10%</span>
                <span>95%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Two Side-by-Side Funnel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Funnel 1: Manual Process */}
          <div className="theme-card space-y-6">
            <div className="border-b border-[var(--line)] pb-4 flex justify-between items-baseline">
              <div>
                <h3 className="font-display font-bold text-lg text-[var(--text)]">Manual Process</h3>
                <span className="text-xs font-mono text-[var(--muted)]">Unautomated inquiry workflow</span>
              </div>
              <div className="font-mono text-2xl font-bold text-[var(--muted)]">
                {formatCurrency(stats.manual.revenue)}
              </div>
            </div>

            <div className="space-y-4 font-mono text-xs">
              {/* Stage 1: Inquiries */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[var(--text)]">
                  <span>1. Inquiries Received</span>
                  <span>{stats.manual.inquiries}</span>
                </div>
                <div className="w-full h-3 rounded bg-[var(--surface-2)] overflow-hidden">
                  <div className="bar-fill h-full bg-[var(--muted)]/60 rounded" style={{ width: "100%" }}></div>
                </div>
              </div>

              {/* Stage 2: Responded */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[var(--text)]">
                  <span>2. Responded ({responseRate}%)</span>
                  <span>{stats.manual.responded}</span>
                </div>
                <div className="w-full h-3 rounded bg-[var(--surface-2)] overflow-hidden">
                  <div
                    className="bar-fill h-full bg-[var(--muted)]/60 rounded"
                    style={{ width: `${(stats.manual.responded / inquiries) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Stage 3: Quoted */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[var(--text)]">
                  <span>3. Quoted ({quoteRate}%)</span>
                  <span>{stats.manual.quoted}</span>
                </div>
                <div className="w-full h-3 rounded bg-[var(--surface-2)] overflow-hidden">
                  <div
                    className="bar-fill h-full bg-[var(--muted)]/60 rounded"
                    style={{ width: `${(stats.manual.quoted / inquiries) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Stage 4: Closed */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[var(--text)]">
                  <span>4. Closed Deals ({closeRate}%)</span>
                  <span>{stats.manual.closed}</span>
                </div>
                <div className="w-full h-3 rounded bg-[var(--surface-2)] overflow-hidden">
                  <div
                    className="bar-fill h-full bg-[var(--muted)]/60 rounded"
                    style={{ width: `${(stats.manual.closed / inquiries) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Funnel 2: With CRM Automation */}
          <div className="theme-card space-y-6 border-[var(--gold)]/40">
            <div className="border-b border-[var(--line)] pb-4 flex justify-between items-baseline">
              <div>
                <h3 className="font-display font-bold text-lg text-[var(--text)]">With CRM Automation</h3>
                <span className="text-xs font-mono text-[var(--gold)]">Automated speed-to-lead system</span>
              </div>
              <div className="font-mono text-2xl font-bold text-[var(--gold)]">
                {formatCurrency(stats.automated.revenue)}
              </div>
            </div>

            <div className="space-y-4 font-mono text-xs">
              {/* Stage 1: Inquiries */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[var(--text)]">
                  <span>1. Inquiries Received</span>
                  <span>{stats.automated.inquiries}</span>
                </div>
                <div className="w-full h-3 rounded bg-[var(--surface-2)] overflow-hidden">
                  <div className="bar-fill h-full bg-[var(--gold)] rounded" style={{ width: "100%" }}></div>
                </div>
              </div>

              {/* Stage 2: Responded */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[var(--text)]">
                  <span>2. Responded ({Math.min(97, responseRate + 25)}%)</span>
                  <span>{stats.automated.responded}</span>
                </div>
                <div className="w-full h-3 rounded bg-[var(--surface-2)] overflow-hidden">
                  <div
                    className="bar-fill h-full bg-[var(--gold)] rounded"
                    style={{ width: `${(stats.automated.responded / inquiries) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Stage 3: Quoted */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[var(--text)]">
                  <span>3. Quoted ({Math.min(88, quoteRate + 15)}%)</span>
                  <span>{stats.automated.quoted}</span>
                </div>
                <div className="w-full h-3 rounded bg-[var(--surface-2)] overflow-hidden">
                  <div
                    className="bar-fill h-full bg-[var(--gold)] rounded"
                    style={{ width: `${(stats.automated.quoted / inquiries) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Stage 4: Closed */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[var(--text)]">
                  <span>4. Closed Deals ({Math.min(92, closeRate + 8)}%)</span>
                  <span>{stats.automated.closed}</span>
                </div>
                <div className="w-full h-3 rounded bg-[var(--surface-2)] overflow-hidden">
                  <div
                    className="bar-fill h-full bg-[var(--gold)] rounded"
                    style={{ width: `${(stats.automated.closed / inquiries) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Wide Revenue Leak Callout Card (Coral Warning Accent ONLY) */}
        <div
          className="relative rounded-2xl p-8 border border-[var(--coral)] space-y-4 shadow-2xl overflow-hidden"
          style={{ background: "rgba(232, 92, 74, 0.08)" }}
        >
          {/* Animated Falling Drip Dots */}
          <div className="drip-container">
            <span className="drip-dot drip-dot-1"></span>
            <span className="drip-dot drip-dot-2"></span>
            <span className="drip-dot drip-dot-3"></span>
            <span className="drip-dot drip-dot-4"></span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[var(--coral)] uppercase tracking-wider bg-[var(--coral)]/10 px-3 py-1 rounded border border-[var(--coral)]/30">
                <AlertCircle size={14} /> REVENUE LEAK CALLOUT
              </div>

              <div className="flex items-baseline gap-3">
                <span className="font-display font-bold text-4xl sm:text-5xl text-[var(--coral)]">
                  {formatCurrency(stats.leak)}
                </span>
                <span className="font-mono text-sm text-[var(--muted)]">
                  / month lost in uncaptured revenue
                </span>
              </div>

              <p className="text-[var(--text)] text-sm font-body max-w-xl">
                Slow response times and manual follow-ups cause high-intent inquiries to cool off. Instant automated response workflows capture missed leads before competitors do.
              </p>
            </div>

            {/* Supporting Stat */}
            <div className="theme-card-nested border-[var(--coral)]/30 bg-[#0F1B1E]/80 text-center min-w-[200px] flex-shrink-0">
              <div className="font-mono text-3xl font-bold text-[var(--coral)]">
                {stats.missedInquiries}
              </div>
              <div className="font-mono text-xs text-[var(--muted)] mt-1">
                Missed Inquiries / mo
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CalculatorSection;
