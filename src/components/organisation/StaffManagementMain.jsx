import { useEffect, useState } from "react";
import requestClient from "../../../axios/axiosRequest";
import StaffOverview from "./staff members/StaffOverview";

const StaffManagementMain = () => {
  const [staffMembers, setStaffMembers] = useState([{}]);
    const [staffCount, setStaffCount] = useState(0);

  useEffect(() => {
    const getStaffs = async () => {
      try {
        const response = await requestClient.get("/sub-admin/staffs");
        const staffs = response.data.staffs;
        setStaffMembers(staffs);
        setStaffCount(staffs.length);
      } catch (error) {
        console.error("error", error);
      }
    };

    getStaffs();
  }, [setStaffMembers]);
  console.log(staffMembers);
  return (
    <section className="w-full pt-4">
      <div className="flex flex-col gap-0.5">
        <h1 className="font-montserrat font-bold text-[1.7rem] max-md:text-[1.1rem] text-blue-70">
          Staff Members
        </h1>
        <p className="font-poppins text-[0.8rem] max-md:text-[0.8rem] text-gray-400">
          Manage all staff members and their assigned devices.
        </p>
      </div>
      <StaffOverview
        staffMembers={staffMembers}
        setStaffMembers={setStaffMembers}
        staffCount={staffCount}
      />
    </section>
  );
};

export default StaffManagementMain;
