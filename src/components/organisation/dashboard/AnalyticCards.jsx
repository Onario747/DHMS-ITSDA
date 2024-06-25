import { useState } from "react";
import { FaTools } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";
import { VscVmActive } from "react-icons/vsc";

const AnalyticCards = () => {
  const [assignedDevices, setAssignedDevices] = useState("0");
  const [activeDevices, setActiveDevices] = useState("0");
  const [inactiveDevices, setInactiveDevices] = useState("0");
  const [maintenanceRequests, setMaintenanceRequests] = useState("0");

  const cardStyles =
    "relative flex flex-col text-white rounded-xl px-[1.5rem] py-4 font-semibold overflow-hidden";
  const overlayStyles =
    "absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-solid border-white border-opacity-30";

  return (
    <div className="grid grid-cols-4 gap-4 items-start">
      <div
        className={cardStyles}
        style={{ background: "linear-gradient(to right, #3c79ea, #607d8b)" }}
      >
        <div className={overlayStyles}></div>
        <div className="relative flex items-center justify-between text-[1.9rem]">
          <p className="font-poppins">{assignedDevices}</p>
          <div className="bg-blue-300 rounded-xl p-2">
            <MdDevices className="text-blue-600" />
          </div>
        </div>
        <span className="relative font-poppins">Assigned Devices</span>
      </div>
      <div
        className={cardStyles}
        style={{ background: "linear-gradient(to right, #3c79ea, #607d8b)" }}
      >
        <div className={overlayStyles}></div>
        <div className="relative flex items-center justify-between text-[1.9rem]">
          <p className="font-poppins">{maintenanceRequests}</p>
          <div className="bg-green-300 rounded-xl p-2">
            <VscVmActive className="text-green-600" />
          </div>
        </div>
        <span className="relative font-poppins">Healthy Devices</span>
      </div>
      <div
        className={cardStyles}
        style={{ background: "linear-gradient(to right, #3c79ea, #607d8b)" }}
      >
        <div className={overlayStyles}></div>
        <div className="relative flex items-center justify-between text-[1.9rem]">
          <p className="font-poppins">{inactiveDevices}</p>
          <div className="bg-red-300 rounded-xl p-2">
            <RiErrorWarningFill className="text-red-600" />
          </div>
        </div>
        <span className="relative font-poppins">Faulty Devices</span>
      </div>
      <div
        className={cardStyles}
        style={{ background: "linear-gradient(to right, #3c79ea, #607d8b)" }}
      >
        <div className={overlayStyles}></div>
        <div className="relative flex items-center justify-between text-[1.9rem]">
          <p className="font-poppins">{activeDevices}</p>
          <div className="bg-white rounded-xl p-2">
            <FaTools className="text-blue-600" />
          </div>
        </div>
        <span className="relative font-poppins">On Maintenance</span>
      </div>
    </div>
  );
};

export default AnalyticCards;
