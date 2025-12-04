export type Language = "ar" | "en"

const defaultLocale: Language = "en"
const locales: Language[] = ["ar", "en"]

export function getDirection(locale: Language): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr"
}

export function getLanguageName(locale: Language): string {
  return locale === "ar" ? "العربية" : "English"
}

export function isValidLocale(locale: unknown): locale is Language {
  return locales.includes(locale as Language)
}

export { defaultLocale, locales }
