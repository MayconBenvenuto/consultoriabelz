import Image from 'next/image';
import React from 'react';

interface LogoProps {
  src: string;
  alt: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt, className }) => (
  <Image src={src} alt={alt} width={120} height={80} className={className || 'h-16 w-auto'} />
);

export default Logo;
