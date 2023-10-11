import { useEffect, useState, useRef, Dispatch, SetStateAction} from "react";
import styles from "@/_styles/EditingBox.module.css";
import Button from "./Button";
import PostIput from "./PostInput";
import UploadFileButton from "./UploadFileButton";
import ImagePreview from "./ImagePreview";
import { uploadIamge } from "utils/helperFunctions";

type content =  {
  datePosted: string;
  text: string;
  image?: string | undefined;
  commentCount: number;
  likeCount: number;
  liked: boolean;
}

type Props = {
  initialText: string;
  initialImage: string | undefined;
  setEditing: Dispatch<React.SetStateAction<boolean>>;
  setPostContent: Dispatch<React.SetStateAction<content>>;
}
export default function EditingBox({initialText, initialImage, setEditing}: Props) {
  const DefaultPostEditPadding = 100;
  const [boxHeight, setBoxHeight] = useState<number>(DefaultPostEditPadding);
  const [showImage, setShowImage] = useState<string>(initialImage ? initialImage : "")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [text, setText] = useState<string>(initialText ? initialText : "")
  const [imageHeight, setImageHeight] = useState<number>(0)

  const editBoxRef = useRef<HTMLDivElement>(null);
  const previewImageRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editBoxRef.current) {
      editBoxRef.current.style.height = boxHeight + imageHeight + DefaultPostEditPadding + 'px';
    }
  }, [boxHeight, imageHeight])

  const updatePost = async () => {
    if (selectedFile) {
      const imageId = await uploadIamge(selectedFile)
    }
    // upload image
    // await fetch('api/post', {method: 'PUT', body: JSON.stringify(postContent)})
    // get content data 
    // change post content 
    setEditing(false)
  }


  return (
    <div className={styles.postBoxLayout} ref={editBoxRef}>
      <div className={styles.inputLayout}>
        <PostIput initialText={initialText} setBoxHeight={setBoxHeight} postText={text} setPostText={setText}/>
        {showImage && <ImagePreview setImageHeight={setImageHeight} setShowImage={setShowImage} showImage={showImage} />}
        <div className={styles.buttonPosition}>
          <UploadFileButton context={"editbutton"} setShowImage={setShowImage} ref={previewImageRef} setSelectedFile={setSelectedFile}/>
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

