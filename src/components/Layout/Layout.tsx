import { ReactNode } from 'react';

import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <div className="p-10">{children}</div>
    </div>
  );
};

export default Layout;
