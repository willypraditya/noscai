import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should render the title', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        level: 1,
      }),
    ).toHaveTextContent('Vite + React');
  });
});
