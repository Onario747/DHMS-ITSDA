import {
  BarElement,
  CategoryScale,
  Chart as ChartJs,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { barChartData } from "../../data";
ChartJs.register(
  CategoryScale,
  Legend,
  LinearScale,
  BarElement,
  Title,
  Tooltip
);
const BarGraph = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          font: {
            family: "poppins",
          },
          boxWidth: 10,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    layout: {
      padding: 10,
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        beginAtZero: true,
        grid: {
          display: true,
          borderDash: [8, 4],
        },
      },
    },
    categoryPercentage: 0.8, // Adjusts the overall width of the bars within each category
    barPercentage: 0.9, // Adjusts the spacing between the bars
  };
  return (
    <div className="w-[600px] bg-white rounded-xl px-4 pt-3 shadow-md drop-shadow-md">
      <h1 className="font-poppins font-medium text-[1.4rem]">
        Device Enrolled
      </h1>
      <Bar options={options} data={barChartData} />
    </div>
  );
};

export default BarGraph;
