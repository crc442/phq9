import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import { Link } from 'react-router';
import Result from 'containers/Result';
import Score from 'components/Score';

const minProps = {
  totalScore: 0,
  depressionState: {},
  isComplete: false,
};

const ResultComponent = Result.WrappedComponent;

test('ResultComponent: renders without exploding', t => {
  const wrapper = shallow(<ResultComponent {...minProps} />);
  t.is(wrapper.length, 1);
});

test('ResultComponent: renders a `Link` component while incomplete', t => {
  const wrapper = shallow(<ResultComponent {...minProps} />);
  t.is(wrapper.find(Link).length, 1);
});

test('ResultComponent: `Link` links back to "home" page', t => {
  const wrapper = shallow(<ResultComponent {...minProps} />);
  t.is(wrapper.find(Link).prop('to'), '/');
});

test('ResultComponent: renders `Score` component on complete', t => {
  const wrapper = shallow(<ResultComponent {...minProps} isComplete={true} />);
  t.is(wrapper.find(Score).length, 1);
});
