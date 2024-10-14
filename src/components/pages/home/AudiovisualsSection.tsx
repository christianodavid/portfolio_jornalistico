import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { videoData } from "@/data/videoData";
import BrowserVideo from "@/components/ui/BrowserVideo";

export default function AudiovisualsSection() {
  return (
    <Section>
      <SectionTitle>Projetos Audiovisuais</SectionTitle>
      {videoData.map((video) => (
        <BrowserVideo key={video.heading} videoData={video} />
      ))}
    </Section>
  );
}
