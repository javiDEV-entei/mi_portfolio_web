import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TutorialModal from './TutorialModal';
import { projects } from '../data/projects';
import { tutorialImages } from '../data/tutorialImages';
import type { Project, TranslatedTutorialStep, TutorialStep } from '../types/index';

const Projects = () => {
  const { t } = useTranslation('projects');

  const [selectedProjectKey, setSelectedProjectKey] = useState<Project['translationKey'] | null>(null);

  const openTutorial = (project: Project) => {
    setSelectedProjectKey(project.translationKey);
  };

  const closeTutorial = () => {
    setSelectedProjectKey(null);
  };

  const tutorialTitle = useMemo(() => {
    if (!selectedProjectKey) return '';

    return t(`items.${selectedProjectKey}.tutorialModal.title`, {
      defaultValue: '',
    }) as string;
  }, [selectedProjectKey, t]);

  const pendingMessage = useMemo(() => {
    if (!selectedProjectKey) return '';

    return t(`items.${selectedProjectKey}.tutorialModal.pendingMessage`, {
      defaultValue: '',
    }) as string;
  }, [selectedProjectKey, t]);

  const translatedSteps = useMemo(() => {
    if (!selectedProjectKey) return [];

    return t(`items.${selectedProjectKey}.tutorialModal.steps`, {
      returnObjects: true,
      defaultValue: [],
    }) as TranslatedTutorialStep[];
  }, [selectedProjectKey, t]);

  const tutorialSteps = useMemo<TutorialStep[]>(() => {
    if (!selectedProjectKey) return [];

    const images = tutorialImages[selectedProjectKey] ?? [];

    return translatedSteps.map((step, index) => ({
      id: step.id,
      text: step.text,
      image: images[index] ?? '',
    }));
  }, [selectedProjectKey, translatedSteps]);

  useEffect(() => {
    if (!selectedProjectKey) return;

    if (tutorialSteps.length === 0 && pendingMessage) {
      window.alert(pendingMessage);
      closeTutorial();
    }
  }, [selectedProjectKey, tutorialSteps, pendingMessage]);

  return (
    <>
      <section
        id="projects"
        className="w-full bg-slate-900 py-12 text-white dark:bg-slate-50 dark:text-slate-900"
      >
        <div className="mx-auto max-w-6xl space-y-8 px-4">
          <h2 className="text-center text-2xl font-semibold">
            {t('section.title')}
          </h2>

          <div className="space-y-6">
            {projects.map((project) => (
              <article
                key={project.id}
                className="flex h-full flex-col gap-4 rounded-xl bg-slate-800/60 p-4 shadow-lg transition-transform duration-300 hover:scale-105 dark:bg-white dark:shadow-md md:flex-row"
              >
                <div className="h-full w-full md:w-1/3">
                  <div className="h-full w-full overflow-hidden rounded-lg bg-slate-700">
                    <img
                      src={project.image}
                      alt={t(`items.${project.translationKey}.title`) as string}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex w-full flex-col justify-between gap-3 md:w-2/3">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">
                      {t(`items.${project.translationKey}.title`) as string}
                    </h3>

                    <p className="text-sm text-slate-300 dark:text-slate-700">
                      {t(`items.${project.translationKey}.description`) as string}
                    </p>

                    <p className="font-bold">
                      {t('card.technologiesTitle')}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-blue-400 bg-slate-700 px-3 py-1 text-xs font-medium text-slate-100"
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
                      className="inline-flex items-center justify-center rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-600"
                    >
                      {t('card.liveDemo')}
                    </a>

                    <button
                      type="button"
                      onClick={() => openTutorial(project)}
                      className="inline-flex items-center justify-center rounded-md border border-slate-500 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:bg-slate-700 dark:text-slate-900"
                    >
                      {t('card.tutorial')}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedProjectKey && tutorialSteps.length > 0 && (
        <TutorialModal
          isOpen={true}
          onClose={closeTutorial}
          projectTitle={tutorialTitle}
          steps={tutorialSteps}
        />
      )}
    </>
  );
};

export default Projects;

