import React, { PropTypes } from 'react';
import styles from './styles.css';

import { selectTherapist } from '../../actions/therapists';

import Rating from '../Rating';

const Therapist = ({ info, selected, dispatch }) => {
  const handleClick = () => {
    dispatch(selectTherapist(info.id));
  };

  return (
    <div class={styles.wrapper} onClick={handleClick}>
      <input class={styles.radio} readOnly checked={selected} type="radio" name="therapist" />
      <div class={styles.container}>
        <div class={styles.profile}>
          <img src={info.profile_pic} alt="profile" />
        </div>
        <div class={styles.info}>
          <div class={styles.name}>{info.first_name} {info.last_name}, {info.qualification}</div>
          <div class={styles.title}>{info.title}</div>
          <Rating value={info.rating} />
          <div class={styles.review}>&quot{info.review}&quot</div>
        </div>
      </div>
    </div>
  );
};

Therapist.propTypes = {
  info: PropTypes.object.isRequired,
  selected: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Therapist;
