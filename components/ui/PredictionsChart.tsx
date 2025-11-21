'use client'

import briefingData from '@/data/briefing.json'

export default function PredictionsChart() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-slate-900 text-white rounded-t-xl p-8">
        <h2 className="text-4xl font-bold header-font text-amber-500">Future Tech & Leak Radar</h2>
        <p className="text-slate-400">Probability engine based on forum leaks, historical patterns, and asset datamining.</p>
      </div>
      <div className="bg-background-elevated rounded-b-xl shadow-lg border border-slate-700/60 p-8 space-y-8">
        {briefingData.predictions.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-base font-bold text-slate-200">{item.name}</span>
              <span className="text-sm font-medium text-slate-400">{item.eta}</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-4">
              <div
                className={`h-4 rounded-full ${
                  item.probability > 80
                    ? 'bg-green-500'
                    : item.probability > 50
                    ? 'bg-amber-500'
                    : 'bg-red-500'
                }`}
                style={{ width: `${item.probability}%` }}
              />
            </div>
            <div className="text-right text-xs font-bold mt-1 text-slate-400">
              {item.probability}% Probability
            </div>
          </div>
        ))}

        <div className="mt-8 pt-8 border-t border-slate-700/60">
          <h3 className="font-bold text-slate-200 mb-4">Developer Roadmap Prediction</h3>
          <div className="flex flex-col md:flex-row gap-4 text-sm">
            {briefingData.roadmap.map((item, index) => (
              <div key={index} className="flex-1 p-4 bg-slate-800/50 border border-slate-700/60 rounded">
                <strong className="block text-slate-100 mb-1">{item.period}</strong>
                <p className="text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

