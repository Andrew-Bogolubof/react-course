import React from 'react';
import { render } from '@testing-library/react';
import { Image } from '..';

describe('Image Component', () => {
  it('should be rendered', () => {
    const { asFragment } = render(<Image src="http://test.com" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
