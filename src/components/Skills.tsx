

type Tech = {
  name: string;
  image: string;
};

const technologies: Tech[] = [
  { name: "HTML", image: "public/skills/Html-logo.svg" },
  { name: "CSS", image: "public/skills/Css-logo.svg" },
  { name: "Javascript", image: "public/skills/Javascript-logo.svg" },
  { name: "Typescript", image: "public/skills/Typescript-logo.svg" },
  { name: "React", image: "public/skills/React-logo.svg" },
  { name: "Tailwind", image: "public/skills/TailwindCSS-logo.svg" },
  { name: "Nodejs", image: "public/skills/Nodejs-logo.svg" },
  { name: "Express", image: "public/skills/ExpressJS-logo.svg" },
  { name: "Mongodb", image: "public/skills/MongoDB-logo.svg" },
  { name: "Postgresql", image: "public/skills/PostgreSQL-logo.svg" },
  { name: "Postman", image: "public/skills/Postman-logo.svg" },
  { name: "Jest", image: "public/skills/Jest-logo.svg" },
  { name: "Mysql", image: "public/skills/MySQL-logo.svg" },
  { name: "Git", image: "public/skills/Git-logo.svg" },
  { name: "Zod", image: "public/skills/Zod-logo.svg" },
  { name: "Zustand", image: "public/skills/Zustand-logo.svg" },
  { name: "Netlify", image: "public/skills/Netlify-logo.svg" },
  { name: "Vite", image: "public/skills/Vite-logo.svg" },
  { name: "Vercel", image: "public/skills/Vercel-logo.svg" },
];

const Technologies: React.FC = () => {
  return (
    <section
      id="tecnologias"
      className="w-full bg-slate-900 text-white py-12"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold mb-8">
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
