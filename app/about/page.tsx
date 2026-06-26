import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { CtaBanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "About Us | Hinojosa Remodeling & Construction",
  description:
    "Houston-based, family-run remodeling and construction serving all of Texas. Learn what makes Hinojosa Remodeling & Construction a trusted choice, and read what our clients say.",
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who We Are"
        title="About Us"
        description="Houston-based and proudly serving homeowners and businesses across Texas with quality craftsmanship you can trust."
      />
      <About />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
