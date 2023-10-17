"use client"
import PostBox from "./PostBox";
import PostContainer from "./PostContainer";
import styles from "@/_styles/HomePageLayout.module.css"
import { formatFollowingPosts } from "utils/helperFunctions";
import { useEffect, useState } from "react";

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
  posts: Array<postDataType>
}

export default function HomePageLayout({posts} : Props) {
  const [postsState, setPostsState] = useState<Array<postDataType>>(posts)


  useEffect(() => {
    console.log("post state useEffect",postsState);
  }, [,postsState])


  return(
    <>
      <div className={styles.selectedPageName}>
        Home
      </div>
      <PostBox setPostsState={setPostsState}/>
      {postsState.map((data: postDataType, index: number) => {
        const { postId, profilePictureURL, content, fullName, username}= data;
        return (
          <PostContainer
            key={postId}
            postId={postId}
            profilePictureURL={profilePictureURL}
            content={content}
            fullName={fullName}
            username={username} 
            setPostsState={setPostsState}
          />
        )
      })
      }
    </>
  )
}
