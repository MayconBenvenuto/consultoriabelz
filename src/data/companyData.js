// Dados da empresa ULTRAMEGA baseados no arquivo informacoes_site.txt
export const companyData = {
  // Informações da Empresa
  company: {
    name: "ULTRAMEGA",
    consultant: "Belz Corretora de Seguros"
  },

  // Dados específicos de cada seção
  sections: {
    saude: {
      atual: {
        seguradoras: "SulAmérica/Hapvida",
        valorMensal: 61280.09,
        valorAnual: 61280.09 * 12,
        documentos: [
          { nome: "SulAmérica Atual", arquivo: "/arquivos/sulamerica-atual.pdf" },
          { nome: "Hapvida Atual", arquivo: "/arquivos/hapvida-atual.pdf" }
        ]
      },
      proposta: {
        seguradoras: "Bradesco/Unimed",
        valorMensal: 47454.61,
        valorAnual: 47454.61 * 12,
        documentos: [
          { nome: "Proposta Bradesco (Belz)", arquivo: "/arquivos/segurosaude-bradesco-belz.pdf" },
          { nome: "Proposta Unimed (Belz)", arquivo: "/arquivos/segurosaude-unimed-belz.pdf" }
        ]
      }
    },
    
    vida: {
      atual: {
        colaboradores: 33,
        valorMensal: 55.67,
        valorAnual: 668.00,
        valorPorColaborador: 20.24,
        seguradora: "Alfa",
        documentos: [
          { nome: "Seguro Atual (Alfa)", arquivo: "/arquivos/segurodevida-alfa-atual.pdf" }
        ]
      },
      proposta: {
        colaboradores: 70,
        valorMensal: 146.95,
        valorAnual: 1763.37,
        valorPorColaborador: 25.19,
        seguradora: "SulAmérica",
        observacao: "INCLUSÃO DE TELEMEDICINA",
        documentos: [
          { nome: "Seguro Belz (SulAmérica)", arquivo: "/arquivos/segurodevida-sulamerica-belz.pdf" }
        ]
      }
    },
    
    empresarial: {
      atual: {
        seguradora: "Porto Seguro",
        valorAnual: 102743.55,
        valorMensal: 102743.55 / 12,
        documentos: [
          { nome: "Seguro Empresarial Atual", arquivo: "/arquivos/seguroempresarial-atual.pdf" }
        ]
      },
      proposta: {
        seguradora: "Mapfre",
        valorAnual: 77688.09,
        valorMensal: 77688.09 / 12,
        documentos: []
      }
    },
    
    frota: {
      atual: {
        veiculos: 37,
        seguradora: "Bradesco",
        valorAnual: 260049.96,
        valorMensal: 260049.96 / 12,
        documentos: [
          { nome: "Seguro Atual", arquivo: "/arquivos/segurofrota-atual.pdf" }
        ]
      },
      proposta: {
        veiculos: 37,
        tokio: {
          valor: 15800.03,
          valorMensal: 15800.03 / 12
        },
        allianz: {
          valor: 206507.71,
          valorMensal: 206507.71 / 12
        },
        totalAnual: 222307.74,
        totalMensal: 222307.74 / 12,
        documentos: [
          { nome: "Proposta Tokio (Belz)", arquivo: "/arquivos/segurofrota-tokio-belz.pdf" },
          { nome: "Proposta Allianz (Belz)", arquivo: "/arquivos/segurofrota-allianz-belz.pdf" }
        ]
      }
    }
  },

  // Custos adicionais
  custosAdicionais: {
    ouvidoria: 1300.00,
    ginasticaLaboral: 2500.00,
    belzConectaSaude: 15000.00
  },

  // Dados Financeiros e Cálculos
  financialData: {
    // Valores Base
    currentCosts: {
      // Custos Extras (Valores Mensais)
      ouvidoria: 1300.00,
      ginasticaLaboral: 2500.00,
      
      // Saúde (Valores Mensais)
      saudeAtual: 61280.09,
      
      // Frota (Valores Anuais convertidos para mensais)
      frotaAtualAnual: 260049.96,
      frotaAtualMensal: 260049.96 / 12, // R$ 21.670,83
      
      // Seguro de Vida (Valores Anuais convertidos para mensais - 33 colaboradores)
      vidaAtualAnual: 668.00,
      vidaAtualMensal: 668.00 / 12, // R$ 55,67
      
      // Seguro Empresarial (Valores Anuais convertidos para mensais)
      empresarialAtualAnual: 102743.55,
      empresarialAtualMensal: 102743.55 / 12 // R$ 8.561,96
    },
    
    belzProposal: {
      // Saúde (Valores Mensais)
      saudeProposta: 47454.61,
      
      // Frota (Tokio + Allianz - Valores Anuais convertidos para mensais)
      frotaPropostaAnual: 222307.74,
      frotaPropostaMensal: 222307.74 / 12, // R$ 18.525,65
      
      // Seguro de Vida (Valores Anuais convertidos para mensais)
      vidaPropostaAnual: 1763.37,
      vidaPropostaMensal: 1763.37 / 12, // R$ 146,95
      
      // Seguro Empresarial Mapfre (Valores Anuais convertidos para mensais)
      empresarialPropostaAnual: 77688.09,
      empresarialPropostaMensal: 77688.09 / 12, // R$ 6.474,01
      
      // Consultoria (Valor Mensal)
      belzConectaSaude: 15000.00
    }
  },

  // Cálculos Automáticos
  get calculations() {
    const current = this.financialData.currentCosts;
    const proposal = this.financialData.belzProposal;
    
    // Custo Mensal Total Atual
    const totalCurrentMonthly = 
      current.ouvidoria + 
      current.ginasticaLaboral + 
      current.saudeAtual + 
      current.frotaAtualMensal + 
      current.vidaAtualMensal + 
      current.empresarialAtualMensal;
    
    // Custo Mensal Total Proposta Belz (incluindo consultoria)
    const totalProposalMonthly = 
      proposal.saudeProposta + 
      proposal.frotaPropostaMensal + 
      proposal.vidaPropostaMensal + 
      proposal.empresarialPropostaMensal + 
      proposal.belzConectaSaude;
    
    // Economia Bruta (Sem Belz Conecta Saúde)
    const grossSavingsMonthly = totalCurrentMonthly - (totalProposalMonthly - proposal.belzConectaSaude);
    const grossSavingsAnnual = grossSavingsMonthly * 12;
    
    // Economia Líquida Final (Com Belz Conecta Saúde)
    const netSavingsMonthly = totalCurrentMonthly - totalProposalMonthly;
    const netSavingsAnnual = netSavingsMonthly * 12;
    
    return {
      totalCurrentMonthly,      // R$ 95.368,55
      totalProposalMonthly,     // R$ 86.127,20
      grossSavingsMonthly,      // R$ 24.241,35
      grossSavingsAnnual,       // R$ 290.896,20
      netSavingsMonthly,        // R$ 9.241,35
      netSavingsAnnual,         // R$ 110.896,20
      savingsPercentage: (netSavingsMonthly / totalCurrentMonthly) * 100,
      roiConsultancy: ((netSavingsMonthly / proposal.belzConectaSaude) * 100) - 100
    };
  },

  // Dados para o gráfico comparativo
  get chartData() {
    const current = this.financialData.currentCosts;
    const proposal = this.financialData.belzProposal;
    
    return {
      labels: ['Saúde', 'Frota', 'Vida', 'Seguro Empresarial', 'Consultoria'],
      currentValues: [
        current.saudeAtual,
        current.frotaAtualMensal,
        current.vidaAtualMensal,
        current.empresarialAtualMensal,
        0 // Não há consultoria atual
      ],
      proposalValues: [
        proposal.saudeProposta,
        proposal.frotaPropostaMensal,
        proposal.vidaPropostaMensal,
        proposal.empresarialPropostaMensal,
        proposal.belzConectaSaude
      ]
    };
  },

  // Dados detalhados por serviço para comparação
  get serviceComparison() {
    const current = this.financialData.currentCosts;
    const proposal = this.financialData.belzProposal;
    
    return [
      {
        service: 'Saúde',
        current: current.saudeAtual,
        proposal: proposal.saudeProposta,
        difference: current.saudeAtual - proposal.saudeProposta,
        type: 'savings'
      },
      {
        service: 'Frota',
        current: current.frotaAtualMensal,
        proposal: proposal.frotaPropostaMensal,
        difference: current.frotaAtualMensal - proposal.frotaPropostaMensal,
        type: 'savings'
      },
      {
        service: 'Vida',
        current: current.vidaAtualMensal,
        proposal: proposal.vidaPropostaMensal,
        difference: current.vidaAtualMensal - proposal.vidaPropostaMensal,
        type: 'increase'
      },
      {
        service: 'Empresarial',
        current: current.empresarialAtualMensal,
        proposal: proposal.empresarialPropostaMensal,
        difference: current.empresarialAtualMensal - proposal.empresarialPropostaMensal,
        type: 'savings'
      },
      {
        service: 'Consultoria',
        current: 0,
        proposal: proposal.belzConectaSaude,
        difference: -proposal.belzConectaSaude,
        type: 'increase'
      }
    ];
  }
};

// Função utilitária para formatar valores em Real
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

// Exportar dados específicos para facilitar o uso
export const { 
  company, 
  labels, 
  financialData 
} = companyData;
