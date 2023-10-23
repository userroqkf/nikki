"use client"

import ProfilePicture from "./ProfilePicture";
import styles from "@/_styles/PostContainer.module.css"
import { Dispatch, SetStateAction, useContext, useEffect, useRef, useState} from "react";
import LikeButton from "./LikeButton";
import CommentButton from "./CommentButton";
import EditingBox from "./EditingBox";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { deletePost } from "utils/helperFunctions";
import { useRouter } from "next/navigation";
import { AuthContext } from "./AuthContext";


type postDataType = {
  postId: number
  profilePictureURL: string;
  content: {
    text: string;
    datePosted: string;
    likeCount: number;
    commentCount: number;
    liked: boolean;
  },
  fullName: string;
  username: string;
}

type Props = {
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
  setPostsState?: Dispatch<SetStateAction<Array<postDataType>>>;
  redirectHome?: boolean;
}

export default function PostContainer({postId, profilePictureURL, content, fullName, username, setPostsState, redirectHome} : Props) {
  const contentTextRef = useRef<HTMLDivElement>(null);
  const postContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter()
  const {userContext} = useContext(AuthContext);

  const [postContent, setPostContent] = useState(content);

  // useEffect(() => {
  //   console.log("check postContent", postContent);
  // }, [postContent])

  const [editing, setEditing] = useState<boolean>(false)

  const updateSetPostContent = async() => {
    await deletePost(postId);
    if (!redirectHome && setPostsState) { 
      setPostsState(prev => prev.filter(post => post.postId !== postId))
    } else {
      router.refresh()
      router.push("/")
    }
  }

  return (
    <div className={styles.postContainer} ref={postContainerRef}>
      { !editing && userContext?.username === username &&
        <button className={styles.buttonPosition}>
          <FontAwesomeIcon className={styles.editButton} title={"editButton"} icon={faPenToSquare} onClick={() => setEditing(true)}/>
          <FontAwesomeIcon className={styles.deleteButton} icon={faTrash} title={"deleteButton"} onClick={updateSetPostContent}/>
        </button> 
      }
      <div className={styles.profilePicturePosition}>
        <Link href={`user/${username}`}>
          <ProfilePicture profilePictureURL={profilePictureURL}/>
        </Link>
      </div>
    {!editing && 
      <div className={styles.postContentContainer}>
        <div className={styles.postInfo}>
        <Link href={`user/${username}`}>
          <span> {fullName} </span>
          <span> @{username} </span>
        </Link>
          <span> {postContent.datePosted} </span>
        </div>
        <Link href={`post/${postId}`}>
          <div className={styles.content}>
            <div ref={contentTextRef}>
              {postContent.text}
            </div>
            {postContent.image && <Image src={postContent.image} width={500} height={500} alt="image"/>}
          </div>
        </Link>
        <div className={styles.contentFooter}>
          {/* TODO: FIXME: need to update curruser later with authentication */}
          <LikeButton liked={postContent.liked} likeCount={postContent.likeCount} postId={postId} currUser={"johndoe"}/>
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
