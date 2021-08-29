import React from 'react';
import { render } from '@testing-library/react';
import { BasicNewbutton } from './newbutton.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicNewbutton />);
  const rendered = getByText('hello from Newbutton');
  expect(rendered).toBeTruthy();
});
