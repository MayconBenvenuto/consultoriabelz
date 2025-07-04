import ServiceCard from './ServiceCard';
import { companyData, formatCurrency } from '@/data/companyData';

const CostSummaryCard = () => {
  const { financialData, calculations } = companyData;
  const { currentCosts } = financialData;
  
  return (
    <section className="mb-8">
      <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 text-center">
        💸 {companyData.labels.sections.currentCosts}
      </h3>
      
      {/* Grid de Custos Atuais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <ServiceCard
          title="Ouvidoria"
          value={currentCosts.ouvidoria}
          variant="cost"
        />
        
        <ServiceCard
          title="Ginástica Laboral"
          value={currentCosts.ginasticaLaboral}
          variant="cost"
        />
        
        <ServiceCard
          title="Saúde Atual"
          value={currentCosts.saudeAtual}
          variant="cost"
        />
        
        <ServiceCard
          title="Frota Atual"
          value={`${formatCurrency(currentCosts.frotaAtualMensal)}/mês`}
          detail={`${formatCurrency(currentCosts.frotaAtualAnual)}/ano`}
          variant="cost"
        />
        
        <ServiceCard
          title="Vida"
          value={`${formatCurrency(currentCosts.vidaAtualMensal)}/mês`}
          detail={`${formatCurrency(currentCosts.vidaAtualAnual)}/ano`}
          variant="cost"
        />
        
        <ServiceCard
          title="Seguro Empresarial"
          value={`${formatCurrency(currentCosts.empresarialAtualMensal)}/mês`}
          detail={`${formatCurrency(currentCosts.empresarialAtualAnual)}/ano`}
          variant="cost"
        />
      </div>
      
      {/* Total Atual */}
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <ServiceCard
            title="Total Atual Mensal"
            value={calculations.totalCurrentMonthly}
            variant="total"
          />
        </div>
      </div>
    </section>
  );
};

export default CostSummaryCard;
