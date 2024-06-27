import { FaSignOutAlt, FaUsers } from "react-icons/fa";
import { GrHostMaintenance } from "react-icons/gr";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoMenu, IoNotifications, IoSearchOutline } from "react-icons/io5";
import { RiDashboardFill } from "react-icons/ri";
import { SiOpenaccess } from "react-icons/si";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/images/itsalogo.png";
// import pfp from "../../assets/images/pfpf.jpg";
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

import {
  Sheet,
  SheetContent,
  // SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

  const { adminName } = useAdmin();

  return (
    <section className="max-container flex">
      <div
        className={`z-10 bg-white h-full px-[1.5rem] py-[1.5rem] fixed max-md:hidden`}
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
              <span className={`font-poppins`}>{item.title}</span>
            </NavLink>
          ))}
        </div>
      </div>
      <div className={`bg-[#f0f3ff] w-full ml-[18rem] max-md:m-0`}>
        <div
          className={`w-full border-b px-[2rem] flex items-center justify-between py-[1.5rem] border-gray-300 fixed top-0 bg-[#f0f3ff] z-20 pr-[20rem] max-md:px-[2rem] max-md:py-5 `}
        >
          <div className="flex items-center gap-2 border border-gray-500 w-fit max-md:hidden rounded-full px-4 py-1">
            <IoSearchOutline />
            <input
              type="text"
              className="h-[30px] rounded-md outline-none pl-3 bg-transparent font-poppins"
              placeholder="Search"
            />
          </div>
          <div className="flex flex-col max-md:w-full gap-2">
            <div className="flex max-md:w-full items-center justify-between gap-4">
              <img
                src={logo}
                className="object-contain h-full md:hidden w-[45%]"
                alt="Logo"
              />

              <Sheet>
                <SheetTrigger>
                  {" "}
                  <IoMenu className="md:hidden text-[1.7rem]" />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Dashboard</SheetTitle>
                    {
                      dashboardLinks.map((item, index) => (
                        <Link key={index} to={item.path}>{item.title}</Link>
                      ))
                    }
                  </SheetHeader>
                </SheetContent>
              </Sheet>
              <div className="flex items-center gap-8 max-md:hidden">
                <Link to="/">
                  <IoNotifications className="text-[1.5rem]" />
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <div className="flex items-center gap-2 max-md:gap-0 cursor-pointer">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col items-start">
                          <span className="font-poppins max-md:hidden leading-none m-0">
                            {adminName}
                          </span>
                          <span className="text-[0.9rem] max-md:hidden font-poppins leading-none m-0 text-gray-500">
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
            <div className="md:hidden">
              <div className="flex items-center justify-between w-full">
                <Link to="/">
                  <IoNotifications className="text-[1.5rem]" />
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <div className="flex items-center gap-2 max-md:gap-0 cursor-pointer">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col items-start">
                          <span className="font-poppins max-md:hidden leading-none m-0">
                            {adminName}
                          </span>
                          <span className="text-[0.9rem] max-md:hidden font-poppins leading-none m-0 text-gray-500">
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
          </div>
        </div>
        <div className="pt-[6rem] max-md:pt-[8rem] px-[2rem] h-dvh w-full">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default OrganizationDashboard;
