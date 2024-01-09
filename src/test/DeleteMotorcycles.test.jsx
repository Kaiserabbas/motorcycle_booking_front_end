import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import DeleteMotorcycles from '../components/DeleteMotorcycles';

describe('DeleteMotorcycles', () => {
    test('renders DeleteMotorcycles component without crashing', () => {
        render(
            <Provider store={store}>
                <DeleteMotorcycles />
            </Provider>
        );
    });
});
