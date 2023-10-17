import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faH, faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useMemo, useState } from "react";
import styles from "@/_styles/LikeButton.module.css";
import numeral from "numeral";

type Props = {
  likeCount: number;
  liked: boolean;
  postId: number;
  currUser: string;
}

export default function LikeButton({likeCount, liked, currUser, postId}: Props) {
  //Might be a better idea to use useMemo instead of useState
  const [like, setLike] = useState<boolean>(liked);
  const [likeCountUpdate, setLikeCountUpdage] = useState<number>(likeCount)

  const updateLikeButton = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const url = `http://localhost:3000/api/like`;
    if (!like) await fetch(url, {method: "POST", body: JSON.stringify({currUser, postId}) });
    if (like) await fetch(url, {method: "DELETE", body: JSON.stringify({currUser, postId}) });
    like ? setLikeCountUpdage(prev => prev - 1) : setLikeCountUpdage(prev => prev + 1)
    setLike(!like);
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
