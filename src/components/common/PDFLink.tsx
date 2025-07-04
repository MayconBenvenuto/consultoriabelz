import React from 'react';

interface PDFLinkProps {
  file: string;
  label: string;
  variant?: 'current' | 'belz' | 'default';
}

const PDFLink: React.FC<PDFLinkProps> = ({ file, label, variant = 'default' }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'current':
        return 'bg-red-50 border-red-200 text-red-700 hover:bg-red-100 hover:border-red-300';
      case 'belz':
        return 'bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/30';
      default:
        return 'bg-white border-gray-200 text-gray-900 hover:bg-background-light hover:border-gray-300';
    }
  };

  return (
    <a
      href={file}
      target="_blank"
      rel="noopener noreferrer"
      className={`block px-4 py-3 rounded-lg border-2 transition-all duration-200 font-medium shadow-sm hover:shadow-md ${getVariantStyles()}`}
    >
      <div className="flex items-center">
        <span className="text-lg mr-2">📄</span>
        <span className="text-sm">{label}</span>
      </div>
    </a>
  );
};

export default PDFLink;
