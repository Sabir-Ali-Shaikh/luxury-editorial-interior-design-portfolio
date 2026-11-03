import { AboutDesignerSection } from "@/components/sections/AboutDesignerSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { SelectedWorksSection } from "@/components/sections/SelectedWorksSection";

export default function Home() {
  return (
    <main id="main" className="scroll-smooth" data-page="home">
      <HeroSection />
      <PhilosophySection />
      <SelectedWorksSection />
      <AboutDesignerSection />
    </main>
  );
}
