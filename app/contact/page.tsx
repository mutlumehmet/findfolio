import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 ">
      <div className="flex justify-center">
        <div className="aspect-auto h-[180px] w-[180px] rounded-full bg-[url('/images/profile-big.jpeg')] bg-contain sm:h-[240px] sm:w-[240px]" />
      </div>
      <h1 className="cta">
        CONTACT,&nbsp;
        <span className="gradient-text">I&apos;m Mehmet,&nbsp;</span>
        frontend developer with strong UI/UX background
      </h1>

      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Specialized in React and React Native{" "}
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          with a solid background in UI/UX design complemented by a firm grasp
          of modern JavaScript libraries, I engineer engaging, user-friendly
          digital interfaces for web sites, web apps and mobile apps.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
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
