import { Code2, Heart } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();

  const caffeine_utm = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Top gradient divider */}
      <div className="section-gradient-divider mb-16 mx-8" />

      {/* Background orbs */}
      <div className="absolute bottom-0 left-1/4 w-96 h-48 orb orb-violet opacity-10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-48 orb orb-cyan opacity-8 blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl glass-violet flex items-center justify-center glow-violet">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display font-bold text-xl gradient-text-violet-cyan">
                Ganesh Bodakhe
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Building the future, one line at a time. Full stack developer
              passionate about clean code and great user experiences.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="glass p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200 hover:scale-105"
              >
                <SiGithub className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="glass p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:border-accent/40 transition-all duration-200 hover:scale-105"
              >
                <SiLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="glass p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:border-secondary/40 transition-all duration-200 hover:scale-105"
              >
                <SiX className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About", id: "about" },
                { label: "Skills", id: "skills" },
                { label: "Experience", id: "experience" },
                { label: "Projects", id: "projects" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-muted group-hover:bg-primary transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills summary */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">
              Tech I Love
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Python",
                "Docker",
                "AWS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="glass px-3 py-1 rounded-full text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 glass rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-neon-green animate-bounce-subtle" />
                <span className="text-xs font-medium text-foreground">
                  Available for work
                </span>
              </div>
              <p className="text-muted-foreground text-xs">
                Open to full-time roles &amp; freelance projects
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs text-center sm:text-left">
            © {year} Ganesh Bodakhe. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs flex items-center gap-1.5">
            Built with{" "}
            <Heart className="w-3.5 h-3.5 text-destructive fill-current" />{" "}
            using{" "}
            <a
              href={caffeine_utm}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
