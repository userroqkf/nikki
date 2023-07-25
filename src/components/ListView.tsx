import { ReactNode, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faUser, faStar, faCalendar} from "@fortawesome/free-regular-svg-icons";
import { faUser as faUserFocus, faStar as faStarFocus, faCalendar as faCalendarFocus } from "@fortawesome/free-solid-svg-icons";

import ListItem from "./ListItem";
import styles from "../styles/ListView.module.css";

export default function ListView() {
  interface ListItemInfo {
    icon: ReactNode;
    focusIcon: ReactNode;
    label: string;
  } 

  const [focus, setFocus] = useState<string>("Home");

  const listItemArr: ListItemInfo[] = [
    {
      icon: <FontAwesomeIcon icon={faCalendar} />,
      focusIcon: <FontAwesomeIcon icon={faCalendarFocus}/>, 
      label: "Home"
    },
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      focusIcon: <FontAwesomeIcon icon={faUserFocus}/>,
      label: "My Feed"
    },
    {
      icon: <FontAwesomeIcon icon={faStar}/>,
      focusIcon: <FontAwesomeIcon icon={faStarFocus} />,
      label: "Following"
    }
  ]

  const listItem = listItemArr.map((value: ListItemInfo, index: number): ReactNode => {
    return (
      <ListItem key={index} {...value} focus={focus} setFocus={setFocus}/>
    )
  })

  return (
    <div className={styles.listViewLayout}>
      {listItem}
    </div>
  )
}
