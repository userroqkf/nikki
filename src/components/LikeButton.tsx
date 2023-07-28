import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

type Props = {
  likeCount: number;
  liked: boolean;
}

export default function LiekButton({likeCount, liked}: Props) {
  const [like, setLike] = useState(liked);
  const [loading, setLoading] = useState(True);

  const updateLikeButton = () => {
    console.log("here")
    setLike(!like);
    console.log(like)
  }
    {!loading ? 
      <div onClick={updateLikeButton}>
        {
         like ? <FontAwesomeIcon icon={faHeart}/> : <FontAwesomeIcon icon={faHeartSolid}/>
        }
        {likeCount}
      </div> : <div>Loading</div>
    }
}
