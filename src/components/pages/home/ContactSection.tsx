import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { contactData } from "@/data/contactData";
import ContactCard from "@/components/ui/ContactCard";

export default function ContactSection() {
  return (
    <Section id="contact">
      <SectionTitle>Contato</SectionTitle>
      <div className="flex flex-col items-center justify-between gap-10 py-16 lg:flex-row">
        {contactData.map((contact) => (
          <ContactCard key={contact.heading} contactData={contact} />
        ))}
      </div>
    </Section>
  );
}
