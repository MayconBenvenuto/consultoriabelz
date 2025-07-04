import React from 'react';
import Logo from '../common/Logo';

const logos = [
  {
    src: '/logos/belz.png',
    alt: 'Logo Belz',
  },
  {
    src: '/logos/ultramega.png',
    alt: 'Logo Ultramega',
  },
];

const LogoBar: React.FC = () => (
  <div className="flex flex-row justify-center items-center gap-8 py-6">
    {logos.map((logo) => (
      <Logo key={logo.alt} src={logo.src} alt={logo.alt} className="h-20 w-auto" />
    ))}
  </div>
);

export default LogoBar;
