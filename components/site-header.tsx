"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { company, navLinks } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  function isActive(href: string) {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={company.name}>
          <Image
            src="/images/hinojosa-logo.png"
            alt={`${company.name} logo`}
            width={150}
            height={100}
            className="h-11 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium uppercase tracking-wide transition-colors hover:text-primary",
                isActive(link.href) ? "text-primary" : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            <Phone className="size-4 text-primary" />
            {company.phone}
          </a>
          <Button asChild>
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "border-b border-border py-3 text-sm font-medium uppercase tracking-wide transition-colors hover:text-primary",
                  isActive(link.href) ? "text-primary" : "text-muted-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={company.phoneHref}
                className="flex items-center gap-2 text-sm font-semibold text-foreground"
              >
                <Phone className="size-4 text-primary" />
                {company.phone}
              </a>
              <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Get a Free Quote
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
