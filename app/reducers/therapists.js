export default function reducer(state={
    therapists: [],
    fetching: false,
    fetched: false,
    error: false,
    submitted: false,
    selectedTherapist: {},
  }, action) {

    switch (action.type) {
      case 'FETCH_THERAPISTS': {
        return {...state, fetching: true};
      }

      case 'FETCH_THERAPISTS_REJECTED': {
        return {...state, fetching: false, error: action.payload}
      }

      case 'FETCH_THERAPISTS_FULFILLED': {
        return {
          ...state,
          fetching: false,
          fetched: true,
          therapists: action.payload
        }
      }

      case 'SELECT_THERAPIST': {
        return {
          ...state,
          selectedTherapist: state.therapists.find(therapist => therapist.id === action.payload)
        }
      }

      case 'THERAPIST_SUBMITTED': {
        return {...state, submitted: true}
      }

    }
    return state;
}
