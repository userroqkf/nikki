"use client"

import Button from "./Button";
import styles from "@/_styles/FollowingContainer.module.css"
import ProfilePicture from "./ProfilePicture";
import { useState } from "react";
import LoadingSpinnerDynamic from "./LoadingSpinnerDynamic";
import Link from "next/link";

type Props = {
  profilePictureURL: string;
  fullName: string;
  username: string;
  following: boolean;
}

export default function FollowingContainer({profilePictureURL, fullName, username, following}: Props) {
  const [follow, setFollow] = useState<boolean>(following)
  const [loading, setLoading] = useState<boolean>(false)

  async function modifyFollowState(currUser: string, followUser: string) {
    setLoading(true)
    if (follow) {
      await fetch('api/follow', {method: "PUT", body: JSON.stringify({currUser, followUser})})
    } else {
      await fetch('api/follow', {method: "POST", body: JSON.stringify({currUser, followUser})})
    }
    setFollow(!follow)
    setLoading(false)
  }
  return (
    <div className={styles.followingContainerLayout}>
    {loading && <LoadingSpinnerDynamic />}
    {!loading && 
      <>
        <Link href={`user/${username}`}>          
          <ProfilePicture profilePictureURL={profilePictureURL} />
        </Link>
        <Link href={`user/${username}`}>
          <div>
            <div>
              {fullName}
            </div>
            <div>
              @{username}
            </div>
          </div>
        </Link>
          <div onClick={(e: React.MouseEvent<HTMLElement>) => {
            e.preventDefault()
            modifyFollowState("alicej",username)
            }}>
            <Button label={follow? "Following" : "Follow"} size="large" style={follow? 'solid' : 'empty'}/>
          </div>
        </>
      }
    </div>
  )
}
