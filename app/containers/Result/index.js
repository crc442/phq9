import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Score from '../../components/Score';

@connect(({ questionaire }) => {
  return {
    totalScore: questionaire.currentScore,
    depressionState: questionaire.depressionState,
  };
})
export default class Result extends Component {
  render() {
    let comp = null;
    if (this.props.isComplete) {
      comp = <Score total={this.props.totalScore} severity={this.props.depressionState} />;
    } else {
      comp = <Link to="/">Complete Test</Link>
    }
    return (
      <div>
        {comp}
      </div>
    );
  }
}
