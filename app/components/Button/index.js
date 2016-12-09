import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './styles.css';

const Button = ({ path, text }) => <Link to={path} class={styles.btn}>{text}</Link>;

Button.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
