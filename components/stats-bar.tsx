import { stats } from "@/lib/site-config"

export function StatsBar() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="py-8 text-center">
            <div className="font-heading text-4xl font-bold text-primary sm:text-5xl">
              {stat.value}
            </div>
            <div className="mt-2 text-xs font-medium uppercase tracking-widest text-muted-foreground sm:text-sm">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
