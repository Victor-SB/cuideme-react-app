
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../pages/Login';

test('renders login screen', () => {
  render(<Login />);
  expect(screen.getByText('Cuide.Me')).toBeInTheDocument();
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Senha/i)).toBeInTheDocument();
  expect(screen.getByText(/ENTRAR/i)).toBeInTheDocument();
});
