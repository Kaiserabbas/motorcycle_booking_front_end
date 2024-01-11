import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Motorcycle from '../components/motorcycle';

describe('Motorcycle component', () => {
  const motorcycleData = {
    name: 'Test Motorcycle',
    model: 'Test Model',
    description: 'Test Description',
    imageLink: 'test-image-link.jpg',
  };

  test('renders not-found image when imageLink is not available', () => {
    render(<Motorcycle motorcycle={motorcycleData} />);
    expect(screen.queryByAltText('Notfound item')).toBeFalsy();
  });

  test('handles image loading and error events', () => {
    const currentScreen= render(<Motorcycle motorcycle={motorcycleData} />);
    expect(currentScreen).toMatchSnapshot();
  });
});
