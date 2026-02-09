import { useState } from "react";
import TutorialModal from "./TutorialModal";

type TutorialStep = {
  id: number;
  text: string;
  image: string;
};

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  productionUrl: string;
  technologies: string[];
  tutorialSteps?: TutorialStep[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "UpTask - Administrador de proyectos",
    description:
      "esta aplicación permite al usuario crear proyectos y también asignar tareas dentro de los mismos, darle distintos estados a estas tareas según vayan siendo completadas e incuso adjuntar notas a las esas tareas también implementa un panel de creación de cuentas e inicio de sesión",
    image: "public/projects/img-proyecto-3.png",
    productionUrl:
      "https://javi-dev-entei-uptask-admin-de-proy.vercel.app/",
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
    tutorialSteps: [
      {
        id: 1,
        text: "PASO 1: Iniciar con las siguientes datos Correo: correo@coreo.com y Password: password",
        image: "public/projects-tutorials/project1/ins1.png",
      },
      {
        id: 2,
        text: "PASO 2: Presionar el boton de Nuevo Projecto para acceder al siguinte formulario",
        image: "public/projects-tutorials/project1/ins2.png",
      },
      {
        id: 3,
        text: "PASO 3: Colocar los datos correspondientes al proyecto en los campos señalados y luego presionar en crear proyecto",
        image: "public/projects-tutorials/project1/ins3.png",
      },
      {
        id: 4,
        text: "PASO 4: Para poder agregar tareas al proyecto hacer click en Agregar Tarea y luego colocar en los campos señalados los datos correspondientes a la tarea y luego presionar en Guardar Tarea",
        image: "public/projects-tutorials/project1/ins4.png",
      },
      {
        id: 5,
        text: "PASO 5: luego de crear la tarea puedes usar la funcion de drag and drop (arrastrar y soltar) para cambiar el estado de la tarea. Recuerda soltar la tarea en la zona que dice SOLTAR TAREA AQUI",
        image: "public/projects-tutorials/project1/ins5.png",
      },
      {
        id: 6,
        text: "PASO 6: Dando click en el simbolo de 3 puntos situado arriba y la derecha de la tarea puedes acceder a un menu que permite realizar distintas acciones",
        image: "public/projects-tutorials/project1/ins6.png",
      },
      {
        id: 7,
        text: "PASO 7: Al hacer click en ver tarea tendras acceso a un ponel que muestra datos referentes a las tareas como la fecha en que se agrego, el historial de cambios de la tarea, su estado actual, ademas puede agregarle una nota a la tarea",
        image: "public/projects-tutorials/project1/ins7.png",
      },
      {
        id: 8,
        text: "PASO 8: En el menu situado arriba a la derecha puedes tener acceso a varias opciones como editar los datos de tu perfil, ver los proyectos que creaste y cerrar sesion",
        image: "public/projects-tutorials/project1/ins8.png",
      },
      {
        id: 9,
        text: "PASO 9: En la seccion mi perfil puedes editar tanto el nombre de la cuenta como tambien su email",
        image: "public/projects-tutorials/project1/ins9.png",
      },
      {
        id: 10,
        text: "PASO 10: Al volver al dashbord de proyectos (puedes hacerlo haciendo click en el logo de upTask arriba a la izquierda) en caso de que quieras eliminar el proyecto  puedes presionar los 3 puntos situados a la derecha del proyecto",
        image: "public/projects-tutorials/project1/ins10.png",
      },
      {
        id: 11,
        text: "PASO 11: Antes de eliminar el proyecto como medida de seguridad te pedira que ingreses la contraseña de tu cuenta en el caso de esta cuenta de prueba la contraseña es la palabra password",
        image: "public/projects-tutorials/project1/ins11.png",
      },
    ],
  },
  {
    id: 2,
    title: "Planificador de gastos",
    description:
      "Aplicación web para el control de gastos. Permite al usuario realizar varias funciones como: establecer un presupuesto, listar y dividir gastos en varias categorías y editar o eliminar gastos según lo necesite.",
    image: "public/projects/img-proyecto-2.png",
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
    id: 3,
    title: "Buscador de recetas para cocteles y bebidas",
    description:
      "Aplicación que permite realizar búsquedas de cocteles y bebidas. Luego de hacer la búsqueda se muestran varios resultados incluyendo una imagen del coctel o bebida, sus ingredientes y la receta. La app también ofrece la posibilidad de agregar la bebida o el coctel a una sección de favoritos.",
    image: "public/projects/img-proyecto-1.png",
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

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openTutorial = (project: Project) => {
    if (!project.tutorialSteps || project.tutorialSteps.length === 0){
       alert("Próximamente agregaré el tutorial para este proyecto")
     return;
    }
    setSelectedProject(project);
  };

  const closeTutorial = () => {
    setSelectedProject(null);
  };

  return (
    <section id="proyectos" className="w-full bg-slate-900 text-white py-12 dark:bg-slate-50 dark:text-slate-900">
      <div className="mx-auto max-w-6xl px-4 space-y-8">
        <h2 className="text-2xl font-semibold">Proyectos</h2>

        <div className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col md:flex-row gap-4 rounded-xl bg-slate-800/60 p-4 shadow-lg 
                         transform transition-transform duration-300 hover:scale-105 h-full dark:bg-white dark:shadow-md"
            >
              {/* Imagen izquierda */}
              <div className="h-full w-full md:w-1/3">
                <div className="h-full w-full overflow-hidden rounded-lg bg-slate-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Contenido derecha */}
              <div className="w-full md:w-2/3 flex flex-col justify-between gap-3">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-slate-300 dark:text-slate-700">
                    {project.description}
                  </p>

                  <p className="font-bold">
                    Tecnologias empleadas en este proyecto
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-700 px-3 py-1 text-xs font-medium text-slate-100 border border-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href={project.productionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-600 transition-colors"
                  >
                    ver proyecto en producción
                  </a>

                  <button
                    type="button"
                    onClick={() => openTutorial(project)}
                    className="inline-flex items-center justify-center rounded-md border border-slate-500 px-4 py-2 text-sm font-medium text-slate-100  dark:text-slate-900  hover:bg-slate-700 transition-colors"
                  >
                    ver tutorial de la app
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal de tutorial */}
      {selectedProject && selectedProject.tutorialSteps && (
        <TutorialModal
          isOpen={!!selectedProject}
          onClose={closeTutorial}
          projectTitle={selectedProject.title}
          steps={selectedProject.tutorialSteps}
        />
      )}
    </section>
  );
};

export default Projects;
