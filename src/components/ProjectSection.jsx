import { useState } from "react";
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
    id: 2,
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
    id: 3,
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
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
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

  const CARD_WIDTH = 320; // EXACT card width
  const GAP = 32; // gap-8
  const visibleCards = 3;

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
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/* ================= CAROUSEL ================= */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-secondary hover:bg-primary transition disabled:opacity-40"
          >
            <ArrowLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            disabled={current >= projects.length - visibleCards}
            className="absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-secondary hover:bg-primary transition disabled:opacity-40"
          >
            <ArrowRight />
          </button>

          {/* Slider */}
          <div className="overflow-hidden">
            <div
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  current * (CARD_WIDTH + GAP)
                }px)`,
              }}
            >
              {projects.map((project, key) => (
                <div
                  key={key}
                  className="group w-[320px] flex-shrink-0 bg-card rounded-lg overflow-hidden shadow-xs card-hover relative"
                >
                  {/* Image */}
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {project.comingSoon && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white text-sm md:text-base flex items-center gap-2 bg-primary/90 px-4 py-2 rounded-full shadow-md">
                          <Clock size={16} /> Coming Soon
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
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

                    {/* GitHub / Demo UNCHANGED */}
                    <div className="flex justify-between items-center">
                      {project.comingSoon ? (
                        <span className="text-muted-foreground italic text-sm">
                          Stay tuned for release 🚀
                        </span>
                      ) : (
                        <div className="flex space-x-3">
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                          >
                            <ExternalLink size={20} />
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                          >
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

        {/* Bottom GitHub CTA */}
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
