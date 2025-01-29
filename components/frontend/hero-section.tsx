import { ArrowRight, Sparkle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import SmallTitle from "./small-title"

export default function HeroSection() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-24 text-center">
      <SmallTitle title = {"Welcome to SchoolPro"} />

      <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
        Your Complete School Management Solution
      </h1>

      <p className="mx-auto mt-8 max-w-2xl text-xl text-muted-foreground">
        From admissions to academics, simplify every aspect of school administration with our comprehensive and
        user-friendly platform.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Button size="lg" className="h-12 px-6 text-lg">
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button size="lg" variant="outline" className="h-12 px-6 text-lg">
          See All features
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}

