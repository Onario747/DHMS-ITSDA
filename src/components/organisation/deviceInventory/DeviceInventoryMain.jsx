import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import requestClient from "../../../../axios/axiosRequest";
import deviceEmptyImg from "../../../assets/images/emptydevice.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DeviceInventoryOverview = () => {
  const [devices, setDevices] = useState([]);
  const [filteredDevices, setFilteredDevices] = useState([]);
  const [deviceCount, setDeviceCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getDevices = async () => {
      try {
        const response = await requestClient.get("/sub-admin/devices");
        const devices = response.data.devices;
        setDevices(devices);
        console.log(devices)
        setFilteredDevices(devices);
        setDeviceCount(devices.length);
        setLoading(false);
      } catch (error) {
        console.error("error", error);
        setLoading(false);
      }
    };

    getDevices();
  }, []);

  // const getDevice = async () => {
  //   try {
  //             const response = await requestClient.get(`/sub-admin/device?id=${}`);
  //       const device = response.data.device;
  //   }
  // }

  const handleViewDetails = (deviceId) => {
    navigate(`/device/${deviceId}`);
  };

  const columns = [
    {
      name: "Setup Id",
      selector: (row) => row.setupId || "N/A",
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name || "N/A",
      sortable: true,
    },
    {
      name: "Model",
      selector: (row) => row.system?.model || "N/A",
      sortable: true,
    },
    {
      name: "Manufacturer",
      selector: (row) => row.system?.manufacturer || "N/A",
      sortable: true,
    },
    {
      name: "Platform",
      selector: (row) => row.osInfo?.platform || "N/A",
      sortable: true,
    },
    {
      name: "Location",
      selector: (row) => row.city || "N/A",
      sortable: true,
    },
    {
      name: "More Info",
      cell: (row) => (
        <button
          className="bg-blue-70 text-white px-2 py-1 rounded-md font-poppins"
          onClick={() => handleViewDetails(row._id)}
        >
          Details
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const handleFilter = (e) => {
    const filterValue = e.target.value.toLowerCase();
    const newData = devices.filter((row) => {
      return row.name.toLowerCase().includes(filterValue);
    });
    setFilteredDevices(newData);
  };

  return (
    <>
      <div className="flex items-center justify-between w-full pt-[2rem]">
        <input
          type="text"
          className="w-fit text-poppins pl-[15px] py-1 border border-blue-70 rounded-md"
          onChange={handleFilter}
          placeholder="Filter by name"
        />
        <h2 className="text-2xl font-semibold font-poppins">
          Devices ({deviceCount})
        </h2>
      </div>
      {loading ? (
        <div className="flex justify-center items-center py-4">
          <span className="font-poppins text-gray-500 text-[1rem] font-medium">
            Loading...
          </span>
        </div>
      ) : devices.length > 0 ? (
        <div className="flex flex-col w-full gap-2 pt-4">
          <Tabs defaultValue="staffs" className="">
            <TabsList className="bg-gray-300">
              <TabsTrigger value="staffs">Staffs</TabsTrigger>
              <TabsTrigger value="organizations">Organizations</TabsTrigger>
            </TabsList>
            <TabsContent value="organizations">
              No Device assigned to any organization
            </TabsContent>
            <TabsContent value="staffs">
              <DataTable
                columns={columns}
                data={filteredDevices}
                fixedHeader
                pagination
                striped
                pointerOnHover
                responsive
                highlightOnHover
              />
            </TabsContent>
          </Tabs>
        </div>
      ) : (
        <div className="flex items-center gap-2 flex-col justify-center pt-2">
          <img src={deviceEmptyImg} width="30%" alt="No devices" />
          <span className="font-poppins text-gray-500 text-[0.9rem] items-center font-medium">
            No devices available in your inventory right now
          </span>
        </div>
      )}
    </>
  );
};

export default DeviceInventoryOverview;
