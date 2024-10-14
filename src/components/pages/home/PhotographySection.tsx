import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Gallery from "@/components/ui/Gallery";
import { galleryData } from "@/data/galleryData";
import Link from "@/components/ui/Link";

export default function PhotographySection() {
  return (
    <Section>
      <SectionTitle>Fotografias</SectionTitle>
      <Gallery galleryData={galleryData} />
      <div className="mt-10 flex flex-col items-center justify-center gap-8 md:flex-row">
        <Link href="https://www.instagram.com/p/C_L64Fyy0mG/?img_index=1">
          Carrossel 1 &rarr;
        </Link>
        <Link href="https://www.instagram.com/p/C_SjijfxUMB/?img_index=1">
          Carrossel 2 &rarr;
        </Link>
        <Link href="https://www.instagram.com/p/C-SvLPWppAr/?img_index=1">
          Carrossel 3 &rarr;
        </Link>
      </div>
    </Section>
  );
}
