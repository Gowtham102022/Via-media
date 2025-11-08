import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <Header />
        {/* Hero Section for About Page */}
        <div className="relative h-[400px] w-full overflow-hidden bg-[#1a365d]">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-[60px] font-bold leading-[70px] mb-6">
                About Sagehill
              </h1>
              <p className="text-[20px] leading-[30px] max-w-2xl">
                Discover our mission to transform education and nurture every child's potential
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* About Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[45px] font-bold text-[#0e3867] leading-[50px] mb-8 text-center">
            Our Story
          </h2>
          <div className="space-y-6 text-[18px] text-[#737070] leading-[28px]">
            <p>
              At Sagehill Creative Pathway School, we believe that education is not just about imparting knowledge—it's about nurturing the whole child. Our approach integrates rigorous academics with character development and real-world experiences to prepare students for a rapidly changing world.
            </p>
            <p>
              Founded on the principle that every child has unique potential waiting to be unlocked, we've designed a learning environment that goes beyond traditional teaching methods. Our campus serves as an extension of the classroom, where every space is intentionally designed to inspire curiosity and creativity.
            </p>
            <p>
              We understand that choosing the right school is one of the most important decisions you'll make for your child. That's why we've committed ourselves to being more than just educators—we're your partners in this incredible journey of growth and discovery.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;