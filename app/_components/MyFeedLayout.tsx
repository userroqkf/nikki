import HomePageProfile from "./HomePageProfile";
import PostContainer from "./PostContainer";

type feedPostsType = {
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
  background_image: string;
}

type Props =  {
  feedPosts: Array<feedPostsType>;
  userData: feedUserDataType;
}

export default function MyFeedLayout({feedPosts, userData}: Props) {
  console.log(userData);

  return(
    <>
      <HomePageProfile 
        profilePictureURL={"https://picsum.photos/id/237/300/300"}
        backgroundImageURL={"https://picsum.photos/seed/picsum/2000/3000"}
        fullName={userData.fullName}
        username={userData.username}
        followingCount={183}
        followerCount={78}
        following={true}
      />
      {feedPosts.map((post: feedPostsType, index: number) => {
        const { profilePictureURL, content, fullName, username }= post;
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
