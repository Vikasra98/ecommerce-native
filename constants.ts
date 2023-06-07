// Copyright Vikas Ranjan 2023. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/vikas-ranjan-4a83aa165/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Vikas Ranjan",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://vikasranjan.net/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern frontend apps",
  "I design dynamic user experience",
  "I design and develop dynamic UX",
];

export const EMAIL = "vikasranjan783@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/vikas-ranjan-4a83aa165/",
  github: "https://github.com/Vikasra98",
  instagram: "https://www.instagram.com/vikas_ranjan_/",
  facebook: "https://www.facebook.com/vikas.ranjan.9659/",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "FVB - Fashion Blog Site",
    image: "/projects/fvb.png",
    blurImage: "/projects/blur/fvb-blur.png",
    description: "Pixel perfect HTML/CSS layout designs.",
    gradient: ["#ea2f0dad", "#e5e5e9"],
    url: "https://fvb.netlify.app/",
    tech: ["html", "css", "bootstrap"],
  },
  {
    name: "PORTO Website - E-commerce",
    image: "/projects/porto.png",
    blurImage: "/projects/blur/porto-blur.png",
    description: "E-commerce site for by PORTO",
    gradient: ["#0fa9e7", "#53bbda80"],
    url: "https://portoshopping.netlify.app/",
    tech: ["html", "css", "bootstrap", "figma"],
  },
  {
    name: "ILearn Learning Website",
    image: "/projects/ilearn.png",
    blurImage: "/projects/blur/ilearn.png",
    description: "Learning site with a figma design from scratch",
    gradient: ["#245B57", "#004741"],
    url: "https://ilearning.netlify.app/",
    tech: ["figma", "html", "css","bootstrap"],
  },
  {
    name: "Pandora",
    image: "/projects/pandora.png",
    blurImage: "/projects/blur/pandora-blur.png",
    description: "Built the application from zero to production 🚀",
    gradient: ["#003052", "#167187"],
    url: "https://pandora-web.netlify.app/",
    tech: ["html", "tailwind", "react", "figma"],
  },
  {
    name: "My Mind",
    image: "/projects/mind.png",
    blurImage: "/projects/blur/mind-blur.png",
    description: "Mind Therapist project from scratch in React",
    gradient: ["#09c5a3", "#32562b"],
    url: "https://mymindweb.onrender.com/",
    tech: ["npm", "react", "typescript", "javascript", "git"],
  },
  {
    name: "Startup landing",
    image: "/projects/startup.png",
    blurImage: "/projects/blur/startup-blur.png",
    description: "Startup Landing page for alpha agency.",
    gradient: ["#333", "#ffbb4c"],
    url: "https://alpha-agency-project.vercel.app/",
    tech: ["javascript", "sass", "svg", "react", "git"],
  },
  {
    name: "Academia Learning",
    image: "/projects/academia.png",
    blurImage: "/projects/blur/academia-blur.png",
    description: "Designed and developed the learning platform",
    gradient: ["#1eb2a6", "#334659"],
    url: "https://educational-website-reactjs.netlify.app/",
    tech: ["typescript", "javascript", "react", "next"],
  },
  {
    name: "FS Poster - Poster Web App",
    image: "/projects/poster.png",
    blurImage: "/projects/blur/poster-blur.png",
    description: "Blog poster from scratch. 🔥",
    gradient: ["#ea575c", "#1c5ae3"],
    url: "https://fs-poster-project.vercel.app/",
    tech: ["javascript", "html", "css", "react"],
  }
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "tailwind",
    "sass",
    "html",
    "css",
    "boot"
  ],
  // userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  other: ["git"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend Developer (Current)",
    size: ItemSize.SMALL,
    subtitle: "Frontend Developer @ core team",
    image: "/timeline/shivahwebtechlogo.png",
    slideImage: "/timeline/shivahwebtech.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Front-End Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Contributed to Server driven UI framework for powering experiences @ UIMATIC 😎",
    image: "/timeline/uimaticLogo1.png",
    slideImage: "/timeline/uimaticLogo.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Web Designer",
    size: ItemSize.SMALL,
    subtitle:
      "Built designs for site engagement, productivity and performance 🎯",
    image: "/timeline/invescaLogo.png",
    slideImage: "/timeline/invescaSide.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Web Designer (Invesca)",
    size: ItemSize.SMALL,
    subtitle: "Web Designer content for Product Launch 🚀",
    image: "/timeline/invescaLogo.png",
    slideImage: "/timeline/porto.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Web Designer Trainee",
    size: ItemSize.SMALL,
    subtitle:
      "Worked on a demo prject as a web designer.",
    image: "/timeline/invescaLogo.png",
    slideImage: "/timeline/fvb.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  }
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
