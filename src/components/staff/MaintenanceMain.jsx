import MaintenanceOverview from "./Maintenance Overview/MaintenanceOverview";
import RequestMaintenanceModal from "./Maintenance Overview/RequestMaintenanceModal";

const MaintenanceMain = () => {
  return (
    <section className="w-full pt-4 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex-col gap-0.5">
          <h1 className="font-montserrat font-bold text-[1.7rem] text-blue-70">
            Maintenance Requests
          </h1>
          <p className="font-poppins text-[0.8rem] text-gray-400">
            You have not made any maintenance requests yet
          </p>
        </div>
        <RequestMaintenanceModal />
      </div>
      <MaintenanceOverview />
    </section>
  );
};

export default MaintenanceMain;
