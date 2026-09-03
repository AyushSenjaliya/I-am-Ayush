import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/projects" },
    { name: "Product Lab", href: "/product-lab" },
    { name: "Experience", href: "/#experience" },
    { name: "Blog", href: "/#blog" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0F1B1E]/90 backdrop-blur-md py-3.5 border-b border-[var(--line)] shadow-lg"
          : "bg-[#0F1B1E]/80 backdrop-blur-sm py-5 border-b border-[var(--line)]"
      }`}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="max-w-[1080px] mx-auto px-6 flex justify-between items-center">
        {/* Logo / Name */}
        <Link to="/" className="font-display font-bold text-xl text-[var(--text)] tracking-tight hover:text-[var(--gold)] transition-colors">
          Ayush Senjaliya
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-body">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`transition-colors font-medium text-xs font-mono tracking-wide ${
                (location.pathname === "/projects" && item.href === "/projects") ||
                (location.pathname === "/product-lab" && item.href === "/product-lab")
                  ? "text-[var(--gold)] font-bold"
                  : "text-[var(--muted)] hover:text-[var(--text)]"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/#contact"
            className="ml-2 bg-[var(--gold)] text-[#0F1B1E] font-mono text-xs font-bold px-4 py-2 rounded-lg hover:bg-[var(--gold)]/90 transition-all shadow-sm"
          >
            Get in touch
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[var(--muted)] hover:text-[var(--gold)] p-1.5 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#0F1B1E]/98 backdrop-blur-xl border-b border-[var(--line)] p-6 shadow-2xl animate-fade-in z-50">
          <div className="flex flex-col gap-4 text-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={toggleMenu}
                className="text-base text-[var(--muted)] hover:text-[var(--gold)] font-mono transition-colors py-1.5"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/#contact"
              onClick={toggleMenu}
              className="mt-2 bg-[var(--gold)] text-[#0F1B1E] font-mono text-sm font-bold py-3 rounded-lg hover:bg-[var(--gold)]/90 transition-all text-center"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
