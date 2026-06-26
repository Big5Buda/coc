import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "@/lib/site-config"

const reasons = [
  "Licensed & fully insured for your protection",
  "Clear, itemized estimates with no hidden fees",
  "Quality materials and skilled, on-time crews",
  "Clean job sites and respectful, local team",
  "Backed by our workmanship guarantee",
  "Free, no-obligation consultations",
]

export function About() {
  return (
    <section id="about" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border">
          <Image
            src="/images/living-project.png"
            alt="A finished Hinojosa remodeling project"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 m-4 rounded-md bg-primary px-5 py-4 text-primary-foreground">
            <div className="font-heading text-3xl font-bold">10+</div>
            <div className="text-xs font-semibold uppercase tracking-widest">
              Years Serving Houston
            </div>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
            <span className="h-px w-8 bg-primary" />
            Why Choose Us
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold uppercase tracking-tight text-foreground text-balance sm:text-4xl">
            Built on Craftsmanship &amp; Trust
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            {company.shortName} Remodeling &amp; Construction is a Houston-based
            team focused on doing quality work the right way. Whether it&apos;s a
            kitchen refresh, a full home renovation, or a small commercial
            buildout, we treat every project like it&apos;s our own home. We
            currently take on residential and smaller commercial jobs starting at{" "}
            {company.minimumJob}, and we&apos;re growing toward larger commercial
            work.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-foreground">
                  {reason}
                </span>
              </li>
            ))}
          </ul>

          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
