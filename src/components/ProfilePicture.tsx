import Image from "next/image";

type Props = {
  profilePictureURL: string;
  width?: number;
  height?: number;
  border?: number;
}

type ImageStyle = {
  [property: string]: string;
}


export default function ProfilePicture({ profilePictureURL, height = 50, width = 50, border = 0}: Props) {
  const imageStyle: ImageStyle = {
    borderRadius: '50%',
    border: border == 0 ? 'none' : `${border}px solid pink`
  }

 return (
    <Image src={profilePictureURL} width={width} height={height} alt="Profile Picture" style={imageStyle}/>
  )
}
