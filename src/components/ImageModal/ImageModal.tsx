import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { FC } from "react";

Modal.setAppElement(document.getElementById("root"));

export interface selectedImage {
  src: string;
  urls: {
    small?: string;
    regular?: string;
  };
  alt_description?: string;
  description: string;
  likes: number;

}

export interface ImageModalProps {
  isClose: boolean;
  closeModal: (state: boolean) => void;
  image: selectedImage;
}


const ImageModal: FC<ImageModalProps> = ({ image, isClose }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={!!image}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
      onRequestClose={isClose}
      contentLabel="image modal window"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      
      <img src={image.urls.regular} alt={image.alt_description} className={css.image} />
      <ul className={css.imageInfo}>
      <p>{image.description || "Image without description"}</p>
      <li>Likes: {image.likes}</li>
      </ul>
    </Modal>
  );
};

export default ImageModal;

