import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { en } from './locales/en.ts';
import { uk } from './locales/uk.ts';

export const LANGUAGES = ['en', 'uk'] as const;
export type Language = (typeof LANGUAGES)[number];

export const resources = {
  en: { translation: en },
  uk: { translation: uk },
} as const;

// Keep <html lang> and the tab title in sync with the active language
// (screen readers and browser translation rely on the lang attribute).
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
  document.title = i18n.t('app.name');
});

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: LANGUAGES,
    nonExplicitSupportedLngs: true, // "uk-UA" from the browser resolves to "uk"
    fallbackLng: 'en',
    interpolation: { escapeValue: false }, // React already escapes output
    detection: {
      // A choice made in the switcher wins over the browser setting.
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'lang',
      caches: ['localStorage'],
    },
  });

export default i18n;
