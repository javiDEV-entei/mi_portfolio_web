import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    translationKey: 'freshCoffee',
    image: "/projects/img-proyecto-1.png",
    productionUrl:"https://quiosco-nextjs-prisma-wheat.vercel.app/",
    technologies: [
      "TypeScript",
      "NextJs",
      "ReactJS",
      "TailwindCSS",
      "Prisma ORM",
      "Zod",
    ],
    
  },
  {
    id: 2,
    translationKey: 'upTask',
    image: "/projects/img-proyecto-2.png",
    productionUrl:"https://javi-dev-entei-uptask-admin-de-proy.vercel.app/",
    technologies: [
      "TypeScript",
      "Creacion de API REST",
      "ReactJS",
      "TailwindCSS",
      "NodeJs",
      "Express",
      "MongoDB",
      "Mongoose",
    ],
    
  },
  {
    id: 3,
   translationKey: 'expensePlanner',
    image: "/projects/img-proyecto-3.png",
    productionUrl: "https://jade-quokka-bb99ad.netlify.app/",
    technologies: [
      "TypeScript",
      "ReactJs",
      "HeadLess UI",
      "TailwindCSS",
      "React-swipeable-list",
    ],
    
  },
  {
    id: 4,
    translationKey: 'cocktailRecipes',
    image: "/projects/img-proyecto-4.png",
    productionUrl: "https://buscadodebebidastsreact.netlify.app/",
    technologies: [
      "TypeScript",
      "ReactJs",
      "React-Router",
      "TailwindCSS",
      "Zustand",
      "Consumo de APIs externas",
    ],
    
  },
];