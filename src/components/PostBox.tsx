import { useEffect, useState, useRef} from "react";
import styles from "@/styles/Postbox.module.css";
import Button from "@/components/Button";
import PostIput from "@/components/PostInput";
import ProfilePicture from "@/components/ProfilePicture";
import UploadFileButton from "@/components/UploadFileButton";
import ImagePreview from "@/components/ImagePreview";

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
        {showImage && <ImagePreview setImageHeight={setImageHeight} setShowImage={setShowImage} showImage={showImage} />}
        <div className={styles.buttonPosition}>
          <UploadFileButton context={"newpostbutton"} setShowImage={setShowImage} ref={previewImageRef} />
          <Button label="nikki" size="medium" style="solid"/>
        </div>
      </div>
    </div>
  ) 
}
