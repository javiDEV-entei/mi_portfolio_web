

type Tech = {
  name: string;
  image: string;
};

const technologies: Tech[] = [
  { name: "HTML", image: "/skills/Html-logo.svg" },
  { name: "CSS", image: "/skills/Css-logo.svg" },
  { name: "Javascript", image: "/skills/Javascript-logo.svg" },
  { name: "Typescript", image: "/skills/TypeScript-logo.svg" },
  { name: "React", image: "/skills/React-logo.svg" },
  { name: "Tailwind", image: "/skills/TailwindCSS-logo.svg" },
  { name: "Nodejs", image: "/skills/Nodejs-logo.svg" },
  { name: "Express", image: "/skills/ExpressJS-logo.svg" },
  { name: "Mongodb", image: "/skills/MongoDB-logo.svg" },
  { name: "Postgresql", image: "/skills/PostgreSQL-logo.svg" },
  { name: "Postman", image: "/skills/Postman-logo.svg" },
  { name: "Jest", image: "/skills/Jest-logo.svg" },
  { name: "Mysql", image: "/skills/MySQL-logo.svg" },
  { name: "Git", image: "/skills/Git-logo.svg" },
  { name: "Zod", image: "/skills/Zod-logo.svg" },
  { name: "Zustand", image: "/skills/Zustand-logo.svg" },
  { name: "Netlify", image: "/skills/Netlify-logo.svg" },
  { name: "Vite", image: "/skills/Vite-logo.svg" },
  { name: "Vercel", image: "/skills/Vercel-logo.svg" },
];

const Technologies: React.FC = () => {
  return (
    <section
      id="tecnologias"
      className="w-full bg-slate-900 text-white py-12 dark:bg-slate-50 dark:text-slate-900"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className=" text-center text-2xl font-semibold mb-8">
          Tecnologías con las que he trabajado
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech) => (
            <article
              key={tech.name}
              className="flex flex-col items-center rounded-xl bg-slate-800/70 p-4 shadow-md
                         transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-700/80"
            >
              <div className="mb-3 flex h-16 w-16 items-center justify-center">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-100 text-center">
                {tech.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
