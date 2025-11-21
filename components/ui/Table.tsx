import { ReactNode } from 'react'

interface TableProps {
  children: ReactNode
  className?: string
}

export default function Table({ children, className = '' }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className={`min-w-full divide-y divide-border ${className}`}>
        {children}
      </table>
    </div>
  )
}

export function TableHead({ children }: { children: ReactNode }) {
  return (
    <thead className="bg-background-elevated">
      {children}
    </thead>
  )
}

export function TableBody({ children }: { children: ReactNode }) {
  return (
    <tbody className="divide-y divide-border">
      {children}
    </tbody>
  )
}

export function TableRow({ children }: { children: ReactNode }) {
  return (
    <tr className="hover:bg-background-elevated transition-colors">
      {children}
    </tr>
  )
}

export function TableHeader({ children }: { children: ReactNode }) {
  return (
    <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
      {children}
    </th>
  )
}

export function TableCell({ children }: { children: ReactNode }) {
  return (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-primary">
      {children}
    </td>
  )
}

