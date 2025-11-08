import Header from '../components/Header';
import Footer from '../components/Footer';

const AcademicsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <Header />
        {/* Hero Section for Academics Page */}
        <div className="relative h-[400px] w-full overflow-hidden bg-[#0e3867]">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-[60px] font-bold leading-[70px] mb-6">
                Academic Excellence
              </h1>
              <p className="text-[20px] leading-[30px] max-w-2xl">
                A comprehensive curriculum designed to nurture critical thinking and creativity
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Academic Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Curriculum Overview */}
          <div className="text-center mb-16">
            <h2 className="text-[45px] font-bold text-[#0e3867] leading-[50px] mb-8">
              Our Curriculum
            </h2>
            <p className="text-[20px] text-[#737070] leading-[30px] max-w-4xl mx-auto">
              Our curriculum is thoughtfully designed to blend academic rigor with creative exploration, ensuring every child develops both knowledge and character.
            </p>
          </div>

          {/* Subject Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#f8f8f0] p-8 rounded-lg text-center">
              <h3 className="text-[24px] font-bold text-[#0e3867] mb-4">Languages</h3>
              <p className="text-[16px] text-[#737070] leading-[24px]">
                English, Tamil, and Hindi with focus on communication skills and literary appreciation.
              </p>
            </div>
            <div className="bg-[#f8f8f0] p-8 rounded-lg text-center">
              <h3 className="text-[24px] font-bold text-[#0e3867] mb-4">Mathematics</h3>
              <p className="text-[16px] text-[#737070] leading-[24px]">
                Problem-solving approach with hands-on learning and real-world applications.
              </p>
            </div>
            <div className="bg-[#f8f8f0] p-8 rounded-lg text-center">
              <h3 className="text-[24px] font-bold text-[#0e3867] mb-4">Sciences</h3>
              <p className="text-[16px] text-[#737070] leading-[24px]">
                Inquiry-based learning through experiments and scientific exploration.
              </p>
            </div>
            <div className="bg-[#f8f8f0] p-8 rounded-lg text-center">
              <h3 className="text-[24px] font-bold text-[#0e3867] mb-4">Social Studies</h3>
              <p className="text-[16px] text-[#737070] leading-[24px]">
                Understanding cultures, history, and global citizenship through interactive learning.
              </p>
            </div>
            <div className="bg-[#f8f8f0] p-8 rounded-lg text-center">
              <h3 className="text-[24px] font-bold text-[#0e3867] mb-4">Arts & Crafts</h3>
              <p className="text-[16px] text-[#737070] leading-[24px]">
                Creative expression through visual arts, music, and performing arts.
              </p>
            </div>
            <div className="bg-[#f8f8f0] p-8 rounded-lg text-center">
              <h3 className="text-[24px] font-bold text-[#0e3867] mb-4">Technology</h3>
              <p className="text-[16px] text-[#737070] leading-[24px]">
                Digital literacy and coding integrated seamlessly into daily learning.
              </p>
            </div>
          </div>

          {/* Assessment Philosophy */}
          <div className="bg-[#1a365d] text-white p-12 rounded-lg">
            <h2 className="text-[35px] font-bold mb-8 text-center">
              Assessment Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-[24px] font-bold mb-4 text-[#ffb526]">Continuous Evaluation</h3>
                <p className="text-[16px] leading-[24px]">
                  We believe in ongoing assessment that focuses on growth rather than just grades.
                </p>
              </div>
              <div>
                <h3 className="text-[24px] font-bold mb-4 text-[#ffb526]">Portfolio-Based Learning</h3>
                <p className="text-[16px] leading-[24px]">
                  Students maintain portfolios showcasing their learning journey and achievements.
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

export default AcademicsPage;