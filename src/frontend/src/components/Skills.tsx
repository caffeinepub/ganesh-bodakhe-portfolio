import { Zap } from "lucide-react";
import { useEffect, useRef } from "react";

interface Skill {
  name: string;
  icon: string;
  proficiency: number;
  color: string;
  category: string;
}

const skills: Skill[] = [
  {
    name: "React",
    icon: "⚛️",
    proficiency: 95,
    color: "oklch(0.7 0.18 200)",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: "🔷",
    proficiency: 90,
    color: "oklch(0.6 0.2 240)",
    category: "Language",
  },
  {
    name: "Node.js",
    icon: "🟢",
    proficiency: 88,
    color: "oklch(0.72 0.2 145)",
    category: "Backend",
  },
  {
    name: "Python",
    icon: "🐍",
    proficiency: 85,
    color: "oklch(0.75 0.18 90)",
    category: "Language",
  },
  {
    name: "MongoDB",
    icon: "🍃",
    proficiency: 80,
    color: "oklch(0.68 0.2 145)",
    category: "Database",
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    proficiency: 78,
    color: "oklch(0.55 0.15 240)",
    category: "Database",
  },
  {
    name: "Git",
    icon: "🔀",
    proficiency: 95,
    color: "oklch(0.65 0.22 25)",
    category: "DevOps",
  },
  {
    name: "Docker",
    icon: "🐳",
    proficiency: 75,
    color: "oklch(0.6 0.2 210)",
    category: "DevOps",
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    proficiency: 92,
    color: "oklch(0.7 0.2 200)",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: "▲",
    proficiency: 88,
    color: "oklch(0.75 0.05 280)",
    category: "Frontend",
  },
  {
    name: "Express.js",
    icon: "🚀",
    proficiency: 85,
    color: "oklch(0.65 0.22 290)",
    category: "Backend",
  },
  {
    name: "GraphQL",
    icon: "📊",
    proficiency: 70,
    color: "oklch(0.65 0.25 320)",
    category: "API",
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            for (const el of entry.target.querySelectorAll(
              ".animate-in-view",
            )) {
              el.classList.add("visible");
            }

            // Animate progress bars
            for (const el of progressRefs.current.values()) {
              el.classList.add("animate");
            }
          }
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Divider */}
      <div className="section-gradient-divider mb-24 mx-16" />

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 orb orb-blue opacity-15 animate-float" />
      <div className="absolute top-1/3 right-0 w-64 h-64 orb orb-violet opacity-15 animate-float-delayed" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in-view">
          <div className="section-tag mb-4">
            <Zap className="w-3.5 h-3.5" />
            Tech Stack
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl gradient-text-violet-cyan mb-4">
            Skills &amp; Technologies
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            My toolkit for building modern, scalable applications from frontend
            to infrastructure.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card relative glass card-hover rounded-2xl p-5 overflow-hidden animate-in-view"
              style={{ transitionDelay: `${index * 0.06}s` }}
            >
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 blur-2xl"
                style={{ background: skill.color }}
              />

              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{skill.icon}</span>
                  <div>
                    <div className="font-display font-bold text-foreground">
                      {skill.name}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {skill.category}
                    </div>
                  </div>
                </div>
                <span
                  className="text-sm font-bold font-mono"
                  style={{ color: skill.color }}
                >
                  {skill.proficiency}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 rounded-full overflow-hidden bg-muted">
                <div
                  ref={(el) => {
                    if (el) progressRefs.current.set(skill.name, el);
                  }}
                  className="progress-bar-fill rounded-full"
                  style={
                    {
                      "--target-width": `${skill.proficiency}%`,
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                    } as React.CSSProperties
                  }
                />
              </div>
            </div>
          ))}
        </div>

        {/* Extra tools */}
        <div className="mt-12 text-center animate-in-view">
          <p className="text-muted-foreground text-sm mb-4">
            Also familiar with:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Redis",
              "AWS",
              "Firebase",
              "Prisma",
              "tRPC",
              "Vitest",
              "Jest",
              "Figma",
              "Linux",
              "Nginx",
            ].map((tool) => (
              <span
                key={tool}
                className="glass px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
