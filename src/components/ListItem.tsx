import { useRouter } from "next/router";
import styles from "../styles/ListItem.module.css";
import { Dispatch, ReactNode, SetStateAction } from "react";

type Props = {
  icon?: ReactNode;
  focusIcon?: ReactNode;
  label: string;
  route: string;
  link: string;
}

export default function ListItem({icon, focusIcon, label, route, link}: Props) {
  console.log("check label match route", label, typeof route, route)
  const router = useRouter();
  return (
    <div className={styles.list_item_box} onClick={() => router.push(`/${link}`) }>
      <div className={styles.icon_container}>
        {label === route ? focusIcon : icon}
      </div>
      <div className={styles.text}>
        {label} 
      </div>
    </div>
  )
}
