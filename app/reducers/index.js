import { combineReducers } from 'redux';

import questionaire from './questionaire';
import therapists from './therapists';

export default combineReducers({
  questionaire,
  therapists,
});
