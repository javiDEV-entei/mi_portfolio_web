// src/components/AboutMe.tsx
import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section
      id="sobre-mi"
      className="w-full bg-slate-900 text-white py-12"
    >
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* IZQUIERDA: descripción + redes */}
        <div className="space-y-6">
          {/* Descripción */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Sobre mí</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              hola mi nombre es javier olivera soy desarrollador web full stack 
             con 2 años de experiencia en la creacion de paginas y aplicaciones web cuento con
             conocimiento y pratica en algunas de las tecnologias mas usadas como <span className=" font-bold">HTML, CSS,
             JAVASCRIPT, TYPESCRIPT REACT</span> entre otros. Te invito a seguir viendo mi portfolio
             para conocer el stack completo de tecnologias que manejo y 
             algunos de los proyectos que he creado 
            </p>
          </div>

          {/* Redes sociales */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Conecta conmigo
            </h3>
            <div className="flex flex-wrap gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/javier-olivera-0b1066271/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 hover:bg-sky-500 transition-colors"
              >
                <img
                  src="/public/aboutMe/linkedin-logo.png"
                  alt="LinkedIn"
                  className="h-5 w-5"
                />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/javier.olivera.54/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 hover:bg-sky-500 transition-colors"
              >
                <img
                  src="/public/aboutMe/facebook-logo.png"
                  alt="Facebook"
                  className="h-5 w-5"
                />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/javiDEV-entei"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 hover:bg-sky-500 transition-colors"
              >
                <img
                  src="/public/aboutMe/github-logo.png"
                  alt="GitHub"
                  className="h-5 w-5"
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
          <div className="relative h-40 w-40 rounded-full overflow-hidden ring-4 ring-sky-500/60 shadow-xl">
            <img
              src="/public/aboutMe/foto de prueba portfolio.jpg" // reemplaza con tu ruta
              alt="Foto de Javier Olivera"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
