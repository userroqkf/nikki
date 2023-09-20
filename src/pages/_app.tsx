import { AppProps } from "next/app";
import '../styles/global.css';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { Josefin_Sans } from 'next/font/google'
import { useEffect } from "react";
import Layout from "@/components/Layout";

const josefinSans = Josefin_Sans({subsets: ["latin"]})

export default function App({Component, pageProps}: AppProps) {
  useEffect(() => {;
  }, [])
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${josefinSans.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
} 
