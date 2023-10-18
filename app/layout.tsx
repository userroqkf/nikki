import '@/_styles/global.css';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Layout from "./_components/Layout";
import { usePathname } from 'next/navigation';

import { Amplify, Auth, Hub } from 'aws-amplify';
import awsconfig from './aws-exports';
import { AuthProvider } from './_components/AuthContext';

// Amplify.configure(awsconfig);

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Layout>
              {children}
          </Layout>
        </AuthProvider>
      </body>
    </html>
  )
}