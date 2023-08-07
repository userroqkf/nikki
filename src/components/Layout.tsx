import { ReactNode } from "react";
import ListView from "./ListView";
import styles from "../styles/Layout.module.css";

type Props = {
  children: ReactNode;
}

export default function Layout({children}: Props) {
  return (
    <main className={styles.layout}>
      <ListView />
      <div>
        {children}
      </div>
    </main>
  )
}
