import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import Tracker from 'components/Tracker';

const minProps = { answered: [] };

test('TrackerComponent: renders without exploding', t => {
  const wrapper = shallow(<Tracker {...minProps} />);
  t.is(wrapper.length, 1);
});

test('TrackerComponent: renders 4 `p` tags', t => {
  const answered = [1, 2, -1, 2];
  const wrapper = shallow(<Tracker {...minProps} answered={answered} />);
  t.is(wrapper.find('p').length, 4);
});
