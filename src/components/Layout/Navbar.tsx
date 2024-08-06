import { useNavigate } from 'react-router-dom';

import logo from '@/assets/logo.svg';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div id="navbar">
      <div className="flex h-[60px] w-screen items-center justify-between gap-7 p-4 shadow-md lg:px-10 lg:py-10">
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
