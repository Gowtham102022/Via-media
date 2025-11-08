import { images } from '../assets';

const CallToActionSection = () => {
  return (
    <section className="relative py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={images.ctaBuilding} 
          alt="School Building" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-[#132c48]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-[40.7px] font-semibold leading-[60px] tracking-[-0.81px] mb-6">
          Ready to Begin the Journey?
        </h2>
        <p className="text-[17px] leading-[28px] mb-12 max-w-[491px] mx-auto">
          Be among the first 100 families to secure your child's spot in the future of education. This is your moment.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-[#224f7d] text-white px-12 py-4 rounded text-[17.36px] font-light hover:bg-[#1a365d] transition-colors min-w-[275px]">
            <span className="font-light">Call Now:</span>
            <span className="font-bold ml-2">+91 98765 43210</span>
          </button>
          <button className="bg-[#ffb526] text-[#081c31] px-12 py-4 rounded text-[17.36px] font-bold hover:bg-[#ffb626] transition-colors min-w-[265px]">
            Book Private Tour
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;