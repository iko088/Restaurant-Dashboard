import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ percentage, color, backgroundColor }) => {
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [color, backgroundColor],
        borderWidth: 0,
        cutout: '55%', // Creates the "donut" effect
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: false, // Disable tooltips
      },
      legend: {
        display: false, // Disable the legend
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <>
    <div className="relative " style={{ width: '130px', height: '130px' }}> {/* Adjust size as needed */}
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold">{percentage}%</span> {/* Adjusted text size */}
      </div>
    </div>
    </>
  );
};

export default DonutChart;
