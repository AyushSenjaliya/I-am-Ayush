import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Sparkles, PhoneCall, CheckCircle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { streamAgentChat, submitAgentLead } from "@/api/agentApi";

interface Message {
  id: string;
  sender: "ai" | "user";
  text: string;
  timestamp: string;
  recommendations?: Array<{ id: string; title: string; category: string; summary?: string }>;
  salesStage?: string;
}

const quickPromptQueries: Record<string, string> = {
  nexus: "Tell me about Nexus autonomous 5-agent B2B intelligence platform.",
  nexara: "Tell me about Nexara AI trend intelligence & e-commerce engine.",
  projects: "What portfolio projects has Ayush built?",
  contact: "How can I contact or hire Ayush?",
};

const AIChatModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId, setSessionId] = useState(() => `session_${Date.now()}`);
  const [activeStage, setActiveStage] = useState<string>("DISCOVERY");
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadCompany, setLeadCompany] = useState("");
  const [leadSummary, setLeadSummary] = useState("");
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadSubmittedSuccess, setLeadSubmittedSuccess] = useState(false);

  const initialWelcomeMsg: Message = {
    id: "welcome",
    sender: "ai",
    text: "Hi! I'm Ayush's AI Sales Agent. Ask me anything about Nexus (5-Agent B2B Outreach), Nexara (AI Trend Engine), his 13 portfolio projects, or hiring/freelance opportunities!",
    timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  };

  const [messages, setMessages] = useState<Message[]>([initialWelcomeMsg]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleResetConversation = () => {
    setSessionId(`session_${Date.now()}`);
    setMessages([initialWelcomeMsg]);
    setActiveStage("DISCOVERY");
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickPrompts = [
    { label: "🤖 Nexus AI Agent", key: "nexus" },
    { label: "🔥 Nexara Trend Engine", key: "nexara" },
    { label: "🚀 View All Projects", key: "projects" },
    { label: "📞 Contact & Hiring Info", key: "contact" },
  ];

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const aiMsgId = (Date.now() + 1).toString();
    const initialAiMsg: Message = {
      id: aiMsgId,
      sender: "ai",
      text: "",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg, initialAiMsg]);
    if (!textToSend) setInputValue("");
    setIsTyping(true);

    streamAgentChat({
      message: query,
      sessionId,
      onMeta: (meta) => {
        if (meta.salesStage) setActiveStage(meta.salesStage);
        if (meta.recommendations && meta.recommendations.length > 0) {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === aiMsgId ? { ...msg, recommendations: meta.recommendations, salesStage: meta.salesStage } : msg
            )
          );
        }
      },
      onToken: (token) => {
        setIsTyping(false);
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === aiMsgId ? { ...msg, text: msg.text + token } : msg
          )
        );
      },
      onDone: () => {
        setIsTyping(false);
      },
      onError: (errText) => {
        setIsTyping(false);
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === aiMsgId
              ? {
                  ...msg,
                  text:
                    msg.text ||
                    `I'm having trouble connecting right now (${errText}). You can contact Ayush directly at +91 9638215983 or aayushsenjaliya@gmail.com!`,
                }
              : msg
          )
        );
      },
    });
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail.trim()) return;

    setIsSubmittingLead(true);
    const res = await submitAgentLead({
      sessionId,
      name: leadName,
      email: leadEmail,
      company: leadCompany,
      requirementSummary: leadSummary,
      intent: "FREELANCE_PROJECT",
      fitScore: 85,
    });

    setIsSubmittingLead(false);
    if (res.success) {
      setLeadSubmittedSuccess(true);
      setTimeout(() => {
        setShowLeadForm(false);
        setLeadSubmittedSuccess(false);
      }, 2000);

      const confirmMsg: Message = {
        id: Date.now().toString(),
        sender: "ai",
        text: `Thank you ${leadName || "there"}! Your details have been received. Ayush will review your inquiry and get back to you shortly at ${leadEmail}.`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, confirmMsg]);
    }
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
        <div className="bg-navy border border-highlight/40 rounded-2xl w-[90vw] sm:w-[390px] h-[540px] shadow-2xl flex flex-col overflow-hidden animate-fade-in relative">

          {/* Header */}
          <div className="bg-navy-dark p-3.5 border-b border-slate-dark/60 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-highlight/10 rounded-full text-highlight">
                <Bot size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                  Ayush's AI Sales Agent <Sparkles size={13} className="text-highlight" />
                </h4>
                <p className="text-[11px] font-mono text-highlight">🟢 Surat, India • Online ({activeStage})</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetConversation}
                className="text-slate-light hover:text-highlight p-1 rounded transition-colors"
                title="Reset Conversation"
                aria-label="Reset Conversation"
              >
                <RotateCcw size={16} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-light hover:text-white p-1 rounded"
                aria-label="Close AI Chat"
              >
                <X size={20} />
              </button>
            </div>
          </div>


          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-navy/90 relative">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
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
                  className={`max-w-[85%] p-3 rounded-xl text-xs leading-relaxed ${msg.sender === "user"
                    ? "bg-highlight/15 border border-highlight/30 text-white rounded-tr-none font-medium"
                    : "bg-navy-light/80 border border-slate-dark/60 text-slate-light rounded-tl-none"
                    }`}
                >
                  <p>{msg.text}</p>

                  {/* Render Recommended Project Cards */}
                  {msg.recommendations && msg.recommendations.length > 0 && (
                    <div className="mt-2.5 pt-2 border-t border-slate-dark/60 space-y-2">
                      <p className="text-[10px] font-mono text-highlight font-semibold uppercase tracking-wider">
                        ✨ Recommended Projects:
                      </p>
                      {msg.recommendations.map((rec) => (
                        <div
                          key={rec.id}
                          className="bg-navy/80 border border-highlight/30 rounded-lg p-2 flex flex-col gap-1 hover:border-highlight transition-all"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-[11px] text-white">{rec.title}</span>
                            <span className="text-[9px] font-mono text-highlight bg-highlight/10 px-1.5 py-0.5 rounded">
                              {rec.category}
                            </span>
                          </div>
                          {rec.summary && (
                            <p className="text-[10px] text-slate-light line-clamp-2">{rec.summary}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

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

          {/* Lead Capture Overlay Form */}
          {showLeadForm && (
            <div className="absolute inset-0 bg-navy-dark/95 backdrop-blur-md z-20 p-4 flex flex-col justify-center animate-fade-in">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                  <PhoneCall size={16} className="text-highlight" /> Connect with Ayush
                </h4>
                <button onClick={() => setShowLeadForm(false)} className="text-slate-light hover:text-white">
                  <X size={18} />
                </button>
              </div>

              {leadSubmittedSuccess ? (
                <div className="flex flex-col items-center justify-center py-8 text-center text-highlight">
                  <CheckCircle size={40} className="animate-bounce mb-2" />
                  <p className="font-bold text-sm">Message Sent Successfully!</p>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="space-y-2.5">
                  <div>
                    <label className="text-[10px] font-mono text-slate-light block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Connor"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      className="w-full bg-navy border border-slate-dark/80 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder:text-slate focus:border-highlight focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-slate-light block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      className="w-full bg-navy border border-slate-dark/80 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder:text-slate focus:border-highlight focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-slate-light block mb-1">Company / Organization (Optional)</label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      value={leadCompany}
                      onChange={(e) => setLeadCompany(e.target.value)}
                      className="w-full bg-navy border border-slate-dark/80 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder:text-slate focus:border-highlight focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-slate-light block mb-1">Project Need / Message</label>
                    <textarea
                      rows={2}
                      placeholder="Tell Ayush about your project or role requirement..."
                      value={leadSummary}
                      onChange={(e) => setLeadSummary(e.target.value)}
                      className="w-full bg-navy border border-slate-dark/80 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder:text-slate focus:border-highlight focus:outline-none resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmittingLead}
                    className="w-full bg-highlight text-navy-dark font-bold hover:bg-highlight/90 py-2 text-xs rounded-lg mt-2"
                  >
                    {isSubmittingLead ? "Submitting..." : "Submit Inquiry"}
                  </Button>
                </form>
              )}
            </div>
          )}

          {/* Quick Prompts & CTA Trigger Bar */}
          <div className="px-3 py-2 bg-navy-dark/80 border-t border-slate-dark/40 flex items-center justify-between gap-1.5 overflow-x-auto">
            <div className="flex gap-1.5">
              {quickPrompts.map((qp) => (
                <button
                  key={qp.key}
                  onClick={() => handleSendMessage(quickPromptQueries[qp.key])}
                  className="whitespace-nowrap text-[10px] font-mono text-slate-light bg-navy hover:text-highlight hover:border-highlight border border-slate-dark px-2.5 py-1 rounded-full transition-colors"
                >
                  {qp.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowLeadForm(true)}
              className="whitespace-nowrap text-[10px] font-mono font-bold text-navy-dark bg-highlight hover:bg-highlight/90 px-3 py-1 rounded-full shadow transition-all flex items-center gap-1"
            >
              <PhoneCall size={11} /> Contact
            </button>
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

