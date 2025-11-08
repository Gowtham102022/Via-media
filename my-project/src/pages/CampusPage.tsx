import Header from '../components/Header';
import Footer from '../components/Footer';
import CampusGallerySection from '../components/CampusGallerySection';

const CampusPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <Header />
        {/* Hero Section for Campus Page */}
        <div className="relative h-[400px] w-full overflow-hidden bg-[#f8f8f0]">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#0e3867] z-10">
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-[60px] font-bold leading-[70px] mb-6">
                Our Campus
              </h1>
              <p className="text-[20px] leading-[30px] max-w-2xl">
                A thoughtfully designed learning environment that inspires and educates
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Campus Gallery */}
      <CampusGallerySection />
      
      {/* Facilities */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[45px] font-bold text-[#0e3867] leading-[50px] mb-16 text-center">
            Campus Facilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-[28px] font-bold text-[#0e3867] mb-4">Learning Spaces</h3>
                <p className="text-[16px] text-[#737070] leading-[24px]">
                  Modern classrooms equipped with smart boards, flexible seating arrangements, and natural lighting to create an optimal learning environment.
                </p>
              </div>
              
              <div>
                <h3 className="text-[28px] font-bold text-[#0e3867] mb-4">Innovation Labs</h3>
                <p className="text-[16px] text-[#737070] leading-[24px]">
                  State-of-the-art science labs, maker spaces, and technology centers where students explore, experiment, and create.
                </p>
              </div>
              
              <div>
                <h3 className="text-[28px] font-bold text-[#0e3867] mb-4">Arts Studio</h3>
                <p className="text-[16px] text-[#737070] leading-[24px]">
                  Dedicated spaces for visual arts, music, and performing arts with professional-grade equipment and instruments.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[28px] font-bold text-[#0e3867] mb-4">Sports Complex</h3>
                <p className="text-[16px] text-[#737070] leading-[24px]">
                  Multi-purpose courts, swimming pool, and outdoor play areas promoting physical fitness and team spirit.
                </p>
              </div>
              
              <div>
                <h3 className="text-[28px] font-bold text-[#0e3867] mb-4">Library & Media Center</h3>
                <p className="text-[16px] text-[#737070] leading-[24px]">
                  A vast collection of books, digital resources, and quiet study spaces fostering a love for reading and research.
                </p>
              </div>
              
              <div>
                <h3 className="text-[28px] font-bold text-[#0e3867] mb-4">Wellness Areas</h3>
                <p className="text-[16px] text-[#737070] leading-[24px]">
                  Meditation gardens, counseling rooms, and health centers ensuring the complete well-being of our students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CampusPage;