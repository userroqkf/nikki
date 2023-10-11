import React, {useEffect, useRef, useState} from "react";
import styles from "@/_styles/PostInput.module.css";
  
type Props = {
  initialText? : string;
  postText: string;
  setBoxHeight: React.Dispatch<React.SetStateAction<number>>;
  setPostText: React.Dispatch<React.SetStateAction<string>>;
}
export default function PostIput({initialText, setBoxHeight,postText, setPostText}: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const getScrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = getScrollHeight + "px";
      setBoxHeight(getScrollHeight);
    }
  }, [textareaRef, postText, setBoxHeight]);
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target?.value;
    // setText(val);
    setPostText(val)

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
        value={postText}
      />
    </div>
  )
}
