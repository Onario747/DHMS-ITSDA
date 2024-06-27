// DeviceDetail.js
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import requestClient from "../../../../axios/axiosRequest";

const DeviceDetail = () => {
  const { id } = useParams();
  const [device, setDevice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDevice = async () => {
      try {
        const response = await requestClient.get(`/sub-admin/device/${id}`);
        setDevice(response.data.device);
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

  return (
    <div>
      <nav>
        <Link to="/device-inventory">Back to Inventory</Link>
      </nav>
      <h1>Device Details</h1>
      <p>Setup ID: {device.setupId}</p>
      <p>Name: {device.name}</p>
      <p>Model: {device.system?.model}</p>
      <p>Manufacturer: {device.system?.manufacturer}</p>
      <p>Platform: {device.osInfo?.platform}</p>
      <p>Location: {device.city}</p>
    </div>
  );
};

export default DeviceDetail;
