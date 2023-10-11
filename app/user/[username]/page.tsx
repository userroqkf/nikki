import { getFeedPosts } from "lib/database/getFeedPosts";
import HomePageProfile from "../../_components/HomePageProfile"
import PostContainer from "../../_components/PostContainer";
import { checkUserExists } from "lib/database/checkUserExists";
import { notFound, redirect } from "next/navigation";
import { getUserData } from "lib/database/getUserData";
import { formatFeedPosts, formatFeedUserData } from "utils/helperFunctions";


export default async function userPage({ params }: { params: { username: string } }) {
  const username = params.username
  console.log(username);
  const userExists = await checkUserExists(username)
  console.log('user check', userExists);

  if (!Number(userExists)) {
    notFound()
  }

  // if (currUser === username) {
  //   // redirect()
  // }

  const feedPosts = await getFeedPosts("johndoe", username)
  const formattedFeedPosts = await formatFeedPosts(feedPosts)
  const userData = await getUserData(username)
  const formattedFeedUserData = await formatFeedUserData(userData)

  return (
    <div>
      <HomePageProfile 
        profilePictureURL={formattedFeedUserData.profilePictureURL}
        backgroundImageURL={formattedFeedUserData.backgroundImageURL}
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