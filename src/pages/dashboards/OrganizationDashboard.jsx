import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaSignOutAlt, FaUsers } from "react-icons/fa";
import { GrHostMaintenance } from "react-icons/gr";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoNotifications, IoSearchOutline } from "react-icons/io5";
import { RiDashboardFill } from "react-icons/ri";
import { SiOpenaccess } from "react-icons/si";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/images/itsalogo.png";
import pfp from "../../assets/images/pfpf.jpg";
import { useAdmin } from "../../context/AdminContext";
// import { Toaster } from "sonner";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const OrganizationDashboard = () => {
  const dashboardLinks = [
    { icon: <RiDashboardFill />, title: "Dashboard", path: "dashboard" },
    { icon: <FaUsers />, title: "Staff Management", path: "staff-management" },
    {
      icon: <GrHostMaintenance />,
      title: "Device Inventory",
      path: "device-maintenance",
    },
    {
      icon: <SiOpenaccess />,
      title: "User Access Control",
      path: "user-access-control",
    },
    { icon: <IoNotifications />, title: "Alerts", path: "alerts" },
    {
      icon: <RiDashboardFill />,
      title: "Help and Support",
      path: "help-and-support",
    },
    { icon: <FaSignOutAlt />, title: "Sign Out", path: "sign-out" },
  ];

  const [reduceNavigation, setReduceNavigation] = useState(false);

  const reduceNav = () => {
    setReduceNavigation((prevState) => !prevState);
  };

  const { adminName } = useAdmin();

  return (
    <section className="max-container flex">
      <div
        className={`z-10 bg-white h-screen px-[1.5rem] py-[1.5rem] fixed ${
          reduceNavigation && "hidden"
        }`}
      >
        <div className="w-[155px] pb-4">
          <img src={logo} className="object-contain h-full" alt="Logo" />
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
              <span className={`font-poppins ${reduceNavigation && "hidden"}`}>
                {item.title}
              </span>
            </NavLink>
          ))}
        </div>
      </div>
      <div className={`bg-[#f0f3ff] h-lvh w-full ml-[18rem] ${reduceNavigation && "ml-[5rem]"}`}>
        <div className={`w-full border-b px-[2rem] flex items-center justify-between py-[1.5rem] border-gray-300 fixed top-0 bg-[#f0f3ff] z-20 pr-[20rem] ${reduceNavigation && "pr-0"}`}>
          <div
            className="rounded-full p-2 border border-gray-500 cursor-pointer"
            onClick={reduceNav}
          >
            <AiOutlineMenuUnfold className="text-[1.8rem]" />
          </div>
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
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex items-center gap-2 cursor-pointer">
                  <img
                    src={pfp}
                    alt="profile picture"
                    className="rounded-full w-[40px] h-[40px] object-cover"
                  />
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col items-start">
                      <span className="font-poppins leading-none m-0">
                        {adminName}
                      </span>
                      <span className="text-[0.9rem] font-poppins leading-none m-0 text-gray-500">
                        sub-admin
                      </span>
                    </div>
                    <IoIosArrowDropdownCircle className="text-[1.2rem]" />
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]">
                <DropdownMenuLabel className="font-poppins">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="font-poppins cursor-pointer">
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="font-poppins cursor-pointer">
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="pt-[6rem] px-[2rem] h-lvh w-full">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default OrganizationDashboard;
