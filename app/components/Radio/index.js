import React, { Component } from 'react';
import styles from './styles';
import { connect } from 'react-redux';

import { answerQuestion } from '../../actions/questionaire';

@connect((store) => {
  return {}
})
export default class Radio extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.dispatch(answerQuestion(this.props.name, this.props.value));
  }

  render() {
    const { name, value, text, selected } = this.props;
    return (
      <div class={styles.radioWrapper} onClick={this.handleClick}>
        <input
          readOnly
          class={styles.radioInput}
          type="radio"
          checked={selected}
          name={name}
          value={value}
        />
        <span class={styles.radio} />
        {text}
      </div>
    );
  }
}
