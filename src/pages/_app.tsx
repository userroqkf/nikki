import { AppProps } from "next/app";
import '../styles/global.css';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({Component}: AppProps) {
  return <Component />
} 