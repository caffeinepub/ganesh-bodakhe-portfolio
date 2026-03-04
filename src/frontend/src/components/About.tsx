import { Download, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

export default function About() {
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
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    { icon: "💼", label: "5+ Projects", sublabel: "delivered" },
    { icon: "🌍", label: "Bangalore", sublabel: "India" },
    { icon: "🎓", label: "ADYPSOE", sublabel: "BE AI & DS" },
    { icon: "🤖", label: "AI/ML + Java", sublabel: "Spring Boot" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 orb orb-violet opacity-20 animate-float-slow" />
      <div className="absolute bottom-0 left-0 w-64 h-64 orb orb-cyan opacity-15 animate-float-delayed" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in-view">
          <div className="section-tag mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl gradient-text-violet-cyan">
            Who I Am
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left — Avatar */}
          <div className="flex justify-center animate-in-view stagger-1">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="avatar-glow-ring w-72 h-72 sm:w-80 sm:h-80 rounded-full">
                <img
                  src="/assets/generated/avatar-ganesh.dim_400x400.png"
                  alt="Ganesh Bodakhe"
                  className="w-full h-full rounded-full object-cover relative z-10"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass-violet px-3 py-1.5 rounded-xl text-xs font-semibold text-primary animate-float z-20">
                ⚡ Full Stack Dev
              </div>
              <div className="absolute -bottom-4 -left-4 glass-cyan px-3 py-1.5 rounded-xl text-xs font-semibold text-secondary animate-float-delayed z-20">
                🌟 Open Source
              </div>

              {/* Decorative dots */}
              <div className="absolute -right-8 top-1/3 flex flex-col gap-2">
                {[0.3, 0.4, 0.5, 0.6, 0.7].map((opacity) => (
                  <div
                    key={opacity}
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: `oklch(0.65 0.22 290 / ${opacity})`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right — Bio */}
          <div className="space-y-6">
            <div className="animate-in-view stagger-2">
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Passionate Software{" "}
                <span className="gradient-text-violet-cyan">Engineer</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                I&apos;m a passionate software engineer with expertise in
                building modern web applications. I love crafting clean,
                efficient code and turning complex problems into elegant
                solutions.
              </p>
            </div>

            <div className="animate-in-view stagger-3">
              <p className="text-muted-foreground leading-relaxed">
                When I&apos;m not coding, I&apos;m exploring new technologies,
                contributing to open source, or gaming. I believe in writing
                code that not only works but tells a story — clear,
                maintainable, and beautiful.
              </p>
            </div>

            {/* Highlight grid */}
            <div className="grid grid-cols-2 gap-3 animate-in-view stagger-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="glass card-hover rounded-xl p-4 flex items-center gap-3"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-display font-bold text-sm text-foreground">
                      {item.label}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {item.sublabel}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-3 animate-in-view stagger-5">
              <button
                type="button"
                className="btn-neon-violet px-6 py-3 rounded-xl text-sm font-semibold text-white relative z-10 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Resume
              </button>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-outline-cyan px-6 py-3 rounded-xl text-sm font-semibold"
              >
                Let&apos;s Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
