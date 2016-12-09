import test from 'ava';
import reducer from 'reducers/therapists';
import { selectTherapist } from 'actions/therapists';
import { reducerTest } from 'redux-ava';
import axios from 'axios';

test('selects a therapist', reducerTest(
  reducer,
  {
    therapists: [{id: 1}, {id: 2}, {id: 3}],
    selectedTherapist: {}
  },
  selectTherapist(2),
  {
    therapists: [{id: 1}, {id: 2}, {id: 3}],
    selectedTherapist: {id: 2} // id 2 is selected
  }
));

// api calls need to be separated and better simulated using 'nook'
test.cb('fetch 3 therapists', t => {
  axios
    .get('/api/therapists')
    .then(function (res) {
      t.is(res.data.data.length, 3);
    })
    .catch(function (err) {
      t.falsy(err);
    });
});
