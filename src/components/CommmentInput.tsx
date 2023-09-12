import { useEffect, useState, useRef } from "react"
import styles from "../styles/CommentInput.module.css"

type Props = {
  setBoxHeight: React.Dispatch<React.SetStateAction<number>>;
}

export default function CommentInput({setBoxHeight}: Props) {
  const [text, setText] = useState("")
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const getScrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = getScrollHeight + "px";
      setBoxHeight(getScrollHeight);
    }
  }, [setBoxHeight,textareaRef, text])
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setText(val)
  }

  return (
    <div className={styles.textArea}>
      <label htmlFor="commentInput"> </label>
      <textarea 
        className={styles.input}
        id="commentInput"
        placeholder="Comment...."
        onChange={handleChange}
        value={text}
        ref={textareaRef}
      />
    </div>
  )
}
