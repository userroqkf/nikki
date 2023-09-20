import { useEffect, useState, useRef, Dispatch, SetStateAction} from "react";
import styles from "@/_styles/EditingBox.module.css";
import Button from "./Button";
import PostIput from "./PostInput";
import UploadFileButton from "./UploadFileButton";
import ImagePreview from "./ImagePreview";

type Props = {
  initialText: string;
  initialImage: string | undefined
  setEditing: Dispatch<SetStateAction<boolean>>;
}
export default function EditingBox({initialText, initialImage, setEditing}: Props) {
  const DefaultPostEditPadding = 100;
  const [boxHeight, setBoxHeight] = useState<number>(DefaultPostEditPadding);
  const [showImage, setShowImage] = useState<string>(initialImage ? initialImage : "")
  const [imageHeight, setImageHeight] = useState<number>(0)

  const editBoxRef = useRef<HTMLDivElement>(null);
  const previewImageRef = useRef<HTMLInputElement>(null);
  
    const uploadImage = () => {

  }

  const validatePost = (input: string): boolean => {
    //validate if text is not empty
    //validate that image url is valid
    if (input.length === 0) {
      Error("Please input valid string")
      return false
    }
    return input.length !== 0
  }

  const updatePost = () => {
    // upload image and get url
    //set editing false
    setEditing(false)
  }



  useEffect(() => {
    if (editBoxRef.current) {
      editBoxRef.current.style.height = boxHeight + imageHeight + DefaultPostEditPadding + 'px';
    }
  }, [boxHeight, imageHeight])

  return (
    <div className={styles.postBoxLayout} ref={editBoxRef}>
      <div className={styles.inputLayout}>
        <PostIput initialText={initialText} setBoxHeight={setBoxHeight}/>
        {showImage && <ImagePreview setImageHeight={setImageHeight} setShowImage={setShowImage} showImage={showImage} />}
        <div className={styles.buttonPosition}>
          <UploadFileButton context={"editbutton"} setShowImage={setShowImage} ref={previewImageRef} />
          <div className={styles.actionButton}>
            <div onClick={() => setEditing(false)}>
              <Button label="cancel" size="medium" style="empty"/>
            </div>
            <div onClick={updatePost}>
              <Button label="nikki" size="medium" style="solid"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}

