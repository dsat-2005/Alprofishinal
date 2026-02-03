import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CoverageAreas from './components/CoverageAreas';
import Contact from './components/Contact';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <WhyChooseUs />
      <CoverageAreas />
      <Contact />
      <FloatingButtons />
      <div className="pb-20"></div>
    </div>
  );
}

export default App;
