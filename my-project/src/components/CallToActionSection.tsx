
import { images } from '../assets'; // Ensure this path is correct
import { graphics } from '../assets'; // Ensure this path is correct

const CallToActionSection = () => {
  return (
    // Make sure to import the font in your index.css or Google Fonts: 
    // @import url('https://fonts.googleapis.com/css2?family=Biryani:wght@300;400;600;700&display=swap');
    
    <section className="relative w-full min-h-[600px] font-['Biryani']">
      
      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={images.ctaBuilding} 
          alt="School Building" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. Layout Container - Aligns the card to the right */}
      <div className="relative z-10 max-w-[1440px] mx-auto h-full flex flex-col lg:flex-row items-end justify-end lg:pr-20 lg:py-16">
        
        {/* 3. The Blue Card Component */}
        <div className="relative w-full lg:w-[683px] bg-[#082f49] (bg-sky-950) shadow-xl overflow-hidden">
          
          {/* Background color base (Matches Figma bg-sky-950) */}
          <div className="absolute inset-0 bg-[#082f49]"></div>

          {/* Bottom Decorative Strip (Matches Figma bg-cyan-900) */}
          <div className="absolute bottom-[-12px] left-0 w-full h-16">
            <img src={graphics.ctavector} alt="Decorative vector" className="w-full h-full object-cover" />
          </div>

          {/* Card Content */}
          <div className="relative z-20 flex flex-col items-center justify-start pt-[90px] pb-[64px] px-4 sm:px-[57px] text-center">
            
            {/* Headline */}
            <h2 className="text-white text-3xl sm:text-4xl font-semibold leading-[1.2] sm:leading-[60.46px] mb-4">
              Ready to Begin the Journey?
            </h2>

            {/* Subtext */}
            <p className="text-white text-base font-normal leading-7 max-w-[491px] mb-11">
              Be among the first 100 families to secure your child's spot in the future of education. This is your moment.
            </p>

            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row items-center gap-7 w-full justify-center">
              
              {/* Button 1: Call Now */}
              <button className="w-full sm:w-72 h-14 bg-[#155e75] hover:bg-[#164e63] transition-colors flex justify-center items-center gap-2 group">
                <span className="text-white text-lg font-light leading-9">Call Now:</span>
                <span className="text-white text-lg font-bold leading-9"> +91 98765 43210</span>
              </button>

              {/* Button 2: Book Tour */}
              <button className="w-full sm:w-64 h-14 bg-[#fbbf24] hover:bg-[#f59e0b] transition-colors flex justify-center items-center">
                <span className="text-slate-900 text-lg font-bold leading-9">Book Private Tour</span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;