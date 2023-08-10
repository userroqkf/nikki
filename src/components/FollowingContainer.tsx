import Button from "./Button";
import styles from "../styles/FollowingContainer.module.css"
import ProfilePicture from "./ProfilePicture";
import { useState } from "react";

type Props = {
  profilePictureURL: string;
  fullName: string;
  username: string;
  following: boolean;
}

export default function FollowingContainer({profilePictureURL, fullName, username, following}: Props) {
  const [follow, setFollow] = useState<boolean>(following)
  return (
    <div className={styles.followingContainerLayout}>
      <ProfilePicture profilePictureURL={profilePictureURL} />
      <div>
        <div>
          {fullName}
        </div>
        <div>
          @{username}
        </div>
      </div>
      <div onClick={(e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        setFollow(!follow)
      }}>
        <Button label={follow? "Following" : "Follow"} size="large" style={follow? 'solid' : 'empty'}/>
      </div>
    </div>
  )
}
