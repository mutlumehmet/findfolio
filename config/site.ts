export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "findmutlu",
  description: "Mehmet Mutlu, frontend developer with strong UI/UX background",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/findmutlu",
    github: "https://github.com/mutlumehmet",
    linkedin: "https://www.linkedin.com/in/mehmet-mutlu-03aa7319a/",
    docs: "https://ui.shadcn.com",
    cv: "/Mehmet Mutlu CV 2023.pdf",
  },
}
