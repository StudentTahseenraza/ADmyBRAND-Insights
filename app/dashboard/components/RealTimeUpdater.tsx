'use client'

import { useEffect } from 'react'

export default function RealTimeUpdater({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time data updates
      console.log('Updating data...')
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return <>{children}</>
}