import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
// import axios from "axios";
import requestClient from "../../../../axios/axiosRequest";
import deviceEmptyImg from "../../../assets/icons/technician.svg";

const OrganizationsOverview = () => {
  const [loading, setLoading] = useState(true);
  const [technicians, setTechnicians] = useState([]);

  useEffect(() => {
    const getTechnicians = async () => {
      setLoading(true);
      try {
        const response = await requestClient.get("/super-admin/technicians");
        console.log(response.data);
        const techniciansData = response.data.technicians;
        setTechnicians(techniciansData);
      } catch (error) {
        console.error("Error", error);
      } finally {
        setLoading(false);
      }
    };
    getTechnicians();
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
    // {
    //   name: "Delete",
    //   cell: (row) => (
    //     <div className="flex gap-2">
    //       <button className="bg-blue-500 text-white px-2 py-1 rounded-md font-poppins">
    //         Delete
    //       </button>
    //     </div>
    //   ),
    //   ignoreRowClick: true,
    //   allowOverflow: true,
    //   button: true,
    // },
  ];

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center py-4">
          <span className="font-poppins text-gray-500 text-[1rem] font-medium">
            Loading...
          </span>
        </div>
      ) : technicians.length > 0 ? (
        <div className="pt-[2rem]">
          <DataTable
            columns={getColumns()}
            data={technicians}
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

export default OrganizationsOverview;
