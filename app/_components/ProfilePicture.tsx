import Image from "next/image";
import { useEffect } from "react";

type Props = {
  profilePictureURL: string;
  width?: number;
  height?: number;
  border?: number;
}

type ImageStyle = {
  [property: string]: string;
}

export default function ProfilePicture({profilePictureURL, height = 50, width = 50, border = 0}: Props) {
  
  const imageStyle: ImageStyle = {
    borderRadius: '50%',
    border: border == 0 ? 'none' : `${border}px solid pink`
  }

  return (
    <div>
      <Image src={profilePictureURL} width={width} height={height} alt="Profile Picture" style={imageStyle}/>
    </div>
  )
}
