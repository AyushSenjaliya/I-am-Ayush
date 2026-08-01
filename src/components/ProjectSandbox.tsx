import { useState, useEffect } from "react";
import {
  TrendingUp,
  MessageSquare,
  Calculator,
  ShoppingBag,
  Play,
  Zap,
  CheckCircle,
  Sparkles,
  Bot,
  Code2,
  Target,
  Flame,
  UserCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectSandbox = () => {
  const [activeTab, setActiveTab] = useState<"nexus" | "nexara" | "auco" | "stock">("nexus");

  // State for Nexus Agent Pipeline Demo
  const [agentStep, setAgentStep] = useState(1);
  const [agentLog, setAgentLog] = useState("Agent 1 (Market Intel): Identified high demand for B2B SaaS in target grid.");

  // State for Nexara Trend Engine Demo
  const [tikTokViews, setTikTokViews] = useState(145000);
  const [supplierPrice, setSupplierPrice] = useState(6.20);
  const [sellingPrice, setSellingPrice] = useState(24.99);

  // State for Auco Code Generator Demo
  const [promptInput, setPromptInput] = useState("Build a dark-themed SaaS pricing card with a highlight badge");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState(
    `<div className="bg-navy-dark p-6 rounded-xl border border-highlight/40">\n  <span className="text-highlight text-xs">POPULAR</span>\n  <h3 className="text-white text-xl font-bold">Pro Developer Plan</h3>\n  <p className="text-3xl font-extrabold text-white mt-2">$49/mo</p>\n</div>`
  );

  // State for Stock Demo
  const [stockPrice, setStockPrice] = useState(184.5);
  const [stockHistory, setStockHistory] = useState<number[]>([180, 182, 181, 183, 184.5]);

  // Simulate Stock Tick updates
  useEffect(() => {
    if (activeTab !== "stock") return;
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.48) * 1.5;
      setStockPrice((prev) => {
        const next = parseFloat((prev + delta).toFixed(2));
        setStockHistory((h) => [...h.slice(-7), next]);
        return next;
      });
    }, 1200);
    return () => clearInterval(interval);
  }, [activeTab]);

  // Nexus 5-Agent Step Simulator
  const advanceNexusAgent = () => {
    if (agentStep === 1) {
      setAgentStep(2);
      setAgentLog("Agent 2 (Lead Scraper): Density grid scanned. 42 verified business contacts extracted.");
    } else if (agentStep === 2) {
      setAgentStep(3);
      setAgentLog("Agent 3 (ICP Scorer): Multi-factor heuristic score calculated. Top 15 leads qualified (>80 ICP Fit).");
    } else if (agentStep === 3) {
      setAgentStep(4);
      setAgentLog("Agent 4 (Lead Strategist): Hyper-personalized pitch hooks & custom CTA generated per lead.");
    } else if (agentStep === 4) {
      setAgentStep(5);
      setAgentLog("Agent 5 (Outreach Sequencer): Email & WhatsApp Web JS multi-channel sequence scheduled.");
    } else {
      setAgentStep(1);
      setAgentLog("Agent 1 (Market Intel): Identified high demand for B2B SaaS in target grid.");
    }
  };

  // Auco Code Generator Simulation
  const handleGenerateCode = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedCode(
        `<div className="bg-navy p-6 rounded-2xl border border-highlight">\n  <div className="flex justify-between items-center">\n    <h3 className="text-white font-bold">${promptInput || "Generated Component"}</h3>\n    <span className="bg-highlight/10 text-highlight text-xs font-mono px-2 py-1 rounded">React 18</span>\n  </div>\n  <p className="text-slate text-sm mt-2">Production component compiled by Auco AI</p>\n</div>`
      );
      setIsGenerating(false);
    }, 600);
  };

  // Nexara Margin Calculation
  const estimatedMargin = (sellingPrice - supplierPrice).toFixed(2);
  const profitMarginPercent = (((sellingPrice - supplierPrice) / sellingPrice) * 100).toFixed(1);

  return (
    <section className="py-16 bg-navy-dark border-t border-slate-dark/40 relative z-10">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-highlight/10 text-highlight font-mono text-xs mb-3 border border-highlight/20">
            <Sparkles size={13} /> Interactive Live App Playground
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center">
            Test AI Agents & Live App Simulations
          </h3>
          <p className="text-slate text-sm max-w-xl text-center mt-2">
            Click between the tabs below to simulate live 5-agent AI outreach, viral product trend validation, and code compilation in your browser.
          </p>
        </div>

        {/* Sandbox Outer Frame */}
        <div className="bg-navy border border-highlight/30 rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Navigation Tabs */}
          <div className="flex flex-wrap bg-navy-dark border-b border-slate-dark/60 p-2 gap-2">
            <button
              onClick={() => setActiveTab("nexus")}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono flex items-center gap-2 transition-all ${
                activeTab === "nexus"
                  ? "bg-highlight text-navy-dark font-bold shadow-md"
                  : "text-slate-light hover:text-white bg-navy/60"
              }`}
            >
              <Target size={15} /> Nexus 5-Agent B2B AI
            </button>
            <button
              onClick={() => setActiveTab("nexara")}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono flex items-center gap-2 transition-all ${
                activeTab === "nexara"
                  ? "bg-highlight text-navy-dark font-bold shadow-md"
                  : "text-slate-light hover:text-white bg-navy/60"
              }`}
            >
              <Flame size={15} /> Nexara Trend Validator
            </button>
            <button
              onClick={() => setActiveTab("auco")}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono flex items-center gap-2 transition-all ${
                activeTab === "auco"
                  ? "bg-highlight text-navy-dark font-bold shadow-md"
                  : "text-slate-light hover:text-white bg-navy/60"
              }`}
            >
              <Code2 size={15} /> Auco UI Code Generator
            </button>
            <button
              onClick={() => setActiveTab("stock")}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono flex items-center gap-2 transition-all ${
                activeTab === "stock"
                  ? "bg-highlight text-navy-dark font-bold shadow-md"
                  : "text-slate-light hover:text-white bg-navy/60"
              }`}
            >
              <TrendingUp size={15} /> Real-Time Stock Feed
            </button>
          </div>

          {/* Tab Content Panels */}
          <div className="p-6 sm:p-8 min-h-[300px] flex items-center justify-center">
            
            {/* 1. NEXUS 5-AGENT SIMULATOR */}
            {activeTab === "nexus" && (
              <div className="w-full space-y-6 max-w-xl">
                <div className="bg-navy-dark p-5 rounded-xl border border-slate-dark/60 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate">NEXUS MULTI-AGENT PIPELINE EXECUTION</span>
                    <span className="text-highlight font-bold">Agent {agentStep} of 5</span>
                  </div>

                  {/* 5-Step Agent Progress Nodes */}
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5].map((stepNum) => (
                      <div
                        key={stepNum}
                        className={`h-2 flex-1 rounded transition-colors ${
                          agentStep >= stepNum ? "bg-highlight" : "bg-navy-light"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="bg-navy p-4 rounded-lg border border-slate-dark/40 font-mono text-xs text-white leading-relaxed flex items-start gap-2.5">
                    <Bot size={18} className="text-highlight flex-shrink-0 mt-0.5" />
                    <span>{agentLog}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs font-mono text-slate">
                  <span>Gemini ➔ Sarvam AI Fallback Cascade Active</span>
                  <Button
                    onClick={advanceNexusAgent}
                    className="bg-highlight text-navy-dark hover:bg-highlight/90 font-semibold text-xs py-2 px-5 flex items-center gap-2"
                  >
                    Run Next Agent Step <Play size={13} />
                  </Button>
                </div>
              </div>
            )}

            {/* 2. NEXARA TREND VALIDATOR SIMULATOR */}
            {activeTab === "nexara" && (
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4 bg-navy-dark p-5 rounded-xl border border-slate-dark/60 text-xs font-mono">
                  <div>
                    <label className="block text-slate mb-1">
                      TikTok Viral Views: <span className="text-highlight font-bold">{tikTokViews.toLocaleString()} views</span>
                    </label>
                    <input
                      type="range"
                      min="50000"
                      max="500000"
                      step="10000"
                      value={tikTokViews}
                      onChange={(e) => setTikTokViews(parseInt(e.target.value))}
                      className="w-full accent-highlight cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-slate mb-1">
                      AliExpress Cost: <span className="text-white font-bold">${supplierPrice.toFixed(2)}</span>
                    </label>
                    <input
                      type="range"
                      min="2"
                      max="20"
                      step="0.5"
                      value={supplierPrice}
                      onChange={(e) => setSupplierPrice(parseFloat(e.target.value))}
                      className="w-full accent-highlight cursor-pointer"
                    />
                  </div>
                </div>

                <div className="bg-navy-dark p-5 rounded-xl border border-highlight/30 space-y-3 font-mono text-xs">
                  <div className="flex justify-between border-b border-slate-dark/40 pb-2">
                    <span className="text-slate">Target Retail Price:</span>
                    <span className="text-white font-bold">${sellingPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-dark/40 pb-2">
                    <span className="text-slate">Est. Net Profit Margin:</span>
                    <span className="text-highlight font-extrabold">${estimatedMargin} ({profitMarginPercent}%)</span>
                  </div>
                  <div className="flex justify-between text-xs pt-1">
                    <span className="text-slate">Meta Ads Saturation Score:</span>
                    <span className="text-yellow-400 font-bold">Low Saturation (High Potential)</span>
                  </div>
                </div>
              </div>
            )}

            {/* 3. AUCO CODE GENERATOR */}
            {activeTab === "auco" && (
              <div className="w-full space-y-4 max-w-2xl">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promptInput}
                    onChange={(e) => setPromptInput(e.target.value)}
                    placeholder="Enter UI description prompt..."
                    className="flex-1 bg-navy-dark border border-slate-dark/80 rounded-lg px-4 py-2 text-xs text-white placeholder:text-slate focus:border-highlight focus:outline-none font-mono"
                  />
                  <Button
                    onClick={handleGenerateCode}
                    disabled={isGenerating}
                    className="bg-highlight text-navy-dark hover:bg-highlight/90 font-semibold text-xs py-2 px-4 flex items-center gap-1.5"
                  >
                    {isGenerating ? "Generating UI..." : "Generate UI"} <Sparkles size={14} />
                  </Button>
                </div>

                <div className="bg-navy-dark p-4 rounded-xl border border-slate-dark/60 font-mono text-xs text-highlight overflow-x-auto min-h-[140px]">
                  <pre><code>{generatedCode}</code></pre>
                </div>
              </div>
            )}

            {/* 4. STOCK SIMULATOR */}
            {activeTab === "stock" && (
              <div className="w-full space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-navy-dark p-5 rounded-xl border border-slate-dark/60">
                  <div>
                    <span className="text-xs font-mono text-slate">TICKER: NASDAQ: TECH_AI</span>
                    <h4 className="text-3xl font-extrabold text-white font-mono mt-1">
                      ${stockPrice}{" "}
                      <span className="text-highlight text-sm font-normal">
                        (WebSocket Stream)
                      </span>
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-highlight bg-highlight/10 px-3 py-1.5 rounded-full border border-highlight/20 flex items-center gap-1.5">
                    <Zap size={13} /> WebSockets @ 35ms Latency
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-slate">
                    <span>Live Tick History Graph (F&O & OHLC Pipeline)</span>
                    <span className="text-highlight font-mono">Stream OK</span>
                  </div>
                  <div className="flex items-end gap-2 h-28 bg-navy-dark p-4 rounded-xl border border-slate-dark/40">
                    {stockHistory.map((val, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-highlight/80 rounded-t transition-all duration-300 relative group"
                        style={{ height: `${Math.max(20, (val - 170) * 5)}%` }}
                      >
                        <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-mono bg-navy px-1.5 py-0.5 rounded text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          ${val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectSandbox;
