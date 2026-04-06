
import profile from '../../data/profile'
import Page from "../../components/page";

export default function Home(props: Record<string, unknown>) {
    return <Page {...props}></Page>
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
    const data = lang === 'zh' ? profile.zh : profile.en
    return { props: data }
}
