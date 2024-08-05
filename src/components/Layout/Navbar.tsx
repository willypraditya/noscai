import { useNavigate } from 'react-router-dom';

import logo from '@/assets/logo.svg';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div id="navbar">
      <div className="flex h-[90px] w-screen items-center justify-between gap-7 px-10 shadow-md">
        <div
          className="flex cursor-pointer items-center gap-4"
          onClick={() => navigate('/')}
        >
          <img src={logo} alt="noscai-logo" />

          <p className="text-xl font-medium text-gray-500">NOSCAI</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
