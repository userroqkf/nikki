import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/UploadFileButton.module.css";
import { SetStateAction, Dispatch,  forwardRef, useEffect, useRef, useState} from "react";

type Props = {
  showImage: string;
  setShowImage: Dispatch<SetStateAction<string>>;
}

const UploadFileButton = forwardRef(function({showImage, setShowImage}: Props, ref: React.ForwardedRef<HTMLInputElement>) {

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const objectUrl = URL.createObjectURL(e.target.files[0])
    setShowImage(objectUrl)
  }

  return ( 
  <div className={styles.imageUpload}>
      <label htmlFor="file-input">
        <FontAwesomeIcon icon={faImage} />
      </label>
        <input id="file-input" type="file" accept="image/png, image/jpeg" ref={ref} onChange={onSelectFile}/>
  </div>
  )
});

export default UploadFileButton;
