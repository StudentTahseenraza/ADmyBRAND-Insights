'use client'

import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark')
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="transition-colors hover:bg-secondary/20 glow text-3d"
    >
      {theme === 'dark' ? (
        <SunIcon className="w-4 h-4 text-3d" />
      ) : theme === 'light' ? (
        <MoonIcon className="w-4 h-4 text-3d" />
      ) : (
        <span className="text-xs">Auto</span>
      )}
    </Button>
  )
}