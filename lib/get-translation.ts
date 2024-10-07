import "server-only";
import type { Locale } from "../i18n-config";

const translations = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  de: () => import("../dictionaries/de.json").then((module) => module.default),
  cs: () => import("../dictionaries/cs.json").then((module) => module.default),
};

let translationCache: Partial<Record<Locale, any>> = {};

export const getTranslations = async (locale: Locale) => {
  if (translationCache[locale]) {
    return translationCache[locale];
  }

  translationCache[locale] =
    (await translations[locale]()) ?? translations.en();
  return translationCache[locale];
};
