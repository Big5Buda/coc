type PageHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
            <span className="h-px w-8 bg-primary" />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 font-heading text-4xl font-bold uppercase tracking-tight text-foreground text-balance sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
