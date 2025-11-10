// i18n utility functions
import type { Language } from './translations';

export const languages = {
  es: 'Español',
  en: 'English',
  // Ready for future:
  // pt: 'Português',
  // it: 'Italiano',
};

export const defaultLang: Language = 'es';

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}

export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string, l: Language = lang) {
    return l === defaultLang ? path : `/${l}${path}`;
  };
}
