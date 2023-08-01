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
  const [likeCountUpdate, setLikeCountUpdage] = useState(likeCount)
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   console.log(like, liked)
  //   console.log("insdie useEffect first clg")
  //   if (like !== undefined) {
  //     console.log("insdie useEffect", like, liked)
  //     setLoading(false)
  //   } 
  //   setTimeout(() => {
  //     console.log("here", like, liked)
  //   }, 5000);
  // }, [like, setLoading])

  const updateLikeButton = () => {
    !like ? setLikeCountUpdage(prev => prev - 1) : setLikeCountUpdage(prev => prev + 1)
    console.log("here")
    setLike(!like);
    console.log(like)
  }
  return (
    // {!loading ? 
      <div onClick={updateLikeButton}>
        {
         like ? <FontAwesomeIcon icon={faHeart}/> : <FontAwesomeIcon icon={faHeartSolid}/>
        }
        {likeCountUpdate}
      </div> 
    // : <div>Loading</div>
    // }
  );
}
