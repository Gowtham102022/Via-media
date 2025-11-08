import Header from '../components/Header';
import Footer from '../components/Footer';

const EnrichmentPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <Header />
        {/* Hero Section for Enrichment Page */}
        <div className="relative h-[400px] w-full overflow-hidden bg-[#ffb526]">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#081c31] z-10">
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-[60px] font-bold leading-[70px] mb-6">
                Enrichment Programs
              </h1>
              <p className="text-[20px] leading-[30px] max-w-2xl">
                Beyond academics - developing well-rounded individuals through diverse experiences
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enrichment Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Program Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Sports & Fitness */}
            <div className="text-center">
              <div className="bg-[#f8f8f0] p-8 rounded-lg mb-6">
                <h3 className="text-[28px] font-bold text-[#0e3867] mb-4">Sports & Fitness</h3>
                <ul className="text-[16px] text-[#737070] leading-[24px] space-y-2 text-left">
                  <li>• Swimming</li>
                  <li>• Basketball</li>
                  <li>• Football</li>
                  <li>• Yoga & Meditation</li>
                  <li>• Athletics</li>
                  <li>• Table Tennis</li>
                </ul>
              </div>
            </div>

            {/* Arts & Culture */}
            <div className="text-center">
              <div className="bg-[#f8f8f0] p-8 rounded-lg mb-6">
                <h3 className="text-[28px] font-bold text-[#0e3867] mb-4">Arts & Culture</h3>
                <ul className="text-[16px] text-[#737070] leading-[24px] space-y-2 text-left">
                  <li>• Music (Vocal & Instrumental)</li>
                  <li>• Classical & Contemporary Dance</li>
                  <li>• Drama & Theatre</li>
                  <li>• Visual Arts & Painting</li>
                  <li>• Pottery & Crafts</li>
                  <li>• Photography</li>
                </ul>
              </div>
            </div>

            {/* Technology & Innovation */}
            <div className="text-center">
              <div className="bg-[#f8f8f0] p-8 rounded-lg mb-6">
                <h3 className="text-[28px] font-bold text-[#0e3867] mb-4">Technology & Innovation</h3>
                <ul className="text-[16px] text-[#737070] leading-[24px] space-y-2 text-left">
                  <li>• Coding & Programming</li>
                  <li>• Robotics</li>
                  <li>• 3D Design & Printing</li>
                  <li>• Digital Media</li>
                  <li>• App Development</li>
                  <li>• AI & Machine Learning</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Special Programs */}
          <div className="bg-[#1a365d] text-white p-12 rounded-lg mb-16">
            <h2 className="text-[35px] font-bold mb-8 text-center">
              Special Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-[24px] font-bold mb-4 text-[#ffb526]">Leadership Development</h3>
                <p className="text-[16px] leading-[24px] mb-4">
                  Student councils, peer mentoring programs, and leadership workshops that prepare students for future responsibilities.
                </p>
              </div>
              <div>
                <h3 className="text-[24px] font-bold mb-4 text-[#ffb526]">Community Service</h3>
                <p className="text-[16px] leading-[24px] mb-4">
                  Regular community outreach programs that instill values of empathy, service, and social responsibility.
                </p>
              </div>
              <div>
                <h3 className="text-[24px] font-bold mb-4 text-[#ffb526]">Environmental Awareness</h3>
                <p className="text-[16px] leading-[24px] mb-4">
                  Sustainability projects, organic gardening, and eco-friendly initiatives that teach environmental stewardship.
                </p>
              </div>
              <div>
                <h3 className="text-[24px] font-bold mb-4 text-[#ffb526]">Global Connect</h3>
                <p className="text-[16px] leading-[24px] mb-4">
                  Virtual exchanges with international schools, cultural festivals, and global awareness programs.
                </p>
              </div>
            </div>
          </div>

          {/* Weekly Schedule Example */}
          <div className="text-center">
            <h2 className="text-[35px] font-bold text-[#0e3867] mb-8">
              Sample Weekly Enrichment Schedule
            </h2>
            <div className="bg-[#f8f8f0] p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold text-[#0e3867] mb-2">Monday</h4>
                  <p className="text-sm text-[#737070]">Sports & Fitness</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold text-[#0e3867] mb-2">Tuesday</h4>
                  <p className="text-sm text-[#737070]">Arts & Crafts</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold text-[#0e3867] mb-2">Wednesday</h4>
                  <p className="text-sm text-[#737070]">Technology Lab</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold text-[#0e3867] mb-2">Thursday</h4>
                  <p className="text-sm text-[#737070]">Music & Dance</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold text-[#0e3867] mb-2">Friday</h4>
                  <p className="text-sm text-[#737070]">Community Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default EnrichmentPage;