import { ContactData } from "@/data/contactData";
import Image from "next/image";
import Link from "@/components/ui/Link";

interface ContactCardProps {
  contactData: ContactData;
}

export default function ContactCard({ contactData }: ContactCardProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <a href={contactData.link} target="_blank" rel="noopener noreferrer">
        <Image
          src={`/svg/${contactData.icon}.svg`}
          alt={contactData.heading}
          width={100}
          height={100}
        />
      </a>
      <Link href={contactData.link}>{contactData.heading}</Link>
      <Link href={contactData.link}>{contactData.subheading}</Link>
    </div>
  );
}
