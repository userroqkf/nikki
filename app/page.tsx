import { formatFollowingPosts } from "utils/helperFunctions";
import HomePageLayout from "./_components/HomePageLayout";
import { getFollowingPosts } from "lib/database/getFollowingPosts";
import { checkUserLikedPost } from "lib/database/checkUserLikedPost";

import { Auth } from 'aws-amplify';

export default async function Home() {
  const userId = "1"

  const followingPosts = await getFollowingPosts(userId)
  const posts = formatFollowingPosts(followingPosts);

  return (
    <HomePageLayout posts={posts}/>
  )
}
