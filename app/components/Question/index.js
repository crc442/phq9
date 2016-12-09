import React, { PropTypes } from 'react';
import styles from './styles.css';

import Options from '../Options';

const Question = ({ text, index, score }) => (
  <div class="questionWrapper">
    <p class={styles.qno}>Question {index + 1}</p>
    <p class={styles.question}>
      { text }
    </p>
    <Options forQ={index} selected={score} />
  </div>
);

Question.propTypes = {
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default Question;
