import React, { PropTypes } from 'react';
import styles from './styles.css';

const Tracker = ({ answered }) => {
  const numbers = answered.map((n, i) => (
    <p key={i} class={n > -1 ? styles.active : ''}>
      {i + 1}
    </p>
  ));
  return (
    <div class={styles.numbers}>
      { numbers }
    </div>
  );
};

Tracker.propTypes = {
  answered: PropTypes.array.isRequired,
};

export default Tracker;
