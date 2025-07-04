import { forwardRef } from 'react';

const Card = forwardRef(({ 
  children, 
  className = '', 
  variant = 'default',
  hover = true,
  ...props 
}, ref) => {
  const baseClasses = 'rounded-lg p-4 md:p-6 shadow-md transition-all duration-300';
  
  const variants = {
    default: 'bg-gray-100 border-l-4 border-gray-300',
    savings: 'bg-gradient-to-br from-green-500 to-teal-500 text-white',
    cost: 'bg-yellow-50 border-l-4 border-yellow-400',
    proposal: 'bg-green-50 border-l-4 border-green-500',
    special: 'bg-blue-50 border-l-4 border-blue-500',
    total: 'bg-gradient-to-br from-purple-600 to-pink-500 text-white',
    stats: 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white'
  };
  
  const hoverClasses = hover ? 'hover:-translate-y-1 hover:scale-105 hover:shadow-lg' : '';
  
  const cardClasses = `${baseClasses} ${variants[variant]} ${hoverClasses} ${className}`;
  
  return (
    <div ref={ref} className={cardClasses} {...props}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
