import { useEffect, useState } from "react";
import { MdDevices } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";
import { VscVmActive } from "react-icons/vsc";
import requestClient from "../../../../axios/axiosRequest";

const AnalyticCards = () => {
  const [completedRequests, setCompletedRequests] = useState(0);
  const [ongoingRequests, setOngoingRequests] = useState(0);
  const [pendingRequests, setPendingRequests] = useState(0);

  const cardStyles =
    "relative flex flex-col gap-2 text-white rounded-xl px-[1.5rem] py-4 font-semibold overflow-hidden";
  const overlayStyles =
    "absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-solid border-white border-opacity-30";

  useEffect(() => {
    const getRequestCounts = async () => {
      try {
        const response = await requestClient.get("/technician/requests");
        const requests = response.data.requests;

        const completed = requests.filter(
          (request) => request.status === "completed"
        ).length;
        const ongoing = requests.filter(
          (request) => request.status === "ongoing"
        ).length;
        const pending = requests.filter(
          (request) => request.status === "pending"
        ).length;

        setCompletedRequests(completed);
        setOngoingRequests(ongoing);
        setPendingRequests(pending);
      } catch (error) {
        console.error("Error", error);
      }
    };

    getRequestCounts();
  }, []);

  return (
    <div className="grid grid-cols-4 max-md:grid-cols-2 gap-4 items-start">
      <div
        className={cardStyles}
        style={{ background: "linear-gradient(to right, #3c79ea, #607d8b)" }}
      >
        <div className={overlayStyles}></div>
        <div className="relative flex items-center justify-between text-[1.9rem]">
          <p className="font-poppins">{completedRequests}</p>
          <div className="bg-blue-300 rounded-xl p-2">
            <MdDevices className="text-blue-600" />
          </div>
        </div>
        <span className="relative font-poppins max-md:text-[0.9rem]">
          Completed Requests
        </span>
      </div>
      <div
        className={cardStyles}
        style={{ background: "linear-gradient(to right, #3c79ea, #607d8b)" }}
      >
        <div className={overlayStyles}></div>
        <div className="relative flex items-center justify-between text-[1.9rem]">
          <p className="font-poppins">{ongoingRequests}</p>
          <div className="bg-green-300 rounded-xl p-2">
            <VscVmActive className="text-green-600" />
          </div>
        </div>
        <span className="relative font-poppins max-md:text-[0.9rem]">
          Ongoing Requests
        </span>
      </div>
      <div
        className={cardStyles}
        style={{ background: "linear-gradient(to right, #3c79ea, #607d8b)" }}
      >
        <div className={overlayStyles}></div>
        <div className="relative flex items-center justify-between text-[1.9rem]">
          <p className="font-poppins">{pendingRequests}</p>
          <div className="bg-red-300 rounded-xl p-2">
            <RiErrorWarningFill className="text-red-600" />
          </div>
        </div>
        <span className="relative font-poppins">Pending Requests</span>
      </div>
    </div>
  );
};

export default AnalyticCards;
