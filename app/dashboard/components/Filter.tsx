'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CalendarIcon } from '@heroicons/react/24/outline'

// Define the shape of the filter parameters
interface FilterParams {
  startDate?: string;
  endDate?: string;
  minRevenue?: number;
  maxRevenue?: number;
  minUsers?: number;
  maxUsers?: number;
}

// Define the props interface for the Filter component
interface FilterProps {
  onFilter: (params: FilterParams) => void;
}

export default function Filter({ onFilter }: FilterProps) {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [minRevenue, setMinRevenue] = useState('')
  const [maxRevenue, setMaxRevenue] = useState('')
  const [minUsers, setMinUsers] = useState('')
  const [maxUsers, setMaxUsers] = useState('')

  const handleFilter = () => {
    onFilter({
      startDate,
      endDate,
      minRevenue: minRevenue ? parseInt(minRevenue) : undefined,
      maxRevenue: maxRevenue ? parseInt(maxRevenue) : undefined,
      minUsers: minUsers ? parseInt(minUsers) : undefined,
      maxUsers: maxUsers ? parseInt(maxUsers) : undefined
    })
  }

  return (
    <div className="p-4 mb-6 rounded-lg shadow-md card-quick bg-light">
      <h2 className="mb-4 text-xl font-semibold text-3d text-primary">Filters</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <label className="block text-sm text-3d text-primary">Start Date</label>
          <div className="relative">
            <input
              placeholder='Start Date'
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-2 bg-transparent border rounded-md border-secondary/50 focus:outline-none focus:border-primary text-foreground"
            />
            <CalendarIcon className="absolute w-5 h-5 text-3d right-2 top-2 text-muted-fg" />
          </div>
        </div>
        <div>
          <label className="block text-sm text-3d text-primary">End Date</label>
          <div className="relative">
            <input
              placeholder='End Date'
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full p-2 bg-transparent border rounded-md border-secondary/50 focus:outline-none focus:border-primary text-foreground"
            />
            <CalendarIcon className="absolute w-5 h-5 text-3d right-2 top-2 text-muted-fg" />
          </div>
        </div>
        <div>
          <label className="block text-sm text-3d text-primary">Min Revenue</label>
          <input
            type="number"
            value={minRevenue}
            onChange={(e) => setMinRevenue(e.target.value)}
            className="w-full p-2 bg-transparent border rounded-md border-secondary/50 focus:outline-none focus:border-primary text-foreground"
            placeholder="Min"
          />
        </div>
        <div>
          <label className="block text-sm text-3d text-primary">Max Revenue</label>
          <input
            type="number"
            value={maxRevenue}
            onChange={(e) => setMaxRevenue(e.target.value)}
            className="w-full p-2 bg-transparent border rounded-md border-secondary/50 focus:outline-none focus:border-primary text-foreground"
            placeholder="Max"
          />
        </div>
        <div>
          <label className="block text-sm text-3d text-primary">Min Users</label>
          <input
            type="number"
            value={minUsers}
            onChange={(e) => setMinUsers(e.target.value)}
            className="w-full p-2 bg-transparent border rounded-md border-secondary/50 focus:outline-none focus:border-primary text-foreground"
            placeholder="Min"
          />
        </div>
        <div>
          <label className="block text-sm text-3d text-primary">Max Users</label>
          <input
            type="number"
            value={maxUsers}
            onChange={(e) => setMaxUsers(e.target.value)}
            className="w-full p-2 bg-transparent border rounded-md border-secondary/50 focus:outline-none focus:border-primary text-foreground"
            placeholder="Max"
          />
        </div>
        <div className="flex items-end">
          <Button onClick={handleFilter} className="w-full glow text-3d">Apply</Button>
        </div>
      </div>
    </div>
  )
}