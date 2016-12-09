import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import Footer from 'components/Footer';
import Tracker from 'components/Tracker';
import Button from 'components/Button';

const minProps = { complete: false, answered: [] };

test('FooterComponent: renders without exploding', t => {
  const wrapper = shallow(<Footer {...minProps} />);
  t.is(wrapper.length, 1);
});

test('FooterComponent: renders a `Tracker` component while incomplete', t => {
  const wrapper = shallow(<Footer {...minProps} />);
  t.is(wrapper.find(Tracker).length, 1);
});

test('FooterComponent: renders a `Button` component on complete', t => {
  const isComplete = true;
  const wrapper = shallow(<Footer {...minProps} complete={isComplete} />);
  t.is(wrapper.find(Button).length, 1);
});
