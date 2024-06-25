import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
const DeviceModalDocs = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const stepsData1 = [
    {
      heading: "Step 1",
      instruction: "Copy the setup id above.",
    },
    {
      heading: "Step 2",
      instruction: "Copy the setup id above.",
    },
    {
      heading: "Step 3",
      instruction: "Copy the setup id above.",
    },
    {
      heading: "Step 4",
      instruction: "Copy the setup id above.",
    },
  ];
  const stepsData2 = [
    {
      heading: "Step 5",
      instruction: "Copy the setup id above.",
    },
    {
      heading: "Step 6",
      instruction: "Copy the setup id above.",
    },
    {
      heading: "Step 7",
      instruction: "Copy the setup id above.",
    },
    {
      heading: "Step 8",
      instruction: "Copy the setup id above.",
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

  return (
    <div>
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          <CarouselItem>
            <Card>
              <CardContent className="flex flex-col py-4 gap-3">
                {stepsData1.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <h2 className="font-poppins text-[1.2rem] font-medium">
                      {item.heading}
                    </h2>
                    <p className="font-montserrat text-[0.8rem]">
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
                    <h2 className="font-poppins text-[1.2rem] font-medium">
                      {item.heading}
                    </h2>
                    <p className="font-montserrat text-[0.8rem]">
                      {item.instruction}
                    </p>
                  </div>
                ))}
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
