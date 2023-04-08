
import profile from '../data/profile'
import Page from "../components/page";




export default function Home(props:any) {
    return <Page {...props}></Page>
}

export async function getServerSideProps(){
    return {props:profile.zh}
}
