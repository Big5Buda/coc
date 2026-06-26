import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Contact } from "@/components/contact"

export const metadata: Metadata = {
  title: "Contact | Hinojosa Remodeling & Construction",
  description:
    "Request a free, no-obligation estimate from Hinojosa Remodeling & Construction. Based in Houston and serving all of Texas. Call or fill out the form to get started.",
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Tell us about your project and we'll get back to you with a free estimate. Based in Houston, serving all of Texas."
      />
      <Contact />
    </>
  )
}
