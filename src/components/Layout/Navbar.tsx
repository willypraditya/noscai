import logo from '@/assets/logo.svg';

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="flex h-[90px] w-screen items-center gap-7 px-10 shadow-md">
        <img src={logo} alt="noscai-logo" />

        <div className="flex">
          <p className="text-xl font-medium text-gray-500">NOSCAI</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
