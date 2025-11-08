import { images } from '../assets';

const CampusGallerySection = () => {
  return (
    <section className="relative py-20 bg-[#f8f8f0]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Gallery Grid */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-4 h-[587px]">
              {/* Column 1 */}
              <div className="flex flex-col gap-4">
                <div className="h-[132px] rounded-lg overflow-hidden">
                  <img src={images.campusMain} alt="Campus exterior" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 rounded-lg overflow-hidden">
                  <img src={images.campusLibrary} alt="Library" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Column 2 */}
              <div className="flex flex-col gap-4">
                <div className="h-[264px] rounded-lg overflow-hidden">
                  <img src={images.campusClassroom} alt="Classroom" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 rounded-lg overflow-hidden">
                  <img src={images.campusPlayground} alt="Playground" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Column 3 */}
              <div className="flex flex-col gap-4">
                <div className="h-[264px] rounded-lg overflow-hidden">
                  <img src={images.campusLab} alt="Science lab" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 rounded-lg overflow-hidden">
                  <img src={images.campusCafeteria} alt="Cafeteria" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:pl-8">
            <h2 className="text-[45px] font-bold text-[#0e3867] leading-[61px] mb-8">
              Designed with intention, for learning, wellness, and imagination.
            </h2>
            <p className="text-[20px] text-[#737070] leading-[30px] mb-8">
              At Sagehill, the campus isn't just a backdrop — it's a teacher in itself. Every space is designed with intention:
            </p>
            <button className="bg-[#ffb626] text-[#081c31] px-8 py-3 rounded text-[16px] font-bold hover:bg-[#ffb526] transition-colors">
              View Gallery
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusGallerySection;