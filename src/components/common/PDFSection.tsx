import React from 'react';
import PDFLink from '../common/PDFLink';

const pdfs = [
  { file: '/arquivos/hapvida-atual.pdf', label: 'Hapvida (Atual)' },
  { file: '/arquivos/segurodevida-alfa-atual.pdf', label: 'Seguro de Vida Alfa (Atual)' },
  { file: '/arquivos/segurodevida-sulamerica-belz.pdf', label: 'Seguro de Vida SulAmérica (Belz)' },
  { file: '/arquivos/seguroempresarial-atual.pdf', label: 'Seguro Empresarial (Atual)' },
  { file: '/arquivos/segurofrota-allianz-belz.pdf', label: 'Seguro Frota Allianz (Belz)' },
  { file: '/arquivos/segurofrota-atual.pdf', label: 'Seguro Frota (Atual)' },
  { file: '/arquivos/segurofrota-tokio-belz.pdf', label: 'Seguro Frota Tokio (Belz)' },
  { file: '/arquivos/segurosaude-bradesco-belz.pdf', label: 'Seguro Saúde Bradesco (Belz)' },
  { file: '/arquivos/segurosaude-unimed-belz.pdf', label: 'Seguro Saúde Unimed (Belz)' },
  { file: '/arquivos/sulamerica-atual.pdf', label: 'SulAmérica (Atual)' },
];

const PDFSection: React.FC = () => (
  <section>
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Documentos e Propostas</h2>
      <p className="text-gray-600">Acesse todos os documentos relacionados às propostas atuais e da Belz</p>
    </div>
    
    {/* Separando por categoria */}
    <div className="space-y-8">
      {/* Seguros Atuais */}
      <div>
        <h3 className="text-lg font-semibold text-red-600 mb-4 flex items-center">
          <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
          Seguros Atuais
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {pdfs.filter(pdf => pdf.label.includes('(Atual)')).map((pdf) => (
            <PDFLink key={pdf.file} file={pdf.file} label={pdf.label} variant="current" />
          ))}
        </div>
      </div>

      {/* Propostas Belz */}
      <div>
        <h3 className="text-lg font-semibold text-blue-600 mb-4 flex items-center">
          <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
          Propostas Belz
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {pdfs.filter(pdf => pdf.label.includes('(Belz)')).map((pdf) => (
            <PDFLink key={pdf.file} file={pdf.file} label={pdf.label} variant="belz" />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PDFSection;
