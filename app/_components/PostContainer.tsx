"use client"

import ProfilePicture from "./ProfilePicture";
import styles from "@/_styles/PostContainer.module.css"
import { useEffect, useRef, useState} from "react";
import LikeButton from "./LikeButton";
import CommentButton from "./CommentButton";
import EditingBox from "./EditingBox";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

type Props = {
  key: number;
  postId: number;
  profilePictureURL: string;
  content: {
    datePosted: string;
    text: string;
    image?: string;
    commentCount: number;
    likeCount: number;
    liked: boolean;
  }
  fullName: string;
  username: string;
}

export default function PostContainer({postId, profilePictureURL, content, fullName, username} : Props) {
  const contentTextRef = useRef<HTMLDivElement>(null);
  const postContainerRef = useRef<HTMLDivElement>(null);

  // used for updating post when confirmed
  const [postContent, setPostContent] = useState(content);
  // console.log("testing postcontent data", postContent, postContent.image);

  useEffect(() => {
    console.log("check postContent", postContent);
  }, [postContent])

  const [editing, setEditing] = useState<boolean>(false)

  const deletePost = () => {
    // remove from db, if no error
    // from array of posts filter 
    console.log("delete obj");
  }

  return (
    <div className={styles.postContainer} ref={postContainerRef}>
      { !editing &&
        <button className={styles.buttonPosition}>
          <FontAwesomeIcon className={styles.editButton} title={"editButton"} icon={faPenToSquare} onClick={() => setEditing(true)}/>
          <FontAwesomeIcon className={styles.deleteButton} icon={faTrash} title={"deleteButton"} onClick={deletePost}/>
        </button> 
      }
      <div className={styles.profilePicturePosition}>
        <ProfilePicture profilePictureURL={profilePictureURL}/>
      </div>
    {!editing && 
      <div className={styles.postContentContainer}>
        <div className={styles.postInfo}>
          <span> {fullName} </span>
          <span> @{username} </span>
          <span> {postContent.datePosted} </span>
        </div>
        <div className={styles.content}>
          <div ref={contentTextRef}>
            {postContent.text}
          </div>
          {postContent.image && <Image src={postContent.image} width={500} height={500} alt="image"/>}
        </div>
        <div className={styles.contentFooter}>
          <LikeButton liked={postContent.liked} likeCount={postContent.likeCount} />
          <CommentButton commentCount={postContent.commentCount} />
        </div>
      </div>
      }
      {editing && 
        <EditingBox postId={postId} initialText={postContent.text} initialImage={postContent.image} setPostContent={setPostContent} setEditing={setEditing}/>
      }
    </div>
  ) 
}
