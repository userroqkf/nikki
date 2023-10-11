import FollowingLayout from "../_components/FollowingLayout";
import { getFollowingLists } from "lib/database/getFollowingList";
import { formatFollowingLists } from "utils/helperFunctions"

export default async function Following() {
  const data = await getFollowingLists("2");
  const followingLists = await formatFollowingLists(data)

  return (
    <FollowingLayout data={followingLists} />
  )
}
