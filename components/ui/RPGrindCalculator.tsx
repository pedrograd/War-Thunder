'use client'

import { useState, useEffect, useCallback } from 'react'

export default function RPGrindCalculator() {
  const [rpCost, setRpCost] = useState(400000)
  const [rpPerMatch, setRpPerMatch] = useState(5000)
  const [matchTime, setMatchTime] = useState(12)
  const [result, setResult] = useState<{ hours: string; matches: number } | null>(null)

  const calculateGrind = useCallback(() => {
    if (rpCost && rpPerMatch && matchTime && rpPerMatch > 0) {
      const matches = Math.ceil(rpCost / rpPerMatch)
      const totalMinutes = matches * matchTime
      const hours = (totalMinutes / 60).toFixed(1)
      setResult({ hours, matches })
    }
  }, [rpCost, rpPerMatch, matchTime])

  useEffect(() => {
    calculateGrind()
  }, [calculateGrind])

  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-stone-200 dark:border-slate-700">
      <h3 className="text-2xl font-bold text-stone-800 dark:text-slate-200 mb-6 border-b pb-2 border-stone-200 dark:border-slate-700">
        RP Grind Calculator
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-xs font-bold text-stone-500 dark:text-slate-400 uppercase mb-1">
            Vehicle Cost (RP)
          </label>
          <input
            type="number"
            value={rpCost}
            onChange={(e) => setRpCost(Number(e.target.value))}
            className="w-full p-3 border border-stone-300 dark:border-slate-600 rounded focus:ring-2 focus:ring-amber-500 outline-none bg-white dark:bg-slate-700 text-stone-900 dark:text-slate-200"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-500 dark:text-slate-400 uppercase mb-1">
            Avg RP / Match
          </label>
          <input
            type="number"
            value={rpPerMatch}
            onChange={(e) => setRpPerMatch(Number(e.target.value))}
            className="w-full p-3 border border-stone-300 dark:border-slate-600 rounded focus:ring-2 focus:ring-amber-500 outline-none bg-white dark:bg-slate-700 text-stone-900 dark:text-slate-200"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-500 dark:text-slate-400 uppercase mb-1">
            Match Duration (Mins)
          </label>
          <input
            type="number"
            value={matchTime}
            onChange={(e) => setMatchTime(Number(e.target.value))}
            className="w-full p-3 border border-stone-300 dark:border-slate-600 rounded focus:ring-2 focus:ring-amber-500 outline-none bg-white dark:bg-slate-700 text-stone-900 dark:text-slate-200"
          />
        </div>
      </div>
      <div className="bg-stone-100 dark:bg-slate-700 p-4 rounded text-center">
        <p className="text-sm text-stone-500 dark:text-slate-400">Estimated Grind Time</p>
        <p className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 header-font">
          {result?.hours || '--'} Hours
        </p>
        <p className="text-xs text-stone-400 dark:text-slate-500 mt-2">
          {result?.matches || '--'} Matches
        </p>
      </div>
    </div>
  )
}

