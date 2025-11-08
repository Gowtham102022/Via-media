import { 
  Header, 
  HeroSection, 
  ExcellenceSection, 
  CoParentingSection, 
  CampusGallerySection, 
  LearningPathwaysSection, 
  CallToActionSection, 
  Footer
} from '../components';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <Header />
        <HeroSection />
      </div>
      
      <ExcellenceSection />
      <CoParentingSection />
      <CampusGallerySection />
      <LearningPathwaysSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default HomePage;