import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  HomePage, 
  AboutPage, 
  AdmissionsPage, 
  AcademicsPage, 
  CampusPage, 
  EnrichmentPage, 
  ContactPage 
} from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/campus" element={<CampusPage />} />
        <Route path="/enrichment" element={<EnrichmentPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
