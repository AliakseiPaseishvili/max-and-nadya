import HeroSection from './components/HeroSection';
import GreetingSection from './components/GreetingSection';
import LocationSection from './components/LocationSection';
import TimelineSection from './components/TimelineSection';
import DressCodeSection from './components/DressCodeSection';
import DetailsSection from './components/DetailsSection';
import CountdownSection from './components/CountdownSection';
import RsvpSection from './components/RsvpSection';
import FooterMonogram from './components/FooterMonogram';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="page-shell">
        <HeroSection />
        <GreetingSection />
        <LocationSection />
        <TimelineSection />
        <DressCodeSection />
        <DetailsSection />
        <CountdownSection />
        <RsvpSection />
        <FooterMonogram />
      </div>
    </main>
  );
}
