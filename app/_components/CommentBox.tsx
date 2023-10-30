"use client"
import ProfilePicture from "./ProfilePicture"
import Button from "./Button"
import styles from "@/_styles/CommentBox.module.css"
import CommentInput from "./CommmentInput";
import React, { useState, useRef, useEffect, useContext, Dispatch } from "react";
import { CurrUserContext } from "@/_components/CurrUserContext"
import { useRouter } from "next/navigation";
import getWithSSRContext from "utils/getWithSSRContext";
import { getUserId } from "lib/database/getUserId";
import { checkUserLikedPost } from "lib/database/checkUserLikedPost";
import { Auth } from "aws-amplify";
import { AuthContext } from "./AuthContext";

type Props = {
  postId: string;
}

export default function CommentBox({postId} : Props) {
  const DefaultPostBoxPadding = 100;
  const [boxHeight, setBoxHeight] = useState<number>(DefaultPostBoxPadding);
  const [text, setText] = useState("")
  const postBoxRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const {userContext} = useContext(AuthContext);

  useEffect(() => {
    if (postBoxRef.current) {
      postBoxRef.current.style.height = boxHeight + DefaultPostBoxPadding + 'px';
    }
  }, [boxHeight])

  // TODO: Finish postcomment
  const postComment = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (userContext) {
      try {
        const url = `http://localhost:3000/api/comment`; 
        const comment = await fetch(url, {method: 'POST', body: JSON.stringify({userId: userContext.userId, postId, commentText: text})})
        setText("")
        router.refresh();
      } catch (err) {
        }
      } else {
        router.push('/auth/signin')
      }
    }

  return (
    <div className={styles.commentBoxLayout} ref={postBoxRef}>
      {/* <div className={styles.imagePosition}>
        <ProfilePicture profilePictureURL={profilePictureURL}/>
      </div> */}
      <div className={styles.inputLayout}>
          <CommentInput setBoxHeight={setBoxHeight} setText={setText} text={text} />
        <div className={styles.buttonPosition}>
          <Button label="nikki" size="medium" style="solid" handleFormSubmit={async (e: React.MouseEvent<HTMLElement>) => postComment(e)}/>
        </div>
      </div>
    </div>
  )
}
