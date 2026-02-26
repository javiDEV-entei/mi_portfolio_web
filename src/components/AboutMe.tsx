// src/components/AboutMe.tsx
import React from "react";

const AboutMe: React.FC = () => {
  
  return (
    <section
      id="sobre-mi"
      className="w-full bg-slate-900 text-white py-12 dark:bg-slate-50 dark:text-slate-900"
    >
      <h1 className="mx-auto max-w-xs text-4xl md:text-5xl font-black uppercase text-white dark:text-slate-900 mb-2">
      JAVIER OLIVERA
    </h1>
    <p className="mx-auto max-w-xs text-lg md:text-xl font-thin text-slate-400 dark:text-slate-600 mb-20">
      desarrollador FullStack
    </p>
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* IZQUIERDA: descripción + redes */}
        <div className="space-y-6">
          {/* Descripción */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Una breve introducción sobre mí</h2>
            <p className="text-xl text-slate-300 dark:text-slate-700 leading-relaxed">
              Hola, mi nombre es Javier Olivera.
              Soy desarrollador web full stack con 2 años de experiencia en la creación de páginas y aplicaciones web.
              Cuento con conocimiento y práctica en algunas de las tecnologías más usadas, como <span className=" font-bold">HTML, CSS, JavaScript, TypeScript, React</span>, entre otras.
              Te invito a seguir viendo mi portfolio para conocer el stack completo de tecnologías que manejo y algunos de los proyectos que he creado.
                          </p>
          </div>

          {/* Redes sociales */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-900">
              Contacta conmigo
            </h3>
            <div className="flex flex-wrap gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/javier-olivera-0b1066271/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 hover:bg-sky-500 transition-colors"
              >
                <img
                  src="/aboutMe/LinkedIn-logo.svg"
                  alt="LinkedIn"
                  className="h-7 w-7"
                />
              </a>

              {/*Email*/}
              <a
                href="#contacto"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 hover:bg-sky-500 transition-colors"
              >
                <img
                  src="/aboutMe/Email-logo.svg"
                  alt="email"
                  className="h-7 w-7"
                />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/javiDEV-entei"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 hover:bg-sky-500 transition-colors"
              >
                <img
                  src="/aboutMe/Github-Dark-logo.svg"
                  alt="GitHub"
                  className="h-7 w-7"
                />
              </a>

              {/* Agrega más redes si quieres */}
            </div>
          </div>
        </div>

        {/* DERECHA: foto circular con fondo difuminado */}
        <div className="relative flex justify-center">
          {/* Fondo difuminado detrás de la foto */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-40 w-40 rounded-full bg-sky-500/40 blur-3xl" />
          </div>

          {/* Contenedor de la foto */}
          <div className="relative h-50 w-50 rounded-full overflow-hidden ring-4 ring-sky-500/60 shadow-xl">
            <img
              src="/aboutMe/foto-portfolio.jpg" // reemplaza con tu ruta
              alt="Foto de Javier Olivera"
              className="h-full w-full object-cover object-[50%_20%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
