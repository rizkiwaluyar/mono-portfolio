import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Otomatis tutup menu mobile jika layar di-resize ke ukuran desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    // fixed + z-50 agar mengambang di atas halaman
    <header className="fixed top-0 left-0 w-full flex flex-col items-center p-4 z-50 pointer-events-none">
      {/* DESKTOP NAVBAR (tampil di layar md ke atas) */}
      <nav className="hidden md:flex items-center gap-6 bg-slate-900/80 backdrop-blur-md border border-slate-800/80 pl-6 pr-2 py-1.5 rounded-full shadow-lg pointer-events-auto">
        <a
          href="#home"
          className="font-medium text-white hover:text-zinc-200 transition-colors cursor-pointer text-sm"
        >
          Rizki Waluya
        </a>

        {/* Menu Navigasi Desktop */}
        <ul className="flex items-center gap-5 text-sm text-zinc-400">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-white cursor-pointer transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Tombol Aksi */}
        <a
          href="#contact"
          className="bg-white text-black text-sm font-medium px-4 py-1.5 rounded-full hover:bg-zinc-200 transition-colors"
        >
          Hire Me!
        </a>
      </nav>

      {/* MOBILE NAVBAR CONTAINER (tampil di layar mobile / < md) */}
      <div className="w-full max-w-sm sm:max-w-md md:hidden pointer-events-auto flex flex-col items-center">
        {/* Bar Utama Mobile */}
        <div className="w-full flex items-center justify-between bg-slate-900/85 backdrop-blur-md border border-slate-800/80 px-4 py-2 rounded-full shadow-lg">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="font-semibold text-white text-sm tracking-tight"
          >
            Rizki Waluya
          </a>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-white text-black text-xs font-medium px-3 py-1.5 rounded-full hover:bg-zinc-200 transition-colors"
            >
              Hire Me!
            </a>

            {/* Tombol Hamburger / Close */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={isOpen}
              className="text-zinc-300 hover:text-white p-1.5 rounded-full hover:bg-slate-800 transition-colors focus:outline-none cursor-pointer"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Backdrop klik di luar untuk menutup menu */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm -z-10"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Dropdown Menu Mobile */}
        {isOpen && (
          <div className="w-full mt-2 bg-slate-900/95 backdrop-blur-xl border border-slate-800/90 rounded-2xl p-3 shadow-2xl transition-all duration-200">
            <ul className="flex flex-col gap-1 text-sm text-zinc-300">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-3 py-2.5 rounded-xl hover:bg-slate-800/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
