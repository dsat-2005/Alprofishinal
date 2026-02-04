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
import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Alprofishinal | مركز صيانة التكييف والتبريد بالفيوم"
        description="مركز متخصص في صيانة التكييف والتبريد والأجهزة المنزلية بالفيوم – خدمة سريعة – فنيين محترفين – أسعار مناسبة"
        keywords="صيانة تكييف الفيوم, تصليح ثلاجات الفيوم, صيانة غسالات الفيوم, صيانة تبريد الفيوم, مركز صيانة الفيوم, Alprofishinal"
        ogTitle="Alprofishinal | مركز صيانة التكييف والتبريد بالفيوم"
        ogDescription="مركز متخصص في صيانة التكييف والتبريد والأجهزة المنزلية بالفيوم – خدمة سريعة – فنيين محترفين – أسعار مناسبة"
        ogUrl="https://alprofishinal.vercel.app/"
      />
      <StructuredData type="homepage" url="https://alprofishinal.vercel.app/" />
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
