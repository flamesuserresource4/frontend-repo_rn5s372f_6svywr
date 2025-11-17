import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-orange-500 to-amber-300" />
            <span className="text-white font-semibold tracking-tight">Dusk Society Media</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#work" className="text-slate-300 hover:text-white transition">Work</a>
            <a href="#services" className="text-slate-300 hover:text-white transition">Services</a>
            <a href="#about" className="text-slate-300 hover:text-white transition">About</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition">Contact</a>
            <a href="#contact" className="inline-flex items-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-400 text-slate-900 font-semibold px-4 py-2 shadow-[0_0_25px_rgba(251,146,60,0.35)] hover:shadow-[0_0_35px_rgba(251,146,60,0.55)] transition">
              Start a Project
            </a>
          </nav>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 text-white/80">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
