import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/UploadFileButton.module.css";
import { SetStateAction, Dispatch,  forwardRef, useRef, useEffect} from "react";

type Props = {
  setShowImage: Dispatch<SetStateAction<string>>;
  context: string;
}

const UploadFileButton = forwardRef(function({setShowImage, context}: Props, ref: React.ForwardedRef<HTMLInputElement>) {

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const objectUrl = URL.createObjectURL(e.target.files[0])
      e.target.value = ""
      setShowImage(objectUrl)
    }
  };

  return ( 
  <div className={styles.imageUpload}>
      <label htmlFor={context}>
        <FontAwesomeIcon icon={faImage} />
      </label>
      <input id={context} type="file" accept="image/png, image/jpeg" ref={ref} onChange={onSelectFile}/>
  </div>
  )
});

UploadFileButton.displayName = 'UploadFileButton';

export default UploadFileButton;
