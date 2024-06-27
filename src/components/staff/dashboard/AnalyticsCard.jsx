import { useEffect, useState } from "react";
import { FaTools } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { VscVmActive } from "react-icons/vsc";
import requestClient from "../../../../axios/axiosRequest";

const AnalyticCards = () => {
  const [assignedDevices, setAssignedDevices] = useState("0");
  const [allMaintenanceRequests, setAllMaintenanceRequests] = useState("0");
  const [faultyDevices, setFaultyDevices] = useState("0");
  const [allStaffs, setAllStaffs] = useState("0");

  const cardStyles =
    "relative flex flex-col gap-2 text-white rounded-xl px-[1.5rem] py-4 font-semibold overflow-hidden";
  const overlayStyles =
    "absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-solid border-white border-opacity-30";

  useEffect(() => {
    const getDeviceCount = async () => {
      try {
        const response = await requestClient.get("/staff/device-count");
        console.log(response.data);
        setAssignedDevices(response.data.devices);
      } catch (error) {
        console.error("Error", error);
      }
    };

    getDeviceCount();
  }, []);

  useEffect(() => {
    const getAllStaffs = async () => {
      try {
        const response = await requestClient.get("/staff/maintenance");
        console.log(response.data);
        setAllStaffs(response.data.count);
      } catch (error) {
        console.error("Error", error);
      }
    };

    getAllStaffs();
  }, []);

  useEffect(() => {
    const getAllMaintenanceRequests = async () => {
      try {
        const response = await requestClient.get("/staff/maintenance-count?status=ongoing",);
        console.log(response.data);
        setAllMaintenanceRequests(response.data.requests);
      } catch (error) {
        console.error("Error", error);
      }
    };
    getAllMaintenanceRequests();
  }, []);

  return (
    <div className="grid grid-cols-4 max-md:grid-cols-2 gap-4 items-start">
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
        <span className="relative font-poppins max-md:text-[0.9rem]">
          Assigned Devices
        </span>
      </div>
      <div
        className={cardStyles}
        style={{ background: "linear-gradient(to right, #3c79ea, #607d8b)" }}
      >
        <div className={overlayStyles}></div>
        <div className="relative flex items-center justify-between text-[1.9rem]">
          <p className="font-poppins">{allStaffs}</p>
          <div className="bg-green-300 rounded-xl p-2">
            <VscVmActive className="text-green-600" />
          </div>
        </div>
        <span className="relative font-poppins max-md:text-[0.9rem]">
          Maintenance Requests
        </span>
      </div>
      <div
        className={cardStyles}
        style={{ background: "linear-gradient(to right, #3c79ea, #607d8b)" }}
      >
        <div className={overlayStyles}></div>
        <div className="relative flex items-center justify-between text-[1.9rem]">
          <p className="font-poppins">{allMaintenanceRequests}</p>
          <div className="bg-white rounded-xl p-2">
            <FaTools className="text-blue-600" />
          </div>
        </div>
        <span className="relative font-poppins">Ongoing Maintenance</span>
      </div>
    </div>
  );
};

export default AnalyticCards;
