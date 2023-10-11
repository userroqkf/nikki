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
  backgroundImageURL: string;
}

type Props =  {
  feedPosts: Array<feedPostsType>;
  userData: feedUserDataType;
}

export default function MyFeedLayout({feedPosts, userData}: Props) {
  return(
    <>
      <HomePageProfile 
        profilePictureURL={userData.profilePictureURL}
        backgroundImageURL={userData.backgroundImageURL}
        fullName={userData.fullName}
        username={userData.username}
        followingCount={183}
        followerCount={78}
        following={true}
        myFeed={true}
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
