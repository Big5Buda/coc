import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Projects } from "@/components/projects"
import { CtaBanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "Projects | Hinojosa Remodeling & Construction",
  description:
    "See before-and-after transformations and recent remodeling and construction projects completed across Texas by Hinojosa Remodeling & Construction.",
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="Projects"
        description="A look at recent residential and commercial projects we've completed across Texas. Drag the sliders to see the transformation — swap in your own project photos anytime."
      />
      <Projects />
      <CtaBanner />
    </>
  )
}
