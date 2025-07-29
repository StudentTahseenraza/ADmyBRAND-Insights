'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default function HomePage() {
  redirect('/dashboard')
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center justify-center min-h-screen bg-background"
    >
      <div className="space-y-6 text-center">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/logo.png"
            alt="ADmyBRAND Logo"
            width={100}
            height={100}
            className="mx-auto"
          />
        </motion.div>
        <h1 className="text-4xl font-bold text-foreground">
          Welcome to ADmyBRAND Insights
        </h1>
        <p className="max-w-md mx-auto text-lg text-muted-foreground">
          Unlock powerful analytics for your marketing campaigns with our AI-powered dashboard.
        </p>
        <Link href="/dashboard">
          <Button
            size="lg"
            className="transition-shadow animate-slideIn hover:shadow-lg"
          >
            Go to Dashboard
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}