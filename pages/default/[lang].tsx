import profile from '../../data/profile'
import Page, { type ResumePageProps } from '../../components/page'

export default function Home(props: ResumePageProps) {
  return <Page {...props} />
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { lang: 'en' } }, { params: { lang: 'zh' } }],
        fallback: false,
    }
}

export async function getStaticProps({
    params,
}: {
    params?: { lang?: string }
}) {
    const lang = params?.lang
    const locale = lang === 'zh' ? 'zh' : 'en'
    const data = locale === 'zh' ? profile.zh : profile.en
    return { props: { ...data, locale } }
}
