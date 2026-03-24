import en from "./en";
import ja from "./ja";

export type Locale = "en" | "ja";
export type Translations = typeof en;

const translations: Record<Locale, Translations> = { en, ja };

export const defaultLocale: Locale = "en";
export const locales: Locale[] = ["en", "ja"];

export function t(locale: Locale): Translations {
  return translations[locale] ?? translations[defaultLocale];
}

/** Return the locale prefix for URLs ("" for default, "/ja" for ja). */
export function prefix(locale: Locale): string {
  return locale === defaultLocale ? "" : `/${locale}`;
}

/** Detect locale from a URL pathname. */
export function localeFromPath(path: string): Locale {
  const seg = path.split("/").filter(Boolean)[0];
  if (locales.includes(seg as Locale) && seg !== defaultLocale) {
    return seg as Locale;
  }
  return defaultLocale;
}
