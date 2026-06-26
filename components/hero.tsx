import Image from "next/image"
import Link from "next/link"
import { Phone, ShieldCheck, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "@/lib/site-config"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-construction.png"
          alt="Hinojosa construction crew working on a home remodel"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-sm border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            <MapPin className="size-3.5" />
            {company.serviceArea}
          </span>

          <h1 className="mt-6 font-heading text-4xl font-bold uppercase leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            Building & Remodeling{" "}
            <span className="text-primary">Done Right</span> in Houston
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            From kitchen and bath remodels to home additions and light
            commercial buildouts — Hinojosa Remodeling &amp; Construction
            delivers quality craftsmanship you can count on. Licensed, insured,
            and proudly local.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="text-base">
              <Link href="/contact">Get Your Free Estimate</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base">
              <a href={company.phoneHref} className="flex items-center gap-2">
                <Phone className="size-4" />
                {company.phone}
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-primary" />
              {company.credentials}
            </span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span>Free, no-obligation estimates</span>
          </div>
        </div>
      </div>
    </section>
  )
}
