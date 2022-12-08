import React from 'react';
import renderer from 'react-test-renderer';

import Welcome from '../../pages/Welcome';

describe('<Welcome />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Welcome />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Welcome />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});