import React, { useState, useRef, useEffect } from "react";
import { X, Send, PhoneCall, CheckCircle, RotateCcw, MessageSquare, ArrowRight, Mail } from "lucide-react";
import { streamAgentChat, submitAgentLead } from "@/api/agentApi";

interface Message {
  id: string;
  sender: "ai" | "user";
  text: string;
  timestamp: string;
  recommendations?: Array<{ id: string; title: string; category: string; summary?: string }>;
  salesStage?: string;
  isFallback?: boolean;
}

const STORAGE_KEY = "ayush_portfolio_chat_v3";

const INITIAL_WELCOME_MESSAGE: Message = {
  id: "welcome",
  sender: "ai",
  text: "Hi! I can help scope your project, answer questions about Ayush's engineering work, or connect you with him directly.",
  timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
};

const INITIAL_CHIPS = [
  { label: "⚡ Need a Custom Web App", query: "I need a custom full-stack web application built." },
  { label: "🤖 Need AI / Automation Systems", query: "I need AI feature integration or multi-agent automation systems." },
  { label: "💼 Hiring for a Role", query: "I am looking to hire a Full Stack / AI Engineer." },
  { label: "🚀 Just Exploring Projects", query: "What are Ayush's top portfolio projects and tech stack?" },
];

const FALLBACK_CHIPS = [
  { label: "🚀 Explore Top Projects", query: "Show me Ayush's top featured portfolio projects." },
  { label: "📧 Email Ayush Directly", action: "email" },
  { label: "📋 Fill Quick Contact Form", action: "lead" },
];

const AIChatModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId, setSessionId] = useState(() => `session_${Date.now()}`);
  const [activeStage, setActiveStage] = useState<string>("DISCOVERY");
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Form state
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadCompany, setLeadCompany] = useState("");
  const [leadSummary, setLeadSummary] = useState("");
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadSubmittedSuccess, setLeadSubmittedSuccess] = useState(false);

  // Message & Stream state
  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.messages && parsed.messages.length > 0) {
          return parsed.messages;
        }
      }
    } catch (e) {
      console.warn("Could not parse saved chat history:", e);
    }
    return [INITIAL_WELCOME_MESSAGE];
  });

  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          sessionId,
          activeStage,
          messages,
        })
      );
    } catch (e) {
      console.warn("Failed to persist chat state to localStorage:", e);
    }
  }, [messages, sessionId, activeStage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const handleResetConversation = () => {
    const newSession = `session_${Date.now()}`;
    setSessionId(newSession);
    setMessages([INITIAL_WELCOME_MESSAGE]);
    setActiveStage("DISCOVERY");
    setHasInteracted(false);
    setShowLeadForm(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isTyping) return;

    setHasInteracted(true);
    const timeStr = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const userMsg: Message = {
      id: `user_${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: timeStr,
    };

    const aiMsgId = `ai_${Date.now() + 1}`;
    const initialAiMsg: Message = {
      id: aiMsgId,
      sender: "ai",
      text: "",
      timestamp: timeStr,
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
          prev.map((msg) => (msg.id === aiMsgId ? { ...msg, text: msg.text + token } : msg))
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
                  isFallback: true,
                  text:
                    msg.text ||
                    `I'm having trouble connecting to the live AI service right now. However, you can explore Ayush's projects or connect with him directly below!`,
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
        id: `confirm_${Date.now()}`,
        sender: "ai",
        text: `Thank you ${leadName || "there"}! Your details have been received. Ayush will review your project inquiry and get back to you at ${leadEmail}.`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, confirmMsg]);
    }
  };

  return (
    <div className="z-50">
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 bg-[var(--gold)] text-[var(--bg)] hover:bg-[#d99f38] px-4 py-3.5 rounded-full shadow-[0_10px_30px_rgba(232,176,75,0.25)] border border-[var(--gold)]/40 flex items-center gap-3 font-display font-bold text-xs tracking-wide transition-all transform hover:scale-105 animate-pulse-once group"
          aria-label="Open Chat with Ayush's Assistant"
        >
          {/* Brand Initial Badge (No Cheesy Emoji) */}
          <span className="w-6 h-6 rounded-full bg-[#0F1B1E] text-[var(--gold)] font-mono text-[10px] font-bold flex items-center justify-center border border-[var(--gold)]/30">
            AS
          </span>
          <span className="font-semibold tracking-normal">Scope a Project</span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0F1B1E] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0F1B1E]"></span>
          </span>
        </button>
      )}

      {/* Chat Window Shell */}
      {isOpen && (
        <div
          className={`fixed z-50 bg-[#0F1B1E] border border-[var(--line)] shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_25px_rgba(232,176,75,0.08)] flex flex-col overflow-hidden transition-all duration-200 ease-out transform scale-100 opacity-100 ${
            /* Mobile Full-Screen Takeover, Desktop ~380px Floating Box */
            "inset-0 w-full h-full rounded-none sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[380px] sm:h-[580px] sm:rounded-[20px]"
          }`}
        >
          {/* Header */}
          <div className="bg-[#16262A] px-4 py-3.5 border-b border-[var(--line)] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              {/* Brand Initial Avatar */}
              <div className="w-8 h-8 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/40 flex items-center justify-center text-[var(--gold)] font-mono font-bold text-xs">
                AS
              </div>
              <div>
                <h4 className="text-[var(--text)] font-display font-bold text-sm tracking-tight leading-none flex items-center gap-2">
                  Ayush's Assistant
                </h4>
                <p className="text-[10px] font-mono text-[var(--gold)] mt-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Available for Projects
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleResetConversation}
                className="text-[var(--muted)] hover:text-[var(--gold)] p-1.5 rounded-lg transition-colors"
                title="Reset conversation"
                aria-label="Reset conversation"
              >
                <RotateCcw size={15} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[var(--muted)] hover:text-[var(--text)] p-1.5 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#0F1B1E]/95 relative">
            {messages.map((msg) => (
              <div key={msg.id} className="space-y-2">
                <div
                  className={`flex gap-2.5 items-start ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {/* Bot Avatar (No Robot Emoji) */}
                  {msg.sender === "ai" && (
                    <div className="w-6 h-6 rounded-full bg-[#16262A] border border-[var(--gold)]/30 text-[var(--gold)] font-mono text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      AS
                    </div>
                  )}

                  {/* Bubble Content */}
                  <div
                    className={`max-w-[84%] text-xs font-body leading-relaxed transition-all ${
                      msg.sender === "user"
                        ? "bg-[var(--gold)] text-[#0F1B1E] font-medium rounded-[18px] rounded-tr-[4px] px-3.5 py-2.5 shadow-sm"
                        : "bg-[#16262A] border border-[var(--line)] text-[var(--text)] rounded-[18px] rounded-tl-[4px] px-3.5 py-2.5 shadow-sm"
                    }`}
                  >
                    {msg.text && <p className="whitespace-pre-wrap">{msg.text}</p>}

                    {/* Render Recommended Project Cards if present */}
                    {msg.recommendations && msg.recommendations.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-[var(--line)] space-y-2">
                        <p className="text-[10px] font-mono text-[var(--gold)] uppercase tracking-wider font-semibold">
                          Featured Work Fit:
                        </p>
                        {msg.recommendations.map((rec) => (
                          <div
                            key={rec.id}
                            className="bg-[#1C2E32] border border-[var(--line)] hover:border-[var(--gold)]/40 rounded-xl p-2.5 transition-all text-left group"
                          >
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <span className="font-display font-bold text-[11px] text-[var(--text)] group-hover:text-[var(--gold)] transition-colors">
                                {rec.title}
                              </span>
                              <span className="text-[9px] font-mono text-[var(--gold)] bg-[var(--gold)]/10 px-1.5 py-0.5 rounded-md border border-[var(--gold)]/20">
                                {rec.category}
                              </span>
                            </div>
                            {rec.summary && (
                              <p className="text-[10px] text-[var(--muted)] line-clamp-2 leading-normal">
                                {rec.summary}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Fallback Action Buttons */}
                    {msg.isFallback && (
                      <div className="mt-3 pt-2.5 border-t border-[var(--line)] flex flex-col gap-1.5">
                        {FALLBACK_CHIPS.map((chip, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              if (chip.query) handleSendMessage(chip.query);
                              if (chip.action === "email") window.open("mailto:aayushsenjaliya@gmail.com");
                              if (chip.action === "lead") setShowLeadForm(true);
                            }}
                            className="text-left text-[11px] font-mono text-[var(--gold)] bg-[#1C2E32] hover:bg-[var(--gold)]/10 border border-[var(--gold)]/30 px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between"
                          >
                            <span>{chip.label}</span>
                            <ArrowRight size={12} />
                          </button>
                        ))}
                      </div>
                    )}

                    <span
                      className={`block text-[9px] font-mono text-right mt-1 opacity-60 ${
                        msg.sender === "user" ? "text-[#0F1B1E]" : "text-[var(--muted)]"
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Enterprise 3-Dot Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2.5 items-start">
                <div className="w-6 h-6 rounded-full bg-[#16262A] border border-[var(--gold)]/30 text-[var(--gold)] font-mono text-[9px] font-bold flex items-center justify-center shrink-0">
                  AS
                </div>
                <div className="bg-[#16262A] border border-[var(--line)] rounded-full px-3.5 py-2.5 flex items-center gap-1.5 w-fit shadow-sm">
                  <span className="typing-dot typing-dot-1"></span>
                  <span className="typing-dot typing-dot-2"></span>
                  <span className="typing-dot typing-dot-3"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick-Reply Chips for First Interaction */}
          {!hasInteracted && messages.length <= 1 && (
            <div className="px-3.5 py-2.5 bg-[#16262A]/90 border-t border-[var(--line)]">
              <p className="text-[10px] font-mono text-[var(--muted)] mb-2">Suggested topics:</p>
              <div className="flex flex-wrap gap-1.5">
                {INITIAL_CHIPS.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(chip.query)}
                    className="text-[11px] font-body text-[var(--text)] bg-[#1C2E32] hover:text-[var(--gold)] hover:border-[var(--gold)]/50 border border-[var(--line)] px-2.5 py-1.5 rounded-lg transition-colors text-left"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Lead Capture Form Modal Overlay */}
          {showLeadForm && (
            <div className="absolute inset-0 bg-[#0F1B1E]/98 backdrop-blur-md z-20 p-5 flex flex-col justify-center animate-fade-in">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-display text-[var(--text)] font-bold text-sm flex items-center gap-2">
                  <PhoneCall size={16} className="text-[var(--gold)]" /> Connect with Ayush
                </h4>
                <button
                  onClick={() => setShowLeadForm(false)}
                  className="text-[var(--muted)] hover:text-[var(--text)]"
                >
                  <X size={18} />
                </button>
              </div>

              {leadSubmittedSuccess ? (
                <div className="flex flex-col items-center justify-center py-10 text-center text-[var(--gold)]">
                  <CheckCircle size={44} className="animate-bounce mb-3" />
                  <p className="font-display font-bold text-sm text-[var(--text)]">Inquiry Submitted!</p>
                  <p className="text-xs text-[var(--muted)] font-body mt-1">
                    Ayush will review your details and reach out shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="space-y-3 font-body">
                  <div>
                    <label className="text-[10px] font-mono text-[var(--muted)] block mb-1">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      className="w-full bg-[#16262A] border border-[var(--line)] rounded-xl px-3 py-2 text-xs text-[var(--text)] placeholder:text-[var(--muted)]/50 focus:border-[var(--gold)] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-[var(--muted)] block mb-1">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      className="w-full bg-[#16262A] border border-[var(--line)] rounded-xl px-3 py-2 text-xs text-[var(--text)] placeholder:text-[var(--muted)]/50 focus:border-[var(--gold)] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-[var(--muted)] block mb-1">
                      Company / Role (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Corp / Founder"
                      value={leadCompany}
                      onChange={(e) => setLeadCompany(e.target.value)}
                      className="w-full bg-[#16262A] border border-[var(--line)] rounded-xl px-3 py-2 text-xs text-[var(--text)] placeholder:text-[var(--muted)]/50 focus:border-[var(--gold)] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-[var(--muted)] block mb-1">
                      Project Goal / Note
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Brief note about what you're looking to build..."
                      value={leadSummary}
                      onChange={(e) => setLeadSummary(e.target.value)}
                      className="w-full bg-[#16262A] border border-[var(--line)] rounded-xl px-3 py-2 text-xs text-[var(--text)] placeholder:text-[var(--muted)]/50 focus:border-[var(--gold)] focus:outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmittingLead}
                    className="w-full bg-[var(--gold)] text-[#0F1B1E] font-display font-bold hover:bg-[#d99f38] py-2.5 text-xs rounded-xl transition-all shadow-md mt-1"
                  >
                    {isSubmittingLead ? "Submitting..." : "Submit Inquiry"}
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Quick Contact Action Bar */}
          <div className="px-3.5 py-2 bg-[#16262A] border-t border-[var(--line)] flex items-center justify-between gap-2 shrink-0">
            <button
              onClick={() => setShowLeadForm(true)}
              className="text-[10px] font-mono text-[var(--gold)] hover:text-[#f3c569] flex items-center gap-1.5 transition-colors"
            >
              <PhoneCall size={12} /> Direct Contact / Lead Form
            </button>
            <a
              href="mailto:aayushsenjaliya@gmail.com"
              className="text-[10px] font-mono text-[var(--muted)] hover:text-[var(--text)] flex items-center gap-1 transition-colors"
            >
              <Mail size={12} /> Email
            </a>
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-[#16262A] border-t border-[var(--line)] flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              placeholder="Ask a question or describe your project..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-[#0F1B1E] border border-[var(--line)] rounded-xl px-3.5 py-2 text-xs text-[var(--text)] placeholder:text-[var(--muted)]/60 focus:border-[var(--gold)]/60 focus:outline-none font-body"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="bg-[var(--gold)] text-[#0F1B1E] hover:bg-[#d99f38] disabled:opacity-40 p-2 rounded-xl transition-colors shrink-0"
              aria-label="Send message"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AIChatModal;
