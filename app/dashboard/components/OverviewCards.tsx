'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  CurrencyDollarIcon, 
  UserGroupIcon, 
  ChartBarIcon, 
  ArrowUpRightIcon 
} from '@heroicons/react/24/outline'

// Define the shape of the metrics object
interface MetricData {
  id: number;
  date: string;
  revenue: number;
  users: number;
  performance: number;
  prediction: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, rotateX: 15 },
  visible: { opacity: 1, y: 0, rotateX: 0 }
}

export default function OverviewCards({ metrics }: { metrics: MetricData }) {
  const cards = [
    { title: 'Revenue', value: `$${metrics.revenue}`, change: `${metrics.prediction === 'Growth' ? '+5%' : '0%'}` },
    { title: 'Users', value: metrics.users, change: `${metrics.prediction === 'Growth' ? '+3%' : '0%'}` },
    { title: 'Performance', value: `${metrics.performance.toFixed(1)}%`, change: `${metrics.prediction === 'Growth' ? '+2%' : '0%'}` },
    { title: 'Trend', value: metrics.prediction, change: '' }
  ]
  const icons = [
    CurrencyDollarIcon,
    UserGroupIcon,
    ChartBarIcon,
    ArrowUpRightIcon
  ]

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, index) => {
        const Icon = icons[index]
        return (
          <motion.div
            key={card.title}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            <Card className="h-full card-glass">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium text-3d" style={{ color: 'var(--card-fg)' }}>{card.title}</CardTitle>
                <Icon className="w-6 h-6 text-3d" style={{ color: 'var(--muted-fg)' }} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-3d" style={{ color: 'var(--card-fg)' }}>{card.value}</div>
                <p className="text-xs text-3d" style={{ color: 'var(--muted-fg)' }}>{card.change}</p>
              </CardContent>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}