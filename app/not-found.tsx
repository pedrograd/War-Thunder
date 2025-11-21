import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background-void flex items-center justify-center">
      <div className="container-content py-12 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-bold mb-4 text-slate-800 font-stencil">
              404
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-4 text-tactical-orange font-stencil uppercase tracking-wider">
              TARGET NOT FOUND
            </div>
            <p className="text-slate-400 text-lg mb-2 font-hud uppercase tracking-wide">
              Coordinates Invalid
            </p>
            <p className="text-slate-500 text-sm mb-8">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="px-6 py-3 bg-tactical-orange hover:bg-tactical-orange/80 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-tactical-orange focus:ring-offset-2 focus:ring-offset-background"
            >
              Return to Dashboard
            </Link>
            <Link
              href="/academy"
              className="px-6 py-3 bg-background-elevated hover:bg-background-surface text-slate-200 border border-slate-700/60 rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-tactical-cyan focus:ring-offset-2 focus:ring-offset-background"
            >
              Browse Academy
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700/60">
            <h3 className="text-xl font-semibold mb-6 text-slate-200 uppercase tracking-wide font-hud">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <Link
                href="/academy"
                className="p-4 bg-background-elevated border border-slate-700/60 rounded-lg hover:border-tactical-orange/50 transition-all duration-200 hover:scale-[1.02]"
              >
                <h4 className="font-semibold mb-1 text-slate-200">Combat Academies</h4>
                <p className="text-sm text-slate-400">Training modules</p>
              </Link>
              <Link
                href="/nations"
                className="p-4 bg-background-elevated border border-slate-700/60 rounded-lg hover:border-tactical-orange/50 transition-all duration-200 hover:scale-[1.02]"
              >
                <h4 className="font-semibold mb-1 text-slate-200">Nation Dossiers</h4>
                <p className="text-sm text-slate-400">All nations</p>
              </Link>
              <Link
                href="/meta"
                className="p-4 bg-background-elevated border border-slate-700/60 rounded-lg hover:border-tactical-purple/50 transition-all duration-200 hover:scale-[1.02]"
              >
                <h4 className="font-semibold mb-1 text-slate-200">Meta Hub</h4>
                <p className="text-sm text-slate-400">Current meta analysis</p>
              </Link>
              <Link
                href="/economy"
                className="p-4 bg-background-elevated border border-slate-700/60 rounded-lg hover:border-tactical-green/50 transition-all duration-200 hover:scale-[1.02]"
              >
                <h4 className="font-semibold mb-1 text-slate-200">Economy Lab</h4>
                <p className="text-sm text-slate-400">RP/SL optimization</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

