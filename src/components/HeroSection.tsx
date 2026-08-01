import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Copy, Check, FileText, Sparkles, Terminal, MapPin, Phone, Mail } from "lucide-react";
import ThreeDParticleSphere from "./ThreeDParticleSphere";
import TextScramble from "./TextScramble";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"dev" | "edu" | "stack">("dev");

  const codeSnippets = {
    dev: `const developer = {
  name: 'Ayush Senjaliya',
  role: 'Full Stack & Shopify Developer',
  phone: '+91 9638215983',
  email: 'aayushsenjaliya@gmail.com',
  location: 'Surat, Gujarat, India',
  education: 'MBA (Parul Univ) | B.Sc IT 8.45 CGPA',
  status: 'Available for Hire 🚀'
};`,
    edu: `const academicBackground = {
  masterDegree: {
    degree: 'Masters of Business Administration (MBA)',
    institution: 'Parul University',
    timeline: 'July 2024 - Present'
  },
  bachelorDegree: {
    degree: 'B.Sc. in Information Technology',
    institution: 'Sarvajanik University',
    score: 'CGPA 8.45 / 10 (2021 - 2024)'
  }
};`,
    stack: `const competencies = {
  frontend: ['React', 'Next.js', 'Vite', 'ShadCN', 'MUI', 'Tailwind CSS'],
  backend: ['Node.js', 'NestJS', 'Express', 'REST APIs', 'WebSockets'],
  database: ['MongoDB', 'MySQL', 'Prisma ORM', 'Redis'],
  eCommerce: ['Shopify Store Dev', 'Shopify APIs', 'Custom Business Apps']
};`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center bg-navy pt-24 pb-16 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro Text */}
          <div className="lg:col-span-7 space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-highlight/10 border border-highlight/30 text-highlight text-sm font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-highlight opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-highlight"></span>
              </span>
              Surat, Gujarat, India • Available for Hire
            </div>

            <h3 className="text-highlight font-mono text-lg">Hi, my name is</h3>
            
            <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight">
              <TextScramble text="Ayush Senjaliya" scrambleSpeed={45} />
            </h1>
            
            <h2 className="text-2xl sm:text-4xl font-bold text-slate">
              Results-Driven Full Stack & Shopify Developer.
            </h2>
            
            <p className="text-slate max-w-xl text-lg leading-relaxed">
              Expert in building scalable web applications, real-time systems, custom Shopify stores, and enterprise business management platforms. MBA student & B.Sc. IT graduate (8.45 CGPA) from Surat, India.
            </p>

            {/* Quick Contact Micro Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-light">
              <span className="flex items-center gap-1.5 bg-navy-light/60 px-3 py-1.5 rounded border border-slate-dark/60">
                <MapPin size={14} className="text-highlight" /> Surat, Gujarat, India
              </span>
              <span className="flex items-center gap-1.5 bg-navy-light/60 px-3 py-1.5 rounded border border-slate-dark/60">
                <Phone size={14} className="text-highlight" /> +91 9638215983
              </span>
              <span className="flex items-center gap-1.5 bg-navy-light/60 px-3 py-1.5 rounded border border-slate-dark/60">
                <Mail size={14} className="text-highlight" /> aayushsenjaliya@gmail.com
              </span>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                className="bg-highlight text-navy-dark hover:bg-highlight/90 font-semibold px-6 py-6 text-base"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Hire Me
              </Button>

              <Button
                className="border border-highlight text-highlight bg-transparent hover:bg-highlight/10 font-semibold px-6 py-6 text-base"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                See My Work
              </Button>

              <Button
                className="border border-slate-dark text-slate-light bg-navy-light/60 hover:bg-navy-light font-medium px-5 py-6 text-base flex items-center gap-2"
                onClick={() => window.open("/AyushResume1.pdf", "_blank")}
              >
                <FileText size={18} />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Column: 3D Particle Sphere + Code Terminal */}
          <div className="lg:col-span-5 animate-fade-in-right space-y-4">
            
            {/* Interactive 3D Sphere Canvas */}
            <div className="flex justify-center -mb-8">
              <ThreeDParticleSphere />
            </div>

            {/* Terminal Card */}
            <div className="relative rounded-xl bg-navy-dark border border-slate-dark/60 shadow-2xl overflow-hidden shimmer-card">
              
              {/* Terminal Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-navy-light/80 border-b border-slate-dark/60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="ml-2 font-mono text-xs text-slate-light flex items-center gap-1">
                    <Terminal size={13} className="text-highlight" /> profile.ts
                  </span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="text-slate hover:text-highlight transition-colors flex items-center gap-1 text-xs font-mono p-1 rounded"
                  title="Copy snippet"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-highlight" />
                      <span className="text-highlight">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Tabs */}
              <div className="flex bg-navy-dark border-b border-slate-dark/40 px-2 pt-2">
                <button
                  onClick={() => setActiveTab("dev")}
                  className={`px-3 py-1.5 text-xs font-mono rounded-t-md transition-colors ${
                    activeTab === "dev"
                      ? "bg-navy-light text-highlight border-t-2 border-highlight"
                      : "text-slate hover:text-slate-light"
                  }`}
                >
                  profile.ts
                </button>
                <button
                  onClick={() => setActiveTab("edu")}
                  className={`px-3 py-1.5 text-xs font-mono rounded-t-md transition-colors flex items-center gap-1 ${
                    activeTab === "edu"
                      ? "bg-navy-light text-highlight border-t-2 border-highlight"
                      : "text-slate hover:text-slate-light"
                  }`}
                >
                  <Sparkles size={11} /> education.ts
                </button>
                <button
                  onClick={() => setActiveTab("stack")}
                  className={`px-3 py-1.5 text-xs font-mono rounded-t-md transition-colors ${
                    activeTab === "stack"
                      ? "bg-navy-light text-highlight border-t-2 border-highlight"
                      : "text-slate hover:text-slate-light"
                  }`}
                >
                  competencies.ts
                </button>
              </div>

              {/* Terminal Code Content */}
              <div className="p-4 font-mono text-xs leading-relaxed text-slate-light overflow-x-auto min-h-[210px]">
                <pre className="whitespace-pre-wrap">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

            </div>
          </div>

        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-highlight hover:text-highlight-dark transition-colors p-2"
            aria-label="Scroll to About Section"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
