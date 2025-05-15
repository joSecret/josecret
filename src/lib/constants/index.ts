import LinkedinIcon from '@/components/ui/icons/linkedin.astro'
import DrupalIcon from '@/components/ui/icons/drupal.astro'
import GithubIcon from '@/components/ui/icons/github.astro'

export const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Articles",
    href: "/articles",
  },
  {
    label: "Projects",
    href: "/projects",
  },
] as const;

export const SOCIAL_LINKS = [
  {
    name: 'Drupal',
    icon: DrupalIcon,
    url: "https://www.drupal.org/u/jonsecret",
  },
  {
    name: 'Github',
    icon: GithubIcon,
    url: "https://github.com/joSecret",
  },
  {
    name: 'Linkedin',
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/ion-obreja/",
  },
];
