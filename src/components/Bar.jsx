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
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          font: {
            family: "Poppins",
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
    categoryPercentage: 0.8,
    barPercentage: 0.9,
  };

  return (
    <div className="w-full bg-white rounded-xl p-4 shadow-md drop-shadow-md">
      <h1 className="font-poppins font-medium text-[1.4rem] max-md:text-[1.1rem] mb-4">
        Devices Enrolled
      </h1>
      <div className="relative  h-80">
        <Bar options={options} data={barChartData} />
      </div>
    </div>
  );
};

export default BarGraph;
