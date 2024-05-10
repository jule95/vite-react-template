import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import de from './translations/de.json';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en, de },
    fallbackLng: `en`,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      caches: [`cookie`],
      order: [`cookie`],
      lookupCookie: `lng`,
    },
  });

export default i18n;
