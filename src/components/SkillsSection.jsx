import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Award } from "lucide-react";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "Framer Motion", level: 75, category: "frontend" },
  { name: "Shadcn UI", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "SQL", level: 65, category: "backend" },
  { name: "Firebase", level: 85, category: "backend" },
  { name: "Prisma", level: 75, category: "backend" },

  // Algorithms / Languages
  { name: "DSA (Java)", level: 80, category: "algorithms" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "AI Integration", level: 95, category: "tools" },
  { name: "Inngest", level: 70, category: "tools" },

  // Certifications
  {
    name: "NPTEL Certification in Operating Systems",
    category: "certifications",
  },
  {
    name: "NPTEL Certification in Object Oriented Programming",
    category: "certifications",
  },
  {
    name: "OCI Generative AI Professional Certificate | Oracle",
    category: "certifications",
  },
  {
    name: "Full Stack Web Development Certificate | Apna College",
    category: "certifications",
  },
  {
    name: "Machine Learning with Python (V2) Badge | IBM (Coursera)",
    category: "certifications",
  },
  {
    name: "Dean's List (Highest GPA Band - Sem 1, 3 & 4) | Manipal University Jaipur",
    category: "certifications",
  },
];

const categories = [
  "all",
  "frontend",
  "backend",
  "algorithms",
  "tools",
  "certifications",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills & Certifications</span>
        </h2>

        {/* ---- CATEGORY BUTTONS ---- */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ---- SKILLS GRID ---- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {/* For certifications (no progress bar) */}
              {skill.category === "certifications" ? (
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-md font-medium text-left leading-snug">
                    {skill.name}
                  </h3>
                </div>
              ) : (
                <>
                  <div className="text-left mb-4">
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-2 rounded-full origin-left"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="text-right mt-1">
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
