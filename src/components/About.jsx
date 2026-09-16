import {
  CodeXml,
  Terminal,
  FileText,
  Calendar,
  ListTodo,
  TrendingUp,
} from "lucide-react";

export default function About() {
  return (
    <div id="about">
      <div className="max-w-7xl mx-auto px-4 mb-4">
        {/* PARENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="w-full max-w-md aspect-4/5 border border-neutral-700 p-4">
              <img
                src="https://i.pinimg.com/736x/3a/08/66/3a086614c75ed464139235d15ff48ff7.jpg"
                alt="About Portrait"
                className="w-fit h-fit object-cover rounded-2xl"
              />
            </div>
          </div>
          {/* SEBELAH KANAN */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono">
              ABOUT ME
            </span>
            <h2 className="text-3xl md:text-4xl font-headline text-white leading-tight">
              Bridging structured logic with intentional visual craftsmanship.
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-neutral-400">
              Rooted in a deep appreciation for structured logic and minimalist
              visual culture, my work lives at the intersection of intentional
              design and modern web craftsmanship. I believe an interface
              shouldn’t merely be visually compelling—it must feel deliberate,
              effortless, and engineered with absolute clarity.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-neutral-400">
              From formulating scalable design systems to crafting responsive,
              high-performance layouts, every decision is guided by purpose.
              Whether shaping complex digital products or defining subtle brand
              narratives, I approach every surface with an obsession for detail,
              typography, and enduring simplicity
            </p>
          </div>
        </div>
        {/* DESKSRIPSI PENGALAMAN */}
        <div className="pt-20">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Everything you need,
              <span className="text-sky-500"> one workspace</span>
            </h1>

            <p className="max-w-md mx-auto text-neutral-400 leading-relaxed">
              Built by a CS student, for CS students. Every feature designed to
              make your study life easier and more enjoyable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-white/10 bg-neutral-900/80 p-6 rounded-2xl flex flex-col justify-start">
              {/* Icon */}
              <div className="mb-6 text-neutral-300">
                <CodeXml className="w-7 h-7" />
              </div>
              {/* Heading */}
              <h3 className="text-xl font-bold text-white mb-3">Code Editor</h3>
              <p className="text-md leading-relaxed text-neutral-400">
                Full-featured Monaco editor with syntax highlighting, multi-file
                tabs, and 25+ IDE themes.
              </p>
            </div>
            <div className="border border-white/10 bg-neutral-900/80 p-6 rounded-2xl flex flex-col justify-start">
              {/* Icon */}
              <div className="mb-6 text-neutral-300">
                <Terminal className="w-7 h-7" />
              </div>
              {/* Heading */}
              <h3 className="text-xl font-bold text-white mb-3">Terminal</h3>
              <p className="text-md leading-relaxed text-neutral-400">
                Browser-based terminal powered by xterm.js. Compile and run C,
                C++, Python, Java, and more.
              </p>
            </div>
            <div className="border border-white/10 bg-neutral-900/80 p-6 rounded-2xl flex flex-col justify-start">
              {/* Icon */}
              <div className="mb-6 text-neutral-300">
                <FileText className="w-7 h-7" />
              </div>
              {/* Heading */}
              <h3 className="text-xl font-bold text-white mb-3">Notes</h3>
              <p className="text-md leading-relaxed text-neutral-400">
                Beautiful markdown editor with live preview, math equations
                (KaTeX), and real-time sync.
              </p>
            </div>
            <div className="border border-white/10 bg-neutral-900/80 p-6 rounded-2xl flex flex-col justify-start">
              {/* Icon */}
              <div className="mb-6 text-neutral-300">
                <Calendar className="w-7 h-7" />
              </div>
              {/* Heading */}
              <h3 className="text-xl font-bold text-white mb-3">Calendar</h3>
              <p className="text-md leading-relaxed text-neutral-400">
                Sync with Google Calendar, Microsoft, and Apple. Color-coded
                events at a glance.
              </p>
            </div>
            <div className="border border-white/10 bg-neutral-900/80 p-6 rounded-2xl flex flex-col justify-start">
              {/* Icon */}
              <div className="mb-6 text-neutral-300">
                <ListTodo className="w-7 h-7" />
              </div>
              {/* Heading */}
              <h3 className="text-xl font-bold text-white mb-3">
                To-dos & Assignments
              </h3>
              <p className="text-md leading-relaxed text-neutral-400">
                Track assignments with due dates, D-Day countdowns, and course
                organization.
              </p>
            </div>
            <div className="border border-white/10 bg-neutral-900/80 p-6 rounded-2xl flex flex-col justify-start">
              {/* Icon */}
              <div className="mb-6 text-neutral-300">
                <TrendingUp className="w-7 h-7" />
              </div>
              {/* Heading */}
              <h3 className="text-xl font-bold text-white mb-3">
                Stats & Progress
              </h3>
              <p className="text-md leading-relaxed text-neutral-400">
                Visualize your study habits, track solved problems, and monitor
                your coding progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
