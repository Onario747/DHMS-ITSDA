import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import requestClient from "../../../../axios/axiosRequest";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const DeviceDetail = () => {
  const { id } = useParams();
  const [device, setDevice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDevice = async () => {
      try {
        const response = await requestClient.get(`/sub-admin/device/${id}`);
        setDevice(response.data.device);
        console.log(response.data.device);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching device details", error);
        setLoading(false);
      }
    };

    fetchDevice();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!device) {
    return <div>Device not found</div>;
  }

  const renderTable = (data) => (
    <table className="min-w-full border-collapse border border-gray-200">
      <tbody>
        {Object.entries(data).map(([key, value]) => (
          <tr key={key}>
            <td className="border border-gray-400 p-2 font-bold">{key}:</td>
            <td className="border border-gray-400 p-2">
              {value !== null && value !== undefined ? value.toString() : "N/A"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="flex items-center justify-center flex-col font-poppins">
      {/* <nav className="pt-[2rem]">
        <Link to="/device-inventory" >Back to Inventory</Link>
      </nav> */}
      <Breadcrumb className="pt-[2rem]">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/organization/device-maintenance">
              Device Inventory
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Device Details {id}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="pt-[2rem] w-full px-7">
        <h1 className="font-bold text-[1.8rem] mb-4">
          Device Details for <span className="text-blue-70">{device.name}</span>
        </h1>
        <div className="flex flex-col gap-2 pb-3">
          <p>
            <strong>Device Name:</strong> {device.name}
          </p>
          <p>
            <strong>SetupId:</strong> {device.setupId}
          </p>
          <p>
            <strong>Location:</strong> {device.city}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="border border-blue-70 p-4">
            <p className="font-bold mb-2">Battery Info</p>
            {renderTable(device.battery)}
          </div>
          <div className="border border-blue-70 p-4">
            <p className="font-bold mb-2">CPU Info</p>
            {renderTable(device.cpu)}
          </div>
          <div className="border border-blue-70 p-4">
            <p className="font-bold mb-2">Location</p>
            {renderTable(device.location)}
          </div>
          <div className="border border-blue-70 p-4">
            <p className="font-bold mb-2">Memory Info</p>
            {renderTable(device.mem)}
          </div>
          <div className="border border-blue-70 p-4">
            <p className="font-bold mb-2">OS Info</p>
            {renderTable(device.osInfo)}
          </div>
          <div className="border border-blue-70 p-4">
            <p className="font-bold mb-2">System Info</p>
            {renderTable(device.system)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceDetail;
