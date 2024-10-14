import React from "react";

interface ParagraphProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Paragraph({ className, children }: ParagraphProps) {
  return (
    <p
      className={`max-w-[75ch] md:text-lg lg:max-w-[45ch] xl:text-xl ${className}`}
    >
      {children}
    </p>
  );
}
