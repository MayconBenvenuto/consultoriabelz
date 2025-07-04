import ServiceCard from './ServiceCard';
import { companyData, formatCurrency } from '@/data/companyData';

const BelzProposalCard = () => {
  const { financialData, calculations } = companyData;
  const { belzProposal, currentCosts } = financialData;
  
  // Calcular diferenças para os indicadores
  const saudeSavings = currentCosts.saudeAtual - belzProposal.saudeProposta;
  const frotaSavings = currentCosts.frotaAtualMensal - belzProposal.frotaPropostaMensal;
  const vidaIncrease = belzProposal.vidaPropostaMensal - currentCosts.vidaAtualMensal;
  const empresarialSavings = currentCosts.empresarialAtualMensal - belzProposal.empresarialPropostaMensal;
  
  return (
    <section className="mb-8">
      <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 text-center">
        🎯 {companyData.labels.sections.belzProposal}
      </h3>
      
      {/* Grid da Proposta Belz */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-6">
        <ServiceCard
          title="Saúde Proposta"
          value={belzProposal.saudeProposta}
          variant="proposal"
          indicator={`Economia: ${formatCurrency(saudeSavings)}/mês`}
          indicatorType="savings"
        />
        
        <ServiceCard
          title="Frota (Tokio + Allianz)"
          value={`${formatCurrency(belzProposal.frotaPropostaMensal)}/mês`}
          detail={`${formatCurrency(belzProposal.frotaPropostaAnual)}/ano`}
          variant="proposal"
          indicator={`Economia: ${formatCurrency(frotaSavings)}/mês`}
          indicatorType="savings"
        />
        
        <ServiceCard
          title="Vida Proposta"
          value={`${formatCurrency(belzProposal.vidaPropostaMensal)}/mês`}
          detail={`${formatCurrency(belzProposal.vidaPropostaAnual)}/ano`}
          variant="proposal"
          indicator={`Aumento: ${formatCurrency(vidaIncrease)}/mês`}
          indicatorType="increase"
        />
        
        <ServiceCard
          title="Empresarial (Mapfre)"
          value={`${formatCurrency(belzProposal.empresarialPropostaMensal)}/mês`}
          detail={`${formatCurrency(belzProposal.empresarialPropostaAnual)}/ano`}
          variant="proposal"
          indicator={`Economia: ${formatCurrency(empresarialSavings)}/mês`}
          indicatorType="savings"
        />
        
        <ServiceCard
          title="Belz Conecta Saúde"
          value={belzProposal.belzConectaSaude}
          detail="Consultoria mensal"
          variant="special"
        />
      </div>
      
      {/* Total da Proposta */}
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <ServiceCard
            title="Total Proposta Belz (com consultoria)"
            value={calculations.totalProposalMonthly}
            variant="total"
          />
        </div>
      </div>
    </section>
  );
};

export default BelzProposalCard;
