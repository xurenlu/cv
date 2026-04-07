import Link from 'next/link'
import ThemeChanger from './themechanger'
import type { ReactElement } from 'react'
import styles from './header.module.scss'
import { uiLabels, type Locale } from '../data/uiLabels'

type HeaderProps = {
  locale: Locale
}

const Header = ({ locale }: HeaderProps): ReactElement => {
  const t = uiLabels[locale]

  return (
    <>
      <header id="header-wrapper" className={`${styles.header} no-print`}>
        <div className={styles.inner}>
          <nav className={styles.nav} aria-label="Language">
            <ol className={styles.links}>
              <li
                className={
                  locale === 'en' ? styles.linkActive : styles.link
                }
              >
                <Link href="/default/en">{t.navLangEn}</Link>
              </li>
              <li
                className={
                  locale === 'zh' ? styles.linkActive : styles.link
                }
              >
                <Link href="/default/zh">{t.navLangZh}</Link>
              </li>
            </ol>
          </nav>
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.ghostBtn}
              onClick={() => window.print()}
            >
              {t.printOrPdf}
            </button>
            <ThemeChanger />
          </div>
        </div>
      </header>
      <div className={styles.spacer} />
    </>
  )
}

export default Header
