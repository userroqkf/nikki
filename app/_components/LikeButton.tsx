import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useMemo, useState } from "react";
import styles from "@/_styles/LikeButton.module.css";
type Props = {
  likeCount: number;
  liked: boolean;
}

export default function LiekButton({likeCount, liked}: Props) {
  //Might be a better idea to use useMemo instead of useState
  const [like, setLike] = useState<boolean>(liked);
  const [likeCountUpdate, setLikeCountUpdage] = useState<number>(likeCount)

  const updateLikeButton = (e: React.SyntheticEvent) => {
    e.preventDefault()
    !like ? setLikeCountUpdage(prev => prev - 1) : setLikeCountUpdage(prev => prev + 1)
    setLike(!like);
  }
  return (
    <div>
      {
       <div className={styles.likeButton}>
          <FontAwesomeIcon onClick={updateLikeButton} icon={like ? faHeart : faHeartSolid} />
       </div>
      }
      <span>{likeCountUpdate}</span>
    </div> 
  );
}
