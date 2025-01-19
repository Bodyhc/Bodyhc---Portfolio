import {
  SiCss3,
  SiFramer,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiNeovim,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
  {
    id: 0,
    name: "DARK MODE LIBRARY",
    description:
      "A simple JavaScript library to toggle between dark and light modes on your website with customizable colors, transitions, and more.",
    technologies: [SiCss3, SiJavascript],
    techNames: ["Css", "JS"],
    techLinks: [
      "https://developer.mozilla.org/en-US/docs/Web/CSS",
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    ],
    github: "https://github.com/Bodyhc/dark-mode-library.git",
    demo: "https://github.com/Bodyhc/dark-mode-library.git",
    image: "/projects/dark.png",
    available: true,
  },
  {
    id: 1,
    name: "Laravel Security Scanner",
    description:
      "This project enhances the security of Laravel applications by introducing a middleware that detects and prevents SQL Injection, XSS, and CSRF attacks.",
    technologies: [SiPhp, SiLaravel],
    techNames: ["PHP", "laravel"],
    techLinks: [
      "https://developer.mozilla.org/en-US/docs/Glossary/php",
      "https://laravel.com/",
    ],
    github: "https://github.com/Bodyhc/Laravel-SecurityScanner.git",
    demo: "https://github.com/Bodyhc/Laravel-SecurityScanner.git",
    image: "/projects/laravel.png",
    available: true,
  },

  {
    id: 2,
    name: "SHOP BO",
    description: "FIND CLOTHES THAT MATCHES YOUR STYLE",
    technologies: [SiHtml5, SiCss3, SiJavascript, SiTailwindcss],
    techNames: ["Html", "css", "JS", "Tailwind CSS"],
    techLinks: [
      "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
      "https://developer.mozilla.org/en-US/docs/Web/CSS",
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      "https://tailwindcss.com/",
    ],
    github: "https://github.com/Bodyhc/Ecommerce-website.git",
    demo: "https://ecommerceclothesshop.netlify.app/",
    image: "/projects/proj1.png",
    available: true,
  },
  {
    id: 3,
    name: "Tech Store",
    description:
      "TechStore is a simple e-commerce store that showcases and sells tech gadgets.",
    technologies: [
      SiHtml5,
      SiCss3,
      SiReact,
      SiVite,
      SiTypescript,
      SiTailwindcss,
    ],
    techNames: ["Html", "Css", "React", "Vite", "TypeScript", "Tailwindcss"],
    techLinks: [
      "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
      "https://developer.mozilla.org/en-US/docs/Web/CSS",
      "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started",
      "https://vite.dev/",
      "https://developer.mozilla.org/en-US/docs/Glossary/TypeScript",
      "https://tailwindcss.com/",
    ],
    github: "https://github.com/Bodyhc/Ecommerce-react-vite.git",
    demo: "https://tech-store-bodyhc.netlify.app/",
    image: "/projects/techstore.png",
    available: true,
  },

  {
    id: 4,
    name: "FIND TREND",
    description: "Minimize your tabs.Find the trends!.",
    technologies: [SiHtml5, SiCss3, SiJavascript],
    techNames: ["Html", "Css", "JS"],
    techLinks: [
      "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
      "https://developer.mozilla.org/en-US/docs/Web/CSS",
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    ],
    github: "https://github.com/Bodyhc/Findtrend.git",
    demo: "https://findtr3nd.netlify.app/",
    image: "/projects/proj2.png",
    available: true,
  },
  {
    id: 5,
    name: "CAR DASHBOARD",
    description: "Control panel to know all the details of the car.",
    technologies: [SiHtml5, SiCss3, SiJavascript],
    techNames: ["Html", "Css", "JS", "ThreeJs"],
    techLinks: [
      "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
      "https://developer.mozilla.org/en-US/docs/Web/CSS",
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    ],
    github: "https://github.com/Bodyhc/CarDashboard.git",
    demo: "https://cardas7board.netlify.app/",
    image: "/projects/proj3.png",
    available: true,
  },
];
