import Image from "next/image";

type Props = {
  profilePictureURL: string;
}

type ImageStyle = {
  [property: string]: string;
}

const imageStyle: ImageStyle = {
  borderRadius: '50%',
}

export default function ProfilePicture({ profilePictureURL }: Props) {
  return (
    <Image src={profilePictureURL} width={50} height={50} alt="Profile Picture" style={imageStyle}/>
  )
}
