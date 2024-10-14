import HeroSection from "@/components/pages/home/HeroSection";
import AboutSection from "@/components/pages/home/AboutSection";
import ExperienceSection from "@/components/pages/home/ExperienceSection";
import TextsSection from "@/components/pages/home/TextsSection";
import VideomakerSection from "@/components/pages/home/VideomakerSection";
import AudiovisualsSection from "@/components/pages/home/AudiovisualsSection";
import PhotographySection from "@/components/pages/home/PhotographySection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <TextsSection />
        <VideomakerSection />
        <AudiovisualsSection />
        <PhotographySection />
      </main>
    </>
  );
}
