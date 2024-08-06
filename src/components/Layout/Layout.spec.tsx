import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Layout from './Layout';

describe('Layout', () => {
  it('should render the Navbar component', () => {
    render(
      <MemoryRouter>
        <Layout>
          <div>Test Child</div>
        </Layout>
      </MemoryRouter>,
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should render children', () => {
    render(
      <MemoryRouter>
        <Layout>
          <div>Test Child</div>
        </Layout>
      </MemoryRouter>,
    );

    expect(screen.getByTestId('layout-children')).toBeInTheDocument();
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });
});
