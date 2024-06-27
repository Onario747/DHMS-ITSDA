import OrganizationsOverview from "./Organizations/OrganizationsOverview";

const OrganizationMain = () => {
  return (
    <section className="w-full pt-4 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex-col gap-0.5">
          <h1 className="font-montserrat font-bold text-[1.7rem] text-blue-70">
            Organizations
          </h1>
          <p className="font-poppins text-[0.8rem] text-gray-400">
            View all organizations (sub-admins) present.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-poppins text-[0.9rem] text-gray-500">
            List of organizations
          </span>
          <span className="p-2 bg-red-400 text-white rounded-md">0</span>
        </div>
      </div>
      <OrganizationsOverview />
    </section>
  );
};

export default OrganizationMain;
