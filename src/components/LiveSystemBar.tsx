import { useState, useEffect } from "react";
import { Activity, ShieldCheck, Cpu, Terminal, Zap } from "lucide-react";

const LiveSystemBar = () => {
  const [latency, setLatency] = useState(14);
  const [activeThreads, setActiveThreads] = useState(13);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fluctuate latency realistically between 11ms and 18ms
      const nextLatency = Math.floor(Math.random() * 8) + 11;
      setLatency(nextLatency);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-navy-dark/95 border-y border-slate-dark/60 py-2.5 px-4 font-mono text-[11px] text-slate-light relative z-20 shadow-inner overflow-x-auto">
      <div className="container max-w-6xl mx-auto flex items-center justify-between gap-6 whitespace-nowrap">
        
        {/* Left Status Node */}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-highlight font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-highlight opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-highlight"></span>
            </span>
            STATUS: ONLINE
          </span>

          <span className="hidden sm:flex items-center gap-1 text-slate">
            <Terminal size={12} className="text-highlight" /> ENV: NODE_V20_STABLE
          </span>
        </div>

        {/* Center Telemetry Data */}
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <Zap size={13} className="text-yellow-400" />
            <span className="text-slate">LATENCY:</span>
            <span className="text-highlight font-bold">{latency}ms</span>
          </span>

          <span className="hidden md:flex items-center gap-1.5">
            <Cpu size={13} className="text-highlight" />
            <span className="text-slate">AI CASCADE:</span>
            <span className="text-white">GEMINI ➔ SARVAM ➔ OPENAI</span>
          </span>

          <span className="hidden lg:flex items-center gap-1.5">
            <Activity size={13} className="text-highlight" />
            <span className="text-slate">ACTIVE SYSTEMS:</span>
            <span className="text-highlight font-bold">{activeThreads} PLATFORMS</span>
          </span>
        </div>

        {/* Right Verification Tag */}
        <div className="flex items-center gap-1.5 text-slate">
          <ShieldCheck size={13} className="text-highlight" />
          <span className="hidden sm:inline">BUILD: VERIFIED_CLEAN</span>
        </div>

      </div>
    </div>
  );
};

export default LiveSystemBar;
