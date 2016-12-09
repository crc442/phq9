import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(({ therapists }) => {
  return {
    selected: therapists.selectedTherapist,
  };
})
export default class Thanks extends Component {
  render() {
    return (
      <div>
        Thank you! Dr. {this.props.selected.first_name} {this.props.selected.last_name} will
        get in touch with you shortly.
      </div>
    );
  }
}
