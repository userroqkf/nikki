import { useEffect, useState, useRef} from "react";
import styles from "../styles/EditingBox.module.css";
import Button from "./Button";
import PostIput from "./PostInput";
import UploadFileButton from "./UploadFileButton";
import ImagePreview from "./ImagePreview";

type Props = {
  initialText: string;
  initialImage: string | undefined
}
export default function EditingBox({initialText, initialImage}: Props) {
  const DefaultPostEditPadding = 100;
  const [boxHeight, setBoxHeight] = useState<number>(DefaultPostEditPadding);
  const [showImage, setShowImage] = useState<string>(initialImage ? initialImage : "")
  const [imageHeight, setImageHeight] = useState<number>(0)
  const editBoxRef = useRef<HTMLDivElement>(null);
  const previewImageRef = useRef<HTMLInputElement>(null);

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
          <Button label="nikki" size="medium" style="solid"/>
        </div>
      </div>
    </div>
  ) 
}

