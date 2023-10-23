import { formatFeedPosts, formatFollowingPosts } from "utils/helperFunctions";
import HomePageLayout from "./_components/HomePageLayout";
import { getFollowingPosts } from "lib/database/getFollowingPosts";
import { checkUserLikedPost } from "lib/database/checkUserLikedPost";

import { Amplify, Auth, withSSRContext} from 'aws-amplify';
import { redirect, useRouter } from "next/navigation";
import awsconfig from './aws-exports';

import getWithSSRContext from 'utils/getWithSSRContext';

import { headers } from 'next/headers';
import { getUserId } from "lib/database/getUserId";

Amplify.configure({ ...awsconfig, ssr: true });

export default async function Home() {
  
  const SSR = getWithSSRContext()
  try {
    const res = await SSR.Auth.currentAuthenticatedUser();
  } catch (err) {
    console.log('err', err);
    redirect('/auth/signin');
  }
  const res = await SSR.Auth.currentAuthenticatedUser();
  const userId = await getUserId(res.username)
  const followingPosts = await getFollowingPosts(userId.id)
  const posts = await formatFeedPosts(followingPosts);

  return (
    <HomePageLayout posts={posts}/>
  )
}
