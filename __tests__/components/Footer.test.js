import React from 'react';
import renderer from 'react-test-renderer';

import Footer from '../../components/Footer';

describe('<Footer />', () => {
  it('has 4 children', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree.children.length).toBe(4);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});