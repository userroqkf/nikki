import styles from "../styles/ListItem.module.css";
import { Dispatch, ReactNode, SetStateAction } from "react";

type Props = {
  icon?: ReactNode;
  focusIcon?: ReactNode;
  label: string;
  focus: string;
  setFocus: Dispatch<SetStateAction<string>>;
}

export default function ListItem({icon, focusIcon, label, focus, setFocus}: Props) {
  return (
    <div className={styles.list_item_box} onClick={() => setFocus(label)}>
      <div className={styles.icon_container}>
        {label == focus ? focusIcon : icon}
      </div>
      <div className={styles.text}>
        {label} 
      </div>
    </div>
  )
}
