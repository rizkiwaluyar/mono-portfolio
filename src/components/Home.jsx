import "../index.css";

export default function Home() {
  return (
    <div
      id="home"
      className="bg-bg-primary min-h-screen flex items-center px-4"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* TEKS SEBELAH KIRI */}
        <div className="space-y-6 mt-8">
          <h1 className="text-5xl md:text-7xl font-headline leading-tight">
            Crafting Digital <span className="italic">experiences</span>
            <br />
            with precision.
          </h1>

          <p className="max-w-md tracking-widest">
            I am a multidisciplinary designer specializing in high-end
            interfaces and brand identities. Every pixel is placed with
            intention.
          </p>

          <div className="pt-4">
            <a
              href="#projects"
              className="text-neutral-custom text-xs uppercase tracking-widest hover:text-white flex items-center gap-2 transition cursor-pointer"
            >
              VIEW MY WORK <span>&rarr;</span>
            </a>
          </div>
        </div>

        {/* SEBELAH KANAN */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative p-3 border-b border-l border-neutral-700/60 pb-6 pl-6">
            <div className="w-full max-w-95 lg:max-w-100 aspect-4/5 overflow-hidden bg-neutral-900">
              <img
                src="https://i.pinimg.com/736x/3a/08/66/3a086614c75ed464139235d15ff48ff7.jpg"
                alt="Editorial Portrait"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
