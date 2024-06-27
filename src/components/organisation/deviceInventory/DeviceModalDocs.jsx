import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaCheckCircle } from "react-icons/fa";
import requestClient from "../../../../axios/axiosRequest";
import linuxImg from "../../../assets/images/linux terminal itsa.png";
import setUpSuccess from "../../../assets/images/setup success img.png";
import windowsImg from "../../../assets/images/windows cmd itsa.png";

import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";

// eslint-disable-next-line react/prop-types
const DeviceModalDocs = ({ setUpId }) => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [setUpStatus, setSetupStatus] = useState("");
  const [deviceInfo, setDeviceInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const stepsData1 = [
    {
      heading: "Step 1",
      instruction: (
        <span>
          Download the Executable file{" "}
          <a
            href="https://drive.google.com/drive/folders/14_k3cRyZkzK1Sq4V-yK08d5yneGOI-Bc?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-70 cursor-pointer hover:underline"
          >
            here
          </a>
        </span>
      ),
    },
    {
      heading: "Step 2",
      instruction: "Copy the Setup Id above.",
    },
    {
      heading: "Step 3",
      instruction:
        "On your Terminal, Navigate to the directory where the executable is stored.",
    },
  ];
  const stepsData2 = [
    {
      heading: "Step 4",
      instruction: (
        <div className="">
          <h2 className="-mb-2 text-gray-500">Run the command:</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[0.9rem]">
                For Windows:
              </AccordionTrigger>
              <AccordionContent>
                <div>
                  <code className="text-[0.7rem]">
                    collectinfo.exe &lt;staff-email&gt; &lt;setup-id&gt;
                  </code>
                  <img src={windowsImg} alt="" />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-[0.9rem]">
                For Linux:
              </AccordionTrigger>
              <AccordionContent>
                <div>
                  <code className="text-[0.7rem]">
                    ./collectinfo &lt;staff-email&gt; &lt;setup-id&gt;
                  </code>
                  <img src={linuxImg} alt="" />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-[0.9rem]">
                For MacOs:
              </AccordionTrigger>
              <AccordionContent>
                <div>
                  <code className="text-[0.7rem]">
                    ./collectinfo &lt;staff-email&gt; &lt;setup-id&gt;
                  </code>
                  <img src={linuxImg} alt="" />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ),
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleData = async () => {
    try {
      setIsLoading(true);
      const response = await requestClient.get(
        `/sub-admin/setup-status/${setUpId}`
      );
      console.log(response.data);
      setSetupStatus(<span className="text-green-500">🥳 Added</span>);
      setDeviceInfo(response.data.device);
    } catch (error) {
      setSetupStatus(error.response.data);
      console.error("Error", error.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Carousel setApi={setApi} className="w-full max-w-[30rem]">
        <CarouselContent>
          <CarouselItem>
            <Card>
              <CardContent className="flex flex-col py-4 gap-3">
                {stepsData1.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <h2 className="font-poppins text-[1.1rem] font-semibold">
                      {item.heading}
                    </h2>
                    <p className="font-montserrat text-[1rem] font-medium">
                      {item.instruction}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardContent className="flex flex-col py-4 gap-3">
                {stepsData2.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <h2 className="font-poppins text-[1.1rem] font-semibold">
                      {item.heading}
                    </h2>
                    <p className="font-montserrat text-[1rem] font-medium">
                      {item.instruction}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardContent className="flex flex-col py-4 gap-3">
                <span className="font-poppins font-medium">
                  If Details are correct:
                </span>
                <img
                  src={setUpSuccess}
                  className="w-[full] h-[]"
                  alt="success image"
                />
                <button
                  className={`font-poppins bg-green-600 w-fit p-2 rounded-md text-[0.9rem] text-white flex items-center gap-2 disabled:bg-slate-400 disabled:cursor-not-allowed transition-all`}
                  disabled={isLoading}
                  onClick={handleData}
                >
                  {isLoading && (
                    <CgSpinner className="animate-spin text-[1.37rem]" />
                  )}
                  <FaCheckCircle className={`${isLoading && "hidden"}`} />
                  <span>Check Setup Status</span>
                </button>
                {setUpStatus && (
                  <span className="font-poppins text-red-500 font-medium">
                    {setUpStatus}
                  </span>
                )}
                {deviceInfo && (
                  <div className="flex flex-col gap-2">
                    <span>Hostname: {deviceInfo?.osInfo?.hostname}</span>
                    <span>Model: {deviceInfo?.system?.model}</span>
                    <span>Platform: {deviceInfo?.osInfo?.distro}</span>
                    <span>
                      CPU: {deviceInfo?.cpu?.manufacturer}{" "}
                      {deviceInfo?.cpu?.brand}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Page {current} of {count}
      </div>
    </div>
  );
};

export default DeviceModalDocs;
