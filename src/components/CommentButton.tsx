import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment } from "@fortawesome/free-regular-svg-icons"

type Props = {
  commentCount: number;
}

export default function CommentButton({commentCount}: Props) {
  return (
    <div>
      {
        <FontAwesomeIcon icon={faComment}/>
      }
      {commentCount}
    </div>
  )
}

