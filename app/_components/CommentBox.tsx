"use client"
import ProfilePicture from "./ProfilePicture"
import Button from "./Button"
import styles from "@/_styles/CommentBox.module.css"
import CommentInput from "./CommmentInput";
import { useState, useRef, useEffect } from "react";

type Props = {
  profilePictureURL: string;
}
export default function CommentBox({profilePictureURL}: Props) {
  const DefaultPostBoxPadding = 100;
  const [boxHeight, setBoxHeight] = useState<number>(DefaultPostBoxPadding);
  const postBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (postBoxRef.current) {
      postBoxRef.current.style.height = boxHeight + DefaultPostBoxPadding + 'px';
    }
  }, [boxHeight])

  return (
    <div className={styles.commentBoxLayout} ref={postBoxRef}>
      <div className={styles.imagePosition}>
        <ProfilePicture profilePictureURL={profilePictureURL}/>
      </div>
      <div className={styles.inputLayout}>
          <CommentInput setBoxHeight={setBoxHeight}/>
        <div className={styles.buttonPosition}>
          <Button label="nikki" size="medium" style="solid" />
        </div>
      </div>
    </div>
  )
}
