import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { FiPlusSquare } from "react-icons/fi";

import { MdCheckCircle, MdOutlineWarning } from "react-icons/md";
import { Toaster, toast } from "sonner";
import requestClient from "../../../../axios/axiosRequest";

const CreateTechnicianModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [lga, setLga] = useState("");
  // const [setUpId, setSetUpId] = useState("");
  const [isMainModalOpen, setIsMainModalOpen] = useState(false);
  // const [isDocModalOpen, setIsDocModalOpen] = useState(false);
  // const [copyId, setCopyId] = useState(false);

    const createTechnician = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      const formData = { name, email, phone, state, lga };
      try {
        const response = await requestClient.post(
          "/super-admin/technicians",
          formData
        );
        console.log(response.data);
        toast.success(
          <div className="px-2 py-3 flex items-center gap-2 justify-center">
            <MdCheckCircle className="text-[1.2rem]" />
            <span className="font-poppins text-[1.1rem]">
              Technician successfully added!
            </span>
          </div>
        );
        setIsMainModalOpen(false);
      } catch (error) {
        toast.warning(
          <div className="px-2 py-3 flex items-center gap-2 justify-center">
            <MdOutlineWarning className="text-[1.2rem]" />
            <span className="font-poppins text-[1.1rem]">
              Email already exists
            </span>
          </div>
        );
        console.error("Error", error);
      } finally {
        setIsLoading(false);
      }
    };

  return (
    <div>
      <Toaster position="top-right" richColors />
      <Dialog open={isMainModalOpen} onOpenChange={setIsMainModalOpen}>
        <DialogTrigger asChild>
          <button className="rounded-md bg-blue-70 text-white flexCenter p-2 gap-2">
            <FiPlusSquare className="text-[1.4rem]" />
            <span className="font-poppins">Add Technician</span>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle className="font-poppins text-blue-70 font-semibold text-[1.8rem]">
              Add New Technician
            </DialogTitle>
            <DialogDescription className="text-gray-600 text-[0.88rem] font-poppins">
              Add Technician&apos;s email address to onboard them
            </DialogDescription>
          </DialogHeader>
          <div>
            <form className="flex flex-col gap-4" onSubmit={createTechnician}>
              <div className="flex flex-col gap-4">
                <input
                  type="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-[40px] w-full font-montserrat bg-blue-100 rounded-md placeholder:text-gray-600 pl-[15px] outline-none font-medium"
                  placeholder="Technician name"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-[40px] w-full font-montserrat bg-blue-100 rounded-md placeholder:text-gray-600 pl-[15px] outline-none font-medium"
                  placeholder="Technician email"
                />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-[40px] w-full font-montserrat bg-blue-100 rounded-md placeholder:text-gray-600 pl-[15px] outline-none font-medium"
                  placeholder="Technician phone"
                />
                <input
                  type="text"
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="h-[40px] w-full font-montserrat bg-blue-100 rounded-md placeholder:text-gray-600 pl-[15px] outline-none font-medium"
                  placeholder="State"
                />
                <input
                  type="text"
                  required
                  value={lga}
                  onChange={(e) => setLga(e.target.value)}
                  className="h-[40px] w-full font-montserrat bg-blue-100 rounded-md placeholder:text-gray-600 pl-[15px] outline-none font-medium"
                  placeholder="LGA"
                />
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

export default CreateTechnicianModal;
