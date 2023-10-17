import { useEffect, useState, useRef, Dispatch, SetStateAction, useContext} from "react";
import styles from "@/_styles/EditingBox.module.css";
import Button from "./Button";
import PostIput from "./PostInput";
import UploadFileButton from "./UploadFileButton";
import ImagePreview from "./ImagePreview";
import { getImageURL, uploadImage } from "utils/helperFunctions";
import { CurrUserContext } from "./CurrUserContext";

type content =  {
  datePosted: string;
  text: string;
  image?: string | undefined;
  commentCount: number;
  likeCount: number;
  liked: boolean;
}

type Props = {
  postId: number;
  initialText: string;
  initialImage: string | undefined;
  setEditing: Dispatch<React.SetStateAction<boolean>>;
  setPostContent: Dispatch<React.SetStateAction<content>>;
}
export default function EditingBox({postId, initialText, initialImage, setEditing, setPostContent}: Props) {
  const DefaultPostEditPadding = 100;
  const [boxHeight, setBoxHeight] = useState<number>(DefaultPostEditPadding);
  const [showImage, setShowImage] = useState<string>(initialImage ? initialImage : "")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [text, setText] = useState<string>(initialText ? initialText : "")
  const [imageHeight, setImageHeight] = useState<number>(0)

  const editBoxRef = useRef<HTMLDivElement>(null);
  const previewImageRef = useRef<HTMLInputElement>(null);

  const userContext = useContext(CurrUserContext);

  useEffect(() => {
    if (editBoxRef.current) {
      editBoxRef.current.style.height = boxHeight + imageHeight + DefaultPostEditPadding + 'px';
    }
  }, [boxHeight, imageHeight])

  const updatePost = async () => {
    let imageId = ""
    if (selectedFile) {
      const imageIdResponse = await uploadImage(selectedFile)
      imageId = imageIdResponse.id
    }
    const updatedPostResponse = await fetch('api/post', {method: 'PUT', body: JSON.stringify({postId: postId, imageURL: imageId, editedText: text})})
    const updatedPost = await updatedPostResponse.json()
    const { image: updatedImage, text: updatedText} = updatedPost;
    setPostContent((prev) => {
      const imageURL = getImageURL(updatedImage)
      return {...prev, image: imageURL, text: updatedText}
    })
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

