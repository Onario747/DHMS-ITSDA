// import { Link } from "react-router-dom";
// import deviceImg from "../../assets/images/device.svg";
// import programmingImg from "../../assets/images/programming.svg";
// // import AnalyticCards from "./dashboard/AnalyticsCard";

import AnalyticsCards from "./dashboard/AnalyticsCard";

// const SuperAdminDashboardMain = () => {
//   return (
//     <section className="w-full pt-4">
//       <div className="flex items-center justify-between pb-[1.9rem] w-full">
//         <div className="">
//           <h1 className="font-montserrat font-bold text-[1.7rem] text-blue-70">
//             Welcome, Super Admin!
//           </h1>
//           <p className="font-poppins text-gray-500 text-[0.9rem]">
//             You can manage technicians, organizations, staff members, and
//             devices from this dashboard.
//           </p>
//         </div>
//       </div>
//       <div className="flex items-start justify-between w-full gap-4">
//         <div className="w-full">
//           <h1 className="font-poppins font-semibold text-[1.5rem] pb-2">
//             Overview
//           </h1>
//           <div className="flex flex-col">
//             {/* <AnalyticCards /> */}
//             <div className="pt-[1.5rem] gap-3 flex justify-between w-full">
//               <div className="flex flex-col items-center justify-center bg-white shadow-md px-4 drop-shadow-md rounded-md pt-2 gap-2">
//                 <div className="flex items-center justify-between w-full">
//                   <h1 className="font-poppins text-[1.4rem]">
//                     Enrolled Devices
//                   </h1>
//                   <Link to="/staff/device-inventory" className="text-blue-70">
//                     see all
//                   </Link>
//                 </div>
//                 <img
//                   src={deviceImg}
//                   className="w-[40%]"
//                   alt="programming image"
//                 />
//                 <p className="font-poppins text-gray-500 text-[0.9rem]">
//                   No devices assigned to you yet!
//                 </p>
//               </div>
//               <div className="flex flex-col items-center justify-center bg-white shadow-md px-4 drop-shadow-md rounded-md pt-2 gap-2">
//                 <div className="flex items-center justify-between w-full">
//                   <h1 className="font-poppins text-[1.4rem]">
//                     Maintenance Requests
//                   </h1>
//                   <Link to="/staff/maintenance" className="text-blue-70">
//                     see all
//                   </Link>
//                 </div>
//                 <img
//                   src={programmingImg}
//                   className="w-[40%]"
//                   alt="programming image"
//                 />
//                 <p className="font-poppins text-gray-500 text-[0.9rem]">
//                   No devices assigned to you yet!
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SuperAdminDashboardMain;

// import { FiPlusSquare } from "react-icons/fi";

// import BarGraph from "../Bar";
// import LineGraph from "../Line";
// import PieGraph from "../Pie";
// import AnalyticCards from "./dashboard/AnalyticCards";
// import MaintenanceRequests from "./dashboard/MaintenanceRequests";
// import RecentActivities from "./dashboard/RecentActivities";
// import PieGraph from "../Pie";

const SuperAdminDashboardMain = () => {
  return (
    <section className="w-full pt-4">
      <div className="flex items-center justify-between pb-[1.9rem] w-full">
        <div className="">
          <h1 className="font-montserrat font-bold text-[1.7rem] text-blue-70">
            Welcome, Super Admin!
          </h1>
          <p className="font-poppins text-gray-500 text-[0.9rem]">
            You can manage technicians, organizations, staff members, and
            devices from this dashboard.
          </p>
        </div>
      </div>
      <div className="flex items-start justify-between w-full gap-4">
        <div className="w-full">
          <h1 className="font-poppins font-semibold text-[1.5rem] pb-2">
            Overview
          </h1>
          <div>
            <AnalyticsCards />
          </div>
        </div>
        {/* <RecentActivities /> */}
      </div>
    </section>
  );
};

export default SuperAdminDashboardMain;
