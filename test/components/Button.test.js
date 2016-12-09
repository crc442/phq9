import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import { Link } from 'react-router';
import Button from 'components/Button';

const minProps = { path: '', text: '' };

test('ButtonComponent: renders without exploding', t => {
  const wrapper = shallow(<Button {...minProps} />);
  t.is(wrapper.length, 1);
});

test('ButtonComponent: renders a `Link` component', t => {
  const wrapper = shallow(<Button {...minProps} />);
  t.is(wrapper.find(Link).length, 1);
});
