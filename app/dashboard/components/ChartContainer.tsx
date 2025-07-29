'use client'

import { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { PieChart, Pie, Cell } from 'recharts'
import { BarChart, Bar } from 'recharts'

// Define the shape of the data object
interface MetricData {
  id: number;
  date: string;
  revenue: number;
  users: number;
  performance: number;
  prediction: string;
}

const ChartContainer = ({ data }: { data: MetricData[] }) => {
  const [lineData, setLineData] = useState<{ time: string; value: number }[]>([])
  const [pieData, setPieData] = useState<{ name: string; value: number }[]>([])
  const [barData, setBarData] = useState<{ name: string; revenue: number; users: number }[]>([])

  useEffect(() => {
    const updatedLineData = data.map((item, index) => ({
      time: item.date,
      value: item.performance
    })).slice(0, 20)
    setLineData(updatedLineData)

    const updatedPieData = [
      { name: 'Active Users', value: data.reduce((sum, item) => sum + item.users * 0.6, 0) / data.length },
      { name: 'Inactive Users', value: data.reduce((sum, item) => sum + item.users * 0.4, 0) / data.length },
    ]
    setPieData(updatedPieData)

    const updatedBarData = data.map(item => ({
      name: item.date,
      revenue: item.revenue,
      users: item.users
    })).slice(0, 20)
    setBarData(updatedBarData)
  }, [data])

  const COLORS = ['#3B82F6', '#EF4444', '#10B981']

  return (
    <div className="p-6 space-y-8 card-glass">
      <div>
        <h2 className="mb-4 text-xl font-semibold text-3d text-primary">Performance Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#3B82F6" activeDot={{ r: 8 }} onClick={() => alert('Clicked Line!')} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h2 className="mb-4 text-xl font-semibold text-3d text-primary">User Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
              onClick={(data, index, event) => {
                const originalData = pieData[index];
                alert(`Clicked ${originalData.name}: ${originalData.value}`);
              }}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h2 className="mb-4 text-xl font-semibold text-3d text-primary">Revenue & Users</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="revenue"
              fill="#10B981"
              onClick={(data, index, event) => {
                const originalData = barData[index];
                alert(`Clicked ${originalData.name}: Revenue ${originalData.revenue}`);
              }}
            />
            <Bar
              dataKey="users"
              fill="#EF4444"
              onClick={(data, index, event) => {
                const originalData = barData[index];
                alert(`Clicked ${originalData.name}: Users ${originalData.users}`);
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ChartContainer