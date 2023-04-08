import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "next-themes";
import {ChakraProvider} from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return  <ChakraProvider><ThemeProvider>
  <Component {...pageProps} />
  </ThemeProvider></ChakraProvider>
}
