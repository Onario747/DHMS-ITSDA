// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
// import { default as Login, default as SignUp } from "./pages/SignUp";
// import { Toaster } from "sonner";
import AlertMain from "./components/organisation/AlertMain";
import DashboardMain from "./components/organisation/DashboardMain";
import DeviceManagementMain from "./components/organisation/DeviceManagementMain";
import HelpAndSupportMain from "./components/organisation/HelpAndSupportMain";
import StaffMaintenanceRequests from "./components/organisation/MaintenanceRequetsMain";
import StaffManagementMain from "./components/organisation/StaffManagementMain";
import DeviceInventoryMain from "./components/staff/DeviceInventoryMain";
import LogOutMain from "./components/staff/LogOutMain";
import MaintenanceMain from "./components/staff/MaintenanceMain";
import NotificationMain from "./components/staff/NotificationMain";
import StaffDashboardMain from "./components/staff/StaffDashboardMain";
import MaintenanceRequestMain from "./components/superAdmin/MaintenanceMain";
import OrganizationMain from "./components/superAdmin/OrganizationMain";
import StaffMain from "./components/superAdmin/StaffMain";
import SuperAdminDashboardMain from "./components/superAdmin/SuperAdminDashoardMain";
import TechnicianMain from "./components/superAdmin/TechnicianMain";
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
import TechnicianLogin from "./pages/TechnicianLogin";
import FinancesMain from "./components/superAdmin/FinancesMain";
import DeviceDetail from "./components/organisation/deviceInventory/DeviceDetails";

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
      path: "/technician-login",
      element: <TechnicianLogin />,
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
          path: "maintenance-requests",
          element: <StaffMaintenanceRequests />,
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
          path: "technician",
          element: <TechnicianMain />,
        },
        {
          path: "organizations",
          element: <OrganizationMain />,
        },
        {
          path: "maintenance",
          element: <MaintenanceRequestMain />,
        },
        {
          path: "staff",
          element: <StaffMain />,
        },
        {
          path: "finances",
          element: <FinancesMain />,
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
    {
      path: "/organization/device-management/device/:id",
      element: <DeviceDetail />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
