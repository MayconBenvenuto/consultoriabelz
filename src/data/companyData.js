// Dados da empresa ULTRAMEGA baseados no arquivo informacoes_site.txt
export const companyData = {
  // Informações da Empresa
  company: {
    name: "ULTRAMEGA",
    consultant: "Belz Corretora de Seguros"
  },

  // Conteúdo de Texto do Site (Labels e Títulos)
  labels: {
    header: {
      title: "ULTRAMEGA - BELZ SEGUROS",
      subtitle: "Análise detalhada das propostas da Belz Corretora de Seguros"
    },
    sections: {
      currentCosts: "Custos Atuais Mensais",
      belzProposal: "Belz Conecta Saúde + Proposta Belz",
      comparison: "📊 Comparativo de Valores Anual",
      savings: {
        title: "Economia Total Estimada",
        monthly: "por MÊS:",
        annual: "por ANO:",
        description: "Valor economizado anualmente com as propostas da Belz Corretora"
      }
    },
    costItems: [
      "Ouvidoria",
      "Ginástica Laboral", 
      "Saúde Atual",
      "Frota Atual",
      "Vida",
      "Seguro Empresarial"
    ]
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
