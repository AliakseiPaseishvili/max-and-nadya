import HeroSection from './components/HeroSection';
import GreetingSection from './components/GreetingSection';
import SectionDivider from './components/SectionDivider';
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
      <div>
        <HeroSection />
        <GreetingSection />
        <SectionDivider />
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
