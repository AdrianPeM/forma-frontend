import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"

import FileIcon from "@assets-icons/file.svg"
import GlobeIcon from "@assets-icons/globe.svg"
import NextIcon from "@assets-icons/next.svg"
import VercelIcon from "@assets-icons/vercel.svg"
import WindowIcon from "@assets-icons/window.svg"

import LanguageSwitcher from "./LanguageSelector"

import styles from "./page.module.css"

export default function Home() {

  const t = useTranslations("pages/home")

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src={NextIcon}
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>{t("get_started.text")}<code>{t("get_started.code")}</code>.</li>
          <li>{t("save_changes")}.</li>
        </ol>
        <LanguageSwitcher />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={VercelIcon}
            alt="Vercel logomark"
            width={16}
            height={16}
          />
          Deploy now
        </a>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={FileIcon}
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={WindowIcon}
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={GlobeIcon}
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  )
}
