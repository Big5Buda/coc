import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Projects } from "@/components/projects"
import { Testimonials } from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Projects | Hinojosa Remodeling & Construction",
  description:
    "Before-and-after transformations and recent new construction, build-outs, and remodels completed across the Houston area by Hinojosa Remodeling & Construction.",
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="Projects"
        description="A look at recent work across homes, businesses, and new builds in the Houston area. Drag the sliders to see the before-and-after for yourself."
      />
      <Projects />
      <Testimonials />
    </>
  )
}
