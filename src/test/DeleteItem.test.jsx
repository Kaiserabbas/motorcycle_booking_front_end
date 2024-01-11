import React from 'react';
import { render } from '@testing-library/react';
import DeleteItem from '../components/DeteteItem';
import '@testing-library/jest-dom';

describe('DeleteItem component', () => {

  test('renders DeleteItem component', () => {
    const motorcycle = { id: 1, name: 'Test Motorcycle' };

    const { getByText } = render(
      <DeleteItem motorcycle={motorcycle} />
    );

    expect(getByText('Test Motorcycle')).toBeInTheDocument();
  });
});
