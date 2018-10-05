import React from 'react';
import Header from '../Header';
import renderer from 'react-test-renderer';

describe('modules/shared/layouts/Header', () => {
  it('matchs', () => {
    const component = renderer.create(
      <Header />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
