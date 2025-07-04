import { companyData, formatCurrency } from '@/data/companyData';

const ComparisonTable = () => {
  const serviceComparison = companyData.serviceComparison;
  const calculations = companyData.calculations;
  
  return (
    <section className="mb-8">
      <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 text-center">
        ⚖️ Comparação Detalhada
      </h3>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Cabeçalho da Tabela */}
        <div className="grid grid-cols-4 bg-blue-600 text-white font-bold text-center">
          <div className="p-3 md:p-4">Serviço</div>
          <div className="p-3 md:p-4">Atual</div>
          <div className="p-3 md:p-4">Proposta</div>
          <div className="p-3 md:p-4">Diferença</div>
        </div>
        
        {/* Linhas de Dados */}
        {serviceComparison.map((service, index) => (
          <div 
            key={service.service} 
            className={`grid grid-cols-4 text-center border-b border-gray-200 ${
              index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
            }`}
          >
            <div className="p-3 md:p-4 font-medium text-gray-800">
              {service.service}
            </div>
            <div className="p-3 md:p-4 text-gray-700">
              {formatCurrency(service.current)}
            </div>
            <div className="p-3 md:p-4 text-gray-700">
              {formatCurrency(service.proposal)}
            </div>
            <div className={`p-3 md:p-4 font-bold ${
              service.type === 'savings' 
                ? 'text-green-600' 
                : 'text-red-600'
            }`}>
              {service.type === 'savings' ? '-' : '+'}{formatCurrency(Math.abs(service.difference))}
            </div>
          </div>
        ))}
        
        {/* Total */}
        <div className="grid grid-cols-4 bg-gray-100 font-bold text-center border-t-2 border-blue-600">
          <div className="p-4 text-gray-800">TOTAL</div>
          <div className="p-4 text-gray-800">
            {formatCurrency(calculations.totalCurrentMonthly)}
          </div>
          <div className="p-4 text-gray-800">
            {formatCurrency(calculations.totalProposalMonthly)}
          </div>
          <div className="p-4 text-green-600 font-bold">
            -{formatCurrency(calculations.netSavingsMonthly)}
          </div>
        </div>
      </div>
      
      {/* Resumo em Cards para Mobile */}
      <div className="md:hidden mt-6 space-y-4">
        {serviceComparison.map((service) => (
          <div key={service.service} className="bg-white rounded-lg shadow p-4">
            <h4 className="font-bold text-gray-800 mb-2">{service.service}</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Atual:</span>
                <span>{formatCurrency(service.current)}</span>
              </div>
              <div className="flex justify-between">
                <span>Proposta:</span>
                <span>{formatCurrency(service.proposal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Diferença:</span>
                <span className={service.type === 'savings' ? 'text-green-600' : 'text-red-600'}>
                  {service.type === 'savings' ? '-' : '+'}{formatCurrency(Math.abs(service.difference))}
                </span>
              </div>
            </div>
          </div>
        ))}
        
        <div className="bg-blue-50 rounded-lg shadow p-4 border-2 border-blue-200">
          <h4 className="font-bold text-blue-800 mb-2">TOTAL</h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Atual:</span>
              <span>{formatCurrency(calculations.totalCurrentMonthly)}</span>
            </div>
            <div className="flex justify-between">
              <span>Proposta:</span>
              <span>{formatCurrency(calculations.totalProposalMonthly)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Economia:</span>
              <span className="text-green-600 font-bold">
                -{formatCurrency(calculations.netSavingsMonthly)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
