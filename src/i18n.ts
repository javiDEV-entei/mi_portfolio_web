// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import esHeader from '../public/locales/es/header.json';
import enHeader from '../public/locales/en/header.json';

import esAboutMe from '../public/locales/es/aboutMe.json';
import enAboutMe from '../public/locales/en/aboutMe.json';

import esProjects from '../public/locales/es/projects.json';
import enProjects from '../public/locales/en/projects.json';

import esSkills from '../public/locales/es/skills.json';
import enSkills from '../public/locales/en/skills.json';

import esContact from '../public/locales/es/contact.json';
import enContact from '../public/locales/en/contact.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        header: esHeader,
        aboutMe: esAboutMe,
        projects: esProjects,
        skills: esSkills,
        contact: esContact,
      },
      en: {
        header: enHeader,
        aboutMe: enAboutMe,
        projects: enProjects,
        skills: enSkills,
        contact: enContact,
      },
    },
    lng: 'es',
    fallbackLng: 'es',
    ns: ['header', 'aboutMe', 'projects', 'skills', 'contact'],
    defaultNS: 'header',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;