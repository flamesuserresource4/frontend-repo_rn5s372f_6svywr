export default function Features() {
  const items = [
    {
      title: 'Motion-first storytelling',
      desc: 'From concept to delivery, we build edits that move markets and audiences.',
    },
    {
      title: 'Fintech-native design',
      desc: 'Pricing screens, card art, onboarding flows—designed with conversion in mind.',
    },
    {
      title: 'Travel visuals at dusk',
      desc: 'Cinematic, moody imagery that blends product with place and time.',
    },
  ];

  return (
    <section id="services" className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(251,146,60,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_80%_10%,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">What we do</h2>
          <p className="mt-2 text-slate-400">Content systems and launch kits for brands moving fast.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-white to-orange-400 opacity-80 group-hover:opacity-100 shadow-[0_0_25px_rgba(251,146,60,0.35)]" />
              <h3 className="mt-4 text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
