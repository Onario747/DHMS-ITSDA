import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
// import axios from "axios";
import requestClient from "../../../../axios/axiosRequest";
import deviceEmptyImg from "../../../assets/icons/technician.svg";

const SuperAdminStaffOverview = () => {
  const [loading, setLoading] = useState(true);
  const [staff, setStaffs] = useState([]);

  useEffect(() => {
    const getStaffs = async () => {
      setLoading(true);
      try {
        const response = await requestClient.get("/super-admin/staffs");
        console.log(response.data);
        const staffData = response.data.staffs;
        setStaffs(staffData);
        console.log(staffData);
      } catch (error) {
        console.error("Error", error);
      } finally {
        setLoading(false);
      }
    };
    getStaffs();
  }, []);

  const getColumns = () => [
    {
      name: "Name",
      selector: (row) => row.name || "N/A",
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email || "N/A",
      sortable: true,
    },
    {
      name: "Phone Number",
      selector: (row) => row.phone || "N/A",
      sortable: true,
    },
  ];

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center py-4">
          <span className="font-poppins text-gray-500 text-[1rem] font-medium">
            Loading...
          </span>
        </div>
      ) : staff.length > 0 ? (
        <div className="pt-[2rem]">
          <DataTable
            columns={getColumns()}
            data={staff}
            fixedHeader
            pagination
            striped
            pointerOnHover
            responsive
            highlightOnHover
          />
        </div>
      ) : (
        <div className="flex items-center gap-2 flex-col justify-center pt-[4rem]">
          <img src={deviceEmptyImg} width="30%" alt="No devices" />
          <span className="font-poppins text-gray-500 text-[0.9rem] w-[50%] text-center items-center font-medium">
            You have no Organizations yet.
          </span>
        </div>
      )}
    </>
  );
};

export default SuperAdminStaffOverview;
