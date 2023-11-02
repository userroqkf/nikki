'use client'
import { ReactNode} from "react";
import ListView from "./ListView";
import styles from "@/_styles/Layout.module.css";
import Image from "next/image";

import logo from "../../public/logo.svg";
import LoginStateButton from "@/_components/LoginStateButton"
import { Amplify} from 'aws-amplify';
import { usePathname} from "next/navigation";
import awsconfig from '../aws-exports';

type Props = {
  children: ReactNode;
}

type userProps = {
  userId: number;
  profilePictureURL:string;
  fullName: string;
  username: string;
  backgroundImageURL: string;
}

Amplify.configure({ ...awsconfig, ssr: true });

export default function Layout({children}: Props) {
  const path = usePathname();

  const patterns = [/\/auth/, /\/auth\/signin/, /\/auth\/signup/, /\/auth\/confirm-email/];
  if (patterns.some(pattern => pattern.test(path))) {
    return (
      <>
        {children}
      </>
    )
  }

  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <header className={styles.header}>
          <Image src={logo} width={75} height={46.725} alt="logo"/>
        </header>
        <nav>
          <ListView/>
          <LoginStateButton/>
        </nav>
      </div>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}