// import { useRouter } from "next/router";
"use client"
import Link from "next/link";
import styles from "@/_styles/ListItem.module.css";
import { Dispatch, ReactNode, SetStateAction, useEffect } from "react";
import {usePathname} from "next/navigation";

type Props = {
  icon?: ReactNode;
  focusIcon?: ReactNode;
  label: string;
  link: string;
}

export default function ListItem({icon, focusIcon, label, link}: Props) {
  // const router = useRouter();
  const pathName = usePathname()
  const validRouteString: string =  ["/", "/MyFeed", "/following"].includes(pathName) ? pathName.slice(1) : "";
  
  return (
    // <div className={styles.list_item_box} onClick={() => router.push(`/${link}`) }>
    <Link href={`/${link}`} className={styles.link} replace>
      <div className={styles.list_item_box} >
        <div className={styles.icon_container}>
          {link === validRouteString ? focusIcon : icon}
        </div>
        <div className={styles.text}>
          {label} 
        </div>
      </div>
    </Link>
  )
}
