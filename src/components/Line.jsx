import {
  CategoryScale,
  Chart as ChartJs,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { lineChartData } from "../../data";
ChartJs.register(
  CategoryScale,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip
);

const LineGraph = () => {
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
        },
      },
    },
    layout: {
      padding: 10,
    },
  };
  return (
    <div className="">
      <h1 className="font-poppins text-blue-70 font-semibold text-[1.5rem] pb-2">
        Devices Enrolled
      </h1>
      <div className="w-[450px] bg-white rounded-md px-3 py-3 shadow-md">
        <Line options={options} data={lineChartData} />
      </div>
    </div>
  );
};

export default LineGraph;
