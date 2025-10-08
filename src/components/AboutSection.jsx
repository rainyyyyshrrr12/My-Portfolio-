import { Code, Database, Rocket, Layers } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* ---- LEFT SIDE: Text Section ---- */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Full-Stack Developer & Tech Explorer
            </h3>

            <p className="text-muted-foreground">
              I’m currently pursuing <strong>B.Tech in Computer Science (Data Science)</strong>, 
              and I love building modern, scalable, and visually engaging web applications.
              I’ve developed multiple full-stack projects integrating technologies like 
              <strong> React, Firebase, Prisma, and AI-based tools</strong>.
            </p>

            <p className="text-muted-foreground">
              My focus lies in creating clean UIs with <strong>Shadcn UI</strong> and 
              <strong> Framer Motion</strong> for seamless animations, while handling backend logic 
              efficiently using <strong>Node.js</strong>, <strong>Express</strong>, and modern databases.
              I’m also passionate about <strong>DSA in Java</strong> and continuous learning to enhance my problem-solving skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              {/* ---------- DOWNLOAD RESUME BUTTON ---------- */}
             
              <a
  href="/project/RainySharma_Resume.pdf"
  download="RainySharma_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
>
  Download CV
</a>
            </div>
          </div>

          {/* ---- RIGHT SIDE: Skill Highlights ---- */}
          <div className="grid grid-cols-1 gap-6">
            {/* Web Dev */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive and dynamic web apps using React, Next.js, 
                    and Tailwind CSS, enhanced with Framer Motion and Shadcn UI.
                  </p>
                </div>
              </div>
            </div>

            {/* Backend / Firebase / Prisma */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend & Databases</h4>
                  <p className="text-muted-foreground">
                    Skilled in Firebase, Node.js, Express, and Prisma ORM for building 
                    secure, scalable, and cloud-connected websites.
                  </p>
                </div>
              </div>
            </div>

            {/* AI / Automation / Inngest */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & Automation</h4>
                  <p className="text-muted-foreground">
                    Integrating AI APIs, automation workflows, and Inngest for 
                    real-time event-driven solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* DSA / Java */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">DSA in Java</h4>
                  <p className="text-muted-foreground">
                    Strengthening problem-solving and algorithmic skills 
                    through Java-based data structures and algorithms practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
