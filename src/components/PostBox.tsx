import { useEffect, useState, useRef} from "react";
import styles from "../styles/Postbox.module.css";
import Button from "./Button";
import PostIput from "./PostInput";
import ProfilePicture from "./ProfilePicture";
import UploadFileButton from "./UploadFileButton";
import Image from "next/image";
import ImagePreview from "./ImagePreview";

export default function PostBox() {
  const DefaultPostBoxPadding = 100;
  const [boxHeight, setBoxHeight] = useState<number>(DefaultPostBoxPadding);
  const [showImage, setShowImage] = useState<string>("")
  const [imageHeight, setImageHeight] = useState<number>(0)
  const postBoxRef = useRef<HTMLDivElement>(null);
  const previewImageRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (postBoxRef.current) {
      postBoxRef.current.style.height = boxHeight + imageHeight + DefaultPostBoxPadding + 'px';
    }
  }, [boxHeight, imageHeight])


  const profilePictureURL = "https://picsum.photos/id/237/200/300";
  


  return (
    <div className={styles.postBoxLayout} ref={postBoxRef}>
      <div className={styles.imagePosition}>
        <ProfilePicture profilePictureURL={profilePictureURL}/>
      </div>
      <div className={styles.inputLayout}>
        <PostIput setBoxHeight={setBoxHeight}/>
        {showImage && <ImagePreview setImageHeight={setImageHeight} showImage={showImage} />}
        <div className={styles.buttonPosition}>
          <UploadFileButton setShowImage={setShowImage} ref={previewImageRef} />
          <Button label="nikki" size="medium" style="solid"/>
        </div>
      </div>
    </div>
  ) 
}
