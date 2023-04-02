import type { Site, SkillIntExp, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://ivanportugal.com/",
  author: "Ivan Portugal",
  desc: "A career story",
  title: "The Story",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

interface SkillIntExpProps {
  time: string;
  skills: SkillIntExp[];
}

export const SKILLS: SkillIntExpProps[] = [
  {
    time: "2008-2010",
    skills: [
      {
        theSkill: "Java",
        interest: "10",
        expertise: "3"
      }
      // TODO this!!
    ]
  }
]

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/ivanbportugal",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ivanportugal/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:ivanbportugal@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://t.me/ivanbportugal",
    linkTitle: `${SITE.title} on Telegram`,
    active: true,
  },
];
