"use client"

import Image from "next/image";
import ProfilePicture from "./ProfilePicture";
import styles from "@/_styles/HomePageProfile.module.css"
import Button from "./Button";
import { useState} from "react";
import Overlay from "./Overlay";

type Props = {
  profilePictureURL: string;
  backgroundImageURL: string;
  fullName: string;
  username: string;
  followingCount: number;
  followerCount: number;
  following: boolean;
  myFeed?: boolean;
}

export default function HomePageProfile({myFeed, profilePictureURL, backgroundImageURL, fullName, username, followingCount, followerCount, following}: Props) {
  const [follow, setFollow] = useState<boolean>(following)
  const [profilePicture, setProfilePicture] = useState<string>(profilePictureURL)
  const [backgroundImage, setBackgroundImage] = useState<string>(backgroundImageURL)

  return (
    <div className={styles.homePageProfileLayout}>
      {/*
      later need to check if user is authenticated first 
      for now we just want to change image
      OnClick change background image, onClick change profile picture overlay on hover 
      */}
      {
        !myFeed &&
        <Image src={backgroundImage} alt="profile-backgorund-image" width={598} height={200}/>
      }
      {myFeed &&
        <Overlay context={"backgroundImage"} setBackgroundImage={setBackgroundImage} username={username}>
          <Image src={backgroundImage} alt="profile-backgorund-image" width={598} height={200}/>
        </Overlay>
      }
      <div className={styles.profilePicturePos}>
      {
        !myFeed &&
        <ProfilePicture profilePictureURL={profilePicture} border={4} height={136} width={136}/>
      }
        {myFeed &&
          <Overlay context={"profilePicture"} setProfilePicture={setProfilePicture} username={username}>
            <ProfilePicture profilePictureURL={profilePicture} border={4} height={136} width={136}/>
          </Overlay>
        }
      </div>
      {/* If user is the same as currently logged in user then hide else show */}
      {!myFeed && 
        <div className={styles.followButtonPos}
        onClick={async () => {
          const url = `http://localhost:3000/api/follow`;
          if (follow) {
            await fetch(url, {method: "PUT", body: JSON.stringify({currUser: "johndoe", followUser: username})})
          } else {
            await fetch(url, {method: "POST", body: JSON.stringify({currUser: "johndoe", followUser: username})})
          } 
          setFollow(!follow)
        }}>
          <Button label={follow? "Following" : "Follow"} size="medium" style={follow? 'solid' : 'empty'}/>
        </div>
      }
      <div className={styles.profileInfoLayout}>
        <div className={styles.nameLayout}>
          <div className={styles.fullName}>
            {fullName}
          </div>
          <div className={styles.username}>
            @{username}
          </div>
        </div>
        <div className={styles.followerFollowingCount}>
          <div>
            {followingCount} <span> Following </span> 
          </div>
          <div>
            {followerCount} <span> Follower </span>
          </div>
        </div>
      </div>

    </div>
      )
}
