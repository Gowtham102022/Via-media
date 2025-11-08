import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <Header />
        {/* Hero Section for Contact Page */}
        <div className="relative h-[400px] w-full overflow-hidden bg-[#132c48]">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-[60px] font-bold leading-[70px] mb-6">
                Contact Us
              </h1>
              <p className="text-[20px] leading-[30px] max-w-2xl">
                Get in touch with us. We're here to answer all your questions
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-[35px] font-bold text-[#0e3867] leading-[40px] mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#ffb526] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#081c31] font-bold">📍</span>
                  </div>
                  <div>
                    <h3 className="text-[20px] font-bold text-[#0e3867] mb-2">Address</h3>
                    <p className="text-[16px] text-[#737070] leading-[24px]">
                      145, 3rd Main Road<br />
                      East Kamaraja Nagar Thiruvanmiyur<br />
                      Chennai - 600041<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#ffb526] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#081c31] font-bold">📞</span>
                  </div>
                  <div>
                    <h3 className="text-[20px] font-bold text-[#0e3867] mb-2">Phone</h3>
                    <p className="text-[16px] text-[#737070] leading-[24px]">
                      044 2445 0965<br />
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#ffb526] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#081c31] font-bold">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-[20px] font-bold text-[#0e3867] mb-2">Email</h3>
                    <p className="text-[16px] text-[#737070] leading-[24px]">
                      admin@sagehillschool.in<br />
                      admissions@sagehillschool.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#ffb526] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#081c31] font-bold">🕒</span>
                  </div>
                  <div>
                    <h3 className="text-[20px] font-bold text-[#0e3867] mb-2">Office Hours</h3>
                    <p className="text-[16px] text-[#737070] leading-[24px]">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-[35px] font-bold text-[#0e3867] leading-[40px] mb-8">
                Send Us a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[16px] font-semibold text-[#0e3867] mb-2">
                      First Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ffb526]"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-[16px] font-semibold text-[#0e3867] mb-2">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ffb526]"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-[16px] font-semibold text-[#0e3867] mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ffb526]"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-[16px] font-semibold text-[#0e3867] mb-2">
                    Phone
                  </label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ffb526]"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-[16px] font-semibold text-[#0e3867] mb-2">
                    Subject
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ffb526]">
                    <option>General Inquiry</option>
                    <option>Admissions</option>
                    <option>Campus Visit</option>
                    <option>Academic Information</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-[16px] font-semibold text-[#0e3867] mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ffb526]"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-[#ffb526] text-[#081c31] py-3 rounded-lg text-[16px] font-bold hover:bg-[#ffb626] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="mt-16 text-center">
            <h3 className="text-[30px] font-bold text-[#0e3867] mb-8">
              Quick Actions
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-[#224f7d] text-white px-8 py-3 rounded text-[16px] font-bold hover:bg-[#1a365d] transition-colors">
                Schedule Campus Tour
              </button>
              <button className="bg-[#ffb526] text-[#081c31] px-8 py-3 rounded text-[16px] font-bold hover:bg-[#ffb626] transition-colors">
                Download Brochure
              </button>
              <button className="bg-[#0e3867] text-white px-8 py-3 rounded text-[16px] font-bold hover:bg-[#1a365d] transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;