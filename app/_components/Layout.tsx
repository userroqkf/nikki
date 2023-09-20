import { ReactNode, SetStateAction, useEffect } from "react";
import ListView from "./ListView";
import styles from "@/_styles/Layout.module.css";
import Image from "next/image";

import logo from "../../public/logo.svg";

type Props = {
  children: ReactNode;
}

export default function Layout({children}: Props) {
  // const validRouteString: string =  ["Home", "My Feed", "Following"].includes(route) ? route : "";

  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <header className={styles.header}>
          <Image src={logo} width={75} height={46.725} alt="logo"/>
        </header>
        <nav>
          <ListView/>
        </nav>
      </div>
      <main className={styles.main}>
        {/* <div className={styles.selectedPageName}>
          {route}
        </div> */}
        {children}
      </main>
    </div>
  )
}
