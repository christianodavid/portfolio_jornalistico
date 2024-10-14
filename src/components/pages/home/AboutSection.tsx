import Image from "next/image";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Paragraph from "@/components/ui/Paragraph";
import BoldSpan from "@/components/ui/BoldSpan";
import Heading from "@/components/ui/Heading";

export default function AboutSection() {
  return (
    <Section id="about">
      <SectionTitle>Sobre mim</SectionTitle>
      <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-2">
        <div>
          <Heading className="my-6 font-brittany font-light capitalize">
            Oie!
          </Heading>
          <Heading className="mb-6">Gabriela Daniel</Heading>
          <Paragraph className="mb-6">
            <BoldSpan className="text-blue">Jornalista</BoldSpan> em formação
            pela Universidade Tuiuti do Paraná.
          </Paragraph>
          <Paragraph className="mb-6">
            Me considero uma pessoa{" "}
            <BoldSpan className="text-orange">criativa</BoldSpan> e{" "}
            <BoldSpan className="text-orange">entusiasmada</BoldSpan>.
          </Paragraph>
          <Paragraph>
            Gosto de ouvir e registrar histórias de maneiras únicas, seja
            escrevendo, documentando ou explorando novas formas de contar.
          </Paragraph>
        </div>
        <div className="flex items-center justify-center">
          <Image
            className="object-contain"
            src="/images/gabi.png"
            alt="Foto da Gabi"
            width={500}
            height={500}
          />
        </div>
      </div>
    </Section>
  );
}
