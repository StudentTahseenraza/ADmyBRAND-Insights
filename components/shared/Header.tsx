'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { 
  ChartBarIcon, 
  DocumentTextIcon, 
  CogIcon 
} from '@heroicons/react/24/outline'

export function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 h-20 shadow-lg bg-background/80 backdrop-blur-md" /* Fixed height */
    >
      <div className="container flex flex-col items-center justify-between h-full px-4 py-2 mx-auto sm:flex-row">
        <div className="flex items-center flex-shrink-0 gap-2">
          {/* Text-based logo (or placeholder) */}
          <img 
            src="/logo.png" 
            alt="ADmyBRAND Logo" 
            width={40} 
            height={40} 
            className="object-contain"
          />
          <span className="text-2xl font-bold text-3d text-primary">ADmyBRAND</span>
          <h1 className="text-2xl font-bold text-3d text-foreground">Insights</h1>
        </div>
        <div className="flex-1 w-full mt-2 sm:w-auto sm:mt-0">
          <div className="h-10 p-2 overflow-hidden rounded-lg bg-primary/20" /* Constrained banner height */>
            <motion.div
              className="flex items-center gap-2 text-xs marquee sm:text-sm text-foreground"
              animate={{ x: ['100%', '-100%'] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              style={{ whiteSpace: 'nowrap', lineHeight: '1.5' }}
            >
              <span>What is it? <ChartBarIcon className="inline-block w-4 h-4 text-3d" /> AI-powered analytics.</span>
              <span>How to use? <DocumentTextIcon className="inline-block w-4 h-4 text-3d" /> Navigate, export, toggle.</span>
              <span>Why use? <CogIcon className="inline-block w-4 h-4 text-3d" /> Optimize campaigns.</span>
            </motion.div>
          </div>
        </div>
        <nav className="flex gap-2 mt-2 sm:mt-0">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="text-3d text-primary">Dashboard</Button>
          </Link>
          <Link href="/reports">
            <Button variant="ghost" size="sm" className="text-3d text-primary">Reports</Button>
          </Link>
          <Link href="/settings">
            <Button variant="ghost" size="sm" className="text-3d text-primary">Settings</Button>
          </Link>
        </nav>
      </div>
    </motion.header>
  )
}