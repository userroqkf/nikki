import PostBox from "./PostBox";
import PostContainer from "./PostContainer";
import styles from "@/_styles/HomePageLayout.module.css"

type postDataType = {
  profilePictureURL: string;
  content: {
    text: string;
    datePosted: string;
    likeCount: number;
    commentCount: number
  },
  fullName: string;
  username: string;
  liked: boolean;
}

export default async function HomePageLayout({data}) {
  const fetchedDataMock = data;
  return(
    <>
      <div className={styles.selectedPageName}>
        Home
      </div>
      <PostBox />
      {fetchedDataMock.map((data: postDataType, index: number) => {
        const { profilePictureURL, content, fullName, username, liked }= data;
        return (
          <PostContainer
            key={index}
            profilePictureURL={profilePictureURL}
            content={content}
            fullName={fullName}
            username={username} 
            liked={liked}
          />
        )
      })
      }
    </>
  )
}
