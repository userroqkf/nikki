import { useEffect, useState, useRef } from "react";
import styles from "../styles/Postbox.module.css";
import Button from "./Button";
import PostIput from "./PostInput";
import ProfilePicture from "./ProfilePicture";
import UploadFileButton from "./UploadFileButton";
import Image from "next/image";

export default function PostBox() {
  const DefaultPostBoxPadding = 100;
  const [boxHeight, setBoxHeight] = useState(DefaultPostBoxPadding);
  const postBoxRef = useRef<HTMLDivElement>(null);
  const previewImageRef = useRef<HTMLInputElement>(null);
 
  const testingref = useRef<HTMLImageElement>(null);
  const [showImage, setShowImage] = useState("")
  

  const [imageHeight, setImageHeight] = useState("")

  useEffect(() => {
    if (postBoxRef.current) {
      postBoxRef.current.style.height = boxHeight + DefaultPostBoxPadding + imageHeight +'px';
    }
    console.log(postBoxRef.current?.style.height, testingref.current?.style.height)
  }, [boxHeight, imageHeight])


  const profilePictureURL = "https://picsum.photos/id/237/200/300";
  
  const getImageHeight = () => {
    if (testingref.current) {
      console.log("testingref", testingref)
      setImageHeight(testingref.current.style.height)
    }
  }

  return (
    <div className={styles.postBoxLayout} ref={postBoxRef}>
      <div className={styles.imagePosition}>
        <ProfilePicture profilePictureURL={profilePictureURL}/>
      </div>
      <div className={styles.inputLayout}>
        <PostIput setBoxHeight={setBoxHeight}/>
        {showImage && <img alt="image-preview" height={400} width={400} src={showImage} ref={testingref} onChange={getImageHeight}/>}
        <div className={styles.buttonPosition}>
          <UploadFileButton showImage={showImage} setShowImage={setShowImage} ref={previewImageRef} />
          <Button label="nikki" size="medium"/>
        </div>
      </div>
    </div>
  ) 
}
