import VendorsList from './components/landing/VendorsList';
import CTASection from './components/landing/CTASection';
import Footer from './components/landing/Footer';
import HeroSlider from './components/landing/HeroSlider';
import TopNav from './components/layout/TopNav';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0D1F1F] text-white">
      <TopNav />
      <HeroSlider />
      <VendorsList />
      <CTASection />
      <Footer />
    </div>
  );
}