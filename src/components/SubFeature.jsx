import Marquee from "react-fast-marquee";

const SubFeature = () => {
  const keyFeatures = [
    { label: "Device Monitoring and Alerts" },
    { label: "Performance Optimization" },
    { label: "Security and Protection" },
    { label: "Inventory Management" },
    { label: "Remote Access and Control" },
    { label: "User-Friendly Dashboard" },
    { label: "Comprehensive Reporting" },
  ];
  const keyFeatures2 = [
    { label: "Scalability and Integration" },
    { label: "Data-Driven Decisions" },
    { label: "Proactive Maintenance" },
    { label: "Uninterrupted Operations" },
    { label: "Compliance and Audit Reporting" },
    { label: "Customizable Dashboards" },
    { label: "Real-Time Analytics and Insights" },
  ];
  return (
    <section className="max-container py-[4rem] max-sm:py-[3rem] flex items-center flex-col justify-center bg-[#f0f3ff]">
      <h1 className="font-montserrat padding-x text-[2rem] max-md:text-[1.1rem] text-center font-semibold max-md:font-bold">
        Enhance <span className="text-[#0056b3]">Efficiency</span> and Control
        of Your <br className="max-sm:hidden" /> Devices
      </h1>
      <p className="font-poppins padding-x text-center text-[0.9rem] max-sm:text-[0.7rem] pt-2">
        Empower your tech infrastructure with cutting-edge solutions{" "}
        <br className="max-sm:hidden" /> for seamless device management.
      </p>
      <Marquee
        gradient={true}
        gradientWidth={90}
        autoFill
        pauseOnClick
        direction="right"
      >
        <div className="flexCenter gap-3 pt-4">
          {keyFeatures.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 border border-gray-500 shadow-sm rounded-md p-3 max-sm:p-2"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              <p className="font-poppins text-[0.9rem] max-sm:text-[0.8rem]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Marquee>
      <Marquee gradient={true} gradientWidth={90} autoFill pauseOnClick>
        <div className="flexCenter gap-2 pt-3">
          {keyFeatures2.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 border border-gray-500 shadow-sm rounded-md p-3 max-sm:p-2"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              <p className="font-poppins text-[0.9rem] max-sm:text-[0.8rem]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default SubFeature;
