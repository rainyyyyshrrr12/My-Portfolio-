import { ArrowRight, ExternalLink, Github, Clock } from "lucide-react";

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
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "HackYours",
    description: `
Built backend and storage systems with AI-powered features for idea generation and pitch deck automation, accelerating hackathon ideation and boosting team project speed.`,
    image: "/project/project2.jpg",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Gemini 1.5",
      "Firebase Auth",
      "Framer Motion",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "EchoMeet",
    description:
      "Video conferencing and collaboration app built with React, Node.js, and WebRTC — currently under development.",
    image: "/project/project3.png",
    tags: ["React", "Node.js", "Firebase", "WebRTC"],
    comingSoon: true,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover relative"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay “Coming Soon” badge for EchoMeet */}
                {project.comingSoon && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white text-sm md:text-base flex items-center gap-2 bg-primary/90 px-4 py-2 rounded-full shadow-md">
                      <Clock size={16} /> Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Card Content */}
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

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Conditional links */}
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
