import { useState } from "react";
import { FaTools } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
// import { RiErrorWarningFill } from "react-icons/ri";
import { VscVmActive } from "react-icons/vsc";
// import { LuShieldCheck } from "react-icons/lu";
// import { GoShieldCheck } from "react-icons/go";

const AnalyticsCards = () => {
  const [completedRequests, setCompletedRequests] = useState("0");
  const [ongoingRequests, setOngoingRequests] = useState("0");
  const [pendingRequests, setPendingRequest] = useState("0");

  return (
    <div className="grid grid-cols-4 gap-4 items-start">
      <div className="flex flex-col bg-gradient-to-r from-[#3c79ea] to-slate-400 text-white rounded-md px-[1.5rem] py-4 font-semibold">
        <div className="flex items-center justify-between text-[1.9rem]">
          <p className="font-poppins">{completedRequests}</p>
          <MdDevices />
        </div>
        <span className="font-poppins">Completed Requests</span>
      </div>
      <div className="flex flex-col bg-gradient-to-r from-green-600 to-green-400 text-white rounded-md px-[1.5rem] py-4 font-semibold">
        <div className="flex items-center justify-between text-[1.9rem]">
          <p className="font-poppins">{pendingRequests}</p>
          <FaTools />
        </div>
        <span className="font-poppins">Ongoing Requests</span>
      </div>
      <div className="flex flex-col bg-gradient-to-r from-[#fbe246] to-yellow-200 text-black rounded-md px-[1.5rem] py-4 font-semibold">
        <div className="flex items-center justify-between text-[1.9rem]">
          <p className="font-poppins">{ongoingRequests}</p>
          <VscVmActive />
        </div>
        <span className="font-poppins">Pending Requests</span>
      </div>
    </div>
  );
};

export default AnalyticsCards;
