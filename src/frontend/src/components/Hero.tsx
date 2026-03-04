import { ArrowRight, ChevronDown, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const roles = [
  "Full Stack Developer",
  "Software Engineer",
  "Problem Solver",
  "Open Source Enthusiast",
];

interface Particle {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Generate particles on mount
  useEffect(() => {
    const colors = [
      "oklch(0.65 0.22 290 / 0.6)",
      "oklch(0.7 0.18 200 / 0.6)",
      "oklch(0.6 0.2 240 / 0.6)",
      "oklch(0.75 0.2 145 / 0.5)",
    ];
    const pts = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 8,
      duration: Math.random() * 10 + 8,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(pts);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 2000;

    if (!isDeleting && displayText === currentRole) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeoutRef.current = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : currentRole.slice(0, prev.length + 1),
        );
      }, typingSpeed);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, isDeleting, roleIndex]);

  const handleScroll = (href: string) => {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url(/assets/generated/hero-bg.dim_1920x1080.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />

      {/* Animated orbs */}
      <div className="orb orb-violet animate-float w-96 h-96 top-10 -left-24 opacity-60" />
      <div className="orb orb-cyan animate-float-delayed w-80 h-80 top-1/4 -right-16 opacity-50" />
      <div className="orb orb-blue animate-float-slow w-64 h-64 bottom-1/4 left-1/3 opacity-40" />
      <div className="orb orb-violet animate-float w-48 h-48 bottom-16 right-1/4 opacity-30" />

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${particle.x}%`,
            bottom: "-10px",
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
            animation: `particle-drift ${particle.duration}s ${particle.delay}s linear infinite`,
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(oklch(0.7 0.18 290 / 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, oklch(0.7 0.18 290 / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-pulse-glow">
          <span className="w-2 h-2 rounded-full bg-neon-green animate-bounce-subtle" />
          <span className="text-sm font-medium text-muted-foreground">
            Available for opportunities
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-display font-extrabold leading-tight mb-6">
          <span className="block text-xl sm:text-2xl text-muted-foreground font-medium mb-2">
            Hi there, I&apos;m
          </span>
          <span className="block text-5xl sm:text-7xl lg:text-8xl gradient-text-violet-cyan text-glow-violet">
            Ganesh Bodakhe
          </span>
        </h1>

        {/* Typewriter subtitle */}
        <div className="flex items-center justify-center gap-2 mb-8 min-h-[3rem]">
          <span className="text-muted-foreground text-xl sm:text-2xl font-medium">
            I&apos;m a
          </span>
          <span className="text-xl sm:text-2xl font-bold font-display gradient-text-violet-blue min-w-0">
            {displayText}
            <span className="cursor-blink text-primary ml-0.5">|</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Crafting digital experiences with clean code and creative thinking.
          Building the future, one commit at a time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            type="button"
            onClick={() => handleScroll("#projects")}
            data-ocid="hero.view_work.button"
            className="group btn-neon-violet px-8 py-4 rounded-2xl text-base font-semibold text-white relative z-10 flex items-center gap-2 min-w-[180px] justify-center"
          >
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            type="button"
            onClick={() => handleScroll("#contact")}
            data-ocid="hero.contact.button"
            className="btn-outline-cyan px-8 py-4 rounded-2xl text-base font-semibold flex items-center gap-2 min-w-[180px] justify-center"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-center">
          {[
            { value: "1+", label: "Years Experience" },
            { value: "5+", label: "Projects Built" },
            { value: "9.05", label: "CGPA" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-display font-extrabold text-3xl gradient-text-violet-cyan">
                {stat.value}
              </span>
              <span className="text-muted-foreground text-sm mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce-subtle">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}
