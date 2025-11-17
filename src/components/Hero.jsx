import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient veil to match white→orange theme; pointer-events none so Spline stays interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-white to-orange-400" />
            Fintech • Travel • Content Studio
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Dusk Society Media
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            A modern creative partner for brands at the edge of finance and travel. We craft motion-first stories, product visuals, and interactive campaigns.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-400 text-slate-900 font-semibold px-5 py-3 shadow-[0_0_30px_rgba(251,146,60,0.35)] hover:shadow-[0_0_40px_rgba(251,146,60,0.55)] transition">
              Start a Project
            </a>
            <a href="#work" className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition">
              See our work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
