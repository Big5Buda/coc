"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "@/lib/site-config"

const services = [
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Home Addition",
  "Flooring & Tile",
  "Interior / Exterior",
  "Light Commercial",
  "Other",
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  // NOTE: This form currently just shows a confirmation message.
  // Connect it to email or a backend later to actually receive leads.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    "w-full rounded-sm border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"

  return (
    <section id="contact" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-foreground text-balance sm:text-4xl">
            Request a Free Estimate
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            Tell us about your project and we&apos;ll get back to you with a free,
            no-obligation quote. We take on jobs starting at {company.minimumJob}.
          </p>

          <div className="mt-8 space-y-5">
            <ContactRow icon={<Phone className="size-5" />} label="Call Us" value={company.phone} href={company.phoneHref} />
            <ContactRow icon={<Mail className="size-5" />} label="Email Us" value={company.email} href={company.emailHref} />
            <ContactRow icon={<MapPin className="size-5" />} label="Service Area" value={company.serviceArea} />
            <ContactRow icon={<Clock className="size-5" />} label="Hours" value={company.hours} />
          </div>
        </div>

        <div className="rounded-md border border-border bg-card p-6 sm:p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <CheckCircle2 className="size-14 text-primary" />
              <h3 className="mt-4 font-heading text-2xl font-bold uppercase tracking-wide text-card-foreground">
                Thank You!
              </h3>
              <p className="mt-2 text-muted-foreground">
                We&apos;ve received your request and will reach out shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-card-foreground">
                    Full Name
                  </label>
                  <input id="name" name="name" required placeholder="John Doe" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-card-foreground">
                    Phone
                  </label>
                  <input id="phone" name="phone" type="tel" required placeholder="(713) 555-0000" className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-card-foreground">
                  Email
                </label>
                <input id="email" name="email" type="email" required placeholder="you@email.com" className={inputClass} />
              </div>

              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-card-foreground">
                  Service Needed
                </label>
                <select id="service" name="service" className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-card-foreground">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className={inputClass}
                />
              </div>

              <Button type="submit" size="lg" className="mt-2 w-full">
                Send Request
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div className="flex items-center gap-4">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
        {icon}
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="font-medium text-foreground">{value}</div>
      </div>
    </div>
  )
  return href ? (
    <a href={href} className="block transition-opacity hover:opacity-80">
      {content}
    </a>
  ) : (
    content
  )
}
