import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const fallbackLng = ['en'];
const availableLanguages = ['en', 'uk', 'fr', 'de', 'pl'];

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng,

    detection: {
      checkWhitelist: true,
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false,
    },
    backend: { loadPath: '/locales/{{lng}}/translation.json' },
  });

export default i18next;
