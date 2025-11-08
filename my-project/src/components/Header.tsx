import { Link } from 'react-router-dom';
import { images } from '../assets';

const Header = () => {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#1a365d] h-[41px] w-full relative">
        <div className="flex items-center justify-center h-full">
          <p className="text-[#ffb526] text-sm font-normal text-center">
            Admissions Open 2025-26 | Play School to Grade 8 | Campus Opens January 2025 | Weekly Boarding
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-[41px] left-0 right-[150px] z-10">
        <div className="flex items-center justify-between px-4 py-6">
          {/* Logo */}
          <div className="w-[110px] h-[164px] ml-[122px]">
            <Link to="/">
              <img src={images.logo} alt="Sagehill" className="w-full h-full object-contain" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8 mr-8 -mt-20">
            <Link to="/" className="text-white text-sm font-normal hover:text-[#ffb526] transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white text-sm font-normal hover:text-[#ffb526] transition-colors">
              About us
            </Link>
            <Link to="/admissions" className="text-white text-sm font-normal hover:text-[#ffb526] transition-colors">
              Admissions
            </Link>
            <Link to="/academics" className="text-white text-sm font-normal hover:text-[#ffb526] transition-colors">
              Academic Excellence
            </Link>
            <Link to="/campus" className="text-white text-sm font-normal hover:text-[#ffb526] transition-colors">
              Campus
            </Link>
            <Link to="/enrichment" className="text-white text-sm font-normal hover:text-[#ffb526] transition-colors">
              Enrichment
            </Link>
            <Link to="/contact" className="text-white text-sm font-normal hover:text-[#ffb526] transition-colors">
              Contact us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;