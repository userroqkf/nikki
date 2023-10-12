'use client'
import { ReactNode, createContext, useEffect, useState } from "react";
import ListView from "./ListView";
import styles from "@/_styles/Layout.module.css";
import Image from "next/image";

import logo from "../../public/logo.svg";
import Button from "./Button";
import { formatFeedUserData } from "utils/helperFunctions";

import { CurrUserContext } from '@/_components/CurrUserContext';

type Props = {
  children: ReactNode;
}

type userProps = {
  profilePictureURL:string;
  fullName: string;
  username: string;
  backgroundImageURL: string;
}

export default function Layout({children}: Props) {
  const [userContext, setUserContext] = useState<userProps | null>(null);

  //delete later
  useEffect(() => {
    console.log(userContext);
  }, [userContext])
  
  const login = async () => {
    const currUserResponse =  await fetch('api/user/?' + new URLSearchParams({id: "1"}), {method:'GET'})
    const currUserJSON = await currUserResponse.json()
    const currUsser = await formatFeedUserData(currUserJSON)
    setUserContext(currUsser)
  }

  const logout = () => {
    setUserContext(null)
  }

  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <header className={styles.header}>
          <Image src={logo} width={75} height={46.725} alt="logo"/>
        </header>
        <nav>
          <ListView/>
          {userContext && <Button label="logout" style="solid" size="medium" handleFormSubmit={logout}/>}
          {!userContext && <Button label="login" style="solid" size="medium" handleFormSubmit={login}/>}
        </nav>
      </div>
      <main className={styles.main}>
        <CurrUserContext.Provider value={userContext}>
          {children}
        </CurrUserContext.Provider>
      </main>
    </div>
  )
}
