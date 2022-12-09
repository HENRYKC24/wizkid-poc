import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../../components/Header';

describe('<Header />', () => {
  it('has 3 children', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree.children.length).toBe(3);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});