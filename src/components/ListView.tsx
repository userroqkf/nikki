import { Dispatch, ReactNode, SetStateAction, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faUser, faStar, faCalendar} from "@fortawesome/free-regular-svg-icons";
import { faUser as faUserFocus, faStar as faStarFocus, faCalendar as faCalendarFocus } from "@fortawesome/free-solid-svg-icons";

import ListItem from "@/components/ListItem";
import styles from "@/styles/ListView.module.css";

interface ListItemInfo {
  icon: ReactNode;
  focusIcon: ReactNode;
  label: string;
  link: string;
} 

type Props = {
  route: string;
}

export default function ListView() {

  const listItemArr: ListItemInfo[] = [
    {
      icon: <FontAwesomeIcon icon={faCalendar} />,
      focusIcon: <FontAwesomeIcon icon={faCalendarFocus}/>, 
      label: "Home",
      link: ""
    },
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      focusIcon: <FontAwesomeIcon icon={faUserFocus}/>,
      label: "My Feed",
      link: "MyFeed"
    },
    {
      icon: <FontAwesomeIcon icon={faStar}/>,
      focusIcon: <FontAwesomeIcon icon={faStarFocus} />,
      label: "Following",
      link: "following"
    }
  ]

  const listItem = listItemArr.map((value: ListItemInfo, index: number): ReactNode => {
    return (
      <ListItem key={index} {...value} link={value.link}/>
    )
  })

  return (
    <div className={styles.listViewLayout}>
      {listItem}
    </div>
  )
}
