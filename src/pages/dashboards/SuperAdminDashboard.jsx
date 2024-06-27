import { FaSignOutAlt, FaUsers } from "react-icons/fa";
import { GrHostMaintenance } from "react-icons/gr";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoNotifications, IoSearchOutline } from "react-icons/io5";
import { RiDashboardFill } from "react-icons/ri";
import { SiOpenaccess } from "react-icons/si";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/images/itsalogo.png";
import pfp from "../../assets/images/pfpf.jpg";
// import { Toaster } from "sonner";

const SuperAdminDashboard = () => {
  const dashboardLinks = [
    { icon: <RiDashboardFill />, title: "Dashboard", path: "dashboard" },
    {
      icon: <FaUsers />,
      title: "Technicians",
      path: "technician",
    },
    {
      icon: <GrHostMaintenance />,
      title: "Organizations",
      path: "organizations",
    },
    {
      icon: <SiOpenaccess />,
      title: "Staffs",
      path: "staff",
    },
    {
      icon: <IoNotifications />,
      title: "Maintenance",
      path: "maintenance",
    },
    {
      icon: <IoNotifications />,
      title: "Finances",
      path: "finances",
    },
    { icon: <FaSignOutAlt />, title: "Log Out", path: "log-out" },
  ];

  return (
    <section className="max-container flex">
      <div className="w-[18rem] z-10 bg-white px-[1.5rem] py-[1.5rem] fixed">
        <div className="w-[155px] pb-4">
          <img src={logo} className="object-contain w-full h-full" alt="Logo" />
        </div>
        <div className="flex flex-col gap-[2rem] pt-4">
          {dashboardLinks.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 font-poppins text-[1rem] p-2 transition-all hover:bg-gray-300 rounded-md duration-150 ${
                  isActive
                    ? "bg-blue-70 text-white rounded-md"
                    : "text-slate-600"
                }`
              }
            >
              {item.icon}
              <span className="font-poppins">{item.title}</span>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="bg-[#f0f3ff] h-lvh w-full ml-[18rem]">
        <div className="w-full border-b px-[2rem] flex items-center justify-between py-[1.5rem] border-gray-300 fixed top-0 bg-[#f0f3ff] z-20 pr-[22rem]">
          <div className="flex items-center gap-2 border border-gray-500 w-fit rounded-full px-4 py-1">
            <IoSearchOutline />
            <input
              type="text"
              className="h-[30px] rounded-md outline-none pl-3 bg-transparent font-poppins"
              placeholder="Search"
            />
          </div>
          <div className="flex items-center gap-4">
            <NavLink
              to="/"
              className="bg-blue-70 text-white p-2 font-poppins rounded-md"
            >
              Visit ITSA Site
            </NavLink>
            <IoNotifications className="text-[1.5rem]" />
            <div className="flex items-center gap-2">
              <span className="font-poppins">Spark Squad</span>
              <div className="flex items-center gap-2">
                <img
                  src={pfp}
                  alt="profile picture"
                  className="rounded-full w-[40px] h-[40px] object-cover"
                />
                <IoIosArrowDropdownCircle />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[6rem] px-[2rem] h-lvh">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default SuperAdminDashboard;
