"use client"
import ProfilePicture from "./ProfilePicture";
import styles from "../styles/PostContainer.module.css"
import { useRef, useState} from "react";
import LikeButton from "./LikeButton";
import CommentButton from "./CommentButton";

type Props = {
  profilePictureURL: string;
  content: {
    datePosted: string;
    text: string;
    image?: string;
    commentCount: number;
    likeCount: number;
  }
  fullName: string;
  username: string;
  liked: boolean;
}

export default function PostContainer({profilePictureURL, content, fullName, username, liked} : Props) {
  const contentTextRef = useRef<HTMLDivElement>(null);
  const postContainerRef = useRef<HTMLDivElement>(null);

  // const [like, setLike] = useState(liked);
  
  return (
    <div className={styles.postContainer} ref={postContainerRef}>
      <div className={styles.profilePicturePosition}>
        <ProfilePicture profilePictureURL={profilePictureURL}/>
      </div>
      <div className={styles.postContentContainer}>
        <div className={styles.postInfo}>
          <span> {fullName} </span>
          <span> @{username} </span>
          <span> {content.datePosted} </span>
        </div>
        <div className={styles.content}>
          <div ref={contentTextRef}>
            {content.text}
          </div>
          <div>
            {content.image}
         </div> 
        </div>
        <div className={styles.contentFooter}>
          <LikeButton liked={liked} likeCount={content.likeCount} />
          <CommentButton commentCount={content.commentCount} />
        </div>
      </div>
    </div>
  ) 
}
