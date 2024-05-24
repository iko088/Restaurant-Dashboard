import React from 'react';
import { Square3Stack3DIcon } from '@heroicons/react/24/outline';
import Chart from 'react-apexcharts';

const chartConfig = {
  series: [
    {
      name: 'Sales 1',
      data: [20, 90, 300, 120, 500, 50, 200, 230, 100],
      color: '#FF5B5B',
    },
    {
      name: 'Sales 2',
      data: [80, 30, 150, 400, 250, 300, 50, 20, 400],
      color: '#2D9CDB',
    },
  ],
  options: {
    chart: {
      type: 'line',
      height: 240,
      toolbar: {
        show: false,
      },
    },
    title: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#FF5B5B', '#2D9CDB'],
    stroke: {
      width: 3,
      lineCap: 'round',
      curve: 'smooth',
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: '#616161',
          fontSize: '12px',
          fontFamily: 'inherit',
          fontWeight: 400,
        },
      },
      categories: [
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yaxis: {
      labels: {
        // Formatter function to display y-axis labels as prices with 'k' suffix
        formatter: function (value) {
          return `$${value}k`;
        },
        style: {
          colors: '#616161',
          fontSize: '12px',
          fontFamily: 'inherit',
          fontWeight: 400,
        },
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      // Formatter function to display tooltip values as prices with 'k' suffix
      y: {
        formatter: function (value) {
          return `$${value}k`;
        },
      },
      theme: 'dark',
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
      },
  },
};

export default function LineChart() {
  return (
      <div className="relative bg-white py-5 px-4  shadow rounded-lg">
    <h1 className='absolute top-3 left-5 text-[#464255] font-bold '>Total Revenue</h1>
      <div className="px-2 pb-0">
        <Chart options={chartConfig.options} series={chartConfig.series} type="line" height={240} />
      </div>
    </div>
  );
}
