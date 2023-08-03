import Image from "next/image";
import ProfilePicture from "./ProfilePicture";
import styles from "../styles/HomePageProfile.module.css"
type Props = {
  profilePicture: string;
  backgroundImage: string;
  fullName: string;
  username: string;
  followingCount: number;
  followerCount: number;
}
export default function HomePageProfile({profilePicture, backgroundImage, fullName, username, followingCount, followerCount}: Props) {
  return (
    <div className={styles.homePageProfileLayout}>
      <Image src={backgroundImage} alt="profile-backgorund-image" width={600} height={200}/>
      <div className={styles.profilePicturePos}>
        <ProfilePicture profilePictureURL={profilePicture} border={4} height={136} width={136}/>
      </div>
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
