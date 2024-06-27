import { useNavigate } from "react-router-dom";
import AnalyticCards from "./dashboard/AnalyticsCard";

const TechnicianDashboardMain = () => {
  const navigate = useNavigate();

  const handleViewAllRequests = () => {
    navigate("/technician/maintenance-requests");
  };

  return (
    <section className="w-full pt-4">
      <div className="flex items-center justify-between pb-[1.9rem] w-full">
        <div className="flex gap-2">
          <h1 className="font-montserrat font-bold text-[1.7rem] text-blue-70">
            <span className="text-black">Welcome Back,</span> Technician
          </h1>
        </div>
        <button
          className="bg-blue-70 text-white p-2 font-poppins rounded-md"
          onClick={handleViewAllRequests}
        >
          View all Maintenance Requests
        </button>
      </div>
      <div className="flex items-start justify-between w-full gap-4">
        <div className="w-full">
          <h1 className="font-poppins font-semibold text-[1.5rem] pb-2">
            Overview
          </h1>
          <div className="flex flex-col">
            <AnalyticCards />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicianDashboardMain;
