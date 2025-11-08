import Header from '../components/Header';
import Footer from '../components/Footer';

const AdmissionsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <Header />
        {/* Hero Section for Admissions Page */}
        <div className="relative h-[400px] w-full overflow-hidden bg-[#f8a400]">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-[60px] font-bold leading-[70px] mb-6">
                Admissions
              </h1>
              <p className="text-[20px] leading-[30px] max-w-2xl">
                Begin your child's journey with us. Admissions open for 2025-26
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Admissions Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Admission Process */}
            <div>
              <h2 className="text-[35px] font-bold text-[#0e3867] leading-[40px] mb-8">
                Admission Process
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-[#ffb526] pl-6">
                  <h3 className="text-[24px] font-bold text-[#0e3867] mb-2">Step 1: Application</h3>
                  <p className="text-[16px] text-[#737070] leading-[24px]">
                    Submit your online application with required documents and application fee.
                  </p>
                </div>
                <div className="border-l-4 border-[#ffb526] pl-6">
                  <h3 className="text-[24px] font-bold text-[#0e3867] mb-2">Step 2: Interaction</h3>
                  <p className="text-[16px] text-[#737070] leading-[24px]">
                    Attend a parent-child interaction session to understand our philosophy.
                  </p>
                </div>
                <div className="border-l-4 border-[#ffb526] pl-6">
                  <h3 className="text-[24px] font-bold text-[#0e3867] mb-2">Step 3: Confirmation</h3>
                  <p className="text-[16px] text-[#737070] leading-[24px]">
                    Receive admission confirmation and complete the enrollment process.
                  </p>
                </div>
              </div>
            </div>

            {/* Important Dates */}
            <div>
              <h2 className="text-[35px] font-bold text-[#0e3867] leading-[40px] mb-8">
                Important Dates
              </h2>
              <div className="bg-[#f8f8f0] p-8 rounded-lg">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-semibold text-[#0e3867]">Application Opens</span>
                    <span className="text-[#737070]">December 1, 2024</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-semibold text-[#0e3867]">Application Deadline</span>
                    <span className="text-[#737070]">March 15, 2025</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-semibold text-[#0e3867]">Interaction Sessions</span>
                    <span className="text-[#737070]">February - March 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-[#0e3867]">Academic Year Begins</span>
                    <span className="text-[#737070]">June 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-[30px] font-bold text-[#0e3867] mb-6">
              Ready to Start the Application?
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-[#ffb526] text-[#081c31] px-8 py-3 rounded text-[16px] font-bold hover:bg-[#ffb626] transition-colors">
                Apply Now
              </button>
              <button className="bg-[#224f7d] text-white px-8 py-3 rounded text-[16px] font-bold hover:bg-[#1a365d] transition-colors">
                Schedule Campus Tour
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AdmissionsPage;