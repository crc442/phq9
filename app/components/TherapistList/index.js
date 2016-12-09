import React, { PropTypes } from 'react';

import Therapist from '../Therapist';

const TherapistList = ({ therapists, selectedTherapist, dispatch }) => {
  const mappedTherapists = therapists.map((t, i) => (
    <Therapist
      dispatch={dispatch}
      selected={t.id === selectedTherapist.id}
      key={i}
      info={t}
    />
  ));
  return (
    <div>
      We would like you to contact one of the following
      therapists :
      {mappedTherapists}
    </div>
  );
};

TherapistList.propTypes = {
  therapists: PropTypes.array.isRequired,
  selectedTherapist: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default TherapistList;
