import { Html, Head, Main, NextScript } from 'next/document'

import {ColorModeScript} from '@chakra-ui/react'
export default function Document() {
    return (
        <Html lang={"zh-ch"}>
            <Head >

            </Head>
            <body>
            <ColorModeScript initialColorMode={"light"} />
            <script src={"/html2canvas.min.js"} defer/>
            <Main />
            <NextScript/>
            <script charSet="UTF-8" id="LA_COLLECT"
                    src="//sdk.51.la/js-sdk-pro.min.js?id=Js73bbGQtCV15VBr&ck=Js73bbGQtCV15VBr" async={true}></script>
            </body>
        </Html>
    )
}
