import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-navy-dark border-t border-slate-dark/60">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold text-white tracking-tight">
              <span className="text-highlight font-mono">{"<"}</span>
              Ayush Senjaliya
              <span className="text-highlight font-mono">{" />"}</span>
            </a>
            <p className="text-slate text-xs mt-1 font-mono">
              Designed & Engineered with React, TypeScript & Tailwind CSS
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/AyushSenjaliya/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-navy rounded-full text-slate-light hover:text-highlight hover:border-highlight border border-slate-dark/60 transition-all"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ayushsenjaliya/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-navy rounded-full text-slate-light hover:text-highlight hover:border-highlight border border-slate-dark/60 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:aayushsenjaliya@gmail.com"
              className="p-2.5 bg-navy rounded-full text-slate-light hover:text-highlight hover:border-highlight border border-slate-dark/60 transition-all"
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-slate text-xs font-mono text-center md:text-right">
            <p>© {currentYear} Ayush Senjaliya. All rights reserved.</p>
            <p className="text-slate-dark text-[11px] mt-0.5">Crafted for performance & scalability</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
