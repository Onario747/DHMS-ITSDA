import MaintenanceOverview from "./Maintenance Overview/MaintenanceOverview";

const MaintenanceRequestsMain = () => {
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
        <span className="flex items-center gap-2">
          <span className="font-poppins text-gray-500">
            Maintenance requests
          </span>
          <span className="bg-red-400 text-white font-poppins px-2 py-0.5 rounded-sm">
            0
          </span>
        </span>
      </div>
      <MaintenanceOverview />
    </section>
  );
};

export default MaintenanceRequestsMain;
