import { Star, Quote } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { testimonials } from "@/lib/site-config"

export function Testimonials() {
  return (
    <section id="reviews" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it — here's what Houston homeowners and businesses have to say."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-md border border-border bg-card p-8"
            >
              <Quote className="size-8 text-primary" />
              <div className="mt-4 flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-card-foreground">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-heading text-lg font-semibold uppercase tracking-wide text-foreground">
                  {t.name}
                </div>
                <div className="text-sm text-muted-foreground">{t.location}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
