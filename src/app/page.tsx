import HeroSection from "@/components/pages/home/HeroSection";
import AboutSection from "@/components/pages/home/AboutSection";
import ExperienceSection from "@/components/pages/home/ExperienceSection";
import TextsSection from "@/components/pages/home/TextsSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <TextsSection />
      </main>
    </>
  );
}
