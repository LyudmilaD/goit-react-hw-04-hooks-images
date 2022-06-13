import PropTypes from 'prop-types';
import styles from '../App.module.css';

export const Button = ({ handleLoadMore }) => {
  return (
    <button
      type="button"
      className={styles.buttonLoad}
      onClick={handleLoadMore}
    >
      Load more
    </button>
  );
};
export default Button;
Button.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};
