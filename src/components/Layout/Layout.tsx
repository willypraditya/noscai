import { ReactNode } from 'react';

import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <div data-testid="layout-children" className="p-4 lg:p-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;
