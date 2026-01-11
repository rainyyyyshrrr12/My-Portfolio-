import { ArrowDown } from "lucide-react";
import { SkillsSlideshow } from "@/components/SkillsSlideshow";
import { TechStackSlider } from "@/components/TechStackSlideshow";


export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative z-0 min-h-screen flex flex-col items-center justify-center px-4 pt-20"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* ---- PROFILE IMAGE ---- */}
          <div className="flex justify-center opacity-0 animate-fade-in">
            <img
              src="/project/rainy.jpeg"
              alt="Rainy Sharma"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary shadow-lg"
            />
          </div>

          {/* ---- NAME ---- */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Rainy
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Sharma
            </span>
          </h1>

          {/* ---- SKILLS ---- */}
          <div className="flex justify-center opacity-0 animate-fade-in-delay-3">
            <SkillsSlideshow />
          </div>

          {/* ---- TECH STACK SLIDESHOW (NEW) ---- */}
          <div className="mt-4 opacity-0 animate-fade-in-delay-4">
  <TechStackSlider />
</div>


          {/* ---- BUTTON ---- */}
          <div className="pt-6 opacity-0 animate-fade-in-delay-5">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 animate-bounce text-muted-foreground">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};
