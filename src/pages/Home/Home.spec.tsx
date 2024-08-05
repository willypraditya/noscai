import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Home from './Home';

describe('Home', () => {
  it('should render the title', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(screen.getByText('NOSCAI')).toBeInTheDocument();
  });
});
