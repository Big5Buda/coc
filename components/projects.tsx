import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { beforeAfterProjects, gallery } from "@/lib/site-config"

export function Projects() {
  return (
    <section id="projects" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="Before & After"
          description="Drag the slider to see the transformation. These are placeholder photos — swap in your own project images anytime."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {beforeAfterProjects.map((project) => (
            <BeforeAfterSlider key={project.title} {...project} />
          ))}
        </div>

        <h3 className="mt-20 text-center font-heading text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
          Recent Projects
        </h3>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item) => (
            <figure
              key={item.title}
              className="group relative aspect-[3/4] overflow-hidden rounded-md border border-border"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4">
                <span className="text-xs font-medium uppercase tracking-widest text-primary">
                  {item.category}
                </span>
                <p className="mt-1 font-heading text-lg font-semibold uppercase leading-tight text-foreground">
                  {item.title}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
