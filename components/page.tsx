'use client'

import Head from 'next/head'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { BiCurrentLocation, BiMailSend, BiPhone } from 'react-icons/bi'
import packageJson from '../package.json'
import avatar from '../public/renlu.png'
import { uiLabels, type Locale } from '../data/uiLabels'
import styles from '../styles/resume.module.css'
import Header from './header'
import AmbientBackground from './AmbientBackground'

type EmploymentItem = {
  jobTitle: string
  employer: string
  startDate: string
  endDate: string
  city: string
  description: string
}

type EducationItem = {
  school: string
  degree: string
  startDate: string
  endDate: string
  city: string
  description: string
}

type ProfileBlock = {
  profile: {
    wantedJobTitle: string
    firstName: string
    lastName: string
    email: string
    phone: string
    country: string
    city: string
  }
  professionalSummary: string
  skills: { skill: string; score: number }[]
  education: EducationItem[]
  employmentHistory: EmploymentItem[]
  projects: { subject: string; desc: string; link: string }[]
}

function isGithubRepoUrl(url: string): boolean {
  return /github\.com\//i.test(url)
}

export type ResumePageProps = ProfileBlock & {
  locale: Locale
}

/** 挂载时阶梯入场；即使用户开启「减少动效」也保留短促位移，避免像静态页 */
function sectionMotion(reduce: boolean | null, order: number) {
  const soft = reduce === true
  return {
    initial: { opacity: soft ? 0.92 : 0, y: soft ? 8 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: soft ? 0.36 : 0.58,
      delay: soft ? 0.03 + order * 0.05 : 0.1 + order * 0.09,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }
}

function heroMotion(reduce: boolean | null) {
  const soft = reduce === true
  return {
    initial: { opacity: soft ? 0.92 : 0, y: soft ? 6 : 14 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: soft ? 0.4 : 0.65,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }
}

export default function Page(props: ResumePageProps) {
  const { profile, locale } = props
  const t = uiLabels[locale]
  const reduceMotion = useReducedMotion()

  const employments = props.employmentHistory.map((item, i) => (
    <li
      key={`${item.employer}-${item.startDate}-${i}`}
      className={styles.listItem}
    >
      <h3 className={styles.itemTitle}>{item.jobTitle}</h3>
      <p className={styles.itemMeta}>
        {item.employer} · {item.city}
      </p>
      <p className={styles.itemMeta}>
        {item.startDate} — {item.endDate}
      </p>
      {item.description ? (
        <p className={styles.itemDesc}>{item.description}</p>
      ) : null}
    </li>
  ))

  const educationItems = props.education.map((item, i) => (
    <li key={`${item.school}-${i}`} className={styles.listItem}>
      <h3 className={styles.itemTitle}>{item.degree}</h3>
      <p className={styles.itemMeta}>
        {item.school} · {item.city}
      </p>
      <p className={styles.itemMeta}>
        {item.startDate} — {item.endDate}
      </p>
      {item.description ? (
        <p className={styles.itemDesc}>{item.description}</p>
      ) : null}
    </li>
  ))

  const projects = props.projects.map((item) => {
    const showRepoUrl = isGithubRepoUrl(item.link)
    return (
      <li key={item.subject} className={styles.listItem}>
        <h3 className={styles.itemTitle}>
          <a
            className={styles.itemLink}
            href={item.link}
            rel="noreferrer"
            target="_blank"
          >
            {item.subject}
          </a>
        </h3>
        {showRepoUrl ? (
          <p className={styles.projectRepoUrl}>
            <a
              className={styles.repoUrlLink}
              href={item.link}
              rel="noreferrer"
              target="_blank"
            >
              {item.link}
            </a>
          </p>
        ) : null}
        <p className={styles.itemDesc}>{item.desc}</p>
      </li>
    )
  })

  const skillPills = props.skills.map((item) => (
    <span key={item.skill} className={styles.skillPill}>
      {item.skill}
    </span>
  ))

  const hm = heroMotion(reduceMotion ?? false)

  return (
    <>
      <Head>
        <title>
          {profile.firstName} — {t.metaTitle}
        </title>
        <meta name="description" content={t.metaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AmbientBackground />

      <main className={styles.shell}>
        <Header locale={locale} />

        <div id="main-area" className={styles.mainArea}>
          <motion.header className={styles.hero} {...hm}>
            <div className={styles.avatarWrap}>
              <Image
                src={avatar}
                className={styles.avatar}
                alt=""
                width={112}
                height={112}
                priority
              />
            </div>
            <div className={styles.heroText}>
              <h1 className={`${styles.name} ${styles.nameShimmer}`}>
                {profile.firstName}
                {profile.lastName}
              </h1>
              <p className={`${styles.role} ${styles.roleGlow}`}>
                {profile.wantedJobTitle}
              </p>
              <div className={styles.metaRow}>
                <span className={styles.metaItem}>
                  <BiCurrentLocation aria-hidden size={16} />
                  {profile.city}, {profile.country}
                </span>
              </div>
            </div>
          </motion.header>

          <div className={styles.layout}>
            <div className={styles.columnMain}>
              <motion.section
                className={styles.card}
                {...sectionMotion(reduceMotion ?? false, 0)}
              >
                <h2 className={styles.sectionTitle}>{t.sections.profile}</h2>
                <p className={styles.bodyText}>{props.professionalSummary}</p>
              </motion.section>

              <motion.section
                className={styles.card}
                {...sectionMotion(reduceMotion ?? false, 1)}
              >
                <h2 className={styles.sectionTitle}>{t.sections.employment}</h2>
                <ul className={styles.list}>{employments}</ul>
              </motion.section>

              <motion.section
                className={styles.card}
                {...sectionMotion(reduceMotion ?? false, 2)}
              >
                <h2 className={styles.sectionTitle}>{t.sections.education}</h2>
                <ul className={styles.list}>{educationItems}</ul>
              </motion.section>

              <motion.section
                className={styles.card}
                {...sectionMotion(reduceMotion ?? false, 3)}
              >
                <h2 className={styles.sectionTitle}>{t.sections.projects}</h2>
                <ul className={styles.list}>{projects}</ul>
              </motion.section>

              <motion.section
                className={styles.card}
                {...sectionMotion(reduceMotion ?? false, 4)}
              >
                <h2 className={styles.sectionTitle}>{t.sections.skills}</h2>
                <div className={styles.skills}>{skillPills}</div>
              </motion.section>
            </div>

            <aside className={styles.columnAside}>
              <motion.section
                className={styles.card}
                {...sectionMotion(reduceMotion ?? false, 5)}
              >
                <h2 className={styles.sectionTitle}>{t.sections.contact}</h2>
                <div className={styles.contactBlock}>
                  <div className={styles.contactRow}>
                    <span className={styles.contactLabel}>
                      {t.labels.objective}
                    </span>
                    {profile.wantedJobTitle}
                  </div>
                  <div className={styles.contactRow}>
                    <span className={styles.contactLabel}>
                      {t.labels.location}
                    </span>
                    <span className={styles.metaItem}>
                      <BiCurrentLocation aria-hidden size={14} />
                      {profile.city}, {profile.country}
                    </span>
                  </div>
                  <div className={styles.contactRow}>
                    <span className={styles.contactLabel}>{t.labels.phone}</span>
                    <a href={`tel:${profile.phone}`}>
                      <BiPhone aria-hidden size={14} /> {profile.phone}
                    </a>
                  </div>
                  <div className={styles.contactRow}>
                    <span className={styles.contactLabel}>{t.labels.email}</span>
                    <a href={`mailto:${profile.email}`}>
                      <BiMailSend aria-hidden size={14} /> {profile.email}
                    </a>
                  </div>
                </div>
              </motion.section>
            </aside>
          </div>
        </div>

        <footer className={`${styles.footer} no-print`}>
          {t.footerVersion} {packageJson.version}
        </footer>
      </main>
    </>
  )
}
