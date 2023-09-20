import FollowingContainer from "@/components/FollowingContainer";
import styles from "@/styles/FollowingLayout.module.css"

type infoType  = {
  profilePictureURL: string;
  fullName: string;
  username: string;
  following: boolean;
}
export default function FollowingLayout() {
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

  return (
    <>
      <div className={styles.selectedPageName}>
        Following
      </div>
      {followingUserInfoTest.map((userinfo, index) => {
        return <FollowingContainer key={index} {...userinfo}/>
      })}
    </>
  )
}
