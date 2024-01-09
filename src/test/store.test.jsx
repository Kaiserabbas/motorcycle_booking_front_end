import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '@testing-library/jest-dom';


test('renders with Redux store', () => {
  render(
    <Provider store={store}>
      <div>Test component with Redux store</div>
    </Provider>
  );

  // Add assertions as needed based on your testing requirements
  // For example, you can check if a specific component renders successfully
  const testComponent = screen.getByText(/Test component with Redux store/i);
  expect(testComponent).toBeInTheDocument();
});
