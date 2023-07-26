import React, {useEffect, useRef, useState} from "react";
import styles from "../styles/PostInput.module.css";

type Props = {
  setBoxHeight: React.Dispatch<React.SetStateAction<number>>;
}
export default function PostIput({setBoxHeight}: Props) {
  const [text, setText] = useState("");
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
    console.log(val)
    setText(val);

  }
  return (
    <div className={styles.textArea}>
      <label  htmlFor="postInput"> </label>
      <textarea 
        className={styles.input}
        id="postInput"
        placeholder="How is your day?"
        onChange={handleChange}
        ref={textareaRef}
        value={text}
      />
      {/*<input className={styles.input} type="text" placeholder="How is your day?"/>*/}
    </div>
  )
}
