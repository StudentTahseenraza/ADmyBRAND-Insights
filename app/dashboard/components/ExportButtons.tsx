'use client'

import { Button } from '@/components/ui/button'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

// Reuse the MetricData interface from ChartContainer.tsx
interface MetricData {
  id: number;
  date: string;
  revenue: number;
  users: number;
  performance: number;
  prediction: string;
}

const ExportButtons = ({ data }: { data: MetricData }) => {
  const exportToPDF = () => {
    const doc = new jsPDF()
    doc.text('ADmyBRAND Insights Report', 10, 10)
    autoTable(doc, {
      head: [['Metric', 'Value', 'Prediction']],
      body: [
        ['Revenue', `$${data.revenue}`, data.prediction],
        ['Users', data.users, data.prediction],
        ['Performance', `${data.performance.toFixed(1)}%`, data.prediction]
      ]
    })
    doc.save('admybrand-insights-report.pdf')
  }

  return (
    <Button onClick={exportToPDF} className="text-3d">Export PDF</Button>
  )
}

export default ExportButtons