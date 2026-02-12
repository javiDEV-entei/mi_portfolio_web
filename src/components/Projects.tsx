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
      "Esta aplicación permite al usuario crear proyectos y también asignar tareas dentro de los mismos, dar distintos estados a estas tareas según vayan siendo completadas e incluso adjuntar notas a esas tareas. Además, implementa un panel de creación de cuentas e inicio de sesión.",
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
        text: "PASO 1: Iniciar sesión con los siguientes datos: correo: correo@coreo.com y contraseña: password.",
        image: "public/projects-tutorials/project1/ins1.png",
      },
      {
        id: 2,
        text: "PASO 2: Presionar el botón “Nuevo proyecto” para acceder al siguiente formulario.",
        image: "public/projects-tutorials/project1/ins2.png",
      },
      {
        id: 3,
        text: "PASO 3: Colocar los datos correspondientes al proyecto en los campos señalados y luego presionar en “Crear proyecto”.",
        image: "public/projects-tutorials/project1/ins3.png",
      },
      {
        id: 4,
        text: "PASO 4: Para poder agregar tareas al proyecto, hacer clic en “Agregar tarea” y luego colocar en los campos señalados los datos correspondientes a la tarea. Después, presionar en “Guardar tarea”.",
        image: "public/projects-tutorials/project1/ins4.png",
      },
      {
        id: 5,
        text: "PASO 5: Luego de crear la tarea, puedes usar la función de drag and drop (arrastrar y soltar) para cambiar el estado de la tarea. Recuerda soltar la tarea en la zona que dice “SOLTAR TAREA AQUÍ”.",
        image: "public/projects-tutorials/project1/ins5.png",
      },
      {
        id: 6,
        text: "PASO 6: Dando clic en el símbolo de tres puntos situado arriba a la derecha de la tarea, puedes acceder a un menú que permite realizar distintas acciones.",
        image: "public/projects-tutorials/project1/ins6.png",
      },
      {
        id: 7,
        text: "PASO 7: Al hacer clic en “Ver tarea” tendrás acceso a un panel que muestra datos referentes a la tarea, como la fecha en que se agregó, el historial de cambios, su estado actual y, además, podrás agregarle una nota.",
        image: "public/projects-tutorials/project1/ins7.png",
      },
      {
        id: 8,
        text: "PASO 8: En el menú situado arriba a la derecha puedes tener acceso a varias opciones, como editar los datos de tu perfil, ver los proyectos que creaste y cerrar sesión.",
        image: "public/projects-tutorials/project1/ins8.png",
      },
      {
        id: 9,
        text: "PASO 9: En la sección “Mi perfil” puedes editar tanto el nombre de la cuenta como también su email.",
        image: "public/projects-tutorials/project1/ins9.png",
      },
      {
        id: 10,
        text: "PASO 10: Al volver al dashboard de proyectos (puedes hacerlo haciendo clic en el logo de UpTask, arriba a la izquierda), en caso de que quieras eliminar el proyecto puedes presionar los tres puntos situados a la derecha del proyecto.",
        image: "public/projects-tutorials/project1/ins10.png",
      },
      {
        id: 11,
        text: "Antes de eliminar el proyecto, como medida de seguridad, se te pedirá que ingreses la contraseña de tu cuenta. En el caso de esta cuenta de prueba, la contraseña es la palabra “password”.",
        image: "public/projects-tutorials/project1/ins11.png",
      },
    ],
  },
  {
    id: 2,
    title: "Planificador de gastos",
    description:
      "Aplicación web para el control de gastos. Permite al usuario realizar varias funciones, como establecer un presupuesto, listar y dividir gastos en varias categorías, y editar o eliminar gastos según lo necesite.",
    image: "public/projects/img-proyecto-2.png",
    productionUrl: "https://jade-quokka-bb99ad.netlify.app/",
    technologies: [
      "TypeScript",
      "ReactJs",
      "HeadLess UI",
      "TailwindCSS",
      "React-swipeable-list",
    ],
    tutorialSteps: [
      {
        id: 1,
        text: "PASO 1: Establecer el presupuesto deseado y hacer clic en “Definir presupuesto”.",
        image: "public/projects-tutorials/project2/ins1.png",
      },
      {
        id: 2,
        text: "PASO 2: Luego de esto tendrás acceso a la sección principal de la app. Para empezar, puedes agregar un gasto haciendo clic en el botón “+” situado abajo a la derecha.",
        image: "public/projects-tutorials/project2/ins2.png",
      },
      {
        id: 3,
        image: "public/projects-tutorials/project2/ins3.png",
        text: "PASO 3: En el formulario de nuevo gasto puedes definir: un nombre para el gasto, la cantidad gastada, la categoría a la que pertenece y la fecha en que se realizó. Para fines ilustrativos, en este tutorial crearemos 3 gastos.",
      },
      {
        id: 4,
        text: "PASO 4: Después de agregar los gastos, podrás ver varias características: una gráfica que aumenta o disminuye a medida que agregues o elimines gastos, y una sección para ver tu presupuesto total, el disponible y el gastado.",
        image: "public/projects-tutorials/project2/ins4.png",
      },
      {
        id: 5,
        text: "PASO 5: En la sección de “Filtrar gastos” podrás filtrarlos por categoría.",
        image: "public/projects-tutorials/project2/ins5.png",
      },
      {
        id: 6,
        text: "PASO 6: Haciendo clic sobre el gasto y arrastrando hacia la izquierda puedes eliminarlo de la lista; si lo haces, la cantidad del gasto eliminado será sumada nuevamente al presupuesto disponible.",
        image: "public/projects-tutorials/project2/ins6.png",
      },
      {
        id: 7,
        text: "PASO 7: Haciendo clic sobre el gasto y arrastrando hacia la derecha puedes actualizar la información referente al gasto.",
        image: "public/projects-tutorials/project2/ins7.png",
      },
      {
        id: 8,
        text: "PASO 8: En el formulario de actualización del gasto puedes editar todos los datos. Observación: si modificas la cantidad del gasto, este cambio también se mostrará luego en la gráfica.",
        image: "public/projects-tutorials/project2/ins8.png",
      },
      {
        id: 9,
        text: "PASO 9: Por último, si deseas establecer otro presupuesto para reiniciar tu lista de gastos, puedes hacer clic en el botón “Resetear app”",
        image: "public/projects-tutorials/project2/ins9.png",
      },
      
    ],
  },
  {
    id: 3,
    title: "Buscador de recetas para cócteles y bebidas",
    description:
      "Aplicación que permite realizar búsquedas de cócteles y bebidas.Luego de hacer la búsqueda se muestran varios resultados, incluyendo una imagen del cóctel o bebida, sus ingredientes y la receta. La app también ofrece la posibilidad de agregar la bebida o el cóctel a una sección de favoritos.",
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
    tutorialSteps: [
      {
        id: 1,
        text: "PASO 1: En el campo “Nombre o ingredientes” puedes buscar por un tipo de bebida específica. A modo de ejemplo, en la imagen se busca una bebida de vodka con limón. En el campo “Categoría” puedes seleccionar la que más se adecue a lo que estás buscando.",
        image: "public/projects-tutorials/project3/ins1.png",
      },
      {
        id: 2,
        text: "PASO 2: Al hacer clic en “Buscar bebidas”, verás que aparecen varios resultados con una imagen de la bebida correspondiente y su nombre.",
        image: "public/projects-tutorials/project3/ins2.png",
      },
      {
        id: 3,
        text: "PASO 3: Haciendo clic en “Ver receta” puedes ver los ingredientes de la bebida y el modo de prepararla. Además de eso, puedes agregar la receta a la sección de favoritos para verla después. Observación: actualmente la información se muestra en inglés por cuestiones del funcionamiento de la app, pero próximamente estará traducida.",
        image: "public/projects-tutorials/project3/ins3.png",
      },
      {
        id: 4,
        text: "PASO 4: Al agregarla a favoritos, podrás ver una notificación arriba a la derecha confirmando que se agregó correctamente.",
        image: "public/projects-tutorials/project3/ins4.png",
      },
      
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
        <h2 className=" text-center text-2xl font-semibold"> Estos son algunos de los proyectos que he creado </h2>

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
