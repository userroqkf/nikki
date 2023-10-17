"use client"

import { useEffect, useState, useRef, Dispatch,SetStateAction} from "react";
import styles from "@/_styles/Postbox.module.css";
import Button from "./Button";
import PostIput from "./PostInput";
import ProfilePicture from "./ProfilePicture";
import UploadFileButton from "./UploadFileButton";
import ImagePreview from "./ImagePreview";
import { formaNewtPostData, formatBody, uploadImage} from "utils/helperFunctions";


type postDataType = {
  postId: number,
  profilePictureURL: string;
  content: {
    text: string;
    datePosted: string;
    likeCount: number;
    commentCount: number;
    liked: boolean;
  },
  fullName: string;
  username: string;
}

type Props = {
  setPostsState: Dispatch<SetStateAction<Array<postDataType>>>;
}

export default function PostBox({ setPostsState } : Props) {
  const DefaultPostBoxPadding = 100;
  const [boxHeight, setBoxHeight] = useState<number>(DefaultPostBoxPadding);
  const [showImage, setShowImage] = useState<string>("")
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageHeight, setImageHeight] = useState<number>(0)
  const postBoxRef = useRef<HTMLDivElement>(null);
  const previewImageRef = useRef<HTMLInputElement>(null);

  const [postText, setPostText] = useState<string>("")
  
  useEffect(() => {
    if (postBoxRef.current) {
      postBoxRef.current.style.height = boxHeight + imageHeight + DefaultPostBoxPadding + 'px';
    }
  }, [boxHeight, imageHeight])

  //TODO: get profilepicture url from current user 
  const profilePictureURL = "https://picsum.photos/id/237/200/300";

  const  handleFormSubmit = async (e: Event) => {
    e.preventDefault()
    const userId = 1
    let imageId = ""

    try {
      if (selectedFile) {
        const imageIdJSON = await uploadImage(selectedFile)
        imageId = imageIdJSON.id
      }
      // client should receive image key which then they can send to rds to save the post data
      const body = JSON.stringify({
        userId,
        imageId,
        postText,
      })

      const savedPostDataResponse = await fetch('/api/post', {method: 'POST', body: body})
      const userDataResponse = await fetch('api/user/?' + new URLSearchParams({id: userId .toString()}), {method:'GET'})
      const userData = await userDataResponse.json();
      const postData = await savedPostDataResponse.json();
      const formattedPostData = await formaNewtPostData(postData,userData)

      setShowImage("")
      setSelectedFile(null)
      setPostText("")
      setImageHeight(0)
      //FIXME: not preprending 
      setPostsState((prev) => [formattedPostData, ...prev])

    } catch(err) {

    }
  };

  return (
    <div className={styles.postBoxLayout} ref={postBoxRef} >
      <div className={styles.imagePosition}>
        <ProfilePicture profilePictureURL={profilePictureURL}/>
      </div>
      <div className={styles.inputLayout}>
        <PostIput setBoxHeight={setBoxHeight} setPostText={setPostText} postText={postText}/>
        {showImage && <ImagePreview setImageHeight={setImageHeight} setShowImage={setShowImage} showImage={showImage} />}
        <div className={styles.buttonPosition}>
          <UploadFileButton context={"newpostbutton"} setShowImage={setShowImage} ref={previewImageRef} setSelectedFile={setSelectedFile}/>
          <Button label="nikki" size="medium" style="solid" handleFormSubmit={handleFormSubmit}/>
        </div>
      </div>
    </div>
  ) 
}
