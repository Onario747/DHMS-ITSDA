import AnalyticsCards from "./dashboard/AnalyticsCard";

const SuperAdminDashboardMain = () => {
  return (
    <section className="w-full pt-4">
      <div className="flex items-center justify-between pb-[1.9rem] w-full">
        <div className="">
          <h1 className="font-montserrat font-bold text-[1.7rem]">
            Welcome, <span className="text-blue-70">Super Admin!</span>
          </h1>
          <p className="font-poppins text-gray-500 text-[0.9rem]">
            You can manage technicians, organizations, staff members, and
            devices from this dashboard.
          </p>
        </div>
      </div>
      <div className="flex items-start justify-between w-full gap-4">
        <div className="w-full">
          <h1 className="font-poppins font-semibold text-[1.5rem] pb-2">
            Overview
          </h1>
          <div>
            <AnalyticsCards />
          </div>
        </div>
        {/* <RecentActivities /> */}
      </div>
    </section>
  );
};

export default SuperAdminDashboardMain;
