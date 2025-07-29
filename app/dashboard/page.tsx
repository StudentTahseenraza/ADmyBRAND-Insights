'use client'

import { motion } from 'framer-motion'
import OverviewCards from './components/OverviewCards'
import ChartContainer from './components/ChartContainer'
import Table from './components/Table'
import ThemeToggle from './components/ThemeToggle'
import ExportButtons from './components/ExportButtons'
import { Header } from '@/components/shared/Header'
import { useState, useEffect } from 'react'

// Define the shape of the data object
interface MetricData {
  id: number;
  date: string;
  revenue: number;
  users: number;
  performance: number;
  prediction: string;
}

// Reuse the FilterParams interface from Filter.tsx
interface FilterParams {
  startDate?: string;
  endDate?: string;
  minRevenue?: number;
  maxRevenue?: number;
  minUsers?: number;
  maxUsers?: number;
}

// Mock API data with 20 entries
const initialMockData = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  date: new Date(2025, 6, 1 + i).toISOString().split('T')[0], // July 1 to July 20, 2025
  revenue: Math.floor(Math.random() * 10000),
  users: Math.floor(Math.random() * 1000),
  performance: Math.random() * 100,
  prediction: Math.random() > 0.7 ? 'Growth' : 'Stable'
}))

export default function DashboardPage() {
  const [metrics, setMetrics] = useState<MetricData>(initialMockData[0])
  const [data, setData] = useState<MetricData[]>(initialMockData)
  const [loading, setLoading] = useState(true)
  const [filteredData, setFilteredData] = useState<MetricData[]>(initialMockData)

  useEffect(() => {
    setLoading(true)
    const interval = setInterval(() => {
      const updatedData = initialMockData.map(item => ({
        ...item,
        revenue: Math.floor(Math.random() * 10000),
        users: Math.floor(Math.random() * 1000),
        performance: Math.random() * 100,
        prediction: Math.random() > 0.7 ? 'Growth' : 'Stable'
      }))
      setData(updatedData)
      setFilteredData(updatedData) // Initial full data
      setMetrics(updatedData[0])
      setLoading(false)
    }, 2000) // Update every 2 seconds
    return () => clearInterval(interval)
  }, [])

  const handleFilter = ({ startDate, endDate, minRevenue, maxRevenue, minUsers, maxUsers }: FilterParams) => {
    setLoading(true)
    setTimeout(() => {
      const filtered = data.filter(item => {
        const itemDate = new Date(item.date)
        const start = startDate ? new Date(startDate) : null
        const end = endDate ? new Date(endDate) : null
        const inDateRange = (!start || itemDate >= start) && (!end || itemDate <= end)
        const inRevenueRange = (!minRevenue || item.revenue >= minRevenue) && (!maxRevenue || item.revenue <= maxRevenue)
        const inUsersRange = (!minUsers || item.users >= minUsers) && (!maxUsers || item.users <= maxUsers!)
        return inDateRange && inRevenueRange && inUsersRange
      })
      setFilteredData(filtered.length ? filtered : data)
      setLoading(false)
    }, 500)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-8 space-y-8"
    >
      <Header />
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-extrabold text-3d text-foreground glow">ADmyBRAND Insights</h1>
          <div className="flex gap-3">
            <ThemeToggle />
            <ExportButtons data={filteredData[0] || metrics} />
          </div>
        </div>
        {loading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array(4).fill(1).map((_, i) => (
              <div key={i} className="h-32 p-6 card-glass">
                <div className="w-3/4 h-6 mb-2 skeleton"></div>
                <div className="w-1/2 h-4 skeleton"></div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <OverviewCards metrics={filteredData[0] || metrics} />
            <ChartContainer data={filteredData} />
            <Table data={filteredData} onFilter={handleFilter} />
          </>
        )}
      </div>
    </motion.div>
  )
}