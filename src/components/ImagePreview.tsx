import { SetStateAction, useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/ImagePreview.module.css"

type Props = {
  showImage: string;
  setImageHeight: React.Dispatch<SetStateAction<number>>;
  setShowImage: React.Dispatch<SetStateAction<string>>;
}

export default function ImagePreview({showImage, setImageHeight, setShowImage}: Props) {
  const imagePreviewRef = useRef<HTMLImageElement>(null);

  const imageWidthHeightCalculation = (width: number, height: number): number[] => {
    const maxWidth = 510;
    const reducedMultiple = width/maxWidth;
    return width > maxWidth ? [maxWidth, height/reducedMultiple] : [width, height];
  }

  const getImageDimensions = () => {
    if (imagePreviewRef.current) {
      const imageWidth = imagePreviewRef.current.scrollWidth;
      const imageHeight = imagePreviewRef.current.scrollHeight; 
      const [widthCalc, heightCalc] = imageWidthHeightCalculation(imageWidth, imageHeight);
      setImageHeight(heightCalc);
      imagePreviewRef.current.style.width = widthCalc + 'px';
      imagePreviewRef.current.style.height = heightCalc + 'px';
    }
  }

  const removeImagePreview = () => {
    setShowImage("")
    setImageHeight(0)
  }

  return (
    <div className={styles.imagePreview}>
      <div className={styles.closeButton}>
        <FontAwesomeIcon icon={faTrash} onClick={removeImagePreview}/>
      </div>
      <img alt="image-preview" src={showImage} ref={imagePreviewRef} onLoad={getImageDimensions}/>
    </div>
  );
}
