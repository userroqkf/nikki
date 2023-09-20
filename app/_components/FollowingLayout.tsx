import FollowingContainer from "./FollowingContainer";
import styles from "@/_styles/FollowingLayout.module.css"

export default function FollowingLayout({data}) {
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
