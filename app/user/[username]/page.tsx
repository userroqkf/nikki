import { getFeedPosts } from "lib/database/getFeedPosts";
import HomePageProfile from "../../_components/HomePageProfile"
import PostContainer from "../../_components/PostContainer";
import { checkUserExists } from "lib/database/checkUserExists";
import { notFound } from "next/navigation";
import { getUserData } from "lib/database/getUserData";
import { formatFeedPosts, formatFeedUserData } from "utils/helperFunctions";


export default async function userPage({ params }: { params: { username: string } }) {
  const userId = params.username
  const userExists = await checkUserExists(userId)

  if (!Number(userExists)) {
    notFound()
  }

  const feedPosts = await getFeedPosts(1, userId)
  const formattedFeedPosts = formatFeedPosts(feedPosts)
  const userData = await getUserData(userId)
  const formattedFeedUserData = formatFeedUserData(userData)

  return (
    <div>
      <HomePageProfile 
        profilePictureURL={"https://picsum.photos/id/237/300/300"}
        backgroundImageURL={"https://picsum.photos/seed/picsum/2000/3000"}
        fullName={formattedFeedUserData.fullName}
        username={formattedFeedUserData.username}
        followingCount={183}
        followerCount={78}
        following={true}
      />
      {formattedFeedPosts.map((data, index: number) => {
        const { profilePictureURL, content, fullName, username }= data;
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
    </div>
  )  
}