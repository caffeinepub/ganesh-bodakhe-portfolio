import { Award, Calendar, GraduationCap } from "lucide-react";
import { useEffect, useRef } from "react";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  gradeLabel: string;
  description: string;
  color: string;
  icon: string;
  highlights: string[];
}

const educationItems: EducationItem[] = [
  {
    degree: "BE – Artificial Intelligence and Data Science",
    institution: "Ajeenkya DY Patil School of Engineering, Pune",
    period: "2020 – 2024",
    grade: "9.05 / 10.0",
    gradeLabel: "CGPA",
    description:
      "Specialized in Artificial Intelligence and Data Science, with strong foundations in machine learning, data analytics, and modern software engineering.",
    color: "oklch(0.65 0.22 290)",
    icon: "🎓",
    highlights: [
      "CGPA: 9.05 / 10.0",
      "AI/ML and Data Science specialization",
      "Multiple hackathon finalist",
      "AISA Committee Volunteer (2022–2025)",
    ],
  },
  {
    degree: "12th (HSC)",
    institution: "Dnyanmata Jr. College, Sangamner",
    period: "2019 – 2020",
    grade: "78.17%",
    gradeLabel: "Percentage",
    description:
      "Completed Higher Secondary Certificate with Science stream, building a solid foundation in Physics, Chemistry, and Mathematics.",
    color: "oklch(0.7 0.18 200)",
    icon: "🏫",
    highlights: ["Science stream", "Percentage: 78.17%"],
  },
  {
    degree: "10th (SSC)",
    institution: "New English School Talegaon Dighe, Sangamner",
    period: "2017 – 2018",
    grade: "86.40%",
    gradeLabel: "Percentage",
    description:
      "Completed Secondary School Certificate with strong academic performance.",
    color: "oklch(0.72 0.2 145)",
    icon: "🏫",
    highlights: ["Percentage: 86.40%", "Strong academics"],
  },
];

export default function Education() {
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
      id="education"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Divider */}
      <div className="section-gradient-divider mb-24 mx-16" />

      <div className="absolute bottom-0 left-0 w-80 h-80 orb orb-cyan opacity-10 animate-float" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in-view">
          <div className="section-tag mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            Education
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl gradient-text-violet-cyan mb-4">
            Academic Background
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Strong academic foundation that fuels my engineering excellence and
            problem-solving approach.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {educationItems.map((item, index) => (
            <div
              key={item.degree}
              className="glass card-hover rounded-2xl p-8 relative overflow-hidden group animate-in-view"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* Background accent */}
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: item.color }}
              />

              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 glass"
                  style={{ border: `1px solid ${item.color}40` }}
                >
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-foreground mb-0.5">
                    {item.degree}
                  </h3>
                  <div
                    className="font-semibold text-sm"
                    style={{ color: item.color }}
                  >
                    {item.institution}
                  </div>
                </div>
              </div>

              {/* Info row */}
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-xl text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </div>
                <div
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold"
                  style={{
                    background: `${item.color}18`,
                    color: item.color,
                    border: `1px solid ${item.color}35`,
                  }}
                >
                  <Award className="w-3.5 h-3.5" />
                  {item.gradeLabel}: {item.grade}
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {item.description}
              </p>

              {/* Highlights */}
              <ul className="grid grid-cols-2 gap-2">
                {item.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: item.color }}
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
