'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';
import PDFSection from '@/components/common/PDFSection';
import { companyData, formatCurrency } from '@/data/companyData';


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simula carregamento dos dados
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const calculations = companyData.calculations;
  const current = companyData.financialData.currentCosts;
  const proposal = companyData.financialData.belzProposal;

  // Gera relatório detalhado (mantendo funcionalidade)
  const handleGenerateReport = () => {
    const report = `RELATÓRIO DETALHADO - PROPOSTA BELZ SEGUROS\n\nEMPRESA: ${companyData.company.name}\nDATA: ${new Date().toLocaleDateString('pt-BR')}\n\nECONOMIA MENSAL: ${formatCurrency(calculations.netSavingsMonthly)}\nECONOMIA ANUAL: ${formatCurrency(calculations.netSavingsAnnual)}\nPERCENTUAL DE ECONOMIA: ${calculations.savingsPercentage.toFixed(1)}%\n\n---\n\nSaúde: Atual: ${formatCurrency(current.saudeAtual)} | Proposta Belz: ${formatCurrency(proposal.saudeProposta)} | Economia: ${formatCurrency(current.saudeAtual - proposal.saudeProposta)}\nFrota: Atual: ${formatCurrency(current.frotaAtualMensal)} | Proposta Belz: ${formatCurrency(proposal.frotaPropostaMensal)} | Economia: ${formatCurrency(current.frotaAtualMensal - proposal.frotaPropostaMensal)}\nEmpresarial: Atual: ${formatCurrency(current.empresarialAtualMensal)} | Proposta Belz: ${formatCurrency(proposal.empresarialPropostaMensal)} | Economia: ${formatCurrency(current.empresarialAtualMensal - proposal.empresarialPropostaMensal)}\nVida: Atual: ${formatCurrency(current.vidaAtualMensal)} | Proposta Belz: ${formatCurrency(proposal.vidaPropostaMensal)} | Diferença: ${formatCurrency(proposal.vidaPropostaMensal - current.vidaAtualMensal)}\n\n---\n\nPayback: Imediato (economia supera o investimento desde o primeiro mês)\n`;
    const novaJanela = window.open('', '_blank');
    if (novaJanela) {
      novaJanela.document.write(`
        <html>
          <head>
            <title>Relatório Detalhado - ${companyData.company.name}</title>
            <style>
              body { font-family: 'Courier New', monospace; padding: 20px; line-height: 1.6; background-color: #f8f9fa; }
              pre { white-space: pre-wrap; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
              button { margin-top: 20px; padding: 12px 24px; background: #007bff; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; font-weight: 600; }
              button:hover { background: #0056b3; }
            </style>
          </head>
          <body>
            <pre>${report}</pre>
            <button onclick="window.print()">🖨️ Imprimir Relatório</button>
          </body>
        </html>
      `);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Image 
              src="/logos/ultramega.png" 
              alt="Logo Ultramega" 
              width={48}
              height={48}
              className="animate-pulse"
            />
            <div className="text-2xl font-bold text-blue-900">×</div>
            <Image 
              src="/logos/belz.png" 
              alt="Logo Belz" 
              width={48}
              height={48}
              className="animate-pulse"
            />
          </div>
          <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-blue-600 font-medium">Carregando dados das propostas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header Principal com Logos */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col items-center space-y-6">
            {/* Logos */}
            <div className="flex items-center justify-center space-x-12">
              <Image 
                src="/logos/ultramega.png" 
                alt="Logo Ultramega" 
                width={64}
                height={64}
              />
              <div className="text-4xl font-bold text-blue-900">×</div>
              <Image 
                src="/logos/belz.png" 
                alt="Logo Belz" 
                width={64}
                height={64}
              />
            </div>
            
            {/* Título Principal */}
            <div className="text-center">
              <h1 className="text-4xl font-bold text-blue-900 mb-3">
                ULTRAMEGA - BELZ SEGUROS
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Análise detalhada das propostas da Belz Corretora de Seguros
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Cards de Resumo da Economia */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white text-center">
            <h3 className="text-lg font-semibold mb-2">Economia Mensal</h3>
            <p className="text-3xl font-bold">{formatCurrency(calculations.netSavingsMonthly)}</p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white text-center">
            <h3 className="text-lg font-semibold mb-2">Economia Anual</h3>
            <p className="text-3xl font-bold">{formatCurrency(calculations.netSavingsAnnual)}</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white text-center">
            <h3 className="text-lg font-semibold mb-2">% de Economia</h3>
            <p className="text-3xl font-bold">{calculations.savingsPercentage.toFixed(1)}%</p>
          </div>
        </div>

        {/* Comparação Detalhada */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gray-50 px-6 py-4 border-b">
            <h2 className="text-2xl font-bold text-gray-800">Comparação Detalhada</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Situação Atual */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center">
                  <span className="w-4 h-4 bg-red-500 rounded-full mr-3"></span>
                  Situação Atual
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="font-semibold">Saúde:</span>
                    <span className="text-red-700 font-bold">{formatCurrency(current.saudeAtual)}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="font-semibold">Frota:</span>
                    <span className="text-red-700 font-bold">{formatCurrency(current.frotaAtualMensal)}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="font-semibold">Empresarial:</span>
                    <span className="text-red-700 font-bold">{formatCurrency(current.empresarialAtualMensal)}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="font-semibold">Vida:</span>
                    <span className="text-red-700 font-bold">{formatCurrency(current.vidaAtualMensal)}</span>
                  </div>
                </div>
              </div>

              {/* Nova Proposta Belz */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
                  <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                  Nova Proposta Belz
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="font-semibold">Saúde:</span>
                    <span className="text-blue-700 font-bold">{formatCurrency(proposal.saudeProposta)}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="font-semibold">Frota:</span>
                    <span className="text-blue-700 font-bold">{formatCurrency(proposal.frotaPropostaMensal)}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="font-semibold">Empresarial:</span>
                    <span className="text-blue-700 font-bold">{formatCurrency(proposal.empresarialPropostaMensal)}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="font-semibold">Vida:</span>
                    <span className="text-blue-700 font-bold">{formatCurrency(proposal.vidaPropostaMensal)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de PDFs */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <PDFSection />
        </div>

        {/* Botão para Gerar Relatório */}
        <div className="text-center">
          <Button 
            onClick={handleGenerateReport}
            variant="primary"
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
          >
            📊 Gerar Relatório Detalhado
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-8 mb-4">
            <Image 
              src="/logos/ultramega.png" 
              alt="Logo Ultramega" 
              width={32}
              height={32}
              className="opacity-80"
            />
            <Image 
              src="/logos/belz.png" 
              alt="Logo Belz" 
              width={32}
              height={32}
              className="opacity-80"
            />
          </div>
          <p className="text-gray-300">
            &copy; 2025 {companyData.company.consultant} - Consultoria {companyData.company.name}
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Análise comparativa de seguros empresariais
          </p>
        </div>
      </footer>
    </div>
  );
}

