import React, { PropTypes } from 'react';
import styles from './styles.css';

import Footer from '../../components/Footer';
import Question from '../../components/Question';

const Questions = ({ questions, isComplete, answered }) => {
  const mappedQuestions = questions.map((q, i) =>
    <Question key={i} index={i} text={q} score={answered[i]} />);
  return (
    <div class={styles.container}>
      <i>
        Over the last two weeks, how often have you been bothered
        by any of the following problems?
      </i>
      { mappedQuestions }
      <Footer complete={isComplete} answered={answered} />
    </div>
  );
};

Questions.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.string),
  isComplete: PropTypes.bool,
  answered: PropTypes.arrayOf(PropTypes.number),
};

export default Questions;
