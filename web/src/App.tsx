import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import TrustedBy from './sections/TrustedBy';
import FeatureShowcase from './sections/FeatureShowcase';
import ThreatHighlights from './sections/ThreatHighlights';
import CallToAction from './sections/CallToAction';

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <main>
        <HeroSection />
        <TrustedBy />
        <FeatureShowcase />
        <ThreatHighlights />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;
