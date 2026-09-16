import React from "react";

const projects = [
  {
    id: "01",
    title: "Decision Support System",
    category: "Web Application & Algorithm",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Tailwind CSS", "Systems"],
    link: "#",
  },
  {
    id: "02",
    title: "Travel Journey Platform",
    category: "Interface & Experience",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    tags: ["UI/UX", "Next.js", "Design"],
    link: "#",
  },
  {
    id: "03",
    title: "Architectural Studio Portfolio",
    category: "Brand & Editorial Web",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Frontend", "Minimalism"],
    link: "#",
  },
  {
    id: "04",
    title: "Visual Component Archive",
    category: "Design System & Tokens",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    tags: ["Tokens", "Figma", "UI Engine"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-bg-primary text-neutral-300 min-h-screen py-24 px-6"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-neutral-800">
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono">
              02 / SELECTED WORKS
            </span>
            <h2 className="text-3xl md:text-5xl font-headline text-white mt-2">
              Featured Projects
            </h2>
          </div>
          <p className="text-xs text-neutral-500 tracking-widest uppercase font-mono mt-4 md:mt-0">
            SHOWCASING DIGITAL PRODUCTS & INTERFACES
          </p>
        </div>

        {/* 2-COLUMN VISUAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="group block space-y-5 cursor-pointer"
            >
              {/* IMAGE FRAME DENGAN BORDER AKSEN KHAS KAMU */}
              <div className="relative p-2.5 border-b border-l border-neutral-700/60 pb-5 pl-5 bg-neutral-950/20">
                <div className="w-full aspect-16/10 overflow-hidden bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition duration-700"
                  />
                </div>
              </div>

              {/* PROJECT INFO */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span>{item.category}</span>
                  <span>{item.year}</span>
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-headline text-white group-hover:text-neutral-300 transition">
                    {item.title}
                  </h3>
                  <span className="text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition duration-300">
                    &rarr;
                  </span>
                </div>

                {/* TAG BADGES */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono text-neutral-500 border border-neutral-800 px-2 py-0.5 tracking-wider uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
