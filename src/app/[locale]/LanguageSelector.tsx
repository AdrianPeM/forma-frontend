"use client"

import { useLocale } from "next-intl"

import { usePathname, useRouter } from "../../i18n/navigation"
import { localeKeys } from "../../i18n/routing"

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <select value={locale} onChange={(e) => switchLocale(e.target.value)}>
      <option value={localeKeys.EN}>English</option>
      <option value={localeKeys.ES}>Español</option>
    </select>
  )
}
