'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-background-void flex items-center justify-center">
      <div className="container-content py-12 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-bold mb-4 text-slate-800 font-stencil">
              ⚠
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-4 text-accent-warning font-stencil uppercase tracking-wider">
              SYSTEM ERROR
            </div>
            <p className="text-slate-400 text-lg mb-2 font-hud uppercase tracking-wide">
              Unexpected Malfunction
            </p>
            <p className="text-slate-500 text-sm mb-8">
              An unexpected error occurred. This has been logged for review.
            </p>
            {error.digest && (
              <p className="text-slate-600 text-xs mb-8 font-mono">
                Error ID: {error.digest}
              </p>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="primary"
              accent="warning"
              onClick={reset}
              className="inline-flex items-center gap-2"
            >
              <i className="fa-solid fa-rotate-right"></i>
              Retry Operation
            </Button>
            <Link href="/">
              <Button
                variant="secondary"
                className="inline-flex items-center gap-2"
              >
                <i className="fa-solid fa-home"></i>
                Return to Dashboard
              </Button>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700/60">
            <h3 className="text-xl font-semibold mb-6 text-slate-200 uppercase tracking-wide font-hud">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <Link
                href="/academy"
                className="p-4 bg-background-elevated border border-slate-700/60 rounded-lg hover:border-accent-academy/50 transition-all duration-200 hover:scale-[1.02]"
              >
                <h4 className="font-semibold mb-1 text-slate-200">Combat Academies</h4>
                <p className="text-sm text-slate-400">Training modules</p>
              </Link>
              <Link
                href="/nations"
                className="p-4 bg-background-elevated border border-slate-700/60 rounded-lg hover:border-accent-academy/50 transition-all duration-200 hover:scale-[1.02]"
              >
                <h4 className="font-semibold mb-1 text-slate-200">Nation Dossiers</h4>
                <p className="text-sm text-slate-400">All nations</p>
              </Link>
              <Link
                href="/meta"
                className="p-4 bg-background-elevated border border-slate-700/60 rounded-lg hover:border-accent-meta/50 transition-all duration-200 hover:scale-[1.02]"
              >
                <h4 className="font-semibold mb-1 text-slate-200">Meta Hub</h4>
                <p className="text-sm text-slate-400">Current meta analysis</p>
              </Link>
              <Link
                href="/economy"
                className="p-4 bg-background-elevated border border-slate-700/60 rounded-lg hover:border-accent-economy/50 transition-all duration-200 hover:scale-[1.02]"
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

