// @ts-expect-error: importing .astro component into a .ts file has no TS types
import LinkedinIcon from '@/components/ui/icons/linkedin.astro'
// @ts-expect-error: importing .astro component into a .ts file has no TS types
import XIcon from '@/components/ui/icons/x.astro'
// @ts-expect-error: importing .astro component into a .ts file has no TS types
import GithubIcon from '@/components/ui/icons/github.astro'


export const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "Projects",
    href: "/projects",
  }
] as const;

export const SOCIAL_LINKS = [
  {
    name: 'Github',
    icon: GithubIcon,
    url: "https://github.com/thbappy7706",
  },
  {
    name: 'Linkedin',
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/tanvir-hossen-bappy/",
  },
  {
    name: 'X',
    icon: XIcon,
    url: "https://x.com/bappy7706",
  },
];