import { ExternalLink, FolderCode, Github } from "lucide-react";
import { useEffect, useRef } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  color: string;
  emoji: string;
  githubUrl: string;
  demoUrl: string;
}

const projects: Project[] = [
  {
    title: "Relaxify – Health Monitoring System",
    description:
      "AI-driven system to monitor screen time and promote employee wellness. Uses laptop cameras to track simple exercises, offers real-time stress detection, and provides personalized wellness prompts.",
    tags: ["Python", "OpenCV2", "MediaPipe", "PyQt5", "PyMySQL", "NumPy"],
    color: "oklch(0.65 0.22 290)",
    emoji: "🧘",
    githubUrl: "https://github.com",
    demoUrl: "https://github.com",
  },
  {
    title: "Object Detection Model",
    description:
      "Implemented object detection using OpenCV (cv2), detecting diverse objects from the COCO dataset achieving a detection accuracy of 90% on test images.",
    tags: ["Python", "OpenCV", "Jupyter Notebook"],
    color: "oklch(0.6 0.2 240)",
    emoji: "🔍",
    githubUrl: "https://github.com",
    demoUrl: "https://github.com",
  },
  {
    title: "Web Scraping & Data Analysis",
    description:
      "Automated extraction of product data from popular websites (Flipkart, Amazon, Lazada, Naukri.com, Jabstreet), resulting in a 60% reduction in manual data collection time.",
    tags: ["Python", "BeautifulSoup", "Selenium", "Pandas", "Excel"],
    color: "oklch(0.7 0.18 200)",
    emoji: "🕷️",
    githubUrl: "https://github.com",
    demoUrl: "https://github.com",
  },
  {
    title: "Diabetes Prediction ML Model",
    description:
      "Built and deployed a web-based diabetes prediction system using React and CSS, integrated with a machine learning backend via REST APIs. Deployed on Render for public access.",
    tags: ["React", "JavaScript", "Python", "REST API", "ML"],
    color: "oklch(0.72 0.2 145)",
    emoji: "🩺",
    githubUrl: "https://github.com",
    demoUrl: "https://github.com",
  },
];

const tagColors: Record<string, string> = {
  React: "oklch(0.7 0.18 200 / 0.15)",
  TypeScript: "oklch(0.6 0.2 240 / 0.15)",
  "Node.js": "oklch(0.72 0.2 145 / 0.15)",
  Python: "oklch(0.75 0.18 90 / 0.15)",
  MongoDB: "oklch(0.68 0.2 145 / 0.15)",
  PostgreSQL: "oklch(0.55 0.15 240 / 0.15)",
  "Socket.io": "oklch(0.65 0.22 290 / 0.15)",
  Stripe: "oklch(0.6 0.2 240 / 0.15)",
  FastAPI: "oklch(0.7 0.18 200 / 0.15)",
  OpenAI: "oklch(0.72 0.2 145 / 0.15)",
  "AWS S3": "oklch(0.75 0.18 55 / 0.15)",
  OpenCV2: "oklch(0.7 0.18 200 / 0.15)",
  OpenCV: "oklch(0.7 0.18 200 / 0.15)",
  MediaPipe: "oklch(0.65 0.22 290 / 0.15)",
  PyQt5: "oklch(0.6 0.2 240 / 0.15)",
  PyMySQL: "oklch(0.68 0.2 145 / 0.15)",
  NumPy: "oklch(0.75 0.18 55 / 0.15)",
  "Jupyter Notebook": "oklch(0.75 0.2 55 / 0.15)",
  BeautifulSoup: "oklch(0.72 0.2 145 / 0.15)",
  Selenium: "oklch(0.65 0.22 290 / 0.15)",
  Pandas: "oklch(0.68 0.2 145 / 0.15)",
  Excel: "oklch(0.72 0.2 145 / 0.15)",
  JavaScript: "oklch(0.75 0.2 55 / 0.15)",
  "REST API": "oklch(0.65 0.22 290 / 0.15)",
  ML: "oklch(0.6 0.2 240 / 0.15)",
};

export default function Projects() {
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
      { threshold: 0.08 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projectOcids = [
    "projects.item.1",
    "projects.item.2",
    "projects.item.3",
    "projects.item.4",
  ];
  const githubOcids = [
    "projects.github.button.1",
    "projects.github.button.2",
    "projects.github.button.3",
    "projects.github.button.4",
  ];
  const demoOcids = [
    "projects.demo.button.1",
    "projects.demo.button.2",
    "projects.demo.button.3",
    "projects.demo.button.4",
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Divider */}
      <div className="section-gradient-divider mb-24 mx-16" />

      <div className="absolute top-1/4 left-0 w-80 h-80 orb orb-cyan opacity-10 animate-float" />
      <div className="absolute bottom-0 right-0 w-72 h-72 orb orb-violet opacity-10 animate-float-slow" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in-view">
          <div className="section-tag mb-4">
            <FolderCode className="w-3.5 h-3.5" />
            Portfolio
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl gradient-text-violet-cyan mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of projects that showcase my technical skills and
            passion for building great products.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-ocid={projectOcids[index]}
              className="glass card-hover rounded-2xl p-6 flex flex-col gap-4 group relative overflow-hidden animate-in-view"
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              {/* Background accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: project.color }}
              />

              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl glass"
                    style={{ border: `1px solid ${project.color}40` }}
                  >
                    {project.emoji}
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{
                      background:
                        tagColors[tag] || "oklch(0.65 0.22 290 / 0.12)",
                      color: "oklch(0.85 0.08 280)",
                      border: "1px solid oklch(0.5 0.08 280 / 0.3)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 pt-2 border-t border-border">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={githubOcids[index]}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group/btn"
                >
                  <Github className="w-4 h-4 group-hover/btn:text-primary transition-colors" />
                  GitHub
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={demoOcids[index]}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group/btn ml-4"
                >
                  <ExternalLink className="w-4 h-4 group-hover/btn:text-secondary transition-colors" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
