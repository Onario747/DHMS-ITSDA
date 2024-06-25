import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import requestClient from "../../axios/axiosRequest";

const AdminContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [adminName, setAdminName] = useState("");

  const fetchAdminProfile = async () => {
    try {
      const response = await requestClient("/sub-admin/profile");
      const profile = response.data.profile.name;
      setAdminName(profile);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAdminProfile();
  }, []);

  return (
    <AdminContext.Provider value={{ adminName, fetchAdminProfile }}>
      {children}
    </AdminContext.Provider>
  );
};

AdminProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
