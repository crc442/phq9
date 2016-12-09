import React, { PropTypes } from 'react';
import styles from './styles.css';

const Rating = ({ value }) => {
  const ratingWidth = (value / 5) * 100;
  const style = {
    width: `${ratingWidth}%`,
  };
  return (
    <div class={styles.ratingBox}>
      <div style={style} class={styles.rating} />
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Rating;
