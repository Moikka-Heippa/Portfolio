import type { Project } from "../types/projects";

export const projects: Project[] = [
  {
    id: "portfolio",

    title: "Portfolio",

    description:
      "Personal portfolio website built with React.",

    image: "/images/projects/portfolio.png",

    skills: [
      {
        id: "react",
        name: "React",
        category: "Frontend",
      },
      {
        id: "typescript",
        name: "TypeScript",
        category: "Frontend",
      },
      {
        id: "css",
        name: "CSS",
        category: "Frontend",
      },
    ],

    tags: ["Web"],

    category: "Frontend",

    github: "https://github.com/Moikka-Heippa/portfolio",

    demo: "https://example.com",
  },
];