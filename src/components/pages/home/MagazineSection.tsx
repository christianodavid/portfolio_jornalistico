import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Image from "next/image";
import Link from "@/components/ui/Link";

export default function MagazineSection() {
  return (
    <Section>
      <SectionTitle>Revista</SectionTitle>
      <div className="mb-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="flex flex-col">
          <Heading>Gralha</Heading>
          <Paragraph className="mb-10">Revista digital</Paragraph>
          <Image
            className="self-center lg:self-start"
            src="/images/gralha000.png"
            alt="Revista Gralha"
            width={400}
            height={300}
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            className="w-full"
            src="/images/gralha001.png"
            alt="Revista Gralha"
            width={500}
            height={300}
          />
        </div>
      </div>
      <Link href="https://www.calameo.com/books/007550797d83551832935">
        Leia a revista completa aqui &rarr;
      </Link>
    </Section>
  );
}
