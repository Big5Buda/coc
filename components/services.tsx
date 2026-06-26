import {
  ChefHat,
  ShowerHead,
  Home,
  LayoutGrid,
  PaintRoller,
  Building2,
  type LucideIcon,
} from "lucide-react"
import { services } from "@/lib/site-config"
import { SectionHeading } from "@/components/section-heading"

const iconMap: Record<string, LucideIcon> = {
  ChefHat,
  ShowerHead,
  Home,
  LayoutGrid,
  PaintRoller,
  Building2,
}

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Services"
          description="Residential and light commercial remodeling and construction across Houston. We take on projects starting at $5,000 and up."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Home
            return (
              <div
                key={service.title}
                className="group bg-card p-8 transition-colors hover:bg-secondary"
              >
                <div className="flex size-12 items-center justify-center rounded-sm bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold uppercase tracking-wide text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
