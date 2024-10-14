import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { textData } from "@/data/textData";
import BrowserText from "@/components/ui/BrowserText";

export default function TextsSection() {
  return (
    <Section id="projects">
      <SectionTitle>Textos</SectionTitle>
      {textData.map((text) => (
        <BrowserText key={text.heading} textData={text} />
      ))}
    </Section>
  );
}
