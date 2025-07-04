'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';
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
      <div className="min-h-screen bg-[#f6f6f6] flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Image 
              src="/logos/ultramega.png" 
              alt="Logo Ultramega" 
              width={48}
              height={48}
              className="animate-pulse"
            />
            <div className="text-2xl font-bold text-primary">×</div>
            <Image 
              src="/logos/belz.png" 
              alt="Logo Belz" 
              width={48}
              height={48}
              className="animate-pulse"
            />
          </div>
          <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-primary font-medium">Carregando dados das propostas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f6f6]">
      {/* Header Principal com Logos */}
      <header className="bg-[#021d79] shadow-lg border-b-4 border-[#fff]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col items-center space-y-6">
            {/* Logos */}
            <div className="flex items-center justify-center space-x-12">
              <Image 
                src="/logos/ultramega.png" 
                alt="Logo Ultramega" 
                width={64}
                height={64}
                style={{ borderRadius: '8px' }}
              />
              <div className="text-4xl font-bold" style={{ color: '#fff' }}>×</div>
              <Image 
                src="/logos/belz.png" 
                alt="Logo Belz" 
                width={64}
                height={64}
                style={{ borderRadius: '8px' }}
              />
            </div>
            
            {/* Título Principal */}
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-3 titulo-branco" style={{ color: '#ffffff !important' }}>
                ULTRAMEGA - BELZ SEGUROS
              </h1>
              <p className="text-xl max-w-3xl mx-auto titulo-branco" style={{ color: '#ffffff !important' }}>
                Análise detalhada das propostas da Belz Corretora de Seguros
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* 1ª SEÇÃO: Seguro Saúde */}
        <section className="bg-[#f6f6f6] rounded-xl shadow-lg overflow-hidden">
          <div className="bg-[#021d79] px-6 py-4">
            <h2 className="text-3xl font-bold flex items-center titulo-branco" style={{ color: '#ffffff !important' }}>
              🩺 Seguro Saúde
            </h2>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Situação Atual */}
              <div className="bg-[#f6f6f6] border border-red-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                  📋 Situação Atual
                </h3>
                <div className="space-y-3">
                  <p className="text-red-700"><strong>Seguradora:</strong> {companyData.sections.saude.atual.seguradoras}</p>
                  <p className="text-red-700"><strong>Apólice:</strong></p>
                  <p className="text-2xl font-bold text-red-700">{formatCurrency(companyData.sections.saude.atual.valorMensal)}</p>
                  <div className="space-y-2 mt-4">
                    {companyData.sections.saude.atual.documentos.map((doc, index) => (
                      <a
                        key={index}
                        href={doc.arquivo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-red-100 hover:bg-red-200 text-red-700 font-semibold py-2 px-4 rounded transition-colors"
                      >
                        📄 BAIXAR {doc.nome.toUpperCase()}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Proposta Belz */}
              <div className="bg-[#021d79] rounded-xl p-6">
                <h3 id="proposta-belz-1" className="text-xl font-bold titulo-branco mb-4 flex items-center" style={{ color: 'white !important' }}>
                  <span style={{ color: 'white !important' }}>📋 Proposta Belz</span>
                </h3>
                <div className="space-y-3">
                  <p className="text-[#f6f6f6]"><strong>Seguradora:</strong> {companyData.sections.saude.proposta.seguradoras}</p>
                  <p className="text-[#f6f6f6]"><strong>Apólice:</strong></p>
                  <p className="text-2xl font-bold text-[#f6f6f6]">{formatCurrency(companyData.sections.saude.proposta.valorMensal)}</p>
                  <div className="space-y-2 mt-4">
                    {companyData.sections.saude.proposta.documentos.map((doc, index) => (
                      <a
                        key={index}
                        href={doc.arquivo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-[#021d79] hover:bg-[#011147] text-[#f6f6f6] font-semibold py-2 px-4 rounded transition-colors border border-[#f6f6f6]"
                      >
                        📄 BAIXAR {doc.nome.toUpperCase()}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Comparativo Detalhado */}
            <div className="bg-[#f6f6f6] rounded-xl p-6 border border-[#021d79]">
              <h4 className="text-lg font-bold text-[#021d79] mb-4">Comparativo Detalhado</h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#021d79]">
                      <th className="px-4 py-2 text-left text-[#f6f6f6]">Categoria</th>
                      <th className="px-4 py-2 text-left text-[#f6f6f6]">Atual ({companyData.sections.saude.atual.seguradoras})</th>
                      <th className="px-4 py-2 text-left text-[#f6f6f6]">Proposta ({companyData.sections.saude.proposta.seguradoras})</th>
                      <th className="px-4 py-2 text-left text-[#f6f6f6]">Economia</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 font-semibold text-[#021d79]">Valor Mensal</td>
                      <td className="px-4 py-2 text-red-700">{formatCurrency(companyData.sections.saude.atual.valorMensal)}</td>
                      <td className="px-4 py-2 text-[#021d79]">{formatCurrency(companyData.sections.saude.proposta.valorMensal)}</td>
                      <td className="px-4 py-2 text-green-700 font-bold">{formatCurrency(companyData.sections.saude.atual.valorMensal - companyData.sections.saude.proposta.valorMensal)}</td>
                    </tr>
                    <tr className="bg-[#e3e8f7]">
                      <td className="px-4 py-2 font-semibold text-[#021d79]">Valor Anual</td>
                      <td className="px-4 py-2 text-red-700">{formatCurrency(companyData.sections.saude.atual.valorAnual)}</td>
                      <td className="px-4 py-2 text-[#021d79]">{formatCurrency(companyData.sections.saude.proposta.valorAnual)}</td>
                      <td className="px-4 py-2 text-green-700 font-bold">{formatCurrency(companyData.sections.saude.atual.valorAnual - companyData.sections.saude.proposta.valorAnual)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 2ª SEÇÃO: Seguro de Vida */}
        <section className="bg-[#f6f6f6] rounded-xl shadow-lg overflow-hidden">
          <div className="bg-[#021d79] px-6 py-4">
            <h2 className="text-3xl font-bold flex items-center titulo-branco" style={{ color: '#ffffff !important' }}>
              🛡️ Seguro de Vida
            </h2>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Situação Atual */}
              <div className="bg-[#f6f6f6] border border-red-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                  📋 Situação Atual
                </h3>
                <div className="space-y-3">
                  <p className="flex items-center text-red-700"><span className="text-2xl mr-2">👥</span> {companyData.sections.vida.atual.colaboradores} Colaboradores</p>
                  <p className="text-2xl font-bold text-red-700">{formatCurrency(companyData.sections.vida.atual.valorMensal)}</p>
                  <p className="text-red-700">Valor por colaborador: {formatCurrency(companyData.sections.vida.atual.valorPorColaborador)}</p>
                  <div className="space-y-2 mt-4">
                    {companyData.sections.vida.atual.documentos.map((doc, index) => (
                      <a
                        key={index}
                        href={doc.arquivo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-red-100 hover:bg-red-200 text-red-700 font-semibold py-2 px-4 rounded transition-colors"
                      >
                        📄 BAIXAR {doc.nome.toUpperCase()}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Proposta Belz */}
              <div className="bg-[#021d79] rounded-xl p-6">
                <h3 id="proposta-belz-2" className="text-xl font-bold titulo-branco mb-4 flex items-center" style={{ color: 'white !important' }}>
                  <span style={{ color: 'white !important' }}>📋 Proposta Belz</span>
                </h3>
                <div className="space-y-3">
                  <p className="flex items-center text-[#f6f6f6]"><span className="text-2xl mr-2">👥</span> {companyData.sections.vida.proposta.colaboradores} Colaboradores</p>
                  <p className="text-2xl font-bold text-[#f6f6f6]">{formatCurrency(companyData.sections.vida.proposta.valorMensal)}</p>
                  <p className="text-[#f6f6f6]">Valor por colaborador: {formatCurrency(companyData.sections.vida.proposta.valorPorColaborador)}</p>
                  <div className="space-y-2 mt-4">
                    {companyData.sections.vida.proposta.documentos.map((doc, index) => (
                      <a
                        key={index}
                        href={doc.arquivo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-[#021d79] hover:bg-[#011147] text-[#f6f6f6] font-semibold py-2 px-4 rounded transition-colors border border-[#f6f6f6]"
                      >
                        📄 BAIXAR {doc.nome.toUpperCase()}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Comparativo Detalhado */}
            <div className="bg-[#f6f6f6] rounded-xl p-6 border border-[#021d79]">
              <h4 className="text-lg font-bold text-[#021d79] mb-4">Comparativo Detalhado</h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#021d79]">
                      <th className="px-4 py-2 text-left text-[#f6f6f6]">Categoria</th>
                      <th className="px-4 py-2 text-left text-[#f6f6f6]">Atual ({companyData.sections.vida.atual.seguradora})</th>
                      <th className="px-4 py-2 text-left text-[#f6f6f6]">Proposta ({companyData.sections.vida.proposta.seguradora})</th>
                      <th className="px-4 py-2 text-left text-[#f6f6f6]">Investimento</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 font-semibold text-[#021d79]">Valor Mensal</td>
                      <td className="px-4 py-2 text-red-700">{formatCurrency(companyData.sections.vida.atual.valorMensal)}</td>
                      <td className="px-4 py-2 text-[#021d79]">{formatCurrency(companyData.sections.vida.proposta.valorMensal)}</td>
                      <td className="px-4 py-2 text-red-700 font-bold">-{formatCurrency(companyData.sections.vida.proposta.valorMensal - companyData.sections.vida.atual.valorMensal)}</td>
                    </tr>
                    <tr className="bg-[#e3e8f7]">
                      <td className="px-4 py-2 font-semibold text-[#021d79]">Valor Anual</td>
                      <td className="px-4 py-2 text-red-700">{formatCurrency(companyData.sections.vida.atual.valorAnual)}</td>
                      <td className="px-4 py-2 text-[#021d79]">{formatCurrency(companyData.sections.vida.proposta.valorAnual)}</td>
                      <td className="px-4 py-2 text-red-700 font-bold">-{formatCurrency(companyData.sections.vida.proposta.valorAnual - companyData.sections.vida.atual.valorAnual)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-[#e3e8f7] rounded-lg">
                <p className="text-[#021d79] font-semibold">*OBSERVAÇÃO: {companyData.sections.vida.proposta.observacao}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3ª SEÇÃO: Seguro Empresarial */}
        <section className="bg-[#f6f6f6] rounded-xl shadow-lg overflow-hidden">
          <div className="bg-[#021d79] px-6 py-4">
            <h2 className="text-3xl font-bold flex items-center titulo-branco" style={{ color: '#ffffff !important' }}>
              🏢 Seguro Empresarial
            </h2>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Situação Atual */}
              <div className="bg-[#f6f6f6] border border-red-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                  🏢 Situação Atual
                </h3>
                <div className="space-y-3">
                  <p className="text-red-700"><strong>Seguradora:</strong> {companyData.sections.empresarial.atual.seguradora}</p>
                  <p className="text-red-700"><strong>Apólice:</strong></p>
                  <p className="text-2xl font-bold text-red-700">{formatCurrency(companyData.sections.empresarial.atual.valorAnual)}</p>
                  <div className="space-y-2 mt-4">
                    {companyData.sections.empresarial.atual.documentos.map((doc, index) => (
                      <a
                        key={index}
                        href={doc.arquivo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-red-100 hover:bg-red-200 text-red-700 font-semibold py-2 px-4 rounded transition-colors"
                      >
                        📄 BAIXAR {doc.nome.toUpperCase()}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Proposta Belz */}
              <div className="bg-[#021d79] rounded-xl p-6">
                <h3 id="proposta-belz-3" className="text-xl font-bold titulo-branco mb-4 flex items-center" style={{ color: 'white !important' }}>
                  <span style={{ color: 'white !important' }}>🏢 Proposta Belz</span>
                </h3>
                <div className="space-y-3">
                  <p className="text-[#f6f6f6]"><strong>Seguradora:</strong> {companyData.sections.empresarial.proposta.seguradora}</p>
                  <p className="text-[#f6f6f6]"><strong>Apólice:</strong></p>
                  <p className="text-2xl font-bold text-[#f6f6f6]">{formatCurrency(companyData.sections.empresarial.proposta.valorAnual)}</p>
                  <p className="text-[#f6f6f6] font-semibold mt-4">
                    Economia anual: {formatCurrency(companyData.sections.empresarial.atual.valorAnual - companyData.sections.empresarial.proposta.valorAnual)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4ª SEÇÃO: Seguro de Frota */}
        <section className="bg-[#f6f6f6] rounded-xl shadow-lg overflow-hidden">
          <div className="bg-[#021d79] px-6 py-4">
            <h2 className="text-3xl font-bold flex items-center titulo-branco" style={{ color: '#ffffff !important' }}>
              🚙 Seguro de Frota
            </h2>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Situação Atual */}
              <div className="bg-[#f6f6f6] border border-red-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                  🚗 Situação Atual
                </h3>
                <div className="space-y-3">
                  <p className="text-red-700">Veículos: {companyData.sections.frota.atual.veiculos}</p>
                  <p className="text-red-700"><strong>Seguradora:</strong> {companyData.sections.frota.atual.seguradora}</p>
                  <p className="text-2xl font-bold text-red-700">{formatCurrency(companyData.sections.frota.atual.valorAnual)} anualmente</p>
                  <div className="space-y-2 mt-4">
                    {companyData.sections.frota.atual.documentos.map((doc, index) => (
                      <a
                        key={index}
                        href={doc.arquivo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-red-100 hover:bg-red-200 text-red-700 font-semibold py-2 px-4 rounded transition-colors"
                      >
                        📄 BAIXAR {doc.nome.toUpperCase()}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Nova Proposta Belz */}
              <div className="bg-[#021d79] rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center titulo-branco" style={{ color: 'white !important' }}>
                  <span style={{ color: 'white !important' }}>🚗 Nova Proposta Belz</span>
                </h3>
                <div className="space-y-3">
                  <p className="text-[#f6f6f6]">Veículos: {companyData.sections.frota.proposta.veiculos}</p>
                  <p className="text-[#f6f6f6]">Tokio: {formatCurrency(companyData.sections.frota.proposta.tokio.valor)}</p>
                  <p className="text-[#f6f6f6]">Allianz: {formatCurrency(companyData.sections.frota.proposta.allianz.valor)}</p>
                  <p className="text-2xl font-bold text-[#f6f6f6]">{formatCurrency(companyData.sections.frota.proposta.totalAnual)} anualmente</p>
                  <div className="space-y-2 mt-4">
                    {companyData.sections.frota.proposta.documentos.map((doc, index) => (
                      <a
                        key={index}
                        href={doc.arquivo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-[#021d79] hover:bg-[#011147] text-[#f6f6f6] font-semibold py-2 px-4 rounded transition-colors border border-[#f6f6f6]"
                      >
                        📄 BAIXAR {doc.nome.toUpperCase()}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Comparativo Detalhado Frota */}
            <div className="bg-[#f6f6f6] rounded-xl p-6 border border-[#021d79]">
              <h4 className="text-lg font-bold text-[#021d79] mb-4">Comparativo Detalhado</h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#021d79]">
                      <th className="px-4 py-2 text-left text-[#f6f6f6]">Seguradora</th>
                      <th className="px-4 py-2 text-left text-[#f6f6f6]">Valor Anual</th>
                      <th className="px-4 py-2 text-left text-[#f6f6f6]">Valor Mensal</th>
                      <th className="px-4 py-2 text-left text-[#f6f6f6]">Status</th>
                      <th className="px-4 py-2 text-left text-[#f6f6f6]">Economia Anual</th>
                      <th className="px-4 py-2 text-left text-[#f6f6f6]">Economia Mensal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 font-semibold text-red-700">{companyData.sections.frota.atual.seguradora} (Atual)</td>
                      <td className="px-4 py-2 text-red-700">{formatCurrency(companyData.sections.frota.atual.valorAnual)}</td>
                      <td className="px-4 py-2 text-red-700">{formatCurrency(companyData.sections.frota.atual.valorMensal)}</td>
                      <td className="px-4 py-2 text-red-700">Atual</td>
                      <td className="px-4 py-2">-</td>
                      <td className="px-4 py-2">-</td>
                    </tr>
                    <tr className="bg-[#e3e8f7]">
                      <td className="px-4 py-2 font-semibold text-[#021d79]">Total Belz</td>
                      <td className="px-4 py-2 text-[#021d79]">{formatCurrency(companyData.sections.frota.proposta.totalAnual)}</td>
                      <td className="px-4 py-2 text-[#021d79]">{formatCurrency(companyData.sections.frota.proposta.totalMensal)}</td>
                      <td className="px-4 py-2 text-[#021d79]">Proposta Total</td>
                      <td className="px-4 py-2 text-green-700 font-bold">{formatCurrency(companyData.sections.frota.atual.valorAnual - companyData.sections.frota.proposta.totalAnual)}</td>
                      <td className="px-4 py-2 text-green-700 font-bold">{formatCurrency(companyData.sections.frota.atual.valorMensal - companyData.sections.frota.proposta.totalMensal)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 5ª SEÇÃO: CARDS DOS CUSTOS */}
        <section className="bg-[#f6f6f6] rounded-xl shadow-lg overflow-hidden">
          <div className="bg-[#021d79] px-6 py-4">
            <h2 className="text-3xl font-bold flex items-center titulo-branco" style={{ color: '#ffffff !important' }}>💸 Análise de Custos</h2>
          </div>
          
          <div className="p-6 space-y-8">
            {/* Custos Atuais Mensais */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Custos Atuais Mensais</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
                <div className="bg-[#021d79] rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🎧</div>
                  <div className="text-sm font-semibold text-[#f6f6f6]">Ouvidoria</div>
                  <div className="text-lg font-bold text-[#f6f6f6]">{formatCurrency(companyData.custosAdicionais.ouvidoria)}</div>
                </div>
                <div className="bg-[#e3e8f7] rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">💪</div>
                  <div className="text-sm font-semibold text-[#021d79]">Ginástica Laboral</div>
                  <div className="text-lg font-bold text-[#021d79]">{formatCurrency(companyData.custosAdicionais.ginasticaLaboral)}</div>
                </div>
                <div className="bg-[#e3e8f7] rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">⚕️</div>
                  <div className="text-sm font-semibold text-[#021d79]">Saúde Atual</div>
                  <div className="text-lg font-bold text-[#021d79]">{formatCurrency(companyData.sections.saude.atual.valorMensal)}</div>
                </div>
                <div className="bg-[#e3e8f7] rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🚙</div>
                  <div className="text-sm font-semibold text-[#021d79]">Frota Atual</div>
                  <div className="text-lg font-bold text-[#021d79]">{formatCurrency(companyData.sections.frota.atual.valorMensal)}</div>
                </div>
                <div className="bg-[#e3e8f7] rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🛡️</div>
                  <div className="text-sm font-semibold text-[#021d79]">Vida</div>
                  <div className="text-lg font-bold text-[#021d79]">{formatCurrency(companyData.sections.vida.atual.valorMensal)}</div>
                </div>
                <div className="bg-[#e3e8f7] rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🏢</div>
                  <div className="text-sm font-semibold text-[#021d79]">Empresarial</div>
                  <div className="text-lg font-bold text-[#021d79]">{formatCurrency(companyData.sections.empresarial.atual.valorMensal)}</div>
                </div>
              </div>
              
              <div className="bg-[#021d79] rounded-xl p-6 text-center">
                <div className="text-xl font-semibold text-[#f6f6f6] mb-2">Custo Mensal</div>
                <div className="text-3xl font-bold text-[#f6f6f6]">{formatCurrency(calculations.totalCurrentMonthly)}</div>
                <div className="text-lg font-semibold text-[#f6f6f6] mt-2">× 12</div>
                <div className="text-xl font-semibold text-[#f6f6f6] mt-2">Custo Anual</div>
                <div className="text-3xl font-bold text-[#f6f6f6]">{formatCurrency(calculations.totalCurrentMonthly * 12)}</div>
              </div>
            </div>

            {/* Custos Mensais - Proposta Belz */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Custos Mensais - Proposta Belz</h3>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-[#021d79] rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">⚕️</div>
                <div className="text-sm font-semibold text-[#f6f6f6]">Saúde Belz</div>
                <div className="text-lg font-bold text-[#f6f6f6]">{formatCurrency(companyData.sections.saude.proposta.valorMensal)}</div>
              </div>
              <div className="bg-[#e3e8f7] rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🚙</div>
                <div className="text-sm font-semibold text-[#021d79]">Frota Belz</div>
                <div className="text-lg font-bold text-[#021d79]">{formatCurrency(companyData.sections.frota.proposta.totalMensal)}</div>
              </div>
              <div className="bg-[#e3e8f7] rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🛡️</div>
                <div className="text-sm font-semibold text-[#021d79]">Vida</div>
                <div className="text-lg font-bold text-[#021d79]">{formatCurrency(companyData.sections.vida.proposta.valorMensal)}</div>
              </div>
              <div className="bg-[#e3e8f7] rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🏢</div>
                <div className="text-sm font-semibold text-[#021d79]">Empresarial</div>
                <div className="text-lg font-bold text-[#021d79]">{formatCurrency(companyData.sections.empresarial.proposta.valorMensal)}</div>
              </div>
              </div>
              
              <div className="bg-[#021d79] rounded-xl p-6 text-center">
                <div className="text-xl font-semibold text-[#f6f6f6] mb-2">Custo Mensal</div>
                <div className="text-3xl font-bold text-[#f6f6f6]">{formatCurrency(calculations.totalProposalMonthly - companyData.custosAdicionais.belzConectaSaude)}</div>
                <div className="text-lg font-semibold text-[#f6f6f6] mt-2">× 12</div>
                <div className="text-xl font-semibold text-[#f6f6f6] mt-2">Custo Anual</div>
                <div className="text-3xl font-bold text-[#f6f6f6]">{formatCurrency((calculations.totalProposalMonthly - companyData.custosAdicionais.belzConectaSaude) * 12)}</div>
              </div>
            </div>

            {/* Economia Total Estimada Seguros */}
            <div className="bg-[#e3e8f7] rounded-xl p-6">
              <h3 className="text-2xl font-bold text-[#021d79] text-center mb-4">💰 Economia Total Estimada Seguros</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-lg font-semibold text-[#021d79]">por MÊS:</div>
                  <div className="text-3xl font-bold text-[#021d79]">{formatCurrency(calculations.grossSavingsMonthly)}</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-[#021d79]">por ANO:</div>
                  <div className="text-3xl font-bold text-[#021d79]">{formatCurrency(calculations.grossSavingsAnnual)}</div>
                </div>
              </div>
              <p className="text-sm text-[#021d79] mt-4 text-center">
                Esta economia considera todos os custos atuais e a proposta Belz, sem incluir o Belz Conecta Saúde. 
                A economia líquida real será apresentada na seção final.
              </p>
            </div>
          </div>
        </section>

        {/* 6ª SEÇÃO: IMAGEM DA PROPOSTA BELZ CONECTA SAÚDE */}
        <section className="bg-[#021d79] rounded-xl shadow-lg overflow-hidden text-[#f6f6f6]">
          <div className="p-8 text-center">
            <h2 className="text-4xl font-bold mb-6 titulo-branco" style={{ color: '#ffffff !important' }}>🏥 BELZ CONECTA SAÚDE</h2>
            <div className="flex justify-center">
              <Image 
                src="/arquivos/proposta-belz.png" 
                alt="Proposta Belz Conecta Saúde" 
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </section>

        {/* 7ª SEÇÃO: Economia Total Estimada */}
        <section className="bg-[#f6f6f6] rounded-xl shadow-lg overflow-hidden">
          <div className="bg-[#021d79] px-6 py-4">
            <h2 className="text-3xl font-bold flex items-center titulo-branco" style={{ color: '#ffffff !important' }}>🎯 Economia Total Estimada</h2>
          </div>
          
          <div className="p-6 space-y-8">
            {/* Economia sem Belz Conecta */}
            <div className="bg-[#e3e8f7] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#021d79] mb-4 text-center">Economia sem Belz Conecta Saúde</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-lg font-semibold text-[#021d79]">por MÊS:</div>
                  <div className="text-3xl font-bold text-[#021d79]">{formatCurrency(calculations.grossSavingsMonthly)}</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-[#021d79]">por ANO:</div>
                  <div className="text-3xl font-bold text-[#021d79]">{formatCurrency(calculations.grossSavingsAnnual)}</div>
                </div>
              </div>
            </div>

            {/* Economia com Belz Conecta */}
            <div className="bg-[#021d79] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#f6f6f6] mb-4 text-center">Economia COM Belz Conecta Saúde</h3>
              <div className="text-center mb-4">
                <div className="text-lg text-[#f6f6f6]">
                  {formatCurrency(calculations.grossSavingsMonthly)} - {formatCurrency(companyData.custosAdicionais.belzConectaSaude)} = {formatCurrency(calculations.netSavingsMonthly)}
                </div>
                <div className="text-sm text-[#f6f6f6]">com Belz Conecta Saúde</div>
              </div>
              <div className="text-center mb-4">
                <div className="text-lg text-[#f6f6f6]">
                  {formatCurrency(calculations.grossSavingsAnnual)} - {formatCurrency(companyData.custosAdicionais.belzConectaSaude * 12)} = {formatCurrency(calculations.netSavingsAnnual)}
                </div>
                <div className="text-sm text-[#f6f6f6]">com Belz Conecta Saúde</div>
              </div>
              <div className="text-center text-sm text-[#f6f6f6]">
                Valor economizado anualmente com as propostas da Belz Corretora
              </div>
            </div>

            {/* Economia Final */}
            <div className="bg-[#011147] rounded-xl p-8 text-[#f6f6f6] text-center">
              <h3 className="text-2xl font-bold mb-6">Economia Total COM a CONSULTORIA e a BELZ CONECTA SAÚDE!</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <div className="text-lg font-semibold">por MÊS:</div>
                  <div className="text-4xl font-bold">{formatCurrency(calculations.netSavingsMonthly)}</div>
                </div>
                <div>
                  <div className="text-lg font-semibold">por ANO:</div>
                  <div className="text-4xl font-bold">{formatCurrency(calculations.netSavingsAnnual)}</div>
                </div>
              </div>
              <p className="text-lg">
                Valor economizado anualmente com as propostas da Belz Corretora<br/>
                (Inclui investimento de {formatCurrency(companyData.custosAdicionais.belzConectaSaude)} mensais no Belz Conecta Saúde)
              </p>
            </div>
          </div>
        </section>

        {/* Botão para Gerar Relatório */}
        <div className="text-center">
          <Button 
            onClick={handleGenerateReport}
            variant="primary"
            size="lg"
            className="bg-gradient-primary hover:bg-gradient-primary-reverse px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
          >
            📊 Gerar Relatório Detalhado
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#011147] text-[#f6f6f6] py-8 mt-16">
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
          <p className="text-white font-medium">
            &copy; 2025 {companyData.company.consultant} - Consultoria {companyData.company.name}
          </p>
          <p className="text-sm text-gray-100 mt-2">
            Análise comparativa de seguros empresariais
          </p>
        </div>
      </footer>
    </div>
  );
}

