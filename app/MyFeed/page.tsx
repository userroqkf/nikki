import { getFeedPosts } from "lib/database/getFeedPosts";
import Layout from "../_components/Layout";
import MyFeedLayout from "../_components/MyFeedLayout";
import { formatFeedPosts, formatFeedUserData, getImageURL } from "utils/helperFunctions";
import { getUserData } from "lib/database/getUserData";

export default async function MyFeed() {
  const currUser = "johndoe"
  const feedPosts = await getFeedPosts(currUser,currUser);
  const feedUserData = await getUserData(currUser);
  const formattedFeedUserData = await formatFeedUserData(feedUserData)
  const formattedFeedPosts = await formatFeedPosts(feedPosts)
  return (
    <MyFeedLayout feedPosts={formattedFeedPosts} userData={formattedFeedUserData}/>
  )
}
