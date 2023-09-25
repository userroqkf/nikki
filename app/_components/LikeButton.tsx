import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faH, faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useMemo, useState } from "react";
import styles from "@/_styles/LikeButton.module.css";
type Props = {
  likeCount: number;
  liked: boolean;
}

export default function LikeButton({likeCount, liked}: Props) {
  //Might be a better idea to use useMemo instead of useState
  const [like, setLike] = useState<boolean>(liked);
  const [likeCountUpdate, setLikeCountUpdage] = useState<number>(likeCount)

  const updateLikeButton = (e: React.SyntheticEvent) => {
    e.preventDefault()
    like ? setLikeCountUpdage(prev => prev - 1) : setLikeCountUpdage(prev => prev + 1)
    setLike(!like);
  }
  return (
    <div>
      {
        <button className={styles.likeButton} onClick={updateLikeButton}>
          <FontAwesomeIcon  icon={like ? faHeartSolid : faHeart} />
        </button>
      }
      <span>{likeCountUpdate}</span>
    </div> 
  );
}
