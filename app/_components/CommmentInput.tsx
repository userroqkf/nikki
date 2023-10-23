import { useEffect, useState, useRef, Dispatch } from "react"
import styles from "@/_styles/CommentInput.module.css"

type Props = {
  setText: Dispatch<React.SetStateAction<string>>;
  text: string;
  setBoxHeight: React.Dispatch<React.SetStateAction<number>>;
}

export default function CommentInput({setBoxHeight, setText, text}: Props) {
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
