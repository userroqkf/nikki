import React, {useEffect, useRef, useState} from "react";
import styles from "../styles/PostInput.module.css";
  
type Props = {
  initialText? : string;
  setBoxHeight: React.Dispatch<React.SetStateAction<number>>;
}
export default function PostIput({initialText, setBoxHeight}: Props) {
  const [text, setText] = useState(initialText);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const getScrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = getScrollHeight + "px";
      setBoxHeight(getScrollHeight);
    }
  }, [textareaRef, text, setBoxHeight]);
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target?.value;
    setText(val);

  }
  return (
      <div className={styles.textArea}>
      <label htmlFor="postInput"> </label>
      <textarea 
        className={styles.input}
        id="postInput"
        placeholder="How is your day?"
        onChange={handleChange}
        ref={textareaRef}
        value={text}
      />
    </div>
  )
}
