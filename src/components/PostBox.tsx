import { useEffect, useState, useRef } from "react";
import styles from "../styles/Postbox.module.css";
import Button from "./Button";
import PostIput from "./PostInput";
import ProfilePicture from "./ProfilePicture";

export default function PostBox() {
  const DefaultPostBoxPadding = 100;
  const [boxHeight, setBoxHeight] = useState(DefaultPostBoxPadding);
  const postBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (postBoxRef.current) {
      postBoxRef.current.style.height = boxHeight + DefaultPostBoxPadding + 'px';
    }
  }, [boxHeight])
  const profilePictureURL = "https://picsum.photos/id/237/200/300";
  return (
    <div className={styles.postBoxLayout} ref={postBoxRef}>
      <div className={styles.imagePosition}>
        <ProfilePicture profilePictureURL={profilePictureURL}/>
      </div>
      <div className={styles.inputLayout}>
        <PostIput setBoxHeight={setBoxHeight}/>
        <div className={styles.buttonPosition}>
          <Button label="nikki" size="medium"/>
        </div>
      </div>
    </div>
  ) 
}
