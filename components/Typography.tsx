import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function HeroHeading({ children, className = '' }: HeadingProps) {
  return <h1 className={`heading-hero ${className}`.trim()}>{children}</h1>;
}

export function SectionHeading({ children, className = '' }: HeadingProps) {
  return <h2 className={`heading-section ${className}`.trim()}>{children}</h2>;
}

export function SubsectionHeading({ children, className = '' }: HeadingProps) {
  return <h3 className={`heading-subsection ${className}`.trim()}>{children}</h3>;
}

export function CardHeading({ children, className = '' }: HeadingProps) {
  return <h3 className={`heading-card ${className}`.trim()}>{children}</h3>;
}

export function LabelText({ children, className = '' }: HeadingProps) {
  return <h3 className={`label-uppercase ${className}`.trim()}>{children}</h3>;
}

export function BodyLarge({ children, className = '' }: HeadingProps) {
  return <p className={`text-body-large ${className}`.trim()}>{children}</p>;
}

export function QuoteText({ children, className = '' }: HeadingProps) {
  return <h2 className={`text-quote ${className}`.trim()}>{children}</h2>;
}
