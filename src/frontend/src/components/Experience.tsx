import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  color: string;
  current?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Societe Generale, Bengaluru",
    period: "Feb 2025 – Present",
    location: "Bengaluru, India",
    description:
      "Working on AI/ML models for financial data analysis and Java Spring Boot backend development for a legacy multi-module Maven application.",
    highlights: [
      "Developed AI/ML prediction & classification models on financial and audit data",
      "Contributed to Java Spring Boot legacy multi-module Maven application",
      "Increased SonarQube code coverage from 10% to 82%",
      "Enhanced and maintained Jenkins CI/CD pipelines",
      "Provided production & DevOps support, resolving critical tickets",
      "Delivered multiple production releases with improved reliability",
    ],
    color: "oklch(0.65 0.22 290)",
    current: true,
  },
  {
    title: "AI and Backend Developer Intern",
    company: "Anervea.ai, Pune",
    period: "Sep 2024 – Feb 2025",
    location: "Pune, India",
    description:
      "Engineered backend services for Alfa Suite healthcare products and automated data extraction workflows.",
    highlights: [
      "Designed efficient APIs with FastAPI for Alfa Suite healthcare products",
      "Automated data extraction from 100+ legal sources using Python",
      "Tested and debugged Alfa Sage, Alfa Dev, and Alfa HQ products",
      "Worked on POC projects to streamline healthcare workflows",
    ],
    color: "oklch(0.6 0.2 240)",
  },
  {
    title: "Software Trainee",
    company: "TechLeaper Systems Pvt. Ltd., Pune (Remote)",
    period: "Jan 2024 – Feb 2024",
    location: "Pune, India (Remote)",
    description:
      "Participated in a 2-month remote web development internship, contributing to front-end and back-end modules.",
    highlights: [
      "Contributed to an interior design website (front-end & back-end)",
      "Worked on an e-commerce platform development",
      "Gained hands-on experience in full-stack web development",
    ],
    color: "oklch(0.7 0.18 200)",
  },
];

export default function Experience() {
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
      id="experience"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Divider */}
      <div className="section-gradient-divider mb-24 mx-16" />

      <div className="absolute bottom-0 right-0 w-96 h-96 orb orb-violet opacity-10 animate-float-slow" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in-view">
          <div className="section-tag mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            Career
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl gradient-text-violet-cyan mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A journey of continuous growth, building impactful products and
            leading engineering teams.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 timeline-line rounded-full opacity-40" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.title + exp.company}
                className="relative pl-16 sm:pl-20 animate-in-view"
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 sm:left-5 top-6 w-5 h-5 rounded-full border-2 border-background flex items-center justify-center"
                  style={{
                    background: exp.color,
                    boxShadow: `0 0 12px ${exp.color}`,
                  }}
                >
                  {exp.current && (
                    <div
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ background: "oklch(0.95 0.05 290)" }}
                    />
                  )}
                </div>

                {/* Card */}
                <div className="glass card-hover rounded-2xl p-6 sm:p-8">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-display font-bold text-xl text-foreground">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="glass-violet px-2 py-0.5 rounded-full text-xs font-medium text-primary">
                            Current
                          </span>
                        )}
                      </div>
                      <div
                        className="font-semibold text-sm mt-0.5"
                        style={{ color: exp.color }}
                      >
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 text-muted-foreground text-xs sm:text-right">
                      <div className="flex items-center gap-1.5 sm:justify-end">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 sm:justify-end">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: exp.color }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
