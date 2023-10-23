import { getUserId } from "lib/database/getUserId";
import FollowingLayout from "../_components/FollowingLayout";
import { getFollowingLists } from "lib/database/getFollowingList";
import { redirect } from "next/navigation";
import getWithSSRContext from "utils/getWithSSRContext";
import { formatFollowingLists } from "utils/helperFunctions"

export default async function Following() {

  const SSR = getWithSSRContext()
  try {
    const res = await SSR.Auth.currentAuthenticatedUser();
  } catch (err) {
    console.log('err', err);
    redirect('/auth/signin');
  }

  const res = await SSR.Auth.currentAuthenticatedUser();
  const userId = await getUserId(res.username)
  const data = await getFollowingLists(userId.id);
  const followingLists = await formatFollowingLists(data)

  return (
    <FollowingLayout data={followingLists} />
  )
}
