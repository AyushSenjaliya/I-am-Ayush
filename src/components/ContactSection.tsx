import { Mail, Linkedin, FileText, Check, Phone } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("aayushsenjaliya@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[var(--surface)] border-t border-[var(--line)] text-center relative"
    >
      <div className="max-w-[1080px] mx-auto px-6 space-y-8">

        <div className="section-eyebrow">GET IN TOUCH</div>

        <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text)] max-w-2xl mx-auto leading-tight">
          Ready to build systems that drive growth?
        </h2>

        <p className="font-body text-[var(--muted)] text-base max-w-xl mx-auto leading-relaxed">
          Whether you need an autonomous AI platform, low-latency backend microservices, or custom e-commerce automation—let's discuss your project.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="mailto:aayushsenjaliya@gmail.com"
            className="bg-[var(--gold)] text-[#0F1B1E] font-mono text-sm font-bold px-6 py-3.5 rounded-lg hover:bg-[var(--gold)]/90 transition-all inline-flex items-center gap-2 shadow-md hover:-translate-y-0.5"
          >
            <Mail size={16} /> Send Email
          </a>

          <button
            onClick={handleCopyEmail}
            className="border border-[var(--line)] text-[var(--text)] hover:text-[var(--gold)] hover:border-[var(--gold)] bg-[var(--surface-2)] font-mono text-sm font-semibold px-6 py-3.5 rounded-lg transition-all inline-flex items-center gap-2"
          >
            {copied ? <Check size={16} className="text-[var(--gold)]" /> : <Mail size={16} />}
            {copied ? "Email Copied!" : "Copy Email"}
          </button>

          <a
            href="https://www.linkedin.com/in/ayushsenjaliya/"
            target="_blank"
            rel="noreferrer"
            className="border border-[var(--line)] text-[var(--text)] hover:text-[var(--gold)] hover:border-[var(--gold)] bg-[var(--surface-2)] font-mono text-sm font-semibold px-6 py-3.5 rounded-lg transition-all inline-flex items-center gap-2"
          >
            <Linkedin size={16} /> LinkedIn
          </a>

          <a
            href="/AyushResume1.pdf"
            target="_blank"
            rel="noreferrer"
            className="border border-[var(--line)] text-[var(--text)] hover:text-[var(--gold)] hover:border-[var(--gold)] bg-[var(--surface-2)] font-mono text-sm font-semibold px-6 py-3.5 rounded-lg transition-all inline-flex items-center gap-2"
          >
            <FileText size={16} /> Resume PDF
          </a>
        </div>

        {/* Quick Phone micro-info */}
        <div className="pt-4 text-xs font-mono text-[var(--muted)] flex items-center justify-center gap-2">
          <Phone size={13} className="text-[var(--gold)]" />
          <span>+91 9638215983 • Surat, Gujarat, India</span>
        </div>

        {/* Hairline Divider & Closing Tagline */}
        <div className="pt-12 border-t border-[var(--line)]">
          <p className="font-mono text-xs text-[var(--muted)]">
            Designed & Engineered by Ayush Senjaliya © 2026
          </p>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
