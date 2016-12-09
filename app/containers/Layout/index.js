import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getQuestions } from '../../actions/questionaire';

import Header from '../../components/Header';

@connect(({ questionaire }) => ({
  questions: questionaire.questions,
  answered: questionaire.answered,
}))
export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }

  componentWillMount() {
    this.props.dispatch(getQuestions());
  }

  render() {
    const { questions, answered } = this.props;
    const isComplete = answered.indexOf(-1) === -1;
    return (
      <div>
        <Header />
        {
          React.cloneElement(this.props.children, { questions, answered, isComplete })
        }
      </div>
    );
  }
}
