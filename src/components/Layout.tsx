import { ReactNode, SetStateAction } from "react";
import ListView from "./ListView";
import styles from "../styles/Layout.module.css";
import Image from "next/image";

import logo from "../../public/logo.svg";

type Props = {
  children: ReactNode;
  focus: string;
  setFocus: React.Dispatch<SetStateAction<string>>;
}

export default function Layout({focus, setFocus,children}: Props) {
  return (
<div className={styles.layout}>
      <div>
        <header className={styles.header}>
          <Image src={logo} width={75} height={46.725} alt="logo"/>
        </header>
        <nav>
          <ListView focus={focus} setFocus={setFocus}/>
        </nav>
      </div>
      <main className={styles.main}>
        <div className={styles.selectedPageName}>
          {focus}
        </div>
        <div>
          {children}
        </div>
      </main>
    </div>
  )
}
