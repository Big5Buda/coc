import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { About } from "@/components/about"

export const metadata: Metadata = {
  title: "About Us | Hinojosa Remodeling & Construction",
  description:
    "Houston-based, family-run construction and remodeling serving homeowners, businesses, and beyond across Texas. Learn what makes Hinojosa Remodeling & Construction a trusted choice.",
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who We Are"
        title="About Us"
        description="Houston-based, licensed, and built on doing the job right the first time — for homeowners and businesses alike."
      />
      <About />
    </>
  )
}
