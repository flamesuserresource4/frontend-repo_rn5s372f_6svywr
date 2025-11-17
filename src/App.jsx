import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <footer id="contact" className="border-t border-white/10 bg-slate-950/90">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-white text-xl font-semibold">Let’s build at dusk</h3>
                <p className="mt-2 text-slate-400 max-w-md">Tell us about your launch timeline and goals. We’ll reply within 24 hours with next steps.</p>
              </div>
              <form className="grid gap-3">
                <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400/70 focus:outline-none focus:ring-2 focus:ring-orange-400/60" placeholder="Your name" />
                <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400/70 focus:outline-none focus:ring-2 focus:ring-orange-400/60" placeholder="Work email" />
                <textarea className="min-h-[120px] rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400/70 focus:outline-none focus:ring-2 focus:ring-orange-400/60" placeholder="What are you building?" />
                <button type="button" className="mt-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-400 px-5 py-3 font-semibold text-slate-900 shadow-[0_0_30px_rgba(251,146,60,0.35)] hover:shadow-[0_0_40px_rgba(251,146,60,0.55)] transition">Send</button>
              </form>
            </div>
            <div className="mt-12 flex items-center justify-between text-sm text-slate-400">
              <span>© {new Date().getFullYear()} Dusk Society Media</span>
              <span>Fintech • Travel • Content</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
