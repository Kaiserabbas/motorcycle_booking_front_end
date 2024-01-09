import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import motorcycleReducer from '../redux/motorcycleSlice';
import DeleteItem from '../components/DeteteItem';

test('renders DeleteItem and checks deletion', () => {
    const store = configureStore({
        reducer: {
            motorcycle: motorcycleReducer,
        },
    });

    const motorcycle = { name: 'Test Motorcycle', id: '1' };

    const { getByText } = render(
        <Provider store={store}>
            <DeleteItem motorcycle={motorcycle} />
        </Provider>
    );

    expect(getByText(/Test Motorcycle/i)).toBeInTheDocument();

    fireEvent.click(getByText(/Delete/i));

});
