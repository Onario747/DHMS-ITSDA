import { MdSettingsApplications } from "react-icons/md";
import { IoGridOutline } from "react-icons/io5";

const RecentActivities = () => {
  const recentData = [
    {
      title: "New Device Added",
      description:
        "A new device (Laptop Model XYZ) has been added to the inventory",
      staff: "Staff-103",
      time: "30 minutes ago",
    },
    {
      title: "New Device Added",
      description:
        "A new device (Laptop Model XYZ) has been added to the inventory",
      staff: "Staff-103",
      time: "30 minutes ago",
    },
    {
      title: "New Device Added",
      description:
        "A new device (Laptop Model XYZ) has been added to the inventory",
      staff: "Staff-103",
      time: "30 minutes ago",
    },
    {
      title: "New Device Added",
      description:
        "A new device (Laptop Model XYZ) has been added to the inventory",
      staff: "Staff-103",
      time: "30 minutes ago",
    },
    {
      title: "New Device Added",
      description:
        "A new device (Laptop Model XYZ) has been added to the inventory",
      staff: "Staff-103",
      time: "30 minutes ago",
    },
    // {
    //   title: "New Device Added",
    //   description:
    //     "A new device (Laptop Model XYZ) has been added to the inventory",
    //   staff: "Staff-103",
    //   time: "30 minutes ago",
    // },
    // {
    //   title: "New Device Added",
    //   description:
    //     "A new device (Laptop Model XYZ) has been added to the inventory",
    //   staff: "Staff-103",
    //   time: "30 minutes ago",
    // },
  ];
  return (
    <div className="w-full">
      <h1 className="font-poppins text-blue-70 font-semibold text-[1.5rem] pb-2">
        Recent Activities
      </h1>
      <div className="bg-white rounded-xl px-3 shadow-md w-[100%] flex items-center">
        <div className="flex flex-col">
          {recentData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between w-full gap-3 border-b py-4"
            >
              <IoGridOutline className="text-[2.8rem] text-green-600" />
              <div className="">
                <h1 className="font-poppins text-[1.1rem] font-semibold">
                  {item.title}
                </h1>
                <p className="font-montserrat text-[0.75rem]">
                  {item.description}
                </p>
                <div className="flex items-center justify-between font-poppins">
                  <span className="text-red-500 bg-slate-100 p-1 text-[0.7rem] rounded-md font-medium">
                    {item.staff}
                  </span>
                  <span className="text-green-500 bg-slate-100 p-1 text-[0.7rem] rounded-md font-medium">
                    {item.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivities;
