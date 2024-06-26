// import { FiPlusSquare } from "react-icons/fi";
import { useAdmin } from "../../context/AdminContext";
import BarGraph from "../Bar";
// import LineGraph from "../Line";
// import PieGraph from "../Pie";
import AnalyticCards from "./dashboard/AnalyticCards";
import MaintenanceRequests from "./dashboard/MaintenanceRequests";
import DeviceModal from "./deviceInventory/DeviceModal";
// import RecentActivities from "./dashboard/RecentActivities";
// import PieGraph from "../Pie";

const DashboardMain = () => {
  const { adminName } = useAdmin();
  return (
    <section className="w-full pt-4">
      <div className="flex items-center justify-between max-md:flex-col max-md:gap-3 max-md:items-start pb-[1.9rem] w-full">
        <div className="flex gap-2">
          <h1 className="font-montserrat font-bold text-[1.7rem] max-md:text-[1.7rem] text-blue-70">
            Welcome, {adminName}
          </h1>
          <span className="text-[1.7rem] font-bold max-md:hidden text-gray-500 font-montserrat">
            (Admin)
          </span>
        </div>
        <DeviceModal />
      </div>
      <div className="w-full">
        <h1 className="font-poppins font-semibold text-[1.5rem] pb-2">
          Overview
        </h1>
        <div className="flex flex-col">
          <AnalyticCards />
          <div className="pt-[1.5rem] flex flex-col lg:flex-row gap-4 w-full">
            <div className="flex-1">
              <BarGraph />
            </div>
            <div className="flex-1">
              <MaintenanceRequests />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardMain;
