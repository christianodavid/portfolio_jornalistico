import React from "react";

interface BoldSpanProps {
  className?: string;
  children?: React.ReactNode;
}

export default function BoldSpan({ className, children }: BoldSpanProps) {
  return <span className={`font-bold ${className}`}>{children}</span>;
}
