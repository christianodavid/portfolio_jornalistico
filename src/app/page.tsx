import HeroSection from "@/components/pages/home/HeroSection";
import AboutSection from "@/components/pages/home/AboutSection";
import ExperienceSection from "@/components/pages/home/ExperienceSection";
import TextsSection from "@/components/pages/home/TextsSection";
import VideomakerSection from "@/components/pages/home/VideomakerSection";
import AudiovisualsSection from "@/components/pages/home/AudiovisualsSection";
import PhotographySection from "@/components/pages/home/PhotographySection";
import MagazineSection from "@/components/pages/home/MagazineSection";
import ContactSection from "@/components/pages/home/ContactSection";
import Footer from "@/components/pages/home/Footer";
import Navbar from "@/components/pages/home/Navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <TextsSection />
        <VideomakerSection />
        <AudiovisualsSection />
        <PhotographySection />
        <MagazineSection />
        <ContactSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
