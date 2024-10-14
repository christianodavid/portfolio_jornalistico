import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { videomakerData } from "@/data/videomakerData";
import Card from "@/components/ui/Card";

export default function VideomakerSection() {
  return (
    <Section>
      <SectionTitle>Videomaker / Edição</SectionTitle>
      <div className="grid grid-rows-5 justify-center gap-6 lg:grid-cols-3 lg:grid-rows-2">
        {videomakerData.map((videomaker) => (
          <Card key={videomaker.title} videomakerData={videomaker} />
        ))}
      </div>
    </Section>
  );
}
