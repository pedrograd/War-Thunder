'use client'

import { useEffect, useRef } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

interface MetaChartProps {
  labels: string[]
  data: number[]
  colors: string[]
}

export default function MetaChart({ labels, data, colors }: MetaChartProps) {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Win Rate %',
        data,
        backgroundColor: colors,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 70,
        ticks: {
          color: '#cbd5e1',
        },
        grid: {
          color: 'rgba(148, 163, 184, 0.1)',
        },
      },
      x: {
        ticks: {
          color: '#cbd5e1',
        },
        grid: {
          display: false,
        },
      },
    },
  }

  return (
    <div className="h-[300px] md:h-[350px]">
      <Bar data={chartData} options={options} />
    </div>
  )
}

