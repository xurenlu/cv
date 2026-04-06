import profile from '../data/profile'
import Page, { type ResumePageProps } from '../components/page'

export default function Home(props: ResumePageProps) {
  return <Page {...props} />
}

export async function getServerSideProps() {
  return { props: { ...profile.zh, locale: 'zh' as const } }
}
