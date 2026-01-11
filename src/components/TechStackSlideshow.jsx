export const TechStackSlider = () => {
  const stacks = [
    "Next.js",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Firebase",
    "JWT",
    "REST APIs",
    "Socket.IO",
  ];

  return (
    <>
      {/* 🔹 CSS inside component */}
      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .slider-track {
            display: flex;
            width: max-content;
            animation: scroll 18s linear infinite;
          }

          .slider-wrapper {
            overflow: hidden;
            width: 100%;
          }
        `}
      </style>

      <div className="slider-wrapper">
        <div className="slider-track">
          {[...stacks, ...stacks].map((tech, i) => (
            <span
              key={i}
              className="mx-2 px-4 py-1 rounded-full text-xl font-medium
              bg-primary/10 text-primary whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
