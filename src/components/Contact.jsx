import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-20 px-6 bg-bg-primary text-neutral-300"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* HEADER SECTION */}
        <div className="pb-10 border-b border-neutral-800 mb-12">
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono">
            03 / INQUIRY
          </span>
          <h2 className="text-4xl md:text-6xl font-headline text-white mt-2 leading-tight">
            Let’s craft something <span className="italic">deliberate.</span>
          </h2>
        </div>

        {/* GRID UTAMA (INFO & FORM) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* SEBELAH KIRI - TEKS & DETAIL KONTAK */}
          <div className="space-y-8">
            <p className="text-sm md:text-base text-neutral-400 leading-relaxed tracking-wide max-w-md">
              Whether you have an upcoming project, a design system challenge,
              or just want to talk about architecture and code, feel free to
              reach out.
            </p>

            <div className="space-y-6 font-mono text-xs">
              <div>
                <span className="text-neutral-600 block uppercase tracking-widest mb-1">
                  Direct Channel
                </span>
                <a
                  href="mailto:contact@example.com"
                  className="text-white hover:text-neutral-400 transition underline underline-offset-4 text-sm"
                >
                  contact@example.com
                </a>
              </div>

              <div>
                <span className="text-neutral-600 block uppercase tracking-widest mb-1">
                  Base Location
                </span>
                <span className="text-neutral-300">
                  Jakarta, Indonesia — UTC+7
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-800">
              <span className="text-[11px] font-mono text-neutral-600 uppercase tracking-widest block mb-4">
                Other Networks
              </span>
              <div className="flex gap-6 text-xs font-mono uppercase tracking-widest">
                <a href="#" className="hover:text-white transition">
                  Github &rarr;
                </a>
                <a href="#" className="hover:text-white transition">
                  LinkedIn &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* SEBELAH KANAN - FORM CONTAINER DENGAN AKSEN BORDER KHAS */}
          <div className="relative p-4 border border-neutral-700/60 pb-8 pl-8 bg-neutral-950/20">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* FIELD NAMA */}
              <div className="space-y-2">
                <label className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 block">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name or studio"
                  className="w-full bg-transparent border-b border-neutral-800 focus:border-white py-2 text-sm text-white placeholder-neutral-700 outline-none transition duration-300"
                />
              </div>

              {/* FIELD EMAIL */}
              <div className="space-y-2">
                <label className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your.email@address.com"
                  className="w-full bg-transparent border-b border-neutral-800 focus:border-white py-2 text-sm text-white placeholder-neutral-700 outline-none transition duration-300"
                />
              </div>

              {/* FIELD PESAN */}
              <div className="space-y-2">
                <label className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 block">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Brief overview of the project or intent..."
                  className="w-full bg-transparent border-b border-neutral-800 focus:border-white py-2 text-sm text-white placeholder-neutral-700 outline-none transition duration-300 resize-none"
                ></textarea>
              </div>

              {/* TOMBOL SUBMIT */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="text-xs font-mono uppercase tracking-widest text-white border border-neutral-700 px-8 py-3.5 hover:bg-white hover:text-black transition duration-300 flex items-center gap-3 cursor-pointer"
                >
                  SEND INQUIRY <span>&rarr;</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
