import { Skeleton } from '@/components/ui/skeleton'

export function CardSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 ">
      {[...Array(4)].map((_, i) => (
        <Skeleton key={i} className="w-full h-32" />
      ))}
    </div>
  )
}

export function ChartSkeleton() {
  return <Skeleton className="w-full h-80" />
}

export function TableSkeleton() {
  return (
    <div className="space-y-2">
      {[...Array(5)].map((_, i) => (
        <Skeleton key={i} className="w-full h-8" />
      ))}
    </div>
  )
}