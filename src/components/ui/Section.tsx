import React from "react";

interface SectionProps {
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

export default function Section({ className, id, children }: SectionProps) {
  return (
    <section className={`bg-cream px-7 py-28 md:px-14 ${className}`} id={id}>
      {children}
    </section>
  );
}
