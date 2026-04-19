import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { ExpertiseSection } from "@/components/expertise-section";
import { AboutSection } from "@/components/about-section";
import { JourneySection } from "@/components/journey-section";
import { ContactSection } from "@/components/contact-section";
import { CoreServicesSection } from "@/components/core-services-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ExpertiseSection />
      <CoreServicesSection />
      <JourneySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
