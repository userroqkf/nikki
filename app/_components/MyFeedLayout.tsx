"use client"
import { useState } from "react";
import HomePageProfile from "./HomePageProfile";
import PostContainer from "./PostContainer";

type feedPostsType = {
  postId: number;
  profilePictureURL: string;
  content: {
    text: string;
    datePosted: string;
    likeCount: number;
    commentCount: number
    liked: boolean;
  },
  fullName: string;
  username: string;
}

type feedUserDataType = {
  profilePictureURL: string;
  fullName: string;
  username: string;
  backgroundImageURL: string;
  followingCount: number;
  followerCount: number;
}

type Props =  {
  feedPosts: Array<feedPostsType>;
  userData: feedUserDataType;
}

export default function MyFeedLayout({feedPosts, userData}: Props) {

  const [postsState, setPostsState] = useState<Array<feedPostsType>>(feedPosts)
  return(
    <>
    {/* TODO: update follwing and follower count */}
      <HomePageProfile 
        profilePictureURL={userData.profilePictureURL}
        backgroundImageURL={userData.backgroundImageURL}
        fullName={userData.fullName}
        username={userData.username}
        followingCount={userData.followingCount}
        followerCount={userData.followerCount}
        following={true}
        myFeed={true}
      />
      {postsState.map((post: feedPostsType, index: number) => {
        const { profilePictureURL, content, fullName, username, postId }= post;
        return (
          <PostContainer
            key={index}
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
