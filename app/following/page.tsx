import FollowingLayout from "../_components/FollowingLayout";

type infoType  = {
  profilePictureURL: string;
  fullName: string;
  username: string;
  following: boolean;
}

async function getData() {
  await new Promise(res => setTimeout(res, 3000));
  const followingUserInfoTest: infoType[]= [
    {
      profilePictureURL: "https://picsum.photos/id/237/200/300",
      fullName: "Jason Neo",
      username: "jasonneo392",
      following: true,
    },
    {
      profilePictureURL: "https://picsum.photos/id/237/200/300",
      fullName: "Jason Neo",
      username: "jasonneo392",
      following: true,
    },
    {
      profilePictureURL: "https://picsum.photos/id/237/200/300",
      fullName: "Jason Neo",
      username: "jasonneo392",
      following: true,
    },
    {
      profilePictureURL: "https://picsum.photos/id/237/200/300",
      fullName: "Jason Neo",
      username: "jasonneo392",
      following: true,
    },
    {
      profilePictureURL: "https://picsum.photos/id/237/200/300",
      fullName: "Jason Neo",
      username: "jasonneo392",
      following: true,
    },
  ]
  return followingUserInfoTest
}
export default async function Following() {
  const data = await getData();
  return (
    <FollowingLayout data={data} />
  )
}
