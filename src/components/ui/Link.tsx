import React from "react";

interface LinkProps {
  href?: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function Link({
  href,
  className,
  onClick,
  children,
}: LinkProps) {
  return (
    <a
      className={`block font-bebas text-lg font-bold uppercase tracking-wider md:text-xl xl:text-2xl ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {children}
    </a>
  );
}
