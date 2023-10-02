import { getFollowingPosts } from "lib/database/getFollowingPosts";
import PostBox from "./PostBox";
import PostContainer from "./PostContainer";
import styles from "@/_styles/HomePageLayout.module.css"
import { formatFollowingPosts } from "utils/helperFunctions";

type postDataType = {
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

export default async function HomePageLayout({posts} : Props) {
  return(
    <>
      <div className={styles.selectedPageName}>
        Home
      </div>
      <PostBox />
      {posts.map((data: postDataType, index: number) => {
        const { profilePictureURL, content, fullName, username}= data;
        return (
          <PostContainer
            key={index}
            profilePictureURL={profilePictureURL}
            content={content}
            fullName={fullName}
            username={username} 
          />
        )
      })
      }
    </>
  )
}
