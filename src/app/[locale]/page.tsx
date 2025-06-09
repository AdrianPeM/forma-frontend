import Image from "next/image"
import { useTranslations } from "next-intl"

import FileIcon from "@assets-icons/file.svg"
import GlobeIcon from "@assets-icons/globe.svg"
import NextJsIcon from "@assets-icons/nextjs.svg"
import TerminalIcon from "@assets-icons/terminal.svg"
import VercelIcon from "@assets-icons/vercel.svg"

import LanguageSelector from "./LanguageSelector"

import styles from "./page.module.css"

export default function Home() {
  const t_general = useTranslations("general")
  const t = useTranslations("pages/home")

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image priority className={styles.logo} src={NextJsIcon} alt={t_general("icons.nextjs")} width={180} height={38} />
        <ol>
          <li>{t("body.get_started.text")}<code>{t("body.get_started.code")}</code>.</li>
          <li>{t("body.save_changes")}.</li>
        </ol>
        <LanguageSelector />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={VercelIcon} alt={t_general("icons.vercel")} width={16} height={16} />
          {t("footer.deploy")}
        </a>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src={FileIcon} alt={t_general("icons.file")} width={16} height={16} />
          {t("footer.learn")}
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src={TerminalIcon} alt={t_general("icons.terminal")} width={16} height={16} />
          {t("footer.examples")}
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src={GlobeIcon} alt={t_general("icons.globe")} width={16} height={16} />
          {t("footer.go_nextjs")}
        </a>
      </footer>
    </div>
  )
}
