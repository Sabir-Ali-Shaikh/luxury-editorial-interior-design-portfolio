import { Footer } from "@/components/layout/Footer";
import { AboutDesignerSection } from "@/components/sections/AboutDesignerSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { DesignProcessSection } from "@/components/sections/DesignProcessSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { JournalSection } from "@/components/sections/JournalSection";
import { MaterialEditSection } from "@/components/sections/MaterialEditSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { SelectedWorksSection } from "@/components/sections/SelectedWorksSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <main id="main" className="scroll-smooth" data-page="home">
      <HeroSection />
      <PhilosophySection />
      <SelectedWorksSection />
      <AboutDesignerSection />
      <ExpertiseSection />
      <MaterialEditSection />
      <DesignProcessSection />
      <TestimonialsSection />
      <JournalSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
