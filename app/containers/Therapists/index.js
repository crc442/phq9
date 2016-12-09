import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTherapists, submitTherapist } from '../../actions/therapists';

import TherapistList from '../../components/TherapistList';
import Thanks from '../Thanks';

@connect(({ therapists }) => ({
  therapists: therapists.therapists,
  fetching: therapists.fetching,
  fetched: therapists.fetched,
  errorFetching: therapists.error,
  submitted: therapists.submitted,
  selectedTherapist: therapists.selectedTherapist,
}))
export default class Therapists extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(fetchTherapists());
  }

  handleSubmit() {
    this.props.dispatch(submitTherapist());
  }

  render() {
    const {
      therapists,
      fetching,
      fetched,
      submitted,
      errorFetching,
      selectedTherapist
    } = this.props;
    const therapistSelected = Object.keys(selectedTherapist).length;
    let submitButton = therapistSelected ?
      <button onClick={this.handleSubmit} class="submit">SUBMIT</button> : null;
    let therapistComponent = null;

    if (!submitted) {
      if (fetching) {
        therapistComponent = <h4>Fetching..</h4>;
      }
      if (errorFetching) {
        therapistComponent = <h4>ERROR...try again!</h4>;
      }
      if (fetched) {
        therapistComponent = (<TherapistList
          dispatch={this.props.dispatch}
          therapists={therapists}
          selectedTherapist={selectedTherapist}
        />);
      }
    } else {
      submitButton = null;
      therapistComponent = <Thanks />;
    }

    return (
      <div>
        { therapistComponent }
        { submitButton }
      </div>
    );
  }
}
