import { useEffect, useState } from "react";

const skills = [
  { text: "Scalable Systems", color: "emerald" },
  { text: "User Experience", color: "blue" },
  { text: "System Design", color: "purple" },
  { text: "High Performance", color: "yellow" },
  { text: "Modern Web Apps", color: "pink" },
];

export const SkillsSlideshow = () => {
  const [skillIndex, setSkillIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const currentSkill = skills[skillIndex];

  // ⌨️ Typewriter Effect
  useEffect(() => {
    if (charIndex < currentSkill.text.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + currentSkill.text[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 70);

      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setTypedText("");
        setCharIndex(0);
        setSkillIndex((prev) => (prev + 1) % skills.length);
      }, 1800);

      return () => clearTimeout(pause);
    }
  }, [charIndex, skillIndex]);

  return (
    <>
      {/* 🔹 Component-scoped CSS */}
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(-12px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }

          .slide-in {
            animation: slideIn 0.4s ease-out;
          }

          .blink {
            animation: blink 1s infinite;
          }
        `}
      </style>

      <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
        <span className="text-muted-foreground text-xl">
          I build
        </span>

        <span
          key={currentSkill.text}
          className={`slide-in px-4 py-1 rounded-md font-medium text-lg flex items-center
          ${
            currentSkill.color === "emerald"
              ? "bg-emerald-500/10 text-emerald-400"
              : currentSkill.color === "blue"
              ? "bg-blue-500/10 text-blue-400"
              : currentSkill.color === "purple"
              ? "bg-purple-500/10 text-purple-400"
              : currentSkill.color === "pink"
              ? "bg-pink-500/10 text-pink-400"
              : "bg-yellow-500/10 text-yellow-400"
          }`}
        >
          {typedText}
          <span className="ml-1 blink">|</span>
        </span>

        <span className="text-muted-foreground text-xl max-w-xl">
          modern, scalable web solutions with a focus on performance
        </span>
      </div>
    </>
  );
};
