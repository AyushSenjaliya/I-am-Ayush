import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy/90 backdrop-blur-md py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">
          <span className="text-highlight">{"<"}</span>
          Developer
          <span className="text-highlight">{"/>"}</span>
        </a>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-slate-light hover:text-highlight transition-colors"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-light hover:text-highlight transition-colors font-medium"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-highlight text-sm mr-1">0{index + 1}.</span>{" "}
              {item.name}
            </a>
          ))}
          <Button
            className="ml-4 bg-transparent hover:bg-highlight/10 text-highlight border border-highlight rounded transition-all"
            onClick={() =>
              window.open("../../public/AyushResume.pdf", "_blank")
            }
          >
            Resume
          </Button>
        </nav>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 bg-navy-dark/90 backdrop-blur-md flex justify-center items-center z-50">
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={toggleMenu}
                  className="text-lg text-slate-light hover:text-highlight transition-colors font-medium"
                >
                  <span className="text-highlight text-sm mr-1">
                    0{index + 1}.
                  </span>{" "}
                  {item.name}
                </a>
              ))}
              <Button
                className="mt-4 bg-transparent hover:bg-highlight/10 text-highlight border border-highlight rounded transition-all"
                onClick={toggleMenu}
              >
                Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
