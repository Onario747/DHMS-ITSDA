import SuperAdminStaffOverview from "./staff/SuperAdminStaffOverview";

const StaffMain = () => {
  return (
    <section className="w-full pt-4 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex-col gap-0.5">
          <h1 className="font-montserrat font-bold text-[1.7rem] text-blue-70">
            Staff
          </h1>
          <p className="font-poppins text-[0.8rem] text-gray-400">
            View all staff present.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-poppins text-[0.9rem] text-gray-500">
            List of Staff
          </span>
          <span className="p-2 bg-red-400 text-white rounded-md">0</span>
        </div>
      </div>
      <SuperAdminStaffOverview />
    </section>
  );
};

export default StaffMain;
