import { SectionHeading } from "@/components/section-heading"
import { processSteps } from "@/lib/site-config"

export function Process() {
  return (
    <section id="process" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="Our Process"
          description="A straightforward path from first call to finished project — no surprises, just results."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.step} className="relative">
              <span className="font-heading text-6xl font-bold text-primary/20">
                {step.step}
              </span>
              <h3 className="mt-2 font-heading text-xl font-semibold uppercase tracking-wide text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
