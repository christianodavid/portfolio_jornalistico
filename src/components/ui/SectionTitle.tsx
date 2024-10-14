import React from "react";

interface SectionTitleProps {
  children?: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="mb-10 font-bebas text-lg font-bold uppercase tracking-wider md:text-xl xl:text-2xl">
      {children}
    </h2>
  );
}
