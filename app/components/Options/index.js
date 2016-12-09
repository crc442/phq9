import React, { PropTypes } from 'react';
import styles from './styles.css';

import Radio from '../Radio';

const Options = ({ forQ, selected }) => {
  const options = [
    {
      text: 'Not At All',
      value: 0,
    },
    {
      text: 'Several Days',
      value: 1,
    },
    {
      text: 'More Than Half The Days',
      value: 2,
    },
    {
      text: 'Nearly Everyday',
      value: 3,
    },
  ];

  const radioOptions = options.map(opt => (
    <Radio
      key={opt.value}
      selected={selected === opt.value}
      value={opt.value}
      text={opt.text}
      name={forQ}
    />
  ));

  return (
    <div class={styles.answer}>
      {radioOptions}
    </div>
  );
};

Options.propTypes = {
  forQ: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
};

export default Options;
