import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faHouse, faUser, faStar } from "@fortawesome/free-solid-svg-icons";
import ListItem from "./ListItem";

export default function ListView() {
  interface ListItemInfo {
    icon: ReactNode;
    label: string;
  } 
  const listItemArr: ListItemInfo[] = [
    {
      icon: <FontAwesomeIcon icon={faHouse}/>,
      label: "Home"
    },
    {
      icon: <FontAwesomeIcon icon={faUser}/>,
      label: "My Feed"
    },
    {
      icon: <FontAwesomeIcon icon={faStar}/>,
      label: "Following"
    }
  ]
  return (
    listItemArr.map((value: ListItemInfo, index: number): ReactNode => {
      return (
        <ListItem key={index} {...value}/>
      )
    })
  )
}
