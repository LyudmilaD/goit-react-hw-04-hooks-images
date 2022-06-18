import { useState } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

import styles from '../App.module.css';

export const Searchbar = ({ changeSearch }) => {
  const [input, setInput] = useState('');

  const handleSearch = element => {
    setInput(element.currentTarget.value.toLowerCase());
  };

  const onSubmit = element => {
    element.preventDefault();
    if (input.trim() === '') {
      return Notiflix.Notify.failure(
        'Please enter your query in query text box.'
      );
    }
    changeSearch(input);
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          value={input}
          onChange={handleSearch}
          placeholder="Search images and photos"
        />

        <button type="submit" className={styles.button}>
          <span className={styles.buttonLabel}>Search</span>
        </button>
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  changeSearch: PropTypes.func.isRequired,
};

export default Searchbar;
