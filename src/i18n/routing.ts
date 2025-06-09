import { defineRouting } from "next-intl/routing"

export const localeKeys = {
  "EN": "en",
  "ES": "es"
}

export const supportedLocales = [localeKeys.EN, localeKeys.ES]

export const routing = defineRouting({
  locales: supportedLocales, /** List of supported locales */
  defaultLocale: "en", /** Used when no locale matches */
  localeDetection: false, /** Used when no locale matches */
  localePrefix: { /** pathname with locale prefix  @see — https://next-intl.dev/docs/routing#locale-prefix */
    mode: "as-needed",
    prefixes: {
      [localeKeys.EN]: "",
      [localeKeys.ES]: "/es"
    }
  },
})