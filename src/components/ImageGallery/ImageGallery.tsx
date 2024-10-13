import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../../images-api";


interface ImageGalleryProps {
  images: Image[];
  openModal: (image: string) => void;
}



const ImageGallery = ({ images, openModal }: ImageGalleryProps) => {
  return (
    <ul className={css.imgGallery}>
      {images.map((image) => {
        return (
          <li key={image.id} className={css.imgItem}>
            <ImageCard image={image} openModal={openModal} />
          </li>
        );
      })}
    </ul>
  )
}
export default ImageGallery;
