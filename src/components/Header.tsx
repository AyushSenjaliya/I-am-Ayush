import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, FileText } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-navy/90 backdrop-blur-md py-4 shadow-lg border-b border-navy-light/40"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white tracking-tight group">
          <span className="text-highlight font-mono">{"<"}</span>
          Ayush Senjaliya
          <span className="text-highlight font-mono">{" />"}</span>
        </a>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-slate-light hover:text-highlight transition-colors p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-light hover:text-highlight transition-colors font-medium text-xs font-mono"
            >
              <span className="text-highlight mr-1">0{index + 1}.</span>{" "}
              {item.name}
            </a>
          ))}
          <div className="flex items-center gap-3 ml-2">
            <Button
              className="bg-transparent hover:bg-highlight/10 text-highlight border border-highlight rounded px-4 py-2 text-xs font-mono flex items-center gap-1.5 transition-all"
              onClick={() => window.open("/AyushResume1.pdf", "_blank")}
            >
              <FileText size={14} />
              Resume
            </Button>
          </div>
        </nav>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 bg-navy-dark/95 backdrop-blur-lg flex justify-center items-center z-50 animate-fade-in">
            <div className="flex flex-col items-center gap-6 text-center px-6">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={toggleMenu}
                  className="text-lg text-slate-light hover:text-highlight transition-colors font-medium font-mono"
                >
                  <span className="text-highlight text-sm mr-2">
                    0{index + 1}.
                  </span>{" "}
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 w-full max-w-xs mt-4">
                <Button
                  className="bg-transparent hover:bg-highlight/10 text-highlight border border-highlight rounded py-3 text-sm font-mono flex items-center justify-center gap-2"
                  onClick={() => {
                    toggleMenu();
                    window.open("/AyushResume1.pdf", "_blank");
                  }}
                >
                  <FileText size={18} />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
