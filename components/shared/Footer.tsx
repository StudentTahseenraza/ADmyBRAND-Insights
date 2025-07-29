'use client'

import { motion } from 'framer-motion'

export function Footer() { // Named export added
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-4 mt-auto border-t bg-background"
    >
      <div className="container px-4 mx-auto text-sm text-center text-muted-foreground">
        &copy; {new Date().getFullYear()} ADmyBRAND. All rights reserved.
      </div>
    </motion.footer>
  )
}