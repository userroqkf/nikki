import { SetStateAction, useRef} from "react";

type Props = {
  showImage: string;
  setImageHeight: React.Dispatch<SetStateAction<number>>;
}

export default function ImagePreview({showImage, setImageHeight}: Props) {
  const imagePreviewRef = useRef<HTMLImageElement>(null);

  const imageWidthHeightCalculation = (width: number, height: number): number[] => {
    const maxWidth = 520;
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

  return (
    <img alt="image-preview"  src={showImage} ref={imagePreviewRef} onLoad={getImageDimensions}/>
  );
}
