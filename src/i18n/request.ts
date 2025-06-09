import { hasLocale } from "next-intl"
import { getRequestConfig } from "next-intl/server"

import { routing } from "./routing"

const loadPages = async (locale: string) => {
  const home = await import(`../../public/dictionaries/pages/home/${locale}.json`)

  return {
    "pages/home": home.default,
  }
}

export const loadMessages = async (locale: string) => {
  const general = await import(`../../public/dictionaries/general/${locale}.json`)

  const pages = await loadPages(locale)
  // const dashboard = await import(`../../public/dictionaries/home/dashboard/${locale}.json`)

  return {
    "general": general.default,
    ...pages
  }
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale

  const messages = await loadMessages(locale)

  return { locale, messages }
})