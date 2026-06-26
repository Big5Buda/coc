import { Hero } from "@/components/hero"
import { StatsBar } from "@/components/stats-bar"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { CtaBanner } from "@/components/cta-banner"

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Services />
      <Process />
      <CtaBanner />
    </>
  )
}
