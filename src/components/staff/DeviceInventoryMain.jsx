import DeviceInventoryOverview from "./Device Inventory/DeviceInventoryOverview";

const DeviceInventoryMain = () => {
  return (
    <section className="w-full pt-4">
      <div className="flex flex-col gap-0.5">
        <h1 className="font-montserrat font-bold text-[1.7rem] text-blue-70">
          Device Inventory
        </h1>
        <p className="font-poppins text-[0.8rem] text-gray-400">
          Get a detailed overview of your devices assigned to you.
        </p>
      </div>
      <DeviceInventoryOverview />
    </section>
  );
};

export default DeviceInventoryMain;
