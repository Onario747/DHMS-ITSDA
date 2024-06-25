import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";
import { MdContentCopy, MdOutlineWarning } from "react-icons/md";
import { RiFingerprintLine } from "react-icons/ri";
import { Toaster, toast } from "sonner";
import requestClient from "../../../../axios/axiosRequest";
import DeviceModalDocs from "./DeviceModalDocs";

const DeviceModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [setUpId, setSetUpId] = useState("");
  const [isMainModalOpen, setIsMainModalOpen] = useState(false);
  const [isDocModalOpen, setIsDocModalOpen] = useState(false);
  const [copyId, setCopyId] = useState(false);

  const createDevice = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = { email };
    try {
      const response = await requestClient.post(
        "/sub-admin/new-request",
        formData
      );
      toast(
        <div className="text-green-600 px-2 py-4 font-poppins font-medium flex items-center gap-2 justify-center">
          <FaCheckCircle className="text-[1.1rem]" />
          <span className="font-poppins text-[0.93rem]">
            {email} has been added successfully
          </span>
        </div>
      );
      const staffSetupId = response.data.setupId;
      setSetUpId(staffSetupId);
      setIsMainModalOpen(false);
      setIsDocModalOpen(true);
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

  // const closeDocModal = () => {
  //   setIsDocModalOpen(false);
  // };

  const copyTextToClipboard = async (text) => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
  };

  const handleCopyClick = () => {
    copyTextToClipboard(setUpId)
      .then(() => {
        setCopyId(true);
        setTimeout(() => setCopyId(false), 2000);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (copyId) {
      const timeoutId = setTimeout(() => setCopyId(false), 1500);
      return () => clearTimeout(timeoutId);
    }
  }, [copyId]);

  return (
    <div>
      <Toaster position="top-right" richColors />
      {!isDocModalOpen && (
        <Dialog open={isMainModalOpen} onOpenChange={setIsMainModalOpen}>
          <DialogTrigger asChild>
            <button className="rounded-md bg-blue-70 text-white flexCenter p-2 gap-2">
              <FiPlusSquare className="text-[1.4rem]" />
              <span className="font-poppins">Add New Device</span>
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle className="font-poppins text-blue-70 font-semibold text-[1.8rem]">
                Add New Device
              </DialogTitle>
              <DialogDescription className="text-gray-600 text-[0.88rem] font-poppins">
                Add Staff&apos;s email address to assign a new device to them
              </DialogDescription>
            </DialogHeader>
            <div>
              <form className="flex flex-col gap-4" onSubmit={createDevice}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-[40px] w-full font-montserrat bg-blue-100 rounded-md placeholder:text-gray-600 pl-[15px] outline-none font-medium"
                  placeholder="Staff email"
                />
                <button
                  className={`rounded-md bg-blue-70 text-white w-fit flexCenter px-5 py-2 gap-2 disabled:bg-slate-400 disabled:cursor-not-allowed transition-all ${
                    isLoading ? "loading" : ""
                  }`}
                  type="submit"
                  disabled={isLoading}
                >
                  <span className="font-poppins text-[1.1rem]">Next</span>
                </button>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      )}
      {isDocModalOpen && (
        <Dialog open={isDocModalOpen} onOpenChange={setIsDocModalOpen}>
          <DialogContent className="flex flex-col sm:max-w-[600px] items-center">
            <span className="poppins text-center text-[0.8rem] text-gray-500">
              Kindly follow the setup instructions to successfully get your
              device information
            </span>
            <div className="flex items-center justify-between">
              <div className="flex items-end bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 shadow-lg drop-shadow-xl px-4 py-2 rounded-lg gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <div className="flex item-center gap-1">
                      <span className="m-0 leading-none font-poppins text-gray-500 text-[0.9rem]">
                        Setup ID
                      </span>
                      <RiFingerprintLine className="text-gray-500" />
                    </div>
                    <span
                      className={`font-poppins text-[0.8rem] ${
                        copyId ? "flex text-green-600" : "hidden"
                      }`}
                    >
                      copied!
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <h1 className="font-poppins m-0 leading-none font-semibold text-[1.8rem] text-black">
                      {setUpId}
                    </h1>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <MdContentCopy
                            className={`text-[2.4rem] cursor-pointer border border-black rounded-md py-2`}
                            onClick={handleCopyClick}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Copy</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center flex-col">
              <div className="flex flex-col gap-2">
                <h1 className="font-poppins">Device Setup Instructions</h1>
                <DeviceModalDocs />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default DeviceModal;
