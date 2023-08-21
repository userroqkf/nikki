import { ReactNode, SetStateAction } from "react";
import ListView from "./ListView";
import styles from "../styles/Layout.module.css";
import Image from "next/image";

import logo from "../../public/logo.svg";

type Props = {
  children: ReactNode;
  route: string;
}

export default function Layout({route, children}: Props) {
  const validRouteString: string =  ["Home", "My Feed", "Following"].includes(route) ? route : "";

  return (
<div className={styles.layout}>
      <div>
        <header className={styles.header}>
          <Image src={logo} width={75} height={46.725} alt="logo"/>
        </header>
        <nav>
          <ListView route={validRouteString}/>
        </nav>
      </div>
      <main className={styles.main}>
        <div className={styles.selectedPageName}>
          {route}
        </div>
        <div>
          {children}
        </div>
      </main>
    </div>
  )
}
