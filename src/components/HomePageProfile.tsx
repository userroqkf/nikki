"use client"

import Image from "next/image";
import ProfilePicture from "./ProfilePicture";
import styles from "../styles/HomePageProfile.module.css"
import Button from "./Button";
import { useState, useEffect, Suspense } from "react";
import Overlay from "./Overlay";

type Props = {
  profilePictureURL: string;
  backgroundImageURL: string;
  fullName: string;
  username: string;
  followingCount: number;
  followerCount: number;
  following: boolean;
}

export default function HomePageProfile({profilePictureURL, backgroundImageURL, fullName, username, followingCount, followerCount, following}: Props) {
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
      <Overlay context={"backgroundImage"} setBackgroundImage={setBackgroundImage}>
        <Image src={backgroundImage} alt="profile-backgorund-image" width={598} height={200}/>
      </Overlay>
      <div className={styles.profilePicturePos}>
        <Overlay context={"profilePicture"} setProfilePicture={setProfilePicture}>
          <ProfilePicture profilePictureURL={profilePicture} border={4} height={136} width={136}/>
        </Overlay>
      </div>
      {/* If user is the same as currently logged in user then hide else show */}
      {
        <div className={styles.followButtonPos}
        onClick={() => {
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
