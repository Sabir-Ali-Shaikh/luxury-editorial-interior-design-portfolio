import { HeroSection } from "@/components/sections/HeroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";

export default function Home() {
  return (
    <main id="main" className="scroll-smooth" data-page="home">
      <HeroSection />
      <PhilosophySection />
    </main>
  );
}
