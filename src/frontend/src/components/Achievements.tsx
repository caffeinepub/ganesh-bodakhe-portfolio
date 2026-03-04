import { Trophy } from "lucide-react";
import { useEffect, useRef } from "react";

interface Achievement {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  year: string;
}

const achievements: Achievement[] = [
  {
    icon: "🏆",
    title: "GBIS Hackathon Pre-Final",
    subtitle: "Societe Generale – Global",
    description:
      "Reached pre-final jury in GBIS Hackathon organized by Societe Generale. Selected among the top 15 teams out of 1,478 participants across the world.",
    color: "oklch(0.75 0.22 55)",
    year: "2025",
  },
  {
    icon: "🥇",
    title: "Top 20 Finalist",
    subtitle: "IBM SkillsBuild – Maharashtra",
    description:
      "Top 20 Finalist in IBM SkillsBuild Maharashtra State-Level Hackathon. Selected among the top 20 teams out of 72+ participants across Maharashtra.",
    color: "oklch(0.65 0.22 290)",
    year: "2025",
  },
  {
    icon: "👨‍💻",
    title: "Project Leader",
    subtitle: "Restaurant Management System",
    description:
      "Led the development of a full-featured restaurant management system, demonstrating leadership and software design skills.",
    color: "oklch(0.7 0.18 200)",
    year: "2023",
  },
  {
    icon: "🤝",
    title: "Volunteer",
    subtitle: "AISA Committee",
    description:
      "Actively contributed to event planning and coordination as part of the AISA student committee for 3 years.",
    color: "oklch(0.72 0.2 145)",
    year: "2022–2025",
  },
];

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);

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
      id="achievements"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Divider */}
      <div className="section-gradient-divider mb-24 mx-16" />

      <div className="absolute top-0 left-1/4 w-96 h-96 orb orb-violet opacity-10 animate-float-slow" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in-view">
          <div className="section-tag mb-4">
            <Trophy className="w-3.5 h-3.5" />
            Recognition
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl gradient-text-violet-cyan mb-4">
            Achievements
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Milestones that mark my growth as an engineer and community
            contributor.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {achievements.map((item, index) => (
            <div
              key={item.title}
              className="glass card-hover rounded-2xl p-6 flex flex-col gap-4 group relative overflow-hidden animate-in-view"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Background glow */}
              <div
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-20 blur-2xl group-hover:opacity-35 transition-opacity duration-500"
                style={{ background: item.color }}
              />

              {/* Year badge */}
              <div className="flex justify-between items-start">
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span
                  className="text-xs font-mono font-bold px-2 py-1 rounded-full"
                  style={{
                    background: `${item.color}20`,
                    color: item.color,
                    border: `1px solid ${item.color}40`,
                  }}
                >
                  {item.year}
                </span>
              </div>

              <div>
                <h3
                  className="font-display font-bold text-lg mb-0.5"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h3>
                <div className="text-xs font-medium text-muted-foreground mb-3">
                  {item.subtitle}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
