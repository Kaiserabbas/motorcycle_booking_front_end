import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // Assuming you use redux-mock-store
import DeleteItem from '../components/DeteteItem';
import '@testing-library/jest-dom';

import { setToDelete } from '../redux/motorcycleSlice';

describe('DeleteItem component', () => {
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore({
      // Your initial Redux store state here
    });
  });

  test('renders DeleteItem component', () => {
    const motorcycle = { id: 1, name: 'Test Motorcycle' };

    const { getByText } = render(
      <Provider store={store}>
        <DeleteItem motorcycle={motorcycle} />
      </Provider>,
    );

    // Check if the component renders successfully
    expect(getByText('Test Motorcycle')).toBeInTheDocument();
  });
});
