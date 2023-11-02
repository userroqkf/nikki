'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faH, faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useMemo, useState } from "react";
import styles from "@/_styles/LikeButton.module.css";
import numeral from "numeral";
import { AuthContext } from "./AuthContext";
import { redirect, useRouter } from "next/navigation";

type Props = {
  likeCount: number;
  liked: boolean;
  postId: number;
  currUser: string;
}

export default function LikeButton({likeCount, liked, currUser, postId}: Props) {
  //Might be a better idea to use useMemo instead of useState
  const {userContext } = useContext(AuthContext)
  const [like, setLike] = useState<boolean>(liked);
  const [likeCountUpdate, setLikeCountUpdage] = useState<number>(likeCount)
  const router = useRouter()

  const updateLikeButton = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (userContext) {
      if (!like) await fetch("/api/like", {method: "POST", body: JSON.stringify({currUser, postId}) });
      if (like) await fetch("/api/like", {method: "DELETE", body: JSON.stringify({currUser, postId}) });
      like ? setLikeCountUpdage(prev => prev - 1) : setLikeCountUpdage(prev => prev + 1)
      setLike(!like);
    } else {
      router.push('/auth/signin')
    }
  }

  const numberToString = (num: number) => {
    if( num < 1000 ) return num
    return numeral(num).format('0.0a')
  }
  return (
    <div>
      {
        <button className={styles.likeButton} onClick={updateLikeButton}>
          <FontAwesomeIcon  icon={like ? faHeartSolid : faHeart} />
        </button>
      }
      <span>{numberToString(likeCountUpdate)}</span>
    </div> 
  );
}
