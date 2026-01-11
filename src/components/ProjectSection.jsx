import { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Github,
  Clock,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Spott",
    description:
      "Architected and deployed a full-stack event management platform with event creation, discovery, My Events & My Tickets dashboards, QR-based ticketing, and Free/Pro role-based access.",
    image: "/project/image.png",
    tags: [
      "Next.js",
      "Convex",
      "Clerk Auth",
      "Tailwind CSS",
      "Shadcn UI",
      "Unsplash API",
    ],
    demoUrl: "https://spott-psi.vercel.app/",
    githubUrl: "https://github.com/rainyyyyshrrr12/Spott",
  },
  {
    id: 2,
    title: "GitHub Clone",
    description:
      "Built a GitHub-like full-stack platform featuring authentication, repository management, dashboards, and issue tracking using the MERN stack.",
    image: "/project/image1.png",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT",
      "Socket.IO",
    ],
    demoUrl: "https://aws-frontend-qbl6.onrender.com",
    githubUrl: "https://github.com/rainyyyyshrrr12/aws-frontend",
  },
  {
    id: 3,
    title: "JobZen",
    description:
      "Designed and deployed an AI-powered career platform with resume and cover letter generators plus interview prep tools.",
    image: "/project/project1.png",
    tags: [
      "Next.js",
      "Neon DB",
      "Tailwind CSS",
      "AI/LLM Integration (Gemini API)",
    ],
    demoUrl: "https://jobzen-kappa.vercel.app/",
    githubUrl: "https://github.com/rainyyyyshrrr12/JobZen",
  },
  {
    id: 4,
    title: "HackYours",
    description:
      "Built backend and storage systems with AI-powered features for idea generation and pitch deck automation, accelerating hackathon ideation and boosting team project speed.",
    image: "/project/project2.jpg",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Gemini 1.5",
      "Firebase Auth",
      "Framer Motion",
    ],
    demoUrl: "https://hackyours.raghavkatta.xyz/",
    githubUrl: "https://github.com/raghavxkatta/HackYours-BinaryBrains",
  },
  {
    id: 5,
    title: "EchoMeet",
    description:
      "Video conferencing and collaboration app built with React, Node.js, and WebRTC — currently under development.",
    image: "/project/project3.png",
    tags: ["React", "Node.js", "Firebase", "WebRTC"],
    comingSoon: true,
  },
];

export const ProjectsSection = () => {
  const [current, setCurrent] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const CARD_WIDTH = 320;
  const GAP = 32;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    if (current < projects.length - visibleCards) {
      setCurrent((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted
          with attention to detail, performance, and user experience.
        </p>

        {/* ================= CAROUSEL ================= */}
        <div className="relative">
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute left-[-20px] md:left-[-50px] top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-secondary hover:bg-primary transition disabled:opacity-40"
          >
            <ArrowLeft />
          </button>

          <button
            onClick={next}
            disabled={current >= projects.length - visibleCards}
            className="absolute right-[-20px] md:right-[-50px] top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-secondary hover:bg-primary transition disabled:opacity-40"
          >
            <ArrowRight />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  current * (CARD_WIDTH + GAP)
                }px)`,
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group w-[320px] flex-shrink-0 bg-card rounded-lg overflow-hidden
                             relative transition-all duration-500 hover:shadow-xl"
                >
                  {/* 🌈 CLEAN GRADIENT OVERLAY */}
                  <div
                    className="
                      pointer-events-none absolute inset-0 opacity-0
                      group-hover:opacity-100 transition-opacity duration-500
                      bg-gradient-to-br
                      from-blue-500/20 via-violet-500/20 to-cyan-500/20
                      dark:from-blue-400/25 dark:via-violet-400/25 dark:to-cyan-400/25
                    "
                  />

                  {/* ✨ SUBTLE GLOW */}
                  <div
                    className="
                      pointer-events-none absolute inset-0 rounded-lg
                      opacity-0 group-hover:opacity-100 transition duration-500
                      ring-1 ring-blue-500/20 dark:ring-cyan-400/30
                    "
                  />

                  {/* IMAGE */}
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {project.comingSoon && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white flex items-center gap-2 bg-primary/90 px-4 py-2 rounded-full">
                          <Clock size={16} /> Coming Soon
                        </span>
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 relative z-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs border rounded-full bg-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-1">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex justify-between items-center">
                      {project.comingSoon ? (
                        <span className="text-muted-foreground italic text-sm">
                          Stay tuned for release 🚀
                        </span>
                      ) : (
                        <div className="flex space-x-3">
                          <a href={project.demoUrl} target="_blank">
                            <ExternalLink size={20} />
                          </a>
                          <a href={project.githubUrl} target="_blank">
                            <Github size={20} />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/rainyyyyshrrr12"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
