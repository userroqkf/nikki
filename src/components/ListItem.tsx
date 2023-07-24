import styles from "../styles/ListItem.module.css";
import { ReactNode } from "react";

type Props = {
  icon?: ReactNode;
  label: string;
}

export default function ListItem({icon, label}: Props) {
  return (
    <div className={styles.list_item_box}>
      <div>
        {icon}
      </div>
      <div className={styles.text}>
        {label} 
      </div>
    </div>
  )
}
