import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hello from './Hello';

describe('<Hello />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Hello />);
    const hello = getByTestId('Hello');

    expect(hello).toBeInTheDocument();
  });
});