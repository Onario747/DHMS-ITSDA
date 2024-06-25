import deviceEmptyImg from "../../../assets/images/emptydevice.svg";

const DeviceInventoryOverview = () => {
  return (
    <div className="flex items-center gap-2 flex-col justify-center pt-2">
      <img src={deviceEmptyImg} width="30%" alt="staff image" />
      <span className="font-poppins text-gray-500 text-[0.9rem] items-center font-medium">
        No devices available in your inventory right now
      </span>
    </div>
  );
};

export default DeviceInventoryOverview;
