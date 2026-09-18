// Next.js otomatis menampilkan file ini sebagai fallback <Suspense>
// selama Server Component di dalam segmen (dashboard) masih menunggu data
// (mis. fetch di ShipmentsPage / AnalyticsPage). Tidak perlu dipanggil manual.
function SkeletonBlock({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-md bg-muted ${className}`} />;
}

export default function DashboardLoading() {
  return (
    <div className="space-y-6">
      <SkeletonBlock className="h-6 w-40" />

      <div className="rounded-lg border border-border">
        <div className="border-b border-border bg-muted/60 p-3">
          <SkeletonBlock className="h-4 w-full max-w-md" />
        </div>
        <div className="divide-y divide-border">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex gap-4 p-4">
              <SkeletonBlock className="h-4 w-24" />
              <SkeletonBlock className="h-4 w-32" />
              <SkeletonBlock className="h-4 w-28" />
              <SkeletonBlock className="h-4 w-16" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
