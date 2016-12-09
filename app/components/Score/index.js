import React, { PropTypes } from 'react';
import styles from './styles.css';

import Therapists from '../../containers/Therapists';

const Score = ({ severity, total }) => {
  const therapists = severity.code > 1 ? <Therapists /> : null;
  const scoreStyle = {
    color: `${severity.color}`,
  };
  return (
    <div class={styles.all}>
      <div class={styles.display}>SCORE</div>
      <span style={scoreStyle} class={styles.score}>{total}</span>/27
      <p class={styles.text}>The score suggests { severity.code === 0 ? 'no' : severity.text } depression.</p>
      { therapists }
    </div>
  );
};

Score.propTypes = {
  severity: PropTypes.shape({
    text: PropTypes.string.isRequired,
    code: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
};

export default Score;
