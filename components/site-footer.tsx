import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import { company, navLinks, services } from "@/lib/site-config"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Image
            src="/images/hinojosa-logo.png"
            alt={`${company.name} logo`}
            width={180}
            height={120}
            className="h-16 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Quality residential and commercial remodeling and construction
            serving {company.serviceArea}.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={company.social.facebook} aria-label="Facebook" className="flex h-9 items-center justify-center rounded-sm border border-border px-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              Facebook
            </a>
            <a href={company.social.instagram} aria-label="Instagram" className="flex h-9 items-center justify-center rounded-sm border border-border px-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              Instagram
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-foreground">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-foreground">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.title} className="text-sm text-muted-foreground">
                {s.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-foreground">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href={company.phoneHref} className="flex items-center gap-2 transition-colors hover:text-primary">
                <Phone className="size-4 text-primary" />
                {company.phone}
              </a>
            </li>
            <li>
              <a href={company.emailHref} className="flex items-center gap-2 transition-colors hover:text-primary">
                <Mail className="size-4 text-primary" />
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              {company.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>{company.credentials}</p>
        </div>
      </div>
    </footer>
  )
}
