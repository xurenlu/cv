
import profile from '../../data/profile'
import Page from "../../components/page";
import {ParsedUrlQuery} from "querystring";




export default function Home(props:any) {
    return <Page {...props}></Page>
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { lang: 'en' } }, { params: { lang: 'zh' } }],
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps(params:ParsedUrlQuery){
    let data;

    // @ts-ignore
    if(params.params['lang']=='zh'){
        data = profile.zh;
    }else{
        data = profile.en;
    }
    return {props:data}
}
