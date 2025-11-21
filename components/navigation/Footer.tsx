export default function Footer() {
  return (
    <footer className="border-t border-slate-700/60 bg-background-sidebar mt-auto">
      <div className="container-content py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-slate-400 mb-4 uppercase">
              WT ACADEMY
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Comprehensive tactical training platform and meta encyclopedia for War Thunder players.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-slate-400 mb-4 uppercase">
              Modules
            </h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="/academy" className="hover:text-tactical-cyan transition-colors">Academy</a></li>
              <li><a href="/nations" className="hover:text-tactical-cyan transition-colors">Nations</a></li>
              <li><a href="/maps" className="hover:text-tactical-cyan transition-colors">Maps</a></li>
              <li><a href="/meta" className="hover:text-tactical-cyan transition-colors">Meta Hub</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-slate-400 mb-4 uppercase">
              Resources
            </h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="/vehicles" className="hover:text-tactical-cyan transition-colors">Vehicle Encyclopedia</a></li>
              <li><a href="/weapons" className="hover:text-tactical-cyan transition-colors">Weapons & Systems</a></li>
              <li><a href="/economy" className="hover:text-tactical-cyan transition-colors">Economy Lab</a></li>
              <li><a href="/new-player-path/overview" className="hover:text-tactical-cyan transition-colors">New Player Path</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-700/60 text-center text-xs text-slate-600">
          <p>© {new Date().getFullYear()} War Thunder Master Academy. All content is for educational purposes.</p>
        </div>
      </div>
    </footer>
  )
}

