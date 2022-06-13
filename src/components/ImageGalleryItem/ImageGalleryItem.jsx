import PropTypes from 'prop-types';

import styles from '../App.module.css';

export const ImageGalleryItem = ({ image, onModalOpen }) => {
  const { webformatURL, largeImageURL, tags } = image;
  const handleClick = modalImg => {
    onModalOpen(modalImg, tags);
  };

  return (
    <li
      className={styles.item}
      onClick={() => handleClick(largeImageURL, tags)}
    >
      <img className={styles.image} src={webformatURL} alt={tags} />
    </li>
  );
};
export default ImageGalleryItem;
ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onModalOpen: PropTypes.func.isRequired,
};
