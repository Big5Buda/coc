import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
          <span className="h-px w-8 bg-primary" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-heading text-3xl font-bold uppercase tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      )}
    </div>
  )
}
