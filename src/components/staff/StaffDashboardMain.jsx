import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import requestClient from "../../../axios/axiosRequest";
import deviceImg from "../../assets/images/device.svg";
import programmingImg from "../../assets/images/programming.svg";
import AnalyticCards from "./dashboard/AnalyticsCard";

const StaffDashboardMain = () => {
  const [profileName, setProfileName] = useState("");

  const fetchStaffProfile = async () => {
    try {
      const response = await requestClient("/staff/profile");
      const profile = response.data.profile.name;
      setProfileName(profile);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStaffProfile();
  }, []);
  return (
    <section className="w-full pt-4">
      <div className="flex items-center justify-between pb-[1.9rem] w-full">
        <div className="flex gap-2">
          <h1 className="font-montserrat font-bold text-[1.7rem] text-black">
            Welcome Back {""}
            <span className="text-blue-70">{profileName}</span>
          </h1>
        </div>
        <button className="bg-blue-70 text-white p-2 font-poppins rounded-md">
          Track All Maintenance Requests
        </button>
      </div>
      <div className="flex items-start justify-between w-full gap-4">
        <div className="w-full">
          <h1 className="font-poppins font-semibold text-[1.5rem] pb-2">
            Overview
          </h1>
          <div className="flex flex-col">
            <AnalyticCards />
            <div className="pt-[1.5rem] gap-3 flex justify-between w-full">
              <div className="flex flex-col items-center justify-center bg-white shadow-md px-4 drop-shadow-md rounded-md py-3 gap-4">
                <div className="flex items-center justify-between w-full">
                  <h1 className="font-poppins font-medium text-[1.4rem]">
                    Enrolled Devices
                  </h1>
                  <Link to="/staff/device-inventory" className="text-blue-70">
                    see all
                  </Link>
                </div>
                <img
                  src={deviceImg}
                  className="w-[40%]"
                  alt="programming image"
                />
                <p className="font-poppins text-gray-500 text-[0.9rem]">
                  No devices assigned to you yet!
                </p>
              </div>
              <div className="flex flex-col items-center justify-center bg-white shadow-md px-4 drop-shadow-md rounded-md py-3 gap-4">
                <div className="flex items-center justify-between w-full">
                  <h1 className="font-poppins font-medium text-[1.4rem]">
                    Maintenance Requests
                  </h1>
                  <Link to="/staff/maintenance" className="text-blue-70">
                    see all
                  </Link>
                </div>
                <img
                  src={programmingImg}
                  className="w-[40%]"
                  alt="programming image"
                />
                <p className="font-poppins text-gray-500 text-[0.9rem]">
                  No maintenance request yet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffDashboardMain;
