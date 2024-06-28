import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { FiPlusSquare } from "react-icons/fi";

import { MdOutlineWarning } from "react-icons/md";
import { Toaster, toast } from "sonner";
import requestClient from "../../../../axios/axiosRequest";
// import { SelectGroup } from "@radix-ui/react-select";

const RequestMaintenanceModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  // const [device, setDevice] = useState("");
  const [isMainModalOpen, setIsMainModalOpen] = useState("");

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  const handleDeviceChange = (value) => {
    setId(value);
  };

  const createTechnician = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = { id, description, priority };
    try {
      const response = await requestClient.post("/staff/maintenance", formData);
      console.log(response.data);
      const technicianProfile = response.data.technician;
      console.log(technicianProfile[0].name);
      toast.success(
        <div className="px-2 py-3 flex flex-col gap-2">
          <span className="font-poppins text-[1.1rem] text-green-500">
            Maintenance Request successful
          </span>
          <div className="flex flex-col gap-2 text-[1rem] font-medium">
            <span className="font-poppins font-bold text-[1rem]">
              Assigned to Technician:
            </span>
            <span className="font-poppins text-[1rem] font-medium">
              Name: {technicianProfile[0].name}
            </span>
            <span className="font-poppins">
              Phone: {technicianProfile[0].phone}
            </span>
            <span className="font-poppins">
              Location: {technicianProfile[0].state} {technicianProfile[0].lga}
            </span>
          </div>
        </div>,
        {
          duration: Infinity,
        }
      );
      setIsMainModalOpen(false);
    } catch (error) {
      toast.warning(
        <div className="px-2 py-3 flex items-center gap-2 justify-center">
          <MdOutlineWarning className="text-[1.2rem]" />
          <span className="font-poppins text-[1.1rem]">
            Error creating requests
          </span>
        </div>
      );
      console.error("Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAllDevices = async () => {
    try {
      const response = await requestClient.get("/staff/devices");
      const responseData = response.data;
      setOptions(responseData.devices);
      options.map((id) => console.log(id._id));
      console.log(responseData);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div>
      <Toaster closeButton position="top-right" />
      <Dialog open={isMainModalOpen} onOpenChange={setIsMainModalOpen}>
        <DialogTrigger asChild>
          <button
            className="rounded-md bg-blue-70 text-white flexCenter p-2 gap-2"
            onClick={() => {
              fetchAllDevices();
            }}
          >
            <FiPlusSquare className="text-[1.4rem]" />
            <span className="font-poppins">Request Maintenance</span>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle className="font-poppins text-blue-70 font-semibold text-[1.8rem]">
              Request Maintenance
            </DialogTitle>
            <DialogDescription className="text-gray-600 text-[0.88rem] font-poppins">
              Request Maintenance for your device.
            </DialogDescription>
          </DialogHeader>
          <div>
            <form className="flex flex-col gap-4" onSubmit={createTechnician}>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="h-[40px] w-full font-montserrat bg-blue-100 rounded-md placeholder:text-gray-600 pl-[15px] outline-none font-medium"
                  placeholder="Description"
                />
                <Select value={priority} onValueChange={handlePriorityChange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={id} onValueChange={handleDeviceChange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Device" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.map((item, index) => (
                      <SelectItem key={index} value={item._id}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <button
                className={`rounded-md bg-blue-70 text-white w-fit flexCenter px-5 py-2 gap-2 disabled:bg-slate-400 disabled:cursor-not-allowed transition-all ${
                  isLoading ? "loading" : ""
                }`}
                type="submit"
                disabled={isLoading}
              >
                {isLoading && (
                  <CgSpinner className="animate-spin text-[1.37rem]" />
                )}
                <span className="font-poppins text-[1.1rem]">Add</span>
              </button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RequestMaintenanceModal;
