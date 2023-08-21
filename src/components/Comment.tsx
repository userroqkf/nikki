import ProfilePicture from "./ProfilePicture";
import styles from "../styles/Comment.module.css";

type Props = {
  profilePictureURL: string;
  fullName: string;
  username: string;
  content: {
    datePosted: string;
    text: string;
  } 
}
export default function Comment({profilePictureURL, fullName, username, content }: Props) {
  return (
    <div className={styles.commentContainer}>
      <div className={styles.profilePicturePosition}>
        <ProfilePicture profilePictureURL={profilePictureURL}/>
      </div>
      <div className={styles.postCommentContainer}>
        <div className={styles.commentInfo}>
          <span> {fullName} </span>
          <span> @{username} </span>
          <span> {content.datePosted} </span>
        </div>
        <div className={styles.content}>
          <div>
            {content.text}
          </div>
        </div>
      </div>
    </div>
  )
}
