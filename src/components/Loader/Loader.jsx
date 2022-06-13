import { BallTriangle } from 'react-loader-spinner';

import styles from '../App.module.css';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <BallTriangle height="100" width="100" color="blue" ariaLabel="loading" />
    </div>
  );
};
export default Loader;
