import { useEffect, useState } from "react";
import { FaTools } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { VscVmActive } from "react-icons/vsc";
import CountUp from "react-countup";
import requestClient from "../../../../axios/axiosRequest";

const AnalyticCards = () => {
  const [technicians, setTechnicians] = useState(0);
  const [allStaffs, setAllStaffs] = useState(0);
  const [registeredDevices, setRegisteredDevices] = useState(0);
  const [allOrganizations, setAllOrganizations] = useState(0);

  const cardStyles =
    "relative flex flex-col gap-2 text-white rounded-xl px-[1.5rem] py-4 font-semibold overflow-hidden";
  const overlayStyles =
    "absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-solid border-white border-opacity-30";

  useEffect(() => {
    const getTechniciansCount = async () => {
      try {
        const response = await requestClient.get(
          "/super-admin/technicians?count=yes"
        );
        console.log(response.data);
        setTechnicians(response.data.technicians);
      } catch (error) {
        console.error("Error", error);
      }
    };

    getTechniciansCount();
  }, []);

  useEffect(() => {
    const getSubAdmins = async () => {
      try {
        const response = await requestClient.get(
          "/super-admin/organizations?count=yes"
        );
        console.log(response.data);
        setAllOrganizations(response.data.organizations);
      } catch (error) {
        console.error("Error", error);
      }
    };

    getSubAdmins();
  }, []);

  useEffect(() => {
    const getAllStaffs = async () => {
      try {
        const response = await requestClient.get(
          "/super-admin/staffs?count=yes"
        );
        console.log(response.data);
        setAllStaffs(response.data.staffs);
      } catch (error) {
        console.error("Error", error);
      }
    };
    getAllStaffs();
  }, []);

  useEffect(() => {
    const getRegisteredDevices = async () => {
      try {
        const response = await requestClient.get(
          "/super-admin/devices?count=yes"
        );
        console.log(response.data);
        setRegisteredDevices(response.data.devices);
      } catch (error) {
        console.error("Error", error);
      }
    };
    getRegisteredDevices();
  }, []);

  return (
    <div className="grid grid-cols-2 max-md:grid-cols-2 gap-4 items-start">
      <div
        className={cardStyles}
        style={{ background: "linear-gradient(to right, #3c79ea, #607d8b)" }}
      >
        <div className={overlayStyles}></div>
        <div className="relative flex items-center justify-between text-[1.9rem]">
          <p className="font-poppins">
            <CountUp end={technicians} duration={2.5} />
          </p>
          <div className="bg-blue-300 rounded-xl p-2">
            <MdDevices className="text-blue-600" />
          </div>
        </div>
        <span className="relative font-poppins max-md:text-[0.9rem] text-[1.7rem]">
          Technicians
        </span>
      </div>
      <div
        className={cardStyles}
        style={{ background: "linear-gradient(to right, #3c79ea, #607d8b)" }}
      >
        <div className={overlayStyles}></div>
        <div className="relative flex items-center justify-between text-[1.9rem]">
          <p className="font-poppins">
            <CountUp end={allOrganizations} duration={2.5} />
          </p>
          <div className="bg-green-300 rounded-xl p-2">
            <VscVmActive className="text-green-600" />
          </div>
        </div>
        <span className="relative font-poppins max-md:text-[0.9rem] text-[1.7rem]">
          Sub-admins
        </span>
      </div>
      <div
        className={cardStyles}
        style={{ background: "linear-gradient(to right, #3c79ea, #607d8b)" }}
      >
        <div className={overlayStyles}></div>
        <div className="relative flex items-center justify-between text-[1.9rem]">
          <p className="font-poppins">
            <CountUp end={allStaffs} duration={2.5} />
          </p>
          <div className="bg-white rounded-xl p-2">
            <FaTools className="text-blue-600" />
          </div>
        </div>
        <span className="relative font-poppins max-md:text-[0.9rem] text-[1.7rem]">
          Staffs
        </span>
      </div>
      <div
        className={cardStyles}
        style={{ background: "linear-gradient(to right, #3c79ea, #607d8b)" }}
      >
        <div className={overlayStyles}></div>
        <div className="relative flex items-center justify-between text-[1.9rem]">
          <p className="font-poppins text-[2rem]">
            <CountUp end={registeredDevices} duration={2.5} />
          </p>
          <div className="bg-white rounded-xl p-2">
            <FaTools className="text-blue-600 text-[2rem]" />
          </div>
        </div>
        <span className="relative font-poppins max-md:text-[0.9rem] text-[1.7rem]">
          Registered Devices
        </span>
      </div>
    </div>
  );
};

export default AnalyticCards;
