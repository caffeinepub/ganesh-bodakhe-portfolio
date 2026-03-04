import { Code2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home", ocid: "nav.home.link" },
  { label: "About", href: "#about", ocid: "nav.about.link" },
  { label: "Skills", href: "#skills", ocid: "nav.skills.link" },
  { label: "Experience", href: "#experience", ocid: "nav.experience.link" },
  { label: "Projects", href: "#projects", ocid: "nav.projects.link" },
  {
    label: "Achievements",
    href: "#achievements",
    ocid: "nav.achievements.link",
  },
  { label: "Education", href: "#education", ocid: "nav.education.link" },
  { label: "Contact", href: "#contact", ocid: "nav.contact.link" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-dark py-3 shadow-[0_4px_30px_oklch(0_0_0/0.4)]"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-2 group"
          data-ocid="nav.home.link"
          aria-label="Ganesh Bodakhe - Home"
        >
          <div className="relative w-10 h-10 rounded-xl glass-violet flex items-center justify-center glow-violet group-hover:scale-105 transition-transform duration-300">
            <Code2 className="w-5 h-5 text-violet-glow" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-glow/20 to-transparent" />
          </div>
          <span className="font-display font-bold text-lg gradient-text-violet-cyan hidden sm:block">
            GB
          </span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => handleNavClick(link.href)}
                data-ocid={link.ocid}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                  activeSection === link.href.slice(1)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeSection === link.href.slice(1) && (
                  <span className="absolute inset-0 rounded-lg glass-violet" />
                )}
                <span className="relative z-10">{link.label}</span>
                {activeSection !== link.href.slice(1) && (
                  <span className="absolute inset-0 rounded-lg glass opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button (desktop) */}
        <button
          type="button"
          onClick={() => handleNavClick("#contact")}
          className="hidden lg:flex btn-neon-violet px-5 py-2 rounded-xl text-sm font-semibold text-white relative z-10"
        >
          Hire Me
        </button>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-ocid="nav.hamburger.toggle"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="lg:hidden glass p-2.5 rounded-xl text-foreground hover:text-primary transition-colors"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden mobile-menu-enter">
          <div className="glass-dark mx-4 mt-2 rounded-2xl overflow-hidden border border-border">
            <ul className="py-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    data-ocid={link.ocid}
                    className={`w-full text-left px-5 py-3 text-sm font-medium transition-all duration-200 flex items-center gap-3 ${
                      activeSection === link.href.slice(1)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="px-4 pb-4 pt-2 border-t border-border">
              <button
                type="button"
                onClick={() => handleNavClick("#contact")}
                className="w-full btn-neon-violet py-3 rounded-xl text-sm font-semibold text-white relative z-10"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
