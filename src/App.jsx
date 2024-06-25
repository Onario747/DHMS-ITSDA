// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
// import { default as Login, default as SignUp } from "./pages/SignUp";
// import { Toaster } from "sonner";
import AlertMain from "./components/organisation/AlertMain";
import DashboardMain from "./components/organisation/DashboardMain";
import DeviceManagementMain from "./components/organisation/DeviceManagementMain";
import HelpAndSupportMain from "./components/organisation/HelpAndSupportMain";
import StaffManagementMain from "./components/organisation/StaffManagementMain";
import UacMain from "./components/organisation/UacMain";
import DeviceInventoryMain from "./components/staff/DeviceInventoryMain";
import LogOutMain from "./components/staff/LogOutMain";
import MaintenanceMain from "./components/staff/MaintenanceMain";
import NotificationMain from "./components/staff/NotificationMain";
import StaffDashboardMain from "./components/staff/StaffDashboardMain";
import SuperAdminDashboardMain from "./components/superAdmin/SuperAdminDashoardMain";
import MaintenanceRequestsMain from "./components/Technician/MaintenanceRequestsMain";
import TechnicianDashboardMain from "./components/Technician/TechnicianDashboardMain";
import OrganizationDashboard from "./pages/dashboards/OrganizationDashboard";
import StaffDashboard from "./pages/dashboards/StaffDashboard";
import SuperAdminDashboard from "./pages/dashboards/SuperAdminDashboard";
import TechnicianDashboard from "./pages/dashboards/TechnicianDashboard";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import SignUp from "./pages/SignUp";
import SuperAdminLogin from "./pages/SuperAdminLogin";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NoPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/super-admin-login",
      element: <SuperAdminLogin />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/organization",
      element: <OrganizationDashboard />,
      children: [
        {
          path: "dashboard",
          element: <DashboardMain />,
        },
        {
          path: "device-maintenance",
          element: <DeviceManagementMain />,
        },
        {
          path: "help-and-support",
          element: <HelpAndSupportMain />,
        },
        {
          path: "staff-management",
          element: <StaffManagementMain />,
        },
        {
          path: "user-access-control",
          element: <UacMain />,
        },
        {
          path: "alerts",
          element: <AlertMain />,
        },
      ],
    },
    {
      path: "/staff",
      element: <StaffDashboard />,
      children: [
        {
          path: "dashboard",
          element: <StaffDashboardMain />,
        },
        {
          path: "device-inventory",
          element: <DeviceInventoryMain />,
        },
        {
          path: "maintenance",
          element: <MaintenanceMain />,
        },
        {
          path: "help-and-support",
          element: <HelpAndSupportMain />,
        },
        {
          path: "notifications",
          element: <NotificationMain />,
        },
        {
          path: "log-out",
          element: <LogOutMain />,
        },
      ],
    },
    {
      path: "/super-admin",
      element: <SuperAdminDashboard />,
      children: [
        {
          path: "dashboard",
          element: <SuperAdminDashboardMain />,
        },
        {
          path: "create-technician",
          element: <DeviceInventoryMain />,
        },
        {
          path: "staffs-organization",
          element: <MaintenanceMain />,
        },
        {
          path: "registered-devices",
          element: <HelpAndSupportMain />,
        },
        {
          path: "device-count",
          element: <NotificationMain />,
        },
        {
          path: "log-out",
          element: <LogOutMain />,
        },
      ],
    },
    {
      path: "/technician",
      element: <TechnicianDashboard />,
      children: [
        {
          path: "dashboard",
          element: <TechnicianDashboardMain />,
        },
        {
          path: "maintenance-requests",
          element: <MaintenanceRequestsMain />,
        },
        {
          path: "log-out",
          element: <LogOutMain />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
