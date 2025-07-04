import { useState, useEffect } from 'react';
import Card from '@/components/common/Card';
import { companyData, formatCurrency } from '@/data/companyData';

const SavingsSummaryCard = () => {
  const [animatedValues, setAnimatedValues] = useState({
    monthly: 0,
    annual: 0
  });
  
  const calculations = companyData.calculations;
  
  useEffect(() => {
    // Animar os valores de economia
    const animateValue = (target, setValue) => {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setValue(current);
      }, duration / steps);
      
      return timer;
    };
    
    const monthlyTimer = animateValue(calculations.netSavingsMonthly, (value) => {
      setAnimatedValues(prev => ({ ...prev, monthly: value }));
    });
    
    const annualTimer = animateValue(calculations.netSavingsAnnual, (value) => {
      setAnimatedValues(prev => ({ ...prev, annual: value }));
    });
    
    return () => {
      clearInterval(monthlyTimer);
      clearInterval(annualTimer);
    };
  }, [calculations.netSavingsMonthly, calculations.netSavingsAnnual]);
  
  return (
    <section className="mb-8">
      <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 text-center">
        💰 {companyData.labels.sections.savings.title}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card variant="savings" className="text-center">
          <h4 className="text-lg md:text-xl font-medium mb-4">
            Economia {companyData.labels.sections.savings.monthly}
          </h4>
          <div className="text-3xl md:text-4xl font-bold">
            {formatCurrency(animatedValues.monthly)}
          </div>
        </Card>
        
        <Card variant="savings" className="text-center">
          <h4 className="text-lg md:text-xl font-medium mb-4">
            Economia {companyData.labels.sections.savings.annual}
          </h4>
          <div className="text-3xl md:text-4xl font-bold">
            {formatCurrency(animatedValues.annual)}
          </div>
        </Card>
      </div>
      
      <p className="text-center text-gray-800 italic text-sm md:text-base">
        {companyData.labels.sections.savings.description}
      </p>
      
      {/* Estatísticas Adicionais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <Card variant="stats" className="text-center">
          <h5 className="text-sm font-medium mb-2">Percentual de Economia</h5>
          <div className="text-xl font-bold">
            {calculations.savingsPercentage.toFixed(1)}%
          </div>
        </Card>
        
        <Card variant="stats" className="text-center">
          <h5 className="text-sm font-medium mb-2">Economia por Dia</h5>
          <div className="text-xl font-bold">
            {formatCurrency(calculations.netSavingsMonthly / 30)}
          </div>
        </Card>
        
        <Card variant="stats" className="text-center">
          <h5 className="text-sm font-medium mb-2">ROI da Consultoria</h5>
          <div className="text-xl font-bold">
            {calculations.roiConsultancy.toFixed(1)}%
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SavingsSummaryCard;
