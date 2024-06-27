import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import requestClient from "../../../../axios/axiosRequest";

import deviceEmptyImg from "../../../assets/images/emptydevice.svg";

const MaintenanceOverview = () => {
  const [requests, setRequests] = useState([]);
  const [pending, setPending] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRequests = async () => {
      try {
        const response = await requestClient.get(
          "/sub-admin/maintenance-request"
        );
        const requestData = response.data.requests;
        setRequests(requestData);

        const pendingRequests = requestData.filter(
          (request) => request.status === "pending"
        );
        const ongoingRequests = requestData.filter(
          (request) => request.status === "ongoing"
        );
        const completedRequests = requestData.filter(
          (request) => request.status === "completed"
        );

        setPending(pendingRequests);
        setOngoing(ongoingRequests);
        setCompleted(completedRequests);

        setLoading(false);
      } catch (error) {
        console.error("error", error);
        setLoading(false);
      }
    };

    getRequests();
  }, []);

  const handleRequestMaintenance = (deviceId, action) => {
    // Add logic to handle maintenance request here
    console.log(
      `Request maintenance for device ID: ${deviceId}, action: ${action}`
    );
    // Example: Call an API to request maintenance
  };

  const getColumns = () => [
    {
      name: "Maintenance",
      selector: (row) => row.description || "N/A",
      sortable: true,
    },
    {
      name: "Priority",
      selector: (row) => row.priority || "N/A",
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status || "N/A",
      sortable: true,
    },
    {
      name: "Edit",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded-md font-poppins"
            onClick={() => handleRequestMaintenance(row.setupId, "done")}
          >
            Edit
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
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
      ) : requests.length > 0 ? (
        <Tabs defaultValue="all" className="pt-[2rem]">
          <TabsList className="bg-gray-300">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <DataTable
              columns={getColumns("all")}
              data={requests}
              pagination
              striped
              pointerOnHover
              responsive
              highlightOnHover
            />
          </TabsContent>
          <TabsContent value="pending">
            <DataTable columns={getColumns("pending")} data={pending} />
          </TabsContent>
          <TabsContent value="ongoing">
            <DataTable columns={getColumns("ongoing")} data={ongoing} />
          </TabsContent>
          <TabsContent value="completed">
            <DataTable columns={getColumns("completed")} data={completed} />
          </TabsContent>
        </Tabs>
      ) : (
        <div className="flex items-center gap-2 flex-col justify-center pt-2">
          <img src={deviceEmptyImg} width="30%" alt="No devices" />
          <span className="font-poppins text-gray-500 text-[0.9rem] items-center font-medium">
            You have no Maintenance Requests yet
          </span>
        </div>
      )}
    </>
  );
};

export default MaintenanceOverview;
