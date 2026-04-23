export type ProjectTranslationKey =
  | 'freshCoffee'
  | 'upTask'
  | 'expensePlanner'
  | 'cocktailRecipes';


  export interface Project {
    id: number;
    translationKey: ProjectTranslationKey
    image: string;
    productionUrl: string;
    technologies: string[];
  }

export type TranslatedTutorialStep = {
  id: number;
  text: string;
};

export type TutorialStep = {
  id: number;
  text: string;
  image: string;
};

