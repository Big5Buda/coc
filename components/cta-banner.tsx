import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "@/lib/site-config"

export function CtaBanner() {
  return (
    <section className="bg-primary">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:text-left">
        <div>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-primary-foreground sm:text-3xl">
            Ready to Start Your Project?
          </h2>
          <p className="mt-2 text-primary-foreground/80">
            Get a free, no-obligation estimate from your local Houston builders.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <a href={company.phoneHref} className="flex items-center gap-2">
              <Phone className="size-4" />
              {company.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
