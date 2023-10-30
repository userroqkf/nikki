import FollowingContainer from "./FollowingContainer";
import styles from "@/_styles/FollowingLayout.module.css"

type Props = {
  profilePictureURL: string;
  fullName: string;
  username: string;
  following: boolean;
}

type FollowingLayoutProps = {
  data: Props[]; // Define data as an array of Props
};

export default function FollowingLayout({ data }: FollowingLayoutProps) {
  return (
    <>
      <div className={styles.selectedPageName}>
        Following
      </div>
      {data.map((userinfo, index) => {
        return <FollowingContainer key={index} {...userinfo}/>
      })}
    </>
  )
}
