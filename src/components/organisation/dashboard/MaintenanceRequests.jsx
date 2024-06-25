import { Link } from "react-router-dom";

const MaintenanceRequests = () => {
  return (
    <div className="bg-white rounded-xl px-4 py-3 shadow-md drop-shadow-md">
      <div className="flex items-center justify-between gap-3">
        <h1 className="font-poppins font-medium text-[1.4rem]">
          Maintenance Requests
        </h1>
        <Link
          to="/organization/staff-management"
          className="font-poppins text-blue-70 text-[0.9rem]"
        >
          see all
        </Link>
      </div>
      <p className="font-poppins text-center py-[4rem] text-gray-500 text-[0.9rem]">
        No maintenance requests yet
      </p>
    </div>
  );
};

export default MaintenanceRequests;
