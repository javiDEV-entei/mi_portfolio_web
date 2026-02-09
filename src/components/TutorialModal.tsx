

type TutorialStep = {
  id: number;
  text: string;
  image: string;
};


type TutorialModalProps = {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  steps: TutorialStep[];
};







const TutorialModal: React.FC<TutorialModalProps> = ({
  isOpen,
  onClose,
  projectTitle,
  steps,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Fondo oscuro */}
      <div
        className="fixed inset-0 bg-black/80"
        onClick={onClose}
      />

      {/* Contenedor full-screen del modal */}
      <div className="relative z-50 h-screen w-screen flex flex-col bg-slate-900 dark:bg-slate-50">
        {/* Barra superior con título y botón cerrar */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-slate-700 dark:border-slate-300">
          <h3 className="text-lg md:text-xl font-semibold text-white dark:text-slate-900">
            Tutorial: {projectTitle}
          </h3>
          <button
            onClick={onClose}
            className="rounded-full bg-slate-800 px-4 py-1 text-sm text-white hover:bg-slate-700 
                       dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-300"
          >
            Cerrar
          </button>
        </header>

        {/* Contenido scrollable (texto + imágenes) */}
        <main className="flex-1 overflow-y-auto px-4 py-4 md:px-8 md:py-6 bg-slate-900 dark:bg-slate-50">
          <ol className="space-y-6">
            {steps.map((step) => (
              <li
                key={step.id}
                className="space-y-3 rounded-lg bg-slate-800/70 p-4 md:p-6 shadow-md 
                           dark:bg-slate-200/70 dark:shadow-lg"
              >
                <p className="text-sm md:text-base text-slate-100 dark:text-slate-900">
                  {step.text}
                </p>

                <div className="w-full flex justify-center">
                  <div className="w-full max-w-4xl overflow-hidden rounded-md bg-slate-900 dark:bg-slate-200">
                    <img
                      src={step.image}
                      alt={step.text}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </main>
      </div>
    </div>
  );
};


export default TutorialModal