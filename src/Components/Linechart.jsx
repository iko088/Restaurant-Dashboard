import React, { useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Linechart = () => {
  const [selectedRange, setSelectedRange] = useState("week"); // State variable to track selected range
  const [chartData, setChartData] = useState({
    week: [0, 20, 80, 90, 40, 60, 30, 100], // Sample data for week
    month: [0, 10, 40, 60, 20, 50, 30, 80], // Sample data for month
    year: [0, 30, 60, 70, 50, 80, 40, 90], // Sample data for year
  });

  useEffect(() => {
    const chartConfig = {
      series: [
        {
          name: "Sales",
          data: chartData[selectedRange], // Use selected range data
        },
      ],
      chart: {
        type: "bar",
        height: 210,
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
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 2,
          distributed: true, // Distributes colors to each bar
          spacing: 20,
        },
      },
      colors: [
        "#FF5B5B", // Red
        "#F7C604", // Yellow
        "#FF5B5B", // Red
        "#F7C604", // Yellow
        "#FF5B5B", // Red
        "#F7C604", // Yellow
        "#FF5B5B", // Red
      ],
      xaxis: {
        categories: ["Sun", "Sun", "Sun", "Sun", "Sun", "Sun", "Sun"], // 7 categories
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          offsetX: 8,
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        formatter: function (value, timestamp, index) {
          // Add space between months
          return value.split("").join("\xa0"); // Replace every character with itself followed by a non-breaking space
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
      legend: {
        show: false, // Disable the legend
      },
    };

    const chart = new ApexCharts(
      document.querySelector("#bar-chart"),
      chartConfig
    );
    chart.render();

    return () => {
      chart.destroy(); // Clean up the chart instance on component unmount
    };
  }, [selectedRange]); // Re-render chart when selectedRange changes

  const handleRangeChange = (e) => {
    setSelectedRange(e.target.value); // Update selected range
  };

  return (
    <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 mt-4 flex flex-col gap-4 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none md:flex-row md:items-center">
        <div className="flex items-center gap-8">
          <div>
            <label
              htmlFor="range-select"
              className="text-sm text-[#464255] font-bold"
            >
              Customer Map
            </label>
          </div>
          <div>
            <select
              id="range-select"
              value={selectedRange}
              onChange={handleRangeChange}
              className="px-2 py-1 border border-[#B9BBBD] outline-none rounded-md custom-select-arrow"
            >
              <option value="week">Week</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
            </select>
          </div>
          <HiOutlineDotsVertical className="cursor-pointer" />
        </div>
      </div>
      <div className="pt-6 px-2 pb-0">
        <div id="bar-chart"></div>
      </div>

      {/* Custom CSS for the dropdown arrow */}
      <style jsx>{`
        .custom-select-arrow {
          appearance: none;
          background-color: white;
          background-image: url("data:image/svg+xml,%3Csvg width='10' height='7' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 6.5L0.5 1.5L9.5 1.5L5 6.5Z' fill='%23FF0000'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          padding-right: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default Linechart;
