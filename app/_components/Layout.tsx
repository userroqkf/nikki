'use client'
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import ListView from "./ListView";
import styles from "@/_styles/Layout.module.css";
import Image from "next/image";

import logo from "../../public/logo.svg";
import LoginStateButton from "@/_components/LoginStateButton"
import { Amplify, Auth, Hub } from 'aws-amplify';
import { usePathname, useRouter } from "next/navigation";
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




  // const [userContext, setUserContext] = useState<userProps | null>(null);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     const userInfo = await Auth.currentUserInfo()
  //     if (userInfo) {
  //       const userDataResponse = await fetch('api/user/?' + new URLSearchParams({username: userInfo.username}), {method:'GET'})
  //       const userData = await userDataResponse.json()
  //       const userDataFormatted = userDataFormat(userData);
  //       setUserContext({...userDataFormatted})
  //     }
  //   } 

  //   fetchUserData()
  //   // Hub.listen('auth', async (data) => {
  //   //   const event = data.payload.event;
  //   //   console.log('event:', event);
  //   //   if (event === "signIn") {
  //   //     const userInfo = await Auth.currentUserInfo()
  //   //     const userDataResponse = await fetch('api/user/?' + new URLSearchParams({username: userInfo.username}), {method:'GET'})
  //   //     const userData = await userDataResponse.json()
  //   //     const userDataFormatted = userDataFormat(userData);
  //   //     setUserContext({...userDataFormatted})
  //   //   }
  //   //   if (event === 'signOut') {
  //   //     setUserContext(null)
  //   //     router.push('/auth/signin')
  //   //   }
  //   // });
  // },[])