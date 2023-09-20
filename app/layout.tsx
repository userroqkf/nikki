import '@/_styles/global.css';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { Josefin_Sans } from 'next/font/google'
import Layout from "./_components/Layout";
import ErrorBoundary from "./_components/ErrorBoundary";

const josefinSans = Josefin_Sans({subsets: ["latin"]})

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      {/* <style jsx global>{`
        html {
          font-family: ${josefinSans.style.fontFamily};
        }
      `}</style> */}
      <Layout>
          {children}
      </Layout>
      </body>
    </html>
  )
}