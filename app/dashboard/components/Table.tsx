'use client'

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Filter from './Filter'

// Define the shape of the data object
interface MetricData {
  id: number;
  date: string;
  revenue: number;
  users: number;
  performance: number;
  prediction: string;
}

// Define the props interface for the TableComponent
interface TableProps {
  data: MetricData[];
  onFilter: (params: {
    startDate?: string | undefined;
    endDate?: string | undefined;
    minRevenue?: number | undefined;
    maxRevenue?: number | undefined;
    minUsers?: number | undefined;
    maxUsers?: number | undefined;
  }) => void;
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

const TableComponent = ({ data, onFilter }: TableProps) => {
  const [localFilter, setLocalFilter] = useState<FilterParams>({
    startDate: '',
    endDate: '',
    minRevenue: undefined,
    maxRevenue: undefined,
    minUsers: undefined,
    maxUsers: undefined,
  })

  const handleLocalFilter = () => {
    onFilter({
      startDate: localFilter.startDate || undefined,
      endDate: localFilter.endDate || undefined,
      minRevenue: localFilter.minRevenue !== undefined ? parseInt(localFilter.minRevenue.toString()) : undefined,
      maxRevenue: localFilter.maxRevenue !== undefined ? parseInt(localFilter.maxRevenue.toString()) : undefined,
      minUsers: localFilter.minUsers !== undefined ? parseInt(localFilter.minUsers.toString()) : undefined,
      maxUsers: localFilter.maxUsers !== undefined ? parseInt(localFilter.maxUsers.toString()) : undefined,
    })
  }

  return (
    <div className="p-4 card-glass">
      <h2 className="mb-4 text-xl font-semibold text-3d text-primary">Metrics Overview</h2>
      <Filter
        onFilter={(filters) => {
          setLocalFilter(filters)
          handleLocalFilter()
        }}
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-primary">Date</TableHead>
            <TableHead className="text-primary">Revenue</TableHead>
            <TableHead className="text-primary">Users</TableHead>
            <TableHead className="text-primary">Performance</TableHead>
            <TableHead className="text-primary">Prediction</TableHead>
            <TableHead className="text-primary">Trend</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.slice(0, 20).map((item) => (
            <TableRow key={item.id}>
              <TableCell className="text-secondary">{item.date}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>${item.revenue}</TableCell>
              <TableCell>{item.users}</TableCell>
              <TableCell>{item.performance.toFixed(1)}%</TableCell>
              <TableCell>{item.prediction}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default TableComponent