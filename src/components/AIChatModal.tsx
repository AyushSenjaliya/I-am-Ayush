import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  sender: "ai" | "user";
  text: string;
  timestamp: string;
}

const initialKnowledge: Record<string, string> = {
  nexus: "Nexus is an autonomous 5-agent B2B market intelligence & outreach platform. Agent 1 (Market Intel) ➔ Agent 2 (Grid Density Scraper + Email Verifier) ➔ Agent 3 (ICP Scorer) ➔ Agent 4 (Pitch Strategist) ➔ Agent 5 (Outreach Sequencer via Email & WhatsApp Web JS). Powered by Node.js, Express, React, Supabase PostgreSQL, and a 3-tier AI cascade (Gemini + Sarvam).",
  nexara: "Nexara is an AI trend intelligence & e-commerce product discovery engine. It scrapes viral TikTok videos (>100k views), validates supplier margins on AliExpress, checks Meta Ads Library ad saturation, maps human desire framing, and scores products dynamically via a weighted learning loop. Powered by Fastify 4, Next.js 16, React 19, MongoDB, and Gemini/Sarvam/OpenAI fallback chain.",
  education: "Ayush is pursuing an MBA (Masters of Business Administration) at Parul University (2024–Present) and holds a B.Sc. in Information Technology from Sarvajanik University (2021–2024) with a distinction CGPA of 8.45 / 10.",
  experience: "Ayush's work experience includes: 1) Technical Lead – Product & Growth at Asterixz Infotech (Mar 2026–Jul 2026), leading product/business strategy, client acquisition & engineering for Nexus, Nexara & Shopify stores. 2) Full Stack Developer at Oftgen Infotech (Nov 2025–Feb 2026), building Auco, Appy, Leadingly, & Codium. 3) Full Stack & Shopify Developer - Independent / Freelance (May 2025–Nov 2025), building custom Shopify stores & e-commerce OMS. 4) Full Stack Developer at Dot3 Solutions (Jun 2024–Apr 2025). 5) React.js Intern at Dot3 Solutions (Dec 2023–Jun 2024).",
  projects: "Ayush has built 13 major applications: 1) Nexus (5-Agent B2B AI), 2) Nexara (AI Trend Engine), 3) Auco (UI Code Generator), 4) Appy (Gemini RAG Bot), 5) Leadingly (Voice Diagrammer), 6) Codium (Electron IDE), 7) WealthBook (React Native), 8) Real-Time Stock Analytics, 9) Shopify Ecom OMS, 10) Maxzope Import BMS, 11) Clinic Management, 12) Garment Costing, 13) Accounting System.",
  contact: "Ayush is based in Surat, Gujarat, India. Phone/WhatsApp: +91 9638215983 | Email: aayushsenjaliya@gmail.com | LinkedIn: linkedin.com/in/ayushsenjaliya."
};

const AIChatModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "ai",
      text: "Hi! I'm Ayush's AI Assistant. Ask me anything about Nexus (5-Agent B2B Outreach), Nexara (AI Trend Engine), his 13 projects, or contact info!",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickPrompts = [
    { label: "🤖 What is Nexus AI Agent?", key: "nexus" },
    { label: "🔥 What is Nexara Trend Engine?", key: "nexara" },
    { label: "🚀 View All 13 Projects", key: "projects" },
    { label: "📞 Phone & Contact Info", key: "contact" },
  ];

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      let replyText = "Ayush Senjaliya is a Full Stack & AI Developer from Surat, Gujarat, India (+91 9638215983 | aayushsenjaliya@gmail.com). He specializes in AI Multi-Agent systems (Nexus), E-Commerce Trend Engines (Nexara), and Scalable Web Apps!";

      const lowerQ = query.toLowerCase();
      if (lowerQ.includes("nexus") || lowerQ.includes("agent") || lowerQ.includes("outreach")) {
        replyText = initialKnowledge.nexus;
      } else if (lowerQ.includes("nexara") || lowerQ.includes("trend") || lowerQ.includes("tiktok") || lowerQ.includes("ecom")) {
        replyText = initialKnowledge.nexara;
      } else if (lowerQ.includes("edu") || lowerQ.includes("mba") || lowerQ.includes("cgpa")) {
        replyText = initialKnowledge.education;
      } else if (lowerQ.includes("dot3") || lowerQ.includes("exp") || lowerQ.includes("work")) {
        replyText = initialKnowledge.experience;
      } else if (lowerQ.includes("project") || lowerQ.includes("auco") || lowerQ.includes("appy")) {
        replyText = initialKnowledge.projects;
      } else if (lowerQ.includes("contact") || lowerQ.includes("phone") || lowerQ.includes("email")) {
        replyText = initialKnowledge.contact;
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-highlight text-navy-dark hover:bg-highlight/90 p-4 rounded-full shadow-2xl flex items-center gap-2.5 font-bold text-sm transition-all hover:scale-105 border-2 border-navy group"
          aria-label="Open AI Assistant"
        >
          <Bot size={22} className="animate-bounce" />
          <span className="hidden sm:inline font-mono">Ask Ayush</span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-navy-dark opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-navy-dark"></span>
          </span>
        </button>
      )}

      {/* Chat Modal Drawer */}
      {isOpen && (
        <div className="bg-navy border border-highlight/40 rounded-2xl w-[90vw] sm:w-[380px] h-[520px] shadow-2xl flex flex-col overflow-hidden animate-fade-in">

          {/* Header */}
          <div className="bg-navy-dark p-4 border-b border-slate-dark/60 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-highlight/10 rounded-full text-highlight">
                <Bot size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                  Ayush's AI Assistant <Sparkles size={13} className="text-highlight" />
                </h4>
                <p className="text-[11px] font-mono text-highlight">🟢 Surat, India • Online</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-light hover:text-white p-1 rounded"
              aria-label="Close AI Chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-navy/90">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs ${msg.sender === "user"
                      ? "bg-highlight text-navy-dark font-bold"
                      : "bg-navy-light text-highlight border border-highlight/30"
                    }`}
                >
                  {msg.sender === "user" ? <User size={14} /> : <Bot size={14} />}
                </div>

                <div
                  className={`max-w-[80%] p-3 rounded-xl text-xs leading-relaxed ${msg.sender === "user"
                      ? "bg-highlight/15 border border-highlight/30 text-white rounded-tr-none font-medium"
                      : "bg-navy-light/80 border border-slate-dark/60 text-slate-light rounded-tl-none"
                    }`}
                >
                  <p>{msg.text}</p>
                  <span className="block text-[10px] text-slate-dark text-right mt-1 font-mono">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-xs text-highlight font-mono bg-navy-light/40 p-2.5 rounded-lg w-fit">
                <Bot size={14} className="animate-spin" /> AI is thinking...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 bg-navy-dark/80 border-t border-slate-dark/40 flex gap-1.5 overflow-x-auto">
            {quickPrompts.map((qp) => (
              <button
                key={qp.key}
                onClick={() => handleSendMessage(initialKnowledge[qp.key])}
                className="whitespace-nowrap text-[10px] font-mono text-slate-light bg-navy hover:text-highlight hover:border-highlight border border-slate-dark px-2.5 py-1 rounded-full transition-colors"
              >
                {qp.label}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-navy-dark border-t border-slate-dark/60 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about Nexus, Nexara, Projects..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-navy border border-slate-dark/80 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate focus:border-highlight focus:outline-none"
            />
            <Button
              type="submit"
              className="bg-highlight text-navy-dark hover:bg-highlight/90 p-2 rounded-lg"
              aria-label="Send message"
            >
              <Send size={15} />
            </Button>
          </form>

        </div>
      )}

    </div>
  );
};

export default AIChatModal;
