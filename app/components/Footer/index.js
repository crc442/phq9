import React, { PropTypes } from 'react';

import styles from './styles.css';

import Tracker from '../Tracker';
import Button from '../Button';

const Footer = ({ complete, answered }) => {
  const button = (!complete) ? <Tracker answered={answered} /> : <Button path="/result" text="SUMBIT" />;
  return (
    <div class={styles.footer}>
      { button }
    </div>
  );
};

Footer.propTypes = {
  complete: PropTypes.bool.isRequired,
  answered: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Footer;
