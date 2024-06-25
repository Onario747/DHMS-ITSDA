import { ArcElement, Chart as ChartJs, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJs.register(Tooltip, Legend, ArcElement);
import { pieChartData } from "../../data";
const PieGraph = () => {
  const options = {}
  return (
    <div>
      <h1>Device Platforms</h1>
      <div className="w-[500px] bg-white rounded-md px-3 py-3 shadow-md">
        <Pie options={options} data={pieChartData} />
      </div>
    </div>
  );
}

export default PieGraph