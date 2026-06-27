"use client"

import { useRef, useState, useCallback } from "react"
import Image from "next/image"
import { MoveHorizontal } from "lucide-react"

type BeforeAfterSliderProps = {
  before: string
  after: string
  title: string
  category: string
}

export function BeforeAfterSlider({
  before,
  after,
  title,
  category,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, pct)))
  }, [])

  return (
    <figure className="overflow-hidden rounded-md border border-border bg-card">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full cursor-ew-resize select-none"
        onPointerDown={(e) => {
          dragging.current = true
          ;(e.target as Element).setPointerCapture?.(e.pointerId)
          updateFromClientX(e.clientX)
        }}
        onPointerMove={(e) => {
          if (dragging.current) updateFromClientX(e.clientX)
        }}
        onPointerUp={() => {
          dragging.current = false
        }}
      >
        {/* After (base) */}
        <Image src={after} alt={`${title} — after`} fill className="object-cover" />
        <span className="absolute right-3 top-3 rounded-sm bg-primary px-2 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
          After
        </span>

        {/* Before (clipped via clip-path so fill image stays full-width) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={before}
            alt={`${title} — before`}
            fill
            className="object-cover"
          />
          <span className="absolute left-3 top-3 rounded-sm bg-foreground/80 px-2 py-1 text-xs font-bold uppercase tracking-wide text-background">
            Before
          </span>
        </div>

        {/* Handle */}
        <div
          className="absolute inset-y-0 z-10 w-0.5 bg-primary"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
            <MoveHorizontal className="size-5" />
          </div>
        </div>
      </div>
      <figcaption className="flex items-center justify-between p-4">
        <span className="font-heading text-lg font-semibold uppercase tracking-wide text-card-foreground">
          {title}
        </span>
        <span className="text-xs font-medium uppercase tracking-widest text-primary">
          {category}
        </span>
      </figcaption>
    </figure>
  )
}
