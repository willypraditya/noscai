import { render, screen } from '@testing-library/react';

import Home from './Home';

describe('Home', () => {
  it('should render the title', () => {
    render(<Home />);

    expect(screen.getByText('NOSCAI')).toBeInTheDocument();
  });
});
