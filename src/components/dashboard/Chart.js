import { useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { companyData, formatCurrency } from '@/data/companyData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const chartRef = useRef(null);
  const chartData = companyData.chartData;
  
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: 'Custo Atual (Mensal)',
        data: chartData.currentValues,
        backgroundColor: 'rgba(239, 68, 68, 0.6)', // red-500 with opacity
        borderColor: 'rgba(239, 68, 68, 1)', // red-500
        borderWidth: 2,
        borderRadius: 4,
      },
      {
        label: 'Proposta Belz (Mensal)',
        data: chartData.proposalValues,
        backgroundColor: 'rgba(34, 197, 94, 0.6)', // green-500 with opacity
        borderColor: 'rgba(34, 197, 94, 1)', // green-500
        borderWidth: 2,
        borderRadius: 4,
      },
    ],
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
            weight: 'bold'
          },
          usePointStyle: true,
          padding: 20
        }
      },
      title: {
        display: true,
        text: 'Comparativo de Custos Mensais - Atual vs Proposta Belz',
        font: {
          size: 16,
          weight: 'bold'
        },
        padding: {
          top: 10,
          bottom: 30
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${formatCurrency(context.parsed.y)}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return formatCurrency(value);
          },
          font: {
            size: 12
          }
        },
        title: {
          display: true,
          text: 'Valor (R$)',
          font: {
            size: 14,
            weight: 'bold'
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Serviços',
          font: {
            size: 14,
            weight: 'bold'
          }
        },
        ticks: {
          font: {
            size: 12
          }
        },
        grid: {
          display: false
        }
      }
    },
    animation: {
      duration: 1500,
      easing: 'easeInOutQuart'
    }
  };
  
  return (
    <section className="mb-8">
      <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 text-center">
        {companyData.labels.sections.comparison}
      </h3>
      
      <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
        <div className="relative h-64 md:h-80 lg:h-96">
          <Bar ref={chartRef} data={data} options={options} />
        </div>
      </div>
    </section>
  );
};

export default Chart;
