import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function SettingsLoading() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <Skeleton className="h-10 w-[150px]" />
      </div>

      <Skeleton className="h-10 w-full" />

      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-[200px] mb-2" />
          <Skeleton className="h-4 w-[300px]" />
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Skeleton className="h-6 w-[150px]" />
            <div className="grid gap-6 md:grid-cols-2">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
            <Skeleton className="h-24 w-full" />
            <div className="grid gap-6 md:grid-cols-2">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>

          <Skeleton className="h-1 w-full" />

          <div className="space-y-4">
            <Skeleton className="h-6 w-[150px]" />
            <div className="grid gap-6 md:grid-cols-2">
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-32 w-full" />
            </div>
          </div>

          <div className="flex justify-end">
            <Skeleton className="h-10 w-[120px]" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

