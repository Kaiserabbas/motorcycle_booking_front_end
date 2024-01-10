// Message.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Signup from '../components/Signup';
import '@testing-library/jest-dom';

test('renders Signup component with given message', () => {
  const signupText = 'Hello, this is a signup message!';
  render(<Signup message={signupText} />);

  const signupElement = screen.getByText(signupText);

  expect(signupElement).toBeInTheDocument();
});
