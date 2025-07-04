import Card from '@/components/common/Card';
import { formatCurrency } from '@/data/companyData';

const ServiceCard = ({ 
  title, 
  value, 
  detail, 
  variant = 'default',
  indicator,
  indicatorType 
}) => {
  return (
    <Card variant={variant}>
      <h4 className={`text-lg font-medium mb-3 ${
        variant === 'savings' || variant === 'total' || variant === 'stats' ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h4>
      
      <div className={`text-xl md:text-2xl font-bold mb-2 ${
        variant === 'savings' || variant === 'total' || variant === 'stats' ? 'text-white' : 'text-gray-900'
      }`}>
        {typeof value === 'number' ? formatCurrency(value) : value}
      </div>
      
      {detail && (
        <div className={`text-sm mb-2 ${
          variant === 'savings' || variant === 'total' || variant === 'stats' ? 'text-white opacity-90' : 'text-gray-800'
        }`}>
          {typeof detail === 'number' ? formatCurrency(detail) : detail}
        </div>
      )}
      
      {indicator && (
        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
          indicatorType === 'savings' 
            ? 'bg-green-500 text-white' 
            : indicatorType === 'increase' 
              ? 'bg-red-500 text-white'
              : 'bg-blue-500 text-white'
        }`}>
          {indicator}
        </div>
      )}
    </Card>
  );
};

export default ServiceCard;
