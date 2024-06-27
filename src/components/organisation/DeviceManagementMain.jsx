import DeviceInventoryMain from "./deviceInventory/DeviceInventoryMain";

const DeviceManagementMain = () => {
  return (
    <section className="w-full pt-4">
      <div className="flex flex-col gap-0.5">
        <h1 className="font-montserrat font-bold text-[1.7rem] text-blue-70">
          Device Inventory
        </h1>
        <p className="font-poppins text-[0.8rem] text-gray-400">
          Get a detailed overview of devices assigned to Organizations and Staffs.
        </p>
      </div>
      <DeviceInventoryMain />
    </section>
  );
};

export default DeviceManagementMain;
