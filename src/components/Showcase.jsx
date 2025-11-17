export default function Showcase() {
  const projects = [
    { title: 'Boarding Pass Interactives', tag: 'Product + Motion' },
    { title: 'Card Launch Toolkit', tag: 'Brand + Motion' },
    { title: 'Onboarding Flow Redesign', tag: 'UX + Visual' },
  ];

  return (
    <section id="work" className="relative bg-slate-950 py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Selected work</h2>
          <p className="mt-2 text-slate-400">Snapshots from recent collaborations across fintech and travel.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 ring-1 ring-inset ring-white/10" />
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <p className="text-sm text-slate-400">{p.tag}</p>
                </div>
                <span className="inline-flex items-center rounded-md bg-gradient-to-r from-orange-500 to-amber-400 px-2 py-1 text-xs font-medium text-slate-900">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
