import { useState } from "react";
import { HelpCircle, ChevronDown, MessageSquare } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqList: FAQItem[] = [
  {
    question: "What is your primary tech stack for production applications?",
    answer: "For full-stack web applications, I rely on React 18, Next.js (App Router), TypeScript, and Tailwind CSS on the frontend. For backend services, I use Node.js, NestJS, and Express paired with MongoDB, PostgreSQL, and Redis, managed via Prisma ORM.",
    category: "Tech Stack"
  },
  {
    question: "How do your Shopify API integrations work with custom backends?",
    answer: "I integrate Shopify Admin REST/GraphQL APIs and webhooks with Node.js/Express backends. This allows real-time order imports, automated 3-step WhatsApp order confirmations, automated Shiprocket courier dispatching, and custom inventory management.",
    category: "Shopify & E-Commerce"
  },
  {
    question: "Are you available for full-time roles or freelance client projects?",
    answer: "Yes! I am open to full-time Full Stack / AI Developer roles, as well as contract freelance projects globally. I am based in Surat, Gujarat, India, and work seamlessly across remote timezones.",
    category: "Availability"
  },
  {
    question: "What experience do you have building AI and multi-agent systems?",
    answer: "I built Nexus (an autonomous 5-agent B2B market intelligence & outreach pipeline with a Gemini + Sarvam 3-tier cascade) and Appy (a Gemini RAG chatbot platform with document Q&A and semantic vector search).",
    category: "AI Engineering"
  },
  {
    question: "What is your academic background and location?",
    answer: "I am pursuing an MBA (Masters of Business Administration) at Parul University (2024–Present) and earned a B.Sc. in Information Technology from Sarvajanik University (2021–2024, CGPA 8.45 / 10). I am located in Surat, Gujarat, India (+91 9638215983).",
    category: "Education & Contact"
  }
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-navy-dark border-t border-slate-dark/40 relative z-10">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-highlight/10 text-highlight font-mono text-xs mb-3 border border-highlight/20">
            <HelpCircle size={13} /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl font-bold text-white text-center flex items-center gap-2">
            Got Questions? I've Got Answers
          </h2>
          <div className="w-16 h-1 bg-highlight rounded mt-2"></div>
          <p className="text-slate text-sm max-w-xl text-center mt-4">
            Common questions regarding technical stack, Shopify automations, availability, and AI project experience.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqList.map((item, idx) => (
            <div
              key={idx}
              className="bg-navy rounded-xl border border-slate-dark/60 overflow-hidden shadow-lg transition-all"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-navy-light/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-highlight font-mono text-xs bg-highlight/10 px-2.5 py-1 rounded border border-highlight/20 hidden sm:inline">
                    {item.category}
                  </span>
                  <h4 className="text-white font-semibold text-base sm:text-lg">
                    {item.question}
                  </h4>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-highlight flex-shrink-0 transition-transform duration-300 ${
                    openIdx === idx ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {openIdx === idx && (
                <div className="px-5 pb-5 pt-1 text-slate text-sm leading-relaxed border-t border-slate-dark/40 bg-navy-dark/40 animate-fade-in">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
