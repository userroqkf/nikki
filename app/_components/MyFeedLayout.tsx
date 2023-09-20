import HomePageProfile from "./HomePageProfile";
import PostContainer from "./PostContainer";

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

export default function MyFeedLayout({data}) {

  return(
    <>
      <HomePageProfile 
        profilePictureURL={"https://picsum.photos/id/237/300/300"}
        backgroundImageURL={"https://picsum.photos/seed/picsum/2000/3000"}
        fullName={"Frank Tom"}
        username={"franktom293"}
        followingCount={183}
        followerCount={78}
        following={true}
      />
      {data.map((data: postDataType, index: number) => {
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
