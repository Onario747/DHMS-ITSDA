import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DataTable from "react-data-table-component";
import { FaCheckCircle } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";
import { MdOutlineWarning } from "react-icons/md";
import requestClient from "../../../../axios/axiosRequest";
import staffImg from "../../../assets/icons/staff.svg";

const StaffOverview = ({ staffMembers, setStaffMembers }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Initialize records when staffMembers prop changes
    setRecords(staffMembers);
  }, [staffMembers]);

  const createStaff = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      email: email,
      name: fullName,
    };

    try {
      const response = await requestClient.post(
        "/sub-admin/create-staff",
        formData
      );
      setModalOpen(false);
      console.log(response.data)
      toast(
        <div className="text-green-600 px-2 py-4 font-poppins font-medium flex items-center gap-2 justify-center">
          <FaCheckCircle className="text-[1.1rem]" />
          <span className="font-poppins text-[0.93rem]">
            {fullName.charAt(0).toUpperCase() + fullName.slice(1).toLowerCase()}{" "}
            has been added successfully
          </span>
        </div>
      );
      setFullName("");
      setEmail("");
      // Fetch new staff members list or update state
      const newResponse = await requestClient.get("/sub-admin/staffs");
      setStaffMembers(newResponse.data.staffs);
    } catch (error) {
      toast.warning(
        <div className="px-2 py-3 flex items-center gap-2 justify-center">
          <MdOutlineWarning className="text-[1.2rem]" />
          <span className="font-poppins text-[1.1rem]">
            {fullName.charAt(0).toUpperCase() + fullName.slice(1).toLowerCase()}{" "}
            already exists
          </span>
        </div>
      );
      console.error("Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const columns = [
    {
      name: "Staff Id",
      selector: (row) => row._id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Role",
      selector: (row) => row.role,
    },
  ];

  const handleFilter = (e) => {
    const newData = staffMembers.filter((row) => {
      return row.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setRecords(newData);
  };

  return (
    <div className="pt-[2rem] flex flex-col justify-center">
      <Toaster position="top-right" richColors />
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <div className="flex items-center gap-2 justify-end">
          <DialogTrigger>
            <button className="rounded-md bg-blue-70 text-white flexCenter p-2 gap-2">
              <FiPlusSquare className="text-[1.4rem]" />
              <span className="font-poppins">Add Staff</span>
            </button>
          </DialogTrigger>
          <button
            className="font-poppins p-2 border border-blue-70 rounded-md disabled:bg-gray-300 disabled:text-white disabled:border-none disabled:cursor-not-allowed"
            disabled
          >
            Assign Device
          </button>
        </div>
        {staffMembers && staffMembers.length > 0 ? (
          <div className="flex flex-col w-full gap-2">
            <input
              type="text"
              className="w-fit text-poppins pl-[15px] py-1 border border-blue-70 rounded-md"
              onChange={handleFilter}
              placeholder="Filter by name"
            />
            <DataTable
              columns={columns}
              data={records}
              selectableRows
              fixedHeader
              pagination
              striped
              pointerOnHover
              responsive
              className=""
              highlightOnHover
            />
          </div>
        ) : (
          <div className="flex items-center flex-col justify-center pt-2">
            <img src={staffImg} width="26%" alt="staff image" />
            <div className="flex flex-col items-center gap-2">
              <span className="font-poppins text-gray-500 text-[1.2rem] font-medium">
                You have no staff members added yet!
              </span>
              <DialogTrigger asChild>
                <button className="rounded-md bg-blue-70 text-white w-fit flexCenter p-2 gap-2">
                  <FiPlusSquare className="text-[1.4rem]" />
                  <span className="font-poppins">Add Staff</span>
                </button>
              </DialogTrigger>
            </div>
          </div>
        )}

        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle className="font-poppins text-blue-70 font-semibold text-[1.8rem]">
              Add Staff Members
            </DialogTitle>
            <DialogDescription>
              <p className="text-gray-600 text-[0.88rem] font-poppins">
                Fill in the details below to add new staff members to your team.
                Ensure that all required fields are completed accurately.
              </p>
            </DialogDescription>
          </DialogHeader>
          <form className="flex flex-col" onSubmit={createStaff}>
            <label className="font-poppins pb-3 text-[1.2rem] font-medium">
              Staff Profile:
            </label>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="h-[40px] font-montserrat bg-blue-100 rounded-md placeholder:text-gray-600 pl-[15px] outline-none font-medium"
                placeholder="Staff full-name"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[40px] font-montserrat bg-blue-100 rounded-md placeholder:text-gray-600 pl-[15px] outline-none font-medium"
                placeholder="Staff email"
              />
              <button
                className={`rounded-md bg-blue-70 text-white w-fit flexCenter px-5 py-2 gap-2 disabled:bg-slate-400 disabled:cursor-not-allowed transition-all ${isLoading}`}
                type="submit"
                disabled={isLoading}
              >
                <FiPlusSquare className="text-[1.4rem]" />
                <span className="font-poppins text-[1.1rem]">Create Staff</span>
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

StaffOverview.propTypes = {
  staffMembers: PropTypes.array.isRequired,
  setStaffMembers: PropTypes.func.isRequired,
};

export default StaffOverview;
