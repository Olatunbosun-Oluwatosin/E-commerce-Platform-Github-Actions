import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  test('renders E-commerce Platform heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/E-commerce Platform/i);
    expect(headingElement).toBeInTheDocument();
  });
});