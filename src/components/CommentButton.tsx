import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment } from "@fortawesome/free-regular-svg-icons"
import styles from "@/styles/CommentButton.module.css";
type Props = {
  commentCount: number;
}

export default function CommentButton({commentCount}: Props) {
  return (
    <div>
      {
        <div className={styles.commentButton}><FontAwesomeIcon icon={faComment}/></div>
      }
      <span>{commentCount}</span>
    </div>
  )
}

