import React from "react";
import ReactApexChart from "react-apexcharts";

class AreaChart extends React.Component {
  constructor(props) {
    super(props);

    const { seriesData } = props;

    this.state = {
      series: [
        {
          name: "Orders",
          data: seriesData.monthDataSeries1.orders,
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 350,
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false, // Hide the toolbar
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Chart Order",
          align: "left",
          style: {
            fontSize: '18px', // Adjust font size
            color: '#464255', // Adjust font color
            fontWeight: 'bold', // Adjust font weight
          },
        },
        subtitle: {
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          align: "left",
        },
        labels: seriesData.monthDataSeries1.dates,
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          labels: {
            show: false, // Hide y-axis labels
          },
        },
        tooltip: {
          x: {
            formatter: function (val) {
              return val; // Display the date on hover
            },
          },
          y: {
            formatter: function (val) {
              return val + " orders"; // Display the number of orders on hover
            },
          },
        },
        legend: {
          horizontalAlign: "left",
        },
      },
    };
  }

  // Function to generate CSV data and download
  downloadCSV = () => {
    const { seriesData } = this.props;
    const csvContent =
      "data:text/csv;charset=utf-8," +
      seriesData.monthDataSeries1.dates.join(",") +
      "\n" +
      seriesData.monthDataSeries1.orders.join(",");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "chart_data.csv");
    document.body.appendChild(link);
    link.click();
  };

  render() {
    return (
      <div
        className="rounded-xl"
        style={{ padding: "10px", backgroundColor: "#FFFFFF" }}
      >
        {" "}
        {/* Add padding and background color */}
        <div id="chart" className="relative">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={230}
          />
          <div className="absolute top-1 right-2">
            <button
              className="text-[#2D9CDB] text-sm font-bold py-1 px-3 border-2 border-[#2D9CDB] rounded-lg "
              style={{ zIndex: 999 }}
              onClick={this.downloadCSV}
            >
              Save Report
            </button>
          </div>
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default AreaChart;
