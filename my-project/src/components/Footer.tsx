import { Link } from 'react-router-dom';
import { images } from '../assets';

const Footer = () => {
  return (
    <footer className="bg-[#132c48] relative pt-16 pb-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20 mix-blend-soft-light pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#132c48] to-[#1a365d]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Logo */}
        <div className="mb-12">
          <Link to="/">
            <img src={images.logo} alt="Sagehill" className="w-[98px] h-[146px]" />
          </Link>
        </div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Contact */}
          <div>
            <h3 className="text-white text-[16px] font-bold mb-4 tracking-[0.4px]">Contact</h3>
            <div className="h-[1px] w-[40px] bg-white mb-6"></div>
            <div className="text-white text-[16px] leading-[21.5px] tracking-[0.4px] space-y-2">
              <p>044 2445 0965</p>
              <p>admin@sagehillschool.in</p>
              <p className="mt-4 font-bold">Address</p>
              <p>145, 3rd Main Road<br />East Kamaraja Nagar Thiruvanmiyur</p>
              <p>Chennai - 600041</p>
              <p>Tamil Nadu, India.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-[16px] font-bold mb-4 tracking-[0.4px]">Quick Links</h3>
            <div className="h-[1px] w-[40px] bg-white mb-6"></div>
            <div className="text-white text-[16px] leading-[21.5px] tracking-[0.4px] space-y-3">
              <Link to="/about" className="block hover:text-[#ffb526] transition-colors">About Us</Link>
              <Link to="/admissions" className="block hover:text-[#ffb526] transition-colors">Admissions</Link>
              <Link to="/academics" className="block hover:text-[#ffb526] transition-colors">Academics</Link>
              <Link to="/campus" className="block hover:text-[#ffb526] transition-colors">Campus</Link>
              <Link to="/careers" className="block hover:text-[#ffb526] transition-colors">Careers</Link>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-white text-[16px] font-bold mb-4 tracking-[0.4px]">Information</h3>
            <div className="h-[1px] w-[40px] bg-white mb-6"></div>
            <div className="text-white text-[16px] leading-[21.5px] tracking-[0.4px] space-y-3">
              <a href="#" className="block hover:text-[#ffb526] transition-colors">Campus under construction</a>
              <a href="#" className="block hover:text-[#ffb526] transition-colors">Weekly Boarding</a>
              <a href="#" className="block hover:text-[#ffb526] transition-colors">Admissions Process</a>
              <a href="#" className="block hover:text-[#ffb526] transition-colors">School Calendar</a>
              <a href="#" className="block hover:text-[#ffb526] transition-colors">Virtual Tour</a>
            </div>
          </div>

          {/* Downloads */}
          <div>
            <h3 className="text-white text-[16px] font-bold mb-4 tracking-[0.4px]">Downloads</h3>
            <div className="h-[1px] w-[40px] bg-white mb-6"></div>
            <div className="text-white text-[16px] leading-[21.5px] tracking-[0.4px] space-y-3">
              <a href="#" className="block hover:text-[#ffb526] transition-colors">School Brochure</a>
              <a href="#" className="block hover:text-[#ffb526] transition-colors">Admission Form</a>
              <a href="#" className="block hover:text-[#ffb526] transition-colors">Fee Structure</a>
              <a href="#" className="block hover:text-[#ffb526] transition-colors">Campus Location</a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-[#9bb3bc]/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#9bb3bc] text-[14px] leading-[21.5px] tracking-[0.4px] text-center md:text-left">
              © 2025 Sagehill Creative Pathway School. All rights reserved.
            </p>
            <p className="text-[#9bb3bc] text-[14px] leading-[21.5px] tracking-[0.4px] text-center md:text-right mt-4 md:mt-0">
              Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;