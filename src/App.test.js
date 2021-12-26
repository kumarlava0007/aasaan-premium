import { Context as ResponsiveContext } from 'react-responsive'
import { renderToString } from 'react-dom/server'
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
