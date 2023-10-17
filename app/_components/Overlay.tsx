import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons"
import styles from "@/_styles/Overlay.module.css"
import { Dispatch, ReactNode, SetStateAction, useState } from "react"
import { getImageURL, uploadImage } from "utils/helperFunctions"
import { useRouter } from "next/navigation"
import Loading from "@/loading"
import LoadingSpinnerDynamic from "./LoadingSpinnerDynamic"

type Props = {
  children: ReactNode
  setBackgroundImage?: Dispatch<SetStateAction<string>>;
  setProfilePicture?: Dispatch<SetStateAction<string>>;
  context: string;
  username: string;
}

export default function Overlay({children, setProfilePicture, setBackgroundImage, context, username}: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  const onSelectFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLoading(true)
    if (e.target.files && e.target.files.length !== 0) {
      const imageURLResponse = await uploadImage(e.target.files[0])
      const imageURL =  getImageURL(imageURLResponse.id) as string

      if (setProfilePicture) {
        await fetch('api/user', {method: "PUT", body: JSON.stringify({username, profilePictureURL: imageURLResponse.id})})
        setProfilePicture(imageURL)
      }

      if (setBackgroundImage) {
        await fetch('api/user', {method: "PUT", body: JSON.stringify({username, backgroundImageURL: imageURLResponse.id})})
        setBackgroundImage(imageURL)
          }
    }
    setLoading(false)
  };

  return (
    <div className={styles.backgroundImageContainer}>
      <div className={styles.backgroundImage}>
        {children}
      </div>
      {!loading && <div className={styles.backgroundChangeImageButton}>
        <label htmlFor={context}>
        <FontAwesomeIcon icon={faCamera} />
        </label>
        <input id={context} type="file" accept="image/png, image/jpeg" onChange={onSelectFile}/>
      </div>}
    </div>
  )
}