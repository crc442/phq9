import axios from 'axios';

export function fetchTherapists() {
  return function(dispatch) {
    axios.get("/api/therapists")
      .then((response) => {
        dispatch({type: 'FETCH_THERAPISTS_FULFILLED', payload: response.data.data});
      })
      .catch((error) => {
        dispatch({type: 'FETCH_THERAPISTS_REJECTED', payload: error});
      });
  };
}

export function selectTherapist(id) {
  return {
    type: 'SELECT_THERAPIST',
    payload: id,
  }
}

export function submitTherapist() {
  return { type: 'THERAPIST_SUBMITTED' }
}
