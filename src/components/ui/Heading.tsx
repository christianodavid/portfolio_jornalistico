import React from "react";

interface HeadingProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Heading({ children, className }: HeadingProps) {
  return (
    <h2
      className={`font-bebas text-5xl font-bold uppercase md:text-6xl xl:text-7xl ${className}`}
    >
      {children}
    </h2>
  );
}
