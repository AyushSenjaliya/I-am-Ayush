import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-navy-dark border-t border-slate-dark">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold text-white">
              <span className="text-highlight">{"<"}</span>
              Developer
              <span className="text-highlight">{"/>"}</span>
            </a>
            <p className="text-slate-light text-sm mt-2">
              Building exceptional digital experiences
            </p>
          </div>

          <div className="flex gap-4 mb-4 md:mb-0">
            <a
              href="https://github.com/AyushSenjaliya/"
              className="p-2 text-slate-light hover:text-highlight transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ayushsenjaliya/"
              className="p-2 text-slate-light hover:text-highlight transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:aayushsenjaliya@gmail.com"
              className="p-2 text-slate-light hover:text-highlight transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="text-slate-light text-sm flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-no-copyright"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
              <line
                x1="4"
                y1="4"
                x2="20"
                y2="20"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            {currentYear} Ayush Senjaliya. No rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
