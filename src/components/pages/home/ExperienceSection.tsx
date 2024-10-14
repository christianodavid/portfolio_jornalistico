import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import BoldSpan from "@/components/ui/BoldSpan";
import Link from "@/components/ui/Link";

export default function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionTitle>Currículo</SectionTitle>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div>
          <Heading className="mb-6 text-orange">Experiências</Heading>
          <div>
            <Paragraph className="mb-1">
              <BoldSpan>Assistente de Jornalismo G1 Paraná</BoldSpan> (Estágio)
            </Paragraph>
            <Paragraph className="mb-1">RPC | Afiliada TV Globo</Paragraph>
            <Paragraph className="mb-6">Outubro 2024 | Atual </Paragraph>
          </div>
          <div>
            <Paragraph className="mb-1">
              <BoldSpan>Ass. Imprensa | Prod. Audiovisual</BoldSpan> (Estágio)
            </Paragraph>
            <Paragraph className="mb-1">
              Universidade Tuiuti do Paraná
            </Paragraph>
            <Paragraph className="mb-6">Maio 2024 | Outubro 2024 </Paragraph>
          </div>
          <div>
            <Paragraph className="mb-1">
              <BoldSpan>Produção de Rádio</BoldSpan> (Estágio)
            </Paragraph>
            <Paragraph className="mb-1">
              Grupo RIC - Afiliada RecordTV
            </Paragraph>
            <Paragraph className="mb-6">Agosto 2023 | Abril 2024</Paragraph>
          </div>
        </div>
        <div>
          <Heading className="mb-6 text-blue">Habilidades</Heading>
          <ul className="list-disc">
            <li>
              <Paragraph className="mb-2">
                Pautas jornalísticas e hard news
              </Paragraph>
            </li>
            <li>
              <Paragraph className="mb-2">Produção de rádio</Paragraph>
            </li>
            <li>
              <Paragraph className="mb-2">Edição de fotos e vídeos</Paragraph>
            </li>
            <li>
              <Paragraph className="mb-2">Assessoria de Imprensa</Paragraph>
            </li>
            <li>
              <Paragraph>Social Media</Paragraph>
            </li>
          </ul>
        </div>
      </div>
      <Link
        className="mt-10 text-center"
        href="https://linkedin.com/in/gabrielasdaniel"
      >
        Saiba mais &rarr;
      </Link>
    </Section>
  );
}
