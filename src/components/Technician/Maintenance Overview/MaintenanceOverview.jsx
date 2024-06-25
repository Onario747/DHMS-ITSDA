import maintenanceImg from "../../../assets/images/maintenance.svg";
const MaintenanceOverview = () => {
  return (
    <div className="flex items-center gap-2 flex-col justify-center pt-[4rem]">
      <img src={maintenanceImg} width="40%" alt="" />
      <span className="font-poppins text-gray-500 text-[0.9rem] w-[70%] text-center items-center font-medium">
        You have no Maintenance Requests yet.
      </span>
    </div>
  );
};

export default MaintenanceOverview;
