import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons"
import styles from "@/styles/Overlay.module.css"
import { Dispatch, ReactNode, SetStateAction } from "react"

type Props = {
  children: ReactNode
  setBackgroundImage?: Dispatch<SetStateAction<string>>;
  setProfilePicture?: Dispatch<SetStateAction<string>>;
  context: string;
}

export default function Overlay({children, setProfilePicture, setBackgroundImage, context}: Props) {

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length !== 0) {
      const objectUrl = URL.createObjectURL(e.target.files[0])
      setProfilePicture && setProfilePicture(objectUrl)
      setBackgroundImage && setBackgroundImage(objectUrl)
    }
  };

  return (
    <div className={styles.backgroundImageContainer}>
      <div className={styles.backgroundImage}>
        {children}
      </div>
      <div className={styles.backgroundChangeImageButton}>
        <label htmlFor={context}>
        <FontAwesomeIcon icon={faCamera} />
        </label>
        <input id={context} type="file" accept="image/png, image/jpeg" onChange={onSelectFile}/>
      </div>
    </div>
  )
}