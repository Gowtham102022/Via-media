import { images, graphics, icons } from '../assets';

const CoParentingSection = () => {
  return (
    <section className="relative bg-[#1a365d]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-luminosity">
        <img 
          src={images.coParentingBg} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 py-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-[45px] font-bold text-[#f8a400] leading-[57px] max-w-[507px] mx-auto">
              More Than Education.
              <br />
              True Co-Parenting.
            </h2>
            <p className="text-[20px] text-white leading-[33px] max-w-[717px] mx-auto mt-8">
              You've poured your heart into raising an extraordinary child. As they grow, you realise that you need the right partners to shape their progress. Most schools teach your child. Sagehill co-parents with you.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Small Classes, Big Attention */}
            <div className="bg-[#f8f8f0] p-8 ">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 mr-4">
                  <img src={icons.smallclass} alt="Small Classes" className="w-full h-full" />
                </div>
                <h3 className="text-[24px] font-bold text-[#0e3867]">
                  Small Classes, Big Attention
                </h3>
              </div>
              <p className="text-[17px] text-[#737070] leading-[26px]">
                Low student-teacher ratios ensure every child receives personalized guidance and develops their unique brilliance.
              </p>
            </div>

            {/* Character that counts */}
            <div className="bg-[#f8f8f0] p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 mr-4">
                  <img src={icons.character} alt="Character" className="w-full h-full" />
                </div>
                <h3 className="text-[24px] font-bold text-[#0e3867]">
                  Character that counts
                </h3>
              </div>
              <p className="text-[17px] text-[#737070] leading-[26px]">
                Values aren't just taught—they're lived daily. Ethics, empathy, and resilience become second nature.
              </p>
            </div>

            {/* Safety you trust */}
            <div className="bg-[#f8f8f0] p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 mr-4">
                  <img src={icons.safety} alt="Safety" className="w-full h-full" />
                </div>
                <h3 className="text-[24px] font-bold text-[#0e3867]">
                  Safety you trust
                </h3>
              </div>
              <p className="text-[17px] text-[#737070] leading-[26px]">
                Every space thoughtfully designed. Every staff member trained as both educator and guardian. Complete peace of mind.
              </p>
            </div>

            {/* Partnership you can feel */}
            <div className="bg-[#f8f8f0] p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 mr-4">
                  <img src={icons.partnership} alt="Partnership" className="w-full h-full" />
                </div>
                <h3 className="text-[24px] font-bold text-[#0e3867]">
                  Partnership you can feel
                </h3>
              </div>
              <p className="text-[16px] text-[#737070] leading-[26px]">
                Transparent communication, regular insights, shared celebrations. We're walking this journey with your family.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave SVG at the bottom */}
      <div className="absolute -bottom-30 left-0 w-full">
        <img 
          src={graphics.waveBottom} 
          alt="" 
          className="w-full h-auto block"
        />
      </div>
    </section>
  );
};

export default CoParentingSection;