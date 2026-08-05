import { ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    id: "multi-agent-fallbacks",
    category: "AI ARCHITECTURE",
    title: "Architecting 3-Tier AI Fallbacks with Gemini & Sarvam AI",
    teaser: "How to design fault-tolerant multi-agent pipelines that degrade gracefully under rate limits and third-party outages.",
    date: "July 2026",
    link: "#",
  },
  {
    id: "sse-vs-websockets",
    category: "REAL-TIME BACKEND",
    title: "Sub-50ms Telemetry: Server-Sent Events vs WebSockets",
    teaser: "Comparing unidirectional HTTP/2 streaming against bidirectional WebSockets for live AI status updates.",
    date: "June 2026",
    link: "#",
  },
  {
    id: "revenue-leak-funnels",
    category: "SYSTEMS ENGINEERING",
    title: "Why Most E-Commerce Funnels Leak Revenue in Speed-to-Lead",
    teaser: "Quantifying lost customer intent and building automated CRM triggers to double response-to-quote conversion.",
    date: "May 2026",
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-[var(--bg)] border-b border-[var(--line)]">
      <div className="max-w-[1080px] mx-auto px-6">
        
        {/* Header */}
        <div className="space-y-3 mb-12">
          <div className="section-eyebrow">ARTICLES & WRITING</div>
          <h2 className="section-title">Technical Blog</h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              className="theme-card space-y-4 hover:border-[var(--gold)] transition-all duration-300 group hover:-translate-y-1 block"
            >
              <div className="flex justify-between items-center">
                <span className="font-mono text-xs font-bold text-[var(--gold)] uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="font-mono text-[11px] text-[var(--muted)]">{post.date}</span>
              </div>

              <h3 className="font-display font-bold text-lg text-[var(--text)] group-hover:text-[var(--gold)] transition-colors flex items-center justify-between">
                <span>{post.title}</span>
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--gold)]" />
              </h3>

              <p className="text-[var(--muted)] text-xs font-body leading-relaxed">
                {post.teaser}
              </p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
