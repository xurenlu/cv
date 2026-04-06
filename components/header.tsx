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

  function exportMainAreaAsImage() {
    const el = document.querySelector('#main-area')
    if (!el) return
    const html2canvas = (
      window as unknown as {
        html2canvas?: (
          el: Element,
          opts: Record<string, unknown>
        ) => Promise<HTMLCanvasElement>
      }
    ).html2canvas
    if (!html2canvas) return
    html2canvas(el, {
      allowTaint: true,
      useCORS: true,
      backgroundColor: null,
      scale: 2,
    }).then((canvas: HTMLCanvasElement) => {
      const dataURL = canvas.toDataURL('image/jpeg', 0.92)
      const a = document.createElement('a')
      a.href = dataURL
      a.download = `resume-${new Date().toISOString().slice(0, 10)}.jpg`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    })
  }

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
            <button
              type="button"
              className={styles.ghostBtn}
              onClick={exportMainAreaAsImage}
            >
              {t.exportImage}
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
