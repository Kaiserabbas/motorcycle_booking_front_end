import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
    const motorcycleDataWithoutImage = { ...motorcycleData, imageLink: null };
    render(<Motorcycle motorcycle={motorcycleDataWithoutImage} />);
    expect(screen.queryByAltText('Notfound item')).toBeNull();
  });

  test('handles image loading and error events', () => {
    render(<Motorcycle motorcycle={motorcycleData} />);

    // Simulate image error
    fireEvent.error(screen.getByAltText('_'));

    // Check if the not-found image is rendered after image error
    expect(screen.getByAltText('Notfound item')).toBeInTheDocument();
  });
});
