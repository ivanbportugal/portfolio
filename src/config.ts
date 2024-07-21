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
        expertise: "3",
      },
      {
        theSkill: "DevOps",
        interest: "10",
        expertise: "7",
      },
      {
        theSkill: "C#, .NET",
        interest: "1",
        expertise: "0",
      },
      {
        theSkill: "SQL",
        interest: "3",
        expertise: "3",
      },
      {
        theSkill: "JavaScript",
        interest: "8",
        expertise: "5",
      },
    ],
  },
  {
    time: "2011-2014",
    skills: [
      {
        theSkill: "Java",
        interest: "10",
        expertise: "7",
      },
      {
        theSkill: "DevOps",
        interest: "10",
        expertise: "8",
      },
      {
        theSkill: "C#, .NET",
        interest: "2",
        expertise: "1",
      },
      {
        theSkill: "SQL",
        interest: "4",
        expertise: "4",
      },
      {
        theSkill: "JavaScript",
        interest: "10",
        expertise: "6",
      },
      {
        theSkill: "SPAs",
        interest: "10",
        expertise: "5",
      },
    ],
  },
  {
    time: "2015-2019",
    skills: [
      {
        theSkill: "Spring Boot",
        interest: "9",
        expertise: "8",
      },
      {
        theSkill: "DevOps",
        interest: "9",
        expertise: "9",
      },
      {
        theSkill: "C#, .NET",
        interest: "9",
        expertise: "6",
      },
      {
        theSkill: "NodeJS",
        interest: "7",
        expertise: "8",
      },
      {
        theSkill: "SQL",
        interest: "6",
        expertise: "6",
      },
      {
        theSkill: "TypeScript",
        interest: "10",
        expertise: "8",
      },
      {
        theSkill: "SPAs",
        interest: "10",
        expertise: "8",
      },
    ],
  },
  {
    time: "2019-2022",
    skills: [
      {
        theSkill: "Spring Boot",
        interest: "9",
        expertise: "9",
      },
      {
        theSkill: "DevOps",
        interest: "9",
        expertise: "9",
      },
      {
        theSkill: "C#, .NET",
        interest: "9",
        expertise: "8",
      },
      {
        theSkill: "NextJS, React",
        interest: "10",
        expertise: "8",
      },
      {
        theSkill: "SQL",
        interest: "6",
        expertise: "8",
      },
      {
        theSkill: "TypeScript",
        interest: "10",
        expertise: "9",
      },
      {
        theSkill: "Python",
        interest: "8",
        expertise: "7",
      },
      {
        theSkill: "Event-Driven Arch",
        interest: "10",
        expertise: "5",
      },
    ],
  },
  {
    time: "2022-2024",
    skills: [
      {
        theSkill: "Spring Boot",
        interest: "9",
        expertise: "9",
      },
      {
        theSkill: "Kafka",
        interest: "10",
        expertise: "7",
      },
      {
        theSkill: "Flutter",
        interest: "10",
        expertise: "6",
      },
      {
        theSkill: "React, Vue",
        interest: "10",
        expertise: "8",
      },
      {
        theSkill: "SQL",
        interest: "6",
        expertise: "8",
      },
      {
        theSkill: "TypeScript",
        interest: "10",
        expertise: "9",
      },
      {
        theSkill: "Python",
        interest: "9",
        expertise: "7",
      },
      {
        theSkill: "C#, .NET",
        interest: "3",
        expertise: "8",
      },
    ],
  },
];

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
