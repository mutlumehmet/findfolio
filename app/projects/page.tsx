"use client"

import Link from "next/link"
import workingAnimation from "@/public/working3.json"
import Lottie from "lottie-react"

import { siteConfig } from "@/config/site"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"

export default function ProjectsPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 ">
      <div className="flex justify-center">
        <div className="w-[200px] sm:w-[300px]">
          <Lottie animationData={workingAnimation} loop={true} />
        </div>
      </div>

      <h1 className="cta">
        PROJECTS...&nbsp;
        <br />
        <p className="gradient-text leading-tight">Adding soon</p>
      </h1>
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          You will soon find the projects I have worked on here
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          I will be sharing challanges I have faced while working and my
          detailed approaches on them and how I have solved them.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.cv}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Download CV
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
    </section>
  )
}
