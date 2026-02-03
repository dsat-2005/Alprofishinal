import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Brands from '../components/Brands';
import WhyChooseUs from '../components/WhyChooseUs';
import SEOSection from '../components/SEOSection';
import Testimonials from '../components/Testimonials';
import CoverageAreas from '../components/CoverageAreas';
import Contact from '../components/Contact';
import FloatingButtons from '../components/FloatingButtons';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Brands />
      <SEOSection />
      <Testimonials />
      <CoverageAreas />
      <Contact />
      <FloatingButtons />
      <div className="pb-20"></div>
    </div>
  );
}
